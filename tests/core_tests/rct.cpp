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
#include "chaingen.h"
#include "rct.h"
#include "device/device.hpp"

using namespace epee;
using namespace crypto;
using namespace cryptonote;

//----------------------------------------------------------------------------------------------------------------------
// Tests

bool gen_rct_tx_validation_base::generate_with_full(std::vector<test_event_entry>& events,
    const int *out_idx, int mixin, uint64_t amount_paid, size_t second_rewind, uint8_t last_version, const rct::RCTConfig &rct_config, bool use_view_tags, bool valid,
    const std::function<void(std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations)> &pre_tx,
    const std::function<void(transaction &tx)> &post_tx) const
{
  uint64_t ts_start = 1338224400;

  // This fixture executes at HF6, where production requires exactly 15
  // decoys (a 16-member ring). Callers must state that production rule
  // explicitly so a stale fixture cannot be silently corrected here.
  CHECK_AND_ASSERT_MES(mixin == 15, false, "HF6 RCT fixture requires exactly 15 decoys");

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts_start);

  static constexpr size_t production_ring_size = 16;
  static constexpr uint8_t fixture_hf_version = HF_VERSION_SALVIUM_ONE_PROOFS;
  // Keep one unlocked coinbase unspent for the final coinbase source.  The
  // remaining outputs supply the production-sized rings used by setup txes.
  static constexpr size_t miner_source_count = production_ring_size + 1;
  static constexpr size_t rct_source_tx_count = 1;
  static constexpr size_t rct_outputs_per_tx = production_ring_size;
  // Sixteen setup outputs must fit in one production coinbase reward.  Five
  // SAL each leaves ample room for the fee at every generated height.
  static constexpr uint64_t rct_output_amount = 500000000;

  // Build enough production coinbase outputs for the largest ring used by this suite.
  cryptonote::account_base miner_accounts[miner_source_count];
  const cryptonote::block *prev_block = &blk_0;
  cryptonote::block blocks[miner_source_count];
  for (size_t n = 0; n < miner_source_count; ++n) {
    miner_accounts[n].generate();
    CHECK_AND_ASSERT_MES(generator.construct_block_manually(blocks[n], *prev_block, miner_accounts[n],
        test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_hf_version,
        fixture_hf_version, fixture_hf_version, prev_block->timestamp + current_difficulty_window(fixture_hf_version),
          crypto::hash(), 0, transaction(), std::vector<crypto::hash>(), 0, 0, fixture_hf_version),
        false, "Failed to generate block");
    events.push_back(blocks[n]);
    prev_block = blocks + n;
  }

  // rewind
  cryptonote::block blk_r, blk_last;
  {
    blk_last = blocks[miner_source_count - 1];
    for (size_t i = 0; i < CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW; ++i)
    {
      cryptonote::block blk;
      CHECK_AND_ASSERT_MES(generator.construct_block_manually(blk, blk_last, miner_account,
          test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_hf_version,
          fixture_hf_version, fixture_hf_version, blk_last.timestamp + current_difficulty_window(fixture_hf_version),
          crypto::hash(), 0, transaction(), std::vector<crypto::hash>(), 0, 0, fixture_hf_version),
          false, "Failed to generate block");
      events.push_back(blk);
      blk_last = blk;
    }
    blk_r = blk_last;
  }

  // Create production-shaped transactions from coinbase outputs to supply RCT ring members.
  transaction rct_txes[rct_source_tx_count];
  rct::key rct_tx_masks[rct_source_tx_count * rct_outputs_per_tx];
  uint64_t rct_output_global_indices[rct_source_tx_count * rct_outputs_per_tx];
  cryptonote::block blk_txes[rct_source_tx_count];
  // Genesis is SAL, so it is not part of the per-asset SAL1 index space.
  uint64_t next_global_asset_index = miner_source_count + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
  SET_EVENT_VISITOR_SETT(events, event_visitor_settings::set_txs_keeped_by_block);
  for (size_t n = 0; n < rct_source_tx_count; ++n)
  {
    std::vector<crypto::hash> starting_rct_tx_hashes;
    std::vector<tx_source_entry> sources;

    sources.resize(1);
    tx_source_entry& src = sources.back();

    CHECK_AND_ASSERT_MES(fill_tx_source_from_miner_outputs(src, blocks + 1, production_ring_size, n, 1),
                         false, "Failed to build production miner-output source ring");

    //fill outputs entry
    tx_destination_entry td;
    td.addr = miner_accounts[0].get_keys().m_account_address;
    td.amount = rct_output_amount;
    td.asset_type = src.asset_type;
    std::vector<tx_destination_entry> destinations;
    destinations.assign(rct_outputs_per_tx, td);

    crypto::secret_key tx_key;
    std::vector<crypto::secret_key> additional_tx_keys;
    std::unordered_map<crypto::public_key, cryptonote::subaddress_index> subaddresses;
    subaddresses[miner_accounts[n + 1].get_keys().m_account_address.m_spend_public_key] = {0,0};
    const std::string source_asset = src.asset_type;
    const std::string dest_asset = src.asset_type;
    const rct::RCTConfig setup_rct_config { rct::RangeProofPaddedBulletproof, 6 };
    bool r = construct_tx_and_get_tx_key(miner_accounts[n + 1].get_keys(), subaddresses, sources, destinations, fixture_hf_version, source_asset, dest_asset, cryptonote::transaction_type::TRANSFER, cryptonote::account_public_address{}, std::vector<uint8_t>(), rct_txes[n], 0, tx_key, additional_tx_keys, true, setup_rct_config);
    CHECK_AND_ASSERT_MES(r, false, "failed to construct transaction");
    events.push_back(rct_txes[n]);
    starting_rct_tx_hashes.push_back(get_transaction_hash(rct_txes[n]));

    for (size_t o = 0; o < rct_outputs_per_tx; ++o)
    {
      crypto::key_derivation derivation;
      bool r = crypto::generate_key_derivation(destinations[o].addr.m_view_public_key, tx_key, derivation);
      CHECK_AND_ASSERT_MES(r, false, "Failed to generate key derivation");
      crypto::secret_key amount_key;
      crypto::derivation_to_scalar(derivation, o, amount_key);
      const uint8_t type = rct_txes[n].rct_signatures.type;
      if (rct::is_rct_simple(type))
        rct::decodeRctSimple(rct_txes[n].rct_signatures, rct::sk2rct(amount_key), o, rct_tx_masks[o+n*rct_outputs_per_tx], hw::get_device("default"));
      else
        rct::decodeRct(rct_txes[n].rct_signatures, rct::sk2rct(amount_key), o, rct_tx_masks[o+n*rct_outputs_per_tx], hw::get_device("default"));
      rct_output_global_indices[o+n*rct_outputs_per_tx] = next_global_asset_index + 1 + o;
    }

    uint64_t fee = 0;
    get_tx_fee(rct_txes[n], fee);

    CHECK_AND_ASSERT_MES(generator.construct_block_manually(blk_txes[n], blk_last, miner_account,
        test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_tx_hashes | test_generator::bf_hf_version | test_generator::bf_max_outs | test_generator::bf_tx_fees,
        fixture_hf_version, fixture_hf_version, blk_last.timestamp + current_difficulty_window(fixture_hf_version),
        crypto::hash(), 0, transaction(), starting_rct_tx_hashes, 0, 6, fixture_hf_version, fee),
        false, "Failed to generate block");
    events.push_back(blk_txes[n]);
    blk_last = blk_txes[n];
    next_global_asset_index += 1 + rct_outputs_per_tx;
  }

  // rewind
  {
    for (size_t i = 0; i < second_rewind; ++i)
    {
      cryptonote::block blk;
      CHECK_AND_ASSERT_MES(generator.construct_block_manually(blk, blk_last, miner_account,
          test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_hf_version | test_generator::bf_max_outs,
          last_version, last_version, blk_last.timestamp + current_difficulty_window(last_version),
          crypto::hash(), 0, transaction(), std::vector<crypto::hash>(), 0, 6, last_version),
          false, "Failed to generate block");
      events.push_back(blk);
      blk_last = blk;
    }
    blk_r = blk_last;
  }

  // create a tx from the requested ouputs
  std::vector<tx_source_entry> sources;
  for (size_t out_idx_idx = 0; out_idx[out_idx_idx] >= 0; ++out_idx_idx) {
    sources.resize(sources.size()+1);
    tx_source_entry& src = sources.back();

    src.real_output = 0;
    if (out_idx[out_idx_idx]) {
      // rct
      src.amount = rct_output_amount;
      src.asset_type = "SAL1";
      src.real_out_tx_key = get_tx_pub_key_from_extra(rct_txes[0]);
      src.real_output_in_tx_index = 0;
      src.mask = rct_tx_masks[0];
      src.rct = true;
      for (int m = 0; m <= mixin; ++m) {
        const size_t tx_index = m / rct_outputs_per_tx;
        const size_t output_index = m % rct_outputs_per_tx;
        rct::ctkey ctkey;
        crypto::public_key output_public_key;
        CHECK_AND_ASSERT_MES(get_output_public_key(rct_txes[tx_index].vout[output_index], output_public_key),
                             false, "RCT ring member has no public key");
        ctkey.dest = rct::pk2rct(output_public_key);
        ctkey.mask = rct_txes[tx_index].rct_signatures.outPk[output_index].mask;
        src.outputs.push_back(std::make_pair(rct_output_global_indices[m], ctkey));
      }
    }
    else
    {
      // pseudo-confidential coinbase
      CHECK_AND_ASSERT_MES(fill_tx_source_from_miner_outputs(src, blocks, mixin + 1, 0, 0),
                           false, "Failed to build production coinbase source ring");
    }
  }

  //fill outputs entry
  tx_destination_entry td;
  td.addr = miner_account.get_keys().m_account_address;
  td.amount = amount_paid;
  td.asset_type = "SAL1";
  std::vector<tx_destination_entry> destinations;
  // from v12, we need two outputs at least
  destinations.push_back(td);
  destinations.push_back(td);

  if (pre_tx)
    pre_tx(sources, destinations);

  transaction tx;
  crypto::secret_key tx_key;
  std::vector<crypto::secret_key> additional_tx_keys;
  std::unordered_map<crypto::public_key, cryptonote::subaddress_index> subaddresses;
  subaddresses[miner_accounts[0].get_keys().m_account_address.m_spend_public_key] = {0,0};
  const std::string source_asset = "SAL1";
  const std::string dest_asset = "SAL1";
  const uint8_t tx_hf_version = std::max<uint8_t>(1, last_version);
  bool r = construct_tx_and_get_tx_key(miner_accounts[0].get_keys(), subaddresses, sources, destinations, tx_hf_version, source_asset, dest_asset, cryptonote::transaction_type::TRANSFER, cryptonote::account_public_address{}, std::vector<uint8_t>(), tx, 0, tx_key, additional_tx_keys, true, rct_config, use_view_tags);
  CHECK_AND_ASSERT_MES(r, false, "failed to construct transaction");

  if (post_tx)
    post_tx(tx);
  tx.invalidate_hashes();

  // Every candidate is followed by a block so consensus, rather than only
  // mempool policy, makes the final validity decision.
  SET_EVENT_VISITOR_SETT(events, event_visitor_settings::set_txs_keeped_by_block);
  if (!valid)
    DO_CALLBACK(events, "mark_invalid_tx");
  events.push_back(tx);
  MDEBUG("Test tx: " << obj_to_json_str(tx));

  // Removing every input deliberately makes the transaction internally
  // unserializable.  The transaction event above is the complete rejection
  // test; such an object cannot also supply a valid hash for a block entry.
  if (tx.vin.empty())
    return true;

  uint64_t fee = 0;
  CHECK_AND_ASSERT_MES(get_tx_fee(tx, fee), false, "Failed to obtain test transaction fee");
  cryptonote::block final_block;
  const std::vector<crypto::hash> tx_hashes{get_transaction_hash(tx)};
  CHECK_AND_ASSERT_MES(generator.construct_block_manually(final_block, blk_last, miner_account,
      test_generator::bf_major_ver | test_generator::bf_minor_ver | test_generator::bf_timestamp | test_generator::bf_tx_hashes | test_generator::bf_hf_version | test_generator::bf_max_outs | test_generator::bf_tx_fees,
      tx_hf_version, tx_hf_version, blk_last.timestamp + current_difficulty_window(tx_hf_version),
      crypto::hash(), 0, transaction(), tx_hashes, 0, 6, tx_hf_version, fee),
      false, "Failed to generate final transaction block");
  if (!valid)
    DO_CALLBACK(events, "mark_invalid_block");
  events.push_back(final_block);

  return true;
}

