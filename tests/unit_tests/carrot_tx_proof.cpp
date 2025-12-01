// Copyright (c) 2018-2022, The Monero Project

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

using namespace carrot;


static inline unsigned char *operator &(crypto::ec_point &point) {
    return &reinterpret_cast<unsigned char &>(point);
  }

static inline unsigned char *operator &(crypto::ec_scalar &scalar) {
    return &reinterpret_cast<unsigned char &>(scalar);
  }

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
        crypto::random32_unbiased(&r);

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
            D_pk, r, sig
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
