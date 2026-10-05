#!/usr/bin/env python3
"""Full audit carriers, packing, confirmation identities and release on a disposable chain."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile
import time

from audit_gate_regtest import AuditChain, COIN
from audit_many_inputs_regtest import varint
from audit_release_regtest import RpcError


class CapacityChain(AuditChain):
    activation = 2000
    audit_duration = 10080


def split_proofs(encoded):
    """Decode the existing v2 proof boundaries without changing signed bytes."""
    raw = bytes.fromhex(encoded)
    assert raw[0] == 2
    offset = 34

    def read():
        nonlocal offset
        value, shift = 0, 0
        while True:
            byte = raw[offset]
            offset += 1
            value |= (byte & 127) << shift
            if not byte & 128:
                return value
            shift += 7

    read()
    header = raw[:offset]
    count = read()
    proofs = []
    for _ in range(count):
        start = offset
        offset += 32  # canonical transaction
        read()  # output index
        offset += 1  # stake flag
        read()  # public amount
        offset += 33  # commitment offset flag and key image
        for _ in range(2):
            assert read() == 1  # one-member T-CLSAG response vector
            offset += 32
        offset += 64  # challenge and commitment image; I is reconstructed
        proofs.append(raw[start:offset])
    assert offset == len(raw)
    return header, proofs


def run(chain):
    chain.mine(1024, fund_miner=True)
    chain.mine(chain.activation - 1 - chain.tip())
    limits = chain.state([])
    assert limits['max_output_proofs_per_block'] == 512 and limits['work_items_per_block'] == 1024, limits
    preview = chain.wallets[0].call('audit', {'do_not_relay': True})
    parsed = [split_proofs(value) for value in preview['proofs']]
    assert len(parsed) == 2 and all(len(proofs) == 512 for _, proofs in parsed), [len(p) for _, p in parsed]
    assert parsed[0][0] == parsed[1][0]
    header, first = parsed[0]
    # Eight independent cached batches plus one full wallet batch. Each batch
    # keeps its own ID when several share the same mined block.
    packed = [(header + varint(64) + b''.join(first[i:i + 64])).hex() for i in range(0, 512, 64)]
    packed.append(preview['proofs'][1])
    ids, submit_seconds = [], []
    for data in packed:
        started = time.monotonic()
        ids.append(chain.daemon.call('submit_lineage_disclosure', {'data': data})['disclosure_id'])
        submit_seconds.append(time.monotonic() - started)
    excess = (header + varint(513) + b''.join(first) + parsed[1][1][0]).hex()
    for data in (excess, '00' * (limits['max_enrollment_bytes_per_block'] + 1)):
        try:
            chain.daemon.call('submit_lineage_disclosure', {'data': data})
        except RpcError:
            pass
        else:
            raise AssertionError('Oversized proof count or bytes accepted')
    chain.wallets[0].call('set_attribute', {'key': 'sal1-audit-v2', 'value': '\n'.join(packed) + '\n'})
    chain.wallets[0].call('store')
    mined_seconds = []
    for _ in range(2):
        started = time.monotonic()
        chain.mine(1)
        mined_seconds.append(time.monotonic() - started)
    status = chain.daemon.call('get_lineage_audit_status', {'disclosure_ids': ids})
    assert status['disclosure_heights'] == [chain.activation] * 8 + [chain.activation + 1], status
    blobs = [chain.daemon.call('get_block', {'height': chain.activation + i})['blob'] for i in range(2)]
    assert all(data in blobs[0] for data in packed[:8]) and packed[-1] in blobs[1]
    report = chain.wallets[0].call('audit', {'status_only': True})
    assert report['good_count'] == 1024 and not report['unresolved_count'], report
    assert sorted({row['release_height'] for row in report['outputs']}) == [chain.activation + 10, chain.activation + 11]
    chain.daemon.request('/pop_blocks', {'nblocks': 2})
    detached = chain.daemon.call('get_lineage_audit_status', {'disclosure_ids': ids})
    assert detached['disclosure_heights'] == [0] * len(ids), detached
    for blob in blobs:
        chain.daemon.call('submit_block', [blob])
    assert chain.daemon.call('get_lineage_audit_status', {'disclosure_ids': ids}) == status
    chain.mine(chain.activation + 8 - chain.tip())
    assert not chain.daemon.call('get_lineage_audit_outputs').get('outputs'), 'C + 9 carrier became spendable'
    chain.mine(1)
    assert len(chain.daemon.call('get_lineage_audit_outputs')['outputs']) == 512, 'C + 10 first carrier did not release'
    chain.mine(1)
    population = chain.daemon.call('get_lineage_audit_outputs')
    assert len(population['outputs']) == 1000 and population['more']
    tail = chain.daemon.call('get_lineage_audit_outputs', {'from_index': population['outputs'][-1]['index'] + 1})
    assert len(tail['outputs']) == 24 and not tail['more']
    assert not chain.wallets[0].call('audit').get('proofs'), 'Packed evidence was signed again'
    assert not chain.wallets[0].call('audit')['pending_batches'], 'Packed batch IDs were lost'
    spend = chain.transfer(0, 1, COIN, relay=False)
    chain.submit(spend, True)
    chain.mine(1)
    assert spend['tx_hash'] in chain.block(chain.tip())['tx_hashes']
    snapshot = chain.wallets[0].call('audit', {'status_only': True})
    daemon = chain.processes[0]
    memory = [line for line in Path(f'/proc/{daemon.pid}/status').read_text().splitlines()
              if line.startswith(('VmRSS:', 'VmHWM:'))]
    command = list(daemon.args)
    assert '--regtest' in command and Path(command[command.index('--data-dir') + 1]).is_relative_to(chain.root)
    daemon.terminate()
    daemon.wait(timeout=20)
    chain.start('capacity-daemon-restarted', command, chain.daemon, 'get_info')
    assert chain.wallets[0].call('audit', {'status_only': True}) == snapshot
    return {'status': 'AUDIT_CAPACITY_PASS', 'proofs': 1024, 'proofs_per_block': 512,
        'packed_wallet_batches': 8, 'max_batch_bytes': max(len(data) // 2 for data in packed),
        'submit_seconds': submit_seconds, 'full_block_seconds': mined_seconds, 'daemon_memory': memory,
        'checks': ['512_proofs_in_each_block', 'small_batches_packed', 'per_batch_confirmation_ids',
            'combined_limits', 'reorg_and_replay', 'C_plus_9_and_C_plus_10', 'cleared_spend', 'restart']}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-capacity-'))
    print(root, flush=True)
    binaries = root / 'bin'
    binaries.mkdir()
    for name in ('salviumd', 'salvium-wallet-rpc'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
    chain = CapacityChain(binaries, root)
    try:
        chain.launch()
        result = run(chain)
        result['binary_sha256'] = {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in binaries.iterdir()}
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
