#!/usr/bin/env python3
"""Wallet-operated enrollment of the preserved 100,011-block, 100-wallet fixture.

The Python code orchestrates disposable test services. Every owner enrolls by
calling the native wallet's audit RPC; the harness supplies no viewing secrets.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
from audit_complex_regtest import ComplexChain, atomic_json


class WalletAuditFixture(ComplexChain):
    activation = 100012

    def launch(self):
        super().launch()
        # The first canonical proof reconstruction after restart verifies tens
        # of thousands of signatures before returning a mining template.
        self.daemon.timeout = 1800
        for service in self.services + self.observers:
            # Refreshing a large inventory under a CPU quota can also exceed
            # the ordinary three-minute RPC timeout.
            service.timeout = 1800
            service.call('auto_refresh', {'enable': False})
        print('Reconstructing confirmed native audit evidence after startup', flush=True)
        status = self.daemon.call('get_lineage_audit_status')
        print(f'Native audit reconstruction complete at candidate {status["candidate_height"]}', flush=True)

    def start(self, name, command, rpc, ready_method):
        if name == 'daemon':
            command += ['--regtest-lineage-audit-duration', '0']  # Historical fixture policy.
        command += ['--regtest-lineage-audit-height', str(self.activation)]
        return super().start(name, command, rpc, ready_method)

    def mine_audit(self, blocks):
        if not blocks:
            return
        response = self.daemon.call('generateblocks', {'amount_of_blocks': blocks,
            'wallet_address': self.sink, 'prev_block': ''})
        assert len(response['blocks']) == blocks


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--fixture', type=Path, required=True)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    parser.add_argument('--root', type=Path)
    parser.add_argument('--upgrade-binaries', action='store_true', help='Record new binaries while resuming this test fixture')
    parser.add_argument('--confirm-only', action='store_true', help='Resume already saved owner enrollments and verify every wallet')
    args = parser.parse_args()
    fixture = args.fixture.resolve()
    state = json.loads((fixture / 'state.json').read_text())
    assert state['fixture'] == 'salvium-complex-audit-v1' and state['checkpoint_height'] >= 100000
    assert len(state['addresses']) == 100 and len(state['exchange_addresses']) == 1000
    root = args.root.resolve() if args.root else Path(tempfile.mkdtemp(prefix='salvium-wallet-complex-v2-'))
    assert root.name.startswith('salvium-wallet-complex-v2-') and root.is_relative_to(Path(tempfile.gettempdir()).resolve())
    print(root, flush=True)
    bins = root / 'bin'
    if not args.root:
        bins.mkdir()
        hashes = {}
        for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-wallet-cli', 'salvium-blockchain-verification'):
            shutil.copy2(args.binaries.resolve() / name, bins / name)
            with (bins / name).open('rb') as stream:
                hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
        atomic_json(root / 'binary-sha256.json', hashes)
        db = root / 'chain/fake/lmdb'
        db.mkdir(parents=True)
        subprocess.run([str(bins / 'salvium-blockchain-verification'), '--db-path',
            str(fixture / 'chain/fake/lmdb'), '--copy-db', str(db)], check=True)
        shutil.copy2(fixture / 'state.json', root / 'state.json')
        for index in range(100):
            directory = root / f'service-{index % 4}'
            directory.mkdir(exist_ok=True)
            for suffix in ('', '.keys'):
                name = f'wallet-{index:03d}{suffix}'
                shutil.copy2(fixture / f'service-{index % 4}' / name, directory / name)
    if args.root and args.upgrade_binaries:
        previous = json.loads((root / 'binary-sha256.json').read_text())
        atomic_json(root / 'previous-binary-sha256.json', previous)
        hashes = {}
        for name in previous:
            shutil.copy2(args.binaries.resolve() / name, bins / name)
            with (bins / name).open('rb') as stream:
                hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
        atomic_json(root / 'binary-sha256.json', hashes)
    chain = WalletAuditFixture(bins, root)
    try:
        chain.launch()
        chain.initialize_wallets()
        # A separate disposable recipient keeps newly mined audit-carrier rewards
        # outside the fixed 100-owner acceptance snapshot.
        observer = chain.observers[0]
        observer.call('open_wallet' if (root / 'service-4/audit-carrier.keys').exists() else 'create_wallet',
            {'filename': 'audit-carrier', 'password': '', 'language': 'English'})
        observer.call('auto_refresh', {'enable': False})
        chain.sink = observer.call('get_address', {'account_index': 0, 'carrot': True})['addresses'][0]['address_carrot']
        observer.call('close_wallet')
        chain.mine_audit(max(0, chain.activation - chain.tip()))

        def enroll_slot(slot):
            for index in range(slot, 100, 4):
                result = chain.wallets[index].call('audit')
                # Retain counts and finite proofs for native adversarial tests.
                atomic_json(root / f'wallet-{index:03d}-enrollment.json', result)
                print(f'Wallet {index}: {len(result["outputs"])} outputs/stakes, {result["pending_batches"]} pending batches', flush=True)
        if not args.confirm_only:
            with ThreadPoolExecutor(max_workers=4) as pool:
                list(pool.map(enroll_slot, range(4)))
        pending = sum(json.loads((root / f'wallet-{i:03d}-enrollment.json').read_text())['pending_batches'] for i in range(100))
        if args.confirm_only:
            pending = len(list((root / 'chain/fake/lmdb/wallet-audit-queue-v2').glob('[0-9a-f]' * 64)))
        for offset in range(0, pending + 12, 10):
            chain.mine_audit(min(10, pending + 12 - offset))
            print(f'Audit confirmation height {chain.tip()}', flush=True)
        results = [None] * 100
        def check_slot(slot):
            for index in range(slot, 100, 4):
                result = chain.wallets[index].call('audit', {'status_only': True})
                atomic_json(root / f'wallet-{index:03d}-status.json', result)
                assert result['bad_count'] == 0 and result['unresolved_count'] == 0 and result['stake_unresolved'] == 0, (index, {k: v for k, v in result.items() if k not in ('outputs', 'proofs')})
                results[index] = result
                print(f'Verified wallet {index}: {result["good_count"]} good unspent outputs', flush=True)
        with ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(check_slot, range(4)))
        exchange = results[99]
        assert len({row['subaddress'] for row in exchange['outputs'] if not row['stake']}) >= 1000
        immature = [row for result in results for row in result['outputs'] if row['stake'] and row['immature'] and not row['spent']]
        assert len(immature) >= 20, len(immature)
        summary = {'status': 'COMPLEX_WALLET_AUDIT_PASS', 'snapshot_height': state['checkpoint_height'],
            'completion_tip': chain.tip(), 'wallets': 100, 'exchange_subaddresses': 1000,
            'immature_good_stakes': len(immature), 'audit_carrier_blocks': chain.tip() - state['checkpoint_height'],
            'confirmation_blocks_requested_this_run': pending + 12,
            'good_atomic': sum(r['good'] for r in results), 'bad_atomic': sum(r['bad'] for r in results),
            'unresolved_atomic': sum(r['unresolved'] for r in results),
            'good_output_count': sum(r['good_count'] for r in results),
            'bad_output_count': sum(r['bad_count'] for r in results),
            'good_locked_stake_principal': sum(r['stake_good'] for r in results),
            'scope': 'All accounts of the 100 fixture wallets; treasury and new audit-carrier mining recipient excluded',
            'binary_sha256': json.loads((root / 'binary-sha256.json').read_text())}
        atomic_json(root / 'result.json', summary)
        print(json.dumps(summary), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
