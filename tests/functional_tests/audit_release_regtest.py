#!/usr/bin/env python3
"""Self-contained local RPC fixture for audit-release integration tests.

Uses only Python's standard library and locally built Salvium binaries. Creates
fresh wallets and an isolated regtest chain; never accepts an external endpoint.
Baseline mode verifies mining, transfers, and the full stake payout cycle. It does NOT claim
to verify the proposed audit release protocol, which needs its own test cases.
"""

import argparse
import hashlib
import http.client
import json
import os
from pathlib import Path
import secrets
import signal
import socket
import subprocess
import tempfile
import time
import urllib.error
import urllib.request


class RpcError(RuntimeError):
    pass


class Rpc:
    def __init__(self, port, login=None):
        self.url = f"http://127.0.0.1:{port}"
        self.port, self.login = port, login
        self.timeout = 180

    def call(self, method, params=None):
        payload = {"jsonrpc": "2.0", "id": "test", "method": method,
                   "params": params or {}}
        result = self.request("/json_rpc", payload)
        if "error" in result:
            raise RpcError(f"{method}: {result['error']}")
        result = result["result"]
        if result.get("status", "OK") != "OK":
            raise RpcError(f"{method}: {result}")
        return result

    def request(self, path, payload):
        # Epee's digest nonce belongs to a connection. urllib's digest handler
        # opens a new connection for the retry; retain the challenged connection.
        connection = http.client.HTTPConnection("127.0.0.1", self.port, timeout=self.timeout)
        body = json.dumps(payload).encode()
        headers = {"Content-Type": "application/json", "Connection": "keep-alive"}
        try:
            connection.request("POST", path, body, headers)
            response = connection.getresponse()
            data = response.read()
            if response.status == 401 and self.login:
                challenge = next((value for name, value in response.getheaders()
                                  if name.lower() == "www-authenticate"), "")
                if not challenge.startswith("Digest "):
                    raise RpcError("unsupported RPC authentication challenge")
                auth = urllib.request.parse_keqv_list(urllib.request.parse_http_list(challenge[7:]))
                if auth.get("algorithm", "MD5") != "MD5" or "auth" not in auth.get("qop", "").split(","):
                    raise RpcError("unsupported RPC digest algorithm")
                username, password = self.login
                nonce, realm, cnonce, nc = auth["nonce"], auth["realm"], secrets.token_hex(16), "00000001"
                digest = lambda value: hashlib.md5(value.encode()).hexdigest()
                answer = digest(f'{digest(f"{username}:{realm}:{password}")}:{nonce}:{nc}:{cnonce}:auth:{digest(f"POST:{path}")}')
                headers["Authorization"] = (
                    f'Digest username="{username}", realm="{realm}", nonce="{nonce}", '
                    f'uri="{path}", algorithm=MD5, response="{answer}", qop=auth, '
                    f'nc={nc}, cnonce="{cnonce}"')
                connection.request("POST", path, body, headers)
                response = connection.getresponse()
                data = response.read()
            if response.status != 200:
                raise RpcError(f"HTTP {response.status} from local RPC")
            return json.loads(data)
        finally:
            connection.close()


