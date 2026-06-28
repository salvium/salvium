#!/usr/bin/env python3

import argparse
import json
import sys
import urllib.error
import urllib.request
from collections import defaultdict


COIN = 100000000
TX_TYPES = {
    0: "UNSET",
    1: "MINER",
    2: "PROTOCOL",
    3: "TRANSFER",
    4: "CONVERT",
    5: "BURN",
    6: "STAKE",
    7: "RETURN",
    8: "AUDIT",
    9: "CREATE_TOKEN",
    10: "ROLLUP",
}


class RpcError(RuntimeError):
    pass


def post_json(url, payload, timeout):
    data = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise RpcError(f"{url} returned HTTP {exc.code}: {body}") from exc
    except urllib.error.URLError as exc:
        raise RpcError(f"{url} failed: {exc}") from exc


def json_rpc(endpoint, method, params, timeout):
    payload = {"jsonrpc": "2.0", "id": "0", "method": method, "params": params}
    response = post_json(endpoint.rstrip("/") + "/json_rpc", payload, timeout)
    if response.get("error"):
        raise RpcError(f"{method} failed: {response['error']}")
    return response.get("result", {})


def daemon_rpc(endpoint, path, params, timeout):
    response = post_json(endpoint.rstrip("/") + path, params, timeout)
    if response.get("status") not in (None, "OK"):
        raise RpcError(f"{path} failed: {response.get('status')}")
    return response


def tx_type_name(value):
    if isinstance(value, str):
        return value
    try:
        return TX_TYPES.get(int(value), f"UNKNOWN_{value}")
    except (TypeError, ValueError):
        return "UNKNOWN"


def amount_burnt(tx):
    try:
        return int(tx.get("amount_burnt", 0) or 0)
    except (TypeError, ValueError):
        return 0


def audit_yield_info(endpoint, from_height, to_height, timeout, chain_tip):
    params = {
        "from_height": from_height,
        "to_height": to_height,
        "include_raw_data": True,
    }
    result = json_rpc(endpoint, "get_yield_info", params, timeout)
    raw = result.get("yield_data", [])

    total_burnt = 0
    total_yield = 0
    for entry in raw:
        slippage = int(entry.get("slippage_total_this_block", 0) or 0)
        locked = int(entry.get("locked_coins_tally", 0) or 0)
        if locked == 0:
            total_burnt += slippage
        else:
            total_yield += slippage

    errors = []
    if total_burnt != int(result.get("total_burnt", 0) or 0):
        errors.append(f"total_burnt mismatch: rpc={result.get('total_burnt')} computed={total_burnt}")
    if total_yield != int(result.get("total_yield", 0) or 0):
        errors.append(f"total_yield mismatch: rpc={result.get('total_yield')} computed={total_yield}")

    if raw:
        latest = max(raw, key=lambda entry: int(entry.get("block_height", 0) or 0))
        locked = int(latest.get("locked_coins_tally", 0) or 0)
        slippage = int(latest.get("slippage_total_this_block", 0) or 0)
        latest_height = int(latest.get("block_height", 0) or 0)
        if latest_height == chain_tip and locked > 0:
            expected_yps = slippage * COIN // locked
            rpc_yps = int(result.get("yield_per_stake", 0) or 0)
            if rpc_yps and rpc_yps != expected_yps:
                errors.append(f"yield_per_stake mismatch at latest raw entry: rpc={rpc_yps} computed={expected_yps}")

    return {
        "entries": len(raw),
        "total_burnt": total_burnt,
        "total_yield": total_yield,
        "total_staked": int(result.get("total_staked", 0) or 0),
        "yield_per_stake": int(result.get("yield_per_stake", 0) or 0),
        "errors": errors,
    }


def load_block_json(endpoint, height, timeout):
    result = json_rpc(endpoint, "get_block", {"height": height}, timeout)
    raw_json = result.get("json")
    if not raw_json:
        raise RpcError(f"get_block returned no JSON for height {height}")
    return json.loads(raw_json)


def load_transactions(endpoint, hashes, timeout):
    if not hashes:
        return []
    result = daemon_rpc(
        endpoint,
        "/get_transactions",
        {"txs_hashes": hashes, "decode_as_json": True, "prune": True},
        timeout,
    )
    txs = []
    for entry in result.get("txs", []):
        raw = entry.get("as_json") or entry.get("tx_json")
        if raw:
            txs.append(json.loads(raw))
    return txs


