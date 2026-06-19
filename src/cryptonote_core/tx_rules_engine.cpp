#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "tx.rules"

#include "misc_log_ex.h"
#include "tx_rules_engine.h"

#include "carrot_core/config.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_config.h"
#include "ringct/rctTypes.h"
#include "ringct/rctSigs.h"
#include "tx_consensus_checks.h"

#include <limits>

namespace cryptonote::txrules
{
  // Max inputs for non-Carrot user tx types (Carrot uses CARROT_MAX_TX_INPUTS=64).
  // Each key input is ~300 bytes minimum, so 256 inputs ≈ 77 KB minimum.
  // This is a DoS mitigation bound, not a protocol requirement.
  static constexpr uint32_t MAX_TX_VINS = 256;

  // ---- helpers ----
  static std::bitset<8> bits_inputs(std::initializer_list<input_kind> ks)
  {
    std::bitset<8> b;
    for (auto k : ks) b.set(static_cast<size_t>(k));
    return b;
  }

  static std::bitset<8> bits_outputs(std::initializer_list<output_kind> ks)
  {
    std::bitset<8> b;
    for (auto k : ks) b.set(static_cast<size_t>(k));
    return b;
  }

  static std::bitset<16> bits_rct(std::initializer_list<uint8_t> ts)
  {
    std::bitset<16> b;
    for (auto t : ts) b.set(static_cast<size_t>(t));
    return b;
  }

  static bool check_burn_precarrot_semantics(const cryptonote::transaction& tx,
                                             const validation_env& env,
                                             std::string* why)
  {
    // Make sure that destination type is "BURN"
    if (tx.destination_asset_type != "BURN") {
      if (why) *why = "destination_asset_type is not BURN";
      return false;
    }

    return true;
  }

  static bool check_create_token_semantics(const cryptonote::transaction& tx,
                                           const validation_env& env,
                                           std::string* why)
  {
    // Reserved prefix: SAL* is not allowed for user-created tokens
    if (tx.token_metadata.asset_type.size() >= 3 &&
        tx.token_metadata.asset_type.substr(0, 3) == "SAL")
    {
      if (why) *why = "CREATE_TOKEN ticker must not begin with SAL";
      return false;
    }

    // Metadata must be the expected token type
    if (tx.token_metadata.token.type() != typeid(cryptonote::sal_token_t))
    {
      if (why) *why = "CREATE_TOKEN metadata type must be sal_token_t";
      return false;
    }

    const cryptonote::sal_token_t token =
      boost::get<cryptonote::sal_token_t>(tx.token_metadata.token);

    // Supply bounds
    if (token.supply == 0 || token.supply > (MONEY_SUPPLY / COIN))
    {
      if (why) *why = "CREATE_TOKEN supply out of range";
      return false;
    }

    // Burnt amount must equal token creation price
    if (tx.amount_burnt != cryptonote::get_token_creation_price(tx.token_metadata.asset_type))
    {
      if (why) *why = "CREATE_TOKEN amount_burnt does not match token creation price";
      return false;
    }

    return true;
  }

  static bool check_rollup_semantics(const cryptonote::transaction& tx,
                                     const validation_env&,
                                     std::string* why)
  {
    if (tx.layer2_rollup_data.version != 1)
    {
      if (why) *why = "ROLLUP layer2_rollup_data.version must be 1";
      return false;
    }

    if (tx.layer2_rollup_data.txs.empty())
    {
      if (why) *why = "ROLLUP must contain at least one rollup transaction";
      return false;
    }

    if (tx.layer2_rollup_data.txs.size() > 256)
    {
      if (why) *why = "ROLLUP contains too many rollup transactions (max 256)";
      return false;
    }

    uint64_t total_fee = 0;

    for (const auto& rtx : tx.layer2_rollup_data.txs)
    {
      if (rtx.tx_prefix_hash == crypto::null_hash)
      {
        if (why) *why = "ROLLUP contains null tx_prefix_hash";
        return false;
      }

      if (rtx.first_key_image == crypto::key_image{})
      {
        if (why) *why = "ROLLUP contains null first_key_image";
        return false;
      }

      if (rtx.tx_fee == 0)
      {
        if (why) *why = "ROLLUP contains tx_fee == 0";
        return false;
      }

      if (rtx.tx_fee > std::numeric_limits<uint64_t>::max() - total_fee)
      {
        if (why) *why = "ROLLUP fee sum overflow";
        return false;
      }

      total_fee += rtx.tx_fee;
    }

    if (tx.amount_burnt != total_fee)
    {
      if (why) *why = "ROLLUP amount_burnt does not equal sum of tx_fee";
      return false;
    }

    return true;
  }
  
