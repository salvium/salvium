#!/usr/bin/env python3
"""Apply native audit quarantine to a copy of the complete 100-wallet fixture."""
import argparse
from collections import Counter
import json
from pathlib import Path
import shutil
import subprocess
import tempfile

from audit_complex_regtest import ComplexChain, atomic_json


class GatedFixture(ComplexChain):
    def __init__(self, binaries, root, activation, old_wallet):
        self.activation, self.old_wallet = activation, old_wallet
        super().__init__(binaries, root)

    def start(self, name, command, rpc, ready_method):
        if name == "daemon":
            command += ["--regtest-lineage-audit-height", str(self.activation),
                        "--regtest-lineage-audit-duration", "0"]  # Historical fixture policy.
        elif name in ("service-0", "service-1", "service-2", "service-3"):
            # An older wallet deliberately ignores the new display/selection
            # gate. The native daemon must still reject its signed transaction.
            command[0] = str(self.old_wallet)
        elif name.startswith("service-"):
            command += ["--regtest-lineage-audit-height", str(self.activation)]
        return super().start(name, command, rpc, ready_method)

    def statuses(self, images):
        result = []
        for offset in range(0, len(images), 1000):
            rows = self.daemon.call("get_lineage_audit_status", {"key_images": images[offset:offset + 1000]})
            result.extend(rows["entries"])
        return result


