# SalChat

SalChat is an experimental, off-chain, end-to-end encrypted messaging layer for Salvium. It uses the existing Salvium peer-to-peer connections for transport, but it is separate from transaction relay: sending a message does not create a transaction, enter the mempool, pay a fee, or write message content to the blockchain.

## How delivery works

The sender encrypts a signed envelope for a contact and submits it to a SalChat-enabled daemon. The daemon validates and temporarily caches the opaque envelope, then forwards it to a limited fan-out of compatible peers. Relays do not route to a wallet address. Instead, each envelope contains an opaque recipient tag derived from the recipient's SalChat encryption public key, network, and time epoch. The recipient wallet polls its daemon for the tags it can recognize, decrypts matching envelopes locally, stores accepted messages in its encrypted wallet state, and acknowledges them. A valid acknowledgement removes the relay copy.

Relaying defaults to three peers and no more than eight hops. SalChat is enabled by default on daemons. Set `salchat-enabled=0` in the daemon configuration (or pass `--salchat-enabled=0`) to turn it off.

## Identity and keys

A SalChat public identity contains:

- the main Carrot Salvium address;
- the Carrot spend public key, also used as the message-signing identity; and
- a dedicated SalChat X25519 encryption public key.

The initial private SalChat message key is deterministically recovered from wallet master seed material using domain-separated hash-to-scalar derivation:

```text
msg_sk = Hs("SalChat-msg-v4" || seed)
```

`Hs` maps the domain label and seed to a valid scalar. Domain separation prevents reuse of the wallet's spend, view, or other protocol keys. The corresponding public key is exchanged with the Carrot address when adding a contact.

The private view key is not used for SalChat encryption. A view-only wallet or a party given the private view key cannot derive `msg_sk` and cannot decrypt captured SalChat v4 envelopes. The wallet master seed or derived private message key must still be protected: compromise of either can decrypt recorded messages addressed to that identity. SalChat uses a fresh ephemeral X25519 key for every envelope and XChaCha20-Poly1305 authenticated encryption, but it does not currently implement a Double Ratchet; compromise of the long-term message key can therefore expose recorded messages.

An unlocked wallet can explicitly replace its encryption key with `salchat identity generate`. The replacement is generated randomly and stored only in the encrypted wallet file, so the wallet file must be backed up after rotation; restoring the seed alone recovers the original deterministic key, not a later replacement. The public contact code changes and must be redistributed. Rotation is always allowed. The wallet keeps up to 16 still-valid retired keys for the complete time-and-block relay overlap so already-waiting messages remain decryptable; rotating more than 16 times during one overlap evicts the oldest key and may make messages addressed to that oldest code unreadable.

The sender signs the complete immutable envelope with Carrot spend authority. The signature binds the sender identity, ciphertext, recipient tag, keys, creation and expiration data, acknowledgement capability, and hop limit. The mutable hop counter is intentionally excluded so relays can increment it. Signing is off-chain and does not spend funds.

## Expiration and deletion

Every envelope has a signed block-height lifetime:

```text
expires_height = created_height + 5040
```

At Salvium's 120-second target, 5,040 blocks represent approximately one week. Envelopes also carry a signed expiration time set by the sender's requested `ttl` (1–604,800 seconds, default one week). Relays reject and prune envelopes when either limit is reached. Wallet RPC and GUI-facing API results expose both `expires_height` and `blocks_left`; the CLI shows `blocks_left` beside each message. These block counts describe the height limit; a shorter requested relay TTL can expire earlier.

The wallet also removes expired incoming, outgoing and quarantined messages whenever SalChat loads its saved state. Cleanup works offline and is saved to the wallet, so expired history does not return after reopening. Older saved messages did not retain the requested time limit; those use seven days from their original send time or their saved block-height limit, whichever comes first. Contacts and replay fingerprints remain in place. The GUI refreshes local history every ten seconds while the chat page is open and idle, even if its daemon is unavailable.

Expiration cannot erase screenshots, exports, backups, logs, or copies kept by another person. Local wallet messages can also be deleted explicitly:

```text
salchat delete <message_number|message_id>
```

Deletion removes the selected message from the local encrypted wallet state. Removing a contact also deletes that contact's local message history and pending delivery receipts. Replay fingerprints remain so already-processed relay envelopes cannot recreate deleted messages. Neither operation remotely deletes another wallet's copy.

## Metadata and privacy limits

