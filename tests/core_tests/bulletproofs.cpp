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

#include "ringct/rctSigs.h"
#include "ringct/bulletproofs.h"
#include "chaingen.h"
#include "bulletproofs.h"
#include "device/device.hpp"

using namespace epee;
using namespace crypto;
using namespace cryptonote;

//----------------------------------------------------------------------------------------------------------------------
// Tests

bool gen_bp_tx_validation_base::generate_with(std::vector<test_event_entry>& events,
    size_t mixin, size_t n_txes, const uint64_t *amounts_paid, bool valid, const rct::RCTConfig *rct_config, uint8_t hf_version,
    const std::function<bool(std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations, size_t tx_idx)> &pre_tx,
    const std::function<bool(transaction &tx, size_t tx_idx)> &post_tx) const
{
  uint64_t ts_start = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);

  // create 12 miner accounts, and have them mine the next 12 blocks
  cryptonote::account_base miner_accounts[12];
  const cryptonote::block *prev_block = &blk_0;
  cryptonote::block blocks[12 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW];
  for (size_t n = 0; n < 12; ++n) {
    miner_accounts[n].generate();
    CHECK_AND_ASSERT_MES(generator.construct_block_manually(blocks[n], *prev_block, miner_accounts[n],
        test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_hf_version,
        HF_VERSION_BULLETPROOF_PLUS, HF_VERSION_BULLETPROOF_PLUS,
        prev_block->timestamp + current_difficulty_window(HF_VERSION_BULLETPROOF_PLUS),
          crypto::hash(), 0, transaction(), std::vector<crypto::hash>(), 0, 0,
          HF_VERSION_BULLETPROOF_PLUS),
        false, "Failed to generate block");
    events.push_back(blocks[n]);
    prev_block = blocks + n;
  }

  // rewind
  cryptonote::block blk_r, blk_last;
  {
    blk_last = blocks[11];
    for (size_t i = 0; i < CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW; ++i)
    {
      CHECK_AND_ASSERT_MES(generator.construct_block_manually(blocks[12+i], blk_last, miner_account,
          test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_hf_version,
          HF_VERSION_BULLETPROOF_PLUS, HF_VERSION_BULLETPROOF_PLUS,
          blk_last.timestamp + current_difficulty_window(HF_VERSION_BULLETPROOF_PLUS),
          crypto::hash(), 0, transaction(), std::vector<crypto::hash>(), 0, 0,
          HF_VERSION_BULLETPROOF_PLUS),
          false, "Failed to generate block");
      events.push_back(blocks[12+i]);
      blk_last = blocks[12+i];
    }
    blk_r = blk_last;
  }

  // create 4 txes from these miners in another block, to generate some rct outputs
  std::vector<transaction> rct_txes;
  cryptonote::block blk_txes;
  std::vector<crypto::hash> starting_rct_tx_hashes;
  uint64_t fees = 0;
  for (size_t n = 0; n < n_txes; ++n)
  {
    std::vector<tx_source_entry> sources;

    sources.resize(1);
    tx_source_entry& src = sources.back();
    CHECK_AND_ASSERT_MES(fill_tx_source_from_miner_outputs(src, blocks, mixin + 1, n),
                         false, "Failed to build production miner-output source ring");

    //fill outputs entry
    tx_destination_entry td;
    td.addr = miner_accounts[n].get_keys().m_account_address;
    std::vector<tx_destination_entry> destinations;
    for (int o = 0; amounts_paid[o] != (uint64_t)-1; ++o)
    {
      td.amount = amounts_paid[o];
      destinations.push_back(td);
    }

    if (pre_tx && !pre_tx(sources, destinations, n))
    {
      MDEBUG("pre_tx returned failure");
      return false;
    }

    crypto::secret_key tx_key;
    std::vector<crypto::secret_key> additional_tx_keys;
    std::unordered_map<crypto::public_key, cryptonote::subaddress_index> subaddresses;
    const std::string source_asset = src.asset_type;
    const std::string dest_asset = src.asset_type;
    for (cryptonote::tx_destination_entry& destination : destinations)
      destination.asset_type = dest_asset;
    subaddresses[miner_accounts[n].get_keys().m_account_address.m_spend_public_key] = {0,0};
    rct_txes.resize(rct_txes.size() + 1);
    try
    {
      const bool r = construct_tx_and_get_tx_key(miner_accounts[n].get_keys(), subaddresses, sources, destinations, hf_version, source_asset, dest_asset, cryptonote::transaction_type::TRANSFER, cryptonote::account_public_address{}, std::vector<uint8_t>(), rct_txes.back(), 0, tx_key, additional_tx_keys, true, rct_config[n]);
      if (!r)
      {
        CHECK_AND_ASSERT_MES(!valid && hf_version < HF_VERSION_ENABLE_N_OUTS && destinations.size() != 2,
                             false, "Unexpected classic-Bulletproof fixture-construction rejection");
        return true;
      }

      if (post_tx && !post_tx(rct_txes.back(), n))
      {
        MDEBUG("post_tx returned failure");
        return false;
      }

      starting_rct_tx_hashes.push_back(get_transaction_hash(rct_txes.back()));
    }
    catch (const std::exception& e)
    {
      CHECK_AND_ASSERT_MES(!valid, false, "Production rejected a transaction marked valid by the fixture: " << e.what());
      const std::string message = e.what();
      const bool expected_borromean_rejection =
          rct_config[n].range_proof_type == rct::RangeProofBorromean &&
          (message == "Borromean range proofs no longer supported" ||
           message == "Failed to serialize rctSigBase");
      const bool expected_legacy_bp_rejection =
          rct_config[n].range_proof_type == rct::RangeProofPaddedBulletproof &&
          (rct_config[n].bp_version == 2 || rct_config[n].bp_version == 3) &&
          message.find("Unsupported BP version: " + std::to_string(rct_config[n].bp_version)) != std::string::npos;
      CHECK_AND_ASSERT_MES(expected_borromean_rejection || expected_legacy_bp_rejection,
                           false, "Unexpected fixture-construction failure: " << message);
      return true;
    }

    //events.push_back(rct_txes.back());
    LOG_PRINT_L0("Test tx: " << obj_to_json_str(rct_txes.back()));

    for (int o = 0; amounts_paid[o] != (uint64_t)-1; ++o)
    {
      crypto::key_derivation derivation;
      bool r = crypto::generate_key_derivation(destinations[o].addr.m_view_public_key, tx_key, derivation);
      CHECK_AND_ASSERT_MES(r, false, "Failed to generate key derivation");
      crypto::secret_key amount_key;
      crypto::derivation_to_scalar(derivation, o, amount_key);
      rct::key rct_tx_mask;
      const uint8_t type = rct_txes.back().rct_signatures.type;
      if (rct::is_rct_simple(type))
        rct::decodeRctSimple(rct_txes.back().rct_signatures, rct::sk2rct(amount_key), o, rct_tx_mask, hw::get_device("default"));
      else
        rct::decodeRct(rct_txes.back().rct_signatures, rct::sk2rct(amount_key), o, rct_tx_mask, hw::get_device("default"));
    }

    while (amounts_paid[0] != (size_t)-1)
      ++amounts_paid;
    ++amounts_paid;

    uint64_t fee = 0;
    get_tx_fee(rct_txes.back(), fee);
    fees += fee;
  }
  SET_EVENT_VISITOR_SETT(events, event_visitor_settings::set_txs_keeped_by_block);
  if (!valid)
    DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(rct_txes);

  CHECK_AND_ASSERT_MES(generator.construct_block_manually(blk_txes, blk_last, miner_account,
      test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_tx_hashes | test_generator::bf_hf_version | test_generator::bf_max_outs | test_generator::bf_tx_fees,
      hf_version, hf_version, blk_last.timestamp + current_difficulty_window(hf_version),
      crypto::hash(), 0, transaction(), starting_rct_tx_hashes, 0, 6, hf_version, fees),
      false, "Failed to generate block");
  if (!valid)
    DO_CALLBACK(events, "mark_invalid_block");
  events.push_back(blk_txes);
  blk_last = blk_txes;

  return true;
}

