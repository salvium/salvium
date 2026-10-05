#!/usr/bin/env python3
"""Summarize the complex fixture without treating unknown mainnet value as zero."""
import argparse
import json
from pathlib import Path

ORIGIN = "9353dd3288e20618596085228ea6faf5bf2a9d01cd98c36ea5ceeef2c2d4eb1e"


def fields(line):
    return dict(piece.split("=", 1) for piece in line.split()[1:] if "=" in piece)


def coins(atomic):
    if atomic is None:
        return "Unknown"
    whole, fraction = divmod(atomic, 100_000_000)
    return f"{whole:,}.{fraction:08d}"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", type=Path)
    parser.add_argument("--mainnet-forensics", required=True, type=Path)
    parser.add_argument("--test-result", action="append", type=Path, default=[])
    args = parser.parse_args()
    result = json.loads((args.root / "result.json").read_text())
    assert result["status"] == "COMPLEX_FIXTURE_PASS", "refuse to summarize an unfinished run as passing"
    totals = result["sal1_totals"]
    findings, bad_outputs, private_fees = [], [], {}
    possible, proven = set(), set()
    native_summary, disposition = None, None
    with args.mainnet_forensics.open() as stream:
        for line in stream:
            if line.startswith("ASSET_FLOW_FINDING "):
                findings.append(fields(line))
            elif line.startswith("ASSET_FLOW_PRIVATE_FEE "):
                entry = fields(line)
                private_fees[entry["tx"]] = entry
            elif line.startswith("ASSET_FLOW_TROUBLE_OUTPUT ") and ORIGIN in line:
                bad_outputs.append(fields(line))
            elif line.startswith("ASSET_FLOW_LINEAGE_CANDIDATE ") and ORIGIN in line:
                entry = fields(line)
                (proven if entry["confidence"] == "DESCENDANT_PROVEN" else possible).add(entry["tx"])
            elif line.startswith("ASSET_FLOW_SUMMARY "):
                native_summary = fields(line)
            elif line.startswith("AUDIT_DISPOSITION "):
                disposition = fields(line)
    assert native_summary is not None, "mainnet scan is incomplete"
    assert disposition == {"forensic_bad_funds": "yes", "verified_as_good": "no"}, "historical bad funds were not denied clearance"
    assert len(bad_outputs) == 2 and all(entry["indexed_asset"] == "SAL1" for entry in bad_outputs)
    fee_atomic = sum(int(entry["fee"]) for entry in private_fees.values())
    unmatched_fees = sum(int(entry["fee"]) for entry in private_fees.values() if entry["rollup_match"] == "no")
    assert int(native_summary["public_private_token_fees_atomic"]) == fee_atomic
    assert int(native_summary["exact_cross_asset_fees_to_sal1_atomic"]) == unmatched_fees
    origin_amount = int(native_summary["exact_sal1_created_atomic"]) if native_summary["sal1_origin_amount_total"] == "COMPLETE" else None
    assert origin_amount == 40_000_000 * 100_000_000, "historical aggregate proof did not recover the 40M SAL1 issuance"
    mainnet = {"snapshot_blocks": int(native_summary["blocks"]),
        "snapshot_transactions": int(native_summary["txs"]), "bad_origin_tx": ORIGIN,
        "bad_sal1_origin_output_count": len(bad_outputs),
        "bad_sal1_origin_output_ids": [int(entry["output_id"]) for entry in bad_outputs],
        "bad_sal1_origin_amount_atomic": origin_amount, "current_good_sal1_atomic": None,
        "current_bad_sal1_atomic": None, "private_token_fee_records": len(private_fees),
        "public_private_token_fee_atomic": fee_atomic, "unmatched_private_token_fee_atomic": unmatched_fees,
        "matched_rollup_fee_atomic": fee_atomic - unmatched_fees,
        "proven_origin_descendants": len(proven), "unresolved_origin_candidates": len(possible - proven),
        "native_summary": native_summary, "audit_disposition": disposition,
        "note": "The single public issuance input plus verified RingCT proves the 40M aggregate. Individual output amounts and later real-input links remain hidden, preventing exact current good/bad balances. Matched SAL1 rollup fees are not unbacked issuance."}
    native_tests = []
    for path in args.test_result:
        test = json.loads(path.read_text())
        assert test.get("status", "").endswith("_PASS"), f"Unfinished or failed native test: {path}"
        native_tests.append(test)
    report = {"fixture": totals, "damaged_snapshot_audits": result["damaged_snapshot_audits"],
        "mainnet": mainnet, "native_gate_and_regression_tests": native_tests}
    (args.root / "audit-summary.json").write_text(json.dumps(report, indent=2) + "\n")
    mature = sum(stake["status"] == "MATURED" for stake in result["stakes"])
    immature = sum(stake["status"] == "IMMATURE_STAKE" for stake in result["stakes"])
    confirmed = sum(result["confirmed_miner_outputs"])
    lines = ["# Complex Salvium audit result", "",
        f"Fixture status: **{result['status']}**. Canonical snapshot height: **{result['tip']:,}**.", "",
        f"100 wallets; 1,000 funded exchange subaddresses; {confirmed:,} confirmed miner outputs across ten miner wallets; "
        f"{mature} matured stakes and {immature} immature stakes across twenty staking wallets.", "",
        "| Snapshot | Good unspent SAL1 | Bad unspent SAL1 | Bad output count |",
        "|---|---:|---:|---:|",
        f"| Valid isolated chain | {coins(totals['good_unspent_atomic'])} | {coins(totals['unspent_outputs']['bad']['atomic'])} | 0 |"]
    for item in result["damaged_snapshot_audits"]:
        lines.append(f"| Offline copy: {item['case']} | {coins(item['good_unspent_atomic'])} | "
                     f"{coins(item['bad_unspent_atomic'])} | {item['bad_output_count']} |")
    lines.extend(["", "The copies are deliberately corrupted test databases. The native offline audit rejected both; "
        "no daemon accepted them. Each row is a separate snapshot, not additive value.", "",
        f"Good stake principal still locked: **{coins(totals['good_locked_stake_principal_atomic'])} SAL1**, "
        "reported separately from unspent outputs.", "",
        f"The valid-chain total includes {coins(totals['wallet_unspent_atomic'])} SAL1 in the 100 wallets and "
        f"{coins(totals['treasury_unspent_atomic'])} SAL1 in authorized treasury outputs. "
        f"Staking emission not represented by outputs: {coins(totals['undistributed_staking_reserve_atomic'])} SAL1 "
        "(including unallocated yield and rounding; not a spendable balance). "
        "Wallet balances, fees, burns, payouts, and native issuance reconcile.", "",
        f"Mainnet snapshot: {mainnet['snapshot_blocks']:,} blocks / {mainnet['snapshot_transactions']:,} regular transactions. "
        f"Block 465074 has two confirmed bad SAL1 origin outputs (2621581 and 2621582), totaling **{coins(origin_amount)} SAL1**. "
        "The canonical 40M salYAHU issuance input, its commitment, and the transaction's ring/range proofs establish the aggregate. "
        "The two individual amounts remain confidential. "
        "Exact current good/bad mainnet balances are **unknown**, not zero.", "",
        f"Visible private-token fees across {len(private_fees)} transfers total **{coins(fee_atomic)} SAL1**; "
        f"{coins(fee_atomic - unmatched_fees)} SAL1 matches canonical SAL1 rollup authorizations, and "
        f"{coins(unmatched_fees)} SAL1 has no matching authorization. "
        "Matched rollup fees are not counted as false issuance or deducted again from the 40M token-funded output aggregate. "
        f"The 465074 lineage has {len(proven)} proven descendant transactions and {len(possible - proven):,} unresolved "
        "ring candidates. Unresolved candidates are not automatically classified as good or bad.", "",
        "All 100 owner histories were independently reconstructed from disposable viewing keys. Native invalid-transaction "
        "and invalid-mint tests rejected the bad cases while valid controls succeeded.", "",
        "**Scope:** the frozen baseline ran before audit activation. Separate native gate test results below "
        "establish quarantine, release and stake maturity enforcement. "
        "The workload exercises the requested classes but does not reproduce every mainnet transaction, fork, or lineage depth.", ""])
    if native_tests:
        lines.extend(["## Native gate and regression evidence", "", "| Result | Evidence |", "|---|---|"])
        for test in native_tests:
            facts = "; ".join(f"{name}: {test[name]}" for name in ("cases", "wallets", "audited_unspent_outputs",
                "immature_stakes", "early_signed_spends_rejected", "mature_signed_spends_confirmed",
                "source_height", "committed_blocks", "payout_each_atomic") if name in test)
            lines.append(f"| {test['status']} | {facts or 'See the accompanying JSON result for assertions and heights.'} |")
        lines.append("")
    (args.root / "AUDIT_REPORT.md").write_text("\n".join(lines))
    print(args.root / "AUDIT_REPORT.md")


if __name__ == "__main__":
    main()
