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
template <typename T>
static auto auto_wiper(T &obj)
{
    static_assert(std::is_trivially_copyable<T>());
    return epee::misc_utils::create_scope_leave_handler([&]{ memwipe(&obj, sizeof(T)); });
}
//----------------------------------------------------------------------------------------------------------------------
std::tuple<std::vector<RCTOutputEnoteProposal>, crypto::public_key> make_origin_tx(
    carrot::carrot_and_legacy_account &alice,
    CarrotDestinationV1 &bob_address
) {
    // spend input
    const crypto::key_image tx_first_key_image = rct::rct2ki(rct::pkGen());

    // make change output
    RCTOutputEnoteProposal enote_proposal_change;
    RCTOutputEnoteProposal return_proposal;
    get_output_proposal_internal_v1(
        CarrotPaymentProposalSelfSendV1{
            .destination_address_spend_pubkey = alice.get_keys().m_carrot_account_address.m_spend_public_key,
            .amount = crypto::rand<rct::xmr_amount>(),
            .enote_type = CarrotEnoteType::CHANGE,
            .enote_ephemeral_pubkey = gen_x25519_pubkey(),
            },
        alice.s_view_balance_dev,
        tx_first_key_image,
        std::nullopt,
        cryptonote::transaction_type::TRANSFER, // tx_type
        return_proposal,
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
        nullptr, // s_view_balance_dev
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
    crypto::public_key K_o = rct::rct2pk(rct::addKeys(rct::pk2rct(return_pub), rct::pk2rct(enote_proposal_change.enote.onetime_address)));

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
    carrot::carrot_and_legacy_account &bob,
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
    payment_id_t recovered_payment_id;
    CarrotEnoteType recovered_enote_type;
    const bool scan_success = try_scan_carrot_enote_external_receiver(
        received_output,
        std::nullopt,
        origin_tx_shared_secret_unctx,
        {&bob.get_keys().m_carrot_account_address.m_spend_public_key, 1},
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
    EXPECT_TRUE(bob.can_open_fcmp_onetime_address(bob.get_keys().m_carrot_account_address.m_spend_public_key,
                                                  recovered_sender_extension_g,
                                                  recovered_sender_extension_t,
                                                  received_output.onetime_address));

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
        nullptr, // s_view_balance_dev
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
    carrot::carrot_and_legacy_account alice, bob;
    alice.generate();
    bob.generate();

    // make origin tx Alice -> Bob
    CarrotDestinationV1 bob_address = bob.cryptonote_address();
    auto [origin_tx_outputs, origin_return_pubkey] = make_origin_tx(alice, bob_address);

    // make return tx Bob -> Alice
    auto [return_tx_outputs, return_pubkey] = make_return_tx(bob, origin_tx_outputs);
    const auto return_output = return_tx_outputs[0].enote;

    // 1. Alice checks the "hashmap" for a known return_address
    ASSERT_EQ(origin_return_pubkey, return_pubkey);

    // Alice should now have access to the origin TX, including the "change" and "output" enotes
    const auto change_output = origin_tx_outputs[0].enote;
    const auto sent_output = origin_tx_outputs[1].enote;

    // 2. compute k_return'
    const input_context_t input_context = make_carrot_input_context(sent_output.tx_first_key_image);
    crypto::secret_key k_return;
    alice.s_view_balance_dev.make_internal_return_privkey(input_context, sent_output.onetime_address, k_return);
    
    // 3. compute K_return' = k_return * G
    crypto::public_key K_return;
    crypto::secret_key_to_public_key(k_return, K_return);

    // 4. compute K_o' = K_return' + K_change
    crypto::public_key K_o_verify = rct::rct2pk(rct::addKeys(rct::pk2rct(K_return), rct::pk2rct(change_output.onetime_address)));
    ASSERT_EQ(K_o_verify, return_pubkey);

    // 5. recover the shared secret(s_sr) of return tx
    // s_sr = k_return * D_e
    const input_context_t input_context_return = make_carrot_input_context(return_output.tx_first_key_image);
    mx25519_pubkey shared_secret_return_unctx;
    crypto::hash shared_secret_return;
    make_carrot_uncontextualized_shared_key_receiver(k_return, return_output.enote_ephemeral_pubkey, shared_secret_return_unctx);
    // s^ctx_sr = H_32(s_sr, D_e, input_context)
    make_carrot_sender_receiver_secret(shared_secret_return_unctx.data,
                                       return_output.enote_ephemeral_pubkey,
                                       input_context_return,
                                       shared_secret_return);

    // 6. verify the view_tag
    EXPECT_TRUE(test_carrot_view_tag(shared_secret_return_unctx.data, input_context_return, return_output.onetime_address, return_output.view_tag));
    
    // 8. compute the amount encryption mask and recover the amount
    rct::xmr_amount recovered_amount_return = decrypt_carrot_amount(return_output.amount_enc, shared_secret_return, return_output.onetime_address);

    // 10. compute k_a' = H_n(s^ctx_sr, a', K^j_s', enote_type')
    crypto::secret_key recovered_amount_blinding_factor_return;
    make_carrot_amount_blinding_factor(shared_secret_return,
                                       recovered_amount_return,
                                       change_output.onetime_address,
                                       CarrotEnoteType::PAYMENT,
                                       recovered_amount_blinding_factor_return);

    // 11. compute C_a' = k_a' G + a' H
    rct::key recovered_amount_commitment_return = rct::commit(recovered_amount_return, rct::sk2rct(recovered_amount_blinding_factor_return));

    // 12. verify the commitment
    ASSERT_EQ(return_output.amount_commitment, recovered_amount_commitment_return);

    // 13. compute m_pid and pid_enc - not implemented/tested since not supported in SPARC
    /*
    if (return_output.encrypted_payment_id)
        nominal_payment_id_out = decrypt_legacy_payment_id(*encrypted_payment_id, s_sender_receiver, onetime_address);
    else
        nominal_payment_id_out = null_payment_id;
    encrypted_payment_id_out =encrypt_legacy_payment_id(proposal.destination.payment_id, s_sender_receiver, output_enote_out.enote.onetime_address);
    */

    // 15. compute m_anchor and anchor'
    janus_anchor_t recovered_anchor_return = decrypt_carrot_anchor(return_output.anchor_enc, shared_secret_return, return_output.onetime_address);

    // 17. compute d_e'
    crypto::secret_key recovered_ephemeral_privkey_return;
    make_carrot_enote_ephemeral_privkey(recovered_anchor_return, input_context_return, change_output.onetime_address, null_payment_id, recovered_ephemeral_privkey_return);

    // 18. compute D_e'
    mx25519_pubkey recovered_ephemeral_pubkey_return;
    make_carrot_enote_ephemeral_pubkey(recovered_ephemeral_privkey_return, change_output.onetime_address, false, recovered_ephemeral_pubkey_return);

    // 19. verify the enote ephemeral pubkey
    ASSERT_EQ(recovered_ephemeral_pubkey_return, return_output.enote_ephemeral_pubkey);

    // Scan the change output 
    crypto::secret_key recovered_sender_extension_g_change;
    crypto::secret_key recovered_sender_extension_t_change;
    crypto::public_key recovered_address_spend_pubkey_change;
    rct::xmr_amount recovered_amount_change;
    crypto::secret_key recovered_amount_blinding_factor_change;
    CarrotEnoteType recovered_enote_type_change;
    janus_anchor_t recovered_internal_message_out_change;
    crypto::public_key return_address_out;
    bool is_return_out;
    const bool scan_success_change = try_scan_carrot_enote_internal_receiver(change_output,
                                                                             alice,
                                                                             recovered_sender_extension_g_change,
                                                                             recovered_sender_extension_t_change,
                                                                             recovered_address_spend_pubkey_change,
                                                                             recovered_amount_change,
                                                                             recovered_amount_blinding_factor_change,
                                                                             recovered_enote_type_change,
                                                                             recovered_internal_message_out_change,
                                                                             return_address_out,
                                                                             is_return_out);
    ASSERT_TRUE(scan_success_change);

    // check spendability of the change output
    EXPECT_TRUE(alice.can_open_fcmp_onetime_address(alice.get_keys().m_carrot_account_address.m_spend_public_key,
                                                    recovered_sender_extension_g_change,
                                                    recovered_sender_extension_t_change,
                                                    change_output.onetime_address));

    // check spendability of the return_payment
    crypto::secret_key sum_g;
    sc_add(to_bytes(sum_g), to_bytes(recovered_sender_extension_g_change), to_bytes(k_return));
    ASSERT_TRUE(alice.can_open_fcmp_onetime_address(alice.get_keys().m_carrot_account_address.m_spend_public_key,
                                                    sum_g,
                                                    recovered_sender_extension_t_change,
                                                    return_output.onetime_address));
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
