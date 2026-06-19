#!/usr/bin/env python3
"""Inspect and optionally flush suspicious Salvium txpool transactions.

This is an operator tool, not a consensus rule. By default it only reports
matches. Use --flush --yes to remove matching txids from the local daemon pool.
"""

import argparse
import collections
import json
import sys
import time
import urllib.error
import urllib.request


def post_json(url, payload, timeout):
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8"))


def daemon_request(endpoint, path, payload, timeout):
    return post_json(endpoint.rstrip("/") + path, payload, timeout)


def daemon_json_rpc(endpoint, method, params, timeout):
    payload = {"jsonrpc": "2.0", "id": "0", "method": method, "params": params}
    response = daemon_request(endpoint, "/json_rpc", payload, timeout)
    if "error" in response:
        raise RuntimeError("{} RPC error: {}".format(method, response["error"]))
    return response.get("result", {})


def decode_tx_json(tx_info):
    raw = tx_info.get("tx_json") or "{}"
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return {}


def tx_field(tx, *names):
    for name in names:
        if name in tx:
            return tx[name]
    return None


def classify(tx_info, args):
    tx = decode_tx_json(tx_info)
    reasons = []

    txid = tx_info.get("id_hash", "")
    weight = int(tx_info.get("weight") or tx_info.get("blob_size") or 0)
    fee = int(tx_info.get("fee") or 0)
    fee_per_weight = fee / weight if weight else 0.0
    tx_type = str(tx_field(tx, "type", "tx_type"))
    version = tx_field(tx, "version")
    source_asset = str(tx_field(tx, "source_asset_type", "source_asset", "source") or "")
    dest_asset = str(tx_field(tx, "destination_asset_type", "destination_asset", "destination") or "")
    extra_size = len(tx.get("extra", [])) if isinstance(tx.get("extra"), list) else 0
    age = max(0, int(time.time()) - int(tx_info.get("receive_time") or time.time()))

    if args.min_fee_per_weight is not None and fee_per_weight < args.min_fee_per_weight:
        reasons.append("fee/weight {:.8f} < {}".format(fee_per_weight, args.min_fee_per_weight))
    if args.zero_fee and fee == 0:
        reasons.append("zero fee")
    if args.max_weight is not None and weight > args.max_weight:
        reasons.append("weight {} > {}".format(weight, args.max_weight))
    if args.max_extra_size is not None and extra_size > args.max_extra_size:
        reasons.append("extra size {} > {}".format(extra_size, args.max_extra_size))
    if args.deny_type and tx_type in args.deny_type:
        reasons.append("denied type {}".format(tx_type))
    if args.allow_type and tx_type not in args.allow_type:
        reasons.append("type {} not allowed".format(tx_type))
    if args.deny_asset and (source_asset in args.deny_asset or dest_asset in args.deny_asset):
        reasons.append("denied asset {}/{}".format(source_asset, dest_asset))
    if args.min_age is not None and age < args.min_age:
        reasons.clear()

    return {
        "txid": txid,
        "type": tx_type,
        "version": version,
        "weight": weight,
        "fee": fee,
        "fee_per_weight": fee_per_weight,
        "source_asset": source_asset,
        "dest_asset": dest_asset,
        "extra_size": extra_size,
        "age": age,
        "reasons": reasons,
    }


def fingerprint(entry):
    return (
        entry["type"],
        entry["version"],
        entry["weight"],
        entry["fee"],
        entry["source_asset"],
        entry["dest_asset"],
        entry["extra_size"],
    )


def flush_txids(endpoint, txids, timeout, batch_size):
    flushed = 0
    for offset in range(0, len(txids), batch_size):
        batch = txids[offset : offset + batch_size]
        result = daemon_json_rpc(endpoint, "flush_txpool", {"txids": batch}, timeout)
        status = result.get("status", "")
        if status not in ("OK", ""):
            raise RuntimeError("flush_txpool returned status {!r}".format(status))
        flushed += len(batch)
    return flushed


def print_summary(entries, matches, args):
    print("txpool entries: {}".format(len(entries)))
    print("matched entries: {}".format(len(matches)))

    by_type = collections.Counter(entry["type"] for entry in entries)
    if by_type:
        print("\nby type:")
        for tx_type, count in by_type.most_common():
            print("  {:>8}  {}".format(tx_type, count))

    fp_counts = collections.Counter(fingerprint(entry) for entry in entries)
    repeated = [(fp, count) for fp, count in fp_counts.most_common() if count >= args.fingerprint_min]
    if repeated:
        print("\nrepeated fingerprints:")
        for fp, count in repeated[: args.limit]:
            tx_type, version, weight, fee, source_asset, dest_asset, extra_size = fp
            print(
                "  count={} type={} version={} weight={} fee={} asset={}/{} extra={}".format(
                    count, tx_type, version, weight, fee, source_asset, dest_asset, extra_size
                )
            )

    if matches:
        print("\nmatched txids:")
        for entry in matches[: args.limit]:
            print(
                "  {} type={} weight={} fee={} fee/weight={:.8f} age={}s reasons={}".format(
                    entry["txid"],
                    entry["type"],
                    entry["weight"],
                    entry["fee"],
                    entry["fee_per_weight"],
                    entry["age"],
                    "; ".join(entry["reasons"]),
                )
            )
        if len(matches) > args.limit:
            print("  ... {} more".format(len(matches) - args.limit))


def main():
    parser = argparse.ArgumentParser(description="Scan and optionally flush suspicious Salvium txpool transactions.")
    parser.add_argument("--endpoint", default="http://127.0.0.1:19081", help="daemon RPC endpoint")
    parser.add_argument("--timeout", type=float, default=30.0, help="RPC timeout in seconds")
    parser.add_argument("--limit", type=int, default=40, help="maximum rows to print per section")
    parser.add_argument("--batch-size", type=int, default=100, help="txids per flush_txpool RPC call")

    parser.add_argument("--zero-fee", action="store_true", help="match zero-fee transactions")
    parser.add_argument("--min-fee-per-weight", type=float, help="match txs below this fee/weight")
    parser.add_argument("--max-weight", type=int, help="match txs above this weight")
    parser.add_argument("--max-extra-size", type=int, help="match txs with tx.extra above this item count")
    parser.add_argument("--min-age", type=int, help="only match txs at least this many seconds old")
    parser.add_argument("--allow-type", action="append", help="only allow this tx type; repeatable")
    parser.add_argument("--deny-type", action="append", help="deny this tx type; repeatable")
    parser.add_argument("--deny-asset", action="append", help="deny source or destination asset type; repeatable")
    parser.add_argument("--fingerprint-min", type=int, default=25, help="report repeated tx shape threshold")

    parser.add_argument("--flush", action="store_true", help="flush matching txids from the local txpool")
    parser.add_argument("--yes", action="store_true", help="confirm flushing")

    args = parser.parse_args()

    if args.flush and not args.yes:
        parser.error("--flush requires --yes")

    try:
        pool = daemon_request(args.endpoint, "/get_transaction_pool", {}, args.timeout)
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
        print("failed to fetch txpool: {}".format(exc), file=sys.stderr)
        return 2

    tx_infos = pool.get("transactions", [])
    entries = [classify(tx_info, args) for tx_info in tx_infos]
    matches = [entry for entry in entries if entry["reasons"]]
    print_summary(entries, matches, args)

    if args.flush and matches:
        flushed = flush_txids(args.endpoint, [entry["txid"] for entry in matches], args.timeout, args.batch_size)
        print("\nflushed {} txids".format(flushed))
    elif matches:
        print("\ndry run only; add --flush --yes to remove matched txids from this node")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
