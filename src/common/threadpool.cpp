// Copyright (c) 2017-2022, The Monero Project
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
#include "misc_log_ex.h"
#include "common/threadpool.h"

#include "cryptonote_config.h"
#include "common/util.h"

static __thread int depth = 0;
static __thread bool is_leaf = false;

namespace
{
  struct execution_scope
  {
    const int previous_depth = depth;
    const bool previous_leaf = is_leaf;
    explicit execution_scope(bool leaf) { ++depth; is_leaf = leaf; }
    ~execution_scope() { depth = previous_depth; is_leaf = previous_leaf; }
  };
}

namespace tools
{
threadpool::threadpool(unsigned int max_threads) : running(true), active(0) {
  create(max_threads);
}

threadpool::~threadpool() {
  destroy();
}

void threadpool::destroy() {
  try
  {
    const boost::unique_lock<boost::mutex> lock(mutex);
    running = false;
    has_work.notify_all();
  }
  catch (...)
  {
    // if the lock throws, we're just do it without a lock and hope,
    // since the alternative is terminate
    running = false;
    has_work.notify_all();
  }
  for (size_t i = 0; i<threads.size(); i++) {
    try { threads[i].join(); }
    catch (...) { /* ignore */ }
  }
  threads.clear();
}

void threadpool::recycle() {
  destroy();
  create(max);
}

void threadpool::create(unsigned int max_threads) {
  const boost::unique_lock<boost::mutex> lock(mutex);
  boost::thread::attributes attrs;
  attrs.set_stack_size(THREAD_STACK_SIZE);
  max = max_threads ? max_threads : tools::get_max_concurrency();
  size_t i = max ? max - 1 : 0;
  running = true;
  while(i--) {
    threads.push_back(boost::thread(attrs, boost::bind(&threadpool::run, this, nullptr)));
  }
}

void threadpool::submit(waiter *obj, std::function<void()> f, bool leaf) {
  CHECK_AND_ASSERT_THROW_MES(!is_leaf, "A leaf routine is using a thread pool");
  boost::unique_lock<boost::mutex> lock(mutex);
  if (!leaf && ((active == max && !queue.empty()) || depth > 0)) {
    // if all available threads are already running
    // and there's work waiting, just run in current thread
    lock.unlock();
    const execution_scope execution(leaf);
    f();
  } else {
    if (obj)
      obj->inc();
    try
    {
      if (leaf)
        queue.push_front({obj, std::move(f), leaf});
      else
        queue.push_back({obj, std::move(f), leaf});
    }
    catch (...)
    {
      if (obj) obj->dec();
      throw;
    }
    has_work.notify_one();
  }
}

unsigned int threadpool::get_max_concurrency() const {
  return max;
}

threadpool::waiter::~waiter()
{
  try
  {
    boost::unique_lock<boost::mutex> lock(mt);
    if (num)
      MERROR("wait should have been called before waiter dtor - waiting now");
  }
  catch (...) { /* ignore */ }
  try
  {
    wait();
  }
  catch (const std::exception &e)
  {
    /* ignored */
  }
}

bool threadpool::waiter::wait() {
  pool.run(this);
  boost::unique_lock<boost::mutex> lock(mt);
  while(num)
    cv.wait(lock);
  return !error();
}

int threadpool::waiter::get_num() {
  const boost::lock_guard lock(mt);
  return num;
}

void threadpool::waiter::inc() {
  const boost::unique_lock<boost::mutex> lock(mt);
  num++;
}

void threadpool::waiter::dec() {
  const boost::unique_lock<boost::mutex> lock(mt);
  num--;
  if (!num)
    cv.notify_all();
}

void threadpool::run(waiter *flush_waiter) {
  boost::unique_lock<boost::mutex> lock(mutex);
  while (running) {
    entry e;
    while(queue.empty() && running)
    {
      if (flush_waiter)
        return;
      has_work.wait(lock);
    }
    if (!running) break;
    if (flush_waiter && flush_waiter->get_num() == 0) break;

    active++;
    e = std::move(queue.front());
    queue.pop_front();
    lock.unlock();
    {
      const execution_scope execution(e.leaf);
      try { e.f(); }
      catch (const std::exception &ex)
      {
        if (e.wo) e.wo->set_error();
        try { MERROR("Exception in threadpool job: " << ex.what()); } catch (...) {}
      }
      catch (...)
      {
        if (e.wo) e.wo->set_error();
        try { MERROR("Unknown exception in threadpool job"); } catch (...) {}
      }
    }

    if (e.wo)
      e.wo->dec();
    lock.lock();
    active--;
  }
}
}
