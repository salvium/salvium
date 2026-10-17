# Activation and rollout

CONVERT and the oracle pricing records are inert below hard fork v14 and active above it. This
document is the release checklist for switching them on.

## What has to change

`src/hardforks/hardforks.cpp` - add one entry to the end of `mainnet_hard_forks[]` (and to
`testnet_hard_forks[]` / `stagenet_hard_forks[]` if those networks are in use):

```c
  // version 14 DeFi - CONVERT + oracle pricing records - starts from block <H> on or about <date>.
  // No fork voting occurs for the v14 fork.
  {14, <H>, 0, <UNIX_TIME_OF_DATE>},
```

Current state of the arrays:

| network | last entry | next step |
|---|---|---|
| mainnet | `{13, 521425, 0, 1782766500}` | add v14 above the current height |
| testnet | `{13, 1400, 0, 1782766415}` | add v14 if testnet is used for rehearsal |
| stagenet | `{1, 1, 0, 1341378000}` only | add entries if stagenet is used at all |
| regtest (`FAKECHAIN`) | `src/cryptonote_core/cryptonote_core.cpp:683`: `{ 1, 0, 0, 0 }, { 14, 1, 0, 0 }` | v14 is active from block 1 |

Field meanings (`hardfork_t`, `src/cryptonote_basic/hardfork.cpp:90`): `version`, `height`,
`voting_threshold`, `time`. Every existing entry uses `voting_threshold = 0`, and activation is
`height >= heights[n].height && accumulated_votes >= threshold`
(`src/cryptonote_basic/hardfork.cpp:318-319`) - with threshold `0` activation is purely
height-based. The `time` field is informational (RPC `hard_fork_info`, operator messaging).

### Choosing the height

- Height must be above the current chain height plus a safety margin (allow at least one full
  release cycle for wallets/pools to upgrade; older daemons cannot validate v14 blocks and will
  fork off).
- Pick the timestamp to match the expected wall-clock time of that height at the current block
  interval, rounded to the hour, as the other entries do.
- If the network already contains v14 blocks (private/dev chains built from an unmerged branch),
  either reset them or set `PRICING_RECORD_HEIGHT_BINDING_HEIGHT` above them - see *Rollback*.

## Pre-activation checklist

1. **Oracle service live** at every `ORACLE_URLS` endpoint, holding the private key that matches
   the network's `ORACLE_PUBLIC_KEY`, answering
   `GET /price?height=<h>&sal=<sal>&vsd=<vsd>` with a signed record **for exactly `<h>`** and
   `timestamp = max(now, previous_block_timestamp + 1)`.
   Verify before launch with a real request for the next height and a manual verification of the
   signature against the consensus key.
2. **Digest check**: confirm the oracle's signature digest is accepted - the daemon accepts
   SHA-256 and SHA-1, so both are fine, but verify with a real signed record (see
   [TESTING.md](TESTING.md)).
3. **Daemons/wallets released before H**; mining pools and exchanges notified of the mandatory
   upgrade. The v14 gate covers transaction version, block header serialization and the RPC
   surface.
4. **Checkpoints**: add checkpoints for blocks after H once the chain is stable (the record rule
   is consensus, so a clearly signalled checkpoint is cheap insurance).
5. **Monitoring** ready: oracle request rate vs block rate, `Invalid pricing record signature`
   and `not bound to this block height` log alerts, `pricing_record.height == height` sampler.

## Activation day

1. Watch the fork status (`hard_fork_info` / daemon log) reach v14 at exactly height `H`.
2. Mine/watch a few blocks and confirm the header carries a record whose height equals the block
   height (`get_block`, field `pricing_record.height`).
3. Run one small real CONVERT (burn -> mint) and reconcile: burned amount, minted amount
   (`burnt - burnt/32`), destination asset, and that the mint output went to the return address.
4. Watch for `Block not accepted` from miners - the most likely cause is the oracle's height
   binding or clock skew; see the incident playbooks in [ORACLE.md](ORACLE.md#failure-modes).

## Rollback

- **Before any v14 block exists** reverting the binary is clean: nothing is serialized differently
  and no record is required.
- **After v14 blocks exist** an older binary cannot validate them (header serialization is gated
  on v14 and old code rejects the unknown record field). Rolling back means rolling the chain
  back too, or shipping a new fork that restores the previous rules.
- A chain that contains v14 blocks with records **not** bound to their height (produced by a
  build from before the binding rule) must not be re-connected by a binding-enabled build:
  validation of such a block fails on the reorg path
  (`blockchain.cpp:1110`, `PANIC! failed to add (again) block while chain switching`).
  Mitigation: set `PRICING_RECORD_HEIGHT_BINDING_HEIGHT` above those heights, or reset the chain.
  This is why the constant exists; for mainnet `0` is correct because mainnet has no v14 blocks.

## Release order recommendation

1. Merge the branch (see [PR_NOTES.md](PR_NOTES.md)) with the v14 schedule patch applied.
2. Cut a release; publish the activation height, the oracle contract and the upgrade deadline.
3. Bring the production oracle up at least one week before `H`, running the exact release binary
   against the regression network first.
4. Activate, verify (steps above), then publish the first post-activation checkpoints.

## Private networks / CI

`FAKECHAIN` (regtest) activates v14 at height 1, so every regtest chain exercises the feature
immediately. To keep the existing regtest chain in `devnet/` usable, either reset it or raise
`config::FAKECHAIN_PRICING_RECORD_HEIGHT_BINDING_HEIGHT` above its legacy blocks - the chain in
`/Volumes/PMDATA/salvium-dev/devnet/regtest/node0` contains block 379 with a record height of
378 (a pre-binding replay demonstration), which cannot be re-connected by a binding build
without that escape hatch.