  static bool asset_pred_height_valid(const std::string& asset,
                                      const validation_env& env,
                                      std::string* why)
  {
    if (!cryptonote::is_valid_asset_type(asset))
    {
      if (why) *why = "asset_type not valid";
      return false;
    }

    // Native assets
    if (asset == "SAL")
    {
      if (env.hf >= HF_VERSION_ENABLE_TOKENS)
      {
        if (why) *why = "SAL not valid after token activation HF";
        return false;
      }
      return true;
    }
    
    if (asset == "SAL1")
    {
      if (env.hf < HF_VERSION_AUDIT1)
      {
        if (why) *why = "SAL1 not valid before first audit HF";
        return false;
      }
      return true;
    }

    // Token assets
    if (cryptonote::is_asset_type_token(asset))
    {
      if (env.hf < HF_VERSION_ENABLE_TOKENS)
      {
        if (why) *why = "token asset not valid before token activation HF";
        return false;
      }
      
      const bool exists_in_db =
        env.token_state.asset_exists &&
        env.token_state.asset_exists(env.token_state.self, asset);

      const bool exists_in_block =
        env.block_overlay &&
        env.block_overlay->created_asset_types.count(asset) != 0;

      if (!exists_in_db && !exists_in_block)
      {
        if (why) *why = "token asset was not yet created at this height";
        return false;
      }
      
      return true;
    }
    
    if (why) *why = "unknown asset_type category";
    return false;
  }

