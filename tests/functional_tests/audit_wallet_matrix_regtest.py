#!/usr/bin/env python3
"""1,000 distinct wallet transitions on a copied, audited 100,000-block chain.

This is an evolving chain, not 1,000 independently mined 100,000-block histories.
All enrollment and coin selection use native wallet RPC. Saved actions and a
per-case journal make a stopped run reviewable and resumable.
"""
import argparse
import fcntl
import hashlib
import json
import os
from pathlib import Path
import random
import shutil
import subprocess
import tempfile
from audit_complex_regtest import atomic_json, CoinbaseReader, varint
from audit_release_regtest import RpcError
from audit_wallet_complex_regtest import WalletAuditFixture
from audit_wallet_bad_stake_regtest import restart_daemon


def summary(result):
    return {key: value for key, value in result.items() if key not in ('outputs', 'proofs')}


def confirm(chain, txid):
    # Wallet relay can still be in Dandelion stem state when the first template
    # is produced. Require actual inclusion, not success of generateblocks.
    known = chain.daemon.request('/get_transactions', {'txs_hashes': [txid], 'decode_as_json': False})
    if any(not row['in_pool'] for row in known.get('txs', [])):
        return
    for attempt in range(20):
        chain.mine_audit(1)
        if txid in chain.block(chain.tip())['tx_hashes']:
            return
    raise AssertionError(f'Transfer did not confirm: {txid}')


def signed_ring(chain, blob):
    reader = CoinbaseReader(bytes.fromhex(blob))
    assert reader.integer() in (4, 5)  # Token-enabled Carrot transfers use v5.
    reader.integer()  # unlock time
    indices, images = [], []
    for _ in range(reader.integer()):
        assert reader.byte() == 2 and reader.integer() == 0
        size = reader.integer()
        assert reader.blob[reader.pos:reader.pos + size] == b'SAL1'
        reader.pos += size
        absolute = 0
        for _ in range(reader.integer()):
            absolute += reader.integer()
            indices.append(absolute)
        images.append(reader.blob[reader.pos:reader.pos + 32].hex())
        reader.pos += 32
    response = chain.daemon.request('/get_outs', {'outputs': [{'amount': 0, 'index': i} for i in indices],
        'asset_type': 'SAL1', 'get_txid': True})
    assert response['status'] == 'OK' and len(response['outs']) == len(indices), response
    return images, [{'index': i, 'key': row['key'], 'mask': row['mask'], 'height': row['height']}
        for i, row in zip(indices, response['outs'], strict=True)]


def clear_unsigned_test_ring(chain, wallet_index, images):
    # These are disposable, never-relayed test signatures. Keep the C+9/C+10
    # control's decoys on the retained branch so an orphaned decoy cannot be
    # mistaken for an audit-delay rejection. Never touch the user's ring DB.
    slot = wallet_index % 4
    with chain.locks[slot]:
        service = chain.services[slot]
        service.call('store')
        service.call('close_wallet')
        chain.opened[slot] = None
        directory = chain.root / f'service-{slot}'
        cli = subprocess.run([str(chain.binaries / 'salvium-wallet-cli'),
            '--config-file', str(chain.root / 'isolated.conf'),
            '--wallet-file', str(directory / f'wallet-{wallet_index:03d}'), '--password', '',
            '--shared-ringdb-dir', str(directory / 'ringdb'),
            '--daemon-address', chain.daemon.url, '--daemon-ssl', 'disabled', '--trusted-daemon',
            '--regtest-lineage-audit-height', str(chain.activation),
            '--log-file', str(chain.root / 'unsigned-ring-control-cli.log'),
            '--command', 'unset_ring', *images], input='', capture_output=True, text=True, timeout=180)
        assert cli.returncode == 0 and 'failed to unset ring' not in cli.stdout + cli.stderr, cli.stdout + cli.stderr
    chain.wallets[wallet_index].call('refresh')


