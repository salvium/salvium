#pragma once

#include <bitset>
#include <cstdint>
#include <map>
#include <optional>
#include <set>
#include <string>
#include <vector>
#include <unordered_set>

#include "cryptonote_config.h"
#include "cryptonote_basic/cryptonote_basic.h"

/*
namespace rct
{
  struct rctSig;
}
*/
// Centralized validator for consensus-semantic tx rules:
// - tx type/version/HF gating
// - vin/vout counts and allowed variants
// - asset-type semantics
// - RCT type admissibility
//
// Intentionally NOT responsible for:
// - chain-state checks outside transaction-local/state-view facts (ring members, spent key images, etc.)
// - RingCT proof verification / mixring expansion
// - txpool-only policy (fee floor, pool duplicate checks, timeout/pruning, etc.)

namespace cryptonote::txrules
{
  // ---------- Tri-state requirement ----------
  enum class req : uint8_t { MUST, MAY, MUST_NOT };

  // ---------- Validation mode / state views ----------
  enum class validation_mode : uint8_t
  {
    mempool = 0,
    block,
    block_template
  };

  // network_type is provided via cryptonote_basic.h → cryptonote_config.h

  // Minimal DB-backed view required by TX Rules.
  // The rules engine deliberately does not know about BlockchainDB.
  struct token_state_view
  {
    const void* self = nullptr;

    bool (*asset_exists)(const void* self, const std::string& asset_type) = nullptr;
    bool (*ticker_exists)(const void* self, const std::string& ticker) = nullptr;
  };

  // Per-candidate-block overlay. This lets the TX Rules system validate
  // stateful in-block effects without leaving CREATE_TOKEN/ROLLUP logic in
  // handle_block_to_main_chain().
  struct block_state_overlay
  {
    std::unordered_set<std::string> created_asset_types;
    std::unordered_set<std::string> created_tickers;
  };

  // ---------- Validation environment ----------
  struct validation_env
  {
    uint8_t  hf = 1;
    uint64_t height = 0; // chain height used for checks like is_asset_type_valid(asset, height)
    validation_mode mode = validation_mode::mempool;
    cryptonote::network_type nettype = cryptonote::network_type::MAINNET;

    token_state_view token_state;

    // Non-null only while validating txs in a candidate block/template.
    block_state_overlay* block_overlay = nullptr;
  };

  struct consensus_result
  {
    bool ok = false;
    std::string reason;
  };

  // ---------- Kinds ----------
  enum class input_kind : uint8_t
  {
    gen = 0,
    to_key,
    to_script,
    to_scripthash,
    unknown
  };

  enum class output_kind : uint8_t
  {
    to_key = 0,
    to_tagged_key,
    to_carrot_v1,
    to_script,
    to_scripthash,
    unknown
  };

  // ---------- Ranges ----------
  struct count_range
  {
    uint32_t min = 0;
    uint32_t max = 0;
    bool contains(uint32_t v) const { return v >= min && v <= max; }
  };

  struct version_range
  {
    uint8_t min = 0;
    uint8_t max = 0xFF;
    bool contains(uint8_t v) const { return v >= min && v <= max; }
  };

  // ---------- Rule predicates ----------
  using asset_predicate_fn = bool (*)(const std::string& asset,
                                      const validation_env& env,
                                      std::string* why);

  using extra_check_fn = bool (*)(const cryptonote::transaction& tx,
                                  const validation_env& env,
                                  std::string* why);

  // ---------- Asset rules ----------
  struct asset_rules
  {
    // Only PROTOCOL may allow multi-asset outputs
    req outputs_multi_asset = req::MUST_NOT;

    // Uniform semantics you requested:
    // inputs match source_asset_type, outputs match destination_asset_type
    req inputs_match_source = req::MUST;
    req outputs_match_destination = req::MUST;

    // For everything implemented so far (except future CONVERT):
    req src_eq_dst = req::MUST;

    // Asset admissibility:
    // - If allowed_assets non-empty: must be within this set
    // - If predicate set: must pass predicate (e.g. is_asset_type_valid(asset,height))
    std::set<std::string> allowed_assets;
    bool allow_any_known_token = false;
    asset_predicate_fn asset_predicate = nullptr;
  };

  // ---------- Burnt rules ----------
  struct burnt_rules
  {
    // Only some TXs may burn coins
    req amount_burnt_positive = req::MUST_NOT;
  };

  // ---------- Variant rules ----------
  struct allowed_variants
  {
    std::bitset<8> inputs;
    std::bitset<8> outputs;

    bool input_allowed(input_kind k) const  { return inputs.test(static_cast<size_t>(k)); }
    bool output_allowed(output_kind k) const { return outputs.test(static_cast<size_t>(k)); }
  };

  // ---------- RCT rules ----------
  struct rct_rules
  {
    // Allowed RCT types for non-coinbase
    std::bitset<16> allowed_rct_types;

    // If set, non-coinbase MUST have this RCT type (unless overridden by HF global)
    //std::optional<uint8_t> required_rct_type;

    // Coinbase must be null
    bool coinbase_must_be_null = true;
  };

  // ---------- Per-tx-type rules ----------
  struct tx_type_rules
  {
    version_range  tx_versions; // usually exact {v,v}
    count_range    vin_count;
    count_range    vout_count;

    uint32_t       max_extra_size = 0; // 0 => no limit here (leave to caller/policy if desired)

    allowed_variants variants;
    asset_rules      assets;
    burnt_rules      burning;
    rct_rules        rct;

    // extra semantic constraints (e.g. amount_burnt > 0)
    extra_check_fn   extra_check = nullptr;
  };

  // ---------- Per-HF rules ----------
  struct hf_rules
  {
    uint8_t hf_version = 0;

    // HF-level switches
    bool shutdown_user_txs = false;

    // If set, all non-coinbase must be exactly this RCT type
    //std::optional<uint8_t> global_required_rct_type;

    std::map<cryptonote::transaction_type, tx_type_rules> by_type;
  };

  // ---------- Derived TX context (computed once) ----------
  struct tx_context
  {
    uint8_t hf = 1;
    uint64_t height = 0;
    uint8_t txver = 0;
    cryptonote::transaction_type type{};

    bool is_coinbase = false;

    uint32_t vin_count = 0;
    uint32_t vout_count = 0;
    uint32_t extra_size = 0;

    std::vector<input_kind>  inputs;
    std::vector<output_kind> outputs;

    std::set<std::string> in_assets;
    std::set<std::string> out_assets;

    std::string source_asset_type;
    std::string destination_asset_type;

    uint64_t amount_burnt = 0;

    uint8_t rct_type = 0;
  };

} // namespace cryptonote::txrules
