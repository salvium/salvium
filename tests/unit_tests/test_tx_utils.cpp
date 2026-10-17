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

#include <limits>
#include <vector>

#include "common/util.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_basic/tx_extra.h"
#include "cryptonote_core/cryptonote_tx_utils.h"

namespace
{
  uint64_t const TEST_FEE = 5000000000; // 5 * 10^9
}

TEST(parse_tx_extra, handles_empty_extra)
{
  std::vector<uint8_t> extra;
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_TRUE(tx_extra_fields.empty());
}

TEST(parse_tx_extra, handles_padding_only_size_1)
{
  const uint8_t extra_arr[] = {0};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(1, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_padding), tx_extra_fields[0].type());
  ASSERT_EQ(1, boost::get<cryptonote::tx_extra_padding>(tx_extra_fields[0]).size);
}

TEST(parse_tx_extra, handles_padding_only_size_2)
{
  const uint8_t extra_arr[] = {0, 0};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(1, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_padding), tx_extra_fields[0].type());
  ASSERT_EQ(2, boost::get<cryptonote::tx_extra_padding>(tx_extra_fields[0]).size);
}

TEST(parse_tx_extra, handles_padding_only_max_size)
{
  std::vector<uint8_t> extra(TX_EXTRA_NONCE_MAX_COUNT, 0);
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(1, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_padding), tx_extra_fields[0].type());
  ASSERT_EQ(TX_EXTRA_NONCE_MAX_COUNT, boost::get<cryptonote::tx_extra_padding>(tx_extra_fields[0]).size);
}

TEST(parse_tx_extra, handles_padding_only_exceed_max_size)
{
  std::vector<uint8_t> extra(TX_EXTRA_NONCE_MAX_COUNT + 1, 0);
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_FALSE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
}

TEST(parse_tx_extra, handles_invalid_padding_only)
{
  std::vector<uint8_t> extra(2, 0);
  extra[1] = 42;
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_FALSE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
}

TEST(parse_tx_extra, handles_pub_key_only)
{
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(1, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
}

TEST(parse_tx_extra, handles_extra_nonce_only)
{
  const uint8_t extra_arr[] = {2, 1, 42};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(1, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_nonce), tx_extra_fields[0].type());
  cryptonote::tx_extra_nonce extra_nonce = boost::get<cryptonote::tx_extra_nonce>(tx_extra_fields[0]);
  ASSERT_EQ(1, extra_nonce.nonce.size());
  ASSERT_EQ(42, extra_nonce.nonce[0]);
}

