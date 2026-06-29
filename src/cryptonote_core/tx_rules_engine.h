#pragma once

#include <bitset>
#include <cstdint>
#include <map>
#include <optional>
#include <set>
#include <string>
#include <vector>
#include <unordered_set>

#include "tx_rules_types.h"
#include "tx_consensus_state.h"

/*
namespace rct
{
  struct rctSig;
}
*/
// Centralized validator for consensus-semantic tx rules:
// - tx type/version/HF gating
// - vin/vout counts and allowed variants
// - asset-type semantics
// - RCT type admissibility
//
// Intentionally NOT responsible for:
// - chain-state checks outside transaction-local/state-view facts (ring members, spent key images, etc.)
// - RingCT proof verification / mixring expansion
// - txpool-only policy (fee floor, pool duplicate checks, timeout/pruning, etc.)

namespace cryptonote::txrules
{
  // ---------- Public API ----------
  const hf_rules& rules_for_hf(uint8_t hf_version);

  tx_context analyze_tx(const cryptonote::transaction& tx, const validation_env& env);

  // Centralized validator (semantic, not chain-state like ring member existence)
  bool validate_tx_against_rules(const cryptonote::transaction& tx,
                                 const tx_context& ctx,
                                 const hf_rules& rules,
                                 const validation_env& env,
                                 std::string* why);

  // Single top-level entry point intended for consensus call-sites.
  // Calling code supplies DB-backed token_state and, for block validation,
  // a mutable block_overlay shared across txs in block order.
  // When state is non-null, stateful checks (poisoned reference rejection)
  // are enforced per the validation_env mode and HF height.
  bool check_tx_consensus(const cryptonote::transaction& tx,
                          const validation_env& env,
                          const tx_consensus::tx_chain_state_view* state,
                          consensus_result* result);
} // namespace cryptonote::txrules
