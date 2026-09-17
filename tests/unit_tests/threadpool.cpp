// Copyright (c) 2018-2022, The Monero Project

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

#include <atomic>
#include "gtest/gtest.h"
#include "misc_language.h"
#include "common/threadpool.h"

TEST(threadpool, wait_nothing)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests());
  tools::threadpool::waiter waiter(*tpool);;
  waiter.wait();
}

TEST(threadpool, wait_waits)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests());
  tools::threadpool::waiter waiter(*tpool);
  std::atomic<bool> b(false);
  tpool->submit(&waiter, [&b](){ epee::misc_utils::sleep_no_w(1000); b = true; });
  ASSERT_FALSE(b);
  waiter.wait();
  ASSERT_TRUE(b);
}

TEST(threadpool, one_thread)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests(1));
  tools::threadpool::waiter waiter(*tpool);

  std::atomic<unsigned int> counter(0);
  for (size_t n = 0; n < 4096; ++n)
  {
    tpool->submit(&waiter, [&counter](){++counter;});
  }
  waiter.wait();
  ASSERT_EQ(counter, 4096);
}

TEST(threadpool, many_threads)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests(256));
  tools::threadpool::waiter waiter(*tpool);

  std::atomic<unsigned int> counter(0);
  for (size_t n = 0; n < 4096; ++n)
  {
    tpool->submit(&waiter, [&counter](){++counter;});
  }
  waiter.wait();
  ASSERT_EQ(counter, 4096);
}

static uint64_t fibonacci(std::shared_ptr<tools::threadpool> tpool, uint64_t n)
{
  if (n <= 1)
    return n;
  uint64_t f1, f2;
  tools::threadpool::waiter waiter(*tpool);
  tpool->submit(&waiter, [&tpool, &f1, n](){ f1 = fibonacci(tpool, n-1); });
  tpool->submit(&waiter, [&tpool, &f2, n](){ f2 = fibonacci(tpool, n-2); });
  waiter.wait();
  return f1 + f2;
}

TEST(threadpool, reentrency)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests(4));
  tools::threadpool::waiter waiter(*tpool);

  uint64_t f = fibonacci(tpool, 13);
  waiter.wait();
  ASSERT_EQ(f, 233);
}

TEST(threadpool, reentrancy)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests(4));
  tools::threadpool::waiter waiter(*tpool);

  uint64_t f = fibonacci(tpool, 13);
  waiter.wait();
  ASSERT_EQ(f, 233);
}

TEST(threadpool, leaf_throws)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests());
  tools::threadpool::waiter waiter(*tpool);

  bool thrown = false, executed = false;
  tpool->submit(&waiter, [&](){
    try { tpool->submit(&waiter, [&](){ executed = true; }); }
    catch(const std::exception &e) { thrown = true; }
  }, true);
  waiter.wait();
  ASSERT_TRUE(thrown);
  ASSERT_FALSE(executed);
}

TEST(threadpool, leaf_reentrancy)
{
  std::shared_ptr<tools::threadpool> tpool(tools::threadpool::getNewForUnitTests(4));
  tools::threadpool::waiter waiter(*tpool);

  std::atomic<int> counter(0);
  for (int i = 0; i < 1000; ++i)
  {
    tpool->submit(&waiter, [&](){
      tools::threadpool::waiter waiter(*tpool);
      for (int j = 0; j < 500; ++j)
      {
        tpool->submit(&waiter, [&](){ ++counter; }, true);
      }
      waiter.wait();
    });
  }
  waiter.wait();
  ASSERT_EQ(counter, 500000);
}

TEST(threadpool, waiter_leaves_unrelated_jobs_queued)
{
  // With no background worker, queue order and execution are deterministic.
  std::unique_ptr<tools::threadpool> pool(tools::threadpool::getNewForUnitTests(1));
  tools::threadpool::waiter light(*pool), heavy(*pool);
  int light_done = 0, heavy_done = 0;
  pool->submit(&light, [&] { ++light_done; });
  pool->submit(&heavy, [&] { ++heavy_done; });
  ASSERT_TRUE(light.wait());
  EXPECT_EQ(1, light_done);
  EXPECT_EQ(0, heavy_done);
  ASSERT_TRUE(heavy.wait());
  EXPECT_EQ(1, heavy_done);
}

TEST(threadpool, empty_waiter_does_not_run_unrelated_jobs)
{
  std::unique_ptr<tools::threadpool> pool(tools::threadpool::getNewForUnitTests(1));
  tools::threadpool::waiter heavy(*pool);
  int completed = 0;
  pool->submit(&heavy, [&] { ++completed; });
  {
    tools::threadpool::waiter empty(*pool);
    ASSERT_TRUE(empty.wait());
    EXPECT_EQ(0, completed);
  }
  EXPECT_EQ(0, completed);
  ASSERT_TRUE(heavy.wait());
  EXPECT_EQ(1, completed);
}

TEST(threadpool, exception_without_waiter_does_not_kill_worker)
{
  std::unique_ptr<tools::threadpool> pool(tools::threadpool::getNewForUnitTests(1));
  tools::threadpool::waiter done(*pool);
  bool completed = false;
  pool->submit(nullptr, [] { throw std::runtime_error("expected failure"); });
  pool->submit(&done, [&] { completed = true; });
  EXPECT_TRUE(done.wait());
  EXPECT_TRUE(completed);
}
TEST(threadpool, nonstandard_exception_releases_waiter)
{
  std::unique_ptr<tools::threadpool> pool(tools::threadpool::getNewForUnitTests(1));
  tools::threadpool::waiter failed(*pool), done(*pool);
  pool->submit(&failed, [] { throw 42; });
  EXPECT_FALSE(failed.wait());
  bool completed = false;
  pool->submit(&done, [&] { completed = true; });
  EXPECT_TRUE(done.wait());
  EXPECT_TRUE(completed);
}
TEST(threadpool, inline_exception_restores_thread_state)
{
  std::unique_ptr<tools::threadpool> pool(tools::threadpool::getNewForUnitTests(1));
  tools::threadpool::waiter done(*pool);
  bool caught = false, completed = false;
  pool->submit(&done, [&] {
    try { pool->submit(nullptr, [] { throw 42; }); }
    catch (int) { caught = true; }
    pool->submit(nullptr, [&] { completed = true; });
  });
  EXPECT_TRUE(done.wait());
  EXPECT_TRUE(caught);
  EXPECT_TRUE(completed);
  bool later = false;
  pool->submit(&done, [&] { later = true; });
  EXPECT_FALSE(later); // restored depth queues work submitted outside a worker
  EXPECT_EQ(1, done.get_num());
  EXPECT_TRUE(done.wait());
  EXPECT_TRUE(later);
}
