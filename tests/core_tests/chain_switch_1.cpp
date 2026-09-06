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
#include "chain_switch_1.h"

using namespace epee;
using namespace cryptonote;


gen_chain_switch_1::gen_chain_switch_1()
{
  REGISTER_CALLBACK("check_split_not_switched", gen_chain_switch_1::check_split_not_switched);
  REGISTER_CALLBACK("check_split_switched", gen_chain_switch_1::check_split_switched);
}


//-----------------------------------------------------------------------------------------------------
bool gen_chain_switch_1::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;
  /*
  Two independently mined and unlocked production coinbase outputs fund the
  competing transactions.  This avoids the legacy fixture's assumption that
  one coinbase transaction contains many independently spendable outputs.

  ancestor -(main tx)- main 2
           \-(alt tx) - alt 2 - alt 3  (switches here)
  */

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);                         // 0
  MAKE_ACCOUNT(events, main_sender);                                                  // 1
  MAKE_ACCOUNT(events, alt_sender);                                                   // 2
  MAKE_ACCOUNT(events, recipient_account_1);                                          // 3
  MAKE_ACCOUNT(events, recipient_account_2);                                          // 4
  MAKE_NEXT_BLOCK(events, blk_fund_main, blk_0, main_sender);                         // 5
  MAKE_NEXT_BLOCK(events, blk_fund_alt, blk_fund_main, alt_sender);                   // 6
  REWIND_BLOCKS(events, blk_ancestor, blk_fund_alt, miner_account)                    // <N blocks>

  MAKE_TX(events, tx_main, main_sender, recipient_account_1, MK_COINS(7), blk_ancestor);
  MAKE_TX(events, tx_alt, alt_sender, recipient_account_2, MK_COINS(13), blk_ancestor);

  MAKE_NEXT_BLOCK_TX1(events, blk_main_1, blk_ancestor, miner_account, tx_main);
  MAKE_NEXT_BLOCK(events, blk_main_2, blk_main_1, miner_account);

  MAKE_NEXT_BLOCK_TX1(events, blk_alt_1, blk_ancestor, miner_account, tx_alt);
  MAKE_NEXT_BLOCK(events, blk_alt_2, blk_alt_1, miner_account);
  DO_CALLBACK(events, "check_split_not_switched");
  MAKE_NEXT_BLOCK(events, blk_alt_3, blk_alt_2, miner_account);
  DO_CALLBACK(events, "check_split_switched");

  return true;
}


//-----------------------------------------------------------------------------------------------------
bool gen_chain_switch_1::check_split_not_switched(cryptonote::core& c, size_t ev_index, const std::vector<test_event_entry>& events)
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_chain_switch_1::check_split_not_switched");

  m_recipient_account_1 = boost::get<account_base>(events[3]);
  m_recipient_account_2 = boost::get<account_base>(events[4]);

  std::vector<block> blocks;
  bool r = c.get_blocks(0, 10000, blocks);
  CHECK_TEST_CONDITION(r);
  CHECK_EQ(5 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW, blocks.size());
  CHECK_TEST_CONDITION(blocks.back() == boost::get<block>(events[10 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW]));

  CHECK_EQ(2, c.get_alternative_blocks_count());

  std::vector<cryptonote::block> chain;
  map_hash2tx_t mtx;
  r = find_block_chain(events, chain, mtx, get_block_hash(blocks.back()));
  CHECK_TEST_CONDITION(r);
  CHECK_EQ(MK_COINS(7), get_balance(m_recipient_account_1, chain, mtx));
  CHECK_EQ(0, get_balance(m_recipient_account_2, chain, mtx));

  std::vector<transaction> tx_pool;
  r = c.get_pool_transactions(tx_pool);
  CHECK_TEST_CONDITION(r);
  CHECK_EQ(1, tx_pool.size());
  CHECK_TEST_CONDITION(tx_pool.front() == boost::get<transaction>(
      events[8 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW]));

  m_chain_1.swap(blocks);
  m_tx_pool.swap(tx_pool);

  return true;
}

//-----------------------------------------------------------------------------------------------------
bool gen_chain_switch_1::check_split_switched(cryptonote::core& c, size_t ev_index, const std::vector<test_event_entry>& events)
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_chain_switch_1::check_split_switched");

  std::vector<block> blocks;
  bool r = c.get_blocks(0, 10000, blocks);
  CHECK_TEST_CONDITION(r);
  CHECK_EQ(6 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW, blocks.size());
  auto it = blocks.end();
  --it; --it; --it;
  CHECK_TEST_CONDITION(std::equal(blocks.begin(), it, m_chain_1.begin()));
  CHECK_TEST_CONDITION(blocks.back() == boost::get<block>(events[14 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW]));

  std::vector<block> alt_blocks;
  r = c.get_alternative_blocks(alt_blocks);
  CHECK_TEST_CONDITION(r);
  CHECK_EQ(2, c.get_alternative_blocks_count());

  // Some blocks that were in main chain are in alt chain now
  BOOST_FOREACH(block b, alt_blocks)
  {
    CHECK_TEST_CONDITION(m_chain_1.end() != std::find(m_chain_1.begin(), m_chain_1.end(), b));
  }

  std::vector<cryptonote::block> chain;
  map_hash2tx_t mtx;
  r = find_block_chain(events, chain, mtx, get_block_hash(blocks.back()));
  CHECK_TEST_CONDITION(r);
  CHECK_EQ(0, get_balance(m_recipient_account_1, chain, mtx));
  CHECK_EQ(MK_COINS(13), get_balance(m_recipient_account_2, chain, mtx));

  std::vector<transaction> tx_pool;
  r = c.get_pool_transactions(tx_pool);
  CHECK_TEST_CONDITION(r);
  CHECK_EQ(1, tx_pool.size());
  CHECK_TEST_CONDITION(!(tx_pool.front() == m_tx_pool.front()));
  CHECK_TEST_CONDITION(tx_pool.front() == boost::get<transaction>(
      events[7 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW]));

  return true;
}
