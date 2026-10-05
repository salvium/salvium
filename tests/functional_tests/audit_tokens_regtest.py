#!/usr/bin/env python3
"""SAL1 and salYAHU enrollment on an isolated native chain with disposable wallets."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import time

from audit_gate_regtest import AuditChain, COIN
from audit_release_regtest import RpcError


class TokenChain(AuditChain):
    activation = 22500
    audit_duration = 160
    # Startup now reconstructs 22,500 blocks of audit/mining history before RPC
    # is ready. Allow that work alongside RandomX under the one-CPU test limit.
    startup_timeout = 300


def rejected(call, message):
    try:
        call()
    except RpcError:
        return
    raise AssertionError(message)


def token_transfer(chain, sender, recipient, amount, address=None):
    return chain.wallets[sender].call('transfer_split', {
        'destinations': [{'address': address or chain.addresses[recipient], 'amount': amount, 'asset_type': 'salYAHU'}],
        'source_asset': 'salYAHU', 'dest_asset': 'salYAHU', 'tx_type': 3,
        'account_index': 0, 'subaddr_indices': [0], 'priority': 1, 'ring_size': 1,
        'unlock_time': 0, 'get_tx_hex': True, 'do_not_relay': True})


def wait_for_template(chain, txid):
    deadline = time.monotonic() + 30
    while time.monotonic() < deadline:
        template = chain.daemon.call('get_block_template', {
            'wallet_address': chain.sink_address, 'reserve_size': 0})
        if txid in template['blocktemplate_blob']:
            return
        time.sleep(0.2)
    raise AssertionError(f'Transaction did not become available for mining: {txid}')


def relay(chain, result, token=False):
    # The first transaction pays the token transfer's fee in SAL1. Confirm the
    # rollup before submitting the token transaction, as normal relay does.
    for index, (txid, blob) in enumerate(zip(result['tx_hash_list'], result['tx_blob_list'], strict=True)):
        asset = 'salYAHU' if token and index == len(result['tx_hash_list']) - 1 else 'SAL1'
        # This offline node is the miner. Queue directly without a randomized
        # Dandelion embargo; the normal transaction/consensus checks still run.
        response = chain.daemon.request('/send_raw_transaction', {
            'tx_as_hex': blob, 'source_asset_type': asset, 'do_not_relay': True})
        assert response.get('status') == 'OK', response
        # Confirm template inclusion without moving the height so exact
        # C + 10 assertions remain meaningful.
        wait_for_template(chain, txid)
        chain.mine(1)
        assert txid in chain.block(chain.tip())['tx_hashes'], txid


def balance(result, asset):
    return next(row for row in result['balances'] if row['asset_type'] == asset)


def run(chain):
    if chain.tip() == 0:
        chain.mine(120, fund_miner=True)
    else:
        assert chain.tip() == 21601 and chain.block(21601)['major_version'] == 13, 'Wrong token context fixture'
    # Token activation on mainnet is later than the first possible stake
    # maturity. Preserve that context: existing protocol validation requires
    # an empty payout transaction through the first 21,600 blocks.
    while chain.tip() < 21601:
        chain.mine(min(1000, 21601 - chain.tip()), refresh=False)
    for wallet in chain.wallets:
        wallet.call('refresh')
    print('Pre-token protocol maturity context ready', flush=True)
    chain.transfer(0, 1, 1500 * COIN)
    chain.transfer(0, 2, 10 * COIN)
    chain.mine(11)
    creation = chain.wallets[1].call('create_token', {'ticker': 'YAHU', 'supply': 1_000_000,
        'account_index': 0, 'subaddr_indices': [0], 'name': 'Disposable audit test',
        'get_tx_hex': True, 'do_not_relay': True})
    relay(chain, creation)
    _, issuance_height = chain.transaction(creation['tx_hash_list'][0])
    print('Canonical salYAHU issuance confirmed', flush=True)
    chain.mine(61)
    first = token_transfer(chain, 1, 2, 100 * COIN)
    assert len(first['tx_blob_list']) == 2
    # Reproduce the historical structural defect before spending its inputs.
    original = bytes.fromhex(first['tx_blob_list'][-1])
    pieces = original.split(b'\x07salYAHU')
    assert len(pieces) == 6, 'Expected token input, two outputs, source and destination'
    malformed = pieces[0] + b''.join(
        (b'\x04SAL1' if index in (1, 2) else b'\x07salYAHU') + piece
        for index, piece in enumerate(pieces[1:]))
    response = chain.daemon.request('/send_raw_transaction', {'tx_as_hex': malformed.hex()})
    assert response.get('status') != 'OK', '465074-style token to SAL1 issuance accepted'
    relay(chain, first, token=True)
    print('Cross-asset mutation rejected and valid token transfer confirmed', flush=True)
    chain.mine(11)
    # Keep a second token owner absent through cutoff. Tokens in the same
    # wallet remain eligible only if their own evidence and ancestry clear.
    absent_account = chain.wallets[0].call('create_account', {'label': 'Withheld token owner'})['account_index']
    absent_address = chain.wallets[0].call('get_address', {'account_index': absent_account,
        'carrot': True})['addresses'][0]['address_carrot']
    absent = token_transfer(chain, 2, 0, 20 * COIN, absent_address)
    relay(chain, absent, token=True)
    chain.mine(11)
    signed = token_transfer(chain, 1, 2, COIN)
    relay(chain, {key: signed[key][:1] for key in ('tx_hash_list', 'tx_blob_list')})
    chain.mine(chain.activation - 1 - chain.tip())
    assert chain.state([])['candidate_height'] == chain.activation
    for index in (0, 1, 2):
        rejected(lambda i=index: token_transfer(chain, i, (i + 1) % 3, COIN), 'Unenrolled token wallet signed')
    # Bypass the public RPC sanity check to exercise the actual consensus gate.
    response = chain.daemon.request('/send_raw_transaction', {
        'tx_as_hex': signed['tx_blob_list'][-1], 'do_sanity_checks': False, 'do_not_relay': True})
    assert response.get('status') != 'OK', 'Unenrolled raw token spend accepted'
    recipient = chain.wallets[2].call('audit')
    assert balance(recipient, 'salYAHU')['unresolved_count'] > 0
    chain.mine(recipient['pending_batches'] + 1)
    assert balance(chain.wallets[2].call('audit', {'status_only': True}), 'salYAHU')['unresolved_count'] > 0
    issuer = chain.wallets[1].call('audit')
    chain.mine(issuer['pending_batches'] + 1)
    pending = chain.wallets[1].call('audit', {'status_only': True})
    assert balance(pending, 'salYAHU')['unresolved_count'] > 0, 'Issuance cleared without SAL1 funding owner'
    assert not chain.daemon.call('get_lineage_audit_outputs', {'asset_type': 'salYAHU'}).get('outputs')
    # Explicit account scope withholds the miner's token deposit in account 1;
    # the other wallets above exercise the default that enrolls every asset.
    miner = chain.wallets[0].call('audit', {'all_accounts': False, 'account_index': 0})
    chain.mine(miner['pending_batches'] + 1)
    good = chain.wallets[1].call('audit', {'status_only': True})
    token_rows = [row for row in good['outputs'] if row['asset_type'] == 'salYAHU' and not row['spent']]
    assert token_rows and balance(good, 'salYAHU')['good_count'] == len(token_rows), good
    assert good['good'] == balance(good, 'SAL1')['good'], 'Token units mixed into SAL1 totals'
    release = max(row['release_height'] for row in token_rows)
    assert all(row['release_height'] == row['completed_height'] + 10 for row in token_rows)
    chain.mine(release - 2 - chain.tip())
    assert chain.state([])['candidate_height'] == release - 1
    rejected(lambda: token_transfer(chain, 1, 2, COIN), 'Token wallet signed at C + 9')
    response = chain.daemon.request('/send_raw_transaction', {
        'tx_as_hex': signed['tx_blob_list'][-1], 'do_sanity_checks': False, 'do_not_relay': True})
    assert response.get('status') != 'OK', 'Prepaid raw token spend accepted at C + 9'
    chain.mine(1)
    pool = chain.daemon.call('get_lineage_audit_outputs', {'asset_type': 'salYAHU'})
    assert pool['asset_type'] == 'salYAHU' and pool['outputs']
    for output in pool['outputs']:
        lookup = chain.daemon.request('/get_outs', {'outputs': [{'amount': 0,
            'index': output['index'], 'is_global_out': False}], 'asset_type': 'salYAHU', 'get_txid': True})
        assert lookup.get('status') == 'OK' and lookup['outs'][0]['unlocked'], lookup
    rejected(lambda: chain.daemon.call('get_lineage_audit_outputs', {'asset_type': 'SAL'}), 'Legacy SAL population accepted')
    token_transfer(chain, 1, 2, COIN)  # Wallet can sign at C + 10.
    # Drop the clearance blocks and prove that token signing freezes again.
    saved = [chain.daemon.call('get_block', {'height': height})['blob']
             for height in range(chain.activation, chain.tip() + 1)]
    chain.daemon.request('/pop_blocks', {'nblocks': chain.tip() - chain.activation + 1})
    for wallet in chain.wallets:
        wallet.call('refresh')
    assert not chain.daemon.call('get_lineage_audit_outputs', {'asset_type': 'salYAHU'}).get('outputs')
    rejected(lambda: token_transfer(chain, 1, 2, COIN), 'Reorg retained token clearance')
    for blob in saved:
        chain.daemon.call('submit_block', [blob])
    for wallet in chain.wallets:
        wallet.call('refresh')
    assert chain.daemon.call('get_lineage_audit_outputs', {'asset_type': 'salYAHU'}) == pool
    response = chain.daemon.request('/send_raw_transaction', {
        'tx_as_hex': signed['tx_blob_list'][-1], 'do_sanity_checks': False, 'do_not_relay': True})
    assert response.get('status') == 'OK', response
    wait_for_template(chain, signed['tx_hash_list'][-1])
    chain.mine(1)
    assert signed['tx_hash_list'][-1] in chain.block(release)['tx_hashes'], 'Token spend missed exact C + 10'
    chain.mine(11)
    closing = chain.activation + chain.audit_duration
    chain.mine(closing - 1 - chain.tip())
    late = chain.wallets[2].call('audit')
    assert not late.get('proofs') and balance(late, 'salYAHU')['good_count'] > 0
    withheld = chain.wallets[0].call('audit')
    assert not withheld.get('proofs') and balance(withheld, 'salYAHU')['unresolved'] == 20 * COIN, withheld
    assert all(row['state'] == 'UNDISCLOSED' for row in withheld['outputs'] if row['asset_type'] == 'salYAHU'), withheld
    after = token_transfer(chain, 2, 1, COIN)
    relay(chain, after, token=True)
    snapshot = chain.wallets[2].call('audit', {'status_only': True})
    daemon = chain.processes[0]
    command = list(daemon.args)
    assert '--regtest' in command and Path(command[command.index('--data-dir') + 1]).is_relative_to(chain.root)
    daemon.terminate()
    daemon.wait(timeout=20)
    chain.start('token-daemon-restarted', command, chain.daemon, 'get_info')
    assert chain.wallets[2].call('audit', {'status_only': True}) == snapshot, 'Restart changed token clearance'
    return {'status': 'TOKEN_AUDIT_PASS', 'issuance_height': issuance_height,
        'release_height': release, 'closing_height': closing,
        'checks': ['canonical_salYAHU_issuance', '465074_structural_defect_rejected',
            'bare_audit_includes_tokens', 'token_and_SAL1_ancestry', 'separate_asset_balances',
            'H_freeze', 'C_plus_9_rejected', 'raw_prepaid_token_spend_at_C_plus_10', 'per_asset_population',
            'reorg_revokes_token_clearance', 'replay_restores_token_clearance', 'absent_token_owner_frozen_at_cutoff', 'post_cutoff_token_spend', 'restart_restores_token_clearance']}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    parser.add_argument('--fixture', type=Path, help='Optional disposable context through block 21601, with wallet key files')
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-tokens-'))
    print(root, flush=True)
    binaries = root / 'bin'
    binaries.mkdir()
    for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-blockchain-verification'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
    if args.fixture:
        fixture = args.fixture.resolve()
        manifest = json.loads((fixture / 'context.json').read_text())
        assert manifest['status'] == 'AUDIT_TOKEN_CONTEXT_FIXTURE' and manifest['height'] == 21601
        database = root / 'chain/fake/lmdb'
        database.mkdir(parents=True)
        subprocess.run([str(binaries / 'salvium-blockchain-verification'), '--db-path',
            str(fixture / 'chain/fake/lmdb'), '--copy-db', str(database)], check=True)
        for owner in ('miner', 'alice', 'bob', 'observer'):
            destination = root / owner
            destination.mkdir()
            filename = 'mining-sink.keys' if owner == 'observer' else 'wallet.keys'
            shutil.copy2(fixture / owner / filename, destination / filename)
    chain = TokenChain(binaries, root)
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
