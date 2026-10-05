#!/usr/bin/env python3
"""Replay the native audit gate through an independent full-validation import."""
import argparse
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import struct
import hashlib

from audit_complex_regtest import CoinbaseReader, varint, read_historical


def insert_early_spend(raw, verifier, snapshot, activation, release_height, root):
    """Move the fixture's valid signed spend into the first quarantined block.

    Only a bootstrap test file changes. The source database stays read-only.
    All blocks before activation are byte-identical; the new block retains its
    valid disclosure and adjusts coinbase fees to include the signed transfer.
    """
    evidence = root / "spend-source.txt"
    with evidence.open("w") as output:
        subprocess.run([str(verifier), "--db-path", str(snapshot), "--inspect-height", str(release_height)],
            check=True, stdout=output)
    _, transactions = read_historical(evidence)
    assert len(transactions) == 1
    tx = transactions[0]
    fee = tx["transaction"]["rct_signatures"]["txnFee"]
    blob = raw.read_bytes()
    reader = CoinbaseReader(blob)
    reader.pos = 10  # magic(4), file-info size(4), versions(2)
    position = 4 + reader.integer()
    for height in range(activation + 1):
        size = struct.unpack_from("<I", blob, position)[0]
        chunk_start = position + 4
        chunk = blob[chunk_start:chunk_start + size]
        if height != activation:
            position = chunk_start + size
            continue
        reader = CoinbaseReader(chunk)
        assert reader.integer() == 14
        reader.integer(); reader.integer(); reader.pos += 36
        miner = reader.coinbase()
        reader.coinbase()
        hash_count = reader.pos
        assert reader.integer() == 0
        assert reader.integer() == 0  # bootstrap transaction vector
        auxiliary = reader.pos
        # The null-RingCT byte follows the miner's amount_burnt varint.
        burnt_end = miner["end"] - 1
        burnt_start = burnt_end - 1
        while burnt_start > miner["start"] and chunk[burnt_start - 1] & 128:
            burnt_start -= 1
        original_burnt = CoinbaseReader(chunk[burnt_start:burnt_end]).integer()
        total = original_burnt + sum(out[3] for out in miner["outputs"])
        treasury = total // 4
        updated_treasury = (total + fee) // 4
        updated_burnt = ((total + fee) - updated_treasury) // 5
        updated_miner = total + fee - updated_treasury - updated_burnt
        replacements = [(burnt_start, burnt_end, varint(updated_burnt))]
        for start, end, _, amount in miner["outputs"]:
            replacements.append((start, end, varint(updated_treasury if amount == treasury else updated_miner)))
        changed = chunk[:hash_count] + b"\x01" + bytes.fromhex(tx["txid"]) + b"\x01" + bytes.fromhex(tx["blob"]) + chunk[auxiliary:]
        for start, end, replacement in sorted(replacements, reverse=True):
            changed = changed[:start] + replacement + changed[end:]
        raw.write_bytes(blob[:position] + struct.pack("<I", len(changed)) + changed)
        return tx["txid"]
    raise AssertionError("Missing activation block")


def info(binary, database):
    result = subprocess.run([str(binary), "--db-path", str(database), "--snapshot-info"],
        check=True, capture_output=True, text=True)
    line = next(line for line in result.stdout.splitlines() if line.startswith("SNAPSHOT_INFO "))
    return dict(re.findall(r"(\w+)=([^ ]+)", line))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--fixture", type=Path, required=True)
    parser.add_argument("--activation", type=int, default=240)
    parser.add_argument("--duration-blocks", type=int, default=0)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    parser.add_argument("--expect-rejection", action="store_true")
    parser.add_argument("--skip-per-block-rollback", action="store_true",
        help="Full forward validation; exercise rollback in the separate small replay and wallet matrix")
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix="salvium-audit-replay-"))
    print(root, flush=True)
    binaries = root / "bin"
    binaries.mkdir()
    hashes = {}
    for name in ("salvium-blockchain-verification", "salvium-blockchain-export", "salvium-blockchain-import"):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
        with (binaries / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    verifier = binaries / "salvium-blockchain-verification"
    snapshot = root / "snapshot/lmdb"
    snapshot.mkdir(parents=True)
    subprocess.run([str(verifier), "--db-path", str(args.fixture.resolve() / "chain/fake/lmdb"),
        "--copy-db", str(snapshot)], check=True)
    source = info(verifier, snapshot)
    tip = int(source["blocks"]) - 1
    assert tip >= args.activation
    raw = root / "blockchain.raw"
    with (root / "export.log").open("w") as output:
        subprocess.run([str(binaries / "salvium-blockchain-export"), "--data-dir", str(snapshot.parent),
            "--output-file", str(raw), "--block-stop", str(tip)], check=True, stdout=output, stderr=subprocess.STDOUT)
    early_spend = None
    if args.expect_rejection:
        fixture_result = json.loads((args.fixture / "result.json").read_text())
        early_spend = insert_early_spend(raw, verifier, snapshot, args.activation,
            fixture_result["release_height"], root)
    with (root / "replay.log").open("w") as output:
        process = subprocess.run([str(binaries / "salvium-blockchain-import"), "--data-dir", str(root / "replay"),
            "--input-file", str(raw), "--block-stop", str(tip), "--fast-block-sync", "0", "--offline",
            "--disable-dns-checkpoints", "--batch-size", "1", "--prep-blocks-threads", "2", "--show-time-stats", "0",
            "--log-level", "0,verify:ERROR", "--regtest", "--keep-fakechain", "--fixed-difficulty", "1",
            "--regtest-lineage-audit-height", str(args.activation), "--regtest-lineage-audit-duration", str(args.duration_blocks)],
            env=dict(os.environ, SALVIUM_AUDIT_TRACE="1", SALVIUM_AUDIT_ROLLBACK_EVERY_BLOCK="0" if args.skip_per_block_rollback else "1"),
            stdout=output, stderr=subprocess.STDOUT)
    target = info(verifier, root / "replay/fake/lmdb")
    text = (root / "replay.log").read_text()
    heights = {int(value) for value in re.findall(r"AUDIT_BLOCK height=(\d+).*step=COMPLETE status=PASS", text)}
    if args.expect_rejection:
        assert int(target["blocks"]) == args.activation, target
        assert ("Spend ring contains an output frozen by the audit" if args.duration_blocks else
                "Funds or stake payout have not completed lineage audit") in text
        assert args.activation not in heights
    else:
        assert process.returncode == 0 and target["hash"] == source["hash"] and target["blocks"] == source["blocks"]
        assert all(height in heights for height in range(1, tip + 1))
        assert "AUDIT_CRYPTO_FINDING" not in text and "status=FAIL" not in text
    result = {"status": "AUDIT_REPLAY_REJECTION_PASS" if args.expect_rejection else "AUDIT_REPLAY_PASS",
        "source_height": tip, "source_hash": source["hash"], "committed_blocks": int(target["blocks"]),
        "activation_height": args.activation, "verified_height_records": len(heights),
        "duration_blocks": args.duration_blocks,
        "early_spend_tx": early_spend,
        "import_exit": process.returncode, "fast_block_sync": False, "full_validation": True,
        "rollback_each_block": not args.skip_per_block_rollback, "binary_sha256": hashes}
    (root / "result.json").write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps(result), flush=True)


if __name__ == "__main__":
    main()
