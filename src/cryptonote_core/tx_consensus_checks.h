#pragma once

#include <string>

#include "tx_rules_types.h"
#include "tx_consensus_state.h"

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

  using validation_env = cryptonote::txrules::validation_env;

  // Checks that all inputs reference non-poisoned outputs (raw == effective).
  // Stateful rule: requires a chain state view to resolve output IDs.
  bool check_tx_inputs_consensus(
      const cryptonote::transaction& tx,
      const validation_env& env,
      const tx_chain_state_view& state,
      std::string* why);

  // Checks that all outputs expose a valid output public key.
  bool check_tx_outputs_consensus(
      const cryptonote::transaction& tx,
      std::string* why);

  // Wrapper for all currently-migrated orthogonal consensus checks.
  // When state is nullptr, stateful checks (poisoned reference) are skipped.
  bool check_tx_basic_consensus(
      const cryptonote::transaction& tx,
      const validation_env& env,
      const tx_chain_state_view* state,
      std::string* why);
}
