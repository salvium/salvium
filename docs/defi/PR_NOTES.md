# PR notes: DeFi core (CONVERT + oracle pricing records)

## Title

    v14 DeFi core: CONVERT transactions and oracle-bound pricing records

## Summary

Adds on-chain currency conversion to Salvium, gated behind hard fork v14:

- **CONVERT transactions**: a transaction burns `amount_burnt` of `source_asset_type`; the block's
  protocol transaction mints `amount_burnt - amount_burnt/32` of `destination_asset_type` to the
  converter's return address, priced by the block's pricing record.
- **Oracle pricing records**: an optional, oracle-signed record in every v14+ block header
  (prices for `SAL`, `SAL1`, `VSD`, plus circulating supply). A record is only accepted if it is
  signed for **exactly the height of the block carrying it**, so it can never be replayed. The
  rule is enforced from a per-network activation height
  (`PRICING_RECORD_HEIGHT_BINDING_HEIGHT`); mainnet uses `0` because mainnet has no v14 blocks.
- **Digest compatibility**: the verifier accepts SHA-256 and SHA-1 signatures over the exact same
  message bytes with the same pinned key. The mainnet key is DSA-2048/q-224 and OpenSSL's DSA
  default digest has historically been SHA-1 - a SHA-256-only verifier would silently turn every
  record into an empty record and stop CONVERT network-wide.
- **Failure containment**: an unreachable or misconfigured oracle yields *empty records*, which
  make conversions impossible (`get_conversion_rate` refuses when a price is 0) but never
  invalidate the chain. Availability, not soundness.

Documentation for operators and reviewers lives in `docs/defi/`:

- [README](/docs/defi/README.md) - map of the implementation
- [CONVERT](/docs/defi/CONVERT.md) - transaction shape, pricing, economics, consensus checks
- [ORACLE](/docs/defi/ORACLE.md) - wire contract, signed bytes, keys, runbook, failure modes
- [ACTIVATION](/docs/defi/ACTIVATION.md) - the fork-schedule patch and rollout checklist
- [TESTING](/docs/defi/TESTING.md) - unit, mutation, end-to-end and negative tests, baseline failures

## Scope of this branch

`git diff --stat 9aece49..HEAD` (before squashing): 48 files changed, 2360 insertions,
186 deletions. By area:

| area | files |
|---|---|
| consensus / core | `src/oracle/pricing_record.{h,cpp}`, `src/cryptonote_core/blockchain.{h,cpp}`, `cryptonote_core.cpp`, `cryptonote_tx_utils.{h,cpp}`, `tx_pool.{h,cpp}`, `tx_rules_engine.cpp`, `src/cryptonote_config.h`, `src/cryptonote_basic/cryptonote_basic.h` |
| CARROT plumbing | `src/carrot_core/payment_proposal.cpp`, `src/carrot_impl/*`, `src/ringct/rctTypes.h`, `src/serialization/json_object.cpp` |
| wallet / RPC | `src/wallet/{wallet2,wallet2.h,tx_builder,tx_builder.h,wallet_rpc_server,wallet_rpc_server_commands_defs.h}`, `src/simplewallet/simplewallet.cpp` |
| tests | `tests/unit_tests/{pricing_record,json_serialization,protocol_tx,test_tx_utils,account,multisig,net,wallet_storage}.cpp`, `tests/core_tests/{block_reward,chaingen,transaction_tests}.cpp` |
| build | `contrib/depends/packages/{ncurses,zeromq}.mk`, `contrib/depends/patches/zeromq/fix-missing-braces.patch` |

The two build patches (ncurses 6.1 downgrade, zeromq brace fix) are local arm64/macOS build
fixes needed to compile this tree at all; split them into their own commit (or drop them if the
target CI does not need them).

## Evidence

| claim | evidence |
|---|---|
| record cannot be replayed across heights | regtest: record signed for H-1 and for H+1 both rejected; pre-fix build accepted the replay (block 379) |
| record `height` is inside the signed bytes | regenerated the 289-byte message of block 385, `openssl dgst -sha256 -verify` OK; changing the height digit breaks both digests |
| production key type + legacy digest work | `verify_accepts_sha1_and_dsa_production_style_vectors` (DSA-2048/q-224 SHA-256 + SHA-1, EC P-256 SHA-1, tamper control) |
| the new tests detect regressions | 4 mutation checks, each turns exactly the expected tests red, then green after restore |
| CONVERT works end to end | regtest block 390: `500000 SAL1` burned, `484375 SAL` minted to the return address, `pricing_record.height == 390` |
| oracle outage does not stop the chain | empty record accepted, `get_conversion_rate` refuses (unit test + code path) |
| activation height semantics | `height_binding_can_be_activated_after_legacy_blocks` unit test |

