// Copyright (c) 2025, Salvium (authors: SRCG, auruya)

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

#include "crypto/crypto.h"
extern "C" {
#include "crypto/crypto-ops.h"
}
#include "crypto/hash.h"
#include <boost/algorithm/string.hpp>

#include "mx25519.h"

#include "carrot_core/account.h"
#include "carrot_impl/format_utils.h"
#include "string_tools.h"

using namespace carrot;

static inline void random_carrot_keys(crypto::secret_key& a,
                                 crypto::public_key& A, 
                                 crypto::secret_key& b,
                                 crypto::public_key& B,
                                 const bool create_subaddress)
{
  // Generate a new CN address
  carrot::carrot_and_legacy_account alice;
  alice.generate();

  const auto& keys = alice.get_keys();
  
  // Check for subaddress
  if (create_subaddress) {

    // Create subaddress
    carrot::subaddress_index_extended sie{{0,1}, AddressDeriveType::Carrot, false};
    carrot::CarrotDestinationV1 subaddr = alice.subaddress(sie);

    a = keys.k_view_incoming;
    A = subaddr.address_view_pubkey;
    b = keys.k_prove_spend;
    B = subaddr.address_spend_pubkey;

  } else {

    a = keys.k_view_incoming;
    A = keys.m_carrot_account_address.m_view_public_key;
    b = keys.k_prove_spend;
    B = keys.m_carrot_account_address.m_spend_public_key;
  }
}
                                 
TEST(carrot_tx_proofs, fuzz_stability)
{
  static const size_t ITER = 5000;   // increase to 50k if needed

    for (size_t i = 0; i < ITER; ++i)
    {
        // 1. Generate random Carrot recipient view & spend keys A/B/a/b
        bool use_subaddress = ((i & 1) == 1);   // alternate: main/sub
        crypto::secret_key a;
        crypto::public_key A;
        crypto::secret_key b;
        crypto::public_key B;
        random_carrot_keys(a, A, b, B, use_subaddress);

        // 2. Generate random tx private key r
        crypto::secret_key r;
        crypto::random32_unbiased((unsigned char*)unwrap(r).data);

        // 3. Recipient can be main address (no B) or subaddress
        //const crypto::public_key *B_ptr = use_subaddress ? &B : nullptr;

        // 4. Compute R = ConvertPointE(r * (G or B))
        crypto::public_key R_pk;
        mx25519_pubkey enote_ephemeral_pubkey_out;
        carrot::make_carrot_enote_ephemeral_pubkey(r,
                                                   B,
                                                   use_subaddress,
                                                   enote_ephemeral_pubkey_out);
        R_pk = carrot::raw_byte_convert<crypto::public_key>(enote_ephemeral_pubkey_out);

        // 5. Compute D = ConvertPointE(r * A)
        mx25519_pubkey s_sr;
        bool success = carrot::make_carrot_uncontextualized_shared_key_sender(r, A, s_sr);
        ASSERT_TRUE(success) << "failure to compute shared secret";
        crypto::public_key D_pk = carrot::raw_byte_convert<crypto::public_key>(s_sr);

        // 6. Random prefix hash
        crypto::hash prefix_hash;
        for (int j = 0; j < 32; j++) prefix_hash.data[j] = rand() & 0xFF;

        // 7. Prove
        crypto::signature sig;
        crypto::generate_carrot_tx_proof(
            prefix_hash,
            R_pk, A,
            use_subaddress ? boost::make_optional(B) : boost::none,
            D_pk, r, a, sig
        );

        // 8. Verify
        bool ok = crypto::check_carrot_tx_proof(
            prefix_hash,
            R_pk, A,
            use_subaddress ? boost::make_optional(B) : boost::none,
            D_pk, sig
        );

        ASSERT_TRUE(ok) << "failure at iteration " << i;

        // ---------------------------------------------------------
        // 9. NEGATIVE TESTS
        // ---------------------------------------------------------

        // 9a. Flip a bit in R
        {
          crypto::public_key R_bad = R_pk;
          R_bad.data[5] ^= 0x20;
          bool ok2 = crypto::check_carrot_tx_proof(
                                                   prefix_hash, R_bad, A,
                                                   use_subaddress ? boost::make_optional(B) : boost::none,
                                                   D_pk, sig
                                                   );
          ASSERT_FALSE(ok2);
        }

        // 9b. Flip a bit in D
        {
          crypto::public_key D_bad = D_pk;
          D_bad.data[7] ^= 0x10;
          bool ok2 = crypto::check_carrot_tx_proof(
                                                   prefix_hash, R_pk, A,
                                                   use_subaddress ? boost::make_optional(B) : boost::none,
                                                   D_bad, sig
                                                   );
          ASSERT_FALSE(ok2);
        }

        // 9c. Flip a bit in sig.c
        {
          crypto::signature sig_bad = sig;
          sig_bad.c.data[3] ^= 0x80;
          bool ok2 = crypto::check_carrot_tx_proof(
                                                   prefix_hash, R_pk, A,
                                                   use_subaddress ? boost::make_optional(B) : boost::none,
                                                   D_pk, sig_bad
                                                   );
          ASSERT_FALSE(ok2);
        }

        // 9d. Flip a bit in sign_mask
        {
          crypto::signature sig_bad = sig;
          sig_bad.sign_mask ^= 0x01;  // flip R_sign
          bool ok2 = crypto::check_carrot_tx_proof(
                                                   prefix_hash, R_pk, A,
                                                   use_subaddress ? boost::make_optional(B) : boost::none,
                                                   D_pk, sig_bad
                                                   );
          ASSERT_FALSE(ok2);
        }

        // 9e. Flip a bit in sig.r
        {
          crypto::signature sig_bad = sig;
          sig_bad.r.data[0] ^= 0x40;
          bool ok2 = crypto::check_carrot_tx_proof(
                                                   prefix_hash, R_pk, A,
                                                   use_subaddress ? boost::make_optional(B) : boost::none,
                                                   D_pk, sig_bad
                                                   );
          ASSERT_FALSE(ok2);
        }

        // 9f. Flip a bit in A
        {
          crypto::public_key A_bad = A;
          A_bad.data[12] ^= 0x08;
          bool ok2 = crypto::check_carrot_tx_proof(
                                                   prefix_hash, R_pk, A_bad,
                                                   use_subaddress ? boost::make_optional(B) : boost::none,
                                                   D_pk, sig
                                                   );
          ASSERT_FALSE(ok2);
        }

        // 9g. Flip a bit in B (when subaddress)
        if (use_subaddress)
        {
          crypto::public_key B_bad = B;
          B_bad.data[9] ^= 0x40;
          bool ok2 = crypto::check_carrot_tx_proof(
                                                   prefix_hash, R_pk, A,
                                                   boost::make_optional(B_bad),
                                                   D_pk, sig
                                                   );
          ASSERT_FALSE(ok2);
        }
    }
}

