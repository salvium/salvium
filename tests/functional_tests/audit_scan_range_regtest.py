#!/usr/bin/env python3
"""Verify accepted-prefix and inclusive scan boundaries on isolated snapshots."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import tempfile

from audit_complex_regtest import CoinbaseReader, varint
from audit_gate_regtest import AuditChain
from audit_snapshot_faults import replace_block


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    parser.add_argument('--fixture-db', type=Path)
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-audit-scan-range-'))
    binaries = args.binaries.resolve()
    if args.fixture_db:
        source = args.fixture_db.resolve()
    else:
        chain = AuditChain(binaries, root)
        try:
            chain.launch()
            chain.mine(150, fund_miner=True)
        finally:
            chain.close()
        source = root / 'chain/fake/lmdb'
    binary = binaries / 'salvium-blockchain-verification'

    def damage(original):
        reader = CoinbaseReader(original)
        reader.integer(); reader.integer(); reader.integer(); reader.pos += 36
        miner = reader.coinbase()
        start = miner['end'] - 2
        while original[start - 1] & 128:
            start -= 1
        reader.pos = start
        burnt = reader.integer()
        assert reader.pos == miner['end'] - 1
        return original[:start] + varint(burnt + 1) + original[reader.pos:], {'reserve_excess': 1}

    cases = []
    for name, damaged_height in (('good', None), ('accepted-prefix', 50), ('inside-range', 120), ('after-range', 140)):
        database = root / name / 'lmdb'
        database.mkdir(parents=True)
        subprocess.run([str(binary), '--db-path', str(source), '--copy-db', str(database)], check=True)
        if damaged_height is not None:
            replace_block(database, damaged_height, damage)
        log = database.parent / 'scan.log'
        command = [str(binary), '--db-path', str(database), '--regtest',
            '--start-height', '110', '--end-height', '130']
        environment = dict(os.environ, SALVIUM_FULL_FORENSIC_SCAN='1')
        environment.pop('SALVIUM_INDEPENDENT_FORENSICS_ONLY', None)
        with log.open('w') as output:
            run = subprocess.run(command, stdout=output, stderr=subprocess.STDOUT, env=environment, timeout=180)
        lines = log.read_text().splitlines()
        assert run.returncode in (0, 2), log
        summaries = {line.split()[0]: line for line in lines if '_SUMMARY ' in line}
        for prefix, count in (('ASSET_FLOW_SUMMARY', 'blocks'), ('INDEPENDENT_CHAIN_SUMMARY', 'records'), ('FORENSIC_SUMMARY', 'blocks')):
            assert f'{count}=21 ' in summaries[prefix], summaries
        monetary = summaries['INDEPENDENT_CHAIN_SUMMARY']
        expected = 'FINDING' if damaged_height == 120 else 'PASS'
        assert monetary.endswith(f'status={expected}'), monetary
        for line in lines:
            if line.startswith(('INDEPENDENT_CHAIN_FINDING ', 'HF_BOUNDARY_RECORD ', 'FORENSIC_BLOCK ', 'ASSET_FLOW_FINDING ')):
                height = re.search(r'(?:^| )height=(\d+)', line)
                if height:
                    assert 110 <= int(height[1]) <= 130, line
        if damaged_height == 120:
            assert any(line.startswith('INDEPENDENT_CHAIN_FINDING height=120 ') for line in lines)
        cases.append({'case': name, 'damaged_height': damaged_height, 'expected': expected, 'summaries': summaries})
    with binary.open('rb') as stream:
        digest = hashlib.file_digest(stream, 'sha256').hexdigest()
    result = {'status': 'AUDIT_SCAN_RANGE_PASS', 'root': str(root), 'binary_sha256': digest,
        'accepted_opening': 109, 'start': 110, 'end': 130, 'cases': cases}
    (root / 'result.json').write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps({'status': result['status'], 'root': str(root), 'cases': len(cases)}), flush=True)


if __name__ == '__main__':
    main()
