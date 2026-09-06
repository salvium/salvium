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
#include "tx_validation.h"
#include "device/device.hpp"

using namespace epee;
using namespace crypto;
using namespace cryptonote;

namespace
{
  transaction make_simple_tx_with_unlock_time(const std::vector<test_event_entry>& events,
    const cryptonote::block& blk_head, const cryptonote::account_base& from, const cryptonote::account_base& to,
    uint64_t amount, uint64_t unlock_time)
  {
    std::vector<tx_source_entry> sources;
    std::vector<tx_destination_entry> destinations;
    fill_tx_sources_and_destinations(events, blk_head, from, to, amount,
                                     TESTS_DEFAULT_FEE, 0, sources, destinations);
    // Production TRANSFER construction requires the recipient and change
    // outputs even when the selected input leaves zero change.
    fill_tx_destinations(from, to.get_keys().m_account_address, amount,
                         TESTS_DEFAULT_FEE, sources, destinations, true);

    transaction tx;
    if (!construct_tx_rct(from.get_keys(), sources, destinations,
                          from.get_keys().m_account_address, {}, tx, unlock_time,
                          true, rct::RangeProofPaddedBulletproof, 4,
                          HF_VERSION_BULLETPROOF_PLUS))
      throw std::runtime_error("couldn't construct production Bulletproof+ transaction");
    return tx;
  };

  crypto::public_key generate_invalid_pub_key()
  {
    for (int i = 0; i <= 0xFF; ++i)
    {
      crypto::public_key key;
      memset(&key, i, sizeof(crypto::public_key));
      if (!crypto::check_key(key))
      {
        return key;
      }
    }

    throw std::runtime_error("invalid public key wasn't found");
    return crypto::public_key();
  }

  crypto::key_image generate_invalid_key_image()
  {
    crypto::key_image key_image;
    // a random key image plucked from the blockchain
    if (!epee::string_tools::hex_to_pod("6b9f5d1be7c950dc6e4e258c6ef75509412ba9ecaaf90e6886140151d1365b5e", key_image))
      throw std::runtime_error("invalid key image wasn't found");
    return key_image;
  }
}

//----------------------------------------------------------------------------------------------------------------------
// Tests

bool gen_tx_big_version::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  tx.version = TRANSACTION_VERSION_N_OUTS;
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_unlock_time::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS_N(events, blk_1, blk_0, miner_account, 10);
  REWIND_BLOCKS(events, blk_1r, blk_1, miner_account);

  auto make_tx_with_unlock_time = [&](uint64_t unlock_time) -> transaction
  {
    return make_simple_tx_with_unlock_time(events, blk_1, miner_account, miner_account, MK_COINS(1), unlock_time);
  };

  std::list<transaction> txs_0;

  txs_0.push_back(make_tx_with_unlock_time(0));
  events.push_back(txs_0.back());

  txs_0.push_back(make_tx_with_unlock_time(get_block_height(blk_1r) - 1));
  events.push_back(txs_0.back());

  txs_0.push_back(make_tx_with_unlock_time(get_block_height(blk_1r)));
  events.push_back(txs_0.back());

  txs_0.push_back(make_tx_with_unlock_time(get_block_height(blk_1r) + 1));
  events.push_back(txs_0.back());

  txs_0.push_back(make_tx_with_unlock_time(get_block_height(blk_1r) + 2));
  events.push_back(txs_0.back());

  txs_0.push_back(make_tx_with_unlock_time(ts_start - 1));
  events.push_back(txs_0.back());

  txs_0.push_back(make_tx_with_unlock_time(time(0) + 60 * 60));
  events.push_back(txs_0.back());

  MAKE_NEXT_BLOCK_TX_LIST(events, blk_2, blk_1r, miner_account, txs_0);

  return true;
}