TEST(parse_tx_extra, handles_pub_key_and_padding)
{
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(2, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
  ASSERT_EQ(typeid(cryptonote::tx_extra_padding), tx_extra_fields[1].type());
}

TEST(parse_and_validate_tx_extra, is_valid_tx_extra_parsed)
{
  cryptonote::transaction tx = AUTO_VAL_INIT(tx);
  cryptonote::account_base acc;
  acc.generate();
  // 本地修复（FINDINGS #17）：construct_miner_tx 新增 miner_reward_tx_key 参数
  crypto::public_key miner_reward_tx_key{};
  cryptonote::blobdata b = "dsdsdfsdfsf";
  ASSERT_TRUE(cryptonote::construct_miner_tx(0, 0, 10000000000000, 1000, TEST_FEE, acc.get_keys().m_account_address, miner_reward_tx_key, tx, cryptonote::network_type::FAKECHAIN, {}, b, 1));
  crypto::public_key tx_pub_key = cryptonote::get_tx_pub_key_from_extra(tx);
  ASSERT_NE(tx_pub_key, crypto::null_pkey);
}
TEST(parse_and_validate_tx_extra, fails_on_big_extra_nonce)
{
  cryptonote::transaction tx = AUTO_VAL_INIT(tx);
  cryptonote::account_base acc;
  acc.generate();
  crypto::public_key miner_reward_tx_key{};
  cryptonote::blobdata b(TX_EXTRA_NONCE_MAX_COUNT + 1, 0);
  ASSERT_FALSE(cryptonote::construct_miner_tx(0, 0, 10000000000000, 1000, TEST_FEE, acc.get_keys().m_account_address, miner_reward_tx_key, tx, cryptonote::network_type::FAKECHAIN, {}, b, 1));
}
TEST(parse_and_validate_tx_extra, fails_on_wrong_size_in_extra_nonce)
{
  cryptonote::transaction tx = AUTO_VAL_INIT(tx);
  tx.extra.resize(20, 0);
  tx.extra[0] = TX_EXTRA_NONCE;
  tx.extra[1] = 255;
  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_FALSE(cryptonote::parse_tx_extra(tx.extra, tx_extra_fields));
}
TEST(validate_parse_amount_case, validate_parse_amount)
{
  uint64_t res = 0;
  bool r = cryptonote::parse_amount(res, "0.0001");
  ASSERT_TRUE(r);
  ASSERT_EQ(res, 10000);

  r = cryptonote::parse_amount(res, "100.0001");
  ASSERT_TRUE(r);
  ASSERT_EQ(res, 10000010000);

  r = cryptonote::parse_amount(res, "000.0000");
  ASSERT_TRUE(r);
  ASSERT_EQ(res, 0);

  r = cryptonote::parse_amount(res, "0");
  ASSERT_TRUE(r);
  ASSERT_EQ(res, 0);


  r = cryptonote::parse_amount(res, "   100.0001    ");
  ASSERT_TRUE(r);
  ASSERT_EQ(res, 10000010000);

  r = cryptonote::parse_amount(res, "   100.0000    ");
  ASSERT_TRUE(r);
  ASSERT_EQ(res, 10000000000);

  r = cryptonote::parse_amount(res, "   100. 0000    ");
  ASSERT_FALSE(r);

  r = cryptonote::parse_amount(res, "100. 0000");
  ASSERT_FALSE(r);

  r = cryptonote::parse_amount(res, "100 . 0000");
  ASSERT_FALSE(r);

  r = cryptonote::parse_amount(res, "100.00 00");
  ASSERT_FALSE(r);

  r = cryptonote::parse_amount(res, "1 00.00 00");
  ASSERT_FALSE(r);
}

TEST(sort_tx_extra, empty)
{
  std::vector<uint8_t> extra, sorted;
  ASSERT_TRUE(cryptonote::sort_tx_extra(extra, sorted));
  ASSERT_EQ(extra, sorted);
}

TEST(sort_tx_extra, pubkey)
{
  std::vector<uint8_t> sorted;
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  ASSERT_TRUE(cryptonote::sort_tx_extra(extra, sorted));
  ASSERT_EQ(extra, sorted);
}

TEST(sort_tx_extra, two_pubkeys)
{
  std::vector<uint8_t> sorted;
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230,
    1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  ASSERT_TRUE(cryptonote::sort_tx_extra(extra, sorted));
  ASSERT_EQ(extra, sorted);
}

TEST(sort_tx_extra, keep_order)
{
  std::vector<uint8_t> sorted;
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230,
    2, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  ASSERT_TRUE(cryptonote::sort_tx_extra(extra, sorted));
  ASSERT_EQ(extra, sorted);
}

TEST(sort_tx_extra, switch_order)
{
  std::vector<uint8_t> sorted;
  const uint8_t extra_arr[] = {2, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230};
  const uint8_t expected_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230,
    2, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  ASSERT_TRUE(cryptonote::sort_tx_extra(extra, sorted));
  std::vector<uint8_t> expected(&expected_arr[0], &expected_arr[0] + sizeof(expected_arr));
  ASSERT_EQ(expected, sorted);
}

TEST(sort_tx_extra, invalid)
{
  std::vector<uint8_t> sorted;
  const uint8_t extra_arr[] = {1};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  ASSERT_FALSE(cryptonote::sort_tx_extra(extra, sorted));
}

TEST(sort_tx_extra, invalid_suffix_strict)
{
  std::vector<uint8_t> sorted;
  const uint8_t extra_arr[] = {2, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  ASSERT_FALSE(cryptonote::sort_tx_extra(extra, sorted));
}

TEST(sort_tx_extra, invalid_suffix_partial)
{
  std::vector<uint8_t> sorted;
  const uint8_t extra_arr[] = {2, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1};
  const uint8_t expected_arr[] = {2, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));
  ASSERT_TRUE(cryptonote::sort_tx_extra(extra, sorted, true));
  std::vector<uint8_t> expected(&expected_arr[0], &expected_arr[0] + sizeof(expected_arr));
  ASSERT_EQ(sorted, expected);
}

TEST(remove_field_from_tx_extra, remove_first)
{
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230, 2, 1, 42};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));

  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(2, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
  ASSERT_EQ(typeid(cryptonote::tx_extra_nonce), tx_extra_fields[1].type());

  tx_extra_fields.clear();
  ASSERT_TRUE(cryptonote::remove_field_from_tx_extra(extra, typeid(cryptonote::tx_extra_pub_key)));
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(1, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_nonce), tx_extra_fields[0].type());
}

