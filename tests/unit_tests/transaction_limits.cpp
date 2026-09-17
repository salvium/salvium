// Copyright (c) 2026, The Salvium Project
// Distributed under the BSD 3-Clause license; see LICENSE.

#include "gtest/gtest.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "serialization/binary_utils.h"

namespace
{
cryptonote::txin_to_key spend_input(size_t offsets)
{
  cryptonote::txin_to_key in{};
  in.asset_type = "SAL1";
  in.key_offsets.resize(offsets, 1);
  return in;
}

std::string prefix_with_count(bool inputs, size_t count)
{
  std::ostringstream stream;
  binary_archive<true> ar(stream);
  size_t version = 2;
  uint64_t unlock_time = 0;
  ar.serialize_varint(version);
  ar.serialize_varint(unlock_time);
  if (!inputs)
  {
    std::vector<cryptonote::txin_v> vin{spend_input(16)};
    EXPECT_TRUE(do_serialize(ar, vin));
  }
  ar.begin_array(count);
  // Satisfy the generic remaining-bytes check without supplying real elements.
  return stream.str() + std::string(count, '\0');
}

void expect_prefix_round_trip(cryptonote::transaction_prefix prefix)
{
  std::string encoded, reencoded;
  ASSERT_TRUE(serialization::dump_binary(prefix, encoded));
  cryptonote::transaction_prefix decoded;
  ASSERT_TRUE(serialization::parse_binary(encoded, decoded));
  ASSERT_TRUE(serialization::dump_binary(decoded, reencoded));
  EXPECT_EQ(encoded, reencoded);
}
}

TEST(TransactionLimits, RejectsInputCountBeforeAllocation)
{
  cryptonote::transaction_prefix prefix;
  const auto blob = prefix_with_count(true, cryptonote::MAX_VIN_COUNT + 1);
  EXPECT_FALSE(serialization::parse_binary(blob, prefix));
  EXPECT_EQ(0, prefix.vin.capacity());
}

TEST(TransactionLimits, RejectsOrdinaryOutputCountBeforeAllocation)
{
  cryptonote::transaction_prefix prefix;
  const auto blob = prefix_with_count(false, cryptonote::MAX_NON_COINBASE_VOUT_COUNT + 1);
  EXPECT_FALSE(serialization::parse_binary(blob, prefix));
  EXPECT_EQ(0, prefix.vout.capacity());
}

TEST(TransactionLimits, BoundsOffsetsOnReadAndWrite)
{
  auto in = spend_input(cryptonote::MAX_TOTAL_KEY_OFFSETS + 1);
  std::string blob;
  EXPECT_FALSE(serialization::dump_binary(in, blob));
  in.key_offsets.pop_back();
  ASSERT_TRUE(serialization::dump_binary(in, blob));
  cryptonote::txin_to_key decoded;
  EXPECT_TRUE(serialization::parse_binary(blob, decoded));
  EXPECT_EQ(in.key_offsets, decoded.key_offsets);

  std::ostringstream stream;
  binary_archive<true> ar(stream);
  ar.serialize_varint(in.amount);
  ASSERT_TRUE(do_serialize(ar, in.asset_type));
  size_t count = cryptonote::MAX_TOTAL_KEY_OFFSETS + 1;
  ar.begin_array(count);
  blob = stream.str() + std::string(count + sizeof(crypto::key_image), '\0');
  cryptonote::txin_to_key oversized;
  EXPECT_FALSE(serialization::parse_binary(blob, oversized));
  EXPECT_EQ(0, oversized.key_offsets.capacity());
}

TEST(TransactionLimits, BoundsTotalOffsetsAcrossInputs)
{
  cryptonote::transaction_prefix prefix;
  prefix.vin = {spend_input(cryptonote::MAX_TOTAL_KEY_OFFSETS / 2),
                spend_input(cryptonote::MAX_TOTAL_KEY_OFFSETS - cryptonote::MAX_TOTAL_KEY_OFFSETS / 2)};
  expect_prefix_round_trip(prefix);
  boost::get<cryptonote::txin_to_key>(prefix.vin.back()).key_offsets.push_back(1);
  std::string blob;
  ASSERT_TRUE(serialization::dump_binary(prefix, blob));
  cryptonote::transaction_prefix decoded;
  EXPECT_FALSE(serialization::parse_binary(blob, decoded));
}

TEST(TransactionLimits, RejectsMixedAndUnsupportedInputTypes)
{
  for (const std::vector<cryptonote::txin_v> &vin : {
      std::vector<cryptonote::txin_v>{cryptonote::txin_gen{1}, spend_input(16)},
      std::vector<cryptonote::txin_v>{spend_input(16), cryptonote::txin_gen{1}},
      std::vector<cryptonote::txin_v>{cryptonote::txin_to_scripthash{}}})
  {
    cryptonote::transaction_prefix prefix;
    prefix.vin = vin;
    std::string blob;
    ASSERT_TRUE(serialization::dump_binary(prefix, blob));
    cryptonote::transaction_prefix decoded;
    EXPECT_FALSE(serialization::parse_binary(blob, decoded));
  }
}

TEST(TransactionLimits, PreservesSalviumPrefixesAcrossVersions)
{
  using namespace cryptonote;
  for (size_t version = 1; version <= CURRENT_TRANSACTION_VERSION; ++version)
    for (auto type : {transaction_type::UNSET, transaction_type::MINER,
        transaction_type::PROTOCOL, transaction_type::TRANSFER,
        transaction_type::STAKE, transaction_type::AUDIT,
        transaction_type::CREATE_TOKEN, transaction_type::ROLLUP})
    {
      SCOPED_TRACE(version);
      SCOPED_TRACE(static_cast<unsigned>(type));
      transaction_prefix prefix;
      prefix.version = version;
      prefix.type = type;
      prefix.source_asset_type = prefix.destination_asset_type = "SAL1";
      prefix.vin = {spend_input(16)};
      if (type == transaction_type::MINER || type == transaction_type::PROTOCOL)
        prefix.vin = {txin_gen{123}};
      txout_to_key key{};
      key.asset_type = "SAL1";
      prefix.vout = {{0, key}};
      expect_prefix_round_trip(prefix);
      // Wallet caches and genesis protocol prefixes can have no inputs.
      prefix.vin.clear();
      expect_prefix_round_trip(prefix);
    }
}

TEST(TransactionLimits, AllowsLargeProtocolPayoutsAndCapsGeneratedOutputs)
{
  using namespace cryptonote;
  transaction_prefix prefix;
  prefix.version = 2;
  prefix.type = transaction_type::PROTOCOL;
  prefix.vin = {txin_gen{123}};
  txout_to_key key{};
  key.asset_type = "SAL1";
  prefix.vout.resize(MAX_NON_COINBASE_VOUT_COUNT + 1, {1, key});
  expect_prefix_round_trip(prefix);

  std::ostringstream stream;
  binary_archive<true> ar(stream);
  ar.serialize_varint(prefix.version);
  ar.serialize_varint(prefix.unlock_time);
  ASSERT_TRUE(do_serialize(ar, prefix.vin));
  size_t count = MAX_COINBASE_VOUT_COUNT + 1;
  ar.begin_array(count);
  const auto blob = stream.str() + std::string(count, '\0');
  transaction_prefix decoded;
  EXPECT_FALSE(serialization::parse_binary(blob, decoded));
  EXPECT_EQ(0, decoded.vout.capacity());
}
