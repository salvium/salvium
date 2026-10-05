#!/usr/bin/env python3
"""Two bounded audit rounds with the same disposable owner and historical funds.

The damaged miner reserve is an explicitly corrupted historical fixture, never
a claim that current consensus accepts a false mint. Funding, stake, ownership
proofs and spend attempts are signed by real wallets. The separate native
salYAHU regression tests authentic ownership proofs for that exact asset pattern.
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile

from audit_gate_regtest import AuditChain, COIN
from audit_complex_regtest import CoinbaseReader, varint
from audit_snapshot_faults import replace_block
from audit_stake_gate_regtest import freeze_other_outputs
from audit_window_regtest import rejected


class OwnerChain(AuditChain):
    audit_duration = 10080


def copy_chain(binary, source, destination):
    destination.mkdir(parents=True)
    subprocess.run([str(binary), '--db-path', str(source), '--copy-db', str(destination)], check=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-owner-rounds-'))
    print(root, flush=True)
    binaries = root / 'bin'; binaries.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-blockchain-verification'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
        with (binaries / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    setup = root / 'setup'; setup.mkdir()
    chain = OwnerChain(binaries, setup)
    try:
        chain.launch()
        chain.mine(100, fund_miner=True)
        funding = chain.transfer(0, 1, 50 * COIN)
        chain.mine(11)
        stake = chain.transfer(1, 1, 12 * COIN, tx_type=6)
        chain.mine(11)
        signed = chain.transfer(1, 2, COIN, relay=False)
        inputs = {row['key']['k_image'] for row in chain.transaction(funding['tx_hash'])[0]['vin']}
        ancestors = [row for row in chain.outputs(0) if row['key_image'] in inputs]
        assert ancestors and all(chain.transaction(row['tx_hash'])[0]['type'] == 1 for row in ancestors)
        bad_height = chain.transaction(ancestors[0]['tx_hash'])[1]
        images = [row['key_image'] for row in chain.outputs(1) if not row['spent']]
        assert images
        owner_address = chain.addresses[1]
        chain.mine(chain.activation - 1 - chain.tip())
    finally:
        chain.close()
    snapshot = root / 'historical-fixture/lmdb'
    copy_chain(binaries / 'salvium-blockchain-verification', setup / 'chain/fake/lmdb', snapshot)

    def damage(original):
        reader = CoinbaseReader(original)
        reader.integer(); reader.integer(); reader.integer(); reader.pos += 36
        miner = reader.coinbase()
        start = miner['end'] - 2
        while original[start - 1] & 128:
            start -= 1
        reader.pos = start
        burnt = reader.integer()
        assert reader.pos == miner['end'] - 1
        return original[:start] + varint(burnt + 1) + original[reader.pos:], {
            'height': bad_height, 'old_reserve': burnt, 'new_reserve': burnt + 1,
            'scope': 'Disposable historical-corruption fixture with unchanged signed descendant transactions'}
    fault = replace_block(snapshot, bad_height, damage)
    results = []
    for enroll in (True, False):
        round_root = root / ('owner-enrolls' if enroll else 'owner-never-enrolls')
        copy_chain(binaries / 'salvium-blockchain-verification', snapshot, round_root / 'chain/fake/lmdb')
        for owner in ('miner', 'alice', 'bob', 'observer'):
            directory = round_root / owner; directory.mkdir()
            name = 'mining-sink' if owner == 'observer' else 'wallet'
            for suffix in ('', '.keys'):
                shutil.copy2(setup / owner / (name + suffix), directory / (name + suffix))
        chain = OwnerChain(binaries, round_root)
        try:
            chain.launch()
            assert chain.addresses[1] == owner_address
            assert chain.state([])['candidate_height'] == chain.activation
            chain.submit(signed, False)
            chain.mine(1)
            miner = chain.wallets[0].call('audit')
            assert miner['pending_batches']
            if enroll:
                owner = chain.wallets[1].call('audit')
                assert owner['pending_batches']
            chain.mine(30)
            status = chain.wallets[1].call('audit', {'status_only': True})
            expected = 'BAD' if enroll else 'UNDISCLOSED'
            assert all(row['state'] == expected for row in chain.state(images)['entries']), status
            if enroll:
                assert status['bad_count'] and status['stake_bad'] == 12 * COIN, status
            else:
                assert not status['bad_count'] and status['unresolved_count'], status
            chain.submit(signed, False)
            assert chain.balance(1)['unlocked_balance'] == 0
            # A new valid receipt in this same wallet inherits clearance in both
            # rounds. It cannot authorize the old bad or never-enrolled outputs.
            chain.mine(80, fund_miner=True)
            receipt = chain.transfer(0, 1, 5 * COIN)
            chain.mine(11)
            assert chain.balance(1)['unlocked_balance'] == 5 * COIN
            closing = chain.activation + chain.audit_duration
            while chain.tip() < closing + 60:
                chain.mine(min(1000, closing + 60 - chain.tip()), refresh=False)
                print(f'Owner enrolled={enroll} height={chain.tip()} cutoff={closing}', flush=True)
            for wallet in chain.wallets:
                wallet.call('refresh')
            chain.submit(signed, False)
            assert all(row['state'] == expected for row in chain.state(images)['entries'])
            final = chain.wallets[1].call('audit', {'status_only': True})
            assert final['closing_height'] == closing and chain.state([])['candidate_height'] >= closing, final
            assert chain.balance(1)['unlocked_balance'] == 5 * COIN
            for image in images:
                freeze_other_outputs(chain, chain.wallets[1], image)
                chain.wallets[1].call('thaw', {'key_image': image})
                rejected(lambda: chain.transfer(1, 2, COIN, relay=False),
                         'Wallet signed old frozen funds after the cutoff')
            receipt_rows = [row for row in chain.outputs(1) if row['tx_hash'] == receipt['tx_hash']]
            assert len(receipt_rows) == 1
            freeze_other_outputs(chain, chain.wallets[1], receipt_rows[0]['key_image'])
            chain.wallets[1].call('thaw', {'key_image': receipt_rows[0]['key_image']})
            # Public issue #118: partial transfer and transfer_split must work
            # on the same spendable inventory as sweep_all. Also verify the
            # reported unspent-output counter against actual wallet records.
            balances = chain.wallets[1].call('get_balance', {'all_accounts': True, 'asset_type': 'SAL1'})
            expected_count = sum(not row['spent'] for row in chain.outputs(1))
            counts = [row['num_unspent_outputs'] for balance in balances['balances']
                if balance['asset_type'] == 'SAL1' for row in balance['per_subaddress']
                if row['account_index'] == 0 and row['address_index'] == 0]
            assert counts == [expected_count], (counts, expected_count)
            split = chain.wallets[1].call('transfer_split', {'destinations': [
                {'address': chain.addresses[2], 'amount': COIN, 'asset_type': 'SAL1'}],
                'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3,
                'account_index': 0, 'priority': 1, 'ring_size': 16, 'do_not_relay': True})
            assert split['tx_hash_list']
            sweep = chain.wallets[1].call('sweep_all', {'address': chain.addresses[2],
                'asset_type': 'SAL1', 'account_index': 0, 'priority': 1, 'ring_size': 16, 'do_not_relay': True})
            assert sweep['tx_hash_list']
            payment = chain.transfer(1, 2, COIN, relay=False)
            chain.submit(payment, True)
            chain.mine(1)
            assert payment['tx_hash'] in chain.block(chain.tip())['tx_hashes']
            result = {'enrolled': enroll, 'owner_address': owner_address, 'old_output_state': expected,
                'activation': chain.activation, 'duration': chain.audit_duration, 'closing': closing,
                'tip': chain.tip(), 'old_signed_spend_rejected': True, 'old_wallet_signing_rejected': True,
                'new_receipt_in_same_wallet_spend_confirmed': payment['tx_hash'],
                'owner_enrollment_calls': int(enroll), 'wallet_result': final}
            result['partial_split_sweep_signing_pass'] = True
            result['unspent_output_counter_matches_inventory'] = True
            (round_root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
            results.append({k: v for k, v in result.items() if k != 'wallet_result'})
        finally:
            chain.close()
    result = {'status': 'AUDIT_OWNER_ROUNDS_PASS', 'rounds': results, 'fault': fault,
        'signed_funding': funding['tx_hash'], 'signed_stake': stake['tx_hash'], 'binary_sha256': hashes}
    (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps(result), flush=True)


if __name__ == '__main__':
    main()
