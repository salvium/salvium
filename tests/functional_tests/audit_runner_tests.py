#!/usr/bin/env python3
"""Small orchestration regressions; no daemon, wallets or chain databases."""
import contextlib
import io
import json
import sys
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

import audit_wallet_matrix_regtest as matrix
import audit_wallet_matrix_suite_regtest as suite


class AuditRunnerTests(unittest.TestCase):
    def test_suite_runs_one_shard_at_a_time(self):
        with tempfile.TemporaryDirectory() as temporary:
            base = Path(temporary)
            root = base / 'salvium-wallet-matrix-suite-v2-test'
            root.mkdir()
            active = set()
            launched = []
            owner = self

            class Shard:
                def __init__(self, command, stdout, **kwargs):
                    owner.assertFalse(active, 'Concurrent large-chain reconstructions')
                    self.number = int(command[command.index('--start-case') + 1])
                    launched.append(self.number)
                    active.add(self.number)
                    self.root = base / f'salvium-wallet-matrix-v2-{self.number}'
                    self.root.mkdir()
                    stdout.write(str(self.root) + '\n')
                    stdout.flush()
                    self.done = False

                def poll(self):
                    if not self.done:
                        rows = [{'number': i, 'transfer': str(i), 'spend_tx_hash': str(i)}
                                for i in range(self.number, self.number + 250)]
                        (self.root / 'cases.jsonl').write_text(''.join(json.dumps(row) + '\n' for row in rows))
                        report = {'status': 'WALLET_MATRIX_PASS', 'cases': 250, 'start_case': self.number,
                                  'start_tip': 106543, 'binary_sha256': {'mock': 'mock'},
                                  'forged_proofs_rejected': 250, 'false_mints_rejected': 500,
                                  'reorg_cases': 0, 'restart_cases': 0}
                        (self.root / 'result.json').write_text(json.dumps(report))
                        active.remove(self.number)
                        self.done = True
                    return 0

                def wait(self, **kwargs):
                    return self.poll()

            with patch.object(suite.sys, 'argv', ['suite', '--fixture', str(base), '--root', str(root)]), \
                    patch.object(suite.subprocess, 'Popen', Shard), contextlib.redirect_stdout(io.StringIO()):
                suite.main()
            self.assertEqual(launched, [0, 250, 500, 750])
            self.assertFalse(active)

    def test_damaged_journal_fails_before_starting_services(self):
        with tempfile.TemporaryDirectory() as temporary:
            fixture = Path(temporary)
            (fixture / 'result.json').write_text(json.dumps({'status': 'COMPLEX_WALLET_AUDIT_PASS'}))
            root = fixture / 'salvium-wallet-matrix-v2-damaged'
            root.mkdir()
            damaged = '{"number": 0}\n\x00\x00'
            (root / 'cases.jsonl').write_text(damaged)
            with patch.object(sys, 'argv', ['matrix', '--fixture', str(fixture), '--root', str(root)]), \
                    patch.object(matrix, 'WalletAuditFixture') as services, contextlib.redirect_stdout(io.StringIO()):
                with self.assertRaisesRegex(RuntimeError, 'Damaged matrix journal'):
                    matrix.main()
                services.assert_not_called()
            self.assertEqual((root / 'cases.jsonl').read_text(), damaged)


if __name__ == '__main__':
    unittest.main()
