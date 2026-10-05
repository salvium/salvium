#!/usr/bin/env python3
"""Exercise the actual SAL1 wallet audit command on an isolated fakechain."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
from audit_gate_regtest import AuditChain
from audit_release_regtest import RpcError

COIN = 100_000_000


def mixed_scope_selection(chain):
    """Good funds elsewhere must not enable spending a quarantined subaddress."""
    wallet = chain.wallets[2]
    minor = wallet.call('create_address', {'account_index': 0})['address_index']
    address = wallet.call('get_address', {'account_index': 0, 'address_index': [minor],
        'carrot': True})['addresses'][0]['address_carrot']
    funding = chain.wallets[0].call('transfer', {'destinations': [
        {'address': address, 'amount': COIN, 'asset_type': 'SAL1'}],
        'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3, 'account_index': 0,
        'priority': 1, 'ring_size': 16, 'unlock_time': 0})
    for _ in range(20):
        chain.mine(1)
        if funding['tx_hash'] in chain.block(chain.tip())['tx_hashes']:
            break
    else:
        raise AssertionError('Mixed-scope funding did not confirm')
    chain.mine(11)
    result = wallet.call('audit', {'status_only': True})
    assert result['good'] == 3 * COIN and result['unresolved'] == COIN, result
    params = {'destinations': [{'address': chain.sink_address, 'amount': COIN // 2, 'asset_type': 'SAL1'}],
        'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3, 'account_index': 0,
        'subaddr_indices': [minor], 'priority': 1, 'ring_size': 16, 'unlock_time': 0,
        'get_tx_hex': True, 'get_tx_metadata': True, 'do_not_relay': True}
    sweep = {'address': chain.sink_address, 'account_index': 0, 'subaddr_indices': [minor],
        'priority': 1, 'ring_size': 16, 'unlock_time': 0, 'asset_type': 'SAL1', 'do_not_relay': True}
    def blocked():
        for method, request in [('transfer', params), ('sweep_all', sweep)]:
            try:
                wallet.call(method, request)
            except RpcError:
                continue
            raise AssertionError(f'{method} selected a quarantined receipt despite good funds elsewhere')
    blocked()
    wallet.call('audit', {'all_accounts': False, 'account_index': 0, 'subaddr_indices': [minor]})
    chain.mine(1)
    status = wallet.call('audit', {'status_only': True, 'all_accounts': False,
        'account_index': 0, 'subaddr_indices': [minor]})
    release = status['outputs'][0]['release_height']
    assert release and status['good'] == COIN, status
    chain.mine(release - 2 - chain.tip())
    blocked()  # Candidate C+9.
    chain.mine(1)
    # Both unchanged requests are valid controls at candidate C+10.
    assert wallet.call('sweep_all', sweep)['tx_hash_list']
    signed = wallet.call('transfer', params)
    assert signed['tx_hash']
    accepted = wallet.call('relay_tx', {'hex': signed['tx_metadata']})
    assert accepted['tx_hash'] == signed['tx_hash']


def run(chain, root, binaries):
    chain.mine(100, fund_miner=True)
    chain.transfer(0, 1, 50 * COIN)
    chain.mine(11)
    account = chain.wallets[1].call('create_account', {'label': 'second audit account'})['account_index']
    exchange_account = chain.wallets[1].call('create_account', {'label': 'exchange deposits'})['account_index']
    deposits = {(account, 0): 2 * COIN}
    for major, amount in [(0, 4 * COIN), (account, 8 * COIN), (exchange_account, 16 * COIN)]:
        # Leave an unused address before each funded deposit address.
        chain.wallets[1].call('create_address', {'account_index': major})
        minor = chain.wallets[1].call('create_address', {'account_index': major})['address_index']
        deposits[major, minor] = amount
    destinations = []
    for (major, minor), amount in deposits.items():
        address = chain.wallets[1].call('get_address', {'account_index': major,
            'address_index': [minor], 'carrot': True})['addresses'][0]['address_carrot']
        destinations.append({'address': address, 'amount': amount, 'asset_type': 'SAL1'})
    chain.wallets[0].call('transfer', {'destinations': destinations,
        'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3, 'account_index': 0, 'priority': 1,
        'ring_size': 16, 'unlock_time': 0})
    chain.mine(11)
    stake = chain.transfer(1, 1, 12 * COIN, tx_type=6)
    chain.mine(11)
    spend = chain.transfer(1, 2, 3 * COIN, relay=False)
    chain.mine(chain.activation - chain.tip())
    chain.submit(spend, False)
    preview = chain.wallets[1].call('audit', {'do_not_relay': True})
    assert preview['proofs'] and preview['stake_unresolved'] == 12 * COIN, preview
    for (major, minor), amount in deposits.items():
        rows = [row for row in preview['outputs'] if not row['spent'] and not row['stake']
                and (row['account'], row['subaddress']) == (major, minor)]
        assert len(rows) == 1 and rows[0]['amount'] == amount, (major, minor, rows)
    secret = chain.wallets[1].call('query_key', {'key_type': 's_view_balance'})['key']
    assert all(secret not in proof for proof in preview['proofs'])
    chain.wallets[1].call('close_wallet')
    cli = subprocess.run([str(binaries / 'salvium-wallet-cli'),
        '--config-file', str(root / 'isolated.conf'),
        '--wallet-file', str(root / 'alice/wallet'), '--password', '',
        '--shared-ringdb-dir', str(root / 'alice/ringdb'),
        '--daemon-address', chain.daemon.url, '--daemon-ssl', 'disabled',
        '--trusted-daemon', '--allow-mismatched-daemon-version',
        '--regtest-lineage-audit-height', str(chain.activation),
        '--log-file', str(root / 'wallet-cli.log'), '--command', 'audit'],
        input='', capture_output=True, text=True, timeout=180)
    output = cli.stdout + cli.stderr
    (root / 'wallet-cli-output.txt').write_text(output)
    assert 'SAL1 and token wallet audit: UNRESOLVED' in output, output
    assert 'Scope: every account and subaddress in this wallet' in output, output
    assert 'SAL1: good ' in output and ', bad ' in output and 'Locked stake principal:' in output, output
    chain.wallets[1].call('open_wallet', {'filename': 'wallet', 'password': ''})
    chain.wallets[1].call('auto_refresh', {'enable': False})
    chain.mine(15)
    pending = chain.wallets[1].call('audit', {'status_only': True})
    assert pending['unresolved'] > 0 and pending['stake_unresolved'] == 12 * COIN, pending
    chain.submit(spend, False)
    miner = chain.wallets[0].call('audit')
    assert miner['pending_batches'] > 0, miner
    # Existing enrollments coexist in the node's queue; the owner submits only
    # through normal wallet RPC/CLI, never through a miner administration tool.
    chain.mine(miner['pending_batches'] + 12)
    all_miner = chain.wallets[0].call('audit', {'status_only': True})
    assert all_miner['bad_count'] == all_miner['unresolved_count'] == 0, all_miner
    good = chain.wallets[1].call('audit', {'status_only': True})
    assert good['bad'] == 0 and good['unresolved'] == 0 and good['stake_good'] == 12 * COIN, good
    assert any(row['stake'] and row['immature'] for row in good['outputs']), good
    # Alice has enrolled only through the bare CLI command. Every deposit,
    # including later accounts and subaddresses beyond unused ones, must clear.
    for (major, minor), amount in deposits.items():
        rows = [row for row in good['outputs'] if not row['spent'] and not row['stake']
                and (row['account'], row['subaddress']) == (major, minor)]
        assert len(rows) == 1 and rows[0]['amount'] == amount and rows[0]['state'] == 'AUDIT_PASSED', rows
    scoped = chain.wallets[1].call('audit', {'status_only': True, 'all_accounts': False, 'account_index': account})
    assert scoped['good'] == 10 * COIN and all(row['account'] == account for row in scoped['outputs']), scoped
    chain.submit(spend, True)
    chain.mine(1)
    assert spend['tx_hash'] in chain.block(chain.tip())['tx_hashes']
    # One saved batch spans a retained receipt and a subsequently detached
    # receipt. Refresh must retain and repackage the surviving finite proof.
    detached = chain.transfer(0, 2, COIN)
    for attempt in range(10):
        chain.mine(1)
        if detached['tx_hash'] in chain.block(chain.tip())['tx_hashes']:
            break
    else:
        raise AssertionError('Test transfer did not confirm')
    bob_enrollment = chain.wallets[2].call('audit')
    assert len(bob_enrollment['proofs']) == 1 and len(bob_enrollment['outputs']) == 2, bob_enrollment
    chain.daemon.request('/pop_blocks', {'nblocks': 1})
    chain.daemon.call('flush_txpool', {'txids': [detached['tx_hash']]})
    chain.mine(1, refresh=False)  # Present the replacement branch to wallet refresh.
    chain.wallets[2].call('refresh')
    chain.mine(13)
    retained = chain.wallets[2].call('audit', {'status_only': True})
    assert retained['good'] == 3 * COIN and retained['unresolved_count'] == 0, retained
    # Invalid finite proofs are rejected by native block-template validation.
    valid = preview['proofs'][0]
    control = chain.daemon.call('get_block_template', {'wallet_address': chain.sink_address,
        'reserve_size': 0, 'audit_disclosure': valid})
    wrong_network = bytearray.fromhex(valid)
    wrong_network[33] ^= 1
    forged_block = control['blocktemplate_blob'].replace(valid, wrong_network.hex(), 1)
    assert forged_block != control['blocktemplate_blob']
    before = chain.tip()
    try:
        chain.daemon.call('submit_block', [forged_block])
    except RpcError:
        pass
    else:
        raise AssertionError('Forged enrollment bypassed direct block validation')
    assert chain.tip() == before
    chain.daemon.call('submit_block', [control['blocktemplate_blob']])
    assert chain.tip() == before + 1
    rejected = 0
    for number in range(1000):
        data = bytearray.fromhex(valid)
        index = 1 + number % (len(data) - 1)
        data[index] ^= 1 + (number // (len(data) - 1)) % 255
        try:
            chain.daemon.call('get_block_template', {'wallet_address': chain.sink_address,
                'reserve_size': 0, 'audit_disclosure': data.hex()})
        except RpcError:
            rejected += 1
        else:
            raise AssertionError(f'Invalid audit proof accepted: {number}, byte {index}')
    mixed_scope_selection(chain)
    return {'status': 'WALLET_AUDIT_PASS', 'tip': chain.tip(), 'stake': stake['tx_hash'],
        'release_height': chain.transaction(spend['tx_hash'])[1], 'released_spend': spend['tx_hash'],
        'invalid_native_proofs_rejected': rejected, 'cli_entry_point': True,
        'all_miner_batches_confirmed_in_bulk': True, 'mixed_batch_survives_orphaned_receipt': True,
        'default_all_accounts_and_explicit_scope': True,
        'bare_audit_enrolls_every_account_and_deposit_subaddress': True,
        'deposit_accounts': 3, 'deposit_outputs_checked': len(deposits),
        'direct_forged_block_rejected_with_valid_control': True,
        'mixed_good_and_quarantined_subaddress_transfer_and_sweep': True,
        'viewing_secret_absent': True, 'immature_good_stake_enrolled': True,
        'pending_wallet': pending, 'good_wallet': good}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-wallet-audit-v2-'))
    print(root, flush=True)
    binaries = root / 'bin'
    binaries.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-wallet-cli'):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
        with (binaries / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    chain = AuditChain(binaries, root)
    try:
        chain.launch()
        result = run(chain, root, binaries)
        result['binary_sha256'] = hashes
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps({key: value for key, value in result.items() if not key.endswith('_wallet')}), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
