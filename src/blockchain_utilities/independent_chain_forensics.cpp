#include "independent_chain_forensics.h"

#include <algorithm>
#include <cstdlib>
#include <deque>
#include <iostream>
#include <limits>
#include <map>
#include <set>
#include <sstream>
#include <stdexcept>
#include <unordered_map>
#include <unordered_set>
#include <vector>

#include "blockchain_db/blockchain_db.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_config.h"
#include "cryptonote_core/lineage_audit.h"
#include "cryptonote_core/lineage_audit_policy.h"
#include "string_tools.h"
#include "version.h"

namespace cryptonote
{
namespace
{
  struct rolling_median
  {
    explicit rolling_median(size_t capacity): capacity(capacity) {}

    void push(uint64_t value)
    {
      values.push_back(value);
      if (lower.empty() || value <= *lower.rbegin()) lower.insert(value);
      else upper.insert(value);
      rebalance();
      if (values.size() > capacity)
      {
        const uint64_t old = values.front();
        values.pop_front();
        auto it = lower.find(old);
        if (it != lower.end()) lower.erase(it);
        else upper.erase(upper.find(old));
        rebalance();
      }
    }

    uint64_t median() const
    {
      if (lower.empty()) return 0;
      if (lower.size() != upper.size()) return *lower.rbegin();
      return (*lower.rbegin() + *upper.begin()) / 2;
    }

    size_t size() const { return values.size(); }

  private:
    void rebalance()
    {
      while (lower.size() > upper.size() + 1)
      {
        auto it = std::prev(lower.end());
        upper.insert(*it);
        lower.erase(it);
      }
      while (upper.size() > lower.size())
      {
        auto it = upper.begin();
        lower.insert(*it);
        upper.erase(it);
      }
    }

    size_t capacity;
    std::deque<uint64_t> values;
    std::multiset<uint64_t> lower;
    std::multiset<uint64_t> upper;
  };

  struct authorization
  {
    uint64_t source_height = 0;
    crypto::hash source_tx = crypto::null_hash;
    transaction_type type = transaction_type::UNSET;
    uint64_t amount = 0;
    std::string source_asset;
    std::string destination_asset;
    crypto::public_key return_address = crypto::null_pkey;
    crypto::public_key return_pubkey = crypto::null_pkey;
    carrot::view_tag_t return_view_tag{};
    carrot::encrypted_janus_anchor_t return_anchor{};
    bool carrot = false;
    size_t source_ordinal = 0;
  };

  struct expected_output
  {
    authorization source;
    uint64_t amount = 0;
  };

  std::string hex(const crypto::hash& value)
  {
    return epee::string_tools::pod_to_hex(value);
  }

  std::string decimal(unsigned __int128 value)
  {
    if (value == 0) return "0";
    std::string result;
    while (value)
    {
      result.push_back(static_cast<char>('0' + value % 10));
      value /= 10;
    }
    std::reverse(result.begin(), result.end());
    return result;
  }

  std::string authorization_id(const authorization& entry)
  {
    std::ostringstream out;
    out << hex(entry.source_tx) << ':' << entry.source_ordinal << ':'
        << static_cast<unsigned>(entry.type);
    return out.str();
  }

  uint64_t independent_base_reward(
      uint64_t median_weight,
      uint64_t current_weight,
      uint64_t already_generated,
      uint8_t version,
      bool& valid)
  {
    valid = true;
    if (already_generated == 0) return PREMINE_AMOUNT;
    const int target_minutes = DIFFICULTY_TARGET_V2 / 60;
    const int emission_factor =
        EMISSION_SPEED_FACTOR_PER_MINUTE - (target_minutes - 1);
    uint64_t base =
        (MONEY_SUPPLY - std::min<uint64_t>(already_generated, MONEY_SUPPLY))
        >> emission_factor;
    base = std::max<uint64_t>(
        base, FINAL_SUBSIDY_PER_MINUTE * target_minutes);
    const uint64_t full_zone =
        version < 2 ? CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V1
                    : CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5;
    median_weight = std::max<uint64_t>(median_weight, full_zone);
    if (current_weight <= median_weight) return base;
    if (current_weight > 2 * median_weight)
    {
      valid = false;
      return 0;
    }
    const unsigned __int128 multiplicand =
        static_cast<unsigned __int128>(2 * median_weight - current_weight)
        * current_weight;
    return static_cast<uint64_t>(
        (static_cast<unsigned __int128>(base) * multiplicand)
        / median_weight / median_weight);
  }

  bool output_fields(
      const tx_out& out,
      std::string& asset,
      crypto::public_key& key)
  {
    return get_output_asset_type(out, asset) &&
        get_output_public_key(out, key);
  }