bool gen_rct_tx_validation_base::generate_with(std::vector<test_event_entry>& events,
    const int *out_idx, int mixin, uint64_t amount_paid, bool valid,
    const std::function<void(std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations)> &pre_tx,
    const std::function<void(transaction &tx)> &post_tx) const
{
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = false;
  return generate_with_full(events, out_idx, mixin, amount_paid, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, pre_tx, post_tx);
}

bool gen_rct_tx_valid_from_coinbase::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, true, NULL, NULL);
}

bool gen_rct_tx_valid_from_rct::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, true, NULL, NULL);
}

bool gen_rct_tx_valid_from_mixed::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, 0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, true, NULL, NULL);
}

bool gen_rct_tx_coinbase_bad_real_dest::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  bool tx_creation_succeeded = false;
  // in the case, the tx will fail to create, due to mismatched sk/pk
  bool ret = generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {rct::key sk; rct::skpkGen(sk, sources[0].outputs[0].second.dest);},
    [&tx_creation_succeeded](const transaction &tx){tx_creation_succeeded=true;});
  return !ret && !tx_creation_succeeded;
}

bool gen_rct_tx_coinbase_bad_real_mask::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {sources[0].outputs[0].second.mask = rct::zeroCommit(99999);},
    NULL);
}

bool gen_rct_tx_coinbase_bad_fake_dest::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {rct::key sk; rct::skpkGen(sk, sources[0].outputs[1].second.dest);},
    NULL);
}