bool gen_tx_input_is_not_txin_to_key::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  MAKE_NEXT_BLOCK(events, blk_tmp, blk_0r, miner_account);
  events.pop_back();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(blk_tmp.miner_tx);

  auto make_tx_with_input = [&](const txin_v& tx_input) -> transaction
  {
    transaction tx = make_simple_tx_with_unlock_time(
        events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
    tx.vin.front() = tx_input;
    tx.invalidate_hashes();
    return tx;
  };

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(make_tx_with_input(txin_to_script()));

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(make_tx_with_input(txin_to_scripthash()));

  return true;
}

bool gen_tx_no_inputs_no_outputs::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  tx.vin.clear();
  tx.vout.clear();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_no_inputs_has_outputs::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);

  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);
  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  tx.vin.clear();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_has_inputs_no_outputs::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  tx.vout.clear();
  tx.rct_signatures.ecdhInfo.clear();
  tx.rct_signatures.outPk.clear();
  tx.rct_signatures.p.bulletproofs_plus.clear();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_invalid_input_amount::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  ++boost::get<txin_to_key>(tx.vin.front()).amount;
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_input_wo_key_offsets::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  boost::get<txin_to_key>(tx.vin.front()).key_offsets.clear();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_key_offest_points_to_foreign_key::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  MAKE_NEXT_BLOCK(events, blk_1, blk_0, miner_account);
  REWIND_BLOCKS(events, blk_1r, blk_1, miner_account);
  MAKE_ACCOUNT(events, alice_account);
  MAKE_ACCOUNT(events, bob_account);
  MAKE_TX_LIST_START(events, txs_0, miner_account, bob_account, MK_COINS(15) + 1, blk_1);
  MAKE_TX_LIST(events, txs_0, miner_account, alice_account, MK_COINS(15) + 1, blk_1);
  MAKE_NEXT_BLOCK_TX_LIST(events, blk_2, blk_1r, miner_account, txs_0);

  std::vector<tx_source_entry> sources_bob;
  std::vector<tx_destination_entry> destinations_bob;
  fill_tx_sources_and_destinations(events, blk_2, bob_account, miner_account, MK_COINS(15) + 1 - TESTS_DEFAULT_FEE, TESTS_DEFAULT_FEE, 0, sources_bob, destinations_bob);
  fill_tx_destinations(bob_account, miner_account.get_keys().m_account_address,
                       MK_COINS(15) + 1 - TESTS_DEFAULT_FEE,
                       TESTS_DEFAULT_FEE, sources_bob, destinations_bob, true);

  std::vector<tx_source_entry> sources_alice;
  std::vector<tx_destination_entry> destinations_alice;
  fill_tx_sources_and_destinations(events, blk_2, alice_account, miner_account, MK_COINS(15) + 1 - TESTS_DEFAULT_FEE, TESTS_DEFAULT_FEE, 0, sources_alice, destinations_alice);
  fill_tx_destinations(alice_account, miner_account.get_keys().m_account_address,
                       MK_COINS(15) + 1 - TESTS_DEFAULT_FEE,
                       TESTS_DEFAULT_FEE, sources_alice, destinations_alice, true);

  transaction tx;
  CHECK_AND_ASSERT_MES(construct_tx_rct(
      bob_account.get_keys(), sources_bob, destinations_bob,
      bob_account.get_keys().m_account_address, {}, tx, 0, true,
      rct::RangeProofPaddedBulletproof, 4, HF_VERSION_BULLETPROOF_PLUS),
      false, "failed to construct production transaction");
  txin_to_key& in_to_key = boost::get<txin_to_key>(tx.vin.front());
  in_to_key.key_offsets.front() = sources_alice.front().outputs.front().first;
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_sender_key_offest_not_exist::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  txin_to_key& in_to_key = boost::get<txin_to_key>(tx.vin.front());
  in_to_key.key_offsets.front() = std::numeric_limits<uint64_t>::max();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_mixed_key_offest_not_exist::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  MAKE_NEXT_BLOCK(events, blk_1, blk_0, miner_account);
  REWIND_BLOCKS(events, blk_1r, blk_1, miner_account);
  MAKE_ACCOUNT(events, alice_account);
  MAKE_ACCOUNT(events, bob_account);
  MAKE_TX_LIST_START(events, txs_0, miner_account, bob_account, MK_COINS(1) + TESTS_DEFAULT_FEE, blk_1);
  MAKE_TX_LIST(events, txs_0, miner_account, alice_account, MK_COINS(1) + TESTS_DEFAULT_FEE, blk_1);
  MAKE_NEXT_BLOCK_TX_LIST(events, blk_2, blk_1r, miner_account, txs_0);

  std::vector<tx_source_entry> sources;
  std::vector<tx_destination_entry> destinations;
  fill_tx_sources_and_destinations(events, blk_2, bob_account, miner_account, MK_COINS(1), TESTS_DEFAULT_FEE, 1, sources, destinations);
  fill_tx_destinations(bob_account, miner_account.get_keys().m_account_address,
                       MK_COINS(1), TESTS_DEFAULT_FEE, sources, destinations,
                       true);

  transaction tx;
  CHECK_AND_ASSERT_MES(construct_tx_rct(
      bob_account.get_keys(), sources, destinations,
      bob_account.get_keys().m_account_address, {}, tx, 0, true,
      rct::RangeProofPaddedBulletproof, 4, HF_VERSION_BULLETPROOF_PLUS),
      false, "failed to construct production transaction");
  txin_to_key& input = boost::get<txin_to_key>(tx.vin.front());
  CHECK_AND_ASSERT_MES(input.key_offsets.size() == 2, false,
                       "mixed-offset fixture requires a two-member ring");
  input.key_offsets.back() = std::numeric_limits<uint64_t>::max();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_key_image_not_derive_from_tx_key::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  txin_to_key& in_to_key = boost::get<txin_to_key>(tx.vin.front());
  keypair kp = keypair::generate(hw::get_device("default"));
  key_image another_ki;
  crypto::generate_key_image(kp.pub, kp.sec, another_ki);
  in_to_key.k_image = another_ki;
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_key_image_is_invalid::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  txin_to_key& in_to_key = boost::get<txin_to_key>(tx.vin.front());
  in_to_key.k_image = generate_invalid_key_image();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_check_input_unlock_time::generate(std::vector<test_event_entry>& events) const
{
  static const size_t tests_count = 6;

  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS_N(events, blk_1, blk_0, miner_account, tests_count - 1);
  REWIND_BLOCKS(events, blk_1r, blk_1, miner_account);

  std::array<account_base, tests_count> accounts;
  for (size_t i = 0; i < tests_count; ++i)
  {
    MAKE_ACCOUNT(events, acc);
    accounts[i] = acc;
  }

  std::list<transaction> txs_0;
  auto make_tx_to_acc = [&](size_t acc_idx, uint64_t unlock_time)
  {
    txs_0.push_back(make_simple_tx_with_unlock_time(events, blk_1, miner_account, accounts[acc_idx],
      MK_COINS(1) + TESTS_DEFAULT_FEE, unlock_time));
    events.push_back(txs_0.back());
  };

  const uint64_t blk_3_height = get_block_height(blk_1r) + 2 +
      CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;
  make_tx_to_acc(0, 0);
  make_tx_to_acc(1, blk_3_height - 1);
  make_tx_to_acc(2, blk_3_height);
  make_tx_to_acc(3, blk_3_height + 1);
  // Once this fixture has at least BLOCKCHAIN_TIMESTAMP_CHECK_WINDOW blocks,
  // production validates timestamp locks against the chain-derived adjusted
  // time, not the wall clock.  At the spend point below, the newest block is
  // blk_1r + the funding block + DEFAULT_TX_SPENDABLE_AGE blocks, and adjusted
  // time projects that newest timestamp forward by one target interval.
  const uint64_t adjusted_chain_time_at_spend = blk_1r.timestamp +
      (CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE + 2) * DIFFICULTY_TARGET_V2;
  // This legacy validation fixture replays at hard-fork version 1, so use the
  // corresponding production timestamp grace interval.
  make_tx_to_acc(4, adjusted_chain_time_at_spend +
      CRYPTONOTE_LOCKED_TX_ALLOWED_DELTA_SECONDS_V1);
  make_tx_to_acc(5, adjusted_chain_time_at_spend +
      CRYPTONOTE_LOCKED_TX_ALLOWED_DELTA_SECONDS_V1 + 1);
  MAKE_NEXT_BLOCK_TX_LIST(events, blk_2, blk_1r, miner_account, txs_0);
  // Output-lock tests are independent of the production minimum output age.
  // Age the funding transactions first so only their explicit locks decide
  // whether each subsequent spend is accepted.
  REWIND_BLOCKS_N(events, blk_2r, blk_2, miner_account,
                  CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);

  std::list<transaction> txs_1;
  auto make_tx_from_acc = [&](size_t acc_idx, bool invalid)
  {
    transaction tx = make_simple_tx_with_unlock_time(events, blk_2r, accounts[acc_idx], miner_account, MK_COINS(1), 0);
    if (invalid)
    {
      DO_CALLBACK(events, "mark_invalid_tx");
    }
    else
    {
      txs_1.push_back(tx);
    }
    events.push_back(tx);
  };

  make_tx_from_acc(0, false);
  make_tx_from_acc(1, false);
  make_tx_from_acc(2, false);
  make_tx_from_acc(3, true);
  make_tx_from_acc(4, false);
  make_tx_from_acc(5, true);
  MAKE_NEXT_BLOCK_TX_LIST(events, blk_3, blk_2r, miner_account, txs_1);

  return true;
}

