// Copyright (c) 2026, The Salvium Project
// SPDX-License-Identifier: BSD-3-Clause
#pragma once

#include <cstdint>
#include <limits>
#include <vector>

namespace tools
{
// Validate before changing the vector, so a rejected response cannot leave a
// partially accumulated distribution available to the decoy picker.
inline bool accumulate_output_distribution(std::vector<uint64_t>& counts,
    const uint64_t base, const uint64_t start_height, const uint64_t spendable)
{
  if (counts.empty() || counts.size() > std::numeric_limits<uint64_t>::max() - start_height)
    return false;
  uint64_t total = base;
  for (const uint64_t count : counts)
  {
    if (count > std::numeric_limits<uint64_t>::max() - total)
      return false;
    total += count;
  }
  if (spendable > total)
    return false;
  total = base;
  for (uint64_t& count : counts)
    count = total += count;
  return true;
}
}
