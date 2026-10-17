# Oracle pricing records

Every v14+ block header carries an optional `pricing_record` signed by the network's oracle.
CONVERT transactions are priced from it, so the oracle is a **liveness** dependency for the
DeFi feature and a **correctness** dependency for conversions - but never a safety dependency
for the chain itself (see *Failure modes*).

Implementation: `src/oracle/pricing_record.{h,cpp}`, fetch loop in
`src/cryptonote_core/blockchain.cpp` (`get_pricing_record`, ~:3449), validation in the same file
(~:5830).

## Wire contract

The daemon `GET`s, for every candidate block, each configured endpoint of `ORACLE_URLS`
(shuffled, 10 s timeout each, TLS auto-detected):

    GET http://oracle.salvium.io:8443/price?height=<height>&sal=<circ_supply_SAL>&vsd=<circ_supply_VSD>

and expects a JSON pricing record:

```json
{"pr_version":1,"height":390,
 "supply":{"sal":2210000016715625,"vsd":0},
 "assets":[{"asset_type":"SAL","spot_price":2301728,"ma_price":2301728},
           {"asset_type":"SAL1","spot_price":1,"ma_price":1}],
 "timestamp":1792198334,"signature":"<hex>"}
```

If every endpoint fails, or the returned record does not verify, the daemon stores an **empty
record** and the block is still valid (`blockchain.cpp:3503`). Consequences in
[CONVERT.md](CONVERT.md#pricing-and-economics): no prices means no conversion can be priced.

Mainnet / testnet / stagenet all point at `oracle.salvium.io:8443` (three identical entries);
`FAKECHAIN` (regtest) points at `127.0.0.1:8443`
(`src/cryptonote_config.h:390`, `:454`, `:502`, `:395`).

## The signed bytes

`pricing_record::build_signing_message()` (`src/oracle/pricing_record.cpp:230-259`) builds the
message with no whitespace and this exact ordering:

    {"pr_version":<n>,"height":<h>,"supply":{"SAL":<sal>,"VSD":<vsd>},
     "assets":[{"asset_type":"<t>","spot_price":<s>,"ma_price":<m>},...],
     "timestamp":<ts>}

Rules:

- the message is built from the *deserialized* record, so integer formatting, asset order and
  the absence of whitespace are all consensus-relevant;
- `height` is inside the signed bytes. For the 289-byte message of block index 385 the height
  digits start at byte offset 15 (`,"height":`); changing that single digit makes both the
  SHA-256 and SHA-1 verification fail (verified with `openssl dgst` against the regenerated
  message and the production key format);
- the `signature` field is *not* part of the message.

## Accepted digests

`verifySignature()` (`src/oracle/pricing_record.cpp:312-343`) accepts a signature that verifies
under **SHA-256 or SHA-1**, with the same pinned public key and the same exact message bytes; both
must fail for the record to be rejected (`ERR_clear_error()` between attempts).

Why: the reference oracle (`oracle_service.py`) signs SHA-256, but the mainnet key is DSA
(see below) and OpenSSL's DSA default digest historically is SHA-1. A verifier restricted to
SHA-256 silently discards *every* record from such an oracle, degrading the whole network to
empty records and stopping CONVERT. The fallback is covered by golden-vector unit tests
(`pricing_record.dsa_golden_vectors`, see [TESTING.md](TESTING.md)).

Do not add further digests without a consensus decision: the set of accepted digests is part of
the consensus rules.

## Keys per network

| network | key type | where |
|---|---|---|
| mainnet | **DSA-2048 / q-224** (`dsaEncryption`, OID 1.2.840.10040.4.1, 840-byte DER) | `ORACLE_PUBLIC_KEY`, `src/cryptonote_config.h:391` |
| testnet | EC P-256 | `testnet::ORACLE_PUBLIC_KEY`, `:455` |
| stagenet | EC P-256 | `stagenet::ORACLE_PUBLIC_KEY`, `:503` |
| regtest (`FAKECHAIN`) | EC P-256 | `config::FAKECHAIN_ORACLE_PUBLIC_KEY`, `:386` |

The public key is a **consensus constant**: rotating it requires a hard fork. Treat the mainnet
DSA key as long-lived and store the private key in an HSM / offline signer.

The daemon never holds a private key: `pricing_record::sign()` exists for tests and the offline
oracle only, and there is no code path that signs a record inside the daemon.

## Acceptance rules (`valid_with_binding_height`, `src/oracle/pricing_record.cpp:373`)

1. `hf_version < HF_VERSION_SLIPPAGE_YIELD` (14): the record must be `empty()`, otherwise the
   block is invalid. Pre-v14 blocks therefore cannot be affected.
2. `empty()`: accepted - a record is optional per block.
3. Signature: must verify under one of the accepted digests with the network key.
4. **Height binding**: if `hf_version >= HF_VERSION_ENABLE_ORACLE` **and**
   `bl_height >= PRICING_RECORD_HEIGHT_BINDING_HEIGHT`, then `record.height` must equal the
   block height. This is what makes a record single-use: without it a freshly signed record can
   be replayed into any later block that is still inside the timestamp window.
5. `record.timestamp` must not be more than `PRICING_RECORD_VALID_TIME_DIFF_FROM_BLOCK` beyond
   the block timestamp.
6. `record.timestamp` must be strictly greater than the parent block's timestamp, so the oracle
   must publish `timestamp = max(now, previous_block_timestamp + 1)`. Two blocks in the same
   second otherwise cannot both carry a valid record.

One more rule lives in the caller, not in `valid()`: the record must be signed for the height
the template is being built for (`get_pricing_record(..., request_height)`,
`blockchain.cpp:2370`), including on alternative chains.

### Activation height

`PRICING_RECORD_HEIGHT_BINDING_HEIGHT` (`src/cryptonote_config.h`) is per network: `config`
(mainnet), `testnet`, `stagenet`, and `FAKECHAIN_PRICING_RECORD_HEIGHT_BINDING_HEIGHT` for
regtest. Semantics: `0` = binding applies to every block subject to v14; a non-zero value =
binding starts at that height. Raise it above pre-existing v14 blocks on chains that already
contain records with mismatched heights (such blocks otherwise fail when a reorg re-adds them -
see [ACTIVATION.md](ACTIVATION.md#rollback)).

## Failure modes

| Symptom | Cause | Effect | Action |
|---|---|---|---|
| all records empty | oracle unreachable / wrong URL | conversions impossible, chain advances | restore service; no chain action |
| all records empty | oracle key ≠ consensus key | same as above | fix the oracle key; key rotation needs a hard fork |
| blocks rejected, log `Pricing record is not bound to this block height` | oracle signs a height other than the requested `height` | block production stalls (fail-closed) **and the daemon keeps re-submitting the cached template** | fix the oracle; restart the daemon to refresh the template cache |
| blocks rejected, log `timestamp is too old` / future | clock skew, or equal timestamps on two blocks in one second | block production stalls | fix `timestamp = max(now, last+1)` in the oracle |
| `Invalid pricing record signature` | wrong key, wrong digest, or a tampered record | record treated as empty | check the oracle's key and digest |

The daemon caches the block template (`m_btc`); after a rejected template it will not re-fetch
the oracle until the chain or the template changes, so **restart the node** after fixing an
oracle fault. This is intended fail-closed behaviour, not a bug.

## Operations runbook

Reference implementation: `devnet/oracle_service.py` (Python 3, `--keydir`, `--port`).

Start (regtest example):

    python3 oracle_service.py --keydir /tmp/c5key --port 8443
    # GET /price?height=N&sal=...&vsd=...   ->  {"pr_version":1,...}

The service logs one `REQ /price height=<h> sal=<sal> vsd=<vsd>` line per request - the primary
monitoring signal (requests should track mined blocks ~1:1).

Monitoring checklist:

- oracle request rate ≈ block rate, and every request returns `200`;
- daemon logs contain no `Invalid pricing record signature` / `not bound to this block height`;
- `get_block` on the last N blocks shows `pricing_record.height == height` (a chain sampler
  script is described in [TESTING.md](TESTING.md));
- clock is NTP-synchronised; block timestamp ≤ oracle timestamp ≤ block timestamp + max delta.

Incident: oracle down. Blocks keep being produced with empty records; CONVERT stops. Restore
the service; the next template picks the record up automatically (no node restart needed if the
template was never rejected for a record problem).

Incident: oracle signing wrong heights (e.g. a stale/undeployed version). Blocks are rejected
and the miner keeps retrying the cached template. Fix the oracle, then restart the daemon.

## Local / regtest

`--regtest` (`--keep-fakechain`) uses `FAKECHAIN_ORACLE_PUBLIC_KEY`, whose private key is the
`/tmp/c5key` test key (EC P-256). Negative-test stubs used during development:

- `devnet/oracle_service_off.py` - signs `height - 1` (must be rejected once binding is active);
- `devnet/oracle_service_plus.py` - signs `height + 1` (same).

Never deploy these variants to a network whose binding height is `0`.
