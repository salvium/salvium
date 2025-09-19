#include <cstdlib>
#include <iostream>
#include <memory>
#include <stdexcept>
#include <string>
#include <array>

#define IN_UNIT_TESTS
 
#include "gtest/gtest.h"

#include "cryptonote_core/blockchain.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_core/cryptonote_core.h"

using namespace cryptonote;

std::string exec(const char* cmd) {
    char buffer[128];
    std::string result = "";
    std::unique_ptr<FILE, decltype(&pclose)> pipe(popen(cmd, "r"), pclose);

    if (!pipe) {
        throw std::runtime_error("popen() failed!");
    }

    while (fgets(buffer, sizeof buffer, pipe.get()) != nullptr) {
        result += buffer;
    }

    return result;
}

TEST(miner, node_cryptonodefork_utils_pre_carrot)
{
    block b;
    b.major_version = 9;
    b.miner_tx.type = transaction_type::MINER;
    b.miner_tx.pruned = false;
    b.miner_tx.version = 2;
    b.miner_tx.unlock_time = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
    b.miner_tx.vin.reserve(1);
    b.miner_tx.vout.reserve(1);
    b.miner_tx.extra.reserve(MAX_TX_EXTRA_SIZE);
    b.miner_tx.rct_signatures.type = rct::RCTTypeNull;

    b.miner_tx.vin.emplace_back(cryptonote::txin_gen{.height = static_cast<size_t>(500)});
    b.miner_tx.vout.push_back(cryptonote::tx_out{
        12311111111,
        cryptonote::txout_to_key{
            crypto::rand<crypto::public_key>(), //key
            "SAL1",
            0 //unlock_time
        }
    });

    blobdata blob = block_to_blob(b);
    std::string hex_blob = epee::string_tools::buff_to_hex_nodelimer(blob);

    std::cout << "C++ block blob: " << hex_blob << std::endl;

    // Execute JavaScript using Node.js
    std::string result = exec(("NODE_PATH=$(npm root -g) node ~/salvium/tests/unit_tests/node-cryptofork-utils.js " + hex_blob).c_str());
    std::cout << "JavaScript result: " << result << std::endl;
}

TEST(miner, node_cryptonodefork_utils_pre_carrot_protocol)
{
    block b;
    b.major_version = 9;
    b.protocol_tx.type = transaction_type::PROTOCOL;
    b.protocol_tx.pruned = false;
    b.protocol_tx.version = 2;
    b.protocol_tx.unlock_time = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
    b.protocol_tx.vin.reserve(1);
    b.protocol_tx.extra.reserve(MAX_TX_EXTRA_SIZE);
    b.protocol_tx.rct_signatures.type = rct::RCTTypeNull;

    b.protocol_tx.vin.emplace_back(cryptonote::txin_gen{.height = static_cast<size_t>(500)});

    blobdata blob = block_to_blob(b);
    std::string hex_blob = epee::string_tools::buff_to_hex_nodelimer(blob);

    std::cout << "C++ block blob: " << hex_blob << std::endl;

    // Execute JavaScript using Node.js
    std::string result = exec(("NODE_PATH=$(npm root -g) node ~/salvium/tests/unit_tests/node-cryptofork-utils.js " + hex_blob).c_str());
    std::cout << "JavaScript result: " << result << std::endl;
}




TEST(miner, node_cryptonodefork_utils_carrot)
{
    block b;
    b.major_version = HF_VERSION_CARROT;
    b.miner_tx.type = transaction_type::MINER;
    b.miner_tx.pruned = false;
    b.miner_tx.version = TRANSACTION_VERSION_CARROT;
    b.miner_tx.unlock_time = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
    b.miner_tx.vin.reserve(1);
    b.miner_tx.vout.reserve(1);
    b.miner_tx.extra.reserve(MAX_TX_EXTRA_SIZE);
    b.miner_tx.rct_signatures.type = rct::RCTTypeNull;

    b.miner_tx.vin.emplace_back(cryptonote::txin_gen{.height = static_cast<size_t>(1500)});
    b.miner_tx.vout.push_back(cryptonote::tx_out{
        12311111111,
        cryptonote::txout_to_carrot_v1{
            .key = crypto::rand<crypto::public_key>(),
            .asset_type = "SAL1",
            .view_tag = crypto::rand<carrot::view_tag_t>(),
            .encrypted_janus_anchor = crypto::rand<carrot::encrypted_janus_anchor_t>()
        }
    });

    blobdata blob = block_to_blob(b);
    std::string hex_blob = epee::string_tools::buff_to_hex_nodelimer(blob);

    std::cout << "C++ block blob: " << hex_blob << std::endl;

    // Execute JavaScript using Node.js
    std::string result = exec(("NODE_PATH=$(npm root -g) node ~/salvium/tests/unit_tests/node-cryptofork-utils.js " + hex_blob).c_str());
    std::cout << "JavaScript result: " << result << std::endl;
}

TEST(miner, node_cryptonodefork_utils_carrot_protocol)
{
    block b;
    b.major_version = HF_VERSION_CARROT;

    b.protocol_tx.type = transaction_type::PROTOCOL;
    b.protocol_tx.pruned = false;
    b.protocol_tx.version = TRANSACTION_VERSION_CARROT;
    b.protocol_tx.unlock_time = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
    b.protocol_tx.vin.reserve(1);
    b.protocol_tx.extra.reserve(MAX_TX_EXTRA_SIZE);
    b.protocol_tx.rct_signatures.type = rct::RCTTypeNull;

    b.protocol_tx.vin.emplace_back(cryptonote::txin_gen{.height = static_cast<size_t>(1500)});

    blobdata blob = block_to_blob(b);
    std::string hex_blob = epee::string_tools::buff_to_hex_nodelimer(blob);

    std::cout << "C++ block blob: " << hex_blob << std::endl;

    // Execute JavaScript using Node.js
    std::string result = exec(("NODE_PATH=$(npm root -g) node ~/salvium/tests/unit_tests/node-cryptofork-utils.js " + hex_blob).c_str());
    std::cout << "JavaScript result: " << result << std::endl;
}
