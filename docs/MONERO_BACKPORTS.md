# Wallet and synchronization backports

These changes adapt the following upstream work to Salvium's shared CLI, RPC,
and GUI core. They do not change staking balances, transaction wire formats, or
fork activation heights.

| Upstream | Salvium adaptation |
| --- | --- |
| [#11185](https://github.com/monero-project/monero/pull/11185), `429a9145b79b` | Serialize transaction creation, commit, storage, background-sync transitions, and existing SalChat mutations with refresh. Preserve paused refresh and pending requests, reject reentrant mutations, report interrupted refreshes, and retry skipped pool batches from a full snapshot. Include Salvium stake and token creation. |
| [#10940](https://github.com/monero-project/monero/pull/10940), `929a1b7a8a14` | Detect idle TCP/TLS closure before HTTP connection reuse, preserving pending TLS application bytes. Serialize shutdown with Salvium's older SSL client and drain read completion before returning. |
| [#11093](https://github.com/monero-project/monero/pull/11093), `7e0c9913d5a4` | Reconnect before the first ring-member output request; reuse the transaction's selected view-tag setting. Preserve asset-specific output requests and RPC payment accounting. |
| [#11323](https://github.com/monero-project/monero/pull/11323), `b2b8c816ef8b` | Clear both API and core daemon credentials when switching to an unauthenticated node. |
| [#11168](https://github.com/monero-project/monero/pull/11168), `bc870e0b574b` | Remove the unused amount-indexed synchronization scan table. Salvium already validates outputs through asset-indexed database queries, so it does not need Monero's bounded scan cache. |
| [#11235](https://github.com/monero-project/monero/pull/11235), `f8e2a8709d05` | Bound input counts, output counts, and individual/aggregate ring offsets before allocation. Preserve generated miner/protocol payouts and empty-input wallet prefixes. Retain Salvium's token, Carrot, stake, audit, and rollup fields. |

The Tor stream isolation, Polyseed, and FCMP++ follow-up items are excluded.

## Local regression checks

Build through the required release target:

```sh
make release-static -j4 RELEASE_STATIC_TARGETS='unit_tests libwallet_api_tests' \
  release_static_platform_args='-D ARCH=x86-64 -D BUILD_TESTS=ON -D SANITIZE=OFF'
```

The new wallet API tests generate temporary wallets and require no daemon:

```sh
unshare --user --map-root-user --net \
  build/x86_64-linux-gnu/release/tests/libwallet_api_tests/libwallet_api_tests \
  --gtest_filter='WalletRefreshLock.*'
```

Network regressions use ephemeral loopback ports inside an isolated network
namespace. Transaction and wallet regressions use fixtures or a mock RPC client:

```sh
unshare --user --map-root-user --net sh -c '
  ip link set lo up && exec \
    build/x86_64-linux-gnu/release/tests/unit_tests/unit_tests \
    --gtest_filter="blocked_mode_client.*:tls/blocked_mode_client_ssl.*:TransactionLimits.*:Serialization.*:wallet_refresh.*:wallet_balance.*:wallet_storage.*"
'
```

Finish with a normal `make release-static` to build the CLI, wallet RPC server,
and daemon. Build the GUI with the same core sources and run its QML tests.
No production daemon is needed for these checks.
