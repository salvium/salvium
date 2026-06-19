// Copyright (c) 2026
//
// Offline blockchain verification harness for tx_rules engine.
// Intended as an adapted blockchain utility that walks an existing LMDB
// chain block-by-block so that height + effective HF are available.
//
// Usage examples:
//   ./monero-blockchain-verification --db-path /path/to/.bitmonero/lmdb
//   ./monero-blockchain-verification --db-path /path/to/lmdb --start-height 100000 --stop-on-first-failure 1
//   ./monero-blockchain-verification --db-path /path/to/lmdb --include-miner 0 --max-failures 100
//
// Notes:
// - This opens the blockchain DB read-only.
// - It uses block.major_version as the effective HF for rule lookup.
// - It requires your tx_rules_engine.{h,cpp}, tx_rules_analyze.cpp,
//   and tx_rules_validate.cpp to be built into the utility.
// - If your fork stores blockchain DB in a different folder layout,
//   just pass the lmdb directory directly via --db-path.

#include <cstdint>
#include <exception>
#include <iomanip>
#include <iostream>
#include <limits>
#include <map>
#include <sstream>
#include <string>
#include <unordered_set>
#include <vector>

#include "blockchain_db/blockchain_db.h"
#include "blockchain_db/lmdb/db_lmdb.h"
#include "common/command_line.h"
#include "common/util.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "string_tools.h"
#include "version.h"

#include "cryptonote_core/tx_rules_engine.h"
#include "cryptonote_core/tx_consensus_checks.h"

namespace po = boost::program_options;
using namespace epee;
using namespace cryptonote;

namespace
{
  // ----------------------------
  // Helpers
  // ----------------------------
  std::string tx_type_to_string(cryptonote::transaction_type t)
  {
    switch (t)
    {
      case cryptonote::MINER:        return "MINER";
      case cryptonote::PROTOCOL:     return "PROTOCOL";
      case cryptonote::TRANSFER:     return "TRANSFER";
      case cryptonote::CONVERT:      return "CONVERT";
      case cryptonote::BURN:         return "BURN";
      case cryptonote::STAKE:        return "STAKE";
      case cryptonote::RETURN:       return "RETURN";
      case cryptonote::AUDIT:        return "AUDIT";
      case cryptonote::CREATE_TOKEN: return "CREATE_TOKEN";
      case cryptonote::ROLLUP:       return "ROLLUP";
      default:
      {
        std::ostringstream oss;
        oss << "UNKNOWN(" << static_cast<int>(t) << ")";
        return oss.str();
      }
    }
  }

  template <typename PodT>
  std::string pod_to_hex_string(const PodT &pod)
  {
    return epee::string_tools::pod_to_hex(pod);
  }

  static std::optional<std::string> get_created_token_asset_type(const cryptonote::transaction& tx)
  {
    if (static_cast<cryptonote::transaction_type>(tx.type) != cryptonote::CREATE_TOKEN)
      return std::nullopt;

    // Replace this with your actual field path.
    // Examples might be:
    //   return tx.token_metadata.asset_type;
    //   return tx.token.token_metadata.asset_type;
    //   return boost::get<cryptonote::tx_extra_create_token>(...)->metadata.asset_type;
    //
    // Placeholder:
    if (!tx.token_metadata.asset_type.empty())
      return tx.token_metadata.asset_type;

    return std::nullopt;
  }

  static bool token_set_asset_exists(const void* self, const std::string& asset_type)
  {
    const auto* known_tokens =
      static_cast<const std::unordered_set<std::string>*>(self);

    return known_tokens && known_tokens->count(asset_type) != 0;
  }

  static bool token_set_ticker_exists(const void* self, const std::string& ticker)
  {
    const std::string asset_type = "sal" + ticker;
    return token_set_asset_exists(self, asset_type);
  }

  static cryptonote::txrules::token_state_view make_token_state_view(const std::unordered_set<std::string>& known_tokens)
  {
    cryptonote::txrules::token_state_view view;
    view.self = &known_tokens;
    view.asset_exists = &token_set_asset_exists;
    view.ticker_exists = &token_set_ticker_exists;
    return view;
  }
  
  struct counters
  {
    uint64_t checked = 0;
    uint64_t passed  = 0;
    uint64_t failed  = 0;
  };

