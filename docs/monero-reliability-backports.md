# Monero reliability backports for Salvium

This port adapts 21 open Monero PRs and 17 merged fixes reviewed on 2026-09-04. It preserves Salvium transaction formats, hard-fork schedule, proof-of-work, asset accounting, staking, returns, and Carrot ownership rules.

## Sources

| Upstream | Author | Change |
|---|---|---|
| [#11244](https://github.com/monero-project/monero/pull/11244) (`060884a20a74ab0ee8812d4f6b5f3005e56eb69d`) | Ap4sh | wallet2: validate scan_tx daemon responses |
| [#11237](https://github.com/monero-project/monero/pull/11237) (`ce3284432918d65d927d9afc9994aeb6385e887e`) | Ap4sh | crypto: handle unaligned Keccak output |
| [#11202](https://github.com/monero-project/monero/pull/11202) (`722de8ed3d3626cd44744297d07d63c49f70f158`) | Ap4sh | crypto: handle unaligned Groestl input |
| [#11204](https://github.com/monero-project/monero/pull/11204) (`b697a724b9586eef8ef1df880ac7c28042f9a4a0`) | selsta | lmdb: retain percentage fallback for batch resizing |
| [#10606](https://github.com/monero-project/monero/pull/10606) (`6292acd86d99dd60b78522b3e422f9437415727c`) | thomasbuilds | db_lmdb: fix uninit read in get_tx_amount_output_indices |
| [#11245](https://github.com/monero-project/monero/pull/11245) (`c85ec4b9b43512ffa67165bad4da4dd048b87f7c`) | jpk68 | daemon: don't ignore dnssec validation result in start_mining |
| [#11144](https://github.com/monero-project/monero/pull/11144) (`02411bede08fee21203de6c221f24779baad1090`) | selsta | protocol: flush rejected block spans from disconnected peers |
| [#11207](https://github.com/monero-project/monero/pull/11207) (`1f58e91d60f43d9e403d19528f0d0ddeb2463877`) | pucedoteth | epee, common: pass unsigned char to <cctype> functions |
| [#10417](https://github.com/monero-project/monero/pull/10417) (`168c239b4694ed3380ab80a85143b27f977e0d97`) | selsta | epee: add http bin limit |
| [#9917](https://github.com/monero-project/monero/pull/9917) (`1e32ef29c93610bd7981dc6cf5f09a09a430c5c6`) | jeffro256 | threadpool: fix simple form of starvation |
| [#11181](https://github.com/monero-project/monero/pull/11181) (`11f6173d3e8f7196cad9c52fe7f8b15ac8536d37`) | jpk68 | wallet2: bound total vout allocation in import_outputs |
| [#11240](https://github.com/monero-project/monero/pull/11240) (`319c1f77956024b9c97168a598f68916ec17ac34`) | selsta | trezor: check additional tx key index bounds when signing |
| [#11068](https://github.com/monero-project/monero/pull/11068) (`da004d6ada091fed994677337e8f15a2cddda3fd`) | Ap4sh | blockchain_db: resume interrupted pruning |
| [#10847](https://github.com/monero-project/monero/pull/10847) (`51f6a81ac329e8b7698f47ed5a36908617da7c80`) | Ap4sh | daemon: load config from explicit data dir |
| [#11006](https://github.com/monero-project/monero/pull/11006) (`967aa9f7e3eee4e96b3828a6def63e525bbcf605`) | selsta | cryptonote_protocol: prevent overlapping block sync spans |
| [#11213](https://github.com/monero-project/monero/pull/11213) (`ba3884e467b8fcc2fb2f894bf5247c1c6e62c38c`) | munzzyy | wallet2: exclude outputs from an unconfirmed send in reserve proofs |
| [#11228](https://github.com/monero-project/monero/pull/11228) (`a2f6bc85039e0ed9938000a4c56cbb5549f1f8a5`) | selsta | wallet2: fix reserve proof verification with multiple tx pubkeys |
| [#11224](https://github.com/monero-project/monero/pull/11224) (`a7260e79da422fd627a417f7d8e1eb8b412263cc`) | selsta | epee: prevent log injection from malformed HTTP headers |
| [#11209](https://github.com/monero-project/monero/pull/11209) (`e96e9e66ff18dadd536aae167a257efce01a0128`) | Ap4sh | simplewallet: quote notes in transfer exports |
| [#11177](https://github.com/monero-project/monero/pull/11177) (`8866cf92cc8e114b7ad0deffe719dee75fa8923f`) | Ap4sh | cryptonote_core: validate block sync size |
| [#11178](https://github.com/monero-project/monero/pull/11178) (`772d856605330aab2bf9c2ce83ca4e454920b16c`) | jpk68 | blockchain_utilities: fix memory safety bugs |
| [d9236332a](https://github.com/monero-project/monero/commit/d9236332a59bb090b0fa74e808237c26189564b0) | Thomas | wallet2: fix data races in refresh error handlers |
| [3a0df2b80](https://github.com/monero-project/monero/commit/3a0df2b80b1dadcfd1a0115bd4667c6fb73b5d33) | plowsof | wallet_api: set m_password in the recovery creation paths |
| [a34ed83e7](https://github.com/monero-project/monero/commit/a34ed83e7290198c5e54e71d6592aef55fa47eae) | selsta | lmdb: refine batch size estimation |
| [7507aed69](https://github.com/monero-project/monero/commit/7507aed69f4753767711d52747a02e6860b01297) | selsta | wallet2: guard gamma picker against zero-output windows |
| [77acf1f9d](https://github.com/monero-project/monero/commit/77acf1f9d3c3be732e1ccffa49525b54c5af0bc8) | jeffro256 | tx_pool: fix write abort and improve locking for relayable txs |
| [57068111a](https://github.com/monero-project/monero/commit/57068111aa0dd1e6816d598d1fedb21e2f8cf6c6) | selsta | p2p: use connection state to detect duplicate handshakes |
| [635a558a3](https://github.com/monero-project/monero/commit/635a558a3f27f0c4098936da033fa687d5220cfe) | selsta | device_trezor: validate bridge response size before parsing |
| [f9f6471b1](https://github.com/monero-project/monero/commit/f9f6471b1ed431d638e40c60601bc61aa16f1092) | selsta | simplewallet: validate get_outs response size |
| [aa9491451](https://github.com/monero-project/monero/commit/aa9491451b26812228f8d0360d41027961197841) | questfever | epee: fix hex separator handling |
| [f7d27f05d](https://github.com/monero-project/monero/commit/f7d27f05dd34808252da23bc23ee341ecd4c9505) | Samy | wallet: encode equals signs in URIs |
| [f98077b7a](https://github.com/monero-project/monero/commit/f98077b7ad673cd7039892a1608b99e983b35610) | selsta | wallet: fix split transaction change address display |
| [fbd80b3ca](https://github.com/monero-project/monero/commit/fbd80b3caba677bca3e5176122d45f758dc6ce18) | woodser | wallet2: return concrete low priority when adjust_priority fails |
| [735e535ad](https://github.com/monero-project/monero/commit/735e535adf2c3d7d4c159478747c144e2aea6a69) | selsta | wallet_api: reject transaction file signing with hardware wallets |
| [18269ab57](https://github.com/monero-project/monero/commit/18269ab571f1664eaa05640ae6eaae191de4e03d) | selsta | txpool: fix time_in_pool age calculation |
| [dfb85dde0](https://github.com/monero-project/monero/commit/dfb85dde03650430fa77541af17831f4bb9c5a2c) | selsta | rpc: hide ZMQ request contents in restricted mode |
| [1b82d32a2](https://github.com/monero-project/monero/commit/1b82d32a2f18efde834531a1be28b0f711a495e6) | selsta | epee: prevent JSON parser log injection |
| [b4c8385fd](https://github.com/monero-project/monero/commit/b4c8385fd382f14419e54c6f1c3800a1642360fd) | selsta | rpc: redact txpool age in restricted mode |

## Salvium adaptations

- Daemon response tests construct Salvium miner transactions and exercise both accepted and substituted responses through a mock HTTP client.
- Reserve selection retains SAL1 filtering, excludes pending spends, and computes the minimum from selected outputs with overflow protection. Verification retains Salvium proof versions and V3 asset checks while trying all primary transaction public keys. This does not add legacy reserve-proof support for Carrot outputs.
- The output-import allocation budget is checked before any wallet transfer is resized or modified. Existing per-output bounds remain in force.
- Threadpool tests use a single-worker queue to demonstrate completion without executing unrelated work; they do not rely on timing or an unbounded producer.
- HTTP/JSON diagnostics retain existing Salvium parser hardening while suppressing raw remote input; valid JSON escaping remains supported.
- URI tests use the salvium: scheme. Split-transaction display continues using Salvium transaction data.
- Block-sync size is validated against the existing wire request limit. Existing queue memory limits and Salvium synchronization logic remain.
- Pruning progress is recorded with committed deletions, resumed on manual and automatic pruning, and removed on successful completion. The regression test simulates interruption after a committed checkpoint and reopening the database.
- Restricted RPC retains endpoints and fee/weight information, but does not expose transaction arrival age or log full ZMQ request bodies.
- Explicit --data-dir prefers its salvium.conf when present; explicit --config-file takes precedence.
- Boundary testing found that the binary reader incorrectly required two bytes per empty string. Correct its minimum to the one-byte length encoding while retaining the HTTP allocation budget.
- Runtime backlog testing exposed invalid JSON control-byte escaping. Escape all bytes below 0x20 using valid JSON sequences, preserving UTF-8 and the existing packed backlog representation. A round-trip test covers every control byte.
- Recovery tests cover both current Carrot seed recovery and legacy key recovery with its matching legacy address; both must retain the supplied password when saved and reopened.

## Scope boundaries

FCMP++, new consensus signature checks, Monero hard-fork/RandomX changes, and replacement Carrot implementations are not part of this maintenance port. Larger wallet shutdown/store coordination and signature-detail UI work require their own integration and concurrency/GUI tests. Existing DNS pointer initialization already covers #11246.

## Validation

Validation commands and results are recorded in build/monero-upstream-review/integration-report.md. Both release-static builds must be tested, and the GUI core pin must match the final core commit. Hardware transport fixes require device-specific testing in addition to host compilation; host tests alone do not establish hardware compatibility.

## Dependency refresh

Direct core and GUI dependency pins were checked against upstream on 2026-09-04. Supercop follows its configured `monero` branch; other external dependencies follow upstream HEAD. RapidJSON’s nested, unused GoogleTest dependency follows RapidJSON’s upstream pin.

- `external/miniupnp`: [`5afea3ccbefa`](https://github.com/miniupnp/miniupnp/commit/5afea3ccbefa8c2ea42d47c7f0595c04afa0bfa1).
- `external/mx25519`: [`1f296a947c07`](https://github.com/tevador/mx25519/commit/1f296a947c07c7851f7fa381690216bccb95051e).
- `external/randomx`: [`7c761cf007c7`](https://github.com/tevador/RandomX/commit/7c761cf007c758056dcb6eb438a32f780f81bdbd).
- `external/rapidjson`: [`24b5e7a8b27f`](https://github.com/Tencent/rapidjson/commit/24b5e7a8b27f42fa16b96fc70aade9106cf7102f).
- `external/supercop`: [`e887b2fb4bfc`](https://github.com/monero-project/supercop/commit/e887b2fb4bfcfcc454b2005472ad1df6f2191f52).
- `external/trezor-common`: [`2a43294f1504`](https://github.com/trezor/trezor-common/commit/2a43294f150455000ecf27d606fb9c50a6d36ffb).
- `../salvium-gui/external/quirc`: [`927d680904dc`](https://github.com/dlbeer/quirc/commit/927d680904dc95fdff4cd9d022eb374b438ff8f2).

The new mx25519 API always operates on unclamped 255-bit scalars. All Salvium production callers already requested fully unclamped operation; their scalar semantics remain unchanged. The small-order test explicitly preserves the old clamped API behavior. The RandomX update fixes JIT instruction sizing in its V2 path; Salvium’s version selection and PoW settings remain unchanged.

## Additional Salvium security and recovery work

The subsequent requested review extends the maintenance port without adding a consensus or proof format:

- JSON client/server parsing shares the binary RPC allocation budget for objects, fields, and strings. Recursive and duplicate fields consume the same budget. Incomplete objects and trailing data are rejected; replies must echo the requested JSON-RPC version and string ID. Remote error text is escaped before logging.
- Reserve proofs reject malformed additional-key counts before indexing and explicitly reject unsupported Carrot output proofs. The fallback ephemeral-key accessor checks its index. Tests cover SAL/SAL1/token filtering, frozen and pending outputs, account scoping, overflow, malformed keys, and Carrot rejection.
- Subaddress lookahead uses non-underflowing bounds for accounts with no existing minor addresses.
- Both current and legacy output imports validate a staged batch before publishing transfers or key indexes. Validation uses the declared subaddress without inserting unverified addresses into the wallet. Replaced/truncated output references are cleaned up.
- Cache writes use the checked, flushed writer on Linux as well as Windows. Tests reject symlink/hard-link staging paths without modifying their targets. Wallet moves retain source keys and restore the active filename if destination cache writing fails. Serializing the cache before the checked write uses an additional temporary memory buffer.
- Recovery tests cover a partial staging file, write failure/retry, wallet move failure, and terminating/reopening background-sync wallet-RPC processes in both password modes.
- New fuzz targets exercise bounded JSON/binary parsing, arbitrary-byte JSON round trips, and the current output-import format, including rejection without wallet-state mutation. The legacy import fuzzer remains available.
- Trezor generation includes upstream options.proto and creates its output directory. CMake honors the mandatory-support option and reports the actual generator error. Missing transitive Boost type-trait dependencies use standard C++ traits. Generated messages are ignored build output. A Boost serialization-version comparison is explicit for Clang compatibility.

Validation details, sanitizer results, remaining limitations, and final revisions are in build/update.md. Successful host compilation does not establish device-firmware compatibility, and bounded fuzzing is not an exhaustive security audit.

## Bodyless HTTP RPC regression (2026-09-05)

The strict end-of-object check added in `934cadae9` exposed a compatibility
dependency: miners send bodyless `GET /getheight` requests, and the HTTP RPC
dispatcher previously relied on the JSON parser accepting empty input. Normalize
an empty body to `{}` in the plain HTTP RPC dispatcher before loading request
fields. JSON-RPC envelopes, nonempty malformed JSON, and allocation limits retain
their existing validation.

The `rpc_limits` functional test now covers bodyless GET/POST height and info
aliases, explicit empty objects, request defaults, malformed-body rejection, and
alternating miner height/template requests. Separately, connection debug logging
uses the nonthrowing local-endpoint query so an already closed socket cannot
produce an accept-handler exception just from logging.
