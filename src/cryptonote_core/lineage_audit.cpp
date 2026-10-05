#include "lineage_audit.h"
#include "blockchain.h"
#include "blockchain_db/blockchain_db.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_basic/tx_extra.h"
#include "cryptonote_config.h"
#include "cryptonote_basic/cryptonote_basic_impl.h"
#include "ringct/rctSigs.h"
#include "carrot_core/destination.h"
#include "carrot_core/account.h"
#include "carrot_impl/format_utils.h"
#include "serialization/binary_utils.h"
#include "string_tools.h"
#include <algorithm>
#include <limits>
#include <stdexcept>

namespace cryptonote
{
bool is_lineage_audit_asset(const std::string& asset)
{
  return asset == "SAL1" || (is_asset_type_token(asset) && is_valid_custom_asset_type(asset));
}
namespace {
void require(bool value, const char* error)
{
  if (!value) throw std::runtime_error(error);
}
}

  struct audit_reward_median
  {
    explicit audit_reward_median(size_t capacity): capacity(capacity) {}

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

struct lineage_miner_history
{
  audit_reward_median short_weights{CRYPTONOTE_REWARD_BLOCKS_WINDOW};
  audit_reward_median long_weights{CRYPTONOTE_LONG_TERM_BLOCK_WEIGHT_WINDOW_SIZE};
  std::vector<bool> valid;
  uint64_t generated = 0;
  crypto::hash tip = crypto::null_hash;
};

bool lineage_audit::valid_miner_origin(const BlockchainDB& db, network_type net, uint64_t target) const
{
  if (miner_history_ && !miner_history_->valid.empty() &&
      (miner_history_->valid.size() > db.height() ||
       db.get_block_hash_from_height(miner_history_->valid.size() - 1) != miner_history_->tip)) miner_history_.reset();
  if (!miner_history_) {
    miner_history_ = std::make_shared<lineage_miner_history>();
    if (opening_height_) {
      require(opening_height_ < db.height(), "Previous audit boundary is not in the canonical chain");
      // The pre-SAL1 chain supplies emission context. Reconstruct issuance
      // after the opening, retaining its reward-window metadata as context.
      auto& opening = *miner_history_;
      opening.valid.assign(opening_height_ + 1, true);
      opening.generated = db.get_block_already_generated_coins(opening_height_);
      require(opening.generated <= MONEY_SUPPLY, "Invalid opening emission total");
      const auto begin = [](uint64_t end, uint64_t count) { return end + 1 > count ? end + 1 - count : 0; };
      for (uint64_t h = begin(opening_height_, CRYPTONOTE_REWARD_BLOCKS_WINDOW); h <= opening_height_; ++h)
        opening.short_weights.push(db.get_block_weight(h));
      for (uint64_t h = begin(opening_height_, CRYPTONOTE_LONG_TERM_BLOCK_WEIGHT_WINDOW_SIZE); h <= opening_height_; ++h)
        opening.long_weights.push(db.get_block_long_term_weight(h));
      opening.tip = db.get_block_hash_from_height(opening_height_);
    }
  }
  auto& history = *miner_history_;
  // Reconstruct permitted issuance from the emission schedule. Stored supply
  // totals cannot grant a historical miner output clearance.
  while (history.valid.size() <= target) {
    const uint64_t height = history.valid.size();
    if (opening_height_ && height % 10000 == 0)
      MGINFO("Audit mining history: block " << height << "/" << target);
    const block b = db.get_block_from_height(height);
    const uint64_t weight = db.get_block_weight(height);
    const uint64_t long_median = std::max<uint64_t>(CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5, history.long_weights.median());
    uint64_t median = history.short_weights.size() ? history.short_weights.median() : CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5;
    if (history.long_weights.size()) median = std::min<uint64_t>(std::max(long_median, median),
        CRYPTONOTE_SHORT_TERM_BLOCK_WEIGHT_SURGE_FACTOR * long_median);
    uint64_t reward = 0;
    bool valid = get_block_reward(median, weight, history.generated, reward, b.major_version);
    const auto* generation = b.miner_tx.vin.size() == 1 ? boost::get<txin_gen>(&b.miner_tx.vin.front()) : nullptr;
    valid &= generation && generation->height == height;
    unsigned __int128 fees = 0;
    for (const auto& id : b.tx_hashes) {
      const auto tx = db.get_tx(id);
      if (tx.version > 1) fees += tx.rct_signatures.txnFee;
      else {
        unsigned __int128 inputs = 0, outputs = 0;
        for (const auto& in : tx.vin) {
          const auto* key = boost::get<txin_to_key>(&in);
          if (!key) valid = false; else inputs += key->amount;
        }
        for (const auto& out : tx.vout) outputs += out.amount;
        if (inputs < outputs) valid = false; else fees += inputs - outputs;
      }
    }
    const unsigned __int128 total = fees + reward;
    const auto& scheduled = get_config(net).TREASURY_SAL1_MINT_OUTPUT_DATA;
    unsigned __int128 issued = b.miner_tx.amount_burnt;
    bool treasury_mint = !scheduled.count(height);
    for (const auto& out : b.miner_tx.vout) {
      issued += out.amount;
      std::string asset;
      valid &= get_output_asset_type(out, asset) &&
          asset == (b.major_version >= HF_VERSION_SALVIUM_ONE_PROOFS ? "SAL1" : "SAL");
      if (scheduled.count(height)) {
        crypto::public_key key;
        if (get_output_public_key(out, key) && epee::string_tools::pod_to_hex(key) == std::get<1>(scheduled.at(height)) &&
            out.amount == TREASURY_SAL1_MINT_AMOUNT) treasury_mint = true;
      }
    }
    const unsigned __int128 treasury = b.major_version >= HF_VERSION_ENABLE_TOKENS ? total * BLOCK_REWARD_TREASURY_PCT / 100 : 0;
    const unsigned __int128 staker = !height ? 0 : b.major_version >= HF_VERSION_ENABLE_TOKENS ?
        (total - treasury) * BLOCK_REWARD_STAKER_PCT / 100 : total / 5;
    valid &= total <= std::numeric_limits<uint64_t>::max() && treasury_mint &&
        issued == total + (scheduled.count(height) ? TREASURY_SAL1_MINT_AMOUNT : 0) && b.miner_tx.amount_burnt == staker;
    bool partial = false;
    uint64_t checked_reward = 0;
    valid &= fees <= std::numeric_limits<uint64_t>::max() &&
        Blockchain::validate_miner_reward(b, weight, static_cast<uint64_t>(fees), checked_reward,
            history.generated, partial, b.major_version, net, median);
    history.valid.push_back(valid);
    history.generated = reward < MONEY_SUPPLY - history.generated ? history.generated + reward : MONEY_SUPPLY;
    history.short_weights.push(weight);
    history.long_weights.push(std::min<uint64_t>(weight, long_median * 17 / 10));
    history.tip = db.get_block_hash_from_height(height);
  }
  return history.valid[target];
}

void lineage_audit::configure(uint64_t activation, uint64_t opening_height, uint64_t duration)
{
  require(!activation || opening_height < activation, "Previous audit boundary must precede activation");
  require(activation <= std::numeric_limits<uint64_t>::max() - duration, "Audit closing height overflow");
  require(!duration || activation + duration <= std::numeric_limits<uint64_t>::max() - (release_delay - 1),
      "Final audit clearance release height overflow");
  activation_ = activation;
  opening_height_ = opening_height;
  duration_ = duration;
  miner_history_.reset();
  reset();
}
void lineage_audit::reset()
{
  reset_eligible_outputs();
  historical_payout_cache_.clear();
  last_inspection_.reset();
  current_undo_ = nullptr;
  undo_.clear();
  next_height_ = activation_;
  tip_ = crypto::null_hash;
  records_.clear(); waiting_.clear(); queue_.clear(); queued_.clear();
  output_records_.clear();
  disclosures_.clear();
  stake_payouts_.clear();
}
void lineage_audit::enqueue(const crypto::key_image& image)
{
  if (queued_.insert(image).second) queue_.push_back(image);
}

lineage_audit::ring_member lineage_audit::resolve(const BlockchainDB& db, const std::string& asset, uint64_t index, bool legacy_indices)
{
  const auto global_id = legacy_indices ? db.get_legacy_output_id_by_asset_index(asset, index) :
      db.get_output_id_by_asset_index(asset, index);
  const auto source = db.get_output_tx_and_index_from_global(global_id);
  const transaction tx = db.get_tx(source.first);
  require(get_transaction_hash(tx) == source.first, "Canonical ring transaction hash mismatch");
  crypto::public_key key;
  std::string source_asset;
  require(get_output_public_key(tx.vout.at(source.second), key) &&
      get_output_asset_type(tx.vout.at(source.second), source_asset) && source_asset == asset,
      "Invalid canonical ring member");
  const uint64_t height = db.get_tx_block_height(source.first);
  bool protocol = false;
  if (tx.type == transaction_type::PROTOCOL) {
    const block b = db.get_block_from_height(height);
    protocol = get_transaction_hash(b.protocol_tx) == source.first;
    size_t matches = 0;
    for (const auto& output : tx.vout) {
      crypto::public_key other;
      if (get_output_public_key(output, other) && other == key) ++matches;
    }
    protocol &= matches == 1;
  }
  // Carrot outputs have no per-output unlock field. The old output table
  // therefore stores zero even for a 60-block coinbase/protocol payout.
  // Once lineage reveals the real input, enforce its canonical maturity
  // explicitly; wallet coin selection alone is not a consensus guarantee.
  uint64_t unlock = 0;
  require(get_output_unlock_time(tx.vout.at(source.second), unlock), "Invalid canonical unlock time");
  if (!unlock)
    unlock = tx.type == transaction_type::MINER || tx.type == transaction_type::PROTOCOL ?
        CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW : CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;
  unlock = std::max<uint64_t>(unlock, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
  require(height <= std::numeric_limits<uint64_t>::max() - unlock, "Canonical unlock height overflow");
  return {key, source.first, source.second, height, protocol, height + unlock};
}
bool lineage_audit::matches(const record& source, const ring_member& member)
{
  return member.key == source.output_key && member.height ==
      (source.stake_return ? source.payout_height : source.output_height) &&
      (source.stake_return ? member.canonical_protocol :
       member.transaction == source.origin && member.output == source.output_index);
}

bool lineage_audit::has_bad_asset_origin(const transaction& tx)
{
  for (const auto& output : tx.vout) {
    std::string asset;
    require(get_output_asset_type(output, asset), "Unrecognized output asset");
    // Ordinary transactions return their source asset, including change from
    // token registration. Only a separately authorized protocol payout mints a
    // different asset. Token enrollment must not permit salYAHU -> SAL1 at 465074.
    if (asset != tx.source_asset_type) return true;
  }
  return false;
}

bool lineage_audit::historical_stake_payout(const BlockchainDB& db, network_type net, const transaction& stake,
    uint64_t payout_height) const
{
  const auto id = get_transaction_hash(stake);
  const auto anchor = db.get_block_hash_from_height(payout_height);
  const auto cached = historical_payout_cache_.find(id);
  if (cached != historical_payout_cache_.end() && cached->second.first == anchor) return cached->second.second;
  const auto verify = [&]() {
    const auto lock = get_config(net).STAKE_LOCK_PERIOD;
    if (payout_height <= lock) return false;
    uint64_t amount = stake.amount_burnt;
    // Use the original canonical earning window, exactly as the native payout
    // calculator does. A matching return key alone cannot authorize inflation.
    for (uint64_t h = payout_height - lock; h < payout_height; ++h) {
      yield_block_info info{};
      if (db.get_yield_block_info(h, info) != 0) return false;
      if (!info.locked_coins_tally || !info.slippage_total_this_block) continue;
      const unsigned __int128 yield = static_cast<unsigned __int128>(info.slippage_total_this_block) *
          stake.amount_burnt / info.locked_coins_tally;
      if (yield > std::numeric_limits<uint64_t>::max() - amount) return false;
      amount += static_cast<uint64_t>(yield);
    }
    const transaction payout = db.get_block_from_height(payout_height).protocol_tx;
    const bool carrot = carrot::is_carrot_transaction_v1(stake);
    const auto key = carrot ? stake.protocol_tx_data.return_address : stake.return_address;
    const auto ephemeral = carrot ? stake.protocol_tx_data.return_pubkey : stake.return_pubkey;
    const auto additional = get_additional_tx_pub_keys_from_extra(payout);
    size_t count = 0;
    for (size_t index = 0; index < payout.vout.size(); ++index) {
      crypto::public_key output_key;
      const auto& output = payout.vout[index];
      if (!get_output_public_key(output, output_key) || output_key != key) continue;
      ++count;
      std::string asset;
      if (!get_output_asset_type(output, asset) || asset != "SAL1" || output.amount != amount) return false;
      const auto actual = index < additional.size() ? additional[index] : get_tx_pub_key_from_extra(payout);
      if (actual != ephemeral) return false;
      if (carrot) {
        const auto* target = boost::get<txout_to_carrot_v1>(&output.target);
        if (!target || target->view_tag != stake.protocol_tx_data.return_view_tag ||
            std::memcmp(&target->encrypted_janus_anchor, &stake.protocol_tx_data.return_anchor_enc,
                sizeof(target->encrypted_janus_anchor))) return false;
      } else {
        uint64_t unlock = 0;
        if (!get_output_unlock_time(output, unlock) || unlock != CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW) return false;
      }
    }
    return count == 1;
  };
  const bool valid = verify();
  historical_payout_cache_[id] = {anchor, valid};
  return valid;
}

bool lineage_audit::accepted_conversion_payout(const BlockchainDB& db, network_type net,
    const transaction& payout, uint64_t index, uint64_t payout_height) const
{
  if (payout_height <= opening_height_ || index >= payout.vout.size() ||
      payout.type != transaction_type::PROTOCOL ||
      get_transaction_hash(db.get_block_from_height(payout_height).protocol_tx) != get_transaction_hash(payout)) return false;
  const auto& output = payout.vout[index];
  crypto::public_key key;
  std::string asset;
  uint64_t unlock = 0;
  if (!get_output_public_key(output, key) || !get_output_asset_type(output, asset) || asset != "SAL1" ||
      !get_output_unlock_time(output, unlock) || unlock != CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW) return false;
  size_t copies = 0;
  for (const auto& other : payout.vout) {
    crypto::public_key other_key;
    if (get_output_public_key(other, other_key) && other_key == key) ++copies;
  }
  if (copies != 1) return false;
  const auto additional = get_additional_tx_pub_keys_from_extra(payout);
  const auto ephemeral = index < additional.size() ? additional[index] : get_tx_pub_key_from_extra(payout);
  size_t authorizations = 0;
  for (const auto& rule : get_config(net).AUDIT_HARD_FORKS) {
    const uint64_t lock = rule.second.first;
    if (payout_height <= lock) continue;
    const uint64_t origin_height = payout_height - lock - 1;
    const auto origin_block = db.get_block_from_height(origin_height);
    if (origin_block.major_version != rule.first) continue;
    for (const auto& id : origin_block.tx_hashes) {
      // Preserve the previous audit's explicit rejected authorization.
      if (epee::string_tools::pod_to_hex(id) == "017a79539e69ce16e91d9aa2267c102f336678c41636567c1129e3e72149499a") continue;
      const auto origin = db.get_tx(id);
      if (origin.type != transaction_type::AUDIT || origin.return_address != key) continue;
      if (get_transaction_hash(origin) != id || db.get_tx_block_height(id) != origin_height ||
          origin.source_asset_type != rule.second.second.first || rule.second.second.second != asset ||
          !origin.amount_burnt || origin.amount_burnt != output.amount || origin.return_pubkey != ephemeral) return false;
      ++authorizations;
    }
  }
  // Both historical SAL-to-SAL1 conversion audits are accepted. Match the
  // canonical payout to its authorization to identify that conversion; do not
  // re-audit its SAL inputs or require those owners to enroll SAL evidence.
  // The SAL1 output still needs its own ownership proof and C + 10 release.
  return authorizations == 1;
}

bool lineage_audit::token_issuance_payout(const BlockchainDB& db, const transaction& payout,
    uint64_t index, uint64_t payout_height, crypto::hash& creation) const
{
  if (payout.type != transaction_type::PROTOCOL || index >= payout.vout.size()) return false;
  const auto origin_block = db.get_block_from_height(payout_height);
  if (origin_block.major_version < HF_VERSION_ENABLE_TOKENS ||
      get_transaction_hash(origin_block.protocol_tx) != get_transaction_hash(payout)) return false;
  const auto& output = payout.vout[index];
  const auto* target = boost::get<txout_to_carrot_v1>(&output.target);
  if (!target || !is_asset_type_token(target->asset_type) || !is_lineage_audit_asset(target->asset_type)) return false;
  // A token is issued once, as its first canonical output. A second mint or
  // asset-ID collision cannot become another root under the same ticker.
  const auto first = db.get_output_tx_and_index_from_global(db.get_output_id_by_asset_index(target->asset_type, 0));
  if (first.first != get_transaction_hash(payout) || first.second != index) return false;
  size_t copies = 0;
  for (const auto& other : payout.vout) {
    std::string asset;
    crypto::public_key key;
    if (!get_output_asset_type(other, asset) || !get_output_public_key(other, key)) return false;
    if (asset == target->asset_type || key == target->key) ++copies;
  }
  if (copies != 1) return false;
  const auto additional = get_additional_tx_pub_keys_from_extra(payout);
  const auto ephemeral = index < additional.size() ? additional[index] : get_tx_pub_key_from_extra(payout);
  size_t authorizations = 0;
  for (const auto& id : origin_block.tx_hashes) {
    const auto tx = db.get_tx(id);
    if (tx.type != transaction_type::CREATE_TOKEN || "sal" + tx.token_metadata.asset_type != target->asset_type) continue;
    const auto* token = boost::get<sal_token_t>(&tx.token_metadata.token);
    if (get_transaction_hash(tx) != id || db.get_tx_block_height(id) != payout_height ||
        !carrot::is_carrot_transaction_v1(tx) || tx.source_asset_type != "SAL1" || tx.destination_asset_type != "SAL1" ||
        tx.token_metadata.asset_type.substr(0, 3) == "SAL" || !token ||
        !token->supply || token->supply > MONEY_SUPPLY / COIN || output.amount != token->supply * COIN ||
        tx.amount_burnt != get_token_creation_price(tx.token_metadata.asset_type) ||
        tx.protocol_tx_data.return_address != target->key || tx.protocol_tx_data.return_pubkey != ephemeral ||
        tx.protocol_tx_data.return_view_tag != target->view_tag ||
        std::memcmp(&tx.protocol_tx_data.return_anchor_enc, &target->encrypted_janus_anchor,
            sizeof(target->encrypted_janus_anchor))) return false;
    creation = id;
    ++authorizations;
  }
  return authorizations == 1;
}

std::shared_ptr<const std::vector<lineage_audit::dependency>> lineage_audit::inspect_funding(
    const BlockchainDB& db, const transaction& tx, uint64_t origin_height, bool& bad_origin) const
{
  std::vector<dependency> inputs;
  if ((opening_height_ && origin_height <= opening_height_) || bad_origin ||
      tx.type == transaction_type::MINER || tx.type == transaction_type::PROTOCOL)
    return std::make_shared<const std::vector<dependency>>(std::move(inputs));
  rct::ctkeyM rings;
  const uint8_t hf = db.get_block_from_height(origin_height).major_version;
  const bool legacy_indices = hf < HF_VERSION_REALIGN_RCT_INDEX;
  for (const auto& input : tx.vin) {
    const auto* key = boost::get<txin_to_key>(&input);
    require(key && key->amount == 0, "Unsupported audit funding input");
    bad_origin |= key->asset_type != tx.source_asset_type || !is_lineage_audit_asset(key->asset_type);
    dependency dep{key->k_image, key->asset_type, {}};
    rings.emplace_back();
    require(!key->key_offsets.empty() && key->key_offsets.size() <= 256, "Invalid audit funding ring size");
    for (uint64_t index : relative_output_offsets_to_absolute(key->key_offsets)) {
      auto member = resolve(db, key->asset_type, index, legacy_indices);
      require(member.height < origin_height, "Forward audit input");
      const auto source_tx = db.get_tx(member.transaction);
      const auto& source_out = source_tx.vout.at(member.output);
      // Preserve the commitment used by the historical signature for poisoned
      // decoys. Their actual origins still fail the intrinsic output checks.
      const auto commitment = source_tx.type == transaction_type::MINER || source_tx.type == transaction_type::PROTOCOL ||
          (legacy_indices && source_out.amount != 0) ? rct::zeroCommit(source_out.amount) :
          source_tx.rct_signatures.outPk.at(member.output).mask;
      rings.back().push_back({rct::pk2rct(member.key), commitment});
      dep.ring.push_back(std::move(member));
    }
    inputs.push_back(std::move(dep));
  }
  require(!inputs.empty(), "Audit funding inputs are missing");
  transaction expanded = tx;
  bad_origin |= !Blockchain::expand_transaction_2(expanded, get_transaction_prefix_hash(expanded), rings, hf) ||
      !rct::verRctSemanticsSimple(expanded.rct_signatures, expanded.amount_burnt, expanded.source_asset_type != "SAL1") ||
      !rct::verRctNonSemanticsSimple(expanded.rct_signatures, expanded.type);
  return std::make_shared<const std::vector<dependency>>(std::move(inputs));
}

crypto::hash lineage_proof_message(const lineage_enrollment& enrollment, const lineage_output_proof& proof)
{
  // Fixed domain and fixed-width identities, followed by canonical varints.
  std::string transcript = "Salvium SAL1 wallet audit v2";
  transcript.append(reinterpret_cast<const char*>(&enrollment.genesis), sizeof(enrollment.genesis));
  transcript.push_back(enrollment.network);
  transcript += t_serializable_object_to_blob(enrollment.activation_height);
  transcript.append(reinterpret_cast<const char*>(&proof.transaction), sizeof(proof.transaction));
  transcript += t_serializable_object_to_blob(proof.output_index);
  transcript.push_back(proof.stake_return ? 1 : 0);
  transcript.push_back(proof.offset_mask);
  transcript += t_serializable_object_to_blob(proof.amount);
  transcript.append(reinterpret_cast<const char*>(&proof.image), sizeof(proof.image));
  return crypto::cn_fast_hash(transcript.data(), transcript.size());
}

bool verify_lineage_output_proof(const lineage_enrollment& enrollment, const lineage_output_proof& proof,
    const crypto::public_key& key, const rct::key& commitment)
{
  if (proof.offset_mask > 1 || !rct::isInMainSubgroup(rct::ki2rct(proof.image)) ||
      !rct::isInMainSubgroup(rct::pk2rct(key))) return false;
  auto signature = proof.signature;
  signature.I = rct::ki2rct(proof.image);
  return rct::verRctTCLSAGSimple(rct::hash2rct(lineage_proof_message(enrollment, proof)), signature,
      {{rct::pk2rct(key), commitment}}, rct::commit(proof.amount, proof.offset_mask ? rct::identity() : rct::zero()));
}

std::vector<lineage_audit::record> lineage_audit::inspect(const BlockchainDB& db,
    network_type net, const block& candidate, uint64_t height) const
{
  std::vector<tx_extra_field> fields;
  require(parse_tx_extra(candidate.miner_tx.extra, fields), "Malformed miner extra");
  lineage_enrollment enrollment;
  std::string audit_data;
  for (const auto& field : fields)
    if (const auto* item = boost::get<tx_extra_lineage_audit>(&field)) {
      require(active(height), "Audit enrollment before activation");
      require(enrollment_open(height), "Audit enrollment is closed; unresolved funds remain frozen");
      const auto encoded = t_serializable_object_to_blob(field);
      require(encoded.size() <= lineage_limits::max_bytes - audit_data.size(), "Audit block exceeds byte limit");
      audit_data += encoded;
      lineage_enrollment batch;
      require(serialization::parse_binary(item->data, batch) &&
          t_serializable_object_to_blob(batch) == item->data,
          "Malformed or noncanonical wallet audit proof; viewing-secret disclosures are not accepted");
      require(batch.genesis == db.get_block_hash_from_height(0) &&
          batch.network == static_cast<uint8_t>(net) && batch.activation_height == activation_,
          "Audit network or activation epoch mismatch");
      require(batch.outputs.size() <= lineage_limits::max_outputs - enrollment.outputs.size(),
          "Audit block exceeds output proof limit");
      enrollment.genesis = batch.genesis;
      enrollment.network = batch.network;
      enrollment.activation_height = batch.activation_height;
      enrollment.outputs.insert(enrollment.outputs.end(), batch.outputs.begin(), batch.outputs.end());
    }
  if (audit_data.empty()) return {};
  require(active(height), "Audit enrollment before activation");
  require(enrollment_open(height), "Audit enrollment is closed; unresolved funds remain frozen");
  // Signatures do not bind sibling proofs. Each original batch remains intact
  // in the block and retains its own confirmation ID and rollback journal.
  const auto enrollment_id = crypto::cn_fast_hash(audit_data.data(), audit_data.size());
  const auto parent = db.get_block_hash_from_height(height - 1);
  const auto check_identity = [&](const record& item) {
    const auto previous = records_.find(item.image);
    require(previous == records_.end() || (previous->second.output_key == item.output_key &&
        previous->second.origin == item.origin && previous->second.output_index == item.output_index &&
        previous->second.stake_return == item.stake_return), "Conflicting audit key image");
  };
  if (last_inspection_ && last_inspection_->enrollment == enrollment_id && last_inspection_->parent == parent &&
      last_inspection_->height == height && last_inspection_->network == net) {
    for (const auto& item : last_inspection_->records) check_identity(item);
    return last_inspection_->records;
  }

  std::vector<record> result;
  bool cacheable = true;
  size_t total_inputs = 0, total_bytes = 0;
  std::unordered_map<crypto::hash, transaction> sources;
  // Reject oversized batches before doing expensive ring verification. Wallets
  // must receive the budget error in time to split saved, independently signed
  // proofs, including when the node is running with limited CPU resources.
  const auto add_source = [&](const crypto::hash& id) {
    if (sources.count(id)) return;
    require(db.tx_exists(id), "Audit transaction is not canonical");
    auto tx = db.get_tx(id);
    total_bytes += t_serializable_object_to_blob(tx).size();
    if (!opening_height_ || db.get_tx_block_height(id) > opening_height_)
      total_inputs += tx.vin.size();
    require(total_inputs <= lineage_limits::max_funding_inputs && total_bytes <= lineage_limits::max_source_bytes, "Audit enrollment exceeds verification budget");
    sources.emplace(id, std::move(tx));
  };
  for (const auto& proof : enrollment.outputs) {
    add_source(proof.transaction);
    const auto& tx = sources.at(proof.transaction);
    if (tx.type == transaction_type::PROTOCOL && proof.output_index < tx.vout.size()) {
      std::string asset;
      crypto::hash creation;
      if (get_output_asset_type(tx.vout[proof.output_index], asset) && is_asset_type_token(asset) &&
          token_issuance_payout(db, tx, proof.output_index, db.get_tx_block_height(proof.transaction), creation))
        add_source(creation);
    }
  }
  std::unordered_map<crypto::hash, std::shared_ptr<const std::vector<dependency>>> funding_cache;
  std::set<crypto::key_image> batch_images;
  std::unordered_set<crypto::hash> bad_transactions;
  for (const auto& proof : enrollment.outputs) {
    require(batch_images.insert(proof.image).second, "Duplicate audit key image");
    require(db.tx_exists(proof.transaction), "Audit transaction is not canonical");
    const uint64_t origin_height = db.get_tx_block_height(proof.transaction);
    require(origin_height < height, "Audit transaction must precede enrollment block");
    require(!closing_height() || origin_height < activation_,
        "Post-activation outputs inherit clearance and cannot be enrolled again");
    const transaction& tx = sources.at(proof.transaction);
    require(get_transaction_hash(tx) == proof.transaction, "Audit transaction hash mismatch");
    const bool opening = opening_height_ && origin_height <= opening_height_;
    cacheable &= tx.type != transaction_type::PROTOCOL;
    // An accepted opening boundary skips earlier ancestry, not an intrinsic
    // asset-origin defect. In particular, ownership of historical salYAHU ->
    // SAL1 issuance must never turn those outputs into an accepted audit root.
    bool bad_origin = tx.type != transaction_type::MINER && tx.type != transaction_type::PROTOCOL &&
        (has_bad_asset_origin(tx) || tx_has_cleartext_confidential_amount(tx));
    if (!opening && tx.type == transaction_type::MINER) bad_origin |= !valid_miner_origin(db, net, origin_height);
    auto funding = funding_cache.find(proof.transaction);
    if (funding == funding_cache.end()) {
      funding = funding_cache.emplace(proof.transaction, inspect_funding(db, tx, origin_height, bad_origin)).first;
    }
    if (bad_origin) bad_transactions.insert(proof.transaction);
    bad_origin |= bad_transactions.count(proof.transaction) != 0;
    crypto::public_key key;
    rct::key commitment;
    std::string asset = "SAL1";
    auto inputs = funding->second;
    uint64_t output_height = origin_height;
    if (proof.stake_return) {
      require(tx.type == transaction_type::STAKE && tx.source_asset_type == "SAL1" && proof.output_index == 0,
          "Invalid audit stake reference");
      require(proof.amount == tx.amount_burnt && proof.amount > 0, "Audit stake principal mismatch");
      key = carrot::is_carrot_transaction_v1(tx) ? tx.protocol_tx_data.return_address : tx.return_address;
      // A stake has a public principal and a committed return key, but no
      // return-output commitment yet. Use a fixed nonzero mask for ownership.
      commitment = rct::commit(proof.amount, rct::identity());
      const auto lock = get_config(net).STAKE_LOCK_PERIOD;
      require(origin_height < std::numeric_limits<uint64_t>::max() - lock - 1, "Stake height overflow");
      output_height += lock + 1;
      if (opening_height_ && output_height <= opening_height_) {
        // Its paid output belongs to the opening inventory. Do not re-enroll
        // the completed stake or let it reserve that output's key image.
        require(verify_lineage_output_proof(enrollment, proof, key, commitment), "Invalid audit ownership proof");
        continue;
      }
      if (output_height < activation_ && output_height > opening_height_)
        bad_origin |= !historical_stake_payout(db, net, tx, output_height);
    } else {
      require(proof.output_index < tx.vout.size(), "Audit output index out of range");
      const auto& output = tx.vout[proof.output_index];
      require(get_output_asset_type(output, asset) && is_lineage_audit_asset(asset) && get_output_public_key(output, key),
          "Audit output must be SAL1 or a token; legacy SAL is excluded");
      if (tx.type == transaction_type::MINER || tx.type == transaction_type::PROTOCOL) {
        require(proof.amount == output.amount, "Audit public amount mismatch");
        commitment = rct::commit(proof.amount, rct::identity());
        const block origin = db.get_block_from_height(origin_height);
        bad_origin |= get_transaction_hash(tx.type == transaction_type::MINER ? origin.miner_tx : origin.protocol_tx) != proof.transaction;
        if (asset != "SAL1") {
          crypto::hash creation;
          if (tx.type != transaction_type::PROTOCOL ||
              !token_issuance_payout(db, tx, proof.output_index, origin_height, creation)) bad_origin = true;
          else {
            const auto& registration = sources.at(creation);
            auto created_funding = funding_cache.find(creation);
            bool invalid = has_bad_asset_origin(registration) || tx_has_cleartext_confidential_amount(registration);
            if (created_funding == funding_cache.end())
              created_funding = funding_cache.emplace(creation, inspect_funding(db, registration, origin_height, invalid)).first;
            if (invalid) bad_transactions.insert(creation);
            bad_origin |= bad_transactions.count(creation) != 0;
            inputs = created_funding->second;
          }
        }
        // Accepted SAL-to-SAL1 conversions are roots. Other protocol payouts
        // require a verified stake return with the exact key and payout height.
        if (asset == "SAL1" && !opening && tx.type == transaction_type::PROTOCOL &&
            !accepted_conversion_payout(db, net, tx, proof.output_index, origin_height)) {
          const auto previous = records_.find(proof.image);
          if (previous != records_.end() && previous->second.stake_return && previous->second.output_key == key &&
              previous->second.payout_height == origin_height) {
            require(verify_lineage_output_proof(enrollment, proof, key, commitment), "Invalid audit ownership proof");
            continue;
          }
          // An unassociated receipt must not reserve the key image: the owner
          // may enroll its originating stake later, in either batch order.
          require(verify_lineage_output_proof(enrollment, proof, key, commitment), "Invalid audit ownership proof");
          continue;
        }
      } else {
        require(proof.output_index < tx.rct_signatures.outPk.size(), "Missing canonical amount commitment");
        commitment = tx.rct_signatures.outPk[proof.output_index].mask;
      }
    }
    require(crypto::check_key(key) && verify_lineage_output_proof(enrollment, proof, key, commitment),
        "Invalid audit ownership or amount proof");
    const auto previous = records_.find(proof.image);
    require(previous == records_.end() || (previous->second.output_key == key && previous->second.origin == proof.transaction &&
        previous->second.output_index == proof.output_index && previous->second.stake_return == proof.stake_return),
        "Conflicting audit key image");
    result.push_back({proof.image, key, proof.transaction, output_height, proof.output_index,
        proof.stake_return, 0, bad_origin, 0, inputs, 0, asset});
  }
  if (cacheable) last_inspection_ = std::make_shared<const inspection_cache>(inspection_cache{
      enrollment_id, parent, height, net, result});
  return result;
}

void lineage_audit::insert(const std::vector<record>& records)
{
  for (const auto& item : records) {
    const auto inserted = records_.emplace(item.image, item);
    if (!inserted.second) continue;
    output_records_[item.output_key].insert(item.image);
    if (current_undo_) current_undo_->inserted.push_back(item.image);
    // Payouts made before this fork keep their historical identity. They still
    // need good ancestry before spending; no second payout is scheduled.
    if (item.stake_return && item.output_height < activation_)
      inserted.first->second.payout_height = item.output_height;
    for (const auto& dep : *item.inputs) waiting_[dep.image].insert(item.image);
    enqueue(item.image);
    const auto waiting = waiting_.find(item.image);
    if (waiting != waiting_.end()) for (const auto& child : waiting->second) enqueue(child);
  }
}
void lineage_audit::advance(uint64_t height)
{
  // Freeze the verdict set at the deadline, including unresolved dependencies.
  if (closing_height() && height >= closing_height()) return;
  for (size_t work = 0; work < work_per_block && !queue_.empty(); ++work) {
    const auto image = queue_.front(); queue_.pop_front(); queued_.erase(image);
    auto& item = records_.at(image);
    if (item.verdict) continue;
    bool bad = item.bad_origin, review = false, complete = true;
    for (const auto& dep : *item.inputs) {
      const auto found = records_.find(dep.image);
      if (found == records_.end()) { complete = false; continue; }
      const auto& parent = found->second;
      bool found_source = false, ambiguous = false;
      for (const auto& member : dep.ring) if (member.key == parent.output_key) {
        found_source |= matches(parent, member);
        ambiguous |= !matches(parent, member);
      }
      // A repeated public key can share a key image across different amount
      // commitments. Never substitute a good output for a different real input.
      if (!is_lineage_audit_asset(dep.asset) || dep.asset != parent.asset ||
          parent.output_height >= item.output_height || !found_source || ambiguous) {
        complete = false;
        continue;
      }
      // Only the transaction that contains the intrinsic defect is BAD.
      // Downstream ownership can include an exchange sale, pooled custody or
      // change shared with unrelated deposits.  Preserve that provenance as a
      // review finding without recursively contaminating the child.
      review |= parent.verdict == 2 || parent.verdict == 3;
      complete &= parent.verdict == 1 || parent.verdict == 2 || parent.verdict == 3;
    }
    if (!bad && !complete) continue;
    require(height <= std::numeric_limits<uint64_t>::max() - release_delay, "Audit release height overflow");
    remember_change(item);
    item.verdict = bad ? 2 : review ? 3 : 1;
    item.completion = height;
    // REVIEW never owns payout authorization. The ordinary stake path remains
    // authoritative, so recording provenance cannot move a payout to C + 10.
    if (!bad && !review && item.stake_return && item.output_height >= activation_) {
      require(height <= std::numeric_limits<uint64_t>::max() - release_delay,
          "Stake audit release height overflow");
      item.payout_height = std::max(item.output_height, height + release_delay);
      stake_payouts_[item.payout_height].insert(item.origin);
    }
    const auto waiting = waiting_.find(image);
    if (waiting != waiting_.end()) for (const auto& child : waiting->second) enqueue(child);
  }
}

void lineage_audit::remember_change(const record& item)
{
  if (current_undo_ && std::find(current_undo_->inserted.begin(), current_undo_->inserted.end(), item.image) ==
      current_undo_->inserted.end()) current_undo_->changed.emplace(item.image, item);
}

void lineage_audit::rollback_last()
{
  reset_eligible_outputs();
  require(!undo_.empty(), "Missing audit rollback journal");
  auto& journal = undo_.back();
  const auto remove_payout = [&](const record& item) {
    if (!item.stake_return || item.verdict != 1 || item.output_height < activation_) return;
    const auto payout = stake_payouts_.find(item.payout_height);
    if (payout == stake_payouts_.end()) return;
    payout->second.erase(item.origin);
    if (payout->second.empty()) stake_payouts_.erase(payout);
  };
  for (const auto& image : journal.inserted) {
    const auto item = records_.find(image);
    require(item != records_.end(), "Missing inserted audit record during rollback");
    remove_payout(item->second);
    for (const auto& dep : *item->second.inputs) {
      const auto waiting = waiting_.find(dep.image);
      if (waiting != waiting_.end()) {
        waiting->second.erase(image);
        if (waiting->second.empty()) waiting_.erase(waiting);
      }
    }
    auto keys = output_records_.find(item->second.output_key);
    require(keys != output_records_.end(), "Missing audit output index during rollback");
    keys->second.erase(image);
    if (keys->second.empty()) output_records_.erase(keys);
    records_.erase(item);
  }
  for (const auto& item : journal.changed) {
    auto& current = records_.at(item.first);
    remove_payout(current);
    current = item.second;
  }
  for (const auto& id : journal.disclosures) disclosures_.erase(id);
  queue_ = std::move(journal.queue_before);
  queued_.clear();
  queued_.insert(queue_.begin(), queue_.end());
  next_height_ = journal.height;
  tip_ = journal.previous_tip;
  last_inspection_.reset();
  undo_.pop_back();
}

void lineage_audit::sync(const BlockchainDB& db, network_type net)
{
  sync_until(db, net, db.height());
}

void lineage_audit::sync_until(const BlockchainDB& db, network_type net, uint64_t end)
{
  if (!activation_) return;
  require(end <= db.height(), "Audit replay extends beyond canonical chain");
  if (!miner_history_ && opening_height_ && end > opening_height_) {
    MGINFO("Preparing audit mining history through block " << end - 1 << "; this can take several minutes");
    // Cache every origin's verdict, including bad ones. Existing bad issuance
    // must remain available for classification, without granting it clearance.
    valid_miner_origin(db, net, end - 1);
    MGINFO("Audit mining history prepared through block " << end - 1);
  }
  const auto detached = [&]() {
    return next_height_ > end || (next_height_ > activation_ &&
        db.get_block_hash_from_height(next_height_ - 1) != tip_);
  };
  while (detached()) {
    if (undo_.empty() || undo_.back().height + 1 != next_height_) { reset(); break; }
    rollback_last();
  }
  while (next_height_ < end) {
    const block b = db.get_block_from_height(next_height_);
    if (closing_height()) {
      // Reconstruct the same eligibility inductively on restart/reorg. An
      // output's creation height alone must not bless invalid historical funds.
      for (const auto& id : b.tx_hashes) {
        std::string reason;
        if (!check_window_spend(db, net, db.get_tx(id), next_height_, reason))
          throw std::runtime_error("Invalid canonical audit-window spend: " + reason);
      }
    }
    const auto inspected = inspect(db, net, b, next_height_);
    // Keep at most 64 * 16,384 queued images (~32 MiB) in rollback snapshots.
    // An unusually large backlog falls back to canonical reconstruction.
    const bool keep_undo = queue_.size() <= 16384;
    undo_entry journal{next_height_, db.get_block_hash_from_height(next_height_), tip_,
        keep_undo ? queue_ : std::deque<crypto::key_image>{}, {}, {}, {}};
    journal.inserted.reserve(inspected.size());
    current_undo_ = keep_undo ? &journal : nullptr;
    try {
      insert(inspected);
      advance(next_height_);
      std::vector<tx_extra_field> fields;
      require(parse_tx_extra(b.miner_tx.extra, fields), "Malformed canonical audit extra");
      for (const auto& field : fields)
        if (const auto* envelope = boost::get<tx_extra_lineage_audit>(&field)) {
          const auto id = crypto::cn_fast_hash(envelope->data.data(), envelope->data.size());
          if (disclosures_.emplace(id, next_height_).second) journal.disclosures.push_back(id);
        }
      current_undo_ = nullptr;
      tip_ = journal.hash;
      ++next_height_;
      if (keep_undo) {
        undo_.push_back(std::move(journal));
        if (undo_.size() > undo_window) undo_.pop_front();
      } else undo_.clear();
    } catch (...) {
      // Never retain a partially applied state after an allocation/parse error.
      reset();
      throw;
    }
  }
}

std::vector<crypto::hash> lineage_audit::stake_payouts(uint64_t height) const
{
  const auto found = stake_payouts_.find(height);
  if (found == stake_payouts_.end()) return {};
  std::vector<crypto::hash> result(found->second.begin(), found->second.end());
  std::sort(result.begin(), result.end(), [](const crypto::hash& a, const crypto::hash& b) {
    return memcmp(&a, &b, sizeof(a)) < 0;
  });
  return result;
}

bool lineage_audit::validate_disclosure(BlockchainDB& db, network_type net,
    const block& candidate, std::string& reason) const
{
  try { inspect(db, net, candidate, db.height()); return true; }
  catch (const std::exception& error) { reason = error.what(); return false; }
}

uint64_t lineage_audit::disclosure_height(const crypto::hash& id) const
{
  const auto found = disclosures_.find(id);
  return found == disclosures_.end() ? 0 : found->second;
}
lineage_audit::status lineage_audit::get_status(const crypto::key_image& image,
    uint64_t candidate_height) const
{
  if (!active(candidate_height)) return {"INACTIVE", 0, 0};
  const auto found = records_.find(image);
  if (found == records_.end()) return {"UNDISCLOSED", 0, 0};
  const auto& item = found->second;
  if (item.verdict == 2) return {"BAD", 0, 0};
  if (item.verdict == 3) return {"REVIEW", item.completion, 0};
  if (!item.verdict) return {"PENDING", 0, 0};
  const uint64_t release = item.completion + release_delay;
  return {candidate_height < release ? "MATURING" : "AUDIT_PASSED", item.completion, release};
}

bool lineage_audit::output_spendable(const BlockchainDB& db, network_type net, uint64_t global_id, uint64_t height) const
{
  if (!active(height) || !closing_height()) return true;
  const auto source = db.get_output_tx_and_index_from_global(global_id);
  const transaction tx = db.get_tx(source.first);
  require(get_transaction_hash(tx) == source.first, "Canonical audit output transaction mismatch");
  const uint64_t origin_height = db.get_tx_block_height(source.first);
  crypto::public_key key;
  std::string asset;
  require(get_output_public_key(tx.vout.at(source.second), key) &&
      get_output_asset_type(tx.vout.at(source.second), asset), "Invalid audit output");
  if (!is_lineage_audit_asset(asset)) return false;
  uint64_t age = 0;
  require(get_output_unlock_time(tx.vout.at(source.second), age), "Invalid audit output lock");
  if (!age) age = tx.type == transaction_type::MINER || tx.type == transaction_type::PROTOCOL ?
      CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW : CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;
  age = std::max<uint64_t>(age, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
  if (origin_height >= height || age > height - origin_height) return false;
  // Post-activation transactions have passed the eligible-ring rule below.
  // Canonical protocol returns are authorized by the payout validator. Mining
  // continues independently, with its issuance checked against emission history.
  if (origin_height >= activation_ && tx.type == transaction_type::MINER) {
    const block b = db.get_block_from_height(origin_height);
    return get_transaction_hash(b.miner_tx) == source.first && valid_miner_origin(db, net, origin_height);
  }
  if (origin_height >= activation_) return true;
  const auto by_key = output_records_.find(key);
  if (by_key == output_records_.end()) return false;
  bool protocol = tx.type == transaction_type::PROTOCOL &&
      get_transaction_hash(db.get_block_from_height(origin_height).protocol_tx) == source.first;
  if (protocol) {
    size_t count = 0;
    for (const auto& output : tx.vout) {
      crypto::public_key other;
      if (get_output_public_key(output, other) && other == key) ++count;
    }
    protocol = count == 1;
  }
  const ring_member member{key, source.first, source.second, origin_height, protocol, origin_height + age};
  for (const auto& image : by_key->second) {
    const auto& item = records_.at(image);
    if (item.verdict == 3 && matches(item, member)) return true;
    if (item.verdict == 1 && height >= item.completion &&
        height - item.completion >= release_delay && matches(item, member)) return true;
  }
  return false;
}

void lineage_audit::reset_eligible_outputs() const
{
  eligible_next_height_ = 0;
  eligible_tip_ = crypto::null_hash;
  eligible_seen_records_.clear(); eligible_due_.clear(); eligible_indices_.clear(); eligible_outputs_.clear();
}

const std::vector<std::pair<uint64_t, uint64_t>>& lineage_audit::eligible_outputs(
    const BlockchainDB& db, network_type net, const std::string& requested_asset) const
{
  const uint64_t height = db.height();
  require(active(height) && closing_height(), "Bounded output audit is not active");
  require(is_lineage_audit_asset(requested_asset), "Audit population must be SAL1 or a token");
  try {
    if (eligible_next_height_ > height || (eligible_next_height_ &&
        db.get_block_hash_from_height(eligible_next_height_ - 1) != eligible_tip_)) reset_eligible_outputs();
    if (eligible_next_height_ == height) return eligible_outputs_[requested_asset];
    const auto schedule = [&](const transaction& tx, const crypto::hash& id, uint64_t origin,
        uint64_t index, uint64_t audit_release) {
      const auto& out = tx.vout.at(index);
      std::string asset;
      require(get_output_asset_type(out, asset), "Invalid eligible output asset");
      if (!is_lineage_audit_asset(asset)) return;
      uint64_t age = 0, tx_id = 0;
      require(get_output_unlock_time(out, age), "Invalid eligible output lock");
      if (!age) age = tx.type == transaction_type::MINER || tx.type == transaction_type::PROTOCOL ?
          CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW : CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE;
      age = std::max<uint64_t>(age, CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE);
      require(origin <= UINT64_MAX - age && db.tx_exists(id, tx_id), "Invalid eligible output identity");
      const auto indices = db.get_tx_amount_output_indices(tx_id);
      require(indices.size() == 1 && index < indices[0].size(), "Missing eligible output index");
      const uint64_t asset_index = indices[0][index].second;
      const auto canonical = db.get_output_tx_and_index_from_global(db.get_output_id_by_asset_index(asset, asset_index));
      if (canonical.first != id || canonical.second != index) return;
      eligible_due_[std::max(audit_release, origin + age)].emplace_back(asset, asset_index, origin);
    };
    // Enrolled pre-fork outputs enter the pool at their own C + 10. Once the
    // deadline has been processed this fixed set needs no further scan.
    if (eligible_next_height_ < closing_height()) for (const auto& entry : records_) {
      const auto& item = entry.second;
      if (item.verdict != 1 || !eligible_seen_records_.insert(item.image).second) continue;
      if (!item.stake_return) {
        schedule(db.get_tx(item.origin), item.origin, item.output_height, item.output_index, item.completion + release_delay);
      } else if (item.payout_height < activation_) {
        const transaction tx = db.get_block_from_height(item.payout_height).protocol_tx;
        for (size_t index = 0; index < tx.vout.size(); ++index) {
          crypto::public_key key;
          if (get_output_public_key(tx.vout[index], key) && key == item.output_key)
            schedule(tx, get_transaction_hash(tx), item.payout_height, index, item.completion + release_delay);
        }
      }
    }
    // New canonical outputs inherit eligibility. Scan each post-fork block only
    // once, retaining future normal-maturity events instead of rescanning history.
    for (uint64_t h = std::max(activation_, eligible_next_height_); h < height; ++h) {
      const block b = db.get_block_from_height(h);
      const auto add = [&](const transaction& tx) {
        if (tx.vout.empty()) return;
        const auto id = get_transaction_hash(tx);
        for (size_t index = 0; index < tx.vout.size(); ++index) schedule(tx, id, h, index, 0);
      };
      add(b.miner_tx); add(b.protocol_tx);
      for (const auto& id : b.tx_hashes) add(db.get_tx(id));
    }
    std::set<std::string> changed;
    while (!eligible_due_.empty() && eligible_due_.begin()->first <= height) {
      for (const auto& output : eligible_due_.begin()->second) {
        const auto& asset = std::get<0>(output);
        if (output_spendable(db, net, db.get_output_id_by_asset_index(asset, std::get<1>(output)), height) &&
            eligible_indices_[asset].emplace(std::get<1>(output), std::get<2>(output)).second)
          changed.insert(asset);
      }
      eligible_due_.erase(eligible_due_.begin());
    }
    for (const auto& asset : changed)
      eligible_outputs_[asset].assign(eligible_indices_[asset].begin(), eligible_indices_[asset].end());
    eligible_tip_ = db.get_block_hash_from_height(height - 1);
    eligible_next_height_ = height;
    return eligible_outputs_[requested_asset];
  } catch (...) {
    reset_eligible_outputs();
    throw;
  }
}

bool lineage_audit::check_window_spend(const BlockchainDB& db, network_type net,
    const transaction& tx, uint64_t height, std::string& reason) const
{
  if (tx.vin.empty()) { reason = "Audit policy requires spending inputs"; return false; }
  // Every possible real source must be eligible. Merely including a good
  // decoy cannot authorize spending an undisclosed or rejected output.
  // New receipts and change inherit clearance without repeat enrollment.
  for (const auto& input : tx.vin) {
    const auto* key = boost::get<txin_to_key>(&input);
    if (!key || !is_lineage_audit_asset(key->asset_type) || key->key_offsets.empty()) {
      reason = "Audit policy accepts SAL1 and token key inputs with nonempty rings; legacy SAL is excluded";
      return false;
    }
    for (uint64_t index : relative_output_offsets_to_absolute(key->key_offsets))
      if (!output_spendable(db, net, db.get_output_id_by_asset_index(key->asset_type, index), height)) {
        reason = "Spend ring contains an output frozen by the audit or normal maturity";
        return false;
      }
  }
  return true;
}

bool lineage_audit::check_spend(BlockchainDB& db, network_type net,
    const transaction& tx, std::string& reason)
{
  // Lineage is report-only.  Rejecting a transaction because any one of its
  // ring members has suspect ancestry both treats decoys as real inputs and
  // recursively freezes exchange/customer outputs.  Ordinary consensus input,
  // key-image, signature and maturity checks remain authoritative.
  if (!lineage_policy::consensus_enforcement) return true;
  if (!active(db.height())) return true;
  try {
    sync(db, net);
    if (closing_height()) return check_window_spend(db, net, tx, db.height(), reason);
    for (const auto& input : tx.vin) {
      const auto* key = boost::get<txin_to_key>(&input);
      if (key && is_lineage_audit_asset(key->asset_type) && get_status(key->k_image, db.height()).state != "AUDIT_PASSED") {
        reason = "Funds or stake payout have not completed lineage audit and release delay";
        return false;
      }
      if (key && key->asset_type == "SAL1") {
        const record& source = records_.at(key->k_image);
        bool found = false;
        for (uint64_t index : relative_output_offsets_to_absolute(key->key_offsets)) {
          const auto member = resolve(db, key->asset_type, index);
          if (member.key != source.output_key) continue;
          if (!matches(source, member)) {
            reason = "Audit key image refers to a different or ambiguous canonical output";
            return false;
          }
          if (db.height() < member.unlock_height) {
            reason = "Audited SAL1 output has not reached its canonical maturity height";
            return false;
          }
          found = true;
        }
        if (!found) { reason = "Audited output is missing from spend ring"; return false; }
      }
    }
    return true;
  } catch (const std::exception& error) { reason = error.what(); return false; }
}
}