TEST(carrot_tx_proofs, known_values_mutation_rejection_main_address)
{
    // Real Salvium Carrot addresses for reproducible test (testnet) (main address)
    // Sender: SC1ToqKSXRw3rE3rNQzjUA1nntvHhM6id3coWry25y4jUvHDRKDRGFv1vJRCTMHWUyVXct2aedmvzUfd3CofjTpKEhHmpnftqZk
    // Recipient: SC1ToumwqT5GeDcn2JjrHoFPUMPMcNu73STkP3Sono94iZpizheMJ3ADpGGE92Wcb7b3gDCxKFT5NEp94ueQQMbu8VBYyAGHEy7
    // Tx ID: e8729399d2af3dede8c110e370b3505c1669f4fba593fd740a16c1e4f425a728
    
    // Tx priv key
    crypto::secret_key r;
    const char* r_hex = "748b8f3131661fd8ee0f06ab3de53649381522185ea6e8148c8daf395ded010d";
    ASSERT_TRUE(epee::string_tools::hex_to_pod(r_hex, r));
    
    // Recipient's actual Carrot keys from Salvium network
    crypto::secret_key a, b;  // view-incoming and prove-spend priv keys
    crypto::public_key A, B;  // view and spend pub keys
    
    // recipient view-incoming key
    const char* a_hex = "88b6442966238bfd349eb412fe55a717b7b363175b48ae88c34a252dd8868e05";
    ASSERT_TRUE(epee::string_tools::hex_to_pod(a_hex, a));
    
    // recipient prove-spend key
    const char* b_hex = "94607b25bceb408bbb5393d25729777e92686b9447f9c989f2e735e878950d0b";
    ASSERT_TRUE(epee::string_tools::hex_to_pod(b_hex, b));
    
    // Generate pub keys from priv keys
    ASSERT_TRUE(crypto::secret_key_to_public_key(a, A));
    ASSERT_TRUE(crypto::secret_key_to_public_key(b, B));
    
    // Compute R = rG (main address case)
    mx25519_pubkey enote_ephemeral_pubkey_out;
    carrot::make_carrot_enote_ephemeral_pubkey(r, B, false, enote_ephemeral_pubkey_out);
    crypto::public_key R_G = carrot::raw_byte_convert<crypto::public_key>(enote_ephemeral_pubkey_out);

    // Compute D = rA
    mx25519_pubkey s_sr;
    ASSERT_TRUE(carrot::make_carrot_uncontextualized_shared_key_sender(r, A, s_sr));
    crypto::public_key D = carrot::raw_byte_convert<crypto::public_key>(s_sr);
    
    // Fixed message hash
    crypto::hash prefix_hash;
    memset(&prefix_hash, 0, 32);
    for (int i = 0; i < 32; i++) {
        prefix_hash.data[i] = i;  // Sequential bytes for reproducibility
    }
    
    // Generate proof with known values
    crypto::signature sig;
    crypto::generate_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D, r, a, sig);
    
    // Verify original proof works
    ASSERT_TRUE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D, sig));
    
    // Test mutations are rejected
    
    // 1. Mutate R by flipping one bit
    {
        crypto::public_key R_mutated = R_G;
        R_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_mutated, A, boost::none, D, sig));
    }
    
    // 2. Mutate D by flipping one bit
    {
        crypto::public_key D_mutated = D;
        D_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D_mutated, sig));
    }
    
    // 3. Mutate A by flipping one bit
    {
        crypto::public_key A_mutated = A;
        A_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A_mutated, boost::none, D, sig));
    }
    
    // 4. Mutate prefix_hash by flipping one bit
    {
        crypto::hash hash_mutated = prefix_hash;
        hash_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(hash_mutated, R_G, A, boost::none, D, sig));
    }
    
    // 5. Mutate signature.c by flipping one bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.c.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D, sig_mutated));
    }
    
    // 6. Mutate signature.r by flipping one bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.r.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D, sig_mutated));
    }
    
    // 7. Mutate signature.sign_mask by flipping R_sign bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.sign_mask ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D, sig_mutated));
    }
    
    // 8. Mutate signature.sign_mask by flipping D_sign bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.sign_mask ^= 0x02;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D, sig_mutated));
    }
}


