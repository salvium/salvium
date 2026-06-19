#include "tx_rules_engine.h"

#include "cryptonote_basic/cryptonote_basic.h"

namespace cryptonote::txrules
{
  static constexpr uint64_t TX_RULES_V2_HEIGHT = 500001;
  
  static bool enforce_req(req r, bool condition, const char* msg, std::string* why)
  {
    switch (r)
    {
      case req::MUST:
        if (!condition) { if (why) *why = msg; return false; }
        return true;
      case req::MUST_NOT:
        if (condition) { if (why) *why = msg; return false; }
        return true;
      case req::MAY:
        return true;
    }
    if (why) *why = "invalid req enum";
    return false;
  }

  static bool check_asset_value(const asset_rules& ar,
                                const std::string& a,
                                const validation_env& env,
                                std::string* why)
  {
    bool matched = false;

    if (!ar.allowed_assets.empty() && ar.allowed_assets.count(a) != 0)
      matched = true;

    if (!matched && ar.allow_any_known_token)
    {
      const bool exists_in_db =
        env.token_state.asset_exists &&
        env.token_state.asset_exists(env.token_state.self, a);

      const bool exists_in_block =
        env.block_overlay &&
        env.block_overlay->created_asset_types.count(a) != 0;

      if (exists_in_db || exists_in_block)
        matched = true;
    }
    
    if (!ar.allowed_assets.empty() || !ar.allow_any_known_token)
    {
      if (!matched)
      {
        if (why) *why = "asset not allowed";
        return false;
      }
    }
    
    if (ar.asset_predicate)
    {
      if (!ar.asset_predicate(a, env, why))
        return false;
    }
    
    return true;
  }

  static bool asset_set_matches_expected(const std::set<std::string>& s,
                                       const std::string& expected,
                                       bool is_coinbase)
  {
    if (s.empty())
      return is_coinbase;
    
    if (s.size() != 1)
      return false;
    
    return *s.begin() == expected;
  }

  static bool check_rct_outputs_have_zero_clear_amounts(const cryptonote::transaction& tx,
                                                        const cryptonote::txrules::validation_env& env,
                                                        std::string* why)
  {
    if (env.hf < HF_VERSION_REJECT_CLEARTEXT_AMOUNTS)
      return true;

    if (tx.rct_signatures.type == rct::RCTTypeNull)
      return true;

    for (size_t i = 0; i < tx.vout.size(); ++i)
    {
      if (tx.vout[i].amount != 0)
      {
        if (why)
          *why = "non-zero cleartext output amount in RingCT transaction";
        return false;
      }
    }

    return true;
  }