bool gen_rct_tx_coinbase_bad_fake_mask::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {sources[0].outputs[1].second.mask = rct::zeroCommit(99999);},
    NULL);
}

bool gen_rct_tx_rct_bad_real_dest::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  bool tx_creation_succeeded = false;
  // in the case, the tx will fail to create, due to mismatched sk/pk
  bool ret = generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {rct::key sk; rct::skpkGen(sk, sources[0].outputs[0].second.dest);},
    [&tx_creation_succeeded](const transaction &tx){tx_creation_succeeded=true;});
  return !ret && !tx_creation_succeeded;
}

bool gen_rct_tx_rct_bad_real_mask::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {sources[0].outputs[0].second.mask = rct::zeroCommit(99999);},
    NULL);
}

bool gen_rct_tx_rct_bad_fake_dest::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {rct::key sk; rct::skpkGen(sk, sources[0].outputs[1].second.dest);},
    NULL);
}

bool gen_rct_tx_rct_bad_fake_mask::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {sources[0].outputs[1].second.mask = rct::zeroCommit(99999);},
    NULL);
}

bool gen_rct_tx_rct_spend_with_zero_commit::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    [](std::vector<tx_source_entry> &sources, std::vector<tx_destination_entry> &destinations) {sources[0].outputs[0].second.mask = rct::zeroCommit(sources[0].amount); sources[0].mask = rct::identity();},
    [](transaction &tx){boost::get<txin_to_key>(tx.vin[0]).amount = 0;});
}

