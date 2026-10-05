#!/usr/bin/env python3
"""Exercise the bounded, output-based audit on a fully isolated native chain."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile

from audit_gate_regtest import AuditChain, COIN
from audit_release_regtest import RpcError
from audit_stake_gate_regtest import freeze_other_outputs
from audit_complex_regtest import CoinbaseReader, varint


class WindowChain(AuditChain):
    audit_duration = 120


def rejected(call, description):
    try:
        call()
    except RpcError:
        return
    raise AssertionError(description)


def run(chain, stake_cycle):
    closing = chain.activation + chain.audit_duration
    chain.mine(100, fund_miner=True)
    chain.transfer(0, 1, 50 * COIN)
    chain.transfer(0, 2, 7 * COIN)
    chain.mine(11)
    old_stake = chain.transfer(1, 1, 12 * COIN, tx_type=6)
    chain.mine(11)
    unresolved_receipt = chain.transfer(2, 1, 3 * COIN)
    chain.mine(11)
    deposits = []
    for amount in (4 * COIN, 8 * COIN):
        account = chain.wallets[1].call('create_account', {'label': 'exchange deposits'})['account_index']
        chain.wallets[1].call('create_address', {'account_index': account})
        minor = chain.wallets[1].call('create_address', {'account_index': account})['address_index']
        address = chain.wallets[1].call('get_address', {'account_index': account,
            'address_index': [minor], 'carrot': True})['addresses'][0]['address_carrot']
        funding = chain.wallets[0].call('transfer', {'destinations': [
            {'address': address, 'amount': amount, 'asset_type': 'SAL1'}],
            'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3,
            'account_index': 0, 'priority': 1, 'ring_size': 16, 'unlock_time': 0})
        chain.mine(11)
        deposits.append((account, minor, amount, funding['tx_hash']))

    uncleared = chain.transfer(2, 0, COIN, relay=False)
    signed = chain.wallets[1].call('transfer', {'destinations': [
        {'address': chain.addresses[2], 'amount': COIN, 'asset_type': 'SAL1'}],
        'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3,
        'account_index': deposits[0][0], 'subaddr_indices': [deposits[0][1]],
        'priority': 1, 'ring_size': 16, 'unlock_time': 0, 'get_tx_hex': True, 'do_not_relay': True})
    chain.mine(chain.activation - 1 - chain.tip())
    assert chain.state([])['candidate_height'] == chain.activation
    chain.submit(signed, False)
    chain.submit(uncleared, False)
    assert chain.balance(1)['unlocked_balance'] == 0
    chain.mine(1)

    # Alice's only enrollment is the exact bare CLI command across three accounts.
    chain.wallets[1].call('close_wallet')
    cli = subprocess.run([str(chain.binaries / 'salvium-wallet-cli'),
        '--config-file', str(chain.root / 'isolated.conf'),
        '--wallet-file', str(chain.root / 'alice/wallet'), '--password', '',
        '--shared-ringdb-dir', str(chain.root / 'alice/ringdb'),
        '--daemon-address', chain.daemon.url, '--daemon-ssl', 'disabled', '--trusted-daemon',
        '--allow-mismatched-daemon-version', '--regtest-lineage-audit-height', str(chain.activation),
        '--log-file', str(chain.root / 'cli.log'), '--command', 'audit'],
        input='', capture_output=True, text=True, timeout=180)
    text = cli.stdout + cli.stderr
    (chain.root / 'cli-output.txt').write_text(text)
    assert cli.returncode == 0 and 'Scope: every account and subaddress in this wallet' in text, text
    assert f'closes at block {closing}' in text and 'Run audit again after confirmations' not in text, text
    chain.wallets[1].call('open_wallet', {'filename': 'wallet', 'password': ''})
    chain.wallets[1].call('auto_refresh', {'enable': False})
    miner = chain.wallets[0].call('audit')
    late_proofs = chain.wallets[2].call('audit', {'do_not_relay': True})['proofs']
    assert late_proofs
    chain.mine(miner['pending_batches'] + 1)
    before = chain.wallets[1].call('audit', {'status_only': True})
    assert before['closing_height'] == closing and before['good_count'] >= 3, before
    assert before['unresolved'] == 3 * COIN and before['stake_good'] == 12 * COIN, before
    cleared = [row for row in before['outputs'] if row['state'] in ('MATURING', 'AUDIT_PASSED')]
    assert cleared and all(row['release_height'] == row['completed_height'] + 10 for row in cleared), before
    primary = [row for row in cleared if row['account'] == 0 and not row['stake'] and not row['spent']]
    assert len(primary) == 1, primary
    release = primary[0]['release_height']
    assert chain.tip() < release - 2 and release + 30 < closing, before
    chain.mine(release - 2 - chain.tip())
    assert chain.state([])['candidate_height'] == release - 1
    rejected(lambda: chain.transfer(1, 0, COIN, relay=False), 'Wallet signed at C + 9')
    chain.mine(1)
    population = chain.daemon.call('get_lineage_audit_outputs', {'limit': 7})
    assert population['candidate_height'] == release and population['outputs'] and population['more'], population
    next_page = chain.daemon.call('get_lineage_audit_outputs', {
        'limit': 7, 'from_index': population['outputs'][-1]['index'] + 1})
    assert next_page['tip_hash'] == population['tip_hash'] and next_page['outputs'][0]['index'] > population['outputs'][-1]['index']
    payment = chain.transfer(1, 2, 2 * COIN, relay=False)
    chain.submit(payment, True)
    # Roll back to C + 9. Cached pool admission must not survive losing release.
    chain.daemon.request('/pop_blocks', {'nblocks': 1})
    chain.submit(payment, False)
    chain.mine(1)
    assert payment['tx_hash'] not in chain.block(release - 1).get('tx_hashes', [])
    chain.submit(payment, True)
    chain.mine(11)
    assert payment['tx_hash'] in chain.block(release)['tx_hashes']
    receipt = [row for row in chain.outputs(2) if row['tx_hash'] == payment['tx_hash']]
    assert len(receipt) == 1
    freeze_other_outputs(chain, chain.wallets[2], receipt[0]['key_image'])
    second = chain.transfer(2, 1, COIN, relay=False)
    chain.submit(second, True)
    chain.mine(11)
    assert chain.transaction(second['tx_hash'])[1] < closing
    after = chain.wallets[1].call('audit', {'status_only': True})
    assert after['unresolved'] == 3 * COIN, after
    assert any(row['transaction'] == second['tx_hash'] and row['state'] == 'AUDIT_PASSED'
               for row in after['outputs']), after
    # A stake created during enrollment also inherits clearance without proof.
    new_stake = chain.transfer(1, 1, 12 * COIN, tx_type=6) if stake_cycle else None
    if new_stake:
        chain.mine(11)
        assert chain.transaction(new_stake['tx_hash'])[1] < closing
        inherited = chain.wallets[1].call('audit', {'do_not_relay': True})
        assert not inherited.get('proofs', []), 'Post-activation outputs requested repeat enrollment'
    print('C + 9 rejection, C + 10 release, reorg and inherited receipts passed before cutoff', flush=True)

    # Stop one block before the deadline and then advance to its exact candidate.
    chain.mine(closing - 2 - chain.tip())
    chain.submit(uncleared, False)
    unchecked = chain.daemon.request('/send_raw_transaction', {
        'tx_as_hex': uncleared['tx_blob'], 'do_sanity_checks': False})
    assert unchecked['status'] != 'OK', 'Native spend gate depended on optional RPC heuristics'
    assert chain.state([])['candidate_height'] == closing - 1
    last_template = chain.daemon.call('get_block_template', {
        'wallet_address': chain.sink_address, 'reserve_size': 0, 'audit_disclosure': late_proofs[0]})
    assert last_template['height'] == closing - 1  # Valid while enrollment is open; do not mine it.
    # Enroll a separate miner's pre-fork inventory in the final allowed block.
    # Bob's missing evidence is deliberately never enrolled.
    chain.observer.call('open_wallet', {'filename': 'mining-sink', 'password': ''})
    chain.observer.call('auto_refresh', {'enable': False})
    last_proof = chain.observer.call('audit', {'do_not_relay': True})['proofs'][0]
    final_template = chain.daemon.call('get_block_template', {
        'wallet_address': chain.sink_address, 'reserve_size': 0, 'audit_disclosure': last_proof})
    chain.daemon.call('submit_block', [final_template['blocktemplate_blob']])
    for wallet in chain.wallets:
        wallet.call('refresh')
    assert chain.state([])['candidate_height'] == closing
    late_clearance = chain.observer.call('audit', {'status_only': True})
    last_rows = [row for row in late_clearance['outputs'] if row['completed_height'] == closing - 1]
    assert last_rows and all(row['state'] == 'MATURING' and row['release_height'] == closing + 9
                             for row in last_rows), late_clearance
    final = chain.wallets[1].call('audit', {'status_only': True})
    assert final['unresolved'] == 3 * COIN, final
    for account, minor, amount, txid in deposits:
        rows = [row for row in final['outputs'] if row['transaction'] == txid and
                row['account'] == account and row['subaddress'] == minor and not row['spent']]
        assert len(rows) == 1 and rows[0]['state'] == 'AUDIT_PASSED' and rows[0]['amount'] == amount, rows
    for proof in late_proofs:
        rejected(lambda: chain.daemon.call('submit_lineage_disclosure', {'data': proof}), 'Late proof queued')
        rejected(lambda: chain.daemon.call('get_block_template', {
            'wallet_address': chain.sink_address, 'reserve_size': 0, 'audit_disclosure': proof}), 'Late proof templated')
    closed = chain.wallets[2].call('audit')
    assert not closed.get('proofs', []) and closed['unresolved_count'] > 0, closed
    chain.submit(uncleared, False)
    # Test consensus rejection too, with an otherwise valid current template.
    control = chain.daemon.call('get_block_template', {'wallet_address': chain.sink_address, 'reserve_size': 0})
    blob = bytes.fromhex(control['blocktemplate_blob'])
    reader = CoinbaseReader(blob)
    reader.integer(); reader.integer(); reader.integer(); reader.pos += 36
    miner_fields = reader.coinbase()
    proof = bytes.fromhex(late_proofs[0])
    envelope = b'\x81' + varint(len(proof)) + proof
    assert envelope.hex() in last_template['blocktemplate_blob'], 'Test enrollment encoding differs from native encoding'
    extra = blob[miner_fields['extra_data']:miner_fields['extra_end']] + envelope
    forged = blob[:miner_fields['extra_start']] + varint(len(extra)) + extra + blob[miner_fields['extra_end']:]
    rejected(lambda: chain.daemon.call('submit_block', [forged.hex()]), 'Raw block accepted late enrollment')
    assert chain.state([])['candidate_height'] == closing
    chain.daemon.call('submit_block', [control['blocktemplate_blob']])
    chain.daemon.request('/pop_blocks', {'nblocks': 1})

    # The node excludes unresolved outputs from the public decoy lookup, while
    # a cleared receipt in the same wallet is eligible.
    frozen_rows = [row for row in chain.outputs(1) if row['tx_hash'] == unresolved_receipt['tx_hash']]
    assert len(frozen_rows) == 1
    eligible_rows = [row for row in chain.outputs(1) if row['tx_hash'] == second['tx_hash']]
    assert len(eligible_rows) == 1
    for row, eligible in ((frozen_rows[0], False), (eligible_rows[0], True)):
        lookup = chain.daemon.request('/get_outs', {'outputs': [{'amount': 0,
            'index': row['global_index'], 'is_global_out': True}], 'asset_type': 'SAL1', 'get_txid': True})
        assert lookup['status'] == 'OK' and len(lookup['outs']) == 1, lookup
        output = lookup['outs'][0]
        assert output['txid'] == row['tx_hash'] and output['key'] == row['pubkey'] and output['unlocked'] == eligible, output
    pending_image = frozen_rows[0]['key_image']
    freeze_other_outputs(chain, chain.wallets[1], pending_image)
    rejected(lambda: chain.transfer(1, 0, COIN, relay=False), 'Unresolved receipt became signable at cutoff')
    for row in chain.outputs(1):
        if not row['spent']:
            chain.wallets[1].call('thaw', {'key_image': row['key_image']})

    # Output eligibility continues after closure, while the unresolved output
    # stays locked beside cleared receipts in the same wallet.
    after_cutoff = chain.transfer(1, 2, COIN, relay=False)
    chain.submit(after_cutoff, True)
    chain.mine(11)
    assert chain.transaction(after_cutoff['tx_hash'])[1] == closing
    last_state = chain.state([row['key_image'] for row in last_rows])['entries']
    assert all(row['state'] == 'AUDIT_PASSED' and row['release_height'] == closing + 9
               for row in last_state), last_state
    print('Exclusive cutoff, raw late-block rejection and mixed output inventory passed', flush=True)

    snapshot = chain.wallets[1].call('audit', {'status_only': True})
    daemon = chain.processes[0]
    command = list(daemon.args)
    assert '--regtest' in command and '--config-file' in command
    assert Path(command[command.index('--data-dir') + 1]).is_relative_to(chain.root)
    daemon.terminate(); daemon.wait(timeout=20)
    chain.start('window-daemon-restarted', command, chain.daemon, 'get_info')
    assert chain.wallets[1].call('audit', {'status_only': True}) == snapshot, 'Restart changed final output inventory'
    chain.submit(uncleared, False)
    result = {'status': 'AUDIT_WINDOW_PASS', 'activation': chain.activation,
        'duration': chain.audit_duration, 'closing': closing, 'release_height': release, 'tip': chain.tip(),
        'bare_cli_accounts': 3, 'cleared_outputs': final['good_count'],
        'unresolved_frozen': 3 * COIN, 'late_enrollment_rejected': True,
        'final_block_clearance_releases_after_cutoff': True,
        'recipient_wallet_never_enrolled': True, 'new_receipt_spend': second['tx_hash'],
        'reorg_and_restart': True, 'old_stake': old_stake['tx_hash']}
    (chain.root / 'window-result.json').write_text(json.dumps(result, indent=2) + '\n')

    if stake_cycle:
        new_tx, new_height = chain.transaction(new_stake['tx_hash'])
        old_tx, old_height = chain.transaction(old_stake['tx_hash'])
        old_payout, new_payout = old_height + 21601, new_height + 21601
        while chain.tip() < new_payout:
            chain.mine(min(1000, new_payout - chain.tip()), refresh=False)
            print(f'Stake maturity {chain.tip()}/{new_payout}', flush=True)
        for height, stake_tx in ((old_payout, old_tx), (new_payout, new_tx)):
            outputs = chain.block(height)['protocol_tx']['vout']
            key = stake_tx['protocol_tx_data']['return_address']
            assert sum(row['target']['carrot_v1']['key'] == key for row in outputs) == 1, (height, outputs)
        chain.mine(60)
        payouts = [row for row in chain.outputs(1) if row['pubkey'] == new_tx['protocol_tx_data']['return_address']]
        assert len(payouts) == 1
        freeze_other_outputs(chain, chain.wallets[1], payouts[0]['key_image'])
        paid_spend = chain.transfer(1, 0, COIN, relay=False)
        chain.submit(paid_spend, True)
        result.update(stake_cycle=True, post_activation_stake=new_stake['tx_hash'],
                      post_activation_payout=new_payout, payout_spend=paid_spend['tx_hash'], tip=chain.tip())
        with (chain.root / 'independent-verification.log').open('w') as log:
            verification = subprocess.run([str(chain.binaries / 'salvium-blockchain-verification'),
                '--db-path', str(chain.root / 'chain/fake/lmdb'), '--regtest',
                '--regtest-lineage-audit-height', str(chain.activation),
                '--regtest-lineage-audit-duration', str(chain.audit_duration), '--no-asset-flow-forensic'],
                env=dict(os.environ, SALVIUM_FULL_FORENSIC_SCAN='1', SALVIUM_INDEPENDENT_FORENSICS_ONLY='1'),
                stdout=log, stderr=subprocess.STDOUT, timeout=600)
        assert verification.returncode == 0, 'Independent issuance/payout replay failed; see independent-verification.log'
        result['independent_issuance_and_payout_replay'] = True
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    parser.add_argument('--stake-cycle', action='store_true')
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-window-'))
    print(root, flush=True)
    binaries = root / 'bin'; binaries.mkdir()
    for name in ('salviumd', 'salvium-wallet-cli', 'salvium-wallet-rpc', 'salvium-blockchain-verification'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
    chain = WindowChain(binaries, root)
    try:
        chain.launch()
        result = run(chain, args.stake_cycle)
        result['binary_sha256'] = {p.name: hashlib.file_digest(p.open('rb'), 'sha256').hexdigest()
                                   for p in binaries.iterdir()}
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
