#include "tx_rules_engine.h"

#include "cryptonote_basic/cryptonote_basic.h"
#include "ringct/rctSigs.h"

#include <boost/variant/get.hpp>

namespace cryptonote::txrules
{
  static input_kind classify_input(const cryptonote::txin_v& in)
  {
    if (boost::get<cryptonote::txin_gen>(&in))        return input_kind::gen;
    if (boost::get<cryptonote::txin_to_key>(&in))     return input_kind::to_key;
    if (boost::get<cryptonote::txin_to_script>(&in))  return input_kind::to_script;
    if (boost::get<cryptonote::txin_to_scripthash>(&in)) return input_kind::to_scripthash;
    // default (should not happen)
    return input_kind::unknown;
  }

  static output_kind classify_output(const cryptonote::txout_target_v& out)
  {
    if (boost::get<cryptonote::txout_to_key>(&out))         return output_kind::to_key;
    if (boost::get<cryptonote::txout_to_tagged_key>(&out))  return output_kind::to_tagged_key;
    if (boost::get<cryptonote::txout_to_carrot_v1>(&out))   return output_kind::to_carrot_v1;
    if (boost::get<cryptonote::txout_to_script>(&out))      return output_kind::to_script;
    if (boost::get<cryptonote::txout_to_scripthash>(&out))  return output_kind::to_scripthash;
    // default
    return output_kind::unknown;
  }

  static std::optional<std::string> input_asset(const cryptonote::txin_v& in)
  {
    if (const auto* k = boost::get<cryptonote::txin_to_key>(&in))
      return k->asset_type;
    return std::nullopt;
  }

  static std::optional<std::string> output_asset(const cryptonote::txout_target_v& out)
  {
    if (const auto* k = boost::get<cryptonote::txout_to_key>(&out))
      return k->asset_type;
    if (const auto* k = boost::get<cryptonote::txout_to_tagged_key>(&out))
      return k->asset_type;
    if (const auto* k = boost::get<cryptonote::txout_to_carrot_v1>(&out))
      return k->asset_type;
    return std::nullopt;
  }

  tx_context analyze_tx(const cryptonote::transaction& tx, const validation_env& env)
  {
    tx_context ctx;
    ctx.hf = env.hf; 
    ctx.height = env.height;
    ctx.txver = static_cast<uint8_t>(tx.version);
    ctx.type  = static_cast<cryptonote::transaction_type>(tx.type);

    ctx.vin_count  = static_cast<uint32_t>(tx.vin.size());
    ctx.vout_count = static_cast<uint32_t>(tx.vout.size());
    ctx.extra_size = static_cast<uint32_t>(tx.extra.size());

    ctx.is_coinbase = ((tx.vin.size() == 1 && boost::get<cryptonote::txin_gen>(&tx.vin[0]) != nullptr) || (tx.vin.size() == 0 && ctx.height == 0));

    ctx.source_asset_type = tx.source_asset_type;
    ctx.destination_asset_type = tx.destination_asset_type;

    ctx.amount_burnt = tx.amount_burnt;
    
    // rct type is in rct_signatures.type
    ctx.rct_type = static_cast<uint8_t>(tx.rct_signatures.type);

    ctx.inputs.reserve(tx.vin.size());
    for (const auto& in : tx.vin)
    {
      ctx.inputs.push_back(classify_input(in));
      if (auto a = input_asset(in)) ctx.in_assets.insert(*a);
    }

    ctx.outputs.reserve(tx.vout.size());
    for (const auto& o : tx.vout)
    {
      ctx.outputs.push_back(classify_output(o.target));
      if (auto a = output_asset(o.target)) ctx.out_assets.insert(*a);
    }

    return ctx;
  }
} // namespace cryptonote::txrules