def reject_mint(chain, number):
    template = chain.daemon.call('get_block_template', {'wallet_address': chain.sink, 'reserve_size': 0})
    original = bytes.fromhex(template['blocktemplate_blob'])
    reader = CoinbaseReader(original)
    reader.integer(); reader.integer(); reader.integer(); reader.pos += 36
    miner, protocol = reader.coinbase(), reader.coinbase()
    start, end, out_end, amount = miner['outputs'][0]
    if number % 3 == 2:
        insert = protocol['count_start']
        count_reader = CoinbaseReader(original); count_reader.pos = insert
        count = count_reader.integer()
        bad = original[:insert] + varint(count + 1) + original[start:out_end] + original[count_reader.pos:]
        kind = 'unauthorized_protocol_mint'
    else:
        value = amount + number + 1 if number % 3 == 0 else 2**64 - 1 - number
        bad = original[:start] + varint(value) + original[end:]
        kind = 'excess_miner_reward' if number % 3 == 0 else 'overflow_miner_reward'
    before = chain.tip()
    try:
        chain.daemon.call('submit_block', [bad.hex()])
    except RpcError:
        pass
    else:
        raise AssertionError(f'False mint accepted: {kind}')
    assert chain.tip() == before
    chain.daemon.call('submit_block', [original.hex()])
    assert chain.tip() == before + 1, 'Unmodified mint control failed'
    return kind


