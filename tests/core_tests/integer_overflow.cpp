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

#include "chaingen.h"
#include "integer_overflow.h"

using namespace epee;
using namespace cryptonote;

namespace
{
  void split_miner_tx_outs(transaction& miner_tx, uint64_t amount_1)
  {
    uint64_t total_amount = get_outs_money_amount(miner_tx);
    uint64_t amount_2 = total_amount - amount_1;
    txout_target_v target = miner_tx.vout[0].target;

    miner_tx.vout.clear();

    tx_out out1;
    out1.amount = amount_1;
    out1.target = target;
    miner_tx.vout.push_back(out1);

    tx_out out2;
    out2.amount = amount_2;
    out2.target = target;
    miner_tx.vout.push_back(out2);
    miner_tx.invalidate_hashes();
  }
}

//======================================================================================================================

gen_uint_overflow_base::gen_uint_overflow_base()
  : m_last_valid_block_event_idx(static_cast<size_t>(-1))
{
  REGISTER_CALLBACK_METHOD(gen_uint_overflow_1, mark_last_valid_block);
}

bool gen_uint_overflow_base::check_tx_verification_context(const cryptonote::tx_verification_context& tvc, bool tx_added, size_t event_idx, const cryptonote::transaction& /*tx*/)
{
  return m_last_valid_block_event_idx < event_idx ? !tx_added && tvc.m_verifivation_failed : tx_added && !tvc.m_verifivation_failed;
}

bool gen_uint_overflow_base::check_block_verification_context(const cryptonote::block_verification_context& bvc, size_t event_idx, const cryptonote::block& /*block*/)
{
  return m_last_valid_block_event_idx < event_idx ? bvc.m_verifivation_failed | bvc.m_marked_as_orphaned : !bvc.m_verifivation_failed;
}

bool gen_uint_overflow_base::mark_last_valid_block(cryptonote::core& c, size_t ev_index, const std::vector<test_event_entry>& events)
{
  m_last_valid_block_event_idx = ev_index - 1;
  return true;
}

//======================================================================================================================

bool gen_uint_overflow_1::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  DO_CALLBACK(events, "mark_last_valid_block");
  // Miner output sum overflow. Preserve the production HF1 coinbase shape and
  // output variants, changing only the two clear amounts under test.
  MAKE_MINER_TX_MANUALLY(miner_tx_0, blk_0);
  split_miner_tx_outs(miner_tx_0, MONEY_SUPPLY);
  block blk_1;
  if (!generator.construct_block_manually(blk_1, blk_0, miner_account, test_generator::bf_miner_tx, 0, 0, 0, crypto::hash(), 0, miner_tx_0))
    return false;
  events.push_back(blk_1);

  // Miner amount_burnt + output overflow. This is independent of blk_1 so the
  // block is validated rather than merely classified as an orphan.
  MAKE_MINER_TX_MANUALLY(miner_tx_1, blk_0);
  miner_tx_1.amount_burnt = std::numeric_limits<uint64_t>::max();
  miner_tx_1.invalidate_hashes();
  block blk_2;
  if (!generator.construct_block_manually(blk_2, blk_0, miner_account, test_generator::bf_miner_tx, 0, 0, 0, crypto::hash(), 0, miner_tx_1))
    return false;
  events.push_back(blk_2);

  return true;
}

//======================================================================================================================

bool gen_uint_overflow_2::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  MAKE_ACCOUNT(events, bob_account);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);
  DO_CALLBACK(events, "mark_last_valid_block");

  // Start from independently valid Bulletproof+ transactions so malformed
  // clear amounts reach check_money_overflow before RingCT verification.
  cryptonote::transaction output_overflow;
  if (!construct_tx_to_key(events, output_overflow, blk_0r, miner_account,
                           bob_account, MK_COINS(1), TESTS_DEFAULT_FEE, 0))
    return false;
  CHECK_AND_ASSERT_MES(output_overflow.vout.size() == 2, false,
                       "production overflow fixture requires two outputs");
  output_overflow.vout[0].amount = std::numeric_limits<uint64_t>::max();
  output_overflow.vout[1].amount = 1;
  output_overflow.invalidate_hashes();
  events.push_back(output_overflow);

  cryptonote::transaction input_overflow;
  if (!construct_tx_to_key(events, input_overflow, blk_0r, miner_account,
                           bob_account, MK_COINS(1), TESTS_DEFAULT_FEE, 0))
    return false;
  CHECK_AND_ASSERT_MES(input_overflow.vin.size() == 1 &&
                       input_overflow.vin.front().type() == typeid(txin_to_key),
                       false, "production overflow fixture requires one key input");
  txin_to_key first = boost::get<txin_to_key>(input_overflow.vin.front());
  first.amount = std::numeric_limits<uint64_t>::max();
  txin_to_key second = first;
  second.amount = 1;
  input_overflow.vin = {first, second};
  input_overflow.invalidate_hashes();
  events.push_back(input_overflow);

  return true;
}
