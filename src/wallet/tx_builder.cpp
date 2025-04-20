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
#include "carrot_impl/tx_builder_outputs.h"
#include "carrot_impl/format_utils.h"
#include "carrot_impl/input_selection.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "common/container_helpers.h"

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

    return !td.m_spent
        && td.m_key_image_known
        && !td.m_key_image_partial
        && !td.m_frozen
        // && last_locked_block_index <= top_block_index
        && td.m_subaddr_index.major == from_account
        && (from_subaddresses.empty() || from_subaddresses.count(td.m_subaddr_index.minor) == 1)
        && td.amount() >= ignore_below
        && td.amount() <= ignore_above
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
            .subaddr_index = {subaddr_index, carrot::AddressDeriveType::PreCarrot} // @TODO: handle carrot
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
            .randomness = carrot::gen_janus_anchor()
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
        {payment_proposal.destination.address_spend_pubkey, payment_proposal.destination.address_view_pubkey},
        payment_proposal.destination.is_subaddress);
    dest.is_integrated = payment_proposal.destination.payment_id != carrot::null_payment_id;
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

   return cryptonote::tx_destination_entry(payment_proposal.proposal.amount,
        {payment_proposal.proposal.destination_address_spend_pubkey, address_view_pubkey},
        payment_proposal.subaddr_index.index.is_subaddress());
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
            break;
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
        const wallet2::transfer_details& td = transfers.at(i);
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
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_transfer(
    const wallet2::transfer_container &transfers,
    const std::unordered_map<crypto::public_key, cryptonote::subaddress_index> &subaddress_map,
    std::vector<cryptonote::tx_destination_entry> dsts,
    const rct::xmr_amount fee_per_weight,
    const std::vector<uint8_t> &extra,
    const std::uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices,
    const rct::xmr_amount ignore_above,
    const rct::xmr_amount ignore_below,
    wallet2::unique_index_container subtract_fee_from_outputs,
    const std::uint64_t top_block_index,
    const cryptonote::account_keys &acc_keys)
{
    wallet2::transfer_container unused_transfers(transfers);

    std::vector<carrot::CarrotTransactionProposalV1> tx_proposals;
    tx_proposals.reserve(dsts.size() / (FCMP_PLUS_PLUS_MAX_OUTPUTS - 1) + 1);

    const crypto::public_key change_address_spend_pubkey
        = find_change_address_spend_pubkey(subaddress_map, subaddr_account);

    while (!dsts.empty())
    {
        const std::size_t num_dsts_to_complete = std::min<std::size_t>(dsts.size(), FCMP_PLUS_PLUS_MAX_OUTPUTS - 1);

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
                subaddress_map);
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
            ignore_above,
            ignore_below,
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
            extra,
            std::move(select_inputs),
            change_address_spend_pubkey,
            {{subaddr_account, 0}, carrot::AddressDeriveType::PreCarrot}, //! @TODO: handle Carrot keys
            subtractable_normal_payment_proposals,
            subtractable_selfsend_payment_proposals,
            tx_proposal);

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
    const std::uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices,
    const wallet2::unique_index_container &subtract_fee_from_outputs)
{
    wallet2::transfer_container transfers;
    w.get_transfers(transfers);

    const bool use_per_byte_fee = w.use_fork_rules(HF_VERSION_PER_BYTE_FEE, 0);
    CHECK_AND_ASSERT_THROW_MES(use_per_byte_fee,
        "make_carrot_transaction_proposals_wallet2_transfer: not using per-byte base fee");

    const rct::xmr_amount fee_per_weight = w.get_base_fee(priority);

    const std::uint64_t current_chain_height = w.get_blockchain_current_height();
    CHECK_AND_ASSERT_THROW_MES(current_chain_height > 0,
        "make_carrot_transaction_proposals_wallet2_transfer: chain height is 0, there is no top block");
    const std::uint64_t top_block_index = current_chain_height - 1;

    return make_carrot_transaction_proposals_wallet2_transfer(
        transfers,
        w.get_subaddress_map_ref(),
        dsts,
        fee_per_weight,
        extra,
        subaddr_account,
        subaddr_indices,
        w.ignore_outputs_above(),
        w.ignore_outputs_below(),
        subtract_fee_from_outputs,
        top_block_index,
        w.get_account().get_keys());
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep(
    const wallet2::transfer_container &transfers,
    const std::unordered_map<crypto::public_key, cryptonote::subaddress_index> &subaddress_map,
    const std::vector<crypto::key_image> &input_key_images,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests,
    const rct::xmr_amount fee_per_weight,
    const std::vector<uint8_t>& extra,
    const std::uint64_t top_block_index,
    const cryptonote::account_keys &acc_keys)
{
    const size_t n_inputs = input_key_images.size();
    CHECK_AND_ASSERT_THROW_MES(n_inputs,
        __func__ << ": no key images provided");
    CHECK_AND_ASSERT_THROW_MES(n_dests,
        __func__ << ": n_dests is zero");

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
        = find_change_address_spend_pubkey(subaddress_map, subaddr_account);

    // get 1 payment proposal corresponding to (address, is_subaddres)
    std::vector<carrot::CarrotPaymentProposalV1> normal_payment_proposal;
    std::vector<carrot::CarrotPaymentProposalVerifiableSelfSendV1> selfsend_payment_proposal;
    const bool is_selfsend_dest = build_payment_proposals(normal_payment_proposal,
        selfsend_payment_proposal,
        cryptonote::tx_destination_entry(/*amount=*/0, address, is_subaddress),
        subaddress_map);
    CHECK_AND_ASSERT_THROW_MES((is_selfsend_dest && selfsend_payment_proposal.size() == 1)
            || (!is_selfsend_dest && normal_payment_proposal.size() == 1),
        __func__ << ": BUG in build_payment_proposals: incorrect count for payment proposal lists");

    // in/out/tx count calculations
    const size_t max_dsts_per_tx = FCMP_PLUS_PLUS_MAX_OUTPUTS - (size_t(!is_selfsend_dest));
    const size_t min_n_dests = div_ceil<size_t>(n_inputs, FCMP_PLUS_PLUS_MAX_INPUTS);
    const size_t max_n_dests = n_inputs * max_dsts_per_tx;
    CHECK_AND_ASSERT_THROW_MES(n_dests >= min_n_dests,
        __func__ << ": not enough destinations (" << n_dests << ") for number of inputs to be spent ("
        << n_inputs << ")");
    CHECK_AND_ASSERT_THROW_MES(n_dests <= max_n_dests,
        __func__ << ": too many destinations (" << n_dests << ") for number of inputs to be spent ("
        << n_inputs << ")");

    const size_t n_txs = std::max(div_ceil(n_dests, max_dsts_per_tx), min_n_dests);
    CHECK_AND_ASSERT_THROW_MES(n_txs, __func__ << ": BUG: calculated target num of txs to be 0");

    struct sweep_tx_outlay_t
    {
        std::vector<carrot::CarrotSelectedInput> selected_inputs;
        size_t n_tx_dests;
    };

    // build list of sweep_tx_outlay_t's
    std::vector<sweep_tx_outlay_t> tx_outlays(n_txs);
    size_t input_idx = 0;
    for (size_t tx_idx = 0; tx_idx < tx_outlays.size(); ++tx_idx)
    {
        sweep_tx_outlay_t &tx_outlay = tx_outlays[tx_idx];

        const size_t n_remaining_inputs = n_inputs - input_idx;
        const size_t n_tx_inputs = std::min(div_ceil(n_inputs, n_txs), n_remaining_inputs);
        const size_t n_tx_dests = n_dests / n_txs + ((tx_idx < (n_dests % n_txs)) ? 1 : 0);

        const size_t max_input_idx = input_idx + n_tx_inputs;
        tx_outlay.selected_inputs.reserve(n_tx_inputs);
        for (; input_idx < max_input_idx; ++input_idx)
            tx_outlay.selected_inputs.push_back({input_amounts.at(input_idx), input_key_images.at(input_idx)});

        tx_outlay.n_tx_dests = n_tx_dests;
    }

    //! @TODO: sanity check tx_outlays

    // convert sweep outlays into transaction proposals
    std::vector<carrot::CarrotTransactionProposalV1> tx_proposals;
    tx_proposals.reserve(tx_outlays.size());
    for (sweep_tx_outlay_t &sweep_outlay : tx_outlays)
    {
        std::vector<carrot::CarrotPaymentProposalV1> tx_normal_payment_proposals;
        std::vector<carrot::CarrotPaymentProposalVerifiableSelfSendV1> tx_selfsend_payment_proposals;
        if (is_selfsend_dest)
            tx_selfsend_payment_proposals.resize(sweep_outlay.n_tx_dests, selfsend_payment_proposal.at(0));
        else
            tx_normal_payment_proposals.resize(sweep_outlay.n_tx_dests, normal_payment_proposal.at(0));

        // if a 2-selfsend, 2-out tx, flip one of the enote types to get unique derivations
        if (tx_selfsend_payment_proposals.size() == 2)
            tx_selfsend_payment_proposals.back().proposal.enote_type = carrot::CarrotEnoteType::CHANGE;

        carrot::CarrotTransactionProposalV1 tx_proposal;
        carrot::make_carrot_transaction_proposal_v1_sweep(tx_normal_payment_proposals,
            tx_selfsend_payment_proposals,
            fee_per_weight,
            extra,
            std::move(sweep_outlay.selected_inputs),
            change_address_spend_pubkey,
            {{subaddr_account, 0}, carrot::AddressDeriveType::PreCarrot}, //! @TODO: handle Carrot keys
            tx_proposal);

        tx_proposals.push_back(std::move(tx_proposal));
    }

    return tx_proposals;
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep(
    wallet2 &w,
    const std::vector<crypto::key_image> &input_key_images,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests,
    const std::uint32_t priority,
    const std::vector<uint8_t> &extra)
{
    wallet2::transfer_container transfers;
    w.get_transfers(transfers);

    const rct::xmr_amount fee_per_weight = w.get_base_fee(priority);

    const std::uint64_t current_chain_height = w.get_blockchain_current_height();
    CHECK_AND_ASSERT_THROW_MES(current_chain_height > 0,
        "make_carrot_transaction_proposals_wallet2_sweep: chain height is 0, there is no top block");
    const std::uint64_t top_block_index = current_chain_height - 1;

    return make_carrot_transaction_proposals_wallet2_sweep(
        transfers,
        w.get_subaddress_map_ref(),
        input_key_images,
        address,
        is_subaddress,
        n_dests,
        fee_per_weight,
        extra,
        top_block_index,
        w.get_account().get_keys());
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep_all(
    const wallet2::transfer_container &transfers,
    const std::unordered_map<crypto::public_key, cryptonote::subaddress_index> &subaddress_map,
    const rct::xmr_amount only_below,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests,
    const rct::xmr_amount fee_per_weight,
    const std::vector<uint8_t> &extra,
    const std::uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices,
    const std::uint64_t top_block_index,
    const cryptonote::account_keys &acc_keys)
{
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
                0,
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
        transfers,
        subaddress_map,
        input_key_images,
        address,
        is_subaddress,
        n_dests,
        fee_per_weight,
        extra,
        top_block_index,
        acc_keys);
}
//-------------------------------------------------------------------------------------------------------------------
std::vector<carrot::CarrotTransactionProposalV1> make_carrot_transaction_proposals_wallet2_sweep_all(
    wallet2 &w,
    const rct::xmr_amount only_below,
    const cryptonote::account_public_address &address,
    const bool is_subaddress,
    const size_t n_dests,
    const std::uint32_t priority,
    const std::vector<uint8_t> &extra,
    const std::uint32_t subaddr_account,
    const std::set<uint32_t> &subaddr_indices)
{
    wallet2::transfer_container transfers;
    w.get_transfers(transfers);

    const rct::xmr_amount fee_per_weight = w.get_base_fee(priority);

    const std::uint64_t current_chain_height = w.get_blockchain_current_height();
    CHECK_AND_ASSERT_THROW_MES(current_chain_height > 0,
        "make_carrot_transaction_proposals_wallet2_sweep: chain height is 0, there is no top block");
    const std::uint64_t top_block_index = current_chain_height - 1;

    return make_carrot_transaction_proposals_wallet2_sweep_all(
        transfers,
        w.get_subaddress_map_ref(),
        only_below,
        address,
        is_subaddress,
        n_dests,
        fee_per_weight,
        extra,
        subaddr_account,
        subaddr_indices,
        top_block_index,
        w.get_account().get_keys());
}
//-------------------------------------------------------------------------------------------------------------------
wallet2::pending_tx make_pending_carrot_tx(const carrot::CarrotTransactionProposalV1 &tx_proposal,
    const wallet2::transfer_container &transfers,
    const cryptonote::account_keys &acc_keys)
{
    const std::size_t n_inputs = tx_proposal.key_images_sorted.size();
    const std::size_t n_outputs = tx_proposal.normal_payment_proposals.size() +
        tx_proposal.selfsend_payment_proposals.size();
    const bool shared_ephemeral_pubkey = n_outputs == 2;

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

    //! @TODO: HW device
    carrot::view_incoming_key_ram_borrowed_device k_view_dev(acc_keys.m_view_secret_key);

    // get order of payment proposals
    std::vector<carrot::RCTOutputEnoteProposal> output_enote_proposals;
    carrot::encrypted_payment_id_t encrypted_payment_id;
    std::vector<std::pair<bool, std::size_t>> sorted_payment_proposal_indices;
    carrot::get_output_enote_proposals_from_proposal_v1(tx_proposal,
        /*s_view_balance_dev=*/nullptr,
        &k_view_dev,
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
                k_view_dev);
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
    ptx.tx_key = shared_ephemeral_pubkey ? ephemeral_privkeys.at(0) : crypto::null_skey;
    if (shared_ephemeral_pubkey)
        ptx.additional_tx_keys = std::move(ephemeral_privkeys);
    else
        ptx.additional_tx_keys.clear();
    ptx.dests = std::move(dests);
    ptx.multisig_sigs = {};
    ptx.multisig_tx_key_entropy = {};
    ptx.subaddr_account = subaddr_account;
    ptx.subaddr_indices = std::move(subaddr_indices);
    ptx.construction_data = tx_proposal;
    return ptx;
}
//-------------------------------------------------------------------------------------------------------------------
} //namespace wallet
} //namespace tools
