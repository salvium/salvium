#!/usr/bin/env python3
"""Regtest check: a Carrot protocol payout lands in the account that made the tx.

Needs a build whose wallet supports --regtest (FAKECHAIN), e.g. with salvium/salvium#121.

Start (from build/<type>/bin):
    ./salviumd --regtest --offline --fixed-difficulty 1 --keep-fakechain \\
        --data-dir /tmp/payout-regtest --rpc-bind-port 28101 --non-interactive
    ./salvium-wallet-rpc --regtest --daemon-address 127.0.0.1:28101 \\
        --rpc-bind-port 28230 --disable-rpc-login --wallet-dir /tmp/payout-wallets

Then:
    python3 utils/protocol_payout_account_regtest.py [--curve]

The wallet moves SAL1 from account 0 to account 1, makes a CREATE_TOKEN from account 1 and
checks that the minted tokens (the protocol payout) are credited to account 1, not account 0.
With --curve (needs salvium/salvium#139) it also buys and sells a CURVE token from account 1 and
checks that account 1 can spend the SAL1 payout. STAKE yield uses the same return-output path
but needs a second STAKE_LOCK_PERIOD of blocks, so it is not part of this run.

The protocol tx cannot carry outputs below STAKE_LOCK_PERIOD (21600 on regtest), so the first run
mines that many blocks (a few minutes); --keep-fakechain lets later runs reuse the chain.
"""

import argparse
import json
import random
import string
import sys
import urllib.request

COIN = 10**8
UNLOCK = 61            # CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW + 1
STAKE_LOCK = 21600     # config::STAKE_LOCK_PERIOD; FAKECHAIN uses the mainnet value, and the
                       # protocol tx may not have outputs before this height
TX_TYPE_TRANSFER = 3   # cryptonote::transaction_type::TRANSFER


class Rpc:
    def __init__(self, host):
        self.url = f"http://{host}/json_rpc"

    def __call__(self, method, **params):
        body = json.dumps({"jsonrpc": "2.0", "id": "0", "method": method, "params": params}).encode()
        req = urllib.request.Request(self.url, data=body, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=900) as r:
            res = json.load(r)
        if "error" in res:
            raise RuntimeError(f"{method}: {res['error']}")
        return res["result"]


def check(cond, msg):
    print(f"  {'ok  ' if cond else 'FAIL'} {msg}")
    if not cond:
        raise SystemExit(1)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--daemon", default="127.0.0.1:28101")
    ap.add_argument("--wallet", default="127.0.0.1:28230")
    ap.add_argument("--curve", action="store_true", help="also test CURVE (salvium/salvium#139)")
    args = ap.parse_args()
    d, w = Rpc(args.daemon), Rpc(args.wallet)
    # fresh tickers on every run, so a kept chain can be reused
    tok, crv = ("".join(random.choices(string.ascii_uppercase, k=4)) for _ in range(2))

    try:
        w("open_wallet", filename="payout_test", password="")
    except RuntimeError:
        w("create_wallet", filename="payout_test", password="", language="English")
    if len(w("get_accounts")["subaddress_accounts"]) < 2:
        w("create_account", label="trading")

    def carrot_address(account):
        r = w("get_address", account_index=account)
        return r.get("addresses", [{}])[0].get("address_carrot") or r["address"]

    addr0, addr1 = carrot_address(0), carrot_address(1)

    def mine(n):
        d("generateblocks", amount_of_blocks=n, wallet_address=addr0)
        w("refresh")

    def balance(account, asset):
        r = w("get_balance", account_index=account, asset_type=asset)
        for b in r.get("balances", []):
            if b["asset_type"] == asset:
                return b["balance"], b["unlocked_balance"]
        return 0, 0

    def send(account, address, amount, asset):
        w("transfer", account_index=account, subaddr_indices=[], priority=0, unlock_time=0, payment_id="",
          get_tx_key=False, source_asset=asset, dest_asset=asset, tx_type=TX_TYPE_TRANSFER,
          destinations=[{"address": address, "amount": amount, "asset_type": asset}])

    def expect_payout_in_account_1(asset, what):
        in1, in0 = balance(1, asset)[0], balance(0, asset)[0]
        print(f"     {asset}: account 0 = {in0 / COIN:g}, account 1 = {in1 / COIN:g}")
        check(in1 > 0, f"{what}: account 1 holds {in1 / COIN:g} {asset}")
        check(in0 == 0, f"{what}: account 0 holds none ({in0 / COIN:g})")

    print("1. fund account 1 from account 0")
    height = d("get_block_count")["count"]
    while height < STAKE_LOCK + 10:
        n = min(500, STAKE_LOCK + 10 - height)
        d("generateblocks", amount_of_blocks=n, wallet_address=addr0)
        height += n
        if height % 5000 < 500:
            print(f"     mined to height {height}", flush=True)
    mine(UNLOCK + 40)
    send(0, addr1, 3000 * COIN, "SAL1")
    mine(UNLOCK)
    check(balance(1, "SAL1")[1] >= 3000 * COIN, "account 1 has 3000 unlocked SAL1")

    print("2. CREATE_TOKEN from account 1")
    w("create_token", ticker=tok, supply=1_000_000, account_index=1, subaddr_indices=[], name="Account test")
    mine(2)
    expect_payout_in_account_1(f"sal{tok}", "create_token payout")

    print("3. the payout is an available output of account 1")
    mine(UNLOCK)
    outs = w("incoming_transfers", transfer_type="available", account_index=1).get("transfers", [])
    check(any(o["amount"] == 1_000_000 * COIN and o["subaddr_index"]["major"] == 1 for o in outs),
          "incoming_transfers lists the minted tokens under account 1")

    if args.curve:
        print("4. CURVE from account 1")
        w("curve_launch", ticker=crv, name="Account curve", account_index=1, subaddr_indices=[])
        mine(12)   # the launch's change unlocks after 10 blocks
        w("curve_buy", ticker=crv, amount=200 * COIN, account_index=1, subaddr_indices=[])
        mine(2)
        expect_payout_in_account_1(f"sal{crv}", "curve buy payout")
        mine(UNLOCK)
        sal1_0 = balance(0, "SAL1")[0]
        sal1_1 = balance(1, "SAL1")[0]
        tokens = balance(1, f"sal{crv}")[1]
        r = w("curve_sell", ticker=crv, amount=tokens // 2, account_index=1, subaddr_indices=[])
        mine(3)
        info = d("get_curve_tx", tx_hash=r["tx_hash_list"][-1])
        paid = info.get("amount_out", 0)
        check(info.get("filled") and paid > 0, f"curve sell filled ({paid / COIN:g} SAL1)")
        # account 0 only gains block rewards; account 1 gets the sell payout minus the tx fees
        check(balance(1, "SAL1")[0] > sal1_1 + paid // 2, "curve sell payout credited to account 1")
        mined = balance(0, "SAL1")[0] - sal1_0
        check(mined >= 0, f"account 0 changed only by mining (+{mined / COIN:g})")

        print("5. account 1 spends the SAL1 payout")
        mine(UNLOCK)
        w("sweep_all", account_index=1, address=addr0, asset_type="SAL1")
        mine(2)
        outs = w("incoming_transfers", transfer_type="all", account_index=1).get("transfers", [])
        payout = [o for o in outs if o["amount"] == paid]
        check(payout and payout[0]["subaddr_index"]["major"] == 1, "the sell payout is an output of account 1")
        check(payout[0]["spent"], "sweep_all from account 1 spent it")

    print("\nprotocol payouts land in the originating account: PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
