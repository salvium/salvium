// Copyright (c) 2021, The Monero Project
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

#include "multisig_tx_builder_ringct.h"

#include "int-util.h"
#include "memwipe.h"

#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_basic/account.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_config.h"
#include "cryptonote_core/cryptonote_tx_utils.h"
#include "device/device.hpp"
#include "multisig_clsag_context.h"
#include "ringct/bulletproofs.h"
#include "ringct/bulletproofs_plus.h"
#include "ringct/rctSigs.h"

#include <boost/multiprecision/cpp_int.hpp>

#include <algorithm>
#include <cstring>
#include <limits>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "multisig"

namespace multisig {

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
  
namespace signing {
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
bool view_tag_required(const int bp_version)
{
  // view tags were introduced at the same time as BP+, so they are needed after BP+ (v4 and later)
  if (bp_version <= 3)
    return false;
  else
    return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static void sort_sources(
  std::vector<cryptonote::tx_source_entry>& sources
)
{
  std::sort(sources.begin(), sources.end(), [](const auto& lhs, const auto& rhs){
    const rct::key& ki0 = lhs.multisig_kLRki.ki;
    const rct::key& ki1 = rhs.multisig_kLRki.ki;
    return memcmp(&ki0, &ki1, sizeof(rct::key)) > 0;
  });
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool compute_keys_for_sources(
  const cryptonote::account_keys& account_keys,
  const std::vector<cryptonote::tx_source_entry>& sources,
  const std::uint32_t subaddr_account,
  const std::set<std::uint32_t>& subaddr_minor_indices,
  rct::keyV& input_secret_keys
)
{
  const std::size_t num_sources = sources.size();
  hw::device& hwdev = account_keys.get_device();
  std::unordered_map<crypto::public_key, cryptonote::subaddress_index> subaddresses;
  for (const std::uint32_t minor_index: subaddr_minor_indices) {
    subaddresses[hwdev.get_subaddress_spend_public_key(
      account_keys,
      {subaddr_account, minor_index}
    )] = {subaddr_account, minor_index};
  }
  input_secret_keys.resize(num_sources);
  for (std::size_t i = 0; i < num_sources; ++i) {
    const auto& src = sources[i];
    crypto::key_image tmp_key_image;
    cryptonote::keypair tmp_keys;
    if (src.real_output >= src.outputs.size())
      return false;

    /*
    // Populate this struct if you want to make use of multisig for Salvium!!!
    assert(false);
    cryptonote::origin_data origin_tx_data;
    */
    bool use_origin_data = (src.origin_tx_data.tx_type != cryptonote::transaction_type::UNSET);
    rct::salvium_input_data_t sid;

    if (not cryptonote::generate_key_image_helper(
      account_keys,
      subaddresses,
      rct::rct2pk(src.outputs[src.real_output].second.dest),
      src.real_out_tx_key,
      src.real_out_additional_tx_keys,
      src.real_output_in_tx_index,
      tmp_keys,
      tmp_key_image,
      hwdev,
      use_origin_data,
      src.origin_tx_data,
      sid
    )) {
      return false;
    }
    input_secret_keys[i] = rct::sk2rct(tmp_keys.sec);
  }
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static void shuffle_destinations(
  std::vector<cryptonote::tx_destination_entry>& destinations
)
{
  std::shuffle(destinations.begin(), destinations.end(), crypto::random_device{});
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool set_tx_extra(
  const cryptonote::account_keys& account_keys,
  const std::vector<cryptonote::tx_destination_entry>& destinations,
  const cryptonote::tx_destination_entry& change,
  const crypto::secret_key& tx_secret_key,
  const crypto::public_key& tx_public_key,
  const std::vector<crypto::public_key>& tx_aux_public_keys,
  const std::vector<std::uint8_t>& extra,
  cryptonote::transaction& tx
)
{
  hw::device &hwdev = account_keys.get_device();
  tx.extra = extra;
  // if we have a stealth payment id, find it and encrypt it with the tx key now
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  if (cryptonote::parse_tx_extra(tx.extra, tx_extra_fields))
  {
    bool add_dummy_payment_id = true;
    cryptonote::tx_extra_nonce extra_nonce;
    if (cryptonote::find_tx_extra_field_by_type(tx_extra_fields, extra_nonce))
    {
      crypto::hash payment_id = crypto::null_hash;
      crypto::hash8 payment_id8 = crypto::null_hash8;
      if (cryptonote::get_encrypted_payment_id_from_tx_extra_nonce(extra_nonce.nonce, payment_id8))
      {
        LOG_PRINT_L2("Encrypting payment id " << payment_id8);
        crypto::public_key view_key_pub = cryptonote::get_destination_view_key_pub(destinations, change.addr);
        if (view_key_pub == crypto::null_pkey)
        {
          // valid combinations:
          // - 1 output with encrypted payment ID, dummy change output (0 amount)
          // - 0 outputs,                          1 change output with encrypted payment ID
          // - 1 output with encrypted payment ID, 1 change output
          LOG_ERROR("Destinations have to have exactly one output to support encrypted payment ids");
          return false;
        }

        if (!hwdev.encrypt_payment_id(payment_id8, view_key_pub, tx_secret_key))
        {
          LOG_ERROR("Failed to encrypt payment id");
          return false;
        }

        std::string extra_nonce_updated;
        cryptonote::set_encrypted_payment_id_to_tx_extra_nonce(extra_nonce_updated, payment_id8);
        cryptonote::remove_field_from_tx_extra(tx.extra, typeid(cryptonote::tx_extra_nonce));
        if (!cryptonote::add_extra_nonce_to_tx_extra(tx.extra, extra_nonce_updated))
        {
          LOG_ERROR("Failed to add encrypted payment id to tx extra");
          return false;
        }
        LOG_PRINT_L1("Encrypted payment ID: " << payment_id8);
        add_dummy_payment_id = false;
      }
      else if (cryptonote::get_payment_id_from_tx_extra_nonce(extra_nonce.nonce, payment_id))
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
      std::string extra_nonce_updated;
      crypto::hash8 payment_id8 = crypto::null_hash8;
      crypto::public_key view_key_pub = cryptonote::get_destination_view_key_pub(destinations, change.addr);
      if (view_key_pub == crypto::null_pkey)
      {
        LOG_ERROR("Failed to get key to encrypt dummy payment id with");
      }
      else
      {
        hwdev.encrypt_payment_id(payment_id8, view_key_pub, tx_secret_key);
        cryptonote::set_encrypted_payment_id_to_tx_extra_nonce(extra_nonce_updated, payment_id8);
        if (!cryptonote::add_extra_nonce_to_tx_extra(tx.extra, extra_nonce_updated))
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

  cryptonote::remove_field_from_tx_extra(tx.extra, typeid(cryptonote::tx_extra_pub_key));
  cryptonote::add_tx_pub_key_to_extra(tx.extra, tx_public_key);
  cryptonote::remove_field_from_tx_extra(tx.extra, typeid(cryptonote::tx_extra_additional_pub_keys));
  LOG_PRINT_L2("tx pubkey: " << tx_public_key);
  if (tx_aux_public_keys.size())
  {
    LOG_PRINT_L2("additional tx pubkeys: ");
    for (size_t i = 0; i < tx_aux_public_keys.size(); ++i)
      LOG_PRINT_L2(tx_aux_public_keys[i]);
    cryptonote::add_additional_tx_pub_keys_to_extra(tx.extra, tx_aux_public_keys);
  }
  if (not cryptonote::sort_tx_extra(tx.extra, tx.extra))
    return false;
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static void make_tx_secret_key_seed(const crypto::secret_key& tx_secret_key_entropy,
  const std::vector<cryptonote::tx_source_entry>& sources,
  crypto::secret_key& tx_secret_key_seed)
{
  // seed = H(H("domain separator"), entropy, {KI})
  static const std::string domain_separator{config::HASH_KEY_MULTISIG_TX_PRIVKEYS_SEED};

  rct::keyV hash_context;
  hash_context.reserve(2 + sources.size());
  auto hash_context_wiper = epee::misc_utils::create_scope_leave_handler([&]{
      memwipe(hash_context.data(), hash_context.size());
    });
  hash_context.emplace_back();
  rct::cn_fast_hash(hash_context.back(), domain_separator.data(), domain_separator.size());  //domain sep
  hash_context.emplace_back(rct::sk2rct(tx_secret_key_entropy));  //entropy

  for (const cryptonote::tx_source_entry& source : sources)
    hash_context.emplace_back(source.multisig_kLRki.ki);  //{KI}

  // set the seed
  tx_secret_key_seed = rct::rct2sk(rct::cn_fast_hash(hash_context));
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static void make_tx_secret_keys(const crypto::secret_key& tx_secret_key_seed,
  const std::size_t num_tx_keys,
  std::vector<crypto::secret_key>& tx_secret_keys)
{
  // make tx secret keys as a hash chain of the seed
  // h1 = H_n(seed || H("domain separator"))
  // h2 = H_n(seed || h1)
  // h3 = H_n(seed || h2)
  // ...
  static const std::string domain_separator{config::HASH_KEY_MULTISIG_TX_PRIVKEYS};

  rct::keyV hash_context;
  hash_context.resize(2);
  auto hash_context_wiper = epee::misc_utils::create_scope_leave_handler([&]{
      memwipe(hash_context.data(), hash_context.size());
    });
  hash_context[0] = rct::sk2rct(tx_secret_key_seed);
  rct::cn_fast_hash(hash_context[1], domain_separator.data(), domain_separator.size());

  tx_secret_keys.clear();
  tx_secret_keys.resize(num_tx_keys);

  for (crypto::secret_key& tx_secret_key : tx_secret_keys)
  {
    // advance the hash chain
    hash_context[1] = rct::hash_to_scalar(hash_context);

    // set this key
    tx_secret_key = rct::rct2sk(hash_context[1]);
  }
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool collect_tx_secret_keys(const std::vector<crypto::secret_key>& tx_secret_keys,
  crypto::secret_key& tx_secret_key,
  std::vector<crypto::secret_key>& tx_aux_secret_keys)
{
  if (tx_secret_keys.size() == 0)
    return false;

  tx_secret_key = tx_secret_keys[0];
  tx_aux_secret_keys.clear();
  tx_aux_secret_keys.reserve(tx_secret_keys.size() - 1);
  for (std::size_t tx_key_index{1}; tx_key_index < tx_secret_keys.size(); ++tx_key_index)
    tx_aux_secret_keys.emplace_back(tx_secret_keys[tx_key_index]);

  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool compute_keys_for_destinations(
  const cryptonote::account_keys& account_keys,
  const std::uint32_t subaddr_account,
  const std::vector<cryptonote::tx_destination_entry>& destinations,
  const cryptonote::tx_destination_entry& change,
  const std::vector<std::uint8_t>& extra,
  const bool use_view_tags,
  const bool reconstruction,
  const crypto::secret_key& tx_secret_key_seed,
  crypto::secret_key& tx_secret_key,
  std::vector<crypto::secret_key>& tx_aux_secret_keys,
  rct::keyV& output_public_keys,
  rct::keyV& output_amount_secret_keys,
  std::vector<std::string>& asset_types,
  std::vector<crypto::view_tag>& view_tags,
  std::vector<uint64_t>& destination_amounts,
  const cryptonote::transaction_type& tx_type,
  bool& found_change,
  std::size_t& change_index,
  cryptonote::transaction& unsigned_tx
)
{
  hw::device &hwdev = account_keys.get_device();

  // the change output must be directed to the local account
  if (change.addr != hwdev.get_subaddress(account_keys, {subaddr_account}))
    return false;

  // expect the change destination to be in the destination set
  if (std::find_if(destinations.begin(), destinations.end(),
                   [&change](const auto &destination) -> bool
                   {
                     return destination.addr == change.addr;
                   }) == destinations.end())
    return false;

  // collect non-change recipients into normal/subaddress buckets
  std::unordered_set<cryptonote::account_public_address> unique_subbaddr_recipients;
  std::unordered_set<cryptonote::account_public_address> unique_std_recipients;
  for(const auto& dst_entr: destinations) {
    if (dst_entr.addr == change.addr)
      continue;
    if (dst_entr.is_subaddress)
      unique_subbaddr_recipients.insert(dst_entr.addr);
    else
      unique_std_recipients.insert(dst_entr.addr);
  }

  // figure out how many tx secret keys are needed
  // - tx aux keys: add if there are > 1 non-change recipients, with at least one to a subaddress
  const std::size_t num_destinations = destinations.size();
  const bool need_tx_aux_keys = unique_subbaddr_recipients.size() + bool(unique_std_recipients.size()) > 1;

  const std::size_t num_tx_keys = 1 + (need_tx_aux_keys ? num_destinations : 0);

  // make tx secret keys
  std::vector<crypto::secret_key> all_tx_secret_keys;
  make_tx_secret_keys(tx_secret_key_seed, num_tx_keys, all_tx_secret_keys);

  // split up tx secret keys
  crypto::secret_key tx_secret_key_temp;
  std::vector<crypto::secret_key> tx_aux_secret_keys_temp;
  if (not collect_tx_secret_keys(all_tx_secret_keys, tx_secret_key_temp, tx_aux_secret_keys_temp))
    return false;

  if (reconstruction)
  {
    // when reconstructing, the tx secret keys should be reproducible from input seed
    if (!(tx_secret_key == tx_secret_key_temp))
      return false;
    if (!(tx_aux_secret_keys == tx_aux_secret_keys_temp))
      return false;
  }
  else
  {
    tx_secret_key = tx_secret_key_temp;
    tx_aux_secret_keys = std::move(tx_aux_secret_keys_temp);
  }

  // tx pub key: R
  crypto::public_key tx_public_key;
  if (unique_std_recipients.empty() && unique_subbaddr_recipients.size() == 1) {
    // if there is exactly 1 non-change recipient, and it's to a subaddress, then the tx pubkey = r*Ksi_nonchange_recipient
    tx_public_key = rct::rct2pk(
      hwdev.scalarmultKey(
        rct::pk2rct(unique_subbaddr_recipients.begin()->m_spend_public_key),
        rct::sk2rct(tx_secret_key)
    ));
  }
  else {
    // otherwise, the tx pub key = r*G
    // - if there are > 1 non-change recipients, with at least one to a subaddress, then the tx pubkey is not used
    //   (additional tx keys will be used instead)
    // - if all non-change recipients are to normal addresses, then the tx pubkey will be used by all recipients
    //   (including change recipient, even if change is to a subaddress)
    tx_public_key = rct::rct2pk(hwdev.scalarmultBase(rct::sk2rct(tx_secret_key)));
  }

  // additional tx pubkeys: R_t
  output_public_keys.clear();
  view_tags.clear();
  asset_types.clear();
  destination_amounts.clear();
  found_change = false;
  std::vector<crypto::public_key> tx_aux_public_keys;
  crypto::public_key temp_output_public_key;
  size_t output_index = 0;
  uint64_t amount_burnt = 0;
  uint64_t amount_slippage_limit = 0;
  for (std::size_t i = 0; i < num_destinations; ++i) {

    // Is this a BURN or CONVERT TX?
    if (tx_type == cryptonote::transaction_type::BURN || tx_type == cryptonote::transaction_type::CONVERT) {
      // Do not create outputs that are for the destination asset type - discard them as unused
      if (destinations[i].asset_type == unsigned_tx.destination_asset_type) {
        amount_burnt += destinations[i].amount;
        amount_slippage_limit = destinations[i].slippage_limit;
        continue;
      }
    } else if (tx_type == cryptonote::transaction_type::STAKE) {
      // Do not create outputs that are staked for yield - discard them as unused
      if (!destinations[i].is_change) {
        amount_burnt += destinations[i].amount;
        continue;
      }
    }

    crypto::view_tag vt; // Temporary variable to hold the view tag in case we create one
    if (not hwdev.generate_output_ephemeral_keys(
      unsigned_tx.version,
      account_keys,
      tx_public_key,
      tx_secret_key,
      destinations[i],
      change.addr,
      output_index,
      need_tx_aux_keys,
      tx_aux_secret_keys,
      tx_aux_public_keys,
      output_amount_secret_keys,
      temp_output_public_key,
      use_view_tags,
      vt
    )) {
      return false;
    }
    output_public_keys.push_back(rct::pk2rct(temp_output_public_key));
    asset_types.push_back(destinations[i].asset_type);
    if (use_view_tags)
      view_tags.push_back(vt);
    destination_amounts.push_back(destinations[i].amount);    
    if (destinations[i].is_change) {
      found_change = true;
      change_index = output_index; // Store the change_index - we will need this

      // Calculate the change spend key (x_change)
      
    }    
    output_index++;
  }

  //if (num_destinations != output_amount_secret_keys.size())
  //  return false;

  if (reconstruction) {
    // Verify the values match the unsigned_tx
    CHECK_AND_ASSERT_MES(amount_burnt == unsigned_tx.amount_burnt, false, "Internal error - amount_burnt does not match unsigned_tx");
    CHECK_AND_ASSERT_MES(amount_slippage_limit == unsigned_tx.amount_slippage_limit, false, "Internal error - amount_slippage_limit does not match unsigned_tx");
  } else {
    // Store the calculated values
    unsigned_tx.amount_burnt = amount_burnt;
    unsigned_tx.amount_slippage_limit = amount_slippage_limit;
  }
  
  CHECK_AND_ASSERT_MES(
    tx_aux_public_keys.size() == tx_aux_secret_keys.size(),
    false,
    "Internal error creating additional public keys"
  );

  if (not set_tx_extra(account_keys, destinations, change, tx_secret_key, tx_public_key, tx_aux_public_keys, extra, unsigned_tx))
    return false;

  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static void set_tx_inputs(
  const std::vector<cryptonote::tx_source_entry>& sources,
  cryptonote::transaction& unsigned_tx
)
{
  const std::size_t num_sources = sources.size();
  unsigned_tx.vin.resize(num_sources);
  for (std::size_t i = 0; i < num_sources; ++i) {
    std::vector<std::uint64_t> offsets;
    offsets.reserve(sources[i].outputs.size());
    for (const auto& e: sources[i].outputs)
      offsets.emplace_back(e.first);
    unsigned_tx.vin[i] = cryptonote::txin_to_key{
      .amount = 0,
      .asset_type = sources[i].asset_type,
      .key_offsets = cryptonote::absolute_output_offsets_to_relative(offsets),
      .k_image = rct::rct2ki(sources[i].multisig_kLRki.ki),
    };
  }
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool onetime_addresses_are_unique(const rct::keyV& output_public_keys)
{
  for (auto addr_it = output_public_keys.begin(); addr_it != output_public_keys.end(); ++addr_it)
  {
    if (std::find(output_public_keys.begin(), addr_it, *addr_it) != addr_it)
      return false;
  }

  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool set_tx_outputs(
  const rct::keyV& output_public_keys,
  const std::vector<std::string>& asset_types,
  cryptonote::transaction& unsigned_tx
)
{
  // sanity check: all onetime addresses should be unique
  if (not onetime_addresses_are_unique(output_public_keys))
    return false;

  // set the tx outputs
  const std::size_t num_destinations = output_public_keys.size();
  CHECK_AND_ASSERT_MES(asset_types.size() == num_destinations, false,
    "multisig signing protocol: internal error, asset_type array size mismatch.");
  unsigned_tx.vout.resize(num_destinations);
  for (std::size_t i = 0; i < num_destinations; ++i)
    cryptonote::set_tx_out(0, asset_types[i], 0, rct::rct2pk(output_public_keys[i]), false, crypto::view_tag{}, unsigned_tx.vout[i]);

  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool set_tx_outputs_with_view_tags(
  const rct::keyV& output_public_keys,
  const std::vector<std::string>& asset_types,
  const std::vector<crypto::view_tag>& view_tags,
  cryptonote::transaction& unsigned_tx
)
{
  // sanity check: all onetime addresses should be unique
  if (not onetime_addresses_are_unique(output_public_keys))
    return false;

  // set the tx outputs (with view tags)
  const std::size_t num_destinations = output_public_keys.size();
  CHECK_AND_ASSERT_MES(asset_types.size() == num_destinations, false,
    "multisig signing protocol: internal error, asset_type array size mismatch.");
  CHECK_AND_ASSERT_MES(view_tags.size() == num_destinations, false,
    "multisig signing protocol: internal error, view tag size mismatch.");
  unsigned_tx.vout.resize(num_destinations);
  for (std::size_t i = 0; i < num_destinations; ++i)
    cryptonote::set_tx_out(0, asset_types[i], 0, rct::rct2pk(output_public_keys[i]), true, view_tags[i], unsigned_tx.vout[i]);

  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static void make_new_range_proofs(const int bp_version,
  const std::vector<std::uint64_t>& output_amounts,
  const rct::keyV& output_amount_masks,
  rct::rctSigPrunable& sigs)
{
  sigs.bulletproofs.clear();
  sigs.bulletproofs_plus.clear();

  if (bp_version == 3)
    sigs.bulletproofs.push_back(rct::bulletproof_PROVE(output_amounts, output_amount_masks));
  else if (bp_version == 4)
    sigs.bulletproofs_plus.push_back(rct::bulletproof_plus_PROVE(output_amounts, output_amount_masks));
  else if (bp_version == 5)
    sigs.bulletproofs_plus.push_back(rct::bulletproof_plus_PROVE(output_amounts, output_amount_masks));
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool try_reconstruct_range_proofs(const int bp_version,
  const rct::rctSigPrunable& original_sigs,
  const std::size_t num_destinations,
  const rct::ctkeyV& output_public_keys,
  rct::rctSigPrunable& reconstructed_sigs)
{
  auto try_reconstruct_range_proofs =
    [&](const auto &original_range_proofs, auto &new_range_proofs) -> bool
    {
      if (original_range_proofs.size() != 1)
        return false;

      new_range_proofs = original_range_proofs;
      new_range_proofs[0].V.resize(num_destinations);
      for (std::size_t i = 0; i < num_destinations; ++i)
        new_range_proofs[0].V[i] = rct::scalarmultKey(output_public_keys[i].mask, rct::INV_EIGHT);

      return true;
    };

  if (bp_version == 3)
  {
    if (not try_reconstruct_range_proofs(original_sigs.bulletproofs, reconstructed_sigs.bulletproofs))
      return false;
    return rct::bulletproof_VERIFY(reconstructed_sigs.bulletproofs);
  }
  else if (bp_version == 4)
  {
    if (not try_reconstruct_range_proofs(original_sigs.bulletproofs_plus, reconstructed_sigs.bulletproofs_plus))
      return false;
    return rct::bulletproof_plus_VERIFY(reconstructed_sigs.bulletproofs_plus);
  }
  else if (bp_version == 5)
  {
    if (not try_reconstruct_range_proofs(original_sigs.bulletproofs_plus, reconstructed_sigs.bulletproofs_plus))
      return false;
    return rct::bulletproof_plus_VERIFY(reconstructed_sigs.bulletproofs_plus);
  }

  return false;
}
//----------------------------------------------------------------------------------------------------------------------
static bool set_tx_return_address_information(const uint8_t hf_version,
                                              const cryptonote::account_keys& account_keys,
                                              const bool reconstruction,
                                              size_t change_index,
                                              crypto::public_key& txkey_pub,
                                              cryptonote::transaction& unsigned_tx
                                              )
{
  if (unsigned_tx.type == cryptonote::transaction_type::TRANSFER || unsigned_tx.type == cryptonote::transaction_type::STAKE) {

    // Get the output public key for the change output
    crypto::public_key P_change = crypto::null_pkey;
    if (unsigned_tx.type == cryptonote::transaction_type::TRANSFER) {
      if (hf_version >= HF_VERSION_ENABLE_N_OUTS) {
        CHECK_AND_ASSERT_MES(unsigned_tx.vout.size() >= 2, false, "Internal error - incorrect number of outputs (<2) for TRANSFER tx");
      } else {
        CHECK_AND_ASSERT_MES(unsigned_tx.vout.size() == 2, false, "Internal error - incorrect number of outputs (!=2) for TRANSFER tx");
      }
    } else if (unsigned_tx.type == cryptonote::transaction_type::STAKE) {
      CHECK_AND_ASSERT_MES(unsigned_tx.vout.size() == 1, false, "Internal error - incorrect number of outputs (!=1) for STAKE tx");
    }
    CHECK_AND_ASSERT_MES(change_index < unsigned_tx.vout.size(), false, "Internal error - invalid change_index");
    CHECK_AND_ASSERT_MES(cryptonote::get_output_public_key(unsigned_tx.vout[change_index], P_change), false, "Internal error - failed to get TX change output public key");
    CHECK_AND_ASSERT_MES(P_change != crypto::null_pkey, false, "Internal error - not found TX change output for TRANSFER tx");
      
    // Get the uniqueness for this TX
    crypto::ec_scalar y;
    struct {
      char domain_separator[8];
      crypto::public_key pubkey;
    } buf;
    std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
    std::strncpy(buf.domain_separator, "RETURN", 7);
    buf.pubkey = P_change;
    crypto::hash_to_scalar(&buf, sizeof(buf), y);

    hw::device& hwdev = account_keys.get_device();
  
    // First, we need to produce the multiplicative inverse of the scalar "y" (aka "y^-1")
    rct::key key_y        = (rct::key&)(y);
    rct::key key_inv_y    = invert(key_y);
    crypto::public_key pk_aP_change = rct::rct2pk(rct::scalarmultKey(rct::pk2rct(P_change), rct::sk2rct(account_keys.m_view_secret_key)));

    // Sanity check that we can reverse the invert safely
    rct::key key_aP_change = rct::pk2rct(pk_aP_change);
    rct::key key_F         = rct::scalarmultKey(key_aP_change, key_inv_y);
    rct::key key_verify    = rct::scalarmultKey(key_F, key_y);
    CHECK_AND_ASSERT_MES(key_verify == key_aP_change, false, "at get_return_address: failed to verify invert() function with smK() approach");

    if (unsigned_tx.type == cryptonote::transaction_type::TRANSFER) {

      // Store the F point - we do not need to generate a full return address in this instance
      if (not reconstruction)
        unsigned_tx.return_address = rct::rct2pk(key_F);
      
      // Clear the pubkey, because it isn't used
      if (not reconstruction)
        unsigned_tx.return_pubkey = crypto::null_pkey;

    } else if (unsigned_tx.type == cryptonote::transaction_type::STAKE) {
      
      // CONVERT / YIELD Semantics
      // From this point forward, we are departing from the original "return address" scheme
      // We have to derive the full return address and TX pubkey, because PROTOCOL_TX cannot

      // First, create a secret TX key (= s) - this will be lost at the end of this function, but that's OK
      crypto::secret_key s = cryptonote::keypair::generate(hw::get_device("default")).sec;
      
      // Next, calculate the corresponding TX public key (= sP_change)
      // This has to be done using smK() call because of g_k_d() performing a torsion clear
      if (not reconstruction)
        unsigned_tx.return_pubkey = rct::rct2pk(rct::scalarmultKey(rct::pk2rct(P_change), rct::sk2rct(s)));

      // Next, calculate a derivation using the TX public key and our secret view key
      crypto::key_derivation derivation = AUTO_VAL_INIT(derivation);
      bool r = hwdev.generate_key_derivation(unsigned_tx.return_pubkey, account_keys.m_view_secret_key, derivation);
      CHECK_AND_ASSERT_MES(r, false, "in get_return_address(): failed to generate_key_derivation(" << unsigned_tx.return_pubkey << ", <view secret key>)");

      // Finally, calculate the onetime address to be used for returns
      crypto::public_key out_eph_public_key = AUTO_VAL_INIT(out_eph_public_key);
      r = crypto::derive_public_key(derivation, 0, P_change, out_eph_public_key);
      CHECK_AND_ASSERT_MES(r, false, "in get_return_address(): failed to derive_public_key(" << derivation << ", " << key_y << ", "<< P_change << ")");

      // Sanity checks
      crypto::public_key P_change_verify = crypto::null_pkey;
      r = crypto::derive_subaddress_public_key(out_eph_public_key, derivation, 0, P_change_verify);
      CHECK_AND_ASSERT_MES(r, false, "in get_return_address(): failed sanity check derive_subaddress_public_key(" << out_eph_public_key << ", " << derivation << ", " << key_y << ", " << P_change_verify << ")");
      CHECK_AND_ASSERT_MES(P_change == P_change_verify, false, "in get_return_address(): failed sanity check (keys do not match)");

      // All is well - copy the return address
      if (not reconstruction)
        unsigned_tx.return_address = out_eph_public_key;

    } else {

      assert(false);
    }
  }
  
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
static bool set_tx_rct_signatures(
  const std::uint64_t fee,
  const std::vector<cryptonote::tx_source_entry>& sources,
  const std::vector<uint64_t>& destination_amounts,
  const rct::keyV& input_secret_keys,
  const rct::keyV& output_public_keys,
  const rct::keyV& output_amount_secret_keys,
  const rct::RCTConfig& rct_config,
  const bool reconstruction,
  cryptonote::transaction& unsigned_tx,
  std::vector<CLSAG_context_t>& CLSAG_contexts,
  rct::keyV& cached_w,
  const uint8_t change_index,
  const rct::key& x_change,
  const rct::key& hs_yF
)
{
  if (rct_config.bp_version != 3 &&
      rct_config.bp_version != 4 &&
      rct_config.bp_version != 5)
    return false;
  if (rct_config.range_proof_type != rct::RangeProofPaddedBulletproof)
    return false;

  const std::size_t num_destinations = destination_amounts.size();
  const std::size_t num_sources = sources.size();

  // rct_signatures component of tx
  rct::rctSig rv{};

  // set misc. fields
  if (rct_config.bp_version == 3)
    rv.type = rct::RCTTypeCLSAG;
  else if (rct_config.bp_version == 4)
    rv.type = rct::RCTTypeBulletproofPlus;
  else if (rct_config.bp_version == 5)
    rv.type = rct::RCTTypeFullProofs;
  else
    return false;
  rv.txnFee = fee;
  rv.message = rct::hash2rct(cryptonote::get_transaction_prefix_hash(unsigned_tx));

  // define outputs
  std::vector<std::uint64_t> output_amounts(num_destinations);
  rct::keyV output_amount_masks(num_destinations);
  rv.ecdhInfo.resize(num_destinations);
  rv.outPk.resize(num_destinations);
  for (std::size_t i = 0; i < num_destinations; ++i) {
    rv.outPk[i].dest = output_public_keys[i];
    output_amounts[i] = destination_amounts[i];
    output_amount_masks[i] = genCommitmentMask(output_amount_secret_keys[i]);
    rv.ecdhInfo[i].amount = rct::d2h(output_amounts[i]);
    rct::addKeys2(
      rv.outPk[i].mask,
      output_amount_masks[i],
      rv.ecdhInfo[i].amount,
      rct::H
    );
    rct::ecdhEncode(rv.ecdhInfo[i], output_amount_secret_keys[i], true);
  }

  // output range proofs
  if (not reconstruction) {
    make_new_range_proofs(rct_config.bp_version, output_amounts, output_amount_masks, rv.p);
  }
  else {
    if (not try_reconstruct_range_proofs(rct_config.bp_version,
        unsigned_tx.rct_signatures.p,
        num_destinations,
        rv.outPk,
        rv.p))
      return false;
  }

  // prepare rings for input CLSAGs
  rv.mixRing.resize(num_sources);
  for (std::size_t i = 0; i < num_sources; ++i) {
    const std::size_t ring_size = sources[i].outputs.size();
    rv.mixRing[i].resize(ring_size);
    for (std::size_t j = 0; j < ring_size; ++j) {
      rv.mixRing[i][j].dest = sources[i].outputs[j].second.dest;
      rv.mixRing[i][j].mask = sources[i].outputs[j].second.mask;
    }
  }

  // make pseudo-output commitments
  rct::keyV a;  //pseudo-output commitment blinding factors
  auto a_wiper = epee::misc_utils::create_scope_leave_handler([&]{
    memwipe(static_cast<rct::key *>(a.data()), a.size() * sizeof(rct::key));
  });
  if (not reconstruction) {
    a.resize(num_sources);
    rv.p.pseudoOuts.resize(num_sources);
    rct::key difference = rct::zero();
    rct::key sumpouts = rct::zero();
    rct::key sumouts = rct::zero();
    for (std::size_t i = 0; i < num_destinations; ++i) {
      sc_add(
        sumouts.bytes,
        sumouts.bytes,
        output_amount_masks[i].bytes
      );
    }
    for (std::size_t i = 0; i < num_sources; ++i) {
      rct::skGen(a[i]);
      sc_add(
        sumpouts.bytes,
        sumpouts.bytes,
        a[i].bytes
      );
      rct::genC(rv.p.pseudoOuts[i], a[i], sources[i].amount);
    }
    sc_sub(difference.bytes, sumpouts.bytes, sumouts.bytes);
    rct::genC(rv.p_r, difference, 0);
    if (rv.type == rct::RCTTypeFullProofs || rv.type == rct::RCTTypeSalviumOne) {
      rv.salvium_data.pr_proof = rct::PRProof_Gen(difference);
#ifdef DBG
      CHECK_AND_ASSERT_THROW_MES(rct::PRProof_Ver(rv.p_r, rv.salvium_data.pr_proof), "PRProof_Ver() failed on recently created proof");
#endif
    }

    /*
    // Check if spend authority proof is needed (only for TRANSFER TXs)
    if (unsigned_tx.type == cryptonote::transaction_type::TRANSFER && rv.type >= rct::RCTTypeFullProofs) {
      rv.salvium_data.sa_proof = rct::SAProof_Gen(output_public_keys[change_index], x_change, hs_yF);
#ifdef DBG
      CHECK_AND_ASSERT_THROW_MES(rct::SAProof_Ver(rv.salvium_data.sa_proof, output_public_keys[change_index], hs_yF), "SAProof_Ver() failed on recently created proof");
#endif
    }
    */
  }
  // check balance if reconstructing the tx
  else {
    rv.p.pseudoOuts = unsigned_tx.rct_signatures.p.pseudoOuts;
    if (rv.type == rct::RCTTypeFullProofs || rv.type == rct::RCTTypeSalviumOne) {
      if (!rct::PRProof_Ver(unsigned_tx.rct_signatures.p_r, unsigned_tx.rct_signatures.salvium_data.pr_proof))
        return false;
      rv.p_r = unsigned_tx.rct_signatures.p_r;
      rv.salvium_data.pr_proof = unsigned_tx.rct_signatures.salvium_data.pr_proof;
      /*
      if (!rct::SAProof_Ver(unsigned_tx.rct_signatures.salvium_data.sa_proof, output_public_keys[change_index], hs_yF))
        return false;
      rv.salvium_data.sa_proof = unsigned_tx.rct_signatures.salvium_data.sa_proof; // should verify this during reconstruction
      */
    } else {
      rv.p_r = unsigned_tx.rct_signatures.p_r;
    }
    if (num_sources != rv.p.pseudoOuts.size())
      return false;
    rct::key balance_accumulator = rct::scalarmultH(rct::d2h(fee));
    rct::key txnAmountBurntKey = rct::scalarmultH(rct::d2h(unsigned_tx.amount_burnt));
    rct::addKeys(balance_accumulator, balance_accumulator, rv.p_r);
    rct::addKeys(balance_accumulator, balance_accumulator, txnAmountBurntKey);
    for (const auto& e: rv.outPk)
      rct::addKeys(balance_accumulator, balance_accumulator, e.mask);
    for (const auto& pseudoOut: rv.p.pseudoOuts)
      rct::subKeys(balance_accumulator, balance_accumulator, pseudoOut);
    if (not (balance_accumulator == rct::identity()))
      return false;
  }

  // prepare input CLSAGs for signing
  const rct::key message = get_pre_mlsag_hash(rv, hw::get_device("default"));

  rv.p.CLSAGs.resize(num_sources);
  if (reconstruction) {
    if (num_sources != unsigned_tx.rct_signatures.p.CLSAGs.size())
      return false;
  }

  CLSAG_contexts.resize(num_sources);
  if (not reconstruction)
    cached_w.resize(num_sources);

  for (std::size_t i = 0; i < num_sources; ++i) {
    const std::size_t ring_size = rv.mixRing[i].size();
    const rct::key& I = sources[i].multisig_kLRki.ki;
    const std::size_t l = sources[i].real_output;
    if (l >= ring_size)
      return false;
    rct::keyV& s = rv.p.CLSAGs[i].s;
    const rct::key& C_offset = rv.p.pseudoOuts[i];
    rct::keyV P(ring_size);
    rct::keyV C_nonzero(ring_size);

    if (not reconstruction) {
      s.resize(ring_size);
      for (std::size_t j = 0; j < ring_size; ++j) {
        if (j != l)
          s[j] = rct::skGen();  //make fake responses
      }
    }
    else {
      if (ring_size != unsigned_tx.rct_signatures.p.CLSAGs[i].s.size())
        return false;
      s = unsigned_tx.rct_signatures.p.CLSAGs[i].s;
    }

    for (std::size_t j = 0; j < ring_size; ++j) {
      P[j] = rv.mixRing[i][j].dest;
      C_nonzero[j] = rv.mixRing[i][j].mask;
    }

    rct::key D;
    rct::key z;
    auto z_wiper = epee::misc_utils::create_scope_leave_handler([&]{
      memwipe(static_cast<rct::key *>(&z), sizeof(rct::key));
    });
    if (not reconstruction) {
      sc_sub(z.bytes, sources[i].mask.bytes, a[i].bytes);  //commitment to zero privkey
      ge_p3 H_p3;
      rct::hash_to_p3(H_p3, rv.mixRing[i][l].dest);
      rct::key H_l;
      ge_p3_tobytes(H_l.bytes, &H_p3);
      D = rct::scalarmultKey(H_l, z);  //auxilliary key image (for commitment to zero)
      rv.p.CLSAGs[i].D = rct::scalarmultKey(D, rct::INV_EIGHT);
      rv.p.CLSAGs[i].I = I;
    }
    else {
      rv.p.CLSAGs[i].D = unsigned_tx.rct_signatures.p.CLSAGs[i].D;
      rv.p.CLSAGs[i].I = I;
      D = rct::scalarmultKey(rv.p.CLSAGs[i].D, rct::EIGHT);
    }

    if (not CLSAG_contexts[i].init(P, C_nonzero, C_offset, message, I, D, l, s, kAlphaComponents))
      return false;

    if (not reconstruction) {
      rct::key mu_P;
      rct::key mu_C;
      if (not CLSAG_contexts[i].get_mu(mu_P, mu_C))
        return false;
      sc_mul(cached_w[i].bytes, mu_P.bytes, input_secret_keys[i].bytes);
      sc_muladd(cached_w[i].bytes, mu_C.bytes, z.bytes, cached_w[i].bytes);
    }
  }
  unsigned_tx.rct_signatures = std::move(rv);
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool compute_tx_fee(
  const std::vector<cryptonote::tx_source_entry>& sources,
  const std::vector<cryptonote::tx_destination_entry>& destinations,
  std::uint64_t& fee
)
{
  boost::multiprecision::uint128_t in_amount = 0;
  for (const auto& src: sources)
    in_amount += src.amount;

  boost::multiprecision::uint128_t out_amount = 0;
  for (const auto& dst: destinations)
    out_amount += dst.amount;

  if (out_amount > in_amount)
    return false;

  if (in_amount - out_amount > std::numeric_limits<std::uint64_t>::max())
    return false;

  fee = static_cast<std::uint64_t>(in_amount - out_amount);
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
tx_builder_ringct_t::tx_builder_ringct_t(): initialized(false) {}
//----------------------------------------------------------------------------------------------------------------------
tx_builder_ringct_t::~tx_builder_ringct_t()
{
  memwipe(static_cast<rct::key *>(cached_w.data()), cached_w.size() * sizeof(rct::key));
}
//----------------------------------------------------------------------------------------------------------------------
bool tx_builder_ringct_t::init(
  const cryptonote::account_keys& account_keys,
  const std::vector<std::uint8_t>& extra,
  const cryptonote::transaction_type& tx_type,
  const std::uint8_t hf_version,
  const std::uint64_t unlock_time,
  const std::uint32_t subaddr_account,
  const std::set<std::uint32_t>& subaddr_minor_indices,
  std::vector<cryptonote::tx_source_entry>& sources,
  std::vector<cryptonote::tx_destination_entry>& destinations,
  const cryptonote::tx_destination_entry& change,
  const rct::RCTConfig& rct_config,
  const bool use_rct,
  const bool reconstruction,
  crypto::secret_key& tx_secret_key,
  std::vector<crypto::secret_key>& tx_aux_secret_keys,
  crypto::secret_key& tx_secret_key_entropy,
  cryptonote::transaction& unsigned_tx
)
{
  initialized = false;
  this->reconstruction = reconstruction;
  if (not use_rct)
    return false;
  if (sources.empty())
    return false;

  if (not reconstruction)
    unsigned_tx.set_null();

  std::uint64_t fee;
  if (not compute_tx_fee(sources, destinations, fee))
    return false;

  // decide if view tags are needed
  const bool use_view_tags{view_tag_required(rct_config.bp_version)};

  // Configure the correct TX version for the current HF + TX type
  if (hf_version >= HF_VERSION_ENABLE_N_OUTS && tx_type == cryptonote::transaction_type::TRANSFER) {
    unsigned_tx.version = TRANSACTION_VERSION_N_OUTS;
  } else {
    unsigned_tx.version = 2;
  }
  // misc. fields
  unsigned_tx.unlock_time = unlock_time;
  unsigned_tx.type = (tx_type == cryptonote::transaction_type::RETURN) ? cryptonote::TRANSFER : tx_type;
  unsigned_tx.source_asset_type = "SAL";
  if (tx_type == cryptonote::transaction_type::BURN)
    unsigned_tx.destination_asset_type = "BURN";
  else
    unsigned_tx.destination_asset_type = "SAL";

  // sort inputs
  sort_sources(sources);

  // prepare tx secret key seed (must be AFTER sorting sources)
  // - deriving the seed from sources plus entropy ensures uniqueness for every new tx attempt
  // - the goal is that two multisig txs added to the chain will never have outputs with the same onetime addresses,
  //   which would burn funds (embedding the inputs' key images guarantees this)
  //   - it is acceptable if two tx attempts use the same input set and entropy (only a malicious tx proposer will do
  //     that, but all it can accomplish is leaking information about the recipients - which a malicious proposer can
  //     easily do outside the signing ritual anyway)
  if (not reconstruction)
    tx_secret_key_entropy = rct::rct2sk(rct::skGen());

  // expect not null (note: wallet serialization code may set this to null if handling an old partial tx)
  if (tx_secret_key_entropy == crypto::null_skey)
    return false;

  crypto::secret_key tx_secret_key_seed;
  make_tx_secret_key_seed(tx_secret_key_entropy, sources, tx_secret_key_seed);

  // get secret keys for signing input CLSAGs (multisig: or for the initial partial signature)
  rct::keyV input_secret_keys;
  auto input_secret_keys_wiper = epee::misc_utils::create_scope_leave_handler([&]{
    memwipe(static_cast<rct::key *>(input_secret_keys.data()), input_secret_keys.size() * sizeof(rct::key));
  });
  if (not compute_keys_for_sources(account_keys, sources, subaddr_account, subaddr_minor_indices, input_secret_keys))
    return false;

  // randomize output order
  if (not reconstruction)
    shuffle_destinations(destinations);

  // prepare outputs
  rct::keyV output_public_keys;
  rct::keyV output_amount_secret_keys;
  std::vector<std::string> asset_types;
  std::vector<crypto::view_tag> view_tags;
  std::vector<uint64_t> destination_amounts;
  bool found_change{false};
  std::size_t change_index;
  auto output_amount_secret_keys_wiper = epee::misc_utils::create_scope_leave_handler([&]{
    memwipe(static_cast<rct::key *>(output_amount_secret_keys.data()), output_amount_secret_keys.size() * sizeof(rct::key));
  });
  if (not compute_keys_for_destinations(account_keys,
      subaddr_account,
      destinations,
      change,
      extra,
      use_view_tags,
      reconstruction,
      tx_secret_key_seed,
      tx_secret_key,
      tx_aux_secret_keys,
      output_public_keys,
      output_amount_secret_keys,
      asset_types,
      view_tags,
      destination_amounts,
      tx_type,
      found_change,
      change_index,
      unsigned_tx))
    return false;

  // Check that the change element was found
  if (!found_change)
    return false;

  // 
  
  // add inputs to tx
  set_tx_inputs(sources, unsigned_tx);

  // add output one-time addresses to tx
  bool set_tx_outputs_result{false};
  if (use_view_tags)
    set_tx_outputs_result = set_tx_outputs_with_view_tags(output_public_keys, asset_types, view_tags, unsigned_tx);
  else
    set_tx_outputs_result = set_tx_outputs(output_public_keys, asset_types, unsigned_tx);

  if (not set_tx_outputs_result)
    return false;

  rct::key hs_yF;
  rct::key x_change;
  if (hf_version >= HF_VERSION_ENABLE_N_OUTS && unsigned_tx.type == cryptonote::transaction_type::TRANSFER) {
    
    // Get the output public key for the change output
    crypto::public_key P_change = crypto::null_pkey;
    CHECK_AND_ASSERT_MES(unsigned_tx.vout.size() >= 2, false, "Internal error - too few outputs for multisig TRANSFER tx");
    CHECK_AND_ASSERT_MES(cryptonote::get_output_public_key(unsigned_tx.vout[change_index], P_change), false, "Internal error - failed to get multisig TX change output public key");
    CHECK_AND_ASSERT_MES(P_change != crypto::null_pkey, false, "Internal error - not found TX change output for multisig TRANSFER tx");

    // Calculate the F points and change mask for every destination
    for (size_t op_index=0; op_index<unsigned_tx.vout.size(); ++op_index) {

      // Calculate the y value for return_payment support
      crypto::ec_scalar y;
      struct {
        char domain_separator[8];
        rct::key amount_key;
      } buf;
      std::memset(buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strncpy(buf.domain_separator, "RETURN", 7);
      buf.amount_key = output_amount_secret_keys[op_index];
      crypto::hash_to_scalar(&buf, sizeof(buf), y);
        
      // Now generate the return address EC point
      // F = (y^-1).a.P_change

      // First, we need to produce the multiplicative inverse of the scalar "y" (aka "y^-1")
      rct::key key_y        = (rct::key&)(y);
      rct::key key_inv_y    = invert(key_y);
      crypto::public_key pk_aP_change = rct::rct2pk(rct::scalarmultKey(rct::pk2rct(P_change), rct::sk2rct(account_keys.m_view_secret_key)));

      // Sanity check that we can reverse the invert safely
      rct::key key_aP_change = rct::pk2rct(pk_aP_change);
      rct::key key_F         = rct::scalarmultKey(key_aP_change, key_inv_y);
      rct::key key_verify    = rct::scalarmultKey(key_F, key_y);
      CHECK_AND_ASSERT_MES(key_verify == key_aP_change, false, "at get_return_address: failed to verify invert() function with smK() approach");
      hs_yF = rct::hash_to_scalar(key_verify);

      // Push the F point into the TX vector of F points
      if (not reconstruction)
        unsigned_tx.return_address_list.push_back(rct::rct2pk(key_F));

      // Calculate the encrypted_change_index data for this output
      struct {
        char domain_separator[8];
        rct::key amount_key;
      } eci_buf;
      std::memset(eci_buf.domain_separator, 0x0, sizeof(buf.domain_separator));
      std::strncpy(eci_buf.domain_separator, "CHG_IDX", 8);
      eci_buf.amount_key = output_amount_secret_keys[op_index];
      crypto::secret_key eci_out;
      keccak((uint8_t *)&eci_buf, sizeof(eci_buf), (uint8_t*)&eci_out, sizeof(eci_out));
      uint8_t eci_data = change_index ^ eci_out.data[0];
      if (not reconstruction)
        unsigned_tx.return_address_change_mask.push_back(eci_data);
    }

    if (hf_version >= HF_VERSION_FULL_PROOFS) {

      // Get the secret spend key for the change element
      crypto::secret_key spend_skey = crypto::null_skey;
      for (const auto &multisig_key : account_keys.m_multisig_keys) {
        sc_add((unsigned char*)spend_skey.data,
               (const unsigned char*)multisig_key.data,
               (const unsigned char*)spend_skey.data);
      }
      
      // Calculate z_i (the shared secret between sender and ourselves for the original TX)
      crypto::public_key txkey_pub = crypto::null_pkey; // R
      const std::vector<crypto::public_key> in_additional_tx_pub_keys = cryptonote::get_additional_tx_pub_keys_from_extra(unsigned_tx);
      if (in_additional_tx_pub_keys.size() != 0) {
        CHECK_AND_ASSERT_MES(in_additional_tx_pub_keys.size() == unsigned_tx.vout.size(), false, "incorrect number of additional TX pubkeys in origin TX for return_payment");
        txkey_pub = in_additional_tx_pub_keys[change_index];
      } else {
        txkey_pub = cryptonote::get_tx_pub_key_from_extra(unsigned_tx);
      }
      
      // Obtain a separate key_derivation for the P_change output
      //    (using the TX public key and the sender's private view key)
      hw::device &hwdev = account_keys.get_device();
      crypto::key_derivation derivation = AUTO_VAL_INIT(derivation);
      CHECK_AND_ASSERT_MES(hwdev.generate_key_derivation(txkey_pub, account_keys.m_view_secret_key, derivation), false, "Failed to generate key_derivation for P_change");
        
      // Calculate the secret spend key "x_change" for the P_change output
      crypto::secret_key s_change = crypto::null_skey;
      CHECK_AND_ASSERT_MES(hwdev.derive_secret_key(derivation, change_index, spend_skey, s_change), false, "Failed to derive secret key for P_change");
      x_change = rct::sk2rct(s_change);
    }

  } else if (unsigned_tx.type == cryptonote::transaction_type::TRANSFER || unsigned_tx.type == cryptonote::transaction_type::STAKE) {

    // Get the tx public key
    crypto::public_key txkey_pub = crypto::null_pkey;
    
    // Calculate the return_address information needed
    if (not set_tx_return_address_information(hf_version, account_keys, reconstruction, change_index, txkey_pub, unsigned_tx))
      return false;
  }

  // prepare input signatures
  if (not set_tx_rct_signatures(fee, sources, destination_amounts, input_secret_keys, output_public_keys, output_amount_secret_keys,
                                rct_config, reconstruction, unsigned_tx, CLSAG_contexts, cached_w, change_index, x_change, hs_yF))
    return false;

  initialized = true;
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
bool tx_builder_ringct_t::first_partial_sign(
  const std::size_t source,
  const rct::keyV& total_alpha_G,
  const rct::keyV& total_alpha_H,
  const rct::keyV& alpha,
  rct::key& c_0,
  rct::key& s
)
{
  if (not initialized or reconstruction)
    return false;
  const std::size_t num_sources = CLSAG_contexts.size();
  if (source >= num_sources)
    return false;
  rct::key c;
  rct::key alpha_combined;
  auto alpha_combined_wiper = epee::misc_utils::create_scope_leave_handler([&]{
    memwipe(static_cast<rct::key *>(&alpha_combined), sizeof(rct::key));
  });
  if (not CLSAG_contexts[source].combine_alpha_and_compute_challenge(
    total_alpha_G,
    total_alpha_H,
    alpha,
    alpha_combined,
    c_0,
    c
  )) {
    return false;
  }

  // initial partial response:
  //      s = alpha_combined_local - challenge*[mu_P*(local keys and sender-receiver secret and subaddress material) +
  //                                            mu_C*(commitment-to-zero secret)]
  sc_mulsub(s.bytes, c.bytes, cached_w[source].bytes, alpha_combined.bytes);
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
bool tx_builder_ringct_t::next_partial_sign(
  const rct::keyM& total_alpha_G,
  const rct::keyM& total_alpha_H,
  const rct::keyM& alpha,
  const rct::key& x,
  rct::keyV& c_0,
  rct::keyV& s
)
{
  if (not initialized or not reconstruction)
    return false;
  const std::size_t num_sources = CLSAG_contexts.size();
  if (num_sources != total_alpha_G.size())
    return false;
  if (num_sources != total_alpha_H.size())
    return false;
  if (num_sources != alpha.size())
    return false;
  if (num_sources != c_0.size())
    return false;
  if (num_sources != s.size())
    return false;
  for (std::size_t i = 0; i < num_sources; ++i) {
    rct::key c;
    rct::key alpha_combined;
    auto alpha_combined_wiper = epee::misc_utils::create_scope_leave_handler([&]{
      memwipe(static_cast<rct::key *>(&alpha_combined), sizeof(rct::key));
    });
    if (not CLSAG_contexts[i].combine_alpha_and_compute_challenge(
      total_alpha_G[i],
      total_alpha_H[i],
      alpha[i],
      alpha_combined,
      c_0[i],
      c
    )) {
      return false;
    }
    rct::key mu_P;
    rct::key mu_C;
    if (not CLSAG_contexts[i].get_mu(mu_P, mu_C))
      return false;
    rct::key w;
    auto w_wiper = epee::misc_utils::create_scope_leave_handler([&]{
      memwipe(static_cast<rct::key *>(&w), sizeof(rct::key));
    });
    sc_mul(w.bytes, mu_P.bytes, x.bytes);

    // include local signer's response:
    //      s += alpha_combined_local - challenge*[mu_P*(local keys)]
    sc_add(s[i].bytes, s[i].bytes, alpha_combined.bytes);
    sc_mulsub(s[i].bytes, c.bytes, w.bytes, s[i].bytes);
  }
  return true;
}
//----------------------------------------------------------------------------------------------------------------------
bool tx_builder_ringct_t::finalize_tx(
  const std::vector<cryptonote::tx_source_entry>& sources,
  const rct::keyV& c_0,
  const rct::keyV& s,
  cryptonote::transaction& unsigned_tx
)
{
  // checks
  const std::size_t num_sources = sources.size();
  if (num_sources != unsigned_tx.rct_signatures.p.CLSAGs.size())
    return false;
  if (num_sources != c_0.size())
    return false;
  if (num_sources != s.size())
    return false;

  // finalize tx signatures
  for (std::size_t i = 0; i < num_sources; ++i) {
    const std::size_t ring_size = unsigned_tx.rct_signatures.p.CLSAGs[i].s.size();
    if (sources[i].real_output >= ring_size)
      return false;
    unsigned_tx.rct_signatures.p.CLSAGs[i].s[sources[i].real_output] = s[i];
    unsigned_tx.rct_signatures.p.CLSAGs[i].c1 = c_0[i];
  }

  return true;
}
//----------------------------------------------------------------------------------------------------------------------
} //namespace signing

} //namespace multisig
