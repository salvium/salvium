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
#include "block_reward.h"

using namespace epee;
using namespace cryptonote;

namespace
{
  bool construct_miner_tx_by_weight(transaction& miner_tx, uint64_t height, uint64_t already_generated_coins,
    const account_public_address& miner_address, std::vector<size_t>& block_weights, size_t target_tx_weight,
    size_t target_block_weight, uint64_t fee = 0)
  {
    crypto::public_key miner_reward_tx_key{};
    // Blockchain::update_next_cumulative_weight_limit keeps the effective
    // production median at least at the v5 penalty-free zone, including on
    // an HF1 test chain.  Mirror that input when constructing the fixture's
    // claimed reward.
    const size_t reward_median = std::max(
        misc_utils::median(block_weights),
        static_cast<size_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5));
    if (!construct_miner_tx(height, reward_median, already_generated_coins, target_block_weight, fee, miner_address, miner_reward_tx_key, miner_tx))
      return false;

    size_t current_weight = get_transaction_weight(miner_tx);
    size_t try_count = 0;
    while (target_tx_weight != current_weight)
    {
      ++try_count;
      if (10 < try_count)
        return false;

      if (target_tx_weight < current_weight)
      {
        size_t diff = current_weight - target_tx_weight;
        if (diff <= miner_tx.extra.size())
          miner_tx.extra.resize(miner_tx.extra.size() - diff);
        else
          return false;
      }
      else
      {
        size_t diff = target_tx_weight - current_weight;
        miner_tx.extra.resize(miner_tx.extra.size() + diff);
      }

      current_weight = get_transaction_weight(miner_tx);
    }

    return true;
  }

  bool construct_max_weight_block(test_generator& generator, block& blk, const block& blk_prev, const account_base& miner_account,
    size_t median_block_count = CRYPTONOTE_REWARD_BLOCKS_WINDOW)
  {
    std::vector<size_t> block_weights;
    generator.get_last_n_block_weights(block_weights, get_block_hash(blk_prev), median_block_count);

    size_t median = misc_utils::median(block_weights);
    median = std::max(median, static_cast<size_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5));

    transaction miner_tx;
    bool r = construct_miner_tx_by_weight(miner_tx, get_block_height(blk_prev) + 1, generator.get_already_generated_coins(blk_prev),
      miner_account.get_keys().m_account_address, block_weights, 2 * median - 1, 2 * median - 1);
    if (!r)
      return false;

    return generator.construct_block_manually(blk, blk_prev, miner_account, test_generator::bf_miner_tx, 0, 0, 0,
      crypto::hash(), 0, miner_tx);
  }

  bool construct_mismatched_reward_block(test_generator& generator, block& blk,
    const block& blk_prev, const account_base& miner_account, bool reward_weight_is_high)
  {
    std::vector<size_t> block_weights;
    generator.get_last_n_block_weights(block_weights, get_block_hash(blk_prev),
                                       CRYPTONOTE_REWARD_BLOCKS_WINDOW);
    size_t median = std::max(misc_utils::median(block_weights),
                             static_cast<size_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5));
    const size_t actual_weight = 3 * median / 2;
    const size_t reward_weight = reward_weight_is_high ? 7 * median / 4 : 5 * median / 4;

    transaction miner_tx;
    if (!construct_miner_tx_by_weight(miner_tx, get_block_height(blk_prev) + 1,
        generator.get_already_generated_coins(blk_prev),
        miner_account.get_keys().m_account_address, block_weights,
        actual_weight, reward_weight))
      return false;

    return generator.construct_block_manually(blk, blk_prev, miner_account,
      test_generator::bf_miner_tx, 0, 0, 0, crypto::hash(), 0, miner_tx);
  }

  bool rewind_blocks(std::vector<test_event_entry>& events, test_generator& generator, block& blk, const block& blk_prev,
    const account_base& miner_account, size_t block_count)
  {
    blk = blk_prev;
    for (size_t i = 0; i < block_count; ++i)
    {
      block blk_i;
      if (!construct_max_weight_block(generator, blk_i, blk, miner_account))
        return false;

      events.push_back(blk_i);
      blk = blk_i;
    }

    return true;
  }

  uint64_t get_tx_out_amount(const transaction& tx)
  {
    uint64_t amount = 0;
    BOOST_FOREACH(auto& o, tx.vout)
    {
      CHECK_AND_ASSERT_THROW_MES(
          amount <= std::numeric_limits<uint64_t>::max() - o.amount,
          "miner output amount overflow in block-reward fixture");
      amount += o.amount;
    }
    return amount;
  }
}

