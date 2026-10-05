"""Reproduce known requirement failures in disposable wallets and fakechain."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO / 'tests/functional_tests'))
from audit_gate_regtest import AuditChain
from audit_release_regtest import RpcError
from lineage_disclosure import encode_disclosure

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--binaries', type=Path, default=REPO / 'build/audit/release/bin')
parser.add_argument('--result', type=Path, default=REPO / 'build/audit-reevaluation/wallet-gaps.json')
args = parser.parse_args()
root = Path(tempfile.mkdtemp(prefix='salvium-wallet-audit-review-'))
print(root, flush=True)
binaries = root / 'bin'
binaries.mkdir()
fingerprints = {}
for name in ('salviumd', 'salvium-wallet-rpc', 'salvium-wallet-cli',
             'salvium-blockchain-verification', 'salvium-blockchain-import',
             'salvium-blockchain-export'):
    source = args.binaries.resolve() / name
    shutil.copy2(source, binaries / name)
    with source.open('rb') as stream:
        fingerprints[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
chain = AuditChain(binaries, root)
findings = {}
try:
    chain.launch()
    chain.mine(100, fund_miner=True)
    chain.transfer(0, 1, 50 * 100_000_000)
    chain.mine(11)
    chain.transfer(1, 1, 12 * 100_000_000, tx_type=6)
    chain.mine(11)
    chain.mine(chain.activation - chain.tip())
    assert chain.block(chain.tip())['major_version'] == 14
    alice_rows = chain.outputs(1)
    alice_owner = chain.owner(1)
    miner_owner = chain.owner(0)
    chain.wallets[1].call('close_wallet')
    cli = subprocess.run([str(binaries / 'salvium-wallet-cli'),
        '--config-file', str(root / 'isolated.conf'),
        '--wallet-file', str(root / 'alice/wallet'), '--password', '',
        '--daemon-address', chain.daemon.url, '--daemon-ssl', 'disabled',
        '--trusted-daemon', '--allow-mismatched-daemon-version',
        '--regtest-lineage-audit-height', str(chain.activation),
        '--log-file', str(root / 'wallet-cli.log'), '--command', 'audit'],
        input='', capture_output=True, text=True, timeout=60)
    (root / 'wallet-cli-output.txt').write_text(cli.stdout + cli.stderr)
    assert 'Audit command is not available at this time.' in cli.stdout + cli.stderr, cli.stdout + cli.stderr
    findings['wallet_audit_command_unavailable'] = True
    chain.wallets[1].call('open_wallet', {'filename': 'wallet', 'password': ''})
    chain.wallets[1].call('auto_refresh', {'enable': False})
    try:
        result = chain.wallets[1].call('audit', {'address': chain.addresses[1],
            'account_index': 0, 'subaddr_indices': [0], 'payment_id': '',
            'get_tx_keys': False, 'asset_type': 'SAL1'})
    except RpcError as error:
        findings['wallet_rpc_audit_rejection'] = str(error)
    else:
        raise AssertionError(f'Unexpected audit response: {result}')
    genesis = chain.daemon.call('get_block_header_by_height', {'height': 0})['block_header']['hash']
    miner_rows = chain.outputs(0)
    first = encode_disclosure(miner_owner, [miner_rows[0]['tx_hash']], genesis, 3, chain.activation)
    second = encode_disclosure(miner_owner, [miner_rows[1]['tx_hash']], genesis, 3, chain.activation)
    chain.daemon.call('submit_lineage_disclosure', {'data': first})
    try:
        chain.daemon.call('submit_lineage_disclosure', {'data': second})
    except RpcError as error:
        assert 'Another audit disclosure is awaiting mining' in str(error), error
        findings['second_valid_submission_blocked_by_single_slot'] = True
    else:
        raise AssertionError('Expected single-slot queue refusal')
    chain.mine(1)
    extra = bytes(chain.block(chain.tip())['miner_tx']['extra']).hex()
    assert miner_owner['s_view_balance'] in extra
    findings['view_balance_secret_is_public_coinbase_data'] = True
    chain.disclose(alice_owner, sorted({row['tx_hash'] for row in alice_rows}))
    chain.mine(15)
    images = [row['key_image'] for row in alice_rows if not row['spent']]
    states = chain.state(images)['entries']
    assert states and all(row['state'] == 'PENDING' for row in states), states
    findings['honest_owner_requires_other_owners_funding_disclosures'] = True
    findings['good_stake_and_funds_still_pending_after_15_blocks'] = states
    result = {'status': 'REQUIREMENT_FAILURES_REPRODUCED', 'chain': str(root),
        'tip': chain.tip(), 'activation': chain.activation, 'cli_test_hf': 14,
        'source_revision': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=REPO, text=True).strip(),
        'binary_sha256': fingerprints, 'findings': findings}
    (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
    args.result.parent.mkdir(parents=True, exist_ok=True)
    args.result.write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps(result), flush=True)
finally:
    chain.close()
