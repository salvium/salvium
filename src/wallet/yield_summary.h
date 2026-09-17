// Copyright (c) 2026, Salvium
// SPDX-License-Identifier: BSD-3-Clause
#pragma once

#include <cstddef>
#include <cstdint>
#include <limits>
#include <string>
#include <tuple>
#include <vector>

namespace tools
{
using yield_payout = std::tuple<std::size_t, std::string, std::string, uint64_t, uint64_t>;

struct yield_totals
{
  uint64_t completed = 0;
  uint64_t staked = 0;
  uint64_t accrued = 0;
};

// Wallet height counts scanned blocks. The maturity block must be scanned
// before its payout is counted as completed. Subtraction avoids height overflow.
inline bool stake_completed(uint64_t height, uint64_t wallet_height, uint64_t lock_period)
{
  return wallet_height > height && wallet_height - height > lock_period;
}

inline bool summarize_yield(const std::vector<yield_payout>& payouts,
    uint64_t wallet_height, uint64_t lock_period, yield_totals& totals)
{
  totals = {};
  yield_totals result;
  const auto add = [](uint64_t& total, uint64_t amount) {
    if (amount > std::numeric_limits<uint64_t>::max() - total)
      return false;
    total += amount;
    return true;
  };
  for (const auto& payout : payouts)
  {
    if (stake_completed(std::get<0>(payout), wallet_height, lock_period))
    {
      if (!add(result.completed, std::get<4>(payout)))
        return false;
    }
    else if (!add(result.staked, std::get<3>(payout)) ||
             !add(result.accrued, std::get<4>(payout)))
      return false;
  }
  totals = result;
  return true;
}
}
