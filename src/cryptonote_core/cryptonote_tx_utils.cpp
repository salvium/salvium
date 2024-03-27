// Copyright (c) 2014-2022, The Monero Project
// Portions Copyright (c) 2023, Fulmo (author: SRCG)
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

#include <unordered_set>
#include <random>
#include "include_base_utils.h"
#include "string_tools.h"
using namespace epee;

#include "common/apply_permutation.h"
#include "cryptonote_tx_utils.h"
#include "cryptonote_config.h"
#include "blockchain.h"
#include "cryptonote_basic/miner.h"
#include "cryptonote_basic/tx_extra.h"
#include "crypto/crypto.h"
#include "crypto/hash.h"
#include "ringct/rctSigs.h"
#include "oracle/asset_types.h"

using namespace crypto;

namespace cryptonote
{

  rct::key sm(rct::key y, int n, const rct::key &x)
  {
    while (n--)
      sc_mul(y.bytes, y.bytes, y.bytes);
    sc_mul(y.bytes, y.bytes, x.bytes);
    return y;
  }

  // Compute the inverse of a scalar, the clever way
  rct::key invert(const rct::key &x)
  {
    rct::key _1, _10, _100, _11, _101, _111, _1001, _1011, _1111;

    _1 = x;
    sc_mul(_10.bytes, _1.bytes, _1.bytes);
    sc_mul(_100.bytes, _10.bytes, _10.bytes);
    sc_mul(_11.bytes, _10.bytes, _1.bytes);
    sc_mul(_101.bytes, _10.bytes, _11.bytes);
    sc_mul(_111.bytes, _10.bytes, _101.bytes);
    sc_mul(_1001.bytes, _10.bytes, _111.bytes);
    sc_mul(_1011.bytes, _10.bytes, _1001.bytes);
    sc_mul(_1111.bytes, _100.bytes, _1011.bytes);

    rct::key inv;
    sc_mul(inv.bytes, _1111.bytes, _1.bytes);

    inv = sm(inv, 123 + 3, _101);
    inv = sm(inv, 2 + 2, _11);
    inv = sm(inv, 1 + 4, _1111);
    inv = sm(inv, 1 + 4, _1111);
    inv = sm(inv, 4, _1001);
    inv = sm(inv, 2, _11);
    inv = sm(inv, 1 + 4, _1111);
    inv = sm(inv, 1 + 3, _101);
    inv = sm(inv, 3 + 3, _101);
    inv = sm(inv, 3, _111);
    inv = sm(inv, 1 + 4, _1111);
    inv = sm(inv, 2 + 3, _111);
    inv = sm(inv, 2 + 2, _11);
    inv = sm(inv, 1 + 4, _1011);
    inv = sm(inv, 2 + 4, _1011);
    inv = sm(inv, 6 + 4, _1001);
    inv = sm(inv, 2 + 2, _11);
    inv = sm(inv, 3 + 2, _11);
    inv = sm(inv, 3 + 2, _11);
    inv = sm(inv, 1 + 4, _1001);
    inv = sm(inv, 1 + 3, _111);
    inv = sm(inv, 2 + 4, _1111);
    inv = sm(inv, 1 + 4, _1011);
    inv = sm(inv, 3, _101);
    inv = sm(inv, 2 + 4, _1111);
    inv = sm(inv, 3, _101);
    inv = sm(inv, 1 + 2, _11);

    // Sanity check for successful inversion
    rct::key tmp;
    sc_mul(tmp.bytes, inv.bytes, x.bytes);
    CHECK_AND_ASSERT_THROW_MES(tmp == rct::identity(), "invert failed");
    return inv;
  }
  
