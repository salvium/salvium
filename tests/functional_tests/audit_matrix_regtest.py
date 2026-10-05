#!/usr/bin/env python3
"""1,000 seeded native audit/reorg paths over the complete 100,011-block fixture.

Each case forks the same fully validated snapshot. This is not a claim to mine
1,000 independent 100,000-block histories. No production RPC is accepted.
"""
import argparse
from collections import Counter
import json
from pathlib import Path
import random
import shutil
import subprocess
import tempfile

from audit_release_regtest import LocalChain, Rpc, RpcError
from audit_complex_regtest import atomic_json, CoinbaseReader, varint
from audit_gate_regtest import encode_disclosure


class MatrixChain(LocalChain):
    def launch(self):
        config = self.root / "isolated.conf"
        config.write_text("# Isolated offline matrix fixture.\n")
        self.daemon = Rpc(self.port())
        self.start("daemon", [str(self.binaries / "salviumd"), "--config-file", str(config),
            "--regtest", "--keep-fakechain", "--fixed-difficulty", "1", "--offline",
            "--no-igd", "--hide-my-port", "--no-zmq", "--non-interactive",
            "--disable-dns-checkpoints", "--check-updates", "disabled", "--max-concurrency", "2",
            "--p2p-bind-ip", "127.0.0.1", "--p2p-bind-port", str(self.port()),
            "--rpc-bind-ip", "127.0.0.1", "--rpc-bind-port", str(self.daemon.port),
            "--rpc-ssl", "disabled", "--data-dir", str(self.root / "chain"), "--log-level", "0",
            "--regtest-lineage-audit-height", str(self.activation),
            "--regtest-lineage-audit-duration", "0"], self.daemon, "get_info")

    def mine(self, count):
        if count:
            result = self.daemon.call("generateblocks", {"amount_of_blocks": count,
                "wallet_address": self.sink_address, "prev_block": ""})
            assert len(result["blocks"]) == count

    def states(self, images):
        return self.daemon.call("get_lineage_audit_status", {"key_images": images})["entries"]

    def template(self, data):
        return self.daemon.call("get_block_template", {"wallet_address": self.sink_address,
            "reserve_size": 0, "audit_disclosure": data})


def fields(data):
    raw = bytes.fromhex(data)
    reader = CoinbaseReader(raw)
    reader.pos = 33
    reader.integer()
    view = reader.pos + 64
    reader.pos += 96
    scope = reader.pos
    reader.integer()
    count = reader.pos
    reader.integer()
    return raw, view, scope, count, reader.pos


def invalid_disclosure(data, kind, activation):
    raw, view, scope, count, refs = fields(data)
    changed = bytearray(raw)
    if kind == "wrong_network":
        changed[32] = 0
    elif kind == "wrong_genesis":
        changed[0] ^= 1
    elif kind == "wrong_epoch":
        changed = raw[:33] + varint(activation + 1) + raw[view - 64:]
    elif kind == "wrong_view_secret":
        changed[view:view + 32] = bytes(32)
    elif kind == "empty_scope":
        changed = raw[:scope] + b"\0" + raw[count:]
    elif kind == "oversize_scope":
        changed = raw[:scope] + varint(4097) + raw[count:]
    elif kind == "duplicate_reference":
        changed[refs + 32:refs + 64] = raw[refs:refs + 32]
    elif kind == "unsorted_references":
        changed[refs:refs + 64] = raw[refs + 32:refs + 64] + raw[refs:refs + 32]
    elif kind == "unknown_transaction":
        changed[refs:refs + 32] = bytes(32)
    elif kind == "trailing_bytes":
        changed += b"\0"
    else:
        raise AssertionError(kind)
    assert bytes(changed) != raw
    return bytes(changed).hex()


def rejected(operation):
    try:
        operation()
    except RpcError as error:
        return str(error)
    raise AssertionError("Native RPC accepted a deliberately invalid case")


