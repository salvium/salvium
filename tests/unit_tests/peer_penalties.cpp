// Copyright (c) 2026, Salvium contributors
#include "gtest/gtest.h"
#include "p2p/peer_penalties.h"

TEST(peer_penalties, bounded_and_oldest_evicted)
{
  nodetool::peer_penalties penalties(3);
  penalties.ban("first", 500, false, 100);
  penalties.ban("second", 500, false, 100);
  penalties.ban("third", 500, false, 100);
  penalties.add_failure("first", 1, 10, 101);
  penalties.ban("fourth", 500, false, 101);
  EXPECT_EQ(3u, penalties.size());
  EXPECT_TRUE(penalties.blocked("first", 102));
  EXPECT_FALSE(penalties.blocked("second", 102));
  for (unsigned i = 0; i < 10000; ++i) penalties.add_failure(std::to_string(i), 1, 10, 102);
  EXPECT_EQ(3u, penalties.size());
}
TEST(peer_penalties, scores_expire_and_do_not_overflow)
{
  nodetool::peer_penalties penalties;
  EXPECT_FALSE(penalties.add_failure("peer", 10, 10, 100));
  EXPECT_FALSE(penalties.add_failure("peer", 1, 10, 3700));
  EXPECT_TRUE(penalties.add_failure("peer", UINT64_MAX, 10, 3701));
  penalties.prune(7301);
  EXPECT_EQ(0u, penalties.size());
}
TEST(peer_penalties, bans_expire_and_add_only_preserves_longer_duration)
{
  nodetool::peer_penalties penalties;
  penalties.ban("peer", 100, false, 100);
  penalties.ban("peer", 1, true, 110);
  time_t remaining = 0;
  EXPECT_TRUE(penalties.blocked("peer", 199, &remaining));
  EXPECT_EQ(1, remaining);
  EXPECT_FALSE(penalties.blocked("peer", 200));
  EXPECT_TRUE(penalties.bans(200).empty());
  penalties.ban("long", 10000, false, 100);
  penalties.prune(4000);
  EXPECT_TRUE(penalties.blocked("long", 4000));
  penalties.prune(10100);
  EXPECT_EQ(0u, penalties.size());
}
