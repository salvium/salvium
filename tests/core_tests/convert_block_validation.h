// Copyright (c) 2026, The Monero Project
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

#include "chaingen.h"

// Block-level validation of the protocol transaction's conversion mints.
//
// Blockchain::validate_protocol_transaction() rejects a block whose protocol transaction
// carries mint outputs that no CONVERT transaction in the block earned (its output count
// must equal the number of CONVERT transactions, and each output's amount must equal the
// amount implied by the conversion).  A fully signed Carrot CONVERT transaction cannot be
// produced from the core testing harness today (see the comment in the .cpp file), so this
// test pins the surrounding block-level rule: a protocol transaction may not carry any
// conversion mint output unless a CONVERT transaction in the same block earned it.
class gen_convert_block_protocol_mint : public test_chain_unit_base
{
public:
  gen_convert_block_protocol_mint();

  bool generate(std::vector<test_event_entry>& events);
  bool check_block_verification_context(const cryptonote::block_verification_context& bvc, size_t event_idx, const cryptonote::block& blk);
  bool mark_bad_block(cryptonote::core& c, size_t ev_index, const std::vector<test_event_entry>& events);
  bool check_chain_height(cryptonote::core& c, size_t ev_index, const std::vector<test_event_entry>& events);

private:
  size_t m_bad_block_index;
};

template<>
struct get_test_options<gen_convert_block_protocol_mint> {
  // hf 14 (the convert/oracle hard fork) is active from the first mined block; the
  // genesis block itself stays on the version 1 rules.
  const std::pair<uint8_t, uint64_t> hard_forks[3] = {
    std::make_pair((uint8_t)1, (uint64_t)0),
    std::make_pair((uint8_t)HF_VERSION_ORACLE_CONVERT, (uint64_t)1),
    std::make_pair((uint8_t)0, (uint64_t)0)
  };
  const cryptonote::test_options test_options = {
    hard_forks, 0
  };
};
