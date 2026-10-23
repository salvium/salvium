#!/usr/bin/env python3
"""End-to-end CURVE test against a regtest daemon and wallet RPC.

Needs a build whose wallet supports --regtest (FAKECHAIN), e.g. with salvium/salvium#121.

Start (from build/debug/bin):
    ./salviumd --regtest --offline --fixed-difficulty 1 --keep-fakechain \
        --data-dir /tmp/curve-regtest --rpc-bind-port 28101 --non-interactive
    ./salvium-wallet-rpc --regtest --daemon-address 127.0.0.1:28101 \
        --rpc-bind-port 28230 --disable-rpc-login --wallet-dir /tmp/curve-wallets

Then:
    python3 utils/curve_regtest.py --daemon 127.0.0.1:28101 --wallet 127.0.0.1:28230

The test creates/opens a wallet, mines SAL1 to it, launches a curve, buys, sells, and forces a
slippage refund. It then buys across the graduation threshold, trades in the pool, forces a
refund in the pool and pops the graduation block. Every on-chain result is checked against
utils/curve_model.py, and the curve state reported by the daemon is checked for solvency after
every block.
"""

import argparse
import json
import os
import sys
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import curve_model as M  # noqa: E402

COIN = M.COIN
UNLOCK = 61          # CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW + 1


class Rpc:
    def __init__(self, host):
        self.host = host
        self.url = f"http://{host}/json_rpc"

    def other(self, path, **params):
        body = json.dumps(params).encode()
        req = urllib.request.Request(f"http://{self.host}/{path}", data=body, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=600) as r:
            return json.load(r)

    def __call__(self, method, **params):
        body = json.dumps({"jsonrpc": "2.0", "id": "0", "method": method, "params": params}).encode()
        req = urllib.request.Request(self.url, data=body, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=600) as r:
            res = json.load(r)
        if "error" in res:
            raise RuntimeError(f"{method}: {res['error']}")
        return res["result"]


