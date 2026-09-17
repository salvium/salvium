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

#include "unit_tests_utils.h"
#include "gtest/gtest.h"

#include <chrono>

#include "carrot_core/config.h"
#include "carrot_mock_helpers.h"
#include "common/container_helpers.h"
#include "ringct/rctOps.h"
#include "ringct/rctSigs.h"
#include "tx_construction_helpers.h"
#include "wallet/tx_builder.h"
#include "serialization/binary_utils.h"

class wallet_accessor_test
{
public:
    static bool should_expand(const tools::wallet2 &wallet, cryptonote::subaddress_index index)
    { return wallet.should_expand(index); }

    static tools::wallet2::tx_entry_data get_tx_entries(tools::wallet2 &wallet, const std::unordered_set<crypto::hash> &txids)
    {
        return wallet.get_tx_entries(txids);
    }

    static void set_height(tools::wallet2 &wallet, uint64_t height)
    {
        while (wallet.m_blockchain.size() < height)
            wallet.m_blockchain.push_back(crypto::null_hash);
    }

    static void rebuild_transfers(tools::wallet2 &wallet)
    { wallet.rebuild_transfer_maps(); }

    static void spend(tools::wallet2 &wallet, size_t index, uint64_t height = 0)
    { wallet.set_spent(index, height); }

    static void add_pending(tools::wallet2 &wallet, const cryptonote::transaction &tx,
        uint64_t change, uint32_t account, const std::vector<cryptonote::tx_destination_entry> &dests = {})
    { wallet.add_unconfirmed_tx(tx, 0, dests, crypto::null_hash, change, account, {0}); }

    static void update_pending(tools::wallet2 &wallet, const cryptonote::transaction &tx, bool in_pool)
    {
        const auto txid = cryptonote::get_transaction_hash(tx);
        auto &pending = wallet.m_unconfirmed_txs.at(txid);
        const auto now = std::chrono::system_clock::from_time_t(pending.m_sent_time) + std::chrono::hours{1};
        wallet.process_unconfirmed_transfer(false, txid, pending, in_pool, now, true);
    }

    static void confirm(tools::wallet2 &wallet, const cryptonote::transaction &tx, uint64_t height)
    { wallet.process_unconfirmed(cryptonote::get_transaction_hash(tx), tx, height); }

    static void initialize(tools::wallet2 &wallet, const tools::wallet2::transfer_container &transfers, bool generate = true)
    {
        if (generate) wallet.generate("", "");
        wallet.m_transfers = transfers;
        wallet.m_transfers_indices.clear();
        for (std::size_t i = 0; i < wallet.m_transfers.size(); ++i)
        {
            const auto &td = wallet.m_transfers.at(i);
            while (wallet.get_num_subaddress_accounts() <= td.m_subaddr_index.major)
                wallet.add_subaddress_account("test account");
            while (wallet.get_num_subaddresses(td.m_subaddr_index.major) <= td.m_subaddr_index.minor)
                wallet.add_subaddress(td.m_subaddr_index.major, "test address");
            wallet.m_transfers_indices[td.asset_type].insert(i);
        }
    }
};

static tools::wallet2::transfer_details gen_transfer_details()
{
    cryptonote::transaction carrot_tx;
    // Use the production token path here: unlike SAL1, token inputs do not
    // require a daemon-provided 16-member decoy ring in this isolated unit
    // fixture. SAL1 ring construction is covered by the functional suite.
    carrot_tx.vin.push_back(cryptonote::txin_to_key{.asset_type = "salTEST"});
    carrot_tx.vout.push_back(cryptonote::tx_out{.target = cryptonote::txout_to_carrot_v1{.asset_type = "salTEST"}});

    return tools::wallet2::transfer_details{
        .m_block_height = crypto::rand_idx<uint64_t>(CRYPTONOTE_MAX_BLOCK_NUMBER),
        .m_tx = carrot_tx,
        .m_txid = crypto::rand<crypto::hash>(),
        .m_internal_output_index = 0,
        .m_global_output_index = crypto::rand_idx<uint64_t>(CRYPTONOTE_MAX_BLOCK_NUMBER * 1000ull),
        .m_spent = false,
        .m_frozen = false,
        .m_spent_height = 0,
        .m_key_image = crypto::key_image{rct::rct2pk(rct::pkGen())},
        .m_mask = rct::skGen(),
        .m_amount = crypto::rand_range<rct::xmr_amount>(COIN, 2 * COIN), // [1, 2] XMR i.e. [1e12, 2e12] pXMR
        .m_rct = true,
        .m_key_image_known = true,
        .m_key_image_request = false,
        .m_pk_index = 1,
        .m_subaddr_index = {},
        .m_key_image_partial = false,
        .m_multisig_k = {},
        .m_multisig_info = {},
        .m_uses = {},
        .asset_type = "salTEST",
    };
}

namespace
{
tools::wallet2::transfer_details balance_output(uint64_t amount, const std::string &asset = "SAL1",
    uint32_t account = 0, uint32_t address = 0)
{
    auto output = gen_transfer_details();
    output.m_block_height = 1;
    output.m_amount = amount;
    output.asset_type = asset;
    output.m_subaddr_index = {account, address};
    output.m_tx.type = cryptonote::transaction_type::TRANSFER;
    output.m_tx.source_asset_type = output.m_tx.destination_asset_type = asset;
    auto &target = boost::get<cryptonote::txout_to_carrot_v1>(output.m_tx.vout.front().target);
    target.key = rct::rct2pk(rct::pkGen());
    target.asset_type = asset;
    return output;
}

cryptonote::transaction balance_stake(const tools::wallet2::transfer_details &input,
    uint64_t principal, cryptonote::transaction_type type = cryptonote::transaction_type::STAKE)
{
    cryptonote::transaction tx;
    tx.version = 2;
    tx.type = type;
    tx.source_asset_type = tx.destination_asset_type = input.asset_type;
    tx.amount_burnt = principal;
    tx.vin.push_back(cryptonote::txin_to_key{.asset_type = input.asset_type,
        .key_offsets = {1}, .k_image = input.m_key_image});
    tx.vout = balance_output(0, input.asset_type).m_tx.vout;
    return tx;
}
}

TEST(wallet_balance, pending_stake_preserves_principal_and_failed_stake_restores_inputs)
{
    for (const auto type : {cryptonote::transaction_type::STAKE, cryptonote::transaction_type::AUDIT})
    {
        SCOPED_TRACE(unsigned(type));
        tools::wallet2 wallet;
        wallet.set_offline();
        auto old_stake = balance_output(0);
        old_stake.m_tx.type = type;
        old_stake.m_tx.amount_burnt = 518532 * COIN;
        const auto input = balance_output(22511770091014ULL);
        const auto remainder = balance_output(989850);
        wallet_accessor_test::initialize(wallet, {old_stake, input, remainder});
        wallet_accessor_test::rebuild_transfers(wallet);
        wallet_accessor_test::set_height(wallet, 100);
        ASSERT_EQ(74364971080864ULL, wallet.balance(0, "SAL1", false));
        ASSERT_EQ(22511771080864ULL, wallet.unlocked_balance(0, "SAL1", false));

        const auto tx = balance_stake(input, 225117 * COIN, type);
        // Carrot staking has no payment destinations; the sole output is change.
        wallet_accessor_test::add_pending(wallet, tx, 60451114, 0);
        wallet_accessor_test::spend(wallet, 1);
        for (bool in_pool : {false, true})
        {
            if (in_pool) wallet_accessor_test::update_pending(wallet, tx, true);
            EXPECT_EQ(74364961440964ULL, wallet.balance(0, "SAL1", false));
            EXPECT_EQ(74364961440964ULL, wallet.balance_all(false, "SAL1"));
            EXPECT_EQ(74364961440964ULL, wallet.balance_all(false).at("SAL1"));
            EXPECT_EQ(989850u, wallet.unlocked_balance(0, "SAL1", false));
            EXPECT_EQ(61440964u, wallet.balance_per_subaddress(0, "SAL1", false).at(0));
            // Strict balances ignore all unconfirmed spending and change.
            EXPECT_EQ(74364971080864ULL, wallet.balance(0, "SAL1", true));
        }
        wallet_accessor_test::update_pending(wallet, tx, false);
        EXPECT_EQ(74364971080864ULL, wallet.balance(0, "SAL1", false));
        EXPECT_EQ(22511771080864ULL, wallet.unlocked_balance(0, "SAL1", false));
    }
}