bool gen_bp_tx_validation_base::check_bp(const cryptonote::transaction &tx, size_t tx_idx, const size_t *sizes, const char *context) const
{
  DEFINE_TESTS_ERROR_CONTEXT(context);
  CHECK_TEST_CONDITION(tx.version >= 2);
  CHECK_TEST_CONDITION(rct::is_rct_bulletproof(tx.rct_signatures.type));
  size_t n_sizes = 0, n_amounts = 0;
  for (size_t n = 0; n < tx_idx; ++n)
  {
    while (sizes[0] != (size_t)-1)
      ++sizes;
    ++sizes;
  }
  while (sizes[n_sizes] != (size_t)-1)
    n_amounts += sizes[n_sizes++];
  CHECK_TEST_CONDITION(tx.rct_signatures.p.bulletproofs.size() == n_sizes);
  CHECK_TEST_CONDITION(rct::n_bulletproof_max_amounts(tx.rct_signatures.p.bulletproofs) == n_amounts);
  for (size_t n = 0; n < n_sizes; ++n)
    CHECK_TEST_CONDITION(rct::n_bulletproof_max_amounts(tx.rct_signatures.p.bulletproofs[n]) == sizes[n]);
  return true;
}

bool gen_bp_tx_valid_1_before_12::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 2 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_BULLETPROOF_PLUS, NULL, NULL);
}