  bool add_checked(uint64_t& total, uint64_t value)
  {
    if (value > std::numeric_limits<uint64_t>::max() - total) return false;
    total += value;
    return true;
  }

  bool expected_matches_actual(
      const expected_output& expected,
      const tx_out& actual,
      const crypto::public_key& actual_tx_pubkey,
      std::string& reason)
  {
    std::string asset;
    crypto::public_key key;
    if (!output_fields(actual, asset, key))
    {
      reason = "UNREADABLE_OUTPUT";
      return false;
    }
    if (asset != expected.source.destination_asset)
    {
      reason = "ASSET_MISMATCH";
      return false;
    }
    if (actual.amount != expected.amount)
    {
      reason = "AMOUNT_MISMATCH";
      return false;
    }
    if (key != expected.source.return_address)
    {
      reason = "DESTINATION_MISMATCH";
      return false;
    }
    if (actual_tx_pubkey != expected.source.return_pubkey)
    {
      reason = "RETURN_PUBKEY_MISMATCH";
      return false;
    }
    if (expected.source.carrot)
    {
      if (actual.target.type() != typeid(txout_to_carrot_v1))
      {
        reason = "OUTPUT_FORMAT_MISMATCH";
        return false;
      }
      const auto& carrot_out = boost::get<txout_to_carrot_v1>(actual.target);
      if (carrot_out.view_tag != expected.source.return_view_tag)
      {
        reason = "VIEW_TAG_MISMATCH";
        return false;
      }
      if (0 != std::memcmp(
          &carrot_out.encrypted_janus_anchor,
          &expected.source.return_anchor,
          sizeof(expected.source.return_anchor)))
      {
        reason = "ANCHOR_MISMATCH";
        return false;
      }
    }
    return true;
  }
}

int run_independent_chain_forensics(
    const BlockchainDB& db,
    const uint64_t requested_tip_height,
    const network_type nettype,
    const bool verbose,
    const uint64_t lineage_activation, const uint64_t lineage_duration, const uint64_t start_height)
{
  uint64_t tip_height = requested_tip_height;
  if (const char *end = std::getenv("SALVIUM_INDEPENDENT_END_HEIGHT"))
  {
    try
    {
      tip_height = std::min<uint64_t>(tip_height, std::stoull(end));
    }
    catch (...) {}
  }
  const auto& config = get_config(nettype);
  const uint64_t stake_lock = config.STAKE_LOCK_PERIOD;
  std::vector<uint8_t> hard_forks(tip_height + 1);
  std::vector<uint64_t> slippage(tip_height + 1);
  std::vector<uint64_t> locked_tally(tip_height + 1);
  std::unordered_map<uint64_t, std::vector<authorization>> stakes;
  std::unordered_map<uint64_t, std::vector<authorization>> audits;
  std::unordered_set<std::string> paid_authorizations;
  lineage_audit lineage;
  lineage.configure(lineage_activation, nettype == MAINNET ? lineage_policy::mainnet_opening_height :
      nettype == TESTNET ? lineage_policy::testnet_opening_height :
      nettype == STAGENET ? lineage_policy::stagenet_opening_height : 0, lineage_duration);
  std::unordered_map<crypto::hash, expected_output> deferred_stakes;
  rolling_median short_weights(CRYPTONOTE_REWARD_BLOCKS_WINDOW);
  rolling_median long_weights(CRYPTONOTE_LONG_TERM_BLOCK_WEIGHT_WINDOW_SIZE);

  uint64_t expected_generated = 0;
  unsigned __int128 expected_sal1_emission = 0;
  unsigned __int128 actual_sal1_issuance = 0;
  unsigned __int128 actual_sal1_outputs = 0;
  unsigned __int128 verified_fees = 0;
  unsigned __int128 claimed_burns = 0;
  uint64_t records = 0, findings = 0, protocol_outputs_checked = 0;
  uint64_t duplicate_authorizations = 0, unauthorized_outputs = 0;
  uint64_t miner_mismatches = 0, protocol_mismatches = 0;
  uint64_t first_mismatch = std::numeric_limits<uint64_t>::max();
  uint8_t affected_hf_min = std::numeric_limits<uint8_t>::max();
  uint8_t affected_hf_max = 0;
  uint64_t prior_locked_tally = 0;
  uint64_t prior_stored_generated = 0;
  uint64_t next_global_output_id = 0;
  uint8_t previous_hf = 0;

  if (start_height > tip_height) throw std::runtime_error("Independent scan starts beyond its tip");
  const auto describe_authorization = [&](const transaction& tx, uint64_t height, uint8_t hf, size_t ordinal) {
      authorization source;
      source.source_height = height;
      source.source_tx = get_transaction_hash(tx);
      source.source_ordinal = ordinal;
      source.type = tx.type;
      source.amount = tx.amount_burnt;
      source.source_asset = tx.source_asset_type;
      if (tx.type == transaction_type::STAKE)
        source.destination_asset =
            hf >= HF_VERSION_SALVIUM_ONE_PROOFS
                ? "SAL1" : "SAL";
      else
      {
        source.destination_asset = tx.destination_asset_type;
        const auto audit_rule = config.AUDIT_HARD_FORKS.find(
            hf);
        if (audit_rule != config.AUDIT_HARD_FORKS.end())
          source.destination_asset = audit_rule->second.second.second;
      }
      source.carrot = tx.version >= TRANSACTION_VERSION_CARROT;
      if (source.carrot)
      {
        source.return_address = tx.protocol_tx_data.return_address;
        source.return_pubkey = tx.protocol_tx_data.return_pubkey;
        source.return_view_tag = tx.protocol_tx_data.return_view_tag;
        source.return_anchor = tx.protocol_tx_data.return_anchor_enc;
      }
      else
      {
        source.return_address = tx.return_address;
        source.return_pubkey = tx.return_pubkey;
      }
      return source;
  };
  if (start_height) {
    // The prior audit is accepted. Load its supply, staking and reward-window
    // context without validating or reporting earlier blocks as audited.
    expected_generated = prior_stored_generated = db.get_block_already_generated_coins(start_height - 1);
    previous_hf = db.get_block_from_height(start_height - 1).major_version;
    for (uint64_t height = 0; height < start_height; ++height) {
      const uint64_t weight = db.get_block_weight(height);
      const uint64_t median = std::max<uint64_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5, long_weights.median());
      short_weights.push(weight);
      long_weights.push(std::min<uint64_t>(weight, median * 17 / 10));
    }
    uint64_t context_window = stake_lock + 1;
    for (const auto& rule : config.AUDIT_HARD_FORKS)
      context_window = std::max(context_window, rule.second.first + 1);
    const uint64_t context_start = start_height > context_window ? start_height - context_window : 0;
    for (uint64_t height = context_start; height < start_height; ++height) {
      const block blk = db.get_block_from_height(height);
      hard_forks[height] = blk.major_version;
      yield_block_info info{};
      if (height && db.get_yield_block_info(height, info))
        throw std::runtime_error("Accepted opening is missing staking context at " + std::to_string(height));
      slippage[height] = info.slippage_total_this_block;
      locked_tally[height] = info.locked_coins_tally;
      size_t ordinal = 0;
      for (const auto& hash : blk.tx_hashes) {
        const transaction tx = db.get_tx(hash);
        if (tx.type != transaction_type::STAKE && tx.type != transaction_type::AUDIT) continue;
        authorization source = describe_authorization(tx, height, blk.major_version, ordinal++);
        if (tx.type == transaction_type::STAKE) stakes[height].push_back(source);
        else audits[height].push_back(source);
      }
    }
    prior_locked_tally = locked_tally[start_height - 1];
    const transaction miner = db.get_block_from_height(start_height).miner_tx;
    uint64_t tx_id = 0;
    if (miner.vout.empty() || !db.tx_exists(get_transaction_hash(miner), tx_id))
      throw std::runtime_error("Missing first scanned miner transaction");
    const auto indices = db.get_tx_amount_output_indices(tx_id, 1);
    if (indices.empty() || indices.front().empty()) throw std::runtime_error("Missing first scanned output index");
    const uint64_t bucket = miner.version >= 2 ? 0 : miner.vout.front().amount;
    next_global_output_id = db.get_output_id_by_amount_index(bucket, indices.front().front().first);
    std::cout << "INDEPENDENT_ACCEPTED_OPENING height=" << start_height - 1
              << " hash=" << hex(db.get_block_hash_from_height(start_height - 1))
              << " generated=" << expected_generated << " locked=" << prior_locked_tally
              << " staking_context_from=" << context_start << " earlier_history=ACCEPTED_NOT_REAUDITED\n";
  }

