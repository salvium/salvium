#!/usr/bin/env python3
"""Check daemon config selection and sync limits without using an operator config.

Usage: python3 daemon_options.py /path/to/salviumd
"""

import pathlib
import subprocess
import sys
import tempfile


def run(binary, *args):
    result = subprocess.run(
        [binary, *args], capture_output=True, text=True, timeout=30
    )
    assert result.returncode != 0, result.stdout + result.stderr
    return result.stdout + result.stderr


def main(binary):
    with tempfile.TemporaryDirectory(prefix="salvium-daemon-options-") as directory:
        root = pathlib.Path(directory)
        (root / "salvium.conf").write_text("upstream-regression-invalid-option=1\n")
        output = run(binary, "--data-dir", directory, "--non-interactive")
        assert "upstream-regression-invalid-option" in output, output

        # Explicit --config-file must override the data-directory config.
        explicit = root / "explicit.conf"
        explicit.write_text("")
        output = run(
            binary, "--data-dir", directory, "--config-file", str(explicit),
            "--block-sync-size", "101", "--non-interactive",
        )
        assert "block-sync-size cannot be greater than 100" in output, output
        assert "upstream-regression-invalid-option" not in output, output

        # Reject invalid sync sizes before initializing the blockchain database.
        assert not (root / "lmdb").exists()
    print("Daemon option regressions passed")


if __name__ == "__main__":
    main(str(pathlib.Path(sys.argv[1]).resolve()))
