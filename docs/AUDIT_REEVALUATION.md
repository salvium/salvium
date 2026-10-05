# Carrot SAL1 wallet audit: re-evaluation

This is the historical review of the withdrawn prototype. The replacement
implementation and its current acceptance status are in [audit.md](../audit.md).

The current `audit` branch does **not** implement the requested wallet-operated
audit. The previous completion and turnkey deployment claims are withdrawn.
This review covers source revision `938186ae2fa6b3e20c2f1cb298349477af065f40`
and the supplied audit executables. It is a review of the prototype, not a claim
that the findings below have been fixed.

## Corrected requirements

- The owner enters `audit` in the wallet. The wallet constructs and submits its
  own audit evidence and reports progress and the result. Owner JSON files,
  Python/JavaScript runners, and manual access to a miner are not the product.
- Scope is **Carrot SAL1 outputs and stakes only**, as the operator clarified.
  Pre-Carrot support and reconstruction of old SAL history are not requirements.
  The completed SAL-to-SAL1 audit establishes the prior validation boundary;
  its valid results must be distinguished from later unauthorized SAL1 creation.
  A SAL1 label alone cannot establish legitimacy: block 465074 is the counterexample.
- Good funds and good immature stakes must have a usable path through audit and
  their normal maturity rules. Proven bad funds and bad-funded stakes must not
  obtain clearance or a payout. Unresolved evidence must remain explicitly unresolved.
- All selected Carrot wallet accounts and subaddresses need explicit coverage,
  including the 1,000-subaddress exchange fixture. Results must distinguish
  good, bad, unresolved, immature, spent, and locked stake principal.
- Tests must exercise the actual wallet entry point and native acceptance path,
  with false-origin funds and stakes, restarts, reorgs, and the large fixture.

The earlier claim that pre-Carrot ancestry was itself a requirements blocker
was incorrect for this scope and is withdrawn. This does not make every existing
SAL1 output good, or turn unresolved ring candidates into proven bad descendants.

## Confirmed implementation problems

1. **The required entry point is absent.** `simple_wallet::audit` still checks
   only the old `AUDIT_HARD_FORKS` table and reports that the command is unavailable
   for this new audit. Wallet RPC `audit` uses the old transfer path too; at the
   new fork its failure returns an empty RPC error. `wallet2` contains status
   queries and spending restrictions, but no enrollment method. The public
   wallet API's `createAuditTransaction` also remains the old flow and hardcodes
   the source asset to `SAL`.
   Sources: `src/simplewallet/simplewallet.cpp:8901`,
   `src/wallet/wallet_rpc_server.cpp:1223`, `src/wallet/wallet2.cpp:7739`,
   `src/wallet/api/wallet.cpp:1747` (`createAuditTransaction`).

2. **Submission is a local miner administration mechanism.** The daemon accepts
   disclosures only on unrestricted RPC, stores one pending item in memory, and
   inserts that item in its own mining template. A second distinct valid item is
   refused until the first mines. There is no disclosure P2P relay, durable
   wallet enrollment, wallet retry queue, or native wallet resumption. Connecting
   a normal wallet to a non-mining node cannot produce the promised workflow.
   Sources: `src/rpc/core_rpc_server.h:150`,
   `src/cryptonote_core/blockchain.cpp:2631` and `:4062`,
   `src/cryptonote_core/blockchain.h` (`m_lineage_pending_disclosure`).

3. **The proof format discloses a reusable wallet secret.** It serializes
   `s_view_balance` into public coinbase extra. That reveals activity under the
   key, including future activity; it is not a proof limited to the funds being
   audited. A wallet command must not silently inherit this behavior. The
   re-evaluation reproduced it only with a disposable wallet on an isolated
   fakechain; no production wallet secret was used or published.
   Sources: `src/cryptonote_core/lineage_audit.h:25`,
   `src/cryptonote_core/lineage_audit.cpp:118`, `utils/lineage_disclosure.py:44`.

