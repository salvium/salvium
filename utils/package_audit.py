#!/usr/bin/env python3
"""Prepare the runnable audit handoff without copying any existing wallets."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess

from run_salvium_audit import BINARIES, REPOSITORY, write_json


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=REPOSITORY / "build/audit-handoff")
    parser.add_argument("--bin-dir", type=Path, default=REPOSITORY / "build/audit/release/bin")
    parser.add_argument("--source-lmdb", type=Path, default=REPOSITORY / ".salvium/lmdb")
    args = parser.parse_args()
    os.umask(0o077)
    root = args.output_dir.resolve()
    root.mkdir(parents=True, exist_ok=True)
    sources = ["audit.md", "LICENSE", "docs/AUDIT_LINEAGE_RELEASE.md",
        "docs/AUDIT_TEST_RESULTS.json", "docs/AUDIT_TEST_PROVENANCE.json",
        "utils/run_salvium_audit.py", "utils/summarize_audit_fixture.py",
        "utils/lineage_disclosure.py", "utils/publish_lineage_audit.py", "utils/build_audit_activation.py",
        "tests/functional_tests/audit_release_regtest.py",
        "tests/functional_tests/audit_gate_regtest.py",
        "tests/functional_tests/audit_stake_gate_regtest.py",
        "tests/functional_tests/audit_payout_recovery_regtest.py",
        "tests/functional_tests/audit_complex_gate_regtest.py",
        "tests/functional_tests/audit_matrix_regtest.py",
        "tests/functional_tests/audit_late_stakes_regtest.py",
        "tests/functional_tests/audit_replay_regtest.py",
        "tests/functional_tests/audit_return_gate_regtest.py",
        "tests/functional_tests/run_audit_regtest.sh",
        "tests/functional_tests/audit_complex_regtest.py",
        "tests/functional_tests/audit_snapshot_faults.py"]
    sources.append("tests/unit_tests/lineage_audit.cpp")
    for source in sources:
        destination = root / source
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(REPOSITORY / source, destination)
    for binary in BINARIES:
        destination = root / "bin" / binary
        destination.parent.mkdir(exist_ok=True)
        shutil.copy2(args.bin_dir / binary, destination)
    state_tests = args.bin_dir / "lineage_audit_tests"
    if state_tests.is_file():
        destination = root / "tests/bin/lineage_audit_tests"
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(state_tests, destination)
    licenses = subprocess.run(["rg", "--files", "-g", "*LICENSE*", "-g", "*COPYING*", "-g", "*license*",
        "external", "contrib/epee", "src/crypto"], cwd=REPOSITORY, check=True, capture_output=True, text=True)
    for name in licenses.stdout.splitlines():
        destination = root / "third-party-licenses" / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(REPOSITORY / name, destination)
    config_path = root / "audit-config.json"
    if not config_path.exists():
        write_json(config_path, {"source_lmdb": str(args.source_lmdb.resolve()), "output_dir": "runs/mainnet",
            "binary_dir": "bin", "network": "mainnet", "owners_file": "audit-config-owners.json",
            "threads": 4, "consensus_replay": True, "expected_tip_hash": "", "activation_height": 650000})
    else:
        config = json.loads(config_path.read_text())
        if "activation_height" not in config:
            config["activation_height"] = 650000
            write_json(config_path, config)
    owners_path = root / "audit-config-owners.json"
    if not owners_path.exists():
        write_json(owners_path, [])
    launcher = root / "run-audit"
    launcher.write_text('''#!/usr/bin/env bash
set -euo pipefail
audit_package=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
cd -- "$audit_package"
exec python3 utils/run_salvium_audit.py --config "${1:-audit-config.json}" "${@:2}"
''')
    launcher.chmod(0o700)
    for name, script in (("build-activation", "build_audit_activation.py"), ("publish-audit", "publish_lineage_audit.py")):
        launcher = root / name
        launcher.write_text('#!/usr/bin/env bash\nset -euo pipefail\naudit_package=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)\ncd -- "$audit_package"\nexec python3 "utils/' + script + '" "$@"\n')
        launcher.chmod(0o700)
    revision = subprocess.run(["git", "rev-parse", "HEAD"], cwd=REPOSITORY, check=True, capture_output=True, text=True).stdout.strip()
    source_info = root / "source.json"
    base_revision = json.loads(source_info.read_text())["base_revision"] if source_info.exists() else revision
    # Only implementation files, never operator data, wallets, or build output.
    patch_sources = sources + ["utils/package_audit.py", "tests/functional_tests/run_audit_regtest.sh",
        "tests/functional_tests/audit_replay_regtest.py", "tests/functional_tests/audit_return_gate_regtest.py",
        ".gitignore", "src/blockchain_utilities/blockchain_verification.cpp",
        "src/blockchain_utilities/independent_chain_forensics.cpp", "src/blockchain_utilities/independent_chain_forensics.h",
        "src/cryptonote_basic/cryptonote_format_utils.cpp", "src/cryptonote_basic/tx_extra.h",
        "src/cryptonote_core/CMakeLists.txt", "src/cryptonote_core/blockchain.h", "src/cryptonote_core/blockchain.cpp",
        "src/cryptonote_core/cryptonote_core.cpp", "src/cryptonote_core/tx_pool.cpp", "src/cryptonote_core/tx_rules_engine.cpp",
        "src/cryptonote_core/lineage_audit.h", "src/cryptonote_core/lineage_audit.cpp", "src/cryptonote_core/lineage_audit_policy.h",
        "src/hardforks/hardforks.cpp", "src/rpc/core_rpc_server.h", "src/rpc/core_rpc_server.cpp",
        "src/rpc/core_rpc_server_commands_defs.h", "src/wallet/tx_builder.cpp", "src/wallet/wallet2.h", "src/wallet/wallet2.cpp"]
    patch_sources = sorted(set(name for name in patch_sources if (REPOSITORY / name).is_file()))
    patch = subprocess.run(["git", "diff", "--binary", base_revision, "--"] + patch_sources,
                           cwd=REPOSITORY, check=True, capture_output=True).stdout
    for name in patch_sources:
        tracked = subprocess.run(["git", "ls-files", "--error-unmatch", "--", name], cwd=REPOSITORY,
                                 stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0
        if not tracked:
            added = subprocess.run(["git", "diff", "--no-index", "--binary", "/dev/null", name],
                                   cwd=REPOSITORY, capture_output=True)
            if added.returncode != 1:
                raise RuntimeError(f"Cannot package source: {name}")
            patch += added.stdout
    (root / "audit-source.patch").write_bytes(patch)
    write_json(root / "source.json", {"base_revision": base_revision, "patch": "audit-source.patch",
        "apply": "git apply --check audit-source.patch && git apply audit-source.patch",
        "build": "make release-static builddir=build/audit topdir=../../.. -j4"})
    hashes = {}
    for path in sorted(root.rglob("*")):
        if path.is_file() and path.name not in ("manifest.json", "audit-config.json", "audit-config-owners.json") and "runs" not in path.relative_to(root).parts:
            with path.open("rb") as stream:
                hashes[str(path.relative_to(root))] = hashlib.file_digest(stream, "sha256").hexdigest()
    write_json(root / "manifest.json", {"source_parent_commit": revision, "files_sha256": hashes,
        "platform": "Linux x86_64; Python 3.11+", "existing_wallets_included": False,
        "note": "Binary and source hashes identify the supplied worktree build; editable operator data is excluded."})
    print(f"Ready: {root / 'run-audit'}")


if __name__ == "__main__":
    main()
