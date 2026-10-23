// Copyright (c) 2026, The Salvium Project
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// CURVE: native bonding-curve tokens. See docs/defi/CURVE.md.
//
// Everything here is consensus-critical and must stay bit-identical to the executable
// specification in utils/curve_model.py (test vectors in tests/unit_tests/curve_math.cpp).

#pragma once

#include <cstdint>
#include <string>

#include "serialization/serialization.h"

namespace cryptonote
{
  class transaction_prefix;

  // The operation of a CURVE transaction is implied by its asset pair:
  //   LAUNCH: SAL1 -> SAL1 with token_metadata (burns the token creation price)
  //   BUY:    SAL1 -> sal<TICKER>
  //   SELL:   sal<TICKER> -> SAL1
  enum class curve_op : uint8_t
  {
    INVALID = 0,
    LAUNCH = 1,
    BUY = 2,
    SELL = 3,
  };

  curve_op get_curve_op(const std::string& source_asset_type, const std::string& destination_asset_type);
  curve_op get_curve_op(const transaction_prefix& tx);

  // The token traded by a BUY/SELL (sal<TICKER>), or created by a LAUNCH.
  std::string get_curve_asset_type(const transaction_prefix& tx);

  enum : uint8_t { CURVE_PHASE_CURVE = 0, CURVE_PHASE_POOL = 1 };

  // Per-token consensus state, stored in the `curves` table keyed by asset id. A token starts on
  // its bonding curve and graduates, once and for good, to a pool with locked liquidity.
  struct curve_state_t
  {
    uint8_t phase = CURVE_PHASE_CURVE;
    uint64_t reserve = 0;        // curve phase: SAL1 held by the curve (net of fees)
    uint64_t sold = 0;           // tokens sold by the curve (CURVE_SALE_SUPPLY once graduated)
    uint64_t pool_sal = 0;       // pool phase: SAL1 in the pool
    uint64_t pool_tokens = 0;    // pool phase: tokens in the pool
    uint64_t launch_height = 0;
    uint64_t graduation_height = 0;

    BEGIN_SERIALIZE_OBJECT()
      FIELD(phase)
      VARINT_FIELD(reserve)
      VARINT_FIELD(sold)
      VARINT_FIELD(pool_sal)
      VARINT_FIELD(pool_tokens)
      VARINT_FIELD(launch_height)
      VARINT_FIELD(graduation_height)
    END_SERIALIZE()

    bool operator==(const curve_state_t& o) const
    {
      return phase == o.phase && reserve == o.reserve && sold == o.sold && pool_sal == o.pool_sal &&
             pool_tokens == o.pool_tokens && launch_height == o.launch_height &&
             graduation_height == o.graduation_height;
    }
  };

  // Result of pricing one BUY or SELL against a curve state.
  struct curve_quote_t
  {
    bool filled = false;          // false -> the burnt amount is refunded in the burnt asset
    uint64_t amount_out = 0;      // tokens (BUY) or SAL1 (SELL) minted to the trader
    curve_state_t new_state;      // state after the trade (unchanged when not filled)
  };

  // 1% fee, rounded up. Burned on both sides.
  uint64_t curve_fee(uint64_t amount);

  // Pure pricing functions. `min_out` is the trader's slippage limit (0 = none).
  // When the trade cannot be filled the quote is a refund: filled=false, amount_out=0,
  // new_state=state. Callers mint the refund (the full burnt amount) themselves.
  curve_quote_t curve_quote_buy(const curve_state_t& state, uint64_t sal_burnt, uint64_t min_out);
  curve_quote_t curve_quote_sell(const curve_state_t& state, uint64_t tokens_burnt, uint64_t min_out);

  // Convenience: price a BUY/SELL transaction (op derived from the tx). Returns false only
  // when the tx is not a BUY/SELL.
  bool curve_quote_tx(const transaction_prefix& tx, const curve_state_t& state, curve_quote_t& quote);

  // What the protocol transaction must mint for a priced BUY/SELL: either the trade output
  // or the refund of the burnt amount.
  void curve_payout(const transaction_prefix& tx, const curve_quote_t& quote, uint64_t& amount, std::string& asset_type);

  // Spot price in SAL1 atomic units per whole token (COIN atomic units). Display only.
  uint64_t curve_spot_price(const curve_state_t& state);

  // Tokens held by users: minted by the curve, or bought from the pool, net of burns.
  uint64_t curve_circulating(const curve_state_t& state);

  // Invariant check used by consensus and tests: the curve reserve covers selling everything
  // back, the supply cap holds, and a pool always keeps both reserves positive.
  bool curve_state_is_solvent(const curve_state_t& state);
}
