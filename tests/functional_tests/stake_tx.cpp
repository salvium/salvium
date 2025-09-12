#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_io.hpp>
#include <boost/uuid/random_generator.hpp>
#include <unordered_map>

#include "include_base_utils.h"
using namespace epee;
#include "wallet/wallet2.h"

#include "transactions_flow_test.h"
#include "stake_tx.h"

using namespace cryptonote;

// fixed-difficulty should be at least 7.


bool stop_mining(epee::net_utils::http::http_simple_client& http_client){
    COMMAND_RPC_STOP_MINING::request stop_mine_req = AUTO_VAL_INIT(stop_mine_req);
    COMMAND_RPC_STOP_MINING::response stop_mine_rsp = AUTO_VAL_INIT(stop_mine_rsp);
    bool r = net_utils::invoke_http_json("/stop_mining", stop_mine_req, stop_mine_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to stop mining");
    return true;
}

bool stake_transaction_test(std::string& working_folder,
  std::string wallet_name,
  std::string& daemon_addr_a,
  uint64_t amount_to_stake) {
    LOG_PRINT_L0("-----------------------STARTING STAKE TRANSACTION TEST-----------------------");
    tools::wallet2 w1(network_type::TESTNET);
    w1.inactivity_lock_timeout(0);
    w1.ask_password(tools::wallet2::AskPasswordType::AskPasswordNever);
    w1.setup_background_mining(tools::wallet2::BackgroundMiningSetupType::BackgroundMiningNo); // disable background mining
    if(wallet_name.empty())
        wallet_name = generate_random_wallet_name();

    try
    {
        w1.generate(working_folder + "/" + wallet_name, "");
    }
    catch (const std::exception& e)
    {
        LOG_ERROR("failed to generate wallet: " << e.what());
        return false;
    }

    w1.init(daemon_addr_a);

    epee::net_utils::http::http_simple_client http_client;
    bool r = http_client.set_server(daemon_addr_a, boost::none);
    CHECK_AND_ASSERT_MES(r, false, "failed to connect to daemon");

    // stop mining just in case
    stop_mining(http_client);

    // get current height
    COMMAND_RPC_GET_HEIGHT::request height_req = AUTO_VAL_INIT(height_req);
    COMMAND_RPC_GET_HEIGHT::response height_rsp = AUTO_VAL_INIT(height_rsp);
    r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to get height from daemon");

    // pop blocks to make sure of the start height
    COMMAND_RPC_POP_BLOCKS::request pop_blocks_req = AUTO_VAL_INIT(pop_blocks_req);
    COMMAND_RPC_POP_BLOCKS::response pop_blocks_rsp = AUTO_VAL_INIT(pop_blocks_rsp);
    pop_blocks_req.nblocks = height_rsp.height - 1; //keep at least one block
    r = net_utils::invoke_http_json("/pop_blocks", pop_blocks_req, pop_blocks_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to pop blocks");

    // flush tx pool to make sure of the start state
    COMMAND_RPC_FLUSH_TRANSACTION_POOL::request flush_req = AUTO_VAL_INIT(flush_req);
    COMMAND_RPC_FLUSH_TRANSACTION_POOL::response flush_rsp = AUTO_VAL_INIT(flush_rsp);
    r = net_utils::invoke_http_json_rpc("/json_rpc", "flush_txpool", flush_req, flush_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to flush tx pool");

    w1.rescan_blockchain(true, true, false);
    MGINFO_GREEN("Using wallets: " << ENDL
        << "Source:  " << w1.get_account().get_public_address_str(TESTNET) << ENDL << "Path: " << working_folder + "/" + wallet_name << ENDL);

    //lets make some money
    COMMAND_RPC_START_MINING::request start_mining_req = AUTO_VAL_INIT(start_mining_req);
    COMMAND_RPC_START_MINING::response start_mining_rsp = AUTO_VAL_INIT(start_mining_rsp);
    start_mining_req.miner_address = w1.get_account().get_public_address_str(TESTNET);
    start_mining_req.threads_count = 1;
    r = net_utils::invoke_http_json("/start_mining", start_mining_req, start_mining_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to start mining getrandom_outs");
    CHECK_AND_ASSERT_MES(start_mining_rsp.status == CORE_RPC_STATUS_OK, false, "failed to start mining");

    // mine until we reach to block 710
    height_rsp.height = 1;
    while (height_rsp.height < 710)
    {
        misc_utils::sleep_no_w(1000); // The difficulty should be high enough to stop mining before reaching block 800.”
        r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(10));
        CHECK_AND_ASSERT_MES(r, false, "failed to get height from daemon 1");
    }

    // stop mining
    stop_mining(http_client);

    // refresh wallet
    uint64_t blocks_fetched = 0;
    bool received_money;
    w1.refresh(true, 0, blocks_fetched, received_money);

    MGINFO_GREEN("balance: " << w1.balance(0, "SAL", false));

    // create and submit CN SAL stake transaction ~ block 710
    std::vector<cryptonote::tx_destination_entry> dsts;
    cryptonote::tx_destination_entry de;
    de.addr = w1.get_account().get_keys().m_account_address;
    de.amount = amount_to_stake;
    de.is_subaddress = false;
    dsts.push_back(de);
    try
    {
        std::vector<tools::wallet2::pending_tx> ptx;
        ptx = w1.create_transactions_2(dsts, "SAL", "SAL", cryptonote::transaction_type::STAKE, 15, 0, 0, std::vector<uint8_t>(), 0, {});
        for (auto &p: ptx)
            w1.commit_tx(p);
    }
    catch (const std::exception&)
    {   
        LOG_ERROR("failed to create/commit CN stake transaction at height: " << height_rsp.height <<  "with SAL");
        return false;
    }

    // lets make some money
    r = net_utils::invoke_http_json("/start_mining", start_mining_req, start_mining_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to start mining getrandom_outs");
    CHECK_AND_ASSERT_MES(start_mining_rsp.status == CORE_RPC_STATUS_OK, false, "failed to start mining");

    // mine until we reach to block 1010
    while (height_rsp.height < 1010) // difficulty should be high enough to stop mining before reaching block 1080
    {
      misc_utils::sleep_no_w(1000);
      r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(10));
      CHECK_AND_ASSERT_MES(r, false, "failed to get height from daemon");
    }

    // stop mining if not stopped already
    stop_mining(http_client);

    r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(10));

    // Check the height to ensure we are receiving yield payments before the Carrot hard fork at block 1100
    if (!r)
    {
        LOG_ERROR("failed to get height from daemon");
        return false;
    }
    if (height_rsp.height > 1080)
    {
        LOG_PRINT_L0("----!! The current height (" << height_rsp.height << ") exceeds the acceptable range for this test. Please restart the node with an increased fixed difficulty. !!----");
    }


    // refresh wallet
    blocks_fetched = 0;
    received_money = false;
    bool ok = false;
    if(!w1.refresh(true, blocks_fetched, received_money, ok))
    {
        LOG_ERROR( "failed to refresh source wallet from " << daemon_addr_a );
        return false;
    }

    // check if we have received yield from CN SAL stake transaction ~1010
    tools::wallet2::transfer_container incoming_transfers;
    // scan payments
    w1.get_transfers(incoming_transfers);
    CHECK_AND_ASSERT_MES(!incoming_transfers.empty(), false, "failed to get payments");
    bool found = false;
    for (const auto& p: incoming_transfers)
    {
        if (p.m_tx.type == cryptonote::transaction_type::PROTOCOL)
        {
            if (p.m_amount >  amount_to_stake)
            {
                LOG_PRINT_L0("found yield from CN SAL stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
            }
            else
            {
                LOG_ERROR("invalid yield amount from CN SAL stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
                return false;
            }
            found = true;
            break;
        }
    }
    CHECK_AND_ASSERT_MES(found, false, "failed to find yield from CN SAL stake transaction");

    //create and submit CN SAL1 stake transaction
    dsts.clear();
    de.addr = w1.get_account().get_keys().m_account_address;
    de.amount = amount_to_stake;
    de.is_subaddress = false;
    dsts.push_back(de);
    try
    {
        std::vector<tools::wallet2::pending_tx> ptx;
        ptx = w1.create_transactions_2(dsts, "SAL1", "SAL1", cryptonote::transaction_type::STAKE, 15, 0, 0, std::vector<uint8_t>(), 0, {});
        for (auto &p: ptx)
            w1.commit_tx(p);
    }
    catch (const std::exception&)
    {   
        LOG_ERROR("failed to create/commit CN stake transaction at height: " << height_rsp.height <<  "with SAL1");
        return false;
    }

    // lets make some money
    r = net_utils::invoke_http_json("/start_mining", start_mining_req, start_mining_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to start mining getrandom_outs");
    CHECK_AND_ASSERT_MES(start_mining_rsp.status == CORE_RPC_STATUS_OK, false, "failed to start mining");

    // mine until we reach to block 1091
    while (height_rsp.height < 1091)
    {
      misc_utils::sleep_no_w(100);
      r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(1));
      CHECK_AND_ASSERT_MES(r, false, "failed to get height from daemon");
    }

    // stop mining if not stopped already
    stop_mining(http_client);

    // refresh wallet
    blocks_fetched = 0;
    received_money = false;
    ok = false;
    if(!w1.refresh(true, blocks_fetched, received_money, ok))
    {
        LOG_ERROR( "failed to refresh source wallet from " << daemon_addr_a );
        return false;
    }

    // check if we have received yield from CN SAL stake transaction
    incoming_transfers.clear();
    // scan payments
    w1.get_transfers(incoming_transfers);
    CHECK_AND_ASSERT_MES(!incoming_transfers.empty(), false, "failed to get payments");
    found = false;
    for (const auto& p: incoming_transfers)
    {
        if (p.m_block_height < 1010) continue; // skip payments from the first stake transaction
        if (p.m_tx.type == cryptonote::transaction_type::PROTOCOL)
        {
            if (p.m_amount >  amount_to_stake)
            {
                LOG_PRINT_L0("found yield from CN SAL1 stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
            }
            else
            {
                LOG_ERROR("invalid yield amount from CN SAL1 stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
                return false;
            }
            found = true;
            break;
        }
    }
    CHECK_AND_ASSERT_MES(found, false, "failed to find yield from CN SAL1 stake transaction");

    // pop blocks to make sure of the start height
    pop_blocks_req = AUTO_VAL_INIT(pop_blocks_req);
    pop_blocks_req.nblocks = height_rsp.height - 1090; //keep at least 1090 blocks
    r = net_utils::invoke_http_json("/pop_blocks", pop_blocks_req, pop_blocks_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to pop blocks");

    // flush tx pool to make sure of the start state
    r = net_utils::invoke_http_json_rpc("/json_rpc", "flush_txpool", flush_req, flush_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to flush tx pool");

    // rescan blockchain to ensure wallet is in sync after popping blocks
    w1.rescan_blockchain(true, true, false);
    MGINFO_GREEN("Using wallets: " << ENDL
    << "Source:  " << w1.get_account().get_public_address_str(TESTNET) << ENDL << "Path: " << working_folder + "/" + wallet_name << ENDL);

    // Create and stake CN SAL1 stake transaction and get yield after the Carrot hard fork at block 1100 ~ block 1090
    dsts.clear();
    de.addr = w1.get_account().get_keys().m_account_address;
    de.amount = amount_to_stake;
    de.is_subaddress = false;
    dsts.push_back(de);
    try
    {
        std::vector<tools::wallet2::pending_tx> ptx;
        ptx = w1.create_transactions_2(dsts, "SAL1", "SAL1", cryptonote::transaction_type::STAKE, 15, 0, 0, std::vector<uint8_t>(), 0, {});
        for (auto &p: ptx)
            w1.commit_tx(p);
    }
    catch (const std::exception&)
    {   
        LOG_ERROR("failed to create/commit CN stake transaction at height: " << height_rsp.height <<  "with SAL1");
        return false;
    }

    /// lets make some money
    r = net_utils::invoke_http_json("/start_mining", start_mining_req, start_mining_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to start mining getrandom_outs");
    CHECK_AND_ASSERT_MES(start_mining_rsp.status == CORE_RPC_STATUS_OK, false, "failed to start mining");

    // mine until we reach to block 1100
    while (height_rsp.height < 1100)
    {
      misc_utils::sleep_no_w(1000);
      r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(10));
      CHECK_AND_ASSERT_MES(r, false, "failed to get height from daemon");
    }

    // stop mining if not stopped already
    stop_mining(http_client);

    // Carrot will not be able to connect to the network until the node is restarted
    LOG_PRINT_L0("---------------------- PLEASE RESTART THE NODE NOW ----------------------");
    misc_utils::sleep_no_w(1000); // wait for the log to be printed
    LOG_PRINT_L2("Press any key to continue once the node is back online");
    std::string input;
    std::cin >> input;

    // restart the http client connection
    r = http_client.set_server(daemon_addr_a, boost::none);
    CHECK_AND_ASSERT_MES(r, false, "failed to connect to daemon");
    r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "Daemon is not yet back online");

    LOG_PRINT_L0("Daemon is back online, continuing tests");
    LOG_PRINT_L2("Carrot has been enabled.");

    // restart the wallet connection
    w1.init(daemon_addr_a);

    // Create and stake Carrot SAL1 stake transaction ~ block 1100
    dsts.clear();
    de.addr = w1.get_account().get_keys().m_carrot_main_address;
    de.amount = amount_to_stake;
    de.is_subaddress = false;
    dsts.push_back(de);
    try
    {
        std::vector<tools::wallet2::pending_tx> ptx;
        ptx = w1.create_transactions_2(dsts, "SAL1", "SAL1", cryptonote::transaction_type::STAKE, 15, 0, 0, std::vector<uint8_t>(), 0, {});
        for (auto &p: ptx)
            w1.commit_tx(p);
    }
    catch (const std::exception&)
    {   
        LOG_ERROR("failed to create/commit Carrot stake transaction at height: " << height_rsp.height <<  " with SAL1");
        return false;
    }

    // lets make some money
    start_mining_req.miner_address = w1.get_account().get_carrot_public_address_str(TESTNET);
    start_mining_req.threads_count = 1;
    r = net_utils::invoke_http_json("/start_mining", start_mining_req, start_mining_rsp, http_client, std::chrono::seconds(10));
    CHECK_AND_ASSERT_MES(r, false, "failed to start mining getrandom_outs");
    CHECK_AND_ASSERT_MES(start_mining_rsp.status == CORE_RPC_STATUS_OK, false, "failed to start mining");

    // mine until we reach to block 1300
    while (height_rsp.height < 1300)
    {
      misc_utils::sleep_no_w(1000);
      r = net_utils::invoke_http_json("/get_height", height_req, height_rsp, http_client, std::chrono::seconds(10));
      CHECK_AND_ASSERT_MES(r, false, "failed to get height from daemon");
    }

    // stop mining
    stop_mining(http_client);

     // refresh wallet
    blocks_fetched = 0;
    received_money = false;
    ok = false;
    if(!w1.refresh(true, blocks_fetched, received_money, ok))
    {
        LOG_ERROR( "failed to refresh source wallet from " << daemon_addr_a );
        return false;
    }

    // check if we have received yield from Carrot SAL1 stake transaction
    incoming_transfers.clear();
    // scan payments
    w1.get_transfers(incoming_transfers);
    CHECK_AND_ASSERT_MES(!incoming_transfers.empty(), false, "failed to get payments");
    found = false;
    for (const auto& p: incoming_transfers)
    {
        if (p.m_block_height > 1112 || p.m_block_height < 1090) continue; // Skip payments originating from CryptoNote stake transactions
        if (p.m_tx.type == cryptonote::transaction_type::PROTOCOL)
        {
            if (p.m_amount >  amount_to_stake)
            {
                LOG_PRINT_L0("found yield from Carrot SAL1 stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
                LOG_PRINT_L2("Stake was made before the Carrot hard fork and yield received after Carrot hard fork");
            }
            else
            {
                LOG_ERROR("invalid yield amount from Carrot SAL1 stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
                return false;
            }
            found = true;
            break;
        }
    }
    CHECK_AND_ASSERT_MES(found, false, "failed to find yield from Carrot SAL1 stake transaction");


    // check if we have received yield from Carrot SAL1 stake transaction
    incoming_transfers.clear();
    // scan payments
    w1.get_transfers(incoming_transfers);
    CHECK_AND_ASSERT_MES(!incoming_transfers.empty(), false, "failed to get payments");
    found = false;
    for (const auto& p: incoming_transfers)
    {
        if (p.m_block_height <= 1112) continue; // // Skip payments originating from CryptoNote stake transactions
        if (p.m_tx.type == cryptonote::transaction_type::PROTOCOL)
        {
            if (p.m_amount >  amount_to_stake)
            {
                LOG_PRINT_L0("found yield from Carrot SAL1 stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
                LOG_PRINT_L0("All yields from stake transactions have been successfully found!");
            }
            else
            {
                LOG_ERROR("invalid yield amount from Carrot SAL1 stake transaction: " << p.m_amount - amount_to_stake << " at height: " << p.m_block_height);
                return false;
            }
            found = true;
            break;
        }
    }
    CHECK_AND_ASSERT_MES(found, false, "failed to find yield from Carrot SAL1 stake transaction");
    LOG_PRINT_L2("All yields from stake transactions have been successfully found!");
    LOG_PRINT_L0("-----------------------STAKE TRANSACTION TEST PASSED-----------------------");

    return true;
}