bool gen_bp_tx_invalid_1_from_12::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 2 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_BULLETPROOF_PLUS, NULL, NULL);
}

bool gen_bp_tx_invalid_1_1::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofBulletproof , 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_tx_valid_2::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_tx_valid_3::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_tx_valid_16::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {500, 500, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_tx_invalid_4_2_1::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {1000, 1000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofMultiOutputBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_tx_invalid_16_16::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {1000, 1000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofMultiOutputBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_txs_valid_2_and_2::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {1000, 1000, (size_t)-1, 1000, 1000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 3 }, {rct::RangeProofPaddedBulletproof, 3 } };
  return generate_with(events, mixin, 2, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_txs_invalid_2_and_8_2_and_16_16_1::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {
    1000, 1000, (uint64_t)-1,
    1000, 1000, (uint64_t)-1,
    1000, 1000, (uint64_t)-1
  };
  const rct::RCTConfig rct_config[] = {{rct::RangeProofMultiOutputBulletproof, 3}, {rct::RangeProofMultiOutputBulletproof, 3}, {rct::RangeProofMultiOutputBulletproof, 3}};
  return generate_with(events, mixin, 3, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_txs_valid_2_and_3_and_2_and_4::generate(std::vector<test_event_entry>& events) const
{
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {
    1000, 1000, (uint64_t)-1,
    1000, 1000, (uint64_t)-1,
    1000, 1000, (uint64_t)-1,
    1000, 1000, (uint64_t)-1
  };
  const rct::RCTConfig rct_config[] = {{rct::RangeProofPaddedBulletproof, 3}, {rct::RangeProofPaddedBulletproof, 3}, {rct::RangeProofPaddedBulletproof, 3}, {rct::RangeProofPaddedBulletproof, 3}};
  return generate_with(events, mixin, 4, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, NULL);
}

bool gen_bp_tx_invalid_not_enough_proofs::generate(std::vector<test_event_entry>& events) const
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_bp_tx_invalid_not_enough_proofs");
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, [&](cryptonote::transaction &tx, size_t idx){
    CHECK_TEST_CONDITION(tx.rct_signatures.type == rct::RCTTypeBulletproof || tx.rct_signatures.type == rct::RCTTypeBulletproof2 || tx.rct_signatures.type == rct::RCTTypeCLSAG);
    CHECK_TEST_CONDITION(!tx.rct_signatures.p.bulletproofs.empty());
    tx.rct_signatures.p.bulletproofs.pop_back();
    CHECK_TEST_CONDITION(!tx.rct_signatures.p.bulletproofs.empty());
    return true;
  });
}

bool gen_bp_tx_invalid_empty_proofs::generate(std::vector<test_event_entry>& events) const
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_bp_tx_invalid_empty_proofs");
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {50000, 50000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, [&](cryptonote::transaction &tx, size_t idx){
    CHECK_TEST_CONDITION(tx.rct_signatures.type == rct::RCTTypeBulletproof || tx.rct_signatures.type == rct::RCTTypeBulletproof2 || tx.rct_signatures.type == rct::RCTTypeCLSAG);
    tx.rct_signatures.p.bulletproofs.clear();
    return true;
  });
}

bool gen_bp_tx_invalid_too_many_proofs::generate(std::vector<test_event_entry>& events) const
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_bp_tx_invalid_too_many_proofs");
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, [&](cryptonote::transaction &tx, size_t idx){
    CHECK_TEST_CONDITION(tx.rct_signatures.type == rct::RCTTypeBulletproof || tx.rct_signatures.type == rct::RCTTypeBulletproof2 || tx.rct_signatures.type == rct::RCTTypeCLSAG);
    CHECK_TEST_CONDITION(!tx.rct_signatures.p.bulletproofs.empty());
    tx.rct_signatures.p.bulletproofs.push_back(tx.rct_signatures.p.bulletproofs.back());
    return true;
  });
}