  std::cout << "INDEPENDENT_CHAIN_CONFIG source=SERIALIZED_BLOCKS"
            << " wallet_view_keys=PUBLIC_CHAIN_DISCLOSURES_ONLY"
            << " consensus_acceptance_calls=NOT_USED"
            << " lineage_authorization=CANONICAL_DISCLOSURE_REPLAY"
            << " lineage_activation=" << lineage_activation
            << " confidential_amounts=COMMITMENT_ONLY"
            << " real_ring_member=CRYPTOGRAPHICALLY_HIDDEN\n";

  for (uint64_t height = start_height; height <= tip_height; ++height)
  {
    const uint64_t findings_before_block = findings;
    if (!(height % 1000))
      std::cout << "INDEPENDENT_CHAIN_PROGRESS height=" << height
                << " target=" << tip_height << " findings=" << findings
                << " authorizations_paid=" << paid_authorizations.size()
                << " status=RUNNING\n";

    const block blk = db.get_block_from_height(height);
    if (height == 0 || blk.major_version != previous_hf)
    {
      for (int offset = -2; offset <= 2; ++offset)
      {
        if (offset < 0 && height < static_cast<uint64_t>(-offset)) continue;
        const uint64_t boundary_height =
            offset < 0 ? height - static_cast<uint64_t>(-offset)
                       : height + static_cast<uint64_t>(offset);
        if (boundary_height > tip_height || boundary_height < start_height) continue;
        const block boundary = db.get_block_from_height(boundary_height);
        std::cout << "HF_BOUNDARY_RECORD activation_height=" << height
                  << " offset=" << offset
                  << " height=" << boundary_height
                  << " hf=" << static_cast<unsigned>(boundary.major_version)
                  << " block=" << hex(get_block_hash(boundary))
                  << " tests=reward,tx_version,rct_version,protocol_asset,"
                     "output_index,migration\n";
      }
      previous_hf = blk.major_version;
    }
    const uint64_t miner_output_base = next_global_output_id;
    const uint64_t protocol_output_base =
        miner_output_base + blk.miner_tx.vout.size();
    const uint64_t stored_generated =
        db.get_block_already_generated_coins(height);
    const uint64_t stored_base_delta =
        stored_generated >= prior_stored_generated
            ? stored_generated - prior_stored_generated : 0;
    hard_forks[height] = blk.major_version;
    const uint64_t block_weight = db.get_block_weight(height);

    uint64_t effective_long_median =
        std::max<uint64_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5,
                           long_weights.median());
    uint64_t median_weight = short_weights.size()
        ? short_weights.median()
        : CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5;
    if (long_weights.size())
      median_weight = std::min<uint64_t>(
          std::max<uint64_t>(effective_long_median, median_weight),
          CRYPTONOTE_SHORT_TERM_BLOCK_WEIGHT_SURGE_FACTOR
              * effective_long_median);

