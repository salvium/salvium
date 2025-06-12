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

//! @file Utilities for creating Carrot transaction proposals

#pragma once

//local headers
#include "tx_proposal.h"

//third party headers
#include <boost/multiprecision/cpp_int.hpp>

//standard headers
#include <cstddef>

//forward declarations

namespace carrot
{
struct CarrotSelectedInput
{
    rct::xmr_amount amount;
    crypto::key_image key_image;
};
static inline bool operator==(const CarrotSelectedInput &a, const CarrotSelectedInput &b)
{
    return a.amount == b.amount && a.key_image == b.key_image;
}
static inline bool operator!=(const CarrotSelectedInput &a, const CarrotSelectedInput &b)
{
    return !(a == b);
}

using select_inputs_func_t = std::function<void(
        const boost::multiprecision::uint128_t&,       // nominal output sum, w/o fee
        const std::map<std::size_t, rct::xmr_amount>&, // absolute fee per input count
        const std::size_t,                             // number of normal payment proposals
        const std::size_t,                             // number of self-send payment proposals
        std::vector<CarrotSelectedInput>&              // selected inputs result
    )>;

using carve_fees_and_balance_func_t = std::function<void(
        const boost::multiprecision::uint128_t&,                // input sum amount
        const rct::xmr_amount,                                  // fee
        std::vector<CarrotPaymentProposalV1>&,                  // normal payment proposals [inout]
        std::vector<CarrotPaymentProposalVerifiableSelfSendV1>& // selfsend payment proposals [inout]
    )>;

std::uint64_t get_carrot_default_tx_extra_size(const std::size_t n_outputs);

static inline std::size_t get_fcmppp_tx_weight(const std::size_t num_inputs,
    const std::size_t num_outputs,
    const std::size_t tx_extra_size)
{
    // @TODO: actually implement
    return 200 + num_inputs * 1000 + num_outputs * 100 + tx_extra_size;
}

static size_t estimate_rct_tx_size_carrot(int n_inputs, int mixin, int n_outputs, size_t extra_size, bool bulletproof, bool clsag, bool bulletproof_plus, bool use_view_tags)
{
  size_t size = 0;

  // tx prefix

  // first few bytes
  size += 1 + 6;

  // vin
  size += n_inputs * (1+6+4+(mixin+1)*2+32);

  // vout
  size += n_outputs * (3+4+16+32);

  // extra
  size += extra_size;

  // rct signatures

  // type
  size += 1;

  // rangeSigs
  if (bulletproof || bulletproof_plus)
  {
    size_t log_padded_outputs = 0;
    while ((1<<log_padded_outputs) < n_outputs)
      ++log_padded_outputs;
    size += (2 * (6 + log_padded_outputs) + (bulletproof_plus ? 6 : (4 + 5))) * 32 + 3;
  }
  else
    size += (2*64*32+32+64*32) * n_outputs;

  // MGs/CLSAGs
  if (clsag)
    size += n_inputs * (64 * (mixin+1) + 64);
  else
    size += n_inputs * (64 * (mixin+1) + 32);

  if (use_view_tags)
    size += n_outputs * sizeof(crypto::view_tag);

  // mixRing - not serialized, can be reconstructed
  /* size += 2 * 32 * (mixin+1) * n_inputs; */

  // pseudoOuts
  size += 32 * n_inputs;
  // ecdhInfo
  size += 8 * n_outputs;
  // outPk - only commitment is saved
  size += 32 * n_outputs;
  // txnFee
  size += 4;
  // p_r
  size += 32;

  // 2 zk proof
  size += (2 * 96);

  LOG_PRINT_L2("estimated " << (bulletproof_plus ? "bulletproof plus" : bulletproof ? "bulletproof" : "borromean") << " rct tx size for " << n_inputs << " inputs with ring size " << (mixin+1) << " and " << n_outputs << " outputs: " << size << " (" << ((32 * n_inputs/*+1*/) + 2 * 32 * (mixin+1) * n_inputs + 32 * n_outputs) << " saved)");
  return size;
}

static size_t estimate_tx_size_carrot(int n_inputs, int mixin, int n_outputs, size_t extra_size, bool bulletproof, bool clsag, bool bulletproof_plus, bool use_view_tags)
{
  return estimate_rct_tx_size_carrot(n_inputs, mixin, n_outputs, extra_size, bulletproof, clsag, bulletproof_plus, use_view_tags);
}

static uint64_t estimate_tx_weigh_carrot(int n_inputs, int mixin, int n_outputs, size_t extra_size, bool bulletproof, bool clsag, bool bulletproof_plus, bool use_view_tags)
{
  size_t size = estimate_tx_size_carrot(n_inputs, mixin, n_outputs, extra_size, bulletproof, clsag, bulletproof_plus, use_view_tags);
  if ((bulletproof || bulletproof_plus) && n_outputs > 2)
  {
    const uint64_t bp_base = (32 * ((bulletproof_plus ? 6 : 9) + 7 * 2)) / 2; // notional size of a 2 output proof, normalized to 1 proof (ie, divided by 2)
    size_t log_padded_outputs = 2;
    while ((1<<log_padded_outputs) < n_outputs)
      ++log_padded_outputs;
    uint64_t nlr = 2 * (6 + log_padded_outputs);
    const uint64_t bp_size = 32 * ((bulletproof_plus ? 6 : 9) + nlr);
    const uint64_t bp_clawback = (bp_base * (1<<log_padded_outputs) - bp_size) * 4 / 5;
    MDEBUG("clawback on size " << size << ": " << bp_clawback);
    size += bp_clawback;
  }
  return size;
}

static uint64_t calculate_fee_from_weight_carrot(uint64_t base_fee, uint64_t weight, uint64_t fee_quantization_mask)
{
  uint64_t fee = weight * base_fee;
  fee = (fee + fee_quantization_mask - 1) / fee_quantization_mask * fee_quantization_mask;
  return fee;
}

static uint64_t estimate_fee_carrot(int n_inputs, int mixin, int n_outputs, size_t extra_size, bool bulletproof, bool clsag, bool bulletproof_plus, bool use_view_tags, uint64_t base_fee, uint64_t fee_quantization_mask)
{
    const size_t estimated_tx_weight = estimate_tx_weigh_carrot(n_inputs, mixin, n_outputs, extra_size, bulletproof, clsag, bulletproof_plus, use_view_tags);
    return calculate_fee_from_weight_carrot(base_fee, estimated_tx_weight, fee_quantization_mask);
}

void make_carrot_transaction_proposal_v1(const std::vector<CarrotPaymentProposalV1> &normal_payment_proposals,
    const std::vector<CarrotPaymentProposalVerifiableSelfSendV1> &selfsend_payment_proposals,
    const rct::xmr_amount fee_per_weight,
    const rct::xmr_amount fee_quantization_mask,
    const std::vector<uint8_t> &extra,
    select_inputs_func_t &&select_inputs,
    carve_fees_and_balance_func_t &&carve_fees_and_balance,
    const crypto::public_key &change_address_spend_pubkey,
    const subaddress_index_extended &change_address_index,
    CarrotTransactionProposalV1 &tx_proposal_out);

void make_carrot_transaction_proposal_v1_transfer(
    const std::vector<CarrotPaymentProposalV1> &normal_payment_proposals,
    const std::vector<CarrotPaymentProposalVerifiableSelfSendV1> &selfsend_payment_proposals,
    const rct::xmr_amount fee_per_weight,
    const rct::xmr_amount fee_quantization_mask,
    const std::vector<uint8_t> &extra,
    select_inputs_func_t &&select_inputs,
    const crypto::public_key &change_address_spend_pubkey,
    const subaddress_index_extended &change_address_index,
    const std::set<std::size_t> &subtractable_normal_payment_proposals,
    const std::set<std::size_t> &subtractable_selfsend_payment_proposals,
    CarrotTransactionProposalV1 &tx_proposal_out);

void make_carrot_transaction_proposal_v1_sweep(
    const std::vector<CarrotPaymentProposalV1> &normal_payment_proposals,
    const std::vector<CarrotPaymentProposalVerifiableSelfSendV1> &selfsend_payment_proposals,
    const rct::xmr_amount fee_per_weight,
    const rct::xmr_amount fee_quantization_mask,
    const std::vector<uint8_t> &extra,
    std::vector<CarrotSelectedInput> &&selected_inputs,
    const crypto::public_key &change_address_spend_pubkey,
    const subaddress_index_extended &change_address_index,
    CarrotTransactionProposalV1 &tx_proposal_out);

} //namespace carrot
