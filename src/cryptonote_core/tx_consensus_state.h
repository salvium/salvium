#pragma once

#include <cstdint>
#include <string>
#include <vector>

namespace cryptonote
{
  struct validation_env;
  class transaction;
}

namespace cryptonote::tx_consensus
{
  struct tx_chain_state_view
  {
    virtual ~tx_chain_state_view() = default;

    virtual bool get_raw_output_ids_by_asset_index(
        uint32_t asset_type,
        const std::vector<uint64_t>& asset_offsets,
        std::vector<uint64_t>& output_ids,
        std::string* why) const = 0;

    virtual bool get_effective_output_ids_by_asset_index(
        uint32_t asset_type,
        const std::vector<uint64_t>& asset_offsets,
        std::vector<uint64_t>& output_ids,
        std::string* why) const = 0;
  };
}
