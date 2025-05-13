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
#include "tx_builder_outputs.h"

//local headers
#include "carrot_core/output_set_finalization.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "format_utils.h"
#include "ringct/rctSigs.h"

//third party headers

//standard headers

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "carrot_impl.tbo"

namespace carrot
{
//-------------------------------------------------------------------------------------------------------------------
void get_output_enote_proposals_from_proposal_v1(const CarrotTransactionProposalV1 &tx_proposal,
    const view_balance_secret_device *s_view_balance_dev,
    const view_incoming_key_device *k_view_dev,
    std::vector<RCTOutputEnoteProposal> &output_enote_proposals_out,
    encrypted_payment_id_t &encrypted_payment_id_out,
    std::vector<std::pair<bool, std::size_t>> *payment_proposal_order_out)
{
    // collect self-sends proposal cores
    std::vector<CarrotPaymentProposalSelfSendV1> selfsend_payment_proposal_cores;
    selfsend_payment_proposal_cores.reserve(tx_proposal.selfsend_payment_proposals.size());
    for (const auto &selfsend_payment_proposal : tx_proposal.selfsend_payment_proposals)
        selfsend_payment_proposal_cores.push_back(selfsend_payment_proposal.proposal);

    // derive enote proposals
    get_output_enote_proposals(tx_proposal.normal_payment_proposals,
        selfsend_payment_proposal_cores,
        tx_proposal.dummy_encrypted_payment_id,
        s_view_balance_dev,
        k_view_dev,
        tx_proposal.key_images_sorted.at(0),
        output_enote_proposals_out,
        encrypted_payment_id_out,
        payment_proposal_order_out);
}
//-------------------------------------------------------------------------------------------------------------------
void make_signable_tx_hash_from_proposal_v1(const CarrotTransactionProposalV1 &tx_proposal,
    const view_balance_secret_device *s_view_balance_dev,
    const view_incoming_key_device *k_view_dev,
    crypto::hash &signable_tx_hash_out)
{
    //! @TODO: there's a more efficient way to do this than constructing&serializing a whole cryptonote::transaction
    // HW devices will need to implement this function to sign tx proposals, and most of these devices don't have a lot of memory

    cryptonote::transaction pruned_tx;
    make_pruned_transaction_from_proposal_v1(tx_proposal,
        s_view_balance_dev,
        k_view_dev,
        pruned_tx);

    //! @TODO: better input number calculation in get_pre_mlsag_hash. possible?
    pruned_tx.rct_signatures.p.pseudoOuts.resize(pruned_tx.vin.size());

    // see cryptonote::Blockchain::expand_transaction_2()
    pruned_tx.rct_signatures.message = rct::hash2rct(cryptonote::get_transaction_prefix_hash(pruned_tx));

    hw::device &hwdev = hw::get_device("default");
    const rct::key signable_tx_hash_k = rct::get_pre_mlsag_hash(pruned_tx.rct_signatures, hwdev);

    signable_tx_hash_out = rct::rct2hash(signable_tx_hash_k);
}
//-------------------------------------------------------------------------------------------------------------------
void make_pruned_transaction_from_proposal_v1(const CarrotTransactionProposalV1 &tx_proposal,
    const view_balance_secret_device *s_view_balance_dev,
    const view_incoming_key_device *k_view_dev,
    cryptonote::transaction &pruned_tx_out)
{
    // derive enote proposals
    std::vector<RCTOutputEnoteProposal> output_enote_proposals;
    encrypted_payment_id_t encrypted_payment_id;
    get_output_enote_proposals_from_proposal_v1(tx_proposal,
        s_view_balance_dev,
        k_view_dev,
        output_enote_proposals,
        encrypted_payment_id);

    // collect enotes
    std::vector<CarrotEnoteV1> enotes;
    enotes.reserve(output_enote_proposals.size());
    for (const RCTOutputEnoteProposal &output_enote_proposal : output_enote_proposals)
        enotes.push_back(output_enote_proposal.enote);

    // serialize tx
    pruned_tx_out = store_carrot_to_transaction_v1(enotes,
        tx_proposal.key_images_sorted,
        tx_proposal.fee,
        encrypted_payment_id);

    // add extra payload and sort
    if (!tx_proposal.extra.empty())
    {
        std::vector<std::uint8_t> sorted_extra;
        pruned_tx_out.extra.insert(pruned_tx_out.extra.end(), tx_proposal.extra.cbegin(), tx_proposal.extra.cend());
        CHECK_AND_ASSERT_THROW_MES(cryptonote::sort_tx_extra(pruned_tx_out.extra, sorted_extra),
            "make_pruned_transaction_from_proposal_v1: failed to sort tx extra");
        pruned_tx_out.extra = std::move(sorted_extra);
    }
}
//-------------------------------------------------------------------------------------------------------------------
} //namespace carrot