TEST(remove_field_from_tx_extra, remove_last)
{
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230, 2, 1, 42};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));

  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(2, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
  ASSERT_EQ(typeid(cryptonote::tx_extra_nonce), tx_extra_fields[1].type());

  tx_extra_fields.clear();
  ASSERT_TRUE(cryptonote::remove_field_from_tx_extra(extra, typeid(cryptonote::tx_extra_nonce)));
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(1, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
}

TEST(remove_field_from_tx_extra, remove_middle)
{
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
    80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230, 2, 1, 42, 1, 30, 208, 98, 162, 133, 64, 85, 83, 112,
    91, 188, 89, 211, 24, 131, 39, 154, 22, 228, 80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));

  std::vector<cryptonote::tx_extra_field> tx_extra_fields;
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(3, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
  ASSERT_EQ(typeid(cryptonote::tx_extra_nonce), tx_extra_fields[1].type());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[2].type());

  tx_extra_fields.clear();
  ASSERT_TRUE(cryptonote::remove_field_from_tx_extra(extra, typeid(cryptonote::tx_extra_nonce)));
  ASSERT_TRUE(cryptonote::parse_tx_extra(extra, tx_extra_fields));
  ASSERT_EQ(2, tx_extra_fields.size());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
  ASSERT_EQ(typeid(cryptonote::tx_extra_pub_key), tx_extra_fields[0].type());
}

TEST(remove_field_from_tx_extra, invalid_varint)
{
  const uint8_t extra_arr[] = {1, 30, 208, 98, 162, 133, 64, 85, 83, 112, 91, 188, 89, 211, 24, 131, 39, 154, 22, 228,
                               80, 63, 198, 141, 173, 111, 244, 183, 4, 149, 186, 140, 230, 2, 0x80, 0};
  std::vector<uint8_t> extra(&extra_arr[0], &extra_arr[0] + sizeof(extra_arr));

  ASSERT_FALSE(cryptonote::remove_field_from_tx_extra(extra, typeid(cryptonote::tx_extra_nonce)));
  ASSERT_EQ(sizeof(extra_arr), extra.size());
}

// ---------------------------------------------------------------------------
// Regression tests for the conversion maths resurrected from the upstream
// comment block in cryptonote_tx_utils.cpp, plus the three corrections applied
// to it:
//   F1 - the rate is taken from the moving-average price, not the spot price.
//   F2 - a record without a price for the destination asset must be rejected:
//        the accessor returns 0 for an unknown asset, so the upstream draft
//        divided by zero here (this test crashes without the guard).
//   F3 - the allowlist is closed and aligned with oracle::ASSET_TYPES, i.e.
//        SAL<->SAL1; the upstream draft named "VSD", which does not exist.
// ---------------------------------------------------------------------------
namespace
{
  // spot and moving-average prices are passed separately so that the choice of
  // price actually used by the conversion can be asserted.
  oracle::pricing_record make_record(const uint64_t sal_spot, const uint64_t sal_ma,
                                     const uint64_t sal1_spot, const uint64_t sal1_ma,
                                     const bool with_sal1 = true)
  {
    oracle::pricing_record pr;
    oracle::asset_data sal;
    sal.asset_type = "SAL";
    sal.spot_price = sal_spot;
    sal.ma_price = sal_ma;
    pr.assets.push_back(sal);
    if (with_sal1)
    {
      oracle::asset_data sal1;
      sal1.asset_type = "SAL1";
      sal1.spot_price = sal1_spot;
      sal1.ma_price = sal1_ma;
      pr.assets.push_back(sal1);
    }
    return pr;
  }

