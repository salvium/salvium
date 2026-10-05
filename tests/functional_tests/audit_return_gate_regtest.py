#!/usr/bin/env python3
"""Returned SAL1 payments require both sender and returning-owner ancestry."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile

from audit_gate_regtest import AuditChain, COIN
from audit_stake_gate_regtest import freeze_other_outputs


def exercise(chain):
    chain.mine(100, fund_miner=True)
    chain.transfer(0, 1, 50 * COIN)
    chain.mine(11)
    payment = chain.transfer(1, 2, 10 * COIN)
    chain.mine(11)
    returned = chain.wallets[2].call("return_payment", {"txid": payment["tx_hash"],
        "get_tx_hex": True, "get_tx_key": False, "do_not_relay": False})
    assert len(returned["tx_hash_list"]) == 1
    return_id = returned["tx_hash_list"][0]
    chain.mine(11)
    outputs = [row for row in chain.outputs(1) if row["tx_hash"] == return_id]
    assert len(outputs) == 1 and 0 < outputs[0]["amount"] < 10 * COIN
    image = outputs[0]["key_image"]
    # Recover the sender into an empty wallet cache: return context must be
    # rebuilt from the earlier change transaction during the same bulk refresh.
    seed = chain.wallets[1].call("query_key", {"key_type": "mnemonic"})["key"]
    chain.wallets[1].call("close_wallet")
    chain.wallets[1].call("restore_deterministic_wallet", {"filename": "restored-sender",
        "seed": seed, "password": "", "restore_height": 0})
    chain.wallets[1].call("refresh")
    restored = [row for row in chain.outputs(1) if row["tx_hash"] == return_id]
    assert len(restored) == 1 and restored[0]["key_image"] == image and restored[0]["amount"] == outputs[0]["amount"], restored
    freeze_other_outputs(chain, chain.wallets[1], image)
    spend = chain.transfer(1, 0, COIN, relay=False)
    chain.mine(chain.activation - 1 - chain.tip())
    chain.submit(spend, False)
    # Enroll through the actual wallet command. The sender's return context
    # must not substitute for the returning recipient's ownership evidence.
    pending = 0
    for index in (0, 1):
        pending += chain.wallets[index].call("audit")["pending_batches"]
    chain.mine(pending + 15)
    assert chain.state([image])["entries"][0]["state"] == "PENDING"
    chain.submit(spend, False)
    enrollment = chain.wallets[2].call("audit")
    assert enrollment["pending_batches"] == 1, enrollment
    chain.mine(1)
    completed = chain.tip()
    state = chain.state([image])["entries"][0]
    assert state["completed_height"] == completed and state["release_height"] == completed + 10
    chain.mine(8)
    chain.submit(spend, False)
    chain.mine(1)
    chain.submit(spend, True)
    chain.mine(1)
    tx, height = chain.transaction(spend["tx_hash"])
    assert height == completed + 10 and [row["key"]["k_image"] for row in tx["vin"]] == [image]
    return {"status": "RETURN_AUDIT_GATE_PASS", "returned_tx": return_id, "returned_atomic": outputs[0]["amount"],
        "completion_height": completed, "spend_height": height, "missing_returning_owner_stayed_pending": True,
        "return_context_scanned": True, "empty_cache_sender_restored_return": True,
        "C_plus_9_rejected": True, "C_plus_10_spent_exact_return": True}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--binaries", type=Path, default=Path("build/audit/release/bin"))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix="salvium-return-audit-gate-"))
    print(root, flush=True)
    binaries = root / "bin"
    binaries.mkdir()
    hashes = {}
    for name in ("salviumd", "salvium-wallet-rpc"):
        shutil.copy2(args.binaries.resolve() / name, binaries / name)
        with (binaries / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    chain = AuditChain(binaries, root)
    try:
        chain.launch()
        result = exercise(chain)
        result['binary_sha256'] = hashes
        (root / "result.json").write_text(json.dumps(result, indent=2) + "\n")
        print(json.dumps(result), flush=True)
    finally:
        chain.close()


if __name__ == "__main__":
    main()
