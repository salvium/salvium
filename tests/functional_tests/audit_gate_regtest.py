#!/usr/bin/env python3
"""Native SAL1 quarantine, deterministic release and reorg regression."""
import argparse
import json
from pathlib import Path
import sys
import shutil
import tempfile

from audit_release_regtest import LocalChain, RpcError
sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "utils"))
from lineage_disclosure import encode_disclosure

COIN = 100_000_000


class AuditChain(LocalChain):
    activation = 240
    # Historical dependency/reorg fixtures retain their original release rules.
    # audit_window_regtest overrides this with the current bounded policy.
    audit_duration = 0

    def start(self, name, command, rpc, ready_method):
        if name == "daemon":
            command += ["--regtest-lineage-audit-height", str(self.activation),
                        "--regtest-lineage-audit-duration", str(self.audit_duration), "--keep-fakechain"]
        elif name in ("miner", "alice", "bob", "observer"):
            command += ["--regtest-lineage-audit-height", str(self.activation)]
        return super().start(name, command, rpc, ready_method)

    def owner(self, index):
        return {"address": self.addresses[index], "s_view_balance": self.wallets[index].call(
            "query_key", {"key_type": "s_view_balance"})["key"], "subaddress_count": 1}

    def outputs(self, index):
        return self.wallets[index].call("incoming_transfers", {
            "transfer_type": "all", "account_index": 0, "subaddr_indices": [0]}).get("transfers", [])

    def disclose(self, owner, ids, invalid=False):
        genesis = self.daemon.call("get_block_header_by_height", {"height": 0})["block_header"]["hash"]
        data = encode_disclosure(owner, ids, genesis, 3, self.activation)
        request = {"wallet_address": self.sink_address, "reserve_size": 0, "audit_disclosure": data}
        if invalid:
            try:
                self.daemon.call("get_block_template", request)
            except RpcError:
                return
            raise AssertionError("Invalid disclosure accepted by native verifier")
        template = self.daemon.call("get_block_template", request)
        if not getattr(self, "checked_forged_block", False):
            forged = bytearray.fromhex(data)
            forged[32] ^= 1  # Wrong network, same-length canonical payload.
            malformed = template["blocktemplate_blob"].replace(data, forged.hex(), 1)
            assert malformed != template["blocktemplate_blob"]
            try:
                self.daemon.call("submit_block", [malformed])
            except RpcError:
                self.checked_forged_block = True
            else:
                raise AssertionError("A forged disclosure bypassed direct block validation")
        # Isolated regtest difficulty is exactly one: every nonce satisfies PoW.
        self.daemon.call("submit_block", [template["blocktemplate_blob"]])
        return template["height"]

    def state(self, images):
        return self.daemon.call("get_lineage_audit_status", {"key_images": images})

    def submit(self, tx, accepted):
        # These fixtures submit to their miner directly. Avoid Dandelion's
        # randomized relay delay when checking exact inclusion heights; native
        # transaction validation and the audit spend gate still run normally.
        response = self.daemon.request("/send_raw_transaction", {
            "tx_as_hex": tx["tx_blob"], "do_not_relay": True})
        assert (response.get("status") == "OK") == accepted, response
        return response


def exercise(chain):
    chain.mine(100, fund_miner=True)
    funded = chain.transfer(0, 1, 50 * COIN)
    chain.mine(11)
    stake = chain.transfer(1, 1, 12 * COIN, tx_type=6)
    chain.mine(11)
    # Construct an ordinary signed spend while quarantine is still inactive.
    spend = chain.transfer(1, 2, 3 * COIN, relay=False)
    conflict = chain.transfer(1, 2, 4 * COIN, relay=False)
    alice_rows = chain.outputs(1)
    miner_rows = chain.outputs(0)
    alice_images = [row["key_image"] for row in alice_rows if not row["spent"]]
    assert alice_images
    chain.mine(chain.activation - 1 - chain.tip())
    assert chain.block(chain.activation - 1)["major_version"] == 13
    assert all(row["state"] == "UNDISCLOSED" for row in chain.state(alice_images)["entries"])
    chain.submit(spend, False)
    alice_ids = sorted({row["tx_hash"] for row in alice_rows})
    wrong = dict(chain.owner(1), s_view_balance="00" * 32)
    chain.disclose(wrong, alice_ids, invalid=True)
    chain.disclose(chain.owner(1), alice_ids)
    assert chain.block(chain.activation)["major_version"] == 14
    chain.mine(15)
    assert all(row["state"] == "PENDING" for row in chain.state(alice_images)["entries"])
    chain.submit(spend, False)
    before_dependencies = chain.tip()
    for offset in range(0, len(miner_rows), 64):
        chain.disclose(chain.owner(0), [row["tx_hash"] for row in miner_rows[offset:offset + 64]])
    state = chain.state(alice_images)
    assert all(row["state"] == "MATURING" for row in state["entries"]), state
    release = max(row["release_height"] for row in state["entries"])
    completion = release - 10
    chain.mine(release - 2 - chain.tip())
    # tip C+8 -> candidate C+9: must reject. tip C+9 -> candidate C+10: accept.
    chain.submit(spend, False)
    chain.mine(1)
    chain.submit(spend, True)
    chain.mine(1)
    confirmed = chain.block(chain.tip())
    assert spend["tx_hash"] in confirmed["tx_hashes"]
    chain.submit(conflict, False)
    chain.mine(11)
    bob_images = [row["key_image"] for row in chain.outputs(2) if not row["spent"]]
    assert bob_images and all(row["state"] == "UNDISCLOSED" for row in chain.state(bob_images)["entries"])
    assert chain.balance(2)["unlocked_balance"] == 0
    saved = [chain.daemon.call("get_block", {"height": height})["blob"]
             for height in range(before_dependencies + 1, chain.tip() + 1)]
    chain.daemon.request("/pop_blocks", {"nblocks": chain.tip() - before_dependencies})
    assert all(row["state"] == "PENDING" for row in chain.state(alice_images)["entries"])
    chain.submit(spend, False)
    chain.mine(1, refresh=False)
    assert spend["tx_hash"] not in chain.block(chain.tip()).get("tx_hashes", [])
    chain.daemon.request("/pop_blocks", {"nblocks": 1})
    for blob in saved:
        chain.daemon.call("submit_block", [blob])
    assert chain.transaction(spend["tx_hash"])[1] == release
    return {"status": "AUDIT_GATE_PASS", "completion_height": completion,
            "release_height": release, "stake_tx": stake["tx_hash"],
            "checks": ["unaudited_raw_spend_rejected", "wrong_view_secret_rejected",
                "missing_ancestor_stays_pending_after_15_blocks", "C_plus_9_rejected",
                "C_plus_10_accepted", "conflicting_spend_rejected", "new_receipt_requires_its_own_audit",
                "wrong_network_disclosure_rejected_in_raw_block",
                "reorg_revokes_clearance", "reorg_stale_pool_transaction_not_mined", "canonical_replay_restores_clearance"]}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix="salvium-audit-gate-"))
    print(root, flush=True)
    binaries = root / "bin"
    binaries.mkdir()
    for name in ("salviumd", "salvium-wallet-rpc", "salvium-blockchain-verification", "salvium-blockchain-import", "salvium-blockchain-export"):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
    chain = AuditChain(binaries, root)
    try:
        chain.launch()
        result = exercise(chain)
        (root / "result.json").write_text(json.dumps(result, indent=2) + "\n")
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == "__main__":
    main()