  const std::map<std::string, uint64_t> SUPPLY = {{"SAL", 1000000 * COIN}, {"SAL1", 1000000 * COIN}};
}

TEST(conversion, rejects_identical_assets)
{
  uint64_t minted = 0, slippage = 0;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  ASSERT_FALSE(cryptonote::calculate_conversion("SAL", "SAL", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
}

TEST(conversion, rejects_empty_dest_asset)
{
  uint64_t minted = 0, slippage = 0;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  ASSERT_FALSE(cryptonote::calculate_conversion("SAL", "", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
}

TEST(conversion, rejects_assets_outside_the_closed_allowlist)
{
  uint64_t minted = 0, slippage = 0;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  // F3: the upstream guard only rejected SAL->!VSD and VSD->!SAL, so any other
  // from_asset fell through into the price arithmetic instead of being denied.
  ASSERT_FALSE(cryptonote::calculate_conversion("FOO", "SAL1", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
  ASSERT_FALSE(cryptonote::calculate_conversion("SAL", "FOO", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
  ASSERT_FALSE(cryptonote::calculate_conversion("BURN", "SAL", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
}

TEST(conversion, rejects_a_record_without_a_dest_price)
{
  uint64_t minted = 0, slippage = 0;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN, /*with_sal1=*/false);
  // F2: the accessor returns 0 for an absent asset, so without the missing-price
  // guard this call divides by zero.
  ASSERT_FALSE(cryptonote::calculate_conversion("SAL", "SAL1", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
}

TEST(conversion, rejects_a_record_that_only_carries_spot_prices)
{
  uint64_t minted = 0, slippage = 0;
  // fail-safe half of F1: if an oracle record carries spot prices but no moving
  // average, conversions are refused rather than silently settled at the spot price.
  const oracle::pricing_record pr = make_record(4 * COIN, 0, COIN, 0);
  ASSERT_FALSE(cryptonote::calculate_conversion("SAL", "SAL1", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
}

TEST(conversion, rejects_a_burn_destination)
{
  uint64_t minted = 0, slippage = 0;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  ASSERT_FALSE(cryptonote::calculate_conversion("SAL", "BURN", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
}

TEST(conversion, sal_to_sal1_applies_rate_and_slippage)
{
  uint64_t minted = 0, slippage = 0;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  ASSERT_TRUE(cryptonote::calculate_conversion("SAL", "SAL1", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
  ASSERT_EQ(COIN, slippage);              // flat 1/32 of the burnt amount
  ASSERT_EQ(124 * COIN, minted);          // (32 - 1) at a rate of 4
  // the reverse direction is admitted by the allowlist
  uint64_t rminted = 0, rslippage = 0;
  ASSERT_TRUE(cryptonote::calculate_conversion("SAL1", "SAL", 32 * COIN, COIN, rminted, rslippage, SUPPLY, pr, 14));
  ASSERT_EQ(31 * COIN / 4, rminted);      // (32 - 1) at a rate of 1/4, truncated
}

TEST(conversion, uses_the_moving_average_and_not_the_spot_price)
{
  uint64_t minted = 0, slippage = 0;
  // spot says 8, the moving average says 2: the rate must follow the average.
  const oracle::pricing_record pr = make_record(8 * COIN, 2 * COIN, COIN, COIN);
  ASSERT_TRUE(cryptonote::calculate_conversion("SAL", "SAL1", 32 * COIN, COIN, minted, slippage, SUPPLY, pr, 14));
  ASSERT_EQ(62 * COIN, minted);           // 31 * 2, not 31 * 8
}

TEST(conversion, slippage_over_limit_mints_nothing_but_reports_success)
{
  uint64_t minted = 0, slippage = 0;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  // Documented upstream behaviour (finding F6): the call succeeds with minted == 0,
  // so a consensus caller MUST treat minted == 0 as a rejection, otherwise the burnt
  // funds are destroyed with nothing minted in return.
  ASSERT_TRUE(cryptonote::calculate_conversion("SAL", "SAL1", 32 * COIN, 0, minted, slippage, SUPPLY, pr, 14));
  ASSERT_EQ(COIN, slippage);
  ASSERT_EQ(0u, minted);
}

TEST(conversion, minimum_slippage_limit_is_the_protocol_fee)
{
  // 1/32 of the burnt amount - exactly the value calculate_conversion() retains.
  ASSERT_EQ(0u, cryptonote::convert_minimum_slippage_limit(0));
  ASSERT_EQ(3u, cryptonote::convert_minimum_slippage_limit(99));
  ASSERT_EQ(3125000u, cryptonote::convert_minimum_slippage_limit(COIN));
  ASSERT_EQ(COIN, cryptonote::convert_minimum_slippage_limit(32 * COIN));
}

TEST(conversion, percent_limit_is_floored_to_the_protocol_fee)
{
  const uint64_t burnt = 100 * COIN;
  // 0 means "no preference" and yields exactly the protocol fee.
  ASSERT_EQ(burnt >> 5, cryptonote::convert_slippage_limit_from_percent(burnt, 0));
  // Anything below 3.125% would make the transaction unmineable, so it is raised to the fee.
  ASSERT_EQ(burnt >> 5, cryptonote::convert_slippage_limit_from_percent(burnt, 1));
  ASSERT_EQ(burnt >> 5, cryptonote::convert_slippage_limit_from_percent(burnt, 3));
  // 4% and above are honoured, and the percentage is not truncated to whole hundreds first.
  ASSERT_EQ(4 * COIN, cryptonote::convert_slippage_limit_from_percent(burnt, 4));
  ASSERT_EQ(burnt, cryptonote::convert_slippage_limit_from_percent(burnt, 100));
  // Percentages above 100 are clamped instead of overflowing.
  ASSERT_EQ(burnt, cryptonote::convert_slippage_limit_from_percent(burnt, std::numeric_limits<uint64_t>::max()));
  // Small amounts keep the floor even though amount * percent / 100 rounds down to zero.
  ASSERT_EQ(3u, cryptonote::convert_slippage_limit_from_percent(99, 4));
  ASSERT_EQ(1u, cryptonote::convert_slippage_limit_from_percent(32, 1));
}

TEST(conversion, convert_requires_exactly_one_destination)
{
  cryptonote::tx_destination_entry de;
  de.amount = 100 * COIN;
  de.asset_type = "SAL1";
  std::string error;

  ASSERT_TRUE(cryptonote::check_convert_destinations({de}, "SAL", error)) << error;

  // Two destinations would make the builder burn the source balance once per destination.
  ASSERT_FALSE(cryptonote::check_convert_destinations({de, de}, "SAL", error));
  ASSERT_EQ("CONVERT requires exactly one destination", error);

  // No destination at all cannot be built either.
  std::vector<cryptonote::tx_destination_entry> none;
  ASSERT_FALSE(cryptonote::check_convert_destinations(none, "SAL", error));
  ASSERT_EQ("CONVERT requires exactly one destination", error);

  // Nothing requested means nothing to mint.
  cryptonote::tx_destination_entry zero = de;
  zero.amount = 0;
  ASSERT_FALSE(cryptonote::check_convert_destinations({zero}, "SAL", error));
  ASSERT_EQ("CONVERT destination amount must be greater than zero", error);

  // Converting an asset into itself is a transfer, not a conversion.
  cryptonote::tx_destination_entry same = de;
  same.asset_type = "SAL";
  ASSERT_FALSE(cryptonote::check_convert_destinations({same}, "SAL", error));
  ASSERT_EQ("CONVERT destination asset must differ from the source asset", error);
}

// ---------------------------------------------------------------------------
// C4: consensus validation of CONVERT transactions.
// The amount a conversion mints must be implied by the pricing record committed
// in the block being validated - a transaction must not be able to assert it.
// ---------------------------------------------------------------------------
namespace
{
  cryptonote::transaction make_convert_tx(const std::string& from, const std::string& to,
                                          const uint64_t burnt, const uint64_t slippage_limit)
  {
    cryptonote::transaction tx{};
    tx.type = cryptonote::transaction_type::CONVERT;
    tx.source_asset_type = from;
    tx.destination_asset_type = to;
    tx.amount_burnt = burnt;
    tx.amount_slippage_limit = slippage_limit;
    return tx;
  }
}

TEST(convert_tx, rejects_a_transaction_that_is_not_a_convert)
{
  std::string error;
  const cryptonote::transaction tx{};
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  ASSERT_FALSE(cryptonote::verify_convert_tx(tx, pr, SUPPLY, 14, 0, error));
  ASSERT_FALSE(error.empty());
}

TEST(convert_tx, rejects_a_convert_without_asset_types)
{
  std::string error;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  ASSERT_FALSE(cryptonote::verify_convert_tx(make_convert_tx("", "SAL1", 32 * COIN, COIN), pr, SUPPLY, 14, 124 * COIN, error));
  ASSERT_FALSE(cryptonote::verify_convert_tx(make_convert_tx("SAL", "", 32 * COIN, COIN), pr, SUPPLY, 14, 124 * COIN, error));
}

TEST(convert_tx, rejects_a_convert_with_no_burnt_amount)
{
  std::string error;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  ASSERT_FALSE(cryptonote::verify_convert_tx(make_convert_tx("SAL", "SAL1", 0, COIN), pr, SUPPLY, 14, 0, error));
  ASSERT_FALSE(error.empty());
}

TEST(convert_tx, accepts_a_convert_that_matches_the_oracle_price)
{
  std::string error;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  const cryptonote::transaction tx = make_convert_tx("SAL", "SAL1", 32 * COIN, COIN);
  // burnt 32, slippage 1, rate 4 => 124 minted
  ASSERT_TRUE(cryptonote::verify_convert_tx(tx, pr, SUPPLY, 14, 124 * COIN, error)) << error;
}

TEST(convert_tx, rejects_a_tampered_minted_amount)
{
  std::string error;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  const cryptonote::transaction tx = make_convert_tx("SAL", "SAL1", 32 * COIN, COIN);
  // the price implies 124; a wallet asking for more must be rejected
  ASSERT_FALSE(cryptonote::verify_convert_tx(tx, pr, SUPPLY, 14, 248 * COIN, error));
  ASSERT_FALSE(error.empty());
  ASSERT_FALSE(cryptonote::verify_convert_tx(tx, pr, SUPPLY, 14, 125 * COIN, error));
  ASSERT_FALSE(cryptonote::verify_convert_tx(tx, pr, SUPPLY, 14, 123 * COIN, error));
}

TEST(convert_tx, rejects_a_convert_that_would_issue_nothing)
{
  std::string error;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN);
  // slippage limit 0 => calculate_conversion reports success with minted == 0;
  // F6 says this must be refused rather than accepted as a burn for nothing.
  const cryptonote::transaction tx = make_convert_tx("SAL", "SAL1", 32 * COIN, 0);
  ASSERT_FALSE(cryptonote::verify_convert_tx(tx, pr, SUPPLY, 14, 0, error));
  ASSERT_FALSE(error.empty());
}

TEST(convert_tx, rejects_a_convert_when_the_block_record_lacks_a_price)
{
  std::string error;
  const oracle::pricing_record pr = make_record(4 * COIN, 4 * COIN, COIN, COIN, /*with_sal1=*/false);
  const cryptonote::transaction tx = make_convert_tx("SAL", "SAL1", 32 * COIN, COIN);
  ASSERT_FALSE(cryptonote::verify_convert_tx(tx, pr, SUPPLY, 14, 124 * COIN, error));
  ASSERT_FALSE(error.empty());
}
