// Copyright (c) 2025, The Monero Project
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#pragma once

#define IN_UNIT_TESTS

#include "wallet/wallet2.h"

namespace mock
{
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
using fcmp_generic_object_t = std::unique_ptr<void, decltype(&free)>;
static inline fcmp_generic_object_t make_fcmp_generic_object(void *p) { return fcmp_generic_object_t(p, &free); }
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
class fake_pruned_blockchain
{
public:
    static constexpr rct::xmr_amount miner_reward = 600000000000; // 0.6 XMR

    fake_pruned_blockchain(const uint64_t start_block_index = 0,
            const cryptonote::network_type nettype = cryptonote::MAINNET):
        m_start_block_index(start_block_index),
        m_nettype(nettype),
        m_output_index()
    {
        add_starting_block();
    }

    void add_block(const uint8_t hf_version,
        std::vector<cryptonote::transaction> &&txs,
        const cryptonote::account_public_address &miner_address);

    void add_block(cryptonote::block &&blk,
        std::vector<cryptonote::transaction> &&pruned_txs,
        std::vector<crypto::hash> &&prunable_hashes);

    void pop_block();

    void get_blocks_data(const uint64_t start_block_index,
        const uint64_t stop_block_index,
        std::vector<cryptonote::block_complete_entry> &block_entries_out,
        std::vector<tools::wallet2::parsed_block> &parsed_blocks_out) const;

    void init_wallet_for_starting_block(tools::wallet2 &w) const;

    uint8_t hf_version() const
    {
        return m_parsed_blocks.empty() ? 1 : m_parsed_blocks.back().block.major_version;
    }

    uint64_t start_block_index() const 
    {
        return m_start_block_index;
    }

    uint64_t height() const
    {
        return m_start_block_index + m_block_entries.size();
    }

    uint64_t timestamp() const
    {
        return m_parsed_blocks.empty() ? 0 : m_parsed_blocks.back().block.timestamp;
    }

    crypto::hash top_block_hash() const
    {
        return m_parsed_blocks.empty() ? crypto::null_hash : m_parsed_blocks.back().hash;
    }

    tools::wallet2::parsed_block get_parsed_block(const uint64_t block_index) const
    {
        if (block_index >= this->height() || block_index < this->m_start_block_index)
            throw std::out_of_range("get_block requested block index");

        return m_parsed_blocks.at(block_index - this->m_start_block_index);
    }

private:
    void assert_chain_count() const
    {
        CHECK_AND_ASSERT_THROW_MES(m_block_entries.size() == m_parsed_blocks.size(), "blockchain size mismatch");
    }

    void add_starting_block();

    uint64_t m_start_block_index;
    cryptonote::network_type m_nettype;
    uint64_t m_output_index;
    std::vector<cryptonote::block_complete_entry> m_block_entries;
    std::vector<tools::wallet2::parsed_block> m_parsed_blocks;
};
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
} //namespace mock
