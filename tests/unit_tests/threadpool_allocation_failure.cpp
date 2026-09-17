// Copyright (c) 2026, Salvium contributors
// Distributed under the BSD 3-Clause license; see LICENSE.
#include "common/threadpool.h"
#include <cstdlib>
#include <memory>
#include <new>

// This executable is separate so allocation injection cannot affect other
// tests. A one-thread pool queues jobs without running background workers.
static thread_local bool fail_allocation = false;
void* operator new(std::size_t size)
{
  if (fail_allocation) throw std::bad_alloc();
  if (void* result = std::malloc(size ? size : 1)) return result;
  throw std::bad_alloc();
}
void* operator new[](std::size_t size) { return ::operator new(size); }
void operator delete(void* pointer) noexcept { std::free(pointer); }
void operator delete[](void* pointer) noexcept { std::free(pointer); }
void operator delete(void* pointer, std::size_t) noexcept { std::free(pointer); }
void operator delete[](void* pointer, std::size_t) noexcept { std::free(pointer); }

int main()
{
  for (const bool leaf : {false, true})
  {
    std::unique_ptr<tools::threadpool> pool(tools::threadpool::getNewForUnitTests(1));
    tools::threadpool::waiter waiter(*pool);
    unsigned queued = 0, completed = 0;
    bool injected = false;
    fail_allocation = true;
    try
    {
      for (; queued < 1024; ++queued)
        pool->submit(&waiter, [&] { ++completed; }, leaf);
    }
    catch (const std::bad_alloc&) { injected = true; }
    fail_allocation = false;
    // Exit directly on broken accounting: a failed waiter destructor would
    // otherwise hang forever waiting for a job that was never queued.
    if (!injected || waiter.get_num() != int(queued)) std::_Exit(1);
    if (!waiter.wait() || completed != queued || waiter.get_num() != 0) return 2;
    pool->submit(&waiter, [&] { ++completed; }, leaf);
    if (!waiter.wait() || completed != queued + 1) return 3;
  }
  return 0;
}