  struct failure_record
  {
    uint64_t height = 0;
    uint8_t  hf = 0;
    std::string block_hash;
    std::string tx_hash;
    std::string tx_type;
    uint8_t tx_version = 0;
    uint8_t rct_type = 0;
    bool is_coinbase = false;
    std::string reason;
  };

  bool validate_one_tx(const cryptonote::transaction &tx,
                       uint64_t height,
                       uint8_t hf,
                       const std::string &block_hash_hex,
                       const std::unordered_set<std::string>& known_tokens,
                       cryptonote::txrules::block_state_overlay* block_overlay,
                       std::vector<failure_record> &failures,
                       std::map<uint8_t, counters> &per_hf,
                       std::map<std::string, counters> &per_type,
                       uint64_t &total_checked,
                       uint64_t &total_passed,
                       uint64_t &total_failed)
  {
    cryptonote::txrules::validation_env env;
    env.hf = hf;
    env.height = height;
    env.mode = cryptonote::txrules::validation_mode::block;
    env.token_state = make_token_state_view(known_tokens);
    env.block_overlay = block_overlay;

    cryptonote::txrules::consensus_result result;

    bool ok = cryptonote::txrules::check_tx_consensus(tx, env, &result);

    std::string why = result.reason;

    const auto ctx = cryptonote::txrules::analyze_tx(tx, env);

    const std::string type_str = tx_type_to_string(ctx.type);

    ++total_checked;
    ++per_hf[hf].checked;
    ++per_type[type_str].checked;

    if (ok)
    {
      ++total_passed;
      ++per_hf[hf].passed;
      ++per_type[type_str].passed;
      return true;
    }

    ++total_failed;
    ++per_hf[hf].failed;
    ++per_type[type_str].failed;

    failure_record rec;
    rec.height = height;
    rec.hf = hf;
    rec.block_hash = block_hash_hex;
    rec.tx_hash = pod_to_hex_string(cryptonote::get_transaction_hash(tx));
    rec.tx_type = type_str;
    rec.tx_version = ctx.txver;
    rec.rct_type = ctx.rct_type;
    rec.is_coinbase = ctx.is_coinbase;
    rec.reason = why.empty() ? "unknown validation failure" : why;
    failures.push_back(std::move(rec));

    return false;
  }

  void print_summary(uint64_t start_height,
                     uint64_t end_height,
                     uint64_t total_checked,
                     uint64_t total_passed,
                     uint64_t total_failed,
                     const std::map<uint8_t, counters> &per_hf,
                     const std::map<std::string, counters> &per_type,
                     const std::vector<failure_record> &failures)
  {
    std::cout << "\n=== blockchain_verification summary ===\n";
    std::cout << "Range:           " << start_height << " .. " << end_height << "\n";
    std::cout << "Checked txs:     " << total_checked << "\n";
    std::cout << "Passed txs:      " << total_passed << "\n";
    std::cout << "Failed txs:      " << total_failed << "\n";

    std::cout << "\nPer-HF:\n";
    for (const auto &kv : per_hf)
    {
      std::cout << "  HF " << static_cast<unsigned>(kv.first)
                << ": checked=" << kv.second.checked
                << " passed=" << kv.second.passed
                << " failed=" << kv.second.failed
                << "\n";
    }

    std::cout << "\nPer-type:\n";
    for (const auto &kv : per_type)
    {
      std::cout << "  " << kv.first
                << ": checked=" << kv.second.checked
                << " passed=" << kv.second.passed
                << " failed=" << kv.second.failed
                << "\n";
    }

    if (!failures.empty())
    {
      std::cout << "\nFailures:\n";
      for (const auto &f : failures)
      {
        std::cout
            << "  height=" << f.height
            << " hf=" << static_cast<unsigned>(f.hf)
            << " block=" << f.block_hash
            << " tx=" << f.tx_hash
            << " type=" << f.tx_type
            << " txver=" << static_cast<unsigned>(f.tx_version)
            << " rct=" << static_cast<unsigned>(f.rct_type)
            << " coinbase=" << (f.is_coinbase ? "true" : "false")
            << " reason=\"" << f.reason << "\"\n";
      }
    }

    std::cout << "=== end summary ===\n";
  }

  std::string default_lmdb_path_guess()
  {
    // Fallback only. Passing --db-path explicitly is recommended.
    const std::string data_dir = tools::get_default_data_dir();
#ifdef _WIN32
    return data_dir + "\\lmdb";
#else
    return data_dir + "/lmdb";
#endif
  }
} // anonymous namespace

