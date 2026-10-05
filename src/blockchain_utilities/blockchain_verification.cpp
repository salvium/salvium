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
#include "independent_chain_forensics.h"
#include "cryptonote_core/lineage_audit_policy.h"

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

  std::string uint128_to_string(unsigned __int128 value)
  {
    if (value == 0)
      return "0";

    std::string out;
    while (value != 0)
    {
      out.push_back(static_cast<char>('0' + value % 10));
      value /= 10;
    }
    std::reverse(out.begin(), out.end());
    return out;
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

  static void trace_asset_transaction(const cryptonote::transaction& tx,
                                      const uint64_t height,
                                      const char* location,
                                      const std::string& wanted_asset)
  {
    bool matched = tx.source_asset_type == wanted_asset ||
                   tx.destination_asset_type == wanted_asset;
    if (static_cast<cryptonote::transaction_type>(tx.type) == cryptonote::CREATE_TOKEN &&
        "sal" + tx.token_metadata.asset_type == wanted_asset)
      matched = true;

    std::vector<std::pair<size_t, std::string>> input_assets;
    for (size_t i = 0; i < tx.vin.size(); ++i)
    {
      if (const auto* in = boost::get<cryptonote::txin_to_key>(&tx.vin[i]))
      {
        input_assets.emplace_back(i, in->asset_type);
        matched = matched || in->asset_type == wanted_asset;
      }
    }

    std::vector<std::pair<size_t, std::string>> output_assets;
    for (size_t i = 0; i < tx.vout.size(); ++i)
    {
      std::string asset;
      if (cryptonote::get_output_asset_type(tx.vout[i], asset))
      {
        output_assets.emplace_back(i, asset);
        matched = matched || asset == wanted_asset;
      }
    }

    if (!matched)
      return;

    std::cout << "ASSET_TX asset=" << wanted_asset
              << " height=" << height
              << " location=" << location
              << " tx=" << pod_to_hex_string(cryptonote::get_transaction_hash(tx))
              << " type=" << tx_type_to_string(static_cast<cryptonote::transaction_type>(tx.type))
              << " version=" << static_cast<unsigned>(tx.version)
              << " source=" << tx.source_asset_type
              << " destination=" << tx.destination_asset_type
              << " fee=" << tx.rct_signatures.txnFee
              << " burnt=" << tx.amount_burnt
              << " inputs=" << tx.vin.size()
              << " outputs=" << tx.vout.size()
              << '\n';

    if (static_cast<cryptonote::transaction_type>(tx.type) == cryptonote::CREATE_TOKEN)
    {
      std::cout << "ASSET_CREATE asset=" << wanted_asset
                << " height=" << height
                << " tx=" << pod_to_hex_string(cryptonote::get_transaction_hash(tx))
                << " ticker=" << tx.token_metadata.asset_type;
      if (const auto* token = boost::get<cryptonote::sal_token_t>(&tx.token_metadata.token))
        std::cout << " supply=" << token->supply
                  << " size=" << token->size
                  << " name=" << std::quoted(token->name)
                  << " url=" << std::quoted(token->url)
                  << " signature=" << pod_to_hex_string(token->signature);
      std::cout << '\n';
    }

    for (const auto& entry : input_assets)
      std::cout << "ASSET_INPUT asset=" << wanted_asset
                << " height=" << height
                << " tx=" << pod_to_hex_string(cryptonote::get_transaction_hash(tx))
                << " index=" << entry.first
                << " input_asset=" << entry.second << '\n';
    for (const auto& entry : output_assets)
      std::cout << "ASSET_OUTPUT asset=" << wanted_asset
                << " height=" << height
                << " tx=" << pod_to_hex_string(cryptonote::get_transaction_hash(tx))
                << " index=" << entry.first
                << " output_asset=" << entry.second
                << " clear_amount=" << tx.vout[entry.first].amount << '\n';
  }

  struct asset_flow_finding
  {
    uint64_t height = 0;
    std::string tx_hash;
    std::string tx_type;
    std::string source_asset;
    std::string destination_asset;
    std::vector<std::string> reasons;
    bool exact_input_amount = false;
    unsigned __int128 input_amount = 0;
    unsigned __int128 output_amount = 0;
    uint64_t fee = 0;
    uint64_t burnt = 0;
    std::unordered_set<uint64_t> output_ids;
  };

  enum class lineage_confidence
  {
    POSSIBLE,
    PROVEN
  };

  struct lineage_candidate
  {
    size_t origin = 0;
    uint64_t depth = 0;
    lineage_confidence confidence = lineage_confidence::POSSIBLE;
  };

  static const char* lineage_confidence_name(const lineage_confidence confidence)
  {
    return confidence == lineage_confidence::PROVEN
        ? "DESCENDANT_PROVEN"
        : "DESCENDANT_POSSIBLE";
  }

  static std::string join_strings(const std::vector<std::string>& values, const char separator)
  {
    std::ostringstream out;
    for (size_t i = 0; i < values.size(); ++i)
    {
      if (i) out << separator;
      out << values[i];
    }
    return out.str();
  }

  static std::string join_assets(const std::unordered_set<std::string>& assets)
  {
    std::vector<std::string> sorted(assets.begin(), assets.end());
    std::sort(sorted.begin(), sorted.end());
    return join_strings(sorted, ',');
  }

  static bool is_private_token_asset(const std::string& asset)
  {
    return asset.size() > 3 && asset.compare(0, 3, "sal") == 0;
  }

  static bool resolve_input_output_records(
      const cryptonote::BlockchainLMDB& db,
      const cryptonote::txin_to_key& input,
      std::vector<std::pair<uint64_t, cryptonote::output_record_t>>& records,
      std::string& why, uint8_t hf)
  {
    const std::vector<uint64_t> asset_indices =
        cryptonote::relative_output_offsets_to_absolute(input.key_offsets);
    std::vector<uint64_t> output_ids;
    try
    {
      if (hf < HF_VERSION_REALIGN_RCT_INDEX) {
        for (uint64_t index : asset_indices)
          output_ids.push_back(db.get_legacy_output_id_by_asset_index(input.asset_type, index));
      } else db.get_output_ids_by_asset_index(input.asset_type, asset_indices, output_ids);
      if (output_ids.size() != asset_indices.size())
      {
        why = "resolved output count does not match ring size";
        return false;
      }
      records.reserve(output_ids.size());
      for (const uint64_t output_id : output_ids)
        records.emplace_back(output_id, db.get_output_record_by_id(output_id));
      return true;
    }
    catch (const std::exception& e)
    {
      why = e.what();
      return false;
    }
  }

  static bool canonical_clear_amount(const cryptonote::BlockchainLMDB& db,
                                     const output_record_t& record,
                                     const std::string& expected_asset,
                                     uint64_t& amount)
  {
    transaction parent;
    if (!db.get_tx(record.tx_hash, parent) || record.local_vout_index >= parent.vout.size())
      return false;
    const auto block = db.get_block_from_height(record.od.height);
    if ((parent.type != MINER || get_transaction_hash(block.miner_tx) != record.tx_hash) &&
        (parent.type != PROTOCOL || get_transaction_hash(block.protocol_tx) != record.tx_hash))
      return false;
    const auto& output = parent.vout[record.local_vout_index];
    std::string asset;
    crypto::public_key key;
    if (!get_output_asset_type(output, asset) || asset != expected_asset ||
        !get_output_public_key(output, key) || key != record.od.pubkey || output.amount == 0 ||
        !(rct::zeroCommit(output.amount) == record.od.commitment))
      return false;
    amount = output.amount;
    return true;
  }

  static bool verify_resolved_ringct(const cryptonote::BlockchainLMDB& db,
                                     const transaction& original,
                                     const uint8_t hf)
  {
    try
    {
      rct::ctkeyM rings(original.vin.size());
      for (size_t index = 0; index < original.vin.size(); ++index)
      {
        const auto* input = boost::get<txin_to_key>(&original.vin[index]);
        if (!input) return false;
        std::vector<std::pair<uint64_t, output_record_t>> records;
        std::string why;
        if (!resolve_input_output_records(db, *input, records, why, hf)) return false;
        for (const auto& record : records)
          rings[index].push_back({rct::pk2rct(record.second.od.pubkey), record.second.od.commitment});
      }
      transaction expanded = original;
      return Blockchain::expand_transaction_2(expanded, get_transaction_prefix_hash(expanded), rings, hf) &&
          rct::verRctSemanticsSimple(expanded.rct_signatures, expanded.amount_burnt,
                                    hf >= HF_VERSION_CARROT && expanded.source_asset_type != "SAL1") &&
          rct::verRctNonSemanticsSimple(expanded.rct_signatures, expanded.type);
    }
    catch (const std::exception&)
    {
      return false;
    }
  }

  static uint64_t first_output_id_at_height(const cryptonote::BlockchainDB& db, uint64_t height)
  {
    if (!height) return 0;
    if (height == db.height()) return std::numeric_limits<uint64_t>::max();
    const auto miner = db.get_block_from_height(height).miner_tx;
    const auto hash = cryptonote::get_transaction_hash(miner);
    uint64_t tx_id = 0;
    if (miner.vout.empty() || !db.tx_exists(hash, tx_id))
      throw std::runtime_error("Missing first transaction in audit range");
    const auto indices = db.get_tx_amount_output_indices(tx_id, 1);
    if (indices.size() != 1 || indices.front().empty())
      throw std::runtime_error("Missing first output index in audit range");
    const auto bucket = miner.version >= 2 ? 0 : miner.vout.front().amount;
    const auto id = db.get_output_id_by_amount_index(bucket, indices.front().front().first);
    const auto record = db.get_output_record_by_id(id);
    if (record.tx_hash != hash || record.local_vout_index != 0 || record.od.height != height)
      throw std::runtime_error("Audit range output boundary does not match its block");
    return id;
  }

  static int run_asset_flow_forensic_scan(
      cryptonote::BlockchainLMDB& db,
      const uint64_t tip_height,
      const bool verbose,
      std::unordered_map<std::string, uint64_t>& token_creation_height,
      const uint64_t start_height)
  {
    const uint64_t scan_blocks = tip_height - start_height + 1;
    const uint64_t first_output = first_output_id_at_height(db, start_height);
    const uint64_t end_output = first_output_id_at_height(db, tip_height + 1);
    std::unordered_set<std::string> known_tokens;
    std::unordered_map<std::string, size_t> finding_by_tx;
    std::vector<asset_flow_finding> findings;
    uint64_t scanned_txs = 0;
    uint64_t token_creations = 0;
    uint64_t duplicate_token_creations = 0;
    uint64_t unresolved_input_rings = 0;
    uint64_t exact_amount_findings = 0;
    uint64_t confidential_amount_findings = 0;
    unsigned __int128 exact_sal1_created = 0;
    unsigned __int128 exact_cross_asset_fees_to_sal1 = 0;
    unsigned __int128 public_private_token_fees = 0;
    unsigned __int128 matched_rollup_fees = 0;
    uint64_t bad_sal1_origin_transactions = 0;
    uint64_t bad_sal1_origin_outputs = 0;
    uint64_t unresolved_bad_sal1_origin_amounts = 0;
    uint64_t issuance_mismatches = 0;
    uint64_t repeated_token_issuances = 0;
    uint64_t asset_id_collisions = 0;
    uint64_t protocol_outputs_checked = 0;
    uint64_t input_asset_labels_checked = 0;
    uint64_t output_asset_labels_checked = 0;
    uint64_t source_destination_checks = 0;
    uint64_t private_token_fee_checks = 0;
    uint64_t token_registration_checks = 0;
    uint64_t token_supply_checks = 0;
    uint64_t token_price_checks = 0;
    uint64_t asset_ids_checked = 0;
    uint64_t descendant_inputs_checked = 0;
    uint64_t descendant_ring_members_checked = 0;
    std::unordered_map<uint32_t, std::string> observed_asset_ids;
    std::unordered_set<std::string> reported_asset_id_collisions;
    struct fee_authorization
    {
      std::string binding;
      crypto::key_image first_image;
      uint64_t fee;
      std::string source;
    };
    std::unordered_map<std::string, std::vector<fee_authorization>> fee_authorizations;
    std::unordered_set<std::string> consumed_fee_authorizations;

    const auto register_rollup = [&](const transaction& tx, const crypto::hash& txid) {
        if (tx.type == cryptonote::ROLLUP && tx.source_asset_type == "SAL1" &&
            tx.destination_asset_type == "SAL1" && tx.layer2_rollup_data.version == 1)
        {
          unsigned __int128 fee_sum = 0;
          bool valid_assets = !tx.vin.empty();
          for (const auto& input : tx.vin)
          {
            const auto* key = boost::get<txin_to_key>(&input);
            valid_assets = valid_assets && key && key->asset_type == "SAL1";
          }
          for (const auto& output : tx.vout)
          {
            std::string asset;
            valid_assets = valid_assets && get_output_asset_type(output, asset) && asset == "SAL1";
          }
          for (const auto& paid : tx.layer2_rollup_data.txs)
            fee_sum += paid.tx_fee;
          if (valid_assets && fee_sum == tx.amount_burnt && fee_sum != 0)
            for (const auto& paid : tx.layer2_rollup_data.txs)
              fee_authorizations[pod_to_hex_string(paid.tx_prefix_hash)].push_back(
                  {pod_to_hex_string(tx.rollup_binding_tag), paid.first_key_image,
                   paid.tx_fee, pod_to_hex_string(txid)});
        }
    };
    if (start_height && db.get_block_from_height(start_height - 1).major_version >= HF_VERSION_ENABLE_TOKENS) {
      uint64_t first = 0, last = start_height;
      while (first < last) {
        const auto middle = first + (last - first) / 2;
        if (db.get_block_from_height(middle).major_version < HF_VERSION_ENABLE_TOKENS) first = middle + 1;
        else last = middle;
      }
      for (uint64_t height = first; height < start_height; ++height) {
        const auto block = db.get_block_from_height(height);
        for (const auto& hash : block.tx_hashes) {
          const auto tx = db.get_tx(hash);
          if (tx.type == cryptonote::CREATE_TOKEN) {
            const auto asset = "sal" + tx.token_metadata.asset_type;
            known_tokens.insert(asset);
            token_creation_height.emplace(asset, height);
            observed_asset_ids.emplace(cryptonote::asset_id_from_type(asset), asset);
          }
          register_rollup(tx, hash);
          if (tx.type == cryptonote::TRANSFER && is_private_token_asset(tx.source_asset_type))
            consumed_fee_authorizations.insert(pod_to_hex_string(hash));
        }
      }
      std::cout << "ASSET_FLOW_ACCEPTED_CONTEXT token_count=" << known_tokens.size()
                << " fee_authorizations=" << fee_authorizations.size()
                << " earlier_history=ACCEPTED_NOT_REAUDITED\n";
    }

    const auto observe_asset_id = [&](const std::string& asset, const uint64_t height,
                                      const std::string& tx_hash)
    {
      if (asset.empty()) return;
      ++asset_ids_checked;
      const uint32_t id = cryptonote::asset_id_from_type(asset);
      const auto inserted = observed_asset_ids.emplace(id, asset);
      if (!inserted.second && inserted.first->second != asset)
      {
        const std::string collision_key =
            std::to_string(id) + ":" + inserted.first->second + ":" + asset;
        if (reported_asset_id_collisions.insert(collision_key).second)
        {
          ++asset_id_collisions;
          std::cout << "ASSET_FLOW_FINDING severity=CRITICAL class=ASSET_ID_COLLISION"
                    << " height=" << height << " tx=" << tx_hash
                    << " asset_id=" << id
                    << " first_asset=" << inserted.first->second
                    << " second_asset=" << asset << '\n';
        }
      }
    };

    std::cout << "ASSET_FLOW_CONFIG mode=range"
              << " start_height=" << start_height << " end_height=" << tip_height
              << " amount_model=commitment-conservation"
              << " ring_model=exact-only-when-single-member"
              << " attribution=NO_WALLET_GUESSING\n";
    std::cout << "ASSET_FLOW_TEST_CATALOG"
              << " tests=PROTOCOL_ISSUANCE_REGISTRATION,"
              << "REPEATED_PROTOCOL_ISSUANCE,"
              << "TOKEN_DECLARED_VS_ISSUED_SUPPLY,"
              << "TOKEN_CREATION_PRICE,"
              << "DUPLICATE_TOKEN_CREATION,"
              << "ASSET_ID_COLLISION,"
              << "INPUT_SOURCE_ASSET_MATCH,"
              << "OUTPUT_DESTINATION_ASSET_MATCH,"
              << "MIXED_INPUT_ASSETS,"
              << "MIXED_OUTPUT_ASSETS,"
              << "UNDECLARED_ASSET_CONVERSION,"
              << "PRIVATE_TOKEN_FEE_TO_SAL1,"
              << "TRANSFER_BEFORE_TOKEN_CREATION,"
              << "TROUBLE_OUTPUT_INDEX_LINEAGE,"
              << "LATER_RING_REFERENCE,"
              << "RECURSIVE_CANDIDATE_LINEAGE,"
              << "LINEAGE_CONFIDENCE_CLASSIFICATION,"
              << "PROPOSED_BLACKLIST,"
              << "EXACT_OR_CONFIDENTIAL_AMOUNT_CLASSIFICATION\n";
    std::cout << "ASSET_FLOW_STAGE stage=1/3 name=TRANSACTION_AND_ISSUANCE_CLASSIFICATION"
              << " blocks=" << scan_blocks << " status=RUNNING\n";

    for (uint64_t height = start_height; height <= tip_height; ++height)
    {
      if (!(height % 1000))
        std::cout << "ASSET_FLOW_PROGRESS stage=1/3 test=TRANSACTION_AND_ISSUANCE_CLASSIFICATION"
                  << " height=" << height
                  << " target=" << tip_height
                  << " txs=" << scanned_txs
                  << " findings=" << findings.size()
                  << " tokens=" << token_creations
                  << " protocol_outputs_checked=" << protocol_outputs_checked
                  << " input_asset_labels_checked=" << input_asset_labels_checked
                  << " output_asset_labels_checked=" << output_asset_labels_checked
                  << " source_destination_checks=" << source_destination_checks
                  << " asset_ids_checked=" << asset_ids_checked
                  << " token_supply_checks=" << token_supply_checks
                  << " token_price_checks=" << token_price_checks
                  << " status=RUNNING\n";

      const cryptonote::block blk = db.get_block_from_height(height);
      std::unordered_set<std::string> tokens_created_in_block;
      for (const crypto::hash& txid : blk.tx_hashes)
      {
        cryptonote::transaction tx;
        if (!db.get_tx(txid, tx))
          continue;
        if (tx.type == cryptonote::CREATE_TOKEN)
          tokens_created_in_block.insert("sal" + tx.token_metadata.asset_type);
        register_rollup(tx, txid);
      }

      for (size_t output_index = 0; output_index < blk.protocol_tx.vout.size(); ++output_index)
      {
        ++protocol_outputs_checked;
        std::string asset;
        if (!cryptonote::get_output_asset_type(blk.protocol_tx.vout[output_index], asset))
          continue;
        observe_asset_id(asset, height, pod_to_hex_string(get_transaction_hash(blk.protocol_tx)));
        if (asset == "SAL" || asset == "SAL1" || asset == "BURN")
          continue;
        const bool expected = known_tokens.count(asset) || tokens_created_in_block.count(asset);
        if (!expected)
          std::cout << "ASSET_FLOW_FINDING severity=HIGH class=UNREGISTERED_PROTOCOL_ISSUANCE"
                    << " height=" << height
                    << " tx=" << pod_to_hex_string(get_transaction_hash(blk.protocol_tx))
                    << " output=" << output_index
                    << " asset=" << asset
                    << " clear_amount=" << blk.protocol_tx.vout[output_index].amount << '\n';
        if (known_tokens.count(asset) && !tokens_created_in_block.count(asset))
        {
          ++repeated_token_issuances;
          std::cout << "ASSET_FLOW_FINDING severity=CRITICAL class=REPEATED_TOKEN_PROTOCOL_ISSUANCE"
                    << " height=" << height
                    << " tx=" << pod_to_hex_string(get_transaction_hash(blk.protocol_tx))
                    << " output=" << output_index
                    << " asset=" << asset
                    << " clear_amount=" << blk.protocol_tx.vout[output_index].amount
                    << " creation_height=" << token_creation_height[asset] << '\n';
        }
      }

      for (const crypto::hash& txid : blk.tx_hashes)
      {
        cryptonote::transaction tx;
        if (!db.get_tx(txid, tx))
          continue;
        ++scanned_txs;

        const std::string tx_hash = pod_to_hex_string(txid);
        const cryptonote::transaction_type type =
            static_cast<cryptonote::transaction_type>(tx.type);
        std::unordered_set<std::string> input_assets;
        std::unordered_set<std::string> output_assets;
        bool inputs_exact = !tx.vin.empty();
        unsigned __int128 exact_inputs = 0;

        for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
        {
          const auto* input = boost::get<cryptonote::txin_to_key>(&tx.vin[input_index]);
          if (!input)
          {
            inputs_exact = false;
            continue;
          }
          input_assets.insert(input->asset_type);
          ++input_asset_labels_checked;
          observe_asset_id(input->asset_type, height, tx_hash);
        }

        for (const cryptonote::tx_out& output : tx.vout)
        {
          std::string asset;
          if (cryptonote::get_output_asset_type(output, asset))
          {
            output_assets.insert(asset);
            ++output_asset_labels_checked;
            observe_asset_id(asset, height, tx_hash);
          }
        }

        if (type == cryptonote::CREATE_TOKEN)
        {
          ++token_creations;
          ++token_registration_checks;
          ++token_supply_checks;
          ++token_price_checks;
          const std::string created_asset = "sal" + tx.token_metadata.asset_type;
          const bool duplicate = known_tokens.count(created_asset) != 0;
          if (duplicate) ++duplicate_token_creations;
          const uint64_t expected_price =
              cryptonote::get_token_creation_price(tx.token_metadata.asset_type);
          uint64_t issued = 0;
          for (const cryptonote::tx_out& output : blk.protocol_tx.vout)
          {
            std::string asset;
            if (cryptonote::get_output_asset_type(output, asset) && asset == created_asset)
              issued += output.amount;
          }
          unsigned __int128 declared_atomic = 0;
          bool declared_supply_available = false;
          if (const auto* token = boost::get<cryptonote::sal_token_t>(&tx.token_metadata.token))
          {
            declared_supply_available = true;
            declared_atomic = static_cast<unsigned __int128>(token->supply) * COIN;
          }
          const bool issuance_matches =
              declared_supply_available && declared_atomic == issued;
          if (!issuance_matches) ++issuance_mismatches;
          std::cout << "ASSET_FLOW_TOKEN_CREATE height=" << height
                    << " tx=" << tx_hash
                    << " asset=" << created_asset
                    << " issued_atomic=" << issued
                    << " declared_atomic="
                    << (declared_supply_available ? uint128_to_string(declared_atomic) : "UNAVAILABLE")
                    << " issuance_match=" << (issuance_matches ? "yes" : "no")
                    << " creation_burn=" << tx.amount_burnt
                    << " expected_creation_burn=" << expected_price
                    << " fee=" << tx.rct_signatures.txnFee
                    << " duplicate=" << (duplicate ? "yes" : "no")
                    << " source=" << tx.source_asset_type
                    << " destination=" << tx.destination_asset_type << '\n';
          known_tokens.insert(created_asset);
          token_creation_height.emplace(created_asset, height);
        }

        std::vector<std::string> reasons;
        ++source_destination_checks;
        if (input_assets.size() > 1)
          reasons.emplace_back("MIXED_INPUT_ASSETS");
        if (output_assets.size() > 1)
          reasons.emplace_back("MIXED_OUTPUT_ASSETS");
        if (!input_assets.empty() &&
            (input_assets.size() != 1 || !input_assets.count(tx.source_asset_type)))
          reasons.emplace_back("INPUT_SOURCE_MISMATCH");
        std::string expected_output_asset = tx.destination_asset_type;
        if (type == cryptonote::BURN)
          expected_output_asset = tx.source_asset_type;
        else if (type == cryptonote::STAKE)
          expected_output_asset = tx.source_asset_type;
        else if (type == cryptonote::CREATE_TOKEN || type == cryptonote::ROLLUP)
          expected_output_asset = "SAL1";
        if (!output_assets.empty() &&
            (output_assets.size() != 1 || !output_assets.count(expected_output_asset)))
          reasons.emplace_back("OUTPUT_DESTINATION_MISMATCH");
        if (tx.source_asset_type != tx.destination_asset_type &&
            type != cryptonote::CONVERT && type != cryptonote::AUDIT &&
            type != cryptonote::BURN)
          reasons.emplace_back("UNDECLARED_ASSET_CONVERSION");
        bool fee_has_rollup = false;
        if (type == cryptonote::TRANSFER &&
            is_private_token_asset(tx.source_asset_type))
        {
          ++private_token_fee_checks;
          public_private_token_fees += tx.rct_signatures.txnFee;
          const auto found = fee_authorizations.find(tx_hash);
          const auto* first = tx.vin.empty() ? nullptr : boost::get<txin_to_key>(&tx.vin.front());
          if (found != fee_authorizations.end() && first && found->second.size() == 1)
          {
            const auto& paid = found->second.front();
            fee_has_rollup = paid.binding == pod_to_hex_string(tx.rollup_binding_tag) &&
                paid.first_image == first->k_image && paid.fee == tx.rct_signatures.txnFee &&
                consumed_fee_authorizations.insert(tx_hash).second;
          }
          if (fee_has_rollup)
            matched_rollup_fees += tx.rct_signatures.txnFee;
          std::cout << "ASSET_FLOW_PRIVATE_FEE height=" << height << " tx=" << tx_hash
                    << " fee=" << tx.rct_signatures.txnFee
                    << " rollup_match=" << (fee_has_rollup ? "yes" : "no")
                    << " proof_scope=CANONICAL_AUTHORIZATION_AND_BURN_MATCH\n";
          if (tx.rct_signatures.txnFee != 0 && !fee_has_rollup)
            reasons.emplace_back("NON_SAL1_TRANSFER_FEE");
        }
        if (type == cryptonote::TRANSFER &&
            is_private_token_asset(tx.source_asset_type) &&
            !known_tokens.count(tx.source_asset_type))
          reasons.emplace_back("TRANSFER_BEFORE_TOKEN_CREATION");
        if (type == cryptonote::CREATE_TOKEN)
        {
          const std::string created_asset = "sal" + tx.token_metadata.asset_type;
          if (token_creation_height.count(created_asset) &&
              token_creation_height.at(created_asset) != height)
            reasons.emplace_back("DUPLICATE_TOKEN_CREATION");
          if (tx.amount_burnt != cryptonote::get_token_creation_price(tx.token_metadata.asset_type))
            reasons.emplace_back("TOKEN_CREATION_PRICE_MISMATCH");
        }

        if (reasons.empty())
          continue;

        for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
        {
          const auto* input = boost::get<cryptonote::txin_to_key>(&tx.vin[input_index]);
          if (!input)
            continue;
          std::vector<std::pair<uint64_t, cryptonote::output_record_t>> records;
          std::string why;
          if (!resolve_input_output_records(db, *input, records, why, blk.major_version))
          {
            ++unresolved_input_rings;
            inputs_exact = false;
            if (verbose)
              std::cout << "ASSET_FLOW_INPUT_RESOLUTION height=" << height
                        << " tx=" << tx_hash << " input=" << input_index
                        << " asset=" << input->asset_type
                        << " status=FAIL reason=" << std::quoted(why) << '\n';
            continue;
          }
          if (records.size() != 1)
            inputs_exact = false;
          for (size_t member = 0; member < records.size(); ++member)
          {
            const auto& record = records[member];
            if (verbose)
              std::cout << "ASSET_FLOW_INPUT_MEMBER height=" << height
                        << " tx=" << tx_hash << " input=" << input_index
                        << " member=" << member << " ring=" << records.size()
                        << " asset=" << input->asset_type
                        << " output_id=" << record.first
                        << " parent=" << pod_to_hex_string(record.second.tx_hash)
                        << " parent_height=" << record.second.od.height
                        << " clear_amount=" << record.second.clear_amount << '\n';
            if (records.size() == 1)
            {
              uint64_t amount = 0;
              // Migrated output metadata can omit a public protocol amount.
              // Recover it from the canonical serialized origin and check the
              // public key, asset, and commitment before using it.
              if (!canonical_clear_amount(db, record.second, input->asset_type, amount))
                inputs_exact = false;
              else
                exact_inputs += amount;
            }
          }
        }

        if (inputs_exact && !verify_resolved_ringct(db, tx, blk.major_version))
          inputs_exact = false;

        asset_flow_finding finding;
        finding.height = height;
        finding.tx_hash = tx_hash;
        finding.tx_type = tx_type_to_string(type);
        finding.source_asset = tx.source_asset_type;
        finding.destination_asset = tx.destination_asset_type;
        finding.reasons = std::move(reasons);
        finding.exact_input_amount = inputs_exact;
        finding.input_amount = exact_inputs;
        finding.fee = tx.rct_signatures.txnFee;
        finding.burnt = tx.amount_burnt;
        if (finding.source_asset != "SAL1" && output_assets.count("SAL1"))
        {
          ++bad_sal1_origin_transactions;
          for (const auto& output : tx.vout)
          {
            std::string asset;
            if (get_output_asset_type(output, asset) && asset == "SAL1")
              ++bad_sal1_origin_outputs;
          }
          if (!inputs_exact || output_assets.size() != 1)
            ++unresolved_bad_sal1_origin_amounts;
        }
        // Fees are public even when the funding/output amounts are confidential.
        // Every private-token transfer fee credited to a SAL1 miner is a
        // cross-asset fee; it must not disappear from the total merely because
        // the transaction's own outputs remain denominated in that token.
        if (type == cryptonote::TRANSFER && is_private_token_asset(tx.source_asset_type) && !fee_has_rollup)
          exact_cross_asset_fees_to_sal1 += finding.fee;
        if (inputs_exact)
        {
          const bool fee_paid_separately =
              blk.major_version >= HF_VERSION_CARROT && finding.source_asset != "SAL1";
          const unsigned __int128 deductions = finding.burnt +
              static_cast<unsigned __int128>(fee_paid_separately ? 0 : finding.fee);
          finding.output_amount = exact_inputs >= deductions ? exact_inputs - deductions : 0;
          ++exact_amount_findings;
          // Use the serialized output labels, not the declared destination.
          // The 465074 salYAHU transaction declares salYAHU on both sides while
          // actually creating two SAL1 outputs. Looking only at destination
          // silently omits precisely that inflation from the SAL1 total.
          if (output_assets.size() == 1 && output_assets.count("SAL1") &&
              finding.source_asset != "SAL1")
          {
            exact_sal1_created += finding.output_amount;
          }
        }
        else
        {
          ++confidential_amount_findings;
        }
        finding_by_tx.emplace(tx_hash, findings.size());
        std::cout << "ASSET_FLOW_FINDING severity=CRITICAL"
                  << " class=" << join_strings(finding.reasons, ',')
                  << " height=" << height
                  << " tx=" << tx_hash
                  << " type=" << finding.tx_type
                  << " source=" << finding.source_asset
                  << " destination=" << finding.destination_asset
                  << " input_assets=" << join_assets(input_assets)
                  << " output_assets=" << join_assets(output_assets)
                  << " fee=" << finding.fee
                  << " burnt=" << finding.burnt
                  << " amount_status=" << (inputs_exact ? "EXACT_AGGREGATE" : "CONFIDENTIAL_OR_RING_AMBIGUOUS");
        if (inputs_exact)
          std::cout << " input_atomic=" << uint128_to_string(finding.input_amount)
                    << " output_atomic=" << uint128_to_string(finding.output_amount);
        std::cout << '\n';
        findings.push_back(std::move(finding));
      }
    }

    uint64_t output_records = 0;
    std::unordered_map<std::string, std::vector<uint64_t>> output_ids_by_tx;
    std::cout << "ASSET_FLOW_STAGE stage=1/3 name=TRANSACTION_AND_ISSUANCE_CLASSIFICATION"
              << " txs=" << scanned_txs << " findings=" << findings.size()
              << " status=COMPLETE\n";
    std::cout << "ASSET_FLOW_STAGE stage=2/3 name=TROUBLE_OUTPUT_INDEX_LINEAGE"
              << " status=RUNNING\n";
    for (uint64_t output_id = first_output; output_id < end_output; ++output_id)
    {
      if (!(output_id % 100000))
        std::cout << "ASSET_FLOW_PROGRESS stage=2/3 test=TROUBLE_OUTPUT_INDEX_LINEAGE"
                  << " output_id=" << output_id
                  << " output_records_checked=" << output_records
                  << " trouble_transactions=" << findings.size()
                  << " status=RUNNING\n";
      cryptonote::output_record_t record;
      try
      {
        record = db.get_output_record_by_id(output_id);
      }
      catch (const cryptonote::OUTPUT_DNE&)
      {
        break;
      }
      ++output_records;
      const std::string parent_tx = pod_to_hex_string(record.tx_hash);
      output_ids_by_tx[parent_tx].push_back(output_id);
      const auto found = finding_by_tx.find(parent_tx);
      if (found == finding_by_tx.end())
        continue;
      findings[found->second].output_ids.insert(output_id);
      std::cout << "ASSET_FLOW_TROUBLE_OUTPUT"
                << " origin_height=" << findings[found->second].height
                << " origin_tx=" << findings[found->second].tx_hash
                << " output_id=" << output_id
                << " local_index=" << record.local_vout_index
                << " indexed_asset=" << cryptonote::asset_type_from_id(record.od.asset_type)
                << " clear_amount=" << record.clear_amount << '\n';
    }

    uint64_t later_ring_references = 0;
    uint64_t proven_descendant_references = 0;
    uint64_t possible_descendant_references = 0;
    uint64_t recursive_descendant_transactions = 0;
    uint64_t maximum_lineage_depth = 0;
    std::unordered_map<uint64_t, std::vector<lineage_candidate>> output_lineage;
    std::unordered_map<std::string, std::vector<lineage_candidate>> transaction_lineage;
    for (size_t origin = 0; origin < findings.size(); ++origin)
      for (const uint64_t output_id : findings[origin].output_ids)
        output_lineage[output_id].push_back(
            {origin, 0, lineage_confidence::PROVEN});
    std::cout << "ASSET_FLOW_STAGE stage=2/3 name=TROUBLE_OUTPUT_INDEX_LINEAGE"
              << " output_records_checked=" << output_records
              << " status=COMPLETE\n";
    std::cout << "ASSET_FLOW_STAGE stage=3/3 name=DESCENDANT_RING_REFERENCE_SCAN"
              << " blocks=" << scan_blocks << " status=RUNNING\n";
    for (uint64_t height = start_height; height <= tip_height; ++height)
    {
      if (!(height % 1000))
        std::cout << "ASSET_FLOW_PROGRESS stage=3/3 test=DESCENDANT_RING_REFERENCE_SCAN"
                  << " height=" << height
                  << " target=" << tip_height
                  << " descendant_inputs_checked=" << descendant_inputs_checked
                  << " ring_members_checked=" << descendant_ring_members_checked
                  << " later_ring_references=" << later_ring_references
                  << " proven_descendant_references=" << proven_descendant_references
                  << " possible_descendant_references=" << possible_descendant_references
                  << " recursive_descendant_transactions=" << recursive_descendant_transactions
                  << " status=RUNNING\n";
      const cryptonote::block blk = db.get_block_from_height(height);
      for (const crypto::hash& txid : blk.tx_hashes)
      {
        cryptonote::transaction tx;
        if (!db.get_tx(txid, tx))
          continue;
        const std::string tx_hash = pod_to_hex_string(txid);
        struct lineage_evidence
        {
          bool seen = false;
          bool proven = false;
          uint64_t depth = 0;
          size_t matching_members = 0;
          size_t ring_members = 0;
        };
        std::unordered_map<size_t, lineage_evidence> evidence_by_origin;
        for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
        {
          const auto* input = boost::get<cryptonote::txin_to_key>(&tx.vin[input_index]);
          if (!input) continue;
          ++descendant_inputs_checked;
          std::vector<std::pair<uint64_t, cryptonote::output_record_t>> records;
          std::string why;
          if (!resolve_input_output_records(db, *input, records, why, blk.major_version))
            continue;
          std::unordered_map<size_t, size_t> matches_in_ring;
          std::unordered_map<size_t, uint64_t> maximum_parent_depth;
          std::unordered_map<size_t, bool> all_matching_members_proven;
          for (size_t member = 0; member < records.size(); ++member)
          {
            ++descendant_ring_members_checked;
            const auto candidates = output_lineage.find(records[member].first);
            if (candidates == output_lineage.end())
              continue;
            for (const lineage_candidate& candidate : candidates->second)
            {
              ++later_ring_references;
              std::cout << "ASSET_FLOW_DESCENDANT_REFERENCE"
                        << " origin_height=" << findings[candidate.origin].height
                        << " origin_tx=" << findings[candidate.origin].tx_hash
                        << " height=" << height
                        << " tx=" << tx_hash
                        << " type=" << tx_type_to_string(static_cast<transaction_type>(tx.type))
                        << " input=" << input_index
                        << " member=" << member
                        << " ring=" << records.size()
                        << " input_asset=" << input->asset_type
                        << " output_id=" << records[member].first
                        << " parent_depth=" << candidate.depth
                        << " parent_confidence=" << lineage_confidence_name(candidate.confidence)
                        << " fee=" << tx.rct_signatures.txnFee
                        << " burnt=" << tx.amount_burnt << '\n';
              ++matches_in_ring[candidate.origin];
              maximum_parent_depth[candidate.origin] =
                  std::max(maximum_parent_depth[candidate.origin], candidate.depth);
              const auto proven = all_matching_members_proven.find(candidate.origin);
              if (proven == all_matching_members_proven.end())
                all_matching_members_proven.emplace(
                    candidate.origin, candidate.confidence == lineage_confidence::PROVEN);
              else
                proven->second =
                    proven->second && candidate.confidence == lineage_confidence::PROVEN;
            }
          }
          for (const auto& matches : matches_in_ring)
          {
            lineage_evidence& evidence = evidence_by_origin[matches.first];
            evidence.seen = true;
            evidence.matching_members += matches.second;
            evidence.ring_members += records.size();
            evidence.depth = std::max(
                evidence.depth, maximum_parent_depth[matches.first] + 1);
            if (matches.second == records.size() &&
                all_matching_members_proven[matches.first])
              evidence.proven = true;
          }
        }

        std::vector<lineage_candidate> tx_candidates;
        for (const auto& item : evidence_by_origin)
        {
          if (!item.second.seen)
            continue;
          const lineage_confidence confidence =
              item.second.proven ? lineage_confidence::PROVEN : lineage_confidence::POSSIBLE;
          if (confidence == lineage_confidence::PROVEN)
            ++proven_descendant_references;
          else
            ++possible_descendant_references;
          maximum_lineage_depth = std::max(maximum_lineage_depth, item.second.depth);
          tx_candidates.push_back({item.first, item.second.depth, confidence});
          std::cout << "ASSET_FLOW_LINEAGE_CANDIDATE"
                    << " origin_height=" << findings[item.first].height
                    << " origin_tx=" << findings[item.first].tx_hash
                    << " height=" << height
                    << " tx=" << tx_hash
                    << " depth=" << item.second.depth
                    << " confidence=" << lineage_confidence_name(confidence)
                    << " matching_members=" << item.second.matching_members
                    << " examined_ring_members=" << item.second.ring_members
                    << " disposition=REVIEW_ONLY"
                    << '\n';
        }
        if (!tx_candidates.empty())
        {
          ++recursive_descendant_transactions;
          transaction_lineage.emplace(tx_hash, tx_candidates);
          const auto outputs = output_ids_by_tx.find(tx_hash);
          if (outputs != output_ids_by_tx.end())
            for (const uint64_t output_id : outputs->second)
              for (const lineage_candidate& candidate : tx_candidates)
                output_lineage[output_id].push_back(candidate);
        }
      }
    }
    std::cout << "ASSET_FLOW_STAGE stage=3/3 name=DESCENDANT_RING_REFERENCE_SCAN"
              << " descendant_inputs_checked=" << descendant_inputs_checked
              << " ring_members_checked=" << descendant_ring_members_checked
              << " later_ring_references=" << later_ring_references
              << " proven_descendant_references=" << proven_descendant_references
              << " possible_descendant_references=" << possible_descendant_references
              << " recursive_descendant_transactions=" << recursive_descendant_transactions
              << " maximum_lineage_depth=" << maximum_lineage_depth
              << " status=COMPLETE\n";

    uint64_t proposed_blacklist_origins = 0;
    uint64_t proposed_blacklist_descendants = 0;
    uint64_t review_only_candidates = 0;
    for (const asset_flow_finding& origin : findings)
    {
      ++proposed_blacklist_origins;
      std::cout << "ASSET_FLOW_ORIGIN_ISOLATION_PROPOSAL tx=" << origin.tx_hash
                << " height=" << origin.height
                << " confidence=ORIGIN_CONFIRMED"
                << " disposition=PROPOSE_BLACKLIST"
                << " reasons=" << join_strings(origin.reasons, ',') << '\n';
    }
    for (const auto& tx_entry : transaction_lineage)
      for (const lineage_candidate& candidate : tx_entry.second)
      {
        ++review_only_candidates;
        std::cout << "ASSET_FLOW_DESCENDANT_REVIEW tx=" << tx_entry.first
                  << " confidence=" << lineage_confidence_name(candidate.confidence)
                  << " disposition=HUMAN_REVIEW"
                  << " automatic_isolation=no"
                  << " origin_tx=" << findings[candidate.origin].tx_hash
                  << " depth=" << candidate.depth << '\n';
      }
    std::cout << "ASSET_FLOW_BLACKLIST_SUMMARY"
              << " policy=CONFIRMED_ORIGIN_ONLY"
              << " proposed_origins=" << proposed_blacklist_origins
              << " proposed_descendants=" << proposed_blacklist_descendants
              << " review_only_candidates=" << review_only_candidates
              << " enforcement=NONE_REPORT_ONLY\n";

    std::cout << "ASSET_FLOW_SUMMARY blocks=" << scan_blocks
              << " txs=" << scanned_txs
              << " token_creations=" << token_creations
              << " duplicate_token_creations=" << duplicate_token_creations
              << " issuance_mismatches=" << issuance_mismatches
              << " repeated_token_issuances=" << repeated_token_issuances
              << " asset_id_collisions=" << asset_id_collisions
              << " findings=" << findings.size()
              << " exact_amount_findings=" << exact_amount_findings
              << " confidential_or_ring_ambiguous_findings=" << confidential_amount_findings
              << " bad_sal1_origin_transactions=" << bad_sal1_origin_transactions
              << " bad_sal1_origin_outputs=" << bad_sal1_origin_outputs
              << " unresolved_bad_sal1_origin_amounts=" << unresolved_bad_sal1_origin_amounts
              << " sal1_origin_amount_total="
              << (unresolved_bad_sal1_origin_amounts ? "INCOMPLETE" : "COMPLETE")
              << " exact_sal1_created_atomic=" << uint128_to_string(exact_sal1_created)
              << " exact_cross_asset_fees_to_sal1_atomic="
              << uint128_to_string(exact_cross_asset_fees_to_sal1)
              << " public_private_token_fees_atomic=" << uint128_to_string(public_private_token_fees)
              << " matched_rollup_fees_atomic=" << uint128_to_string(matched_rollup_fees)
              << " trouble_outputs=";
    uint64_t trouble_outputs = 0;
    for (const asset_flow_finding& finding : findings)
      trouble_outputs += finding.output_ids.size();
    std::cout << trouble_outputs
              << " later_ring_references=" << later_ring_references
              << " proven_descendant_references=" << proven_descendant_references
              << " possible_descendant_references=" << possible_descendant_references
              << " recursive_descendant_transactions=" << recursive_descendant_transactions
              << " maximum_lineage_depth=" << maximum_lineage_depth
              << " proposed_blacklist_origins=" << proposed_blacklist_origins
              << " proposed_blacklist_descendants=" << proposed_blacklist_descendants
              << " review_only_candidates=" << review_only_candidates
              << " unresolved_input_rings=" << unresolved_input_rings
              << " output_records=" << output_records
              << " protocol_outputs_checked=" << protocol_outputs_checked
              << " input_asset_labels_checked=" << input_asset_labels_checked
              << " output_asset_labels_checked=" << output_asset_labels_checked
              << " source_destination_checks=" << source_destination_checks
              << " private_token_fee_checks=" << private_token_fee_checks
              << " token_registration_checks=" << token_registration_checks
              << " token_supply_checks=" << token_supply_checks
              << " token_price_checks=" << token_price_checks
              << " asset_ids_checked=" << asset_ids_checked
              << " descendant_inputs_checked=" << descendant_inputs_checked
              << " descendant_ring_members_checked=" << descendant_ring_members_checked
              << '\n';
    return findings.empty() && !issuance_mismatches && !repeated_token_issuances && !asset_id_collisions ? 0 : 2;
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

  const command_line::arg_descriptor<uint64_t> arg_inspect_height = {
      "inspect-height", "Print one canonical block and its full transactions as JSON, then exit (read-only)",
      std::numeric_limits<uint64_t>::max()};
  const command_line::arg_descriptor<std::string> arg_copy_db = {
      "copy-db", "Copy a consistent read-only LMDB snapshot to an existing empty directory, then exit", ""};
  const command_line::arg_descriptor<bool> arg_snapshot_info = {
      "snapshot-info", "Print canonical snapshot height and block hashes, then exit (read-only)", false};
  const command_line::arg_descriptor<bool> arg_audit_regtest = {
      "regtest", "Inspect an isolated fakechain database", false};
  const command_line::arg_descriptor<uint64_t> arg_lineage_height = {
      "regtest-lineage-audit-height", "Isolated fakechain lineage activation height (requires --regtest)", 0};
  const command_line::arg_descriptor<uint64_t> arg_lineage_duration = {
      "regtest-lineage-audit-duration", "Isolated fakechain audit window in blocks", lineage_policy::duration_blocks};

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

  const command_line::arg_descriptor<bool> arg_no_asset_flow_forensic = {
      "no-asset-flow-forensic",
      "Skip the default full-chain token issuance, cross-asset mint/conversion, fee, output lineage, and descendant-spend forensic scan",
      false};

  const command_line::arg_descriptor<bool> arg_asset_flow_verbose = {
      "asset-flow-verbose",
      "Include resolved input ring members and detailed asset-flow evidence",
      false};

  po::options_description desc_cmd_only("Command line options");
  po::options_description desc_cmd_sett("Command line options and settings options");
  
  command_line::add_arg(desc_cmd_sett, arg_db_path);
  command_line::add_arg(desc_cmd_sett, arg_start_height);
  command_line::add_arg(desc_cmd_sett, arg_end_height);
  command_line::add_arg(desc_cmd_sett, arg_inspect_height);
  command_line::add_arg(desc_cmd_sett, arg_copy_db);
  command_line::add_arg(desc_cmd_sett, arg_snapshot_info);
  command_line::add_arg(desc_cmd_sett, arg_audit_regtest);
  command_line::add_arg(desc_cmd_sett, arg_lineage_height);
  command_line::add_arg(desc_cmd_sett, arg_lineage_duration);
  command_line::add_arg(desc_cmd_sett, arg_include_miner);
  command_line::add_arg(desc_cmd_sett, arg_stop_on_first_failure);
  command_line::add_arg(desc_cmd_sett, arg_max_failures);
  command_line::add_arg(desc_cmd_sett, arg_progress_interval);
  command_line::add_arg(desc_cmd_sett, arg_log_level);
  command_line::add_arg(desc_cmd_sett, arg_no_asset_flow_forensic);
  command_line::add_arg(desc_cmd_sett, arg_asset_flow_verbose);
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
  const bool audit_regtest = command_line::get_arg(vm, arg_audit_regtest);
  const uint64_t requested_lineage_height = command_line::get_arg(vm, arg_lineage_height);
  const uint64_t lineage_duration = command_line::get_arg(vm, arg_lineage_duration);
  if (!audit_regtest && lineage_duration != lineage_policy::duration_blocks) {
    std::cerr << "--regtest-lineage-audit-duration requires --regtest\n";
    return 1;
  }
  if (requested_lineage_height && !audit_regtest) {
    std::cerr << "--regtest-lineage-audit-height requires --regtest\n";
    return 1;
  }
  const uint64_t lineage_height = audit_regtest ? requested_lineage_height : lineage_policy::mainnet_height;
  uint64_t end_height = command_line::get_arg(vm, arg_end_height);
  const bool include_miner = command_line::get_arg(vm, arg_include_miner);
  const bool stop_on_first_failure = command_line::get_arg(vm, arg_stop_on_first_failure);
  const uint64_t max_failures = command_line::get_arg(vm, arg_max_failures);
  const uint64_t progress_interval = std::max<uint64_t>(1, command_line::get_arg(vm, arg_progress_interval));
  const bool asset_flow_forensic =
      !command_line::get_arg(vm, arg_no_asset_flow_forensic);
  const bool asset_flow_verbose =
      command_line::get_arg(vm, arg_asset_flow_verbose) ||
      std::getenv("SALVIUM_ASSET_FLOW_VERBOSE");

  std::cout << "Opening blockchain DB read-only at: " << db_path << "\n";

  const std::string copy_destination = command_line::get_arg(vm, arg_copy_db);
  if (!copy_destination.empty())
  {
    // Use the same LMDB build/lock format as the daemon. A system mdb_copy
    // can reject an actively open Salvium environment with VERSION_MISMATCH.
    MDB_env* copy_env = nullptr;
    int rc = mdb_env_create(&copy_env);
    if (rc == 0)
      rc = mdb_env_open(copy_env, db_path.c_str(), MDB_RDONLY, 0644);
    if (rc == 0)
      rc = mdb_env_copy2(copy_env, copy_destination.c_str(), MDB_CP_COMPACT);
    if (copy_env)
      mdb_env_close(copy_env);
    if (rc != 0)
    {
      std::cerr << "Snapshot copy failed: " << mdb_strerror(rc) << '\n';
      return 1;
    }
    std::cout << "COPY_DB_COMPLETE destination=" << std::quoted(copy_destination) << '\n';
    return 0;
  }

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

  uint64_t tip_height = chain_height - 1;
  if (command_line::get_arg(vm, arg_snapshot_info))
  {
    std::cout << "SNAPSHOT_INFO blocks=" << chain_height << " height=" << tip_height
              << " hash=" << pod_to_hex_string(db.get_block_hash_from_height(tip_height))
              << " genesis=" << pod_to_hex_string(db.get_block_hash_from_height(0)) << '\n';
    db.close();
    return 0;
  }

  const uint64_t inspect_height = command_line::get_arg(vm, arg_inspect_height);
  if (inspect_height != std::numeric_limits<uint64_t>::max())
  {
    try
    {
      if (inspect_height > tip_height)
        throw std::runtime_error("inspection height is beyond the chain tip");
      auto block = db.get_block_from_height(inspect_height);
      std::cout << "INSPECT_BLOCK_HASH height=" << inspect_height
                << " hash=" << pod_to_hex_string(get_block_hash(block)) << '\n';
      std::cout << "INSPECT_BLOCK " << obj_to_json_str(block) << '\n';
      for (const auto& hash : block.tx_hashes)
      {
        auto tx = db.get_tx(hash);
        unsigned __int128 known_input_amount = 0;
        bool amounts_known = !tx.vin.empty();
        std::cout << "INSPECT_TX_HASH " << pod_to_hex_string(hash) << '\n'
                  << "INSPECT_TX_BLOB " << epee::string_tools::buff_to_hex_nodelimer(tx_to_blob(tx)) << '\n'
                  << "INSPECT_TX " << obj_to_json_str(tx) << '\n';
        for (size_t index = 0; index < tx.vin.size(); ++index)
        {
          const auto* input = boost::get<txin_to_key>(&tx.vin[index]);
          if (!input) { amounts_known = false; continue; }
          std::vector<std::pair<uint64_t, output_record_t>> records;
          std::string why;
          if (!resolve_input_output_records(db, *input, records, why, block.major_version))
          {
            std::cout << "INSPECT_INPUT_UNRESOLVED index=" << index
                      << " reason=" << std::quoted(why) << '\n';
            amounts_known = false;
            continue;
          }
          for (const auto& record : records)
          {
            uint64_t amount = 0;
            const bool known = records.size() == 1 && canonical_clear_amount(db, record.second, input->asset_type, amount);
            amounts_known = amounts_known && known;
            if (known) known_input_amount += amount;
            std::cout << "INSPECT_INPUT index=" << index << " ring=" << records.size()
                      << " asset=" << input->asset_type << " output_id=" << record.first
                      << " parent=" << pod_to_hex_string(record.second.tx_hash)
                      << " parent_height=" << record.second.od.height
                      << " clear_amount=" << record.second.clear_amount
                      << " canonical_clear_amount=" << (known ? std::to_string(amount) : "UNKNOWN") << '\n';
          }
        }
        if (amounts_known)
        {
          const bool proof_ok = verify_resolved_ringct(db, tx, block.major_version);
          const bool separate_fee = block.major_version >= HF_VERSION_CARROT && tx.source_asset_type != "SAL1";
          const unsigned __int128 deductions = static_cast<unsigned __int128>(tx.amount_burnt) +
              (separate_fee ? 0 : tx.rct_signatures.txnFee);
          std::cout << "INSPECT_VALUE_PROOF tx=" << pod_to_hex_string(hash)
                    << " ringct_valid=" << (proof_ok ? "yes" : "no")
                    << " input_atomic=" << uint128_to_string(known_input_amount)
                    << " output_atomic=" << (proof_ok && deductions <= known_input_amount
                        ? uint128_to_string(known_input_amount - deductions) : "UNKNOWN")
                    << " fee_paid_separately=" << (separate_fee ? "yes" : "no") << '\n';
        }
      }
      db.close();
      return 0;
    }
    catch (const std::exception& e)
    {
      std::cerr << "Block inspection failed: " << e.what() << '\n';
      db.close();
      return 1;
    }
  }

  tip_height = std::min(tip_height, end_height);
  end_height = tip_height;
  if (start_height > tip_height) {
    std::cerr << "Audit start-height exceeds end-height or chain tip\n";
    db.close();
    return 1;
  }
  const uint64_t scan_blocks = tip_height - start_height + 1;
  const uint64_t first_output = first_output_id_at_height(db, start_height);
  const uint64_t end_output = first_output_id_at_height(db, tip_height + 1);
  std::cout << "AUDIT_RANGE start_height=" << start_height << " end_height=" << tip_height
            << " blocks=" << scan_blocks;
  if (start_height)
    std::cout << " accepted_opening_height=" << start_height - 1
              << " accepted_opening_hash=" << pod_to_hex_string(db.get_block_hash_from_height(start_height - 1))
              << " earlier_history=ACCEPTED_NOT_REAUDITED";
  std::cout << '\n';

  bool forensic_bad_funds = false;
  std::unordered_map<std::string, uint64_t> forensic_token_creations;
  if (asset_flow_forensic)
  {
    const int result = run_asset_flow_forensic_scan(db, tip_height, asset_flow_verbose, forensic_token_creations, start_height);
    forensic_bad_funds = result == 2;
    if (result != 0 && result != 2)
    {
      db.close();
      return result;
    }
  }

  if (std::getenv("SALVIUM_FULL_FORENSIC_SCAN"))
  {
    const bool forensic_verbose = std::getenv("SALVIUM_FORENSIC_VERBOSE") != nullptr;
    if (run_independent_chain_forensics(
            db, tip_height, audit_regtest ? FAKECHAIN : MAINNET, forensic_verbose, lineage_height, lineage_duration, start_height) != 0)
    {
      db.close();
      return 1;
    }
    if (std::getenv("SALVIUM_INDEPENDENT_FORENSICS_ONLY"))
    {
      db.close();
      return forensic_bad_funds ? 2 : 0;
    }
    std::vector<uint64_t> legacy_refs;
    bool legacy_refs_available = false;
    const char *legacy_refs_path = std::getenv("SALVIUM_LEGACY_REFS_FILE");
    if (!legacy_refs_path) legacy_refs_path = "/tmp/salvium-legacy-sal1-refs.tsv";
    {
      std::ifstream in(legacy_refs_path);
      uint64_t rank = 0, id = 0;
      while (in >> rank >> id)
      {
        legacy_refs_available = true;
        if (legacy_refs.size() <= rank) legacy_refs.resize(rank + 1);
        legacy_refs[rank] = id;
      }
    }
    std::unordered_set<uint64_t> poison_ranks;
    bool poison_ranks_available = false;
    const char *poison_ranks_path = std::getenv("SALVIUM_POISON_RANKS_FILE");
    if (!poison_ranks_path) poison_ranks_path = "/tmp/salvium-poison-legacy-ranks.tsv";
    {
      std::ifstream in(poison_ranks_path);
      poison_ranks_available = in.good();
      std::string header;
      std::getline(in, header);
      uint64_t rank = 0, id = 0;
      while (in >> rank >> id)
      {
        poison_ranks.insert(rank);
      }
    }
    const bool poison_inventory_available =
        legacy_refs_available && poison_ranks_available;
    std::cout << "FORENSIC_CONFIG legacy_refs=" << legacy_refs.size()
              << " poison_ranks=" << poison_ranks.size()
              << " legacy_refs_file=" << legacy_refs_path
              << " poison_ranks_file=" << poison_ranks_path
              << " general_forensics=ENABLED"
              << " legacy_poison_analysis="
              << (poison_inventory_available ? "ENABLED" : "SKIPPED_MISSING_INVENTORY")
              << '\n';
    uint64_t output_records = 0, output_parent_missing = 0, output_index_invalid = 0;
    std::vector<uint64_t> intrinsic_bad_output_ids;
    uint64_t output_height_mismatches = 0, output_pubkey_mismatches = 0;
    uint64_t output_asset_mismatches = 0, output_clear_amount_mismatches = 0;
    uint64_t output_db_commitment_mismatches = 0, serialized_db_commitment_substitutions = 0;
    uint64_t malformed_cleartext_commitment_substitutions = 0;
    uint64_t output_asset_index_mismatches = 0, output_amount_index_mismatches = 0;
    std::unordered_map<std::string, uint64_t> next_asset_index;
    std::unordered_map<uint64_t, uint64_t> next_amount_index;
    // Accept prefix index counts as opening context. Do not check or report
    // pre-opening output records as newly audited.
    for (uint64_t id = 0; id < first_output; ++id) {
      const auto record = db.get_output_record_by_id(id);
      ++next_asset_index[asset_type_from_id(record.od.asset_type)];
      ++next_amount_index[record.consensus_amount_bucket];
    }
    std::cout << "ACCEPTED_OUTPUT_CONTEXT records=" << first_output
              << " validation=NOT_REAUDITED\n";
    transaction cached_parent;
    crypto::hash cached_parent_hash = crypto::null_hash;
    bool cached_parent_found = false;
    bool cached_parent_malformed_cleartext = false;
    for (uint64_t output_id = first_output; output_id < end_output; ++output_id)
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
      if (cached_parent_malformed_cleartext && chain_asset == "SAL1") intrinsic_bad_output_ids.push_back(output_id);
      const bool clear_amount_equal = chain_out.amount == rec.clear_amount;
      if (!clear_amount_equal) ++output_clear_amount_mismatches;
      bool asset_index_ok = false, amount_index_ok = false;
      if (!chain_asset.empty())
      {
        const uint64_t asset_index = next_asset_index[chain_asset]++;
        try
        {
          asset_index_ok =
              db.get_output_id_by_asset_index(chain_asset, asset_index) == output_id;
        }
        catch (...) {}
      }
      const uint64_t amount_index =
          next_amount_index[rec.consensus_amount_bucket]++;
      try
      {
        amount_index_ok = db.get_output_id_by_amount_index(
            rec.consensus_amount_bucket, amount_index) == output_id;
      }
      catch (...) {}
      if (!asset_index_ok) ++output_asset_index_mismatches;
      if (!amount_index_ok) ++output_amount_index_mismatches;

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
                  << " asset_index_match=" << (asset_index_ok ? "yes" : "no")
                  << " amount_index_match=" << (amount_index_ok ? "yes" : "no")
                  << " clear_amount_match=" << (clear_amount_equal ? "yes" : "no")
                  << " db_commitment_match=" << (db_commitment_ok ? "yes" : "no")
                  << " stage=parent_index_height_key_asset_amount_commitment status="
                  << (height_ok && pubkey_ok && asset_ok && asset_index_ok &&
                              amount_index_ok && db_commitment_ok
                          ? "PASS" : "FAIL")
                  << std::endl;
    }
    std::cout << "OUTPUT_AUDIT_SUMMARY records=" << output_records
              << " parent_missing=" << output_parent_missing
              << " index_invalid=" << output_index_invalid
              << " height_mismatches=" << output_height_mismatches
              << " pubkey_mismatches=" << output_pubkey_mismatches
              << " asset_mismatches=" << output_asset_mismatches
              << " asset_index_mismatches=" << output_asset_index_mismatches
              << " amount_index_mismatches=" << output_amount_index_mismatches
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
    uint64_t previous_generated_supply = start_height ? db.get_block_already_generated_coins(start_height - 1) : 0;
    uint64_t final_generated_supply = previous_generated_supply;
    unsigned __int128 generated_supply_deltas = 0, transparent_miner_outputs = 0;
    unsigned __int128 transparent_protocol_outputs = 0, ordinary_fees = 0, ordinary_burns = 0;
    std::unordered_set<std::string> observed_key_images;
    std::unordered_set<std::string> observed_transaction_hashes;
    std::unordered_set<std::string> poison_linked_transaction_hashes;
    std::unordered_set<std::string> poison_linked_return_keys;
    crypto::hash previous_block_hash = start_height ? db.get_block_hash_from_height(start_height - 1) : crypto::null_hash;
    for (uint64_t height = start_height; height <= tip_height; ++height)
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
        generated_supply_deltas += static_cast<unsigned __int128>(generated_supply - previous_generated_supply);
      previous_generated_supply = generated_supply;
      final_generated_supply = generated_supply;
      unsigned __int128 block_miner_outputs = 0, block_protocol_outputs = 0;
      for (const tx_out &out : blk.miner_tx.vout) { transparent_miner_outputs += out.amount; block_miner_outputs += out.amount; }
      for (const tx_out &out : blk.protocol_tx.vout) { transparent_protocol_outputs += out.amount; block_protocol_outputs += out.amount; }
      if (forensic_verbose)
        std::cout << "SUPPLY_BLOCK_CHECK height=" << height
                  << " stored_generated=" << generated_supply
                  << " previous_generated=" << (height ? prior_generated_supply : 0)
                  << " miner_outputs=" << uint128_to_string(block_miner_outputs)
                  << " protocol_outputs=" << uint128_to_string(block_protocol_outputs)
                  << " monotonic=" << (height == 0 || generated_supply >= prior_generated_supply ? "yes" : "no")
                  << " within_cap=" << (generated_supply <= MONEY_SUPPLY ? "yes" : "no")
                  << " status=" << ((height == 0 || generated_supply >= prior_generated_supply) && generated_supply <= MONEY_SUPPLY ? "PASS" : "FAIL")
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
          const bool poison_scan_applicable =
              poison_inventory_available && height < 521425 && key->asset_type == "SAL1";
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
        poison_linked_return_keys.insert(pod_to_hex_string(tx.protocol_tx_data.return_address));
        const bool stake_dissection =
            tx.type == transaction_type::STAKE && tx.amount_burnt == 500 * COIN;
        if (stake_dissection)
          std::cout << "FORENSIC_STAKE_DISSECTION height=" << height
                    << " tx=" << tx_hash_hex
                    << " stake_amount=" << tx.amount_burnt
                    << " fee=" << tx.rct_signatures.txnFee
                    << " inputs=" << tx.vin.size()
                    << " rule=ONE_REAL_MEMBER_PER_INPUT"
                    << " identity=HIDDEN_BY_RING_SIGNATURE"
                    << " multi_input_funding=SUM_OF_SELECTED_MEMBERS\n";

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
            const unsigned __int128 required = static_cast<unsigned __int128>(tx.amount_burnt) + tx.rct_signatures.txnFee;
            const uint64_t known_amount = rec.clear_amount != 0 ? rec.clear_amount : parent_amount;
            const bool amount_known = known_amount != 0;
            const bool known_insufficient = amount_known && known_amount < required;
            const bool alone_covers = amount_known && known_amount >= required;
            const bool hypothetical_change_known =
                amount_known && tx.vin.size() == 1 && known_amount >= required;
            const uint64_t hypothetical_change =
                hypothetical_change_known
                    ? known_amount - static_cast<uint64_t>(required)
                    : 0;
            std::cout << (stake_dissection ? "FORENSIC_STAKE_MEMBER tx=" : "FORENSIC_MEMBER tx=")
                      << pod_to_hex_string(blk.tx_hashes[tx_pos])
                      << " input=" << input_index << " member=" << member
                      << " rank=" << rank << " output_id=" << output_id
                      << " poison=" << poison_ranks.count(rank)
                      << " flags=" << rec.flags << " clear=" << rec.clear_amount
                      << " parent=" << pod_to_hex_string(rec.tx_hash)
                      << " parent_height=" << rec.od.height
                      << " parent_type=" << parent_type << " parent_rct=" << parent_rct
                      << " parent_amount=" << parent_amount
                      << " amount_known=" << (amount_known ? "yes" : "no")
                      << " candidate_amount=" << known_amount
                      << " insufficient=" << known_insufficient
                      << " alone_covers_stake="
                      << (amount_known ? (alone_covers ? "yes" : "no") : "unknown")
                      << " hypothetical_change_known="
                      << (hypothetical_change_known ? "yes" : "no")
                      << " hypothetical_change=" << hypothetical_change
                      << " consensus_ring_candidate=yes"
                      << " actual_spend=cryptographically_hidden"
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
    std::cout << "FORENSIC_SUMMARY blocks=" << scan_blocks << " txs=" << scanned_txs
              << " inputs=" << scanned_inputs << " matched_txs=" << matched_txs
              << " matched_inputs=" << matched_inputs
              << " duplicate_key_images=" << duplicate_key_images
              << " cleartext_txs=" << cleartext_txs
              << " arithmetic_overflows=" << arithmetic_overflows
              << " reconstruction_failures=" << reconstruction_failures
              << " matched_signature_failures=" << matched_signature_failures
              << " broken_block_links=" << broken_block_links
              << " missing_block_transactions=" << missing_block_transactions
              << " duplicate_transaction_hashes=" << duplicate_transaction_hashes
              << " general_forensics=COMPLETE"
              << " start_height=" << start_height << " end_height=" << tip_height
              << " prior_spend_validation=CONSENSUS_REPLAY_REQUIRED"
              << " legacy_poison_analysis="
              << (poison_inventory_available ? "COMPLETE" : "SKIPPED_MISSING_INVENTORY")
              << '\n';

    std::cout << "SUPPLY_AUDIT_SUMMARY stored_final_generated=" << final_generated_supply
              << " accumulated_stored_deltas=" << uint128_to_string(generated_supply_deltas)
              << " generated_supply_decreases=" << generated_supply_decreases
              << " generated_supply_exceeds_cap=" << generated_supply_exceeds_cap
              << " transparent_miner_outputs=" << uint128_to_string(transparent_miner_outputs)
              << " transparent_protocol_outputs=" << uint128_to_string(transparent_protocol_outputs)
              << " ordinary_fees=" << uint128_to_string(ordinary_fees)
              << " ordinary_burns=" << uint128_to_string(ordinary_burns)
              << " consensus_reward_replay=SEPARATE_IMPORT_REQUIRED"
              << " confidential_net_amounts=COMMITMENT_ONLY" << '\n';

    // Recursively follow candidate lineage in chain order.  A reference to one
    // candidate ring member is only POSSIBLE: that member may be a decoy.  A
    // spend is DEFINITE only when every member of at least one input ring is
    // already definite.  This is deliberately a set-membership statement, not
    // a guess about which member supplied the key image.
    struct lineage_output
    {
      uint64_t depth;
      bool definite;
      std::string parent_tx;
    };
    struct resolved_lineage_output
    {
      uint64_t output_id;
      uint64_t asset_index;
      std::string asset;
    };
    std::unordered_map<uint64_t, lineage_output> lineage_outputs;
    std::unordered_set<std::string> possible_lineage_txs;
    std::unordered_set<std::string> definite_lineage_txs;
    uint64_t root_outputs = 0, definite_descendant_outputs = 0, possible_descendant_outputs = 0;
    uint64_t recursive_ring_references = 0, recursive_transactions = 0;
    uint64_t later_protocol_return_key_matches = 0, unresolved_lineage_inputs = 0;
    uint64_t max_lineage_depth = 0;

    if (poison_inventory_available)
    {
      // Shifted legacy ranks alone do not identify bad coins. Seed only
      // canonical outputs whose serialized origin has the actual defect.
      for (const uint64_t output_id : intrinsic_bad_output_ids)
      {
        const output_record_t rec = db.get_output_record_by_id(output_id);
        lineage_outputs.emplace(output_id, lineage_output{0, true, pod_to_hex_string(rec.tx_hash)});
        ++root_outputs;
        std::cout << "LINEAGE_OUTPUT confidence=ROOT_CONFIRMED depth=0"
                  << " tx=" << pod_to_hex_string(rec.tx_hash)
                  << " output_id=" << output_id << " height=" << rec.od.height
                  << " blacklist=RECOMMENDED reason=SERIALIZED_CLEARTEXT_CONFIDENTIAL_ORIGIN\n";
        std::cout << "PROPOSED_BLACKLIST output_id=" << output_id
                  << " confidence=ROOT_CONFIRMED"
                  << " action=REJECT_RING_REFERENCE recommended=yes\n";
      }

      auto resolve_lineage_ring =
          [&](const txin_to_key& input,
              const uint64_t height,
              std::vector<uint64_t>& output_ids,
              std::string& why) -> bool
      {
        const std::vector<uint64_t> indices =
            relative_output_offsets_to_absolute(input.key_offsets);
        output_ids.clear();
        output_ids.reserve(indices.size());
        try
        {
          if (height < 521425 && input.asset_type == "SAL1")
          {
            for (const uint64_t rank : indices)
            {
              if (rank >= legacy_refs.size())
              {
                why = "legacy SAL1 rank is outside inventory";
                return false;
              }
              output_ids.push_back(legacy_refs[rank]);
            }
          }
          else
          {
            db.get_output_ids_by_asset_index(input.asset_type, indices, output_ids);
            if (output_ids.size() != indices.size())
            {
              why = "resolved output count does not match ring size";
              return false;
            }
          }
          return true;
        }
        catch (const std::exception& e)
        {
          why = e.what();
          return false;
        }
      };

      auto resolve_tx_output_ids =
          [&](const crypto::hash& txid,
              const transaction& tx,
              const uint64_t height,
              std::vector<resolved_lineage_output>& outputs,
              std::string& why) -> bool
      {
        uint64_t tx_db_id = 0;
        if (!db.tx_exists(txid, tx_db_id))
        {
          why = "transaction database id not found";
          return false;
        }
        try
        {
          const auto all_indices = db.get_tx_amount_output_indices(tx_db_id, 1);
          if (all_indices.size() != 1 || all_indices.front().size() != tx.vout.size())
          {
            why = "transaction output index count mismatch";
            return false;
          }
          outputs.clear();
          outputs.reserve(tx.vout.size());
          for (size_t i = 0; i < tx.vout.size(); ++i)
          {
            std::string asset;
            if (!get_output_asset_type(tx.vout[i], asset))
            {
              why = "cannot determine output asset";
              return false;
            }
            const uint64_t asset_index = all_indices.front()[i].second;
            const bool generated = tx.vin.size() == 1 && boost::get<txin_gen>(&tx.vin.front());
            const uint64_t bucket = generated && tx.version >= 2 ? 0 : tx.vout[i].amount;
            const auto output_id = db.get_output_id_by_amount_index(bucket, all_indices.front()[i].first);
            const auto actual = db.get_output_tx_and_index_from_global(output_id);
            if (actual.first != txid || actual.second != i) {
              why = "canonical descendant output identity mismatch";
              return false;
            }
            outputs.push_back(resolved_lineage_output{output_id, asset_index, asset});
          }
          return true;
        }
        catch (const std::exception& e)
        {
          why = e.what();
          return false;
        }
      };

      std::cout << "LINEAGE_CONFIG traversal=FORWARD_RECURSIVE"
                << " confidence_classes=ROOT_CONFIRMED,DEFINITE_RING_SET,POSSIBLE_RING_REFERENCE"
                << " isolation_policy=CONFIRMED_ORIGIN_ONLY"
                << " descendant_policy=HUMAN_REVIEW"
                << " decoy_attribution=FORBIDDEN\n";
      for (uint64_t height = start_height; height <= tip_height; ++height)
      {
        if (!(height % 25000))
          std::cout << "LINEAGE_PROGRESS height=" << height
                    << " candidate_outputs=" << lineage_outputs.size()
                    << " candidate_transactions=" << recursive_transactions << '\n';
        const block blk = db.get_block_from_height(height);
        for (const tx_out& out : blk.protocol_tx.vout)
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

        for (const crypto::hash& txid : blk.tx_hashes)
        {
          transaction tx;
          if (!db.get_tx(txid, tx)) continue;

          bool possible = false;
          bool definite = false;
          uint64_t parent_depth = std::numeric_limits<uint64_t>::max();
          uint64_t matching_members = 0;
          uint64_t definite_members = 0;
          for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
          {
            const txin_to_key* input = boost::get<txin_to_key>(&tx.vin[input_index]);
            if (!input) continue;
            std::vector<uint64_t> ring_output_ids;
            std::string why;
            if (!resolve_lineage_ring(*input, height, ring_output_ids, why))
            {
              ++unresolved_lineage_inputs;
              if (forensic_verbose)
                std::cout << "LINEAGE_INPUT_ERROR height=" << height
                          << " tx=" << pod_to_hex_string(txid)
                          << " input=" << input_index
                          << " reason=" << std::quoted(why) << '\n';
              continue;
            }

            size_t input_matches = 0;
            size_t input_definite = 0;
            uint64_t input_depth = std::numeric_limits<uint64_t>::max();
            for (size_t member = 0; member < ring_output_ids.size(); ++member)
            {
              const auto found = lineage_outputs.find(ring_output_ids[member]);
              if (found == lineage_outputs.end()) continue;
              ++input_matches;
              ++matching_members;
              ++recursive_ring_references;
              if (found->second.definite)
              {
                ++input_definite;
                ++definite_members;
              }
              input_depth = std::min(input_depth, found->second.depth);
              std::cout << "LINEAGE_RING_REFERENCE height=" << height
                        << " tx=" << pod_to_hex_string(txid)
                        << " input=" << input_index
                        << " member=" << member
                        << " output_id=" << ring_output_ids[member]
                        << " parent_depth=" << found->second.depth
                        << " parent_confidence="
                        << (found->second.definite ? "DEFINITE" : "POSSIBLE") << '\n';
            }
            if (input_matches != 0)
            {
              possible = true;
              parent_depth = std::min(parent_depth, input_depth);
            }
            if (!ring_output_ids.empty() && input_definite == ring_output_ids.size())
              definite = true;
          }
          if (!possible) continue;

          const uint64_t depth = parent_depth + 1;
          max_lineage_depth = std::max(max_lineage_depth, depth);
          const std::string tx_hash_hex = pod_to_hex_string(txid);
          ++recursive_transactions;
          possible_lineage_txs.insert(tx_hash_hex);
          if (definite) definite_lineage_txs.insert(tx_hash_hex);
          std::cout << "LINEAGE_TRANSACTION height=" << height
                    << " tx=" << tx_hash_hex
                    << " depth=" << depth
                    << " confidence="
                    << (definite ? "DEFINITE_RING_SET" : "POSSIBLE_RING_REFERENCE")
                    << " matching_members=" << matching_members
                    << " definite_members=" << definite_members
                    << " outputs=" << tx.vout.size()
                    << " disposition=REVIEW_ONLY"
                    << " automatic_isolation=no"
                    << '\n';

          std::vector<resolved_lineage_output> tx_outputs;
          std::string why;
          if (!resolve_tx_output_ids(txid, tx, height, tx_outputs, why))
          {
            std::cout << "LINEAGE_TX_OUTPUT_ERROR height=" << height
                      << " tx=" << tx_hash_hex
                      << " reason=" << std::quoted(why) << '\n';
            continue;
          }
          for (size_t output_index = 0; output_index < tx_outputs.size(); ++output_index)
          {
            const resolved_lineage_output& resolved = tx_outputs[output_index];
            const uint64_t output_id = resolved.output_id;
            const auto inserted = lineage_outputs.emplace(
                output_id, lineage_output{depth, definite, tx_hash_hex});
            if (!inserted.second)
            {
              if (definite && !inserted.first->second.definite)
                inserted.first->second.definite = true;
              inserted.first->second.depth =
                  std::min(inserted.first->second.depth, depth);
            }
            if (definite) ++definite_descendant_outputs;
            else ++possible_descendant_outputs;
            std::cout << "LINEAGE_OUTPUT confidence="
                      << (definite ? "DEFINITE_RING_SET" : "POSSIBLE_RING_REFERENCE")
                      << " depth=" << depth
                      << " tx=" << tx_hash_hex
                      << " output_index=" << output_index
                      << " output_id=" << output_id
                      << " asset=" << resolved.asset
                      << " asset_index=" << resolved.asset_index
                      << " disposition=REVIEW_ONLY"
                      << " automatic_isolation=no"
                      << '\n';
            std::cout << "LINEAGE_DESCENDANT_REVIEW output_id=" << output_id
                      << " asset=" << resolved.asset
                      << " asset_index=" << resolved.asset_index
                      << " confidence="
                      << (definite ? "DEFINITE_RING_SET" : "POSSIBLE_RING_REFERENCE")
                      << " action=HUMAN_REVIEW"
                      << " recommended_isolation=no"
                      << " depth=" << depth
                      << " parent_tx=" << tx_hash_hex << '\n';
          }
        }
      }
    }
    std::cout << "AFTEREFFECT_SUMMARY seed_candidate_transactions="
              << poison_linked_transaction_hashes.size()
              << " root_outputs=" << root_outputs
              << " recursive_transactions=" << recursive_transactions
              << " possible_transactions=" << possible_lineage_txs.size()
              << " definite_transactions=" << definite_lineage_txs.size()
              << " definite_descendant_outputs=" << definite_descendant_outputs
              << " possible_descendant_outputs=" << possible_descendant_outputs
              << " recursive_ring_references=" << recursive_ring_references
              << " max_lineage_depth=" << max_lineage_depth
              << " unresolved_lineage_inputs=" << unresolved_lineage_inputs
              << " later_protocol_return_key_matches=" << later_protocol_return_key_matches
              << " isolation_entries=" << root_outputs
              << " descendant_review_outputs=" << (definite_descendant_outputs + possible_descendant_outputs)
              << " real_spend_identity=UNKNOWABLE"
              << " confidential_minted_amount=UNKNOWABLE"
              << " wallet_attribution=UNKNOWABLE"
              << " legacy_poison_analysis="
              << (poison_inventory_available ? "COMPLETE" : "SKIPPED_MISSING_INVENTORY")
              << '\n';
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
  // A ranged audit still needs the token registrations preceding its range.
  // The default forensic pass has reconstructed them without admitting tokens
  // whose creation only occurs in the future of the selected starting height.
  for (const auto& token : forensic_token_creations)
    if (token.second < start_height)
      known_tokens.insert(token.first);
  const char* asset_trace_env = std::getenv("SALVIUM_ASSET_TRACE");
  const std::string asset_to_trace = asset_trace_env ? asset_trace_env : "";

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

      if (!asset_to_trace.empty())
      {
        trace_asset_transaction(blk.miner_tx, height, "miner", asset_to_trace);
        trace_asset_transaction(blk.protocol_tx, height, "protocol", asset_to_trace);
      }

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

        if (!asset_to_trace.empty())
          trace_asset_transaction(tx, height, "block", asset_to_trace);

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

  std::cout << "AUDIT_DISPOSITION forensic_bad_funds=" << (forensic_bad_funds ? "yes" : "no")
            << " verified_as_good=" << (forensic_bad_funds || total_failed ? "no" :
                                        asset_flow_forensic ? "yes" : "NOT_EVALUATED") << '\n';
  return (total_failed == 0 && !forensic_bad_funds) ? 0 : 2;

  CATCH_ENTRY_L0("main", 1);
}
