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

A main Carrot `SC...` address is the Salchat identity and is all that is needed to create a contact.
Addresses and contact IDs are public exchange material; private spend and
incoming-view keys never leave the wallet.

## Wallet JSON-RPC methods

All methods use JSON-RPC 2.0 at `/json_rpc` and are denied in restricted or
background-wallet mode.

### Identity and contact methods

- `salchat_get_identity`: returns the wallet's public Carrot-linked identity.
- `salchat_get_address`: returns the wallet's main Carrot `SC...` address.
- `salchat_add_contact`: accepts `label` and a main Carrot `address`.
- `salchat_remove_contact`: accepts `contact_id`.
- `salchat_block_contact`: accepts `contact_id` and `blocked`.
- `salchat_list_contacts`: returns bounded contact metadata.

Every contact derives its routing and encryption key directly from the main
Carrot address. Messages carry a message-bound proof of both Carrot spend
secrets for `K_s = k_generate_image G + k_prove_spend T` and are encrypted to
the incoming-view key. This follows Salvium's two-generator spend-authority
model while keeping message decryption separate. A view-only wallet can decrypt
but cannot impersonate the address.
Confirm high-value contacts out of band.

### Message methods

- `salchat_send_message`: accepts `contact_id`, `message`, and optional `ttl`
  (1 through 86,400 seconds).
- `salchat_receive_messages`: accepts optional `limit` (1 through 1,000), polls
  bounded current/recent routing tags, durably stores valid messages, then
  acknowledges their daemon envelopes with receiver-only capabilities.
- `salchat_list_messages`: accepts optional `contact_id` and `limit`.
- `salchat_get_message`: accepts `message_id`.
- `salchat_delete_message`: accepts `message_id`.
- `salchat_get_status`: reports identity, local counts, and daemon availability.

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
- Routing tags are deterministically derived from the public Carrot view key,
  epoch, and Salvium network type. Anyone who already knows an SC address can
  recognize its hourly tags on that network, and sender signing keys plus
  network timing remain linkable metadata.
- View-only and hardware-backed wallets without locally available spend-signing
  support cannot originate Salchat messages in this stage.
- Delivery receipts prove that a compatible recipient wallet decrypted and
  stored an envelope; they do not prove that a human read the text.
- There is no group chat, file transfer, payment request, or durable daemon
  spool in this stage.

## Isolated end-to-end test

The repository includes a disposable integration harness that starts three
loopback-only testnet daemons with `--no-sync`, creates two temporary wallets,
and starts two authenticated TLS wallet-RPC instances. It does not use or
modify production wallets, daemon data, or service ports.

```bash
python3 utils/salchat_two_wallet_test.py
```

The harness verifies SC-address contact creation, encrypted Alice-to-Bob text
relay across `A -> B -> C`, encrypted delivery-receipt return, the wallet
client's status/message output, wallet-state persistence across clean
wallet-RPC restarts, unchanged blockchain heights, and unchanged mempools. All
temporary wallet keys and node data are removed on exit unless `--keep-data`
is explicitly supplied.
