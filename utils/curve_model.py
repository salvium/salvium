#!/usr/bin/env python3
"""Reference model for CURVE (bonding-curve token) transactions, with graduation to a pool.

This is the executable specification of docs/defi/CURVE.md. The C++ consensus code in
src/cryptonote_basic/curve.cpp (curve_quote_buy / curve_quote_sell) must produce bit-identical
results; the test vectors printed by `--vectors` are copied into tests/unit_tests/curve_math.cpp.

A token goes through two phases:
  1. CURVE: a constant-product bonding curve with virtual reserves sells CURVE_SALE_SUPPLY tokens.
  2. POOL:  when the curve has sold out it graduates. Its whole SAL1 reserve and the remaining
            CURVE_POOL_SUPPLY tokens become a constant-product pool whose liquidity is locked
            forever. The starting pool price equals the final curve price (no jump), and the
            pool's 1% fee stays in the pool, so k only grows.

Usage:
    python3 utils/curve_model.py --selftest     # property checks
    python3 utils/curve_model.py --vectors      # print C++ test vectors
"""

import argparse
import random
import sys

COIN = 100000000
MONEY_SUPPLY = 18440000000000000

# Parameters (atomic units, 8 decimals). Mirrored in src/cryptonote_config.h.
CURVE_TOKEN_SUPPLY = 100000000 * COIN          # total supply of a curve token
CURVE_SALE_SUPPLY = 80000000 * COIN            # sold by the curve before graduation
CURVE_POOL_SUPPLY = CURVE_TOKEN_SUPPLY - CURVE_SALE_SUPPLY   # seeds the pool
CURVE_VIRTUAL_TOKENS = 2666666666666667        # ceil(80M/3 tokens): final curve price == pool price
CURVE_VIRTUAL_SAL = 10000 * COIN               # virtual SAL1 reserve, sets the starting price
CURVE_FEE_DIVISOR = 100                        # 1%: burned on the curve, kept by the pool

PHASE_CURVE = 0
PHASE_POOL = 1

Y0 = CURVE_SALE_SUPPLY + CURVE_VIRTUAL_TOKENS
K0 = CURVE_VIRTUAL_SAL * Y0                    # fits in uint128
assert K0 < (1 << 128)


