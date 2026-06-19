#pragma once

#include "cryptonote_core/tx_rules_engine.h"

namespace cryptonote
{
  class BlockchainDB;

  namespace txrules
  {
    token_state_view make_db_token_state_view(BlockchainDB& db);
    token_state_view make_db_token_state_view(const BlockchainDB& db);
  }
}
