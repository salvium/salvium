// Copyright (c) 2014-2026, The Monero Project
//
// All rights reserved. See LICENSE for details.

#pragma once

#include <cstddef>
#include <cstdint>
#include <unordered_set>
#include <vector>

namespace cryptonote
{
  constexpr std::size_t MAX_OUTPUT_DISTRIBUTION_AMOUNTS = 64;

  inline bool normalize_distribution_amounts(const std::vector<std::uint64_t> &amounts,
      std::vector<std::uint64_t> &normalized)
  {
    normalized.clear();
    if (amounts.size() > MAX_OUTPUT_DISTRIBUTION_AMOUNTS)
      return false;

    normalized.reserve(amounts.size());
    std::unordered_set<std::uint64_t> seen;
    seen.reserve(amounts.size());
    for (const std::uint64_t amount: amounts)
    {
      if (seen.insert(amount).second)
        normalized.push_back(amount);
    }
    return true;
  }
}