  //---------------------------------------------------------------
  void classify_addresses(const std::vector<tx_destination_entry> &destinations, const boost::optional<cryptonote::account_public_address>& change_addr, size_t &num_stdaddresses, size_t &num_subaddresses, account_public_address &single_dest_subaddress)
  {
    num_stdaddresses = 0;
    num_subaddresses = 0;
    std::unordered_set<cryptonote::account_public_address> unique_dst_addresses;
    for(const tx_destination_entry& dst_entr: destinations)
    {
      if (change_addr && dst_entr.addr == change_addr)
        continue;
      if (unique_dst_addresses.count(dst_entr.addr) == 0)
      {
        unique_dst_addresses.insert(dst_entr.addr);
        if (dst_entr.is_subaddress)
        {
          ++num_subaddresses;
          single_dest_subaddress = dst_entr.addr;
        }
        else
        {
          ++num_stdaddresses;
        }
      }
    }
    LOG_PRINT_L2("destinations include " << num_stdaddresses << " standard addresses and " << num_subaddresses << " subaddresses");
  }
  //---------------------------------------------------------------
  bool get_conversion_rate(const oracle::pricing_record& pr, const std::string& from_asset, const std::string& to_asset, uint64_t& rate) {
    // Check for burns
    if (to_asset == "BURN") {
      LOG_ERROR("Converting to a BURN is nonsensical - aborting");
      rate = std::numeric_limits<uint64_t>::max();
      return false;
    }
    // Check for transfers
    if (from_asset == to_asset) {
      rate = COIN;
      return true;
    }
    if ((from_asset == "FULM" && to_asset != "FUSD") ||
        (from_asset == "FUSD" && to_asset != "FULM")) {
      // Invalid conversion - abort
      LOG_ERROR("Invalid conversion (" << from_asset << "," << to_asset << ") - aborting");
      return false;
    }

    // Scale to correct value
    boost::multiprecision::uint128_t rate_128 = COIN;
    rate_128 *= pr[from_asset];
    rate_128 /= pr[to_asset];
    rate = rate_128.convert_to<uint64_t>();
    rate -= (rate % 10000);
    return true;
  }
  //---------------------------------------------------------------
  bool get_converted_amount(const uint64_t& conversion_rate, const uint64_t& source_amount, uint64_t& dest_amount) {
    if (!conversion_rate || !source_amount) {
      LOG_ERROR("Invalid conversion rate or input amount for conversion (" << conversion_rate << "," << source_amount << ") - aborting");
      return false;
    }
    boost::multiprecision::uint128_t source_amount_128 = source_amount;
    boost::multiprecision::uint128_t conversion_rate_128 = conversion_rate;
    boost::multiprecision::uint128_t dest_amount_128 = source_amount_128 * conversion_rate_128;
    dest_amount_128 /= COIN;
    dest_amount = dest_amount_128.convert_to<uint64_t>();
    return true;
  }
  //---------------------------------------------------------------
  bool calculate_conversion(const std::string& source_asset, const std::string& dest_asset, const uint64_t amount_burnt, const uint64_t amount_slippage_limit, uint64_t& amount_minted, uint64_t& amount_slippage, const std::map<std::string, uint64_t> circ_supply, const oracle::pricing_record& pr, const uint8_t hf_version) {

    // Sanity check - are the asset types a valid conversion?
    CHECK_AND_ASSERT_MES(source_asset != dest_asset, false, "cannot calculate slippage when source and dest assets are identical");
    CHECK_AND_ASSERT_MES(source_asset != "", false, "source_asset not provided");
    CHECK_AND_ASSERT_MES(dest_asset != "", false, "dest_asset not provided (is this a BURN?)");
    /////CHECK_AND_ASSERT_MES(pr.has_rate(dest_asset), false, "missing rate for " << dest_asset <<" in pricing record - cannot calculate conversion");
    CHECK_AND_ASSERT_MES(circ_supply.count(source_asset) != 0, false, "missing circulating_supply data - cannot calculate slippage");

    // Get the conversion rate for the TX
    uint64_t conversion_rate = COIN;
    bool ok = get_conversion_rate(pr, source_asset, dest_asset, conversion_rate);
    CHECK_AND_ASSERT_MES(ok, false, "Unable to get conversion rate for " << source_asset << " to " << dest_asset);
    
    // Apply slippage to the burnt amount
    amount_slippage = amount_burnt >> 5; // (1/32)

    // Check that the slippage is acceptable
    if (amount_slippage > amount_slippage_limit) {
      // Bail out with no conversion
      LOG_PRINT_L1("Unable to convert - slippage limit was too low");
      amount_minted = 0;
      return true;
    }

    // Work out the converted amount
    ok = get_converted_amount(conversion_rate, amount_burnt - amount_slippage, amount_minted);
    CHECK_AND_ASSERT_MES(ok, false, "Unable to get converted amount for " << (amount_burnt - amount_slippage) << ", converting from " << source_asset << " to " << dest_asset);
    
    return true;
  }
  //---------------------------------------------------------------
  bool construct_protocol_tx(const size_t height,
                             uint64_t& protocol_fee,
                             transaction& tx,
                             std::vector<protocol_data_entry>& protocol_data,
                             std::map<std::string, uint64_t> circ_supply,
                             const oracle::pricing_record& pr,
                             const account_public_address &miner_address, 
                             const account_public_address &treasury_address, 
                             const uint8_t hf_version) {

    // A vector to contain all of the additional _tx_secret_keys_
    //std::vector<crypto::secret_key>& additional_tx_keys;

    // Clear the TX contents
    tx.set_null();
    tx.type = cryptonote::transaction_type::PROTOCOL;

    // Force the TX type to 2
    tx.version = 2;

    keypair txkey = keypair::generate(hw::get_device("default"));
    add_tx_pub_key_to_extra(tx, txkey.pub);
    if (!sort_tx_extra(tx.extra, tx.extra))
      return false;

    // Update the circulating_supply information, while keeping a count of amount to be created using txin_gen
    std::map<std::string, uint64_t> txin_gen_totals;
    uint64_t txin_gen_final = 0;
    for (auto const& entry: protocol_data) {
      if (!circ_supply.count(entry.source_asset)) {
        LOG_ERROR("Circulating supply does not have " << entry.source_asset << " balance - invalid source_asset");
        return false;
      }
      // Deduct the amount_burnt from the circulating_supply balance
      circ_supply[entry.source_asset] -= entry.amount_burnt;
    }

    // Calculate the slippage for the output amounts
    LOG_PRINT_L2("Creating protocol_tx...");
    uint64_t slippage_total = 0;
    std::vector<crypto::public_key> additional_tx_public_keys;
    for (auto const& entry: protocol_data) {
      if (entry.destination_asset == "BURN") {
        // BURN TX - no slippage, no money minted - skip
        continue;
      }
      // CONVERT TX
      /*
      // Create a secret TX key (= s)
      crypto::secret_key s = keypair::generate(hw::get_device("default")).sec;
      //additional_tx_keys.push_back(s);

      // Now add the correct TX public key (= sP_change)
      // This has to be done using smK() call because of g_k_d() performing a torsion clear
      crypto::public_key txkey_pub = rct::rct2pk(rct::scalarmultKey(rct::pk2rct(entry.P_change), rct::sk2rct(s)));
      additional_tx_public_keys.push_back(txkey_pub);

      // Calculate the actual return address, because the field we already have is actually the TX pubkey to use
      // return address = Hs(syF || i)G + P_change = Hs(saP_change || i)G + P_change
      // Generate the uniqueness for the input
      size_t output_index = tx.vout.size();

      // y = Hs(uniqueness)
      ec_scalar y;
      CHECK_AND_ASSERT_MES(cryptonote::calculate_uniqueness((cryptonote::transaction_type)(entry.type), entry.input_k_image, height, 0, y), false, "while creating protocol_tx outs: failed to calculate uniqueness");

      rct::key key_y         = (rct::key&)(y);
      rct::key key_F         = (rct::key&)(entry.return_address);
      crypto::public_key syF = rct::rct2pk(rct::scalarmultKey(rct::scalarmultKey(key_F, key_y), rct::sk2rct(s)));
      crypto::key_derivation derivation_syF = AUTO_VAL_INIT(derivation_syF);
      std::memcpy(derivation_syF.data, syF.data, sizeof(crypto::key_derivation));
      
      crypto::public_key out_eph_public_key = AUTO_VAL_INIT(out_eph_public_key);
      bool r = crypto::derive_public_key(derivation_syF, output_index, entry.P_change, out_eph_public_key);
      CHECK_AND_ASSERT_MES(r, false, "while creating protocol_tx outs: failed to derive_public_key(" << derivation_syF << ", " << key_y << ", "<< entry.P_change << ")");

      // Sanity checks
      crypto::public_key P_change_verify = crypto::null_pkey;
      r = crypto::derive_subaddress_public_key(out_eph_public_key, derivation_syF, output_index, P_change_verify);
      CHECK_AND_ASSERT_MES(r, false, "while creating protocol_tx outs: failed sanity check calling derive_subaddress_public_key(" << out_eph_public_key << ", " << derivation_syF << ", " << key_y << ", " << P_change_verify << ")");
      CHECK_AND_ASSERT_MES(entry.P_change == P_change_verify, false, "while creating protocol_tx outs: failed sanity check (keys do not match)");
      */
      /*
      LOG_ERROR("***************************************************************************************");
      LOG_ERROR("output_index : " << output_index);
      LOG_ERROR("P_change     : " << entry.P_change);
      LOG_ERROR("key_y        : " << key_y);
      LOG_ERROR("key_F        : " << key_F);
      LOG_ERROR("s            : " << s);
      LOG_ERROR("der. (syF)   : " << derivation_syF);
      LOG_ERROR("txkey_pub    : " << txkey_pub);
      LOG_ERROR("output_key   : " << out_eph_public_key << " (derivation_syF, output_index, P_change)");
      LOG_ERROR("P_change_ver : " << P_change_verify);
      LOG_ERROR("***************************************************************************************");
      */

      if (entry.type == cryptonote::transaction_type::CONVERT) {
        
        // Now calculate the slippage, and decide if it is going to be converted or refunded
        uint64_t amount_slippage = 0, amount_minted = 0;
        bool ok = cryptonote::calculate_conversion(entry.source_asset, entry.destination_asset, entry.amount_burnt, entry.amount_slippage_limit, amount_minted, amount_slippage, circ_supply, pr, hf_version);
        if (!ok) {
          LOG_ERROR("failed to calculate slippage when trying to build protocol_tx");
          return false;
        }
        if (amount_minted == 0) {
          
          // REFUND
          LOG_PRINT_L2("Conversion TX refunded - slippage too high");
          txin_gen_totals[entry.source_asset] += entry.amount_burnt;
          
          // Create the TX output for this refund
          tx_out out;
          //cryptonote::set_tx_out(entry.amount_burnt, entry.source_asset, 0, out_eph_public_key, false, crypto::view_tag{}, out);
          cryptonote::set_tx_out(entry.amount_burnt, entry.source_asset, 0, entry.return_address, false, crypto::view_tag{}, out);
          additional_tx_public_keys.push_back(entry.return_pubkey);
          tx.vout.push_back(out);
        } else {
          
          // CONVERTED
          LOG_PRINT_L2("Conversion TX submitted - converted " << print_money(entry.amount_burnt) << " " << entry.source_asset << " to " << print_money(amount_minted) << " " << entry.destination_asset << "(slippage " << print_money(amount_slippage) << ")");
          txin_gen_totals[entry.destination_asset] += amount_minted;

          // Add the slippage to our total for the block
          if (entry.source_asset == "FULM") {
            slippage_total += amount_slippage;
          } else {
            // Convert the slippage into a FULM amount so we can pay a proportion to the miner
            uint64_t conversion_rate = 0, amount_slippage_converted = 0;
            ok = get_conversion_rate(pr, entry.source_asset, entry.destination_asset, conversion_rate);
            CHECK_AND_ASSERT_MES(ok, false, "Failed to get conversion rate for miner payout");
            ok = get_converted_amount(conversion_rate, amount_slippage, amount_slippage_converted);
            CHECK_AND_ASSERT_MES(ok, false, "Failed to get converted slippage amount for miner payout");
            slippage_total += amount_slippage_converted;
          }
          
          // Create the TX output for this conversion
          tx_out out;
          //cryptonote::set_tx_out(amount_minted, entry.destination_asset, 0, out_eph_public_key, false, crypto::view_tag{}, out);
          cryptonote::set_tx_out(amount_minted, entry.destination_asset, 0, entry.return_address, false, crypto::view_tag{}, out);
          additional_tx_public_keys.push_back(entry.return_pubkey);
          tx.vout.push_back(out);
        }
      } else if (entry.type == cryptonote::transaction_type::YIELD) {

        // PAYOUT
        LOG_PRINT_L2("Yield TX payout submitted " << entry.amount_burnt << entry.source_asset);
        txin_gen_totals[entry.source_asset] += entry.amount_burnt;
          
        // Create the TX output for this refund
        tx_out out;
        //cryptonote::set_tx_out(entry.amount_burnt, entry.source_asset, 0, out_eph_public_key, false, crypto::view_tag{}, out);
        cryptonote::set_tx_out(entry.amount_burnt, entry.source_asset, 0, entry.return_address, false, crypto::view_tag{}, out);
        additional_tx_public_keys.push_back(entry.return_pubkey);
        tx.vout.push_back(out);
      }
    }
    
    // Add in all of the additional TX pubkeys we need to process the payments
    add_additional_tx_pub_keys_to_extra(tx.extra, additional_tx_public_keys);

    if (slippage_total > 0) {

      // Add a payout for the miner
      uint64_t slippage_miner = slippage_total / 5;

      crypto::key_derivation derivation = AUTO_VAL_INIT(derivation);
      crypto::public_key out_eph_public_key = AUTO_VAL_INIT(out_eph_public_key);
      bool r = crypto::generate_key_derivation(miner_address.m_view_public_key, txkey.sec, derivation);
      CHECK_AND_ASSERT_MES(r, false, "while creating outs: failed to generate_key_derivation(" << miner_address.m_view_public_key << ", " << txkey.sec << ")");

      // Calculate the uniqueness
      crypto::key_image k_image;
      ec_scalar uniqueness;
      CHECK_AND_ASSERT_MES(calculate_uniqueness(tx.type, k_image, height, ((size_t)-1), uniqueness), false, "while constructing miner_tx: failed to calculate uniqueness");

      r = crypto::derive_public_key(derivation, uniqueness, miner_address.m_spend_public_key, out_eph_public_key);
      CHECK_AND_ASSERT_MES(r, false, "while creating outs: failed to derive_public_key(" << derivation << ", " << 0 << ", "<< miner_address.m_spend_public_key << ")");
    
      tx_out out_miner;
      cryptonote::set_tx_out(slippage_miner, "FULM", 0, out_eph_public_key, false, crypto::view_tag{}, out_miner);
      tx.vout.push_back(out_miner);

      // Add a payout for the treasury
      crypto::key_derivation derivation_treasury = AUTO_VAL_INIT(derivation_treasury);
      crypto::public_key out_eph_public_key_treasury = AUTO_VAL_INIT(out_eph_public_key_treasury);
      r = crypto::generate_key_derivation(treasury_address.m_view_public_key, txkey.sec, derivation_treasury);
      CHECK_AND_ASSERT_MES(r, false, "while creating outs: failed to generate_key_derivation(" << treasury_address.m_view_public_key << ", " << txkey.sec << ")");

      r = crypto::derive_public_key(derivation_treasury, uniqueness, treasury_address.m_spend_public_key, out_eph_public_key_treasury);
      CHECK_AND_ASSERT_MES(r, false, "while creating outs: failed to derive_public_key(" << derivation << ", " << 0 << ", "<< miner_address.m_spend_public_key << ")");

      uint64_t slippage_treasury = slippage_miner >> 1;
      tx_out out_treasury;
      cryptonote::set_tx_out(slippage_treasury, "FULM", 0, out_eph_public_key_treasury, false, crypto::view_tag{}, out_treasury);
      tx.vout.push_back(out_treasury);
    }
    
    // Create the txin_gen now
    txin_gen in;
    in.height = height;
    tx.vin.push_back(in);

    return true;
  }
  //---------------------------------------------------------------
  bool construct_miner_tx(size_t height, size_t median_weight, uint64_t already_generated_coins, size_t current_block_weight, uint64_t fee, const account_public_address &miner_address, transaction& tx, const blobdata& extra_nonce, size_t max_outs, uint8_t hard_fork_version) {

    // Clear the TX contents
    tx.set_null();
    tx.type = cryptonote::transaction_type::MINER;

    keypair txkey = keypair::generate(hw::get_device("default"));
    add_tx_pub_key_to_extra(tx, txkey.pub);
    if(!extra_nonce.empty())
      if(!add_extra_nonce_to_tx_extra(tx.extra, extra_nonce))
        return false;
    if (!sort_tx_extra(tx.extra, tx.extra))
      return false;

    txin_gen in;
    in.height = height;

    uint64_t block_reward;
    if(!get_block_reward(median_weight, current_block_weight, already_generated_coins, block_reward, hard_fork_version))
    {
      LOG_PRINT_L0("Block is too big");
      return false;
    }

#if defined(DEBUG_CREATE_BLOCK_TEMPLATE)
    LOG_PRINT_L1("Creating block template: reward " << block_reward <<
      ", fee " << fee);
#endif
    block_reward += fee;
    uint64_t summary_amounts = 0;
    CHECK_AND_ASSERT_MES(1 <= max_outs, false, "max_out must be non-zero");

    crypto::key_derivation derivation = AUTO_VAL_INIT(derivation);
    crypto::public_key out_eph_public_key = AUTO_VAL_INIT(out_eph_public_key);
    bool r = crypto::generate_key_derivation(miner_address.m_view_public_key, txkey.sec, derivation);
    CHECK_AND_ASSERT_MES(r, false, "while creating outs: failed to generate_key_derivation(" << miner_address.m_view_public_key << ", " << txkey.sec << ")");

    // Calculate the uniqueness
    crypto::key_image k_image;
    ec_scalar uniqueness;
    CHECK_AND_ASSERT_MES(calculate_uniqueness(tx.type, k_image, height, ((size_t)-1), uniqueness), false, "while constructing miner_tx: failed to calculate uniqueness");

    r = crypto::derive_public_key(derivation, uniqueness, miner_address.m_spend_public_key, out_eph_public_key);
    CHECK_AND_ASSERT_MES(r, false, "while creating outs: failed to derive_public_key(" << derivation << ", " << 0 << ", "<< miner_address.m_spend_public_key << ")");
    /*
    LOG_ERROR("*****************************************************************************");
    LOG_ERROR("txkey_pub : " << txkey.sec);
    LOG_ERROR("a         : " << miner_address.m_view_public_key);
    LOG_ERROR("derivation: " << derivation);
    LOG_ERROR("height    : " << height);
    LOG_ERROR("uniqueness: " << uniqueness.data);
    LOG_ERROR("out_key   : " << out_eph_public_key);
    LOG_ERROR("*****************************************************************************");
    */
    uint64_t amount = block_reward;
    summary_amounts += amount;
    
    bool use_view_tags = hard_fork_version >= HF_VERSION_VIEW_TAGS;
    crypto::view_tag view_tag;
    if (use_view_tags)
      crypto::derive_view_tag(derivation, 0, view_tag);
    
    tx_out out;
    cryptonote::set_tx_out(amount, "FULM", CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW, out_eph_public_key, use_view_tags, view_tag, out);
    
    tx.vout.push_back(out);

    CHECK_AND_ASSERT_MES(summary_amounts == block_reward, false, "Failed to construct miner tx, summary_amounts = " << summary_amounts << " not equal block_reward = " << block_reward);

    tx.version = 2;

    tx.vin.push_back(in);

    tx.invalidate_hashes();

    //LOG_PRINT("MINER_TX generated ok, block_reward=" << print_money(block_reward) << "("  << print_money(block_reward - fee) << "+" << print_money(fee)
    //  << "), current_block_size=" << current_block_size << ", already_generated_coins=" << already_generated_coins << ", tx_id=" << get_transaction_hash(tx), LOG_LEVEL_2);
    return true;
  }
  //---------------------------------------------------------------
  crypto::public_key get_destination_view_key_pub(const std::vector<tx_destination_entry> &destinations, const boost::optional<cryptonote::account_public_address>& change_addr)
  {
    account_public_address addr = {null_pkey, null_pkey};
    size_t count = 0;
    for (const auto &i : destinations)
    {
      if (i.amount == 0)
        continue;
      if (change_addr && i.addr == *change_addr)
        continue;
      if (i.addr == addr)
        continue;
      if (count > 0)
        return null_pkey;
      addr = i.addr;
      ++count;
    }
    if (count == 0 && change_addr)
      return change_addr->m_view_public_key;
    return addr.m_view_public_key;
  }
  //----------------------------------------------------------------------------------------------------
  bool calculate_uniqueness(const cryptonote::transaction_type& type, const crypto::key_image& k_image, const size_t height, const size_t idx, crypto::ec_scalar& uniqueness) {

    if (type == cryptonote::transaction_type::MINER) {

      // Sanity checks
      struct {
        char domain_separator[8];
        size_t height;
      } buf;
      std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strncpy(buf.domain_separator, "MINER", 8);
      buf.height = height;
      crypto::hash_to_scalar(&buf, sizeof(buf), uniqueness);

    } else if (type == cryptonote::transaction_type::PROTOCOL) {

      // Sanity checks
      struct {
        char domain_separator[8];
        crypto::key_image k_image;
        size_t height;
      } buf;
      std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strncpy(buf.domain_separator, "PROTOCOL", 8);
      buf.k_image = k_image;
      buf.height = height;
      crypto::hash_to_scalar(&buf, sizeof(buf), uniqueness);

    } else if (type == cryptonote::transaction_type::TRANSFER) {

      // TRANSFER relies on a shared secret (the key_derivation Z_i) between sender and recipient
      // y = Hs(uniqueness || z_i)
    
      // Create a struct
      struct {
        char domain_separator[8];
        crypto::key_image k_image;
      } buf;
      std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strncpy(buf.domain_separator, "TRANSFER", 8);
      buf.k_image = k_image;
      crypto::hash_to_scalar(&buf, sizeof(buf), uniqueness);

    } else if (type == cryptonote::transaction_type::CONVERT) {

      // Create a struct
      struct {
        char domain_separator[8];
        crypto::key_image k_image;
      } buf;
      std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strcpy(buf.domain_separator, "CONVERT");
      buf.k_image = k_image;
      crypto::hash_to_scalar(&buf, sizeof(buf), uniqueness);

    } else if (type == cryptonote::transaction_type::BURN) {
    
      // Create a struct
      struct {
        char domain_separator[8];
        crypto::key_image k_image;
      } buf;
      std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strcpy(buf.domain_separator, "BURN");
      buf.k_image = k_image;
      crypto::hash_to_scalar(&buf, sizeof(buf), uniqueness);

    } else if (type == cryptonote::transaction_type::YIELD) {

      // Create a struct
      struct {
        char domain_separator[8];
        crypto::key_image k_image;
      } buf;
      std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strcpy(buf.domain_separator, "YIELD");
      buf.k_image = k_image;
      crypto::hash_to_scalar(&buf, sizeof(buf), uniqueness);

    } else {
      LOG_ERROR("calculate_uniqueness() called with unknown TX type - oops!");
      assert(false);
    }

    return true;
  }
  //---------------------------------------------------------------
  bool get_return_address(const size_t tx_version,                             // needed in case we change implementation down the line
                          const crypto::ec_scalar& uniqueness,
                          const cryptonote::account_keys &sender_account_keys, // needed to calculate pretty much anything
                          const crypto::public_key &P_change,                  // one-time public key from CONVERT/YIELD change
                          const crypto::public_key &txkey_pub,                 // public TX key from CONVERT/YIELD TX
                          crypto::public_key& F,                               // OUTPUT return address OTPK
                          crypto::public_key& F_txkey_pub,                     // OUTPUT TX pub key
                          hw::device& hwdev                                    // hardware device to use (usually a software dev)
                          ) {

    LOG_ERROR("Cryptonote::" << __func__ << ":" << __LINE__);
    LOG_ERROR("Break here");
    
    // Derivation ( = shared secret = z_i)
    crypto::key_derivation derivation = AUTO_VAL_INIT(derivation);
    bool r = hwdev.generate_key_derivation(txkey_pub, sender_account_keys.m_view_secret_key, derivation);
    CHECK_AND_ASSERT_MES(r, false, "at get_return_address: failed to generate_key_derivation(" << txkey_pub << ", " << sender_account_keys.m_view_secret_key << ")");

    ec_scalar y = uniqueness;
    /*
    LOG_ERROR("Break here");
    if (type == cryptonote::TRANSFER) {
      // TRANSFER relies on a shared secret (the key_derivation Z_i) between sender and recipient
      // y = Hs(uniqueness || z_i)
      r = hwdev.derivation_to_scalar(derivation, uniqueness, y);
      CHECK_AND_ASSERT_MES(r, false, "at get_return_address: failed to derivation_to_scalar(" << derivation << ", " << uniqueness << ")");
    } else if (type == cryptonote::CONVERT || type == cryptonote::YIELD) {
      // CONVERT & YIELD do not use the shared secret, because protocol_tx cannot have a wallet address or keys
      // Instead, we just use the uniqueness value from tx.vin[0].k_image
      crypto::hash_to_scalar(&uniqueness, sizeof(crypto::hash), y);
    } else {
      LOG_ERROR("Invalid TX type - return_address is not applicable");
      return false;
    }
    */
    
    // Now generate the return address EC point
    // F = (y^-1).a.P_change

    // First, we need to produce the multiplicative inverse of the scalar "y" (aka "y^-1")
    rct::key key_y        = (rct::key&)(y);
    rct::key key_inv_y    = invert(key_y);

    // Now convert this value back into a secret key that we can use
    crypto::secret_key sk_y = rct::rct2sk(key_y);
    crypto::secret_key sk_inv_y = rct::rct2sk(key_inv_y);
    crypto::key_derivation derivation_aP_change = AUTO_VAL_INIT(derivation_aP_change);
    r = hwdev.generate_key_derivation(P_change, sender_account_keys.m_view_secret_key, derivation_aP_change);
    CHECK_AND_ASSERT_MES(r, false, "while calculating get_return_address: failed to generate_key_derivation(" << P_change << ", " << sender_account_keys.m_view_secret_key << ")");
    crypto::public_key pk_aP_change = crypto::null_pkey;
    memcpy(pk_aP_change.data, derivation_aP_change.data, sizeof(crypto::public_key));

    // Sanity check that we can reverse the invert safely
    rct::key key_aP_change = rct::pk2rct(pk_aP_change);
    rct::key key_F         = rct::scalarmultKey(key_aP_change, key_inv_y);
    rct::key key_verify    = rct::scalarmultKey(key_F, key_y);
    CHECK_AND_ASSERT_MES(key_verify == key_aP_change, false, "at get_return_address: failed to verify invert() function with smK() approach");

    // From this point forward, we are departing from the original "return address" scheme                                                                                                                         
    // Create a secret TX key (= s)
    crypto::secret_key s = keypair::generate(hw::get_device("default")).sec;

    // Now add the correct TX public key (= sP_change)
    // This has to be done using smK() call because of g_k_d() performing a torsion clear
    F_txkey_pub = rct::rct2pk(rct::scalarmultKey(rct::pk2rct(P_change), rct::sk2rct(s)));

    // Calculate the actual return address, because the field we already have is actually the TX pubkey to use
    // return address = Hs(syF || i)G + P_change = Hs(saP_change || i)G + P_change
    // Generate the uniqueness for the input

    crypto::public_key syF = rct::rct2pk(rct::scalarmultKey(rct::scalarmultKey(key_F, key_y), rct::sk2rct(s)));
    crypto::key_derivation derivation_syF = AUTO_VAL_INIT(derivation_syF);
    std::memcpy(derivation_syF.data, syF.data, sizeof(crypto::key_derivation));
      
    crypto::public_key out_eph_public_key = AUTO_VAL_INIT(out_eph_public_key);
    r = crypto::derive_public_key(derivation_syF, uniqueness, P_change, out_eph_public_key);
    CHECK_AND_ASSERT_MES(r, false, "while creating protocol_tx outs: failed to derive_public_key(" << derivation_syF << ", " << key_y << ", "<< P_change << ")");

    // Sanity checks
    crypto::public_key P_change_verify = crypto::null_pkey;
    r = crypto::derive_subaddress_public_key(out_eph_public_key, derivation_syF, uniqueness, P_change_verify);
    CHECK_AND_ASSERT_MES(r, false, "while creating protocol_tx outs: failed sanity check calling derive_subaddress_public_key(" << out_eph_public_key << ", " << derivation_syF << ", " << key_y << ", " << P_change_verify << ")");
    CHECK_AND_ASSERT_MES(P_change == P_change_verify, false, "while creating protocol_tx outs: failed sanity check (keys do not match)");

    // All is well - copy the return address
    F = out_eph_public_key;
    
    LOG_ERROR("*****************************************************************************");
    //LOG_ERROR("uniqueness: " << uniqueness.data);
    LOG_ERROR("txkey_pub : " << txkey_pub);
    LOG_ERROR("a         : " << sender_account_keys.m_view_secret_key);
    LOG_ERROR("s         : " << s);
    LOG_ERROR("y         : " << key_y);
    LOG_ERROR("P_change  : " << P_change);
    LOG_ERROR("aP_change : " << pk_aP_change);
    LOG_ERROR("F         : " << F);
    LOG_ERROR("*****************************************************************************");
    
    return true;
  }
  //---------------------------------------------------------------
  bool get_tx_type(const std::string& source, const std::string& destination, transaction_type& type) {

    // check both source and destination are supported.
    if (std::find(oracle::ASSET_TYPES.begin(), oracle::ASSET_TYPES.end(), source) == oracle::ASSET_TYPES.end()) {
      LOG_ERROR("Source Asset type " << source << " is not supported! Rejecting..");
      return false;
    }
    // Allow an empty destination for BURN commands only
    if (destination != "BURN") {
      if (std::find(oracle::ASSET_TYPES.begin(), oracle::ASSET_TYPES.end(), destination) == oracle::ASSET_TYPES.end()) {
        LOG_ERROR("Destination Asset type " << destination << " is not supported! Rejecting..");
        return false;
      }
    }

    // Find the tx type
    if (source == destination) {
      type = transaction_type::TRANSFER;
    } else if (destination == "BURN") {
      type = transaction_type::BURN;
    } else {
      type = transaction_type::CONVERT;
    }

    // Return success to caller
    return true;
  }
  //---------------------------------------------------------------
  bool construct_tx_with_tx_key(
    const account_keys& sender_account_keys,
    const std::unordered_map<crypto::public_key, subaddress_index>& subaddresses,
    std::vector<tx_source_entry>& sources,
    std::vector<tx_destination_entry>& destinations,
    const uint8_t hf_version,
    const std::string& source_asset,
    const std::string& dest_asset,
    const transaction_type& tx_type,
    const boost::optional<cryptonote::account_public_address>& change_addr,
    const std::vector<uint8_t> &extra,
    transaction& tx,
    uint64_t unlock_time,
    const crypto::secret_key &tx_key,
    const std::vector<crypto::secret_key> &additional_tx_keys,
    bool rct,
    const rct::RCTConfig &rct_config,
    bool shuffle_outs,
    bool use_view_tags
  )
  {
    hw::device &hwdev = sender_account_keys.get_device();

    if (sources.empty())
    {
      LOG_ERROR("Empty sources");
      return false;
    }

    std::vector<rct::key> amount_keys;
    tx.set_null();
    amount_keys.clear();

    if (hf_version >= HF_VERSION_SLIPPAGE_YIELD) {
      tx.version = 3;
    } else {
      tx.version = 2;
    }

    tx.extra = extra;
    crypto::public_key txkey_pub;

    tx.type = tx_type;
    
    // Set the source and destination asset_type values
    tx.source_asset_type = source_asset;
    tx.destination_asset_type = dest_asset;
    
    // if we have a stealth payment id, find it and encrypt it with the tx key now
    std::vector<tx_extra_field> tx_extra_fields;
    if (parse_tx_extra(tx.extra, tx_extra_fields))
    {
      bool add_dummy_payment_id = true;
      tx_extra_nonce extra_nonce;
      if (find_tx_extra_field_by_type(tx_extra_fields, extra_nonce))
      {
        crypto::hash payment_id = null_hash;
        crypto::hash8 payment_id8 = null_hash8;
        if (get_encrypted_payment_id_from_tx_extra_nonce(extra_nonce.nonce, payment_id8))
        {
          LOG_PRINT_L2("Encrypting payment id " << payment_id8);
          crypto::public_key view_key_pub = get_destination_view_key_pub(destinations, change_addr);
          if (view_key_pub == null_pkey)
          {
            LOG_ERROR("Destinations have to have exactly one output to support encrypted payment ids");
            return false;
          }

          if (!hwdev.encrypt_payment_id(payment_id8, view_key_pub, tx_key))
          {
            LOG_ERROR("Failed to encrypt payment id");
            return false;
          }

          std::string extra_nonce;
          set_encrypted_payment_id_to_tx_extra_nonce(extra_nonce, payment_id8);
          remove_field_from_tx_extra(tx.extra, typeid(tx_extra_nonce));
          if (!add_extra_nonce_to_tx_extra(tx.extra, extra_nonce))
          {
            LOG_ERROR("Failed to add encrypted payment id to tx extra");
            return false;
          }
          LOG_PRINT_L1("Encrypted payment ID: " << payment_id8);
          add_dummy_payment_id = false;
        }
        else if (get_payment_id_from_tx_extra_nonce(extra_nonce.nonce, payment_id))
        {
          add_dummy_payment_id = false;
        }
      }

      // we don't add one if we've got more than the usual 1 destination plus change
      if (destinations.size() > 2)
        add_dummy_payment_id = false;

      if (add_dummy_payment_id)
      {
        // if we have neither long nor short payment id, add a dummy short one,
        // this should end up being the vast majority of txes as time goes on
        std::string extra_nonce;
        crypto::hash8 payment_id8 = null_hash8;
        crypto::public_key view_key_pub = get_destination_view_key_pub(destinations, change_addr);
        if (view_key_pub == null_pkey)
        {
          LOG_ERROR("Failed to get key to encrypt dummy payment id with");
        }
        else
        {
          hwdev.encrypt_payment_id(payment_id8, view_key_pub, tx_key);
          set_encrypted_payment_id_to_tx_extra_nonce(extra_nonce, payment_id8);
          if (!add_extra_nonce_to_tx_extra(tx.extra, extra_nonce))
          {
            LOG_ERROR("Failed to add dummy encrypted payment id to tx extra");
            // continue anyway
          }
        }
      }
    }
    else
    {
      MWARNING("Failed to parse tx extra");
      tx_extra_fields.clear();
    }

    struct input_generation_context_data
    {
      keypair in_ephemeral;
    };
    std::vector<input_generation_context_data> in_contexts;

    uint64_t summary_inputs_money = 0;
    //fill inputs
    int idx = -1;
    for(const tx_source_entry& src_entr:  sources)
    {
      ++idx;
      if(src_entr.real_output >= src_entr.outputs.size())
      {
        LOG_ERROR("real_output index (" << src_entr.real_output << ")bigger than output_keys.size()=" << src_entr.outputs.size());
        return false;
      }
      summary_inputs_money += src_entr.amount;

      //key_derivation recv_derivation;
      in_contexts.push_back(input_generation_context_data());
      keypair& in_ephemeral = in_contexts.back().in_ephemeral;
      crypto::key_image img;

      const auto& out_key = reinterpret_cast<const crypto::public_key&>(src_entr.outputs[src_entr.real_output].second.dest);
      if(!generate_key_image_helper(sender_account_keys, subaddresses, out_key, src_entr.real_out_tx_key, src_entr.real_out_additional_tx_keys, src_entr.real_output_in_tx_index, in_ephemeral,img, hwdev, src_entr.origin_tx_data))
      {
        LOG_ERROR("Key image generation failed!");
        return false;
      }

      //check that derivated key is equal with real output key
      if(!(in_ephemeral.pub == src_entr.outputs[src_entr.real_output].second.dest) )
      {
        LOG_ERROR("derived public key mismatch with output public key at index " << idx << ", real out " << src_entr.real_output << "! "<< ENDL << "derived_key:"
          << string_tools::pod_to_hex(in_ephemeral.pub) << ENDL << "real output_public_key:"
          << string_tools::pod_to_hex(src_entr.outputs[src_entr.real_output].second.dest) );
        LOG_ERROR("amount " << src_entr.amount << ", rct " << src_entr.rct);
        LOG_ERROR("tx pubkey " << src_entr.real_out_tx_key << ", real_output_in_tx_index " << src_entr.real_output_in_tx_index);
        return false;
      }

      //put key image into tx input
      txin_to_key input_to_key;
      input_to_key.amount = src_entr.amount;
      input_to_key.k_image = img;
      input_to_key.asset_type = src_entr.asset_type;

      //fill outputs array and use relative offsets
      for(const tx_source_entry::output_entry& out_entry: src_entr.outputs)
        input_to_key.key_offsets.push_back(out_entry.first);

      input_to_key.key_offsets = absolute_output_offsets_to_relative(input_to_key.key_offsets);
      tx.vin.push_back(input_to_key);
    }

    if (shuffle_outs)
    {
      std::shuffle(destinations.begin(), destinations.end(), crypto::random_device{});
    }

    // sort ins by their key image
    std::vector<size_t> ins_order(sources.size());
    for (size_t n = 0; n < sources.size(); ++n)
      ins_order[n] = n;
    std::sort(ins_order.begin(), ins_order.end(), [&](const size_t i0, const size_t i1) {
      const txin_to_key &tk0 = boost::get<txin_to_key>(tx.vin[i0]);
      const txin_to_key &tk1 = boost::get<txin_to_key>(tx.vin[i1]);
      return memcmp(&tk0.k_image, &tk1.k_image, sizeof(tk0.k_image)) > 0;
    });
    tools::apply_permutation(ins_order, [&] (size_t i0, size_t i1) {
      std::swap(tx.vin[i0], tx.vin[i1]);
      std::swap(in_contexts[i0], in_contexts[i1]);
      std::swap(sources[i0], sources[i1]);
    });

    // figure out if we need to make additional tx pubkeys
    size_t num_stdaddresses = 0;
    size_t num_subaddresses = 0;
    account_public_address single_dest_subaddress;
    classify_addresses(destinations, change_addr, num_stdaddresses, num_subaddresses, single_dest_subaddress);

    // if this is a single-destination transfer to a subaddress, we set the tx pubkey to R=s*D
    if (num_stdaddresses == 0 && num_subaddresses == 1)
    {
      txkey_pub = rct::rct2pk(hwdev.scalarmultKey(rct::pk2rct(single_dest_subaddress.m_spend_public_key), rct::sk2rct(tx_key)));
    }
    else
    {
      txkey_pub = rct::rct2pk(hwdev.scalarmultBase(rct::sk2rct(tx_key)));
    }
    remove_field_from_tx_extra(tx.extra, typeid(tx_extra_pub_key));
    add_tx_pub_key_to_extra(tx, txkey_pub);

    std::vector<crypto::public_key> additional_tx_public_keys;

    // we don't need to include additional tx keys if:
    //   - all the destinations are standard addresses
    //   - there's only one destination which is a subaddress
    bool need_additional_txkeys = num_subaddresses > 0 && (num_stdaddresses > 0 || num_subaddresses > 1);
    if (need_additional_txkeys)
      CHECK_AND_ASSERT_MES(destinations.size() == additional_tx_keys.size(), false, "Wrong amount of additional tx keys");

    uint64_t summary_outs_money = 0;
    //fill outputs
    size_t output_index = 0;
    for(const tx_destination_entry& dst_entr: destinations)
    {
      CHECK_AND_ASSERT_MES(dst_entr.amount > 0 || tx.version > 1, false, "Destination with wrong amount: " << dst_entr.amount);
      crypto::public_key out_eph_public_key;
      crypto::view_tag view_tag;

      // Is this a BURN or CONVERT TX?
      if (tx_type == cryptonote::transaction_type::BURN || tx_type == cryptonote::transaction_type::CONVERT) {
        // Do not create outputs that are for the destination asset type - discard them as unused
        if (dst_entr.asset_type == dest_asset) {
          tx.amount_burnt += dst_entr.amount;
          tx.amount_slippage_limit = dst_entr.slippage_limit;
          continue;
        }
      } else if (tx_type == cryptonote::transaction_type::YIELD) {
        // Do not create outputs that are staked for yield - discard them as unused
        if (!dst_entr.is_change) {
          tx.amount_burnt += dst_entr.amount;
          continue;
        }
      }
      
      // Get the uniqueness for this TX
      CHECK_AND_ASSERT_MES(!tx.vin.empty(), false, "tx.vin[] is empty");
      CHECK_AND_ASSERT_MES(tx.vin[0].type() == typeid(cryptonote::txin_to_key), false, "incorrect tx.vin[0] type for YIELD TX");
      crypto::key_image k_image = boost::get<cryptonote::txin_to_key>(tx.vin[0]).k_image;
      ec_scalar uniqueness;
      CHECK_AND_ASSERT_MES(calculate_uniqueness(tx.type, k_image, 0, output_index, uniqueness), false, "Failed to calculate uniqueness for the transaction");
          
      hwdev.generate_output_ephemeral_keys(tx.version,sender_account_keys, txkey_pub, tx_key,
                                           dst_entr, change_addr, output_index,
                                           need_additional_txkeys, additional_tx_keys,
                                           additional_tx_public_keys, amount_keys, out_eph_public_key,
                                           use_view_tags, view_tag, uniqueness);

      tx_out out;
      cryptonote::set_tx_out(dst_entr.amount, dst_entr.asset_type, dst_entr.is_change ? 0 : unlock_time, out_eph_public_key, use_view_tags, view_tag, out);
      tx.vout.push_back(out);
      output_index++;
      summary_outs_money += dst_entr.amount;
    }
    CHECK_AND_ASSERT_MES(additional_tx_public_keys.size() == additional_tx_keys.size(), false, "Internal error creating additional public keys");
    
    remove_field_from_tx_extra(tx.extra, typeid(tx_extra_additional_pub_keys));

    // Is this a CONVERT tx?
    if (tx_type == cryptonote::transaction_type::CONVERT) {
      
      // Get the uniqueness for this TX - must be output zero we are interested in for a CONVERT or YIELD TX
      CHECK_AND_ASSERT_MES(!tx.vin.empty(), false, "tx.vin[] is empty");
      CHECK_AND_ASSERT_MES(tx.vin[0].type() == typeid(cryptonote::txin_to_key), false, "incorrect tx.vin[0] type for YIELD TX");
      crypto::key_image k_image = boost::get<cryptonote::txin_to_key>(tx.vin[0]).k_image;
      ec_scalar uniqueness;
      CHECK_AND_ASSERT_MES(calculate_uniqueness(tx.type, k_image, 0, 0, uniqueness), false, "Failed to calculate uniqueness for the transaction");

      // Get the output public key for the change output
      crypto::public_key P_change = crypto::null_pkey;
      CHECK_AND_ASSERT_MES(tx.vout.size() == 1, false, "Internal error - too many outputs for CONVERT tx");
      CHECK_AND_ASSERT_MES(cryptonote::get_output_public_key(tx.vout[0], P_change), false, "Internal error - failed to get TX change output public key");
      CHECK_AND_ASSERT_MES(P_change != crypto::null_pkey, false, "Internal error - not found TX change output for CONVERT tx");

      // Now generate the return address and TX pubkey
      CHECK_AND_ASSERT_MES(get_return_address(tx.version, uniqueness, sender_account_keys, P_change, txkey_pub, tx.return_address, tx.return_pubkey, hwdev), false, "Failed to get protocol destination address");

    } else if (tx_type == cryptonote::transaction_type::YIELD) {
      
      // Get the uniqueness for this TX - must be output zero we are interested in for a CONVERT or YIELD TX
      CHECK_AND_ASSERT_MES(!tx.vin.empty(), false, "tx.vin[] is empty");
      CHECK_AND_ASSERT_MES(tx.vin[0].type() == typeid(cryptonote::txin_to_key), false, "incorrect tx.vin[0] type for YIELD TX");
      crypto::key_image k_image = boost::get<cryptonote::txin_to_key>(tx.vin[0]).k_image;
      ec_scalar uniqueness;
      CHECK_AND_ASSERT_MES(calculate_uniqueness(tx.type, k_image, 0, 0, uniqueness), false, "Failed to calculate uniqueness for the transaction");

      // Get the output public key for the change output
      crypto::public_key P_change = crypto::null_pkey;
      CHECK_AND_ASSERT_MES(tx.vout.size() == 1, false, "Internal error - incorrect number of outputs for YIELD tx");
      CHECK_AND_ASSERT_MES(cryptonote::get_output_public_key(tx.vout[0], P_change), false, "Internal error - failed to get TX change output public key");
      CHECK_AND_ASSERT_MES(P_change != crypto::null_pkey, false, "Internal error - not found TX change output for YIELD tx");
      
      // Now generate the return address and TX pubkey
      CHECK_AND_ASSERT_MES(get_return_address(tx.version, uniqueness, sender_account_keys, P_change, txkey_pub, tx.return_address, tx.return_pubkey, hwdev), false, "Failed to get protocol destination address");
    }

    LOG_PRINT_L2("tx pubkey: " << txkey_pub);
    LOG_PRINT_L2("return tx pubkey: " << tx.return_pubkey);
    if (need_additional_txkeys)
    {
      LOG_PRINT_L2("additional tx pubkeys: ");
      for (size_t i = 0; i < additional_tx_public_keys.size(); ++i)
        LOG_PRINT_L2(additional_tx_public_keys[i]);
      add_additional_tx_pub_keys_to_extra(tx.extra, additional_tx_public_keys);
    }

    if (!sort_tx_extra(tx.extra, tx.extra))
      return false;

    CHECK_AND_ASSERT_MES(tx.extra.size() <= MAX_TX_EXTRA_SIZE, false, "TX extra size (" << tx.extra.size() << ") is greater than max allowed (" << MAX_TX_EXTRA_SIZE << ")");

    //check money
    if(summary_outs_money > summary_inputs_money )
    {
      LOG_ERROR("Transaction inputs money ("<< summary_inputs_money << ") less than outputs money (" << summary_outs_money << ")");
      return false;
    }

    // check for watch only wallet
    bool zero_secret_key = true;
    for (size_t i = 0; i < sizeof(sender_account_keys.m_spend_secret_key); ++i)
      zero_secret_key &= (sender_account_keys.m_spend_secret_key.data[i] == 0);
    if (zero_secret_key)
    {
      MDEBUG("Null secret key, skipping signatures");
    }

    if (tx.version == 1)
    {
      //generate ring signatures
      crypto::hash tx_prefix_hash;
      get_transaction_prefix_hash(tx, tx_prefix_hash);

      std::stringstream ss_ring_s;
      size_t i = 0;
      for(const tx_source_entry& src_entr:  sources)
      {
        ss_ring_s << "pub_keys:" << ENDL;
        std::vector<const crypto::public_key*> keys_ptrs;
        std::vector<crypto::public_key> keys(src_entr.outputs.size());
        size_t ii = 0;
        for(const tx_source_entry::output_entry& o: src_entr.outputs)
        {
          keys[ii] = rct2pk(o.second.dest);
          keys_ptrs.push_back(&keys[ii]);
          ss_ring_s << o.second.dest << ENDL;
          ++ii;
        }

        tx.signatures.push_back(std::vector<crypto::signature>());
        std::vector<crypto::signature>& sigs = tx.signatures.back();
        sigs.resize(src_entr.outputs.size());
        if (!zero_secret_key)
          crypto::generate_ring_signature(tx_prefix_hash, boost::get<txin_to_key>(tx.vin[i]).k_image, keys_ptrs, in_contexts[i].in_ephemeral.sec, src_entr.real_output, sigs.data());
        ss_ring_s << "signatures:" << ENDL;
        std::for_each(sigs.begin(), sigs.end(), [&](const crypto::signature& s){ss_ring_s << s << ENDL;});
        ss_ring_s << "prefix_hash:" << tx_prefix_hash << ENDL << "in_ephemeral_key: " << in_contexts[i].in_ephemeral.sec << ENDL << "real_output: " << src_entr.real_output << ENDL;
        i++;
      }

      MCINFO("construct_tx", "transaction_created: " << get_transaction_hash(tx) << ENDL << obj_to_json_str(tx) << ENDL << ss_ring_s.str());
    }
    else
    {
      size_t n_total_outs = sources[0].outputs.size(); // only for non-simple rct

      // the non-simple version is slightly smaller, but assumes all real inputs
      // are on the same index, so can only be used if there just one ring.
      bool use_simple_rct = sources.size() > 1 || rct_config.range_proof_type != rct::RangeProofBorromean;

      if (!use_simple_rct)
      {
        // non simple ringct requires all real inputs to be at the same index for all inputs
        for(const tx_source_entry& src_entr:  sources)
        {
          if(src_entr.real_output != sources.begin()->real_output)
          {
            LOG_ERROR("All inputs must have the same index for non-simple ringct");
            return false;
          }
        }

        // enforce same mixin for all outputs
        for (size_t i = 1; i < sources.size(); ++i) {
          if (n_total_outs != sources[i].outputs.size()) {
            LOG_ERROR("Non-simple ringct transaction has varying ring size");
            return false;
          }
        }
      }

      uint64_t amount_in = 0, amount_out = 0;
      rct::ctkeyV inSk;
      inSk.reserve(sources.size());
      // mixRing indexing is done the other way round for simple
      rct::ctkeyM mixRing(use_simple_rct ? sources.size() : n_total_outs);
      rct::keyV destinations;
      std::vector<uint64_t> inamounts, outamounts;
      std::vector<std::string> destination_asset_types;
      std::vector<unsigned int> index;
      for (size_t i = 0; i < sources.size(); ++i)
      {
        rct::ctkey ctkey;
        amount_in += sources[i].amount;
        inamounts.push_back(sources[i].amount);
        index.push_back(sources[i].real_output);
        // inSk: (secret key, mask)
        ctkey.dest = rct::sk2rct(in_contexts[i].in_ephemeral.sec);
        ctkey.mask = sources[i].mask;
        inSk.push_back(ctkey);
        memwipe(&ctkey, sizeof(rct::ctkey));
        // inPk: (public key, commitment)
        // will be done when filling in mixRing
      }
      for (size_t i = 0; i < tx.vout.size(); ++i)
      {
        crypto::public_key output_public_key;
        bool ok = get_output_public_key(tx.vout[i], output_public_key);
        if (!ok) {
          LOG_ERROR("failed to get output public key for tx.vout[" << i << "]");
          return false;
        }
        std::string output_asset_type;
        ok = cryptonote::get_output_asset_type(tx.vout[i], output_asset_type);
        if (!ok) {
          LOG_ERROR("failed to get output asset type for tx.vout[" << i << "]");
          return false;
        }
        destinations.push_back(rct::pk2rct(output_public_key));
        destination_asset_types.push_back(output_asset_type);
        outamounts.push_back(tx.vout[i].amount);
        amount_out += tx.vout[i].amount;
      }

      if (use_simple_rct)
      {
        // mixRing indexing is done the other way round for simple
        for (size_t i = 0; i < sources.size(); ++i)
        {
          mixRing[i].resize(sources[i].outputs.size());
          for (size_t n = 0; n < sources[i].outputs.size(); ++n)
          {
            mixRing[i][n] = sources[i].outputs[n].second;
          }
        }
      }
      else
      {
        for (size_t i = 0; i < n_total_outs; ++i) // same index assumption
        {
          mixRing[i].resize(sources.size());
          for (size_t n = 0; n < sources.size(); ++n)
          {
            mixRing[i][n] = sources[n].outputs[i].second;
          }
        }
      }

      // fee
      uint64_t fee = 0;
      if (!use_simple_rct && amount_in > amount_out)
        outamounts.push_back(amount_in - amount_out);
      else
        fee = summary_inputs_money - summary_outs_money - tx.amount_burnt;

      // zero out all amounts to mask rct outputs, real amounts are now encrypted
      for (size_t i = 0; i < tx.vin.size(); ++i)
      {
        if (sources[i].rct)
          boost::get<txin_to_key>(tx.vin[i]).amount = 0;
      }
      std::vector<bool> zero_masks;
      zero_masks.reserve(tx.vout.size());
      for (size_t i = 0; i < tx.vout.size(); ++i) {
        if (tx.type == cryptonote::transaction_type::YIELD) {
          uint64_t unlock_time = 0;
          bool ok = get_output_unlock_time(tx.vout[i], unlock_time);
          if (!ok) {
            LOG_ERROR("failed to get output asset type for tx.vout[" << i << "]");
            return false;
          }
          if (unlock_time == 0) {
            zero_masks.emplace_back(false);
          } else {
            zero_masks.emplace_back(true);
          }
        } else {
          zero_masks.emplace_back(false);
        }

        // Clear the amount in the output
        tx.vout[i].amount = 0;
      }
      
      crypto::hash tx_prefix_hash;
      get_transaction_prefix_hash(tx, tx_prefix_hash, hwdev);
      rct::ctkeyV outSk;
      if (use_simple_rct)
        tx.rct_signatures = rct::genRctSimple(
          rct::hash2rct(tx_prefix_hash),
          inSk, 
          destinations,
          tx_type,
          source_asset,
          destination_asset_types,
          zero_masks,
          inamounts,
          outamounts,
          fee,
          mixRing,
          amount_keys,
          index,
          outSk,
          rct_config,
          hwdev
        );
      else
        tx.rct_signatures = rct::genRct(rct::hash2rct(tx_prefix_hash), inSk, destinations, outamounts, mixRing, amount_keys, sources[0].real_output, outSk, rct_config, hwdev); // same index assumption
      memwipe(inSk.data(), inSk.size() * sizeof(rct::ctkey));

      CHECK_AND_ASSERT_MES(tx.vout.size() == outSk.size(), false, "outSk size does not match vout");

      MCINFO("construct_tx", "transaction_created: " << get_transaction_hash(tx) << ENDL << obj_to_json_str(tx) << ENDL);
    }

    tx.invalidate_hashes();

    return true;
  }
  //---------------------------------------------------------------
  bool construct_tx_and_get_tx_key(const account_keys& sender_account_keys, const std::unordered_map<crypto::public_key, subaddress_index>& subaddresses, std::vector<tx_source_entry>& sources, std::vector<tx_destination_entry>& destinations, const uint8_t hf_version, const std::string& source_asset, const std::string& dest_asset, const transaction_type& tx_type, const boost::optional<cryptonote::account_public_address>& change_addr, const std::vector<uint8_t> &extra, transaction& tx, uint64_t unlock_time, crypto::secret_key &tx_key, std::vector<crypto::secret_key> &additional_tx_keys, bool rct, const rct::RCTConfig &rct_config, bool use_view_tags)
  {
    hw::device &hwdev = sender_account_keys.get_device();
    hwdev.open_tx(tx_key);
    try {
      // figure out if we need to make additional tx pubkeys
      size_t num_stdaddresses = 0;
      size_t num_subaddresses = 0;
      account_public_address single_dest_subaddress;
      classify_addresses(destinations, change_addr, num_stdaddresses, num_subaddresses, single_dest_subaddress);
      bool need_additional_txkeys = num_subaddresses > 0 && (num_stdaddresses > 0 || num_subaddresses > 1);
      if (need_additional_txkeys)
      {
        additional_tx_keys.clear();
        for (size_t i = 0; i < destinations.size(); ++i)
        {
          additional_tx_keys.push_back(keypair::generate(sender_account_keys.get_device()).sec);
        }
      }

      bool shuffle_outs = true;
      bool r = construct_tx_with_tx_key(sender_account_keys, subaddresses, sources, destinations, hf_version, source_asset, dest_asset, tx_type, change_addr, extra, tx, unlock_time, tx_key, additional_tx_keys, rct, rct_config, shuffle_outs, use_view_tags);
      hwdev.close_tx();
      return r;
    } catch(...) {
      hwdev.close_tx();
      throw;
    }
  }
  //---------------------------------------------------------------
  bool construct_tx(const account_keys& sender_account_keys, std::vector<tx_source_entry>& sources, const std::vector<tx_destination_entry>& destinations, const uint8_t hf_version, const std::string& source_asset, const std::string& dest_asset, const cryptonote::transaction_type& tx_type, const boost::optional<cryptonote::account_public_address>& change_addr, const std::vector<uint8_t> &extra, transaction& tx, uint64_t unlock_time)
  {
     std::unordered_map<crypto::public_key, cryptonote::subaddress_index> subaddresses;
     subaddresses[sender_account_keys.m_account_address.m_spend_public_key] = {0,0};
     crypto::secret_key tx_key;
     std::vector<crypto::secret_key> additional_tx_keys;
     std::vector<tx_destination_entry> destinations_copy = destinations;
     return construct_tx_and_get_tx_key(sender_account_keys, subaddresses, sources, destinations_copy, hf_version, source_asset, dest_asset, tx_type, change_addr, extra, tx, unlock_time, tx_key, additional_tx_keys, false, { rct::RangeProofBorromean, 0});
  }
  //---------------------------------------------------------------
  bool generate_genesis_block(
      block& bl
    , std::string const & genesis_tx
    , uint32_t nonce
    )
  {
    //genesis block
    bl = {};
    bl.protocol_tx.set_null();
    bl.protocol_tx.type = cryptonote::transaction_type::PROTOCOL;

    blobdata tx_bl;
    bool r = string_tools::parse_hexstr_to_binbuff(genesis_tx, tx_bl);
    CHECK_AND_ASSERT_MES(r, false, "failed to parse coinbase tx from hard coded blob");
    r = parse_and_validate_tx_from_blob(tx_bl, bl.miner_tx);
    CHECK_AND_ASSERT_MES(r, false, "failed to parse coinbase tx from hard coded blob");
    bl.major_version = CURRENT_BLOCK_MAJOR_VERSION;
    bl.minor_version = CURRENT_BLOCK_MINOR_VERSION;
    bl.timestamp = 0;
    bl.nonce = nonce;
    miner::find_nonce_for_given_block([](const cryptonote::block &b, uint64_t height, const crypto::hash *seed_hash, unsigned int threads, crypto::hash &hash){
      return cryptonote::get_block_longhash(NULL, b, hash, height, seed_hash, threads);
    }, bl, 1, 0, NULL);
    bl.invalidate_hashes();
    return true;
  }
  //---------------------------------------------------------------
  void get_altblock_longhash(const block& b, crypto::hash& res, const crypto::hash& seed_hash)
  {
    blobdata bd = get_block_hashing_blob(b);
    rx_slow_hash(seed_hash.data, bd.data(), bd.size(), res.data);
  }

