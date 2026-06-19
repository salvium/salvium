#include "tx_rules_adapters.h"

#include "blockchain_db/blockchain_db.h"

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
} // namespace cryptonote