4. **An honest owner's own evidence is insufficient in the current design.**
   Every funding key image requires another stored lineage record. A recipient
   can disclose all its own Carrot transactions and still remain `PENDING` until
   prior owners disclose theirs. The tests succeed by controlling and disclosing
   all owners. The implementation has no wallet mechanism to satisfy or explain
   this dependency. The prior SAL-to-SAL1 validation boundary is not represented
   as an explicit root policy in this verifier. This is a liveness and proof
   design problem; skipping missing evidence and calling funds good would not
   fix it. Source: `src/cryptonote_core/lineage_audit.cpp:255`.

5. **Carrot account coverage is narrower than the wallet.** The wire format has
   only a count of account-0 addresses, capped at 4096. Scanning hardcodes
   `{0, minor}`. It cannot enroll another Carrot account or report complete wallet
   coverage. The offline configuration even accepts counts up to 1,000,000 that
   the publication format cannot encode. Sources:
   `src/cryptonote_core/lineage_audit.h:36`,
   `src/cryptonote_core/lineage_audit.cpp:127`,
   `utils/run_salvium_audit.py` (`read_config`).

6. **Offline forensic acceptance is not the native release predicate.** Native
   lineage scanning treats canonical miner outputs as roots and does not run
   the offline independent issuance and full historical crypto checks before
   assigning their verdict. The offline classifier explicitly requires those
   checks. A user can submit a disclosure without ever running the offline
   verifier. Therefore false-issuance rejection by an offline tool does not
   establish that native enrollment rejects every historically accepted false
   origin. This is a confirmed difference in validation coverage, not a claimed
   working chain exploit. Sources:
   `src/cryptonote_core/lineage_audit.cpp:146` and `:200`,
   `utils/run_salvium_audit.py:419`.

7. **The branch imposes global consensus policy beyond the wallet command.**
   Mainnet HF14 at 650000 and a ten-block clearance delay are compiled in. All
   SAL1 spending is gated there, including owners who never invoked `audit`.
   These are deployment and consensus decisions, not consequences of adding a
   wallet command. The recorded user requirements do not establish that exact
   activation height. No production daemon was started or restarted, and this
   review does not authorize deploying that schedule. Sources:
   `src/cryptonote_core/lineage_audit_policy.h:6`,
   `src/hardforks/hardforks.cpp:74`.

8. **The release package does not even include the CLI wallet.** Its five-binary
   list includes wallet RPC and forensic tools, but omits `salvium-wallet-cli`.
   The packaging, instructions, and acceptance criteria were built around the
   wrong user workflow. Source: `utils/run_salvium_audit.py:24`.

## What the tests establish, and what they do not

The frozen fixture genuinely has 100,011 mined blocks, 100 wallets, ten miners,
1,000 funded exchange subaddresses, and twenty immature stakes. Separate native
tests exercise funding quarantine, delayed good payouts, early-spend rejection,
shallow reorgs, and restart reconstruction. Those results remain useful.

They do not establish completion of the requested wallet audit:

- There was no end-to-end invocation of the new wallet `audit` command in the
  reported acceptance suite. The re-evaluation now reproduces that failure.
- The 3,000 matrix cases select miner roots, alter disclosure fields, and vary
  a short suffix over one shared 100,011-block snapshot. They are not 3,000
  independently evolved complex histories. Only seed 21600 used the final payout
  authorization implementation. Source: `audit_matrix_regtest.py:111` and `:126`.
- The 1,000 seeded bad-stake paths inject an internal `bad` flag directly into
  test records. They establish propagation and payout behavior after that flag
  exists, not the cryptographic identification of a real historical bad-funded
  stake. Source: `tests/unit_tests/lineage_audit.cpp:49`.
- The false-mint databases are intentionally inconsistent offline copies. The
  test explicitly never starts a daemon on them. Their rejection cannot be
  described as rejection by the owner's wallet audit command.
  Source: `tests/functional_tests/audit_snapshot_faults.py:3`.
