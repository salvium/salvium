#include <iostream>
#include "threadpool_boost.h"

ThreadPool::ThreadPool(size_t numThreads)
    : workGuard(boost::asio::make_work_guard(ioService)) {
    for (size_t i = 0; i < numThreads; ++i) {
        workers.emplace_back([this]() {
          std::cerr << "Thread started" << std::endl;
          ioService.run();
          std::cerr << "Thread finished" << std::endl;
        });
    }
}

void ThreadPool::enqueue(std::function<void()> task) {
    ioService.post([task]() {
        try {
            task();  // Run the task
        } catch (const std::exception& e) {
            std::cerr << "Exception in thread pool task: " << e.what() << std::endl;
        } catch (...) {
            std::cerr << "Unknown exception in thread pool task!" << std::endl;
        }
    });
}

bool ThreadPool::isStopping() const {
    return ioService.stopped();  // Check if io_context has stopped
}

void ThreadPool::waitForCompletion() {
    std::cout << "Waiting for completion...\n";
    workGuard.reset();  // Allow ioService to stop when no more tasks
    ioService.run();   // Ensure no threads are left hanging

    for (auto &worker : workers) {
        if (worker.joinable()) worker.join();
    }
    std::cout << "All threads joined.\n";
}

ThreadPool::~ThreadPool() {
    waitForCompletion();
}