class LocalChain:
    def __init__(self, binaries, root):
        self.binaries, self.root = binaries, root
        self.processes, self.logs, self.ports = [], [], set()

    def port(self):
        # There is a short bind race; startup failure is fatal, never a fallback
        # to a pre-existing RPC service.
        while True:
            with socket.socket() as sock:
                sock.bind(("127.0.0.1", 0))
                port = sock.getsockname()[1]
            if port not in self.ports:
                self.ports.add(port)
                return port

    def start(self, name, command, rpc, ready_method):
        log = (self.root / f"{name}.log").open("w")
        self.logs.append(log)
        process = subprocess.Popen(command, stdin=subprocess.DEVNULL,
                                   stdout=log, stderr=subprocess.STDOUT)
        self.processes.append(process)
        deadline = time.monotonic() + getattr(self, 'startup_timeout', 120)
        last_error = None
        while time.monotonic() < deadline:
            if process.poll() is not None:
                raise RuntimeError(f"{name} exited; see {log.name}")
            try:
                rpc.call(ready_method)
                return
            except (OSError, urllib.error.URLError, RpcError) as error:
                last_error = error
                time.sleep(0.2)
        raise RuntimeError(f"{name} startup timeout: {last_error}; see {log.name}")

    def launch(self):
        config = self.root / "isolated.conf"
        config.write_text("# Intentionally empty: do not load user configuration.\n")
        self.daemon = Rpc(self.port())
        daemon_port = self.daemon.url.rsplit(":", 1)[1]
        self.start("daemon", [str(self.binaries / "salviumd"),
            "--config-file", str(config), "--regtest", "--fixed-difficulty", "1",
            "--offline", "--no-igd", "--hide-my-port", "--no-zmq",
            "--non-interactive", "--disable-dns-checkpoints", "--check-updates", "disabled",
            "--max-concurrency", "2", "--p2p-bind-ip", "127.0.0.1",
            "--p2p-bind-port", str(self.port()), "--rpc-bind-ip", "127.0.0.1",
            "--rpc-bind-port", daemon_port, "--rpc-ssl", "disabled",
            "--data-dir", str(self.root / "chain"), "--log-level", "1"],
            self.daemon, "get_info")
        self.wallets, self.addresses = [], []
        for name in ("miner", "alice", "bob", "observer"):
            directory = self.root / name
            directory.mkdir(exist_ok=True)
            login = ("regtest", secrets.token_hex(24))
            rpc = Rpc(self.port(), login)
            self.start(name, [str(self.binaries / "salvium-wallet-rpc"),
                "--config-file", str(config), "--wallet-dir", str(directory),
                "--shared-ringdb-dir", str(directory / "ringdb"),
                "--rpc-bind-ip", "127.0.0.1", "--rpc-bind-port", rpc.url.rsplit(":", 1)[1],
                "--rpc-login", ":".join(login), "--rpc-ssl", "disabled",
                "--daemon-address", self.daemon.url, "--daemon-ssl", "disabled",
                "--allow-mismatched-daemon-version",
                "--trusted-daemon", "--log-file", str(directory / "wallet.log")],
                rpc, "get_version")
            # Disable the idle refresh before opening a restored wallet. Otherwise
            # it can race the next request while scanning a large saved fixture.
            rpc.call("auto_refresh", {"enable": False})
            if name == "observer":
                self.observer = rpc
                rpc.call("open_wallet" if (directory / "mining-sink.keys").exists() else "create_wallet", {"filename": "mining-sink", "password": "", "language": "English"})
                rpc.call("auto_refresh", {"enable": False})
                addresses = rpc.call("get_address", {"account_index": 0, "carrot": True})
                self.sink_address = addresses["addresses"][0]["address_carrot"]
                rpc.call("close_wallet")
                continue
            rpc.call("open_wallet" if (directory / "wallet.keys").exists() else "create_wallet", {"filename": "wallet", "password": "", "language": "English"})
            rpc.call("auto_refresh", {"enable": False})
            addresses = rpc.call("get_address", {"account_index": 0, "carrot": True})
            self.addresses.append(addresses["addresses"][0]["address_carrot"])
            self.wallets.append(rpc)

    def mine(self, count, refresh=True, fund_miner=False):
        result = self.daemon.call("generateblocks", {
            "amount_of_blocks": count,
            "wallet_address": self.addresses[0] if fund_miner else self.sink_address,
            "prev_block": ""})
        # Empty RPC collections are omitted when a restored fixture needs no
        # additional blocks to reach the requested boundary.
        assert len(result.get("blocks", [])) == count, result
        if refresh:
            for wallet in self.wallets:
                wallet.call("refresh")
        return result

    def tip(self):
        return self.daemon.call("get_info")["height"] - 1

    def block(self, height):
        return json.loads(self.daemon.call("get_block", {"height": height})["json"])

    def transaction(self, txid):
        result = self.daemon.request("/get_transactions", {
            "txs_hashes": [txid], "decode_as_json": True, "prune": False})
        assert result.get("status") == "OK", result
        assert not result.get("missed_tx"), result
        entry = result["txs"][0]
        assert not entry["in_pool"] and entry["tx_hash"] == txid, "transaction is not canonical"
        return json.loads(entry["as_json"]), entry["block_height"]

    def balance(self, index):
        result = self.wallets[index].call("get_balance", {"account_index": 0, "asset_type": "SAL1"})
        return next((item for item in result.get("balances", []) if item["asset_type"] == "SAL1"),
                    {"balance": 0, "unlocked_balance": 0})

    def transfer(self, sender, recipient, amount, tx_type=3, relay=True):
        return self.wallets[sender].call("transfer", {
            "destinations": [{"address": self.addresses[recipient], "amount": amount,
                              "asset_type": "SAL1"}],
            "source_asset": "SAL1", "dest_asset": "SAL1", "tx_type": tx_type,
            "account_index": 0, "subaddr_indices": [0], "priority": 1,
            "ring_size": 16, "unlock_time": 0, "payment_id": "",
            "get_tx_key": False, "get_tx_hex": True, "do_not_relay": not relay})

    def disclosed_outputs(self, index, key_owner=None):
        """Independently rescan using only this test wallet's address and s_vb."""
        view = self.wallets[index if key_owner is None else key_owner].call(
            "query_key", {"key_type": "s_view_balance"})["key"]
        self.observer.call("generate_from_keys", {
            "filename": f"view-{index}-{secrets.token_hex(4)}", "password": "", "address": self.addresses[index],
            "viewkey": view, "spendkey": "", "restore_height": 0,
            "autosave_current": False})
        self.observer.call("auto_refresh", {"enable": False})
        self.observer.call("refresh")
        params = {"transfer_type": "all", "account_index": 0, "subaddr_indices": [0]}
        observed = self.observer.call("incoming_transfers", params).get("transfers", [])
        if key_owner is not None and key_owner != index:
            assert not observed, "wrong view key unexpectedly recognized outputs"
            self.observer.call("close_wallet")
            return observed
        expected = self.wallets[index].call("incoming_transfers", params).get("transfers", [])
        fields = ("tx_hash", "pubkey", "key_image", "amount", "spent")
        normalize = lambda outputs: sorted(tuple(item[field] for field in fields) for item in outputs)
        assert expected, "owner has no outputs to compare"
        assert all(item["key_image"] for item in observed), "view-only scan did not derive key images"
        assert normalize(observed) == normalize(expected), "view-only reconstruction differs from owner"
        self.observer.call("close_wallet")
        return observed

    def close(self):
        for process in reversed(self.processes):
            if process.poll() is None:
                process.terminate()
        for process in reversed(self.processes):
            try:
                process.wait(timeout=20)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait(timeout=10)
        for log in self.logs:
            log.close()


