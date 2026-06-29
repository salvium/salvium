#pragma once

#include "cryptonote_core/tx_rules_types.h"
#include "cryptonote_core/tx_consensus_state.h"

namespace cryptonote
{
  class BlockchainDB;

  namespace txrules
  {
    token_state_view make_db_token_state_view(BlockchainDB& db);
    token_state_view make_db_token_state_view(const BlockchainDB& db);
  }

  namespace tx_consensus
  {
    // DB-aware implementation of tx_chain_state_view.
    // This is the only place that knows about BlockchainDB methods.
    class blockchain_tx_state_view final : public tx_chain_state_view
    {
    public:
      explicit blockchain_tx_state_view(const BlockchainDB& db);

      bool get_raw_output_ids_by_asset_index(
          uint32_t asset_type,
          const std::vector<uint64_t>& asset_offsets,
          std::vector<uint64_t>& output_ids,
          std::string* why) const override;

      bool get_effective_output_ids_by_asset_index(
          uint32_t asset_type,
          const std::vector<uint64_t>& asset_offsets,
          std::vector<uint64_t>& output_ids,
          std::string* why) const override;

    private:
      const BlockchainDB& m_db;
    };
  }
}
