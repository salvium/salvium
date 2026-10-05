#!/usr/bin/env python3
"""Run the offline Salvium audit from a filled-in JSON configuration."""
import argparse
from concurrent.futures import ThreadPoolExecutor
import fcntl
import hashlib
import json
import os
from pathlib import Path
import re
import secrets
import shutil
import signal
import subprocess
import sys
import time

REPOSITORY = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPOSITORY / "tests/functional_tests"))
from audit_release_regtest import LocalChain, Rpc
from lineage_disclosure import prepare_bundles

COIN = 100_000_000
BINARIES = ("salvium-blockchain-verification", "salvium-blockchain-export",
            "salvium-blockchain-import", "salviumd", "salvium-wallet-rpc")


def write_json(path, value):
    temporary = path.with_suffix(path.suffix + ".partial")
    temporary.write_text(json.dumps(value, indent=2) + "\n")
    temporary.replace(path)


def digest(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def fields(line):
    return dict(piece.split("=", 1) for piece in line.split()[1:] if "=" in piece)


def amount(value):
    if value is None:
        return "Unknown"
    whole, fractional = divmod(value, COIN)
    return f"{whole:,}.{fractional:08d}"


def require(condition, message):
    if not condition:
        raise ValueError(message)


def read_config(path):
    config = json.loads(path.read_text())
    require(isinstance(config, dict), "Configuration must be a JSON object")
    allowed = {"source_lmdb", "output_dir", "binary_dir", "network", "owners_file",
               "threads", "consensus_replay", "expected_tip_hash", "activation_height"}
    require(not (set(config) - allowed), "Unknown configuration field(s): " + ", ".join(set(config) - allowed))
    for name in ("source_lmdb", "output_dir", "binary_dir"):
        require(isinstance(config.get(name), str) and config[name], f"Fill in {name}")
        candidate = Path(config[name]).expanduser()
        config[name] = (path.parent / candidate).resolve() if not candidate.is_absolute() else candidate.resolve()
    require(config.get("network") in ("mainnet", "regtest"), "network must be mainnet or regtest")
    require(type(config.get("threads", 4)) is int and 1 <= config.get("threads", 4) <= 64, "threads must be 1..64")
    require(type(config.get("consensus_replay", True)) is bool, "consensus_replay must be true or false")
    config.setdefault("threads", 4)
    config.setdefault("consensus_replay", True)
    config.setdefault("activation_height", 650000 if config["network"] == "mainnet" else 0)
    require(type(config["activation_height"]) is int and 0 <= config["activation_height"] < 2**63,
            "activation_height must be zero (unscheduled) or a positive block height")
    require((config["source_lmdb"] / "data.mdb").is_file(), "source_lmdb must contain data.mdb")
    require(not config["output_dir"].is_relative_to(config["source_lmdb"]) and
            not config["source_lmdb"].is_relative_to(config["output_dir"]), "source and output directories must be separate")
    for binary in BINARIES:
        require(os.access(config["binary_dir"] / binary, os.X_OK), f"Missing executable: {binary}; run make release-static")
    tip_hash = config.get("expected_tip_hash", "")
    require(isinstance(tip_hash, str) and (not tip_hash or re.fullmatch("[0-9a-f]{64}", tip_hash)), "expected_tip_hash must be empty or 64 lowercase hex characters")
    owners = []
    require(isinstance(config.get("owners_file", ""), str), "owners_file must be a path string or empty")
    if config.get("owners_file"):
        owner_path = Path(config["owners_file"]).expanduser()
        if not owner_path.is_absolute():
            owner_path = path.parent / owner_path
        owners = json.loads(owner_path.read_text())
    require(isinstance(owners, list), "owners_file must contain a JSON array")
    addresses = set()
    for index, owner in enumerate(owners):
        require(isinstance(owner, dict), f"Owner {index} must be a JSON object")
        require(set(owner) <= {"label", "address", "s_view_balance", "subaddress_count"}, f"Owner {index}: unknown field")
        require(isinstance(owner.get("address"), str) and owner["address"], f"Owner {index}: fill in the primary Carrot address")
        require(owner["address"] not in addresses, f"Owner {index}: duplicate address")
        addresses.add(owner["address"])
        require(isinstance(owner.get("s_view_balance"), str) and
                re.fullmatch("[0-9a-fA-F]{64}", owner["s_view_balance"]), f"Owner {index}: s_view_balance must be a 32-byte hex viewing secret")
        require(type(owner.get("subaddress_count", 1)) is int and 1 <= owner.get("subaddress_count", 1) <= 1_000_000,
                f"Owner {index}: subaddress_count must include the primary address and be 1..1000000")
    return config, owners


class AuditRun:
    def __init__(self, config, owners):
        self.config, self.owners = config, owners
        self.root = config["output_dir"]
        if self.root.exists() and not (self.root / "checkpoint.json").exists():
            require(not any(self.root.iterdir()), "output_dir must be empty for a new audit")
        self.root.mkdir(parents=True, exist_ok=True, mode=0o700)
        os.chmod(self.root, 0o700)
        self.lock = (self.root / "runner.lock").open("w")
        fcntl.flock(self.lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        self.state_path = self.root / "checkpoint.json"
        self.state = json.loads(self.state_path.read_text()) if self.state_path.exists() else {"format": 1, "stages": {}}
        identity = {"source": str(config["source_lmdb"]), "network": config["network"],
                    "binaries": {name: digest(config["binary_dir"] / name) for name in BINARIES}}
        if "identity" in self.state:
            require(self.state["identity"] == identity, "Source/network/build changed; select a new output_dir to preserve the previous audit")
        self.state["identity"] = identity
        self.save()
        self.binary_dir = config["binary_dir"]
        self.snapshot = self.root / "snapshot"
        self.snapshot_db = self.snapshot / "lmdb"

    def save(self):
        write_json(self.state_path, self.state)

    def run(self, stage, command, env=None, accepted=(0,)):
        log = self.root / f"{stage}.log"
        cached = self.state["stages"].get(stage)
        if cached and log.exists() and digest(log) == cached["log_sha256"]:
            print(f"Using completed checkpoint: {stage}", flush=True)
            return cached["exit_code"], log
        print(f"Running {stage}; log: {log}", flush=True)
        process_env = {key: value for key, value in os.environ.items() if not key.startswith("SALVIUM_")}
        process_env.update(env or {})
        with log.open("a" if stage.startswith("consensus-replay") else "w") as output:
            child = subprocess.Popen(command, stdout=output, stderr=subprocess.STDOUT, env=process_env)
            try:
                while child.poll() is None:
                    try:
                        child.wait(timeout=30)
                    except subprocess.TimeoutExpired:
                        print(f"{stage} is running ({log.stat().st_size:,} log bytes)", flush=True)
            except BaseException:
                child.terminate()
                try:
                    child.wait(timeout=30)
                except subprocess.TimeoutExpired:
                    child.kill()
                    child.wait()
                raise
        require(child.returncode in accepted, f"{stage} did not complete (exit {child.returncode}); see {log}")
        self.state["stages"][stage] = {"exit_code": child.returncode, "log_sha256": digest(log)}
        self.save()
        return child.returncode, log

    def copy_snapshot(self):
        if not self.state.get("snapshot_complete"):
            partial = self.root / "snapshot-copy.partial"
            if self.snapshot_db.exists():
                require("snapshot-copy" in self.state["stages"], "Unrecognized snapshot directory; use a new output_dir")
            else:
                if partial.exists():
                    require(not partial.is_symlink() and all(item.name in ("data.mdb", "lock.mdb")
                        and item.is_file() and not item.is_symlink() for item in partial.iterdir()), "Unrecognized files in the snapshot staging directory")
                    if "snapshot-copy" not in self.state["stages"]:
                        shutil.rmtree(partial)
                partial.mkdir(exist_ok=True)
                self.run("snapshot-copy", [str(self.binary_dir / "salvium-blockchain-verification"),
                    "--db-path", str(self.config["source_lmdb"]), "--copy-db", str(partial)])
                self.snapshot.mkdir(exist_ok=True)
                partial.rename(self.snapshot_db)
            self.state["snapshot_complete"] = True
            self.save()
        result = subprocess.run([str(self.binary_dir / "salvium-blockchain-verification"),
            "--db-path", str(self.snapshot_db), "--snapshot-info"], check=True, capture_output=True, text=True)
        info = next((fields(line) for line in result.stdout.splitlines() if line.startswith("SNAPSHOT_INFO ")), None)
        require(info and int(info["blocks"]) > 0, "Snapshot contains no blocks")
        self.height = int(info["height"])
        self.genesis = info["genesis"]
        self.state["snapshot_height"] = self.height
        snapshot_digest = digest(self.snapshot_db / "data.mdb")
        require("snapshot_data_sha256" not in self.state or self.state["snapshot_data_sha256"] == snapshot_digest,
                "Saved snapshot changed; cached audit evidence cannot be reused. Select a new output_dir")
        self.state["snapshot_data_sha256"] = snapshot_digest
        self.save()
        _, inspection = self.run("snapshot-identity", [str(self.binary_dir / "salvium-blockchain-verification"),
            "--db-path", str(self.snapshot_db), "--inspect-height", str(self.height)])
        header = next((fields(line) for line in inspection.open() if line.startswith("INSPECT_BLOCK_HASH ")), None)
        require(header is not None, "Verifier lacks snapshot identity support; rebuild the audit branch")
        require(int(header["height"]) == self.height, "Snapshot identity height does not match")
        expected = self.config.get("expected_tip_hash", "")
        require(not expected or header["hash"] == expected, "Snapshot does not match expected_tip_hash")
        self.state["snapshot_hash"] = header["hash"]
        self.save()

    def native_audits(self):
        verifier = str(self.binary_dir / "salvium-blockchain-verification")
        code, log = self.run("asset-and-rules", [verifier, "--db-path", str(self.snapshot_db)], accepted=(0, 2))
        asset, disposition, rule_failures = None, None, None
        self.bad_transactions, self.possible_transactions = set(), set()
        self.bad_outputs = []
        for line in log.open():
            if line.startswith("ASSET_FLOW_SUMMARY "):
                asset = fields(line)
            elif line.startswith("AUDIT_DISPOSITION "):
                disposition = fields(line)
            elif line.startswith("Failed txs:"):
                rule_failures = int(line.split(":", 1)[1])
            elif line.startswith("ASSET_FLOW_FINDING "):
                self.bad_transactions.add(fields(line)["tx"])
            elif line.startswith("ASSET_FLOW_TROUBLE_OUTPUT "):
                self.bad_outputs.append(fields(line))
            elif line.startswith("ASSET_FLOW_LINEAGE_CANDIDATE "):
                row = fields(line)
                if row["confidence"] == "DESCENDANT_PROVEN":
                    self.bad_transactions.add(row["tx"])
                else:
                    self.possible_transactions.add(row["tx"])
        require(asset is not None and disposition is not None and rule_failures is not None and int(asset["blocks"]) == self.height + 1,
                "Asset/rules audit is incomplete; no clearance is possible")
        money_network = []
        if self.config["network"] == "regtest":
            money_network = ["--regtest", "--regtest-lineage-audit-height", str(self.config["activation_height"])]
        _, money_log = self.run("monetary", [verifier, "--db-path", str(self.snapshot_db), "--no-asset-flow-forensic"] + money_network,
            env={"SALVIUM_FULL_FORENSIC_SCAN": "1", "SALVIUM_INDEPENDENT_FORENSICS_ONLY": "1", "SALVIUM_FORENSIC_VERBOSE": "1"})
        monetary = None
        monetary_findings = []
        self.protocol_sources, self.invalid_heights = {}, set()
        for line in money_log.open():
            if line.startswith("INDEPENDENT_CHAIN_SUMMARY "):
                monetary = fields(line)
            elif line.startswith("ISSUANCE_EDGE "):
                row = fields(line)
                self.protocol_sources[(row["protocol_tx"], int(row["output"]))] = row["source_tx"]
            elif line.startswith("INDEPENDENT_CHAIN_FINDING "):
                row = fields(line)
                monetary_findings.append(row)
                self.invalid_heights.add(int(row["height"]))
        require(monetary is not None and int(monetary["records"]) == self.height + 1, "Monetary audit is incomplete")
        return {"asset_flow": asset, "disposition": disposition, "monetary": monetary, "monetary_findings": monetary_findings,
                "asset_exit_code": code, "rule_failures": rule_failures, "proven_bad_transactions": len(self.bad_transactions),
                "unresolved_ring_candidates": len(self.possible_transactions - self.bad_transactions)}

    def replay(self):
        if not self.config["consensus_replay"]:
            return {"status": "NOT_RUN", "verified": False}
        raw = self.root / "blockchain.raw"
        self.run("export", [str(self.binary_dir / "salvium-blockchain-export"), "--data-dir", str(self.snapshot),
            "--output-file", str(raw), "--block-stop", str(self.height)])
        epoch = self.config["activation_height"] if self.config["network"] == "regtest" and 0 < self.config["activation_height"] <= self.height else 0
        replay_dir = self.root / (f"replay-audit-{epoch}" if epoch else "replay")
        command = [str(self.binary_dir / "salvium-blockchain-import"), "--data-dir", str(replay_dir),
            "--input-file", str(raw), "--block-stop", str(self.height), "--fast-block-sync", "0",
            "--offline", "--disable-dns-checkpoints", "--batch-size", "1",
            "--prep-blocks-threads", str(self.config["threads"]), "--show-time-stats", "0", "--log-level", "0"]
        if self.config["network"] == "regtest":
            command += ["--regtest", "--keep-fakechain", "--fixed-difficulty", "1"]
            if epoch:
                command += ["--regtest-lineage-audit-height", str(epoch)]
        code, log = self.run(f"consensus-replay-audit-{epoch}" if epoch else "consensus-replay", command, env={"SALVIUM_AUDIT_TRACE": "1",
            "SALVIUM_AUDIT_ROLLBACK_EVERY_BLOCK": "1"}, accepted=(0, 1, 2))
        passed_heights = set()
        crypto_findings = 0
        with log.open(errors="replace") as stream:
            for line in stream:
                if "AUDIT_BLOCK " in line and "step=COMPLETE status=PASS" in line:
                    match = re.search(r"AUDIT_BLOCK height=(\d+)", line)
                    if match:
                        passed_heights.add(int(match[1]))
                if "AUDIT_CRYPTO_FINDING" in line or ("AUDIT_" in line and "status=FAIL" in line):
                    crypto_findings += 1
        replay_db = replay_dir / ("fake/lmdb" if self.config["network"] == "regtest" else "lmdb")
        stat = subprocess.run([str(self.binary_dir / "salvium-blockchain-verification"),
            "--db-path", str(replay_db), "--snapshot-info"], capture_output=True, text=True)
        info = next((fields(line) for line in stat.stdout.splitlines() if line.startswith("SNAPSHOT_INFO ")), None)
        committed = int(info["blocks"]) if info else 0
        missing = sum(height not in passed_heights for height in range(1, self.height + 1))
        verified = code == 0 and committed == self.height + 1 and crypto_findings == 0 and missing == 0 and info["hash"] == self.state["snapshot_hash"]
        return {"status": "PASS" if verified else "FAILED_OR_INCOMPLETE", "verified": verified,
            "exit_code": code, "committed_blocks": committed, "verified_block_heights": len(passed_heights),
            "missing_block_verification_records": missing,
            "crypto_findings": crypto_findings}


class SnapshotWallets(LocalChain):
    def __init__(self, run):
        root = run.root / "wallet-scan"
        root.mkdir(exist_ok=True)
        super().__init__(run.binary_dir, root)
        self.run = run
        self.transactions = {}

    def launch(self):
        config = self.root / "isolated.conf"
        config.write_text("# Explicit isolated audit configuration.\n")
        self.daemon = Rpc(self.port())
        # Preserve the hashed native-audit snapshot byte-for-byte. The daemon
        # gets a second disposable copy for its auxiliary LMDB writes.
        data_dir = self.root / "daemon-data"
        network_args = []
        wallet_db = data_dir / "lmdb"
        if self.run.config["network"] == "regtest":
            wallet_db = data_dir / "fake/lmdb"
            network_args = ["--regtest", "--keep-fakechain", "--fixed-difficulty", "1"]
            if 0 < self.run.config["activation_height"] <= self.run.height:
                network_args += ["--regtest-lineage-audit-height", str(self.run.config["activation_height"])]
        if not wallet_db.exists():
            partial = self.root / ("daemon-copy-" + secrets.token_hex(8))
            partial.mkdir()
            subprocess.run([str(self.binaries / "salvium-blockchain-verification"),
                "--db-path", str(self.run.snapshot_db), "--copy-db", str(partial)], check=True,
                stdout=subprocess.DEVNULL)
            wallet_db.parent.mkdir(parents=True, exist_ok=True)
            partial.rename(wallet_db)
        self.start("daemon", [str(self.binaries / "salviumd"), "--config-file", str(config),
            "--data-dir", str(data_dir), "--offline", "--no-igd", "--no-zmq", "--hide-my-port",
            "--non-interactive", "--disable-dns-checkpoints", "--check-updates", "disabled",
            "--p2p-bind-ip", "127.0.0.1", "--p2p-bind-port", str(self.port()),
            "--rpc-bind-ip", "127.0.0.1", "--rpc-bind-port", str(self.daemon.port),
            "--rpc-ssl", "disabled", "--max-concurrency", str(self.run.config["threads"])] + network_args,
            self.daemon, "get_info")
        require(self.daemon.call("get_info")["offline"], "Audit daemon is not offline")
        require(self.tip() == self.run.height, "Snapshot height changed")
        self.snapshot_hash = self.daemon.call("get_last_block_header")["block_header"]["hash"]
        require(self.snapshot_hash == self.run.state["snapshot_hash"], "Wallet scan snapshot changed")
        expected = self.run.config.get("expected_tip_hash", "")
        require(not expected or self.snapshot_hash == expected, "Snapshot does not match expected_tip_hash")
        self.wallets = []
        wallet_network_args = []
        if self.run.config["network"] == "regtest" and 0 < self.run.config["activation_height"] <= self.run.height:
            wallet_network_args = ["--regtest-lineage-audit-height", str(self.run.config["activation_height"])]
        for slot in range(min(4, len(self.run.owners))):
            wallet = Rpc(self.port(), ("audit", secrets.token_hex(24)))
            wallets = self.root / f"wallets-{slot}"
            wallets.mkdir(exist_ok=True)
            self.start(f"wallet-rpc-{slot}", [str(self.binaries / "salvium-wallet-rpc"), "--config-file", str(config),
                "--wallet-dir", str(wallets), "--log-file", str(wallets / "wallet-rpc.log"),
                "--rpc-bind-ip", "127.0.0.1", "--rpc-bind-port", str(wallet.port),
                "--rpc-login", ":".join(wallet.login), "--rpc-ssl", "disabled", "--daemon-address", self.daemon.url,
                "--daemon-ssl", "disabled", "--trusted-daemon", "--allow-mismatched-daemon-version",
                "--max-concurrency", str(self.run.config["threads"])] + wallet_network_args, wallet, "get_version")
            self.wallets.append(wallet)

    def transaction(self, txid):
        if txid not in self.transactions:
            self.transactions[txid] = super().transaction(txid)
        return self.transactions[txid]

    def prime_transactions(self, txids):
        missing = sorted(set(txids) - self.transactions.keys())
        for offset in range(0, len(missing), 500):
            batch = missing[offset:offset + 500]
            result = self.daemon.request("/get_transactions", {"txs_hashes": batch,
                "decode_as_json": True, "prune": False})
            require(result.get("status") == "OK" and not result.get("missed_tx"), "Missing canonical owner transactions")
            require({row["tx_hash"] for row in result["txs"]} == set(batch), "Incomplete canonical transaction response")
            for row in result["txs"]:
                require(not row["in_pool"], "Owner transaction is not in the canonical snapshot")
                self.transactions[row["tx_hash"]] = (json.loads(row["as_json"]), row["block_height"])

    def scan(self, owner, index):
        wallet = self.wallets[index % len(self.wallets)]
        scope = owner.get("subaddress_count", 1)
        cache_key = hashlib.sha256((json.dumps(owner, sort_keys=True) + self.snapshot_hash).encode()).hexdigest()
        path = self.root / f"owner-{index}.json"
        if path.exists():
            cached = json.loads(path.read_text())
            if cached.get("cache_key") == cache_key:
                return cached["outputs"]
        wallet.call("generate_from_keys", {"filename": "view-" + secrets.token_hex(12), "password": "",
            "address": owner["address"], "viewkey": owner["s_view_balance"], "spendkey": "",
            "restore_height": 0, "autosave_current": False})
        wallet.call("auto_refresh", {"enable": False})
        reconstructed = wallet.call("get_address", {"account_index": 0, "carrot": True})["addresses"][0]["address_carrot"]
        require(reconstructed == owner["address"], f"Owner {index}: viewing key does not match the primary Carrot address")
        for offset in range(1, scope, 64):
            wallet.call("create_address", {"account_index": 0, "count": min(64, scope - offset)})
        wallet.call("refresh")
        rows = wallet.call("incoming_transfers", {"transfer_type": "all", "account_index": 0,
            "subaddr_indices": list(range(scope))}).get("transfers", [])
        wallet.call("close_wallet")
        require(all(re.fullmatch("[0-9a-f]{64}", row.get("key_image", "")) and
                    row["key_image"] != "0" * 64 for row in rows), f"Owner {index}: viewing evidence cannot resolve spent status")
        write_json(path, {"cache_key": cache_key, "snapshot": self.snapshot_hash, "outputs": rows})
        print(f"Scanned owner {index + 1}/{len(self.run.owners)}: {len(rows)} outputs", flush=True)
        return rows


def audit_owner_outputs(run, native, replay):
    if not run.owners and not run.config.get("expected_tip_hash"):
        return {"status": "NO_OWNER_DISCLOSURES", "owners": 0, "unspent": {}, "all_current_sal1_counted": False}
    chain = SnapshotWallets(run)
    try:
        chain.launch()
        inventories = [None] * len(run.owners)
        def scan_slot(slot):
            for index in range(slot, len(run.owners), len(chain.wallets)):
                inventories[index] = chain.scan(run.owners[index], index)
        if run.owners:
            with ThreadPoolExecutor(max_workers=len(chain.wallets)) as pool:
                list(pool.map(scan_slot, range(len(chain.wallets))))
        chain.prime_transactions(row["tx_hash"] for rows in inventories for row in rows)
        known = {}
        for rows in inventories:
            for row in rows:
                require(row["key_image"] not in known, "Overlapping owner scopes or duplicate key images")
                known[row["key_image"]] = row
        native_money_ok = native["monetary"]["status"] == "PASS" and native["rule_failures"] == 0
        cache = {}

        def describe(identity):
            txid, output_index = identity
            if txid in run.bad_transactions:
                return [("BAD", "PROVEN_BAD_ORIGIN_OR_DESCENDANT")], []
            tx, height = chain.transaction(txid)
            if height in run.invalid_heights and tx["type"] in (1, 2):
                return [("BAD", "INVALID_ISSUANCE")], []
            if tx["type"] == 1:
                status = ("GOOD", "VALID_MINING_ROOT") if native_money_ok and replay["verified"] else ("UNRESOLVED", "NATIVE_VALIDATION_INCOMPLETE")
            elif tx["type"] == 2:
                source = run.protocol_sources.get(identity)
                if not source:
                    status = ("UNRESOLVED", "MISSING_PROTOCOL_AUTHORIZATION")
                else:
                    require(chain.transaction(source)[1] < height, "Protocol source is not an ancestor")
                    return [], [(source, None)]
            elif tx.get("version", 0) < 4:
                status = ("UNRESOLVED", "PRE_CARROT_ANCESTRY")
            else:
                source_asset = tx.get("source_asset_type")
                if tx["type"] == 3 and (source_asset != tx.get("destination_asset_type") or any(
                        next(iter(out["target"].values()))["asset_type"] != source_asset for out in tx["vout"])):
                    return [("BAD", "CROSS_ASSET_OUTPUT")], []
                states, dependencies = [], []
                for entry in tx["vin"]:
                    key = entry.get("key", {})
                    parent = known.get(key.get("k_image"))
                    if parent is None:
                        states.append(("UNRESOLVED", "MISSING_ANCESTOR_DISCLOSURE"))
                        continue
                    require(parent["block_height"] < height, "Disclosed input is not an ancestor")
                    parent_tx, _ = chain.transaction(parent["tx_hash"])
                    indices = [i for i, out in enumerate(parent_tx["vout"])
                               if next(iter(out["target"].values()))["key"] == parent["pubkey"]]
                    require(len(indices) == 1, "Disclosed output is missing from canonical parent")
                    offsets, total = [], 0
                    for delta in key["key_offsets"]:
                        total += delta
                        offsets.append(total)
                    # Wallet global_index is the all-assets output index;
                    # transaction offsets index the declared asset's table.
                    # Resolve the actual ring and compare canonical keys/txids.
                    ring = chain.daemon.request("/get_outs", {"outputs": [
                        {"amount": key["amount"], "index": offset} for offset in offsets],
                        "asset_type": key["asset_type"], "get_txid": True})
                    require(ring.get("status") == "OK" and len(ring.get("outs", [])) == len(offsets), "Could not resolve input ring")
                    require(any(member["key"] == parent["pubkey"] and member["txid"] == parent["tx_hash"]
                        and member["height"] == parent["block_height"] for member in ring["outs"]),
                        "Disclosed real input is missing from its ring")
                    if any(member["key"] == parent["pubkey"] and (member["txid"] != parent["tx_hash"] or
                            member["height"] != parent["block_height"]) for member in ring["outs"]):
                        states.append(("UNRESOLVED", "AMBIGUOUS_REUSED_OUTPUT_KEY"))
                        continue
                    require(next(iter(parent_tx["vout"][indices[0]]["target"].values()))["asset_type"] == key["asset_type"],
                            "Disclosed parent asset differs from input")
                    dependencies.append((parent["tx_hash"], indices[0]))
                if not states and not dependencies:
                    states.append(("UNRESOLVED", "NO_FUNDING_INPUTS"))
                return states, dependencies
            return [status], []

        def classify(txid, output_index):
            # Iterative traversal supports long mainnet ancestry without the
            # Python recursion limit. Every edge must move to an earlier block.
            target = (txid, output_index)
            pending, expanded = [target], {}
            while pending:
                identity = pending[-1]
                if identity in cache:
                    pending.pop()
                    continue
                if identity not in expanded:
                    expanded[identity] = describe(identity)
                states, dependencies = expanded[identity]
                missing = [dependency for dependency in dependencies if dependency not in cache]
                if missing:
                    pending.extend(missing)
                    continue
                results = states + [cache[dependency] for dependency in dependencies]
                cache[identity] = next((item for item in results if item[0] == "BAD"),
                    next((item for item in results if item[0] == "UNRESOLVED"),
                         ("GOOD", "ALL_ACTUAL_INPUTS_RESOLVED") if results and replay["verified"] and native_money_ok
                         else ("UNRESOLVED", "NATIVE_VALIDATION_INCOMPLETE")))
                pending.pop()
            return cache[target]

        buckets = {name: {"atomic": 0, "outputs": 0} for name in ("GOOD", "BAD", "UNRESOLVED")}
        output_path = run.root / "owner-output-classification.jsonl"
        with output_path.open("w") as stream:
            for owner_index, rows in enumerate(inventories):
                for row in rows:
                    tx, _ = chain.transaction(row["tx_hash"])
                    matches = [(i, out) for i, out in enumerate(tx["vout"])
                               if next(iter(out["target"].values()))["key"] == row["pubkey"]]
                    require(len(matches) == 1, "Wallet output does not match a canonical transaction")
                    index, output = matches[0]
                    if next(iter(output["target"].values()))["asset_type"] != "SAL1" or row["spent"]:
                        continue
                    status, reason = classify(row["tx_hash"], index)
                    buckets[status]["atomic"] += row["amount"]
                    buckets[status]["outputs"] += 1
                    stream.write(json.dumps({"owner": owner_index, "txid": row["tx_hash"], "output": index,
                        "atomic": row["amount"], "unlocked": row["unlocked"], "status": status, "reason": reason}) + "\n")
        if run.config["activation_height"] and replay["verified"] and native_money_ok:
            bundles = prepare_bundles(run.owners, inventories, run.genesis, chain.transactions,
                3 if run.config["network"] == "regtest" else 0, run.config["activation_height"])
            write_json(run.root / "lineage-disclosures.json", {"format": 1, "network": run.config["network"],
                "activation_height": run.config["activation_height"], "genesis": run.genesis,
                "snapshot_hash": run.state["snapshot_hash"], "snapshot_height": run.height,
                "contains_public_view_balance_secrets": True, "disclosures": bundles})
        return {"status": "SCANNED", "owners": len(inventories), "snapshot_hash": chain.snapshot_hash,
            "unspent": buckets, "all_current_sal1_counted": False,
            "scope": "Declared account-0 address ranges only; undisclosed wallets and locked principal are outside these UTXO sums"}
    finally:
        chain.close()


def execute(config, owners):
    run = AuditRun(config, owners)
    try:
        run.copy_snapshot()
        native = run.native_audits()
        replay = run.replay()
        disclosures = audit_owner_outputs(run, native, replay)
        asset, money = native["asset_flow"], native["monetary"]
        bad = native["disposition"]["forensic_bad_funds"] == "yes" or money["status"] != "PASS" or native["rule_failures"] != 0
        buckets = disclosures["unspent"]
        scoped_pass = bool(buckets) and buckets["GOOD"]["outputs"] > 0 and not any(
            buckets[name]["outputs"] for name in ("BAD", "UNRESOLVED")) and replay["verified"] and not bad
        status = "BAD_FUNDS_FOUND" if bad else "DECLARED_OUTPUTS_PASS" if scoped_pass else "UNRESOLVED"
        excess_miner = sum(max(0, int(row["actual_outputs_plus_stake"]) - int(row["expected_total"]))
            for row in native["monetary_findings"] if row["class"] == "MINER_ISSUANCE_MISMATCH")
        excess_protocol = sum(max(0, int(row["actual"]) - int(row["expected"]))
            for row in native["monetary_findings"] if row["class"] == "SAL1_PROTOCOL_ISSUANCE_MISMATCH")
        report = {"status": status, "audit_completed": True, "verified_as_good": scoped_pass,
            "verification_scope": "declared account-0 unspent outputs only", "global_funds_verified_as_good": False,
            "snapshot_height": run.height, "snapshot_hash": run.state["snapshot_hash"], "identity": run.state["identity"],
            "native": native, "consensus_replay": replay, "disclosed_owners": disclosures,
            "sal1": {"bad_origin_output_count": int(asset["bad_sal1_origin_outputs"]),
                "proven_bad_origin_atomic": int(asset["exact_sal1_created_atomic"]),
                "bad_origin_amount_complete": asset["sal1_origin_amount_total"] == "COMPLETE",
                "excess_miner_issuance_atomic": excess_miner,
                "excess_protocol_issuance_atomic": excess_protocol,
                "current_good_atomic": None, "current_bad_atomic": None,
                "public_private_token_fees_atomic": int(asset["public_private_token_fees_atomic"]),
                "matched_rollup_fee_atomic": int(asset["matched_rollup_fees_atomic"])},
            "consensus_quarantine_enforced": False,
            "limits": ["Global current good/bad balances require complete viewing evidence; undisclosed value is unknown.",
                "Ring candidates alone never establish a bad real input.",
                "This audit reports and refuses clearance; it does not change node consensus or unlock funds."]}
        write_json(run.root / "report.json", report)
        lines = ["# Salvium audit report", "", f"Status: **{status}**. Snapshot height: **{run.height:,}**.", "",
            "The audit completed. This is not blanket clearance of all funds.", "",
            "| SAL1 measure | Result |", "|---|---:|",
            f"| Proven bad cross-asset issuance | {amount(report['sal1']['proven_bad_origin_atomic'])} |",
            f"| Bad cross-asset SAL1 origin outputs | {report['sal1']['bad_origin_output_count']} |",
            f"| Excess miner issuance | {amount(excess_miner)} |",
            f"| Excess protocol issuance | {amount(excess_protocol)} |",
            "| Exact current global good balance | Unknown |", "| Exact current global bad balance | Unknown |", "",
            f"Consensus replay: **{replay['status']}**. Monetary reconstruction: **{money['status']}**.", "",
            "| Disclosed unspent SAL1 | Outputs | Amount |", "|---|---:|---:|"]
        for name, bucket in disclosures["unspent"].items():
            lines.append(f"| {name} | {bucket['outputs']:,} | {amount(bucket['atomic'])} |")
        if not disclosures["unspent"]:
            lines.append("| No owner viewing evidence supplied | Unknown | Unknown |")
        lines += ["", "Owner totals cover the configured address ranges only. They exclude locked stake principal. "
            "Bad origin issuance is not a current unspent balance. Legitimate matched rollup fees are not false issuance.", "",
            "The JSON report contains the native counters, binary hashes, and evidence limits. "
            "The source database was only read; all replay and wallet work used an isolated copy.", ""]
        (run.root / "report.md").write_text("\n".join(lines))
        print(f"Audit complete: {run.root / 'report.md'} ({status})", flush=True)
        return 2 if bad else 0 if scoped_pass else 3
    except BaseException as error:
        write_json(run.root / "report.json", {"status": "INTERRUPTED" if isinstance(error, KeyboardInterrupt) else "ERROR",
            "audit_completed": False, "verified_as_good": False, "error": str(error)})
        (run.root / "report.md").write_text("# Audit incomplete\n\nNo clearance was issued. See report.json and the stage logs.\n")
        raise


def main():
    os.umask(0o077)
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--init-config", type=Path, help="Write an editable configuration and an empty owner list")
    parser.add_argument("--config", type=Path)
    parser.add_argument("--check", action="store_true", help="Validate inputs without copying or running an audit")
    args = parser.parse_args()
    if args.init_config:
        path = args.init_config.resolve()
        owner_path = path.with_name(path.stem + "-owners.json")
        require(not path.exists() and not owner_path.exists(), "Refusing to overwrite existing configuration or viewing evidence")
        write_json(path, {"source_lmdb": str(REPOSITORY / ".salvium/lmdb"),
            "output_dir": str(REPOSITORY / "build/salvium-audit-run"),
            "binary_dir": str(REPOSITORY / "bin" if (REPOSITORY / "bin/salvium-blockchain-verification").exists()
                              else REPOSITORY / "build/audit/release/bin"),
            "network": "mainnet", "owners_file": owner_path.name, "threads": 4,
            "consensus_replay": True, "expected_tip_hash": "", "activation_height": 650000})
        write_json(owner_path, [])
        print(f"Edit {path}; optional viewing evidence goes in {owner_path}")
        return 0
    require(args.config is not None, "Supply --config FILE or --init-config FILE")
    config, owners = read_config(args.config.resolve())
    if args.check:
        print(f"Configuration valid: {config['network']}, {len(owners)} owner disclosures; source {config['source_lmdb']}")
        return 0
    signal.signal(signal.SIGTERM, lambda signum, frame: (_ for _ in ()).throw(KeyboardInterrupt()))
    return execute(config, owners)


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (ValueError, OSError, RuntimeError, subprocess.SubprocessError) as error:
        print(f"Audit stopped without clearance: {error}", file=sys.stderr)
        sys.exit(1)
    except KeyboardInterrupt:
        print("Audit interrupted; run the same command to resume.", file=sys.stderr)
        sys.exit(130)
