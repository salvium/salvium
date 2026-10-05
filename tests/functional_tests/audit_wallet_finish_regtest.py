#!/usr/bin/env python3
"""Finish the evolving matrix chain with all-owner counts and 20 immature stakes."""
import argparse
from concurrent.futures import ThreadPoolExecutor
import json
from pathlib import Path
import tempfile
from audit_complex_regtest import atomic_json
from audit_wallet_complex_regtest import WalletAuditFixture
from audit_wallet_matrix_regtest import confirm


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--matrix', type=Path, required=True)
    parser.add_argument('--matrix-suite', type=Path,
        help='Completed 1,000-case suite when this matrix is one of four disjoint shards')
    args = parser.parse_args()
    root = args.matrix.resolve()
    assert root.name.startswith('salvium-wallet-matrix-v2-')
    assert root.is_relative_to(Path(tempfile.gettempdir()).resolve())
    matrix = json.loads((root / 'result.json').read_text())
    assert matrix['status'] == 'WALLET_MATRIX_PASS'
    cases = matrix['cases']
    if args.matrix_suite:
        suite = json.loads((args.matrix_suite.resolve() / 'result.json').read_text())
        assert suite['status'] == 'WALLET_MATRIX_SUITE_PASS' and suite['cases'] == 1000
        assert any(Path(s['root']) == root and s['final_tip'] == matrix['final_tip'] for s in suite['shards'])
        cases = suite['cases']
    assert cases >= 1000
    print(root, flush=True)
    chain = WalletAuditFixture(root / 'bin', root)
    try:
        chain.launch()
        chain.initialize_wallets()
        observer = chain.observers[0]
        observer.call('open_wallet', {'filename': 'matrix-carrier', 'password': ''})
        chain.sink = observer.call('get_address', {'account_index': 0, 'carrot': True})['addresses'][0]['address_carrot']
        observer.call('close_wallet')

        def enroll_slot(slot):
            for index in range(slot, 100, 4):
                result = chain.wallets[index].call('audit')
                atomic_json(root / f'finish-wallet-{index:03d}-enrollment.json', result)
                print(f'Final all-account enrollment: wallet {index}', flush=True)
        with ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(enroll_slot, range(4)))
        queued = len(list((root / 'chain/fake/lmdb/wallet-audit-queue-v2').glob('[0-9a-f]' * 64)))
        chain.mine_audit(queued + 12)

        # The matrix has advanced beyond some original stakes' terms. Add real
        # late stakes so this final, fully audited copy also retains immature
        # good principal in at least twenty distinct owner wallets.
        final_stakes = []
        for index in range(50, 70):
            action = chain.send(f'native-final-stake-{index}', index,
                [(chain.addresses[index], 2 * 100_000_000)], tx_type=6)
            confirm(chain, action['txid'])
            chain.wallets[index].call('audit')
            chain.mine_audit(2)
            final_stakes.append(action['txid'])
            print(f'Late good stake enrolled: wallet {index}', flush=True)
        queued = len(list((root / 'chain/fake/lmdb/wallet-audit-queue-v2').glob('[0-9a-f]' * 64)))
        chain.mine_audit(queued + 12)
        results = [None] * 100
        def check_slot(slot):
            for index in range(slot, 100, 4):
                result = chain.wallets[index].call('audit', {'status_only': True})
                atomic_json(root / f'finish-wallet-{index:03d}-status.json', result)
                assert result['bad_count'] == result['unresolved_count'] == 0, (index, result)
                assert result['stake_bad_count'] == result['stake_unresolved_count'] == 0, (index, result)
                results[index] = result
                print(f'Final inventory verified: wallet {index}', flush=True)
        with ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(check_slot, range(4)))
        stake_owners = {index for index, result in enumerate(results) if any(
            row['stake'] and row['immature'] and not row['spent'] and row['transaction'] in final_stakes
            and row['state'] == 'AUDIT_PASSED' for row in result['outputs'])}
        assert stake_owners == set(range(50, 70)), stake_owners
        report = {'status': 'WALLET_MATRIX_FINAL_INVENTORY_PASS', 'matrix_cases': cases,
            'matrix_shard_cases': matrix['cases'],
            'matrix_tip': matrix['final_tip'], 'final_tip': chain.tip(), 'wallets': 100,
            'immature_good_stake_wallets': len(stake_owners), 'late_stake_transactions': final_stakes,
            'good_atomic': sum(r['good'] for r in results), 'good_output_count': sum(r['good_count'] for r in results),
            'bad_atomic': sum(r['bad'] for r in results), 'bad_output_count': sum(r['bad_count'] for r in results),
            'unresolved_atomic': sum(r['unresolved'] for r in results),
            'good_locked_stake_principal': sum(r['stake_good'] for r in results),
            'binary_sha256': json.loads((root / 'binary-sha256.json').read_text()),
            'scope': 'All accounts of the 100 fixture wallets; treasury and separate mining-carrier wallet excluded'}
        atomic_json(root / 'finish-result.json', report)
        print(json.dumps(report), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
