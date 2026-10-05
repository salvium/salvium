#!/usr/bin/env python3
"""Mature and spend all twenty stakes that were immature in the large audit."""
import argparse
import json
from pathlib import Path
import shutil
import subprocess
import tempfile

from audit_complex_gate_regtest import GatedFixture
from audit_complex_regtest import atomic_json, COIN
from audit_stake_gate_regtest import freeze_other_outputs


def exercise(chain):
    stakes = [row for row in chain.state["stakes"] if row["wave"] == "late"]
    assert len(stakes) == 20 and len({row["wallet"] for row in stakes}) == 20
    assert len({row["payout_height"] for row in stakes}) == 1
    payout = stakes[0]["payout_height"]
    audit_end = chain.tip()
    assert audit_end < payout
    while chain.tip() < payout - 1:
        chain.daemon.call("generateblocks", {"amount_of_blocks": min(1000, payout - 1 - chain.tip()),
            "wallet_address": chain.addresses[9], "prev_block": ""})
        print(f"Twenty audited immature stakes: {chain.tip()}/{payout}", flush=True)
    assert not chain.block(payout - 1)["protocol_tx"]["vout"]
    inclusion = stakes[0]["inclusion"]
    data = chain.daemon.call("get_yield_info", {"include_raw_data": True,
        "from_height": inclusion + 1, "to_height": payout - 1})["yield_data"]
    total = sum(row["principal"] for row in stakes)
    assert [row["block_height"] for row in data] == list(range(inclusion + 1, payout))
    assert all(row["locked_coins_tally"] == total for row in data)
    expected = {stake["wallet"]: stake["principal"] + sum(
        row["slippage_total_this_block"] * stake["principal"] // total for row in data) for stake in stakes}
    chain.daemon.call("generateblocks", {"amount_of_blocks": 1, "wallet_address": chain.addresses[9], "prev_block": ""})
    protocol = chain.block(payout)["protocol_tx"]
    assert len(protocol["vout"]) == 20
    details = []
    for stake in stakes:
        wallet = chain.wallets[stake["wallet"]]
        wallet.call("refresh")
        tx, _ = chain.transaction(stake["txid"])
        key = tx["protocol_tx_data"]["return_address"]
        rows = wallet.call("incoming_transfers", {"transfer_type": "all", "account_index": 0,
            "subaddr_indices": [0]}).get("transfers", [])
        row = next(row for row in rows if row["pubkey"] == key)
        assert row["amount"] == expected[stake["wallet"]] and not row["unlocked"]
        assert any(out["target"]["carrot_v1"]["key"] == key and out["amount"] == row["amount"] for out in protocol["vout"])
        details.append({"wallet": stake["wallet"], "key_image": row["key_image"],
            "principal_atomic": stake["principal"], "payout_atomic": row["amount"]})
        print(f"Verified canonical payout for staking wallet {stake['wallet']}", flush=True)
    states = chain.statuses([row["key_image"] for row in details])
    assert all(row["state"] == "AUDIT_PASSED" and row["completed_height"] <= audit_end for row in states)
    chain.daemon.call("generateblocks", {"amount_of_blocks": 60, "wallet_address": chain.addresses[9], "prev_block": ""})
    raw = []
    for row in details:
        wallet = chain.wallets[row["wallet"]]
        wallet.call("refresh")
        freeze_other_outputs(chain, wallet, row["key_image"])
        tx = wallet.call("transfer", {"destinations": [{"address": chain.addresses[50], "amount": COIN, "asset_type": "SAL1"}],
            "source_asset": "SAL1", "dest_asset": "SAL1", "tx_type": 3, "account_index": 0,
            "subaddr_indices": [0], "priority": 1, "ring_size": 16, "unlock_time": 0, "payment_id": "",
            "get_tx_hex": True, "do_not_relay": True})
        raw.append(tx)
        print(f"Prepared exact payout spend for staking wallet {row['wallet']}", flush=True)
    atomic_json(chain.root / "payout-evidence.json", {"audit_end": audit_end, "payout_height": payout,
        "stakes": details, "signed_spends": raw})
    chain.daemon.request("/pop_blocks", {"nblocks": 2})
    assert chain.tip() + 1 == payout + 59
    for tx in raw:
        response = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": tx["tx_blob"]})
        assert response["status"] != "OK" and response["invalid_input"], response
    chain.daemon.call("generateblocks", {"amount_of_blocks": 1, "wallet_address": chain.addresses[9], "prev_block": ""})
    assert chain.tip() + 1 == payout + 60
    for tx in raw:
        response = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": tx["tx_blob"]})
        assert response["status"] == "OK", response
    chain.daemon.call("generateblocks", {"amount_of_blocks": 1, "wallet_address": chain.addresses[9], "prev_block": ""})
    for row, tx in zip(details, raw, strict=True):
        confirmed, height = chain.transaction(tx["tx_hash"])
        assert height == payout + 60
        assert [entry["key"]["k_image"] for entry in confirmed["vin"]] == [row["key_image"]]
    return {"status": "TWENTY_LATE_STAKES_PASS", "audit_end_height": audit_end, "payout_height": payout,
        "spend_height": chain.tip(), "wallets": 20, "immature_at_audit": 20,
        "principal_atomic": total, "payout_atomic": sum(expected.values()),
        "early_signed_spends_rejected": 20, "mature_signed_spends_confirmed": 20,
        "exact_real_payout_inputs_verified": True, "stakes": details}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--gated-fixture", type=Path, required=True)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    parser.add_argument("--old-wallet", type=Path, default=Path("build/audit-baseline-bin/salvium-wallet-rpc"))
    args = parser.parse_args()
    source = args.gated_fixture.resolve()
    result = json.loads((source / "result.json").read_text())
    assert result["status"] == "COMPLEX_AUDIT_GATE_PASS"
    root = Path(tempfile.mkdtemp(prefix="salvium-late-stakes-"))
    print(root, flush=True)
    binaries = root / "bin"
    binaries.mkdir()
    for name in ("salviumd", "salvium-wallet-rpc", "salvium-blockchain-verification"):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
    db = root / "chain/fake/lmdb"
    db.mkdir(parents=True)
    subprocess.run([str(binaries / "salvium-blockchain-verification"), "--db-path",
        str(source / "chain/fake/lmdb"), "--copy-db", str(db)], check=True)
    shutil.copy2(source / "state.json", root / "state.json")
    for index in range(10, 30):
        directory = root / f"service-{index % 4}"
        directory.mkdir(exist_ok=True)
        for suffix in ("", ".keys"):
            name = f"wallet-{index:03d}" + suffix
            shutil.copy2(source / f"service-{index % 4}" / name, directory / name)
    chain = GatedFixture(binaries, root, result["snapshot_height"] + 1, args.old_wallet.resolve())
    try:
        chain.launch()
        completed = exercise(chain)
        atomic_json(root / "result.json", completed)
        print(json.dumps(completed), flush=True)
    finally:
        chain.close()


if __name__ == "__main__":
    main()