gen_block_reward::gen_block_reward()
  : m_invalid_block_index(0)
{
  REGISTER_CALLBACK_METHOD(gen_block_reward, mark_invalid_block);
  REGISTER_CALLBACK_METHOD(gen_block_reward, mark_checked_block);
  REGISTER_CALLBACK_METHOD(gen_block_reward, check_block_rewards);
}

bool gen_block_reward::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  DO_CALLBACK(events, "mark_checked_block");
  MAKE_ACCOUNT(events, bob_account);

  // Test: miner transactions without outputs (block reward == 0)
  block blk_0r;
  if (!rewind_blocks(events, generator, blk_0r, blk_0, miner_account, CRYPTONOTE_REWARD_BLOCKS_WINDOW))
    return false;

  // Test: the claimed reward must be calculated from the block's actual
  // cumulative weight. Both an under- and over-penalized reward are invalid.
  DO_CALLBACK(events, "mark_invalid_block");
  block blk_1_bad_1;
  if (!construct_mismatched_reward_block(generator, blk_1_bad_1, blk_0r,
                                         miner_account, false))
    return false;
  events.push_back(blk_1_bad_1);

  DO_CALLBACK(events, "mark_invalid_block");
  block blk_1_bad_2;
  if (!construct_mismatched_reward_block(generator, blk_1_bad_2, blk_0r,
                                         miner_account, true))
    return false;
  events.push_back(blk_1_bad_2);

  block blk_1;
  if (!construct_max_weight_block(generator, blk_1, blk_0r, miner_account))
    return false;
  events.push_back(blk_1);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  MAKE_NEXT_BLOCK(events, blk_2, blk_1, miner_account);
  DO_CALLBACK(events, "mark_checked_block");
  MAKE_NEXT_BLOCK(events, blk_3, blk_2, miner_account);
  DO_CALLBACK(events, "mark_checked_block");
  MAKE_NEXT_BLOCK(events, blk_4, blk_3, miner_account);
  DO_CALLBACK(events, "mark_checked_block");
  MAKE_NEXT_BLOCK(events, blk_5, blk_4, miner_account);
  DO_CALLBACK(events, "mark_checked_block");

  block blk_5r;
  if (!rewind_blocks(events, generator, blk_5r, blk_5, miner_account, CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW))
    return false;

  // Test: fee increases block reward
  transaction tx_0(construct_tx_with_fee(events, blk_5, miner_account, bob_account, MK_COINS(1), 3 * TESTS_DEFAULT_FEE));
  MAKE_NEXT_BLOCK_TX1(events, blk_6, blk_5r, miner_account, tx_0);
  DO_CALLBACK(events, "mark_checked_block");

  // Test: fee from all block transactions increase block reward
  std::list<transaction> txs_0;
  txs_0.push_back(construct_tx_with_fee(events, blk_5, miner_account, bob_account, MK_COINS(1), 5 * TESTS_DEFAULT_FEE));
  txs_0.push_back(construct_tx_with_fee(events, blk_5, miner_account, bob_account, MK_COINS(1), 7 * TESTS_DEFAULT_FEE));
  MAKE_NEXT_BLOCK_TX_LIST(events, blk_7, blk_6, miner_account, txs_0);
  DO_CALLBACK(events, "mark_checked_block");

  // Test: block reward == transactions fee
  {
    transaction tx_1 = construct_tx_with_fee(events, blk_5, miner_account, bob_account, MK_COINS(1), 11 * TESTS_DEFAULT_FEE);
    transaction tx_2 = construct_tx_with_fee(events, blk_5, miner_account, bob_account, MK_COINS(1), 13 * TESTS_DEFAULT_FEE);
    size_t txs_1_weight = get_transaction_weight(tx_1) + get_transaction_weight(tx_2);
    uint64_t txs_fee = get_tx_fee(tx_1) + get_tx_fee(tx_2);

    std::vector<size_t> block_weights;
    generator.get_last_n_block_weights(block_weights, get_block_hash(blk_7), CRYPTONOTE_REWARD_BLOCKS_WINDOW);
    size_t median = misc_utils::median(block_weights);

    transaction miner_tx;
    bool r = construct_miner_tx_by_weight(miner_tx, get_block_height(blk_7) + 1, generator.get_already_generated_coins(blk_7),
      miner_account.get_keys().m_account_address, block_weights, 2 * median - txs_1_weight, 2 * median, txs_fee);
    if (!r)
      return false;

    std::vector<crypto::hash> txs_1_hashes;
    txs_1_hashes.push_back(get_transaction_hash(tx_1));
    txs_1_hashes.push_back(get_transaction_hash(tx_2));

    block blk_8;
    generator.construct_block_manually(blk_8, blk_7, miner_account, test_generator::bf_miner_tx | test_generator::bf_tx_hashes,
      0, 0, 0, crypto::hash(), 0, miner_tx, txs_1_hashes, txs_1_weight);

    events.push_back(blk_8);
    DO_CALLBACK(events, "mark_checked_block");
  }

  DO_CALLBACK(events, "check_block_rewards");

  return true;
}

