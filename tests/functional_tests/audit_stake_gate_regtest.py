#!/usr/bin/env python3
"""Verify both audit release and the full native stake/payout maturity cycle."""
import argparse
import json
from pathlib import Path
import shutil
import tempfile

from audit_gate_regtest import AuditChain, COIN


def freeze_other_outputs(chain, rpc, image):
    for row in rpc.call("incoming_transfers", {"transfer_type": "all", "account_index": 0, "subaddr_indices": [0]}).get("transfers", []):
        if not row["spent"] and row["key_image"] != image:
            rpc.call("freeze", {"key_image": row["key_image"]})


def reject_unauthorized_payout(chain, stake, amount):
    from audit_complex_regtest import CoinbaseReader, varint
    from audit_release_regtest import RpcError
    template = chain.daemon.call("get_block_template", {"wallet_address": chain.sink_address, "reserve_size": 0})
    blob = bytes.fromhex(template["blocktemplate_blob"])
    reader = CoinbaseReader(blob)
    reader.integer(); reader.integer(); reader.integer()
    reader.pos += 36
    reader.coinbase()
    protocol = reader.coinbase()
    position = protocol["count_start"]
    count = len(protocol["outputs"])
    assert count < 127
    output = (varint(amount) + b"\x04" + bytes.fromhex(stake["protocol_tx_data"]["return_address"])
        + b"\x04SAL1" + bytes(19))
    fake = blob[:position] + varint(count + 1) + output + blob[position + 1:]
    try:
        chain.daemon.call("submit_block", [fake.hex()])
    except RpcError:
        return
    raise AssertionError("A withheld stake payout was accepted in a raw block")


