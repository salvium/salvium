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

//paired header
#include "tx_builder.h"

//local headers
#include "carrot_core/config.h"
#include "carrot_core/device_ram_borrowed.h"
#include "carrot_core/enote_utils.h"
#include "carrot_core/exceptions.h"
#include "carrot_core/output_set_finalization.h"
#include "carrot_core/scan.h"
#include "carrot_core/scan_unsafe.cpp"
#include "carrot_core/address_utils.h"
#include "carrot_core/core_types.h"
#include "carrot_impl/address_device_ram_borrowed.h"
#include "carrot_impl/tx_builder_outputs.h"
#include "carrot_impl/format_utils.h"
#include "carrot_impl/input_selection.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "ringct/bulletproofs_plus.h"
#include "wallet/scanning_tools.cpp"
#include "common/container_helpers.h"
#include "carrot_core/payment_proposal.cpp"

//third party headers

//standard headers

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "wallet.tx_builder"

namespace tools
{
namespace wallet
{
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
template <typename T>
static constexpr T div_ceil(T dividend, T divisor)
{
    static_assert(std::is_unsigned_v<T>, "T not unsigned int");
    return (dividend + divisor - 1) / divisor;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static bool is_transfer_usable_for_input_selection(const wallet2::transfer_details &td,
    const std::uint32_t from_account,
    const std::set<std::uint32_t> from_subaddresses,
    const rct::xmr_amount ignore_above,
    const rct::xmr_amount ignore_below,
    const uint64_t top_block_index)
{
    /** 
     * This additional check appears to be for fcmp++. 
    const uint64_t last_locked_block_index = cryptonote::get_last_locked_block_index(
        td.m_tx.unlock_time, td.m_block_height);
    */
    // Reject locked outputs
    size_t blocks_locked_for = CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;
    if (td.m_tx.type == cryptonote::transaction_type::MINER || td.m_tx.type == cryptonote::transaction_type::PROTOCOL)
      blocks_locked_for = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;

    return !td.m_spent
        && td.m_key_image_known
        && !td.m_key_image_partial
        && !td.m_frozen
        && (top_block_index >= td.m_block_height + blocks_locked_for)
        // && last_locked_block_index <= top_block_index
        && td.m_subaddr_index.major == from_account
        && (from_subaddresses.empty() || from_subaddresses.count(td.m_subaddr_index.minor) == 1)
        && td.amount() >= ignore_below
        && td.amount() <= ignore_above
        && td.asset_type == "SAL1"
    ;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static bool build_payment_proposals(std::vector<carrot::CarrotPaymentProposalV1> &normal_payment_proposals_inout,
    std::vector<carrot::CarrotPaymentProposalVerifiableSelfSendV1> &selfsend_payment_proposals_inout,
    const cryptonote::tx_destination_entry &tx_dest_entry,
    const std::unordered_map<crypto::public_key, cryptonote::subaddress_index> &subaddress_map)
{
    const auto subaddr_it = subaddress_map.find(tx_dest_entry.addr.m_spend_public_key);
    const bool is_selfsend_dest = subaddr_it != subaddress_map.cend();

    // Make N destinations
    if (is_selfsend_dest)
    {
        const carrot::subaddress_index subaddr_index{subaddr_it->second.major, subaddr_it->second.minor};
        selfsend_payment_proposals_inout.push_back(carrot::CarrotPaymentProposalVerifiableSelfSendV1{
            .proposal = carrot::CarrotPaymentProposalSelfSendV1{
                .destination_address_spend_pubkey = tx_dest_entry.addr.m_spend_public_key,
                .amount = tx_dest_entry.amount,
                .enote_type = carrot::CarrotEnoteType::PAYMENT
            },
            .subaddr_index = {subaddr_index, carrot::AddressDeriveType::Carrot, false},
        });
    }
    else // not *known* self-send address
    {
        const carrot::CarrotDestinationV1 dest{
            .address_spend_pubkey = tx_dest_entry.addr.m_spend_public_key,
            .address_view_pubkey = tx_dest_entry.addr.m_view_public_key,
            .is_subaddress = tx_dest_entry.is_subaddress
            //! @TODO: payment ID 
        };

        normal_payment_proposals_inout.push_back(carrot::CarrotPaymentProposalV1{
            .destination = dest,
            .amount = tx_dest_entry.amount,
            .asset_type = tx_dest_entry.asset_type,
            .randomness = carrot::gen_janus_anchor(),
        });
    }

    return is_selfsend_dest;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static cryptonote::tx_destination_entry make_tx_destination_entry(
    const carrot::CarrotPaymentProposalV1 &payment_proposal)
{
    cryptonote::tx_destination_entry dest = cryptonote::tx_destination_entry(payment_proposal.amount,
        {payment_proposal.destination.address_spend_pubkey, payment_proposal.destination.address_view_pubkey, /*m_is_carrot*/true},
        payment_proposal.destination.is_subaddress);
    dest.is_integrated = payment_proposal.destination.payment_id != carrot::null_payment_id;
    dest.asset_type = payment_proposal.asset_type;
    return dest;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static cryptonote::tx_destination_entry make_tx_destination_entry(
    const carrot::CarrotPaymentProposalVerifiableSelfSendV1 &payment_proposal,
    const carrot::view_incoming_key_device &k_view_dev)
{
    crypto::public_key address_view_pubkey;
    CHECK_AND_ASSERT_THROW_MES(k_view_dev.view_key_scalar_mult_ed25519(
            payment_proposal.proposal.destination_address_spend_pubkey,
            address_view_pubkey),
        "make_tx_destination_entry: view-key multiplication failed");

   cryptonote::tx_destination_entry dest = cryptonote::tx_destination_entry(payment_proposal.proposal.amount,
       {payment_proposal.proposal.destination_address_spend_pubkey, address_view_pubkey, /*m_is_carrot*/true},
       payment_proposal.subaddr_index.index.is_subaddress());
    dest.asset_type = payment_proposal.proposal.asset_type;
    return dest;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static crypto::public_key find_change_address_spend_pubkey(
    const std::unordered_map<crypto::public_key, cryptonote::subaddress_index> &subaddress_map,
    const std::uint32_t subaddr_account)
{
    const auto change_it = std::find_if(subaddress_map.cbegin(), subaddress_map.cend(),
        [subaddr_account](const auto &p) { return p.second.major == subaddr_account && p.second.minor == 0; });
    CHECK_AND_ASSERT_THROW_MES(change_it != subaddress_map.cend(),
        "find_change_address_spend_pubkey: missing change address (index "
        << subaddr_account << ",0) in subaddress map");

    const auto change_it_2 = std::find_if(std::next(change_it), subaddress_map.cend(),
        [subaddr_account](const auto &p) { return p.second.major == subaddr_account && p.second.minor == 0; });
    CHECK_AND_ASSERT_THROW_MES(change_it_2 == subaddress_map.cend(),
        "find_change_address_spend_pubkey: provided CN subaddress map is malformed!!! At least two spend pubkeys map to "
        "index " << subaddr_account << ",0 in the subaddress map!");

    return change_it->first;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
static crypto::public_key find_change_address_spend_pubkey(
    const std::unordered_map<crypto::public_key, carrot::subaddress_index_extended> &subaddress_map,
    const std::uint32_t subaddr_account)
{
    const auto change_it = std::find_if(subaddress_map.cbegin(), subaddress_map.cend(),
        [subaddr_account](const auto &p) { 
            return  p.second.index.major == subaddr_account &&
                    p.second.index.minor == 0 &&
                    p.second.derive_type == carrot::AddressDeriveType::Carrot &&
                    p.second.is_return_spend_key == false;
        });
    CHECK_AND_ASSERT_THROW_MES(change_it != subaddress_map.cend(),
        "find_change_address_spend_pubkey: missing change address (index "
        << subaddr_account << ",0) in subaddress map");
    
    const auto change_it_2 = std::find_if(std::next(change_it), subaddress_map.cend(),
        [subaddr_account](const auto &p) { 
            return  p.second.index.major == subaddr_account &&
                    p.second.index.minor == 0 &&
                    p.second.derive_type == carrot::AddressDeriveType::Carrot && 
                    p.second.is_return_spend_key == false;
        });
    CHECK_AND_ASSERT_THROW_MES(change_it_2 == subaddress_map.cend(),
        "find_change_address_spend_pubkey: provided subaddress map is malformed!!! At least two spend pubkeys map to "
        "index " << subaddr_account << ",0 in the subaddress map!");

    return change_it->first;
}
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
std::unordered_map<crypto::key_image, size_t> collect_non_burned_transfers_by_key_image(
    const wallet2::transfer_container &transfers)
{
    std::unordered_map<crypto::key_image, size_t> best_transfer_index_by_ki;
    for (size_t i = 0; i < transfers.size(); ++i)
    {
        const wallet2::transfer_details &td = transfers.at(i);
        if (!td.m_key_image_known || td.m_key_image_partial)
            continue;
        const auto it = best_transfer_index_by_ki.find(td.m_key_image);
        if (it == best_transfer_index_by_ki.end())
        {
            best_transfer_index_by_ki.insert({td.m_key_image, i});
            continue;
        }
        const wallet2::transfer_details &other_td = transfers.at(it->second);
        if (td.amount() < other_td.amount())
            continue;
        else if (td.amount() > other_td.amount())
            it->second = i;
        else if (td.m_global_output_index > other_td.m_global_output_index)
            continue;
        else if (td.m_global_output_index < other_td.m_global_output_index)
            it->second = i;
    }
    return best_transfer_index_by_ki;
}
//-------------------------------------------------------------------------------------------------------------------
carrot::select_inputs_func_t make_wallet2_single_transfer_input_selector(
    const wallet2::transfer_container &transfers,
    const std::uint32_t from_account,
    const std::set<std::uint32_t> &from_subaddresses,
    const rct::xmr_amount ignore_above,
    const rct::xmr_amount ignore_below,
    const std::uint64_t top_block_index,
    const bool allow_carrot_external_inputs_in_normal_transfers,
    const bool allow_pre_carrot_inputs_in_normal_transfers,
    std::set<size_t> &selected_transfer_indices_out)
{
    // Collect transfer_container into a `std::vector<carrot::InputCandidate>` for usable inputs
    std::vector<carrot::InputCandidate> input_candidates;
    std::vector<size_t> input_candidates_transfer_indices;
    input_candidates.reserve(transfers.size());
    input_candidates_transfer_indices.reserve(transfers.size());
    for (size_t i = 0; i < transfers.size(); ++i)
    {
        const wallet2::transfer_details &td = transfers.at(i);
        if (is_transfer_usable_for_input_selection(td,
            from_account,
            from_subaddresses,
            ignore_above,
            ignore_below,
            top_block_index))
        {
            input_candidates.push_back(carrot::InputCandidate{
                .core = carrot::CarrotSelectedInput{
                    .amount = td.amount(),
                    .key_image = td.m_key_image
                },
                .is_pre_carrot = !carrot::is_carrot_transaction_v1(td.m_tx),
                .is_external = true, //! @TODO: derive this info from field in transfer_details
                .block_index = td.m_block_height
            });
            input_candidates_transfer_indices.push_back(i);
        }
    }

    // Create wrapper around `make_single_transfer_input_selector`
    return [input_candidates = std::move(input_candidates),
            input_candidates_transfer_indices = std::move(input_candidates_transfer_indices),
            allow_carrot_external_inputs_in_normal_transfers,
            allow_pre_carrot_inputs_in_normal_transfers,
            &selected_transfer_indices_out
            ](
                const boost::multiprecision::uint128_t &nominal_output_sum,
                const std::map<std::size_t, rct::xmr_amount> &fee_by_input_count,
                const std::size_t num_normal_payment_proposals,
                const std::size_t num_selfsend_payment_proposals,
                std::vector<carrot::CarrotSelectedInput> &selected_inputs_outs
            ){
                const std::vector<carrot::input_selection_policy_t> policies{
                    &carrot::ispolicy::select_greedy_aging
                };

                std::uint32_t flags = 0;
                if (allow_carrot_external_inputs_in_normal_transfers)
                    flags |= carrot::InputSelectionFlags::ALLOW_EXTERNAL_INPUTS_IN_NORMAL_TRANSFERS;
                if (allow_pre_carrot_inputs_in_normal_transfers)
                    flags |= carrot::InputSelectionFlags::ALLOW_PRE_CARROT_INPUTS_IN_NORMAL_TRANSFERS;

                // Make inner input selection functor
                std::set<size_t> selected_input_indices;
                const carrot::select_inputs_func_t inner = carrot::make_single_transfer_input_selector(
                    epee::to_span(input_candidates),
                    epee::to_span(policies),
                    flags,
                    &selected_input_indices);

                // Call input selection
                inner(nominal_output_sum,
                    fee_by_input_count,
                    num_normal_payment_proposals,
                    num_selfsend_payment_proposals,
                    selected_inputs_outs);

                // Collect converted selected_input_indices -> selected_transfer_indices_out
                selected_transfer_indices_out.clear();
                for (const size_t input_index : selected_input_indices)
                    selected_transfer_indices_out.insert(input_candidates_transfer_indices.at(input_index));
            };
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<cryptonote::tx_source_entry> get_sources(
    const wallet2::transfer_container &transfers,
    const std::vector<std::size_t> &selected_transfers,
    const std::string &source_asset,
    wallet2 &w
) {
    // get decoys
    const size_t fake_outputs_count = 15;
    std::vector<std::vector<tools::wallet2::get_outs_entry>> outs;
    std::unordered_set<crypto::public_key> valid_public_keys_cache;
    w.get_outs(outs, selected_transfers, fake_outputs_count, true, valid_public_keys_cache); // may throw

    LOG_PRINT_L2("preparing outputs");
    size_t i = 0, out_index = 0;
    std::vector<cryptonote::tx_source_entry> sources;
    for(size_t idx: selected_transfers)
    {
        sources.resize(sources.size()+1);
        cryptonote::tx_source_entry& src = sources.back();
        const wallet2::transfer_details& td = transfers[idx];

        // Sanity check the asset_type for this TD is correct
        THROW_WALLET_EXCEPTION_IF(td.asset_type != source_asset, error::wallet_internal_error, "Input has wrong asset_type - expected " + source_asset + " but found " + td.asset_type);

        src.amount = td.amount();
        src.rct = td.is_rct();
        src.carrot = td.is_carrot();
        src.coinbase = td.m_tx.vin[0].type() == typeid(cryptonote::txin_gen);
        src.block_index = td.m_block_height;
        src.asset_type = td.asset_type;

        // Create the origin TX data
        if (td.m_td_origin_idx != (uint64_t)-1) {
            THROW_WALLET_EXCEPTION_IF(td.m_td_origin_idx >= w.get_num_transfer_details(), error::wallet_internal_error, "cannot locate return_payment origin index in m_transfers");
            const wallet2::transfer_details& td_origin = w.get_transfer_details(td.m_td_origin_idx);
            src.origin_tx_data.tx_type    = td_origin.m_tx.type;
            src.origin_tx_data.tx_pub_key   = cryptonote::get_tx_pub_key_from_extra(td_origin.m_tx);
            src.origin_tx_data.output_index = td_origin.m_internal_output_index;
        }
        
        //paste mixin transaction

        THROW_WALLET_EXCEPTION_IF(outs.size() < out_index + 1 ,  error::wallet_internal_error, "outs.size() < out_index + 1"); 
        THROW_WALLET_EXCEPTION_IF(outs[out_index].size() < fake_outputs_count ,  error::wallet_internal_error, "fake_outputs_count > random outputs found");
        
        typedef cryptonote::tx_source_entry::output_entry tx_output_entry;
        for (size_t n = 0; n < fake_outputs_count + 1; ++n)
        {
            tx_output_entry oe;
            oe.first = std::get<0>(outs[out_index][n]);
            oe.second.dest = rct::pk2rct(std::get<1>(outs[out_index][n]));
            oe.second.mask = std::get<2>(outs[out_index][n]);
            src.outputs.push_back(oe);
        }
        ++i;

        //paste real transaction to the random index
        auto it_to_replace = std::find_if(src.outputs.begin(), src.outputs.end(), [&](const tx_output_entry& a)
        {
            // HERE BE DRAGONS!!!
            // SRCG: ring tweak to indexed per asset_type - DO NOT COMMIT UNTIL IT IS ALL WORKING
            //return a.first == td.m_global_output_index;
            return a.first == td.m_asset_type_output_index;
            // LAND AHOY!!!
        });
        THROW_WALLET_EXCEPTION_IF(it_to_replace == src.outputs.end(), error::wallet_internal_error,
            "real output not found");

        tx_output_entry real_oe;
        // HERE BE DRAGONS!!!
        // SRCG: ring tweak to indexed per asset_type - DO NOT COMMIT UNTIL IT IS ALL WORKING
        //real_oe.first = td.m_global_output_index;
        real_oe.first = td.m_asset_type_output_index;
        // LAND AHOY!!!
        real_oe.second.dest = rct::pk2rct(td.get_public_key());
        real_oe.second.mask = rct::commit(td.amount(), td.m_mask);
        *it_to_replace = real_oe;
        src.real_out_tx_key = get_tx_pub_key_from_extra(td.m_tx, td.m_pk_index);
        src.real_out_additional_tx_keys = get_additional_tx_pub_keys_from_extra(td.m_tx);
        src.real_output = it_to_replace - src.outputs.begin();
        src.real_output_in_tx_index = td.m_internal_output_index;
        src.mask = td.m_mask;
        src.address_spend_pubkey = td.m_recovered_spend_pubkey;
        if (td.m_tx.vin[0].type() == typeid(cryptonote::txin_to_key)) {
            src.first_rct_key_image = boost::get<cryptonote::txin_to_key>(td.m_tx.vin[0]).k_image;
        }

        if (false) // w.m_multisig // TODO:
            // note: multisig_kLRki is a legacy struct, currently only used as a key image shuttle into the multisig tx builder
            src.multisig_kLRki = {.k = {}, .L = {}, .R = {}, .ki = rct::ki2rct(td.m_key_image)};
        else
            src.multisig_kLRki = rct::multisig_kLRki({rct::zero(), rct::zero(), rct::zero(), rct::zero()});
        detail::print_source_entry(src);
        ++out_index;
    }
    LOG_PRINT_L2("outputs prepared");

    return sources;
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_transfer(
    wallet2 &w,
    std::vector<cryptonote::tx_destination_entry> dsts,
    const rct::xmr_amount fee_per_weight,
    const rct::xmr_amount fee_quantization_mask,
    const std::vector<uint8_t> &extra,
    const cryptonote::transaction_type tx_type,
    const uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices,
    wallet2::unique_index_container subtract_fee_from_outputs,
    const std::uint64_t top_block_index)
{
    wallet2::transfer_container unused_transfers;
    w.get_transfers(unused_transfers);

    std::vector<carrot::CarrotTransactionProposalV1> tx_proposals;
    tx_proposals.reserve(dsts.size() / (carrot::CARROT_MAX_TX_OUTPUTS - 1) + 1);

    const crypto::public_key change_address_spend_pubkey
      = find_change_address_spend_pubkey(w.get_account().get_subaddress_map_ref(), subaddr_account);

    while (!dsts.empty())
    {
        const std::size_t num_dsts_to_complete = std::min<std::size_t>(dsts.size(), carrot::CARROT_MAX_TX_OUTPUTS - 1);

        // build payment proposals and subtractable info from last `num_dsts_to_complete` dsts
        std::vector<carrot::CarrotPaymentProposalV1> normal_payment_proposals;
        std::vector<carrot::CarrotPaymentProposalVerifiableSelfSendV1> selfsend_payment_proposals;
        std::set<std::size_t> subtractable_normal_payment_proposals;
        std::set<std::size_t> subtractable_selfsend_payment_proposals;
        for (size_t i = 0; i < num_dsts_to_complete && !dsts.empty(); ++i)
        {
            const cryptonote::tx_destination_entry &dst = dsts.back();
            const bool is_selfsend = build_payment_proposals(normal_payment_proposals,
                selfsend_payment_proposals,
                dst,
                w.get_account().get_subaddress_map_cn());
            if (subtract_fee_from_outputs.count(dsts.size() - 1))
            {
                if (is_selfsend)
                    subtractable_selfsend_payment_proposals.insert(selfsend_payment_proposals.size() - 1);
                else
                    subtractable_normal_payment_proposals.insert(normal_payment_proposals.size() - 1);
            }
            dsts.pop_back();
        }

        // make input selector
        std::set<size_t> selected_transfer_indices;
        carrot::select_inputs_func_t select_inputs = make_wallet2_single_transfer_input_selector(
            unused_transfers,
            subaddr_account,
            subaddr_indices,
            w.ignore_outputs_above(),
            w.ignore_outputs_below(),
            top_block_index,
            /*allow_carrot_external_inputs_in_normal_transfers=*/true,
            /*allow_pre_carrot_inputs_in_normal_transfers=*/true,
            selected_transfer_indices);

        // make proposal
        carrot::CarrotTransactionProposalV1 tx_proposal;
        carrot::make_carrot_transaction_proposal_v1_transfer(
            normal_payment_proposals,
            selfsend_payment_proposals,
            fee_per_weight,
            fee_quantization_mask,
            extra,
            tx_type,
            std::move(select_inputs),
            change_address_spend_pubkey,
            {{subaddr_account, 0}, carrot::AddressDeriveType::Carrot, false},
            subtractable_normal_payment_proposals,
            subtractable_selfsend_payment_proposals,
            tx_proposal);
        
        // populate the sources
        std::vector<size_t> selected_transfer_indices_sorted;
        for (const auto &ki: tx_proposal.key_images_sorted) {
            selected_transfer_indices_sorted.push_back(w.get_transfer_details(ki));
        }
        tx_proposal.sources = get_sources(unused_transfers, selected_transfer_indices_sorted, "SAL1", w);

        // update `unused_transfers` for next proposal by removing selected transfers
        tools::for_all_in_vector_erase_no_preserve_order_if(unused_transfers,
            [&tx_proposal](const wallet2::transfer_details &td) -> bool {
                const auto &used_kis = tx_proposal.key_images_sorted;
                const auto ki_it = std::find(used_kis.cbegin(), used_kis.cend(), td.m_key_image);
                return ki_it != used_kis.cend();
            }
        );

        tx_proposals.push_back(std::move(tx_proposal));
    }

    return tx_proposals;
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_transfer(
    wallet2 &w,
    const std::vector<cryptonote::tx_destination_entry> &dsts,
    const std::uint32_t priority,
    const std::vector<uint8_t> &extra,
    const cryptonote::transaction_type tx_type,
    const std::uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices,
    const wallet2::unique_index_container &subtract_fee_from_outputs)
{
    const bool use_per_byte_fee = w.use_fork_rules(HF_VERSION_PER_BYTE_FEE, 0);
    CHECK_AND_ASSERT_THROW_MES(use_per_byte_fee,
        "make_carrot_transaction_proposals_wallet2_transfer: not using per-byte base fee");

    const rct::xmr_amount fee_per_weight = w.get_base_fee(priority);
    MDEBUG("fee_per_weight = " << fee_per_weight << ", from priority = " << priority);
    
    const rct::xmr_amount fee_quantization_mask = w.get_fee_quantization_mask();
    MDEBUG("fee_quantization_mask = " << fee_quantization_mask << ", from priority = " << priority);

    const std::uint64_t current_chain_height = w.get_blockchain_current_height();
    CHECK_AND_ASSERT_THROW_MES(current_chain_height > 0,
        "make_carrot_transaction_proposals_wallet2_transfer: chain height is 0, there is no top block");
    const std::uint64_t top_block_index = current_chain_height - 1;

    return make_carrot_transaction_proposals_wallet2_transfer(
        w,
        dsts,
        fee_per_weight,
        fee_quantization_mask,
        extra,
        tx_type,
        subaddr_account,
        subaddr_indices,
        subtract_fee_from_outputs,
        top_block_index);
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep(
    wallet2 &w,
    const std::vector<crypto::key_image> &input_key_images,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests_per_tx,
    const rct::xmr_amount fee_per_weight,
    const rct::xmr_amount fee_quantization_mask,
    const std::vector<uint8_t> &extra,
    const cryptonote::transaction_type tx_type,
    const std::uint64_t top_block_index)
{
    wallet2::transfer_container transfers;
    w.get_transfers(transfers);

    const size_t n_inputs = input_key_images.size();
    CARROT_CHECK_AND_THROW(n_inputs, carrot::too_few_inputs, "no key images provided");
    CARROT_CHECK_AND_THROW(n_dests_per_tx, carrot::too_few_outputs, "sweep must have at least one destination");
    CARROT_CHECK_AND_THROW(n_dests_per_tx <= carrot::CARROT_MAX_TX_OUTPUTS,
        carrot::too_many_outputs, "too many sweep destinations per transaction");

    // Check that the key image is usable and isn't spent, collect amounts, and get subaddress account index
    std::vector<rct::xmr_amount> input_amounts;
    input_amounts.reserve(input_key_images.size());
    std::uint32_t subaddr_account = std::numeric_limits<std::uint32_t>::max();
    const auto best_transfers_by_ki = collect_non_burned_transfers_by_key_image(transfers);
    for (const crypto::key_image &ki : input_key_images)
    {
        const auto ki_it = best_transfers_by_ki.find(ki);
        CHECK_AND_ASSERT_THROW_MES(ki_it != best_transfers_by_ki.cend(),
            __func__ << ": unknown key image");
        const wallet2::transfer_details &td = transfers.at(ki_it->second);
        CHECK_AND_ASSERT_THROW_MES(is_transfer_usable_for_input_selection(td,
                td.m_subaddr_index.major,
                /*from_subaddresses=*/{},
                /*ignore_above=*/MONEY_SUPPLY,
                /*ignore_below=*/0,
                top_block_index),
            __func__ << ": transfer not usable as an input");
        input_amounts.push_back(td.amount());
        subaddr_account = std::min(subaddr_account, td.m_subaddr_index.major);
    }

    const crypto::public_key change_address_spend_pubkey
      = find_change_address_spend_pubkey(w.get_account().get_subaddress_map_ref(), subaddr_account);

    // get 1 payment proposal corresponding to (address, is_subaddres)
    std::vector<carrot::CarrotPaymentProposalV1> normal_payment_proposals;
    std::vector<carrot::CarrotPaymentProposalVerifiableSelfSendV1> selfsend_payment_proposals;
    for (size_t i = 0; i < n_dests_per_tx; ++i)
    {
        cryptonote::tx_destination_entry de;
        de.amount = 0;
        de.addr = address;
        de.is_subaddress = is_subaddress;
        de.asset_type = "SAL1";
        const bool is_selfsend_dest = build_payment_proposals(normal_payment_proposals,
            selfsend_payment_proposals,
            de,
            w.get_account().get_subaddress_map_cn());
        CHECK_AND_ASSERT_THROW_MES((is_selfsend_dest && selfsend_payment_proposals.size() == i+1)
                || (!is_selfsend_dest && normal_payment_proposals.size() == i+1),
            __func__ << ": BUG in build_payment_proposals: incorrect count for payment proposal lists");
    }
    CARROT_CHECK_AND_THROW(normal_payment_proposals.size() < carrot::CARROT_MAX_TX_OUTPUTS,
        carrot::too_many_outputs, "too many *outgoing* sweep destinations per tx, we also need 1 self-send output");

    // make `n_txs` tx proposals with `n_output` payment proposals each
    const size_t n_txs = div_ceil<size_t>(n_inputs, carrot::CARROT_MAX_TX_INPUTS);
    std::vector<carrot::CarrotTransactionProposalV1> tx_proposals(n_txs);
    size_t ki_idx = 0;
    for (carrot::CarrotTransactionProposalV1 &tx_proposal : tx_proposals)
    {
        // if a 2-selfsend, 2-out tx, flip one of the enote types to get unique derivations
        if (selfsend_payment_proposals.size() == 2)
            selfsend_payment_proposals.back().proposal.enote_type = carrot::CarrotEnoteType::CHANGE;

        // collect inputs for this tx
        const size_t ki_idx_end = std::min<size_t>(n_inputs, ki_idx + carrot::CARROT_MAX_TX_INPUTS);
        std::vector<carrot::CarrotSelectedInput> selected_inputs;
        selected_inputs.reserve(n_inputs - ki_idx_end);
        for (; ki_idx < ki_idx_end; ++ki_idx)
            selected_inputs.push_back({input_amounts.at(ki_idx), input_key_images.at(ki_idx)});

        carrot::make_carrot_transaction_proposal_v1_sweep(normal_payment_proposals,
            selfsend_payment_proposals,
            fee_per_weight,
            fee_quantization_mask,
            extra,
            tx_type,
            std::move(selected_inputs),
            change_address_spend_pubkey,
            {{subaddr_account, 0}, carrot::AddressDeriveType::Carrot},
            tx_proposal);
    
        // populate the sources
        std::vector<size_t> selected_transfer_indices_sorted;
        for (const auto &ki: tx_proposal.key_images_sorted) {
            selected_transfer_indices_sorted.push_back(w.get_transfer_details(ki));
        }
        tx_proposal.sources = get_sources(transfers, selected_transfer_indices_sorted, "SAL1", w);
    }

    CARROT_CHECK_AND_THROW(ki_idx == input_key_images.size(),
        carrot::carrot_logic_error, "BUG: sweep_all did not consume the correct num of key images while iterating");

    return tx_proposals;
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep(
    wallet2 &w,
    const std::vector<crypto::key_image> &input_key_images,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests_per_tx,
    const std::uint32_t priority,
    const std::vector<uint8_t> &extra,
    const cryptonote::transaction_type tx_type)
{
    const rct::xmr_amount fee_per_weight = w.get_base_fee(priority);
    const rct::xmr_amount fee_quantization_mask = w.get_fee_quantization_mask();

    const std::uint64_t current_chain_height = w.get_blockchain_current_height();
    CHECK_AND_ASSERT_THROW_MES(current_chain_height > 0,
        "make_carrot_transaction_proposals_wallet2_sweep: chain height is 0, there is no top block");
    const std::uint64_t top_block_index = current_chain_height - 1;

    return make_carrot_transaction_proposals_wallet2_sweep(
        w,
        input_key_images,
        address,
        is_subaddress,
        n_dests_per_tx,
        fee_per_weight,
        fee_quantization_mask,
        extra,
        tx_type,
        top_block_index);
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep_all(
    wallet2 &w,
    const rct::xmr_amount only_below,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests_per_tx,
    const rct::xmr_amount fee_per_weight,
    const rct::xmr_amount fee_quantization_mask,
    const std::vector<uint8_t> &extra,
    const cryptonote::transaction_type tx_type,
    const std::uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices,
    const std::uint64_t top_block_index)
{
    wallet2::transfer_container transfers;
    w.get_transfers(transfers);

    const std::unordered_map<crypto::key_image, size_t> unburned_transfers_by_key_image =
        collect_non_burned_transfers_by_key_image(transfers);

    std::vector<crypto::key_image> input_key_images;
    input_key_images.reserve(transfers.size());
    for (std::size_t transfer_idx = 0; transfer_idx < transfers.size(); ++transfer_idx)
    {
        const wallet2::transfer_details &td = transfers.at(transfer_idx);

        if (!is_transfer_usable_for_input_selection(td,
                subaddr_account,
                subaddr_indices,
                only_below ? only_below : MONEY_SUPPLY,
                1, // ignore_below
                top_block_index))
            continue;

        const auto ki_it = unburned_transfers_by_key_image.find(td.m_key_image);
        if (ki_it == unburned_transfers_by_key_image.cend())
            continue;
        else if (ki_it->second != transfer_idx)
            continue;

        input_key_images.push_back(td.m_key_image);
    }

    CHECK_AND_ASSERT_THROW_MES(!input_key_images.empty(), __func__ << ": no usable transfers to sweep");

    return make_carrot_transaction_proposals_wallet2_sweep(
        w,
        input_key_images,
        address,
        is_subaddress,
        n_dests_per_tx,
        fee_per_weight,
        fee_quantization_mask,
        extra,
        tx_type,
        top_block_index);
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep_all(
    wallet2 &w,
    const rct::xmr_amount only_below,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests_per_tx,
    const std::uint32_t priority,
    const std::vector<uint8_t> &extra,
    const cryptonote::transaction_type tx_type,
    const std::uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices)
{
    const rct::xmr_amount fee_per_weight = w.get_base_fee(priority);
    const rct::xmr_amount fee_quantization_mask = w.get_fee_quantization_mask();

    const std::uint64_t current_chain_height = w.get_blockchain_current_height();
    CHECK_AND_ASSERT_THROW_MES(current_chain_height > 0,
        "make_carrot_transaction_proposals_wallet2_sweep: chain height is 0, there is no top block");
    const std::uint64_t top_block_index = current_chain_height - 1;

    return make_carrot_transaction_proposals_wallet2_sweep_all(
        w,
        only_below,
        address,
        is_subaddress,
        n_dests_per_tx,
        fee_per_weight,
        fee_quantization_mask,
        extra,
        tx_type,
        subaddr_account,
        subaddr_indices,
        top_block_index);
}
//-------------------------------------------------------------------------------------------------------------------
bool get_address_openings_x_y(
    const cryptonote::transaction &tx,
    const cryptonote::tx_source_entry &src,
    const wallet2 &w,
    crypto::secret_key &x_out,
    crypto::secret_key &y_out)
{
    // If the output is a return output, we can use the return output secret key
    // to derive x and y directly.
    const auto& return_output_map = w.get_account().get_return_output_map_ref();
    if (return_output_map.find(rct::rct2pk(src.outputs[src.real_output].second.dest)) != return_output_map.end())
    {
        const auto &return_output = return_output_map.at(rct::rct2pk(src.outputs[src.real_output].second.dest));
        x_out = return_output.x;
        y_out = return_output.y;
        return true;
    }

    const std::vector<crypto::public_key> v_pubkeys{src.real_out_tx_key};
    const std::vector<crypto::public_key> v_pubkeys_empty{};
    const epee::span<const crypto::public_key> main_tx_ephemeral_pubkeys = (src.real_out_tx_key == crypto::null_pkey) ? epee::to_span(v_pubkeys_empty) :  epee::to_span(v_pubkeys);
    const epee::span<const crypto::public_key> additional_tx_ephemeral_pubkeys = epee::to_span(src.real_out_additional_tx_keys);

    // we have to try both internal and external derivations
    bool r = false;
    for (size_t i = 0; i < 2; ++i) {
        // perform ECDH derivations
        std::vector<crypto::key_derivation> main_derivations;
        std::vector<crypto::key_derivation> additional_derivations;
        if (i == 0) {
            wallet::perform_ecdh_derivations(
                main_tx_ephemeral_pubkeys,
                additional_tx_ephemeral_pubkeys,
                w.get_account().get_keys().k_view_incoming,
                w.get_account().get_keys().get_device(),
                src.carrot,
                main_derivations,
                additional_derivations
            );
        } else {
            crypto::key_derivation main_derivation;
            memcpy(main_derivation.data, w.get_account().get_keys().s_view_balance.data, sizeof(crypto::secret_key));
            main_derivations.push_back(main_derivation);
        }

        crypto::hash s_sender_receiver;
        const crypto::key_derivation &kd = main_derivations.size()
            ? main_derivations[0]
            : additional_derivations[src.real_output_in_tx_index];
        const mx25519_pubkey s_sender_receiver_unctx = carrot::raw_byte_convert<mx25519_pubkey>(kd);

        // ephemeral pubkeys
        const epee::span<const crypto::public_key> enote_ephemeral_pubkeys_pk = 
            main_tx_ephemeral_pubkeys.empty() ? additional_tx_ephemeral_pubkeys : main_tx_ephemeral_pubkeys;
        const epee::span<const mx25519_pubkey> enote_ephemeral_pubkeys = {
            reinterpret_cast<const mx25519_pubkey*>(enote_ephemeral_pubkeys_pk.data()),
            enote_ephemeral_pubkeys_pk.size()
        };

        const bool shared_ephemeral_pubkey = enote_ephemeral_pubkeys.size() == 1;
        const size_t ephemeral_pubkey_index = shared_ephemeral_pubkey ? 0 : src.real_output_in_tx_index;

        // input_context
        carrot::input_context_t input_context;
        if (src.coinbase) {
            input_context = carrot::make_carrot_input_context_coinbase(src.block_index);
        } else {
            input_context = carrot::make_carrot_input_context(src.first_rct_key_image);
        }

        // s^ctx_sr = H_32(s_sr, D_e, input_context)
        make_carrot_sender_receiver_secret(s_sender_receiver_unctx.data,
            enote_ephemeral_pubkeys[ephemeral_pubkey_index],
            input_context,
            s_sender_receiver);

        // get the k_og and k_ot
        crypto::secret_key sender_extension_g_out;
        crypto::secret_key sender_extension_t_out;
        crypto::public_key address_spend_pubkey_out;
        carrot::payment_id_t nominal_payment_id_out;
        carrot::janus_anchor_t nominal_janus_anchor_out;
        carrot::encrypted_janus_anchor_t encrypted_janus_anchor;
        carrot::encrypted_payment_id_t encrypted_payment_id;
        carrot::scan_carrot_dest_info(
            rct::rct2pk(src.outputs[src.real_output].second.dest),
            src.outputs[src.real_output].second.mask,
            encrypted_janus_anchor,
            encrypted_payment_id,
            s_sender_receiver,
            sender_extension_g_out,
            sender_extension_t_out,
            address_spend_pubkey_out,
            nominal_payment_id_out,
            nominal_janus_anchor_out
        );
        r = w.get_account().try_searching_for_opening_for_onetime_address(
            address_spend_pubkey_out,
            sender_extension_g_out,
            sender_extension_t_out,
            x_out,
            y_out
        );

        // If we found the opening, we can stop here
        if (r) {
            break;
        }
    }

    CHECK_AND_ASSERT_THROW_MES(r, "Failed to obtain openings for onetime address");
    return true;
}
//-------------------------------------------------------------------------------------------------------------------
void encrypt_change_index(
    const std::vector<carrot::CarrotPaymentProposalV1> &proposals,
    const std::vector<carrot::CarrotPaymentProposalSelfSendV1> &selfsend_proposal_cores,
    const crypto::key_image &tx_first_key_image,
    const size_t change_index,
    const std::unordered_map<crypto::public_key, size_t> &payments_indices,
    std::vector<uint8_t> &change_masks_out
) {
    // 1. input context: input_context = "R" || KI_1
    const carrot::input_context_t input_context = carrot::make_carrot_input_context(tx_first_key_image);

    // 2. collect proposals and selfsend proposals destinations
    std::vector<std::tuple<crypto::public_key, size_t, bool>> destinations;
    for (const auto &p : proposals) {
        destinations.emplace_back(p.destination.address_spend_pubkey, payments_indices.at(p.destination.address_spend_pubkey), true);
    }
    for (const auto &p : selfsend_proposal_cores) {
        destinations.emplace_back(p.destination_address_spend_pubkey, payments_indices.at(p.destination_address_spend_pubkey), false);
    }

    // 3. sort by indices
    std::sort(destinations.begin(), destinations.end(),
        [](const auto &a, const auto &b) {
            return std::get<1>(a) < std::get<1>(b);
        }
    );

    // 4. calculate change masks 
    for (const auto &d: destinations) {
        // get shared secret
        mx25519_pubkey eph_pubkey;
        mx25519_pubkey s_sender_receiver_unctx;
        if (std::get<2>(d)) {
            // normal payment proposal
            const auto it = std::find_if(proposals.begin(), proposals.end(),
                [&d](const carrot::CarrotPaymentProposalV1 &p) {
                    return p.destination.address_spend_pubkey == std::get<0>(d);
                });
            CHECK_AND_ASSERT_THROW_MES(it != proposals.end(), "Failed to find normal payment proposal");
            carrot::get_normal_proposal_ecdh_parts(
                *it,
                input_context,
                eph_pubkey,
                s_sender_receiver_unctx
            );
        } else {
            s_sender_receiver_unctx = crypto::rand<mx25519_pubkey>();
        }

        // derive a scalar from the shared secret
        crypto::secret_key output_index_key;
        crypto::key_derivation output_index_derivation;
        memcpy(output_index_derivation.data, s_sender_receiver_unctx.data, sizeof(output_index_derivation.data));
        crypto::derivation_to_scalar(
            output_index_derivation,
            std::get<1>(d),
            output_index_key
        );

        // Calculate the encrypted_change_index data for this output
        struct {
            char domain_separator[8];
            crypto::secret_key output_index_key;
        } eci_buf;
        std::memset(eci_buf.domain_separator, 0x0, sizeof(eci_buf.domain_separator));
        std::strncpy(eci_buf.domain_separator, "CHG_IDX", 8);
        eci_buf.output_index_key = output_index_key;
        crypto::secret_key eci_out;
        keccak((uint8_t *)&eci_buf, sizeof(eci_buf), (uint8_t*)&eci_out, sizeof(eci_out));
        uint8_t eci_data = change_index ^ eci_out.data[0];
        change_masks_out.push_back(eci_data);
    }
}
//-------------------------------------------------------------------------------------------------------------------
cryptonote::transaction finalize_all_proofs_from_transfer_details(
    const carrot::CarrotTransactionProposalV1 &tx_proposal,
    const wallet2 &w)
{
    const size_t n_inputs = tx_proposal.key_images_sorted.size();
    const size_t n_outputs = tx_proposal.normal_payment_proposals.size()
        + tx_proposal.selfsend_payment_proposals.size();
    CHECK_AND_ASSERT_THROW_MES(n_inputs, "finalize_all_proofs_from_transfer_details: no inputs");

    LOG_PRINT_L2("finalize_all_proofs_from_transfer_details: make all proofs for transaction proposal: "
        << n_inputs << "-in " << n_outputs << "-out, with "
        << tx_proposal.normal_payment_proposals.size() << " normal payment proposals, "
        << tx_proposal.selfsend_payment_proposals.size() << " self-send payment proposals, and a fee of "
        << cryptonote::print_money(tx_proposal.fee) << " SAL1");

    wallet2::transfer_container transfers;
    w.get_transfers(transfers);
    cryptonote::account_keys acc_keys = w.get_account().get_keys();

    // collect core selfsend proposals
    std::vector<carrot::CarrotPaymentProposalSelfSendV1> selfsend_payment_proposal_cores;
    selfsend_payment_proposal_cores.reserve(tx_proposal.selfsend_payment_proposals.size());
    for (const auto &selfsend_payment_proposal : tx_proposal.selfsend_payment_proposals)
        selfsend_payment_proposal_cores.push_back(selfsend_payment_proposal.proposal);

    //! @TODO: HW device
    carrot::cryptonote_hierarchy_address_device_ram_borrowed addr_dev(
        acc_keys.m_carrot_account_address.m_spend_public_key,
        acc_keys.k_view_incoming);

    // finalize enotes
    LOG_PRINT_L3("Getting output enote proposals");
    std::vector<carrot::RCTOutputEnoteProposal> output_enote_proposals;
    carrot::encrypted_payment_id_t encrypted_payment_id;
    size_t change_index;
    carrot::RCTOutputEnoteProposal return_enote_out;
    std::unordered_map<crypto::public_key, size_t> payments_indices;
    carrot::get_output_enote_proposals(tx_proposal.normal_payment_proposals,
        selfsend_payment_proposal_cores,
        tx_proposal.dummy_encrypted_payment_id,
        &w.get_account().s_view_balance_dev,
        &addr_dev,
        tx_proposal.key_images_sorted.at(0),
        output_enote_proposals,
        return_enote_out,
        encrypted_payment_id,
        tx_proposal.tx_type,
        change_index,
        payments_indices,
        nullptr);
    CHECK_AND_ASSERT_THROW_MES(output_enote_proposals.size() == n_outputs,
        "finalize_all_proofs_from_transfer_details: unexpected number of output enote proposals");

    // collect all non-burned inputs owned by wallet
    const std::unordered_map<crypto::key_image, size_t> unburned_transfers_by_key_image =
        collect_non_burned_transfers_by_key_image(transfers);
    LOG_PRINT_L3("Did a burning bug pass, eliminated "
        << (transfers.size() - unburned_transfers_by_key_image.size())
        << " eligible transfers");

    // collect output amount blinding factors
    std::vector<rct::key> output_amount_blinding_factors;
    output_amount_blinding_factors.reserve(output_enote_proposals.size());
    for (const carrot::RCTOutputEnoteProposal &output_enote_proposal : output_enote_proposals)
        output_amount_blinding_factors.push_back(rct::sk2rct(output_enote_proposal.amount_blinding_factor));


    // collect enotes
    std::vector<carrot::CarrotEnoteV1> enotes(output_enote_proposals.size());
    for (size_t i = 0; i < enotes.size(); ++i)
        enotes[i] = output_enote_proposals.at(i).enote;

    // encrypt change index per output
    std::vector<uint8_t> change_masks;
    encrypt_change_index(
        tx_proposal.normal_payment_proposals,
        selfsend_payment_proposal_cores,
        tx_proposal.key_images_sorted.at(0),
        change_index,
        payments_indices,
        change_masks);

    // serialize transaction
    cryptonote::transaction tx = carrot::store_carrot_to_transaction_v1(enotes,
        tx_proposal.key_images_sorted,
        tx_proposal.sources,
        tx_proposal.fee,
        tx_proposal.tx_type,
        tx_proposal.amount_burnt,
        change_masks,
        return_enote_out,
        encrypted_payment_id);

    // aliases
    hw::device &hwdev = acc_keys.get_device();
    const auto &sources = tx_proposal.sources;

    // inputs
    uint64_t amount_in = 0;
    rct::carrot_ctkeyV inSk;
    inSk.reserve(sources.size());
    std::vector<uint64_t> inamounts;
    std::vector<unsigned int> index;
    for (const auto& src: sources)
    {
        amount_in += src.amount;
        inamounts.push_back(src.amount);
        index.push_back(src.real_output);

        // inSk: (x, y, mask)
        rct::carrot_ctkey ctkey;
        ctkey.mask = src.mask;
        if (src.carrot) {

            crypto::secret_key x, y;
            THROW_WALLET_EXCEPTION_IF(!get_address_openings_x_y(tx, src, w, x, y),
                error::wallet_internal_error, "Failed to get x and y for input");

            ctkey.x = rct::sk2rct(x);
            ctkey.y = rct::sk2rct(y);
        } else {
            // generate the secret key
            cryptonote::keypair in_ephemeral;
            crypto::key_image img;
            rct::salvium_input_data_t sid;
            const auto& out_key = reinterpret_cast<const crypto::public_key&>(src.outputs[src.real_output].second.dest);
            bool use_origin_data = (src.origin_tx_data.tx_type != cryptonote::transaction_type::UNSET);
            sid.origin_tx_type = src.origin_tx_data.tx_type;
            bool r = cryptonote::generate_key_image_helper(
                w.get_account().get_keys(),
                w.get_account().get_subaddress_map_cn(),
                out_key,
                src.real_out_tx_key,
                src.real_out_additional_tx_keys,
                src.real_output_in_tx_index,
                in_ephemeral,
                img,
                hwdev,
                use_origin_data,
                src.origin_tx_data, sid
            );
            THROW_WALLET_EXCEPTION_IF(!r, error::wallet_internal_error, "Failed to generate key image helper");

            ctkey.x = rct::sk2rct(in_ephemeral.sec);
            ctkey.y = rct::zero(); // not used in non-carrot txes
        }

        inSk.push_back(ctkey);
        memwipe(&ctkey, sizeof(rct::carrot_ctkey));
        // inPk: (public key, commitment)
        // will be done when filling in mixRing
    }

    // outputs
    uint64_t amount_out = 0;
    std::vector<uint64_t> outamounts;
    rct::keyV destinations;
    std::vector<std::string> destination_asset_types;
    rct::ctkeyV outSk;
    for (const auto &oep : output_enote_proposals)
    {
        destinations.push_back(rct::pk2rct(oep.enote.onetime_address));
        destination_asset_types.push_back(oep.enote.asset_type);
        outamounts.push_back(oep.amount);
        amount_out += oep.amount;

        rct::ctkey key;
        key.mask = rct::sk2rct(oep.amount_blinding_factor);
        outSk.push_back(key);
    }

    // change output x, y
    crypto::public_key change_address_spend_pubkey;
    for (const auto &p :selfsend_payment_proposal_cores) {
        if (p.enote_type == carrot::CarrotEnoteType::CHANGE) {
            change_address_spend_pubkey = p.destination_address_spend_pubkey;
        }
    }
    const carrot::RCTOutputEnoteProposal &change_enote_proposal = output_enote_proposals.at(change_index);
    const carrot::input_context_t input_context = carrot::make_carrot_input_context(tx_proposal.key_images_sorted.at(0));
    crypto::hash s_sender_receiver;
    w.get_account().s_view_balance_dev.make_internal_sender_receiver_secret(
        change_enote_proposal.enote.enote_ephemeral_pubkey,
        input_context,
        s_sender_receiver);
    crypto::secret_key sender_extension_g;
    carrot::make_carrot_onetime_address_extension_g(s_sender_receiver, change_enote_proposal.enote.amount_commitment, sender_extension_g);
    crypto::secret_key sender_extension_t;
    carrot::make_carrot_onetime_address_extension_t(s_sender_receiver, change_enote_proposal.enote.amount_commitment, sender_extension_t);
    crypto::secret_key change_x, change_y;
    bool r = w.get_account().try_searching_for_opening_for_onetime_address(
        change_address_spend_pubkey,
        sender_extension_g,
        sender_extension_t,
        change_x,
        change_y
    );
    THROW_WALLET_EXCEPTION_IF(!r, error::wallet_internal_error,
        "Failed to obtain opening for onetime change address");

    // mixRing indexing is done the other way round for simple
    rct::ctkeyM mixRing(sources.size());
    for (size_t i = 0; i < sources.size(); ++i)
    {
        mixRing[i].resize(sources[i].outputs.size());
        for (size_t n = 0; n < sources[i].outputs.size(); ++n)
        {
            mixRing[i][n] = sources[i].outputs[n].second;
        }
    }

    // bpp
    tx.rct_signatures.p.bulletproofs_plus.push_back(
        rct::bulletproof_plus_PROVE(outamounts, output_amount_blinding_factors)
    );

    // store proofs
    crypto::hash tx_prefix_hash;
    get_transaction_prefix_hash(tx, tx_prefix_hash, hwdev);
    rct::salvium_data_t salvium_data;
    salvium_data.salvium_data_type = rct::SalviumOne;
    rct::genRctSimpleCarrot(
        rct::hash2rct(tx_prefix_hash),
        inSk, 
        destinations,
        tx_proposal.tx_type,
        "SAL1",
        destination_asset_types,
        inamounts,
        outamounts,
        tx_proposal.fee,
        mixRing,
        index,
        outSk,
        rct::RCTConfig {
            rct::RangeProofType::RangeProofPaddedBulletproof,
            6,
        },
        hwdev,
        salvium_data,
        rct::sk2rct(change_x),
        rct::sk2rct(change_y),
        change_index,
        tx.rct_signatures
    );

    tx.pruned = false;
    return tx;
}
//-------------------------------------------------------------------------------------------------------------------
wallet2::pending_tx make_pending_carrot_tx(const carrot::CarrotTransactionProposalV1 &tx_proposal,
    const wallet2::transfer_container &transfers,
    const carrot::carrot_and_legacy_account &account)
{
    const std::size_t n_inputs = tx_proposal.key_images_sorted.size();
    const std::size_t n_outputs = tx_proposal.normal_payment_proposals.size() +
        tx_proposal.selfsend_payment_proposals.size();
    const bool shared_ephemeral_pubkey = n_outputs == 2;

    CARROT_CHECK_AND_THROW(
        tx_proposal.tx_type != cryptonote::transaction_type::UNSET,
        carrot::missing_components,
        "make_pending_carrot_tx: tx proposal has unset tx type"
    );
    CARROT_CHECK_AND_THROW(n_inputs >= 1, carrot::too_few_inputs, "carrot tx proposal missing inputs");
    if (tx_proposal.tx_type  == cryptonote::transaction_type::STAKE || tx_proposal.tx_type == cryptonote::transaction_type::BURN) {
        CARROT_CHECK_AND_THROW(n_outputs == 1, carrot::too_few_outputs, "carrot tx proposal doesn't have correct number of outputs");
    } else {
        CARROT_CHECK_AND_THROW(n_outputs >= 2, carrot::too_few_outputs, "carrot tx proposal missing outputs");
    }

    const crypto::key_image &tx_first_key_image = tx_proposal.key_images_sorted.at(0);

    // collect non-burned transfers
    const std::unordered_map<crypto::key_image, std::size_t> unburned_transfers_by_key_image = 
        collect_non_burned_transfers_by_key_image(transfers);

    // collect selected_transfers and key_images string
    std::vector<std::size_t> selected_transfers;
    selected_transfers.reserve(n_inputs);
    std::stringstream key_images_string;
    for (size_t i = 0; i < n_inputs; ++i)
    {
        const crypto::key_image &ki = tx_proposal.key_images_sorted.at(i);
        const auto ki_it = unburned_transfers_by_key_image.find(ki);
        CHECK_AND_ASSERT_THROW_MES(ki_it != unburned_transfers_by_key_image.cend(),
            "make_pending_carrot_tx: unrecognized key image in transfers list");
        selected_transfers.push_back(ki_it->second);
        if (i)
            key_images_string << ' ';
        key_images_string << ki;
    }

    // get order of payment proposals
    std::vector<carrot::RCTOutputEnoteProposal> output_enote_proposals;
    carrot::encrypted_payment_id_t encrypted_payment_id;
    std::vector<std::pair<bool, std::size_t>> sorted_payment_proposal_indices;
    carrot::get_output_enote_proposals_from_proposal_v1(tx_proposal,
        &account.s_view_balance_dev,
        ///*s_view_balance_dev=*/nullptr,
        &account.k_view_incoming_dev,
        output_enote_proposals,
        encrypted_payment_id,
        &sorted_payment_proposal_indices);

    // calculate change_dst index based whether 2-out tx has a dummy output
    // change_dst is set to dummy in 2-out self-send, otherwise last self-send
    const bool has_2out_dummy = n_outputs == 2
        && tx_proposal.normal_payment_proposals.size() == 1
        && tx_proposal.normal_payment_proposals.at(0).amount == 0;
    CHECK_AND_ASSERT_THROW_MES(!tx_proposal.selfsend_payment_proposals.empty(),
        "make_pending_carrot_tx: carrot tx proposal missing a self-send proposal");
    const std::pair<bool, std::size_t> change_dst_index{!has_2out_dummy,
        has_2out_dummy ? 0 : tx_proposal.selfsend_payment_proposals.size()-1};

    // collect destinations and private tx keys for normal enotes
    //! @TODO: payment proofs for special self-send, perhaps generate d_e deterministically
    cryptonote::tx_destination_entry change_dts;
    std::vector<cryptonote::tx_destination_entry> dests;
    std::vector<crypto::secret_key> ephemeral_privkeys;
    dests.reserve(n_outputs);
    ephemeral_privkeys.reserve(n_outputs);
    for (const std::pair<bool, std::size_t> &payment_idx : sorted_payment_proposal_indices)
    {
        cryptonote::tx_destination_entry dest;

        const bool is_selfsend = payment_idx.first;
        if (is_selfsend)
        {
            dest = make_tx_destination_entry(tx_proposal.selfsend_payment_proposals.at(payment_idx.second),
                account.k_view_incoming_dev);
            ephemeral_privkeys.push_back(crypto::null_skey);
        }
        else // !is_selfsend
        {
            const carrot::CarrotPaymentProposalV1 &normal_payment_proposal =
                tx_proposal.normal_payment_proposals.at(payment_idx.second);
            dest = make_tx_destination_entry(normal_payment_proposal);
            ephemeral_privkeys.push_back(carrot::get_enote_ephemeral_privkey(normal_payment_proposal,
                carrot::make_carrot_input_context(tx_first_key_image)));
        }

        if (payment_idx == change_dst_index)
            change_dts = dest;
        else
            dests.push_back(dest);
    }

    // collect subaddr account and minor indices
    const std::uint32_t subaddr_account = transfers.at(selected_transfers.at(0)).m_subaddr_index.major;
    std::set<std::uint32_t> subaddr_indices;
    for (const size_t selected_transfer : selected_transfers)
    {
        const wallet2::transfer_details &td = transfers.at(selected_transfer);
        const std::uint32_t other_subaddr_account = td.m_subaddr_index.major;
        if (other_subaddr_account != subaddr_account)
        {
            MWARNING("make_pending_carrot_tx: conflicting account indices: " << subaddr_account << " vs "
                << other_subaddr_account);
        }
        subaddr_indices.insert(td.m_subaddr_index.minor);
    }

    wallet2::pending_tx ptx;
    ptx.tx.set_null();
    ptx.dust = 0;
    ptx.fee = tx_proposal.fee;
    ptx.dust_added_to_fee = false;
    ptx.change_dts = change_dts;
    ptx.selected_transfers = std::move(selected_transfers);
    ptx.key_images = key_images_string.str();
    if (ephemeral_privkeys.size() == 1) {
      ptx.tx_key = ephemeral_privkeys.at(0);
      ptx.additional_tx_keys.clear();
    } else if (ephemeral_privkeys.size() == 2 && shared_ephemeral_pubkey) {
      ptx.tx_key = (ephemeral_privkeys.at(0) == crypto::null_skey) ? ephemeral_privkeys.at(1) : ephemeral_privkeys.at(0);
      ptx.additional_tx_keys.clear();
    } else {
      ptx.tx_key = crypto::null_skey;
      ptx.additional_tx_keys = std::move(ephemeral_privkeys);
    }
    ptx.dests = std::move(dests);
    ptx.multisig_sigs = {};
    ptx.multisig_tx_key_entropy = {};
    ptx.subaddr_account = subaddr_account;
    ptx.subaddr_indices = std::move(subaddr_indices);
    ptx.construction_data = tx_proposal;
    return ptx;
}
//-------------------------------------------------------------------------------------------------------------------
wallet2::pending_tx finalize_all_proofs_from_transfer_details_as_pending_tx(
    const carrot::CarrotTransactionProposalV1 &tx_proposal,
    const wallet2::transfer_container &transfers,
    const wallet2 &w)
{
    wallet2::pending_tx ptx = make_pending_carrot_tx(tx_proposal,
        transfers,
        w.get_account());

    ptx.tx = finalize_all_proofs_from_transfer_details(
        tx_proposal,
        w
    );

    return ptx;
}
//-------------------------------------------------------------------------------------------------------------------
wallet2::pending_tx finalize_all_proofs_from_transfer_details_as_pending_tx(
    const carrot::CarrotTransactionProposalV1 &tx_proposal,
    const wallet2 &w)
{
    wallet2::transfer_container transfers;
    w.get_transfers(transfers);

    return finalize_all_proofs_from_transfer_details_as_pending_tx(
        tx_proposal,
        transfers,
        w);
}
//-------------------------------------------------------------------------------------------------------------------
} //namespace wallet
} //namespace tools
