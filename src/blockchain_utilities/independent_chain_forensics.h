#pragma once

#include <cstdint>

#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_core/lineage_audit_policy.h"

namespace cryptonote
{
  class BlockchainDB;

  int run_independent_chain_forensics(
      const BlockchainDB& db,
      uint64_t tip_height,
      network_type nettype,
      bool verbose,
      uint64_t lineage_activation = 0,
      uint64_t lineage_duration = lineage_policy::duration_blocks,
      uint64_t start_height = 0);
}