def exercise(chain, bundle, inventories):
    chain.initialize_wallets()
    unspent = [row for rows in inventories for row in rows if not row["spent"]]
    images = [row["key_image"] for row in unspent]
    assert len(images) == len(set(images))
    checkpoint_path = chain.root / "gate-checkpoint.json"
    checkpoint = json.loads(checkpoint_path.read_text()) if checkpoint_path.exists() else {}
    assert chain.block(chain.activation - 1)["major_version"] == 13
    if not checkpoint:
        assert chain.tip() == bundle["snapshot_height"]
        assert all(row["state"] == "UNDISCLOSED" for row in chain.statuses(images))
        wallet = chain.wallets[30]
        wallet.call("refresh")
        raw = wallet.call("transfer", {"destinations": [{"address": chain.addresses[70], "amount": 100_000_000, "asset_type": "SAL1"}],
            "source_asset": "SAL1", "dest_asset": "SAL1", "tx_type": 3, "account_index": 0, "priority": 1,
            "ring_size": 16, "unlock_time": 0, "payment_id": "", "get_tx_hex": True, "do_not_relay": True})
        rejected = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": raw["tx_blob"]})
        assert rejected["status"] != "OK" and rejected["invalid_input"], rejected
        checkpoint = {"raw": raw, "unaudited_rejection": rejected, "disclosures": {}}
        atomic_json(checkpoint_path, checkpoint)
    raw = checkpoint["raw"]
    # The developer-facing submission queue feeds normal mining templates.
    for index, disclosure in enumerate(bundle["disclosures"]):
        cached_id = checkpoint["disclosures"].get(str(index))
        if cached_id:
            status = chain.daemon.call("get_lineage_audit_status", {"disclosure_ids": [cached_id]})
            if status["disclosure_heights"][0]:
                continue
        response = chain.daemon.call("submit_lineage_disclosure", {"data": disclosure["data"]})
        status = chain.daemon.call("get_lineage_audit_status", {"key_images": [], "disclosure_ids": [response["disclosure_id"]]})
        if not status["disclosure_heights"][0]:
            chain.daemon.call("generateblocks", {"amount_of_blocks": 1, "wallet_address": chain.addresses[9], "prev_block": ""})
            status = chain.daemon.call("get_lineage_audit_status", {"disclosure_ids": [response["disclosure_id"]]})
            assert status["disclosure_heights"] == [chain.tip()]
        assert chain.block(chain.tip())["major_version"] == 14
        checkpoint["disclosures"][str(index)] = response["disclosure_id"]
        atomic_json(checkpoint_path, checkpoint)
        if index % 50 == 0:
            print(f"Canonical disclosures: {index + 1}/{len(bundle['disclosures'])}", flush=True)
    statuses = chain.statuses(images)
    pending = [image for image, row in zip(images, statuses, strict=True) if row["state"] == "PENDING"]
    assert not any(row["state"] in ("BAD", "UNDISCLOSED") for row in statuses), Counter(row["state"] for row in statuses)
    for _ in range(1000):
        if not pending:
            break
        chain.daemon.call("generateblocks", {"amount_of_blocks": 1, "wallet_address": chain.addresses[9], "prev_block": ""})
        checked = chain.statuses(pending)
        assert not any(row["state"] in ("BAD", "UNDISCLOSED") for row in checked)
        pending = [image for image, row in zip(pending, checked, strict=True) if row["state"] == "PENDING"]
    assert not pending, f"{len(pending)} outputs still pending"
    statuses = chain.statuses(images)
    release = max(row["release_height"] for row in statuses)
    if chain.tip() + 1 < release:
        chain.daemon.call("generateblocks", {"amount_of_blocks": release - 1 - chain.tip(), "wallet_address": chain.addresses[9], "prev_block": ""})
    assert all(row["state"] == "AUDIT_PASSED" for row in chain.statuses(images))
    accepted = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": raw["tx_blob"]})
    assert accepted["status"] == "OK", accepted
    chain.daemon.call("generateblocks", {"amount_of_blocks": 1, "wallet_address": chain.addresses[9], "prev_block": ""})
    assert chain.transaction(raw["tx_hash"])[1] >= release
    late = [stake for stake in chain.state["stakes"] if stake["wave"] == "late"]
    assert len(late) == 20 and chain.tip() < min(stake["payout_height"] for stake in late)
    return {"status": "COMPLEX_AUDIT_GATE_PASS", "snapshot_height": bundle["snapshot_height"], "audit_end_height": chain.tip(),
        "wallets": 100, "exchange_customer_subaddresses": 1000, "disclosures": len(bundle["disclosures"]),
        "audited_unspent_outputs": len(images), "audited_unspent_atomic": sum(row["amount"] for row in unspent),
        "bad_audited_outputs": 0, "pending_audited_outputs": 0, "immature_stakes": 20,
        "immature_principal_atomic": sum(stake["principal"] for stake in late),
        "unaudited_signed_spend_rejected": True, "audited_signed_spend_confirmed": raw["tx_hash"],
        "new_mining_outputs_outside_snapshot_remain_unaudited": True}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--fixture", type=Path, required=True)
    parser.add_argument("--audit-run", type=Path, required=True)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    parser.add_argument("--old-wallet", type=Path, default=Path("build/audit-baseline-bin/salvium-wallet-rpc"))
    parser.add_argument("--root", type=Path, help="Resume this test's temporary artifact directory")
    args = parser.parse_args()
    bundle = json.loads((args.audit_run / "lineage-disclosures.json").read_text())
    inventories = [json.loads((args.audit_run / f"wallet-scan/owner-{i}.json").read_text())["outputs"] for i in range(100)]
    declared = [json.loads(line) for line in (args.audit_run / "owner-output-classification.jsonl").open()]
    allowed = {(row["owner"], row["txid"], row["atomic"]) for row in declared if row["status"] == "GOOD"}
    inventories = [[row for row in rows if (i, row["tx_hash"], row["amount"]) in allowed and not row["spent"]]
                   for i, rows in enumerate(inventories)]
    assert sum(map(len, inventories)) == len(declared) == 101453
    root = args.root.resolve() if args.root else Path(tempfile.mkdtemp(prefix="salvium-complex-gate-"))
    assert root.is_relative_to(Path(tempfile.gettempdir()).resolve()) and root.name.startswith("salvium-complex-gate-")
    print(root, flush=True)
    binaries = root / "bin"
    if not args.root:
        binaries.mkdir()
        for name in ("salviumd", "salvium-wallet-rpc", "salvium-blockchain-verification", "salvium-blockchain-import", "salvium-blockchain-export"):
            shutil.copy2(args.binaries.resolve() / name, binaries / name)
        db = root / "chain/fake/lmdb"
        db.mkdir(parents=True)
        subprocess.run([str(binaries / "salvium-blockchain-verification"), "--db-path", str(args.audit_run.resolve() / "snapshot/lmdb"),
                        "--copy-db", str(db)], check=True)
        shutil.copy2(args.fixture / "state.json", root / "state.json")
        for i in range(100):
            directory = root / f"service-{i % 4}"
            directory.mkdir(exist_ok=True)
            for suffix in ("", ".keys"):
                filename = f"wallet-{i:03d}" + suffix
                shutil.copy2(args.fixture / f"service-{i % 4}" / filename, directory / filename)
    chain = GatedFixture(binaries, root, bundle["activation_height"], args.old_wallet.resolve())
    try:
        chain.launch()
        result = exercise(chain, bundle, inventories)
        (root / "result.json").write_text(json.dumps(result, indent=2) + "\n")
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == "__main__":
    main()
