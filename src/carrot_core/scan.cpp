// Copyright (c) 2025, The Monero Project
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

// Utilities for scanning carrot enotes

//paired header
#include "scan.h"

//local headers
#include "destination.h"
#include "enote_utils.h"
#include "ringct/rctOps.h"
#include "scan_unsafe.h"

//third party headers

//standard headers


namespace carrot
{
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static bool is_main_address_spend_pubkey(const crypto::public_key &address_spend_pubkey,
    const epee::span<const crypto::public_key> main_address_spend_pubkeys)
{
    for (const crypto::public_key &main_address_spend_pubkey : main_address_spend_pubkeys)
        if (address_spend_pubkey == main_address_spend_pubkey)
            return true;
    return false;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static crypto::secret_key make_enote_ephemeral_privkey_sender(const janus_anchor_t &anchor_norm,
    const CarrotDestinationV1 &destination,
    const input_context_t &input_context)
{
    // d_e = H_n(anchor_norm, input_context, K^j_s, pid))
    crypto::secret_key enote_ephemeral_privkey;
    make_carrot_enote_ephemeral_privkey(anchor_norm,
        input_context,
        destination.address_spend_pubkey,
        destination.payment_id,
        enote_ephemeral_privkey);
    return enote_ephemeral_privkey;
}
//-------------------------------------------------------------------------------------------------------------------
bool scan_return_output(
    const crypto::public_key &return_onetime_address,
    const mx25519_pubkey &return_ephemeral_pubkey,
    const carrot::view_tag_t &return_view_tag,
    const carrot::encrypted_janus_anchor_t &return_anchor_enc,
    const carrot::encrypted_amount_t &return_amount_enc,
    const std::optional<rct::key> amount_commitment,
    const carrot::input_context_t &return_input_context,
    carrot::carrot_and_legacy_account &account,
    crypto::public_key &address_spend_pubkey_out,
    rct::xmr_amount &amount_out,
    crypto::secret_key &amount_blinding_factor_out
) {
    const auto &return_output_map = account.get_return_output_map_ref();
    CHECK_AND_ASSERT_MES(return_output_map.count(return_onetime_address), false, "return output not found");
    const auto &origin_tx = return_output_map.at(return_onetime_address);

    // 1. make k_return
    crypto::secret_key k_return;
    account.s_view_balance_dev.make_internal_return_privkey(origin_tx.input_context, origin_tx.K_o, k_return);

    // 2. compute K_return' = k_return * G
    crypto::public_key K_return;
    crypto::secret_key_to_public_key(k_return, K_return);

    // 3. ssr
    mx25519_pubkey shared_secret_return_unctx;
    crypto::hash shared_secret_return;
    carrot::make_carrot_uncontextualized_shared_key_receiver(k_return, return_ephemeral_pubkey, shared_secret_return_unctx);
    carrot::make_carrot_sender_receiver_secret(
        shared_secret_return_unctx.data,
        return_ephemeral_pubkey,
        return_input_context,
        shared_secret_return
    );

    // 4. verify the view_tag
    CHECK_AND_ASSERT_MES(
        carrot::test_carrot_view_tag(
            shared_secret_return_unctx.data,
            return_input_context,
            return_onetime_address,
            return_view_tag
        ),
        false,
        "view tag verification failed for carrot coinbase enote"
    );

    // 5. compute anchor_return
    carrot::janus_anchor_t recovered_anchor_return = 
        carrot::decrypt_carrot_anchor(return_anchor_enc, shared_secret_return, return_onetime_address);

    // 6. compute d_e'
    crypto::secret_key recovered_ephemeral_privkey_return;
    carrot::make_carrot_enote_ephemeral_privkey(
        recovered_anchor_return,
        return_input_context,
        origin_tx.K_change,
        carrot::null_payment_id,
        recovered_ephemeral_privkey_return
    );

    // 7. compute D_e'
    mx25519_pubkey recovered_ephemeral_pubkey_return;
    carrot::make_carrot_enote_ephemeral_pubkey(
        recovered_ephemeral_privkey_return,
        origin_tx.K_change,
        false,
        recovered_ephemeral_pubkey_return
    );

    // 8. verify the enote ephemeral pubkey
    CHECK_AND_ASSERT_MES(
        memcmp(recovered_ephemeral_pubkey_return.data, return_ephemeral_pubkey.data, sizeof(mx25519_pubkey)) == 0,
        false,
        "carrot coinbase enote protection verification failed"
    );

    amount_out = carrot::decrypt_carrot_amount(return_amount_enc, shared_secret_return, return_onetime_address);
    address_spend_pubkey_out = origin_tx.K_change;

    if (amount_commitment)
    {
        CHECK_AND_ASSERT_MES(
            carrot::try_recompute_carrot_amount_commitment(shared_secret_return,
                amount_out,
                address_spend_pubkey_out,
                carrot::CarrotEnoteType::PAYMENT,
                amount_commitment.value(),
                amount_blinding_factor_out
            ),
            false,
            "failed to recompute carrot amount commitment for return output"
        );
    }
    return true;
}
//-------------------------------------------------------------------------------------------------------------------
static bool try_scan_carrot_coinbase_enote_checked(
    const CarrotCoinbaseEnoteV1 &enote,
    const mx25519_pubkey &s_sender_receiver_unctx,
    const epee::span<const crypto::public_key> main_addresss_spend_pubkeys,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    crypto::public_key &address_spend_pubkey_out)
{
    // s^ctx_sr, k^g_o, k^g_t, K^j_s, pid, anchor
    janus_anchor_t nominal_janus_anchor;
    if (!try_scan_carrot_coinbase_enote_no_janus(enote,
            s_sender_receiver_unctx,
            sender_extension_g_out,
            sender_extension_t_out,
            address_spend_pubkey_out,
            nominal_janus_anchor))
        return false;

    if (!is_main_address_spend_pubkey(address_spend_pubkey_out, main_addresss_spend_pubkeys))
        return false;

    return verify_carrot_normal_janus_protection(nominal_janus_anchor,
        make_carrot_input_context_coinbase(enote.block_index),
        address_spend_pubkey_out,
        /*is_subaddress=*/false,
        null_payment_id,
        enote.enote_ephemeral_pubkey);
}
//-------------------------------------------------------------------------------------------------------------------
static bool try_scan_carrot_enote_external_normal_checked(const CarrotEnoteV1 &enote,
    const std::optional<encrypted_payment_id_t> &encrypted_payment_id,
    const mx25519_pubkey &s_sender_receiver_unctx,
    const epee::span<const crypto::public_key> main_address_spend_pubkeys,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    crypto::public_key &address_spend_pubkey_out,
    rct::xmr_amount &amount_out,
    crypto::secret_key &amount_blinding_factor_out,
    payment_id_t &payment_id_out,
    CarrotEnoteType &enote_type_out,
    janus_anchor_t &nominal_janus_anchor_out,
    bool &verified_normal_janus)
{
    if (!try_scan_carrot_enote_external_no_janus(enote,
            encrypted_payment_id,
            s_sender_receiver_unctx,
            sender_extension_g_out,
            sender_extension_t_out,
            address_spend_pubkey_out,
            amount_out,
            amount_blinding_factor_out,
            payment_id_out,
            enote_type_out,
            nominal_janus_anchor_out))
        return false;

    verified_normal_janus = verify_carrot_normal_janus_protection(
        make_carrot_input_context(enote.tx_first_key_image),
        address_spend_pubkey_out,
        !is_main_address_spend_pubkey(address_spend_pubkey_out, main_address_spend_pubkeys),
        enote.enote_ephemeral_pubkey,
        nominal_janus_anchor_out,
        payment_id_out);

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
bool make_carrot_uncontextualized_shared_key_receiver(
    const view_incoming_key_device &k_view_dev,
    const mx25519_pubkey &enote_ephemeral_pubkey,
    mx25519_pubkey &s_sender_receiver_unctx_out)
{
    return k_view_dev.view_key_scalar_mult_x25519(enote_ephemeral_pubkey, s_sender_receiver_unctx_out);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_coinbase_enote_sender(
    const CarrotCoinbaseEnoteV1 &enote,
    const CarrotDestinationV1 &destination,
    const janus_anchor_t &anchor_norm,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out)
{
    const crypto::secret_key enote_ephemeral_privkey = make_enote_ephemeral_privkey_sender(anchor_norm,
        destination,
        make_carrot_input_context_coinbase(enote.block_index));

    return try_scan_carrot_coinbase_enote_sender(enote,
        destination,
        enote_ephemeral_privkey,
        sender_extension_g_out,
        sender_extension_t_out);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_coinbase_enote_sender(
    const CarrotCoinbaseEnoteV1 &enote,
    const CarrotDestinationV1 &destination,
    const crypto::secret_key &enote_ephemeral_privkey,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out)
{
    // s_sr = d_e ConvertPointE(K^j_v)
    mx25519_pubkey s_sender_receiver_unctx;
    make_carrot_uncontextualized_shared_key_sender(enote_ephemeral_privkey,
        destination.address_view_pubkey,
        s_sender_receiver_unctx);

    crypto::public_key dummy_main_address_spend_pubkey;
    if (!try_scan_carrot_coinbase_enote_checked(enote,
            s_sender_receiver_unctx,
            {&destination.address_spend_pubkey, 1},
            sender_extension_g_out,
            sender_extension_t_out,
            dummy_main_address_spend_pubkey))
        return false;

    // this should've already been checked, but just for good measure...
    return dummy_main_address_spend_pubkey == destination.address_spend_pubkey;
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_coinbase_enote_receiver(
    const CarrotCoinbaseEnoteV1 &enote,
    const mx25519_pubkey &s_sender_receiver_unctx,
    const epee::span<const crypto::public_key> main_address_spend_pubkeys,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    crypto::public_key &main_address_spend_pubkey_out)
{
    return try_scan_carrot_coinbase_enote_checked(enote,
        s_sender_receiver_unctx,
        main_address_spend_pubkeys,
        sender_extension_g_out,
        sender_extension_t_out,
        main_address_spend_pubkey_out);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_coinbase_enote_receiver(
    const CarrotCoinbaseEnoteV1 &enote,
    const mx25519_pubkey &s_sender_receiver_unctx,
    const crypto::public_key &main_address_spend_pubkey,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out)
{
    crypto::public_key dummy_main_address_spend_pubkey;
    return try_scan_carrot_coinbase_enote_receiver(
        enote,
        s_sender_receiver_unctx,
        {&main_address_spend_pubkey, 1},
        sender_extension_g_out,
        sender_extension_t_out,
        dummy_main_address_spend_pubkey);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_enote_external_sender(const CarrotEnoteV1 &enote,
    const std::optional<encrypted_payment_id_t> &encrypted_payment_id,
    const CarrotDestinationV1 &destination,
    const janus_anchor_t &anchor_norm,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    rct::xmr_amount &amount_out,
    crypto::secret_key &amount_blinding_factor_out,
    CarrotEnoteType &enote_type_out,
    const bool check_pid)
{
    const crypto::secret_key enote_ephemeral_privkey = make_enote_ephemeral_privkey_sender(anchor_norm,
        destination,
        make_carrot_input_context(enote.tx_first_key_image));

    return try_scan_carrot_enote_external_sender(enote,
        encrypted_payment_id,
        destination,
        enote_ephemeral_privkey,
        sender_extension_g_out,
        sender_extension_t_out,
        amount_out,
        amount_blinding_factor_out,
        enote_type_out,
        check_pid);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_enote_external_sender(const CarrotEnoteV1 &enote,
    const std::optional<encrypted_payment_id_t> &encrypted_payment_id,
    const CarrotDestinationV1 &destination,
    const crypto::secret_key &enote_ephemeral_privkey,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    rct::xmr_amount &amount_out,
    crypto::secret_key &amount_blinding_factor_out,
    CarrotEnoteType &enote_type_out,
    const bool check_pid)
{
    // s_sr = d_e ConvertPointE(K^j_v)
    mx25519_pubkey s_sender_receiver_unctx;
    make_carrot_uncontextualized_shared_key_sender(enote_ephemeral_privkey,
        destination.address_view_pubkey,
        s_sender_receiver_unctx);

    return try_scan_carrot_enote_external_sender(enote,
        encrypted_payment_id,
        destination,
        s_sender_receiver_unctx,
        sender_extension_g_out,
        sender_extension_t_out,
        amount_out,
        amount_blinding_factor_out,
        enote_type_out,
        check_pid);
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_enote_external_sender(const CarrotEnoteV1 &enote,
    const std::optional<encrypted_payment_id_t> &encrypted_payment_id,
    const CarrotDestinationV1 &destination,
    const mx25519_pubkey &s_sender_receiver_unctx,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    rct::xmr_amount &amount_out,
    crypto::secret_key &amount_blinding_factor_out,
    CarrotEnoteType &enote_type_out,
    const bool check_pid)
{
    epee::span<const crypto::public_key> main_address_spend_pubkeys;
    if (destination.is_subaddress)
        main_address_spend_pubkeys = {};
    else
        main_address_spend_pubkeys = {&destination.address_spend_pubkey, 1};
    crypto::public_key recovered_address_spend_pubkey;
    payment_id_t recovered_payment_id;
    CarrotEnoteType recovered_enote_type;
    janus_anchor_t dummy_janus_anchor;
    bool verified_normal_janus = false;
    if (!try_scan_carrot_enote_external_normal_checked(enote,
            encrypted_payment_id,
            s_sender_receiver_unctx,
            main_address_spend_pubkeys,
            sender_extension_g_out,
            sender_extension_t_out,
            recovered_address_spend_pubkey,
            amount_out,
            amount_blinding_factor_out,
            recovered_payment_id,
            recovered_enote_type,
            dummy_janus_anchor,
            verified_normal_janus))
        return false;
    else if (!verified_normal_janus)
        return false;
    else if (recovered_address_spend_pubkey != destination.address_spend_pubkey)
        return false;
    else if (check_pid && recovered_payment_id != destination.payment_id)
        return false;
    else if (recovered_enote_type != CarrotEnoteType::PAYMENT)
        return false;

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_enote_external_receiver(const CarrotEnoteV1 &enote,
    const std::optional<encrypted_payment_id_t> &encrypted_payment_id,
    const mx25519_pubkey &s_sender_receiver_unctx,
    const epee::span<const crypto::public_key> main_address_spend_pubkeys,
    const view_incoming_key_device &k_view_dev,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    crypto::public_key &address_spend_pubkey_out,
    rct::xmr_amount &amount_out,
    crypto::secret_key &amount_blinding_factor_out,
    payment_id_t &payment_id_out,
    CarrotEnoteType &enote_type_out)
{
    janus_anchor_t nominal_janus_anchor;
    bool verified_normal_janus = false;
    if (!try_scan_carrot_enote_external_normal_checked(enote,
            encrypted_payment_id,
            s_sender_receiver_unctx,
            main_address_spend_pubkeys,
            sender_extension_g_out,
            sender_extension_t_out,
            address_spend_pubkey_out,
            amount_out,
            amount_blinding_factor_out,
            payment_id_out,
            enote_type_out,
            nominal_janus_anchor,
            verified_normal_janus))
        return false;

    if (!verified_normal_janus && !verify_carrot_special_janus_protection(enote.tx_first_key_image,
            enote.enote_ephemeral_pubkey,
            enote.onetime_address,
            k_view_dev,
            nominal_janus_anchor))
        return false;

    return true;
}
//-------------------------------------------------------------------------------------------------------------------
bool try_scan_carrot_enote_internal_receiver(const CarrotEnoteV1 &enote,
    carrot::carrot_and_legacy_account &account,
    crypto::secret_key &sender_extension_g_out,
    crypto::secret_key &sender_extension_t_out,
    crypto::public_key &address_spend_pubkey_out,
    rct::xmr_amount &amount_out,
    crypto::secret_key &amount_blinding_factor_out,
    CarrotEnoteType &enote_type_out,
    janus_anchor_t &internal_message_out,
    crypto::public_key &return_address_out,
    bool &is_return_out)
{
    // Determine whether this is a full wallet or a watch-only wallet
    const cryptonote::account_keys &keys = account.get_keys();
    bool watch_only = (keys.m_spend_secret_key == crypto::null_skey && keys.m_view_secret_key == crypto::null_skey);
    
    // input_context
    const input_context_t input_context = make_carrot_input_context(enote.tx_first_key_image);

    // assume that the enote is not a return output
    is_return_out = false;

    // vt = H_3(s_sr || input_context || Ko)
    view_tag_t nominal_view_tag;
    account.s_view_balance_dev.make_internal_view_tag(input_context, enote.onetime_address, nominal_view_tag);

    // test view tag
    if (nominal_view_tag == enote.view_tag) {
        // s^ctx_sr = H_32(s_vb, D_e, input_context)
        crypto::hash s_sender_receiver;
        account.s_view_balance_dev.make_internal_sender_receiver_secret(enote.enote_ephemeral_pubkey,
            input_context,
            s_sender_receiver);
    
        bool normal_change_found = true;
        if (!try_scan_carrot_enote_internal_burnt(enote,
            s_sender_receiver,
            sender_extension_g_out,
            sender_extension_t_out,
            address_spend_pubkey_out,
            amount_out,
            amount_blinding_factor_out,
            enote_type_out,
            internal_message_out))
            return false;

        // we received a change output
        // save the Kr = K_change + K_return to out subaddress map
        for (const auto &output_key : enote.tx_output_keys) {
            // make k_return
            crypto::secret_key k_return;
            const carrot::input_context_t input_context = carrot::make_carrot_input_context(enote.tx_first_key_image);
            account.s_view_balance_dev.make_internal_return_privkey(input_context, output_key, k_return);

            // compute K_return = k_return * G
            crypto::public_key K_return;
            crypto::secret_key_to_public_key(k_return, K_return);

            // compute K_r = K_return + K_o
            crypto::public_key K_r = rct::rct2pk(rct::addKeys(rct::pk2rct(K_return), rct::pk2rct(enote.onetime_address)));

            // Is this a watch-only wallet?
            // if (watch_only) {

            // HERE BE DRAGONS!!!
            // SRCG: test whether this will even work for return_payment detection
            account.insert_return_output_info({{K_r, {input_context, output_key, enote.onetime_address, crypto::key_image{}, crypto::null_skey, crypto::null_skey}}});
            // LAND AHOY!!!
              
            // } else {
              
            //   // calculate the key image for the return output
            //   crypto::secret_key sum_g;
            //   sc_add(to_bytes(sum_g), to_bytes(sender_extension_g_out), to_bytes(k_return));
            //   crypto::key_image key_image = account.derive_key_image(
            //                                                          address_spend_pubkey_out, // THIS WAS WRONG!!! -> account.get_keys().m_carrot_account_address.m_spend_public_key,
            //                                                          sum_g,
            //                                                          sender_extension_t_out,
            //                                                          K_r
            //                                                          );
              
            //   crypto::secret_key x, y;
            //   account.try_searching_for_opening_for_onetime_address(
            //                                                         address_spend_pubkey_out, // THIS WAS WRONG!!! -> account.get_keys().m_carrot_account_address.m_spend_public_key,
            //                                                         sum_g,
            //                                                         sender_extension_t_out,
            //                                                         x,
            //                                                         y
            //                                                         );
              
            //   // save the input context & change output key
            //   account.insert_return_output_info({{K_r, {input_context, output_key, enote.onetime_address, key_image, x, y}}});
            // }
        }

        // janus protection checks are not needed for internal scans
        return true;
    }

    // check for known return addresses
    const auto &return_map = account.get_return_output_map_ref();
    if (return_map.find(enote.onetime_address) == return_map.end())
        return false;

    // scan the return output
    if (!scan_return_output(
            enote.onetime_address,
            enote.enote_ephemeral_pubkey,
            enote.view_tag,
            enote.anchor_enc,
            enote.amount_enc,
            enote.amount_commitment,
            carrot::make_carrot_input_context(enote.tx_first_key_image),
            account,
            address_spend_pubkey_out,
            amount_out,
            amount_blinding_factor_out)) 
        return false;

    // if we come here, we have a return output
    is_return_out = true;
    return_address_out = enote.onetime_address;
    return true;
}
//-------------------------------------------------------------------------------------------------------------------
} //namespace carrot
