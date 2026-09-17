// Copyright (c) 2014-2022, The Monero Project
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
// 
// Parts of this file are originally copyright (c) 2012-2013 The Cryptonote developers

#pragma once

#include "cryptonote_basic/account.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_core/cryptonote_tx_utils.h"

#include "multi_tx_test_base.h"

template<size_t a_in_count, size_t a_out_count, bool a_rct, rct::RangeProofType range_proof_type = rct::RangeProofPaddedBulletproof, int bp_version = 4>
class test_construct_tx : private multi_tx_test_base<a_in_count>
{
  static_assert(0 < a_in_count, "in_count must be greater than 0");
  static_assert(2 <= a_out_count && a_out_count <= BULLETPROOF_MAX_OUTPUTS,
                "production transfer output count must be between 2 and 16");
  static_assert(a_rct, "production transfers require RingCT");
  static_assert(range_proof_type == rct::RangeProofPaddedBulletproof && bp_version == 4,
                "production pre-HF3 transfers require padded Bulletproof+");
  static_assert(a_out_count == 2 || a_in_count == 16,
                "HF2 multi-output transfers require a 16-member ring");

public:
  static const size_t loop_count = (a_in_count + a_out_count < 10) ? (a_rct ? 10 : 200) : (a_in_count + a_out_count) < 100 ? (a_rct ? 5 : 25) : 5;
  static const size_t in_count  = a_in_count;
  static const size_t out_count = a_out_count;
  static const bool rct = a_rct;

  typedef multi_tx_test_base<a_in_count> base_class;

  bool init()
  {
    using namespace cryptonote;

    if (!base_class::init())
      return false;

    m_alice.generate();

    for (size_t i = 0; i < out_count; ++i)
    {
      m_destinations.push_back(tx_destination_entry(this->m_source_amount / out_count, m_alice.get_keys().m_account_address, false));
      m_destinations.back().asset_type = "SAL";
    }

    return true;
  }

  bool test()
  {
    crypto::secret_key tx_key;
    std::vector<crypto::secret_key> additional_tx_keys;
    std::unordered_map<crypto::public_key, cryptonote::subaddress_index> subaddresses;
    subaddresses[this->m_miners[this->real_source_idx].get_keys().m_account_address.m_spend_public_key] = {0,0};
    rct::RCTConfig rct_config{range_proof_type, bp_version};
    const std::string source_asset = "SAL";
    const std::string dest_asset = "SAL";
    const uint8_t hf_version = out_count == 2 ? HF_VERSION_BULLETPROOF_PLUS : HF_VERSION_ENABLE_N_OUTS;
    return cryptonote::construct_tx_and_get_tx_key(this->m_miners[this->real_source_idx].get_keys(), subaddresses, this->m_sources, m_destinations, hf_version, source_asset, dest_asset, cryptonote::transaction_type::TRANSFER, cryptonote::account_public_address{}, std::vector<uint8_t>(), m_tx, 0, tx_key, additional_tx_keys, rct, rct_config);
  }

private:
  cryptonote::account_base m_alice;
  std::vector<cryptonote::tx_destination_entry> m_destinations;
  cryptonote::transaction m_tx;
};
