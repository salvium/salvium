// Copyright (c) 2026, The Salvium Project
// Distributed under the BSD 3-Clause license; see LICENSE.

#include "gtest/gtest.h"
#include "wallet/api/wallet.h"
#include "wallet/api/pending_transaction.h"
#include <boost/filesystem.hpp>
#include <chrono>
#include <condition_variable>
#include <functional>
#include <fstream>
#include <future>
#include <mutex>
#include <thread>

class WalletApiAccessorTest
{
public:
    static tools::wallet2 &core(Monero::WalletImpl &wallet) { return *wallet.m_wallet; }
    static bool enabled(Monero::WalletImpl &wallet) { return wallet.m_refreshEnabled; }
    static unsigned requests(Monero::WalletImpl &wallet) { return wallet.m_refreshLockRequests; }
    static bool rescan(Monero::WalletImpl &wallet) { return wallet.m_refreshShouldRescan; }
    static bool requested(Monero::WalletImpl &wallet)
    {
        boost::lock_guard<boost::mutex> lock(wallet.m_refreshRequestMutex);
        return wallet.m_refreshRequested;
    }
    static bool hasLogin(Monero::WalletImpl &wallet) { return bool(wallet.m_daemon_login); }
    static void lock(Monero::WalletImpl &wallet, const std::function<void()> &operation)
    {
        Monero::WalletImpl::RefreshLock lock(wallet);
        operation();
    }
    static void holdBackgroundMutex(Monero::WalletImpl &wallet, const std::function<void()> &operation)
    {
        boost::lock_guard<boost::mutex> lock(wallet.m_refreshMutex);
        operation();
    }
};

namespace
{
using namespace std::chrono_literals;

bool await(const std::function<bool()> &condition)
{
    const auto deadline = std::chrono::steady_clock::now() + 5s;
    while (!condition() && std::chrono::steady_clock::now() < deadline)
        std::this_thread::sleep_for(1ms);
    return condition();
}

struct Listener : Monero::WalletListener
{
    std::atomic<unsigned> completions{0};
    std::function<void()> on_refresh;
    void moneySpent(const std::string&, uint64_t) override {}
    void moneyReceived(const std::string&, uint64_t) override {}
    void unconfirmedMoneyReceived(const std::string&, uint64_t) override {}
    void newBlock(uint64_t) override {}
    void updated() override {}
    void refreshed() override
    {
        ++completions;
        if (on_refresh) on_refresh();
    }
};

struct Gate
{
    std::promise<void> entered;
    std::promise<void> released;
    std::shared_future<void> release = released.get_future().share();
    void block() { entered.set_value(); release.wait(); }
};

class WalletRefreshLock : public testing::Test
{
protected:
    boost::filesystem::path directory;
    std::unique_ptr<Monero::WalletImpl> wallet;
    Listener listener;

    void SetUp() override
    {
        directory = boost::filesystem::temp_directory_path() / boost::filesystem::unique_path("salvium-api-%%%%-%%%%");
        ASSERT_TRUE(boost::filesystem::create_directory(directory));
        wallet.reset(new Monero::WalletImpl(Monero::TESTNET, 1));
        ASSERT_TRUE(wallet->create((directory / "wallet").string(), "test-password", "English"));
        WalletApiAccessorTest::core(*wallet).set_offline(true);
        ASSERT_TRUE(wallet->init("127.0.0.1:1"));
        wallet->setAutoRefreshInterval(0);
        wallet->setListener(&listener);
    }
    void TearDown() override
    {
        wallet->pauseRefresh();
        wallet->close(false);
        wallet->setListener(nullptr);
        wallet.reset();
        boost::filesystem::remove_all(directory);
    }