def audit_blocks(endpoint, from_height, to_height, timeout, include_transactions):
    totals = defaultdict(int)
    errors = []
    blocks = 0

    for height in range(from_height, to_height + 1):
        block = load_block_json(endpoint, height, timeout)
        blocks += 1

        miner_tx = block.get("miner_tx", {})
        protocol_tx = block.get("protocol_tx", {})
        for tx in (miner_tx, protocol_tx):
            name = tx_type_name(tx.get("type"))
            totals[f"{name}.count"] += 1
            totals[f"{name}.amount_burnt"] += amount_burnt(tx)

        if height > 0 and amount_burnt(miner_tx) == 0:
            errors.append(f"height {height}: miner_tx amount_burnt is zero")

        if include_transactions:
            tx_hashes = block.get("tx_hashes", [])
            for tx in load_transactions(endpoint, tx_hashes, timeout):
                name = tx_type_name(tx.get("type"))
                totals[f"{name}.count"] += 1
                totals[f"{name}.amount_burnt"] += amount_burnt(tx)

    return {"blocks": blocks, "totals": dict(sorted(totals.items())), "errors": errors}


def main():
    parser = argparse.ArgumentParser(description="Audit Salvium protocol accounting invariants via daemon RPC.")
    parser.add_argument("--endpoint", default="http://127.0.0.1:19081", help="daemon RPC endpoint")
    parser.add_argument("--from-height", type=int, default=0, help="first height to audit")
    parser.add_argument("--to-height", type=int, default=0, help="last height to audit; defaults to current tip")
    parser.add_argument("--timeout", type=float, default=30.0, help="RPC timeout in seconds")
    parser.add_argument("--scan-transactions", action="store_true", help="fetch and summarize non-miner transactions")
    parser.add_argument("--skip-blocks", action="store_true", help="only audit get_yield_info aggregation")
    parser.add_argument("--json", action="store_true", help="print machine-readable JSON")
    args = parser.parse_args()

    count = json_rpc(args.endpoint, "get_block_count", {}, args.timeout)
    chain_height = int(count.get("count", 0) or 0)
    if chain_height <= 0:
        raise RpcError("daemon reported an empty chain")

    to_height = args.to_height if args.to_height else chain_height - 1
    if args.from_height < 0 or to_height < args.from_height or to_height >= chain_height:
        raise RpcError(f"invalid height range {args.from_height}..{to_height} for chain height {chain_height}")

    report = {
        "endpoint": args.endpoint,
        "chain_height": chain_height,
        "from_height": args.from_height,
        "to_height": to_height,
        "yield_info": audit_yield_info(args.endpoint, args.from_height, to_height, args.timeout, chain_height - 1),
    }
    if not args.skip_blocks:
        report["blocks"] = audit_blocks(
            args.endpoint,
            args.from_height,
            to_height,
            args.timeout,
            args.scan_transactions,
        )

    errors = []
    errors.extend(report["yield_info"]["errors"])
    if "blocks" in report:
        errors.extend(report["blocks"]["errors"])
    report["ok"] = not errors
    report["errors"] = errors

    if args.json:
        print(json.dumps(report, indent=2, sort_keys=True))
    else:
        print(f"endpoint: {report['endpoint']}")
        print(f"height range: {report['from_height']}..{report['to_height']} of {report['chain_height']}")
        print(f"yield entries: {report['yield_info']['entries']}")
        print(f"total burnt: {report['yield_info']['total_burnt']}")
        print(f"total yield: {report['yield_info']['total_yield']}")
        print(f"total staked: {report['yield_info']['total_staked']}")
        if "blocks" in report:
            print(f"blocks scanned: {report['blocks']['blocks']}")
            for key, value in report["blocks"]["totals"].items():
                print(f"{key}: {value}")
        if errors:
            print("errors:")
            for error in errors:
                print(f"- {error}")

    return 0 if report["ok"] else 1


if __name__ == "__main__":
    try:
        sys.exit(main())
    except RpcError as exc:
        print(f"error: {exc}", file=sys.stderr)
        sys.exit(2)