bool gen_rct_tx_coinbase_zero_vin_amount::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, true,
    NULL, [](transaction &tx) {
      CHECK_AND_ASSERT_THROW_MES(boost::get<txin_to_key>(tx.vin[0]).amount == 0,
                                 "production coinbase spend exposed a clear input amount");
    });
}

bool gen_rct_tx_rct_non_zero_vin_amount::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {boost::get<txin_to_key>(tx.vin[0]).amount = 5000000000000;}); // one that we know exists
}

bool gen_rct_tx_non_zero_vout_amount::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {tx.vout[0].amount = 5000000000000;}); // one that we know exists
}

bool gen_rct_tx_coinbase_duplicate_key_image::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [&events](transaction &tx) {
      const auto it = std::find_if(events.begin(), events.end(), [](const test_event_entry& event) {
        const transaction* candidate = boost::get<transaction>(&event);
        return candidate && !candidate->vin.empty() && candidate->vin.front().type() == typeid(txin_to_key);
      });
      CHECK_AND_ASSERT_THROW_MES(it != events.end(), "missing prior transaction key image");
      boost::get<txin_to_key>(tx.vin[0]).k_image =
          boost::get<txin_to_key>(boost::get<transaction>(*it).vin[0]).k_image;
    });
}

bool gen_rct_tx_rct_duplicate_key_image::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [&events](transaction &tx) {
      const auto it = std::find_if(events.begin(), events.end(), [](const test_event_entry& event) {
        const transaction* candidate = boost::get<transaction>(&event);
        return candidate && !candidate->vin.empty() && candidate->vin.front().type() == typeid(txin_to_key);
      });
      CHECK_AND_ASSERT_THROW_MES(it != events.end(), "missing prior transaction key image");
      boost::get<txin_to_key>(tx.vin[0]).k_image =
          boost::get<txin_to_key>(boost::get<transaction>(*it).vin[0]).k_image;
    });
}

