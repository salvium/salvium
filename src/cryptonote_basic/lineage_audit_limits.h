#pragma once

#include <cstddef>

namespace cryptonote { namespace lineage_limits {
// Consensus carrier limits. Wallet batches retain independent identities, and
// miners can pack multiple batches into one block within these combined limits.
constexpr std::size_t max_outputs = 512;
constexpr std::size_t max_bytes = 256 * 1024;
constexpr std::size_t max_funding_inputs = 4096;
constexpr std::size_t max_source_bytes = 1024 * 1024;
constexpr std::size_t work_per_block = 1024;
// Local pending-queue limit, independent of the larger per-block carrier.
constexpr std::size_t max_queue_bytes = 64 * 1024 * 1024;
} }
