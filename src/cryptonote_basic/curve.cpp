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

    const u128 Y0 = u128(CURVE_SALE_SUPPLY) + u128(CURVE_VIRTUAL_TOKENS);
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

    curve_quote_t fill(const curve_state_t& state, uint64_t out)
    {
      curve_quote_t q;
      q.filled = true;
      q.amount_out = out;
      q.new_state = state;
      return q;
    }

    // A sold-out curve becomes its pool: the whole reserve plus CURVE_POOL_SUPPLY tokens.
    curve_state_t graduate(const curve_state_t& s)
    {
      curve_state_t p = s;
      p.phase = CURVE_PHASE_POOL;
      p.pool_sal = s.reserve;
      p.pool_tokens = CURVE_POOL_SUPPLY;
      p.reserve = 0;
      p.sold = CURVE_SALE_SUPPLY;
      return p;
    }

    // ---- pool phase: constant product, the 1% fee stays in the pool --------------------------
    bool pool_buy(const curve_state_t& s, uint64_t sal_in, uint64_t& out, curve_state_t& ns)
    {
      if (sal_in == 0)
        return false;
      const uint64_t eff = sal_in - curve_fee(sal_in);
      if (eff == 0)
        return false;
      const u128 x = s.pool_sal, y = s.pool_tokens;
      if (u128(sal_in) > u128(std::numeric_limits<uint64_t>::max()) - x)
        return false;
      const u128 o = y - ceil_div(x * y, x + u128(eff));
      if (o == 0 || o >= y)
        return false;
      out = o.convert_to<uint64_t>();
      ns = s;
      ns.pool_sal = s.pool_sal + sal_in;
      ns.pool_tokens = s.pool_tokens - out;
      return true;
    }

    bool pool_sell(const curve_state_t& s, uint64_t tokens_in, uint64_t& paid, curve_state_t& ns)
    {
      if (tokens_in == 0)
        return false;
      const u128 x = s.pool_sal, y = s.pool_tokens;
      if (u128(tokens_in) > u128(std::numeric_limits<uint64_t>::max()) - y)
        return false;
      const u128 nx = ceil_div(x * y, y + u128(tokens_in));
      if (nx >= x)
        return false;
      const uint64_t gross = (x - nx).convert_to<uint64_t>();
      const uint64_t fee = curve_fee(gross);
      if (fee >= gross)
        return false;
      paid = gross - fee;
      ns = s;
      ns.pool_sal = s.pool_sal - paid;
      ns.pool_tokens = s.pool_tokens + tokens_in;
      return true;
    }

    // ---- curve phase -------------------------------------------------------------------------
    bool curve_buy(const curve_state_t& s, uint64_t sal_burnt, uint64_t& out, curve_state_t& ns)
    {
      const uint64_t fee = curve_fee(sal_burnt);
      const uint64_t net = sal_burnt - fee;
      if (net == 0 || s.sold > CURVE_SALE_SUPPLY)
        return false;
      if (net > std::numeric_limits<uint64_t>::max() - s.reserve)
        return false;
      const u128 x = x_of(s), y = y_of(s);
      const uint64_t remaining = CURVE_SALE_SUPPLY - s.sold;
      const u128 o = y - ceil_div(K0, x + u128(net));
      if (o == 0 || o > y)
        return false;
      if (o < u128(remaining))
      {
        out = o.convert_to<uint64_t>();
        ns = s;
        ns.reserve = s.reserve + net;
        ns.sold = s.sold + out;
        return true;
      }
      // Crosses graduation: buy every remaining curve token with the smallest sufficient net,
      // graduate, and swap the rest of the burn in the new pool within the same trade.
      const u128 need128 = ceil_div(K0, y - u128(remaining)) - x;
      if (need128 == 0 || need128 > u128(net))
        return false;   // unreachable by construction
      const uint64_t need = need128.convert_to<uint64_t>();
      curve_state_t filled = s;
      filled.reserve = s.reserve + need;
      filled.sold = CURVE_SALE_SUPPLY;
      const curve_state_t pool = graduate(filled);
      const uint64_t rest = net - need;
      uint64_t pool_out = 0;
      curve_state_t after = pool;
      if (rest > 0 && !pool_buy(pool, rest, pool_out, after))
      {
        // dust too small to buy anything: it stays in the pool
        after = pool;
        after.pool_sal = pool.pool_sal + rest;
        pool_out = 0;
      }
      out = remaining + pool_out;
      ns = after;
      return true;
    }

    bool curve_sell(const curve_state_t& s, uint64_t tokens_burnt, uint64_t& paid, curve_state_t& ns)
    {
      if (tokens_burnt == 0 || tokens_burnt > s.sold)
        return false;
      const uint64_t new_sold = s.sold - tokens_burnt;
      const u128 nx = ceil_div(K0, Y0 - u128(new_sold));
      const u128 x = x_of(s);
      if (nx >= x)
        return false;
      const u128 gross128 = x - nx;
      if (gross128 > u128(s.reserve))
        return false;   // unreachable by construction
      const uint64_t gross = gross128.convert_to<uint64_t>();
      const uint64_t fee = curve_fee(gross);
      if (fee >= gross)
        return false;
      paid = gross - fee;
      ns = s;
      ns.reserve = s.reserve - gross;
      ns.sold = new_sold;
      return true;
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
    if (sal_burnt == 0)
      return refund(state);
    uint64_t out = 0;
    curve_state_t ns;
    const bool ok = state.phase == CURVE_PHASE_POOL ? pool_buy(state, sal_burnt, out, ns)
                                                    : curve_buy(state, sal_burnt, out, ns);
    if (!ok || out < min_out)
      return refund(state);
    return fill(ns, out);
  }

  curve_quote_t curve_quote_sell(const curve_state_t& state, uint64_t tokens_burnt, uint64_t min_out)
  {
    if (tokens_burnt == 0)
      return refund(state);
    uint64_t paid = 0;
    curve_state_t ns;
    const bool ok = state.phase == CURVE_PHASE_POOL ? pool_sell(state, tokens_burnt, paid, ns)
                                                    : curve_sell(state, tokens_burnt, paid, ns);
    if (!ok || paid < min_out)
      return refund(state);
    return fill(ns, paid);
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
    u128 p;
    if (state.phase == CURVE_PHASE_POOL)
      p = state.pool_tokens ? u128(state.pool_sal) * u128(COIN) / u128(state.pool_tokens) : u128(0);
    else
      p = x_of(state) * u128(COIN) / y_of(state);
    return p > u128(std::numeric_limits<uint64_t>::max()) ? std::numeric_limits<uint64_t>::max() : p.convert_to<uint64_t>();
  }

  uint64_t curve_circulating(const curve_state_t& state)
  {
    if (state.phase == CURVE_PHASE_POOL)
      return state.pool_tokens <= CURVE_TOKEN_SUPPLY ? CURVE_TOKEN_SUPPLY - state.pool_tokens : 0;
    return state.sold;
  }

  bool curve_state_is_solvent(const curve_state_t& state)
  {
    if (state.phase == CURVE_PHASE_POOL)
      return state.sold == CURVE_SALE_SUPPLY && state.reserve == 0 &&
             state.pool_sal > 0 && state.pool_tokens > 0 && state.pool_tokens <= CURVE_TOKEN_SUPPLY;
    if (state.phase != CURVE_PHASE_CURVE || state.sold > CURVE_SALE_SUPPLY)
      return false;
    return x_of(state) * y_of(state) >= K0;
  }
}
