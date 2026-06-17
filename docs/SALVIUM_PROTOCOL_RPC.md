# Salvium Protocol And RPC Notes

This document summarizes Salvium-specific transaction accounting and RPC fields
that differ from inherited Monero behavior. Values are integer atomic units
unless a field explicitly states otherwise.

## Transaction Types

Salvium transaction type values are defined in `src/cryptonote_protocol/enums.h`.

| Value | Name | Notes |
| ---: | --- | --- |
| 0 | `UNSET` | Uninitialized value; invalid on chain. |
| 1 | `MINER` | Coinbase transaction. Salvium uses `amount_burnt` for the staker reward share. |
| 2 | `PROTOCOL` | Protocol-generated payouts such as stake, audit, and token creation returns. |
| 3 | `TRANSFER` | Normal wallet transfer. |
| 4 | `CONVERT` | Conversion between supported asset types. |
| 5 | `BURN` | Burns the reported `amount_burnt`. |
| 6 | `STAKE` | Locks `amount_burnt` for the staking/yield window. |
| 7 | `RETURN` | Return-style transaction type reserved by the protocol. |
| 8 | `AUDIT` | Locks `amount_burnt` for audit return behavior. |
| 9 | `CREATE_TOKEN` | Pays the token creation price through `amount_burnt`. |
| 10 | `ROLLUP` | Pays bundled layer-2 transaction fees through `amount_burnt`. |

## `amount_burnt`

`amount_burnt` is not a single-purpose burn field in Salvium. Integrations
must interpret it with the transaction type:

- `MINER`: staker reward share carried in the miner transaction.
- `BURN`: amount removed from spendable supply.
- `CONVERT`: source amount consumed by conversion.
- `STAKE`: amount locked for yield participation.
- `AUDIT`: amount locked for audit return.
- `CREATE_TOKEN`: protocol token creation price.
- `ROLLUP`: sum of paid rollup fees.
- `TRANSFER`: normally zero unless a hard-fork-specific rule says otherwise.

Do not calculate user-visible wallet movement from `amount_burnt` alone. Wallets
and explorers should combine transaction type, source asset, destination asset,
protocol outputs, and wallet ownership data.

## Protocol Outputs

Protocol payouts are emitted through the block `protocol_tx`. Stake and audit
payout validation checks:

- output amount;
- output asset type;
- output unlock window;
- output ordering when multiple payout categories mature in the same block;
- return key or carrot return metadata for newer transaction versions.

Protocol outputs should be treated as protocol-generated returns, not normal
third-party transfers.

## `get_yield_info`

Endpoint: `/json_rpc`

Method: `get_yield_info`

Request fields:

| Field | Type | Meaning |
| --- | --- | --- |
| `from_height` | integer | Optional inclusive lower bound. `0` means no lower bound. |
| `to_height` | integer | Optional inclusive upper bound. `0` means no upper bound. |
| `include_raw_data` | boolean | Include per-block YBI records in `yield_data`. |

Response fields:

| Field | Type | Meaning |
| --- | --- | --- |
| `total_burnt` | integer | Sum of slippage for returned YBI entries where no coins were locked. |
| `total_staked` | integer | Current locked stake tally at the daemon tip. |
| `total_yield` | integer | Sum of slippage for returned YBI entries where locked stake was present. |
| `yield_per_stake` | integer | Tip block slippage scaled by `COIN` and divided by locked stake tally. |
| `yield_data` | array | Raw per-block records when requested. |
| `status` | string | RPC status. |

Raw `yield_data` entries:

| Field | Meaning |
| --- | --- |
| `block_height` | Height for this YBI entry. |
| `slippage_total_this_block` | Slippage available for burn/yield accounting at this height. |
| `locked_coins_this_block` | Stake locked by transactions in this block. |
| `locked_coins_tally` | Total locked stake active at this height. |
| `network_health_percentage` | Protocol health field stored with the YBI entry. |

Important behavior:

- Range filters apply to `total_burnt`, `total_yield`, and `yield_data`.
- `total_staked` and `yield_per_stake` describe the daemon tip when the tip is
  present in the YBI cache.
- Integer division floors proportional yield. Rounding dust is not distributed.
- Wallets should not assume `yield_data` covers the whole chain. The daemon
  serves the current YBI cache window.

Example request:

```json
{
  "jsonrpc": "2.0",
  "id": "0",
  "method": "get_yield_info",
  "params": {
    "from_height": 0,
    "to_height": 0,
    "include_raw_data": true
  }
}
```

## Integration Checks

Explorers and exchanges should verify these behaviors during upgrades:

- recognized transaction type names and numeric values;
- `amount_burnt` display per transaction type;
- protocol transaction output parsing;
- staking and audit lock maturity;
- `get_yield_info` range behavior;
- rollup fee accounting;
- token creation output and ticker handling;
- hard-fork activation height for changed rules.

The helper `utils/protocol_invariants.py` can query a running daemon and check
yield aggregation plus selected block-level transaction accounting.