bool gen_rct_tx_coinbase_wrong_key_image::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  // some random key image from the monero blockchain, so we get something that is a valid key image
  static const uint8_t k_image[33] = "\x49\x3b\x56\x16\x54\x76\xa8\x75\xb7\xf4\xa8\x51\xf5\x55\xd3\x44\xe7\x3e\xea\x73\xee\xc1\x06\x7c\x7d\xb6\x57\x28\x46\x85\xe1\x07";
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {memcpy(&boost::get<txin_to_key>(tx.vin[0]).k_image, k_image, 32);});
}

bool gen_rct_tx_rct_wrong_key_image::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  // some random key image from the monero blockchain, so we get something that is a valid key image
  static const uint8_t k_image[33] = "\x49\x3b\x56\x16\x54\x76\xa8\x75\xb7\xf4\xa8\x51\xf5\x55\xd3\x44\xe7\x3e\xea\x73\xee\xc1\x06\x7c\x7d\xb6\x57\x28\x46\x85\xe1\x07";
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {memcpy(&boost::get<txin_to_key>(tx.vin[0]).k_image, k_image, 32);});
}

bool gen_rct_tx_coinbase_wrong_fee::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {tx.rct_signatures.txnFee++;});
}

bool gen_rct_tx_rct_wrong_fee::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {tx.rct_signatures.txnFee++;});
}

bool gen_rct_tx_coinbase_increase_vin_and_fee::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {boost::get<txin_to_key>(tx.vin[0]).amount++;tx.rct_signatures.txnFee++;});
}

bool gen_rct_tx_coinbase_remove_vin::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {
      tx.vin.pop_back();
      tx.rct_signatures.p.CLSAGs.resize(tx.vin.size());
      tx.rct_signatures.p.TCLSAGs.resize(tx.vin.size());
      tx.rct_signatures.p.pseudoOuts.resize(tx.vin.size());
    });
}

