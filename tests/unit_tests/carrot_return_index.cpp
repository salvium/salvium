// Copyright (c) 2025, The Salvium Project 
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

#include "carrot_core/account.h"
#include "carrot_core/account_secrets.h"
#include "carrot_core/address_utils.h"
#include "carrot_core/carrot_enote_types.h"
#include "carrot_core/core_types.h"
#include "carrot_core/enote_utils.h"
#include "carrot_core/output_set_finalization.h"
#include "carrot_core/payment_proposal.h"
#include "carrot_core/scan.h"
#include "crypto/crypto.h"
#include "crypto/generators.h"
#include "ringct/rctOps.h"

#include <cstring>

#include "carrot_mock_helpers.h"

using namespace carrot;

// Alice sends once to Bob, Bob makes NUM_RETURNS return payments with random amounts,
TEST(carrot_return_index, payment_channel_multiple_returns)
{
    constexpr size_t NUM_RETURNS = 10;

    // accounts
    carrot::carrot_and_legacy_account alice, bob;
    alice.generate();
    bob.generate();

    // origin tx (Alice to Bob)
    const crypto::key_image origin_tx_first_key_image = rct::rct2ki(rct::pkGen());
    const input_context_t input_context = make_carrot_input_context(origin_tx_first_key_image);

    // Alice's change output onetime address (K_change)
    const crypto::public_key K_change = rct::rct2pk(rct::pkGen());

    // Bob's received output onetime address (Ko)
    const crypto::public_key Ko = rct::rct2pk(rct::pkGen());

    // Alice derives k_return_base
    crypto::secret_key k_return_base;
    alice.s_view_balance_dev.make_internal_return_privkey(input_context, Ko, k_return_base);

    // K_return_base = k_return_base * G
    crypto::public_key K_return_base;
    crypto::secret_key_to_public_key(k_return_base, K_return_base);

    // s_sr from origin TX (shared between Alice and Bob)
    unsigned char s_sender_receiver_unctx[32];
    crypto::rand(32, s_sender_receiver_unctx);

    // Structure to hold Bob's return TX data (what would be on-chain)
    struct ReturnTxData {
        crypto::public_key K_r;                    // return address
        crypto::public_key onetime_address;        // Ko for this return TX
        mx25519_pubkey enote_ephemeral_pubkey;     // D_e
        encrypted_amount_t amount_enc;             // encrypted amount
        crypto::key_image tx_first_key_image;      // for input context
    };
    std::vector<ReturnTxData> return_txs(NUM_RETURNS);

    rct::xmr_amount bob_total_sent = 0;

    // Bob returns NUM_RETURNS payments
    for (uint64_t idx = 0; idx < NUM_RETURNS; ++idx)
    {
        // Random amount
        rct::xmr_amount amount = crypto::rand<rct::xmr_amount>() & 0xFFFFFFFF;
        bob_total_sent += amount;

        crypto::secret_key k_idx;
        make_sparc_return_index(s_sender_receiver_unctx, input_context, Ko, idx, k_idx);

        // Bob: K_return_final = K_return_base + k_idx * T 
        rct::key k_idx_T;
        rct::scalarmultKey(k_idx_T, rct::pk2rct(crypto::get_T()), rct::sk2rct(k_idx));
        rct::key K_return_final = rct::addKeys(rct::pk2rct(K_return_base), k_idx_T);

        // Bob: K_r = K_return_final + K_change
        return_txs[idx].K_r = rct::rct2pk(rct::addKeys(K_return_final, rct::pk2rct(K_change)));

        // Bob: return TX enote
        return_txs[idx].tx_first_key_image = rct::rct2ki(rct::pkGen());
        return_txs[idx].onetime_address = rct::rct2pk(rct::pkGen());

        // D_e
        crypto::secret_key d_e;
        crypto::rand(32, to_bytes(d_e));
        sc_reduce32(to_bytes(d_e));
        make_carrot_enote_ephemeral_pubkey_cryptonote(d_e, return_txs[idx].enote_ephemeral_pubkey);

        const input_context_t return_input_context = make_carrot_input_context(return_txs[idx].tx_first_key_image);
        mx25519_pubkey shared_secret_unctx;
        crypto::hash shared_secret;
        make_carrot_uncontextualized_shared_key_sender(d_e, K_return_base, shared_secret_unctx);
        make_carrot_sender_receiver_secret(shared_secret_unctx.data, return_txs[idx].enote_ephemeral_pubkey, return_input_context, shared_secret);

        // Bob encrypts the amount
        return_txs[idx].amount_enc = encrypt_carrot_amount(amount, shared_secret, return_txs[idx].onetime_address);
    }

    // Verify all K_r values are unique
    for (size_t i = 0; i < NUM_RETURNS; ++i)
    {
        for (size_t j = i + 1; j < NUM_RETURNS; ++j)
        {
            EXPECT_NE(return_txs[i].K_r, return_txs[j].K_r)
                << "K_r for return " << i << " and " << j << " should differ";
        }
    }

    // Alice receives and decrypts all return payments
    rct::xmr_amount alice_total_received = 0;

    for (uint64_t idx = 0; idx < NUM_RETURNS; ++idx)
    {
        const auto &rtx = return_txs[idx];

        // k_idx for this return index
        crypto::secret_key alice_k_idx;
        make_sparc_return_index(s_sender_receiver_unctx, input_context, Ko, idx, alice_k_idx);

        // Alice: K_return = k_return * G + k_idx * T
        rct::key alice_K_return_rct;
        rct::addKeys2(alice_K_return_rct, rct::sk2rct(k_return_base), rct::sk2rct(alice_k_idx), rct::pk2rct(crypto::get_T()));

        // Alice computes K_r = K_return + K_change
        crypto::public_key alice_K_r = rct::rct2pk(rct::addKeys(alice_K_return_rct, rct::pk2rct(K_change)));

        // Verify Alice's K_r matches what's on-chain (Bob's)
        ASSERT_EQ(alice_K_r, rtx.K_r) << "K_r mismatch for idx " << idx;

        // Alice derives shared secret using k_return_base
        const input_context_t return_input_context = make_carrot_input_context(rtx.tx_first_key_image);
        mx25519_pubkey shared_secret_unctx;
        crypto::hash shared_secret;
        make_carrot_uncontextualized_shared_key_receiver(k_return_base, rtx.enote_ephemeral_pubkey, shared_secret_unctx);
        make_carrot_sender_receiver_secret(shared_secret_unctx.data, rtx.enote_ephemeral_pubkey, return_input_context, shared_secret);

        // Alice decrypts the amount
        rct::xmr_amount decrypted_amount = decrypt_carrot_amount(rtx.amount_enc, shared_secret, rtx.onetime_address);

        alice_total_received += decrypted_amount;
    }

    // Final verification: Alice's total matches Bob's total
    EXPECT_EQ(alice_total_received, bob_total_sent);
}

