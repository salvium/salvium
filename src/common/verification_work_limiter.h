#pragma once

#include <algorithm>
#include <chrono>
#include <functional>
#include <mutex>
#include <utility>

namespace tools
{
  // Accounts actual elapsed verification time instead of guessing work from
  // transaction bytes. The mutex intentionally serializes work using one
  // limiter so a burst cannot oversubscribe every compute worker before its
  // cost has been measured.
  class verification_work_limiter
  {
  public:
    using clock = std::chrono::steady_clock;
    using now_function = std::function<clock::time_point()>;

    explicit verification_work_limiter(
        std::chrono::microseconds capacity = std::chrono::seconds(1),
        unsigned refill_divisor = 2,
        now_function now = [] { return clock::now(); })
      : m_capacity(capacity),
        m_credit(capacity),
        m_refill_divisor((std::max)(1u, refill_divisor)),
        m_now(std::move(now)),
        m_last_accounting(m_now())
    {}

    template<typename F>
    bool run(F&& work)
    {
      const std::lock_guard<std::mutex> lock(m_mutex);
      const auto started = m_now();
      const auto idle = std::chrono::duration_cast<std::chrono::microseconds>(started - m_last_accounting);
      m_credit = (std::min)(m_capacity, m_credit + idle / m_refill_divisor);
      m_last_accounting = started;
      if (m_credit <= std::chrono::microseconds::zero())
        return false;

      try
      {
        work();
      }
      catch (...)
      {
        account_work(started);
        throw;
      }
      account_work(started);
      return true;
    }

  private:
    void account_work(const clock::time_point started)
    {
      const auto finished = m_now();
      m_credit -= std::chrono::duration_cast<std::chrono::microseconds>(finished - started);
      m_last_accounting = finished;
    }

    std::mutex m_mutex;
    const std::chrono::microseconds m_capacity;
    std::chrono::microseconds m_credit;
    const unsigned m_refill_divisor;
    const now_function m_now;
    clock::time_point m_last_accounting;
  };
}
