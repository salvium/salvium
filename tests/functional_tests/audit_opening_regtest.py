#!/usr/bin/env python3
"""Audit accepted opening SAL1 and subsequent activity, without repeating a migration."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile

from audit_gate_regtest import AuditChain, COIN
from audit_stake_gate_regtest import freeze_other_outputs


class OpeningChain(AuditChain):
    opening = 135

    def start(self, name, command, rpc, ready_method):
        if name == 'daemon':
            command += ['--regtest-lineage-audit-opening-height', str(self.opening)]
        return super().start(name, command, rpc, ready_method)


def run(chain):
    chain.mine(100, fund_miner=True)
    old_funding = chain.transfer(0, 1, 50 * COIN)
    chain.mine(11)
    opening_receipt = chain.transfer(1, 2, 5 * COIN)
    chain.mine(11)
    active_stake = chain.transfer(1, 1, 12 * COIN, tx_type=6)
    chain.mine(11)
    chain.mine(chain.opening - chain.tip())
    opening_hash = chain.daemon.call('get_block_header_by_height', {'height': chain.opening})['block_header']['hash']
    print(f'Accepted opening inventory at {chain.opening}: {opening_hash}', flush=True)

    later_receipt = chain.transfer(1, 2, 3 * COIN)
    chain.mine(11)
    # A scheduled node rebuilds mining history before accepting RPC work,
    # including when it starts before the audit fork itself.
    prepared_tip = chain.tip()
    assert chain.opening < prepared_tip < chain.activation
    daemon = chain.processes[0]
    command = list(daemon.args)
    assert '--regtest' in command and '--config-file' in command
    assert Path(command[command.index('--data-dir') + 1]).is_relative_to(chain.root)
    daemon.terminate()
    daemon.wait(timeout=20)
    chain.start('opening-before-fork-restarted', command, chain.daemon, 'get_info')
    daemon = chain.processes[-1]
    assert f'Audit mining history prepared through block {prepared_tip}' in (
        chain.root / 'opening-before-fork-restarted.log').read_text()
    for wallet in chain.wallets:
        wallet.call('refresh')
    later = [row for row in chain.outputs(2) if row['tx_hash'] == later_receipt['tx_hash']]
    assert len(later) == 1
    freeze_other_outputs(chain, chain.wallets[2], later[0]['key_image'])
    signed = chain.transfer(2, 0, COIN, relay=False)
    chain.mine(chain.activation - chain.tip())
    chain.submit(signed, False)

    bob = chain.wallets[2].call('audit')
    chain.mine(bob['pending_batches'] + 15)
    pending = chain.wallets[2].call('audit', {'status_only': True})
    assert pending['opening_height'] == chain.opening
    assert pending['good'] == 5 * COIN and pending['unresolved'] == 3 * COIN and not pending['bad_count'], pending
    assert any(row['transaction'] == opening_receipt['tx_hash'] and row['state'] == 'AUDIT_PASSED'
        for row in pending['outputs']), pending
    assert any(row['transaction'] == later_receipt['tx_hash'] and row['state'] == 'PENDING'
        for row in pending['outputs']), pending
    chain.submit(signed, False)

    alice = chain.wallets[1].call('audit')
    assert all(row['transaction'] != old_funding['tx_hash'] for row in alice['outputs']), alice
    assert any(row['transaction'] == active_stake['tx_hash'] and row['stake'] for row in alice['outputs']), alice
    chain.mine(alice['pending_batches'] + 15)
    cleared = chain.wallets[2].call('audit', {'status_only': True})
    assert cleared['good'] == 8 * COIN and not cleared['unresolved_count'] and not cleared['bad_count'], cleared
    stake = chain.wallets[1].call('audit', {'status_only': True})
    assert stake['stake_good'] == 12 * COIN and stake['stake_immature'] == 12 * COIN and not stake['stake_unresolved_count'], stake
    # Earlier owners never enroll: their completed audit is the accepted root.
    old_images = [row['key_image'] for row in chain.outputs(0)]
    assert old_images and all(row['state'] == 'UNDISCLOSED' for row in chain.state(old_images)['entries'])
    chain.submit(signed, True)
    chain.mine(1)
    assert signed['tx_hash'] in chain.block(chain.tip())['tx_hashes']

    # New miner issuance must continue from the accepted opening emission state.
    chain.mine(70, fund_miner=True)
    miner = chain.wallets[0].call('audit')
    chain.mine(miner['pending_batches'] + 15)
    mining = chain.wallets[0].call('audit', {'status_only': True})
    assert not mining['bad_count'] and not mining['unresolved_count'], mining
    assert any(chain.transaction(row['transaction'])[1] > chain.opening and row['state'] in ('MATURING', 'AUDIT_PASSED')
        for row in mining['outputs']), mining
    images = [row['key_image'] for row in chain.outputs(0)]
    before_restart = chain.state(images)['entries']
    command = list(daemon.args)
    assert '--regtest' in command and '--config-file' in command
    assert Path(command[command.index('--data-dir') + 1]).is_relative_to(chain.root)
    daemon.terminate()
    daemon.wait(timeout=20)
    chain.start('opening-daemon-restarted', command, chain.daemon, 'get_info')
    assert chain.state(images)['entries'] == before_restart, 'Opening-boundary replay changed clearance'
    after_restart = chain.wallets[0].call('audit', {'status_only': True})
    assert after_restart['opening_height'] == chain.opening and after_restart['good'] == mining['good']
    return {'status': 'OPENING_INVENTORY_AUDIT_PASS', 'opening_height': chain.opening,
        'mining_history_prepared_before_fork_rpc': True,
        'opening_block_hash': opening_hash, 'tip': chain.tip(),
        'opening_ownership_without_previous_owners': True,
        'post_boundary_receipt_requires_new_ancestry': True,
        'pre_boundary_spent_history_excluded': True,
        'active_opening_stake_principal_audited': True,
        'post_boundary_miner_emission_verified': True,
        'opening_boundary_restart_rebuild': True,
        'post_boundary_spend_confirmed': signed['tx_hash']}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-opening-'))
    binaries = root / 'bin'
    binaries.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
        with (binaries / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    print(root, flush=True)
    chain = OpeningChain(binaries, root)
    try:
        chain.launch()
        result = run(chain)
        result['binary_sha256'] = hashes
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