// a valid (non-colliding) return output is recovered through the return-map path, with the right
// amount. guards the fall-through change in try_scan_carrot_enote_internal_receiver.
TEST(carrot_return_index, return_output_detected)
{
    carrot::carrot_and_legacy_account recipient;
    recipient.generate();

    const crypto::key_image origin_ki = rct::rct2ki(rct::pkGen());
    const input_context_t origin_input_context = make_carrot_input_context(origin_ki);
    const crypto::public_key K_o = rct::rct2pk(rct::pkGen());
    const crypto::public_key K_change = rct::rct2pk(rct::pkGen());

    crypto::secret_key k_return;
    recipient.s_view_balance_dev.make_internal_return_privkey(origin_input_context, K_o, k_return);
    crypto::public_key K_return;
    crypto::secret_key_to_public_key(k_return, K_return);

    const crypto::key_image return_ki = rct::rct2ki(rct::pkGen());
    const input_context_t return_input_context = make_carrot_input_context(return_ki);

    const janus_anchor_t anchor = gen_janus_anchor();
    crypto::secret_key d_e;
    make_carrot_enote_ephemeral_privkey(anchor, return_input_context, K_change, null_payment_id, d_e);
    mx25519_pubkey D_e;
    make_carrot_enote_ephemeral_pubkey(d_e, K_change, /*is_subaddress=*/false, D_e);
    mx25519_pubkey s_unctx;
    ASSERT_TRUE(make_carrot_uncontextualized_shared_key_sender(d_e, K_return, s_unctx));
    crypto::hash s_sr;
    make_carrot_sender_receiver_secret(s_unctx.data, D_e, return_input_context, s_sr);

    // real return address K_r = K_return + K_change
    const crypto::public_key K_r = rct::rct2pk(rct::addKeys(rct::pk2rct(K_return), rct::pk2rct(K_change)));

    const rct::xmr_amount amount = 1337;
    crypto::secret_key k_a;
    make_carrot_amount_blinding_factor(s_sr, amount, K_change, carrot::CarrotEnoteType::PAYMENT, k_a);

    carrot::CarrotEnoteV1 enote{};
    enote.onetime_address = K_r;
    enote.amount_commitment = rct::commit(amount, rct::sk2rct(k_a));
    enote.amount_enc = encrypt_carrot_amount(amount, s_sr, K_r);
    enote.anchor_enc = encrypt_carrot_anchor(anchor, s_sr, K_r);
    make_carrot_view_tag(s_unctx.data, return_input_context, K_r, enote.view_tag);
    enote.enote_ephemeral_pubkey = D_e;
    enote.tx_first_key_image = return_ki;
    enote.asset_type = "SAL1";

    recipient.insert_return_output_info({{K_r, carrot::return_output_info_t(
        origin_input_context, K_o, K_change, K_change,
        crypto::key_image{}, crypto::secret_key{}, crypto::secret_key{})}});

    crypto::secret_key ext_g, ext_t, abf;
    crypto::public_key spend_pubkey, return_address;
    rct::xmr_amount scanned_amount = 0;
    carrot::CarrotEnoteType etype;
    janus_anchor_t internal_msg;
    bool is_return = false;
    const bool r = carrot::try_scan_carrot_enote_internal_receiver(enote, recipient,
        ext_g, ext_t, spend_pubkey, scanned_amount, abf, etype, internal_msg,
        return_address, is_return);

    ASSERT_TRUE(r);
    EXPECT_TRUE(is_return);
    EXPECT_EQ(amount, scanned_amount);
    EXPECT_EQ(K_change, spend_pubkey);
    EXPECT_EQ(K_r, return_address);
}