bool gen_block_reward::check_block_verification_context(const cryptonote::block_verification_context& bvc, size_t event_idx, const cryptonote::block& /*blk*/)
{
  if (m_invalid_block_index == event_idx)
  {
    m_invalid_block_index = 0;
    return bvc.m_verifivation_failed;
  }
  else
  {
    return !bvc.m_verifivation_failed;
  }
}

bool gen_block_reward::mark_invalid_block(cryptonote::core& /*c*/, size_t ev_index, const std::vector<test_event_entry>& /*events*/)
{
  m_invalid_block_index = ev_index + 1;
  return true;
}

bool gen_block_reward::mark_checked_block(cryptonote::core& /*c*/, size_t ev_index, const std::vector<test_event_entry>& /*events*/)
{
  m_checked_blocks_indices.push_back(ev_index - 1);
  return true;
}

bool gen_block_reward::check_block_rewards(cryptonote::core& c, size_t /*ev_index*/, const std::vector<test_event_entry>& events)
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_block_reward_without_txs::check_block_rewards");

  CHECK_EQ(8, m_checked_blocks_indices.size());
  std::vector<crypto::hash> checked_hashes;
  checked_hashes.reserve(m_checked_blocks_indices.size());
  for (const size_t event_index : m_checked_blocks_indices)
    checked_hashes.push_back(get_block_hash(boost::get<block>(events[event_index])));

  std::vector<block> chain;
  map_hash2tx_t transactions;
  CHECK_TEST_CONDITION(find_block_chain(
      events, chain, transactions, checked_hashes.back()));

  uint64_t already_generated = 0;
  size_t checked_count = 0;
  std::vector<size_t> recent_block_weights;
  for (size_t height = 0; height < chain.size(); ++height)
  {
    const block& current = chain[height];
    uint64_t fees = 0;
    size_t block_weight = get_transaction_weight(current.miner_tx);
    for (const crypto::hash& tx_hash : current.tx_hashes)
    {
      const auto tx_it = transactions.find(tx_hash);
      CHECK_TEST_CONDITION(tx_it != transactions.end());
      uint64_t fee = 0;
      CHECK_TEST_CONDITION(tx_it->second != nullptr);
      CHECK_TEST_CONDITION(get_tx_fee(*tx_it->second, fee));
      CHECK_TEST_CONDITION(fees <= std::numeric_limits<uint64_t>::max() - fee);
      fees += fee;
      CHECK_TEST_CONDITION(block_weight <= std::numeric_limits<size_t>::max() -
          get_transaction_weight(*tx_it->second));
      block_weight += get_transaction_weight(*tx_it->second);
    }

    const uint64_t output_amount = get_tx_out_amount(current.miner_tx);
    CHECK_TEST_CONDITION(output_amount <= std::numeric_limits<uint64_t>::max() -
        current.miner_tx.amount_burnt);
    const uint64_t claimed = output_amount + current.miner_tx.amount_burnt;
    CHECK_TEST_CONDITION(claimed >= fees);
    const uint64_t claimed_base_reward = claimed - fees;

    // Ask the production reward function for the expected emission using the
    // same prior-block median and historical hard-fork version that core used
    // for this block.  The effective production median never falls below the
    // v5 penalty-free zone, even for this legacy HF1 replay fixture.
    const size_t reward_median = std::max(
        recent_block_weights.empty()
            ? size_t{0}
            : misc_utils::median(recent_block_weights),
        static_cast<size_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5));
    uint64_t expected_base_reward = 0;
    CHECK_TEST_CONDITION(get_block_reward(
        reward_median, block_weight, already_generated,
        expected_base_reward,
        c.get_blockchain_storage().get_hard_fork_version(height)));

    if (std::find(checked_hashes.begin(), checked_hashes.end(),
                  get_block_hash(current)) != checked_hashes.end())
    {
      CHECK_EQ(expected_base_reward, claimed_base_reward);
      ++checked_count;
    }

    CHECK_TEST_CONDITION(already_generated <=
                         std::numeric_limits<uint64_t>::max() - expected_base_reward);
    already_generated += expected_base_reward;

    recent_block_weights.push_back(block_weight);
    if (recent_block_weights.size() > CRYPTONOTE_REWARD_BLOCKS_WINDOW)
      recent_block_weights.erase(recent_block_weights.begin());
  }
  CHECK_EQ(checked_hashes.size(), checked_count);

  return true;
}