bool gen_bp_tx_invalid_wrong_amount::generate(std::vector<test_event_entry>& events) const
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_bp_tx_invalid_wrong_amount");
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_CLSAG, NULL, [&](cryptonote::transaction &tx, size_t idx){
    CHECK_TEST_CONDITION(tx.rct_signatures.type == rct::RCTTypeBulletproof || tx.rct_signatures.type == rct::RCTTypeBulletproof2 || tx.rct_signatures.type == rct::RCTTypeCLSAG);
    CHECK_TEST_CONDITION(!tx.rct_signatures.p.bulletproofs.empty());
    tx.rct_signatures.p.bulletproofs.back() = rct::bulletproof_PROVE(1000, rct::skGen());
    return true;
  });
}

bool gen_bp_tx_invalid_borromean_type::generate(std::vector<test_event_entry>& events) const
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_bp_tx_invalid_borromean_type");
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofBorromean, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_BULLETPROOF_PLUS, NULL, [&](cryptonote::transaction &tx, size_t tx_idx){
    return true;
  });
}

bool gen_bp_tx_invalid_bulletproof2_type::generate(std::vector<test_event_entry>& events) const
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_bp_tx_invalid_bulletproof2_type");
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 2 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_BULLETPROOF_PLUS, NULL, [&](cryptonote::transaction &tx, size_t tx_idx){
    return true;
  });
}

bool gen_bp_tx_invalid_clsag_type::generate(std::vector<test_event_entry>& events) const
{
  DEFINE_TESTS_ERROR_CONTEXT("gen_bp_tx_invalid_clsag_type");
  const size_t mixin = 10;
  const uint64_t amounts_paid[] = {5000, 5000, (uint64_t)-1};
  const rct::RCTConfig rct_config[] = { { rct::RangeProofPaddedBulletproof, 3 } };
  return generate_with(events, mixin, 1, amounts_paid, false, rct_config, HF_VERSION_BULLETPROOF_PLUS, NULL, [&](cryptonote::transaction &tx, size_t tx_idx){
    return true;
  });
}
