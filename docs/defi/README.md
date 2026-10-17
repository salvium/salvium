# DeFi core: CONVERT + oracle pricing records

This directory documents the on-chain currency conversion feature (`CONVERT` transactions)
and the oracle pricing record it depends on. Both are gated behind hard fork **v14** and are
implemented on branch `defi-convert-oracle` (based on tag `v1.1.3c`, commit `9aece49`).

| Document | Contents |
|---|---|
| [CONVERT.md](CONVERT.md) | protocol, transaction shape, consensus rules, economics, RPC surface |
| [ORACLE.md](ORACLE.md) | oracle contract, signing message, keys per network, operations and incident playbooks |
| [ACTIVATION.md](ACTIVATION.md) | hard fork scheduling patch, rollout order, rollback caveats |
| [TESTING.md](TESTING.md) | unit tests, mutation checks, regtest end-to-end and negative tests, known baseline failures |
| [PR_NOTES.md](PR_NOTES.md) | PR description: summary, evidence, risk, review guide, follow-ups |

## Where the code lives

Consensus / core:

- `src/oracle/pricing_record.{h,cpp}` - record type, signature verification, `valid()` rules,
  `height_binding_height()` (per-network activation height).
- `src/cryptonote_core/blockchain.cpp` - oracle fetch (`get_pricing_record`, ~:3449), block
  validation of the record (~:5830), protocol transaction validation (~:1786).
- `src/cryptonote_core/cryptonote_tx_utils.cpp` - conversion rate (~:248), mint amount and
  slippage (~:319), CONVERT transaction verification (`verify_convert_tx_impl`, ~:338).
- `src/cryptonote_core/tx_pool.cpp` - mempool admission and block template mint output (~:1887,
  ~:1917).
- `src/cryptonote_basic/cryptonote_basic.h` - transaction fields (`source_asset_type`,
  `destination_asset_type`, `amount_burnt`, `amount_slippage_limit`, `protocol_tx_data`) and
  header serialization of the pricing record (gated on `HF_VERSION_ENABLE_ORACLE`).
- `src/cryptonote_config.h` - `HF_VERSION_ENABLE_CONVERT` / `HF_VERSION_ENABLE_ORACLE` /
  `HF_VERSION_ORACLE_CONVERT` / `HF_VERSION_SLIPPAGE_YIELD` (all `14`), `ORACLE_URLS`,
  `ORACLE_PUBLIC_KEY`, `PRICING_RECORD_HEIGHT_BINDING_HEIGHT`.

Wallet / RPC:

- `src/wallet/wallet2.cpp` - conversion quoting and construction.
- `src/wallet/wallet_rpc_server.cpp` + `wallet_rpc_server_commands_defs.h` - `transfer` with
  `tx_type=4`, `source_asset`, `dest_asset`, `slippage_limit`.
- `src/simplewallet/simplewallet.cpp` - interactive `convert` command.

## Status summary

- Implemented and verified end to end on regtest, including negative cases for the record
  height binding (record signed for height-1 and height+1 are both rejected).
- Hard fork v14 scheduling for mainnet/testnet is the one release step that needs a maintainer
  decision; the exact patch is in [ACTIVATION.md](ACTIVATION.md).
- Known follow-ups are listed in [PR_NOTES.md](PR_NOTES.md#follow-ups-not-in-this-pr).
