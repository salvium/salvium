#!/usr/bin/env python3
"""Isolated startup and pruning safeguards for historical audit verification."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile

from audit_release_regtest import LocalChain, Rpc, RpcError


def run(chain, root):
    config = root / 'isolated.conf'
    config.write_text('# Explicit isolated test configuration.\n')

    def command(name, flags=(), regtest=True):
        rpc = Rpc(chain.port())
        args = [str(chain.binaries / 'salviumd'), '--config-file', str(config),
            '--data-dir', str(root / name), '--keep-fakechain', '--fixed-difficulty', '1',
            '--offline', '--no-igd', '--hide-my-port', '--no-zmq', '--non-interactive',
            '--disable-dns-checkpoints', '--check-updates', 'disabled', '--max-concurrency', '1',
            '--p2p-bind-ip', '127.0.0.1', '--p2p-bind-port', str(chain.port()),
            '--rpc-bind-ip', '127.0.0.1', '--rpc-bind-port', str(rpc.port), '--rpc-ssl', 'disabled']
        if regtest:
            args.append('--regtest')
        return args + list(flags), rpc

    def rejected(name, flags, message, regtest=True, data_name=None):
        args, _ = command(data_name or name, flags, regtest)
        result = subprocess.run(args, stdin=subprocess.DEVNULL, capture_output=True, text=True, timeout=60)
        output = result.stdout + result.stderr
        (root / f'{name}.log').write_text(output)
        assert result.returncode != 0 and message in output, (name, result.returncode, output)

    args, rpc = command('pruned')
    chain.start('unconfigured', args, rpc, 'get_info')
    pruned = rpc.call('prune_blockchain', {'check': False})
    assert pruned['pruned'] and pruned['pruning_seed'], pruned
    chain.processes[-1].terminate()
    chain.processes[-1].wait(timeout=20)
    rejected('pruned-audit', ['--regtest-lineage-audit-height', '100'],
        'unpruned historical transactions', data_name='pruned')
    rejected('prune-flag', ['--regtest-lineage-audit-height', '100', '--prune-blockchain'],
        'Pruning is disabled')
    rejected('real-network-test-height', ['--regtest-lineage-audit-height', '100'],
        'Audit test height requires --regtest', regtest=False)
    rejected('real-network-opening', ['--regtest-lineage-audit-opening-height', '50'],
        'Audit test height requires --regtest', regtest=False)
    rejected('real-network-duration', ['--regtest-lineage-audit-duration', '1'],
        'Audit test duration requires --regtest', regtest=False)
    rejected('opening-without-activation', ['--regtest-lineage-audit-opening-height', '50'],
        'Previous audit boundary must precede activation')
    rejected('opening-at-activation', ['--regtest-lineage-audit-height', '100',
        '--regtest-lineage-audit-opening-height', '100'], 'Previous audit boundary must precede activation')

    args, rpc = command('unpruned-audit', ['--regtest-lineage-audit-height', '100'])
    chain.start('audit-control', args, rpc, 'get_info')
    assert not rpc.call('prune_blockchain', {'check': True})['pruned']
    try:
        rpc.call('prune_blockchain', {'check': False})
    except RpcError:
        pass
    else:
        raise AssertionError('Audit node discarded required historical proofs')
    assert not rpc.call('prune_blockchain', {'check': True})['pruned']
    assert rpc.call('get_info')['height'] == 1
    schedule = rpc.call('get_lineage_audit_status', {})
    assert schedule['activation_height'] == 100 and schedule['closing_height'] == 10180, schedule
    return {'status': 'AUDIT_STARTUP_GUARDS_PASS',
        'pruned_database_rejected': True, 'pruning_flag_rejected': True, 'pruning_rpc_rejected': True,
        'real_network_test_option_rejected': True, 'invalid_opening_boundary_rejected': True,
        'default_two_week_duration': schedule['closing_height'] - schedule['activation_height'],
        'unpruned_control_passed': True}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-startup-'))
    binaries = root / 'bin'
    binaries.mkdir()
    shutil.copy2(args.binaries.resolve() / 'salviumd', binaries / 'salviumd')
    print(root, flush=True)
    chain = LocalChain(binaries, root)
    try:
        result = run(chain, root)
        with (binaries / 'salviumd').open('rb') as stream:
            result['daemon_sha256'] = hashlib.file_digest(stream, 'sha256').hexdigest()
        (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
