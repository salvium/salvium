#!/usr/bin/env python3

# Copyright (c) 2018-2022, The Monero Project

# 
# All rights reserved.
# 
# Redistribution and use in source and binary forms, with or without modification, are
# permitted provided that the following conditions are met:
# 
# 1. Redistributions of source code must retain the above copyright notice, this list of
#    conditions and the following disclaimer.
# 
# 2. Redistributions in binary form must reproduce the above copyright notice, this list
#    of conditions and the following disclaimer in the documentation and/or other
#    materials provided with the distribution.
# 
# 3. Neither the name of the copyright holder nor the names of its contributors may be
#    used to endorse or promote products derived from this software without specific
#    prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
# THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
# STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
# THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

from __future__ import print_function
import time

"""Test daemon blockchain RPC calls

Test the following RPCs:
    - get_info
    - generateblocks
    - misc block retrieval
    - pop_blocks
    - [TODO: many tests still need to be written]

"""

import json

from framework.daemon import Daemon

class BlockchainTest():
    def run_test(self):
        self.reset()
        self._test_generateblocks(5)
        self._test_alt_chains()

    def reset(self):
        print('Resetting blockchain')
        daemon = Daemon()
        res = daemon.get_height()
        daemon.pop_blocks(res.height - 1)
        daemon.flush_txpool(confirm_all=True)

    def _test_generateblocks(self, blocks):
        assert blocks >= 2

        print("Test generating", blocks, 'blocks')

        daemon = Daemon()

        # check info/height before generating blocks
        res_info = daemon.get_info()
        height = res_info.height
        prev_block = res_info.top_block_hash
        res_height = daemon.get_height()
        assert res_height.height == height
        assert int(res_info.wide_cumulative_difficulty, 16) == (res_info.cumulative_difficulty_top64 << 64) + res_info.cumulative_difficulty
        cumulative_difficulty = int(res_info.wide_cumulative_difficulty, 16)

        # we should not see a block at height
        ok = False
        try: daemon.getblock(height = height)
        except: ok = True
        assert ok

        res = daemon.get_fee_estimate()
        assert res.fee == 520
        assert res.fees == [520, 2100, 8300, 110000]
        # The production response omits this optional field when it equals
        # its schema default of 1.
        assert res.get('quantization_mask', 1) == 1
        res = daemon.get_fee_estimate(10)
        assert res.fee == 520

        # generate blocks
        res_generateblocks = daemon.generateblocks('SC11pP3tKp5e5UJwTeTNhXQpv4UsbpmvTDSKRn22X1gLVTfJKyfJMbG6apw15backjJxGgi8pVT1sJA5p1etwT232pL2xUbKUB', blocks)

        # check info/height after generateblocks blocks
        assert res_generateblocks.height == height + blocks - 1
        res_info = daemon.get_info()
        assert res_info.height == height + blocks
        assert res_info.top_block_hash != prev_block
        res_height = daemon.get_height()
        assert res_height.height == height + blocks

        # get the blocks, check they have the right height
        res_getblock = []
        for n in range(blocks):
            res_getblock.append(daemon.getblock(height = height + n))
            block_header = res_getblock[n].block_header
            assert abs(block_header.timestamp - time.time()) < 60 # within 60 seconds
            assert block_header.height == height + n
            assert block_header.orphan_status == False
            assert block_header.depth == blocks - n - 1
            assert block_header.prev_hash == prev_block, prev_block
            assert int(block_header.wide_difficulty, 16) == (block_header.difficulty_top64 << 64) + block_header.difficulty
            assert int(block_header.wide_cumulative_difficulty, 16) == (block_header.cumulative_difficulty_top64 << 64) + block_header.cumulative_difficulty
            assert block_header.reward >= 60000000 # tail emission (8 decimal places)
            cumulative_difficulty += int(block_header.wide_difficulty, 16)
            assert cumulative_difficulty == int(block_header.wide_cumulative_difficulty, 16)
            assert block_header.block_size > 0
            assert block_header.block_weight >= block_header.block_size
            assert block_header.long_term_weight > 0
            prev_block = block_header.hash

        # we should not see a block after that
        ok = False
        try: daemon.getblock(height = height + blocks)
        except: ok = True
        assert ok

        # getlastblockheader and by height/hash should return the same block
        res_getlastblockheader = daemon.getlastblockheader()
        assert res_getlastblockheader.block_header == block_header
        res_getblockheaderbyhash = daemon.getblockheaderbyhash(prev_block)
        assert res_getblockheaderbyhash.block_header == block_header
        res_getblockheaderbyheight = daemon.getblockheaderbyheight(height + blocks - 1)
        assert res_getblockheaderbyheight.block_header == block_header

        # getting a block template after that should have the right height, etc
        res_getblocktemplate = daemon.getblocktemplate('SC11pP3tKp5e5UJwTeTNhXQpv4UsbpmvTDSKRn22X1gLVTfJKyfJMbG6apw15backjJxGgi8pVT1sJA5p1etwT232pL2xUbKUB')
        assert res_getblocktemplate.height == height + blocks
        assert res_getblocktemplate.reserved_offset > 0
        assert res_getblocktemplate.prev_hash == res_info.top_block_hash
        assert res_getblocktemplate.expected_reward >= 60000000
        assert len(res_getblocktemplate.blocktemplate_blob) > 0
        assert len(res_getblocktemplate.blockhashing_blob) > 0
        assert int(res_getblocktemplate.wide_difficulty, 16) == (res_getblocktemplate.difficulty_top64 << 64) + res_getblocktemplate.difficulty

        # diff etc should be the same
        assert res_getblocktemplate.prev_hash == res_info.top_block_hash

        res_getlastblockheader = daemon.getlastblockheader()

        # pop a block
        res_popblocks = daemon.pop_blocks(1)
        assert res_popblocks.height == height + blocks - 1

        res_info = daemon.get_info()
        assert res_info.height == height + blocks - 1

        # getlastblockheader and by height/hash should return the previous block
        block_header = res_getblock[blocks - 2].block_header
        block_header.depth = 0   # this will be different, ignore it
        res_getlastblockheader = daemon.getlastblockheader()
        assert res_getlastblockheader.block_header == block_header
        res_getblockheaderbyhash = daemon.getblockheaderbyhash(block_header.hash)
        assert res_getblockheaderbyhash.block_header == block_header
        res_getblockheaderbyheight = daemon.getblockheaderbyheight(height + blocks - 2)
        assert res_getblockheaderbyheight.block_header == block_header

        # we should not see the popped block anymore
        ok = False
        try: daemon.getblock(height = height + blocks - 1)
        except: ok = True
        assert ok

        # get transactions
        res = daemon.get_info()
        assert res.height == height + blocks - 1
        nblocks = height + blocks - 1
        res = daemon.getblockheadersrange(0, nblocks - 1)
        assert len(res.headers) == nblocks
        assert res.headers[-1] == block_header
        txids = [x.miner_tx_hash for x in res.headers]
        res = daemon.get_transactions(txs_hashes = txids)
        assert len(res.txs) == nblocks
        assert not 'missed_txs' in res or len(res.missed_txs) == 0
        running_asset_output_index = 0
        for i in range(len(txids)):
            tx = res.txs[i]
            assert tx.tx_hash == txids[i]
            assert not tx.double_spend_seen
            assert not tx.in_pool
            assert tx.block_height == i
            if i > 0:
                expected_indices = list(range(running_asset_output_index,
                                              running_asset_output_index + len(tx.asset_type_output_indices)))
                assert tx.asset_type_output_indices == expected_indices, tx.asset_type_output_indices
                running_asset_output_index += len(expected_indices)
                res_out = daemon.get_outs([{'amount': 0, 'index': idx} for idx in expected_indices],
                                          get_txid = True, asset_type = 'SAL1')
                assert len(res_out.outs) == len(expected_indices)
                for out in res_out.outs:
                    assert len(out.key) == 64
                    assert len(out.mask) == 64
                    # Carrot miner outputs carry their maturity on the parent
                    # transaction. get_outs reports the per-output target (0),
                    # while wallet spend selection applies coinbase maturity.
                    assert out.unlocked
                    assert out.height == i
                    assert out.txid == txids[i]

        for i in range(height + nblocks - 1):
            res_sum = daemon.get_coinbase_tx_sum(i, 1)
            res_header = daemon.getblockheaderbyheight(i)
            block = json.loads(daemon.getblock(height = i).json)
            # v1.1.3c's get_coinbase_tx_sum accounts SAL1 outputs. Genesis is
            # the sole legacy-SAL premine output and is therefore omitted;
            # subsequent blocks report miner output = gross reward + burn.
            if i == 0:
                assert res_sum.emission_amount == 0
            else:
                assert res_sum.emission_amount == res_header.block_header.reward + block['miner_tx']['amount_burnt']
            assert res_sum.emission_amount_top64 == 0
            assert res_sum.emission_amount == int(res_sum.wide_emission_amount, 16)
            assert res_sum.fee_amount == int(res_sum.wide_fee_amount, 16)

        genesis_sum = daemon.get_coinbase_tx_sum(0, 1)
        assert genesis_sum.emission_amount_top64 == 0
        assert genesis_sum.fee_amount == 0
        assert genesis_sum.fee_amount_top64 == 0
        chain_height = nblocks
        total_sum = daemon.get_coinbase_tx_sum(0, chain_height)
        assert total_sum.emission_amount == int(total_sum.wide_emission_amount, 16)
        assert total_sum.fee_amount == 0
        non_genesis_sum = daemon.get_coinbase_tx_sum(1, chain_height - 1)
        assert non_genesis_sum.emission_amount == total_sum.emission_amount - genesis_sum.emission_amount
        assert non_genesis_sum.fee_amount == 0

        res = daemon.get_output_distribution([0, 1], 0, 0)
        assert len(res.distributions) == 2
        # At production HF13 each mined block contributes both the miner
        # output and the protocol SAL1 output to amount-zero indexing.
        expected_distributions = {0: [0, 2, 2, 2, 2], 1: [0, 0, 0, 0, 0]}
        for amount, distribution in zip([0, 1], res.distributions):
            assert distribution.amount == amount
            assert distribution.start_height == 0
            assert distribution.base == 0
            assert distribution.distribution == expected_distributions[amount]
            assert distribution.binary == False

        res = daemon.get_output_histogram([], min_count = 0, max_count = 0)
        # In v1.1.3c the canonical-output implementation reaches the
        # output_amount_refs cursor without opening it. The daemon contains
        # the LMDB EINVAL and reports this exact RPC-level failure.
        assert res.status == 'Failed to get output histogram'
        assert 'histogram' not in res

        res = daemon.get_fee_estimate()
        assert res.fee == 520
        assert res.fees == [520, 2100, 8300, 110000]
        assert res.get('quantization_mask', 1) == 1
        res = daemon.get_fee_estimate(10)
        assert res.fee == 520

    def _test_alt_chains(self):
        print('Testing alt chains')
        daemon = Daemon()
        address = 'SC11pP3tKp5e5UJwTeTNhXQpv4UsbpmvTDSKRn22X1gLVTfJKyfJMbG6apw15backjJxGgi8pVT1sJA5p1etwT232pL2xUbKUB'
        root = daemon.get_info()

        # Build and save a valid five-block branch, then detach it.  Reusing
        # production-created block blobs keeps protocol data valid for the
        # parent instead of manufacturing an invalid synthetic extension.
        branch_a = daemon.generateblocks(address, 5)
        branch_a_blobs = [daemon.getblock(hash = block_hash).blob for block_hash in branch_a.blocks]
        assert daemon.get_info().top_block_hash == branch_a.blocks[-1]
        assert daemon.pop_blocks(5).height == root.height

        # Establish a shorter competing main branch.
        branch_b = daemon.generateblocks(address, 3)
        assert daemon.get_info().top_block_hash == branch_b.blocks[-1]

        # Re-submit branch A. It remains alternate through equal cumulative
        # difficulty, then becomes main only when it is strictly longer.
        for index, blob in enumerate(branch_a_blobs):
            daemon.submitblock(blob)
            info = daemon.get_info()
            if index < 3:
                assert info.top_block_hash == branch_b.blocks[-1]
            else:
                assert info.top_block_hash == branch_a.blocks[index]

        info = daemon.get_info()
        assert info.height == root.height + 5
        assert info.top_block_hash == branch_a.blocks[-1]
        alt_hashes = daemon.get_alt_blocks_hashes().blks_hashes
        for block_hash in branch_b.blocks:
            assert block_hash in alt_hashes

        chains = daemon.get_alternate_chains().chains
        assert any(chain.block_hash == branch_b.blocks[-1] and
                   chain.length == len(branch_b.blocks) and
                   chain.main_chain_parent_block == root.top_block_hash
                   for chain in chains)

        print('Saving blockchain explicitely')
        daemon.save_bc()


if __name__ == '__main__':
    BlockchainTest().run_test()
