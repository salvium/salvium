// Copyright (c) 2024, The Monero Project
// Portions Copyright (c) 2024, Salvium (author: SRCG)
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

#include "gtest/gtest.h"

#include "carrot_core/account_secrets.h"
#include "carrot_core/address_utils.h"
#include "carrot_core/device_ram_borrowed.h"
#include "carrot_core/enote_utils.h"
#include "carrot_core/output_set_finalization.h"
#include "carrot_core/payment_proposal.h"
#include "carrot_core/scan.h"
#include "carrot_core/sparc.h"
#include "crypto/crypto.h"
#include "crypto/generators.h"
#include "ringct/rctOps.h"

#include "carrot_mock_helpers.h"

using namespace carrot;

//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
struct mock_carrot_keys
{
    crypto::secret_key s_master;
    crypto::secret_key k_prove_spend;
    crypto::secret_key s_view_balance;
    crypto::secret_key k_generate_image;
    crypto::secret_key k_view;
    crypto::secret_key s_generate_address;
    crypto::public_key account_spend_pubkey;
    crypto::public_key account_view_pubkey;
    crypto::public_key main_address_view_pubkey;

    view_incoming_key_ram_borrowed_device k_view_dev;
    view_balance_secret_ram_borrowed_device s_view_balance_dev;

    mock_carrot_keys(): k_view_dev(k_view), s_view_balance_dev(s_view_balance)
    {}

