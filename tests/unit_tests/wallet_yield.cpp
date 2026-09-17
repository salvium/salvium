// Copyright (c) 2026, Salvium
// SPDX-License-Identifier: BSD-3-Clause
#include "gtest/gtest.h"
#include "wallet/yield_summary.h"

TEST(wallet_yield, empty_history_clears_totals)
{
  tools::yield_totals totals{1, 2, 3};
  ASSERT_TRUE(tools::summarize_yield({}, 50000, 21600, totals));
  EXPECT_EQ(0, totals.completed);
  EXPECT_EQ(0, totals.staked);
  EXPECT_EQ(0, totals.accrued);
}

TEST(wallet_yield, totals_across_maturity_boundary)
{
  const std::vector<tools::yield_payout> payouts{
    {99, "completed", "SAL1", 100, 7},
    {100, "matures-next", "SAL1", 200, 11},
    {110, "active", "SAL1", 300, 13}};
  tools::yield_totals totals;
  ASSERT_TRUE(tools::summarize_yield(payouts, 120, 20, totals));
  EXPECT_EQ(7, totals.completed);
  EXPECT_EQ(500, totals.staked);
  EXPECT_EQ(24, totals.accrued);
  ASSERT_TRUE(tools::summarize_yield(payouts, 121, 20, totals));
  EXPECT_EQ(18, totals.completed);
  EXPECT_EQ(300, totals.staked);
  EXPECT_EQ(13, totals.accrued);
}

TEST(wallet_yield, maturity_uses_network_period_and_handles_height_limits)
{
  EXPECT_FALSE(tools::stake_completed(100, 121, 21600));
  EXPECT_FALSE(tools::stake_completed(100, 21700, 21600));
  EXPECT_TRUE(tools::stake_completed(100, 21701, 21600));
  EXPECT_FALSE(tools::stake_completed(100, 50, 20));
  const auto max = std::numeric_limits<uint64_t>::max();
  EXPECT_FALSE(tools::stake_completed(max - 10, max, 20));
  EXPECT_FALSE(tools::stake_completed(0, max, max));
}

TEST(wallet_yield, amount_overflow_never_publishes_partial_totals)
{
  const auto max = std::numeric_limits<uint64_t>::max();
  for (const bool completed : {false, true})
  {
    tools::yield_totals totals{1, 2, 3};
    EXPECT_FALSE(tools::summarize_yield({{1, "a", "SAL1", 0, max},
      {2, "b", "SAL1", 0, 1}}, completed ? 100 : 10, 20, totals));
    EXPECT_EQ(0, totals.completed);
    EXPECT_EQ(0, totals.staked);
    EXPECT_EQ(0, totals.accrued);
  }
  tools::yield_totals totals{1, 2, 3};
  EXPECT_FALSE(tools::summarize_yield({{1, "a", "SAL1", max, 0},
    {2, "b", "SAL1", 1, 0}}, 10, 20, totals));
  EXPECT_EQ(0, totals.staked);
  EXPECT_EQ(0, totals.accrued);
}
