#!/usr/bin/env python3
"""New mining receipts bypass enrollment while keeping exact normal maturity."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile

from audit_gate_regtest import AuditChain, COIN
from audit_release_regtest import RpcError


class MiningChain(AuditChain):
    activation = 120
    audit_duration = 120


def run(chain):
    chain.mine(chain.activation - 2)
    chain.mine(1, fund_miner=True)  # An old mining output still needs enrollment.
    chain.mine(16, fund_miner=True)
    rows = chain.outputs(0)
    old = [row for row in rows if row['block_height'] < chain.activation]
    new = [row for row in rows if row['block_height'] >= chain.activation]
    assert len(old) == 1 and len(new) == 16, rows
    first = min(new, key=lambda row: row['block_height'])
    release = chain.activation + 60

    def lookup(row):
        response = chain.daemon.request('/get_outs', {'outputs': [{'amount': 0,
            'index': row['global_index'], 'is_global_out': True}],
            'asset_type': 'SAL1', 'get_txid': True})
        assert response['status'] == 'OK' and len(response['outs']) == 1, response
        output = response['outs'][0]
        assert output['txid'] == row['tx_hash'] and output['key'] == row['pubkey'], output
        return output['unlocked']

    report = chain.wallets[0].call('audit', {'status_only': True})
    fresh = [row for row in report['outputs'] if row['transaction'] == first['tx_hash']]
    assert len(fresh) == 1 and fresh[0]['state'] == 'MATURING' and fresh[0]['release_height'] == release, fresh
    assert not lookup(first) and not lookup(old[0])
    chain.mine(release - 2 - chain.tip())
    assert chain.state([])['candidate_height'] == release - 1
    assert not lookup(first) and chain.balance(0)['unlocked_balance'] == 0
    try:
        chain.transfer(0, 1, COIN, relay=False)
    except RpcError:
        pass
    else:
        raise AssertionError('Wallet signed an immature mining output')
    chain.mine(1)
    assert chain.state([])['candidate_height'] == release
    assert lookup(first) and not lookup(old[0]), 'Mining maturity or pre-fork enrollment boundary changed'
    assert chain.balance(0)['unlocked_balance'] == first['amount']
    chain.mine(15)
    spend = chain.transfer(0, 1, COIN, relay=False)
    chain.submit(spend, True)
    chain.mine(1)
    assert spend['tx_hash'] in chain.block(chain.tip())['tx_hashes']
    assert chain.state([old[0]['key_image']])['entries'][0]['state'] == 'UNDISCLOSED'
    return {'status': 'AUDIT_MINING_PASS', 'activation': chain.activation,
        'first_mining_release': release, 'mining_maturity_blocks': 60,
        'wallet_never_enrolled': True, 'old_mining_output_still_frozen': True,
        'spend': spend['tx_hash']}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-mining-'))
    print(root, flush=True)
    binaries = root / 'bin'
    binaries.mkdir()
    for name in ('salviumd', 'salvium-wallet-rpc'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
    chain = MiningChain(binaries, root)
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
