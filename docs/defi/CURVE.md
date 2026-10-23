# CURVE transactions (native bonding-curve tokens)

> **Status: proposal + reference implementation.** This document is the design proposal for
> review. Nothing here is activated on mainnet; activation needs the core team's agreement and a
> scheduled hard fork.

`CURVE` lets anyone launch a Salvium Asset whose supply is sold by a deterministic bonding
curve. Buyers burn SAL1 and the block's protocol transaction mints tokens. Sellers burn tokens
and the protocol transaction mints SAL1 back out of that curve's reserve. The price depends only
on how many tokens the curve has sold. There is no oracle, no smart-contract VM and no custodian.

It builds on what is already on mainnet:

- `CREATE_TOKEN` (HF11): ticker and metadata registration, same-block protocol mint, and the
  `tokens` LMDB table.
- the protocol transaction: burn in the user tx, a deterministic payout, and a block-level
  re-derivation of that payout in `validate_protocol_transaction`.

It is independent of any other open proposal. Gated by `HF_VERSION_ENABLE_CURVE` (proposed `14`,
the next fork after HF13; if another fork takes 14 first, this becomes a one-line renumber).

## Motivation

Fair-launch tokens ("pump.fun"-style) are one of the most used on-chain primitives. Today they
require a smart-contract chain. On Salvium every buyer and seller keeps the full privacy stack:
stealth return addresses, RingCT and Carrot outputs. Only the curve's aggregate state is public,
just as every burnt amount is public today. The feature also gives SAL1 a native sink,
because every trade burns a 1% fee.

## Operations

One new `transaction_type::CURVE = 11`. The operation is implied by the asset pair, so no new
operation field is needed:

| op | burns | protocol tx mints | notes |
|---|---|---|---|
| op | asset pair | burns | protocol tx mints | notes |
|---|---|---|---|---|
| `LAUNCH` | SAL1 -> SAL1 | `get_token_creation_price(ticker)` SAL1 | nothing | registers ticker + metadata (same rules as CREATE_TOKEN, supply fixed to `CURVE_TOKEN_SUPPLY`) and an empty curve |
| `BUY` | SAL1 -> `sal<TICKER>` | `amount_burnt` SAL1 | `tokens_out` of `sal<TICKER>` to the return address | `amount_slippage_limit` = minimum `tokens_out` |
| `SELL` | `sal<TICKER>` -> SAL1 | `amount_burnt` of `sal<TICKER>` | `sal_paid` SAL1 to the return address | `amount_slippage_limit` = minimum `sal_paid`; fee paid by a ROLLUP tx, like a token TRANSFER |

Every output of a CURVE transaction is change in the **source** asset; whatever the curve pays
is minted by the protocol transaction, where amounts are in clear. A BUY or SELL needs a curve
launched in an earlier block.

If a `BUY` or `SELL` cannot be filled at the moment its block is built (slippage limit not met,
supply exhausted, or sell larger than the amount sold), the protocol transaction **refunds** the
full burnt amount, in the burnt asset, to the return address. A curve tx therefore never sits in
the mempool forever and never loses funds. A curve's state moves between admission and mining,
so the block, not the mempool, has to decide whether a trade fills.

## Curve math

Constant product with virtual reserves, in integer arithmetic (`boost::multiprecision::uint128_t`):

    Y0 = CURVE_SALE_SUPPLY + CURVE_VIRTUAL_TOKENS
    K0 = CURVE_VIRTUAL_SAL * Y0
    x  = CURVE_VIRTUAL_SAL + reserve        (SAL1 side)
    y  = Y0 - sold                          (token side)

Buy (`amount_burnt` SAL1):

    fee        = ceil(amount_burnt / 100)          -- burned, never enters the reserve
    net        = amount_burnt - fee
    tokens_out = y - ceil(K0 / (x + net))
    reserve   += net ; sold += tokens_out          -- a buy that reaches CURVE_SALE_SUPPLY graduates (below)

Sell (`amount_burnt` tokens):

    gross    = x - ceil(K0 / (Y0 - (sold - amount_burnt)))
    fee      = ceil(gross / 100)                   -- burned, never minted
    sal_paid = gross - fee
    reserve -= gross ; sold -= amount_burnt

Every rounding step favours the curve: tokens out are floored and the SAL1 side is ceiled.

Proposed parameters (`src/cryptonote_config.h`, all atomic units, `COIN = 1e8`):