    std::vector<transaction> transactions;
    transactions.reserve(blk.tx_hashes.size());
    uint64_t block_fees = 0;
    for (const crypto::hash& tx_hash : blk.tx_hashes)
    {
      transaction tx;
      if (!db.get_tx(tx_hash, tx))
      {
        ++findings;
        first_mismatch = std::min(first_mismatch, height);
        std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                  << " class=MISSING_TRANSACTION tx=" << hex(tx_hash) << '\n';
        continue;
      }
      transactions.push_back(tx);
      uint64_t tx_fee = tx.rct_signatures.txnFee;
      bool fee_valid = true;
      if (tx.version == 1)
      {
        uint64_t inputs = 0, outputs = 0;
        for (const txin_v& input : tx.vin)
        {
          const txin_to_key *key = boost::get<txin_to_key>(&input);
          if (!key || !add_checked(inputs, key->amount))
          {
            fee_valid = false;
            break;
          }
        }
        for (const tx_out& output : tx.vout)
          if (!add_checked(outputs, output.amount))
          {
            fee_valid = false;
            break;
          }
        if (inputs < outputs) fee_valid = false;
        else tx_fee = inputs - outputs;
      }
      if (!fee_valid || !add_checked(block_fees, tx_fee))
      {
        ++findings;
        first_mismatch = std::min(first_mismatch, height);
        std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                  << " class=FEE_OVERFLOW tx=" << hex(tx_hash) << '\n';
      }
      verified_fees += tx_fee;
      claimed_burns += tx.amount_burnt;
    }

    bool reward_valid = false;
    const uint64_t base_reward = independent_base_reward(
        median_weight, block_weight, expected_generated,
        blk.major_version, reward_valid);
    const uint64_t total_reward =
        base_reward <= std::numeric_limits<uint64_t>::max() - block_fees
            ? base_reward + block_fees : 0;
    if (!reward_valid || total_reward == 0)
    {
      ++findings;
      ++miner_mismatches;
      first_mismatch = std::min(first_mismatch, height);
      std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                << " class=INDEPENDENT_REWARD_CALCULATION_FAILED"
                << " median_weight=" << median_weight
                << " block_weight=" << block_weight << '\n';
    }

