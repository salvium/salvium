#!/usr/bin/env python3
"""Native wallet audit detects a damaged historical miner origin and its stake.

The mutation is an explicit historical-corruption fixture in a disposable DB.
It is not presented as a currently valid false mint. The descendants and stake
were signed by real disposable wallets and validated before audit activation.
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
from audit_gate_regtest import AuditChain
from audit_release_regtest import LocalChain
from audit_complex_regtest import CoinbaseReader, varint, invalid_mints
from audit_snapshot_faults import replace_block

COIN = 100_000_000


class BadStakeChain(AuditChain):
    audit_duration = 120


def restart_daemon(chain, process):
    command = list(process.args)
    assert '--regtest' in command and '--config-file' in command
    assert Path(command[command.index('--data-dir') + 1]).is_relative_to(chain.root)
    if process.poll() is None:
        process.terminate()
        process.wait(timeout=60)
    LocalChain.start(chain, f'daemon-restart-{len(chain.processes)}', command, chain.daemon, 'get_info')
    return chain.processes[-1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-wallet-bad-stake-v2-'))
    print(root, flush=True)
    bins = root / 'bin'
    bins.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-blockchain-verification'):
        shutil.copy2(args.binaries.resolve() / name, bins / name)
        with (bins / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    chain = BadStakeChain(bins, root)
    try:
        chain.launch()
        daemon = chain.processes[0]
        chain.mine(100, fund_miner=True)
        funding = chain.transfer(0, 1, 50 * COIN)
        chain.mine(11)
        stake = chain.transfer(1, 1, 12 * COIN, tx_type=6)
        chain.mine(11)
        signed = chain.transfer(1, 2, COIN, relay=False)
        funding_tx = chain.transaction(funding['tx_hash'])[0]
        inputs = {entry['key']['k_image'] for entry in funding_tx['vin']}
        roots = [row for row in chain.outputs(0) if row['key_image'] in inputs]
        assert roots and all(chain.transaction(row['tx_hash'])[0]['type'] == 1 for row in roots)
        bad_height = chain.transaction(roots[0]['tx_hash'])[1]
        chain.mine(chain.activation - chain.tip())
        daemon.terminate()
        daemon.wait(timeout=60)
        backup = root / 'clean-snapshot/lmdb'
        backup.mkdir(parents=True)
        subprocess.run([str(bins / 'salvium-blockchain-verification'), '--db-path',
            str(root / 'chain/fake/lmdb'), '--copy-db', str(backup)], check=True)

        def damage(original):
            reader = CoinbaseReader(original)
            reader.integer(); reader.integer(); reader.integer(); reader.pos += 36
            miner = reader.coinbase()
            start = miner['end'] - 2
            while original[start - 1] & 128:
                start -= 1
            check = CoinbaseReader(original)
            check.pos = start
            burnt = check.integer()
            assert check.pos == miner['end'] - 1
            return original[:start] + varint(burnt + 1) + original[check.pos:], {
                'mutation': 'historical miner reserve over-issuance by one atomic SAL1',
                'height': bad_height, 'old_reserve': burnt, 'new_reserve': burnt + 1}
        fault = replace_block(root / 'chain/fake/lmdb', bad_height, damage)
        daemon = restart_daemon(chain, daemon)
        owner = chain.wallets[1].call('audit')
        miner = chain.wallets[0].call('audit')
        assert owner['pending_batches'] and miner['pending_batches']
        queued = list((root / 'chain/fake/lmdb/wallet-audit-queue-v2').glob('*'))
        assert len(queued) >= 2  # Independent owner and miner batches survive restart.
        # Restart immediately with queued proofs, then mine without a wallet
        # refresh. This specifically tests the daemon's durable queue.
        daemon = restart_daemon(chain, daemon)
        chain.mine(20, refresh=False)
        result = chain.wallets[1].call('audit', {'status_only': True})
        assert result['good_count'] == 0 and result['bad_count'] > 0 and result['stake_bad'] == 12 * COIN, result
        assert all(row['state'] == 'BAD' for row in result['outputs'])
        chain.submit(signed, False)
        payout = chain.transaction(stake['tx_hash'])[1] + 21601
        for offset in range(chain.tip(), payout + 65, 1000):
            chain.mine(min(1000, payout + 65 - chain.tip()), refresh=False)
            print(f'Bad stake remains quarantined at height {chain.tip()}', flush=True)
        for height in range(payout - 1, payout + 66):
            assert not chain.block(height)['protocol_tx']['vout'], height
        final = chain.wallets[1].call('audit', {'status_only': True})
        assert final['stake_bad'] == 12 * COIN and final['good'] == 0
        assert chain.tip() > final['closing_height'] == chain.activation + chain.audit_duration
        assert chain.balance(1)['unlocked_balance'] == 0
        result = {'status': 'WALLET_BAD_STAKE_PASS', 'tip': chain.tip(), 'fault': fault,
            'signed_funding': funding['tx_hash'], 'signed_stake': stake['tx_hash'],
            'normal_payout_height': payout, 'bad_stake_payouts': 0,
            'activation': chain.activation, 'closing': final['closing_height'],
            'native_durable_queue_survived_restart': True, 'wallet_result': final,
            'binary_sha256': hashes,
            'scope': 'Controlled historical-corruption fixture; no claim that a current daemon accepts the damaged origin'}
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps({k: v for k, v in result.items() if k != 'wallet_result'}), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