def baseline(chain):
    results = []
    print("Mining fresh regtest funds...", flush=True)
    chain.mine(100, fund_miner=True)
    assert chain.balance(0)["unlocked_balance"] > 0
    results.append("mining_and_maturity")
    amount = 10 * 100_000_000
    sent = chain.transfer(0, 1, amount, relay=False)
    # Submit the corrupted signature before the genuine transaction so rejection
    # cannot merely be caused by its key images already being in the pool/chain.
    corrupted = bytearray.fromhex(sent["tx_blob"])
    corrupted[-1] ^= 1
    rejected = chain.daemon.request("/send_raw_transaction", {
        "tx_as_hex": corrupted.hex(), "do_not_relay": True})
    assert rejected.get("status") != "OK", "corrupted transaction accepted"
    accepted = chain.daemon.request("/send_raw_transaction", {
        "tx_as_hex": sent["tx_blob"]})
    assert accepted.get("status") == "OK", accepted
    results.append("corrupted_signature_rejected_before_valid_submission")
    chain.mine(1)
    block = json.loads(chain.daemon.call("get_block", {"height": chain.daemon.call("get_info")["height"] - 1})["json"])
    assert sent["tx_hash"] in block.get("tx_hashes", []), "transfer not mined"
    assert chain.balance(1)["balance"] == amount
    assert chain.balance(1)["unlocked_balance"] == 0
    chain.mine(10)
    assert chain.balance(1)["unlocked_balance"] == amount
    results.append("transfer_inclusion_and_maturity")
    returned = chain.transfer(1, 2, amount // 2)
    chain.mine(11)
    assert chain.balance(2)["unlocked_balance"] == amount // 2
    results.append("recipient_spends_received_funds")
    stake = chain.transfer(0, 0, amount, tx_type=6)
    chain.mine(1)
    block = json.loads(chain.daemon.call("get_block", {"height": chain.daemon.call("get_info")["height"] - 1})["json"])
    assert stake["tx_hash"] in block.get("tx_hashes", []), "stake not mined"
    results.append("stake_inclusion_only")
    print("Checking independent view-balance scans...", flush=True)
    assert not chain.disclosed_outputs(2, key_owner=1)
    results.append("wrong_view_key_does_not_resolve_outputs")
    disclosures = {index: chain.disclosed_outputs(index) for index in (2, 1, 0)}
    results.append("view_balance_reconstructs_outputs_and_key_images")
    results.extend(test_lineage_clock(chain, returned["tx_hash"], disclosures))
    results.extend(test_stake_release(chain, stake["tx_hash"], amount))
    return {"passed": results, "audit_release_verified": False,
            "stake_release_verified": True,
            "transactions": [sent["tx_hash"], returned["tx_hash"], stake["tx_hash"]]}


def unresolved_ancestry(chain, txid, disclosures):
    """Prototype using actual independently scanned links and canonical RPC data.

    This is not a consensus proof verifier. The owned-output mappings passed here
    came from fresh s_vb scans; the daemon already checked transaction consensus.
    Production needs a bounded native verifier and authenticated on-chain records.
    """
    known = {}
    for outputs in disclosures:
        for output in outputs:
            image = output["key_image"]
            if image in known:
                assert known[image] == output, "conflicting disclosed key image"
            known[image] = output
    missing, visited, pending = set(), set(), [(txid, chain.tip() + 1)]
    while pending:
        current, child_height = pending.pop()
        transaction, height = chain.transaction(current)
        assert height < child_height, "cycle or non-ancestral funding reference"
        if current in visited:
            continue
        visited.add(current)
        if transaction["type"] == 1:  # MINER: verify canonical miner transaction identity.
            assert chain.block(height)["miner_tx"] == transaction
            continue
        assert transaction["type"] == 3, "unsupported ancestry type must fail closed"
        for tx_input in transaction["vin"]:
            image = tx_input["key"]["k_image"]
            if image not in known:
                missing.add(image)
            else:
                pending.append((known[image]["tx_hash"], height))
    return missing


def test_lineage_clock(chain, target, disclosures):
    print("Testing missing ancestors and the completion-height clock (prototype)...", flush=True)
    # Only Bob discloses. Ten blocks do not turn an unknown ancestor into a proof.
    assert unresolved_ancestry(chain, target, [disclosures[2]])
    chain.mine(11)
    assert unresolved_ancestry(chain, target, [disclosures[2]])
    # Alice's real input is now resolvable, but the miner's earlier inputs are not.
    assert unresolved_ancestry(chain, target, [disclosures[2], disclosures[1]])
    assert not unresolved_ancestry(chain, target, list(disclosures.values()))
    completion_height = chain.tip()
    release_height = completion_height + 10
    chain.mine(9)
    assert chain.tip() < release_height
    chain.mine(1)
    assert chain.tip() == release_height
    # Removing ancestor evidence must invalidate completion, irrespective of time.
    assert unresolved_ancestry(chain, target, [disclosures[2], disclosures[1]])
    return ["lineage_pending_without_ancestors", "lineage_closes_with_view_disclosures",
            "prototype_completion_plus_10_clock", "prototype_missing_evidence_invalidates_completion"]


def test_stake_release(chain, txid, principal):
    print("Testing actual stake maturity and payout...", flush=True)
    transaction, inclusion = chain.transaction(txid)
    assert transaction["type"] == 6 and transaction["amount_burnt"] == principal
    # FAKECHAIN currently uses the mainnet 30*24*30 lock period. Do not change
    # consensus parameters merely to speed this test up.
    payout_height = inclusion + 30 * 24 * 30 + 1
    while chain.tip() < payout_height - 1:
        count = min(1000, payout_height - 1 - chain.tip())
        chain.mine(count, refresh=False)
        print(f"Stake waiting: height {chain.tip()} / {payout_height}", flush=True)
    assert not chain.block(payout_height - 1)["protocol_tx"]["vout"], "unexpected early payout"
    data = chain.daemon.call("get_yield_info", {
        "include_raw_data": True, "from_height": inclusion + 1,
        "to_height": payout_height - 1})["yield_data"]
    assert [item["block_height"] for item in data] == list(range(inclusion + 1, payout_height))
    assert all(item["locked_coins_tally"] == principal for item in data), "unexpected stake competitor"
    expected_payout = principal + sum(item["slippage_total_this_block"] for item in data)
    # The long mining loop skips wallet refresh for speed. Synchronize first so
    # ordinary miner outputs that matured meanwhile are not mistaken for an
    # early-unlocked stake payout.
    for wallet in chain.wallets:
        wallet.call("refresh")
    before = chain.balance(0)["unlocked_balance"]
    chain.mine(1)
    protocol = chain.block(payout_height)["protocol_tx"]
    assert len(protocol["vout"]) == 1, "missing or duplicate stake payout"
    payout = protocol["vout"][0]["amount"]
    assert payout == expected_payout, "stake payout differs from principal plus accrued yield"
    assert chain.balance(0)["unlocked_balance"] == before, "protocol payout unlocked early"
    # Consensus rollback must undo the payout. Regtest pop_blocks is sent only to
    # the node this fixture launched, never to a user-supplied endpoint.
    popped = chain.daemon.request("/pop_blocks", {"nblocks": 1})
    assert popped["status"] == "OK" and chain.tip() == payout_height - 1
    for wallet in chain.wallets:
        wallet.call("refresh")
    chain.mine(1)
    replayed = chain.block(payout_height)["protocol_tx"]
    assert len(replayed["vout"]) == 1 and replayed["vout"][0]["amount"] == payout
    chain.mine(60)
    assert chain.balance(0)["unlocked_balance"] == before + payout, "stake payout not spendable after maturity"
    outputs = chain.disclosed_outputs(0)
    payout_outputs = [output for output in outputs
                      if output["amount"] == payout and output["block_height"] == payout_height]
    assert len(payout_outputs) == 1, "view-only scan did not uniquely reconstruct stake payout"
    payout_image = payout_outputs[0]["key_image"]
    # Force coin selection to use the payout itself. An unconstrained transfer
    # could spend old mining outputs and falsely appear to test payout spending.
    for output in outputs:
        if not output["spent"] and output["key_image"] != payout_image:
            chain.wallets[0].call("freeze", {"key_image": output["key_image"]})
    bob_before = chain.balance(2)["unlocked_balance"]
    sent_amount = payout // 2  # Leave enough of the single payout input for fees.
    spent = chain.transfer(0, 2, sent_amount)
    chain.mine(11)
    assert chain.balance(2)["unlocked_balance"] == bob_before + sent_amount
    spent_tx, _ = chain.transaction(spent["tx_hash"])
    assert spent_tx["type"] == 3
    assert [entry["key"]["k_image"] for entry in spent_tx["vin"]] == [payout_image], \
        "transfer did not spend the stake payout itself"
    # A view-only scan must reconstruct protocol payouts as well as ordinary
    # receipts, including their derived key images after spending.
    outputs = chain.disclosed_outputs(0)
    assert any(output["key_image"] == payout_image and output["spent"]
               for output in outputs), "view-only scan did not detect spent stake payout"
    chain.disclosed_outputs(2)
    return ["stake_not_paid_early", "stake_principal_and_yield_payout",
            "stake_payout_reorg_and_replay", "stake_payout_maturity", "stake_payout_value_spend",
            "view_balance_reconstructs_stake_payout_and_subsequent_transfer"]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bin-dir", type=Path,
                        default=Path(__file__).resolve().parents[2] / "build/audit/release/bin")
    args = parser.parse_args()
    def interrupted(signum, frame):
        raise KeyboardInterrupt(f"interrupted by signal {signum}")
    signal.signal(signal.SIGTERM, interrupted)
    for name in ("salviumd", "salvium-wallet-rpc"):
        if not os.access(args.bin_dir / name, os.X_OK):
            parser.error(f"missing executable: {args.bin_dir / name}; build with make release-static")
    root = Path(tempfile.mkdtemp(prefix="salvium-audit-regtest-"))
    print(f"Isolated test artifacts: {root}", flush=True)
    chain = LocalChain(args.bin_dir.resolve(), root)
    result = {"status": "FAIL", "audit_release_verified": False,
              "test_source_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
              "binary_directory": str(args.bin_dir.resolve()),
              "binary_sha256": {name: hashlib.file_digest((args.bin_dir / name).open("rb"), "sha256").hexdigest()
                                for name in ("salviumd", "salvium-wallet-rpc")}}
    try:
        chain.launch()
        result.update(baseline(chain))
        result["status"] = "BASELINE_PASS"
    finally:
        chain.close()
        (root / "result.json").write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps(result, indent=2), flush=True)


if __name__ == "__main__":
    main()
