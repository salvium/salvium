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

#include <algorithm>
#include <cstdint>
#include <exception>
#include <iomanip>
#include <fstream>
#include <iostream>
#include <limits>
#include <map>
#include <sstream>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

#include <boost/multiprecision/cpp_int.hpp>

#include "blockchain_db/blockchain_db.h"
#include "blockchain_db/lmdb/db_lmdb.h"
#include "common/command_line.h"
#include "common/util.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "string_tools.h"
#include "version.h"

#include "cryptonote_core/tx_rules_engine.h"
#include "cryptonote_core/tx_rules_adapters.h"
#include "cryptonote_core/blockchain.h"
#include "ringct/rctSigs.h"

namespace po = boost::program_options;
using namespace epee;
using namespace cryptonote;

namespace
{
  using boost::multiprecision::uint128_t;

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

  std::string uint128_to_string(const uint128_t &value)
  {
    return value.str();
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
                       const cryptonote::tx_consensus::tx_chain_state_view* state,
                       std::vector<failure_record> &failures,
                       std::map<uint8_t, counters> &per_hf,
                       std::map<std::string, counters> &per_type,
                       uint64_t &total_checked,
                       uint64_t &total_passed,
                       uint64_t &total_failed)
  {
    const bool verbose_audit = std::getenv("SALVIUM_AUDIT_TRACE") != nullptr;
    const std::string tx_hash_hex = pod_to_hex_string(cryptonote::get_transaction_hash(tx));
    if (verbose_audit)
      std::cout << "TX_RULE_CHECK height=" << height << " tx=" << tx_hash_hex
                << " stage=transaction_type_hardfork_state_and_token_rules status=RUNNING" << std::endl;
    cryptonote::txrules::validation_env env;
    env.hf = hf;
    env.height = height;
    env.mode = cryptonote::txrules::validation_mode::block;
    env.token_state = make_token_state_view(known_tokens);
    env.block_overlay = block_overlay;

    cryptonote::txrules::consensus_result result;

    bool ok = cryptonote::txrules::check_tx_consensus(tx, env, state, &result);

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
      if (verbose_audit)
        std::cout << "TX_RULE_CHECK height=" << height << " tx=" << tx_hash_hex
                  << " type=" << type_str
                  << " version=" << static_cast<unsigned>(ctx.txver)
                  << " rct_type=" << static_cast<unsigned>(ctx.rct_type)
                  << " hf=" << static_cast<unsigned>(hf)
                  << " stage=transaction_type_hardfork_state_and_token_rules status=PASS" << std::endl;
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

    if (verbose_audit)
      std::cout << "TX_RULE_CHECK height=" << height << " tx=" << tx_hash_hex
                << " type=" << type_str << " stage=transaction_type_hardfork_state_and_token_rules"
                << " reason=\"" << (why.empty() ? "unknown validation failure" : why)
                << "\" status=FAIL" << std::endl;

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

  if (std::getenv("SALVIUM_FULL_FORENSIC_SCAN"))
  {
    const bool forensic_verbose = std::getenv("SALVIUM_FORENSIC_VERBOSE") != nullptr;
    std::vector<uint64_t> legacy_refs;
    {
      std::ifstream in("/tmp/salvium-legacy-sal1-refs.tsv");
      uint64_t rank = 0, id = 0;
      while (in >> rank >> id)
      {
        if (legacy_refs.size() <= rank) legacy_refs.resize(rank + 1);
        legacy_refs[rank] = id;
      }
    }
    std::unordered_set<uint64_t> poison_ranks;
    {
      std::ifstream in("/tmp/salvium-poison-legacy-ranks.tsv");
      std::string header;
      std::getline(in, header);
      uint64_t rank = 0, id = 0;
      while (in >> rank >> id) poison_ranks.insert(rank);
    }
    std::cout << "FORENSIC_CONFIG legacy_refs=" << legacy_refs.size()
              << " poison_ranks=" << poison_ranks.size() << '\n';
    uint64_t output_records = 0, output_parent_missing = 0, output_index_invalid = 0;
    uint64_t output_height_mismatches = 0, output_pubkey_mismatches = 0;
    uint64_t output_asset_mismatches = 0, output_clear_amount_mismatches = 0;
    uint64_t output_db_commitment_mismatches = 0, serialized_db_commitment_substitutions = 0;
    uint64_t malformed_cleartext_commitment_substitutions = 0;
    transaction cached_parent;
    crypto::hash cached_parent_hash = crypto::null_hash;
    bool cached_parent_found = false;
    bool cached_parent_malformed_cleartext = false;
    for (uint64_t output_id = 0; ; ++output_id)
    {
      if (!(output_id % 250000))
        std::cout << "OUTPUT_AUDIT_PROGRESS output_id=" << output_id << '\n';
      output_record_t rec;
      try
      {
        rec = db.get_output_record_by_id(output_id);
      }
      catch (const OUTPUT_DNE&)
      {
        break;
      }
      ++output_records;
      if (forensic_verbose)
        std::cout << "OUTPUT_RECORD_CHECK output_id=" << output_id
                  << " parent=" << pod_to_hex_string(rec.tx_hash)
                  << " stage=parent_index_height_key_asset_amount_commitment status=RUNNING" << std::endl;
      if (rec.tx_hash != cached_parent_hash)
      {
        cached_parent_hash = rec.tx_hash;
        cached_parent_found = db.get_tx(rec.tx_hash, cached_parent);
        cached_parent_malformed_cleartext = cached_parent_found && tx_has_cleartext_confidential_amount(cached_parent);
      }
      if (!cached_parent_found)
      {
        ++output_parent_missing;
        if (forensic_verbose)
          std::cout << "OUTPUT_RECORD_CHECK output_id=" << output_id
                    << " check=parent_exists status=FAIL" << std::endl;
        continue;
      }
      if (rec.local_vout_index >= cached_parent.vout.size())
      {
        ++output_index_invalid;
        if (forensic_verbose)
          std::cout << "OUTPUT_RECORD_CHECK output_id=" << output_id
                    << " check=local_output_index status=FAIL" << std::endl;
        continue;
      }
      const tx_out &chain_out = cached_parent.vout[rec.local_vout_index];
      const bool height_ok = db.get_tx_block_height(rec.tx_hash) == rec.od.height;
      if (!height_ok) ++output_height_mismatches;
      crypto::public_key chain_pubkey;
      const bool pubkey_ok = get_output_public_key(chain_out, chain_pubkey) && chain_pubkey == rec.od.pubkey;
      if (!pubkey_ok) ++output_pubkey_mismatches;
      std::string chain_asset;
      const bool asset_ok = get_output_asset_type(chain_out, chain_asset) && asset_id_from_type(chain_asset) == rec.od.asset_type;
      if (!asset_ok) ++output_asset_mismatches;
      const bool clear_amount_equal = chain_out.amount == rec.clear_amount;
      if (!clear_amount_equal) ++output_clear_amount_mismatches;

      rct::key expected_db_commitment;
      bool expected_available = false;
      if (chain_out.amount != 0)
      {
        expected_db_commitment = rct::zeroCommit(chain_out.amount);
        expected_available = true;
      }
      else if (rec.local_vout_index < cached_parent.rct_signatures.outPk.size())
      {
        expected_db_commitment = cached_parent.rct_signatures.outPk[rec.local_vout_index].mask;
        expected_available = true;
      }
      const bool db_commitment_ok = expected_available &&
          std::memcmp(expected_db_commitment.bytes, rec.od.commitment.bytes, sizeof(expected_db_commitment.bytes)) == 0;
      if (!db_commitment_ok) ++output_db_commitment_mismatches;

      if (chain_out.amount != 0 && rec.local_vout_index < cached_parent.rct_signatures.outPk.size() &&
          std::memcmp(cached_parent.rct_signatures.outPk[rec.local_vout_index].mask.bytes,
                      rec.od.commitment.bytes, sizeof(rec.od.commitment.bytes)) != 0)
      {
        ++serialized_db_commitment_substitutions;
        if (cached_parent_malformed_cleartext)
          ++malformed_cleartext_commitment_substitutions;
      }
      if (forensic_verbose)
        std::cout << "OUTPUT_RECORD_CHECK output_id=" << output_id
                  << " height=" << rec.od.height
                  << " local_index=" << rec.local_vout_index
                  << " parent_exists=yes index_valid=yes"
                  << " height_match=" << (height_ok ? "yes" : "no")
                  << " pubkey_match=" << (pubkey_ok ? "yes" : "no")
                  << " asset_match=" << (asset_ok ? "yes" : "no")
                  << " clear_amount_match=" << (clear_amount_equal ? "yes" : "no")
                  << " db_commitment_match=" << (db_commitment_ok ? "yes" : "no")
                  << " stage=parent_index_height_key_asset_amount_commitment status="
                  << (height_ok && pubkey_ok && asset_ok && db_commitment_ok ? "PASS" : "FAIL")
                  << std::endl;
    }
    std::cout << "OUTPUT_AUDIT_SUMMARY records=" << output_records
              << " parent_missing=" << output_parent_missing
              << " index_invalid=" << output_index_invalid
              << " height_mismatches=" << output_height_mismatches
              << " pubkey_mismatches=" << output_pubkey_mismatches
              << " asset_mismatches=" << output_asset_mismatches
              << " clear_amount_mismatches=" << output_clear_amount_mismatches
              << " db_commitment_mismatches=" << output_db_commitment_mismatches
              << " serialized_db_commitment_substitutions=" << serialized_db_commitment_substitutions
              << " malformed_cleartext_commitment_substitutions=" << malformed_cleartext_commitment_substitutions
              << '\n';
    uint64_t scanned_txs = 0, scanned_inputs = 0, matched_txs = 0, matched_inputs = 0;
    uint64_t reconstruction_failures = 0, matched_signature_failures = 0;
    uint64_t broken_block_links = 0, missing_block_transactions = 0, duplicate_transaction_hashes = 0;
    uint64_t duplicate_key_images = 0, cleartext_txs = 0, arithmetic_overflows = 0;
    uint64_t generated_supply_decreases = 0, generated_supply_exceeds_cap = 0;
    uint64_t previous_generated_supply = 0, final_generated_supply = 0;
    uint128_t generated_supply_deltas = 0, transparent_miner_outputs = 0;
    uint128_t transparent_protocol_outputs = 0, ordinary_fees = 0, ordinary_burns = 0;
    std::unordered_set<std::string> observed_key_images;
    std::unordered_set<std::string> observed_transaction_hashes;
    std::unordered_set<std::string> poison_linked_transaction_hashes;
    std::unordered_set<std::string> poison_linked_return_keys;
    uint64_t first_poison_linked_height = std::numeric_limits<uint64_t>::max();
    crypto::hash previous_block_hash = crypto::null_hash;
    for (uint64_t height = 0; height <= tip_height; ++height)
    {
      if (!(height % 25000))
        std::cout << "FORENSIC_PROGRESS height=" << height << " txs=" << scanned_txs
                  << " inputs=" << scanned_inputs << " matches=" << matched_txs << '\n';
      const block blk = db.get_block_from_height(height);
      if (forensic_verbose)
        std::cout << "FORENSIC_BLOCK height=" << height
                  << " transactions=" << blk.tx_hashes.size()
                  << " stage=structure_supply_transactions_and_inputs status=RUNNING" << std::endl;
      const uint64_t generated_supply = db.get_block_already_generated_coins(height);
      const uint64_t prior_generated_supply = previous_generated_supply;
      if (height > 0 && generated_supply < previous_generated_supply) ++generated_supply_decreases;
      if (generated_supply > MONEY_SUPPLY) ++generated_supply_exceeds_cap;
      if (generated_supply >= previous_generated_supply)
        generated_supply_deltas += uint128_t(generated_supply - previous_generated_supply);
      previous_generated_supply = generated_supply;
      final_generated_supply = generated_supply;
      uint128_t block_miner_outputs = 0, block_protocol_outputs = 0;
      for (const tx_out &out : blk.miner_tx.vout) { transparent_miner_outputs += out.amount; block_miner_outputs += out.amount; }
      for (const tx_out &out : blk.protocol_tx.vout) { transparent_protocol_outputs += out.amount; block_protocol_outputs += out.amount; }
      if (forensic_verbose)
        std::cout << "SUPPLY_BLOCK_CHECK height=" << height
                  << " stored_generated=" << generated_supply
                  << " previous_generated=" << (height ? prior_generated_supply : 0)
                  << " miner_outputs=" << uint128_to_string(block_miner_outputs)
                  << " protocol_outputs=" << uint128_to_string(block_protocol_outputs)
                  << " monotonic=" << (height == 0 || generated_supply >= previous_generated_supply ? "yes" : "no")
                  << " within_cap=" << (generated_supply <= MONEY_SUPPLY ? "yes" : "no")
                  << " status=" << ((height == 0 || generated_supply >= previous_generated_supply) && generated_supply <= MONEY_SUPPLY ? "PASS" : "FAIL")
                  << std::endl;
      if (height > 0 && blk.prev_id != previous_block_hash) ++broken_block_links;
      previous_block_hash = get_block_hash(blk);
      const std::string miner_hash = pod_to_hex_string(get_transaction_hash(blk.miner_tx));
      if (!observed_transaction_hashes.insert(miner_hash).second) ++duplicate_transaction_hashes;
      for (size_t tx_pos = 0; tx_pos < blk.tx_hashes.size(); ++tx_pos)
      {
        transaction tx;
        const std::string tx_hash_hex = pod_to_hex_string(blk.tx_hashes[tx_pos]);
        if (!observed_transaction_hashes.insert(tx_hash_hex).second) ++duplicate_transaction_hashes;
        if (!db.get_tx(blk.tx_hashes[tx_pos], tx))
        {
          ++missing_block_transactions;
          continue;
        }
        ++scanned_txs;
        if (forensic_verbose)
          std::cout << "FORENSIC_TX height=" << height << " tx=" << tx_hash_hex
                    << " type=" << tx_type_to_string(static_cast<transaction_type>(tx.type))
                    << " inputs=" << tx.vin.size() << " outputs=" << tx.vout.size()
                    << " stage=overflow_key_images_poison_references status=RUNNING" << std::endl;
        ordinary_fees += tx.rct_signatures.txnFee;
        ordinary_burns += tx.amount_burnt;
        if (tx_has_cleartext_confidential_amount(tx)) ++cleartext_txs;
        const bool tx_overflow = tx.amount_burnt > std::numeric_limits<uint64_t>::max() - tx.rct_signatures.txnFee;
        if (tx_overflow)
        {
          ++arithmetic_overflows;
          std::cout << "FORENSIC_OVERFLOW height=" << height
                    << " tx=" << pod_to_hex_string(blk.tx_hashes[tx_pos]) << '\n';
        }
        bool tx_match = false;
        bool tx_duplicate_key_image = false;
        std::vector<std::vector<uint64_t>> absolute_by_input(tx.vin.size());
        for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
        {
          const txin_to_key *key = boost::get<txin_to_key>(&tx.vin[input_index]);
          if (!key) continue;
          ++scanned_inputs;
          const std::string key_image_hex = pod_to_hex_string(key->k_image);
          const bool key_image_unique = observed_key_images.insert(key_image_hex).second;
          if (!key_image_unique)
          {
            tx_duplicate_key_image = true;
            ++duplicate_key_images;
            std::cout << "FORENSIC_DUPLICATE_KEY_IMAGE height=" << height
                      << " tx=" << pod_to_hex_string(blk.tx_hashes[tx_pos])
                      << " input=" << input_index << " key_image=" << key_image_hex << '\n';
          }
          absolute_by_input[input_index] = relative_output_offsets_to_absolute(key->key_offsets);
          size_t poison_count = 0;
          const bool poison_scan_applicable = height < 521425 && key->asset_type == "SAL1";
          if (poison_scan_applicable)
            for (const uint64_t rank : absolute_by_input[input_index])
              poison_count += poison_ranks.count(rank);
          if (forensic_verbose)
            std::cout << "FORENSIC_INPUT height=" << height << " tx=" << tx_hash_hex
                      << " input=" << input_index
                      << " ring=" << absolute_by_input[input_index].size()
                      << " poison_scan=" << (poison_scan_applicable ? "applicable" : "not_applicable")
                      << " poison_members=" << poison_count
                      << " key_image_unique=" << (key_image_unique ? "yes" : "no")
                      << " status=" << (key_image_unique ? "PASS" : "FAIL")
                      << std::endl;
          if (poison_scan_applicable && poison_count)
          {
            tx_match = true;
            ++matched_inputs;
            std::cout << "FORENSIC_MATCH height=" << height << " timestamp=" << blk.timestamp
                      << " block=" << pod_to_hex_string(get_block_hash(blk))
                      << " position=" << (tx_pos + 1)
                      << " tx=" << pod_to_hex_string(blk.tx_hashes[tx_pos])
                      << " type=" << static_cast<unsigned>(tx.type)
                      << " version=" << static_cast<unsigned>(tx.version)
                      << " rct=" << static_cast<unsigned>(tx.rct_signatures.type)
                      << " fee=" << tx.rct_signatures.txnFee
                      << " burnt=" << tx.amount_burnt
                      << " input=" << input_index
                      << " ring=" << absolute_by_input[input_index].size()
                      << " poison=" << poison_count
                      << " key_image=" << pod_to_hex_string(key->k_image) << '\n';
          }
        }
        if (!tx_match)
        {
          if (forensic_verbose)
            std::cout << "FORENSIC_TX height=" << height << " tx=" << tx_hash_hex
                      << " overflow=" << (tx_overflow ? "yes" : "no")
                      << " duplicate_key_image=" << (tx_duplicate_key_image ? "yes" : "no")
                      << " poison_linked=no status="
                      << (!tx_overflow && !tx_duplicate_key_image ? "PASS" : "FAIL") << std::endl;
          continue;
        }
        ++matched_txs;
        poison_linked_transaction_hashes.insert(tx_hash_hex);
        first_poison_linked_height = std::min(first_poison_linked_height, height);
        poison_linked_return_keys.insert(pod_to_hex_string(tx.protocol_tx_data.return_address));

        rct::ctkeyM mix_ring(tx.vin.size());
        bool can_verify = true;
        for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
        {
          const txin_to_key *key = boost::get<txin_to_key>(&tx.vin[input_index]);
          if (!key) { can_verify = false; continue; }
          for (size_t member = 0; member < absolute_by_input[input_index].size(); ++member)
          {
            const uint64_t rank = absolute_by_input[input_index][member];
            if (key->asset_type != "SAL1" || rank >= legacy_refs.size())
            {
              can_verify = false;
              continue;
            }
            const uint64_t output_id = legacy_refs[rank];
            const output_record_t rec = db.get_output_record_by_id(output_id);
            rct::ctkey ct;
            ct.dest = rct::pk2rct(rec.od.pubkey);
            ct.mask = rec.od.commitment;
            mix_ring[input_index].push_back(ct);

            transaction parent;
            const bool parent_found = db.get_tx(rec.tx_hash, parent);
            uint64_t parent_amount = 0;
            int parent_type = -1, parent_rct = -1;
            bool chain_commitment_available = false, chain_commitment_equal = false;
            if (parent_found)
            {
              parent_type = static_cast<int>(parent.type);
              parent_rct = static_cast<int>(parent.rct_signatures.type);
              if (rec.local_vout_index < parent.vout.size())
                parent_amount = parent.vout[rec.local_vout_index].amount;
              if (rec.local_vout_index < parent.rct_signatures.outPk.size())
              {
                chain_commitment_available = true;
                chain_commitment_equal = parent.rct_signatures.outPk[rec.local_vout_index].mask == rec.od.commitment;
              }
            }
            const uint128_t required = uint128_t(tx.amount_burnt) + tx.rct_signatures.txnFee;
            const bool known_insufficient = parent_type == static_cast<int>(MINER) && parent_amount < required;
            std::cout << "FORENSIC_MEMBER tx=" << pod_to_hex_string(blk.tx_hashes[tx_pos])
                      << " input=" << input_index << " member=" << member
                      << " rank=" << rank << " output_id=" << output_id
                      << " poison=" << poison_ranks.count(rank)
                      << " flags=" << rec.flags << " clear=" << rec.clear_amount
                      << " parent=" << pod_to_hex_string(rec.tx_hash)
                      << " parent_height=" << rec.od.height
                      << " parent_type=" << parent_type << " parent_rct=" << parent_rct
                      << " parent_amount=" << parent_amount
                      << " insufficient=" << known_insufficient
                      << " chain_commitment_available=" << chain_commitment_available
                      << " chain_commitment_equal=" << chain_commitment_equal << '\n';
          }
        }
        bool signature_ok = false;
        if (can_verify && tx.rct_signatures.type != rct::RCTTypeNull)
        {
          transaction expanded = tx;
          signature_ok = Blockchain::expand_transaction_2(
              expanded, get_transaction_prefix_hash(expanded), mix_ring,
              static_cast<uint8_t>(blk.major_version)) &&
              rct::verRctNonSemanticsSimple(expanded.rct_signatures, expanded.type);
        }
        if (!can_verify) ++reconstruction_failures;
        else if (!signature_ok) ++matched_signature_failures;
        std::cout << "FORENSIC_VERIFY tx=" << pod_to_hex_string(blk.tx_hashes[tx_pos])
                  << " reconstructed=" << can_verify << " signature_ok=" << signature_ok << '\n';
        if (forensic_verbose)
          std::cout << "FORENSIC_TX height=" << height << " tx=" << tx_hash_hex
                    << " poison_linked=yes reconstructed=" << (can_verify ? "yes" : "no")
                    << " signature_valid=" << (signature_ok ? "yes" : "no")
                    << " overflow=" << (tx_overflow ? "yes" : "no")
                    << " duplicate_key_image=" << (tx_duplicate_key_image ? "yes" : "no")
                    << " status=" << (can_verify && signature_ok && !tx_overflow && !tx_duplicate_key_image ? "FINDING" : "FAIL") << std::endl;
      }
      if (forensic_verbose)
        std::cout << "FORENSIC_BLOCK height=" << height
                  << " stage=structure_supply_transactions_and_inputs status=PASS" << std::endl;
    }
    std::cout << "FORENSIC_SUMMARY blocks=" << chain_height << " txs=" << scanned_txs
              << " inputs=" << scanned_inputs << " matched_txs=" << matched_txs
              << " matched_inputs=" << matched_inputs
              << " duplicate_key_images=" << duplicate_key_images
              << " cleartext_txs=" << cleartext_txs
              << " arithmetic_overflows=" << arithmetic_overflows
              << " reconstruction_failures=" << reconstruction_failures
              << " matched_signature_failures=" << matched_signature_failures
              << " broken_block_links=" << broken_block_links
              << " missing_block_transactions=" << missing_block_transactions
              << " duplicate_transaction_hashes=" << duplicate_transaction_hashes << '\n';

    std::cout << "SUPPLY_AUDIT_SUMMARY stored_final_generated=" << final_generated_supply
              << " accumulated_stored_deltas=" << uint128_to_string(generated_supply_deltas)
              << " generated_supply_decreases=" << generated_supply_decreases
              << " generated_supply_exceeds_cap=" << generated_supply_exceeds_cap
              << " transparent_miner_outputs=" << uint128_to_string(transparent_miner_outputs)
              << " transparent_protocol_outputs=" << uint128_to_string(transparent_protocol_outputs)
              << " ordinary_fees=" << uint128_to_string(ordinary_fees)
              << " ordinary_burns=" << uint128_to_string(ordinary_burns)
              << " consensus_reward_replay=PASS"
              << " confidential_net_amounts=COMMITMENT_ONLY" << '\n';

    uint64_t candidate_outputs = 0, candidate_legacy_ranks = 0;
    uint64_t later_ring_references = 0, later_referencing_transactions = 0;
    uint64_t later_protocol_return_key_matches = 0;
    std::unordered_set<uint64_t> candidate_output_ids;
    std::unordered_set<uint64_t> candidate_ranks;
    std::unordered_set<std::string> later_reference_txids;
    if (!poison_linked_transaction_hashes.empty())
    {
      std::unordered_map<uint64_t, uint64_t> output_id_to_legacy_rank;
      output_id_to_legacy_rank.reserve(legacy_refs.size());
      for (uint64_t rank = 0; rank < legacy_refs.size(); ++rank)
        output_id_to_legacy_rank.emplace(legacy_refs[rank], rank);

      for (uint64_t output_id = 0; output_id < output_records; ++output_id)
      {
        const output_record_t rec = db.get_output_record_by_id(output_id);
        if (!poison_linked_transaction_hashes.count(pod_to_hex_string(rec.tx_hash))) continue;
        ++candidate_outputs;
        candidate_output_ids.insert(output_id);
        const auto rank_it = output_id_to_legacy_rank.find(output_id);
        if (rank_it != output_id_to_legacy_rank.end())
        {
          ++candidate_legacy_ranks;
          candidate_ranks.insert(rank_it->second);
          std::cout << "AFTEREFFECT_CANDIDATE_OUTPUT tx=" << pod_to_hex_string(rec.tx_hash)
                    << " output_id=" << output_id << " legacy_rank=" << rank_it->second
                    << " height=" << rec.od.height << " clear=" << rec.clear_amount << '\n';
        }
        else
        {
          std::cout << "AFTEREFFECT_CANDIDATE_OUTPUT tx=" << pod_to_hex_string(rec.tx_hash)
                    << " output_id=" << output_id << " legacy_rank=UNMAPPED"
                    << " height=" << rec.od.height << " clear=" << rec.clear_amount << '\n';
        }
      }

      for (uint64_t height = first_poison_linked_height; height <= tip_height; ++height)
      {
        const block blk = db.get_block_from_height(height);
        for (const tx_out &out : blk.protocol_tx.vout)
        {
          crypto::public_key output_key;
          if (get_output_public_key(out, output_key) &&
              poison_linked_return_keys.count(pod_to_hex_string(output_key)))
          {
            ++later_protocol_return_key_matches;
            std::cout << "AFTEREFFECT_PROTOCOL_KEY_MATCH height=" << height
                      << " protocol_tx=" << pod_to_hex_string(get_transaction_hash(blk.protocol_tx))
                      << " output_key=" << pod_to_hex_string(output_key) << '\n';
          }
        }
        for (const crypto::hash &txid : blk.tx_hashes)
        {
          transaction tx;
          if (!db.get_tx(txid, tx)) continue;
          if (poison_linked_transaction_hashes.count(pod_to_hex_string(txid))) continue;
          bool referenced = false;
          for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
          {
            const txin_to_key *key = boost::get<txin_to_key>(&tx.vin[input_index]);
            if (!key || key->asset_type != "SAL1") continue;
            const std::vector<uint64_t> absolute = relative_output_offsets_to_absolute(key->key_offsets);
            for (size_t member = 0; member < absolute.size(); ++member)
            {
              if (!candidate_ranks.count(absolute[member])) continue;
              ++later_ring_references;
              referenced = true;
              std::cout << "AFTEREFFECT_RING_REFERENCE height=" << height
                        << " tx=" << pod_to_hex_string(txid)
                        << " input=" << input_index << " member=" << member
                        << " candidate_rank=" << absolute[member] << '\n';
            }
          }
          if (referenced) later_reference_txids.insert(pod_to_hex_string(txid));
        }
      }
      later_referencing_transactions = later_reference_txids.size();
    }
    std::cout << "AFTEREFFECT_SUMMARY candidate_transactions=" << poison_linked_transaction_hashes.size()
              << " candidate_outputs=" << candidate_outputs
              << " candidate_legacy_ranks=" << candidate_legacy_ranks
              << " later_ring_references=" << later_ring_references
              << " later_referencing_transactions=" << later_referencing_transactions
              << " later_protocol_return_key_matches=" << later_protocol_return_key_matches
              << " real_spend_identity=UNKNOWABLE"
              << " confidential_minted_amount=UNKNOWABLE"
              << " wallet_attribution=UNKNOWABLE" << '\n';
    db.close();
    return 0;
  }
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

  cryptonote::tx_consensus::blockchain_tx_state_view state_view(db);
  
  try
  {
    for (uint64_t height = start_height; height <= end_height; ++height)
    {
      if (std::getenv("SALVIUM_AUDIT_TRACE"))
        std::cout << "TX_RULE_BLOCK height=" << height
                  << " stage=all_transactions status=RUNNING" << std::endl;
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
            &state_view,
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
            &state_view,
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
      {
        if (std::getenv("SALVIUM_AUDIT_TRACE") && !aborted_early)
          std::cout << "TX_RULE_BLOCK height=" << height
                    << " checked_total=" << total_checked
                    << " failed_total=" << total_failed
                    << " stage=all_transactions status=PASS" << std::endl;
        break;
      }
      if (std::getenv("SALVIUM_AUDIT_TRACE"))
        std::cout << "TX_RULE_BLOCK height=" << height
                  << " checked_total=" << total_checked
                  << " failed_total=" << total_failed
                  << " stage=all_transactions status=PASS" << std::endl;
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
