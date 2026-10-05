# Recovery audit: known issue coverage

> **Historical prototype record (superseded).** The enrollment, freezing,
> blacklist and C + 10 behavior described below belongs to the withdrawn v2
> quarantine design. Current policy isolates only a confirmed malformed origin;
> every descendant (including proven exchange flow) is report-only and requires
> human review. Public ownership proofs and consensus lineage enforcement are
> disabled. See `audit.md` for the current policy.

Scope: SAL1 and token outputs in legacy and Carrot formats from block 154750 through
558799. The chain through 154749 supplies context. Canonical SAL-to-SAL1
conversion payouts from both completed audits are accepted good origins;
their original SAL funding and audit proofs are not reviewed again. Owners
still enroll the SAL1 outputs and wait until C + 10 after clearance.
Coverage includes the requested database, the repository's audit findings, and
chain/funds issues in the upstream issue tracker and release notes, reviewed
on 2026-09-09. This is a test inventory, not a claim
that every possible defect is known or that mainnet deployment is qualified.
Each result must be tied to its source and binary hashes. The activation height
remains zero until the main developer configures and validates a release.

| Issue or failure class | Evidence and checks |
| --- | --- |
| salYAHU creates SAL1 at 465074 | The public transaction fixture matches the requested database. The native test verifies its bad asset origin, checks both actual canonical outputs against the freeze/ring gate, and runs six controlled signed-owner cases: enrolled/absent with the opening before/at/after the origin. |
| Accepted opening bypasses a bad origin | The new regression failed before the fix with a valid ownership proof. Intrinsic cross-asset origin checking now also applies to opening outputs. Mainnet builds reject an opening at/after 465074, keeping later descendants inside the ancestry audit. |
| Accepted SAL-to-SAL1 conversion payout | Identify the actual canonical conversion receipt by its scheduled height, SAL1 amount, output/return keys and historical payout exclusion. Accept its origin without reviewing SAL inputs or old audit proofs, including authorizations after opening 154749. Ownership still requires enrollment and C + 10. Native tests cover both historical rounds, signed/absent owners and malformed or unrelated payouts. |
| Missing owner, withheld ancestor or final-block backlog | Native cutoff/work-queue tests and two isolated wallet rounds. The same owner enrolls in one round and never enrolls in the other. Bad or unresolved historical funds remain frozen beside new valid receipts. |
| Poisoned asset indices and commitment substitutions | Native ancestry now selects the preserved pre-HF13 reference table for old signatures. A real-chain regression compares those mappings with the separately dumped inventory and verifies affected original signatures. Historical poisoned decoys retain their effective commitment for verification; malformed cleartext origins themselves are BAD, tested with signed-owner and absent-owner cases. The canonical-output scan checks the new range against the accepted opening inventory. A possible ring reference is never reported as a proven real spend. |
| Shifted index mistaken for a bad-output origin | A legacy index difference is context for reconstructing signatures. The forensic graph seeds bad origins from malformed serialized transactions, and resolves descendant output identities through canonical amount indices. A shifted rank alone must not produce a blacklist recommendation. |
| Scan boundaries ignored by forensic phases | Every phase honors the inclusive start/end heights. Isolated snapshots test an unchanged range and corruption before, within and after it; only corruption inside the new range is reported as a new finding. |
| Excess miner reserve/emission, unauthorized protocol issuance and duplicate payouts | Full independent monetary/authorization scan, every-block consensus import and rollback checks, damaged snapshot fixtures, bad/good stake wallet tests and full stake-cycle tests. |
| Duplicate key images, duplicate transactions, broken links, missing parents, invalid output indices and integer overflow | Full source-snapshot structural/forensic scan and the native ancestry/work-limit suite. |
| Token registration, repeated issuance, asset-ID collisions, mint/conversion and fee-accounting errors | Full asset-flow scan, including every token-creation record and source/destination asset label. Native issuance tests match unique creation, supply, burn and return metadata. Token enrollment resolves SAL1 registration funding and token transfer ancestry; isolated salYAHU tests exercise freeze, C + 10, per-asset balances/populations, reorg and cutoff. These checks must pass on the final build. |
| Spam aftermath and HF13 repair | Scan canonical records and legacy mapping backups across the migration boundary. Upstream describes the database and scanning problems in [v1.1.3b](https://github.com/salvium/salvium/releases/tag/v1.1.3b). |
| Protocol output ordering when token creation and stakes coincide | Compare serialized protocol outputs with independent issuance/payout authorization during the full monetary scan. This was identified in [v1.1.1b](https://github.com/salvium/salvium/releases/tag/v1.1.1b). |
| Wrong distributed fork height and sync from genesis | Full consensus/PoW replay records exact coverage and the first rejection; hard-fork policy/build guards check the configured schedule. Sources: [v1.1.3a](https://github.com/salvium/salvium/releases/tag/v1.1.3a), [issue 80](https://github.com/salvium/salvium/issues/80). Offline replay does not reproduce public-network peer behavior. |
| Partial spend fails while sweep works; nonsense unspent-output count | The two owner rounds exercise `transfer`, `transfer_split`, and `sweep_all` against the same cleared inventory. `get_balance.num_unspent_outputs` now counts actual unspent records per asset/account/subaddress; compare it with the wallet inventory. Source: [issue 118](https://github.com/salvium/salvium/issues/118). |
| Return payment omits some received outputs | A dedicated test returns fifteen receipts across payments with 7, 7 and 1 recipients, comparing every spent key image, total returned amount and fees, then rejecting duplicate returns. Carrot allows eight total outputs including change, so the legacy report's fifteen-receipt single transaction cannot be constructed in the current format. Source: [issue 13](https://github.com/salvium/salvium/issues/13). |
| Missing subaddress balances after cache rebuild | Wallet discovery/account tests cover bare CLI enrollment across multiple accounts and subaddresses; return tests restore scanning context from an empty cache. Upstream describes lost subaddress coverage in [v1.1.3c](https://github.com/salvium/salvium/releases/tag/v1.1.3c). |
| Increased carrier capacity | Native 512-proof signing/verification and separate-envelope tests; isolated two-block 1,024-proof packing, per-batch confirmation IDs, release, restart and reorg; a 3,151,784-record ancestry graph with sixteen-member rings and 25% withheld owners measures process time and memory. The graph is a controlled state workload, not a full public-chain cryptographic replay. Record final measurements before mainnet qualification. |
| New mining output availability | Isolated mining regression checks the exact 60-block maturity boundary without owner enrollment, then spends the reward. A pre-fork mining output in the same wallet remains frozen. New mining has no audit C + 10 delay. |
| Cold history reconstruction causes an RPC timeout | The public mining-history check took 1,114.75 seconds under a one-CPU limit on the build with startup preparation. A token-wallet restart reproduced an RPC timeout while rebuilding state. Configured nodes now reconstruct audit state during startup before RPC/P2P becomes ready; token restart and pre-fork opening checks pass. Startup time must be included in the release rehearsal. |
| Stake reaches normal maturity before its evidence clears | The good-stake regression with a bounded window holds the payout past maturity, then checks C + 10, the original earning period, normal payout maturity and single payment across rollback/replay. The bad-stake regression crosses both its cutoff and normal maturity without payment. |
| Premature spend, release after cutoff, stale mempool/reorg state, pruning, oversized enrollment, invalid signatures and queue/peer restart | Bounded-window, native, wallet, startup, many-input, return, stake and peer tests. Clearance always belongs to outputs and respects normal maturity. |

The actual salYAHU transaction is
`9353dd3288e20618596085228ea6faf5bf2a9d01cd98c36ea5ceeef2c2d4eb1e`, in block
`46187a3bdd491f26985c2851389d65fd529dabe59ed15ba2abe570c33a45d6e2` at height
465074. Its valid value proof establishes 4,000,000,000,000,000 atomic units
(40,000,000 SAL1) across two incorrectly labeled outputs. At the supplied tip,
their canonical global IDs are 2621581 and 2621582; their SAL1 asset indices are
1797235 and 1797236.

The signed-owner regression rekeys that transaction structure in a controlled
database fixture. It validates authentic output ownership proofs, but does not
pretend to hold the historical owner's keys or to replay the original owner's
wallet. The real-database checks are read-only and use the original public
outputs. The separate wallet rounds use real disposable wallets and a damaged
historical miner-reserve fixture with legitimately signed descendants; the
corruption is not presented as a false mint accepted by current consensus.

The original wallet/state behind issue 118 is not available here. The tests
exercise its reported API pattern on controlled cleared funds and verify the
unspent-output counter fix; they do not establish that every possible cause of
partial-transfer failure has been reproduced or fixed.

A full public-chain scan cannot identify every real ring member, prove current
ownership, or count all confidential unspent bad funds. Missing owner evidence
therefore remains unresolved, and unresolved pre-fork outputs freeze at the
cutoff. A two-week carrier can include at most 5,160,960 output proofs before
other work/byte limits; the main developer must measure the required enrollment
inventory before choosing a schedule.

Build/platform reports, TLS miner connectivity and documentation-link issues
are separate from chain-funds validation. A successful local static build or
offline replay does not certify those unrelated environments or services.
