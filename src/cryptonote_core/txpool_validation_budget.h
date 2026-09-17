#pragma once

#include <chrono>
#include <cstddef>
#include <functional>
#include <limits>
#include <utility>

namespace cryptonote
{
  // Bounds only the expensive revalidation of persisted, non-consensus
  // transaction cache entries during startup. One operation may cross the
  // time boundary; no additional cryptographic work starts afterward.
  class txpool_validation_budget
  {
  public:
    using clock = std::chrono::steady_clock;
    using now_function = std::function<clock::time_point()>;

    txpool_validation_budget(const clock::duration max_duration,
        const std::size_t max_transactions,
        now_function now = [] { return clock::now(); })
      : m_max_duration(max_duration),
        m_max_transactions(max_transactions),
        m_now(std::move(now)),
        m_started(m_now())
    {}

    bool consume(const std::size_t recorded_weight)
    {
      if (m_transactions >= m_max_transactions ||
          m_now() - m_started >= m_max_duration)
        return false;
      ++m_transactions;
      m_weight = recorded_weight > (std::numeric_limits<std::size_t>::max)() - m_weight
        ? (std::numeric_limits<std::size_t>::max)()
        : m_weight + recorded_weight;
      return true;
    }

    std::size_t transactions() const noexcept { return m_transactions; }
    std::size_t weight() const noexcept { return m_weight; }

  private:
    const clock::duration m_max_duration;
    const std::size_t m_max_transactions;
    const now_function m_now;
    const clock::time_point m_started;
    std::size_t m_transactions = 0;
    std::size_t m_weight = 0;
  };
}
