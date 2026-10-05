#!/usr/bin/env python3
"""Build the developer's scheduled SAL1 audit fork without starting a daemon."""
import argparse
import json
from pathlib import Path
import re
import shutil
import subprocess

from run_salvium_audit import BINARIES, digest, read_config, require, write_json


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--config", required=True, type=Path)
    parser.add_argument("--source-dir", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--destination", type=Path)
    parser.add_argument("--opening-height", type=int, help="Inclusive context boundary before SAL1 history (mainnet: 154749)")
    parser.add_argument("--duration-blocks", type=int, default=10080,
                        help="Enrollment window; default 10080 blocks (two weeks at target)")
    args = parser.parse_args()
    config, _ = read_config(args.config.resolve())
    height = config["activation_height"]
    require(0 < args.duration_blocks <= 2**64 - 10 - height, "Invalid audit duration or final release-height overflow")
    require(height > 521425 and config["network"] == "mainnet", "Mainnet activation_height must follow HF13 (521425); isolated tests use the regtest flag")
    source = args.source_dir.resolve()
    policy = source / "src/cryptonote_core/lineage_audit_policy.h"
    require(policy.is_file(), "source-dir must contain the supplied audit implementation")
    inspection = subprocess.run([str(config["binary_dir"] / "salvium-blockchain-verification"),
        "--db-path", str(config["source_lmdb"]), "--snapshot-info"], check=True, text=True, capture_output=True)
    match = re.search(r"SNAPSHOT_INFO blocks=(\d+)", inspection.stdout)
    require(match is not None and height >= int(match[1]), "Activation must be later than the existing chain tip")
    destination = (args.destination or source / "build/audit-activation").resolve()
    require(not destination.exists() or not any(destination.iterdir()), "Use an empty deployment destination")
    text = policy.read_text()
    opening_match = re.search(r"#define SALVIUM_LINEAGE_AUDIT_MAINNET_OPENING_HEIGHT (\d+)", text)
    require(opening_match is not None, "Unrecognized opening-inventory policy template")
    opening_height = args.opening_height if args.opening_height is not None else int(opening_match[1])
    require(0 < opening_height < height, "Pin the pre-SAL1 context boundary before activation")
    require(opening_height < 465074,
            "The opening inventory must precede salYAHU issuance at 465074; later roots could accept its descendants")
    updated, count = re.subn(r"#define SALVIUM_LINEAGE_AUDIT_MAINNET_HEIGHT \d+",
                            f"#define SALVIUM_LINEAGE_AUDIT_MAINNET_HEIGHT {height}", text)
    require(count == 1, "Unrecognized activation policy template")
    updated, count = re.subn(r"#define SALVIUM_LINEAGE_AUDIT_MAINNET_OPENING_HEIGHT \d+",
                            f"#define SALVIUM_LINEAGE_AUDIT_MAINNET_OPENING_HEIGHT {opening_height}", updated)
    require(count == 1, "Unrecognized opening-inventory policy template")
    updated, count = re.subn(r"#define SALVIUM_LINEAGE_AUDIT_DURATION_BLOCKS \d+",
                            f"#define SALVIUM_LINEAGE_AUDIT_DURATION_BLOCKS {args.duration_blocks}", updated)
    require(count == 1, "Unrecognized audit duration policy template")
    policy.write_text(updated)
    print(f"Building consensus activation at mainnet block {height}; source policy: {policy}", flush=True)
    subprocess.run(["make", "release-static", "builddir=build/audit", "topdir=../../..",
                    f"-j{config['threads']}"], cwd=source, check=True)
    binaries = source / "build/audit/release/bin"
    destination.mkdir(parents=True, exist_ok=True, mode=0o700)
    for name in BINARIES:
        shutil.copy2(binaries / name, destination / name)
    write_json(destination / "activation.json", {"network": "mainnet", "fork_version": 14, "activation_height": height,
        "opening_height": opening_height,
        "duration_blocks": args.duration_blocks, "closing_height": height + args.duration_blocks,
        "release_delay_blocks": 10,
        "enrollment_closes_permanently": True, "normal_stake_and_output_maturity_preserved": True,
        "binaries_sha256": {name: digest(destination / name) for name in BINARIES}})
    print(f"Ready: {destination}. The developer controls daemon startup. All validating nodes must use the same scheduled fork.")


if __name__ == "__main__":
    main()