Relays cannot decrypt message content or derive the recipient's wallet address from the opaque recipient tag. They can see the envelope size, timing, expiration height, hop information, recipient tag, message ID, ephemeral public key, and sender signing public key. A daemon directly contacted over RPC can see the client's source IP. P2P relays normally see the immediately preceding peer's IP, not necessarily the original sender's.

SalChat is not an anonymity network. Timing, repeated polling, public signing keys, and network observation can permit correlation. Use Tor or another appropriate network privacy layer when source-IP privacy is required.

## Spam and denial-of-service controls

Free messaging does not mean unlimited node resources. The relay enforces:

- valid Carrot spend-authority signatures before admission;
- 16 KiB maximum wire envelopes and 12 KiB maximum ciphertext;
- per-source and global packet/byte token buckets;
- duplicate message-ID and ciphertext suppression;
- a default 10,000-message and 64 MiB cache ceiling;
- 64 cached envelopes per recipient tag and eight per sender/recipient pair;
- bounded peer fan-out, hop count, poll tags, and poll response size; and
- block-height expiration, acknowledgement removal, and oldest-first eviction.

These bounds preserve daemon availability and cap memory/bandwidth use. They do not make a distributed Sybil flood impossible. Operators may reduce cache, bandwidth, fan-out, and packet limits.

## Daemon operation

Start the daemon normally; the SalChat relay is enabled by default:

```text
salviumd
```

To turn the relay off explicitly, set `salchat-enabled=0` in the daemon configuration or start it with `salviumd --salchat-enabled=0`. The only accepted values are `0` and `1`.

Relevant daemon options include:

```text
--salchat-enabled=0|1
--salchat-max-packet-bytes
--salchat-max-cache-bytes
--salchat-max-cache-messages
--salchat-max-ttl
--salchat-relay-fanout
--salchat-max-peer-kbps
--salchat-max-global-kbps
```

Do not expose unrestricted daemon or wallet RPC ports to untrusted networks. Use the normal RPC authentication, bind-address, firewall, and TLS/tunnel protections appropriate to the deployment.

## CLI use

Display the local public identity:

```text
salchat identity show
```

Generate a replacement encryption key after confirming the contact-code and backup warnings:

```text
salchat identity generate
```

Share the displayed main Carrot address and encryption key together. Add a known contact with a combined identity:

```text
salchat contact add <label> <SC_address:encryption_key>
```

Send and receive:

```text
salchat send <contact_number|contact_id|label> "message text"
salchat receive [limit]
salchat messages [contact_number|contact_id|label]
salchat chat <contact_number|contact_id|label>
salchat show <message_number|message_id>
```

Unknown but cryptographically valid senders are quarantined. Review the sender address, signing identity, and encryption key through a trusted channel before accepting:

```text
salchat contact accept <label> <message_number|message_id>
```

Contact management and deletion:

```text
salchat contact list
salchat contact block <contact>
salchat contact unblock <contact>
salchat contact remove <contact>
salchat delete <message_number|message_id>
```

## Wallet RPC and GUI API

The wallet RPC exposes `salchat_get_identity`, `salchat_rotate_identity`, contact management, sending, receiving, message listing/get/delete, and status methods. `salchat_add_contact` accepts `label`, `address`, and `encryption_public_key`. Message responses include `expires_height` and `blocks_left`.

The GUI-facing wallet API provides the same identity, contact, send/receive, listing, status, and deletion operations. `SalchatMessage` includes `expiresHeight` and `blocksLeft`. Applications should display block expiry as approximate time because actual block production varies.

## Compatibility

SalChat v4 is the first production SalChat wire protocol. It does not change Salvium consensus, transaction relay, wallet addresses, or the ordinary P2P protocol. Existing v1.1.3c daemons and wallets continue to sync, transact, and peer normally while operators upgrade. They do not advertise the optional SalChat capability, so SalChat traffic is sent only between upgraded, SalChat-enabled daemons. An upgraded wallet connected to a v1.1.3c daemon retains normal wallet functionality and reports the SalChat relay as unavailable until it connects to an upgraded daemon.

## Security summary

- Message contents are end-to-end encrypted and never placed on-chain.
- The private view key alone cannot decrypt SalChat v4 messages.
- The wallet seed, encrypted wallet file, and current or retired message secrets can decrypt their corresponding recorded incoming envelopes and must remain secret.
- Relay metadata and source-IP exposure remain possible.
- Expiration and local deletion cannot destroy copies outside the user's control.
- SalChat remains experimental and should receive independent cryptographic and protocol review before high-risk use.