| constant | value | effect |
|---|---|---|
| `CURVE_TOKEN_SUPPLY` | `100,000,000 * COIN` | total supply of every curve token (fits the CREATE_TOKEN supply limit) |
| `CURVE_SALE_SUPPLY` | `80,000,000 * COIN` | tokens sold by the curve before graduation |
| `CURVE_POOL_SUPPLY` | `20,000,000 * COIN` | tokens that seed the pool at graduation |
| `CURVE_VIRTUAL_TOKENS` | `26,666,666.66666667 * COIN` (80M / 3) | makes the curve's final price equal the pool's starting price |
| `CURVE_VIRTUAL_SAL` | `10,000 * COIN` | sets the starting price (≈ 0.0000938 SAL1 per token) |
| `CURVE_FEE_DIVISOR` | `100` | 1% fee on both sides |

With these values the curve raises 30,000 SAL1, its price rises 16x (from 0.0000938 to
0.0015 SAL1) and the market cap at graduation is 150,000 SAL1. The values are an open question
for reviewers.

## Graduation

When a curve has sold `CURVE_SALE_SUPPLY` tokens it **graduates**: its whole reserve and
`CURVE_POOL_SUPPLY` tokens become a constant-product pool owned by nobody. There are no LP tokens
and no withdrawal, so the liquidity is locked forever. Graduation happens exactly once, inside the
trade that crosses the threshold, and is irreversible except by `pop_block`.

    pool_sal    = reserve                  (30,000 SAL1)
    pool_tokens = CURVE_POOL_SUPPLY        (20,000,000 tokens)

**No price jump.** The curve's final price is `x_end / VT` with `x_end = K0 / VT`, and the pool
starts at `reserve / CURVE_POOL_SUPPLY`. Choosing `VT = CURVE_SALE_SUPPLY / 3` (with
`CURVE_POOL_SUPPLY = CURVE_SALE_SUPPLY / 4`) makes both equal to 0.0015 SAL1 (unit test
`graduation_has_no_price_jump`, within 1 atomic unit).

**Crossing buy.** A buy whose net SAL1 would take more than the remaining curve tokens is split:

    need       = ceil(K0 / VT) - x            -- the smallest net that buys every remaining token
    tokens_out = remaining                    -- the rest of the curve
    graduate()
    tokens_out += pool_buy(net - need)        -- the remainder is swapped in the new pool

Both legs are one trade with one payout and one slippage check (`min_out` applies to the total).

**Pool phase.** Same CURVE BUY/SELL transactions, priced against the pool:

    buy:  eff = in - ceil(in / 100) ; out = y - ceil(x*y / (x + eff)) ; x += in  ; y -= out
    sell: gross = x - ceil(x*y / (y + in)) ; paid = gross - ceil(gross / 100) ; x -= paid ; y += in

The 1% fee stays in the pool, so `k = x*y` never decreases and the pool deepens with every swap.
Rounding favours the pool.

**Supply.** Tokens held by users are `sold` on the curve and `CURVE_TOKEN_SUPPLY - pool_tokens`
after graduation; `CURVE_TOKEN_SUPPLY` is never exceeded.

**Activation.** Graduation changes CURVE parameters and state that are not yet live on any
network, so it ships under the same `HF_VERSION_ENABLE_CURVE`. If CURVE were activated without it,
graduation would need its own hard fork.

The executable specification is [`utils/curve_model.py`](../../utils/curve_model.py):

- `--selftest` runs the property checks below.
- `--vectors` prints the exact test vectors used by `tests/unit_tests/curve_math.cpp`.

## Invariants (enforced by consensus)

1. **Reserve solvency:** for every curve, `reserve >= 0` and `x * y >= K0`. Selling every token
   back can never mint more SAL1 than was put in.
2. **No free money:** for every curve, total SAL1 minted by SELL ≤ total net SAL1 burnt by BUY.
   SAL1 circulating supply can only go *down* through CURVE.
3. **Round trip loses:** buying and then immediately selling the same tokens returns strictly
   less than the amount burnt. This is the fee plus rounding.
4. **Deterministic mint:** each mint is a pure function of the curve state at that point in the
   block and of the tx fields. The template and validation iterate CURVE txs in the same
   (block) order, and the state is applied sequentially.
5. **Token supply cap:** `sold <= CURVE_SALE_SUPPLY` on the curve and
   `pool_tokens <= CURVE_TOKEN_SUPPLY` in the pool. Tokens exist only as CURVE output.
6. **Pool never shrinks:** in the pool phase `k = pool_sal * pool_tokens` never decreases, and a
   graduated curve always has `reserve == 0`, `sold == CURVE_SALE_SUPPLY` and a non-empty pool.

## Transaction shape

No new prefix field. CURVE reuses existing fields:

- `amount_burnt`, `amount_slippage_limit`, `source_asset_type`, `destination_asset_type`;
- `protocol_tx_data` (return address for the payout), in the same version-gated branch STAKE and CREATE_TOKEN use;
- `token_metadata`, serialized only for a LAUNCH (`source == destination`);
- `rollup_binding_tag`, serialized only for a SELL (token source), so the ROLLUP that pays the fee can be bound to it.

`is_tx_paid_for` now covers CURVE as well as TRANSFER, so a SELL is not mineable until its ROLLUP
fee payment is on chain.

## State

Two new LMDB tables:

- `curves`, keyed by `asset_id_from_type("sal" + ticker)`:
  `{phase, reserve, sold, pool_sal, pool_tokens, launch_height, graduation_height}`.
- `curve_txs`, keyed by tx hash: the outcome of each CURVE tx (`op`, `filled`, `amount_out`,
  `graduated`) plus the full curve state it replaced, so undoing a graduation is exact.

`add_transaction` applies each CURVE tx in block order: it creates the curve for a LAUNCH, and
prices a BUY/SELL against the stored state. `remove_transaction` restores the replaced state from
`curve_txs`, so `pop_block` is exact. Supply tallies go through the existing `circ_supply_tally`;
a SELL also lowers the token tally, because the generic burn path skips token sources.

## Consensus checks

| Layer | Where | Checks |
|---|---|---|
| rules engine | `tx_rules_engine.cpp` (`make_curve_rules`, `apply_hf_14`) | type allowed only from HF14; op-specific field presence; asset pair must be SAL1 ↔ `sal<TICKER>` |
| tx semantics | `check_curve_semantics` | LAUNCH: ticker valid, unused and not a CREATE_TOKEN ticker; burn equals creation price. BUY/SELL: curve exists |
| mempool | `tx_pool.cpp` | LAUNCH tickers unique in the pool and template |
| block | `validate_protocol_transaction` | re-run every BUY/SELL in block order against a scratch copy of curve state; each output must equal the expected mint or refund exactly (amount, asset, key, view tag, anchor) |

## Wallet / RPC

- simplewallet: `curve_launch <ticker> [name=..] [url=..]`, `curve_buy <ticker> <sal1_amount> [min_tokens]`,
  `curve_sell <ticker> <token_amount> [min_sal1]`.
- wallet RPC: `curve_launch {ticker, name?, url?}`, `curve_buy {ticker, amount, min_out?}` and
  `curve_sell {ticker, amount, min_out?}`.
- daemon RPC:
  - `get_curve_info {asset_type, quote_buy?, quote_sell?}` returns `{curve, parameters, quotes}`;
    `curve` includes `phase` (`curve` | `pool`), `pool_sal`, `pool_tokens`, `graduation_height`
    and `circulating`;
  - `get_curves` lists all curves;
  - `get_curve_tx {tx_hash}` returns `{op, filled, amount_out, graduated}`.

  Front-ends need only these calls to show charts, quotes and trade results.
- Wallet implementation: a launch is built exactly like CREATE_TOKEN and re-typed to CURVE before
  signing (`CarrotTransactionProposalV1::final_tx_type`). A trade is built as a CURVE tx whose
  outputs are source-asset change; the prefix names the destination asset and the minimum out.

## Testing

| Layer | How to run | What it pins |
|---|---|---|
| Executable spec | `python3 utils/curve_model.py --selftest` | solvency, no-free-money, round-trip loss, monotonic price, supply cap, price continuity at graduation, non-decreasing `k` |
| Unit tests | `unit_tests --gtest_filter='curve_math.*'` (9 tests) | C++ is bit-identical to the spec (`--vectors`, incl. crossing buys and pool swaps), fee rounding, slippage refunds, no price jump, random walks through graduation |
| Regtest end-to-end | `utils/curve_regtest.py` (instructions in the file header) | launch, buy, sell (with its ROLLUP fee tx), slippage refund, daemon quotes, and a reorg: `pop_blocks` restores the exact pre-sell curve state and re-mining reproduces it |

Every on-chain amount in the regtest run is compared with the Python model: tokens out of the buy,
SAL1 out of the sell and the curve state after each block.

Not covered yet: a `core_tests` negative test that feeds a block with a tampered CURVE payout
(chaingen cannot sign Carrot transactions yet). The block-level check is the same
re-derivation used by the template, and the regtest run exercises both paths.

## Upgrade notes

- **Who must upgrade:** every node, miner and pool before HF14. Wallets need upgrading only to use the
  new commands.
- **Serialization:** the new field is only present for `type == CURVE`, so older tx encodings are
  unchanged.
- **Rollback:** curve state is block-scoped and is restored by `pop_block`, just like the token tables.

## Out of scope / future work

- Creator rewards or a fee share. The fee is burned so that no treasury key is needed.
- Configurable curve parameters per launch.