A full `unit_tests` run is 768 OK / 32 FAILED; the failures are pre-existing and unrelated (see
[TESTING.md](/docs/defi/TESTING.md#known-baseline-failures-not-caused-by-this-branch)).

## Risk

- **Consensus**: the feature is dead below v14. Above v14 it changes header serialization (an
  optional field, version-gated) and transaction validation. A node running the old binary cannot
  validate v14 blocks - a mandatory upgrade.
- **Liveness**: CONVERT depends on the oracle. An oracle that signs the wrong height or has a
  skewed clock stops block production because the rule is fail-closed; the daemon re-submits a
  cached template, so the fix is: correct the oracle, then restart the node. Documented in
  `docs/defi/ORACLE.md`.
- **Key management**: the oracle public key is a consensus constant; rotation needs a fork. The
  daemon has no signing path. The unit tests embed the *regtest* oracle private key (its public
  half is already the `FAKECHAIN` consensus constant); it must never be reused for a public
  network, and production keys stay with the oracle service.
- **Reorg/rollback**: chains containing pre-binding v14 blocks (only dev/regtest chains, not
  mainnet) fail to re-add such blocks on the reorg path; use
  `PRICING_RECORD_HEIGHT_BINDING_HEIGHT` or reset. Documented in `docs/defi/ACTIVATION.md`.

## Review guide

1. `src/oracle/pricing_record.cpp:373` - `valid_with_binding_height()`, the whole rule set in one
   function (record optional, pre-v14 must be empty, signature, height binding, timestamps).
2. `src/oracle/pricing_record.cpp:230-343` - signing message and digest set.
3. `src/cryptonote_core/blockchain.cpp:3449` (`get_pricing_record`, oracle fetch + fallback) and
   `~:5830` (per-block validation, `chain_h` is the height of the block being added).
4. `src/cryptonote_core/cryptonote_tx_utils.cpp:248-330` - `get_conversion_rate`, mint amount,
   slippage; `:338` - `verify_convert_tx_impl`.
5. `src/cryptonote_core/blockchain.cpp:1786` - `validate_protocol_transaction` (mint output must
   match the record-derived amount; note the implicit ordering contract with `tx_pool.cpp:1917`).
6. `tests/unit_tests/pricing_record.cpp` - the rules above, pinned.

## Follow-ups (not in this PR)

1. Record the pre-branch `unit_tests` baseline on `9aece49` and fix or quarantine the 32
   pre-existing failures so CI can be green.
2. S4: alternative-chain test with mismatched record heights (alt blocks are only validated at
   switch time; block template supply for alt chains is taken from the main chain - both
   documented in the code).
3. `ORACLE_URLS` has three identical entries for mainnet/testnet/stagenet; real redundancy
   (different hosts/providers) is an operations task.
4. `wallet-rpc`: add a first-class `convert` method instead of overloading `transfer` with
   `tx_type=4`; `simplewallet` already has a dedicated command.
5. Oracle-side hardening: publish `timestamp = max(now, last+1)`, monitor the `REQ /price` rate,
   and add a startup self-test that signs a sample height and verifies it with the consensus key.
6. Minor: `HF_VERSION_FAKECHAIN_TOP` is still a literal `14`; `wallet2.cpp:11198/11450` contain
   commented-out `get_pricing_record` calls.

## How to test manually

```
# node + oracle (regtest)
salviumd --regtest --keep-fakechain --fixed-difficulty 1 --data-dir .../node0 --non-interactive
python3 devnet/oracle_service.py --keydir /tmp/c5key --port 8443

# positive + negative + convert
/tmp/bind_test.sh      # mine, then a height-1 oracle must be rejected
/tmp/e2e_final.sh      # fund, convert 500000 SAL1 -> SAL, check 484375 SAL minted
```

Accepted-with-record and rejected-with-wrong-height runs are quoted in
[TESTING.md](/docs/defi/TESTING.md#regtest-end-to-end).
