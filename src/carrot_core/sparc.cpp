// Copyright (c) 2024, Salvium (author: SRCG)
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

// A 'return address' is a proposal to facilitate pseudonymous transfers of received funds
// back to the originating wallet, as per the previously-published "Return Address Scheme"
// published by knaccc at https://github.com/monero-project/research-lab/issues/53
// This code is designed to implement the F point management and zero-knowledge proofs
// required to support the "Return Address Scheme" in Carrot.
// Carrot: Cryptonote Address For Rerandomizable-RingCT-Output Transactions

//paired header
#include "sparc.h"

//local headers
#include "crypto/crypto.h"
#include "crypto/generators.h"
#include "ringct/rctOps.h"
#include "ringct/rctTypes.h"
#include "crypto/hash.h"
#include "address_utils.h"
#include "misc_log_ex.h"

#include <vector>
#include <array>

namespace carrot {

  // Optimized function to hash a vector of keys into a scalar
  rct::key hash_to_scalar(std::vector<rct::key>& keys) {
    
    // Create a fixed-size buffer large enough to hold all keys and a domain separator
    const char* domain_separator = "sparc_spend_authority_proof";
    const size_t domain_separator_length = strlen(domain_separator);
    size_t total_size = keys.size() * sizeof(rct::key) + domain_separator_length;
    std::vector<uint8_t> data(total_size);

    // Copy the keys into the buffer
    size_t offset = 0;
    for (const auto& key : keys) {
        std::memcpy(data.data() + offset, key.bytes, sizeof(rct::key));
        offset += sizeof(rct::key);
    }

    // Add the domain separator "sparc_spend_authority_proof" at the _end_ of the buffer
    std::memcpy(data.data() + offset, domain_separator, domain_separator_length);

    // Hash the concatenated data into a fixed-size hash
    rct::key hash_output;
    keccak((const uint8_t *)data.data(), total_size, hash_output.bytes, sizeof(rct::key));
    sc_reduce32(hash_output.bytes); // Reduce to valid scalar

    return hash_output;
  }

  // Function to generate the zero-knowledge proof
  void make_sparc_spend_authority_proof(const rct::key &x, const rct::key &y, const rct::key &K_o, rct::zk_proof &proof_out) {
  
    // Step 1: Generate random scalars r_x and r_y
    rct::key r_x = rct::skGen(); // Random scalar for G commitment
    rct::key r_y = rct::skGen(); // Random scalar for T commitment
    
    // Step 2: Calculate commitment by summing terms for G and T
    rct::key commitment;
    rct::key commitment_G = rct::scalarmultBase(r_x); // r_x * G
    rct::key commitment_T = rct::scalarmultKey(rct::pk2rct(crypto::get_T()), r_y); // r_y * T (using T generator)
    commitment = rct::addKeys(commitment_G, commitment_T); // R = r_xG + r_yT
    
    // Step 3: Calculate the challenge scalar
    std::vector<rct::key> keys{commitment, K_o};
    rct::key challenge = rct::hash_to_scalar(keys); // c = H(R || K_o)
    
    // Step 4: Calculate responses
    rct::key response_x;
    sc_muladd(response_x.bytes, challenge.bytes, x.bytes, r_x.bytes); // z_x = r_x + c * x
    sc_reduce32(response_x.bytes);
    rct::key response_y;
    sc_muladd(response_y.bytes, challenge.bytes, y.bytes, r_y.bytes); // z_y = r_y + c * y
    sc_reduce32(response_y.bytes);

    // Step 5: Construct and return the proof
    proof_out.R = commitment;
    proof_out.z1 = response_x;
    proof_out.z2 = response_y;

    // Step 6: Sanity checks
    rct::key resC = rct::addKeys(commitment, rct::scalarmultKey(K_o, challenge));    
    rct::key resZ = rct::addKeys(rct::scalarmultBase(response_x), rct::scalarmultKey(rct::pk2rct(crypto::get_T()), response_y));
    if (!rct::equalKeys(resZ, resC)) assert(false);
  }
  
  // Function to verify the zero-knowledge proof
  bool verify_sparc_spend_authority_proof(const rct::zk_proof &proof, const rct::key &K_o) {
    
    // Step 1: calculate the challenge
    std::vector<rct::key> keys{proof.R, K_o};
    rct::key recomputed_challenge = rct::hash_to_scalar(keys);
    
    // Step 2: Calculate z_xG + x_yT
    rct::key z_xG  = rct::scalarmultBase(proof.z1); // z1 * G
    rct::key x_yT  = rct::scalarmultKey(rct::pk2rct(crypto::get_T()), proof.z2); // z2 * T
    rct::key resZ = rct::addKeys(z_xG, x_yT); // z_xG + x_yT

    // Step 3: Calculate R + cK_o
    rct::key resC = rct::addKeys(proof.R, rct::scalarmultKey(K_o, recomputed_challenge)); // R + cK_o
    
    // Step 4: verify z_xG + x_yT ?= R + cK_o
    return rct::equalKeys(resZ, resC);
  }

} // namespace carrot
