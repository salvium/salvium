#!/usr/bin/env python3
"""Reference model for CURVE (bonding-curve token) transactions.

This is the executable specification of docs/defi/CURVE.md. The C++ consensus
code in src/cryptonote_core/cryptonote_tx_utils.cpp (curve_quote_buy /
curve_quote_sell) must produce bit-identical results; the test vectors printed
by `--vectors` are copied into tests/unit_tests/curve_math.cpp.

Usage:
    python3 utils/curve_model.py --selftest     # property checks
    python3 utils/curve_model.py --vectors      # print C++ test vectors
"""

import argparse
import random
import sys

COIN = 100000000
MONEY_SUPPLY = 18440000000000000

# Curve parameters (atomic units, 8 decimals). Mirrored in src/cryptonote_config.h.
CURVE_TOKEN_SUPPLY = 100000000 * COIN     # real tokens sold through the curve
CURVE_VIRTUAL_TOKENS = 7300000 * COIN     # virtual token reserve, keeps price finite at sell-out
CURVE_VIRTUAL_SAL = 10000 * COIN          # virtual SAL1 reserve, sets the starting price
CURVE_FEE_DIVISOR = 100                   # 1% fee, burned

Y0 = CURVE_TOKEN_SUPPLY + CURVE_VIRTUAL_TOKENS
K0 = CURVE_VIRTUAL_SAL * Y0               # fits in uint128

UINT128_MAX = (1 << 128) - 1
assert K0 < UINT128_MAX