    // Hold a real refresh callback while another public operation starts.
    void expectSerialized(const std::function<void()> &operation, bool background = false,
        const std::function<void()> &while_waiting = {})
    {
        Gate gate;
        std::atomic<bool> first{true};
        listener.on_refresh = [&] { if (first.exchange(false)) gate.block(); };
        auto entered = gate.entered.get_future();
        std::future<bool> refresh;
        if (background) wallet->startRefresh();
        else refresh = std::async(std::launch::async, [&] { return wallet->refresh(); });
        const bool started = entered.wait_for(5s) == std::future_status::ready;
        auto mutation = std::async(std::launch::async, operation);
        const bool queued = await([&] { return WalletApiAccessorTest::requests(*wallet) != 0; });
        const auto state = mutation.wait_for(0ms);
        if (while_waiting) while_waiting();
        gate.released.set_value();
        mutation.get();
        if (refresh.valid()) refresh.get();
        wallet->pauseRefresh();
        EXPECT_TRUE(started);
        EXPECT_TRUE(queued);
        EXPECT_EQ(std::future_status::timeout, state);
        // Synchronize before destroying the captured callback state.
        WalletApiAccessorTest::lock(*wallet, [&] { listener.on_refresh = {}; });
    }
};

TEST_F(WalletRefreshLock, StoreWaitsForSynchronousRefreshAndPersistsData)
{
    wallet->setSubaddressLabel(0, 0, "saved after refresh");
    bool stored = false;
    expectSerialized([&] { stored = wallet->store(""); });
    EXPECT_TRUE(stored);
    ASSERT_TRUE(wallet->close(false));
    Monero::WalletImpl reopened(Monero::TESTNET, 1);
    ASSERT_TRUE(reopened.open((directory / "wallet").string(), "test-password"));
    EXPECT_EQ("saved after refresh", reopened.getSubaddressLabel(0, 0));
}

TEST_F(WalletRefreshLock, StoreWaitsForBackgroundRefresh)
{
    bool stored = false;
    expectSerialized([&] { stored = wallet->store(""); }, true);
    EXPECT_TRUE(stored);
}

TEST_F(WalletRefreshLock, TransactionCreationWaitsForRefresh)
{
    expectSerialized([&] {
        std::unique_ptr<Monero::PendingTransaction> tx(wallet->createTransaction("invalid", "", uint64_t{1}, 0, "SAL1", false));
        EXPECT_NE(Monero::PendingTransaction::Status_Ok, tx->status());
    });
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
}

TEST_F(WalletRefreshLock, PendingFileCommitWaitsForRefresh)
{
    Monero::PendingTransactionImpl pending(*wallet);
    const auto path = (directory / "pending").string();
    expectSerialized([&] { EXPECT_TRUE(pending.commit(path)); });
    EXPECT_TRUE(boost::filesystem::exists(path));
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
}

TEST_F(WalletRefreshLock, SubmitWaitsBeforeReadingFile)
{
    expectSerialized([&] { EXPECT_FALSE(wallet->submitTransaction((directory / "missing").string())); });
}

TEST_F(WalletRefreshLock, FileCommitRechecksOverwriteAfterWaiting)
{
    Monero::PendingTransactionImpl pending(*wallet);
    const auto path = (directory / "pending").string();
    expectSerialized([&] { EXPECT_FALSE(pending.commit(path)); }, false, [&] {
        std::ofstream file(path);
        file << "do not overwrite";
    });
    std::ifstream file(path);
    std::string text((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
    EXPECT_EQ("do not overwrite", text);
}

TEST_F(WalletRefreshLock, CloseWaitsForRefresh)
{
    bool closed = false;
    expectSerialized([&] { closed = wallet->close(false); });
    EXPECT_TRUE(closed);
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
}

TEST_F(WalletRefreshLock, AsyncRequestIsNotLostDuringRefresh)
{
    Gate gate;
    std::atomic<bool> first{true};
    listener.on_refresh = [&] { if (first.exchange(false)) gate.block(); };
    auto entered = gate.entered.get_future();
    wallet->startRefresh();
    const bool started = entered.wait_for(5s) == std::future_status::ready;
    wallet->refreshAsync();
    gate.released.set_value();
    EXPECT_TRUE(started);
    EXPECT_TRUE(await([&] { return listener.completions >= 2; }));
    wallet->pauseRefresh();
    WalletApiAccessorTest::lock(*wallet, [&] { listener.on_refresh = {}; });
}

TEST_F(WalletRefreshLock, OverlappingOperationsPreserveRefreshState)
{
    wallet->startRefresh();
    Gate first, second;
    auto first_entered = first.entered.get_future();
    auto second_entered = second.entered.get_future();
    auto a = std::async(std::launch::async, [&] { WalletApiAccessorTest::lock(*wallet, [&] { first.block(); }); });
    const bool started = first_entered.wait_for(5s) == std::future_status::ready;
    auto b = std::async(std::launch::async, [&] { WalletApiAccessorTest::lock(*wallet, [&] { second.block(); }); });
    const bool overlap = await([&] { return WalletApiAccessorTest::requests(*wallet) == 2; });
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
    first.released.set_value();
    a.get();
    const bool second_started = second_entered.wait_for(5s) == std::future_status::ready;
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
    second.released.set_value();
    b.get();
    EXPECT_TRUE(started && overlap && second_started);
    EXPECT_TRUE(WalletApiAccessorTest::enabled(*wallet));
}

TEST_F(WalletRefreshLock, PauseDuringOperationIsPreserved)
{
    wallet->startRefresh();
    WalletApiAccessorTest::lock(*wallet, [&] { wallet->pauseRefresh(); });
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
    EXPECT_FALSE(wallet->submitTransaction((directory / "missing").string()));
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
}

TEST_F(WalletRefreshLock, StartDuringOperationIsDeferred)
{
    WalletApiAccessorTest::lock(*wallet, [&] {
        wallet->startRefresh();
        EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
    });
    EXPECT_TRUE(WalletApiAccessorTest::enabled(*wallet));
}

TEST_F(WalletRefreshLock, DeferredRefreshDoesNotEmitCompletionOrLoseRescan)
{
    std::future<bool> store;
    bool queued = false;
    WalletApiAccessorTest::holdBackgroundMutex(*wallet, [&] {
        store = std::async(std::launch::async, [&] { return wallet->store(""); });
        queued = await([&] { return WalletApiAccessorTest::requests(*wallet) == 1; });
        EXPECT_FALSE(wallet->refresh());
        EXPECT_FALSE(wallet->rescanBlockchain());
        EXPECT_TRUE(WalletApiAccessorTest::rescan(*wallet));
        EXPECT_EQ(0, listener.completions);
    });
    EXPECT_TRUE(queued);
    EXPECT_TRUE(store.get());
    EXPECT_TRUE(WalletApiAccessorTest::rescan(*wallet));
    EXPECT_EQ(Monero::Wallet::Status_Ok, wallet->status());
}

TEST_F(WalletRefreshLock, NestedOperationsFailWithoutDeadlocking)
{
    WalletApiAccessorTest::lock(*wallet, [&] {
        EXPECT_FALSE(wallet->store(""));
        EXPECT_FALSE(wallet->close(false));
        EXPECT_FALSE(wallet->refresh());
        EXPECT_FALSE(wallet->rescanBlockchain());
        EXPECT_FALSE(wallet->submitTransaction("missing"));
        Monero::PendingTransactionImpl pending(*wallet);
        EXPECT_FALSE(pending.commit());
        std::unique_ptr<Monero::PendingTransaction> stake(wallet->createStakeTransaction(1, 0, Monero::PendingTransaction::Priority_Default, 0, {}));
        EXPECT_NE(Monero::PendingTransaction::Status_Ok, stake->status());
        std::unique_ptr<Monero::PendingTransaction> token(wallet->createCreateTokenTransaction("TEST", 1, "", "Test", 0, "", "", 0, {}));
        EXPECT_NE(Monero::PendingTransaction::Status_Ok, token->status());
    });
}

TEST_F(WalletRefreshLock, MutationsFromRefreshCallbacksAreRejected)
{
    bool called = false;
    listener.on_refresh = [&] {
        called = true;
        EXPECT_FALSE(wallet->store(""));
        EXPECT_FALSE(wallet->close(false));
        EXPECT_FALSE(wallet->refresh());
        EXPECT_FALSE(wallet->rescanBlockchain());
        Monero::PendingTransactionImpl pending(*wallet);
        EXPECT_FALSE(pending.commit());
        EXPECT_FALSE(wallet->submitTransaction("missing"));
        std::unique_ptr<Monero::PendingTransaction> stake(wallet->createStakeTransaction(1, 0, Monero::PendingTransaction::Priority_Default, 0, {}));
        EXPECT_NE(Monero::PendingTransaction::Status_Ok, stake->status());
    };
    wallet->refresh();
    EXPECT_TRUE(called);
}

TEST_F(WalletRefreshLock, CoreSuspensionSurvivesRefreshEntry)
{
    auto &core = WalletApiAccessorTest::core(*wallet);
    core.suspend_refresh();
    EXPECT_FALSE(core.refresh_with_status(false));
    uint64_t blocks = 42;
    bool received = true, ok = true;
    EXPECT_FALSE(core.refresh(false, blocks, received, ok));
    EXPECT_FALSE(ok);
    EXPECT_EQ(0, blocks);
    EXPECT_FALSE(received);
    core.resume_refresh();
    EXPECT_TRUE(core.refresh_with_status(false));
}

TEST_F(WalletRefreshLock, CrossWalletCallbackMutationIsRejected)
{
    Monero::WalletImpl other(Monero::TESTNET, 1);
    bool called = false;
    listener.on_refresh = [&] {
        called = true;
        EXPECT_FALSE(other.store(""));
        EXPECT_FALSE(other.close(false));
        EXPECT_FALSE(other.refresh());
        Monero::PendingTransactionImpl pending(other);
        EXPECT_FALSE(pending.commit((directory / "cross-wallet").string()));
        EXPECT_FALSE(boost::filesystem::exists(directory / "cross-wallet"));
    };
    wallet->refresh();
    EXPECT_TRUE(called);
    listener.on_refresh = {};
}

TEST_F(WalletRefreshLock, EmptyCommitDoesNotResumePausedRefresh)
{
    Monero::PendingTransactionImpl pending(*wallet);
    EXPECT_TRUE(pending.commit());
    EXPECT_FALSE(WalletApiAccessorTest::enabled(*wallet));
    EXPECT_EQ(0, WalletApiAccessorTest::requests(*wallet));
}

TEST_F(WalletRefreshLock, SwitchingToUnauthenticatedNodeClearsLogin)
{
    ASSERT_TRUE(wallet->init("127.0.0.1:1", 0, "old-user", "old-password"));
    ASSERT_TRUE(WalletApiAccessorTest::hasLogin(*wallet));
    ASSERT_TRUE(WalletApiAccessorTest::core(*wallet).get_daemon_login());
    ASSERT_TRUE(wallet->init("127.0.0.1:2"));
    EXPECT_FALSE(WalletApiAccessorTest::hasLogin(*wallet));
    EXPECT_FALSE(WalletApiAccessorTest::core(*wallet).get_daemon_login());
}
}
