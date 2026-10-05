#!/usr/bin/env python3
"""Resumable, isolated 100-wallet / 1,000-subaddress / 100,000-block fixture.

The native daemon validates the generated chain. The disclosure evaluator below
is an integration-test oracle, NOT an implemented consensus audit/release system.
Only newly generated disposable wallet viewing secrets are written to artifacts.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
import copy
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
import tempfile
import threading
import time
import traceback

from audit_release_regtest import LocalChain, Rpc, RpcError
from audit_snapshot_faults import test_snapshot_faults

COIN = 100_000_000
STAKE_LOCK = 21_600
WALLETS = 100
EXCHANGE = 99
MINERS = 10
SUBADDRESSES = 1000


def atomic_json(path, value):
    temporary = path.with_suffix(path.suffix + ".partial")
    with temporary.open("w") as stream:
        stream.write(json.dumps(value, indent=2) + "\n")
        stream.flush()
        os.fsync(stream.fileno())
    temporary.replace(path)
    directory = os.open(path.parent, os.O_RDONLY | os.O_DIRECTORY)
    try:
        os.fsync(directory)
    finally:
        os.close(directory)


class Wallet:
    """100 distinct wallets multiplexed over four local wallet RPC processes."""
    def __init__(self, chain, index):
        self.chain, self.index = chain, index

    def call(self, method, params=None):
        chain = self.chain
        slot = self.index % len(chain.services)
        with chain.locks[slot]:
            rpc = chain.services[slot]
            if chain.opened[slot] != self.index:
                if chain.opened[slot] is not None:
                    rpc.call("store")
                    rpc.call("close_wallet")
                name = f"wallet-{self.index:03}"
                exists = (chain.root / f"service-{slot}" / f"{name}.keys").exists()
                rpc.call("open_wallet" if exists else "create_wallet", {
                    "filename": name, "password": "", "language": "English"})
                rpc.call("auto_refresh", {"enable": False})
                chain.opened[slot] = self.index
            return rpc.call(method, params)


class ComplexChain(LocalChain):
    def __init__(self, binaries, root):
        super().__init__(binaries, root)
        path = root / "state.json"
        self.state = json.loads(path.read_text()) if path.exists() else {
            "fixture": "salvium-complex-audit-v1", "actions": {}, "stages": [],
            "stakes": [], "mined": [0] * MINERS, "negative_tests": [],
            "audit_release_verified": False}
        assert self.state["fixture"] == "salvium-complex-audit-v1"
        self.tx_cache = {}
        self.save_lock = threading.RLock()

    def save(self):
        with self.save_lock:
            atomic_json(self.root / "state.json", self.state)

    def progress(self, message):
        print(message, flush=True)
        with self.save_lock:
            self.state["progress"] = message
            self.state["updated_at"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
            self.save()

    def launch(self):
        config = self.root / "isolated.conf"
        config.write_text("# Empty isolated test configuration.\n")
        self.daemon = Rpc(self.port())
        self.start("daemon", [str(self.binaries / "salviumd"),
            "--config-file", str(config), "--regtest", "--keep-fakechain", "--fixed-difficulty", "1",
            "--offline", "--no-igd", "--hide-my-port", "--no-zmq", "--non-interactive",
            "--disable-dns-checkpoints", "--check-updates", "disabled",
            "--max-concurrency", "2", "--p2p-bind-ip", "127.0.0.1",
            "--p2p-bind-port", str(self.port()), "--rpc-bind-ip", "127.0.0.1",
            "--rpc-bind-port", str(self.daemon.port), "--rpc-ssl", "disabled",
            "--data-dir", str(self.root / "chain"), "--log-level", "0"],
            self.daemon, "get_info")
        assert self.tip() >= self.state.get("checkpoint_height", 0), "test chain fell behind its saved checkpoint"
        self.services, self.locks, self.opened, self.observers = [], [], [], []
        for slot in range(8):
            directory = self.root / f"service-{slot}"
            directory.mkdir(exist_ok=True)
            login = ("regtest", secrets.token_hex(24))
            rpc = Rpc(self.port(), login)
            self.start(f"service-{slot}", [str(self.binaries / "salvium-wallet-rpc"),
                "--config-file", str(config), "--wallet-dir", str(directory),
                "--shared-ringdb-dir", str(directory / "ringdb"),
                "--rpc-bind-ip", "127.0.0.1", "--rpc-bind-port", str(rpc.port),
                "--rpc-login", ":".join(login), "--rpc-ssl", "disabled",
                "--daemon-address", self.daemon.url, "--daemon-ssl", "disabled",
                "--allow-mismatched-daemon-version", "--trusted-daemon",
                "--max-concurrency", "2", "--log-file", str(directory / "wallet.log")],
                rpc, "get_version")
            if slot >= 4:
                self.observers.append(rpc)
            else:
                self.services.append(rpc)
                self.locks.append(threading.Lock())
                self.opened.append(None)
        self.wallets = [Wallet(self, i) for i in range(WALLETS)]
        self.addresses = self.state.get("addresses", [None] * WALLETS)

    def initialize_wallets(self):
        if "wallets" in self.state["stages"]:
            self.exchange_addresses = self.state["exchange_addresses"]
            return

        def initialize_slot(slot):
            for index in range(slot, WALLETS, len(self.services)):
                wallet = self.wallets[index]
                self.addresses[index] = wallet.call("get_address", {
                    "account_index": 0, "carrot": True})["addresses"][0]["address_carrot"]
                wallet.call("store")
                print(f"Wallet {index + 1}/100 ready", flush=True)

        with ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(initialize_slot, range(4)))
        exchange = self.wallets[EXCHANGE]
        current = exchange.call("get_address", {"account_index": 0, "carrot": True})
        remaining = SUBADDRESSES + 1 - len(current["addresses"])
        while remaining:
            count = min(64, remaining)
            exchange.call("create_address", {"account_index": 0, "count": count,
                                             "label": "exchange-customer"})
            remaining -= count
        current = exchange.call("get_address", {"account_index": 0, "carrot": True})
        self.exchange_addresses = [entry["address_carrot"] for entry in current["addresses"][1:]]
        assert len(set(self.exchange_addresses)) == SUBADDRESSES
        exchange.call("store")
        self.state.update(addresses=self.addresses, exchange_addresses=self.exchange_addresses)
        self.state["stages"].append("wallets")
        self.progress("100 distinct wallets and 1,000 exchange customer subaddresses created")

    def mine_to(self, target):
        while self.tip() < target:
            # Absolute height schedule is reproducible after an interrupted RPC.
            tip = self.tip()
            miner = (tip // 1000) % MINERS
            count = min(target - tip, 1000 - tip % 1000)
            pool = self.daemon.request("/get_transaction_pool_stats", {})
            assert pool.get("status") == "OK"
            if pool["pool_stats"]["txs_total"]:
                # Refresh the RPC/template boundary after each populated block.
                # Empty-chain mining can safely use larger batches.
                count = 1
            result = self.daemon.call("generateblocks", {
                "amount_of_blocks": count, "wallet_address": self.addresses[miner], "prev_block": ""})
            assert len(result["blocks"]) == count
            assert self.tip() == tip + count
            self.state["mined"][miner] += count
            self.state["checkpoint_height"] = self.tip()
            self.progress(f"Mined height {self.tip():,} / {target:,}; miner wallet {miner}")

    def mine(self, count, refresh=False, fund_miner=False):
        self.mine_to(self.tip() + count)

    def transaction(self, txid):
        if txid not in self.tx_cache:
            self.tx_cache[txid] = super().transaction(txid)
        return self.tx_cache[txid]

    def send(self, label, sender, destinations, tx_type=3, indices=None):
        actions = self.state["actions"]
        if label not in actions:
            wallet = self.wallets[sender]
            wallet.call("refresh")
            params = {
                "destinations": [{"address": address, "amount": amount, "asset_type": "SAL1"}
                                 for address, amount in destinations],
                "source_asset": "SAL1", "dest_asset": "SAL1", "tx_type": tx_type,
                "account_index": 0, "priority": 1, "ring_size": 16,
                "unlock_time": 0, "payment_id": "", "get_tx_hex": True,
                "get_tx_metadata": True, "do_not_relay": True}
            if indices is not None:
                params["subaddr_indices"] = indices
            try:
                sent = wallet.call("transfer", params)
                parts = [{"txid": sent["tx_hash"], "blob": sent["tx_blob"], "metadata": sent["tx_metadata"]}]
            except RpcError as error:
                if "Transaction would be too large" not in str(error):
                    raise
                sent = wallet.call("transfer_split", params)
                parts = [{"txid": txid, "blob": blob, "metadata": metadata}
                         for txid, blob, metadata in zip(sent["tx_hash_list"], sent["tx_blob_list"],
                                                        sent["tx_metadata_list"], strict=True)]
                assert parts
            with self.save_lock:
                actions[label] = {"sender": sender, "type": tx_type, **parts[0], "parts": parts,
                                  "amount": sum(x[1] for x in destinations), "destinations": len(destinations)}
                # Write before submitting; reruns only resubmit this exact transaction.
                self.save()
            wallet.call("store")
        action = actions[label]
        for part in action.get("parts", [action]):
            response = self.daemon.request("/get_transactions", {
                "txs_hashes": [part["txid"]], "decode_as_json": False})
            assert response.get("status") == "OK"
            if not response.get("missed_tx"):
                continue
            if part.get("metadata"):
                # Commit through the originating wallet so it reserves pending
                # inputs. Raw daemon submission alone does not update coin selection.
                accepted = self.wallets[sender].call("relay_tx", {"hex": part["metadata"]})
                assert accepted["tx_hash"] == part["txid"]
                self.wallets[sender].call("store")
            else:
                accepted = self.daemon.request("/send_raw_transaction", {"tx_as_hex": part["blob"]})
                assert accepted.get("status") == "OK", (label, accepted)
        return action

    def wallet_jobs(self, indices, operation):
        """Keep each RPC service owned by one worker during a batch."""
        def worker(slot):
            for index in indices:
                if index % 4 == slot:
                    operation(index)
                    self.progress(f"Wallet operation completed: {index}")
        with ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(worker, range(4)))

    def stage(self, name, operation):
        if name in self.state["stages"]:
            return
        self.progress(f"Starting {name} at height {self.tip():,}")
        operation()
        self.state["stages"].append(name)
        self.progress(f"Completed {name} at height {self.tip():,}")

    def collect_disclosures(self):
        summaries, disclosures = [None] * WALLETS, [None] * WALLETS
        snapshot = self.daemon.call("get_last_block_header")["block_header"]["hash"]

        def scan(index):
            path = self.root / f"disclosure-{index:03}.json"
            if path.exists():
                cached = json.loads(path.read_text())
                if cached.get("snapshot") == snapshot:
                    return cached
            wallet = self.wallets[index]
            observer = self.observers[index % 4]
            wallet.call("refresh")
            params = {"transfer_type": "all", "account_index": 0, "subaddr_indices": []}
            owner = wallet.call("incoming_transfers", params).get("transfers", [])
            view = wallet.call("query_key", {"key_type": "s_view_balance"})["key"]
            observer.call("generate_from_keys", {
                "filename": f"view-{index}-{secrets.token_hex(4)}", "password": "",
                "address": self.addresses[index], "viewkey": view, "spendkey": "",
                "restore_height": 0, "autosave_current": False})
            observer.call("auto_refresh", {"enable": False})
            if index == EXCHANGE:
                for offset in range(0, SUBADDRESSES, 64):
                    observer.call("create_address", {"account_index": 0,
                        "count": min(64, SUBADDRESSES - offset), "label": "disclosed-scope"})
            observer.call("refresh")
            observed = observer.call("incoming_transfers", params).get("transfers", [])
            fields = ("tx_hash", "pubkey", "key_image", "amount", "spent", "block_height")
            normalize = lambda rows: sorted(tuple(row[field] for field in fields) for row in rows)
            assert owner and normalize(owner) == normalize(observed), f"disclosure mismatch: wallet {index}"
            assert all(row["key_image"] for row in observed)
            if index == EXCHANGE:
                used = {row["subaddr_index"]["minor"] for row in observed}
                assert set(range(1, SUBADDRESSES + 1)) <= used, "not all exchange subaddresses received deposits"
            observer.call("close_wallet")
            wallet.call("store")
            disclosure = {"wallet": index, "address": self.addresses[index], "snapshot": snapshot,
                          "s_view_balance": view, "outputs": observed}
            atomic_json(path, disclosure)
            return disclosure

        def scan_slot(slot):
            for index in range(slot, WALLETS, 4):
                disclosure = scan(index)
                observed = disclosure["outputs"]
                disclosures[index] = disclosure
                summaries[index] = {"wallet": index, "outputs": len(observed),
                                    "spent": sum(row["spent"] for row in observed)}
                self.progress(f"Independent view-only scan matched wallet {index + 1}/100 ({len(observed)} outputs)")
        with ThreadPoolExecutor(max_workers=4) as pool:
            list(pool.map(scan_slot, range(4)))
        self.state["wallet_scans"] = summaries
        self.save()
        return disclosures

    def prime_transactions(self, txids):
        missing = sorted(set(txids) - self.tx_cache.keys())
        for offset in range(0, len(missing), 500):
            batch = missing[offset:offset + 500]
            result = self.daemon.request("/get_transactions", {
                "txs_hashes": batch, "decode_as_json": True, "prune": False})
            assert result.get("status") == "OK" and not result.get("missed_tx")
            assert len(result["txs"]) == len(batch)
            for entry in result["txs"]:
                assert not entry["in_pool"]
                self.tx_cache[entry["tx_hash"]] = (json.loads(entry["as_json"]), entry["block_height"])
            if offset % 10000 == 0:
                self.progress(f"Canonical transaction inventory: {offset + len(batch):,}/{len(missing):,}")


def output_asset(output):
    return next(iter(output["target"].values()))["asset_type"]


def asset_violation(transaction):
    """Necessary SAL1 conservation rule, independent of amount decryption."""
    if transaction["type"] == 3:
        source, destination = transaction["source_asset_type"], transaction["destination_asset_type"]
        if source != destination or any(output_asset(out) != source for out in transaction["vout"]):
            return "CROSS_ASSET_OUTPUT"
        if any(entry["key"]["asset_type"] != source for entry in transaction["vin"]):
            return "INPUT_ASSET_MISMATCH"
    return None


def audit_lineage(chain, target, disclosures, protocol_sources):
    """Fail-closed test oracle over native-validated, canonical transactions.

    Requires independent scans as evidence. Unknown ancestry stays PENDING.
    Canonical PROTOCOL payouts must map to a checked originating stake; they are
    never treated as unconditional new issuance. Does not unlock wallet funds.
    """
    known = {row["key_image"]: row for item in disclosures for row in item["outputs"]}
    pending, visited, missing = [(target, chain.tip() + 1)], set(), set()
    while pending:
        txid, child_height = pending.pop()
        try:
            tx, height = chain.transaction(txid)
        except (AssertionError, RpcError):
            return {"status": "BAD_FUNDS", "reason": "NONCANONICAL_TRANSACTION"}
        if height >= child_height:
            return {"status": "BAD_FUNDS", "reason": "NONANCESTRAL_REFERENCE"}
        if txid in visited:
            continue
        visited.add(txid)
        if asset_violation(tx):
            return {"status": "BAD_FUNDS", "reason": asset_violation(tx)}
        if tx["type"] == 1:
            if chain.block(height)["miner_tx"] != tx:
                return {"status": "BAD_FUNDS", "reason": "UNAUTHORIZED_MINER_ROOT"}
            continue
        if tx["type"] == 2:
            sources = protocol_sources.get(txid)
            if not sources or chain.block(height)["protocol_tx"] != tx:
                return {"status": "PENDING", "reason": "UNRESOLVED_PROTOCOL_ORIGIN"}
            pending.extend((source, height) for source in sources)
            continue
        if tx["type"] not in (3, 5, 6, 9, 10):
            return {"status": "PENDING", "reason": "UNSUPPORTED_ORIGIN"}
        for entry in tx["vin"]:
            image = entry["key"]["k_image"]
            if image not in known:
                missing.add(image)
            else:
                pending.append((known[image]["tx_hash"], height))
    return {"status": "PENDING" if missing else "LINEAGE_RESOLVED",
            "missing_inputs": sorted(missing), "transactions_visited": len(visited),
            "consensus_audit_release_verified": False}


def sal1_totals(chain, disclosures, protocol_sources):
    """Count snapshot UTXOs once, with stake principal outside the UTXO total."""
    rows = [row for disclosure in disclosures for row in disclosure["outputs"]]
    chain.prime_transactions(row["tx_hash"] for row in rows)
    known_images = {row["key_image"] for row in rows}
    for tx, _ in chain.tx_cache.values():
        for entry in tx["vin"]:
            if "key" in entry:
                assert entry["key"]["k_image"] in known_images, "unknown real input could conceal an undisclosed treasury spend"
    sal1_rows = []
    for row in rows:
        tx, _ = chain.transaction(row["tx_hash"])
        matches = [output for output in tx["vout"]
                   if next(iter(output["target"].values()))["key"] == row["pubkey"]]
        assert len(matches) == 1
        if output_asset(matches[0]) == "SAL1":
            sal1_rows.append(row)
    rows = sal1_rows
    identities = [(row["tx_hash"], row["pubkey"]) for row in rows]
    assert len(set(identities)) == len(identities), "duplicate disclosed output would inflate balances"
    txids = set(row["tx_hash"] for row in rows)
    # Native monetary reconstruction checks every canonical miner and protocol
    # transaction. Exit status alone is insufficient: this tool reports findings
    # in its summary even when returning zero.
    env = dict(os.environ, SALVIUM_FULL_FORENSIC_SCAN="1", SALVIUM_INDEPENDENT_FORENSICS_ONLY="1")
    log = chain.root / "native-monetary-audit.log"
    with log.open("w") as output:
        done = subprocess.run([str(chain.binaries / "salvium-blockchain-verification"),
            "--db-path", str(chain.root / "chain/fake/lmdb"), "--no-asset-flow-forensic"],
            env=env, stdout=output, stderr=subprocess.STDOUT, timeout=180)
    assert done.returncode == 0
    summary = next(line for line in log.read_text().splitlines() if line.startswith("INDEPENDENT_CHAIN_SUMMARY "))
    assert "findings=0 " in summary and "issuance_match=yes " in summary and summary.endswith("status=PASS"), summary
    chain.state["native_monetary_audit"] = summary
    classifications = {}
    for txid in txids:
        tx, height = chain.transaction(txid)
        if tx["type"] == 1:
            # Native audit above independently checked canonical miner issuance.
            assert tx["vin"] == [{"gen": {"height": height}}]
            classifications[txid] = "GOOD"
        else:
            result = audit_lineage(chain, txid, disclosures, protocol_sources)
            classifications[txid] = {"LINEAGE_RESOLVED": "GOOD", "PENDING": "UNRESOLVED",
                                    "BAD_FUNDS": "BAD"}[result["status"]]
    buckets = {key: {"atomic": 0, "outputs": 0} for key in
               ("good_spendable", "good_immature_outputs", "bad", "unresolved")}
    for row in rows:
        if row["spent"]:
            continue
        status = classifications[row["tx_hash"]]
        bucket = ("good_spendable" if row["unlocked"] else "good_immature_outputs") if status == "GOOD" else status.lower()
        buckets[bucket]["atomic"] += row["amount"]
        buckets[bucket]["outputs"] += 1
    unspent = sum(item["atomic"] for item in buckets.values())
    miner = sum(out["amount"] for txid in txids for out in chain.transaction(txid)[0]["vout"]
                if chain.transaction(txid)[0]["type"] == 1)
    owned_miner = sum(row["amount"] for row in rows if chain.transaction(row["tx_hash"])[0]["type"] == 1)
    protocol = sum(out["amount"] for txid in txids for out in chain.transaction(txid)[0]["vout"]
                   if chain.transaction(txid)[0]["type"] == 2 and output_asset(out) == "SAL1")
    fees = sum(chain.transaction(txid)[0].get("rct_signatures", {}).get("txnFee", 0)
               for txid in txids if chain.transaction(txid)[0]["type"] not in (1, 2))
    burns = sum(chain.transaction(txid)[0].get("amount_burnt", 0)
                for txid in txids if chain.transaction(txid)[0]["type"] not in (1, 2))
    assert unspent == owned_miner + protocol - fees - burns, "wallet snapshot does not conserve SAL1"
    wallet_unspent = unspent
    # HF13 pays a treasury output alongside the miner. Native issuance checks
    # establish its authorization. Every spending key image in this controlled
    # chain is independently resolved above to one of the 100 test wallets, so
    # these undisclosed treasury outputs have not been spent.
    miner_maturity = {row["tx_hash"]: row["unlocked"] for row in rows
                      if chain.transaction(row["tx_hash"])[0]["type"] == 1}
    owned_keys = {(row["tx_hash"], row["pubkey"]) for row in rows}
    treasury = 0
    for key in ("good_treasury_spendable", "good_treasury_immature"):
        buckets[key] = {"atomic": 0, "outputs": 0}
    for txid in miner_maturity:
        for output in chain.transaction(txid)[0]["vout"]:
            key = next(iter(output["target"].values()))["key"]
            if (txid, key) not in owned_keys:
                bucket = "good_treasury_spendable" if miner_maturity[txid] else "good_treasury_immature"
                buckets[bucket]["atomic"] += output["amount"]
                buckets[bucket]["outputs"] += 1
                treasury += output["amount"]
    assert treasury == miner - owned_miner
    unspent += treasury
    locked = sum(stake["principal"] for stake in chain.state["stakes"] if stake["status"] == "IMMATURE_STAKE")
    emission = int(re.search(r"expected_sal1_emission=(\d+)", summary)[1])
    permanent_burns = sum(chain.transaction(txid)[0].get("amount_burnt", 0)
                          for txid in txids if chain.transaction(txid)[0]["type"] not in (1, 2, 6, 10))
    reserve = emission - unspent - locked - permanent_burns
    assert reserve >= 0 and buckets["bad"]["atomic"] == 0 and buckets["unresolved"]["atomic"] == 0
    return {"snapshot_height": chain.tip(), "unit": "atomic SAL1 (100000000 = 1 SAL1)",
        "unspent_outputs": buckets, "good_unspent_atomic": sum(item["atomic"] for name, item in buckets.items() if name.startswith("good_")),
        "wallet_unspent_atomic": wallet_unspent, "treasury_unspent_atomic": treasury,
        "good_locked_stake_principal_atomic": locked, "unspent_total_atomic": unspent,
        "mining_outputs_atomic": miner, "protocol_payouts_atomic": protocol,
        "transaction_fees_atomic": fees, "stake_and_other_burns_atomic": burns,
        "permanent_burns_atomic": permanent_burns,
        "native_net_emission_atomic": emission, "undistributed_staking_reserve_atomic": reserve,
        "rejected_invalid_mints_accepted_atomic": 0,
        "historical_mainnet_bad_outputs": chain.state["historical_bad_funds"],
        "mainnet_current_good_atomic": None, "mainnet_current_bad_atomic": None,
        "mainnet_limit": "Mainnet confidential outputs and ring ambiguity prevent an exact current good/bad balance without viewing disclosures.",
        "conservation_verified": True, "consensus_quarantine_enforced": False}


def read_historical(path):
    text = path.read_text()
    decoder = json.JSONDecoder()
    block = decoder.raw_decode(text.split("INSPECT_BLOCK ", 1)[1])[0]
    transactions = []
    for match in re.finditer(r"INSPECT_TX_HASH ([0-9a-f]{64})", text):
        tail = text[match.end():]
        blob = re.search(r"INSPECT_TX_BLOB ([0-9a-f]+)", tail)[1]
        tx = decoder.raw_decode(tail.split("INSPECT_TX ", 1)[1])[0]
        transactions.append({"txid": match[1], "transaction": tx, "blob": blob})
    return block, transactions


def historical_bad_funds(path):
    block, transactions = read_historical(path)
    assert block["major_version"] == 11
    offender = next(item for item in transactions
                    if item["txid"] == "9353dd3288e20618596085228ea6faf5bf2a9d01cd98c36ea5ceeef2c2d4eb1e")
    assert asset_violation(offender["transaction"]) == "CROSS_ASSET_OUTPUT"
    assert [output_asset(out) for out in offender["transaction"]["vout"]] == ["SAL1", "SAL1"]
    line = next(line for line in path.read_text().splitlines()
                if line.startswith("INSPECT_VALUE_PROOF tx=" + offender["txid"]))
    proof = dict(piece.split("=", 1) for piece in line.split()[1:])
    assert proof["ringct_valid"] == "yes" and proof["fee_paid_separately"] == "yes"
    assert int(proof["input_atomic"]) == int(proof["output_atomic"]) == 40_000_000 * COIN
    return {"height": 465074, "txid": offender["txid"], "status": "BAD_FUNDS",
        "reason": "CROSS_ASSET_OUTPUT", "bad_output_indices": [0, 1],
        "bad_output_ids": [2621581, 2621582], "verified_as_good": False,
        "source": "read-only local chain snapshot", "aggregate_output_atomic": int(proof["output_atomic"]),
        "fee_paid_separately_atomic": offender["transaction"]["rct_signatures"]["txnFee"],
        "amount_basis": "canonical public issuance input and verified RingCT; fee paid by separate SAL1 rollup",
        "current_unspent_bad_atomic": None, "individual_output_amounts_atomic": [None, None]}


def historical_yield_window(chain, inclusion):
    """Reconstruct old windows after the daemon has evicted its rolling RPC cache."""
    end = inclusion + STAKE_LOCK
    anchor = chain.daemon.call("get_block_header_by_height", {"height": end})["block_header"]["hash"]
    path = chain.root / f"yield-window-{inclusion}.json"
    if path.exists():
        cached = json.loads(path.read_text())
        if cached["anchor"] == anchor:
            return cached["yield_data"]
    data = chain.daemon.call("get_yield_info", {"include_raw_data": True,
        "from_height": inclusion + 1, "to_height": end}).get("yield_data", [])
    if [row["block_height"] for row in data] != list(range(inclusion + 1, end + 1)):
        stakes = [(chain.transaction(stake["txid"])[1], stake["principal"])
                  for stake in chain.state["stakes"]]
        data = []
        for height in range(inclusion + 1, end + 1):
            block = chain.block(height)
            assert block["major_version"] == 13, "reconstruction is scoped to this HF13 fixture"
            data.append({"block_height": height,
                "slippage_total_this_block": block["miner_tx"]["amount_burnt"],
                "locked_coins_tally": sum(amount for start, amount in stakes
                                          if start <= height <= start + STAKE_LOCK)})
            if height % 2000 == 0:
                chain.progress(f"Reconstructed historical stake yield through block {height:,}")
    atomic_json(path, {"anchor": anchor, "yield_data": data})
    return data


def varint(value):
    result = bytearray()
    while value >= 128:
        result.append((value & 127) | 128)
        value >>= 7
    result.append(value)
    return bytes(result)


class CoinbaseReader:
    """Locate fields in real Carrot block templates; fail on other formats."""
    def __init__(self, blob):
        self.blob, self.pos = blob, 0

    def integer(self):
        value, shift = 0, 0
        while True:
            byte = self.blob[self.pos]
            self.pos += 1
            value |= (byte & 127) << shift
            if byte < 128:
                return value
            shift += 7
            assert shift < 70

    def byte(self):
        value = self.blob[self.pos]
        self.pos += 1
        return value

    def coinbase(self):
        start = self.pos
        assert self.integer() in (4, 5)
        self.integer()  # unlock time
        assert self.integer() == 1 and self.byte() == 255
        self.integer()  # generated height
        count_start = self.pos
        count = self.integer()
        outputs = []
        for _ in range(count):
            out_start = self.pos
            amount = self.integer()
            amount_end = self.pos
            assert self.integer() == 4  # Carrot output
            self.pos += 32
            size = self.integer()
            self.pos += size + 3 + 16
            outputs.append((out_start, amount_end, self.pos, amount))
        extra_start = self.pos
        extra_size = self.integer()
        extra_data = self.pos
        self.pos += extra_size
        extra_end = self.pos
        tx_type = self.integer()
        assert tx_type in (1, 2)
        if tx_type == 1:
            self.integer()  # burnt miner reward / stake reserve
        assert self.integer() == 0  # null RingCT
        return {"start": start, "end": self.pos, "count_start": count_start,
                "extra_start": extra_start, "extra_data": extra_data, "extra_end": extra_end,
                "outputs": outputs, "type": tx_type}


def invalid_mints(chain):
    template = chain.daemon.call("get_block_template", {
        "wallet_address": chain.addresses[0], "reserve_size": 0})
    original = bytes.fromhex(template["blocktemplate_blob"])
    reader = CoinbaseReader(original)
    assert 10 <= reader.integer() < 255
    reader.integer()
    reader.integer()
    reader.pos += 36
    miner = reader.coinbase()
    protocol = reader.coinbase()
    assert miner["outputs"] and not protocol["outputs"]
    start, end, out_end, amount = miner["outputs"][0]
    excess = original[:start] + varint(amount + COIN) + original[end:]
    overflow = original[:start] + varint(2**64 - 1) + original[end:]
    # A real, well-formed Carrot output in a PROTOCOL transaction with no
    # authorized payout. Difficulty=1 means mutation cannot fail only on PoW.
    insert = protocol["count_start"]
    fake_protocol = original[:insert] + b"\x01" + original[start:out_end] + original[insert + 1:]
    tip = chain.tip()
    for name, blob in (("excess_miner_reward", excess), ("miner_amount_overflow", overflow),
                       ("unauthorized_protocol_mint", fake_protocol)):
        result = chain.daemon.request("/json_rpc", {
            "jsonrpc": "2.0", "id": "bad-mint", "method": "submit_block", "params": [blob.hex()]})
        assert "error" in result or result.get("result", {}).get("status") != "OK", (name, result)
        assert chain.tip() == tip, "bad mint advanced the chain"
        chain.state["negative_tests"].append({"case": name, "status": "REJECTED", "response": result,
            "blob_sha256": hashlib.sha256(blob).hexdigest(), "accepted_sal1_atomic": 0})
    # Prove the template itself is valid after all mutations were rejected.
    result = chain.daemon.request("/json_rpc", {
        "jsonrpc": "2.0", "id": "mint-control", "method": "submit_block", "params": [original.hex()]})
    assert result.get("result", {}).get("status") == "OK", result
    assert chain.tip() == tip + 1
    chain.save()


def token_workload(chain):
    """A real token issuance and transfer, using the historical ticker in regtest."""
    issuer = chain.wallets[8]
    label = "create-salYAHU"
    if label not in chain.state["actions"]:
        issuer.call("refresh")
        created = issuer.call("create_token", {"ticker": "YAHU", "supply": 1_000_000,
            "account_index": 0, "subaddr_indices": [0], "name": "Disposable audit fixture",
            "get_tx_hex": True, "do_not_relay": True})
        assert len(created["tx_hash_list"]) == 1
        chain.state["actions"][label] = {"sender": 8, "type": 9, "txid": created["tx_hash_list"][0],
            "blob": created["tx_blob_list"][0], "amount": 0, "destinations": 1}
        chain.save()
        issuer.call("store")
    chain.send(label, 8, [])
    chain.mine(61)
    tx, height = chain.transaction(chain.state["actions"][label]["txid"])
    assert tx["type"] == 9 and tx["token_metadata"]["asset_type"] == "YAHU"
    outputs = [out for out in chain.block(height)["protocol_tx"]["vout"] if output_asset(out) == "salYAHU"]
    assert len(outputs) == 1 and outputs[0]["amount"] == 1_000_000 * COIN
    label = "legitimate-salYAHU-transfer"
    if label not in chain.state["actions"]:
        issuer.call("refresh")
        sent = issuer.call("transfer_split", {
            "destinations": [{"address": chain.addresses[90], "amount": 100 * COIN, "asset_type": "salYAHU"}],
            "source_asset": "salYAHU", "dest_asset": "salYAHU", "tx_type": 3,
            "account_index": 0, "subaddr_indices": [0], "priority": 1, "ring_size": 1,
            "unlock_time": 0, "get_tx_hex": True, "get_tx_metadata": True, "do_not_relay": True})
        parts = [{"txid": txid, "blob": blob, "metadata": metadata}
                 for txid, blob, metadata in zip(sent["tx_hash_list"], sent["tx_blob_list"],
                                                sent["tx_metadata_list"], strict=True)]
        assert len(parts) == 2, "expected SAL1 fee rollup and private-token transfer"
        chain.state["actions"][label] = {"sender": 8, "type": 3, **parts[-1], "parts": parts,
            "amount": 100 * COIN, "destinations": 1, "asset": "salYAHU"}
        chain.save()
        issuer.call("store")
    original = bytes.fromhex(chain.state["actions"][label]["blob"])
    marker = b"\x07salYAHU"
    pieces = original.split(marker)
    assert len(pieces) == 6, "expected one token input, two outputs, source and destination"
    mutated = pieces[0]
    for index, piece in enumerate(pieces[1:]):
        mutated += (b"\x04SAL1" if index in (1, 2) else marker) + piece
    result = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": mutated.hex(), "do_not_relay": True})
    assert result.get("status") != "OK", "token-input / SAL1-output transaction accepted"
    chain.state["negative_tests"].append({"case": "registered_salYAHU_ring_to_SAL1_outputs",
        "status": "REJECTED", "response": result, "accepted_sal1_atomic": 0})
    chain.send(label, 8, [])
    chain.mine(11)
    tx, _ = chain.transaction(chain.state["actions"][label]["txid"])
    assert asset_violation(tx) is None and all(output_asset(out) == "salYAHU" for out in tx["vout"])
    chain.state["token_workload"] = {"asset": "salYAHU", "issued_atomic": 1_000_000 * COIN,
        "valid_transfer_atomic": 100 * COIN, "counted_as_sal1": False}
    chain.save()


def negative_tests(chain, historical):
    # Submit bad variants before their valid control, avoiding double-spend-only
    # rejection. The exact historical transaction also gets a structural check.
    wallet = chain.wallets[40]
    wallet.call("refresh")
    sent = wallet.call("transfer", {
        "destinations": [{"address": chain.addresses[41], "amount": COIN, "asset_type": "SAL1"}],
        "source_asset": "SAL1", "dest_asset": "SAL1", "tx_type": 3,
        "account_index": 0, "priority": 1, "ring_size": 16, "unlock_time": 0,
        "get_tx_hex": True, "do_not_relay": True})
    original = bytes.fromhex(sent["tx_blob"])
    # Build a second, genuinely signed spend of the same still-unspent inputs.
    # Re-submitting an identical confirmed tx is an idempotent RPC success on
    # this daemon, so that response alone cannot test double-spend rejection.
    available = wallet.call("incoming_transfers", {"transfer_type": "available",
        "account_index": 0, "subaddr_indices": []}).get("transfers", [])
    selected = [row for row in available if bytes.fromhex(row["key_image"]) in original]
    assert selected, "unable to identify the control transaction's actual inputs"
    frozen = [row["key_image"] for row in available if row not in selected and not row["frozen"]]
    try:
        for image in frozen:
            wallet.call("freeze", {"key_image": image})
        conflict = wallet.call("transfer", {
            "destinations": [{"address": chain.addresses[42], "amount": COIN, "asset_type": "SAL1"}],
            "source_asset": "SAL1", "dest_asset": "SAL1", "tx_type": 3,
            "account_index": 0, "priority": 1, "ring_size": 16, "unlock_time": 0,
            "get_tx_hex": True, "do_not_relay": True})
    finally:
        for image in frozen:
            wallet.call("thaw", {"key_image": image})
    assert conflict["tx_hash"] != sent["tx_hash"]
    assert any(bytes.fromhex(row["key_image"]) in bytes.fromhex(conflict["tx_blob"]) for row in selected)
    bad_signature = bytearray(original)
    bad_signature[-1] ^= 1
    variants = {"corrupted_signature": bytes(bad_signature), "truncated_proof": original[:-32]}
    # Serialized asset strings carry their length as a varint. Replace input and
    # source/destination labels, retaining SAL1 on both outputs, exactly as 465074.
    marker = b"\x04SAL1"
    parts = original.split(marker)
    assert len(parts) >= 6, "unexpected transfer serialization"
    input_count = len(parts) - 1 - 2 - 2
    cross = parts[0]
    for i, part in enumerate(parts[1:]):
        asset = b"\x07salYAHU" if i < input_count or i >= input_count + 2 else marker
        cross += asset + part
    variants["salYAHU_inputs_to_SAL1_outputs"] = cross
    variants["fabricated_asset_everywhere"] = original.replace(marker, b"\x04FAKE")
    for name, blob in variants.items():
        response = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": blob.hex(), "do_not_relay": True})
        assert response.get("status") != "OK", f"invalid transaction accepted: {name}"
        chain.state["negative_tests"].append({"case": name, "status": "REJECTED",
                                               "response": response, "blob_sha256": hashlib.sha256(blob).hexdigest()})
    block, transactions = read_historical(historical)
    assert block["major_version"] == 11
    offender = next(item for item in transactions
                    if item["transaction"].get("source_asset_type") == "salYAHU")
    assert offender["txid"] == "9353dd3288e20618596085228ea6faf5bf2a9d01cd98c36ea5ceeef2c2d4eb1e"
    assert asset_violation(offender["transaction"]) == "CROSS_ASSET_OUTPUT"
    assert [output_asset(out) for out in offender["transaction"]["vout"]] == ["SAL1", "SAL1"]
    chain.state["historical_bad_funds"] = historical_bad_funds(historical)
    response = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": offender["blob"], "do_not_relay": True})
    assert response.get("status") != "OK"
    chain.state["negative_tests"].append({"case": "historical_cross_asset_replay", "status": "REJECTED",
        "response": response, "note": "isolated chain has different HF and ring inventory; structural proof is checked separately"})
    response = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": sent["tx_blob"]})
    assert response.get("status") == "OK", "valid control rejected"
    chain.mine(11)
    chain.transaction(sent["tx_hash"])
    response = chain.daemon.request("/send_raw_transaction", {"tx_as_hex": conflict["tx_blob"]})
    assert response.get("status") != "OK" and response.get("double_spend"), "conflicting spend was not rejected as a double spend"
    chain.state["negative_tests"].append({"case": "duplicate_spend", "status": "REJECTED", "response": response})
    chain.save()


def scenario(chain, historical):
    chain.state["historical_bad_funds"] = historical_bad_funds(historical)
    chain.initialize_wallets()
    chain.stage("initial_mining", lambda: chain.mine_to(10_060))

    def funding():
        def fund_miner_recipients(miner):
            for index in range(MINERS + miner, WALLETS, MINERS):
                chain.send(f"fund-{index}", miner, [(chain.addresses[index], 100 * COIN)])
        chain.wallet_jobs(range(MINERS), fund_miner_recipients)
        chain.mine(11)
    chain.stage("fund_all_wallets", funding)

    def stake_wave(wave):
        def stake_wallet(index):
            label = f"stake-{wave}-{index}"
            action = chain.send(label, index, [(chain.addresses[index], (10 + index % 5) * COIN)], tx_type=6)
            with chain.save_lock:
                if not any(item["label"] == label for item in chain.state["stakes"]):
                    chain.state["stakes"].append({"label": label, "wallet": index,
                        "txid": action["txid"], "principal": action["amount"], "wave": wave})
                    chain.save()
        chain.wallet_jobs(range(10, 30), stake_wallet)
        chain.mine(11)
    chain.stage("early_stakes", lambda: stake_wave("early"))

    def exchange_inputs():
        # Ten destinations are split into two transactions by the wallet. Give
        # each customer two independent confirmed inputs so both can be built
        # without trying to spend the first transaction's unmined change.
        def fund(miner):
            for index in range(MINERS + miner, WALLETS, MINERS):
                chain.send(f"exchange-input-{index}", miner, [(chain.addresses[index], 20 * COIN)])
        chain.wallet_jobs(range(MINERS), fund)
        chain.mine(21)
    chain.stage("exchange_independent_inputs", exchange_inputs)

    def exchange_input_choices():
        # The Carrot selector randomly prefers either one or two inputs. Four
        # candidates allow both split transactions to choose two independently.
        def fund(miner):
            for index in range(MINERS + miner, WALLETS, MINERS):
                for part in range(2):
                    chain.send(f"exchange-choice-{index}-{part}", miner, [(chain.addresses[index], 10 * COIN)])
        chain.wallet_jobs(range(MINERS), fund)
        chain.mine(21)
    chain.stage("exchange_input_selection_choices", exchange_input_choices)

    def deposits():
        def deposit(index):
            destinations = [(chain.exchange_addresses[index * 10 + j], COIN) for j in range(10)]
            chain.send(f"deposit-{index}", index, destinations)
        chain.wallet_jobs(range(WALLETS), deposit)
        chain.mine(11)
        chain.progress("Exchange deposits: 1000/1000 customer subaddresses funded")
    chain.stage("exchange_deposits", deposits)

    for wave, height in enumerate((30_000, 50_000, 70_000)):
        chain.stage(f"mining-{height}", lambda height=height: chain.mine_to(height))

        def transfers(wave=wave):
            def transfer(index):
                destinations = [(chain.addresses[(index + 1 + wave * 7) % WALLETS], 2 * COIN),
                                (chain.addresses[(index + 31 + wave * 3) % WALLETS], COIN)]
                chain.send(f"split-{wave}-{index}", index, destinations)
            chain.wallet_jobs(range(WALLETS), transfer)
            chain.mine(11)
        chain.stage(f"mixed_transfers-{wave}", transfers)

    def withdrawals():
        for index in range(20):
            # Each customer output contains one coin; spending three coins plus
            # fees forces actual multi-input joins across disclosed subaddresses.
            chain.send(f"withdraw-{index}", EXCHANGE,
                       [(chain.addresses[30 + index], 3 * COIN)],
                       indices=list(range(1 + index * 10, 11 + index * 10)))
            chain.mine(11)
    chain.stage("exchange_withdrawals_and_joins", withdrawals)
    chain.stage("real_token_issuance_and_transfer", lambda: token_workload(chain))
    chain.stage("invalid_funds", lambda: negative_tests(chain, historical))
    chain.stage("invalid_mints", lambda: invalid_mints(chain))
    chain.stage("mining-100000", lambda: chain.mine_to(100_000))
    chain.stage("immature_stakes_at_audit", lambda: stake_wave("late"))

    protocol_sources, yield_windows = {}, {}
    for stake in chain.state["stakes"]:
        tx, inclusion = chain.transaction(stake["txid"])
        assert tx["type"] == 6 and tx["amount_burnt"] == stake["principal"]
        payout_height = inclusion + STAKE_LOCK + 1
        stake.update(inclusion=inclusion, payout_height=payout_height)
        if payout_height > chain.tip():
            stake["status"] = "IMMATURE_STAKE"
            continue
        protocol = chain.block(payout_height)["protocol_tx"]
        key = tx["protocol_tx_data"]["return_address"]
        outputs = [out for out in protocol["vout"] if next(iter(out["target"].values()))["key"] == key]
        if inclusion not in yield_windows:
            yield_windows[inclusion] = historical_yield_window(chain, inclusion)
        data = yield_windows[inclusion]
        assert [item["block_height"] for item in data] == list(range(inclusion + 1, payout_height))
        expected_payout = stake["principal"] + sum(
            item["slippage_total_this_block"] * stake["principal"] // item["locked_coins_tally"]
            for item in data if item["locked_coins_tally"])
        assert len(outputs) == 1 and outputs[0]["amount"] == expected_payout, "incorrect principal/yield payout"
        # Native get_transactions recovers the protocol tx hash through the
        # independently scanned owner output below; retain canonical payout data.
        stake.update(status="MATURED", payout=outputs[0]["amount"], return_key=key)
    assert sum(item["status"] == "MATURED" for item in chain.state["stakes"]) == 20
    assert sum(item["status"] == "IMMATURE_STAKE" for item in chain.state["stakes"]) == 20
    chain.save()
    disclosures = chain.collect_disclosures()
    by_wallet = {item["wallet"]: item["outputs"] for item in disclosures}
    for stake in chain.state["stakes"]:
        if stake["status"] != "MATURED":
            continue
        outputs = [out for out in by_wallet[stake["wallet"]]
                   if out["block_height"] == stake["payout_height"] and out["pubkey"] == stake["return_key"]]
        assert len(outputs) == 1 and outputs[0]["amount"] == stake["payout"]
        protocol_sources.setdefault(outputs[0]["tx_hash"], []).append(stake["txid"])
    targets = [part["txid"] for label, action in chain.state["actions"].items()
               if label.startswith("split-2-") or label.startswith("withdraw-")
               for part in action.get("parts", [action])]
    resolutions = [audit_lineage(chain, target, disclosures, protocol_sources) for target in targets]
    assert all(item["status"] == "LINEAGE_RESOLVED" for item in resolutions), resolutions
    missing = audit_lineage(chain, targets[0], [], protocol_sources)
    assert missing["status"] == "PENDING"
    for label, action in chain.state["actions"].items():
        if label.startswith("withdraw-"):
            tx, _ = chain.transaction(action["txid"])
            assert len(tx["vin"]) >= 4, "exchange withdrawal did not join customer deposits"
    chain.state["sal1_totals"] = sal1_totals(chain, disclosures, protocol_sources)
    atomic_json(chain.root / "sal1-totals.json", chain.state["sal1_totals"])
    chain.state["damaged_snapshot_audits"] = test_snapshot_faults(chain, CoinbaseReader, varint)
    total_outputs = sum(len(item["outputs"]) for item in disclosures)
    miner_counts = [sum(chain.transaction(row["tx_hash"])[0]["type"] == 1 for row in by_wallet[i])
                    for i in range(MINERS)]
    assert sum(miner_counts) >= 100_000 and all(count > 0 for count in miner_counts)
    chain.state.update(status="COMPLEX_FIXTURE_PASS", tip=chain.tip(), wallet_count=WALLETS,
        exchange_subaddresses=SUBADDRESSES, confirmed_miner_outputs=miner_counts,
        total_disclosed_outputs=total_outputs, resolved_targets=len(resolutions),
        missing_disclosures=missing, consensus_audit_release_verified=False,
        limitations=["This pre-activation baseline uses a lineage oracle; native quarantine/release has separate gate tests.",
                     "Invalid raw transactions are rejected before inclusion; they are not injected into the valid chain.",
                     "This workload covers specified scenarios, not every transaction or fork on mainnet."])
    chain.save()
    return chain.state


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    repository = Path(__file__).resolve().parents[2]
    parser.add_argument("--bin-dir", type=Path, default=repository / "build/audit/release/bin")
    parser.add_argument("--historical-block", type=Path, default=repository / "build/audit-block-465074.txt")
    parser.add_argument("--root", type=Path, help="Resume this fixture's own existing temporary directory")
    args = parser.parse_args()
    if not args.historical_block.is_file():
        parser.error("extract block 465074 with salvium-blockchain-verification --inspect-height first")
    root = args.root.resolve() if args.root else Path(tempfile.mkdtemp(prefix="salvium-complex-audit-"))
    if args.root and not (root / "state.json").exists():
        parser.error("--root must contain this fixture's state.json")
    os.chmod(root, 0o700)
    lock = (root / "runner.lock").open("w")
    fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    print(f"Isolated test artifacts: {root}", flush=True)
    binaries = root / "bin"
    binaries.mkdir(exist_ok=True)
    for name in ("salviumd", "salvium-wallet-rpc", "salvium-blockchain-verification"):
        if not (binaries / name).exists():
            shutil.copy2(args.bin_dir / name, binaries / name)
    historical = root / "block-465074.txt"
    if not historical.exists():
        shutil.copy2(args.historical_block, historical)
    chain = ComplexChain(binaries, root)
    chain.state["status"] = "RUNNING"
    for key in ("error", "traceback"):
        chain.state.pop(key, None)
    chain.state["binary_sha256"] = {path.name: hashlib.file_digest(path.open("rb"), "sha256").hexdigest()
                                     for path in binaries.iterdir()}
    chain.state["source_sha256"] = hashlib.sha256(Path(__file__).read_bytes()).hexdigest()
    chain.save()
    signal.signal(signal.SIGTERM, lambda signum, frame: (_ for _ in ()).throw(KeyboardInterrupt()))
    try:
        chain.launch()
        result = scenario(chain, historical)
        atomic_json(root / "result.json", result)
    except BaseException as error:
        chain.state.update(status="INTERRUPTED" if isinstance(error, KeyboardInterrupt) else "FAIL",
                           error=str(error), traceback=traceback.format_exc())
        chain.save()
        atomic_json(root / "result.json", chain.state)
        raise
    finally:
        chain.close()
    print(json.dumps({key: result[key] for key in ("status", "tip", "wallet_count",
        "exchange_subaddresses", "confirmed_miner_outputs", "resolved_targets",
        "consensus_audit_release_verified")}, indent=2), flush=True)


if __name__ == "__main__":
    main()
