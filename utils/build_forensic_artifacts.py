#!/usr/bin/env python3
"""Convert Salvium audit logs into deterministic JSON/JSONL evidence."""

import argparse
import hashlib
import json
import os
import shlex
import tempfile


def parse_record(line):
    parts = shlex.split(line.strip())
    record = {"record_type": parts[0]}
    for item in parts[1:]:
        if "=" not in item:
            continue
        key, value = item.split("=", 1)
        if value.lstrip("-").isdigit():
            value = int(value)
        record[key] = value
    return record


def evidence(record):
    result = dict(record)
    result.pop("evidence_hash", None)
    canonical = json.dumps(result, sort_keys=True, separators=(",", ":"))
    result["evidence_hash"] = hashlib.sha256(canonical.encode()).hexdigest()
    return result


def atomic_json(path, value):
    directory = os.path.dirname(path)
    os.makedirs(directory, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        "w", dir=directory, prefix=".forensic-", delete=False
    ) as stream:
        json.dump(value, stream, sort_keys=True, indent=2)
        stream.write("\n")
        stream.flush()
        os.fsync(stream.fileno())
        temporary = stream.name
    os.replace(temporary, path)


def atomic_jsonl(path, records):
    directory = os.path.dirname(path)
    os.makedirs(directory, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        "w", dir=directory, prefix=".forensic-", delete=False
    ) as stream:
        for record in records:
            stream.write(json.dumps(evidence(record), sort_keys=True))
            stream.write("\n")
        stream.flush()
        os.fsync(stream.fileno())
        temporary = stream.name
    os.replace(temporary, path)


def read_records(paths):
    for path in paths:
        if not path or not os.path.isfile(path):
            continue
        with open(path, encoding="utf-8", errors="replace") as stream:
            for line in stream:
                if line.strip():
                    yield parse_record(line)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--forensic-log", required=True)
    parser.add_argument("--rules-log", required=True)
    parser.add_argument("--import-log", required=True)
    parser.add_argument("--output-dir", required=True)
    args = parser.parse_args()

    records = list(read_records(
        [args.import_log, args.rules_log, args.forensic_log]))
    blocks = [r for r in records if r["record_type"] == "BLOCK_FORENSIC_RECORD"]
    hardfork_boundaries = [
        r for r in records if r["record_type"] == "HF_BOUNDARY_RECORD"
    ]
    transactions = [
        r for r in records if r["record_type"] in {
            "FORENSIC_TX", "FORENSIC_MATCH", "FORENSIC_STAKE_DISSECTION",
            "ASSET_FLOW_FINDING", "ASSET_FLOW_LINEAGE_CANDIDATE",
        }
    ]
    issuance = [
        r for r in records if r["record_type"] in {
            "ISSUANCE_EDGE", "INDEPENDENT_CHAIN_FINDING",
            "UNAUTHORIZED_OUTPUT",
        }
    ]
    suspicious = [
        r for r in records if r["record_type"] in {
            "UNAUTHORIZED_OUTPUT", "LINEAGE_OUTPUT", "PROPOSED_BLACKLIST",
            "FORENSIC_STAKE_MEMBER", "ASSET_FLOW_TROUBLE_OUTPUT",
            "ASSET_FLOW_DESCENDANT_REFERENCE",
        }
    ]
    rollback = [
        r for r in records
        if r["record_type"] == "ROLLBACK_AUDIT" and r.get("status") == "FAIL"
    ]
    migration = [
        r for r in records if r["record_type"] in {
            "LEGACY_SAL1_INVENTORY", "LINEAGE_ROOT_ERROR",
            "OUTPUT_RECORD_CHECK",
        } and r.get("status") == "FAIL"
    ]
    summaries = {
        r["record_type"]: r for r in records
        if r["record_type"].endswith("_SUMMARY")
        or r["record_type"] == "TABLE_COUNTS"
    }

    atomic_jsonl(os.path.join(args.output_dir, "blocks.jsonl"), blocks)
    atomic_json(
        os.path.join(args.output_dir, "hardfork_boundaries.json"),
        [evidence(record) for record in hardfork_boundaries])
    atomic_jsonl(
        os.path.join(args.output_dir, "transactions.jsonl"), transactions)
    atomic_jsonl(
        os.path.join(args.output_dir, "issuance_manifest.jsonl"), issuance)
    atomic_json(
        os.path.join(args.output_dir, "suspicious_outputs.json"),
        [evidence(record) for record in suspicious])
    atomic_json(
        os.path.join(args.output_dir, "rollback_failures.json"),
        [evidence(record) for record in rollback])
    atomic_json(
        os.path.join(args.output_dir, "migration_findings.json"),
        [evidence(record) for record in migration])

    graph_edges = [
        evidence(dict(r)) for r in records if r["record_type"] == "ISSUANCE_EDGE"
    ]
    atomic_json(os.path.join(args.output_dir, "authorization_graph.json"), {
        "edge_count": len(graph_edges),
        "edges": graph_edges,
    })

    code_paths = [
        {
            "path": "miner_tx rewards, fees, treasury",
            "construction": "src/cryptonote_core/cryptonote_tx_utils.cpp:construct_miner_tx",
            "validation": "src/cryptonote_core/blockchain.cpp:validate_miner_transaction",
            "rollback": "src/blockchain_db/blockchain_db.cpp:pop_block",
        },
        {
            "path": "protocol_tx STAKE, AUDIT, CREATE_TOKEN payouts",
            "construction": "src/cryptonote_core/cryptonote_tx_utils.cpp:construct_protocol_tx",
            "validation": "src/cryptonote_core/blockchain.cpp:validate_protocol_transaction",
            "rollback": "src/blockchain_db/lmdb/db_lmdb.cpp:remove_block",
        },
        {
            "path": "transaction conservation and special transaction types",
            "construction": "src/cryptonote_core/cryptonote_tx_utils.cpp",
            "validation": "src/cryptonote_core/tx_rules_validate.cpp and src/cryptonote_core/blockchain.cpp:check_tx_inputs",
            "rollback": "spent_keys removal in src/blockchain_db/lmdb/db_lmdb.cpp",
        },
        {
            "path": "output-index migration and translation",
            "construction": "src/blockchain_db/lmdb/db_lmdb.cpp:realign_rct_index",
            "validation": "src/blockchain_utilities/blockchain_verification.cpp output audit",
            "rollback": "src/blockchain_db/lmdb/db_lmdb.cpp:restore_legacy_output_index",
        },
    ]
    atomic_json(os.path.join(args.output_dir, "code_paths.json"), code_paths)

    limitations = [
        "A ring reference proves candidate membership, not the real spent output.",
        "A confidential scalar amount is not reported unless public data proves it.",
        "Historical daemon-version comparison requires the corresponding source/build.",
        "Interrupted-migration and synthetic alternative-block fault injection are not PASS unless their dedicated records exist.",
    ]
    atomic_json(os.path.join(args.output_dir, "summary.json"), {
        "summaries": summaries,
        "counts": {
            "blocks": len(blocks),
            "hardfork_boundary_records": len(hardfork_boundaries),
            "transactions": len(transactions),
            "issuance_records": len(issuance),
            "suspicious_output_records": len(suspicious),
            "rollback_failures": len(rollback),
            "migration_findings": len(migration),
        },
        "coverage_limitations": limitations,
    })
    print(
        f"FORENSIC_ARTIFACTS output_dir={args.output_dir} "
        f"blocks={len(blocks)} issuance={len(issuance)} "
        f"suspicious={len(suspicious)} rollback_failures={len(rollback)}"
    )


if __name__ == "__main__":
    main()