def exercise(chain):
    chain.mine(100, fund_miner=True)
    chain.transfer(0, 1, 50 * COIN)
    bob_funding = chain.transfer(0, 2, 50 * COIN)
    chain.mine(11)
    first = chain.transfer(1, 1, 12 * COIN, tx_type=6)
    second = chain.transfer(2, 2, 12 * COIN, tx_type=6)
    third = chain.transfer(0, 0, 12 * COIN, tx_type=6)
    chain.mine(11)
    stake, inclusion = chain.transaction(first["tx_hash"])
    other_stake, other_inclusion = chain.transaction(second["tx_hash"])
    undisclosed_stake, third_inclusion = chain.transaction(third["tx_hash"])
    assert inclusion == other_inclusion
    assert third_inclusion == inclusion
    payout_height = inclusion + 21601
    miner_ids = sorted({row["tx_hash"] for row in chain.outputs(0) if row["tx_hash"] != third["tx_hash"]})
    alice_ids = sorted({row["tx_hash"] for row in chain.outputs(1)})
    bob_changes = [row["key_image"] for row in chain.outputs(2) if row["tx_hash"] == second["tx_hash"]]
    assert bob_changes
    chain.mine(chain.activation - 1 - chain.tip())
    chain.disclose(chain.owner(1), alice_ids)
    chain.disclose(chain.owner(2), [second["tx_hash"]])
    for offset in range(0, len(miner_ids), 64):
        chain.disclose(chain.owner(0), miner_ids[offset:offset + 64])
    audited_height = chain.tip()
    assert audited_height < payout_height
    assert all(row["state"] == "PENDING" for row in chain.state(bob_changes)["entries"])
    while chain.tip() < payout_height - 1:
        chain.mine(min(1000, payout_height - 1 - chain.tip()), refresh=False)
        print(f"Native stake period: {chain.tip()}/{payout_height}", flush=True)
    assert not chain.block(payout_height - 1)["protocol_tx"]["vout"]
    data = chain.daemon.call("get_yield_info", {"include_raw_data": True, "from_height": inclusion + 1,
        "to_height": payout_height - 1})["yield_data"]
    assert len(data) == 21600 and all(row["locked_coins_tally"] == 36 * COIN for row in data)
    expected = 12 * COIN + sum(row["slippage_total_this_block"] // 3 for row in data)
    reject_unauthorized_payout(chain, other_stake, expected)
    chain.mine(1)
    protocol = chain.block(payout_height)["protocol_tx"]
    assert len(protocol["vout"]) == 1 and protocol["vout"][0]["amount"] == expected
    def returned(index, tx):
        return [row for row in chain.outputs(index) if row["pubkey"] == tx["protocol_tx_data"]["return_address"]]
    alice = returned(1, stake)
    assert len(alice) == 1 and not alice[0]["unlocked"] and not returned(2, other_stake)
    assert not returned(0, undisclosed_stake)
    alice_state = chain.state([alice[0]["key_image"]])["entries"][0]
    assert alice_state["state"] == "AUDIT_PASSED" and alice_state["completed_height"] <= audited_height
    chain.mine(60)
    freeze_other_outputs(chain, chain.wallets[1], alice[0]["key_image"])
    alice_spend = chain.transfer(1, 0, COIN, relay=False)
    chain.daemon.request("/pop_blocks", {"nblocks": 2})
    assert chain.tip() + 1 == payout_height + 59
    chain.submit(alice_spend, False)
    chain.mine(1)
    chain.submit(alice_spend, True)
    chain.mine(1)
    confirmed, _ = chain.transaction(alice_spend["tx_hash"])
    assert [row["key"]["k_image"] for row in confirmed["vin"]] == [alice[0]["key_image"]]
    chain.mine(30)
    assert not returned(2, other_stake)
    assert all(row["state"] == "PENDING" for row in chain.state(bob_changes)["entries"])
    reject_unauthorized_payout(chain, other_stake, expected)

    # Supply the missing real funding evidence long after normal maturity.
    completed = chain.disclose(chain.owner(2), [bob_funding["tx_hash"]])
    delayed_payout = completed + 10
    state = chain.state(bob_changes)["entries"][0]
    assert state["completed_height"] == completed and state["release_height"] == delayed_payout
    chain.mine(9)
    assert chain.tip() == delayed_payout - 1
    assert all(not chain.block(h)["protocol_tx"]["vout"] for h in range(completed, delayed_payout))
    assert not returned(2, other_stake)
    chain.mine(1)
    bob = returned(2, other_stake)
    assert len(bob) == 1 and bob[0]["amount"] == expected and not bob[0]["unlocked"]
    assert len(chain.block(delayed_payout)["protocol_tx"]["vout"]) == 1
    reject_unauthorized_payout(chain, other_stake, expected)
    chain.mine(1)
    assert not chain.block(delayed_payout + 1)["protocol_tx"]["vout"]

    # Removing late funding evidence revokes authorization and the payout.
    saved = [chain.daemon.call("get_block", {"height": h})["blob"]
        for h in range(completed, chain.tip() + 1)]
    chain.daemon.request("/pop_blocks", {"nblocks": len(saved)})
    assert all(row["state"] == "PENDING" for row in chain.state(bob_changes)["entries"])
    reject_unauthorized_payout(chain, other_stake, expected)
    chain.mine(1, refresh=False)
    assert not chain.block(chain.tip())["protocol_tx"]["vout"]
    chain.daemon.request("/pop_blocks", {"nblocks": 1})
    for blob in saved:
        chain.daemon.call("submit_block", [blob])
    chain.mine(59)
    freeze_other_outputs(chain, chain.wallets[2], bob[0]["key_image"])
    bob_spend = chain.transfer(2, 0, COIN, relay=False)
    chain.daemon.request("/pop_blocks", {"nblocks": 2})
    assert chain.tip() + 1 == delayed_payout + 59
    chain.submit(bob_spend, False)
    chain.mine(1)
    chain.submit(bob_spend, True)
    chain.mine(1)
    confirmed, _ = chain.transaction(bob_spend["tx_hash"])
    assert [row["key"]["k_image"] for row in confirmed["vin"]] == [bob[0]["key_image"]]
    assert not returned(0, undisclosed_stake)
    return {"status": "STAKE_AUDIT_GATE_PASS", "tip": chain.tip(), "stake_period": 21600,
        "activation_height": chain.activation, "normal_payout_height": payout_height,
        "delayed_completion_height": completed, "delayed_payout_height": delayed_payout,
        "principal_each_atomic": 12 * COIN, "payout_each_atomic": expected,
        "audited_immature_stake_stayed_locked": True, "pending_stake_created_no_payout": True,
        "undisclosed_stake_created_no_payout": True,
        "raw_unauthorized_payout_blocks_rejected": 4, "delayed_payout_kept_original_yield": True,
        "release_C_plus_9_no_payout_C_plus_10_payout": True,
        "reorg_revoked_payout_authorization": True, "replay_restored_one_payout": True,
        "both_payouts_rejected_at_P_plus_59_spent_at_P_plus_60": True,
        "both_audited_mature_payouts_spent": True}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix="salvium-stake-audit-gate-"))
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
