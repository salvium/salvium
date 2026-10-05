# SAL1 audit fork and release rules

**Superseded prototype reference.** Use [the current wallet handoff](../audit.md)
for the native wallet command, v2 proofs and build instructions. The material
below records the withdrawn prototype; its secret-disclosure format, external
runner and block 650000 schedule are obsolete. See [the historical
re-evaluation](AUDIT_REEVALUATION.md) for the original findings.

HF14 is scheduled at mainnet height **650000**. The developer can change
`activation_height` in `audit-config.json` and run `build_audit_activation.py`.
The builder updates the single policy constant used by both the hard-fork
schedule and the spend gate, builds with `make release-static` in the dedicated
`build/audit/release` directory, and saves the five deployment executables and their hashes.
The height must follow HF13 and the current chain tip. Every validating node
must use the same schedule. No daemon is started by the builder.

## Consensus behavior

Starting with candidate block 650000, every SAL1 input requires an audit record
whose ancestry passed and whose ten-block release delay has elapsed. This
covers transfers, stake funding, stake payouts, burns, and SAL1 rollup funding.
The check runs in transaction admission, block validation, cached pool selection,
and replay, including paths that otherwise skip historical input checks.
Mining continues. Stake payouts due from this height also require verified good
funding ancestry before the protocol creates them. Receiving funds does not make
them spendable. Other assets retain their existing consensus rules.

The audit applies to Carrot SAL1. Pre-Carrot reconstruction and the old
SAL-to-SAL1 migration transaction are separate protocols. Unsupported ancestry
stays locked; it is never converted into an approved mining root. The existing
wallet `audit` command remains the legacy migration command. Use the supplied
runner and publication helper for this fork.

For each disclosed output, nodes independently derive the amount, output key,
and real input key image using the Carrot view-balance secret. Dependencies must
match canonical earlier outputs, their asset, and their precise transaction and
output index. A ring-only candidate is insufficient. A repeated public key
referring to a different canonical output cannot substitute for the real source.
All actual inputs of a joined transaction must resolve.

| State | Spending |
|---|---|
| `INACTIVE` | Existing rules, before the scheduled height. |
| `UNDISCLOSED` | Locked: no canonical disclosure identifies this output. |
| `PENDING` | Locked: at least one required ancestry link is missing. |
| `BAD` | Locked: invalid SAL1 origin or proven bad ancestry. |
| `MATURING` | Locked until completion height C plus 10. |
| `AUDIT_PASSED` | Audit gate passed; ordinary unlock and maturity rules still apply. |

Completion height C is assigned by canonical block processing, with at most
256 queued record evaluations per block. It does not depend on local CPU speed.
The earliest accepted candidate block is C + 10. At tip C + 8, candidate C + 9
is rejected; at tip C + 9, candidate C + 10 can be accepted. There is no timeout
approval. Ordinary output release changes spending eligibility. Stake release
authorizes its one principal-and-yield payout under the rules below.
A new receipt has its own output and needs its own audit disclosure.

The state cache is bound to the canonical tip. Detaching disclosure or completion
blocks resets and reconstructs the state. Mempool eligibility is checked again
against that state. Replaying the same chain reconstructs the same completion
heights without an external clearance file or signer.

## Issuance and stake ancestry

Canonical miner outputs are roots under the chain's existing reward and proof
validation. The offline monetary audit independently reconstructs permitted
miner and treasury issuance. A `PROTOCOL` label alone never supplies a root.

Scanning a Carrot stake's change reconstructs its protocol return key and key
image from `protocol_tx_data.return_address`. The future return record depends
on the stake's actual funding inputs. For a payout originally due at or after
activation, its authorized height is **P = max(S + STAKE_LOCK_PERIOD + 1, C + 10)**.
`UNDISCLOSED`, `PENDING`, and `BAD` stakes authorize no payout. Proven bad ancestry
never clears merely because time passes. Missing evidence can later resolve to
good; the stake then receives one delayed payout. Both block templates and raw
block validation apply this rule.

The principal and yield use the original fixed earning window, S + 1 through
S + STAKE_LOCK_PERIOD. Waiting for evidence earns no additional yield. A late
payout reconstructs this window from canonical history if it has left the rolling
cache. Pending/bad principal leaves the yield-accrual tally at the original end
of the stake period, but is not returned as a spendable output. Withheld rewards
are not redistributed by this change.

The payout key image is bound to the authorized height P and a unique canonical
protocol output. Spending begins no earlier than P + 60. Auditing an immature
stake does not shorten either lock. Reorgs reconstruct authorization, including
delayed payout timing. Payouts already made before activation retain their
historical identity, require good ancestry to spend, and are never paid again.

The offline monetary verifier independently calculates principal and yield from
serialized history, while replaying the public disclosures through the previous
block to determine authorization. It reports that shared authorization mechanism
explicitly; future disclosures cannot authorize earlier payouts.

HF14 explicitly enforces the real input's canonical maturity: 60 blocks for
miner/protocol outputs and the normal minimum age for regular outputs. This
check is necessary because the legacy Carrot output table stores zero for its
per-output unlock field. The test suite caught a raw stake-payout spend that
bypassed the wallet's 60-block lock; the native lineage spend check now rejects
it before maturity. This rule starts at the audit fork and does not rewrite
historical databases.

A returned payment can require the sender's earlier change context. The verifier
reconstructs that context from canonical transactions in the first input ring,
under the same work limits. This supplies scanning context only; the recipient's
real funding input still needs its own proven ancestry.

