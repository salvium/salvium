# CURVE transactions (native bonding-curve tokens)

> **Status: proposal + reference implementation.** This document is the design proposal for
> review. Nothing here is activated on mainnet; activation needs the core team's agreement and a
> scheduled hard fork.

`CURVE` lets anyone launch a Salvium Asset whose supply is sold by a deterministic bonding
curve. Buyers burn SAL1 and the block's protocol transaction mints tokens. Sellers burn tokens
and the protocol transaction mints SAL1 back out of that curve's reserve. The price depends only
on how many tokens the curve has sold. There is no oracle, no smart-contract VM and no custodian.

It reuses two patterns that already exist:

- `CREATE_TOKEN` (HF11): ticker and metadata registration, same-block protocol mint, and the
  `tokens` LMDB table.
- `CONVERT` (HF14, PR #136): burn in the user tx, a deterministic `calculate_*` function, and a
  block-level re-derivation of the mint in `validate_protocol_transaction`.

Gated by `HF_VERSION_ENABLE_CURVE` (proposed `15`, which leaves `14` for CONVERT/oracle).

## Motivation

Fair-launch tokens ("pump.fun"-style) are one of the most used on-chain primitives. Today they
require a smart-contract chain. On Salvium every buyer and seller keeps the full privacy stack:
stealth return addresses, RingCT and Carrot outputs. Only the curve's aggregate state is public,
just as the amount burnt is public for CONVERT. The feature also gives SAL1 a native sink,
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
the mempool forever and never loses funds. This differs from CONVERT, where a bad slippage
limit is rejected at pool admission. A curve's state moves between admission and mining, so the
block, not the mempool, has to decide.

## Curve math

Constant product with virtual reserves, in integer arithmetic (`boost::multiprecision::uint128_t`):

    Y0 = CURVE_TOKEN_SUPPLY + CURVE_VIRTUAL_TOKENS
    K0 = CURVE_VIRTUAL_SAL * Y0
    x  = CURVE_VIRTUAL_SAL + reserve        (SAL1 side)
    y  = Y0 - sold                          (token side)

Buy (`amount_burnt` SAL1):

    fee        = ceil(amount_burnt / 100)          -- burned, never enters the reserve
    net        = amount_burnt - fee
    tokens_out = y - ceil(K0 / (x + net))
    reserve   += net ; sold += tokens_out          -- refund if sold would exceed CURVE_TOKEN_SUPPLY

Sell (`amount_burnt` tokens):

    gross    = x - ceil(K0 / (Y0 - (sold - amount_burnt)))
    fee      = ceil(gross / 100)                   -- burned, never minted
    sal_paid = gross - fee
    reserve -= gross ; sold -= amount_burnt

Every rounding step favours the curve: tokens out are floored and the SAL1 side is ceiled.

Proposed parameters (`src/cryptonote_config.h`, all atomic units, `COIN = 1e8`):

| constant | value | effect |
|---|---|---|
| `CURVE_TOKEN_SUPPLY` | `100,000,000 * COIN` | real tokens sold by the curve (fits the CREATE_TOKEN supply limit) |
| `CURVE_VIRTUAL_TOKENS` | `7,300,000 * COIN` | keeps the price finite at sell-out |
| `CURVE_VIRTUAL_SAL` | `10,000 * COIN` | sets the starting price (≈ 0.000093 SAL1 per token) |
| `CURVE_FEE_DIVISOR` | `100` | 1% fee on both sides |

With these values, 1,000 SAL1 buys about 9.7% of the supply, and selling out the curve takes
about 150k SAL1. The values are an open question for reviewers.

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
5. **Token supply cap:** `sold <= CURVE_TOKEN_SUPPLY`. Tokens exist only as curve output.

## Transaction shape

No new prefix field. CURVE reuses existing fields:

- `amount_burnt`, `amount_slippage_limit`, `source_asset_type`, `destination_asset_type`;
- `protocol_tx_data` (return address for the mint), in the same version-gated branch PR #136 uses for CONVERT;
- `token_metadata`, serialized only for a LAUNCH (`source == destination`);
- `rollup_binding_tag`, serialized only for a SELL (token source), so the ROLLUP that pays the fee can be bound to it.

`is_tx_paid_for` now covers CURVE as well as TRANSFER, so a SELL is not mineable until its ROLLUP
fee payment is on chain.

## State

Two new LMDB tables:

- `curves`, keyed by `asset_id_from_type("sal" + ticker)`: `{reserve, sold, launch_height}`.
- `curve_txs`, keyed by tx hash: the outcome of each CURVE tx (`op`, `filled`, `amount_out`)
  plus the curve state it replaced.

`add_transaction` applies each CURVE tx in block order: it creates the curve for a LAUNCH, and
prices a BUY/SELL against the stored state. `remove_transaction` restores the replaced state from
`curve_txs`, so `pop_block` is exact. Supply tallies go through the existing `circ_supply_tally`;
a SELL also lowers the token tally, because the generic burn path skips token sources.

## Consensus checks

| Layer | Where | Checks |
|---|---|---|
| rules engine | `tx_rules_engine.cpp` (`make_curve_rules`, `apply_hf_15`) | type allowed only from HF15; op-specific field presence; asset pair must be SAL1 ↔ `sal<TICKER>` |
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
  - `get_curves` lists all curves;
  - `get_curve_tx {tx_hash}` returns `{op, filled, amount_out}`.

  Front-ends need only these calls to show charts, quotes and trade results.
- Wallet implementation: a launch is built exactly like CREATE_TOKEN and a trade exactly like a
  self-CONVERT. The prefix is re-typed to CURVE before signing
  (`CarrotTransactionProposalV1::final_tx_type`).

## Testing

| Layer | How to run | What it pins |
|---|---|---|
| Executable spec | `python3 utils/curve_model.py --selftest` | solvency, no-free-money, round-trip loss, monotonic price, supply cap |
| Unit tests | `unit_tests --gtest_filter='curve_math.*'` (8 tests) | C++ is bit-identical to the spec (`--vectors`), fee rounding, slippage refunds, random walks |
| Regtest end-to-end | `utils/curve_regtest.py` (instructions in the file header) | launch, buy, sell (with its ROLLUP fee tx), slippage refund, daemon quotes, and a reorg: `pop_blocks` restores the exact pre-sell curve state and re-mining reproduces it |

Every on-chain amount in the regtest run is compared with the Python model: tokens out of the buy,
SAL1 out of the sell and the curve state after each block.

Not covered yet: a `core_tests` negative test that feeds a block with a tampered CURVE payout
(chaingen cannot sign Carrot transactions yet, see PR #137). The block-level check is the same
re-derivation used by the template, and the regtest run exercises both paths.

## Upgrade notes

- **Who must upgrade:** every node, miner and pool before HF15. Wallets need upgrading only to use the
  new commands.
- **Serialization:** the new field is only present for `type == CURVE`, so older tx encodings are
  unchanged.
- **Rollback:** curve state is block-scoped and is restored by `pop_block`, just like the token tables.

## Out of scope / future work

- "Graduation" to an AMM or DEX when a curve sells out. Today the curve simply stops selling at
  `CURVE_TOKEN_SUPPLY`, and selling back stays possible.
- Creator rewards or a fee share. The fee is burned so that no treasury key is needed.
- Configurable curve parameters per launch.