def ceil_div(a, b):
    return -(-a // b)


def fee_of(amount):
    """1% fee, rounded up (in favour of the protocol)."""
    return ceil_div(amount, CURVE_FEE_DIVISOR)


class CurveState:
    """Per-curve consensus state: SAL1 held by the curve and tokens sold."""

    __slots__ = ("reserve", "sold")

    def __init__(self, reserve=0, sold=0):
        self.reserve = reserve
        self.sold = sold

    def x(self):
        return CURVE_VIRTUAL_SAL + self.reserve

    def y(self):
        return Y0 - self.sold

    def copy(self):
        return CurveState(self.reserve, self.sold)

    def __repr__(self):
        return f"CurveState(reserve={self.reserve}, sold={self.sold})"


def quote_buy(state, amount_burnt):
    """SAL1 burnt -> (tokens_out, new_state) or None when the buy must be refunded.

    The fee is burned and never enters the reserve. tokens_out is floored so
    the curve keeps any rounding dust.
    """
    if amount_burnt <= 0:
        return None
    fee = fee_of(amount_burnt)
    net = amount_burnt - fee
    if net <= 0:
        return None
    new_x = state.x() + net
    new_y = ceil_div(K0, new_x)                # ceil: fewer tokens out
    tokens_out = state.y() - new_y
    if tokens_out <= 0:
        return None
    if state.sold + tokens_out > CURVE_TOKEN_SUPPLY:
        return None                            # would sell past the real supply: refund
    return tokens_out, CurveState(state.reserve + net, state.sold + tokens_out)


def quote_sell(state, tokens_burnt):
    """Tokens burnt -> (sal_paid, new_state) or None when the sell must be refunded.

    The SAL1 removed from the reserve is `gross`; the seller receives
    gross - fee, and the fee is burned (never minted).
    """
    if tokens_burnt <= 0 or tokens_burnt > state.sold:
        return None
    new_sold = state.sold - tokens_burnt
    new_x = ceil_div(K0, Y0 - new_sold)        # ceil: less SAL1 out
    gross = state.x() - new_x
    if gross <= 0:
        return None
    if gross > state.reserve:
        return None                            # unreachable by construction; checked anyway
    fee = fee_of(gross)
    paid = gross - fee
    if paid <= 0:
        return None
    return paid, CurveState(state.reserve - gross, new_sold)


def spot_price(state):
    """SAL1 atomic units per whole token (COIN atomic units), for display only."""
    return state.x() * COIN // state.y()


# --------------------------------------------------------------------------- checks

def check_invariants(state):
    assert 0 <= state.sold <= CURVE_TOKEN_SUPPLY, state
    assert state.reserve >= 0, state
    # the reserve always covers selling everything back
    assert state.x() * state.y() >= K0, state


def selftest(rounds=20000, seed=1):
    rng = random.Random(seed)

    # 1. buying then selling the same tokens never returns more SAL1 than was burnt
    for _ in range(rounds):
        s = CurveState()
        pre = rng.randrange(0, 50000) * COIN
        if pre:
            r = quote_buy(s, pre)
            if r:
                s = r[1]
        amount = rng.randrange(1, 5000 * COIN)
        r = quote_buy(s, amount)
        if not r:
            continue
        got, s2 = r
        r2 = quote_sell(s2, got)
        assert r2, (s2, got)
        paid, s3 = r2
        assert paid < amount, (amount, paid)
        assert s3.sold == s.sold
        assert s3.reserve >= s.reserve, (s, s3)
        check_invariants(s3)

    # 2. random walk: SAL1 paid out never exceeds SAL1 burnt, reserve never negative
    for _ in range(200):
        s = CurveState()
        burned = paid_out = 0
        holders = 0
        for _ in range(200):
            if holders and rng.random() < 0.45:
                amt = rng.randrange(1, holders + 1)
                r = quote_sell(s, amt)
                if r:
                    paid, s = r
                    paid_out += paid
                    holders -= amt
            else:
                amt = rng.randrange(1, 20000 * COIN)
                r = quote_buy(s, amt)
                if r:
                    _, s = r
                    burned += amt
                    holders += r[0]
            check_invariants(s)
            assert paid_out + s.reserve <= burned
        assert s.sold == holders

    # 3. price is monotonic in tokens sold
    s = CurveState()
    last = spot_price(s)
    for _ in range(500):
        r = quote_buy(s, 1000 * COIN)
        if not r:
            break
        s = r[1]
        p = spot_price(s)
        assert p >= last
        last = p

    # 4. a buy that would exceed the supply is refunded, not partially filled
    assert quote_buy(CurveState(), MONEY_SUPPLY) is None

    # 5. selling more than was sold is refunded
    assert quote_sell(CurveState(), 1) is None

    # 6. selling the entire supply back empties the reserve to dust only
    s = CurveState()
    total = 0
    while True:
        r = quote_buy(s, 50000 * COIN)
        if not r:
            break
        total += r[0]
        s = r[1]
    paid, s_end = quote_sell(s, s.sold)
    assert s_end.sold == 0
    assert s_end.reserve >= 0
    assert s_end.reserve < COIN, s_end   # only rounding dust stays locked

    print("curve_model selftest: OK")


VECTOR_CASES = [
    ("buy_from_empty_1_sal", "buy", (0, 0), 1 * COIN),
    ("buy_from_empty_1000_sal", "buy", (0, 0), 1000 * COIN),
    ("buy_dust", "buy", (0, 0), 99),
    ("buy_min_net", "buy", (0, 0), 101),
    ("buy_mid_curve", "buy", (25000 * COIN, None), 5000 * COIN),
    ("buy_exceeds_supply", "buy", (0, 0), MONEY_SUPPLY),
    ("sell_zero_sold", "sell", (0, 0), 1),
    ("sell_partial", "sell", (25000 * COIN, None), 1000000 * COIN),
    ("sell_all", "sell", (25000 * COIN, None), "all"),
]


def build_state(spec):
    reserve, sold = spec
    if sold is None:
        # reach `reserve` exactly via one buy from empty, deriving sold
        gross = ceil_div(reserve * CURVE_FEE_DIVISOR, CURVE_FEE_DIVISOR - 1)
        while gross - fee_of(gross) != reserve:
            gross += 1
        out, st = quote_buy(CurveState(), gross)
        return st
    return CurveState(reserve, sold)


def print_vectors():
    print("// generated by: python3 utils/curve_model.py --vectors")
    print("// {name, is_buy, reserve, sold, amount_in, ok, amount_out, new_reserve, new_sold}")
    for name, kind, spec, amount in VECTOR_CASES:
        st = build_state(spec)
        if amount == "all":
            amount = st.sold
        r = quote_buy(st, amount) if kind == "buy" else quote_sell(st, amount)
        ok = r is not None
        out, ns = (r if ok else (0, st))
        print(f'  {{"{name}", {str(kind == "buy").lower()}, {st.reserve}ull, {st.sold}ull, '
              f'{amount}ull, {str(ok).lower()}, {out}ull, {ns.reserve}ull, {ns.sold}ull}},')


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--selftest", action="store_true")
    ap.add_argument("--vectors", action="store_true")
    args = ap.parse_args()
    if not (args.selftest or args.vectors):
        ap.print_help()
        return 1
    if args.selftest:
        selftest()
    if args.vectors:
        print_vectors()
    return 0


if __name__ == "__main__":
    sys.exit(main())