def run_case(chain, number, journal):
    rng = random.Random(0x53414c310000 + number)
    # Keep each independent pair open for 50 cases. Reopening an encrypted
    # wallet for every RPC would mainly benchmark password derivation.
    sender, recipient = 50 + (number // 50) % 20, 80 + (number // 50) % 20
    wallet = chain.wallets[recipient]
    scope = {'all_accounts': False, 'account_index': 0}
    if not journal:
        mint_case = reject_mint(chain, number)
        address = wallet.call('create_address', {'account_index': 0, 'label': f'audit-matrix-{number}'})
        minor = address['address_index']
        full = wallet.call('get_address', {'account_index': 0, 'address_index': [minor], 'carrot': True})
        journal.update(number=number, sender=sender, recipient=recipient, minor=minor,
            address=full['addresses'][0]['address_carrot'], amount=rng.randrange(20_000_000, 40_000_000),
            start_tip=chain.tip(), phase='created')
        journal['false_mint_rejected'] = mint_case
        wallet.call('store')
        atomic_json(chain.root / 'active-case.json', journal)
    minor = journal['minor']
    scope['subaddr_indices'] = [minor]
    if journal['phase'] == 'created':
        action = chain.send(f'native-matrix-{number}', sender, [(journal['address'], journal['amount'])])
        confirm(chain, action['txid'])
        _, height = chain.transaction(action['txid'])
        chain.mine_audit(max(0, height + 11 - chain.tip()))
        result = wallet.call('audit', {**scope, 'status_only': True})
        assert result['unresolved'] == journal['amount'] and result['good'] == 0, summary(result)
        try:
            wallet.call('transfer', spend_params(chain, sender, minor, journal['amount']))
        except RpcError:
            pass
        else:
            raise AssertionError('An undisclosed mature receipt was spendable')
        journal.update(phase='funded', transfer=action['txid'], before_enrollment=chain.tip())
        atomic_json(chain.root / 'active-case.json', journal)
    if journal['phase'] == 'funded':
        if 'proof' not in journal:
            preview = wallet.call('audit', {**scope, 'do_not_relay': True})
            journal['proof'] = preview['proofs'][0] if preview['proofs'] else wallet.call(
                'get_attribute', {'key': 'sal1-audit-v2'})['value'].splitlines()[-1]
            atomic_json(chain.root / 'active-case.json', journal)
        parent = chain.wallets[sender].call('audit')
        child = wallet.call('audit', scope)
        # Unique seeded malformed finite proof, checked by native validation.
        forged = bytearray.fromhex(journal['proof'])
        byte = rng.randrange(1, len(forged))
        forged[byte] ^= rng.randrange(1, 256)
        journal['rejected_proof'] = forged.hex()
        try:
            chain.daemon.call('get_block_template', {'wallet_address': chain.sink,
                'reserve_size': 0, 'audit_disclosure': forged.hex()})
        except RpcError:
            pass
        else:
            raise AssertionError('Forged enrollment accepted')
        chain.mine_audit(parent['pending_batches'] + child['pending_batches'] + 1)
        result = wallet.call('audit', {**scope, 'status_only': True})
        assert result['good'] == journal['amount'] and not result['unresolved_count'], summary(result)
        release = max(row['release_height'] for row in result['outputs'])
        chain.mine_audit(max(0, release - 2 - chain.tip()))
        result = wallet.call('audit', {**scope, 'status_only': True})
        assert result['state'] == 'MATURING', summary(result)
        try:
            wallet.call('transfer', spend_params(chain, sender, minor, journal['amount']))
        except RpcError:
            pass
        else:
            raise AssertionError('C+9 wallet coin selection bypassed audit delay')
        chain.mine_audit(1 + rng.randrange(0, 4))
        result = wallet.call('audit', {**scope, 'status_only': True})
        assert result['good'] == journal['amount'] and result['state'] == 'AUDIT_PASSED', summary(result)
        journal.update(phase='cleared', release=release)
        atomic_json(chain.root / 'active-case.json', journal)
    if journal['phase'] == 'cleared':
        # Every case signs a real spend using only its freshly audited receipt.
        for attempt in range(32):
            signed = wallet.call('transfer', spend_params(chain, sender, minor, journal['amount']))
            assert signed['tx_hash']
            if number % 20:
                break
            images, members = signed_ring(chain, signed['tx_blob'])
            if all(row['height'] <= journal['before_enrollment'] for row in members):
                journal['retained_ring_members'] = members
                break
            clear_unsigned_test_ring(chain, recipient, images)
        else:
            raise AssertionError('Could not construct a retained-ring reorg control')
        journal.update(phase='signed', spend=signed, spend_tx_hash=signed['tx_hash'],
            spend_tx_blob=signed['tx_blob'], spend_fee=signed['fee'])
        atomic_json(chain.root / 'active-case.json', journal)
    if journal['phase'] == 'signed':
        if number % 20 == 0:
            pop = chain.daemon.request('/pop_blocks', {'nblocks': chain.tip() - journal['before_enrollment']})
            assert pop['status'] == 'OK'
            assert signed_ring(chain, journal['spend']['tx_blob'])[1] == journal['retained_ring_members']
            raw = chain.daemon.request('/send_raw_transaction', {'tx_as_hex': journal['spend']['tx_blob']})
            assert raw['status'] != 'OK', 'Detached proof still allowed a raw spend'
            chain.mine_audit(1)
            # Saved finite proofs must automatically return after refresh.
            chain.wallets[sender].call('refresh')
            wallet.call('refresh')
            chain.mine_audit(4)
            result = wallet.call('audit', {**scope, 'status_only': True})
            assert result['good'] == journal['amount'], summary(result)
            release = max(row['release_height'] for row in result['outputs'])
            chain.mine_audit(max(0, release - 2 - chain.tip()))
            raw = chain.daemon.request('/send_raw_transaction', {'tx_as_hex': journal['spend']['tx_blob']})
            assert raw['status'] != 'OK', 'Raw spend accepted at candidate C+9'
            chain.mine_audit(1)
            journal['reorg_checked'] = True
        sent = wallet.call('relay_tx', {'hex': journal['spend']['tx_metadata']})
        assert sent['tx_hash'] == journal['spend']['tx_hash']
        confirm(chain, sent['tx_hash'])
        assert chain.transaction(sent['tx_hash'])[1] <= chain.tip()
        # Enroll the scoped receipt history and the outgoing payment. Change
        # outside this minor is enrolled by the final all-account inventory.
        wallet.call('audit', scope)
        chain.wallets[sender].call('audit')
        chain.mine_audit(13)
        journal.update(phase='complete', final_tip=chain.tip())
        atomic_json(chain.root / 'active-case.json', journal)
    if number % 100 == 99:
        chain.test_daemon = restart_daemon(chain, chain.test_daemon)
        chain.daemon.call('get_lineage_audit_status')
        result = wallet.call('audit', {**scope, 'status_only': True})
        assert result['bad_count'] == result['unresolved_count'] == 0, summary(result)
        journal['restart_checked'] = True
    return {key: value for key, value in journal.items() if key != 'spend'}


def spend_params(chain, sender, minor, amount):
    return {'destinations': [{'address': chain.addresses[sender], 'amount': amount // 2, 'asset_type': 'SAL1'}],
        'source_asset': 'SAL1', 'dest_asset': 'SAL1', 'tx_type': 3, 'account_index': 0,
        'subaddr_indices': [minor], 'priority': 1, 'ring_size': 16, 'unlock_time': 0,
        'payment_id': '', 'get_tx_hex': True, 'get_tx_metadata': True, 'do_not_relay': True}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--fixture', type=Path, required=True)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    parser.add_argument('--root', type=Path)
    parser.add_argument('--upgrade-binaries', action='store_true',
        help='Explicitly replace frozen binaries while resuming and record prior hashes')
    parser.add_argument('--cases', type=int, default=1000)
    parser.add_argument('--start-case', type=int, default=0,
        help='First deterministic case number; permits disjoint independent test shards')
    args = parser.parse_args()
    fixture = args.fixture.resolve()
    assert json.loads((fixture / 'result.json').read_text())['status'] == 'COMPLEX_WALLET_AUDIT_PASS'
    root = args.root.resolve() if args.root else Path(tempfile.mkdtemp(prefix='salvium-wallet-matrix-v2-'))
    assert root.name.startswith('salvium-wallet-matrix-v2-') and root.is_relative_to(Path(tempfile.gettempdir()).resolve())
    lock = (root / 'runner.lock').open('w')
    fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    print(root, flush=True)
    results_file = root / 'cases.jsonl'
    try:
        results = [json.loads(line) for line in results_file.read_text().splitlines()] if results_file.exists() else []
        active = root / 'active-case.json'
        if active.exists():
            json.loads(active.read_text())
    except (ValueError, UnicodeError) as error:
        lock.close()
        raise RuntimeError(f'Damaged matrix journal in {root}; preserve this fixture and validate recovery before resuming') from error
    assert args.cases > 0 and args.start_case >= 0 and len(results) <= args.cases
    assert [r['number'] for r in results] == list(range(args.start_case, args.start_case + len(results)))
    if not args.root:
        bins = root / 'bin'; bins.mkdir()
        hashes = {}
        for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-blockchain-verification'):
            shutil.copy2(args.binaries.resolve() / name, bins / name)
            with (bins / name).open('rb') as stream:
                hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
        atomic_json(root / 'binary-sha256.json', hashes)
        db = root / 'chain/fake/lmdb'; db.mkdir(parents=True)
        subprocess.run([str(bins / 'salvium-blockchain-verification'), '--db-path',
            str(fixture / 'chain/fake/lmdb'), '--copy-db', str(db)], check=True)
        shutil.copy2(fixture / 'state.json', root / 'state.json')
        for slot in range(4):
            shutil.copytree(fixture / f'service-{slot}', root / f'service-{slot}',
                ignore=shutil.ignore_patterns('*.log', '*.log.*'))
    elif args.upgrade_binaries:
        assert not (root / 'cases.jsonl').exists(), 'Do not relabel completed cases with another build'
        previous = json.loads((root / 'binary-sha256.json').read_text())
        atomic_json(root / 'previous-binary-sha256.json', previous)
        hashes = {}
        for name in previous:
            shutil.copy2(args.binaries.resolve() / name, root / 'bin' / name)
            with (root / 'bin' / name).open('rb') as stream:
                hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
        atomic_json(root / 'binary-sha256.json', hashes)
    # Auxiliary native CLI is used only to clear never-relayed disposable rings
    # when a newly selected decoy would be removed by the test's planned reorg.
    if not (root / 'bin/salvium-wallet-cli').exists():
        shutil.copy2(args.binaries.resolve() / 'salvium-wallet-cli', root / 'bin/salvium-wallet-cli')
    with (root / 'bin/salvium-wallet-cli').open('rb') as stream:
        auxiliary = {'salvium-wallet-cli': hashlib.file_digest(stream, 'sha256').hexdigest()}
    atomic_json(root / 'auxiliary-binary-sha256.json', auxiliary)
    chain = WalletAuditFixture(root / 'bin', root)
    try:
        chain.launch()
        chain.test_daemon = chain.processes[0]
        chain.initialize_wallets()
        observer = chain.observers[0]
        observer.call('open_wallet' if (root / 'service-4/matrix-carrier.keys').exists() else 'create_wallet',
            {'filename': 'matrix-carrier', 'password': '', 'language': 'English'})
        chain.sink = observer.call('get_address', {'account_index': 0, 'carrot': True})['addresses'][0]['address_carrot']
        observer.call('close_wallet')
        for number in range(args.start_case + len(results), args.start_case + args.cases):
            active = root / 'active-case.json'
            journal = json.loads(active.read_text()) if active.exists() else {}
            if journal.get('number') != number:
                journal = {}
            elif journal.get('phase') in ('funded', 'cleared', 'signed'):
                # Re-exercise an interrupted case's entire evidence suffix.
                # Keep the already signed funding receipt and its maturity.
                before = journal['before_enrollment']
                assert chain.tip() >= before
                if chain.tip() > before:
                    chain.daemon.request('/pop_blocks', {'nblocks': chain.tip() - before})
                chain.daemon.call('flush_txpool', {'txids': []})
                chain.mine_audit(1)
                chain.wallets[journal['sender']].call('refresh')
                chain.wallets[journal['recipient']].call('refresh')
                journal['phase'] = 'funded'
                journal.pop('spend', None)
                atomic_json(active, journal)
            result = run_case(chain, number, journal)
            with results_file.open('a') as stream:
                stream.write(json.dumps(result) + '\n')
                stream.flush()
                os.fsync(stream.fileno())
            results.append(result)
            print(f'Wallet matrix {len(results)}/{args.cases}, height {chain.tip()}', flush=True)
        assert len({row['spend_tx_hash'] for row in results}) == len(results), 'Repeated signed-spend case'
        report = {'status': 'WALLET_MATRIX_PASS', 'cases': len(results), 'start_tip': results[0]['start_tip'],
            'start_case': args.start_case, 'end_case_exclusive': args.start_case + args.cases,
            'final_tip': chain.tip(), 'unique_signed_receipts': len({row['transfer'] for row in results}),
            'forged_proofs_rejected': len(results), 'signed_spends': len(results),
            'unique_signed_spends': len({row['spend_tx_hash'] for row in results}),
            'false_mints_rejected': sum(bool(row.get('false_mint_rejected')) for row in results),
            'reorg_cases': sum(bool(row.get('reorg_checked')) for row in results),
            'restart_cases': sum(bool(row.get('restart_checked')) for row in results),
            'binary_sha256': json.loads((root / 'binary-sha256.json').read_text()),
            'auxiliary_binary_sha256': auxiliary,
            'scope': 'Distinct transitions on one evolving chain starting above 100,000 blocks'}
        atomic_json(root / 'result.json', report)
        print(json.dumps(report), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
