#pragma once

#include <cstdint>
#include <string>
#include "serialization/keyvalue_serialization.h"

namespace tools
{
// Amounts from distinct assets must never be added together. Stake principal is
// SAL1 and is reported separately from these actual output balances.
struct audit_asset_balance
{
  std::string asset_type;
  uint64_t good = 0, bad = 0, unresolved = 0, spent = 0, immature = 0;
  uint64_t good_count = 0, bad_count = 0, unresolved_count = 0, spent_count = 0;
  BEGIN_KV_SERIALIZE_MAP()
    KV_SERIALIZE(asset_type)
    KV_SERIALIZE(good)
    KV_SERIALIZE(bad)
    KV_SERIALIZE(unresolved)
    KV_SERIALIZE(spent)
    KV_SERIALIZE(immature)
    KV_SERIALIZE(good_count)
    KV_SERIALIZE(bad_count)
    KV_SERIALIZE(unresolved_count)
    KV_SERIALIZE(spent_count)
  END_KV_SERIALIZE_MAP()
};
}
