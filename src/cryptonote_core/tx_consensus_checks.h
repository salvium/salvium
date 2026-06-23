#pragma once

#include <string>

#include "cryptonote_basic/cryptonote_basic.h"

namespace cryptonote::tx_consensus
{
  // Consensus checks that are orthogonal to HF/TX-version rules.
  // These are intended to be called alongside txrules::validate_tx_against_rules().
  //
  // This module is deliberately NOT responsible for:
  // - chain-state checks (ring member existence, spent key images, etc.)
  // - RingCT proof / non-semantics verification
  // - txpool-only policy (fee floor, relay policy, timeout checks, etc.)

  // Checks that all outputs expose a valid output public key.
  bool check_tx_outputs_consensus(const cryptonote::transaction& tx, std::string* why);

  // Wrapper for all currently-migrated orthogonal consensus checks.
  // At the moment this just calls check_tx_outputs_consensus().
  bool check_tx_basic_consensus(const cryptonote::transaction& tx, std::string* why);
}