    const bool split_treasury =
        blk.major_version >= HF_VERSION_ENABLE_TOKENS;
    const uint64_t expected_treasury_reward =
        split_treasury ? total_reward * BLOCK_REWARD_TREASURY_PCT / 100 : 0;
    const uint64_t expected_stake_reward =
        height == 0 ? 0 :
        (split_treasury
             ? (total_reward - expected_treasury_reward)
                   * BLOCK_REWARD_STAKER_PCT / 100
             : total_reward / 5);
    const uint64_t scheduled_treasury_mint =
        config.TREASURY_SAL1_MINT_OUTPUT_DATA.count(height)
            ? TREASURY_SAL1_MINT_AMOUNT : 0;

    uint64_t miner_value = blk.miner_tx.amount_burnt;
    uint64_t miner_sal1_outputs = 0;
    bool miner_uses_sal1 = false;
    bool miner_overflow = false;
    std::vector<crypto::public_key> miner_keys;
    for (const tx_out& out : blk.miner_tx.vout)
    {
      std::string asset;
      crypto::public_key key;
      if (!output_fields(out, asset, key))
      {
        ++findings;
        ++miner_mismatches;
        first_mismatch = std::min(first_mismatch, height);
        continue;
      }
      miner_keys.push_back(key);
      if (!add_checked(miner_value, out.amount)) miner_overflow = true;
      if (asset == "SAL1")
      {
        miner_uses_sal1 = true;
        miner_sal1_outputs += out.amount;
        actual_sal1_outputs += out.amount;
      }
    }
    const uint64_t expected_miner_value =
        total_reward + scheduled_treasury_mint;
    const bool miner_value_ok =
        !miner_overflow && miner_value == expected_miner_value;
    const bool stake_split_ok =
        height == 0 || blk.miner_tx.amount_burnt == expected_stake_reward;
    const bool miner_order_ok =
        blk.major_version < HF_VERSION_CARROT ||
        std::is_sorted(miner_keys.begin(), miner_keys.end());
    if (!miner_value_ok || !stake_split_ok || !miner_order_ok)
    {
      ++findings;
      ++miner_mismatches;
      first_mismatch = std::min(first_mismatch, height);
      std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                << " class=MINER_ISSUANCE_MISMATCH"
                << " expected_total=" << expected_miner_value
                << " actual_outputs_plus_stake=" << miner_value
                << " expected_base=" << base_reward
                << " stored_base_delta=" << stored_base_delta
                << " independent_fee=" << block_fees
                << " implied_actual_fee="
                << (miner_value >= stored_base_delta
                        ? miner_value - stored_base_delta : 0)
                << " median_weight=" << median_weight
                << " short_median=" << short_weights.median()
                << " raw_long_median=" << long_weights.median()
                << " rolling_long_median=" << effective_long_median
                << " block_weight=" << block_weight
                << " expected_stake=" << expected_stake_reward
                << " actual_stake=" << blk.miner_tx.amount_burnt
                << " canonical_order=" << (miner_order_ok ? "yes" : "no")
                << '\n';
    }

    std::vector<expected_output> expected_protocol;
    uint64_t matured_locked = 0;
    if (height > stake_lock)
    {
      const uint64_t matured_height = height - stake_lock - 1;
      const auto it = stakes.find(matured_height);
      if (it != stakes.end())
      {
        std::unordered_map<uint64_t, uint64_t> payout_by_amount;
        for (const authorization& source : it->second)
        {
          uint64_t payout = source.amount;
          const auto cached = payout_by_amount.find(source.amount);
          if (cached != payout_by_amount.end())
            payout = cached->second;
          else
          {
            for (uint64_t index = matured_height + 1; index < height; ++index)
            {
              if (slippage[index] == 0 || locked_tally[index] == 0) continue;
              const uint64_t yield = static_cast<uint64_t>(
                  static_cast<unsigned __int128>(slippage[index])
                      * source.amount / locked_tally[index]);
              if (!add_checked(payout, yield))
              {
                ++findings;
                first_mismatch = std::min(first_mismatch, height);
                std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                          << " class=STAKE_PAYOUT_OVERFLOW"
                          << " source_tx=" << hex(source.source_tx) << '\n';
                payout = 0;
                break;
              }
            }
            payout_by_amount.emplace(source.amount, payout);
          }
          if (lineage.active(height) && (!lineage.closing_height() || source.source_height < lineage.activation()))
            deferred_stakes.emplace(source.source_tx, expected_output{source, payout});
          else
            expected_protocol.push_back({source, payout});
          matured_locked += source.amount;
        }
        stakes.erase(it);
      }
    }

