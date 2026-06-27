#pragma once

#include <bitset>
#include <cstdint>
#include <map>
#include <set>
#include <string>
#include <unordered_set>
#include <vector>

#include "cryptonote_basic/cryptonote_basic.h"

namespace cryptonote::txrules
{
  enum class req : uint8_t { MUST, MAY, MUST_NOT };

  enum class validation_mode : uint8_t
  {
    mempool = 0,
    block,
    block_template
  };

  struct token_state_view
  {
    const void* self = nullptr;

    bool (*asset_exists)(const void* self, const std::string& asset_type) = nullptr;
    bool (*ticker_exists)(const void* self, const std::string& ticker) = nullptr;
  };

  struct block_state_overlay
  {
    std::unordered_set<std::string> created_asset_types;
    std::unordered_set<std::string> created_tickers;
  };

  struct validation_env
  {
    uint8_t hf = 1;
    uint64_t height = 0;
    validation_mode mode = validation_mode::mempool;
    cryptonote::network_type nettype = cryptonote::network_type::MAINNET;
    token_state_view token_state;
    block_state_overlay* block_overlay = nullptr;
  };

  struct consensus_result
  {
    bool ok = false;
    std::string reason;
  };

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

  using asset_predicate_fn = bool (*)(const std::string& asset,
                                      const validation_env& env,
                                      std::string* why);

  using extra_check_fn = bool (*)(const cryptonote::transaction& tx,
                                  const validation_env& env,
                                  std::string* why);

  struct asset_rules
  {
    req outputs_multi_asset = req::MUST_NOT;
    req inputs_match_source = req::MUST;
    req outputs_match_destination = req::MUST;
    req src_eq_dst = req::MUST;
    std::set<std::string> allowed_assets;
    bool allow_any_known_token = false;
    asset_predicate_fn asset_predicate = nullptr;
  };

  struct burnt_rules
  {
    req amount_burnt_positive = req::MUST_NOT;
  };

  struct allowed_variants
  {
    std::bitset<8> inputs;
    std::bitset<8> outputs;

    bool input_allowed(input_kind k) const { return inputs.test(static_cast<size_t>(k)); }
    bool output_allowed(output_kind k) const { return outputs.test(static_cast<size_t>(k)); }
  };

  struct rct_rules
  {
    std::bitset<16> allowed_rct_types;
    bool coinbase_must_be_null = true;
  };

  struct tx_type_rules
  {
    version_range tx_versions;
    count_range vin_count;
    count_range vout_count;
    uint32_t max_extra_size = 0;
    allowed_variants variants;
    asset_rules assets;
    burnt_rules burning;
    rct_rules rct;
    extra_check_fn extra_check = nullptr;
  };

  struct hf_rules
  {
    uint8_t hf_version = 0;
    bool shutdown_user_txs = false;
    std::map<cryptonote::transaction_type, tx_type_rules> by_type;
  };

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
    std::vector<input_kind> inputs;
    std::vector<output_kind> outputs;
    std::set<std::string> in_assets;
    std::set<std::string> out_assets;
    std::string source_asset_type;
    std::string destination_asset_type;
    uint64_t amount_burnt = 0;
    uint8_t rct_type = 0;
  };
}
