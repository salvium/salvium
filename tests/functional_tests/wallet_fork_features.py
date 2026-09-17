#!/usr/bin/env python3
# Copyright (c) 2026, The Salvium Project
# SPDX-License-Identifier: BSD-3-Clause
"""Integrated Carrot payments, including sweep and self-send, against any test daemon."""
from framework.daemon import Daemon
from transfer import TransferTest

fixture = TransferTest()
fixture.reset()
fixture.create()
fixture.mine()
daemon = Daemon()
sender, receiver = fixture.wallet[:2]
mining_address = fixture.address[0]

def confirm(txid, wallet, payment_id):
    daemon.generateblocks(mining_address, 10)
    for item in fixture.wallet:
        item.refresh()
    result = wallet.get_transfer_by_txid(txid)
    assert result.transfer.payment_id == payment_id, result

for recipient, wallet, payment_id in [
    (fixture.address[1], receiver, '1122334455667788'),
    (fixture.address[0], sender, '8877665544332211'),
]:
    integrated = sender.make_integrated_address(recipient, payment_id).integrated_address
    pending = sender.transfer([{'address': integrated, 'amount': 100000000}],
                              do_not_relay=True, get_tx_hex=True, get_tx_metadata=True)
    assert pending.tx_blob and pending.tx_metadata
    # Export/reload metadata must retain the same address and payment ID.
    relayed = sender.relay_tx(pending.tx_metadata)
    assert relayed.tx_hash == pending.tx_hash
    confirm(pending.tx_hash, wallet, payment_id)

payment_id = '1234567890abcdef'
integrated = receiver.make_integrated_address(fixture.address[0], payment_id).integrated_address
sweep = receiver.sweep_all(integrated, get_tx_hex=True)
assert sweep.tx_hash_list
for txid in sweep.tx_hash_list:
    confirm(txid, sender, payment_id)
print('PASS: integrated recipient, integrated self-send, metadata export/reload, integrated sweep')
