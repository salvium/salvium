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

#include "curve.h"

#include <limits>

#include <boost/multiprecision/cpp_int.hpp>

#include "cryptonote_basic.h"
#include "cryptonote_config.h"
#include "cryptonote_format_utils.h"

namespace cryptonote
{
  namespace
  {
    using u128 = boost::multiprecision::uint128_t;

    const u128 Y0 = u128(CURVE_TOKEN_SUPPLY) + u128(CURVE_VIRTUAL_TOKENS);
    const u128 K0 = u128(CURVE_VIRTUAL_SAL) * Y0;

    u128 ceil_div(const u128& a, const u128& b)
    {
      return (a + b - 1) / b;
    }

    u128 x_of(const curve_state_t& s) { return u128(CURVE_VIRTUAL_SAL) + u128(s.reserve); }
    u128 y_of(const curve_state_t& s) { return Y0 - u128(s.sold); }

    curve_quote_t refund(const curve_state_t& state)
    {
      curve_quote_t q;
      q.filled = false;
      q.amount_out = 0;
      q.new_state = state;
      return q;
    }
  }

  curve_op get_curve_op(const std::string& source_asset_type, const std::string& destination_asset_type)
  {
    const bool src_native = source_asset_type == "SAL1";
    const bool dst_native = destination_asset_type == "SAL1";
    if (src_native && dst_native)
      return curve_op::LAUNCH;
    if (src_native && is_asset_type_token(destination_asset_type))
      return curve_op::BUY;
    if (dst_native && is_asset_type_token(source_asset_type))
      return curve_op::SELL;
    return curve_op::INVALID;
  }

  curve_op get_curve_op(const transaction_prefix& tx)
  {
    if (tx.type != transaction_type::CURVE)
      return curve_op::INVALID;
    return get_curve_op(tx.source_asset_type, tx.destination_asset_type);
  }

  std::string get_curve_asset_type(const transaction_prefix& tx)
  {
    switch (get_curve_op(tx))
    {
      case curve_op::LAUNCH: return "sal" + tx.token_metadata.asset_type;
      case curve_op::BUY:    return tx.destination_asset_type;
      case curve_op::SELL:   return tx.source_asset_type;
      default:               return std::string();
    }
  }

  uint64_t curve_fee(uint64_t amount)
  {
    return amount / CURVE_FEE_DIVISOR + (amount % CURVE_FEE_DIVISOR ? 1 : 0);
  }

  curve_quote_t curve_quote_buy(const curve_state_t& state, uint64_t sal_burnt, uint64_t min_out)
  {
    if (sal_burnt == 0 || state.sold > CURVE_TOKEN_SUPPLY)
      return refund(state);

    const uint64_t fee = curve_fee(sal_burnt);
    const uint64_t net = sal_burnt - fee;
    if (net == 0)
      return refund(state);

    // reserve + net must stay within uint64 (it is bounded by MONEY_SUPPLY in practice)
    if (net > std::numeric_limits<uint64_t>::max() - state.reserve)
      return refund(state);

    const u128 new_x = x_of(state) + u128(net);
    const u128 new_y = ceil_div(K0, new_x);           // ceil: fewer tokens out
    const u128 y = y_of(state);
    if (new_y >= y)
      return refund(state);

    const u128 out = y - new_y;
    if (u128(state.sold) + out > u128(CURVE_TOKEN_SUPPLY))
      return refund(state);                            // would sell past the real supply
    if (out < u128(min_out))
      return refund(state);                            // slippage limit not met

    curve_quote_t q;
    q.filled = true;
    q.amount_out = out.convert_to<uint64_t>();
    q.new_state = state;
    q.new_state.reserve = state.reserve + net;
    q.new_state.sold = state.sold + q.amount_out;
    return q;
  }

  curve_quote_t curve_quote_sell(const curve_state_t& state, uint64_t tokens_burnt, uint64_t min_out)
  {
    if (tokens_burnt == 0 || tokens_burnt > state.sold)
      return refund(state);

    const uint64_t new_sold = state.sold - tokens_burnt;
    const u128 new_x = ceil_div(K0, Y0 - u128(new_sold)); // ceil: less SAL1 out
    const u128 x = x_of(state);
    if (new_x >= x)
      return refund(state);

    const u128 gross128 = x - new_x;
    if (gross128 > u128(state.reserve))
      return refund(state);                              // unreachable by construction
    const uint64_t gross = gross128.convert_to<uint64_t>();
    const uint64_t fee = curve_fee(gross);
    if (fee >= gross)
      return refund(state);
    const uint64_t paid = gross - fee;
    if (paid < min_out)
      return refund(state);                              // slippage limit not met

    curve_quote_t q;
    q.filled = true;
    q.amount_out = paid;
    q.new_state = state;
    q.new_state.reserve = state.reserve - gross;
    q.new_state.sold = new_sold;
    return q;
  }

  bool curve_quote_tx(const transaction_prefix& tx, const curve_state_t& state, curve_quote_t& quote)
  {
    switch (get_curve_op(tx))
    {
      case curve_op::BUY:
        quote = curve_quote_buy(state, tx.amount_burnt, tx.amount_slippage_limit);
        return true;
      case curve_op::SELL:
        quote = curve_quote_sell(state, tx.amount_burnt, tx.amount_slippage_limit);
        return true;
      default:
        return false;
    }
  }

  void curve_payout(const transaction_prefix& tx, const curve_quote_t& quote, uint64_t& amount, std::string& asset_type)
  {
    if (quote.filled)
    {
      amount = quote.amount_out;
      asset_type = tx.destination_asset_type;
    }
    else
    {
      amount = tx.amount_burnt;
      asset_type = tx.source_asset_type;
    }
  }

  uint64_t curve_spot_price(const curve_state_t& state)
  {
    const u128 p = x_of(state) * u128(COIN) / y_of(state);
    return p > u128(std::numeric_limits<uint64_t>::max()) ? std::numeric_limits<uint64_t>::max() : p.convert_to<uint64_t>();
  }

  bool curve_state_is_solvent(const curve_state_t& state)
  {
    if (state.sold > CURVE_TOKEN_SUPPLY)
      return false;
    return x_of(state) * y_of(state) >= K0;
  }
}