bool gen_rct_tx_rct_remove_vin::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {
      tx.vin.pop_back();
      tx.rct_signatures.p.CLSAGs.resize(tx.vin.size());
      tx.rct_signatures.p.TCLSAGs.resize(tx.vin.size());
      tx.rct_signatures.p.pseudoOuts.resize(tx.vin.size());
    });
}

bool gen_rct_tx_coinbase_add_vout::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {
      tx.vout.push_back(tx.vout.back());
      tx.rct_signatures.ecdhInfo.push_back(tx.rct_signatures.ecdhInfo.back());
      tx.rct_signatures.outPk.push_back(tx.rct_signatures.outPk.back());
      tx.rct_signatures.p.bulletproofs_plus.push_back(
          tx.rct_signatures.p.bulletproofs_plus.back());
    });
}

bool gen_rct_tx_rct_add_vout::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [](transaction &tx) {
      tx.vout.push_back(tx.vout.back());
      tx.rct_signatures.ecdhInfo.push_back(tx.rct_signatures.ecdhInfo.back());
      tx.rct_signatures.outPk.push_back(tx.rct_signatures.outPk.back());
      tx.rct_signatures.p.bulletproofs_plus.push_back(
          tx.rct_signatures.p.bulletproofs_plus.back());
    });
}

bool gen_rct_tx_coinbase_altered_extra::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  bool failed = false;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [&failed](transaction &tx) {std::string extra_nonce; crypto::hash pid = crypto::null_hash; set_payment_id_to_tx_extra_nonce(extra_nonce, pid); if (!add_extra_nonce_to_tx_extra(tx.extra, extra_nonce)) failed = true; }) && !failed;
}

bool gen_rct_tx_rct_altered_extra::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  bool failed = false;
  return generate_with(events, out_idx, mixin, amount_paid, false,
    NULL, [&failed](transaction &tx) {std::string extra_nonce; crypto::hash pid = crypto::null_hash; set_payment_id_to_tx_extra_nonce(extra_nonce, pid); if (!add_extra_nonce_to_tx_extra(tx.extra, extra_nonce)) failed = true; }) && !failed;
}

bool gen_rct_tx_coinbase_untagged_output_accepted_hf6_immediate::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = false;
  bool valid = true;
  return generate_with_full(events, out_idx, mixin, amount_paid, 0, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_coinbase_untagged_output_accepted_hf6_after_rewind::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = false;
  bool valid = true;
  return generate_with_full(events, out_idx, mixin, amount_paid, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_coinbase_tagged_output_accepted_hf6_immediate::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = true;
  bool valid = true;
  return generate_with_full(events, out_idx, mixin, amount_paid, 0, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_coinbase_tagged_output_accepted_hf6_after_rewind::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {0, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = true;
  bool valid = true;
  return generate_with_full(events, out_idx, mixin, amount_paid, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_rct_untagged_output_rejected_while_locked_hf6::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = false;
  bool valid = false;
  return generate_with_full(events, out_idx, mixin, amount_paid, 0, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_rct_untagged_output_accepted_hf6_after_rewind::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = false;
  bool valid = true;
  return generate_with_full(events, out_idx, mixin, amount_paid, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_rct_tagged_output_rejected_while_locked_hf6::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = true;
  bool valid = false;
  return generate_with_full(events, out_idx, mixin, amount_paid, 0, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_rct_tagged_output_accepted_hf6_after_rewind::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = true;
  bool valid = true;
  return generate_with_full(events, out_idx, mixin, amount_paid, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}

bool gen_rct_tx_uses_output_too_early::generate(std::vector<test_event_entry>& events) const
{
  const int mixin = 15;
  const int out_idx[] = {1, -1};
  const uint64_t amount_paid = 10000;
  const rct::RCTConfig rct_config { rct::RangeProofPaddedBulletproof, 6 };
  bool use_view_tags = false;
  bool valid = false;
  return generate_with_full(events, out_idx, mixin, amount_paid, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE-3, HF_VERSION_SALVIUM_ONE_PROOFS, rct_config, use_view_tags, valid, NULL, NULL);
}