TEST(carrot_tx_proofs, known_values_mutation_rejection_subaddress)
{
    // Real Salvium Carrot addresses for reproducible test (testnet) (subaddress)
    // Sender: SC1ToqKSXRw3rE3rNQzjUA1nntvHhM6id3coWry25y4jUvHDRKDRGFv1vJRCTMHWUyVXct2aedmvzUfd3CofjTpKEhHmpnftqZk
    // Recipient: SC1TsCevdYfZRZCRb83i5caRDJDb45UoqBeynNciVW8LAihKchQ4MfmW7PmPJquaXDZyntRcJCfduPVtdFUb5nsQLokFM434usw
    // Tx ID: 01f5e1e56df714e3af919ab443b1acc4b1bebffed03198a9aaf3d22449809453
    
    // Tx priv key
    crypto::secret_key r, a;
    const char* r_hex = "4eccc86c26ac250132d141d1b447e1fe25d0d1e4f3f2d7f3aca10a2633b52808";
    ASSERT_TRUE(epee::string_tools::hex_to_pod(r_hex, r));
    
    // view and spend pub keys
    crypto::public_key A, B;  

    cryptonote::address_parse_info info;
    std::string recipent_address_str = "SC1TsCevdYfZRZCRb83i5caRDJDb45UoqBeynNciVW8LAihKchQ4MfmW7PmPJquaXDZyntRcJCfduPVtdFUb5nsQLokFM434usw";
    ASSERT_TRUE(cryptonote::get_account_address_from_str(info, cryptonote::network_type::TESTNET, recipent_address_str));
    A = info.address.m_view_public_key;
    B = info.address.m_spend_public_key;
    a = crypto::null_skey;
    
    // Compute R = rG (subaddress case)
    mx25519_pubkey enote_ephemeral_pubkey_out;
    carrot::make_carrot_enote_ephemeral_pubkey(r, B, true, enote_ephemeral_pubkey_out);
    crypto::public_key R_G = carrot::raw_byte_convert<crypto::public_key>(enote_ephemeral_pubkey_out);

    // Compute D = rA
    mx25519_pubkey s_sr;
    ASSERT_TRUE(carrot::make_carrot_uncontextualized_shared_key_sender(r, A, s_sr));
    crypto::public_key D = carrot::raw_byte_convert<crypto::public_key>(s_sr);
    
    // Fixed message hash
    crypto::hash prefix_hash;
    memset(&prefix_hash, 0, 32);
    for (int i = 0; i < 32; i++) {
        prefix_hash.data[i] = i;  // Sequential bytes for reproducibility
    }
    
    // Generate proof with known values
    crypto::signature sig;
    crypto::generate_carrot_tx_proof(prefix_hash, R_G, A, B, D, r, a, sig);
    
    // Verify original proof works
    ASSERT_TRUE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, B, D, sig));
    
    // Test mutations are rejected
    
    // 1. Mutate R by flipping one bit
    {
        crypto::public_key R_mutated = R_G;
        R_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_mutated, A, B, D, sig));
    }
    
    // 2. Mutate D by flipping one bit
    {
        crypto::public_key D_mutated = D;
        D_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, B, D_mutated, sig));
    }
    
    // 3. Mutate A by flipping one bit
    {
        crypto::public_key A_mutated = A;
        A_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A_mutated, B, D, sig));
    }
    
    // 4. Mutate prefix_hash by flipping one bit
    {
        crypto::hash hash_mutated = prefix_hash;
        hash_mutated.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(hash_mutated, R_G, A, B, D, sig));
    }
    
    // 5. Mutate signature.c by flipping one bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.c.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, boost::none, D, sig_mutated));
    }
    
    // 6. Mutate signature.r by flipping one bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.r.data[0] ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, B, D, sig_mutated));
    }
    
    // 7. Mutate signature.sign_mask by flipping R_sign bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.sign_mask ^= 0x01;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, B, D, sig_mutated));
    }
    
    // 8. Mutate signature.sign_mask by flipping D_sign bit
    {
        crypto::signature sig_mutated = sig;
        sig_mutated.sign_mask ^= 0x02;
        ASSERT_FALSE(crypto::check_carrot_tx_proof(prefix_hash, R_G, A, B, D, sig_mutated));
    }
}
