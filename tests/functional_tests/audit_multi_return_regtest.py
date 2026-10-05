#!/usr/bin/env python3
"""Check every receipt is returned, using the current Carrot output limit.

Issue #13 reported fifteen receipts in one legacy payment. Carrot permits eight
outputs total, including change, so this regression sends 7 + 7 + 1 receipts.
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile

from audit_gate_regtest import AuditChain, COIN
from audit_window_regtest import rejected


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-multi-return-'))
    print(root, flush=True)
    binaries = root / 'bin'; binaries.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
        with (binaries / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    chain = AuditChain(binaries, root)
    try:
        chain.launch()
        chain.mine(100, fund_miner=True)
        chain.transfer(0, 1, 30 * COIN)
        chain.mine(11)
        destinations, minors = [], []
        for _ in range(15):
            minor = chain.wallets[2].call('create_address', {'account_index': 0})['address_index']
            minors.append(minor)
            address = chain.wallets[2].call('get_address', {'account_index': 0,
                'address_index': [minor], 'carrot': True})['addresses'][0]['address_carrot']
            destinations.append({'address': address, 'amount': COIN, 'asset_type': 'SAL1'})
        payments = []
        for offset in range(0, len(destinations), 7):
            payment = chain.wallets[1].call('transfer', {'destinations': destinations[offset:offset + 7],
                'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3,
                'account_index': 0, 'priority': 1, 'ring_size': 16})
            payments.append(payment['tx_hash'])
            chain.mine(11)

        def receipts():
            return [row for row in chain.wallets[2].call('incoming_transfers', {
                'transfer_type': 'all', 'account_index': 0, 'subaddr_indices': minors})['transfers']
                if row['tx_hash'] in payments]
        received = receipts()
        assert len(received) == 15 and sum(row['amount'] for row in received) == 15 * COIN
        returned = [chain.wallets[2].call('return_payment', {'txid': payment}) for payment in payments]
        returned_ids = {txid for result in returned for txid in result['tx_hash_list']}
        assert returned_ids
        remaining = set(returned_ids)
        for _ in range(20):
            chain.mine(1)
            remaining.difference_update(chain.block(chain.tip())['tx_hashes'])
            if not remaining:
                break
        assert not remaining, remaining
        spent = {entry['key']['k_image'] for txid in returned_ids
            for entry in chain.transaction(txid)[0]['vin']}
        assert spent == {row['key_image'] for row in received}, 'Return omitted or substituted a received output'
        assert all(row['spent'] for row in receipts()), 'Return left an original receipt unspent'
        returned_rows = [row for row in chain.outputs(1) if row['tx_hash'] in returned_ids]
        fee = sum(fee for result in returned for fee in result['fee_list'])
        assert sum(row['amount'] for row in returned_rows) + fee == 15 * COIN
        for payment in payments:
            rejected(lambda: chain.wallets[2].call('return_payment', {'txid': payment}),
                'The same receipts could be returned twice')
        result = {'status': 'AUDIT_MULTI_RETURN_PASS', 'received_outputs': 15,
            'payment_output_counts': [7, 7, 1], 'legacy_fifteen_in_one_tx_not_supported_by_carrot': True,
            'returned_input_count': len(spent), 'returned_transactions': len(returned_ids),
            'returned_atomic': 15 * COIN - fee, 'fees_atomic': fee,
            'all_original_receipts_spent': True, 'duplicate_return_rejected': True,
            'tip': chain.tip(), 'binary_sha256': hashes,
            'source_issue': 'https://github.com/salvium/salvium/issues/13'}
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
