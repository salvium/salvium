#!/usr/bin/env python3
"""Reconstruct delayed stake authorization across isolated daemon restarts."""
import argparse
import json
from pathlib import Path
import shutil
import subprocess
import tempfile

from audit_matrix_regtest import MatrixChain
from audit_complex_regtest import atomic_json


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--fixture", type=Path, required=True)
    parser.add_argument("--owners", type=Path, required=True)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    args = parser.parse_args()
    source = args.fixture.resolve()
    evidence = json.loads((source / "result.json").read_text())
    assert evidence["status"] == "STAKE_AUDIT_GATE_PASS"
    completed, payout = evidence["delayed_completion_height"], evidence["delayed_payout_height"]
    assert payout == completed + 10
    root = Path(tempfile.mkdtemp(prefix="salvium-payout-recovery-"))
    print(root, flush=True)
    binaries = root / "bin"
    binaries.mkdir()
    for name in ("salviumd", "salvium-blockchain-verification"):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
    db = root / "chain/fake/lmdb"
    db.mkdir(parents=True)
    subprocess.run([str(binaries / "salvium-blockchain-verification"), "--db-path",
        str(source / "chain/fake/lmdb"), "--copy-db", str(db)], check=True)
    address = json.loads(args.owners.read_text())[0]["address"]
    chain = None
    generation = 0

    def restart():
        nonlocal chain, generation
        if chain:
            chain.close()
            (root / "daemon.log").rename(root / f"daemon-{generation}.log")
        generation += 1
        chain = MatrixChain(binaries, root)
        chain.activation = evidence["activation_height"]
        chain.sink_address = address
        chain.launch()

    try:
        restart()
        expected = chain.block(payout)["protocol_tx"]
        assert len(expected["vout"]) == 1
        chain.daemon.request("/pop_blocks", {"nblocks": chain.tip() - (completed + 8)})
        chain.mine(1)
        assert chain.tip() == payout - 1 and not chain.block(chain.tip())["protocol_tx"]["vout"]
        restart()
        chain.mine(1)
        assert chain.tip() == payout and chain.block(payout)["protocol_tx"] == expected
        restart()
        chain.mine(2)
        assert all(not chain.block(h)["protocol_tx"]["vout"] for h in (payout + 1, payout + 2))
        chain.daemon.request("/pop_blocks", {"nblocks": chain.tip() - (completed - 1)})
        restart()
        chain.mine(12)
        assert all(not chain.block(h)["protocol_tx"]["vout"] for h in range(completed, completed + 12))
        result = {"status": "STAKE_PAYOUT_RECOVERY_PASS", "daemon_starts": generation,
            "activation_height": chain.activation, "completion_height": completed,
            "delayed_payout_height": payout, "exact_payout_reconstructed_after_restart": True,
            "restart_did_not_repeat_payout": True, "reorg_and_restart_removed_authorization": True}
        atomic_json(root / "result.json", result)
        print(json.dumps(result), flush=True)
    finally:
        if chain:
            chain.close()


if __name__ == "__main__":
    main()