    static mock_carrot_keys generate()
    {
        mock_carrot_keys k;
        crypto::generate_random_bytes_thread_safe(sizeof(crypto::secret_key), to_bytes(k.s_master));
        make_carrot_provespend_key(k.s_master, k.k_prove_spend);
        make_carrot_viewbalance_secret(k.s_master, k.s_view_balance);
        make_carrot_generateimage_key(k.s_view_balance, k.k_generate_image);
        make_carrot_viewincoming_key(k.s_view_balance, k.k_view);
        make_carrot_generateaddress_secret(k.s_view_balance, k.s_generate_address);
        make_carrot_spend_pubkey(k.k_generate_image, k.k_prove_spend, k.account_spend_pubkey);
        k.account_view_pubkey = rct::rct2pk(rct::scalarmultKey(rct::pk2rct(k.account_spend_pubkey),
            rct::sk2rct(k.k_view)));
        k.main_address_view_pubkey = rct::rct2pk(rct::scalarmultBase(rct::sk2rct(k.k_view)));
        return k;
    }
};
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
static bool can_open_fcmp_onetime_address(const crypto::secret_key &k_prove_spend,
    const crypto::secret_key &k_generate_image,
    const crypto::secret_key &subaddr_scalar,
    const crypto::secret_key &sender_extension_g,
    const crypto::secret_key &sender_extension_t,
    const crypto::public_key &onetime_address)
{
    // K_s = k_gi G + k_ps T
    // K^j_s = k^j_subscal * K_s
    // Ko = K^j_s + k^o_g G + k^o_t T
    //    = (k^o_g + k^j_subscal * k_gi) G + (k^o_t + k^j_subscal * k_ps) T

    // combined_g = k^o_g + k^j_subscal * k_gi
    rct::key combined_g;
    sc_muladd(combined_g.bytes, to_bytes(subaddr_scalar), to_bytes(k_generate_image), to_bytes(sender_extension_g));

    // combined_t = k^o_t + k^j_subscal * k_ps
    rct::key combined_t;
    sc_muladd(combined_t.bytes, to_bytes(subaddr_scalar), to_bytes(k_prove_spend), to_bytes(sender_extension_t));

    // Ko' = combined_g G + combined_t T
    rct::key recomputed_onetime_address;
    rct::addKeys2(recomputed_onetime_address, combined_g, combined_t, rct::pk2rct(crypto::get_T()));

    // Ko' ?= Ko
    return recomputed_onetime_address == onetime_address;
}
//----------------------------------------------------------------------------------------------------------------------
template <typename T>
static auto auto_wiper(T &obj)
{
    static_assert(std::is_trivially_copyable<T>());
    return epee::misc_utils::create_scope_leave_handler([&]{ memwipe(&obj, sizeof(T)); });
}
//----------------------------------------------------------------------------------------------------------------------
std::tuple<std::vector<RCTOutputEnoteProposal>, crypto::public_key> make_origin_tx(
    mock::mock_carrot_and_legacy_keys &alice,
    CarrotDestinationV1 &bob_address
) {
    // spend input
    const crypto::key_image tx_first_key_image = rct::rct2ki(rct::pkGen());

    // make change output
    RCTOutputEnoteProposal enote_proposal_change;
    get_output_proposal_internal_v1(
        CarrotPaymentProposalSelfSendV1{
            .destination_address_spend_pubkey = alice.carrot_account_spend_pubkey,
            .amount = crypto::rand<rct::xmr_amount>(),
            .enote_type = CarrotEnoteType::CHANGE,
            .enote_ephemeral_pubkey = gen_x25519_pubkey(),
            },
        alice.s_view_balance_dev,
        tx_first_key_image,
        std::nullopt,
        enote_proposal_change
    );

    // make payment output
    RCTOutputEnoteProposal enote_proposal_out;
    encrypted_payment_id_t encrypted_payment_id_out;
    const auto randomness = gen_janus_anchor();
    get_output_proposal_normal_v1(
        CarrotPaymentProposalV1{
            .destination = bob_address,
            .amount = crypto::rand<rct::xmr_amount>(),
            .randomness = randomness
        },
        tx_first_key_image,
        enote_proposal_out,
        encrypted_payment_id_out
    );

    // compute tx private key
    const input_context_t input_context = make_carrot_input_context(enote_proposal_out.enote.tx_first_key_image);
    crypto::secret_key enote_ephemeral_privkey;
    make_carrot_enote_ephemeral_privkey(
        randomness,
        input_context,
        bob_address.address_spend_pubkey,
        bob_address.payment_id,
        enote_ephemeral_privkey
    );

    // compute k_return
    crypto::secret_key k_return;
    alice.s_view_balance_dev.make_internal_return_privkey(input_context, enote_proposal_out.enote.onetime_address, k_return);

    // compute K_return = k_return * G
    crypto::public_key return_pub;
    crypto::secret_key_to_public_key(k_return, return_pub);
    encrypted_return_pubkey_t K_return;
    static_assert(sizeof(K_return.bytes) == sizeof(return_pub.data), "Size mismatch");
    memcpy(K_return.bytes, return_pub.data, sizeof(encrypted_return_pubkey_t));

    // compute K_o = K_change + K_return
    crypto::public_key K_o;
    sc_add(to_bytes(K_o), to_bytes(enote_proposal_change.enote.onetime_address), K_return.bytes);

    // calculate the shared secret
    mx25519_pubkey shared_secret_unctx;
    auto dhe_wiper = auto_wiper(shared_secret_unctx);
    make_carrot_uncontextualized_shared_key_sender(
        enote_ephemeral_privkey,
        bob_address.address_view_pubkey,
        shared_secret_unctx
    );
    
    // compute m_return
    encrypted_return_pubkey_t m_return;
    make_sparc_return_pubkey_encryption_mask(shared_secret_unctx.data, input_context, enote_proposal_out.enote.onetime_address, m_return);

    // compute return_enc
    enote_proposal_out.enote.return_enc = K_return ^ m_return;

    // Return the enotes and the public return key
    std::vector<RCTOutputEnoteProposal> tx_enotes{enote_proposal_change, enote_proposal_out};
    return {tx_enotes, K_o};
}
//----------------------------------------------------------------------------------------------------------------------
std::tuple<std::vector<RCTOutputEnoteProposal>, crypto::public_key> make_return_tx(
    mock::mock_carrot_and_legacy_keys &bob,
    std::vector<RCTOutputEnoteProposal> &origin_tx_outputs
) {
    // [0] enote is change, [1] enote bob received
    const auto change_output = origin_tx_outputs[0].enote;
    const auto received_output = origin_tx_outputs[1].enote;

    // 1. Recover the shared secret s_sr^ctx
    const input_context_t input_context = make_carrot_input_context(received_output.tx_first_key_image);
    mx25519_pubkey origin_tx_shared_secret_unctx;
    crypto::hash origin_tx_shared_secret;
    EXPECT_TRUE(bob.k_view_incoming_dev.view_key_scalar_mult_x25519(received_output.enote_ephemeral_pubkey, origin_tx_shared_secret_unctx));
    make_carrot_sender_receiver_secret(
        origin_tx_shared_secret_unctx.data,
        received_output.enote_ephemeral_pubkey,
        input_context,
        origin_tx_shared_secret
    );

    // 2. scan the output to see if it belongs to Bob
    crypto::secret_key recovered_sender_extension_g;
    crypto::secret_key recovered_sender_extension_t;
    crypto::public_key recovered_address_spend_pubkey;
    rct::xmr_amount recovered_amount;
    crypto::secret_key recovered_amount_blinding_factor;
    encrypted_payment_id_t recovered_payment_id;
    CarrotEnoteType recovered_enote_type;
    const bool scan_success = try_scan_carrot_enote_external_receiver(
        received_output,
        std::nullopt,
        origin_tx_shared_secret_unctx,
        {&bob.carrot_account_spend_pubkey, 1},
        bob.k_view_incoming_dev,
        recovered_sender_extension_g,
        recovered_sender_extension_t,
        recovered_address_spend_pubkey,
        recovered_amount,
        recovered_amount_blinding_factor,
        recovered_payment_id,
        recovered_enote_type
    );
    EXPECT_TRUE(scan_success);

    // check we can spend it
    EXPECT_TRUE(can_open_fcmp_onetime_address(
        bob.k_prove_spend,
        bob.k_generate_image,
        rct::rct2sk(rct::I),
        recovered_sender_extension_g,
        recovered_sender_extension_t,
        received_output.onetime_address
    ));

    // spend the received output for a return tx
    const crypto::key_image tx_return_first_key_image = bob.derive_key_image(
        bob.cryptonote_address().address_spend_pubkey,
        recovered_sender_extension_g,
        recovered_sender_extension_t,
        received_output.onetime_address
    );

    // Create a TX fee that needs to be deducted from the returned amount
    const rct::xmr_amount txnFee = recovered_amount >> 4;
    const rct::xmr_amount amount_return = recovered_amount - txnFee;

    // compute m_return
    encrypted_return_pubkey_t m_return;
    make_sparc_return_pubkey_encryption_mask(origin_tx_shared_secret_unctx.data, input_context, received_output.onetime_address, m_return);

    // compute K_return from return_enc
    encrypted_return_pubkey_t K_return;
    K_return = received_output.return_enc ^ m_return;
    crypto::public_key return_pub;
    static_assert(sizeof(K_return.bytes) == sizeof(return_pub.data), "Size mismatch");
    memcpy(return_pub.data, K_return.bytes, sizeof(encrypted_return_pubkey_t));

    // Make a destination address for the return
    CarrotDestinationV1 return_destination;
    make_carrot_main_address_v1(change_output.onetime_address, return_pub, return_destination);
    
    // Create the return proposal, using the return address and the amount
    const CarrotPaymentProposalV1 proposal_return = CarrotPaymentProposalV1{
        .destination = return_destination,
        .amount = amount_return,
        .randomness = gen_janus_anchor()
    };

    RCTOutputEnoteProposal enote_proposal_return;
    encrypted_payment_id_t encrypted_payment_id_return;
    get_output_proposal_return_v1(
        proposal_return,
        tx_return_first_key_image,
        enote_proposal_return,
        encrypted_payment_id_return
    );
    std::vector<RCTOutputEnoteProposal> tx_enotes{enote_proposal_return};
    return {tx_enotes, enote_proposal_return.enote.onetime_address};
}
//----------------------------------------------------------------------------------------------------------------------
TEST(carrot_sparc, main_address_return_payment_normal_scan_completeness)
{
    // these will generate a new format carrot address.
    mock::mock_carrot_and_legacy_keys alice, bob;
    alice.generate();
    bob.generate();

    // make origin tx Alice -> Bob
    CarrotDestinationV1 bob_address = bob.cryptonote_address();
    auto [origin_tx_outputs, origin_return_pubkey] = make_origin_tx(alice, bob_address);

    // make return tx Bob -> Alice
    auto [return_tx_outputs, return_pubkey] = make_return_tx(bob, origin_tx_outputs);
    const auto return_output = return_tx_outputs[0].enote;

    // Alice checks the "hashmap" for a known return_address
    ASSERT_EQ(origin_return_pubkey, return_pubkey);

    // 1. Alice Recover the shared secret(s_sr^ctx) of return tx
    const input_context_t input_context_return = make_carrot_input_context(return_output.tx_first_key_image);
    mx25519_pubkey shared_secret_return_unctx;
    crypto::hash shared_secret_return;
    EXPECT_TRUE(bob.k_view_incoming_dev.view_key_scalar_mult_x25519(return_output.enote_ephemeral_pubkey, shared_secret_return_unctx));
    make_carrot_sender_receiver_secret(
        shared_secret_return_unctx.data,
        return_output.enote_ephemeral_pubkey,
        input_context_return,
        shared_secret_return
    );
    /*
    // 2. scan the enote to see if it belongs to Alice
    crypto::secret_key recovered_sender_extension_g_return;
    crypto::secret_key recovered_sender_extension_t_return;
    crypto::public_key recovered_address_spend_pubkey_return;
    rct::xmr_amount recovered_amount_return;
    crypto::secret_key recovered_amount_blinding_factor_return;
    CarrotEnoteType recovered_enote_type_return;
    payment_id_t recovered_payment_id_return;
    const bool scan_success_return = try_scan_carrot_enote_external(
        return_output,
        std::nullopt,
        shared_secret_return_unctx,
        alice.k_view_incoming_dev,
        alice.carrot_account_spend_pubkey,
        recovered_sender_extension_g_return,
        recovered_sender_extension_t_return,
        recovered_address_spend_pubkey_return,
        recovered_amount_return,
        recovered_amount_blinding_factor_return,
        recovered_payment_id_return,
        recovered_enote_type_return
    );
    ASSERT_TRUE(scan_success_return);
    */
    // check recovered data
    // EXPECT_EQ(enote_proposal_change.enote.onetime_address, recovered_address_spend_pubkey_return);
    // EXPECT_EQ(proposal_out.amount, recovered_amount_return + txnFee); // returned minus the deducted TX fee
    // EXPECT_EQ(enote_proposal_return.amount_blinding_factor, recovered_amount_blinding_factor_return);
    // EXPECT_EQ(null_payment_id, recovered_payment_id_return);
    // EXPECT_EQ(CarrotEnoteType::PAYMENT, recovered_enote_type_return);

    // check spendability of the return_payment
    // rct::key combined_extension_g;
    // sc_add(combined_extension_g.bytes, to_bytes(recovered_sender_extension_g_change), to_bytes(recovered_sender_extension_g_return));
    // rct::key combined_extension_t;
    // sc_add(combined_extension_t.bytes, to_bytes(recovered_sender_extension_t_change), to_bytes(recovered_sender_extension_t_return));
    // EXPECT_TRUE(can_open_fcmp_onetime_address(alice.k_prove_spend,
    //                                           alice.k_generate_image,
    //                                           rct::rct2sk(rct::I),
    //                                           rct::rct2sk(combined_extension_g),
    //                                           rct::rct2sk(combined_extension_t),
    //                                           enote_proposal_return.enote.onetime_address));
}
//----------------------------------------------------------------------------------------------------------------------
TEST(carrot_sparc, get_spend_authority_proof_completeness)
{
  // Create a structure to hold the proof
  rct::zk_proof proof;

  // Create a dummy K_o value from random scalars
  rct::key x = rct::skGen();
  rct::key y = rct::skGen();
  rct::key xG = rct::scalarmultBase(x);
  rct::key yT = rct::scalarmultKey(rct::pk2rct(crypto::get_T()), y);
  rct::key K_o = rct::addKeys(xG, yT);

  // Generate the proof
  carrot::make_sparc_spend_authority_proof(x, y, K_o, proof);

  // Verify the proof
  EXPECT_TRUE(carrot::verify_sparc_spend_authority_proof(proof, K_o));
}