- The salYAHU test alters an already signed transaction's output labels and
  requires rejection. This does not recreate a historically accepted,
  correctly signed salYAHU-to-SAL1 origin followed by a bad-funded stake through
  wallet enrollment. Source: `audit_complex_regtest.py:646`.
- The baseline has 925 regular transactions and one created token, compared
  with the inspected mainnet snapshot's 686,805 regular transactions and 37
  tokens. Block count alone does not establish comparable workload complexity.
- Large bulk detach/replay remains unqualified: the recorded 21,597-block
  `pop_blocks` preparation exceeded 180 seconds. Its cause is not established
  by this review. Full native lineage reconstruction on detach/restart and
  public submission throughput need separate measurements.

The independent monetary calculation shares the native lineage authorization
implementation. Agreement between those two paths is not independent evidence
against a defect in that shared authorization logic.

### Fresh reproduction during this review

[Recorded results](AUDIT_REEVALUATION_RESULTS.json) identify the exact binaries
and the disposable fakechain. At active HF14, the CLI prints `Audit command is
not available at this time.` and wallet RPC returns `code: 0, message: ""`.
The test also reproduces the single-slot refusal, public viewing secret in
coinbase data, and honest Carrot funds/stake evidence remaining pending after
15 blocks without the other owner's funding history. It stops its own daemons.

Developer-only reproduction (this is a test harness, not the owner workflow):

```sh
python3 tests/functional_tests/audit_wallet_review_regtest.py
```

Its result is deliberately named `REQUIREMENT_FAILURES_REPRODUCED`, not an audit
acceptance pass. The expectations describe the reviewed defective build; they
must be replaced with positive wallet acceptance assertions when it is fixed.

## Counts and evidence that remain valid within their scope

| Separate snapshot | Good unspent SAL1 | Bad unspent SAL1 |
|---|---:|---:|
| Valid isolated fixture | 13,040,235.09208699 | 0.00000000 |
| Offline false-miner copy | 13,040,150.67154299 | 85.42054400 |
| Offline unauthorized-protocol copy | 13,040,235.09208699 | 5.00000000 |

The valid snapshot also has 240 SAL1 of locked stake principal counted separately.
These are ledger/report counts, not the output of a working wallet `audit` command.

The saved public-chain evidence identifies two bad originating outputs at block
465074, totaling 40,000,000 SAL1. That is origin value, not today's unspent bad
balance. Current global good/bad balances remain unknown; the 79,065 ring
candidates are unresolved, not proven bad descendants. Carrot-only scope does
not remove ring ambiguity.

## Other branch and operational checks

The squashed branch also changes three submodule pins and removes the opt-in
guard for allocating a full RandomX dataset. These changes predate the final
wallet restrictions and are not validated by the wallet acceptance tests. Their
purpose and memory impact need separate review; no changes to those pins or
the production process were made during this re-evaluation.

The normal `my-complete` executables and isolated audit executables have separate
directories. This review runs existing audit binaries against temporary data
and separate loopback ports. Future builds must continue to use
`make release-static builddir=build/audit topdir=../../..`; rebuilding is not
needed for this documentation-only review.

## Required replacement acceptance criteria

The corrected implementation must start with the real wallet command and shared
wallet API, and test that path before treating forensic reports as evidence of
completion. Native submission must work through a normal node, support multiple
owners and restarts, and return an explicit enrollment/status result.

Proof construction must stay in the wallet and avoid publishing its reusable
viewing secret. Define the Carrot SAL1 origin rules around the previous completed
audit and legitimate issuance; do not implement old SAL history reconstruction
or simply trust every SAL1 label. Native validation must reject the bad origin
and its proven bad funding paths independently of any optional offline report.

Then exercise good and bad-funded stakes, immature stake enrollment, bad/good
mixed histories, all selected Carrot scopes, wallet restart/rescan, concurrent
owners, node propagation, reorgs, and explicit good/bad/unresolved counts through
the wallet itself. Keep the established large fixture and existing useful
negative controls, but do not substitute their old success labels for these
missing acceptance tests.