    if (lineage.active(height))
    {
      // Replay public evidence through the previous block. Amounts and their
      // original earning windows above remain independently reconstructed.
      try { lineage.sync_until(db, nettype, height); }
      catch (const std::exception& error) {
        std::cerr << "Lineage authorization replay failed at " << height << ": " << error.what() << '\n';
        return 1;
      }
      for (const auto& id : lineage.stake_payouts(height)) {
        const auto found = deferred_stakes.find(id);
        if (found == deferred_stakes.end()) {
          std::cerr << "Missing independently reconstructed stake authorization at " << height << '\n';
          return 1;
        }
        expected_protocol.push_back(found->second);
        deferred_stakes.erase(found);
      }
      std::sort(expected_protocol.begin(), expected_protocol.end(),
          [](const expected_output& a, const expected_output& b) {
            return std::tie(a.source.source_height, a.source.source_ordinal) <
                   std::tie(b.source.source_height, b.source.source_ordinal);
          });
    }

    for (const auto& audit_hf : config.AUDIT_HARD_FORKS)
    {
      const uint64_t lock = audit_hf.second.first;
      if (height <= lock) continue;
      const uint64_t matured_height = height - lock - 1;
      if (hard_forks[matured_height] != audit_hf.first) continue;
      const auto it = audits.find(matured_height);
      if (it != audits.end())
        for (const authorization& source : it->second)
        {
          if (hex(source.source_tx) ==
              "017a79539e69ce16e91d9aa2267c102f336678c41636567c1129e3e72149499a")
            continue;
          expected_protocol.push_back({source, source.amount});
        }
      break;
    }

    size_t ordinal = 0;
    for (const transaction& tx : transactions)
    {
      if (tx.type != transaction_type::CREATE_TOKEN) continue;
      authorization source;
      source.source_height = height;
      source.source_tx = get_transaction_hash(tx);
      source.source_ordinal = ordinal++;
      source.type = transaction_type::CREATE_TOKEN;
      source.source_asset = "SAL1";
      source.destination_asset = "sal" + tx.token_metadata.asset_type;
      source.return_address = tx.protocol_tx_data.return_address;
      source.return_pubkey = tx.protocol_tx_data.return_pubkey;
      source.return_view_tag = tx.protocol_tx_data.return_view_tag;
      source.return_anchor = tx.protocol_tx_data.return_anchor_enc;
      source.carrot = true;
      const sal_token_t token = boost::get<sal_token_t>(tx.token_metadata.token);
      if (token.supply > MONEY_SUPPLY / COIN)
      {
        ++findings;
        first_mismatch = std::min(first_mismatch, height);
        std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                  << " class=TOKEN_SUPPLY_OVERFLOW tx="
                  << hex(source.source_tx) << '\n';
        continue;
      }
      expected_protocol.push_back({source, token.supply * COIN});
    }

    const std::vector<crypto::public_key> protocol_pubkeys =
        get_additional_tx_pub_keys_from_extra(blk.protocol_tx.extra);
    if (blk.protocol_tx.vout.size() != expected_protocol.size())
    {
      ++findings;
      ++protocol_mismatches;
      if (blk.protocol_tx.vout.size() > expected_protocol.size())
        unauthorized_outputs +=
            blk.protocol_tx.vout.size() - expected_protocol.size();
      first_mismatch = std::min(first_mismatch, height);
      std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                << " class=PROTOCOL_OUTPUT_COUNT_MISMATCH"
                << " expected=" << expected_protocol.size()
                << " actual=" << blk.protocol_tx.vout.size() << '\n';
      if (blk.protocol_tx.vout.size() > expected_protocol.size())
        for (size_t index = expected_protocol.size();
             index < blk.protocol_tx.vout.size(); ++index)
          std::cout << "UNAUTHORIZED_OUTPUT height=" << height
                    << " protocol_tx="
                    << hex(get_transaction_hash(blk.protocol_tx))
                    << " output=" << index
                    << " output_id=" << (protocol_output_base + index)
                    << " reason=NO_AUTHORIZATION_EDGE\n";
    }