def check(cond, msg):
    if not cond:
        raise AssertionError(msg)
    print(f"  ok  {msg}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--daemon", default="127.0.0.1:28101")
    ap.add_argument("--wallet", default="127.0.0.1:28230")
    ap.add_argument("--ticker", default="PUMP")
    args = ap.parse_args()

    d = Rpc(args.daemon)
    w = Rpc(args.wallet)
    asset = "sal" + args.ticker

    # wallet
    try:
        w("open_wallet", filename="curve_test", password="")
    except RuntimeError:
        w("create_wallet", filename="curve_test", password="", language="English")
    r = w("get_address", account_index=0)
    # on a fresh chain the wallet may default to its CryptoNote address; mining needs Carrot
    addr = r.get("addresses", [{}])[0].get("address_carrot") or r["address"]

    def mine(n):
        d("generateblocks", amount_of_blocks=n, wallet_address=addr)
        w("refresh")

    def curve():
        r = d("get_curve_info", asset_type=asset)
        check(r["status"] == "OK", f"daemon reports curve {asset}")
        c = r["curve"]
        phase = M.PHASE_POOL if c.get("phase") == "pool" else M.PHASE_CURVE
        st = M.CurveState(c["reserve"], c["sold"], phase, c.get("pool_sal", 0), c.get("pool_tokens", 0))
        M.check_invariants(st)
        check(c.get("circulating", M.circulating(st)) == M.circulating(st), "circulating supply matches model")
        return st

    def balance(a):
        r = w("get_balance", account_index=0, asset_type=a)
        for b in r.get("balances", []):
            if b["asset_type"] == a:
                return b["balance"], b["unlocked_balance"]
        return 0, 0

    print("1. fund the wallet")
    mine(UNLOCK + 40)
    sal1, sal1_unlocked = balance("SAL1")
    check(sal1_unlocked > 0, f"wallet has unlocked SAL1 ({sal1_unlocked / COIN})")

    print("2. launch")
    r = w("curve_launch", ticker=args.ticker, name="Curve test token", url="https://example.invalid")
    launch_tx = r["tx_hash_list"][0]
    mine(1)
    st = curve()
    check(st.reserve == 0 and st.sold == 0, "fresh curve is empty")
    info = d("get_curve_tx", tx_hash=launch_tx)
    check(info["op"] == "launch", "launch recorded")

    print("3. buy 100 SAL1")
    buy_amount = 100 * COIN
    expect = M.quote_buy(st, buy_amount)
    check(expect is not None, "model can fill the buy")
    r = w("curve_buy", ticker=args.ticker, amount=buy_amount, min_out=0)
    buy_tx = r["tx_hash_list"][-1]
    mine(1)
    info = d("get_curve_tx", tx_hash=buy_tx)
    check(info["op"] == "buy" and info["filled"], "buy filled")
    check(info["amount_out"] == expect[0], f"tokens out matches model ({expect[0]})")
    st = curve()
    check(st.key() == expect[1].key(), "curve state matches model")

    print("4. wait for the minted tokens to unlock")
    mine(UNLOCK)
    tok, tok_unlocked = balance(asset)
    check(tok_unlocked == expect[0], f"wallet holds the bought tokens ({tok_unlocked})")

    after_buy = st

    print("5. sell half")
    sell_amount = tok_unlocked // 2
    expect = M.quote_sell(st, sell_amount)
    check(expect is not None, "model can fill the sell")
    r = w("curve_sell", ticker=args.ticker, amount=sell_amount, min_out=0)
    check(len(r["tx_hash_list"]) == 2, "sell is sent with its ROLLUP fee tx")
    # the ROLLUP that pays the fee must be on chain before the sell is mineable (as for a
    # token TRANSFER), so the sell lands one block later
    mine(2)
    infos = [d("get_curve_tx", tx_hash=h) for h in r["tx_hash_list"]]
    sells = [i for i in infos if i["status"] == "OK"]
    check(len(sells) == 1 and sells[0]["op"] == "sell" and sells[0]["filled"], "sell filled")
    check(sells[0]["amount_out"] == expect[0], f"SAL1 out matches model ({expect[0]})")
    st = curve()
    check(st.key() == expect[1].key(), "curve state matches model")
    after_sell = st

    print("5b. reorg: pop the sell block, then mine it again")
    r = d.other("pop_blocks", nblocks=1)
    check(r.get("status") == "OK", "popped one block")
    st = curve()
    check(st.key() == after_buy.key(), "pop_block restores the pre-sell curve state")
    mine(1)
    st = curve()
    check(st.key() == after_sell.key(), "re-mined sell reproduces the same state")

    print("6. slippage refund")
    q = M.quote_buy(st, 10 * COIN)
    r = w("curve_buy", ticker=args.ticker, amount=10 * COIN, min_out=q[0] + 1)
    refund_tx = r["tx_hash_list"][-1]
    before = st
    mine(1)
    info = d("get_curve_tx", tx_hash=refund_tx)
    check(info["op"] == "buy" and not info["filled"], "buy below min_out is refunded")
    st = curve()
    check(st.key() == before.key(), "refund leaves the curve untouched")

    print("7. quotes from the daemon agree with the model")
    r = d("get_curve_info", asset_type=asset, quote_buy=1000 * COIN, quote_sell=st.sold)
    mb = M.quote_buy(st, 1000 * COIN)
    ms = M.quote_sell(st, st.sold)
    check(r["quote_buy_out"] == (mb[0] if mb else 0), "buy quote")
    check(r["quote_sell_out"] == (ms[0] if ms else 0), "sell quote")

    print("8. fund a buy that crosses the graduation threshold")
    grad_amount = 31000 * COIN          # net 30,690 SAL1 > what is left on the curve
    while balance("SAL1")[1] < grad_amount + 100 * COIN:
        mine(200)
    # merge the many coinbase outputs so the big buy fits in one transaction
    w("sweep_all", account_index=0, address=addr, asset_type="SAL1")
    mine(UNLOCK)
    check(balance("SAL1")[1] >= grad_amount, f"wallet has {balance('SAL1')[1] / COIN} unlocked SAL1")

    print("9. graduation: one buy fills the curve and swaps the rest in the new pool")
    st = curve()
    check(st.phase == M.PHASE_CURVE, "still on the curve")
    before_grad = st
    expect = M.quote_buy(st, grad_amount)
    check(expect is not None and expect[1].phase == M.PHASE_POOL, "model graduates on this buy")
    r = w("curve_buy", ticker=args.ticker, amount=grad_amount, min_out=0)
    grad_tx = r["tx_hash_list"][-1]
    mine(1)
    info = d("get_curve_tx", tx_hash=grad_tx)
    check(info["filled"] and info.get("graduated"), "buy filled and graduated the curve")
    check(info["amount_out"] == expect[0], f"tokens out matches model ({expect[0]})")
    st = curve()
    check(st.key() == expect[1].key(), "pool state matches model")
    check(st.sold == M.CURVE_SALE_SUPPLY, "curve sold exactly CURVE_SALE_SUPPLY")
    c = d("get_curve_info", asset_type=asset)["curve"]
    check(c["phase"] == "pool" and c["graduation_height"] > 0, f"daemon reports pool phase since {c['graduation_height']}")
    check(c["spot_price"] == M.spot_price(st), f"pool price matches model ({c['spot_price'] / COIN} SAL1)")
    after_grad = st

    print("9b. reorg: pop the graduation block, then mine it again")
    r = d.other("pop_blocks", nblocks=1)
    check(r.get("status") == "OK", "popped one block")
    st = curve()
    check(st.key() == before_grad.key() and st.phase == M.PHASE_CURVE, "pop_block undoes the graduation")
    mine(1)
    st = curve()
    check(st.key() == after_grad.key(), "re-mined block graduates again to the same pool")

    print("10. buy in the pool")
    expect = M.quote_buy(st, 50 * COIN)
    r = w("curve_buy", ticker=args.ticker, amount=50 * COIN, min_out=expect[0])
    pool_buy_tx = r["tx_hash_list"][-1]
    mine(1)
    info = d("get_curve_tx", tx_hash=pool_buy_tx)
    check(info["filled"] and not info.get("graduated"), "pool buy filled")
    check(info["amount_out"] == expect[0], f"pool tokens out matches model ({expect[0]})")
    st = curve()
    check(st.key() == expect[1].key(), "pool state matches model")
    check(st.pool_sal * st.pool_tokens >= after_grad.pool_sal * after_grad.pool_tokens, "k did not decrease")

    print("11. sell in the pool")
    mine(UNLOCK)
    tok = balance(asset)[1]
    sell_amount = tok // 3
    expect = M.quote_sell(st, sell_amount)
    k_before = st.pool_sal * st.pool_tokens
    r = w("curve_sell", ticker=args.ticker, amount=sell_amount, min_out=expect[0])
    mine(2)
    infos = [d("get_curve_tx", tx_hash=h) for h in r["tx_hash_list"]]
    sells = [i for i in infos if i["status"] == "OK"]
    check(len(sells) == 1 and sells[0]["op"] == "sell" and sells[0]["filled"], "pool sell filled")
    check(sells[0]["amount_out"] == expect[0], f"pool SAL1 out matches model ({expect[0]})")
    st = curve()
    check(st.key() == expect[1].key(), "pool state matches model")
    check(st.pool_sal * st.pool_tokens >= k_before, "k did not decrease")

    print("12. slippage refund in the pool")
    q = M.quote_buy(st, 10 * COIN)
    r = w("curve_buy", ticker=args.ticker, amount=10 * COIN, min_out=q[0] + 1)
    refund_tx = r["tx_hash_list"][-1]
    before = st
    mine(1)
    info = d("get_curve_tx", tx_hash=refund_tx)
    check(not info["filled"], "pool buy below min_out is refunded")
    check(curve().key() == before.key(), "refund leaves the pool untouched")

    print("\nCURVE regtest end-to-end: PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
