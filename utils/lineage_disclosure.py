#!/usr/bin/env python3
"""Encode finite, public Carrot lineage disclosures for a validating miner."""
import json
from pathlib import Path

ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
DECODED = {2: 1, 3: 2, 5: 3, 6: 4, 7: 5, 9: 6, 10: 7, 11: 8}


def varint(value):
    result = bytearray()
    while value >= 128:
        result.append((value & 127) | 128)
        value >>= 7
    result.append(value)
    return bytes(result)


def address_keys(address):
    decoded = bytearray()
    for offset in range(0, len(address), 11):
        part = address[offset:offset + 11]
        value = 0
        for char in part:
            value = value * 58 + ALPHABET.index(char)
        decoded += value.to_bytes(DECODED[len(part)], "big")
    offset = 0
    prefix = 0
    shift = 0
    while True:
        byte = decoded[offset]
        prefix |= (byte & 127) << shift
        offset += 1
        if byte < 128:
            break
        shift += 7
    if prefix not in (0x180C96, 0x254C96, 0x24CC96) or len(decoded) - offset != 68:
        raise ValueError("A primary Carrot address is required")
    # The native audit already validates the address checksum. Consensus binds
    # these public keys directly to the disclosed view-balance secret.
    return bytes(decoded[offset:offset + 64])


def encode_disclosure(owner, txids, genesis, network, activation_height):
    txids = sorted(set(txids))
    if not 1 <= len(txids) <= 64:
        raise ValueError("Each disclosure needs 1..64 distinct transaction IDs")
    scope = owner.get("subaddress_count", 1)
    if not 1 <= scope <= 4096:
        raise ValueError("On-chain account-0 scope must contain 1..4096 addresses")
    if network not in (0, 1, 2, 3) or activation_height < 1:
        raise ValueError("An explicit audit network and activation height are required")
    return (bytes.fromhex(genesis) + bytes([network]) + varint(activation_height) + address_keys(owner["address"]) +
            bytes.fromhex(owner["s_view_balance"]) + varint(scope) + varint(len(txids)) +
            b"".join(bytes.fromhex(txid) for txid in txids)).hex()


def prepare_bundles(owners, inventories, genesis, transactions, network, activation_height):
    """Bound both envelope bytes and the native scanning/ancestry workload."""
    result = []
    for index, (owner, rows) in enumerate(zip(owners, inventories)):
        # Protocol payouts are authorized through the originating stake's
        # change/return disclosure. A PROTOCOL label never grants clearance.
        ids = sorted({row["tx_hash"] for row in rows
                      if transactions[row["tx_hash"]][0]["type"] != 2 and
                      transactions[row["tx_hash"]][0]["version"] >= 4})
        batch, outputs, inputs = [], 0, 0
        for txid in ids:
            tx = transactions[txid][0]
            nout, nin = len(tx["vout"]), len(tx["vin"])
            if nout > 256 or nin > 512:
                raise ValueError(f"Transaction {txid} exceeds the on-chain disclosure work budget")
            # Returned payments may need up to sixteen earlier ring contexts
            # to reconstruct the sender's return map. Give each its own budget.
            if batch and (tx["type"] == 7 or len(batch) == 64 or outputs + nout > 256 or inputs + nin > 512):
                result.append({"owner": index, "transactions": batch,
                               "data": encode_disclosure(owner, batch, genesis, network, activation_height)})
                batch, outputs, inputs = [], 0, 0
            batch.append(txid)
            outputs += nout
            inputs += nin
            if tx["type"] == 7:
                result.append({"owner": index, "transactions": batch,
                               "data": encode_disclosure(owner, batch, genesis, network, activation_height)})
                batch, outputs, inputs = [], 0, 0
        if batch:
            result.append({"owner": index, "transactions": batch,
                           "data": encode_disclosure(owner, batch, genesis, network, activation_height)})
    return result