TEST(wallet_balance, confirmed_stake_keeps_change_through_unlock_and_payout)
{
    for (const auto type : {cryptonote::transaction_type::STAKE, cryptonote::transaction_type::AUDIT})
    {
        SCOPED_TRACE(unsigned(type));
        tools::wallet2 wallet;
        wallet.set_offline();
        auto input = balance_output(20 * COIN, "SAL1", 1, 2);
        wallet_accessor_test::initialize(wallet, {input});
        wallet_accessor_test::set_height(wallet, 100);
        const auto tx = balance_stake(input, 15 * COIN, type);
        const uint64_t fee = COIN / 100, change_amount = 5 * COIN - fee;
        wallet_accessor_test::add_pending(wallet, tx, change_amount, 1);
        wallet_accessor_test::spend(wallet, 0);
        EXPECT_EQ(20 * COIN - fee, wallet.balance(1, "SAL1", false));
        wallet_accessor_test::confirm(wallet, tx, 100);

        input.m_spent = true;
        input.m_spent_height = 100;
        auto change = balance_output(change_amount, "SAL1", 1);
        change.m_tx = tx;
        change.m_block_height = 100;
        // The confirmed stake output holds change, not the staked principal.
        wallet_accessor_test::initialize(wallet, {input, change}, false);
        wallet_accessor_test::rebuild_transfers(wallet);
        for (bool strict : {false, true})
        {
            EXPECT_EQ(20 * COIN - fee, wallet.balance(1, "SAL1", strict));
            auto balances = wallet.balance_per_subaddress(1, "SAL1", strict);
            EXPECT_EQ(change_amount, balances[0]);
            EXPECT_EQ(0u, wallet.unlocked_balance(1, "SAL1", strict));
        }
        wallet_accessor_test::set_height(wallet, 100 + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
        EXPECT_EQ(change_amount, wallet.unlocked_balance(1, "SAL1", false));

        auto payout = balance_output(16 * COIN, "SAL1", 1);
        payout.m_tx.type = cryptonote::transaction_type::PROTOCOL;
        payout.m_td_origin_idx = 1;
        payout.m_block_height = 200;
        wallet_accessor_test::initialize(wallet, {input, change, payout}, false);
        wallet_accessor_test::rebuild_transfers(wallet);
        wallet_accessor_test::set_height(wallet, 200);
        EXPECT_EQ(21 * COIN - fee, wallet.balance(1, "SAL1", false));
        EXPECT_EQ(change_amount, wallet.unlocked_balance(1, "SAL1", false));
        wallet_accessor_test::set_height(wallet, 200 + CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW);
        EXPECT_EQ(21 * COIN - fee, wallet.unlocked_balance(1, "SAL1", false));
    }
}

TEST(wallet_balance, existing_stake_change_is_counted_once_across_wallet_reloads)
{
    const auto directory = boost::filesystem::temp_directory_path() /
        boost::filesystem::unique_path("salvium-stake-balance-%%%%-%%%%-%%%%");
    boost::filesystem::create_directory(directory);
    auto cleanup = epee::misc_utils::create_scope_leave_handler([&] {
        boost::system::error_code error;
        boost::filesystem::remove_all(directory, error);
    });
    const auto filename = (directory / "wallet").string();

    // Upgrading also restores unspent change from older active stakes. The
    // old display omitted this change, so its total is not a valid baseline
    // for checking that a newly submitted stake deducts only its fee.
    auto first_stake = balance_output(73387041);
    auto second_stake = balance_output(65016408);
    for (auto *stake : {&first_stake, &second_stake})
    {
        stake->m_tx.type = cryptonote::transaction_type::STAKE;
        stake->m_tx.amount_burnt = 259266 * COIN;
    }
    auto input = balance_output(22511770091014ULL);
    const auto remainder = balance_output(989850);
    const auto tx = balance_stake(input, 225117 * COIN);
    const uint64_t total_before = 74365109484313ULL;
    const uint64_t fee = 9639900;
    const uint64_t total_after = 74365099844413ULL;

    {
        tools::wallet2 wallet;
        wallet.set_offline();
        wallet_accessor_test::initialize(wallet, {first_stake, second_stake, input, remainder});
        wallet_accessor_test::rebuild_transfers(wallet);
        wallet_accessor_test::set_height(wallet, 100);
        ASSERT_EQ(total_before, wallet.balance(0, "SAL1", false));
        ASSERT_EQ(22511909484313ULL, wallet.unlocked_balance(0, "SAL1", false));
        wallet_accessor_test::add_pending(wallet, tx, 60451114, 0);
        wallet_accessor_test::spend(wallet, 2);
        ASSERT_EQ(total_before - fee, wallet.balance(0, "SAL1", false));
        ASSERT_EQ(total_after, wallet.balance(0, "SAL1", false));
        wallet.store_to(filename, "");
    }

    // Exercise the real cache loading path while the stake is pending.
    for (unsigned reload = 0; reload < 2; ++reload)
    {
        tools::wallet2 wallet;
        wallet.set_offline();
        wallet.load(filename, "");
        ASSERT_FALSE(wallet.force_rescan());
        ASSERT_EQ(total_after, wallet.balance(0, "SAL1", false));
        ASSERT_EQ(total_before, wallet.balance(0, "SAL1", true));
        ASSERT_EQ(139393299u, wallet.unlocked_balance(0, "SAL1", false));
        wallet.store();
    }

    {
        tools::wallet2 wallet;
        wallet.set_offline();
        wallet.load(filename, "");
        wallet_accessor_test::confirm(wallet, tx, 100);
        input.m_spent = true;
        input.m_spent_height = 100;
        auto change = balance_output(60451114);
        change.m_tx = tx;
        change.m_block_height = 100;
        wallet_accessor_test::initialize(wallet, {first_stake, second_stake, input, remainder, change}, false);
        wallet_accessor_test::rebuild_transfers(wallet);
        wallet_accessor_test::set_height(wallet, 100 + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
        wallet.store();
    }

    // Confirmation replaces the pending principal with a yield lock. Neither
    // that principal nor any of the three change outputs may accumulate on load.
    for (unsigned reload = 0; reload < 2; ++reload)
    {
        tools::wallet2 wallet;
        wallet.set_offline();
        wallet.load(filename, "");
        ASSERT_FALSE(wallet.force_rescan());
        EXPECT_EQ(total_after, wallet.balance(0, "SAL1", false));
        EXPECT_EQ(total_after, wallet.balance(0, "SAL1", true));
        EXPECT_EQ(total_after, wallet.balance_all(false, "SAL1"));
        EXPECT_EQ(199844413u, wallet.unlocked_balance(0, "SAL1", false));
        EXPECT_EQ(199844413u, wallet.balance_per_subaddress(0, "SAL1", false).at(0));
        wallet.store();
    }
}

TEST(wallet_balance, pending_principal_is_counted_once_for_its_account_and_asset)
{
    tools::wallet2 wallet;
    wallet.set_offline();
    const auto input = balance_output(20 * COIN, "SAL1", 1);
    const auto other_asset = balance_output(7 * COIN, "SAL", 1);
    const auto other_account = balance_output(3 * COIN);
    wallet_accessor_test::initialize(wallet, {input, other_asset, other_account});
    wallet_accessor_test::set_height(wallet, 100);
    const auto tx = balance_stake(input, 19 * COIN);
    // Legacy destination metadata can name our address even though staking
    // burns that destination and creates only the change output.
    cryptonote::tx_destination_entry dest(19 * COIN,
        wallet.get_subaddress({1, 0}), true);
    dest.asset_type = "SAL1";
    wallet_accessor_test::add_pending(wallet, tx, 0, 1, {dest});
    wallet_accessor_test::spend(wallet, 0);
    EXPECT_EQ(19 * COIN, wallet.balance(1, "SAL1", false));
    EXPECT_EQ(0u, wallet.balance_per_subaddress(1, "SAL1", false).at(0));
    EXPECT_EQ(0u, wallet.unlocked_balance(1, "SAL1", false));
    EXPECT_EQ(7 * COIN, wallet.balance(1, "SAL", false));
    EXPECT_EQ(3 * COIN, wallet.balance(0, "SAL1", false));
    EXPECT_EQ(22 * COIN, wallet.balance_all(false, "SAL1"));
    EXPECT_EQ(23 * COIN, wallet.balance_all(true, "SAL1"));
}

TEST(wallet_balance, pending_burn_does_not_preserve_principal)
{
    tools::wallet2 wallet;
    wallet.set_offline();
    const auto input = balance_output(20 * COIN);
    wallet_accessor_test::initialize(wallet, {input});
    const auto tx = balance_stake(input, 15 * COIN, cryptonote::transaction_type::BURN);
    wallet_accessor_test::add_pending(wallet, tx, 4 * COIN, 0);
    wallet_accessor_test::spend(wallet, 0);
    EXPECT_EQ(4 * COIN, wallet.balance(0, "SAL1", false));
    EXPECT_EQ(20 * COIN, wallet.balance(0, "SAL1", true));
}

static bool compare_transfer_to_selected_input(const tools::wallet2::transfer_details &td,
    const carrot::CarrotSelectedInput &input)
{
    return td.m_amount == input.amount && td.m_key_image == input.key_image;
}

TEST(wallet_tx_builder, input_selection_basic)
{
    std::map<std::size_t, rct::xmr_amount> fee_by_input_count;
    for (size_t i = carrot::CARROT_MIN_TX_INPUTS; i <= carrot::CARROT_MAX_TX_INPUTS; ++i)
        fee_by_input_count[i] = 30680000 * i - i*i;

    const boost::multiprecision::uint128_t nominal_output_sum = 4444444444444; // 4.444... XMR 

    // add 10 random transfers
    tools::wallet2::transfer_container transfers;
    for (size_t i = 0; i < 10; ++i)
    {
        tools::wallet2::transfer_details &td = transfers.emplace_back();
        td = gen_transfer_details();
        td.m_block_height = transfers.size(); // small ascending block heights
    }

    // modify one so that it funds the transfer all by itself
    const size_t rand_idx = crypto::rand_idx(transfers.size());
    transfers[rand_idx].m_amount = boost::numeric_cast<rct::xmr_amount>(nominal_output_sum +
            fee_by_input_count.crbegin()->second +
            crypto::rand_range<rct::xmr_amount>(0, COIN));

    // set such that all transfers are unlocked
    const std::uint64_t top_block_index = transfers.size() + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;

    // make input selector
    std::set<size_t> selected_transfer_indices;
    const carrot::select_inputs_func_t input_selector = tools::wallet::make_wallet2_single_transfer_input_selector(
        transfers,
        /*from_account=*/0,
        /*from_subaddresses=*/{},
        /*ignore_above=*/std::numeric_limits<rct::xmr_amount>::max(),
        /*ignore_below=*/0,
        top_block_index,
        /*allow_carrot_external_inputs_in_normal_transfers=*/true,
        /*allow_pre_carrot_inputs_in_normal_transfers=*/true,
        /*asset_type=*/"salTEST",
        selected_transfer_indices
    );

    // select inputs
    std::vector<carrot::CarrotSelectedInput> selected_inputs;
    input_selector(nominal_output_sum,
        fee_by_input_count,
        1,                             // number of normal payment proposals
        1,                             // number of self-send payment proposals
        selected_inputs);

    ASSERT_TRUE(1 == selected_inputs.size() || 2 == selected_inputs.size()); // assert one or two inputs selected
    ASSERT_EQ(selected_inputs.size(), selected_transfer_indices.size());
    ASSERT_LT(*selected_transfer_indices.crbegin(), transfers.size());

    // Assert content of selected inputs matches the content in `transfers`
    std::set<size_t> matched_transfer_indices;
    for (const carrot::CarrotSelectedInput &selected_input : selected_inputs)
    {
        for (const size_t selected_transfer_index : selected_transfer_indices)
        {
            if (compare_transfer_to_selected_input(transfers.at(selected_transfer_index), selected_input))
            {
                const auto insert_res = matched_transfer_indices.insert(selected_transfer_index);
                if (insert_res.second)
                    break;
            }
        }
    }
    ASSERT_EQ(selected_transfer_indices.size(), matched_transfer_indices.size());
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, rejects_empty_destination_list)
{
    tools::wallet2 w;

    EXPECT_THROW(
        tools::wallet::make_carrot_transaction_proposals_wallet2_transfer(
            w,
            /*dsts=*/{},
            /*fee_per_weight=*/1,
            /*fee_quantization_mask=*/5,
            /*extra=*/{},
            /*tx_type=*/cryptonote::transaction_type::TRANSFER,
            /*subaddr_account=*/0,
            /*subaddr_indices=*/{},
            /*subtract_fee_from_outputs=*/{},
            /*top_block_index=*/0),
        tools::error::zero_destination);
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_transfer_1)
{
    cryptonote::account_base alice;
    alice.generate();
    cryptonote::account_base bob;
    bob.generate();

    const tools::wallet2::transfer_container transfers{
        gen_transfer_details()};

    const rct::xmr_amount out_amount = rct::randXmrAmount(transfers.front().amount() / 2);

    std::vector<cryptonote::tx_destination_entry> dsts{
        cryptonote::tx_destination_entry(out_amount, bob.get_keys().m_account_address, false)
    };
    dsts.front().asset_type = "salTEST";

    const uint64_t top_block_index = std::max(transfers.front().m_block_height, transfers.back().m_block_height)
        + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;

    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_transfer(
        w,
        dsts,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        /*subaddr_account=*/0,
        /*subaddr_indices=*/{},
        {},
        top_block_index);

    ASSERT_EQ(1, tx_proposals.size());
    const carrot::CarrotTransactionProposalV1 tx_proposal = tx_proposals.at(0);

    std::vector<crypto::key_image> expected_key_images{transfers.front().m_key_image};

    // Assert basic length facts about tx proposal
    ASSERT_EQ(1, tx_proposal.key_images_sorted.size()); // we always try 2 when available
    EXPECT_EQ(expected_key_images, tx_proposal.key_images_sorted);
    ASSERT_EQ(1, tx_proposal.normal_payment_proposals.size());
    ASSERT_EQ(1, tx_proposal.selfsend_payment_proposals.size());
    EXPECT_EQ(0, tx_proposal.extra.size());

    // Assert amounts
    EXPECT_EQ(out_amount, tx_proposal.normal_payment_proposals.front().amount);
    // Token outputs balance in the token asset; the reported fee is paid by
    // the separate SAL1 fee path and must not be subtracted from token change.
    EXPECT_GT(tx_proposal.fee, 0);
    EXPECT_EQ(out_amount + tx_proposal.selfsend_payment_proposals.front().proposal.amount,
        transfers.front().amount());
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_transfer_2)
{
    carrot::mock::mock_carrot_and_legacy_keys alice;
    alice.generate();
    carrot::mock::mock_carrot_and_legacy_keys bob;
    bob.generate();

    static constexpr uint32_t spending_subaddr_account = 2;
    static_assert(spending_subaddr_account);

    tools::wallet2::transfer_container transfers;
    std::uint64_t top_block_index = 0;
    std::unordered_map<crypto::key_image, std::size_t> allowed_transfers;
    for (size_t i = 0; i < FCMP_PLUS_PLUS_MAX_INPUTS + 2; ++i)
    {
        tools::wallet2::transfer_details &td = transfers.emplace_back();
        td = gen_transfer_details();
        td.m_subaddr_index.major = (i % 2 == 0) ? spending_subaddr_account : (spending_subaddr_account - 1);
        td.m_subaddr_index.minor = crypto::rand_range<std::uint32_t>(0, carrot::mock::MAX_SUBADDRESS_MINOR_INDEX);
        top_block_index = std::max(top_block_index, td.m_block_height);

        if (td.m_subaddr_index.major == spending_subaddr_account)
            allowed_transfers.emplace(td.m_key_image, i);
    }
    top_block_index += CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;

    const rct::xmr_amount out_amount = COIN * 3 / 4;

    std::vector<cryptonote::tx_destination_entry> dsts{
        carrot::mock::convert_destination_v1(bob.cryptonote_address(), out_amount)
    };
    dsts.front().asset_type = "salTEST";

    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_transfer(
        w,
        dsts,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        /*subaddr_account=*/spending_subaddr_account,
        /*subaddr_indices=*/{},
        {},
        top_block_index);

    ASSERT_EQ(1, tx_proposals.size());
    const carrot::CarrotTransactionProposalV1 &tx_proposal = tx_proposals.at(0);

    // Assert basic length facts about tx proposal
    ASSERT_LE(tx_proposal.key_images_sorted.size(), 2);
    ASSERT_EQ(1, tx_proposal.normal_payment_proposals.size());
    ASSERT_EQ(1, tx_proposal.selfsend_payment_proposals.size());
    EXPECT_EQ(0, tx_proposal.extra.size());

    const carrot::CarrotPaymentProposalV1 &normal_payment_proposal = tx_proposal.normal_payment_proposals.at(0);
    const carrot::CarrotPaymentProposalVerifiableSelfSendV1 &selfsend_payment_proposal = tx_proposal.selfsend_payment_proposals.at(0);

    // Assert that selected transfers have spending_subaddr_account subaddr major index
    boost::multiprecision::uint128_t in_sum = 0;
    for (std::size_t in_idx = 0; in_idx < tx_proposal.key_images_sorted.size(); ++in_idx)
    {
        const crypto::key_image &ki = tx_proposal.key_images_sorted.at(in_idx);
        if (in_idx > 0)
        {
            ASSERT_LT(ki, tx_proposal.key_images_sorted.at(in_idx - 1));
        }
        ASSERT_EQ(1, allowed_transfers.count(ki));
        const tools::wallet2::transfer_details &td = transfers.at(allowed_transfers.at(ki));
        ASSERT_EQ(spending_subaddr_account, td.m_subaddr_index.major);
        in_sum += td.amount();
    }

    // Assert balanced amounts
    EXPECT_GT(tx_proposal.fee, 0);
    boost::multiprecision::uint128_t out_sum = 0;
    out_sum += normal_payment_proposal.amount;
    out_sum += selfsend_payment_proposal.proposal.amount;
    ASSERT_EQ(in_sum, out_sum);

    // Assert pubkeys/subaddr indices/amounts of payment proposals
    auto expected_normal_payment = carrot::mock::convert_normal_payment_proposal_v1(dsts.at(0), normal_payment_proposal.randomness);
    expected_normal_payment.asset_type = "salTEST";
    EXPECT_EQ(expected_normal_payment, normal_payment_proposal);
    EXPECT_NE(normal_payment_proposal.randomness, carrot::janus_anchor_t{});
    EXPECT_EQ(spending_subaddr_account, selfsend_payment_proposal.subaddr_index.index.major);
    EXPECT_EQ(0, selfsend_payment_proposal.subaddr_index.index.minor);
    EXPECT_EQ(1, w.get_account().get_subaddress_map_ref().count(
        selfsend_payment_proposal.proposal.destination_address_spend_pubkey));
    EXPECT_EQ(carrot::CarrotEnoteType::CHANGE, selfsend_payment_proposal.proposal.enote_type);
    EXPECT_FALSE(selfsend_payment_proposal.proposal.internal_message);
    EXPECT_FALSE(selfsend_payment_proposal.proposal.enote_ephemeral_pubkey);
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_sweep_1)
{
    cryptonote::account_base alice;
    alice.generate();
    cryptonote::account_base bob;
    bob.generate();

    const tools::wallet2::transfer_container transfers{gen_transfer_details()};

    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_sweep(
        // transfers,
        // {{alice.get_keys().m_account_address.m_spend_public_key, {}}},
        w,
        {transfers.front().m_key_image},
        bob.get_keys().m_account_address,
        /*is_subaddress=*/false,
        /*n_dests_per_tx=*/1,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        transfers.front().m_block_height + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
    ASSERT_EQ(1, tx_proposals.size());
    const carrot::CarrotTransactionProposalV1 &tx_proposal = tx_proposals.at(0);

    // Assert basic length facts about tx proposal
    ASSERT_EQ(1, tx_proposal.key_images_sorted.size());
    EXPECT_EQ(transfers.front().m_key_image, tx_proposal.key_images_sorted.front());
    ASSERT_EQ(1, tx_proposal.normal_payment_proposals.size());
    ASSERT_EQ(1, tx_proposal.selfsend_payment_proposals.size());
    EXPECT_EQ(0, tx_proposal.extra.size());

    // Assert amounts
    EXPECT_EQ(0, tx_proposal.selfsend_payment_proposals.front().proposal.amount);
    EXPECT_GT(tx_proposal.fee, 0);
    EXPECT_EQ(transfers.front().amount(), tx_proposal.normal_payment_proposals.front().amount);
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_sweep_2)
{
    cryptonote::account_base alice;
    alice.generate();
    cryptonote::account_base bob;
    bob.generate();

    const tools::wallet2::transfer_container transfers{gen_transfer_details()};
    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_sweep(
        // transfers,
        // {{alice.get_keys().m_account_address.m_spend_public_key, {}}},
        w,
        {transfers.front().m_key_image},
        bob.get_keys().m_account_address,
        /*is_subaddress=*/false,
        /*n_dests_per_tx=*/FCMP_PLUS_PLUS_MAX_OUTPUTS - 1,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        transfers.front().m_block_height + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
    ASSERT_EQ(1, tx_proposals.size());
    const carrot::CarrotTransactionProposalV1 &tx_proposal = tx_proposals.at(0);

    // Assert basic length facts about tx proposal
    ASSERT_EQ(1, tx_proposal.key_images_sorted.size());
    EXPECT_EQ(transfers.front().m_key_image, tx_proposal.key_images_sorted.front());
    ASSERT_EQ(FCMP_PLUS_PLUS_MAX_OUTPUTS - 1, tx_proposal.normal_payment_proposals.size());
    ASSERT_EQ(1, tx_proposal.selfsend_payment_proposals.size());
    EXPECT_EQ(0, tx_proposal.extra.size());

    // Assert amounts
    EXPECT_EQ(0, tx_proposal.selfsend_payment_proposals.front().proposal.amount);
    EXPECT_GT(tx_proposal.fee, 0);
    rct::xmr_amount total_output_amount = 0;
    const rct::xmr_amount first_output_amount = tx_proposal.normal_payment_proposals.at(0).amount;
    for (const auto &normal_payment_proposal : tx_proposal.normal_payment_proposals)
    {
        const rct::xmr_amount amount = normal_payment_proposal.amount;
        const rct::xmr_amount max_amount = std::max(amount, first_output_amount);
        const rct::xmr_amount min_amount = std::min(amount, first_output_amount);
        EXPECT_LE(max_amount - min_amount, 1);
        total_output_amount += amount;
    }
    EXPECT_EQ(transfers.front().amount(), total_output_amount);
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_sweep_3)
{
    cryptonote::account_base alice;
    alice.generate();

    const tools::wallet2::transfer_container transfers{gen_transfer_details()};
    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_sweep(
        // transfers,
        // {{alice.get_keys().m_account_address.m_spend_public_key, {}}},
        w,
        {transfers.front().m_key_image},
        w.get_account().get_keys().m_account_address,
        /*is_subaddress=*/false,
        /*n_dests_per_tx=*/FCMP_PLUS_PLUS_MAX_OUTPUTS - 1,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        transfers.front().m_block_height + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
    ASSERT_EQ(1, tx_proposals.size());
    const carrot::CarrotTransactionProposalV1 &tx_proposal = tx_proposals.at(0);

    // Assert basic length facts about tx proposal
    ASSERT_EQ(1, tx_proposal.key_images_sorted.size());
    EXPECT_EQ(transfers.front().m_key_image, tx_proposal.key_images_sorted.front());
    ASSERT_EQ(0, tx_proposal.normal_payment_proposals.size());
    ASSERT_EQ(carrot::CARROT_MAX_TX_OUTPUTS, tx_proposal.selfsend_payment_proposals.size());
    EXPECT_EQ(0, tx_proposal.extra.size());

    // Assert amounts
    EXPECT_GT(tx_proposal.fee, 0);
    rct::xmr_amount total_output_amount = 0;
    const rct::xmr_amount first_output_amount = tx_proposal.selfsend_payment_proposals.at(0).proposal.amount;
    for (const auto &selfsend_payment_proposal : tx_proposal.selfsend_payment_proposals)
    {
        const rct::xmr_amount amount = selfsend_payment_proposal.proposal.amount;
        const rct::xmr_amount max_amount = std::max(amount, first_output_amount);
        const rct::xmr_amount min_amount = std::min(amount, first_output_amount);
        EXPECT_LE(max_amount - min_amount, 1);
        total_output_amount += amount;
    }
    EXPECT_EQ(transfers.front().amount(), total_output_amount);
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_sweep_4)
{
    // output-limited sweep

    cryptonote::account_base alice;
    alice.generate();
    cryptonote::account_base bob;
    bob.generate();

    // generate transfers list
    const size_t n_transfers = 35;
    tools::wallet2::transfer_container transfers;
    transfers.reserve(n_transfers);
    for (size_t i = 0; i < n_transfers; ++i)
        transfers.push_back(gen_transfer_details());

    // generate random indices into transfer list
    const size_t n_selected_transfers = 31;
    std::set<size_t> selected_transfer_indices;
    while (selected_transfer_indices.size() < n_selected_transfers)
        selected_transfer_indices.insert(crypto::rand_idx(n_transfers));

    // generate map of amounts by key image, key image vector, and height of chain
    std::vector<crypto::key_image> selected_key_images;
    std::unordered_map<crypto::key_image, rct::xmr_amount> amounts_by_ki;
    uint64_t top_block_index = 0;
    for (const size_t selected_transfer_index : selected_transfer_indices)
    {
        const tools::wallet2::transfer_details &td = transfers.at(selected_transfer_index);
        selected_key_images.push_back(td.m_key_image);
        amounts_by_ki.emplace(td.m_key_image, td.amount());
        top_block_index = std::max(top_block_index, td.m_block_height);
    }
    top_block_index += CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;

    ASSERT_EQ(n_selected_transfers, selected_key_images.size());
    ASSERT_EQ(n_selected_transfers, amounts_by_ki.size());

    const size_t n_dests_per_tx = 4;

    // make tx proposals
    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_sweep(
        // transfers,
        // {{alice.get_keys().m_account_address.m_spend_public_key, {}}},
        w,
        selected_key_images,
        bob.get_keys().m_account_address,
        /*is_subaddress=*/false,
        /*n_dests_per_tx=*/n_dests_per_tx,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        top_block_index);
    ASSERT_EQ(1, tx_proposals.size());

    std::set<crypto::key_image> actual_seen_kis;
    size_t n_actual_inputs = 0;
    for (const carrot::CarrotTransactionProposalV1 &tx_proposal : tx_proposals)
    {
        ASSERT_LE(tx_proposal.key_images_sorted.size(), carrot::CARROT_MAX_TX_INPUTS);
        ASSERT_EQ(n_dests_per_tx, tx_proposal.normal_payment_proposals.size());
        ASSERT_EQ(1, tx_proposal.selfsend_payment_proposals.size());
        ASSERT_EQ(0, tx_proposal.selfsend_payment_proposals.at(0).proposal.amount);
        EXPECT_EQ(0, tx_proposal.extra.size());

        rct::xmr_amount tx_inputs_amount = 0;
        for (const crypto::key_image &ki : tx_proposal.key_images_sorted)
        {
            ASSERT_TRUE(amounts_by_ki.count(ki));
            ASSERT_FALSE(actual_seen_kis.count(ki));
            actual_seen_kis.insert(ki);
            tx_inputs_amount += amounts_by_ki.at(ki);
        }
        EXPECT_GT(tx_proposal.fee, 0);
        rct::xmr_amount tx_outputs_amount = 0;
        for (const carrot::CarrotPaymentProposalV1 &normal_payment_proposal : tx_proposal.normal_payment_proposals)
            tx_outputs_amount += normal_payment_proposal.amount;
        ASSERT_EQ(tx_inputs_amount, tx_outputs_amount);

        n_actual_inputs += tx_proposal.key_images_sorted.size();
    }

    EXPECT_EQ(n_selected_transfers, n_actual_inputs);
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_sweep_5)
{
    // output-limited sweep to self

    cryptonote::account_base alice;
    alice.generate();

    // generate transfers list
    static constexpr size_t n_transfers = 71;
    tools::wallet2::transfer_container transfers;
    transfers.reserve(n_transfers);
    for (size_t i = 0; i < n_transfers; ++i)
        transfers.push_back(gen_transfer_details());

    // generate random indices into transfer list
    static constexpr size_t n_selected_transfers = FCMP_PLUS_PLUS_MAX_INPUTS * 8;
    static_assert(n_selected_transfers < n_transfers);
    std::set<size_t> selected_transfer_indices;
    while (selected_transfer_indices.size() < n_selected_transfers)
        selected_transfer_indices.insert(crypto::rand_idx(n_transfers));

    // generate map of amounts by key image, key image vector, and height of chain
    std::vector<crypto::key_image> selected_key_images;
    std::unordered_map<crypto::key_image, rct::xmr_amount> amounts_by_ki;
    uint64_t top_block_index = 0;
    for (const size_t selected_transfer_index : selected_transfer_indices)
    {
        const tools::wallet2::transfer_details &td = transfers.at(selected_transfer_index);
        selected_key_images.push_back(td.m_key_image);
        amounts_by_ki.emplace(td.m_key_image, td.amount());
        top_block_index = std::max(top_block_index, td.m_block_height);
    }
    top_block_index += CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;

    ASSERT_EQ(n_selected_transfers, selected_key_images.size());
    ASSERT_EQ(n_selected_transfers, amounts_by_ki.size());

    const size_t n_dests_per_tx = FCMP_PLUS_PLUS_MAX_OUTPUTS - 1;

    // make tx proposals
    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_sweep(
        // transfers,
        // {{alice.get_keys().m_account_address.m_spend_public_key, {}}},
        w,
        selected_key_images,
        w.get_account().get_keys().m_account_address,
        /*is_subaddress=*/false,
        /*n_dests_per_tx=*/n_dests_per_tx,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        top_block_index);
    ASSERT_EQ(1, tx_proposals.size());

    std::set<crypto::key_image> actual_seen_kis;
    size_t n_actual_inputs = 0;
    for (const carrot::CarrotTransactionProposalV1 &tx_proposal : tx_proposals)
    {
        ASSERT_LE(tx_proposal.key_images_sorted.size(), carrot::CARROT_MAX_TX_INPUTS);
        ASSERT_EQ(n_dests_per_tx == 1 ? 1 : 0, tx_proposal.normal_payment_proposals.size());
        ASSERT_EQ(carrot::CARROT_MAX_TX_OUTPUTS, tx_proposal.selfsend_payment_proposals.size());
        if (!tx_proposal.normal_payment_proposals.empty())
        {
            ASSERT_EQ(0, tx_proposal.normal_payment_proposals.at(0).amount);
        }
        EXPECT_EQ(0, tx_proposal.extra.size());

        rct::xmr_amount tx_inputs_amount = 0;
        for (const crypto::key_image &ki : tx_proposal.key_images_sorted)
        {
            ASSERT_TRUE(amounts_by_ki.count(ki));
            ASSERT_FALSE(actual_seen_kis.count(ki));
            actual_seen_kis.insert(ki);
            tx_inputs_amount += amounts_by_ki.at(ki);
        }
        EXPECT_GT(tx_proposal.fee, 0);
        rct::xmr_amount tx_outputs_amount = 0;
        for (const carrot::CarrotPaymentProposalVerifiableSelfSendV1 &selfsend_payment_proposal : tx_proposal.selfsend_payment_proposals)
            tx_outputs_amount += selfsend_payment_proposal.proposal.amount;
        ASSERT_EQ(tx_inputs_amount, tx_outputs_amount);

        n_actual_inputs += tx_proposal.key_images_sorted.size();
    }

    EXPECT_EQ(n_selected_transfers, n_actual_inputs);
}
//----------------------------------------------------------------------------------------------------------------------
TEST(wallet_tx_builder, make_carrot_transaction_proposals_wallet2_sweep_6)
{
    // 2-dest, 2-out sweep to self

    cryptonote::account_base alice;
    alice.generate();

    // generate transfers list
    static constexpr size_t n_transfers = 5;
    tools::wallet2::transfer_container transfers;
    transfers.reserve(n_transfers);
    for (size_t i = 0; i < n_transfers; ++i)
        transfers.push_back(gen_transfer_details());

    // generate random indices into transfer list
    static constexpr size_t n_selected_transfers = 3;
    static_assert(n_selected_transfers < n_transfers);
    std::set<size_t> selected_transfer_indices;
    while (selected_transfer_indices.size() < n_selected_transfers)
        selected_transfer_indices.insert(crypto::rand_idx(n_transfers));

    // generate map of amounts by key image, key image vector, and height of chain
    std::vector<crypto::key_image> selected_key_images;
    std::unordered_map<crypto::key_image, rct::xmr_amount> amounts_by_ki;
    uint64_t top_block_index = 0;
    for (const size_t selected_transfer_index : selected_transfer_indices)
    {
        const tools::wallet2::transfer_details &td = transfers.at(selected_transfer_index);
        selected_key_images.push_back(td.m_key_image);
        amounts_by_ki.emplace(td.m_key_image, td.amount());
        top_block_index = std::max(top_block_index, td.m_block_height);
    }
    top_block_index += CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;

    ASSERT_EQ(n_selected_transfers, selected_key_images.size());
    ASSERT_EQ(n_selected_transfers, amounts_by_ki.size());

    const size_t n_dests_per_tx = 2;

    // make tx proposals
    tools::wallet2 w;
    wallet_accessor_test::initialize(w, transfers);
    const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = tools::wallet::make_carrot_transaction_proposals_wallet2_sweep(
        // transfers,
        // {{alice.get_keys().m_account_address.m_spend_public_key, {}}},
        w,
        selected_key_images,
        w.get_account().get_keys().m_account_address,
        /*is_subaddress=*/false,
        /*n_dests_per_tx=*/n_dests_per_tx,
        /*fee_per_weight=*/1,
        5,
        /*extra=*/{},
        /*tx_type=*/cryptonote::transaction_type::TRANSFER,
        top_block_index);
    ASSERT_EQ(1, tx_proposals.size());
    const carrot::CarrotTransactionProposalV1 &tx_proposal = tx_proposals.at(0);

    std::set<crypto::key_image> actual_seen_kis;

    ASSERT_EQ(n_selected_transfers, tx_proposal.key_images_sorted.size());
    ASSERT_EQ(0, tx_proposal.normal_payment_proposals.size());
    ASSERT_EQ(3, tx_proposal.selfsend_payment_proposals.size());
    EXPECT_EQ(0, tx_proposal.extra.size());

    rct::xmr_amount tx_inputs_amount = 0;
    for (const crypto::key_image &ki : tx_proposal.key_images_sorted)
    {
        ASSERT_TRUE(amounts_by_ki.count(ki));
        ASSERT_FALSE(actual_seen_kis.count(ki));
        actual_seen_kis.insert(ki);
        tx_inputs_amount += amounts_by_ki.at(ki);
    }
    const rct::xmr_amount output_amount_0 = tx_proposal.selfsend_payment_proposals.at(0).proposal.amount;
    const rct::xmr_amount output_amount_1 = tx_proposal.selfsend_payment_proposals.at(1).proposal.amount;
    const rct::xmr_amount output_amount_2 = tx_proposal.selfsend_payment_proposals.at(2).proposal.amount;
    EXPECT_GT(tx_proposal.fee, 0);
    const rct::xmr_amount tx_outputs_amount = output_amount_0 + output_amount_1 + output_amount_2;
    ASSERT_EQ(tx_inputs_amount, tx_outputs_amount);
    ASSERT_LE(std::max({output_amount_0, output_amount_1, output_amount_2}) -
        std::min({output_amount_0, output_amount_1, output_amount_2}), 1);

    const carrot::CarrotEnoteType enote_type_0 = tx_proposal.selfsend_payment_proposals.at(0).proposal.enote_type;
    const carrot::CarrotEnoteType enote_type_2 = tx_proposal.selfsend_payment_proposals.at(2).proposal.enote_type;
    ASSERT_NE(enote_type_0, enote_type_2);
}
//----------------------------------------------------------------------------------------------------------------------
// TEST(wallet_tx_builder, wallet2_scan_propose_sign_prove_member_and_scan_1)
// {
//     // 1. create fake blockchain
//     // 2. create Alice, Bob wallet2 instance
//     // 3. send a mix of fake-input legacy and carrot txs to Alice
//     // 4. step blockchain forward 10 blocks
//     // 5. scan blockchain with Alice wallet
//     // 6. create carrot transaction proposal
//     // 7. construct proofs for transaction
//     // 8. serialize tx
//     // 9. deserialize tx
//     // 10. check ver_non_input_consensus()
//     // 11. check verRctNonSemanticsSimple()
//     // 12. add Alice's transaction to blockchain
//     // 13. scan blockchain with Bob's wallet and assert money received
//     // 14. scan blockchain with Alice's wallet and assert money left

//     // 1.
//     LOG_PRINT_L2("Initiating my imaginary, friendly chain of blocks");
//     mock::fake_pruned_blockchain bc(0);

//     // 2.
//     LOG_PRINT_L2("Generating wallets for Alice and Bob, the usual suspects");
//     tools::wallet2 alice(cryptonote::MAINNET, /*kdf_rounds=*/1, /*unattended=*/true);
//     tools::wallet2 bob(cryptonote::MAINNET, /*kdf_rounds=*/1, /*unattended=*/true);
//     alice.set_offline(true);
//     bob.set_offline(true);
//     alice.generate("", "");
//     bob.generate("", "");
//     const cryptonote::account_keys &alice_keys = alice.get_account().get_keys();
//     const cryptonote::account_public_address alice_main_addr = alice.get_account().get_keys().m_account_address;
//     const cryptonote::account_public_address bob_main_addr = bob.get_account().get_keys().m_account_address;
//     bc.init_wallet_for_starting_block(alice);
//     bc.init_wallet_for_starting_block(bob);

//     // 3.
//     LOG_PRINT_L2("Sending transactions from the aether to Alice (0)");
//     const rct::xmr_amount amount0 = rct::randXmrAmount(COIN);
//     std::vector<cryptonote::tx_destination_entry> dests0{cryptonote::tx_destination_entry(amount0, alice_main_addr, false)};
//     cryptonote::transaction tx = mock::construct_pre_carrot_tx_with_fake_inputs(dests0, /*fee=*/1234, /*hf_version=*/2);
//     bc.add_block(2, {std::move(tx)}, mock::null_addr);
//     LOG_PRINT_L2("Sending transactions from the aether to Alice (1)");
//     const rct::xmr_amount amount1 = rct::randXmrAmount(COIN);
//     std::vector<cryptonote::tx_destination_entry> dests1{cryptonote::tx_destination_entry(amount1, alice.get_subaddress({0, 13}), true)};
//     cryptonote::account_base aether;
//     aether.generate();
//     tx = mock::construct_carrot_pruned_transaction_fake_inputs({carrot::mock::convert_normal_payment_proposal_v1(dests1.front())}, {}, aether.get_keys());
//     bc.add_block(HF_VERSION_CARROT, {std::move(tx)}, mock::null_addr);

//     // 4. 
//     //!@TODO: figure out why membership proving fails if there's fewer leaves than the curve1 width
//     const size_t target_num_outputs = fcmp_pp::curve_trees::SELENE_CHUNK_WIDTH * fcmp_pp::curve_trees::HELIOS_CHUNK_WIDTH + 7;
//     while (bc.num_outputs() < target_num_outputs)
//         bc.add_block(HF_VERSION_CARROT, {}, mock::null_addr, target_num_outputs - bc.num_outputs());

//     LOG_PRINT_L2("Twiddling thumbs");
//     for (size_t i = 0; i < CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW; ++i)
//         bc.add_block(HF_VERSION_CARROT, {}, mock::null_addr);

//     // 5.
//     LOG_PRINT_L2("Alice's vision is filled with shadowy keys, hashes, points, rings, trees, curves, chains, all flowing in and out of one another");
//     uint64_t blocks_added = bc.refresh_wallet(alice, 0);
//     ASSERT_EQ(bc.height()-1, blocks_added);
//     ASSERT_EQ(2, alice.m_transfers.size());
//     ASSERT_EQ(amount0 + amount1, alice.balance_all(true)); // really, we care about unlocked_balance_all() for sending, but that call uses RPC

    // // 6. 
    // LOG_PRINT_L2("Alice feels pity on Bob and proposes to send his broke ass some dough");
    // const rct::xmr_amount out_amount = rct::randXmrAmount(amount0 + amount1);
    // const std::vector<carrot::CarrotTransactionProposalV1> tx_proposals = 
    //     tools::wallet::make_carrot_transaction_proposals_wallet2_transfer( // stupidly long function name ;(
    //         alice.m_transfers,
    //         alice.m_subaddresses,
    //         {cryptonote::tx_destination_entry(out_amount, bob_main_addr, false)},
    //         /*fee_per_weight=*/1,
    //         /*extra=*/{},
    //         /*subaddr_account=*/0,
    //         /*subaddr_indices=*/{},
    //         /*ignore_above=*/std::numeric_limits<rct::xmr_amount>::max(),
    //         /*ignore_below=*/0,
    //         {},
    //         /*top_block_index=*/bc.height()-1);
    
//     ASSERT_EQ(1, tx_proposals.size());
//     const carrot::CarrotTransactionProposalV1 tx_proposal = tx_proposals.at(0);

//     // 7.
//     LOG_PRINT_L2("Alice has something to prove");
//     tx = tools::wallet::finalize_all_proofs_from_transfer_details(tx_proposal,
//         alice.m_transfers,
//         alice.m_tree_cache,
//         *alice.m_curve_trees,
//         alice_keys);

//     // 8.
//     LOG_PRINT_L2("Hello, Mr. Blobby");
//     const cryptonote::blobdata alicebob_tx_blob = cryptonote::tx_to_blob(tx);

//     // 9.
//     LOG_PRINT_L2("Goodbye, Mr. Blobby");
//     cryptonote::transaction alicebob_tx;
//     ASSERT_TRUE(cryptonote::parse_and_validate_tx_from_blob(alicebob_tx_blob, alicebob_tx));

//     // 10.
//     LOG_PRINT_L2("Bob couldn't believe someone to be so generous in his time of need, so he verifies");
//     ASSERT_GE(bc.hf_version(), HF_VERSION_FCMP_PLUS_PLUS);
//     cryptonote::tx_verification_context tvc{};
//     ASSERT_TRUE(cryptonote::ver_non_input_consensus(alicebob_tx, tvc, bc.hf_version()));
//     EXPECT_FALSE(tvc.m_verifivation_failed);

//     // 11.
//     LOG_PRINT_L2("'Perhaps this is valid money that belongs to another chain', Bob postulates");
//     const uint8_t *tree_root = bc.get_fcmp_tree_root_at(bc.height() - 1);
//     ASSERT_TRUE(cryptonote::Blockchain::expand_transaction_2(alicebob_tx,
//         cryptonote::get_transaction_prefix_hash(alicebob_tx),
//         /*pubkeys=*/{},
//         tree_root));
//     EXPECT_TRUE(rct::verRctNonSemanticsSimple(alicebob_tx.rct_signatures));

//     // 12.
//     LOG_PRINT_L2("'Chain, chain, chain (Chain, chain, chain)' - Aretha Franklin");
//     const rct::xmr_amount alicebob_tx_fee = alicebob_tx.rct_signatures.txnFee;
//     bc.add_block(HF_VERSION_CARROT, {std::move(alicebob_tx)}, mock::null_addr);

//     // 13. 
//     LOG_PRINT_L2("A great day for Bob");
//     ASSERT_EQ(0, bob.balance_all(true));
//     blocks_added = bc.refresh_wallet(bob, 0);
//     ASSERT_EQ(bc.height()-1, blocks_added);
//     ASSERT_EQ(1, bob.m_transfers.size());
//     EXPECT_EQ(out_amount, bob.balance_all(true));

//     // 14.
//     LOG_PRINT_L2("Alice obtains the fulfillment that only stems from selfless generosity");
//     const rct::xmr_amount alice_old_balance = alice.balance_all(true);
//     ASSERT_GE(alice_old_balance, out_amount + alicebob_tx_fee);
//     blocks_added = bc.refresh_wallet(alice, 0);
//     ASSERT_EQ(1, blocks_added);
//     const rct::xmr_amount alice_new_balance = alice.balance_all(true);
//     ASSERT_LT(alice_new_balance, alice_old_balance);
//     EXPECT_EQ(alice_new_balance + out_amount + alicebob_tx_fee, alice_old_balance);
// }
//----------------------------------------------------------------------------------------------------------------------

namespace
{
    class static_response_http_client final : public epee::net_utils::http::abstract_http_client
    {
    public:
        explicit static_response_http_client(std::string body)
        {
            m_response.m_response_code = 200;
            m_response.m_body = std::move(body);
        }

        void set_server(std::string, std::string, boost::optional<epee::net_utils::http::login>,
            epee::net_utils::ssl_options_t) override {}
        void set_auto_connect(bool) override {}
        bool connect(std::chrono::milliseconds) override { return true; }
        bool disconnect() override { return true; }
        bool is_connected(bool *ssl = nullptr) override
        {
            if (ssl)
                *ssl = false;
            return true;
        }
        bool invoke(const boost::string_ref, const boost::string_ref, const boost::string_ref,
            std::chrono::milliseconds, const epee::net_utils::http::http_response_info **response,
            const epee::net_utils::http::fields_list &) override
        {
            if (response)
                *response = &m_response;
            return true;
        }
        bool invoke_get(const boost::string_ref, std::chrono::milliseconds, const std::string &,
            const epee::net_utils::http::http_response_info **, const epee::net_utils::http::fields_list &) override
        {
            return false;
        }
        bool invoke_post(const boost::string_ref uri, const std::string &body, std::chrono::milliseconds timeout,
            const epee::net_utils::http::http_response_info **response, const epee::net_utils::http::fields_list &fields) override
        {
            return invoke(uri, "POST", body, timeout, response, fields);
        }
        uint64_t get_bytes_sent() const override { return 0; }
        uint64_t get_bytes_received() const override { return 0; }

    private:
        epee::net_utils::http::http_response_info m_response{};
    };

    class static_response_http_client_factory final : public epee::net_utils::http::http_client_factory
    {
    public:
        explicit static_response_http_client_factory(std::string body): m_body(std::move(body)) {}

        std::unique_ptr<epee::net_utils::http::abstract_http_client> create() override
        {
            return std::make_unique<static_response_http_client>(m_body);
        }

    private:
        std::string m_body;
    };

    cryptonote::transaction make_miner_tx(uint64_t height)
    {
        cryptonote::account_base account;
        account.generate();
        cryptonote::transaction tx;
        crypto::public_key miner_reward_tx_key;
        if (!cryptonote::construct_miner_tx(height, 0, 5000, 500, 500,
            account.get_keys().m_account_address, miner_reward_tx_key, tx))
            throw std::runtime_error("Failed to construct miner transaction");
        return tx;
    }

    cryptonote::COMMAND_RPC_GET_TRANSACTIONS::entry make_tx_entry(const cryptonote::transaction &tx)
    {
        cryptonote::COMMAND_RPC_GET_TRANSACTIONS::entry entry{};
        entry.as_hex = epee::string_tools::buff_to_hex_nodelimer(cryptonote::tx_to_blob(tx));
        entry.tx_hash = epee::string_tools::pod_to_hex(cryptonote::get_transaction_hash(tx));
        return entry;
    }
}

TEST(wallet_storage, get_tx_entries_rejects_substituted_transaction)
{
    const cryptonote::transaction tx_a = make_miner_tx(1);
    const cryptonote::transaction tx_b = make_miner_tx(2);
    const crypto::hash txid_a = cryptonote::get_transaction_hash(tx_a);
    const crypto::hash txid_b = cryptonote::get_transaction_hash(tx_b);

    cryptonote::COMMAND_RPC_GET_TRANSACTIONS::response response{};
    response.txs = {make_tx_entry(tx_a), make_tx_entry(tx_a)};
    std::string response_json;
    ASSERT_TRUE(epee::serialization::store_t_to_json(response, response_json));

    auto factory = std::make_unique<static_response_http_client_factory>(std::move(response_json));
    tools::wallet2 wallet(cryptonote::MAINNET, 1, false, std::move(factory));
    const std::unordered_set<crypto::hash> txids{txid_a, txid_b};
    EXPECT_THROW(wallet_accessor_test::get_tx_entries(wallet, txids), tools::error::wallet_internal_error);
}

TEST(wallet_storage, get_tx_entries_accepts_requested_transaction)
{
    const auto tx = make_miner_tx(1);
    const auto txid = cryptonote::get_transaction_hash(tx);
    cryptonote::COMMAND_RPC_GET_TRANSACTIONS::response response{};
    response.txs = {make_tx_entry(tx)};
    std::string json;
    ASSERT_TRUE(epee::serialization::store_t_to_json(response, json));
    auto factory = std::make_unique<static_response_http_client_factory>(std::move(json));
    tools::wallet2 wallet(cryptonote::MAINNET, 1, false, std::move(factory));
    const auto entries = wallet_accessor_test::get_tx_entries(wallet, {txid});
    ASSERT_EQ(1, entries.tx_entries.size());
}

TEST(wallet_reserve, pending_spends_and_other_assets_are_excluded)
{
    tools::wallet2 wallet;
    auto pending = gen_transfer_details();
    pending.asset_type = "SAL1";
    pending.m_spent = true;
    pending.m_spent_height = 0; // pending, not confirmed
    auto token = gen_transfer_details();
    token.asset_type = "salTEST";
    wallet_accessor_test::initialize(wallet, {pending, token});
    try
    {
        wallet.get_reserve_proof(boost::none, "test");
        FAIL() << "A pending spend and a token must not count as SAL1 reserve";
    }
    catch (const tools::error::wallet_internal_error &e)
    {
        EXPECT_NE(std::string::npos, std::string(e.what()).find("Zero balance"));
    }
}

TEST(wallet_reserve, minimum_excludes_pending_change)
{
    tools::wallet2 wallet;
    auto available = gen_transfer_details();
    available.asset_type = "SAL1";
    available.m_amount = 10;
    auto pending = available;
    pending.m_spent = true;
    pending.m_spent_height = 0;
    wallet_accessor_test::initialize(wallet, {available, pending});
    try
    {
        wallet.get_reserve_proof(std::make_pair(uint32_t{0}, uint64_t{11}), "test");
        FAIL() << "Only the unspent output can count towards minimum reserve";
    }
    catch (const tools::error::wallet_internal_error &e)
    {
        EXPECT_NE(std::string::npos, std::string(e.what()).find("Not enough balance"));
    }
}

namespace
{
void expect_reserve_error(tools::wallet2 &wallet,
    const boost::optional<std::pair<uint32_t, uint64_t>> &minimum, const char *message)
{
    try { wallet.get_reserve_proof(minimum, "test"); FAIL() << "Expected reserve proof rejection"; }
    catch (const tools::error::wallet_internal_error &e)
    { EXPECT_NE(std::string::npos, std::string(e.what()).find(message)) << e.what(); }
}
}

TEST(wallet_reserve, frozen_and_non_sal1_assets_are_excluded)
{
    tools::wallet2 wallet(cryptonote::MAINNET, 1);
    auto frozen = gen_transfer_details();
    frozen.asset_type = "SAL1";
    frozen.m_frozen = true;
    auto old_asset = gen_transfer_details();
    old_asset.asset_type = "SAL";
    wallet_accessor_test::initialize(wallet, {frozen, old_asset, gen_transfer_details()});
    expect_reserve_error(wallet, boost::none, "Zero balance");
}

TEST(wallet_reserve, account_minimum_does_not_use_other_accounts)
{
    tools::wallet2 wallet(cryptonote::MAINNET, 1);
    auto own = gen_transfer_details();
    own.asset_type = "SAL1";
    own.m_amount = 10;
    auto other = own;
    other.m_subaddr_index.major = 1;
    other.m_amount = 100;
    wallet_accessor_test::initialize(wallet, {own, other});
    expect_reserve_error(wallet, std::make_pair(uint32_t{0}, uint64_t{11}), "Not enough balance");
}

TEST(wallet_reserve, amount_sum_overflow_is_rejected)
{
    tools::wallet2 wallet(cryptonote::MAINNET, 1);
    auto output = gen_transfer_details();
    output.asset_type = "SAL1";
    output.m_amount = std::numeric_limits<uint64_t>::max();
    wallet_accessor_test::initialize(wallet, {output, output});
    expect_reserve_error(wallet, boost::none, "Reserve amount overflow");
}

TEST(wallet_reserve, carrot_outputs_fail_with_explicit_unsupported_error)
{
    tools::wallet2 wallet(cryptonote::MAINNET, 1);
    auto output = gen_transfer_details();
    output.asset_type = "SAL1";
    output.m_tx.version = TRANSACTION_VERSION_CARROT;
    wallet_accessor_test::initialize(wallet, {output});
    expect_reserve_error(wallet, boost::none, "Reserve proofs for Carrot outputs are not supported");
}

TEST(wallet_reserve, inconsistent_additional_key_count_is_rejected)
{
    tools::wallet2 wallet(cryptonote::MAINNET, 1);
    auto output = gen_transfer_details();
    output.asset_type = "SAL1";
    output.m_tx.version = 2;
    output.m_tx.vout.assign(2, cryptonote::tx_out{});
    for (auto &out : output.m_tx.vout)
      out.target = cryptonote::txout_to_key{rct::rct2pk(rct::pkGen())};
    output.m_internal_output_index = 1;
    output.m_pk_index = 0;
    cryptonote::add_tx_pub_key_to_extra(output.m_tx, rct::rct2pk(rct::pkGen()));
    cryptonote::add_additional_tx_pub_keys_to_extra(output.m_tx.extra, {rct::rct2pk(rct::pkGen())});
    wallet_accessor_test::initialize(wallet, {output});
    expect_reserve_error(wallet, boost::none, "Unexpected additional tx public key count");
}

TEST(wallet_storage, new_account_lookahead_does_not_underflow)
{
    tools::wallet2 wallet(cryptonote::MAINNET, 1);
    wallet.set_subaddress_lookahead(2, 3);
    wallet.generate("", "");
    EXPECT_TRUE(wallet_accessor_test::should_expand(wallet, {1, 2}));
    EXPECT_FALSE(wallet_accessor_test::should_expand(wallet, {1, 3}));
    EXPECT_FALSE(wallet_accessor_test::should_expand(wallet, {1, UINT32_MAX}));
    EXPECT_FALSE(wallet_accessor_test::should_expand(wallet, {UINT32_MAX, 0}));
}

TEST(wallet_storage, ephemeral_key_fallback_checks_additional_index)
{
    tools::wallet2::transfer_details output{};
    const crypto::public_key key = rct::rct2pk(rct::pkGen());
    cryptonote::add_additional_tx_pub_keys_to_extra(output.m_tx.extra, {key});
    EXPECT_EQ(key, output.get_eph_public_key());
    output.m_internal_output_index = 1;
    EXPECT_THROW(output.get_eph_public_key(), tools::error::wallet_internal_error);
}

#include "carrot_core/output_set_finalization.h"
#include "carrot_impl/format_utils.h"

namespace
{
// Use the production proposal/format builders to obtain an unsigned payload.
// The tests mutate its independently displayed and serialized components;
// full proof generation and submission are exercised by the isolated RPC suite.
struct pending_validation_fixture
{
    tools::wallet2 wallet;
    tools::wallet2::transfer_container transfers{gen_transfer_details()};
    carrot::CarrotTransactionProposalV1 proposal;

    explicit pending_validation_fixture(bool repeated_destinations = false)
    {
        wallet_accessor_test::initialize(wallet, transfers);
        carrot::carrot_and_legacy_account receiver;
        receiver.generate();
        cryptonote::tx_destination_entry destination(transfers.front().m_amount / 2,
            receiver.get_keys().m_account_address, false);
        destination.asset_type = "salTEST";
        std::vector<cryptonote::tx_destination_entry> destinations{destination};
        if (repeated_destinations)
        {
            auto repeated = destination;
            repeated.amount /= 4;
            destinations.push_back(repeated);
            repeated.addr = wallet.get_account().get_keys().m_carrot_account_address;
            destinations.push_back(repeated);
        }
        proposal = tools::wallet::make_carrot_transaction_proposals_wallet2_transfer(wallet, destinations,
            1, 5, {}, cryptonote::transaction_type::TRANSFER, 0, {}, {},
            transfers.front().m_block_height + CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE).at(0);
    }

    tools::wallet2::pending_tx build()
    {
        auto pending = tools::wallet::make_pending_carrot_tx(proposal, transfers, wallet.get_account());
        std::vector<carrot::CarrotPaymentProposalSelfSendV1> selfsend;
        for (const auto& self : proposal.selfsend_payment_proposals) selfsend.push_back(self.proposal);
        std::vector<carrot::RCTOutputEnoteProposal> outputs;
        carrot::RCTOutputEnoteProposal return_enote{};
        carrot::encrypted_payment_id_t pid;
        size_t change_index;
        std::vector<std::pair<bool, size_t>> order;
        std::unordered_map<crypto::public_key, size_t> indices;
        carrot::get_output_enote_proposals(proposal.normal_payment_proposals, selfsend, proposal.dummy_encrypted_payment_id,
            &wallet.get_account().s_view_balance_dev, &wallet.get_account().k_view_incoming_dev,
            proposal.key_images_sorted.front(), outputs, return_enote, pid, proposal.tx_type, change_index, indices, &order);
        std::vector<uint8_t> masks;
        tools::wallet::encrypt_change_index(proposal.normal_payment_proposals, selfsend,
            proposal.key_images_sorted.front(), change_index, order, masks);
        std::vector<carrot::CarrotEnoteV1> enotes;
        for (const auto& output : outputs) enotes.push_back(output.enote);
        pending.tx = carrot::store_carrot_to_transaction_v1(enotes, proposal.key_images_sorted, proposal.sources,
            proposal.fee, proposal.tx_type, proposal.amount_burnt, masks, proposal.token, return_enote, pid, HF_VERSION_ENABLE_TOKENS);
        pending.tx.rollup_binding_tag = proposal.rollup_binding_tag;
        if (proposal.tx_type == cryptonote::transaction_type::ROLLUP) pending.tx.layer2_rollup_data = proposal.layer2_rollup_data;
        pending.tx.extra.insert(pending.tx.extra.end(), proposal.extra.begin(), proposal.extra.end());
        if (!cryptonote::sort_tx_extra(pending.tx.extra, pending.tx.extra, false))
            throw std::runtime_error("Malformed test extra");
        return pending;
    }
};
}

TEST(pending_validation, carrot_accepts_original_and_rejects_altered_package)
{
    pending_validation_fixture fixture;
    const auto valid = fixture.build();
    ASSERT_NO_THROW(fixture.wallet.validate_pending_tx(valid));
    auto changed = valid;
    ++changed.fee;
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    ++changed.change_dts.amount;
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    ++changed.dests.front().amount;
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    changed.dests.front().asset_type = "SAL1";
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    changed.selected_transfers.front() = 999999;
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    changed.tx.rct_signatures.ecdhInfo.front().amount.bytes[0] ^= 1;
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    boost::get<cryptonote::txin_to_key>(changed.tx.vin.front()).key_offsets.front() ^= 1;
    changed.tx.invalidate_hashes();
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    boost::get<cryptonote::txout_to_carrot_v1>(changed.tx.vout.front().target).key = crypto::null_pkey;
    changed.tx.invalidate_hashes();
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    std::get<carrot::CarrotTransactionProposalV1>(changed.construction_data).sources.front().amount++;
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
    changed = valid;
    std::get<carrot::CarrotTransactionProposalV1>(changed.construction_data).extra.push_back(0);
    EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
}

TEST(pending_validation, carrot_burn_stake_token_and_rollup_payloads)
{
    for (const auto type : {cryptonote::transaction_type::BURN, cryptonote::transaction_type::STAKE,
                           cryptonote::transaction_type::CREATE_TOKEN, cryptonote::transaction_type::ROLLUP})
    {
        pending_validation_fixture fixture;
        fixture.proposal.tx_type = type;
        fixture.proposal.amount_burnt = fixture.proposal.normal_payment_proposals.front().amount;
        fixture.proposal.normal_payment_proposals.clear();
        fixture.proposal.selfsend_payment_proposals.front().proposal.enote_ephemeral_pubkey =
            carrot::get_enote_ephemeral_pubkey(carrot::gen_carrot_payment_proposal_v1(false, false, 1),
                carrot::make_carrot_input_context(fixture.proposal.key_images_sorted.front()));
        const auto valid = fixture.build();
        ASSERT_NO_THROW(fixture.wallet.validate_pending_tx(valid)) << unsigned(type);
        auto changed = valid;
        ++changed.tx.amount_burnt;
        changed.tx.invalidate_hashes();
        EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
        if (type == cryptonote::transaction_type::STAKE || type == cryptonote::transaction_type::CREATE_TOKEN)
        {
            changed = valid;
            changed.tx.protocol_tx_data.return_address = crypto::null_pkey;
            changed.tx.invalidate_hashes();
            EXPECT_THROW(fixture.wallet.validate_pending_tx(changed), std::exception);
        }
    }
}

TEST(wallet_balance, scanned_carrot_stake_output_is_change)
{
    pending_validation_fixture fixture;
    fixture.wallet.set_offline();
    fixture.proposal.tx_type = cryptonote::transaction_type::STAKE;
    fixture.proposal.amount_burnt = fixture.proposal.normal_payment_proposals.front().amount;
    fixture.proposal.normal_payment_proposals.clear();
    fixture.proposal.selfsend_payment_proposals.front().proposal.enote_ephemeral_pubkey =
        carrot::get_enote_ephemeral_pubkey(carrot::gen_carrot_payment_proposal_v1(false, false, 1),
            carrot::make_carrot_input_context(fixture.proposal.key_images_sorted.front()));
    const auto pending = fixture.build();
    const auto scanned = tools::wallet::view_incoming_scan_transaction(pending.tx, fixture.wallet.get_account());
    ASSERT_EQ(1u, scanned.size());
    ASSERT_TRUE(scanned.front());
    ASSERT_EQ(pending.change_dts.amount, scanned.front()->amount);
    ASSERT_GT(scanned.front()->amount, 0u);

    auto input = fixture.transfers.front();
    input.m_spent = true;
    input.m_spent_height = 1;
    auto change = balance_output(scanned.front()->amount, scanned.front()->asset_type);
    change.m_tx = pending.tx;
    wallet_accessor_test::initialize(fixture.wallet, {input, change}, false);
    wallet_accessor_test::rebuild_transfers(fixture.wallet);
    wallet_accessor_test::set_height(fixture.wallet, 100);
    // This fixture uses salTEST outputs; token fees are paid separately in SAL1.
    EXPECT_EQ(input.amount(), fixture.wallet.balance(0, input.asset_type, false));
    EXPECT_EQ(pending.change_dts.amount, fixture.wallet.unlocked_balance(0, input.asset_type, false));
}

TEST(wallet_tx_builder, change_masks_follow_positions_for_repeated_addresses)
{
    auto first = carrot::gen_carrot_payment_proposal_v1(false, false, 1);
    auto second = first;
    second.randomness = carrot::gen_janus_anchor();
    std::vector<carrot::CarrotPaymentProposalV1> payments{first, second};
    std::vector<carrot::CarrotPaymentProposalSelfSendV1> selfsend(1);
    selfsend.front().destination_address_spend_pubkey = first.destination.address_spend_pubkey;
    const auto image = crypto::rand<crypto::key_image>();
    std::vector<std::pair<bool, size_t>> order{{false, 0}, {true, 0}, {false, 1}};
    std::vector<uint8_t> before, after;
    tools::wallet::encrypt_change_index(payments, selfsend, image, 1, order, before);
    // Reordering storage while retaining the same output positions must not
    // change either recipient's mask, even when their addresses are identical.
    std::swap(payments[0], payments[1]);
    std::swap(order[0].second, order[2].second);
    tools::wallet::encrypt_change_index(payments, selfsend, image, 1, order, after);
    ASSERT_EQ(3u, before.size());
    ASSERT_EQ(3u, after.size());
    EXPECT_EQ(before[0], after[0]);
    EXPECT_EQ(before[2], after[2]);
    order[2] = order[0];
    EXPECT_THROW(tools::wallet::encrypt_change_index(payments, selfsend, image, 1, order, after), std::exception);
}

TEST(pending_validation, repeated_recipient_and_self_payment_outputs)
{
    pending_validation_fixture fixture(true);
    for (size_t repeat = 0; repeat < 16; ++repeat)
    {
        auto pending = fixture.build();
        ASSERT_NO_THROW(fixture.wallet.validate_pending_tx(pending));
        for (auto& mask : pending.tx.return_address_change_mask) mask ^= 1;
        pending.tx.invalidate_hashes();
        EXPECT_THROW(fixture.wallet.validate_pending_tx(pending), std::exception);
    }
}

TEST(pending_validation, construction_metadata_survives_binary_export)
{
    pending_validation_fixture fixture(true);
    auto pending = fixture.build();
    const auto payload = pending.tx;
    // The payload fixture is unsigned. Serialize an empty transaction here to
    // test the pending-package metadata without inventing a signature proof.
    pending.tx = cryptonote::transaction{};
    std::string blob;
    ASSERT_TRUE(serialization::dump_binary(pending, blob));
    tools::wallet2::pending_tx restored;
    ASSERT_TRUE(serialization::parse_binary(blob, restored));
    restored.tx = payload;
    ASSERT_EQ(pending.dests.size(), restored.dests.size());
    ASSERT_EQ(pending.change_dts.addr, restored.change_dts.addr);
    for (size_t i = 0; i < pending.dests.size(); ++i)
        ASSERT_EQ(pending.dests[i].addr, restored.dests[i].addr);
    ASSERT_NO_THROW(fixture.wallet.validate_pending_tx(restored));
    const auto& proposal = std::get<carrot::CarrotTransactionProposalV1>(restored.construction_data);
    EXPECT_EQ(fixture.proposal.tx_type, proposal.tx_type);
    ASSERT_EQ(fixture.proposal.sources.size(), proposal.sources.size());
    EXPECT_EQ(fixture.proposal.sources.front().carrot, proposal.sources.front().carrot);
    EXPECT_EQ(fixture.proposal.sources.front().coinbase, proposal.sources.front().coinbase);
    EXPECT_EQ(fixture.proposal.sources.front().first_rct_key_image, proposal.sources.front().first_rct_key_image);

    tools::wallet2::tx_construction_data legacy{};
    legacy.tx_type = cryptonote::transaction_type::STAKE;
    legacy.use_rct = true;
    legacy.rct_config = {rct::RangeProofPaddedBulletproof, 4};
    ASSERT_TRUE(serialization::dump_binary(legacy, blob));
    tools::wallet2::tx_construction_data decoded{};
    ASSERT_TRUE(serialization::parse_binary(blob, decoded));
    EXPECT_EQ(cryptonote::transaction_type::STAKE, decoded.tx_type);
}

TEST(pending_validation, legacy_signed_transfer_and_stake)
{
    using namespace cryptonote;
    for (const auto type : {transaction_type::TRANSFER, transaction_type::STAKE})
    {
        tools::wallet2 wallet;
        wallet.generate("", "");
        const epee::wipeable_string password;
        tools::wallet_keys_unlocker unlocker(wallet, &password);
        const auto& keys = wallet.get_account().get_keys();
        account_base recipient;
        recipient.generate();
        const uint8_t hf = HF_VERSION_SALVIUM_ONE_PROOFS;
        const uint64_t amount = 20 * COIN, fee = COIN / 100;
        auto parent = mock::construct_miner_tx_fake_reward_1out(1, amount, keys.m_account_address, hf);
        boost::get<txout_to_tagged_key>(parent.vout.front().target).asset_type = "SAL1";
        parent.invalidate_hashes();
        tools::wallet2::transfer_details td{};
        td.m_tx = parent;
        td.m_txid = get_transaction_hash(parent);
        td.m_global_output_index = 100;
        td.m_asset_type_output_index = 100;
        td.m_amount = amount;
        td.m_mask = rct::identity();
        td.m_rct = true;
        td.asset_type = "SAL1";
        auto source = mock::gen_tx_source_entry_fake_members({true, td.m_global_output_index,
            td.get_public_key(), get_tx_pub_key_from_extra(parent), {}, 0, amount, td.m_mask}, 15, 1000000);
        source.asset_type = "SAL1";
        tools::wallet2::pending_tx pending{};
        tx_destination_entry payment(10 * COIN, recipient.get_keys().m_account_address, false);
        payment.asset_type = "SAL1";
        tx_destination_entry change(amount - payment.amount - fee, keys.m_account_address, false);
        change.asset_type = "SAL1";
        change.is_change = true;
        std::vector<tx_source_entry> sources{source};
        std::vector<tx_destination_entry> destinations{payment, change};
        const std::unordered_map<crypto::public_key, subaddress_index> subaddresses{{keys.m_account_address.m_spend_public_key, {0, 0}}};
        const rct::RCTConfig config{rct::RangeProofPaddedBulletproof, 6};
        ASSERT_TRUE(construct_tx_and_get_tx_key(keys, subaddresses, sources, destinations, hf,
            "SAL1", "SAL1", type, change.addr, {}, pending.tx, 0, pending.tx_key,
            pending.additional_tx_keys, true, config, true));
        td.m_key_image = boost::get<txin_to_key>(pending.tx.vin.front()).k_image;
        td.m_key_image_known = true;
        wallet_accessor_test::initialize(wallet, {td}, false);
        pending.selected_transfers = {0};
        pending.key_images = boost::to_string(td.m_key_image);
        pending.dests = {payment};
        pending.change_dts = change;
        pending.fee = fee;
        tools::wallet2::tx_construction_data construction{};
        construction.sources = sources;
        construction.selected_transfers = {0};
        construction.subaddr_indices = {0};
        construction.dests = pending.dests;
        construction.change_dts = change;
        construction.splitted_dsts = destinations;
        construction.tx_type = type;
        construction.use_rct = true;
        construction.rct_config = config;
        construction.use_view_tags = true;
        construction.extra = pending.tx.extra;
        pending.construction_data = construction;
        ASSERT_NO_THROW(wallet.validate_unsigned_tx(construction));
        ASSERT_NO_THROW(wallet.validate_pending_tx(pending)) << unsigned(type);
        auto altered = pending;
        altered.tx.extra.push_back(0);
        altered.tx.invalidate_hashes();
        EXPECT_THROW(wallet.validate_pending_tx(altered), std::exception);
        altered = pending;
        ++altered.dests.front().amount;
        EXPECT_THROW(wallet.validate_pending_tx(altered), std::exception);
        altered = pending;
        if (type == transaction_type::STAKE)
            altered.tx.return_address = crypto::null_pkey;
        else
            altered.tx.return_address_list.front() = crypto::null_pkey;
        altered.tx.invalidate_hashes();
        EXPECT_THROW(wallet.validate_pending_tx(altered), std::exception);
    }
}

TEST(wallet_tx_builder, integrated_destination_preserves_id_and_rejects_mismatched_address)
{
    carrot::carrot_and_legacy_account receiver;
    receiver.generate();
    const auto address = receiver.get_keys().m_carrot_account_address;
    crypto::hash8 id{{1,2,3,4,5,6,7,8}};
    cryptonote::tx_destination_entry dest(COIN, address, false);
    dest.asset_type = "SAL1";
    dest.is_integrated = true;
    dest.original = cryptonote::get_account_integrated_address_as_str(cryptonote::MAINNET, address, id);
    const auto actual = tools::wallet::tx_builder_detail::make_carrot_destination(dest, cryptonote::MAINNET);
    EXPECT_EQ(carrot::raw_byte_convert<carrot::payment_id_t>(id), actual.payment_id);
    EXPECT_THROW(tools::wallet::tx_builder_detail::make_carrot_destination(dest, cryptonote::TESTNET), std::exception);
    dest.addr.m_spend_public_key = rct::rct2pk(rct::pkGen());
    EXPECT_THROW(tools::wallet::tx_builder_detail::make_carrot_destination(dest, cryptonote::MAINNET), std::exception);
    dest.addr = address;
    dest.original = cryptonote::get_account_integrated_address_as_str(cryptonote::MAINNET, address, crypto::hash8{});
    EXPECT_THROW(tools::wallet::tx_builder_detail::make_carrot_destination(dest, cryptonote::MAINNET), std::exception);
}

TEST(wallet_tx_builder, integrated_id_survives_pending_metadata_and_detects_tampering)
{
    pending_validation_fixture fixture;
    auto& destination = fixture.proposal.normal_payment_proposals.at(0).destination;
    destination.payment_id = carrot::gen_payment_id();
    auto pending = fixture.build();
    ASSERT_NO_THROW(fixture.wallet.validate_pending_tx(pending));
    ASSERT_TRUE(pending.dests.at(0).is_integrated);
    cryptonote::address_parse_info info;
    ASSERT_TRUE(cryptonote::get_account_address_from_str(info, fixture.wallet.nettype(), pending.dests.at(0).original));
    EXPECT_EQ(carrot::raw_byte_convert<crypto::hash8>(destination.payment_id), info.payment_id);
    pending.dests.at(0).original.back() = pending.dests.at(0).original.back() == '1' ? '2' : '1';
    EXPECT_THROW(fixture.wallet.validate_pending_tx(pending), std::exception);
}

TEST(wallet_yield, summary_includes_stake_at_first_transfer_index)
{
    // A local HTTP stub supplies both the ordinary height response and the
    // JSON-RPC results. No daemon or external connection is used.
    auto factory = std::make_unique<static_response_http_client_factory>(R"({
      "status":"OK","height":3,"jsonrpc":"2.0","id":"0","result":{
        "status":"OK","height":3,
        "supply_tally":[{"currency_label":"SAL1","amount":"1000000"}],
        "yield_data":[
          {"block_height":1,"slippage_total_this_block":0,"locked_coins_this_block":100,"locked_coins_tally":100,"network_health_percentage":100},
          {"block_height":2,"slippage_total_this_block":10,"locked_coins_this_block":0,"locked_coins_tally":100,"network_health_percentage":100}]
      }})");
    tools::wallet2 wallet(cryptonote::TESTNET, 1, false, std::move(factory));
    tools::wallet2::transfer_details stake{};
    stake.m_tx.type = cryptonote::transaction_type::STAKE;
    stake.m_tx.amount_burnt = 100;
    stake.m_block_height = 1;
    stake.asset_type = "SAL1";
    wallet_accessor_test::initialize(wallet, {stake});
    uint64_t burnt, supply, locked, accrued, rate, count;
    std::vector<tools::wallet2::yield_payout_t> payouts;
    ASSERT_TRUE(wallet.get_yield_summary_info(burnt, supply, locked, accrued, rate, count, payouts));
    ASSERT_EQ(1, payouts.size());
    EXPECT_EQ(100, std::get<3>(payouts.front()));
    EXPECT_EQ(10, std::get<4>(payouts.front()));
    EXPECT_EQ("SAL1", std::get<2>(payouts.front()));
}

namespace
{
std::string yield_response(const std::string& supply, const std::vector<uint64_t>& heights)
{
    std::string result = R"({"jsonrpc":"2.0","id":"0","result":{"status":"OK","height":3,"supply_tally":[{"currency_label":"SAL1","amount":")";
    result += supply + R"("}],"yield_data":[)";
    for (size_t i = 0; i < heights.size(); ++i)
    {
        if (i) result += ',';
        result += "{\"block_height\":" + std::to_string(heights[i]) +
            R"(,"slippage_total_this_block":1,"locked_coins_this_block":1,"locked_coins_tally":1,"network_health_percentage":100})";
    }
    return result + "]}}";
}
}

TEST(wallet_yield, rejects_incomplete_duplicate_or_out_of_range_blocks)
{
    for (const std::vector<uint64_t>& heights : std::vector<std::vector<uint64_t>>{
        {}, {1}, {1, 1}, {2, 1}, {1, 3}, {1, 2, 3}})
    {
        auto factory = std::make_unique<static_response_http_client_factory>(yield_response("100", heights));
        tools::wallet2 wallet(cryptonote::TESTNET, 1, false, std::move(factory));
        std::vector<cryptonote::yield_block_info> blocks(1);
        EXPECT_FALSE(wallet.get_yield_info(blocks));
        EXPECT_TRUE(blocks.empty());
    }
}

TEST(wallet_yield, rejects_malformed_and_wrapping_supply_without_partial_output)
{
    for (const std::string supply : {"", "-1", "+1", " 1", "1junk", "18446744073709551616",
        "340282366920938463463374607431768211456"})
    {
        auto factory = std::make_unique<static_response_http_client_factory>(yield_response(supply, {1, 2}));
        tools::wallet2 wallet(cryptonote::TESTNET, 1, false, std::move(factory));
        uint64_t burnt = 99, circulating = 99, locked = 99, accrued = 99, rate = 99, count = 99;
        std::vector<tools::wallet2::yield_payout_t> payouts(1);
        EXPECT_FALSE(wallet.get_yield_summary_info(burnt, circulating, locked, accrued, rate, count, payouts));
        EXPECT_EQ(0, burnt | circulating | locked | accrued | rate | count);
        EXPECT_TRUE(payouts.empty());
    }
}

TEST(wallet_yield, accepts_full_unsigned_supply_range)
{
    auto factory = std::make_unique<static_response_http_client_factory>(yield_response("18446744073709551615", {1, 2}));
    tools::wallet2 wallet(cryptonote::TESTNET, 1, false, std::move(factory));
    uint64_t burnt, supply, locked, accrued, rate, count;
    std::vector<tools::wallet2::yield_payout_t> payouts;
    ASSERT_TRUE(wallet.get_yield_summary_info(burnt, supply, locked, accrued, rate, count, payouts));
    EXPECT_EQ(UINT64_MAX, supply);
    EXPECT_EQ(2, count);
}
