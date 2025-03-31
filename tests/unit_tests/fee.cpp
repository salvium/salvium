// Copyright (c) 2014-2022, The Monero Project
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
// 
// Parts of this file are originally copyright (c) 2012-2013 The Cryptonote developers

#include "gtest/gtest.h"

#include "cryptonote_core/blockchain.h"

using namespace cryptonote;

namespace
{
  static uint64_t clamp_fee(uint64_t fee)
  {
    static uint64_t mask = 0;
    if (mask == 0)
    {
      mask = 1;
      for (size_t n = PER_KB_FEE_QUANTIZATION_DECIMALS; n < CRYPTONOTE_DISPLAY_DECIMAL_POINT; ++n)
        mask *= 10;
    }
    return (fee + mask - 1) / mask * mask;
  }

  //--------------------------------------------------------------------------------------------------------------------
  class fee : public ::testing::Test
  {
  };

  // try with blocks ~ 1GB. Passing 2 GB will break on 32 bit systems

  TEST_F(fee, 10SAL)
  {
    // CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 and lower are clamped
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2, 3), clamp_fee(32));
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 / 2, 3), clamp_fee(32));
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 / 100, 3), clamp_fee(32));
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, 1, 3), 32);

    // higher is inverse proportional
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 2, 3), 32);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 10, 3), 8);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 1000, 3), 0);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(1000000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 20000ull, 3), 0);
  }

  TEST_F(fee, 1SAL)
  {
    // CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 and lower are clamped
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2, 3), 3);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 / 2, 3), 3);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 / 100, 3), 3);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, 1, 3), 3);

    // higher is inverse proportional
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 2, 3), 3);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 10, 3), 0);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 1000, 3), 0);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(100000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 20000ull, 3), 0);
  }

  TEST_F(fee, dot3SAL)
  {
    // CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 and lower are clamped
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2, 3), 1);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 / 2, 3), 1);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 / 100, 3), 1);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, 1, 3), 1);

    // higher is inverse proportional
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 2, 3), 1);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 10, 3), 0);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 1000, 3), 0);
    ASSERT_EQ(Blockchain::get_dynamic_base_fee(30000000, CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 20000ull, 3), 0);
  }

  static bool is_more_or_less(double x, double y)
  {
    return fabs(y - x) < 0.001;
  }

  static const double MAX_MULTIPLIER = 166.f;

  TEST_F(fee, double_at_full)
  {
    static const uint64_t block_rewards[] = {
      2000000000ull, // 20 SAL
      1300000000ull,
      100000000ull,
      60000000ull, // .6 SAL, minimum reward per block at 2min
      30000000ull, // .3 SAL, minimum reward per block at 1min
    };
    static const uint64_t median_block_weights[] = {
      CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2,
      CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 2,
      CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 10,
      CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 1000,
      // with clamping, the formula does not hold for such large blocks and small fees
      // CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 * 20000ull
    };

    for (uint64_t block_reward: block_rewards)
    {
      for (uint64_t median_block_weight: median_block_weights)
      {
        const auto first_param = Blockchain::get_dynamic_base_fee(block_reward, median_block_weight, 3) * (median_block_weight / 1024.) * MAX_MULTIPLIER / (double)block_reward;
        const auto second_param = (0.00031374028 * 1000) / 1024;
        ASSERT_TRUE(is_more_or_less(first_param, second_param));
      }
    }
  }
}
