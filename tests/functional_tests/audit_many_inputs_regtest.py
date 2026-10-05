#!/usr/bin/env python3
"""Oversized multi-transaction audit batches and saved-proof recovery."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile

from audit_gate_regtest import AuditChain
from audit_release_regtest import RpcError


class ManyInputsChain(AuditChain):
    activation = 5000


def varint(value):
    result = bytearray()
    while value > 127:
        result.append((value & 127) | 128)
        value >>= 7
    result.append(value)
    return bytes(result)


def parts(encoded):
    raw = bytes.fromhex(encoded)
    assert raw[0] == 2
    offset = 34  # version, genesis and network

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
    read()  # activation height
    header = raw[:offset]
    count = read()
    return header, count, raw[offset:]


def run(chain):
    sweep_ids = []
    funding_inputs = 0
    funding_bytes = 0
    # Thirty-two 64-input transactions exceed the current 1 MiB verification
    # budget while their ownership proofs still fit the carrier.
    # Build fresh wallets so earlier saved enrollment cannot suppress the preview.
    for index in range(32):
        chain.mine(64, fund_miner=True)
        chain.mine(60)
        sweep = chain.wallets[0].call('sweep_all', {'address': chain.addresses[1],
            'account_index': 0, 'subaddr_indices': [0], 'priority': 1, 'ring_size': 16,
            'outputs': 1, 'unlock_time': 0, 'asset_type': 'SAL1'})
        # Local relay changes state asynchronously. Confirm actual inclusion,
        # rather than assuming the immediately following template sees it.
        remaining = set(sweep['tx_hash_list'])
        for attempt in range(10):
            chain.mine(1)
            remaining.difference_update(chain.block(chain.tip())['tx_hashes'])
            if not remaining:
                break
        assert not remaining, remaining
        for txid in sweep['tx_hash_list']:
            tx, _ = chain.transaction(txid)
            funding_inputs += len(tx['vin'])
            raw = chain.daemon.request('/get_transactions', {
                'txs_hashes': [txid], 'decode_as_json': False, 'prune': False})['txs'][0]['as_hex']
            funding_bytes += len(bytes.fromhex(raw))
            sweep_ids.append(txid)
        print(f'consolidations {index + 1}/32, inputs {funding_inputs}, bytes {funding_bytes}', flush=True)
    assert len(sweep_ids) == 32 and funding_inputs >= 2048
    assert funding_bytes > 1024 * 1024, funding_bytes
    chain.mine(chain.activation - chain.tip())
    wallet = chain.wallets[1]
    preview = wallet.call('audit', {'do_not_relay': True})
    assert len(preview['proofs']) >= 3, preview
    chunks = [parts(proof) for proof in preview['proofs']]
    assert len({chunk[0] for chunk in chunks}) == 1
    total = sum(chunk[1] for chunk in chunks)
    assert 1 < total <= 32, total
    merged = (chunks[0][0] + varint(total) + b''.join(chunk[2] for chunk in chunks)).hex()
    try:
        chain.daemon.call('submit_lineage_disclosure', {'data': merged})
    except RpcError as error:
        assert 'Audit enrollment exceeds verification budget' in str(error), error
    else:
        raise AssertionError('Fixture did not exceed the native verification budget')
    # Reproduce an older cache containing valid signatures in one large batch.
    wallet.call('set_attribute', {'key': 'sal1-audit-v2', 'value': merged + '\n'})
    wallet.call('store')
    wallet.call('refresh')
    saved = wallet.call('get_attribute', {'key': 'sal1-audit-v2'})['value'].splitlines()
    assert len(saved) > 1 and merged not in saved, 'Saved enrollment was not split for retry'
    repaired = [parts(proof) for proof in saved]
    assert sum(chunk[1] for chunk in repaired) == total
    assert b''.join(chunk[2] for chunk in repaired) == b''.join(chunk[2] for chunk in chunks), 'Repacking changed signed evidence'
    chain.mine(len(saved) + 12)
    pending = wallet.call('audit', {'status_only': True})
    assert pending['unresolved'] > 0 and not pending['bad_count'], pending
    roots = chain.wallets[0].call('audit')
    chain.mine(roots['pending_batches'] + 15)
    result = wallet.call('audit', {'status_only': True})
    assert result['state'] == 'AUDIT_PASSED' and not result['unresolved_count'] and not result['bad_count'], result
    assert result['good'] == chain.balance(1)['balance'], result
    assert not wallet.call('audit').get('proofs', []), 'Repaired evidence was unnecessarily signed again'
    return {'status': 'AUDIT_MANY_INPUTS_PASS', 'funding_inputs': funding_inputs,
        'funding_bytes': funding_bytes, 'native_byte_budget': 1024 * 1024,
        'consolidation_transactions': sweep_ids, 'prepared_batches': len(chunks),
        'repaired_batches': len(repaired), 'signatures_preserved': True,
        'wallet': result, 'tip': chain.tip()}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-many-inputs-'))
    binaries = root / 'bin'
    binaries.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
        with (binaries / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    print(root, flush=True)
    chain = ManyInputsChain(binaries, root)
    try:
        chain.launch()
        result = run(chain)
        result['binary_sha256'] = hashes
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps({key: value for key, value in result.items() if key != 'wallet'}), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
