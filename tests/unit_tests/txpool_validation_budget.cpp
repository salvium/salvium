#include "gtest/gtest.h"

#include <chrono>
#include <limits>

#include "cryptonote_core/txpool_validation_budget.h"

TEST(txpool_validation_budget, enforces_elapsed_work_boundary)
{
  using budget_type = cryptonote::txpool_validation_budget;
  budget_type::clock::time_point now{};
  budget_type budget{std::chrono::seconds(30), 100, [&] { return now; }};

  EXPECT_TRUE(budget.consume(60));
  now += std::chrono::seconds(29);
  EXPECT_TRUE(budget.consume(40));
  now += std::chrono::seconds(1);
  EXPECT_FALSE(budget.consume(1));
  EXPECT_EQ(2u, budget.transactions());
  EXPECT_EQ(100u, budget.weight());
}

TEST(txpool_validation_budget, enforces_transaction_boundary)
{
  using budget_type = cryptonote::txpool_validation_budget;
  budget_type::clock::time_point now{};
  budget_type budget{std::chrono::hours(1), 2, [&] { return now; }};

  EXPECT_TRUE(budget.consume(10));
  EXPECT_TRUE(budget.consume(20));
  EXPECT_FALSE(budget.consume(30));
  EXPECT_EQ(2u, budget.transactions());
  EXPECT_EQ(30u, budget.weight());
}

TEST(txpool_validation_budget, reporting_weight_saturates_without_wrapping)
{
  using budget_type = cryptonote::txpool_validation_budget;
  budget_type::clock::time_point now{};
  budget_type budget{std::chrono::hours(1), 2, [&] { return now; }};

  EXPECT_TRUE(budget.consume((std::numeric_limits<std::size_t>::max)()));
  EXPECT_TRUE(budget.consume(1));
  EXPECT_EQ((std::numeric_limits<std::size_t>::max)(), budget.weight());
}