    const size_t comparable =
        std::min(blk.protocol_tx.vout.size(), expected_protocol.size());
    uint64_t expected_protocol_sal1 = 0;
    uint64_t expected_new_protocol_sal1 = 0;
    uint64_t actual_protocol_sal1 = 0;
    for (size_t index = 0; index < expected_protocol.size(); ++index)
      if (expected_protocol[index].source.destination_asset == "SAL1")
      {
        expected_protocol_sal1 += expected_protocol[index].amount;
        if (expected_protocol[index].source.source_asset != "SAL1")
          expected_new_protocol_sal1 += expected_protocol[index].amount;
      }
    for (size_t index = 0; index < blk.protocol_tx.vout.size(); ++index)
    {
      std::string asset;
      crypto::public_key ignored;
      if (output_fields(blk.protocol_tx.vout[index], asset, ignored) &&
          asset == "SAL1")
      {
        actual_protocol_sal1 += blk.protocol_tx.vout[index].amount;
        actual_sal1_outputs += blk.protocol_tx.vout[index].amount;
        if (index >= expected_protocol.size() ||
            expected_protocol[index].source.source_asset != "SAL1")
          actual_sal1_issuance += blk.protocol_tx.vout[index].amount;
      }
    }
    for (size_t index = 0; index < comparable; ++index)
    {
      ++protocol_outputs_checked;
      const crypto::public_key pubkey =
          index < protocol_pubkeys.size()
              ? protocol_pubkeys[index]
              : get_tx_pub_key_from_extra(blk.protocol_tx.extra);
      std::string reason;
      if (!expected_matches_actual(
              expected_protocol[index], blk.protocol_tx.vout[index],
              pubkey, reason))
      {
        ++findings;
        ++protocol_mismatches;
        ++unauthorized_outputs;
        first_mismatch = std::min(first_mismatch, height);
        std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                  << " class=PROTOCOL_OUTPUT_MISMATCH"
                  << " output=" << index
                  << " reason=" << reason
                  << " authorization="
                  << authorization_id(expected_protocol[index].source)
                  << " expected_amount=" << expected_protocol[index].amount
                  << " actual_amount=" << blk.protocol_tx.vout[index].amount
                  << '\n';
      }
      const std::string id =
          authorization_id(expected_protocol[index].source);
      if (!paid_authorizations.insert(id).second)
      {
        ++findings;
        ++duplicate_authorizations;
        first_mismatch = std::min(first_mismatch, height);
        std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                  << " class=DUPLICATE_PROTOCOL_AUTHORIZATION"
                  << " authorization=" << id << '\n';
      }
      if (verbose)
        std::cout << "ISSUANCE_EDGE source_tx="
                  << hex(expected_protocol[index].source.source_tx)
                  << " source_height="
                  << expected_protocol[index].source.source_height
                  << " payout_height=" << height
                  << " protocol_tx=" << hex(get_transaction_hash(blk.protocol_tx))
                  << " output=" << index
                  << " output_id=" << (protocol_output_base + index)
                  << " amount=" << expected_protocol[index].amount
                  << " asset="
                  << expected_protocol[index].source.destination_asset
                  << " authorization=" << id << '\n';
    }

    if (expected_protocol_sal1 != actual_protocol_sal1)
    {
      ++findings;
      ++protocol_mismatches;
      first_mismatch = std::min(first_mismatch, height);
      std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                << " class=SAL1_PROTOCOL_ISSUANCE_MISMATCH"
                << " expected=" << expected_protocol_sal1
                << " actual=" << actual_protocol_sal1 << '\n';
    }

    if (miner_uses_sal1)
    {
      expected_sal1_emission += base_reward + scheduled_treasury_mint;
      if (miner_value >= block_fees)
        actual_sal1_issuance += miner_value - block_fees;
    }
    expected_sal1_emission += expected_new_protocol_sal1;
    expected_generated += base_reward;
    prior_stored_generated = stored_generated;

    uint64_t current_staked = 0;
    ordinal = 0;
    for (const transaction& tx : transactions)
    {
      if (tx.type != transaction_type::STAKE &&
          tx.type != transaction_type::AUDIT)
        continue;
      authorization source = describe_authorization(tx, height, blk.major_version, ordinal++);
      if (tx.type == transaction_type::STAKE)
      {
        stakes[height].push_back(source);
        current_staked += tx.amount_burnt;
      }
      else
        audits[height].push_back(source);
    }

    locked_tally[height] =
        prior_locked_tally >= matured_locked
            ? prior_locked_tally - matured_locked + current_staked
            : current_staked;
    prior_locked_tally = locked_tally[height];

