#pragma once

#include <deque>
#include <map>
#include <memory>
#include <set>
#include <string>
#include <tuple>
#include <vector>
#include <unordered_set>
#include "cryptonote_basic/cryptonote_basic.h"
#include "lineage_audit_policy.h"
#include "cryptonote_basic/lineage_audit_limits.h"

namespace cryptonote
{
class BlockchainDB;
struct lineage_miner_history;
bool is_lineage_audit_asset(const std::string& asset);

// Retained only for reading historical test/tool artifacts. Native enrollment
// accepts lineage_enrollment v2; it never accepts a reusable viewing secret.
struct lineage_disclosure
{
  crypto::hash genesis;
  uint8_t network = 0;
  uint64_t activation_height = 0;
  crypto::public_key spend_public;
  crypto::public_key view_public;
  crypto::secret_key view_balance;
  uint32_t subaddress_count = 1;
  std::vector<crypto::hash> transactions;
  BEGIN_SERIALIZE_OBJECT()
    FIELD(genesis)
    FIELD(network)
    VARINT_FIELD(activation_height)
    FIELD(spend_public)
    FIELD(view_public)
    FIELD(view_balance)
    VARINT_FIELD(subaddress_count)
    if (subaddress_count == 0 || subaddress_count > 4096) return false;
    FIELD(transactions)
    if (transactions.empty() || transactions.size() > 64) return false;
  END_SERIALIZE()
};

// Withdrawn v2 prototype, retained only for decoding historical test artifacts.
// It proves control of the canonical output and its key image and opens the
// amount commitment, which is exactly why policy forbids publishing it. A
// future enrollment protocol must use a new version rather than re-enable this
// wire format. Legacy SAL1 used the same verifier with y=0.
struct lineage_output_proof
{
  crypto::hash transaction;
  uint32_t output_index = 0;
  bool stake_return = false;
  uint64_t amount = 0;
  uint8_t offset_mask = 0;
  crypto::key_image image;
  rct::tclsag signature;
  BEGIN_SERIALIZE_OBJECT()
    FIELD(transaction)
    VARINT_FIELD(output_index)
    FIELD(stake_return)
    VARINT_FIELD(amount)
    FIELD(offset_mask)
    if (offset_mask > 1) return false;
    FIELD(image)
    FIELD(signature)
    if (signature.sx.size() != 1 || signature.sy.size() != 1) return false;
  END_SERIALIZE()
};

struct lineage_enrollment
{
  uint8_t version = 2;
  crypto::hash genesis;
  uint8_t network = 0;
  uint64_t activation_height = 0;
  std::vector<lineage_output_proof> outputs;
  BEGIN_SERIALIZE_OBJECT()
    FIELD(version)
    if (version != 2) return false;
    FIELD(genesis)
    FIELD(network)
    VARINT_FIELD(activation_height)
    FIELD(outputs)
    if (outputs.empty() || outputs.size() > lineage_limits::max_outputs) return false;
  END_SERIALIZE()
};
crypto::hash lineage_proof_message(const lineage_enrollment& enrollment, const lineage_output_proof& proof);
bool verify_lineage_output_proof(const lineage_enrollment& enrollment, const lineage_output_proof& proof,
    const crypto::public_key& key, const rct::key& commitment);

class lineage_audit
{
public:
  static constexpr uint64_t release_delay = 10;
  static constexpr size_t work_per_block = lineage_limits::work_per_block;
  struct status
  {
    std::string state;
    uint64_t completed_height = 0;
    uint64_t release_height = 0;
  };
  void configure(uint64_t activation, uint64_t opening_height = 0,
      uint64_t duration = lineage_policy::duration_blocks);
  uint64_t activation() const { return activation_; }
  uint64_t opening_height() const { return opening_height_; }
  uint64_t closing_height() const { return activation_ && duration_ ? activation_ + duration_ : 0; }
  bool enrollment_open(uint64_t height) const { return active(height) && (!closing_height() || height < closing_height()); }
  bool active(uint64_t height) const { return activation_ && height >= activation_; }
  void sync(const BlockchainDB& db, network_type net);
  // Replay only committed ancestors of the block being inspected. Used by the
  // offline monetary verifier without trusting future disclosures in its DB.
  void sync_until(const BlockchainDB& db, network_type net, uint64_t end);
  std::vector<crypto::hash> stake_payouts(uint64_t height) const;
  bool validate_disclosure(BlockchainDB& db, network_type net, const block& candidate, std::string& reason) const;
  bool check_spend(BlockchainDB& db, network_type net, const transaction& tx, std::string& reason);
  status get_status(const crypto::key_image& image, uint64_t candidate_height) const;
  uint64_t disclosure_height(const crypto::hash& id) const;
  // Canonical output eligibility is public, without registering wallet addresses.
  // Call after sync. global_id is the database output ID, not an asset index.
  bool output_spendable(const BlockchainDB& db, network_type net, uint64_t global_id, uint64_t height) const;
  // Public asset indices and creation heights, ordered by asset index. The
  // incremental cache is derived from canonical clearance, never authoritative.
  const std::vector<std::pair<uint64_t, uint64_t>>& eligible_outputs(const BlockchainDB& db, network_type net,
      const std::string& asset = "SAL1") const;

private:
  friend class lineage_audit_test;
  struct ring_member
  {
    crypto::public_key key;
    crypto::hash transaction;
    uint64_t output;
    uint64_t height;
    bool canonical_protocol;
    uint64_t unlock_height;
  };
  struct dependency
  {
    crypto::key_image image;
    std::string asset;
    std::vector<ring_member> ring;
  };
  struct record
  {
    crypto::key_image image;
    crypto::public_key output_key;
    crypto::hash origin;
    uint64_t output_height = 0;
    uint64_t output_index = 0;
    bool stake_return = false;
    uint64_t completion = 0;
    bool bad_origin = false;
    // 0 pending, 1 good, 2 intrinsically bad origin, 3 review-only ancestry.
    // A descendant is never promoted to BAD: provenance is evidence for a
    // human review, not an automatic contamination rule.
    uint8_t verdict = 0;
    std::shared_ptr<const std::vector<dependency>> inputs;
    uint64_t payout_height = 0;
    std::string asset = "SAL1";
  };
  struct inspection_cache
  {
    crypto::hash enrollment;
    crypto::hash parent;
    uint64_t height;
    network_type network;
    std::vector<record> records;
  };
  // Only the most recent enrollment, anchored to its exact canonical parent.
  // No verdict or payout authorization is cached here.
  mutable std::shared_ptr<const inspection_cache> last_inspection_;
  struct undo_entry
  {
    uint64_t height;
    crypto::hash hash;
    crypto::hash previous_tip;
    std::deque<crypto::key_image> queue_before;
    std::vector<crypto::key_image> inserted;
    std::map<crypto::key_image, record> changed;
    std::vector<crypto::hash> disclosures;
  };
  static constexpr size_t undo_window = 64;
  std::deque<undo_entry> undo_;
  undo_entry* current_undo_ = nullptr;
  void rollback_last();
  void remember_change(const record& item);
  std::vector<record> inspect(const BlockchainDB& db, network_type net,
      const block& candidate, uint64_t height) const;
  void insert(const std::vector<record>& records);
  void advance(uint64_t height);
  void reset();
  void reset_eligible_outputs() const;
  mutable uint64_t eligible_next_height_ = 0;
  mutable crypto::hash eligible_tip_ = crypto::null_hash;
  mutable std::set<crypto::key_image> eligible_seen_records_;
  mutable std::map<uint64_t, std::vector<std::tuple<std::string, uint64_t, uint64_t>>> eligible_due_;
  mutable std::map<std::string, std::map<uint64_t, uint64_t>> eligible_indices_;
  mutable std::map<std::string, std::vector<std::pair<uint64_t, uint64_t>>> eligible_outputs_;
  mutable std::shared_ptr<lineage_miner_history> miner_history_;
  bool valid_miner_origin(const BlockchainDB& db, network_type net, uint64_t height) const;
  bool historical_stake_payout(const BlockchainDB& db, network_type net, const transaction& stake,
      uint64_t payout_height) const;
  bool accepted_conversion_payout(const BlockchainDB& db, network_type net, const transaction& payout,
      uint64_t index, uint64_t payout_height) const;
  bool token_issuance_payout(const BlockchainDB& db, const transaction& payout, uint64_t index,
      uint64_t payout_height, crypto::hash& creation) const;
  std::shared_ptr<const std::vector<dependency>> inspect_funding(const BlockchainDB& db,
      const transaction& tx, uint64_t origin_height, bool& bad_origin) const;
  mutable std::unordered_map<crypto::hash, std::pair<crypto::hash, bool>> historical_payout_cache_;
  uint64_t activation_ = 0;
  uint64_t opening_height_ = 0;
  uint64_t duration_ = lineage_policy::duration_blocks;
  uint64_t next_height_ = 0;
  crypto::hash tip_ = crypto::null_hash;
  std::map<crypto::key_image, record> records_;
  std::map<crypto::public_key, std::set<crypto::key_image>> output_records_;
  std::map<crypto::key_image, std::set<crypto::key_image>> waiting_;
  std::deque<crypto::key_image> queue_;
  std::set<crypto::key_image> queued_;
  std::unordered_map<crypto::hash, uint64_t> disclosures_;
  std::map<uint64_t, std::unordered_set<crypto::hash>> stake_payouts_;
  void enqueue(const crypto::key_image& image);
  static bool matches(const record& source, const ring_member& member);
  static ring_member resolve(const BlockchainDB& db, const std::string& asset, uint64_t index, bool legacy_indices = false);
  static bool has_bad_asset_origin(const transaction& tx);
  bool check_window_spend(const BlockchainDB& db, network_type net, const transaction& tx,
      uint64_t height, std::string& reason) const;
};
}
