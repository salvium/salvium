#!/usr/bin/env python3
"""Run 1,000 native wallet cases over four large-chain copies, one at a time."""
import argparse
import hashlib
import json
from pathlib import Path
import signal
import subprocess
import sys
import tempfile
import time
from audit_complex_regtest import atomic_json


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--fixture', type=Path, required=True)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    parser.add_argument('--first-shard', type=Path, help='Resume an existing case-zero matrix with at most 250 completed cases')
    parser.add_argument('--root', type=Path, help='Resume this suite manifest')
    args = parser.parse_args()
    root = args.root.resolve() if args.root else Path(tempfile.mkdtemp(prefix='salvium-wallet-matrix-suite-v2-'))
    assert root.name.startswith('salvium-wallet-matrix-suite-v2-')
    assert root.is_relative_to(Path(tempfile.gettempdir()).resolve())
    import fcntl
    lock = (root / 'runner.lock').open('w')
    fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    print(root, flush=True)
    manifest = root / 'suite-state.json'
    state = json.loads(manifest.read_text()) if manifest.exists() else {
        'fixture': str(args.fixture.resolve()), 'binaries': str(args.binaries.resolve()),
        'shards': [{'start_case': i * 250, 'cases': 250,
            'root': str(args.first_shard.resolve()) if i == 0 and args.first_shard else None} for i in range(4)]}
    atomic_json(manifest, state)
    children, streams = [], []
    try:
        last_progress = None
        for index, shard in enumerate(state['shards']):
            log = root / f'shard-{index}.log'
            # Recover a path printed before an interruption of the suite itself.
            if not shard['root'] and log.exists() and log.read_text().splitlines():
                candidate = Path(log.read_text().splitlines()[0])
                if candidate.name.startswith('salvium-wallet-matrix-v2-') and candidate.is_dir():
                    shard['root'] = str(candidate)
            if shard['root'] and (Path(shard['root']) / 'result.json').exists():
                result = json.loads((Path(shard['root']) / 'result.json').read_text())
                if result.get('status') == 'WALLET_MATRIX_PASS' and result['cases'] == 250:
                    continue
            command = [sys.executable, str(Path(__file__).with_name('audit_wallet_matrix_regtest.py')),
                '--fixture', state['fixture'], '--binaries', state['binaries'],
                '--start-case', str(shard['start_case']), '--cases', str(shard['cases'])]
            if shard['root']:
                command += ['--root', shard['root']]
                if log.exists():
                    log.rename(root / f'shard-{index}-previous-{time.time_ns()}.log')
            stream = log.open('w')
            streams.append(stream)
            child = subprocess.Popen(command, stdout=stream, stderr=subprocess.STDOUT)
            children.append((index, child))
            # Large fixtures each reconstruct their complete audit history.
            # Starting all four together multiplies memory and disk pressure.
            while True:
                lines = (root / f'shard-{index}.log').read_text().splitlines()
                if not shard['root'] and lines:
                    candidate = Path(lines[0])
                    assert candidate.name.startswith('salvium-wallet-matrix-v2-') and candidate.is_dir(), lines[0]
                    shard['root'] = str(candidate)
                    atomic_json(manifest, state)
                code = child.poll()
                if code is not None:
                    if code:
                        raise RuntimeError(f'Shard {index} exited {code}; inspect {root / f"shard-{index}.log"}')
                    children.remove((index, child))
                    break
                progress = []
                for item in state['shards']:
                    path = Path(item['root']) / 'cases.jsonl' if item['root'] else None
                    progress.append(len(path.read_text().splitlines()) if path and path.exists() else 0)
                if progress != last_progress:
                    print(f'Native matrix suite: {sum(progress)}/1000 distinct cases; shards {progress}', flush=True)
                    last_progress = progress
                time.sleep(5)
        rows, reports = [], []
        for shard in state['shards']:
            directory = Path(shard['root'])
            report = json.loads((directory / 'result.json').read_text())
            assert report['status'] == 'WALLET_MATRIX_PASS' and report['cases'] == 250
            assert report['start_case'] == shard['start_case'] and report['start_tip'] >= 100000
            reports.append({'root': str(directory), **report})
            rows.extend(json.loads(line) for line in (directory / 'cases.jsonl').read_text().splitlines())
        assert sorted(row['number'] for row in rows) == list(range(1000)), 'Missing or repeated case IDs'
        assert len({row['transfer'] for row in rows}) == len({row['spend_tx_hash'] for row in rows}) == 1000
        assert all(report['binary_sha256'] == reports[0]['binary_sha256'] for report in reports)
        report = {'status': 'WALLET_MATRIX_SUITE_PASS', 'cases': 1000, 'independent_chain_copies': 4,
            'unique_signed_receipts': 1000, 'unique_signed_spends': 1000,
            'forged_proofs_rejected': sum(r['forged_proofs_rejected'] for r in reports),
            'false_mints_rejected': sum(r['false_mints_rejected'] for r in reports),
            'reorg_cases': sum(r['reorg_cases'] for r in reports),
            'restart_cases': sum(r['restart_cases'] for r in reports), 'shards': reports,
            'source_sha256': hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
            'scope': '1,000 distinct transitions across four evolving copies of the audited 100,000-block fixture; not 1,000 full histories'}
        atomic_json(root / 'result.json', report)
        print(json.dumps(report), flush=True)
    finally:
        for _, child in children:
            if child.poll() is None:
                child.send_signal(signal.SIGINT)
        for _, child in children:
            try:
                child.wait(timeout=60)
            except subprocess.TimeoutExpired:
                child.terminate()
                child.wait(timeout=30)
        for stream in streams:
            stream.close()
        lock.close()


if __name__ == '__main__':
    main()