An actual SAL1 output produced by a transaction whose source asset is not SAL1
is a bad origin, including grandfathered transactions. The salYAHU transfer at
465074 therefore cannot become good simply because historical consensus
accepted it. Its proven aggregate bad issuance is 40,000,000 SAL1. Its separately
funded SAL1 rollup fee is not counted again as an issuance defect.

## Disclosure format and limits

A disclosure is public coinbase extra tag `0x81`. It contains the genesis hash,
network byte, activation epoch, primary Carrot spend and view public keys,
`s_view_balance`, account-0 address count, and sorted unique canonical transaction
hashes. The address keys must agree with the supplied viewing secret. The block
commits the bytes; claimed amounts or claimed input identities are not trusted.

Each block permits one disclosure, at most 2304 payload bytes. A disclosure has
1–64 transaction references and covers 1–4096 account-0 addresses. The scan is
bounded to 256 outputs, 512 inputs, and 1 MiB of canonical transaction bytes,
including return-context work. Extra space is allowed only for the exact
serialized disclosure field at or after activation. Invalid, noncanonical,
wrong-network, wrong-epoch, and conflicting disclosures reject the block.
Transactions too large for a single disclosure remain unsupported and locked.

The scope is finite. It does not assert that every account, address, future
receipt, or separate wallet belonging to an owner has been disclosed.
**Publishing s_view_balance reveals activity under that key permanently,
including future activity.** The disclosure helper publishes only when explicitly
run. The offline audit keeps its files local and needs no seed or spend secret.

## Node and wallet interfaces

`submit_lineage_disclosure` takes `data` as hex on the unrestricted RPC endpoint.
It maintains a one-item queue consumed by ordinary mining templates and returns
a disclosure identifier. Canonically included disclosures are idempotent.
The publisher submits one item, waits for inclusion, then submits the next.
The developer must operate the mining node; publication does not start mining.

`get_lineage_audit_status` accepts `key_images` and `disclosure_ids` (at most 1000
combined) and returns the activation height, candidate height, output states,
completion/release heights, and canonical disclosure inclusion heights.
`get_block_template` also supports an explicit `audit_disclosure` hex field.

Updated wallets exclude unaudited SAL1 from unlocked balances and input selection
at the compiled activation height. Missing or mismatched daemon status fails
closed. Older wallets can construct transactions, but the validating node still
rejects unaudited spending. The wallet display is not the consensus authority.

## Verification and isolated tests

Build with `make release-static builddir=build/audit topdir=../../.. -j4`.
All test daemons use an explicit empty config, offline mode, temporary databases,
loopback addresses, and independent ports. Never start or restart production.
The `--regtest-lineage-audit-height` flag schedules HF14 in isolated fakechain;
the daemon rejects this override outside regtest. The matching wallet override
requires a fakechain daemon. Normal production height changes require a rebuild.

- `audit_gate_regtest.py`: HF13/HF14 boundary, unaudited raw spends, wrong viewing
  secret, forged block disclosure, missing parents, C+9/C+10, conflicting spends,
  new receipts, and reorg/pool/replay behavior.
- `audit_stake_gate_regtest.py`: full 21600-block stake period; timely good,
  unresolved, and undisclosed stakes; delayed approval with original yield;
  raw unauthorized payout rejection; payout reorg/replay; and exact P+59/P+60
  spending boundaries for both timely and delayed returns.
- `tests/unit_tests/lineage_audit.cpp`: 1,000 seeded ancestry paths with both
  good and bad funding, late and early approval, missing dependencies, duplicate
  disclosures, historical payout identity, and the 256-record work bound.
  These are controlled state tests, not cryptographically valid bad-money chains.
- `audit_payout_recovery_regtest.py`: reconstruct a late approval across daemon
  restarts, reproduce its exact payout once, and remove authorization after a
  reorg followed by another restart.
- `audit_complex_gate_regtest.py`: applies HF14 to a copy of the 100-wallet,
  100011-block fixture, publishes all prepared disclosures, checks all declared
  unspent outputs, and leaves twenty late stakes immature.
- `audit_complex_regtest.py`: baseline mining, exchange, transfer, token, staking,
  negative transaction/mint cases, 100 viewing histories, and exact SAL1 totals.
- `audit_snapshot_faults.py`: separate deliberately damaged copies with false
  miner/protocol issuance; they must produce bad-fund findings and separate totals.
- `audit_matrix_regtest.py`: 1,000 distinct seeded disclosure/mining/reorg paths
  over the complete 100,011-block snapshot, with ten invalid-evidence categories,
  exact C+9/C+10 checks, canonical replay, and both partial and full reorgs.
- `audit_return_gate_regtest.py`: a real returned payment remains pending until
  the returning owner's actual ancestry is disclosed, then spends at C+10.
- `audit_replay_regtest.py`: independent full cryptographic import and a
  counterexample bootstrap file with a genuine spend before its audit release.
- `audit_late_stakes_regtest.py`: a separate copy advances all twenty stakes
  that were immature at the large audit through native yield, payout, and
  60-block maturity; each early signed spend must fail before the mature control.

The baseline fixture and the native quarantine tests have separate result files.
A baseline pass alone does not establish that the audit gate passed. The supplied
handoff includes the recorded evidence. Mainnet current global good/bad balances
remain unknown without sufficient disclosures; the 40-million bad-origin amount
is not a claim about today's unspent bad balance.