  bool get_block_longhash(const Blockchain *pbc, const blobdata& bd, crypto::hash& res, const uint64_t height, const int major_version, const crypto::hash *seed_hash, const int miners)
  {
    // block 202612 bug workaround
    if (height == 202612)
    {
      static const std::string longhash_202612 = "84f64766475d51837ac9efbef1926486e58563c95a19fef4aec3254f03000000";
      epee::string_tools::hex_to_pod(longhash_202612, res);
      return true;
    }
    crypto::hash hash;
    if (pbc != NULL)
    {
      const uint64_t seed_height = rx_seedheight(height);
      hash = seed_hash ? *seed_hash : pbc->get_pending_block_id_by_height(seed_height);
    } else
    {
      memset(&hash, 0, sizeof(hash));  // only happens when generating genesis block
    }
    rx_slow_hash(hash.data, bd.data(), bd.size(), res.data);
    return true;
  }

  bool get_block_longhash(const Blockchain *pbc, const block& b, crypto::hash& res, const uint64_t height, const crypto::hash *seed_hash, const int miners)
  {
    blobdata bd = get_block_hashing_blob(b);
	return get_block_longhash(pbc, bd, res, height, b.major_version, seed_hash, miners);
  }

  crypto::hash get_block_longhash(const Blockchain *pbc, const block& b, const uint64_t height, const crypto::hash *seed_hash, const int miners)
  {
    crypto::hash p = crypto::null_hash;
    get_block_longhash(pbc, b, p, height, seed_hash, miners);
    return p;
  }
}