bool gen_tx_txout_to_key_has_invalid_key::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  crypto::public_key invalid_key = generate_invalid_pub_key();
  if (tx.vout.front().target.type() == typeid(txout_to_key))
    boost::get<txout_to_key>(tx.vout.front().target).key = invalid_key;
  else
    boost::get<txout_to_tagged_key>(tx.vout.front().target).key = invalid_key;
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_output_with_nonzero_clear_amount::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  // Production confidential outputs must expose zero in the clear.  Make the
  // malformed case nonzero so this test reaches that exact security rule.
  tx.vout.front().amount = 1;
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_output_is_not_txout_to_key::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  transaction tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  tx.vout.front().target = txout_to_scripthash();
  tx.invalidate_hashes();

  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);

  return true;
}

bool gen_tx_signatures_are_invalid::generate(std::vector<test_event_entry>& events) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);
  REWIND_BLOCKS(events, blk_0r, blk_0, miner_account);

  const transaction valid_tx = make_simple_tx_with_unlock_time(
      events, blk_0, miner_account, miner_account, MK_COINS(1), 0);
  CHECK_AND_ASSERT_MES(!valid_tx.rct_signatures.p.CLSAGs.empty(), false,
                       "production transaction has no CLSAG signature");
  CHECK_AND_ASSERT_MES(!valid_tx.rct_signatures.p.bulletproofs_plus.empty(), false,
                       "production transaction has no Bulletproof+ proof");
  CHECK_AND_ASSERT_MES(!valid_tx.rct_signatures.outPk.empty(), false,
                       "production transaction has no output commitment");

  // Keep each malformed transaction fully serializable so core validation—not
  // the parser—must reject corrupted authorization, range proof, and balance.
  transaction bad_clsag = valid_tx;
  bad_clsag.rct_signatures.p.CLSAGs.front().c1.bytes[0] ^= 1;
  bad_clsag.invalidate_hashes();
  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(bad_clsag);

  transaction bad_bulletproof = valid_tx;
  bad_bulletproof.rct_signatures.p.bulletproofs_plus.front().A.bytes[0] ^= 1;
  bad_bulletproof.invalidate_hashes();
  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(bad_bulletproof);

  transaction bad_commitment = valid_tx;
  bad_commitment.rct_signatures.outPk.front().mask.bytes[0] ^= 1;
  bad_commitment.invalidate_hashes();
  DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(bad_commitment);

  return true;
}