def ceil_div(a, b):
    return -(-a // b)


def fee_of(amount):
    """1% fee, rounded up (in favour of the protocol)."""
    return ceil_div(amount, CURVE_FEE_DIVISOR)


class CurveState:
    """Per-token consensus state."""

    __slots__ = ("phase", "reserve", "sold", "pool_sal", "pool_tokens")

    def __init__(self, reserve=0, sold=0, phase=PHASE_CURVE, pool_sal=0, pool_tokens=0):
        self.phase = phase
        self.reserve = reserve          # curve phase: SAL1 held by the curve
        self.sold = sold                # tokens sold by the curve (CURVE_SALE_SUPPLY once graduated)
        self.pool_sal = pool_sal        # pool phase: SAL1 in the pool
        self.pool_tokens = pool_tokens  # pool phase: tokens in the pool

    def copy(self):
        return CurveState(self.reserve, self.sold, self.phase, self.pool_sal, self.pool_tokens)

    def key(self):
        return (self.phase, self.reserve, self.sold, self.pool_sal, self.pool_tokens)

    def __repr__(self):
        return f"CurveState{self.key()}"

    # curve-phase coordinates
    def x(self):
        return CURVE_VIRTUAL_SAL + self.reserve

    def y(self):
        return Y0 - self.sold


def graduate(st):
    """Turn a sold-out curve into its pool: whole reserve + CURVE_POOL_SUPPLY tokens."""
    assert st.phase == PHASE_CURVE and st.sold == CURVE_SALE_SUPPLY
    return CurveState(0, CURVE_SALE_SUPPLY, PHASE_POOL, st.reserve, CURVE_POOL_SUPPLY)


# -------------------------------------------------------------------------------- pool phase
def pool_buy(st, sal_in):
    """SAL1 in -> tokens out. The 1% fee stays in the pool. None if nothing can be bought."""
    if sal_in <= 0:
        return None
    eff = sal_in - fee_of(sal_in)
    if eff <= 0:
        return None
    x, y = st.pool_sal, st.pool_tokens
    out = y - ceil_div(x * y, x + eff)             # floor of the constant-product output
    if out <= 0 or out >= y:
        return None
    return out, CurveState(0, st.sold, PHASE_POOL, x + sal_in, y - out)


def pool_sell(st, tokens_in):
    """Tokens in -> SAL1 out. The 1% fee stays in the pool."""
    if tokens_in <= 0:
        return None
    x, y = st.pool_sal, st.pool_tokens
    gross = x - ceil_div(x * y, y + tokens_in)
    if gross <= 0:
        return None
    paid = gross - fee_of(gross)
    if paid <= 0:
        return None
    return paid, CurveState(0, st.sold, PHASE_POOL, x - paid, y + tokens_in)


# ------------------------------------------------------------------------------- curve phase
def _curve_buy(st, sal_burnt):
    """Curve-phase buy. May cross graduation: then the curve is filled exactly, graduates, and
    the rest of the burn is swapped in the new pool within the same trade."""
    fee = fee_of(sal_burnt)
    net = sal_burnt - fee
    if net <= 0:
        return None
    x, y = st.x(), st.y()
    remaining = CURVE_SALE_SUPPLY - st.sold
    out = y - ceil_div(K0, x + net)
    if out <= 0:
        return None
    if out < remaining:
        return out, CurveState(st.reserve + net, st.sold + out)
    # crosses graduation: the smallest net that buys every remaining curve token
    need = ceil_div(K0, y - remaining) - x
    assert 0 < need <= net
    filled = CurveState(st.reserve + need, CURVE_SALE_SUPPLY)
    pool = graduate(filled)
    rest = net - need
    if rest == 0:
        return remaining, pool
    q = pool_buy(pool, rest)
    if q is None:                                  # dust too small to buy anything: it stays in the pool
        return remaining, CurveState(0, pool.sold, PHASE_POOL, pool.pool_sal + rest, pool.pool_tokens)
    return remaining + q[0], q[1]


def _curve_sell(st, tokens_burnt):
    if tokens_burnt > st.sold:
        return None
    new_sold = st.sold - tokens_burnt
    new_x = ceil_div(K0, Y0 - new_sold)
    gross = st.x() - new_x
    if gross <= 0 or gross > st.reserve:
        return None
    paid = gross - fee_of(gross)
    if paid <= 0:
        return None
    return paid, CurveState(st.reserve - gross, new_sold)


# ----------------------------------------------------------------------------------- public
def quote_buy(st, sal_burnt, min_out=0):
    """(tokens_out, new_state), or None when the burn must be refunded."""
    if sal_burnt <= 0:
        return None
    r = _curve_buy(st, sal_burnt) if st.phase == PHASE_CURVE else pool_buy(st, sal_burnt)
    if r is None or r[0] < min_out:
        return None
    return r


def quote_sell(st, tokens_burnt, min_out=0):
    """(sal_out, new_state), or None when the burn must be refunded."""
    if tokens_burnt <= 0:
        return None
    r = _curve_sell(st, tokens_burnt) if st.phase == PHASE_CURVE else pool_sell(st, tokens_burnt)
    if r is None or r[0] < min_out:
        return None
    return r


def spot_price(st):
    """SAL1 atomic units per whole token (COIN atomic units), for display only."""
    if st.phase == PHASE_POOL:
        return st.pool_sal * COIN // st.pool_tokens
    return st.x() * COIN // st.y()


def circulating(st):
    """Tokens held by users (minted by the curve or bought from the pool, net of burns)."""
    if st.phase == PHASE_POOL:
        return CURVE_TOKEN_SUPPLY - st.pool_tokens
    return st.sold


# ----------------------------------------------------------------------------------- checks
def check_invariants(st):
    assert circulating(st) <= CURVE_TOKEN_SUPPLY, st
    if st.phase == PHASE_CURVE:
        assert 0 <= st.sold < CURVE_SALE_SUPPLY or st.sold == CURVE_SALE_SUPPLY, st
        assert st.reserve >= 0, st
        assert st.x() * st.y() >= K0, st
    else:
        assert st.sold == CURVE_SALE_SUPPLY and st.reserve == 0, st
        assert st.pool_sal > 0 and st.pool_tokens > 0, st


def selftest(rounds=20000, seed=1):
    rng = random.Random(seed)

    # 1. no price jump at graduation
    st = CurveState(sold=CURVE_SALE_SUPPLY - 1, reserve=0)
    # find the reserve the curve really holds just before selling out
    pre = quote_buy(CurveState(), 10 ** 15)
    assert pre and pre[1].phase == PHASE_POOL
    end = ceil_div(K0, Y0 - CURVE_SALE_SUPPLY)            # x when the curve is sold out
    curve_final = end * COIN // CURVE_VIRTUAL_TOKENS
    pool_start = spot_price(graduate(CurveState(end - CURVE_VIRTUAL_SAL, CURVE_SALE_SUPPLY)))
    assert abs(curve_final - pool_start) <= 1, (curve_final, pool_start)

    # 2. round trips lose, in each phase and across graduation
    for _ in range(rounds):
        st = CurveState()
        pre = rng.choice([0, rng.randrange(1, 40000) * COIN, rng.randrange(1, 60000) * COIN])
        if pre:
            r = quote_buy(st, pre)
            if r:
                st = r[1]
        amount = rng.randrange(1, 8000 * COIN)
        r = quote_buy(st, amount)
        if not r:
            continue
        got, st2 = r
        r2 = quote_sell(st2, got)
        if r2 is None:
            continue
        paid, st3 = r2
        assert paid < amount, (st, amount, paid)
        check_invariants(st3)

    # 3. random walks: SAL1 paid out never exceeds SAL1 burnt; pool k never decreases
    for _ in range(300):
        st = CurveState()
        burned = paid_out = held = 0
        last_k = None
        for _ in range(250):
            if held and rng.random() < 0.4:
                amt = rng.randrange(1, held + 1)
                r = quote_sell(st, amt)
                if r:
                    paid_out += r[0]
                    held -= amt
                    st = r[1]
            else:
                amt = rng.randrange(1, 9000 * COIN)
                r = quote_buy(st, amt)
                if r:
                    burned += amt
                    held += r[0]
                    st = r[1]
            check_invariants(st)
            assert paid_out <= burned
            assert circulating(st) == held, (st, held)
            if st.phase == PHASE_POOL:
                k = st.pool_sal * st.pool_tokens
                assert last_k is None or k >= last_k
                last_k = k

    # 4. price is monotonic while only buying, through graduation
    st, last = CurveState(), 0
    for _ in range(400):
        r = quote_buy(st, 900 * COIN)
        if not r:
            break
        st = r[1]
        p = spot_price(st)
        assert p >= last, (p, last)
        last = p
    assert st.phase == PHASE_POOL

    # 5. slippage limit refunds; selling more than exists refunds
    r = quote_buy(CurveState(), COIN)
    assert quote_buy(CurveState(), COIN, r[0] + 1) is None
    assert quote_sell(CurveState(), 1) is None

    # 6. the graduating buy fills the curve exactly and the rest goes to the pool
    near = quote_buy(CurveState(), 29000 * COIN)[1]
    assert near.phase == PHASE_CURVE
    out, after = quote_buy(near, 3000 * COIN)
    assert after.phase == PHASE_POOL and out > CURVE_SALE_SUPPLY - near.sold
    assert circulating(after) == near.sold + out

    print("curve_model selftest: OK")


def _st(spec):
    return CurveState(*spec)


VECTOR_CASES = [
    # name, side, state (reserve, sold, phase, pool_sal, pool_tokens), amount_in, min_out
    ("buy_empty_1", "buy", (0, 0), 1 * COIN, 0),
    ("buy_empty_1000", "buy", (0, 0), 1000 * COIN, 0),
    ("buy_dust", "buy", (0, 0), 99, 0),
    ("buy_min_out_refund", "buy", (0, 0), 1 * COIN, 10 ** 15),
    ("buy_cross_graduation", "buy", "near", 3000 * COIN, 0),
    ("buy_exact_need", "buy", "near", "exact", 0),
    ("buy_pool", "buy", "pool", 500 * COIN, 0),
    ("sell_curve_partial", "sell", "mid", 10 ** 14, 0),
    ("sell_curve_all", "sell", "mid", "all", 0),
    ("sell_too_many", "sell", "mid", "too_many", 0),
    ("sell_pool", "sell", "pool", 10 ** 15, 0),
    ("buy_huge", "buy", (0, 0), MONEY_SUPPLY, 0),
]


def _vector_state(spec):
    if spec == "near":
        return quote_buy(CurveState(), 29000 * COIN)[1]
    if spec == "mid":
        return quote_buy(CurveState(), 5000 * COIN)[1]
    if spec == "pool":
        return quote_buy(CurveState(), 40000 * COIN)[1]
    return _st(spec)


def print_vectors():
    print("// generated by: python3 utils/curve_model.py --vectors")
    print("// {name, is_buy, phase, reserve, sold, pool_sal, pool_tokens, amount_in, min_out,")
    print("//  ok, amount_out, new_phase, new_reserve, new_sold, new_pool_sal, new_pool_tokens}")
    for name, side, spec, amount, min_out in VECTOR_CASES:
        st = _vector_state(spec)
        if amount == "all":
            amount = st.sold
        elif amount == "too_many":
            amount = st.sold + 1
        elif amount == "exact":
            # burn exactly enough to sell out the curve (crossing with zero pool remainder)
            need = ceil_div(K0, st.y() - (CURVE_SALE_SUPPLY - st.sold)) - st.x()
            amount = ceil_div(need * CURVE_FEE_DIVISOR, CURVE_FEE_DIVISOR - 1)
            while amount - fee_of(amount) < need:
                amount += 1
        r = quote_buy(st, amount, min_out) if side == "buy" else quote_sell(st, amount, min_out)
        ok = r is not None
        out, ns = r if ok else (0, st)
        b = lambda v: str(v).lower()
        print(f'  {{"{name}", {b(side == "buy")}, {st.phase}, {st.reserve}ull, {st.sold}ull, {st.pool_sal}ull, '
              f'{st.pool_tokens}ull, {amount}ull, {min_out}ull, {b(ok)}, {out}ull, {ns.phase}, {ns.reserve}ull, '
              f'{ns.sold}ull, {ns.pool_sal}ull, {ns.pool_tokens}ull}},')


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
