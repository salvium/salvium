// Copyright (c) 2014-2022, The Monero Project
// Portions Copyright (c) 2023, Salvium (author: SRCG)
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

#include <boost/range/adaptor/reversed.hpp>

#include "string_tools.h"
#include "blockchain_db.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "profile_tools.h"
#include "ringct/rctOps.h"
#include "ringct/rctSigs.h"

#include "lmdb/db_lmdb.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "blockchain.db"

using epee::string_tools::pod_to_hex;

namespace cryptonote
{

bool matches_category(relay_method method, relay_category category) noexcept
{
  switch (category)
  {
    default:
      return false;
    case relay_category::all:
      return true;
    case relay_category::relayable:
      return method != relay_method::none;
    case relay_category::broadcasted:
    case relay_category::legacy:
      break;
  }
  // check for "broadcasted" or "legacy" methods:
  switch (method)
  {
    default:
    case relay_method::local:
    case relay_method::forward:
    case relay_method::stem:
      return false;
    case relay_method::block:
    case relay_method::fluff:
      return true;
    case relay_method::none:
      break;
  }
  return category == relay_category::legacy;
}

void txpool_tx_meta_t::set_relay_method(relay_method method) noexcept
{
  kept_by_block = 0;
  do_not_relay = 0;
  is_local = 0;
  is_forwarding = 0;
  dandelionpp_stem = 0;

  switch (method)
  {
    case relay_method::none:
      do_not_relay = 1;
      break;
    case relay_method::local:
      is_local = 1;
      break;
    case relay_method::forward:
      is_forwarding = 1;
      break;
    case relay_method::stem:
      dandelionpp_stem = 1;
      break;
    case relay_method::block:
      kept_by_block = 1;
      break;
    default:
    case relay_method::fluff:
      break;
  }
}

relay_method txpool_tx_meta_t::get_relay_method() const noexcept
{
  const uint8_t state =
    uint8_t(kept_by_block) +
    (uint8_t(do_not_relay) << 1) +
    (uint8_t(is_local) << 2) +
    (uint8_t(is_forwarding) << 3) +
    (uint8_t(dandelionpp_stem) << 4);

  switch (state)
  {
    default: // error case
    case 0:
      break;
    case 1:
      return relay_method::block;
    case 2:
      return relay_method::none;
    case 4:
      return relay_method::local;
    case 8:
      return relay_method::forward;
    case 16:
      return relay_method::stem;
  };
  return relay_method::fluff;
}

bool txpool_tx_meta_t::upgrade_relay_method(relay_method method) noexcept
{
  static_assert(relay_method::none < relay_method::local, "bad relay_method value");
  static_assert(relay_method::local < relay_method::forward, "bad relay_method value");
  static_assert(relay_method::forward < relay_method::stem, "bad relay_method value");
  static_assert(relay_method::stem < relay_method::fluff, "bad relay_method value");
  static_assert(relay_method::fluff < relay_method::block, "bad relay_method value");

  if (get_relay_method() < method)
  {
    set_relay_method(method);
    return true;
  }
  return false;
}

const command_line::arg_descriptor<std::string> arg_db_sync_mode = {
  "db-sync-mode"
, "Specify sync option, using format [safe|fast|fastest]:[sync|async]:[<nblocks_per_sync>[blocks]|<nbytes_per_sync>[bytes]]." 
, "fast:async:250000000bytes"
};
const command_line::arg_descriptor<bool> arg_db_salvage  = {
  "db-salvage"
, "Try to salvage a blockchain database if it seems corrupted"
, false
};

BlockchainDB *new_db()
{
  return new BlockchainLMDB();
}

void BlockchainDB::init_options(boost::program_options::options_description& desc)
{
  command_line::add_arg(desc, arg_db_sync_mode);
  command_line::add_arg(desc, arg_db_salvage);
}

void BlockchainDB::pop_block()
{
  block blk;
  std::vector<transaction> txs;
  pop_block(blk, txs);
}

void BlockchainDB::add_transaction(const crypto::hash& blk_hash, const std::pair<transaction, blobdata_ref>& txp, const crypto::hash* tx_hash_ptr, const crypto::hash* tx_prunable_hash_ptr)
{
  const transaction &tx = txp.first;

  bool miner_tx = false;
  crypto::hash tx_hash, tx_prunable_hash;
  if (!tx_hash_ptr)
  {
    // should only need to compute hash for miner transactions
    tx_hash = get_transaction_hash(tx);
    LOG_PRINT_L3("null tx_hash_ptr - needed to compute: " << tx_hash);
  }
  else
  {
    tx_hash = *tx_hash_ptr;
  }
  if (tx.version >= 2)
  {
    if (!tx_prunable_hash_ptr)
      tx_prunable_hash = get_transaction_prunable_hash(tx, &txp.second);
    else
      tx_prunable_hash = *tx_prunable_hash_ptr;
  }

  for (const txin_v& tx_input : tx.vin)
  {
    if (tx_input.type() == typeid(txin_to_key))
    {
      add_spent_key(boost::get<txin_to_key>(tx_input).k_image);
    }
    else if (tx_input.type() == typeid(txin_gen))
    {
      /* nothing to do here */
      miner_tx = true;
    }
    else
    {
      LOG_PRINT_L1("Unsupported input type, aborting transaction addition");
      throw std::runtime_error("Unexpected input type, aborting");
    }
  }

  uint64_t tx_id = add_transaction_data(blk_hash, txp, tx_hash, tx_prunable_hash, miner_tx);

  std::vector<std::pair<uint64_t, uint64_t>> amount_output_indices(tx.vout.size());

  // iterate tx.vout using indices instead of C++11 foreach syntax because
  // we need the index
  for (uint64_t i = 0; i < tx.vout.size(); ++i)
  {
    // miner v2 txes have their coinbase output in one single out to save space,
    // and we store them as rct outputs with an identity mask
    uint64_t unlock_time = 0;
    if (!cryptonote::get_output_unlock_time(tx.vout[i], unlock_time)) {
      LOG_PRINT_L1("Failed to get output unlock time, aborting transaction addition");
      throw std::runtime_error("Unexpected error getting output unlock_time, aborting");
    }
    if (miner_tx && tx.version == 2)
    {
      cryptonote::tx_out vout = tx.vout[i];
      // TODO: avoid multiple expensive zeroCommitVartime call here + get_outs_by_last_locked_block + ver_non_input_consensus
      rct::key commitment;
      if (!rct::getCommitment(tx, i, commitment))
        throw std::runtime_error("Failed to get miner tx commitment, aborting");
      vout.amount = 0;
      amount_output_indices[i] = add_output(tx_hash, vout, i, unlock_time,
        &commitment);
    }
    else
    {
      amount_output_indices[i] = add_output(tx_hash, tx.vout[i], i, unlock_time,
        tx.version > 1 ? &tx.rct_signatures.outPk[i].mask : NULL);
    }
  }
  add_tx_amount_output_indices(tx_id, amount_output_indices);

  // Check to see if this is a YIELD TX
  if (tx.type == cryptonote::transaction_type::STAKE) {

    // We now need to insert a record into the "yield_tx_data" table to record the TX
    
  }
}

uint64_t BlockchainDB::add_block( const std::pair<block, blobdata>& blck
                                , size_t block_weight
                                , uint64_t long_term_block_weight
                                , const difficulty_type& cumulative_difficulty
                                , const uint64_t& coins_generated
                                , const std::vector<std::pair<transaction, blobdata>>& txs
                                , const cryptonote::network_type nettype
                                , cryptonote::yield_block_info& ybi
                                , cryptonote::audit_block_info& abi
                                )
{
  const block &blk = blck.first;

  // sanity
  if (blk.tx_hashes.size() != txs.size())
    throw std::runtime_error("Inconsistent tx/hashes sizes");

  TIME_MEASURE_START(time1);
  crypto::hash blk_hash = get_block_hash(blk);
  TIME_MEASURE_FINISH(time1);
  time_blk_hash += time1;

  uint64_t prev_height = height();

  // call out to add the transactions

  time1 = epee::misc_utils::get_tick_count();

  uint64_t num_rct_outs = 0;
  oracle::asset_type_counts num_rct_outs_by_asset_type;
  blobdata miner_bd = tx_to_blob(blk.miner_tx);
  add_transaction(blk_hash, std::make_pair(blk.miner_tx, blobdata_ref(miner_bd)));
  blobdata protocol_bd = tx_to_blob(blk.protocol_tx);
  add_transaction(blk_hash, std::make_pair(blk.protocol_tx, blobdata_ref(protocol_bd)));

  if (blk.miner_tx.version >= 2)
  {
    num_rct_outs += blk.miner_tx.vout.size();

    // count the current block's rct outs by asset type
    for (auto& vout: blk.miner_tx.vout) {
      std::string asset_type;
      if (!get_output_asset_type(vout, asset_type))
        throw std::runtime_error("Failed to get output asset type");
      num_rct_outs_by_asset_type.add(asset_type, 1);
    }
  }

  std::map<std::string, int64_t> slippage_counts;
  uint64_t audit_total = 0, yield_total = 0;
  if (blk.protocol_tx.version >= 2)
  {
    num_rct_outs += blk.protocol_tx.vout.size();

    // count the current block's rct outs by asset type
    for (auto& vout: blk.protocol_tx.vout) {

      // Get the output asset type
      std::string asset_type;
      if (!get_output_asset_type(vout, asset_type))
        throw std::runtime_error("Failed to get output asset type");
      
      // Update the RCT outs
      num_rct_outs_by_asset_type.add(asset_type, 1);

      // Update the amount tallies by DEDUCTING the minted amount
      if (slippage_counts.count(asset_type) == 0)
        slippage_counts[asset_type] = 0;
      slippage_counts[asset_type] -= vout.amount;
    }
  }

  int tx_i = 0;
  crypto::hash tx_hash = crypto::null_hash;
  for (const std::pair<transaction, blobdata>& tx : txs)
  {
    tx_hash = blk.tx_hashes[tx_i];
    add_transaction(blk_hash, tx, &tx_hash);
    for (const auto &vout: tx.first.vout)
    {
      std::string asset_type;
      if (!get_output_asset_type(vout, asset_type))
        throw std::runtime_error("Failed to get output asset type");
      if (vout.amount == 0) {
        ++num_rct_outs;
        num_rct_outs_by_asset_type.add(asset_type, 1);
      }

      // Is this a CONVERT TX?
      if (tx.first.type == cryptonote::transaction_type::CONVERT) {
        // Update the amount tallies by ADDING the burnt amount
        if (slippage_counts.count(asset_type) == 0)
          slippage_counts[asset_type] = 0;
        slippage_counts[asset_type] += tx.first.amount_burnt;
      }
    }

    // Is this an AUDIT TX?
    if (tx.first.type == cryptonote::transaction_type::AUDIT) {
      audit_total += tx.first.amount_burnt;
    }
    
    // Is this a STAKE TX?
    if (tx.first.type == cryptonote::transaction_type::STAKE) {
      yield_total += tx.first.amount_burnt;
    }
    ++tx_i;
  }

  // SRCG: This is the code that calculates the total slippage for the block
  // Now convert all of the residual balances into SAL
  boost::multiprecision::int128_t slippage_total_128 = 0;
  uint64_t slippage_total = 0;
  if (blk.major_version >= HF_VERSION_ENABLE_CONVERT) {
    for (const auto& tally: slippage_counts) {
      boost::multiprecision::int128_t slippage_amount_128 = 0;
      if (tally.first == "SAL") {
        slippage_amount_128 = tally.second;
      } else {
        // Sanity check - do we have a price for both source asset type and SAL in the PR?
        boost::multiprecision::int128_t sal_price = blk.pricing_record["SAL"];
        boost::multiprecision::int128_t asset_price = blk.pricing_record[tally.first];
        if (sal_price == 0) {
          // No price available - bail out, because block is invalid
          throw std::runtime_error("Asset type 'SAL' is not present in available pricing record");
        }
        if (asset_price == 0) {
          // No price available - bail out, because block is invalid
          throw std::runtime_error("Asset type '" + tally.first + "' is not present in available pricing record");
        }
        // Convert the VSD amount into SAL
        boost::multiprecision::int128_t tally_128 = tally.second;
        tally_128 *= asset_price;
        tally_128 /= sal_price;
        slippage_amount_128 = tally_128.convert_to<int64_t>();
      }
      slippage_total_128 += slippage_amount_128;
    }
    if (slippage_total_128 < 0)
      throw std::runtime_error("Found a negative slippage total when summing the burnt/minted amounts");
    slippage_total = slippage_total_128.convert_to<uint64_t>();

  } else {

    // Prior to activation of conversions, the staking reward is purely a percentage of the block reward
    if (blk.miner_tx.amount_burnt == 0 and prev_height != 0)
      throw std::runtime_error("Staking reward is zero, but block reward is present");
    slippage_total = blk.miner_tx.amount_burnt;
  }
  
  TIME_MEASURE_FINISH(time1);
  time_add_transaction += time1;

  // call out to subclass implementation to add the block & metadata
  time1 = epee::misc_utils::get_tick_count();
  add_block(blk, block_weight, long_term_block_weight, cumulative_difficulty, coins_generated, num_rct_outs, num_rct_outs_by_asset_type, blk_hash, slippage_total, yield_total, audit_total, nettype, ybi, abi);
  TIME_MEASURE_FINISH(time1);
  time_add_block1 += time1;

  m_hardfork->add(blk, prev_height);

  ++num_calls;

  return prev_height;
}

void BlockchainDB::set_hard_fork(HardFork* hf)
{
  m_hardfork = hf;
}

void BlockchainDB::pop_block(block& blk, std::vector<transaction>& txs)
{
  blk = get_top_block();

  remove_block();

  for (const auto& h : boost::adaptors::reverse(blk.tx_hashes))
  {
    cryptonote::transaction tx;
    if (!get_tx(h, tx) && !get_pruned_tx(h, tx))
      throw DB_ERROR("Failed to get pruned or unpruned transaction from the db");
    txs.push_back(std::move(tx));
    remove_transaction(h);
  }
  remove_transaction(get_transaction_hash(blk.protocol_tx));
  remove_transaction(get_transaction_hash(blk.miner_tx));
}

bool BlockchainDB::is_open() const
{
  return m_open;
}

void BlockchainDB::remove_transaction(const crypto::hash& tx_hash)
{
  transaction tx = get_pruned_tx(tx_hash);

  for (const txin_v& tx_input : tx.vin)
  {
    if (tx_input.type() == typeid(txin_to_key))
    {
      remove_spent_key(boost::get<txin_to_key>(tx_input).k_image);
    }
  }

  // Check for yield_tx entries
  if (tx.type == cryptonote::transaction_type::STAKE) {
  }
  
  const bool miner_tx = tx.vin.size() == 1 && tx.vin[0].type() == typeid(txin_gen);

  // need tx as tx.vout has the tx outputs, and the output amounts are needed
  remove_transaction_data(tx_hash, tx, miner_tx);
}

block BlockchainDB::get_block_from_height(const uint64_t& height) const
{
  blobdata bd = get_block_blob_from_height(height);
  block b;
  if (!parse_and_validate_block_from_blob(bd, b))
    throw DB_ERROR("Failed to parse block from blob retrieved from the db");

  return b;
}

block BlockchainDB::get_block(const crypto::hash& h) const
{
  blobdata bd = get_block_blob(h);
  block b;
  if (!parse_and_validate_block_from_blob(bd, b))
    throw DB_ERROR("Failed to parse block from blob retrieved from the db");

  return b;
}

bool BlockchainDB::get_tx(const crypto::hash& h, cryptonote::transaction &tx) const
{
  blobdata bd;
  if (!get_tx_blob(h, bd))
    return false;
  if (!parse_and_validate_tx_from_blob(bd, tx))
    throw DB_ERROR("Failed to parse transaction from blob retrieved from the db");

  return true;
}

bool BlockchainDB::get_pruned_tx(const crypto::hash& h, cryptonote::transaction &tx) const
{
  blobdata bd;
  if (!get_pruned_tx_blob(h, bd))
    return false;
  if (!parse_and_validate_tx_base_from_blob(bd, tx))
    throw DB_ERROR("Failed to parse transaction base from blob retrieved from the db");

  return true;
}

transaction BlockchainDB::get_tx(const crypto::hash& h) const
{
  transaction tx;
  if (!get_tx(h, tx))
    throw TX_DNE(std::string("tx with hash ").append(epee::string_tools::pod_to_hex(h)).append(" not found in db").c_str());
  return tx;
}

transaction BlockchainDB::get_pruned_tx(const crypto::hash& h) const
{
  transaction tx;
  if (!get_pruned_tx(h, tx))
    throw TX_DNE(std::string("pruned tx with hash ").append(epee::string_tools::pod_to_hex(h)).append(" not found in db").c_str());
  return tx;
}

void BlockchainDB::reset_stats()
{
  num_calls = 0;
  time_blk_hash = 0;
  time_tx_exists = 0;
  time_add_block1 = 0;
  time_add_transaction = 0;
  time_commit1 = 0;
}

void BlockchainDB::show_stats()
{
  LOG_PRINT_L1(ENDL
    << "*********************************"
    << ENDL
    << "num_calls: " << num_calls
    << ENDL
    << "time_blk_hash: " << time_blk_hash << "ms"
    << ENDL
    << "time_tx_exists: " << time_tx_exists << "ms"
    << ENDL
    << "time_add_block1: " << time_add_block1 << "ms"
    << ENDL
    << "time_add_transaction: " << time_add_transaction << "ms"
    << ENDL
    << "time_commit1: " << time_commit1 << "ms"
    << ENDL
    << "*********************************"
    << ENDL
  );
}

bool BlockchainDB::txpool_tx_matches_category(const crypto::hash& tx_hash, relay_category category)
{
  try
  {
    txpool_tx_meta_t meta{};
    if (!get_txpool_tx_meta(tx_hash, meta))
    {
      MERROR("Failed to get tx meta from txpool");
      return false;
    }
    return meta.matches(category);
  }
  catch (const std::exception &e)
  {
    MERROR("Failed to get tx meta from txpool: " << e.what());
  }
  return false;
}

}  // namespace cryptonote
