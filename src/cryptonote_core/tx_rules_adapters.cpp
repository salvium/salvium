#include "tx_rules_adapters.h"

#include "blockchain_db/blockchain_db.h"
#include "cryptonote_basic/cryptonote_format_utils.h"

namespace cryptonote
{
namespace txrules
{
namespace
{
  static bool db_asset_exists(const void* self, const std::string& asset_type)
  {
    const auto* db = static_cast<const BlockchainDB*>(self);

    const auto tokens = db->get_tokens();
    return tokens.count(asset_type) != 0;
  }

  static bool db_ticker_exists(const void* self, const std::string& ticker)
  {
    const std::string asset_type = "sal" + ticker;
    return db_asset_exists(self, asset_type);
  }
}

token_state_view make_db_token_state_view(const BlockchainDB& db)
{
  token_state_view view;
  view.self = &db;
  view.asset_exists = &db_asset_exists;
  view.ticker_exists = &db_ticker_exists;
  return view;
}

token_state_view make_db_token_state_view(BlockchainDB& db)
{
  return make_db_token_state_view(static_cast<const BlockchainDB&>(db));
}

} // namespace txrules

namespace tx_consensus
{
  blockchain_tx_state_view::blockchain_tx_state_view(const BlockchainDB& db)
    : m_db(db)
  {
  }

  bool blockchain_tx_state_view::get_raw_output_ids_by_asset_index(
      uint32_t asset_type,
      const std::vector<uint64_t>& asset_offsets,
      std::vector<uint64_t>& output_ids,
      std::string* why) const
  {
    try
    {
      const std::string asset_type_str = asset_type_from_id(asset_type);
      m_db.get_output_id_from_asset_type_output_index(
          asset_type_str, asset_offsets, output_ids);
      return true;
    }
    catch (const OUTPUT_DNE&)
    {
      if (why) *why = "raw output id not found for asset type " + std::to_string(asset_type);
      return false;
    }
    catch (const std::exception& e)
    {
      if (why) *why = std::string("failed to resolve raw output ids: ") + e.what();
      return false;
    }
  }

  bool blockchain_tx_state_view::get_effective_output_ids_by_asset_index(
      uint32_t asset_type,
      const std::vector<uint64_t>& asset_offsets,
      std::vector<uint64_t>& output_ids,
      std::string* why) const
  {
    try
    {
      const std::string asset_type_str = asset_type_from_id(asset_type);
      m_db.get_output_ids_by_asset_index(
          asset_type_str, asset_offsets, output_ids);
      return true;
    }
    catch (const OUTPUT_DNE&)
    {
      if (why) *why = "effective output id not found for asset type " + std::to_string(asset_type);
      return false;
    }
    catch (const std::exception& e)
    {
      if (why) *why = std::string("failed to resolve effective output ids: ") + e.what();
      return false;
    }
  }

} // namespace tx_consensus
} // namespace cryptonote
