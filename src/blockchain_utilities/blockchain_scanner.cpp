// Copyright (c) 2014-2019, The Monero Project
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

#include <boost/algorithm/string.hpp>
#include <boost/filesystem.hpp>
#include "common/command_line.h"
#include "common/i18n.h"
#include "common/password.h"
#include "common/varint.h"
#include "cryptonote_basic/cryptonote_boost_serialization.h"
#include "cryptonote_core/tx_pool.h"
#include "cryptonote_core/cryptonote_core.h"
#include "cryptonote_core/cryptonote_tx_utils.h"
#include "cryptonote_core/blockchain.h"
#include "blockchain_db/blockchain_db.h"
#include "oracle/pricing_record.h"
#include "version.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "bcutil"

#define DELIM "|"
#define DEF_STAKE_MODE "all"

namespace po = boost::program_options;
using namespace epee;
using namespace cryptonote;

namespace scanner
{
  const char* tr(const char* str)
  {
    return i18n_translate(str, "tools::scanner");
  }
}

static bool stop_requested = false;

int main(int argc, char* argv[])
{
  TRY_ENTRY();

  epee::string_tools::set_module_name_and_folder(argv[0]);

  uint32_t log_level = 0;
  uint64_t block_start = 0;
  uint64_t block_stop = 0;

  tools::on_startup();

  boost::filesystem::path output_file_path;

  po::options_description desc_cmd_only("Command line options");
  po::options_description desc_cmd_sett("Command line options and settings options");
  const command_line::arg_descriptor<std::string> arg_log_level  = {"log-level",  "0-4 or categories", ""};
  const command_line::arg_descriptor<uint64_t> arg_block_start  = {"block-start", "start at block number", block_start};
  const command_line::arg_descriptor<uint64_t> arg_block_stop = {"block-stop", "Stop at block number", block_stop};
  const command_line::arg_descriptor<std::string> arg_delimiter  = {"delimiter", "\"<string>\"", DELIM};
  const command_line::arg_descriptor<std::string> arg_stake_mode  = {"stake", "\"<string>\"", DEF_STAKE_MODE};
  const command_line::arg_descriptor<bool> arg_check_asset_types  = {"check-asset-types", "Scan for asset-type issues", false};

  command_line::add_arg(desc_cmd_sett, cryptonote::arg_data_dir);
  command_line::add_arg(desc_cmd_sett, cryptonote::arg_testnet_on);
  command_line::add_arg(desc_cmd_sett, cryptonote::arg_stagenet_on);
  command_line::add_arg(desc_cmd_sett, arg_log_level);
  command_line::add_arg(desc_cmd_sett, arg_block_start);
  command_line::add_arg(desc_cmd_sett, arg_block_stop);
  command_line::add_arg(desc_cmd_sett, arg_delimiter);
  command_line::add_arg(desc_cmd_sett, arg_stake_mode);
  command_line::add_arg(desc_cmd_sett, arg_check_asset_types);
  command_line::add_arg(desc_cmd_only, command_line::arg_help);

  po::options_description desc_options("Allowed options");
  desc_options.add(desc_cmd_only).add(desc_cmd_sett);

  po::variables_map vm;
  bool r = command_line::handle_error_helper(desc_options, [&]()
  {
    auto parser = po::command_line_parser(argc, argv).options(desc_options);
    po::store(parser.run(), vm);
    po::notify(vm);
    return true;
  });
  if (! r)
    return 1;

  if (command_line::get_arg(vm, command_line::arg_help))
  {
    std::cout << "Salvium '" << MONERO_RELEASE_NAME << "' (v" << MONERO_VERSION_FULL << ")" << ENDL << ENDL;
    std::cout << desc_options << std::endl;
    return 1;
  }

  mlog_configure(mlog_get_default_log_path("monero-blockchain-stats.log"), true);
  if (!command_line::is_arg_defaulted(vm, arg_log_level))
    mlog_set_log(command_line::get_arg(vm, arg_log_level).c_str());
  else
    mlog_set_log(std::string(std::to_string(log_level) + ",bcutil:INFO").c_str());

  LOG_PRINT_L0("Starting...");

  std::string opt_data_dir = command_line::get_arg(vm, cryptonote::arg_data_dir);
  bool opt_testnet = command_line::get_arg(vm, cryptonote::arg_testnet_on);
  bool opt_stagenet = command_line::get_arg(vm, cryptonote::arg_stagenet_on);
  network_type net_type = opt_testnet ? TESTNET : opt_stagenet ? STAGENET : MAINNET;
  block_start = command_line::get_arg(vm, arg_block_start);
  block_stop = command_line::get_arg(vm, arg_block_stop);
  std::string delimiter = command_line::get_arg(vm, arg_delimiter);
  std::string stake_mode = command_line::get_arg(vm, arg_stake_mode);
  bool opt_check_asset_types = command_line::get_arg(vm, arg_check_asset_types);

  // If we wanted to use the memory pool, we would set up a fake_core.

  // Use Blockchain instead of lower-level BlockchainDB for two reasons:
  // 1. Blockchain has the init() method for easy setup
  // 2. exporter needs to use get_current_blockchain_height(), get_block_id_by_height(), get_block_by_hash()
  //
  // cannot match blockchain_storage setup above with just one line,
  // e.g.
  //   Blockchain* core_storage = new Blockchain(NULL);
  // because unlike blockchain_storage constructor, which takes a pointer to
  // tx_memory_pool, Blockchain's constructor takes tx_memory_pool object.
  LOG_PRINT_L0("Initializing source blockchain (BlockchainDB)");
  std::unique_ptr<BlockchainAndPool> core_storage = std::make_unique<BlockchainAndPool>();

  BlockchainDB* db = new_db();
  if (db == NULL)
  {
    LOG_ERROR("Failed to initialize a database");
    throw std::runtime_error("Failed to initialize a database");
  }
  LOG_PRINT_L0("database: LMDB");

  boost::filesystem::path folder(opt_data_dir);
  if (opt_stagenet) {
    folder /= std::to_string(STAGENET_VERSION);
  } else if (opt_testnet) {
    folder /= std::to_string(TESTNET_VERSION);
  }
  folder /= db->get_db_name();
  LOG_PRINT_L0("Loading blockchain from folder " << folder << " ...");
  const std::string filename = folder.string();

  try
  {
    db->open(filename, DBF_RDONLY);
  }
  catch (const std::exception& e)
  {
    LOG_PRINT_L0("Error opening database: " << e.what());
    return 1;
  }
  r = core_storage->blockchain.init(db, net_type);

  CHECK_AND_ASSERT_MES(r, 1, "Failed to initialize source blockchain storage");
  LOG_PRINT_L0("Source blockchain storage initialized OK");

  tools::signal_handler::install([](int type) {
    stop_requested = true;
  });

  const uint64_t db_height = db->height();
  if (!block_stop)
      block_stop = db_height;
  MINFO("Starting from height " << block_start << ", stopping at height " << block_stop);

/*
 * The default output can be plotted with GnuPlot using these commands:
set key autotitle columnhead
set title "Salvium Blockchain Growth"
set timefmt "%Y-%m-%d"
set xdata time
set xrange ["2014-04-17":*]
set format x "%Y-%m-%d"
set yrange [0:*]
set y2range [0:*]
set ylabel "Txs/Day"
set y2label "Bytes"
set y2tics nomirror
plot 'stats.csv' index "DATA" using (timecolumn(1,"%Y-%m-%d")):4 with lines, '' using (timecolumn(1,"%Y-%m-%d")):7 axes x1y2 with lines
 */

  // spit out a comment that GnuPlot can use as an index
  std::cout << ENDL << "# DATA" << ENDL;
  std::cout << "Date" << delimiter << "Height" << delimiter << "Transaction ID" << delimiter << "Reason" << delimiter << "Extra Information";
  std::cout << ENDL;

#define MAX_INOUT	0xffffffff
#define MAX_RINGS	0xffffffff

  struct tm prevtm = {0}, currtm;
  uint64_t prevsz = 0, currsz = 0;
  uint64_t prevtxs = 0, currtxs = 0;
  uint64_t currblks = 0;
  uint32_t txhr[24] = {0};
  unsigned int i;

  const std::map<uint8_t, std::pair<uint64_t, std::pair<std::string, std::string>>> audit_hard_forks = get_config(net_type).AUDIT_HARD_FORKS;
  
  for (uint64_t h = block_start; h < block_stop; ++h)
  {
    cryptonote::blobdata bd = db->get_block_blob_from_height(h);
    cryptonote::block blk;
    if (!cryptonote::parse_and_validate_block_from_blob(bd, blk))
    {
      LOG_PRINT_L0("Bad block from db");
      return 1;
    }
    time_t tt = blk.timestamp;
    char timebuf[64];
    epee::misc_utils::get_gmt_time(tt, currtm);
    if (!prevtm.tm_year)
      prevtm = currtm;
    // catch change of day
    if (currtm.tm_mday > prevtm.tm_mday || (currtm.tm_mday == 1 && prevtm.tm_mday > 27))
    {
      // check for timestamp fudging around month ends
      if (prevtm.tm_mday == 1 && currtm.tm_mday > 27)
        goto skip;
      strftime(timebuf, sizeof(timebuf), "%Y-%m-%d", &currtm);
      prevtm = currtm;
    }
skip:
    currsz += bd.size();
    uint64_t coinbase_amount;
    uint64_t tx_fee_amount = 0;
    std::set<std::string> used_assets, miner_tx_assets, protocol_tx_assets;
    std::map<size_t, std::vector<std::string>> used_tx_versions;
    used_assets.insert("SAL");

    uint8_t hf_version = blk.major_version;
    
    // Check TX versions
    if (blk.miner_tx.version != 2) {
      std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << blk.miner_tx.hash << "" << delimiter << "invalid miner TX version detected" << delimiter << "version:" << blk.miner_tx.version << std::endl;
    }
    if (blk.protocol_tx.version != 2 && h>0) {
      std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << blk.protocol_tx.hash << "" << delimiter << "invalid protocol TX version detected" << delimiter << "version:" << blk.protocol_tx.version << std::endl;
    }
    
    // Get the miner_tx assets
    std::set<crypto::public_key> used_keys;
    for (const auto& miner_tx_vout : blk.miner_tx.vout) {
      std::string asset_type;
      if (!cryptonote::get_output_asset_type(miner_tx_vout, asset_type)) {
        throw std::runtime_error("Aborting: failed to get output asset type from miner_tx");
      } else if (blk.major_version >= HF_VERSION_SALVIUM_ONE_PROOFS && asset_type != "SAL1") {
        throw std::runtime_error("Aborting: invalid output asset type from miner_tx: " + asset_type);
      } else if (blk.major_version < HF_VERSION_SALVIUM_ONE_PROOFS && asset_type != "SAL") {
        throw std::runtime_error("Aborting: invalid output asset type from miner_tx: " + asset_type + ", HF:" + std::to_string(blk.major_version));
      }
      miner_tx_assets.insert(asset_type);
      if (miner_tx_vout.amount > 13500000000 && h>0) {
        std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << blk.miner_tx.hash << "" << delimiter << "invalid miner TX amount detected" << delimiter << "amount:" << miner_tx_vout.amount << std::endl;
      }
      crypto::public_key key;
      cryptonote::get_output_public_key(miner_tx_vout, key);
      if (used_keys.count(key)) {
        std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << blk.miner_tx.hash << "" << delimiter << "invalid miner TX - duplicate output detected" << delimiter << "pubkey:" << key << std::endl;
      }
      used_keys.insert(key);
    }

    // Get the protocol_tx assets
    used_keys.clear();
    for (const auto& protocol_tx_vout : blk.protocol_tx.vout) {
      std::string asset_type;
      if (!cryptonote::get_output_asset_type(protocol_tx_vout, asset_type)) {
        throw std::runtime_error("Aborting: failed to get output asset type from protocol_tx");
      } else if (blk.major_version >= HF_VERSION_SALVIUM_ONE_PROOFS && asset_type != "SAL1") {
        throw std::runtime_error("Aborting: invalid output asset type from protocol_tx: " + asset_type);
      } else if (blk.major_version < HF_VERSION_SALVIUM_ONE_PROOFS && asset_type != "SAL") {
        throw std::runtime_error("Aborting: invalid output asset type from protocol_tx: " + asset_type + ", HF:" + std::to_string(blk.major_version));
      }
      protocol_tx_assets.insert(asset_type);
      if (protocol_tx_vout.amount > 25000000000000) {
        //std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << blk.protocol_tx.hash << "" << delimiter << "large protocol TX amount detected from height " << (h-audit_lock_period) << delimiter << "amount:" << protocol_tx_vout.amount << std::endl;
      }
      crypto::public_key key;
      cryptonote::get_output_public_key(protocol_tx_vout, key);
      if (used_keys.count(key)) {
        std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << blk.protocol_tx.hash << "" << delimiter << "invalid protocol TX - duplicate output detected" << delimiter << "pubkey:" << key << std::endl;
      }
      used_keys.insert(key);
    }

    for (const auto& tx_id : blk.tx_hashes)
    {
      if (tx_id == crypto::null_hash)
      {
        throw std::runtime_error("Aborting: tx == null_hash");
      }
      if (!db->get_pruned_tx_blob(tx_id, bd))
      {
        throw std::runtime_error("Aborting: tx not found");
      }
      transaction tx;
      if (!parse_and_validate_tx_base_from_blob(bd, tx))
      {
        std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << tx_id << "" << delimiter << "invalid TX detected" << delimiter << std::endl;
        continue;
      }
      currsz += bd.size();
      if (db->get_prunable_tx_blob(tx_id, bd))
        currsz += bd.size();
      currtxs++;

      if (tx.type != cryptonote::transaction_type::TRANSFER &&
          tx.type != cryptonote::transaction_type::BURN &&
          tx.type != cryptonote::transaction_type::STAKE &&
          tx.type != cryptonote::transaction_type::AUDIT) {
        std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << tx_id << "" << delimiter << "invalid TX type detected" << delimiter << "type:" << (uint8_t)tx.type << std::endl;
      }
      
      if ((tx.version != 2 && hf_version < HF_VERSION_ENABLE_N_OUTS) || (tx.version != 3 && hf_version < HF_VERSION_ENABLE_N_OUTS && tx.type == cryptonote::transaction_type::TRANSFER)) {
        std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << tx_id << "" << delimiter << "invalid TX version detected" << delimiter << "version:" << tx.version << std::endl;
      }
    
      if (tx.type == cryptonote::transaction_type::STAKE && stake_mode.compare("off")) {
        if (stake_mode.compare("all") == 0) {
          std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << tx_id << "" << delimiter << "STAKE TX detected" << delimiter << "amount:" << (tx.amount_burnt / 100000000) << std::endl;
        } else if (stake_mode.compare("large") == 0 && tx.amount_burnt > 25000000000000llu) {
          std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << tx_id << "" << delimiter << "large STAKE TX detected" << delimiter << "amount:" << (tx.amount_burnt / 100000000) << std::endl;
        }
      }

      if (opt_check_asset_types) {
        if (tx.source_asset_type != "SAL") {
          throw std::runtime_error("Aborting: invalid source asset type found in tx");
        } else if (tx.destination_asset_type != "SAL") {
          if (tx.destination_asset_type == "BURN") {
            std::cout << timebuf << "" << delimiter << "" << h << "" << delimiter << "" << tx_id << "" << delimiter << "BURN TX detected" << delimiter << "amount:" << tx.amount_burnt << std::endl;
          } else {
            throw std::runtime_error("Aborting: invalid destination asset type found in tx");
          }
        }

        for (const auto& tx_vout : tx.vout) {
          std::string asset_type;
          if (!cryptonote::get_output_asset_type(tx_vout, asset_type)) {
            throw std::runtime_error("Aborting: failed to get output asset type from tx");
          } else if (asset_type != "SAL") {
            throw std::runtime_error("Aborting: invalid output asset type from tx");
          }
        }
            
        // Add the source currency to the list of expected ones
        used_assets.insert(tx.source_asset_type);
      }
    }
    
    currblks++;

    if (stop_requested)
      break;
  }

  return 0;

  CATCH_ENTRY("Stats reporting error", 1);
}
