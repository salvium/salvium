# Contributing to Salvium

Salvium is consensus software. Changes that look small can affect wallet
balances, block validity, privacy assumptions, RPC compatibility, or release
reproducibility. Keep patches narrow, explain the behavior change, and include
tests when the change touches consensus, wallet accounting, serialization, RPC,
or release tooling.

## Reporting Issues

When reporting a bug, include:

- Salvium version and commit hash.
- Network: mainnet, testnet, stagenet, or fakechain/regtest.
- Operating system and build type.
- Exact command line or RPC request.
- Relevant log lines with secrets, seeds, private keys, and auth tokens removed.
- Whether the issue reproduces on a clean data directory.

Security issues should not be opened as public issues. Send security-sensitive
reports to the project maintainers through the published Salvium security
contact before sharing exploit details publicly.

## Patch Scope

Prefer one logical change per pull request. Avoid unrelated whitespace,
renames, formatting churn, or opportunistic refactors. If a behavior change
requires a refactor, keep the refactor mechanical and explain why it is needed.

Good pull requests usually include:

- A concise problem statement.
- A short implementation summary.
- Tests or a clear explanation for why tests are not practical.
- Notes for operators, wallets, pools, or exchanges if public behavior changes.

## Consensus and Wallet Changes

Consensus, wallet balance, transaction construction, serialization, and
database changes need extra care. For these changes:

- Add or update unit tests and, when practical, core or functional tests.
- Cover hard-fork boundary behavior.
- Document new RPC fields, transaction fields, or accounting rules.
- State whether existing nodes, wallets, pools, or exchanges need to upgrade.
- Avoid changing serialized formats without an explicit migration or hard-fork
  plan.

## Build and Test Expectations

At minimum, local patches should compile and pass the focused tests that match
the change. Useful commands include:

```bash
make debug
make debug-test
ctest --test-dir build/debug --output-on-failure -R unit_tests
python3 -m py_compile utils/protocol_invariants.py
```

Long-running tests are not always practical for every patch, but release
branches should run unit tests, selected core tests, functional RPC tests, and
the release checklist in `docs/RELEASE_CHECKLIST.md`.

## Commit Style

Use clear commit subjects that describe the changed behavior. Keep commits
reviewable. Squash fixup commits before asking for final review unless the
intermediate commits are intentionally useful.

## Documentation

Update documentation when a patch changes:

- Command-line options.
- RPC request or response fields.
- Transaction type behavior.
- Wallet commands or user-visible output.
- Build, release, Docker, or deployment steps.

Inherited Monero documentation should be corrected when it is touched. Do not
leave newly edited Salvium docs pointing contributors to Monero-specific
maintainers, releases, wallets, or infrastructure unless the reference is
intentionally historical or upstream-specific.