// forces a real 24-bit view-tag collision so scanning enters the internal branch, fails it, and
// must still fall through to the return map. brute-forces ~2^24 candidates (a few minutes), so
// disabled by default; run with --gtest_also_run_disabled_tests. fails pre-fix, passes with the fix.
TEST(carrot_return_index, DISABLED_view_tag_collision_return_still_detected)
{
    carrot::carrot_and_legacy_account recipient;
    recipient.generate();

    // origin tx whose change we own (what populates the return map in production)
    const crypto::key_image origin_ki = rct::rct2ki(rct::pkGen());
    const input_context_t origin_input_context = make_carrot_input_context(origin_ki);
    const crypto::public_key K_o = rct::rct2pk(rct::pkGen());      // an origin output key
    const crypto::public_key K_change = rct::rct2pk(rct::pkGen()); // our change onetime address

    // k_return for this origin output, K_return = k_return G
    crypto::secret_key k_return;
    recipient.s_view_balance_dev.make_internal_return_privkey(origin_input_context, K_o, k_return);
    crypto::public_key K_return;
    crypto::secret_key_to_public_key(k_return, K_return);

    // the return tx that pays us back
    const crypto::key_image return_ki = rct::rct2ki(rct::pkGen());
    const input_context_t return_input_context = make_carrot_input_context(return_ki);

    // sender-side ephemeral material over our change address, fixed across the search
    const janus_anchor_t anchor = gen_janus_anchor();
    crypto::secret_key d_e;
    make_carrot_enote_ephemeral_privkey(anchor, return_input_context, K_change, null_payment_id, d_e);
    mx25519_pubkey D_e;
    make_carrot_enote_ephemeral_pubkey(d_e, K_change, /*is_subaddress=*/false, D_e);
    mx25519_pubkey s_unctx;
    ASSERT_TRUE(make_carrot_uncontextualized_shared_key_sender(d_e, K_return, s_unctx));
    crypto::hash s_sr;
    make_carrot_sender_receiver_secret(s_unctx.data, D_e, return_input_context, s_sr);

    // find a K_r where the return view tag equals our internal nominal tag (real 24-bit collision).
    // K_r must stay a valid curve point so the internal scan's curve ops don't fault, so we step
    // by a fixed point rather than incrementing raw bytes; only cheap hashes gate the match.
    rct::key Kr_acc = rct::pkGen();
    const rct::key Kr_step = rct::pkGen();
    crypto::public_key K_r{};
    view_tag_t collided_vt{};
    bool found = false;
    for (std::uint64_t i = 0; i < (1ull << 28); ++i)
    {
        K_r = rct::rct2pk(Kr_acc);
        view_tag_t return_vt, internal_vt;
        make_carrot_view_tag(s_unctx.data, return_input_context, K_r, return_vt);
        recipient.s_view_balance_dev.make_internal_view_tag(return_input_context, K_r, internal_vt);
        if (std::memcmp(return_vt.bytes, internal_vt.bytes, VIEW_TAG_BYTES) == 0)
        {
            collided_vt = return_vt;
            found = true;
            break;
        }
        Kr_acc = rct::addKeys(Kr_acc, Kr_step);
    }
    ASSERT_TRUE(found) << "no view-tag collision found within search budget";

    // build the valid return enote at the collided K_r
    const rct::xmr_amount amount = 1337;
    crypto::secret_key k_a;
    make_carrot_amount_blinding_factor(s_sr, amount, K_change, carrot::CarrotEnoteType::PAYMENT, k_a);

    carrot::CarrotEnoteV1 enote{};
    enote.onetime_address = K_r;
    enote.amount_commitment = rct::commit(amount, rct::sk2rct(k_a));
    enote.amount_enc = encrypt_carrot_amount(amount, s_sr, K_r);
    enote.anchor_enc = encrypt_carrot_anchor(anchor, s_sr, K_r);
    enote.view_tag = collided_vt;
    enote.enote_ephemeral_pubkey = D_e;
    enote.tx_first_key_image = return_ki;
    enote.asset_type = "SAL1";

    // register the return output as the change scan would have
    recipient.insert_return_output_info({{K_r, carrot::return_output_info_t(
        origin_input_context, K_o, K_change, K_change,
        crypto::key_image{}, crypto::secret_key{}, crypto::secret_key{})}});

    // the collision really does make the internal nominal tag match the enote's tag
    view_tag_t internal_vt_check;
    recipient.s_view_balance_dev.make_internal_view_tag(return_input_context, K_r, internal_vt_check);
    ASSERT_EQ(0, std::memcmp(internal_vt_check.bytes, enote.view_tag.bytes, VIEW_TAG_BYTES));

    // must still be detected as a return despite the collision
    crypto::secret_key ext_g, ext_t, abf;
    crypto::public_key spend_pubkey, return_address;
    rct::xmr_amount scanned_amount = 0;
    carrot::CarrotEnoteType etype;
    janus_anchor_t internal_msg;
    bool is_return = false;
    const bool r = carrot::try_scan_carrot_enote_internal_receiver(enote, recipient,
        ext_g, ext_t, spend_pubkey, scanned_amount, abf, etype, internal_msg,
        return_address, is_return);

    ASSERT_TRUE(r) << "return output dropped on view-tag collision (F6)";
    EXPECT_TRUE(is_return);
    EXPECT_EQ(amount, scanned_amount);
    EXPECT_EQ(K_change, spend_pubkey);
    EXPECT_EQ(K_r, return_address);
}
