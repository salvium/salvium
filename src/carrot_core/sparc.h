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

#pragma once

#include "ringct/rctTypes.h"

namespace carrot
{
  /**
   * brief: make_sparc_spend_authority_proof - generate the zero-knowledge proof for spend authority for SPARC output pubkey
   * param: x - G-term for the given output key
   * param: y - T-term for the given output key
   * param: K_o - output key to generate spend authority proof for
   * outparam: proof_out - the complete spend authority proof
   */
  void make_sparc_spend_authority_proof(const rct::key &x, const rct::key &y, const rct::key &K_o, rct::zk_proof &proof_out);

  /**
   * brief: verify_sparc_spend_authority_proof - verify the zero-knowledge proof for spend authority for SPARC output pubkey
   * param: proof - the zero-knowledge proof to verify
   * param: K_o - output key to verify the spend authority proof for
   * return: true if proof is valid, false otherwise
   */
  bool verify_sparc_spend_authority_proof(const rct::zk_proof &proof, const rct::key &K_o);

} //namespace carrot
