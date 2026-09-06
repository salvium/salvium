# Salchat daemon milestone architecture

This document records the source audit performed before implementing Salchat.
The first milestone is deliberately daemon-only: no wallet state, plaintext,
transactions, mempool entries, blocks, consensus rules, or blockchain database
tables are involved.

## Existing network architecture

- P2P command IDs are declared in
  `src/p2p/p2p_protocol_defs.h` (base 1000) and
  `src/cryptonote_protocol/cryptonote_protocol_defs.h` (base 2000).
  CryptoNote notifications currently use 2001-2004 and 2006-2010. 2005 is a
  historical gap and is not reused.
- Payloads use epee key/value serialization. Notifications are registered with
  `HANDLE_NOTIFY_T2` in `cryptonote_protocol_handler.h`; Levin parses them and
  invokes the handler on the connection worker thread.
- The handshake's optional `basic_node_data.support_flags` field and
  `COMMAND_REQUEST_SUPPORT_FLAGS` provide backward-compatible capability
  negotiation. The only occupied bit is `P2P_SUPPORT_FLAG_FLUFFY_BLOCKS`
  (`0x01`).
- Per-connection flags live in `p2p_connection_context::support_flags` and are
  supplied by `i_p2p_endpoint::for_each_connection`.
- Notifications are serialized into `epee::levin::message_writer` and sent with
  `invoke_notify_to_peer` or `relay_notify_to_list`.
- Command-specific raw payload limits are enforced before full parsing by
  `cryptonote_connection_context::get_max_bytes`.
- Existing object duplicate handling is specific to blocks/transactions. Salchat
  therefore needs independent message-ID and ciphertext-hash indexes.
- Peer abuse scoring is available through the protocol handler's existing
  connection score/drop helpers. Salchat uses cheap rejection and bounded
  per-peer accounting first so normal sync work is not displaced.

## Selected extension points

- Command ID: `BC_COMMANDS_POOL_BASE + 11` (2011),
  `NOTIFY_SALCHAT_ENVELOPE`. This appends to the occupied range and avoids
  guessing why 2005 was left unused.
- Capability bit: `P2P_SUPPORT_FLAG_SALCHAT_V4` (`0x02`). It does not reinterpret
  the existing fluffy-block bit. It is advertised only when Salchat is enabled,
  so disabled nodes remain wire-equivalent to legacy nodes.
- Envelope serialization: epee key/value fields with fixed-size values encoded
  as POD blobs and ciphertext capped before cache insertion. The connection
  limit is 16 KiB, enforced before deserialization.
- Relay path: handler validation -> bounded in-memory cache -> incremented-hop
  copy -> at most the configured fanout of normal, public-zone peers advertising
  `0x02`, excluding the source connection.
- RPC path: authenticated/local unrestricted daemon JSON-RPC -> protocol handler submit, poll, or acknowledge
  API -> the same validation/cache/relay path. RPC handles opaque envelopes
  only.

## Files

- Protocol definitions and registration:
  `cryptonote_protocol_defs.h`, `cryptonote_protocol_handler.h/.inl`
- Isolated data/validation/cache:
  `salchat_protocol_defs.h`, `salchat_relay.h/.cpp`
- Pre-parse bound:
  `cryptonote_basic/connection_context.cpp`
- Capability advertisement:
  `cryptonote_config.h`, `p2p/net_node.h/.inl`
- Daemon options and opaque RPC:
  `core_rpc_server_commands_defs.h`, `core_rpc_server.h/.cpp`
- Tests: `tests/unit_tests/salchat.cpp`

## Thread safety and resource isolation

Levin handlers can run concurrently. Cache indexes, counters, and peer rate
state are protected by short-held mutexes; serialization, hashing, and envelope
signature verification happen outside the cache lock. No handler decrypts,
touches the core/blockchain locks, or writes disk. Cache and rate limits are
hard bounds. Relay selection and sending occur after releasing the cache mutex.

## Compatibility and consensus boundary

Legacy peers omit the new bit and never receive Salchat notifications. Unknown
notification behavior is therefore irrelevant during normal mixed-version
operation. A peer without the bit is not penalized or disconnected. The feature
is enabled by default and can be disabled with `salchat-enabled=0`. Salchat state is owned by the protocol handler and is
memory-only; restart loses it. No Salchat type is referenced from transaction,
block, mempool, consensus, staking, or blockchain database code.

Routing tags are domain-separated by Salvium network type, preventing a valid
envelope from being replayed between mainnet, testnet, and stagenet. Tags and
network timing remain observable metadata within their network. The daemon
cache is best-effort relay storage, not guaranteed offline delivery.

Envelope deletion requires a random 256-bit acknowledgement capability. Only
its domain-separated hash is visible in the signed envelope; the capability is
inside the recipient-authenticated ciphertext. A public message ID or routing
tag is therefore insufficient to remove another wallet's queued envelope.

The V2 sender signature is a message-bound two-generator Schnorr proof over the
main Carrot spend public key (`K_s = k_generate_image G + k_prove_spend T`). It
uses Salvium's existing spend-authority proof shape with a Salchat-specific
domain and the immutable envelope hash in the challenge. Relay verification
rejects non-canonical responses, invalid encodings, identity points, and points
outside the main subgroup.
