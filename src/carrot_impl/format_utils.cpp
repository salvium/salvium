// Copyright (c) 2024, The Monero Project
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

//paired header
#include "format_utils.h"

//local headers
#include "carrot_core/enote_utils.h"
#include "carrot_core/exceptions.h"
#include "carrot_core/payment_proposal.h"
#include "common/container_helpers.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_core/cryptonote_tx_utils.h"
#include "cryptonote_config.h"

//third party headers

//standard headers

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "carrot_impl.format_utils"

static_assert(sizeof(mx25519_pubkey) == sizeof(crypto::public_key),
    "cannot use crypto::public_key as storage for X25519 keys since size is different");

namespace carrot
{
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
template <class EnoteContainer>
static void store_carrot_ephemeral_pubkeys_to_extra(const EnoteContainer &enotes, std::vector<uint8_t> &extra_inout)
{
    const size_t nouts = enotes.size();
    if (nouts == 0)
        return;

    const bool use_shared_ephemeral_pubkey = nouts == 1 || (nouts == 2 && 0 == memcmp(
            &enotes.front().enote_ephemeral_pubkey,
            &enotes.back().enote_ephemeral_pubkey, 
            sizeof(mx25519_pubkey)));
    bool success = true;
    if (use_shared_ephemeral_pubkey)
    {
        const mx25519_pubkey &enote_ephemeral_pubkey = enotes.at(0).enote_ephemeral_pubkey;
        const crypto::public_key tx_pubkey = raw_byte_convert<crypto::public_key>(enote_ephemeral_pubkey);
        success = success && cryptonote::add_tx_pub_key_to_extra(extra_inout, tx_pubkey);
    }
    else // !use_shared_ephemeral_pubkey
    {
        std::vector<crypto::public_key> tx_pubkeys(nouts);
        for (size_t i = 0; i < nouts; ++i)
        {
            const mx25519_pubkey &enote_ephemeral_pubkey = enotes.at(i).enote_ephemeral_pubkey;
            tx_pubkeys[i] = raw_byte_convert<crypto::public_key>(enote_ephemeral_pubkey);
        }
        success = success && cryptonote::add_additional_tx_pub_keys_to_extra(extra_inout, tx_pubkeys);
    }
    CHECK_AND_ASSERT_THROW_MES(success, "add carrot ephemeral pubkeys to extra: failed to add tx_extra fields");
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static bool try_load_carrot_ephemeral_pubkeys_from_extra(const std::vector<cryptonote::tx_extra_field> &extra_fields,
    std::vector<mx25519_pubkey> &enote_ephemeral_pubkeys_out)
{
    //! @TODO: skip extra vector allocation for tx_pubkeys and copy directly
    //! @TODO: longterm: skip allocating into std::vector<cryptonote::tx_extra_field> before copying

    cryptonote::tx_extra_pub_key tx_pubkey;
    cryptonote::tx_extra_additional_pub_keys tx_pubkeys;
    if (cryptonote::find_tx_extra_field_by_type(extra_fields, tx_pubkey))
    {
        enote_ephemeral_pubkeys_out = {raw_byte_convert<mx25519_pubkey>(tx_pubkey.pub_key)};
        return true;
    }
    else if (cryptonote::find_tx_extra_field_by_type(extra_fields, tx_pubkeys))
    {
        enote_ephemeral_pubkeys_out.resize(tx_pubkeys.data.size());

        static_assert(sizeof(mx25519_pubkey) == sizeof(crypto::public_key));
        static_assert(std::is_trivially_copyable_v<mx25519_pubkey>);
        static_assert(std::is_trivially_copyable_v<crypto::public_key>);

        memcpy(enote_ephemeral_pubkeys_out.data(),
            tx_pubkeys.data.data(),
            tx_pubkeys.data.size() * sizeof(mx25519_pubkey));

        return true;
    }

    return false;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
bool is_carrot_transaction_v1(const cryptonote::transaction_prefix &tx_prefix)
{
  if (tx_prefix.type == cryptonote::transaction_type::PROTOCOL && tx_prefix.vout.size() == 0)
    return false;
  CARROT_CHECK_AND_THROW(tx_prefix.vout.size(), too_few_outputs, "transaction prefix contains no outputs");
  return tx_prefix.vout.at(0).target.type() == typeid(cryptonote::txout_to_carrot_v1);
}
//-------------------------------------------------------------------------------------------------------------------
input_context_t parse_carrot_input_context(const cryptonote::txin_gen &txin)
{
    return make_carrot_input_context_coinbase(txin.height);
}
//-------------------------------------------------------------------------------------------------------------------
input_context_t parse_carrot_input_context(const cryptonote::txin_to_key &txin)
{
    return make_carrot_input_context(txin.k_image);
}
//-------------------------------------------------------------------------------------------------------------------
bool parse_carrot_input_context(const cryptonote::txin_v &txin, input_context_t &input_context_out)
{
    struct parse_carrot_input_context_v_visitor
    {
        bool operator()(const cryptonote::txin_gen &txin) const
        { input_context_out = parse_carrot_input_context(txin); return true; }
        bool operator()(const cryptonote::txin_to_key &txin) const
        { input_context_out = parse_carrot_input_context(txin); return true; }
        bool operator()(const cryptonote::txin_to_script&) const { return false; }
        bool operator()(const cryptonote::txin_to_scripthash&) const { return false; }

        input_context_t &input_context_out;
    };

    return boost::apply_visitor(parse_carrot_input_context_v_visitor{input_context_out}, txin);
}
//-------------------------------------------------------------------------------------------------------------------
bool parse_carrot_input_context(const cryptonote::transaction_prefix &tx_prefix, input_context_t &input_context_out)
{
    CHECK_AND_ASSERT_MES(!tx_prefix.vin.empty(), false, "parse_carrot_input_context: no input available");
    return parse_carrot_input_context(tx_prefix.vin.at(0), input_context_out);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_load_carrot_extra_v1(
    const std::vector<std::uint8_t> &tx_extra,
    std::vector<mx25519_pubkey> &enote_ephemeral_pubkeys_out,
    std::optional<encrypted_payment_id_t> &encrypted_payment_id_out)
{
    std::vector<cryptonote::tx_extra_field> tx_extra_fields;
    cryptonote::parse_tx_extra(tx_extra, tx_extra_fields);

    return try_load_carrot_extra_v1(tx_extra_fields, enote_ephemeral_pubkeys_out, encrypted_payment_id_out);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_load_carrot_extra_v1(
    const std::vector<cryptonote::tx_extra_field> &tx_extra_fields,
    std::vector<mx25519_pubkey> &enote_ephemeral_pubkeys_out,
    std::optional<encrypted_payment_id_t> &encrypted_payment_id_out)
{
    //ephemeral pubkeys: D_e
    if (!try_load_carrot_ephemeral_pubkeys_from_extra(tx_extra_fields, enote_ephemeral_pubkeys_out))
        return false;

    //encrypted payment ID: pid_enc
    encrypted_payment_id_out = std::nullopt;
    cryptonote::tx_extra_nonce extra_nonce;
    if (cryptonote::find_tx_extra_field_by_type(tx_extra_fields, extra_nonce))
    {
        crypto::hash8 pid_enc_8;
        if (cryptonote::get_encrypted_payment_id_from_tx_extra_nonce(extra_nonce.nonce, pid_enc_8))
        {
            encrypted_payment_id_t &pid_enc = encrypted_payment_id_out.emplace();
            pid_enc = raw_byte_convert<encrypted_payment_id_t>(pid_enc_8);
        }
    }

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
cryptonote::transaction store_carrot_to_transaction_v1(const std::vector<CarrotEnoteV1> &enotes,
    const std::vector<crypto::key_image> &key_images,
    const std::vector<cryptonote::tx_source_entry> &sources,
    const rct::xmr_amount fee,
    const cryptonote::transaction_type tx_type,
    const size_t change_index,
    const std::vector<uint8_t> change_masks,
    const encrypted_payment_id_t encrypted_payment_id)
{
    const size_t nins = key_images.size();
    const size_t nouts = enotes.size();
    CHECK_AND_ASSERT_THROW_MES(nins == sources.size(), "invalid inputs/sources size");
    CHECK_AND_ASSERT_THROW_MES(change_masks.size() == nouts - 1, "invalid change masks size. Expected: "  << nouts - 1 << " got: " << change_masks.size());

    cryptonote::transaction tx;
    tx.pruned = true;
    tx.version = TRANSACTION_VERSION_N_OUTS;
    tx.unlock_time = 0;
    tx.source_asset_type = "SAL1";
    tx.destination_asset_type = "SAL1";
    tx.type = tx_type;
    tx.return_address_change_mask.assign(change_masks.begin(), change_masks.end());
    tx.vin.reserve(nins);
    tx.vout.reserve(nouts);
    tx.return_address_list.reserve(change_masks.size());
    tx.extra.reserve(MAX_TX_EXTRA_SIZE);
    tx.rct_signatures.type = carrot_v1_rct_type;
    tx.rct_signatures.txnFee = fee;
    tx.rct_signatures.ecdhInfo.reserve(nouts);
    tx.rct_signatures.outPk.reserve(nouts);

    //inputs
    for (size_t i = 0; i < nins; ++i)
    {
        // collect key offsets
        std::vector<uint64_t> key_offsets;
        for(const auto &out_entry: sources[i].outputs)
            key_offsets.push_back(out_entry.first);

        //L
        tx.vin.emplace_back(cryptonote::txin_to_key{ //@TODO: can save 2 bytes by using slim input type
            .amount = 0,
            .asset_type = "SAL1",
            .key_offsets = cryptonote::absolute_output_offsets_to_relative(key_offsets),
            .k_image = key_images.at(i)
        });
    }

    //outputs
    size_t i = 0;
    for (const CarrotEnoteV1 &enote : enotes)
    {
        //K_o,vt,anchor_enc
        tx.vout.push_back(cryptonote::tx_out{0, cryptonote::txout_to_carrot_v1{
            .key = enote.onetime_address,
            .asset_type = enote.asset_type,
            .view_tag = enote.view_tag,
            .encrypted_janus_anchor = enote.anchor_enc,
        }});

        //a_enc
        rct::ecdhTuple &ecdh_tuple = tools::add_element(tx.rct_signatures.ecdhInfo);
        memcpy(ecdh_tuple.amount.bytes, enote.amount_enc.bytes, sizeof(ecdh_tuple.amount));

        //C_a
        tx.rct_signatures.outPk.push_back(rct::ctkey{rct::key{}, enote.amount_commitment});

        //K_return
        if (i != change_index) {
            crypto::public_key K_return;
            memcpy(K_return.data, enote.return_enc.bytes, sizeof(crypto::public_key));
            tx.return_address_list.push_back(K_return);
        }
        i++;
    }

    //ephemeral pubkeys: D_e
    store_carrot_ephemeral_pubkeys_to_extra(enotes, tx.extra);

    //encrypted payment id: pid_enc
    const crypto::hash8 pid_enc_8 = raw_byte_convert<crypto::hash8>(encrypted_payment_id);
    cryptonote::blobdata extra_nonce;
    cryptonote::set_encrypted_payment_id_to_tx_extra_nonce(extra_nonce, pid_enc_8);
    CHECK_AND_ASSERT_THROW_MES(cryptonote::add_extra_nonce_to_tx_extra(tx.extra, extra_nonce),
        "store carrot to transaction v1: failed to add encrypted payment ID to tx_extra");

    //finalize tx_extra
    CHECK_AND_ASSERT_THROW_MES(cryptonote::sort_tx_extra(tx.extra, tx.extra, /*allow_partial=*/false),
        "store carrot to transaction v1: failed to sort tx_extra");

    return tx;
}
//-------------------------------------------------------------------------------------------------------------------
bool try_load_carrot_enote_from_transaction_v1(const cryptonote::transaction &tx,
    const epee::span<const mx25519_pubkey> enote_ephemeral_pubkeys,
    const std::size_t local_output_index,
    CarrotEnoteV1 &enote_out)
{
    const rct::rctSigBase &rv = tx.rct_signatures;

    const size_t nins = tx.vin.size();
    const size_t nouts = tx.vout.size();
    const bool shared_ephemeral_pubkey = enote_ephemeral_pubkeys.size() == 1;
    const size_t ephemeral_pubkey_index = shared_ephemeral_pubkey ? 0 : local_output_index;

    CHECK_AND_ASSERT_MES(nins, false, "try_load_carrot_enote_from_transaction_v1: no inputs");
    CHECK_AND_ASSERT_MES(ephemeral_pubkey_index < enote_ephemeral_pubkeys.size(),
        false,
        "try_load_carrot_enote_from_transaction_v1: not enough ephemeral pubkeys");
    CHECK_AND_ASSERT_MES(local_output_index < nouts,
        false,
        "try_load_carrot_enote_from_transaction_v1: not enough outputs");
    CHECK_AND_ASSERT_MES(nouts == rv.ecdhInfo.size(),
        false,
        "try_load_carrot_enote_from_transaction_v1: ecdhInfo wrong size");
    CHECK_AND_ASSERT_MES(nouts == rv.outPk.size(),
        false,
        "try_load_carrot_enote_from_transaction_v1: outPk wrong size");

    const cryptonote::txout_target_v &t = tx.vout.at(local_output_index).target;
    const cryptonote::txout_to_carrot_v1 * const c = boost::strict_get<cryptonote::txout_to_carrot_v1>(&t);
    CHECK_AND_ASSERT_MES(c, false, "try_load_carrot_enote_from_transaction_v1: wrong output type");

    const cryptonote::txin_to_key * const inp = boost::strict_get<cryptonote::txin_to_key>(&tx.vin.at(0));
    CHECK_AND_ASSERT_MES(inp, false, "try_load_carrot_enote_from_transaction_v1: wrong input type");

    //K_o
    enote_out.onetime_address = c->key;

    // asset_type
    enote_out.asset_type = c->asset_type;

    //vt
    enote_out.view_tag = c->view_tag;

    //anchor_enc
    enote_out.anchor_enc = c->encrypted_janus_anchor;

    //L_1
    enote_out.tx_first_key_image = inp->k_image;

    //a_enc
    memcpy(enote_out.amount_enc.bytes, rv.ecdhInfo.at(local_output_index).amount.bytes, sizeof(encrypted_amount_t));

    //C_a
    enote_out.amount_commitment = rv.outPk.at(local_output_index).mask;

    //D_e
    enote_out.enote_ephemeral_pubkey = enote_ephemeral_pubkeys[ephemeral_pubkey_index];

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
bool try_load_carrot_from_transaction_v1(const cryptonote::transaction &tx,
    std::vector<CarrotEnoteV1> &enotes_out,
    std::vector<crypto::key_image> &key_images_out,
    rct::xmr_amount &fee_out,
    std::optional<encrypted_payment_id_t> &encrypted_payment_id_out)
{
    const rct::rctSigBase &rv = tx.rct_signatures;
    fee_out = rv.txnFee;

    const size_t nins = tx.vin.size();
    const size_t nouts = tx.vout.size();

    //inputs
    key_images_out.resize(nins);
    for (size_t i = 0; i < nins; ++i)
    {
        const cryptonote::txin_to_key * const k = boost::strict_get<cryptonote::txin_to_key>(&tx.vin.at(i));
        if (nullptr == k)
            return false;

        //L
        key_images_out[i] = k->k_image;
    }

    //D_e, pid_enc
    std::vector<mx25519_pubkey> enote_ephemeral_pubkeys;
    if (!try_load_carrot_extra_v1(tx.extra, enote_ephemeral_pubkeys, encrypted_payment_id_out))
        return false;

    const size_t n_ephemeral = enote_ephemeral_pubkeys.size();
    if (n_ephemeral == 0 || n_ephemeral > nouts)
        return false;

    //outputs
    enotes_out.resize(nouts);
    for (size_t i = 0; i < nouts; ++i)
        if (!try_load_carrot_enote_from_transaction_v1(tx, epee::to_span(enote_ephemeral_pubkeys), i, enotes_out[i]))
            return false;

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
cryptonote::transaction store_carrot_to_coinbase_transaction_v1(
    const std::vector<CarrotCoinbaseEnoteV1> &enotes,
    const cryptonote::blobdata &extra_nonce,
    const cryptonote::transaction_type &tx_type,
    const std::uint64_t block_index)
{
    CARROT_CHECK_AND_THROW(tx_type == cryptonote::transaction_type::MINER || tx_type == cryptonote::transaction_type::PROTOCOL, invalid_tx_type, "invalid tx_type : is not MINER or PROTOCOL");
    const size_t nouts = enotes.size();

    cryptonote::transaction tx;
    tx.type = tx_type;
    tx.pruned = false;
    tx.version = 2;
    tx.unlock_time = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
    tx.vin.reserve(1);
    tx.vout.reserve(nouts);
    tx.extra.reserve(MAX_TX_EXTRA_SIZE);
    tx.rct_signatures.type = rct::RCTTypeNull;

    //input
    tx.vin.emplace_back(cryptonote::txin_gen{.height = static_cast<size_t>(block_index)});

    //outputs
    for (const CarrotCoinbaseEnoteV1 &enote : enotes)
    {
        //K_o,vt,anchor_enc,a
        tx.vout.push_back(cryptonote::tx_out{enote.amount,
            cryptonote::txout_to_carrot_v1{
                .key = enote.onetime_address,
                .asset_type = enote.asset_type,
                .view_tag = enote.view_tag,
                .encrypted_janus_anchor = enote.anchor_enc
            }
        });
    }

    //ephemeral pubkeys: D_e
    store_carrot_ephemeral_pubkeys_to_extra(enotes, tx.extra);

    //add extra_nonce to tx_extra
    CHECK_AND_ASSERT_THROW_MES(cryptonote::add_extra_nonce_to_tx_extra(tx.extra, extra_nonce),
        "store_carrot_to_coinbase_transaction_v1: failed to add extra nonce to tx_extra");

    // sort tx_extra
    CHECK_AND_ASSERT_THROW_MES(cryptonote::sort_tx_extra(tx.extra, tx.extra),
        "store_carrot_to_coinbase_transaction_v1: failed to sort tx_extra");

    return tx;
}
//-------------------------------------------------------------------------------------------------------------------
cryptonote::transaction make_single_enote_carrot_coinbase_transaction_v1(const CarrotDestinationV1 &destination,
    const rct::xmr_amount block_reward,
    const std::uint64_t block_index,
    const cryptonote::blobdata &extra_nonce)
{
    CHECK_AND_ASSERT_THROW_MES(!destination.is_subaddress,
        "make_single_enote_carrot_coinbase_transaction_v1: subaddress are not allowed in miner transactions");
    CHECK_AND_ASSERT_THROW_MES(destination.payment_id == null_payment_id,
        "make_single_enote_carrot_coinbase_transaction_v1: integrated addresses are not allowed in miner transactions");

    const CarrotPaymentProposalV1 payment_proposal{
        .destination = destination,
        .amount = block_reward,
        .asset_type = "SAL1",
        .randomness = gen_janus_anchor()
    };

    std::vector<CarrotCoinbaseEnoteV1> enotes(1);
    get_coinbase_output_proposal_v1(payment_proposal, block_index, enotes.front());

    return store_carrot_to_coinbase_transaction_v1(enotes, extra_nonce, cryptonote::transaction_type::MINER, block_index);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_load_carrot_coinbase_enote_from_transaction_v1(const cryptonote::transaction &tx,
    const epee::span<const mx25519_pubkey> enote_ephemeral_pubkeys,
    const std::size_t local_output_index,
    CarrotCoinbaseEnoteV1 &enote_out)
{
    CHECK_AND_ASSERT_MES(!tx.vin.empty(), false, "try_load_carrot_coinbase_enote_from_transaction_v1: no inputs");
    const cryptonote::txin_gen * const inp = boost::strict_get<cryptonote::txin_gen>(&tx.vin.at(0));
    CHECK_AND_ASSERT_MES(inp, false, "try_load_carrot_coinbase_enote_from_transaction_v1: wrong input type");

    //block_index
    enote_out.block_index = inp->height;

    CHECK_AND_ASSERT_MES(local_output_index < tx.vout.size(),
        false,
        "try_load_carrot_coinbase_enote_from_transaction_v1: not enough outputs");
    const cryptonote::tx_out &o = tx.vout.at(local_output_index);

    //a
    enote_out.amount = o.amount;

    const cryptonote::txout_to_carrot_v1 * const c = boost::strict_get<cryptonote::txout_to_carrot_v1>(&o.target);
    CHECK_AND_ASSERT_MES(c, false, "try_load_carrot_coinbase_enote_from_transaction_v1: wrong output type");

    // asset type
    enote_out.asset_type = c->asset_type;

    //K_o
    enote_out.onetime_address = c->key;

    //vt
    enote_out.view_tag = c->view_tag;

    //anchor_enc
    enote_out.anchor_enc = c->encrypted_janus_anchor;

    CHECK_AND_ASSERT_MES(local_output_index < enote_ephemeral_pubkeys.size(),
        false,
        "try_load_carrot_coinbase_enote_from_transaction_v1: no enough ephemeral pubkeys");

    //D_e
    enote_out.enote_ephemeral_pubkey = enote_ephemeral_pubkeys[local_output_index];

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
bool try_load_carrot_from_coinbase_transaction_v1(const cryptonote::transaction &tx,
    std::vector<CarrotCoinbaseEnoteV1> &enotes_out)
{
    const size_t nouts = tx.vout.size();

    //D_e, pid_enc
    std::vector<mx25519_pubkey> enote_ephemeral_pubkeys;
    std::optional<encrypted_payment_id_t> dummy_encrypted_payment_id;
    if (!try_load_carrot_extra_v1(tx.extra, enote_ephemeral_pubkeys, dummy_encrypted_payment_id))
        return false;
    else if (enote_ephemeral_pubkeys.size() != nouts)
        return false;

    //outputs
    enotes_out.resize(nouts);
    for (size_t i = 0; i < nouts; ++i)
        if (!try_load_carrot_coinbase_enote_from_transaction_v1(tx,
                epee::to_span(enote_ephemeral_pubkeys),
                i,
                enotes_out[i]))
            return false;

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
} //namespace carrot