  bool validate_tx_against_rules(const cryptonote::transaction& tx,
                                 const tx_context& ctx,
                                 const hf_rules& hf,
                                 const validation_env& env,
                                 std::string* why)
  {
    // ---- HF shutdown gate ----
    if (hf.shutdown_user_txs)
    {
      // only coinbase-like accepted
      if (!ctx.is_coinbase)
      {
        if (why) *why = "HF shutdown: non-coinbase tx rejected";
        return false;
      }
      // only MINER and PROTOCOL coinbase-like accepted
      if (!(ctx.type == cryptonote::MINER || ctx.type == cryptonote::PROTOCOL))
      {
        if (why) *why = "HF shutdown: only MINER/PROTOCOL accepted";
        return false;
      }
    }

    // ---- Rule lookup ----
    auto it = hf.by_type.find(ctx.type);
    if (it == hf.by_type.end())
    {
      // MINER is often special-cased elsewhere; we return false here unless MINER rule exists
      if (why) *why = "tx type not allowed at this HF";
      return false;
    }
    const tx_type_rules& r = it->second;

    // ---- Basic shape ----
    if (!r.tx_versions.contains(ctx.txver))
    {
      if (why) *why = "tx version not allowed for this tx type at this HF";
      return false;
    }
    if (!r.vin_count.contains(ctx.vin_count))
    {
      if (why) *why = "vin count out of range";
      return false;
    }
    if (!r.vout_count.contains(ctx.vout_count))
    {
      if (why) *why = "vout count out of range";
      return false;
    }
    if (r.max_extra_size != 0 && ctx.extra_size > r.max_extra_size)
    {
      if (why) *why = "extra size exceeds consensus limit";
      return false;
    }

    // ---- Variant checks ----
    for (auto k : ctx.inputs)
    {
      if (k == input_kind::unknown)
      {
        if (why) *why = "unknown input variant";
        return false;
      }
      if (!r.variants.input_allowed(k))
      {
        if (why) *why = "input kind not allowed";
        return false;
      }
    }
    for (auto k : ctx.outputs)
    {
      if (k == output_kind::unknown)
      {
        if (why) *why = "unknown output variant";
        return false;
      }
      if (!r.variants.output_allowed(k))
      {
        if (why) *why = "output kind not allowed";
        return false;
      }
    }

    // ---- Coinbase constraints ----
    // Coinbase (including PROTOCOL coinbase) must be RCT null

    // check here!!!! used a narrow allowlist here instead of accepting every value in rct::RCTType.
    // improvement area: deriving this check from rule config instead of hardcoding known types
    const bool known_rct_type =
      ctx.rct_type == rct::RCTTypeNull ||
      ctx.rct_type == rct::RCTTypeBulletproofPlus ||
      ctx.rct_type == rct::RCTTypeFullProofs ||
      ctx.rct_type == rct::RCTTypeSalviumZero ||
      ctx.rct_type == rct::RCTTypeSalviumOne;
    if (!known_rct_type)
    {
      if (why) *why = "unknown RCT type";
      return false;
    }

    if (ctx.is_coinbase)
    {
      if (r.rct.coinbase_must_be_null && ctx.rct_type != 0 /*RCTTypeNull*/)
      {
        if (why) *why = "coinbase must use RCTTypeNull";
        return false;
      }

      // CHECK HERE!!!!
      if (ctx.rct_type == rct::RCTTypeNull)
      {
        if (!tx.rct_signatures.ecdhInfo.empty() || !tx.rct_signatures.outPk.empty() || tx.rct_signatures.txnFee != 0)
        {
          if (why) *why = "coinbase/null-RCT transaction contains RingCT payload";
          return false;
        }
      }
    }
    else
    {
      /*
      // HF global RCT enforcement (HF4)
      if (hf.global_required_rct_type && ctx.rct_type != *hf.global_required_rct_type)
      {
        if (why) *why = "HF requires a specific RCT type";
        return false;
      }
      // per-type enforcement
      if (r.rct.required_rct_type && ctx.rct_type != *r.rct.required_rct_type)
      {
        if (why) *why = "tx type requires a specific RCT type";
        return false;
      }
      */

      if (ctx.rct_type >= r.rct.allowed_rct_types.size())
      {
        if (why) *why = "invalid RCT type";
        return false;
      }
// check here!!!!!!
      // User transactions must use non-null RingCT.
      if (ctx.rct_type == rct::RCTTypeNull)
      {
        if (why) *why = "non-coinbase transaction must not use RCTTypeNull";
        return false;
      }

      // Basic RingCT shape must align with number of outputs.
      if (tx.rct_signatures.ecdhInfo.size() != tx.vout.size() || tx.rct_signatures.outPk.size() != tx.vout.size())
      {
        if (why) *why = "RingCT payload size does not match number of outputs";
        return false;
      }

      if (!r.rct.allowed_rct_types.test(ctx.rct_type))
      {
        if (why) *why = "RCT type not allowed";
        return false;
      }
    }

    // ---- Global invariant: only PROTOCOL may be multi-asset outputs ----
    const bool multi_asset_outputs = (ctx.out_assets.size() > 1);

    // ---- Asset semantics ----
    // MINER: no src/dst matching, allow only SAL/SAL1 outputs (still coinbase-like)
    if (ctx.type == cryptonote::MINER)
    {
      if (!ctx.is_coinbase)
      {
        if (why) *why = "MINER must be coinbase-form (txin_gen)";
        return false;
      }

      // Make sure that the miner_tx only has a single asset_type
      if (ctx.out_assets.size() != 1)
      {
        if (why) *why = "MINER must only have 1 output asset_type present";
        return false;
      }

      //Make sure that the miner_tx output asset_type matches the approved one
      if (ctx.out_assets != r.assets.allowed_assets)
      {
        if (why) *why = "MINER output asset type policy violated";
        return false;
      }
    }
    // PROTOCOL: no src/dst matching, allow multi-asset outputs (still coinbase-like)
    else if (ctx.type == cryptonote::PROTOCOL)
    {
      if (!ctx.is_coinbase)
      {
        if (why) *why = "PROTOCOL must be coinbase-form (txin_gen)";
        return false;
      }

      //Make sure that the protocol_tx output asset_types match the approved one(s)
      if (!r.assets.allowed_assets.empty())
      {
        if (!std::includes(r.assets.allowed_assets.begin(), r.assets.allowed_assets.end(), ctx.out_assets.begin(), ctx.out_assets.end()))
        {
          if (why) *why = "PROTOCOL output asset types policy violated";
          return false;
        }
      }
    }
    else
    {
      // Prevent non-zero amounts on RCT outputs
      if (!check_rct_outputs_have_zero_clear_amounts(tx, env, why))
        return false;
      
      // src/dst relation (currently MUST equal for implemented types)
      if (!enforce_req(r.assets.src_eq_dst,
                       ctx.source_asset_type == ctx.destination_asset_type,
                       "source_asset_type and destination_asset_type are not consistent with each other according to the defined rules",
                       why))
        return false;

      // multi-asset outputs policy (belt-and-braces; invariant above already enforces for non-PROTOCOL)
      if (!enforce_req(r.assets.outputs_multi_asset, multi_asset_outputs,
                       "multi-asset outputs policy violated", why))
        return false;

      // Validate declared src/dst asset values
      if (!check_asset_value(r.assets, ctx.source_asset_type, env, why))
        return false;
      if (!check_asset_value(r.assets, ctx.destination_asset_type, env, why))
        return false;

      // Inputs must match source
      const bool inputs_match_src =
        asset_set_matches_expected(ctx.in_assets, ctx.source_asset_type, ctx.is_coinbase);
      if (!enforce_req(r.assets.inputs_match_source, inputs_match_src,
                       "inputs must match source_asset_type", why))
        return false;

      // Outputs must match destination
      const bool outputs_match_dst =
        asset_set_matches_expected(ctx.out_assets, ctx.destination_asset_type, ctx.is_coinbase);
      if (env.nettype != cryptonote::network_type::MAINNET || env.height > TX_RULES_V2_HEIGHT)
        if (!enforce_req(r.assets.outputs_match_destination, outputs_match_dst,
                         "outputs must match destination_asset_type", why))
          return false;
    }

    // ---- Burning semantics ----
    if (env.nettype != cryptonote::network_type::MAINNET || env.height > TX_RULES_V2_HEIGHT)
      if (!enforce_req(r.burning.amount_burnt_positive,
                       ctx.amount_burnt > 0,
                       "amount_burnt is not right according to rules",
                       why))
        return false;

    // ---- Extra semantic hooks (e.g. amount_burnt > 0) ----
    if (r.extra_check)
    {
      if (!r.extra_check(tx, env, why))
        return false;
    }

    return true;
  }
} // namespace cryptonote::txrules
