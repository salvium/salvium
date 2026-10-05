#!/usr/bin/env python3
"""A wallet with bad funds can stake good funds, but cannot stake its bad receipt."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
from audit_gate_regtest import AuditChain
from audit_release_regtest import RpcError
from audit_complex_regtest import atomic_json

COIN = 100_000_000


def confirm(chain, txid):
    for _ in range(20):
        chain.mine(1)
        if txid in chain.block(chain.tip())['tx_hashes']:
            return
    raise AssertionError('Signed test transaction did not confirm')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--bad-stake-fixture', type=Path, required=True)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    source = args.bad_stake_fixture.resolve()
    old = json.loads((source / 'result.json').read_text())
    assert old['status'] == 'WALLET_BAD_STAKE_PASS'
    root = Path(tempfile.mkdtemp(prefix='salvium-wallet-mixed-funds-v2-'))
    print(root, flush=True)
    bins = root / 'bin'; bins.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-blockchain-verification'):
        shutil.copy2(args.binaries.resolve() / name, bins / name)
        with (bins / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    db = root / 'chain/fake/lmdb'; db.mkdir(parents=True)
    subprocess.run([str(bins / 'salvium-blockchain-verification'), '--db-path',
        str(source / 'chain/fake/lmdb'), '--copy-db', str(db)], check=True)
    for owner in ('miner', 'alice', 'bob', 'observer'):
        destination = root / owner; destination.mkdir()
        name = 'mining-sink' if owner == 'observer' else 'wallet'
        for suffix in ('', '.keys'):
            shutil.copy2(source / owner / (name + suffix), destination / (name + suffix))
    chain = AuditChain(bins, root)
    try:
        chain.launch()
        for wallet in chain.wallets:
            wallet.call('refresh')
        alice = chain.wallets[1]
        before = alice.call('audit', {'status_only': True})
        assert before['bad_count'] == 1 and before['good'] == 0 and before['stake_bad'] == 12 * COIN
        minor = alice.call('create_address', {'account_index': 0})['address_index']
        address = alice.call('get_address', {'account_index': 0, 'address_index': [minor],
            'carrot': True})['addresses'][0]['address_carrot']
        funding = chain.wallets[0].call('transfer', {'destinations': [
            {'address': address, 'amount': 50 * COIN, 'asset_type': 'SAL1'}],
            'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3, 'account_index': 0,
            'priority': 1, 'ring_size': 16, 'unlock_time': 0})
        confirm(chain, funding['tx_hash'])
        alice.call('audit')
        chain.mine(13)
        mixed = alice.call('audit', {'status_only': True})
        assert mixed['good'] == 50 * COIN and mixed['bad'] == before['bad'], mixed
        assert chain.balance(1)['unlocked_balance'] == 50 * COIN
        params = {'destinations': [{'address': chain.addresses[1], 'amount': 12 * COIN, 'asset_type': 'SAL1'}],
            'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 6, 'account_index': 0,
            'subaddr_indices': [0], 'priority': 1, 'ring_size': 16, 'unlock_time': 0,
            'get_tx_hex': True, 'get_tx_metadata': True, 'do_not_relay': True}
        try:
            alice.call('transfer', params)
        except RpcError:
            pass
        else:
            raise AssertionError('Wallet signed a stake from bad funds despite separate good balance')
        params['subaddr_indices'] = [minor]
        good_stake = alice.call('transfer', params)
        sent = alice.call('relay_tx', {'hex': good_stake['tx_metadata']})
        assert sent['tx_hash'] == good_stake['tx_hash']
        confirm(chain, sent['tx_hash'])
        alice.call('audit')
        chain.mine(13)
        final = alice.call('audit', {'status_only': True})
        assert final['state'] == 'BAD_FUNDS_FOUND' and final['bad'] == before['bad'], final
        assert final['good_count'] == 1 and final['unresolved_count'] == 0, final
        assert final['stake_bad'] == final['stake_good'] == 12 * COIN, final
        assert final['stake_immature'] == 12 * COIN and final['stake_unresolved'] == 0, final
        assert chain.balance(1)['unlocked_balance'] == final['good']
        result = {'status': 'WALLET_MIXED_FUNDS_PASS', 'tip': chain.tip(),
            'bad_subaddress_stake_rejected_with_good_funds_elsewhere': True,
            'good_subaddress_stake_accepted': good_stake['tx_hash'],
            'bad_funds_remain_blocked': True, 'good_funds_remain_spendable': True,
            'bad_stake_never_paid_past_term': old['normal_payout_height'],
            'wallet_result': final, 'binary_sha256': hashes}
        atomic_json(root / 'result.json', result)
        print(json.dumps({k:v for k,v in result.items() if k != 'wallet_result'}), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
