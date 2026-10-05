#!/usr/bin/env python3
"""Submit prepared public disclosures to the developer's local mining node.

The node validates evidence, incorporates one disclosure in each normal mining
template, and records completion deterministically. This program never starts a
daemon or miner and never spends funds. Re-running it safely resumes publication.
"""
import argparse
import json
from pathlib import Path
import sys
import time

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tests/functional_tests"))
from audit_release_regtest import Rpc


def publish(path, port, login=None):
    bundle = json.loads(path.read_text())
    if bundle.get("format") != 1 or not bundle.get("disclosures"):
        raise ValueError("A nonempty prepared disclosure bundle is required")
    rpc = Rpc(port, login)
    status = rpc.call("get_lineage_audit_status", {"key_images": []})
    if status["activation_height"] != bundle["activation_height"] or not status["activation_height"]:
        raise ValueError("Node activation height differs from the prepared audit epoch")
    info = rpc.call("get_info")
    if (info["nettype"] == "fakechain") != (bundle["network"] == "regtest"):
        raise ValueError("Node network differs from the prepared audit")
    for height, expected in ((0, bundle["genesis"]), (bundle["snapshot_height"], bundle["snapshot_hash"])):
        actual = rpc.call("get_block_header_by_height", {"height": height})["block_header"]["hash"]
        if actual != expected:
            raise ValueError("The audited snapshot is not an ancestor of this node's chain")
    for index, disclosure in enumerate(bundle["disclosures"]):
        result = rpc.call("submit_lineage_disclosure", {"data": disclosure["data"]})
        identity = result["disclosure_id"]
        print(f"Disclosure {index + 1}/{len(bundle['disclosures'])}: waiting for canonical mining", flush=True)
        while True:
            status = rpc.call("get_lineage_audit_status", {"key_images": [], "disclosure_ids": [identity]})
            if status["disclosure_heights"][0]:
                print(f"Included at block {status['disclosure_heights'][0]}", flush=True)
                break
            # Also restores a queued item after the developer restarts their
            # node. An already mined disclosure is idempotent.
            rpc.call("submit_lineage_disclosure", {"data": disclosure["data"]})
            time.sleep(5)
    print("Disclosures are canonical. Funds remain locked until their ancestry passes and C + 10 is reached; normal stake/output maturity still applies.")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bundle", required=True, type=Path)
    parser.add_argument("--rpc-port", required=True, type=int, help="Local mining node's unrestricted RPC port")
    parser.add_argument("--rpc-login-file", type=Path, help="Private JSON file with username and password fields")
    args = parser.parse_args()
    if not 1 <= args.rpc_port <= 65535:
        raise ValueError("Invalid RPC port")
    login = None
    if args.rpc_login_file:
        data = json.loads(args.rpc_login_file.read_text())
        login = (data["username"], data["password"])
    publish(args.bundle.resolve(), args.rpc_port, login)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("Publication interrupted. Run the same command to resume.", file=sys.stderr)
        sys.exit(130)
