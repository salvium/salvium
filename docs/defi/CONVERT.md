# CONVERT transactions

`CONVERT` is an on-chain currency conversion: a transaction burns an amount of one asset and
the blockchain mints the equivalent amount of another asset **in the same block**, priced by the
block's oracle pricing record.

Gated by `HF_VERSION_ENABLE_CONVERT` (`src/cryptonote_config.h:264`, value `14`).

## Transaction shape

`cryptonote::transaction` carries the CONVERT fields directly
(`src/cryptonote_basic/cryptonote_basic.h:325-341`):

| field | meaning |
|---|---|
| `type` | `transaction_type::CONVERT` (the wallet RPC `transfer` call uses `tx_type: 4`) |
| `source_asset_type` | asset being burned |
| `destination_asset_type` | asset to be minted by the block's protocol transaction |
| `amount_burnt` | amount of `source_asset_type` burned |
| `amount_slippage_limit` | maximum slippage the owner accepts |
| `protocol_tx_data` | CARROT-version payload used by the protocol transaction |
| `return_address` / `return_pubkey` | where the minted amount goes |

Serialization is version- and type-gated (`BEGIN_SERIALIZE` in the same file): for CONVERT the
signature is over the same fields as other CARROT transactions; `protocol_tx_data` is serialized
for `STAKE`, `CREATE_TOKEN` and `CONVERT` when `version >= TRANSACTION_VERSION_CARROT`.

## Who mints

The mint output is **not** created by the wallet. During block template construction the miner
appends one protocol transaction whose single output mints the destination asset to the
converter's return address:

- `src/cryptonote_core/tx_pool.cpp:1917` appends the mint output to the template.
- `src/cryptonote_core/blockchain.cpp:1786` (`validate_protocol_transaction`) re-derives the
  expected amount from the block's pricing record and requires an exact match, including output
  key, return public key, view tag and asset type.

The append order in `fill_block_template` and the read order in `validate_protocol_transaction`
are the same iteration, so the n-th CONVERT transaction is expected to be priced by the n-th
mint output. This ordering dependency is implicit; keep the two loops in sync when touching
either side (`tx_pool.cpp:1917`, `blockchain.cpp:1786`).

## Pricing and economics

`get_conversion_rate` (`src/cryptonote_core/cryptonote_tx_utils.cpp:248`):

1. asset allowlist: `SAL` <-> `SAL1` (anything else is rejected);
2. `from_price = pr.ma(source_asset)`, `to_price = pr.ma(destination_asset)`; if either is `0`
   the conversion is refused - **a block without a pricing record can never price a CONVERT**;
3. `rate = COIN * from_price / to_price`, integer arithmetic floored at `COIN`.

Slippage is a fixed protocol fee of `1/32` of the burned amount
(`src/cryptonote_core/cryptonote_tx_utils.cpp:319`: `amount_slippage = amount_burnt >> 5`), so

    minted = amount_burnt - (amount_burnt >> 5)

which is `484375` for a burn of `500000` (verified on regtest, block index 390). The user's
`amount_slippage_limit` caps how much of that the user tolerates; if the implied amount exceeds
it the transaction is built with zero minted amount and refused. The fee is retained by the
protocol transaction, not by the miner.

`COIN` is 8-decimal fixed point (`src/cryptonote_config.h:76`: `(uint64_t)100000000`).

## Consensus checks

| Layer | Location | What is checked |
|---|---|---|
| mempool | `src/cryptonote_core/tx_pool.cpp` | tx type, asset pairs, burnt amount, output shape |
| tx-level | `verify_convert_tx_impl`, `src/cryptonote_core/cryptonote_tx_utils.cpp:338` | transaction structure and burn accounting |
| block-level | `validate_protocol_transaction`, `src/cryptonote_core/blockchain.cpp:1786` | minted amount equals the amount implied by **this block's** pricing record |

The block-level check is authoritative; the mempool accepts a slightly wider asset-pair set on
purpose (it cannot know which record the block will carry), and the block check is the backstop.

## Invariants

1. **Record binding** - from the network's activation height on, a block either carries no
   record or a record signed for exactly that block height (see [ORACLE.md](ORACLE.md)).
2. **No prices, no conversion** - an empty record makes every `ma()` accessor return `0`, and
   `get_conversion_rate` refuses, so an unreachable oracle costs availability, not soundness.
3. **Deterministic mint** - the minted amount is a pure function of `amount_burnt` and the
   block's record; both are fixed before the block hash is computed.
4. **One record, one block** - the signed height makes each record spendable by exactly one
   block, so a replayed record cannot be used again at a different height.

## Wallet / RPC surface

- `simplewallet`: `convert <amount> <source_asset> <destination_asset> [slippage]`, gated on
  `HF_VERSION_ENABLE_CONVERT` (`src/simplewallet/simplewallet.cpp:8834`); price info is gated on
  `HF_VERSION_ENABLE_ORACLE` (`:9244`).
- `wallet_rpc_server`: `transfer` accepts `source_asset`, `dest_asset`, `tx_type`,
  `slippage_limit`. This is the supported programmatic path; there is no separate `convert`
  convenience method (see follow-ups in [PR_NOTES.md](PR_NOTES.md)).

Example (regtest, from the end-to-end test):

    {"method":"transfer","params":{
       "destinations":[{"amount":500000,"address":"SC11...","asset_type":"SAL"}],
       "source_asset":"SAL1","dest_asset":"SAL","tx_type":4,"slippage_limit":5}}

The resulting transaction is a normal ring transaction that also burns the source amount; no
special wallet state is required to receive the minted output.
