#ifndef THREADPOOL_BOOST_H
#define THREADPOOL_BOOST_H

#include <boost/thread.hpp>
#include <boost/asio.hpp>
#include <functional>
#include <vector>

class ThreadPool {
public:
  explicit ThreadPool(size_t numThreads);
  ~ThreadPool();
  
  void enqueue(std::function<void()> task);
  bool isStopping() const;
  void waitForCompletion();

private:
  boost::asio::io_service ioService;
  boost::asio::executor_work_guard<boost::asio::io_context::executor_type> workGuard;
  std::vector<boost::thread> workers;
};

#endif  // THREADPOOL_BOOST_H
