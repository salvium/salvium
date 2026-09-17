# Salchat wallet integration and RPC

Salchat text messages are encrypted and signed inside the wallet. The daemon
receives only bounded opaque envelopes and relays them outside transactions,
the mempool, blocks, and consensus storage.

This interface is experimental. Use it on an isolated network until the
protocol has received independent cryptographic and network review.

## Process boundary

```text
wallet CLI / GUI
        -> wallet core or authenticated salvium-wallet-rpc
        -> salviumd Salchat JSON-RPC
        -> compatible Salvium P2P peers
```

Salchat runs only inside the wallet. The messaging identity is the wallet's
main Carrot identity. Contacts, replay indexes,
pending delivery receipts, and message history are stored with the encrypted
wallet cache. Generic wallet attribute RPC methods cannot read or write the
reserved `salchat.` namespace.

Do not expose wallet RPC or daemon Salchat RPC to the public Internet. Require
wallet-RPC authentication and verified TLS.

A Salchat contact string contains the main Carrot `SC...` address followed by
its independent public encryption key: `SC-address:64-hex-encryption-key`.
The complete contact string and contact IDs are public exchange material;
private spend, incoming-view, and message secret keys never leave the wallet.

## Wallet JSON-RPC methods

All methods use JSON-RPC 2.0 at `/json_rpc` and are denied in restricted or
background-wallet mode.

### Identity and contact methods

- `salchat_get_identity`: returns the wallet's public Carrot-linked identity.
- `salchat_rotate_identity`: generates and persists a new random encryption key
  and returns the replacement public identity. This changes the contact code.
  Back up the wallet file and redistribute the new code. Rotation is always
  allowed. Up to 16 still-valid retired keys are kept for relay-valid waiting
  messages; further rotations during one overlap evict the oldest key.
- `salchat_get_address`: returns the complete importable
  `SC-address:64-hex-encryption-key` contact string.
- `salchat_add_contact`: accepts `label` plus either the complete contact
  string in `address`, or an SC `address` and separate
  `encryption_public_key`.
- `salchat_remove_contact`: accepts `contact_id` and atomically deletes the
  contact, its local message history, and its pending delivery receipts. Bounded
  replay fingerprints remain so previously processed envelopes stay rejected.
- `salchat_block_contact`: accepts `contact_id` and `blocked`.
- `salchat_list_contacts`: returns bounded contact metadata.

The wallet derives its initial dedicated Salchat encryption secret, stores it
in the encrypted wallet cache, and publishes only its public encryption key in
the contact string. Explicit rotation replaces it with a random key stored in
the wallet file; that replacement is not recoverable from the seed alone. The
key is separate from the wallet view key and remains stable across CLI,
wallet-RPC, GUI, and process restarts. Messages remain authenticated to the
contact's Carrot identity. A wallet view key alone cannot decrypt or forge
Salchat messages.
Confirm high-value contacts out of band.

### Message methods

- `salchat_send_message`: accepts `contact_id`, `message`, and optional `ttl`
  (1 through 604,800 seconds, default seven days). Relay and local wallet copies expire at this
  deadline or their signed block-height limit, whichever comes first.
- `salchat_receive_messages`: accepts optional `limit` (1 through 1,000), polls
  bounded current/recent routing tags in batches of at most 100, durably stores
  each valid batch, then acknowledges its daemon envelopes with receiver-only
  capabilities before polling the next batch. Repeated daemon polls also advance
  past unacknowledged batches, so unreadable envelopes do not hold up the queue.
- `salchat_list_messages`: accepts optional `contact_id` and `limit`.
- `salchat_get_message`: accepts `message_id`.
- `salchat_delete_message`: accepts `message_id`.
- `salchat_get_status`: reports identity, local counts, daemon availability,
  and `waiting_messages` matching this wallet. The wallet-RPC process also logs
  one non-secret alert when a previously unseen message is waiting.

Loading SalChat state removes expired local messages and their pending receipts,
then saves the cleaned wallet. This applies to incoming, outgoing and quarantined
messages even without a daemon connection. Older saved messages without a requested
expiry use seven days from their original creation time, or their saved block-height
limit if reached first. Contacts and replay markers are preserved. Expired messages
are omitted from lists and counts, and `salchat_get_message` returns `found: false`.

Message state numeric values are:

```text
1 submitted
2 received
3 quarantined
4 failed
5 delivered
```

Known, unblocked senders receive an encrypted delivery receipt after their
message is durably stored. Failed receipt submissions remain in a bounded
encrypted retry queue. Unknown senders are quarantined and do not receive a
receipt. Blocked senders are rejected.

Example send request:

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "salchat_send_message",
  "params": {
    "contact_id": "64 lowercase hex characters",
    "message": "Testing native Salchat",
    "ttl": 3600
  }
}
```

## Current limitations

- Daemon envelope caches remain memory-only and are not synchronized after a
  daemon reconnects.
- Routing tags are deterministically derived from the public Salchat encryption key,
  epoch, and Salvium network type. Anyone who already knows an SC address can
  recognize its hourly tags on that network, and sender signing keys plus
  network timing remain linkable metadata.
- View-only and hardware-backed wallets without locally available spend-signing
  support cannot originate Salchat messages in this stage.
- Delivery receipts prove that a compatible recipient wallet decrypted and
  stored an envelope; they do not prove that a human read the text.
- There is no group chat, file transfer, payment request, or durable daemon
  spool in this stage.