    if (blk.major_version < HF_VERSION_ENABLE_CONVERT)
      slippage[height] = expected_stake_reward;
    else
    {
      std::map<std::string, __int128_t> residuals;
      for (const transaction& tx : transactions)
        if (tx.type == transaction_type::CONVERT)
          residuals[tx.destination_asset_type] += tx.amount_burnt;
      for (const expected_output& output : expected_protocol)
        residuals[output.source.destination_asset] -= output.amount;

      __int128_t sal_total = 0;
      bool prices_valid = true;
      for (const auto& residual : residuals)
      {
        if (residual.first == "SAL")
          sal_total += residual.second;
        else
        {
          const uint64_t sal_price = blk.pricing_record["SAL"];
          const uint64_t asset_price = blk.pricing_record[residual.first];
          if (sal_price == 0 || asset_price == 0)
          {
            prices_valid = false;
            continue;
          }
          sal_total += residual.second * asset_price / sal_price;
        }
      }
      if (!prices_valid || sal_total < 0 ||
          sal_total > std::numeric_limits<uint64_t>::max())
      {
        ++findings;
        first_mismatch = std::min(first_mismatch, height);
        std::cout << "INDEPENDENT_CHAIN_FINDING height=" << height
                  << " class=SLIPPAGE_RECONSTRUCTION_FAILED\n";
      }
      else
        slippage[height] = static_cast<uint64_t>(sal_total);
    }

    // This is the bounded value inserted into the consensus rolling median,
    // not the separately persisted long-term block weight.  Before the
    // 100k window fills, consensus still applies the upper 1.7x bound here.
    effective_long_median =
        std::max<uint64_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5,
                           long_weights.median());
    uint64_t long_weight = std::min<uint64_t>(
        block_weight, effective_long_median * 17 / 10);
    short_weights.push(block_weight);
    long_weights.push(long_weight);
    next_global_output_id +=
        blk.miner_tx.vout.size() + blk.protocol_tx.vout.size();
    for (const transaction& tx : transactions)
      next_global_output_id += tx.vout.size();

    if (verbose || findings != findings_before_block)
      std::cout << "BLOCK_FORENSIC_RECORD height=" << height
                << " block=" << hex(get_block_hash(blk))
                << " hf=" << static_cast<unsigned>(blk.major_version)
                << " expected_base_reward=" << base_reward
                << " verified_fees=" << block_fees
                << " expected_treasury_reward=" << expected_treasury_reward
                << " expected_stake_reward=" << expected_stake_reward
                << " expected_protocol_sal1=" << expected_protocol_sal1
                << " actual_protocol_sal1=" << actual_protocol_sal1
                << " miner_sal1_outputs=" << miner_sal1_outputs
                << " authorizations=" << expected_protocol.size()
                << " status="
                << (findings != findings_before_block ? "FINDING" : "PASS")
                << '\n';
    if (findings != findings_before_block)
    {
      affected_hf_min = std::min<uint8_t>(affected_hf_min, blk.major_version);
      affected_hf_max = std::max<uint8_t>(affected_hf_max, blk.major_version);
    }
    ++records;
  }

  std::cout << "INDEPENDENT_CHAIN_SUMMARY records=" << records
            << " start_height=" << start_height << " end_height=" << tip_height
            << " expected_sal1_emission="
            << decimal(expected_sal1_emission)
            << " actual_sal1_issuance="
            << decimal(actual_sal1_issuance)
            << " issuance_match="
            << (expected_sal1_emission == actual_sal1_issuance ? "yes" : "no")
            << " actual_visible_sal1_outputs="
            << decimal(actual_sal1_outputs)
            << " verified_fees="
            << decimal(verified_fees)
            << " claimed_burns="
            << decimal(claimed_burns)
            << " protocol_outputs_checked=" << protocol_outputs_checked
            << " paid_authorizations=" << paid_authorizations.size()
            << " duplicate_authorizations=" << duplicate_authorizations
            << " unauthorized_outputs=" << unauthorized_outputs
            << " miner_mismatches=" << miner_mismatches
            << " protocol_mismatches=" << protocol_mismatches
            << " first_mismatch="
            << (first_mismatch == std::numeric_limits<uint64_t>::max()
                    ? -1 : static_cast<int64_t>(first_mismatch))
            << " affected_hf_min="
            << (affected_hf_min == std::numeric_limits<uint8_t>::max()
                    ? -1 : static_cast<int>(affected_hf_min))
            << " affected_hf_max="
            << (affected_hf_min == std::numeric_limits<uint8_t>::max()
                    ? -1 : static_cast<int>(affected_hf_max))
            << " findings=" << findings
            << " current_build=" << MONERO_VERSION_FULL
            << " reproducible_on_current_build="
            << (findings ? "yes" : "no")
            << " spent_status=RING_DEPENDENT_UNKNOWN"
            << " status="
            << (findings || expected_sal1_emission != actual_sal1_issuance
                    ? "FINDING" : "PASS")
            << '\n';
  return 0;
}
}
