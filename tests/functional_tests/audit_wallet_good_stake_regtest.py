#!/usr/bin/env python3
"""A good stake waits for missing funding evidence, then pays once and unlocks."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile
from audit_gate_regtest import AuditChain
from audit_release_regtest import RpcError

COIN = 100_000_000


class GoodStakeChain(AuditChain):
    # The stake's normal payout falls inside enrollment. Its owner enrolls
    # first, but its funding owner waits until after normal maturity.
    activation = 21700
    audit_duration = 120


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    parser.add_argument('--root', type=Path)
    args = parser.parse_args()
    root = args.root.resolve() if args.root else Path(tempfile.mkdtemp(prefix='salvium-wallet-good-stake-v2-'))
    assert root.name.startswith('salvium-wallet-good-stake-v2-') and root.is_relative_to(Path(tempfile.gettempdir()).resolve())
    print(root, flush=True)
    bins = root / 'bin'; bins.mkdir(exist_ok=True)
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc'):
        shutil.copy2(args.binaries.resolve() / name, bins / name)
        with (bins / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    policy = {'activation': GoodStakeChain.activation, 'duration': GoodStakeChain.audit_duration}
    marker = root / 'stake-context.json'
    if args.root:
        assert json.loads(marker.read_text()) == policy, 'Resume requires the same bounded stake policy'
    else:
        marker.write_text(json.dumps(policy) + '\n')
    chain = GoodStakeChain(bins, root)
    try:
        chain.launch()
        if not args.root:
            chain.mine(100, fund_miner=True)
            chain.transfer(0, 1, 50 * COIN)
            chain.mine(11)
            stake = chain.transfer(1, 1, 12 * COIN, tx_type=6)
            chain.mine(11)
        else:
            for wallet in chain.wallets:
                wallet.call('refresh')
            status = chain.wallets[1].call('audit', {'status_only': True})
            stake = {'tx_hash': next(row['transaction'] for row in status['outputs'] if row['stake'])}
        stake_tx, inclusion = chain.transaction(stake['tx_hash'])
        normal_payout = inclusion + 21601
        while chain.tip() < chain.activation:
            chain.mine(min(1000, chain.activation - chain.tip()), refresh=False)
            print(f'Preparing bounded stake fork at height {chain.tip()}', flush=True)
        for wallet in chain.wallets:
            wallet.call('refresh')
        assert chain.activation < normal_payout < normal_payout + 25 < chain.activation + chain.audit_duration
        chain.wallets[1].call('audit')
        while chain.tip() < normal_payout + 25:
            chain.mine(min(1000, normal_payout + 25 - chain.tip()), refresh=False)
            print(f'Good stake awaiting ancestor at height {chain.tip()}', flush=True)
        for height in range(normal_payout - 1, chain.tip() + 1):
            assert not chain.block(height)['protocol_tx']['vout'], 'Unresolved stake paid out'
        pending = chain.wallets[1].call('audit', {'status_only': True})
        assert pending['stake_unresolved'] == 12 * COIN
        yield_data = chain.daemon.call('get_yield_info', {'include_raw_data': True,
            'from_height': inclusion + 1, 'to_height': normal_payout - 1})['yield_data']
        # RPC exposes a rolling cache. Recover the expired prefix from public
        # canonical miner reserves; this fixture has exactly one competing stake.
        present = {row['block_height'] for row in yield_data}
        for height in range(inclusion + 1, normal_payout):
            if height not in present:
                yield_data.append({'block_height': height, 'locked_coins_tally': 12 * COIN,
                    'slippage_total_this_block': chain.block(height)['miner_tx']['amount_burnt']})
        assert len(yield_data) == 21600 and all(row['locked_coins_tally'] == 12 * COIN for row in yield_data)
        expected = 12 * COIN + sum(row['slippage_total_this_block'] for row in yield_data)
        miner = chain.wallets[0].call('audit')
        chain.mine(miner['pending_batches'], refresh=False)
        passed = chain.wallets[1].call('audit', {'status_only': True})
        rows = [row for row in passed['outputs'] if row['stake']]
        assert len(rows) == 1 and passed['stake_good'] == 12 * COIN
        payout_height = rows[0]['release_height']
        assert payout_height > normal_payout
        chain.mine(payout_height - 1 - chain.tip(), refresh=False)
        assert not chain.block(payout_height - 1)['protocol_tx']['vout']
        chain.mine(1)
        payout = chain.block(payout_height)['protocol_tx']['vout']
        assert len(payout) == 1 and payout[0]['amount'] == expected, (payout, expected)
        # Payout rollback/replay must not mint a duplicate or change its amount.
        blob = chain.daemon.call('get_block', {'height': payout_height})['blob']
        chain.daemon.request('/pop_blocks', {'nblocks': 1})
        chain.daemon.call('submit_block', [blob])
        rows = chain.outputs(1)
        paid = [row for row in rows if row['block_height'] == payout_height and row['amount'] == expected]
        assert len(paid) == 1
        image = paid[0]['key_image']
        for row in rows:
            if not row['spent'] and row['key_image'] != image:
                chain.wallets[1].call('freeze', {'key_image': row['key_image']})
        chain.mine(58)
        try:
            chain.transfer(1, 2, expected // 2, relay=False)
        except RpcError:
            pass
        else:
            raise AssertionError('Payout spent before 60-block maturity')
        # Sign at the first eligible candidate height, P + 60. Signing a
        # block later can select decoys that are still immature at P + 60.
        chain.mine(1)
        assert chain.tip() + 1 == payout_height + 60
        spend = chain.transfer(1, 2, expected // 2, relay=False)
        # Test the canonical real-input maturity check with a valid signature.
        chain.daemon.request('/pop_blocks', {'nblocks': 1})
        chain.submit(spend, False)
        chain.mine(1, refresh=False)
        chain.submit(spend, True)
        chain.mine(1)
        tx, _ = chain.transaction(spend['tx_hash'])
        assert [row['key']['k_image'] for row in tx['vin']] == [image]
        for height in range(payout_height + 1, chain.tip() + 1):
            assert not chain.block(height)['protocol_tx']['vout'], 'Stake paid twice'
        final = chain.wallets[1].call('audit', {'status_only': True})
        assert final['stake_good_count'] == final['stake_unresolved_count'] == 0, final
        result = {'status': 'WALLET_GOOD_STAKE_PASS', 'normal_payout': normal_payout,
            'activation': chain.activation, 'closing': chain.activation + chain.audit_duration,
            'actual_payout': payout_height, 'payout_atomic': expected, 'tip': chain.tip(),
            'missing_ancestor_blocks_past_term': True, 'yield_uses_original_window': True,
            'payout_reorg_replay': True, 'maturity_raw_spend_boundary': True,
            'payout_spent_by_real_key_image': image, 'paid_principal_not_double_counted': True,
            'binary_sha256': hashes}
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