  static tx_type_rules make_audit_rules(const std::string& asset,
                                      uint8_t txver,
                                      bool allow_carrot_outputs)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, MAX_TX_VINS};
    r.vout_count  = {1, 1}; // exactly one output (change)

    r.variants.inputs  = bits_inputs({input_kind::to_key});
    r.variants.outputs = bits_outputs({output_kind::to_key, output_kind::to_tagged_key});
    if (allow_carrot_outputs)
      r.variants.outputs.set(static_cast<size_t>(output_kind::to_carrot_v1));

    // Same-asset user tx semantics
    r.assets.outputs_multi_asset       = req::MUST_NOT;
    r.assets.inputs_match_source       = req::MUST;
    r.assets.outputs_match_destination = req::MUST;
    r.assets.src_eq_dst                = req::MUST;

    // HF-specific deltas can widen/narrow this later
    r.assets.allowed_assets = {asset};

    r.burning.amount_burnt_positive = req::MUST;

    // User tx, not coinbase
    r.rct.coinbase_must_be_null = false;
    r.rct.allowed_rct_types.reset();
    //r.rct.required_rct_type.reset();

    return r;
  }
  
  static tx_type_rules make_burn_rules_carrot(uint8_t txver)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, carrot::CARROT_MAX_TX_INPUTS};
    r.vout_count = {1, 1}; // exactly one output (change)

    r.variants.inputs  = bits_inputs({input_kind::to_key});
    r.variants.outputs.set(static_cast<size_t>(output_kind::to_carrot_v1));
    
    // Uniform semantics: inputs match src; outputs match dst; src==dst for implemented types
    r.assets.outputs_multi_asset = req::MUST_NOT;
    r.assets.inputs_match_source = req::MUST;
    r.assets.outputs_match_destination = req::MUST;
    r.assets.src_eq_dst = req::MUST;

    // Asset restrictions set by HF delta. Default to fixed SAL/SAL1 for now.
    r.assets.allowed_assets = {"SAL","SAL1"};

    // RCT: allow salvium one generally, but HF may enforce globally later
    r.rct.coinbase_must_be_null = false;
    r.rct.allowed_rct_types.reset();

    r.burning.amount_burnt_positive = req::MUST;

    return r;
  }

  static tx_type_rules make_burn_rules_precarrot(uint8_t txver)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, 256};
    r.vout_count = {1, 1}; // exactly one output (change)

    r.variants.inputs  = bits_inputs({input_kind::to_key});
    r.variants.outputs = bits_outputs({output_kind::to_key, output_kind::to_tagged_key});
    
    // Uniform semantics: inputs match src; outputs match dst; src==dst for implemented types
    r.assets.outputs_multi_asset = req::MUST_NOT;
    r.assets.inputs_match_source = req::MUST;
    r.assets.outputs_match_destination = req::MUST_NOT;
    r.assets.src_eq_dst = req::MUST_NOT;

    // Asset restrictions set by HF delta. Default to fixed SAL/SAL1 for now.
    r.assets.allowed_assets = {"SAL","SAL1","BURN"};

    // RCT: allow salvium one generally, but HF may enforce globally later
    r.rct.coinbase_must_be_null = false;
    r.rct.allowed_rct_types.reset();
    //r.rct.required_rct_type.reset();

    r.burning.amount_burnt_positive = req::MUST;

    r.extra_check = &check_burn_precarrot_semantics;

    return r;
  }

  static tx_type_rules make_create_token_rules(const std::string& asset,
                                               uint8_t txver,
                                               bool allow_carrot_outputs)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, MAX_TX_VINS};
    r.vout_count  = {1, 2}; // current HF11 usage in your rules table

    r.variants.inputs  = bits_inputs({input_kind::to_key});
    r.variants.outputs = bits_outputs({output_kind::to_key, output_kind::to_tagged_key});
    if (allow_carrot_outputs)
      r.variants.outputs.set(static_cast<size_t>(output_kind::to_carrot_v1));

    // CREATE_TOKEN is paid in SAL1 and returns SAL1 change.
    // The newly-created asset is minted separately in protocol_tx, not in this tx's vout.
    r.assets.outputs_multi_asset       = req::MUST_NOT;
    r.assets.inputs_match_source       = req::MUST;
    r.assets.outputs_match_destination = req::MUST;
    r.assets.src_eq_dst                = req::MUST;
    r.assets.allowed_assets            = {asset};

    // CREATE_TOKEN must burn coins to pay the fee
    r.burning.amount_burnt_positive = req::MUST;
    
    // User-submitted tx, not coinbase. Historical allowance can be widened by HF deltas if needed.
    r.rct.coinbase_must_be_null = false;
    r.rct.allowed_rct_types.reset();
    //r.rct.required_rct_type.reset();

    r.extra_check = &check_create_token_semantics;
    return r;
  }

  static tx_type_rules make_miner_rules(uint8_t txver, bool allow_carrot_outputs, bool is_genesis=false)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, 1};
    r.vout_count  = {1, 0xFFFFFFFFu};

    r.variants.inputs  = bits_inputs({input_kind::gen});
    r.variants.outputs = bits_outputs({output_kind::to_key, output_kind::to_tagged_key});
    if (allow_carrot_outputs)
      r.variants.outputs.set(static_cast<size_t>(output_kind::to_carrot_v1));

    // Safer default than PROTOCOL:
    r.assets.outputs_multi_asset = req::MUST_NOT;
    r.assets.inputs_match_source = req::MAY;   // no spend inputs
    r.assets.outputs_match_destination = req::MAY;
    r.assets.src_eq_dst = req::MAY;
    if (is_genesis)
      r.burning.amount_burnt_positive = req::MUST_NOT;
    else
      r.burning.amount_burnt_positive = req::MUST;

    r.rct.coinbase_must_be_null = true;
    r.rct.allowed_rct_types = bits_rct({rct::RCTTypeNull});

    return r;
  }

  static tx_type_rules make_protocol_rules(uint8_t txver, bool allow_carrot_outputs, bool is_genesis=false)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    if (is_genesis)
      r.vin_count   = {0, 0};
    else
      r.vin_count   = {1, 1};        // coinbase-like: exactly one vin (txin_gen)
    r.vout_count  = {0, 0xFFFFFFFFu};

    r.variants.inputs  = bits_inputs({input_kind::gen});
    r.variants.outputs = bits_outputs({output_kind::to_key, output_kind::to_tagged_key});
    if (allow_carrot_outputs) r.variants.outputs.set(static_cast<size_t>(output_kind::to_carrot_v1));

    // PROTOCOL special: can be multi-asset outputs; ignore src/dst matching
    r.assets.outputs_multi_asset = req::MAY;
    r.assets.inputs_match_source = req::MAY;
    r.assets.outputs_match_destination = req::MAY;
    r.assets.src_eq_dst = req::MAY;

    // PROTOCOL must not burn coins
    r.burning.amount_burnt_positive = req::MUST_NOT;

    // Coinbase must be RCT null
    r.rct.coinbase_must_be_null = true;
    r.rct.allowed_rct_types = bits_rct({rct::RCTTypeNull});

    return r;
  }

  static tx_type_rules make_rollup_rules(const std::string& asset,
                                         uint8_t txver)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, MAX_TX_VINS};
    r.vout_count  = {1, 2}; // keep aligned with your current HF11 shape unless protocol says otherwise

    r.variants.inputs  = bits_inputs({input_kind::to_key});
    r.variants.outputs = bits_outputs({output_kind::to_carrot_v1});

    // ROLLUP burns SAL1 fees and returns SAL1 change; no token outputs in this tx itself.
    r.assets.outputs_multi_asset       = req::MUST_NOT;
    r.assets.inputs_match_source       = req::MUST;
    r.assets.outputs_match_destination = req::MUST;
    r.assets.src_eq_dst                = req::MUST;
    r.assets.allowed_assets            = {asset};

    // ROLLUP must burn coins to pay for other TXs
    r.burning.amount_burnt_positive = req::MUST;
    
    // User-submitted tx, not coinbase.
    r.rct.coinbase_must_be_null = false;
    r.rct.allowed_rct_types.reset();

    r.extra_check = &check_rollup_semantics;
    return r;
  }
  
  static tx_type_rules make_stake_rules(const std::string& asset,
                                      uint8_t txver,
                                      bool allow_carrot_outputs)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, MAX_TX_VINS};
    r.vout_count  = {1, 1}; // exactly one output (change)

    r.variants.inputs  = bits_inputs({input_kind::to_key});
    r.variants.outputs = bits_outputs({output_kind::to_key, output_kind::to_tagged_key});
    if (allow_carrot_outputs)
      r.variants.outputs.set(static_cast<size_t>(output_kind::to_carrot_v1));

    // Same-asset staking model:
    // inputs match source, outputs match destination, and src == dst
    r.assets.outputs_multi_asset      = req::MUST_NOT;
    r.assets.inputs_match_source      = req::MUST;
    r.assets.outputs_match_destination = req::MUST;
    r.assets.src_eq_dst               = req::MUST;

    // HF-specific deltas can override this, e.g. force SAL1 only
    r.assets.allowed_assets = {asset};

    r.burning.amount_burnt_positive = req::MUST;

    // Staking uses confidential outputs, not coinbase/null-RCT semantics
    r.rct.coinbase_must_be_null = false;
    r.rct.allowed_rct_types.reset();
    //r.rct.required_rct_type.reset();

    return r;
  }

  static tx_type_rules make_transfer_rules(const std::string& asset_fixed_or_hint,
                                           uint8_t txver,
                                           uint32_t min_vout,
                                           uint32_t max_vout,
                                           bool allow_carrot_outputs)
  {
    tx_type_rules r;
    r.tx_versions = {txver, txver};
    r.vin_count   = {1, MAX_TX_VINS};
    r.vout_count  = {min_vout, max_vout};

    r.variants.inputs  = bits_inputs({input_kind::to_key});
    r.variants.outputs = bits_outputs({output_kind::to_key, output_kind::to_tagged_key});
    if (allow_carrot_outputs)
      r.variants.outputs = bits_outputs({output_kind::to_carrot_v1});

    // Uniform semantics: inputs match src; outputs match dst; src==dst for implemented types
    r.assets.outputs_multi_asset = req::MUST_NOT;
    r.assets.inputs_match_source = req::MUST;
    r.assets.outputs_match_destination = req::MUST;
    r.assets.src_eq_dst = req::MUST;

    // Asset restrictions set by HF delta. Default to fixed SAL/SAL1 for now.
    r.assets.allowed_assets = {asset_fixed_or_hint};

    // TRANSFER must not burn coins
    r.burning.amount_burnt_positive = req::MUST_NOT;

    // TRANSFER txs must have non-null RCT, but the permitted RCT type is HF-specific.
    r.rct.coinbase_must_be_null = true;
    r.rct.allowed_rct_types.reset();
    //r.rct.required_rct_type.reset();

    return r;
  }
  
  static void restrict_type_to_sal1(tx_type_rules& tr)
  {
    tr.assets.allowed_assets = {"SAL1"};
    tr.assets.asset_predicate = nullptr;
  }

  // ---------- HF delta application ----------
  static hf_rules make_hf_0()
  {
    hf_rules hf;
    hf.hf_version = 1;

    // MINER: coinbase-like, v2, RCT null
    hf.by_type[cryptonote::MINER] = make_miner_rules(TRANSACTION_VERSION_2_OUTS, /*carrot*/false, true);
    hf.by_type[cryptonote::MINER].assets.allowed_assets = {"SAL"};

    // PROTOCOL: coinbase-like, v2, RCT null
    hf.by_type[cryptonote::PROTOCOL] = make_protocol_rules(1, /*carrot*/false, true);
    hf.by_type[cryptonote::PROTOCOL].assets.allowed_assets = {"SAL"};

    // TRANSFER: not permitted
    hf.by_type.erase(cryptonote::TRANSFER);
    
    // CONVERT: not permitted
    hf.by_type.erase(cryptonote::CONVERT);
    
    // BURN: not permitted
    hf.by_type.erase(cryptonote::BURN);
    
    // STAKE: not permitted
    hf.by_type.erase(cryptonote::STAKE);
    
    // RETURN: not permitted because it isn't a valid TX type on-chain
    hf.by_type.erase(cryptonote::RETURN);
    
    // AUDIT: not permitted until HF 6
    hf.by_type.erase(cryptonote::AUDIT);
    
    // CREATE_TOKEN: not permitted until HF 11
    hf.by_type.erase(cryptonote::CREATE_TOKEN);
    
    // ROLLUP: not permitted until HF 11
    hf.by_type.erase(cryptonote::ROLLUP);
    
    return hf;
  }

  static void apply_hf_1(hf_rules& hf)
  {
    hf.hf_version = 1;

    // MINER: coinbase-like, v2, RCT null
    hf.by_type[cryptonote::MINER] = make_miner_rules(TRANSACTION_VERSION_2_OUTS, /*carrot*/false, false);
    hf.by_type[cryptonote::MINER].assets.allowed_assets = {"SAL"};

    // PROTOCOL: coinbase-like, v2, RCT null
    hf.by_type[cryptonote::PROTOCOL] = make_protocol_rules(TRANSACTION_VERSION_2_OUTS, /*carrot*/false, false);  
    hf.by_type[cryptonote::PROTOCOL].assets.allowed_assets = {"SAL"};

    // TRANSFER: SAL, v2, exactly 2 outputs (1 dest + 1 change)
    hf.by_type[cryptonote::TRANSFER] = make_transfer_rules("SAL", TRANSACTION_VERSION_2_OUTS, 2, 2, /*carrot*/false);
    hf.by_type[cryptonote::TRANSFER].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeBulletproofPlus));

    // BURN: SAL, v2, 1 output, amount_burnt>0
    hf.by_type[cryptonote::BURN] = make_burn_rules_precarrot(TRANSACTION_VERSION_2_OUTS);
    hf.by_type[cryptonote::BURN].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeBulletproofPlus));

    // STAKE: SAL until shutdown HF5
    hf.by_type[cryptonote::STAKE] = make_stake_rules("SAL", TRANSACTION_VERSION_2_OUTS, /*carrot*/false);
    hf.by_type[cryptonote::STAKE].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeBulletproofPlus));
  }

  static void apply_hf_2(hf_rules& hf)
  {
    hf.hf_version = 2;

    // TRANSFER: SAL, v3, 2..16 outputs
    hf.by_type[cryptonote::TRANSFER] = make_transfer_rules("SAL", TRANSACTION_VERSION_N_OUTS, 2, 16, /*carrot*/false);
    hf.by_type[cryptonote::TRANSFER].tx_versions = {TRANSACTION_VERSION_2_OUTS, TRANSACTION_VERSION_N_OUTS};
    hf.by_type[cryptonote::TRANSFER].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeBulletproofPlus));
  }

  static void apply_hf_3(hf_rules& hf)
  {
    hf.hf_version = 3;
    hf.by_type[cryptonote::TRANSFER].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeBulletproofPlus));
    hf.by_type[cryptonote::TRANSFER].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeFullProofs));

    hf.by_type[cryptonote::STAKE] = make_stake_rules("SAL", TRANSACTION_VERSION_2_OUTS, /*carrot*/false);
    hf.by_type[cryptonote::STAKE].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeBulletproofPlus));
    hf.by_type[cryptonote::STAKE].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeFullProofs));
  }

  static void apply_hf_4(hf_rules& hf)
  {
    hf.hf_version = 4;
  }

  static void apply_hf_5(hf_rules& hf)
  {
    hf.hf_version = 5;
    hf.shutdown_user_txs = true;

    // Optional: remove user tx types so lookup fails fast
    hf.by_type.erase(cryptonote::TRANSFER);
    hf.by_type.erase(cryptonote::BURN);
    hf.by_type.erase(cryptonote::STAKE);
    // hf.by_type[cryptonote::PROTOCOL].assets.allowed_assets = {"SAL1 or SAL1?"};
  }

  static void apply_hf_6(hf_rules& hf)
  {
    hf.hf_version = 6;

    // Shutdown ends (your chain allows TRANSFER again in HF6..HF9)
    hf.shutdown_user_txs = false;

    hf.by_type[cryptonote::MINER].assets.allowed_assets = {"SAL1"};
    hf.by_type[cryptonote::PROTOCOL].assets.allowed_assets = {"SAL", "SAL1"};

    // TRANSFER allowed HF6..HF9 with SAL1, still txver=3, still 2..16 outs, no carrot outputs yet
    hf.by_type[cryptonote::TRANSFER] = make_transfer_rules("SAL1", TRANSACTION_VERSION_N_OUTS, 2, 16, /*carrot*/false);
    hf.by_type[cryptonote::TRANSFER].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumZero));

    // BURN: permitted again from HF6 onward with SAL1
    hf.by_type[cryptonote::BURN] = make_burn_rules_precarrot(TRANSACTION_VERSION_2_OUTS);
    hf.by_type[cryptonote::BURN].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumZero));

    // STAKE permitted from HF6 onward with SAL1
    hf.by_type[cryptonote::STAKE] = make_stake_rules("SAL1", TRANSACTION_VERSION_2_OUTS, /*carrot*/false);
    hf.by_type[cryptonote::STAKE].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumZero));

    // AUDIT permitted for HF6
    hf.by_type[cryptonote::AUDIT] = make_audit_rules("SAL", TRANSACTION_VERSION_2_OUTS, /*carrot*/false);
    hf.by_type[cryptonote::AUDIT].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumZero));
    
    // PROTOCOL stays coinbase-like
  }

  static void apply_hf_7(hf_rules& hf)
  {
    hf.hf_version = 7;

    // AUDIT not permitted in HF7
    hf.by_type.erase(cryptonote::AUDIT);
  }

  static void apply_hf_8(hf_rules& hf)
  {
    hf.hf_version = 8;

    // AUDIT permitted for HF8
    hf.by_type[cryptonote::AUDIT] = make_audit_rules("SAL", TRANSACTION_VERSION_2_OUTS, /*carrot*/false);
    hf.by_type[cryptonote::AUDIT].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumZero));
    
    // PROTOCOL stays coinbase-like
  }

  static void apply_hf_9(hf_rules& hf)
  {
    hf.hf_version = 9;

    // PROTOCOL now only accepts SAL1
    hf.by_type[cryptonote::PROTOCOL].assets.allowed_assets = {"SAL1"};
    
    // AUDIT not permitted in HF9
    hf.by_type.erase(cryptonote::AUDIT);
  }

  static void apply_hf_10(hf_rules& hf)
  {
    hf.hf_version = 10;

    // MINER
    hf.by_type[cryptonote::MINER] = make_miner_rules(TRANSACTION_VERSION_CARROT, /*carrot*/true);
    hf.by_type[cryptonote::MINER].assets.allowed_assets = {"SAL1"};
    
    // PROTOCOL: you can keep it at v2, or bump to v4; if you bump, do:
    hf.by_type[cryptonote::PROTOCOL] = make_protocol_rules(TRANSACTION_VERSION_CARROT, /*carrot*/true);
    hf.by_type[cryptonote::PROTOCOL].assets.allowed_assets = {"SAL1"};
    hf.by_type[cryptonote::PROTOCOL].tx_versions = {TRANSACTION_VERSION_2_OUTS, TRANSACTION_VERSION_CARROT};
    hf.by_type[cryptonote::PROTOCOL].extra_check = +[](const cryptonote::transaction& tx,
                                                       const validation_env& env,
                                                       std::string* why) -> bool
    {
      // If there are 0 outputs, it MUST be v4
      if (tx.vout.size() == 0 && tx.version != TRANSACTION_VERSION_CARROT) {
        if (why)
          *why = "Wrong TX version for HF10 PROTOCOL_TX with no outputs";
        return false;
      }

      // Prevent the erroneous tx.version = 3
      if (tx.version == TRANSACTION_VERSION_N_OUTS) {
        if (why)
          *why = "Wrong TX version for HF10 PROTOCOL_TX";
        return false;
      }

      // NOTE: this does not verify tx.version=2 requirement for the STAKE window post-HF10 starting
      
      return true;
    };
    
    // TRANSFER: SAL1, txver=4, carrot outputs allowed
    hf.by_type[cryptonote::TRANSFER] = make_transfer_rules("SAL1", TRANSACTION_VERSION_CARROT, 2, 16, /*carrot*/true);
    hf.by_type[cryptonote::TRANSFER].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));

    // BURN: permitted again from CARROT onward with SAL1
    hf.by_type[cryptonote::BURN] = make_burn_rules_carrot(TRANSACTION_VERSION_CARROT);
    hf.by_type[cryptonote::BURN].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));

    // STAKE: SAL1 continues; now txver=4 and carrot outputs allowed
    hf.by_type[cryptonote::STAKE] = make_stake_rules("SAL1", TRANSACTION_VERSION_CARROT, /*carrot*/true);
    hf.by_type[cryptonote::STAKE].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));
  }

  static void apply_hf_11(hf_rules& hf)
  {
    hf.hf_version = 11;

    // TRANSFER: txver=5
    hf.by_type[cryptonote::TRANSFER] = make_transfer_rules("", TRANSACTION_VERSION_ENABLE_TOKENS, 2, 16, /*carrot*/true);
    hf.by_type[cryptonote::TRANSFER].assets.allowed_assets = {"SAL","SAL1"};
    hf.by_type[cryptonote::TRANSFER].assets.allow_any_known_token = true;
    hf.by_type[cryptonote::TRANSFER].assets.asset_predicate = &asset_pred_height_valid;
    hf.by_type[cryptonote::TRANSFER].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));
  
    // BURN/CREATE_TOKEN/ROLLUP/STAKE: txver=5
    hf.by_type[cryptonote::BURN]  = make_burn_rules_carrot(TRANSACTION_VERSION_ENABLE_TOKENS);
    hf.by_type[cryptonote::BURN].assets.allowed_assets = {"SAL","SAL1"};
    hf.by_type[cryptonote::BURN].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));
    hf.by_type[cryptonote::CREATE_TOKEN] = make_create_token_rules("SAL1", TRANSACTION_VERSION_ENABLE_TOKENS, /*carrot*/true);
    hf.by_type[cryptonote::CREATE_TOKEN].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));
    hf.by_type[cryptonote::ROLLUP] = make_rollup_rules("SAL1", TRANSACTION_VERSION_ENABLE_TOKENS);
    hf.by_type[cryptonote::ROLLUP].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));
    hf.by_type[cryptonote::STAKE] = make_stake_rules("SAL1", TRANSACTION_VERSION_ENABLE_TOKENS, /*carrot*/true);
    hf.by_type[cryptonote::STAKE].rct.allowed_rct_types.set(static_cast<size_t>(rct::RCTTypeSalviumOne));

    // MINER
    hf.by_type[cryptonote::MINER] = make_miner_rules(TRANSACTION_VERSION_ENABLE_TOKENS, /*carrot*/true);
    hf.by_type[cryptonote::MINER].assets.allowed_assets = {"SAL1"};
    
    // PROTOCOL can remain v2 or be bumped; leave as-is unless required.
    hf.by_type[cryptonote::PROTOCOL] = make_protocol_rules(TRANSACTION_VERSION_ENABLE_TOKENS, /*carrot*/true);
    hf.by_type[cryptonote::PROTOCOL].assets.allowed_assets = {};
    hf.by_type[cryptonote::PROTOCOL].assets.allow_any_known_token = true; //check 
    hf.by_type[cryptonote::PROTOCOL].assets.asset_predicate = &asset_pred_height_valid;
  }

  static void apply_hf_12(hf_rules& hf)
  {
    hf.hf_version = 12;
  }
  
  const hf_rules& rules_for_hf(uint8_t hf_version)
  {
    // Build a small cache of known HF rules. Extend as you add new forks.
    static const std::map<uint8_t, hf_rules> cache = [](){
      std::map<uint8_t, hf_rules> m;

      hf_rules genesis = make_hf_0();
      m[0] = genesis;
      
      hf_rules hf1 = m[0];
      apply_hf_1(hf1);
      m[1] = hf1;

      hf_rules hf2 = m[1];
      apply_hf_2(hf2);
      m[2] = hf2;

      // HF3 (FULL_PROOFS) doesn't change table here (unless you want to gate allowed_rct_types)
      hf_rules hf3 = m[2];
      apply_hf_3(hf3);
      m[3] = hf3;

      hf_rules hf4 = m[3];
      apply_hf_4(hf4);
      m[4] = hf4;

      hf_rules hf5 = m[4];
      apply_hf_5(hf5);
      m[5] = hf5;

      hf_rules hf6 = m[5];
      apply_hf_6(hf6);
      m[6] = hf6;

      // HF7/8/9 copy HF6 unless you have audit pause deltas
      hf_rules hf7 = m[6]; apply_hf_7(hf7); m[7] = hf7;
      hf_rules hf8 = m[7]; apply_hf_8(hf8); m[8] = hf8;
      hf_rules hf9 = m[8]; apply_hf_9(hf9); m[9] = hf9;

      hf_rules hf10 = m[9];
      apply_hf_10(hf10);
      m[10] = hf10;

      hf_rules hf11 = m[10];
      apply_hf_11(hf11);
      m[11] = hf11;

      hf_rules hf12 = m[11];
      apply_hf_12(hf12);
      m[12] = hf12;

      return m;
    }();

    // If unknown HF requested, clamp to highest known HF (typical Monero pattern).
    auto it = cache.find(hf_version);
    if (it != cache.end())
      return it->second;

    MWARNING("Unknown HF version " << hf_version
             << " requested, falling back to HF "
             << cache.rbegin()->first);
    return cache.rbegin()->second;
  }


  static bool fail_consensus(consensus_result* result, const std::string& why)
  {
    if (result)
    {
      result->ok = false;
      result->reason = why;
    }
    return false;
  }

  static bool apply_create_token_consensus_effects(const cryptonote::transaction& tx,
                                                   const validation_env& env,
                                                   std::string* why)
  {
    const std::string ticker = tx.token_metadata.asset_type;
    const std::string asset_type = "sal" + ticker;

    if (!env.token_state.asset_exists)
    {
      if (why) *why = "CREATE_TOKEN consensus requires token_state.asset_exists";
      return false;
    }

    if (env.token_state.asset_exists(env.token_state.self, asset_type))
    {
      if (why) *why = "CREATE_TOKEN asset already exists";
      return false;
    }

    if (env.token_state.ticker_exists &&
        env.token_state.ticker_exists(env.token_state.self, ticker))
    {
      if (why) *why = "CREATE_TOKEN ticker already exists";
      return false;
    }

    if (env.block_overlay)
    {
      if (env.block_overlay->created_asset_types.count(asset_type) != 0)
      {
        if (why) *why = "CREATE_TOKEN asset created twice in candidate block";
        return false;
      }

      if (env.block_overlay->created_tickers.count(ticker) != 0)
      {
        if (why) *why = "CREATE_TOKEN ticker created twice in candidate block";
        return false;
      }

      env.block_overlay->created_asset_types.insert(asset_type);
      env.block_overlay->created_tickers.insert(ticker);
    }

    return true;
  }

  static bool apply_tx_consensus_effects(const cryptonote::transaction& tx,
                                         const tx_context& txctx,
                                         const validation_env& env,
                                         std::string* why)
  {
    switch (txctx.type)
    {
      case cryptonote::CREATE_TOKEN:
        return apply_create_token_consensus_effects(tx, env, why);

      default:
        return true;
    }
  }

  bool check_tx_consensus(const cryptonote::transaction& tx,
                          const validation_env& env,
                          consensus_result* result)
  {
    if (result)
    {
      result->ok = false;
      result->reason.clear();
    }

    std::string why;

    const hf_rules* rules = &rules_for_hf(env.height == 0 ? 0 : env.hf);

    const tx_context txctx = analyze_tx(tx, env);

    if (!validate_tx_against_rules(tx, txctx, *rules, env, &why))
      return fail_consensus(result, why);

    if (!cryptonote::tx_consensus::check_tx_basic_consensus(tx, &why))
      return fail_consensus(result, why);

    if (!apply_tx_consensus_effects(tx, txctx, env, &why))
      return fail_consensus(result, why);

    if (result)
      result->ok = true;

    return true;
  }
} // namespace cryptonote::txrules