def run(chain, owners, inventories, count, seed):
    base = chain.activation - 1
    genesis = chain.daemon.call("get_block_header_by_height", {"height": 0})["block_header"]["hash"]
    base_hash = chain.daemon.call("get_block_header_by_height", {"height": base})["block_header"]["hash"]
    assert base >= 100000 and chain.block(base)["major_version"] == 13
    path = chain.root / "cases.jsonl"
    completed = [json.loads(line) for line in path.open()] if path.exists() else []
    assert all(row["case"] == i and row["seed"] == seed for i, row in enumerate(completed))
    # Safe after interruption: only detach this test's suffix from its own copy.
    if chain.tip() > base:
        chain.daemon.request("/pop_blocks", {"nblocks": chain.tip() - base})
    kinds = ("wrong_network", "wrong_genesis", "wrong_epoch", "wrong_view_secret", "empty_scope",
             "oversize_scope", "duplicate_reference", "unsorted_references", "unknown_transaction", "trailing_bytes")
    with path.open("a", buffering=1) as output:
        for number in range(len(completed), count):
            rng = random.Random(seed * 1000003 + number)
            miner = number % 10
            available = inventories[miner]
            chosen = rng.sample(available, 2 + rng.randrange(63))
            txids = sorted({row["tx_hash"] for row in chosen})
            assert 2 <= len(txids) <= 64
            canonical = chain.daemon.request("/get_transactions", {"txs_hashes": txids, "decode_as_json": True})
            assert canonical["status"] == "OK" and not canonical.get("missed_tx")
            by_hash = {row["tx_hash"]: row for row in canonical["txs"]}
            assert set(by_hash) == set(txids)
            # Large change outputs can pass the amount/schedule prefilter.
            # Select only canonical miner roots for these root-release cases.
            chosen = [row for row in chosen if json.loads(by_hash[row["tx_hash"]]["as_json"])["type"] == 1]
            txids = sorted({row["tx_hash"] for row in chosen})
            assert len(txids) >= 2
            for row in chosen:
                entry = by_hash[row["tx_hash"]]
                tx = json.loads(entry["as_json"])
                assert not entry["in_pool"] and tx["type"] == 1 and entry["block_height"] == row["block_height"]
                assert any(out["amount"] == row["amount"] and out["target"]["carrot_v1"]["key"] == row["pubkey"]
                    for out in tx["vout"])
            images = [row["key_image"] for row in chosen]
            excluded = next(row["key_image"] for row in available if row["tx_hash"] not in txids)
            assert all(row["state"] == "UNDISCLOSED" for row in chain.states(images + [excluded]))
            valid = encode_disclosure(owners[miner], txids, genesis, 3, chain.activation)
            kind = kinds[(number // 10) % len(kinds)]
            bad = invalid_disclosure(valid, kind, chain.activation)
            reason = rejected(lambda: chain.template(bad))
            template = chain.template(valid)
            assert template["height"] == chain.activation
            raw_bad_checked = False
            if len(bad) == len(valid):
                forged = template["blocktemplate_blob"].replace(valid, bad, 1)
                assert forged != template["blocktemplate_blob"]
                rejected(lambda: chain.daemon.call("submit_block", [forged]))
                assert chain.tip() == base
                raw_bad_checked = True
            chain.daemon.call("submit_block", [template["blocktemplate_blob"]])
            assert chain.block(chain.activation)["major_version"] == 14
            states = chain.states(images)
            assert all(row["state"] == "MATURING" and row["completed_height"] == chain.activation
                and row["release_height"] == chain.activation + 10 for row in states)
            assert chain.states([excluded])[0]["state"] == "UNDISCLOSED"
            # Vary intermediate block arrival and check the complete boundary.
            first = rng.randrange(9)
            chain.mine(first)
            assert all(row["state"] == "MATURING" for row in chain.states(images))
            chain.mine(8 - first)
            assert all(row["state"] == "MATURING" for row in chain.states(images))
            chain.mine(1)
            assert all(row["state"] == "AUDIT_PASSED" for row in chain.states(images))
            # A reorg that keeps the evidence but removes elapsed blocks must
            # preserve C and revoke eligibility until the same C+10 boundary.
            depth = 1 + rng.randrange(9)
            saved = [chain.daemon.call("get_block", {"height": height})["blob"]
                for height in range(chain.tip() - depth + 1, chain.tip() + 1)]
            chain.daemon.request("/pop_blocks", {"nblocks": depth})
            assert all(row["state"] == "MATURING" and row["completed_height"] == chain.activation
                for row in chain.states(images))
            for blob in saved:
                chain.daemon.call("submit_block", [blob])
            assert all(row["state"] == "AUDIT_PASSED" for row in chain.states(images))
            chain.daemon.request("/pop_blocks", {"nblocks": chain.tip() - base})
            assert all(row["state"] == "UNDISCLOSED" for row in chain.states(images))
            assert chain.daemon.call("get_last_block_header")["block_header"]["hash"] == base_hash
            row = {"case": number, "seed": seed, "status": "PASS", "miner_wallet": miner,
                "references": txids, "atomic": sum(row["amount"] for row in chosen),
                "invalid_case": kind, "native_rejection": reason, "raw_invalid_block_rejected": raw_bad_checked,
                "mining_batches": [first, 8 - first, 1], "partial_reorg_depth": depth,
                "C_plus_9_locked": True, "C_plus_10_passed": True, "full_reorg_revoked": True,
                "replay_restored": True, "undisclosed_control_locked": True}
            output.write(json.dumps(row) + "\n")
            completed.append(row)
            if (number + 1) % 25 == 0:
                print(f"Native 100k snapshot paths: {number + 1}/{count}", flush=True)
    return {"status": "AUDIT_MATRIX_PASS", "snapshot_height": base, "snapshot_hash": base_hash,
        "cases": len(completed), "seed": seed, "distinct_paths": len({tuple(row["references"]) for row in completed}),
        "invalid_categories": dict(Counter(row["invalid_case"] for row in completed)),
        "raw_invalid_blocks_rejected": sum(row["raw_invalid_block_rejected"] for row in completed),
        "canonical_suffix_blocks_generated": 10 * len(completed),
        "scope": "Independent audit, mining-arrival and reorg paths over one fully mined 100011-block snapshot"}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--audit-run", type=Path, required=True)
    parser.add_argument("--owners", type=Path, required=True)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    parser.add_argument("--cases", type=int, default=1000)
    parser.add_argument("--seed", type=int, default=465074)
    parser.add_argument("--root", type=Path)
    args = parser.parse_args()
    assert 1 <= args.cases <= 100000
    owners = json.loads(args.owners.read_text())
    inventories = []
    # Narrow candidates using the known mining schedule; every selected root
    # is then checked against its complete canonical transaction in run().
    for index in range(10):
        rows = json.loads((args.audit_run / f"wallet-scan/owner-{index}.json").read_text())["outputs"]
        inventories.append([row for row in rows if not row["spent"] and row["amount"] > 80 * 100000000
            and row["block_height"] < 100000 and ((row["block_height"] - 1) // 1000) % 10 == index])
        assert len(inventories[-1]) > 1000
    root = args.root.resolve() if args.root else Path(tempfile.mkdtemp(prefix="salvium-audit-matrix-"))
    assert root.is_relative_to(Path(tempfile.gettempdir()).resolve()) and root.name.startswith("salvium-audit-matrix-")
    print(root, flush=True)
    binaries = root / "bin"
    if not args.root:
        binaries.mkdir()
        for name in ("salviumd", "salvium-blockchain-verification"):
            shutil.copy2(args.binaries.resolve() / name, binaries / name)
        db = root / "chain/fake/lmdb"
        db.mkdir(parents=True)
        subprocess.run([str(binaries / "salvium-blockchain-verification"), "--db-path",
            str(args.audit_run.resolve() / "snapshot/lmdb"), "--copy-db", str(db)], check=True)
    chain = MatrixChain(binaries, root)
    chain.activation = json.loads((args.audit_run / "report.json").read_text())["snapshot_height"] + 1
    chain.sink_address = owners[9]["address"]
    try:
        chain.launch()
        result = run(chain, owners, inventories, args.cases, args.seed)
        atomic_json(root / "result.json", result)
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == "__main__":
    main()