int main(int argc, const char* argv[])
{
  TRY_ENTRY();

  epee::string_tools::set_module_name_and_folder(argv[0]);

  // ----------------------------
  // CLI args
  // ----------------------------
  const command_line::arg_descriptor<std::string> arg_db_path = {
      "db-path", "Path to the blockchain lmdb directory", ""};

  const command_line::arg_descriptor<uint64_t> arg_start_height = {
      "start-height", "First block height to verify", 0};

  const command_line::arg_descriptor<uint64_t> arg_end_height = {
      "end-height",
      "Last block height to verify inclusive (default: chain tip)",
      std::numeric_limits<uint64_t>::max()};

  const command_line::arg_descriptor<bool> arg_include_miner = {
      "include-miner", "Validate miner tx as well as normal txs", false};

  const command_line::arg_descriptor<bool> arg_stop_on_first_failure = {
      "stop-on-first-failure", "Exit immediately on first validation failure", false};

  const command_line::arg_descriptor<uint64_t> arg_max_failures = {
      "max-failures",
      "Stop after this many failures (0 = unlimited)",
      0};

  const command_line::arg_descriptor<uint64_t> arg_progress_interval = {
      "progress-interval",
      "Print progress every N blocks",
      10000};

  const command_line::arg_descriptor<uint64_t> arg_log_level = {
      "log-level", "0-4 or categories", 0};

  po::options_description desc_cmd_only("Command line options");
  po::options_description desc_cmd_sett("Command line options and settings options");
  
  command_line::add_arg(desc_cmd_sett, arg_db_path);
  command_line::add_arg(desc_cmd_sett, arg_start_height);
  command_line::add_arg(desc_cmd_sett, arg_end_height);
  command_line::add_arg(desc_cmd_sett, arg_include_miner);
  command_line::add_arg(desc_cmd_sett, arg_stop_on_first_failure);
  command_line::add_arg(desc_cmd_sett, arg_max_failures);
  command_line::add_arg(desc_cmd_sett, arg_progress_interval);
  command_line::add_arg(desc_cmd_sett, arg_log_level);
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

  const uint64_t log_level = command_line::get_arg(vm, arg_log_level);
  mlog_configure("", true);
  mlog_set_log_level(static_cast<int>(log_level));

  std::string db_path = command_line::get_arg(vm, arg_db_path);
  if (db_path.empty())
    db_path = default_lmdb_path_guess();

  const uint64_t start_height = command_line::get_arg(vm, arg_start_height);
  uint64_t end_height = command_line::get_arg(vm, arg_end_height);
  const bool include_miner = command_line::get_arg(vm, arg_include_miner);
  const bool stop_on_first_failure = command_line::get_arg(vm, arg_stop_on_first_failure);
  const uint64_t max_failures = command_line::get_arg(vm, arg_max_failures);
  const uint64_t progress_interval = std::max<uint64_t>(1, command_line::get_arg(vm, arg_progress_interval));

  std::cout << "Opening blockchain DB read-only at: " << db_path << "\n";

  cryptonote::BlockchainLMDB db;
  try
  {
    db.open(db_path, DBF_RDONLY);
  }
  catch (const std::exception &e)
  {
    std::cerr << "Failed to open DB: " << e.what() << "\n";
    return 1;
  }

  uint64_t chain_height = 0;
  try
  {
    chain_height = db.height();
  }
  catch (const std::exception &e)
  {
    std::cerr << "Failed to query DB height: " << e.what() << "\n";
    db.close();
    return 1;
  }

  if (chain_height == 0)
  {
    std::cerr << "Blockchain DB appears empty\n";
    db.close();
    return 1;
  }

  const uint64_t tip_height = chain_height - 1;
  if (start_height > tip_height)
  {
    std::cerr << "start-height " << start_height << " is beyond chain tip " << tip_height << "\n";
    db.close();
    return 1;
  }

  if (end_height == std::numeric_limits<uint64_t>::max() || end_height > tip_height)
    end_height = tip_height;

  if (end_height < start_height)
  {
    std::cerr << "end-height must be >= start-height\n";
    db.close();
    return 1;
  }

  std::cout << "Chain height:    " << chain_height << "\n";
  std::cout << "Verify range:    " << start_height << " .. " << end_height << "\n";
  std::cout << "Include miner:   " << (include_miner ? "yes" : "no") << "\n";
  std::cout << "Stop on failure: " << (stop_on_first_failure ? "yes" : "no") << "\n";
  std::cout << "Max failures:    " << max_failures << "\n";

  uint64_t total_checked = 0;
  uint64_t total_passed = 0;
  uint64_t total_failed = 0;

  std::map<uint8_t, counters> per_hf;
  std::map<std::string, counters> per_type;
  std::vector<failure_record> failures;

  bool aborted_early = false;

  std::unordered_set<std::string> known_tokens;
  
  try
  {
    for (uint64_t height = start_height; height <= end_height; ++height)
    {
      if ((height - start_height) % progress_interval == 0)
      {
        std::cout << "Progress: height " << height << " / " << end_height
                  << "  checked=" << total_checked
                  << " failed=" << total_failed
                  << "\n";
      }

      const cryptonote::block blk = db.get_block_from_height(height);
      const crypto::hash blk_hash = cryptonote::get_block_hash(blk);
      const std::string blk_hash_hex = pod_to_hex_string(blk_hash);

      cryptonote::txrules::block_state_overlay block_overlay;
      
      // Use block major version as the effective hard fork version
      const uint8_t hf = static_cast<uint8_t>(blk.major_version);

      // Miner tx
      if (include_miner)
      {
        const bool ok = validate_one_tx(
            blk.miner_tx,
            height,
            hf,
            blk_hash_hex,
            known_tokens,
            &block_overlay,
            failures,
            per_hf,
            per_type,
            total_checked,
            total_passed,
            total_failed);

        if (!ok)
        {
          if (stop_on_first_failure || (max_failures != 0 && total_failed >= max_failures))
          {
            aborted_early = true;
            break;
          }
        }
      }

      // Normal txs in this block
      for (const crypto::hash &txid : blk.tx_hashes)
      {
        cryptonote::transaction tx;
        if (!db.get_tx(txid, tx))
        {
          ++total_checked;
          ++total_failed;
          ++per_hf[hf].checked;
          ++per_hf[hf].failed;
          ++per_type["DB_FETCH_FAILED"].checked;
          ++per_type["DB_FETCH_FAILED"].failed;

          failure_record rec;
          rec.height = height;
          rec.hf = hf;
          rec.block_hash = blk_hash_hex;
          rec.tx_hash = pod_to_hex_string(txid);
          rec.tx_type = "UNKNOWN";
          rec.reason = "failed to fetch tx blob from DB";
          failures.push_back(std::move(rec));

          if (stop_on_first_failure || (max_failures != 0 && total_failed >= max_failures))
          {
            aborted_early = true;
            break;
          }
          continue;
        }

        const bool ok = validate_one_tx(
            tx,
            height,
            hf,
            blk_hash_hex,
            known_tokens,
            &block_overlay,
            failures,
            per_hf,
            per_type,
            total_checked,
            total_passed,
            total_failed);

        if (ok)
        {
          const auto tx_type = static_cast<cryptonote::transaction_type>(tx.type);
          if (tx_type == cryptonote::CREATE_TOKEN)
          {
            if (auto asset = get_created_token_asset_type(tx)) {
              std::string asset_type = "sal" + *asset;
              known_tokens.insert(asset_type);
            } else {
              std::cerr << "Warning: CREATE_TOKEN at height " << height
                        << " validated but asset_type could not be extracted\n";
            }
          }
        }
        
        if (!ok)
        {
          if (stop_on_first_failure || (max_failures != 0 && total_failed >= max_failures))
          {
            aborted_early = true;
            break;
          }
        }
      }

      if (aborted_early || height == end_height)
        break;
    }
  }
  catch (const std::exception &e)
  {
    std::cerr << "Verification aborted with exception: " << e.what() << "\n";
    db.close();
    print_summary(start_height, end_height, total_checked, total_passed, total_failed, per_hf, per_type, failures);
    return 1;
  }

  db.close();

  print_summary(start_height, end_height, total_checked, total_passed, total_failed, per_hf, per_type, failures);

  if (aborted_early)
  {
    std::cout << "Stopped early due to failure policy\n";
    return 2;
  }

  return (total_failed == 0) ? 0 : 2;

  CATCH_ENTRY_L0("main", 1);
}
