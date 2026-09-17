// Copyright (c) 2020-2022, The Monero Project

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

#include <cstdint>
#include <cstring>
#include <vector>
#include <gtest/gtest.h>

#include "serialization/keyvalue_serialization.h"
#include "storages/portable_storage.h"
#include "span.h"
#include "byte_slice.h"
#include "net/http_server_handlers_map2.h"
#include "storages/http_abstract_invoke.h"

TEST(epee_binary, two_keys)
{
  static constexpr const std::uint8_t data[] = {
    0x01, 0x11, 0x01, 0x1, 0x01, 0x01, 0x02, 0x1, 0x1, 0x08, 0x01, 'a',
    0x0B, 0x00, 0x01, 'b', 0x0B, 0x00
  };

  epee::serialization::portable_storage storage{};
  EXPECT_TRUE(storage.load_from_binary(data));
}

TEST(epee_binary, accepts_valid_storage_from_odd_address)
{
  static constexpr const std::uint8_t data[] = {
    0x01, 0x11, 0x01, 0x1, 0x01, 0x01, 0x02, 0x1, 0x1, 0x08, 0x01, 'a',
    0x0B, 0x00, 0x01, 'b', 0x0B, 0x00
  };

  std::vector<std::uint8_t> odd(sizeof(data) + 1);
  std::memcpy(odd.data() + 1, data, sizeof(data));
  epee::serialization::portable_storage storage{};
  EXPECT_TRUE(storage.load_from_binary({odd.data() + 1, sizeof(data)}));
}

TEST(epee_binary, pod_blob_container_round_trip_is_unchanged)
{
  const std::vector<std::uint64_t> expected{0, 1, 0x0123456789abcdefULL};
  epee::serialization::portable_storage storage{};
  ASSERT_TRUE(epee::serialization::serialize_stl_container_pod_val_as_blob(
    expected, storage, nullptr, "values"));

  std::vector<std::uint64_t> actual;
  ASSERT_TRUE(epee::serialization::unserialize_stl_container_pod_val_as_blob(
    actual, storage, nullptr, "values"));
  EXPECT_EQ(expected, actual);
}

TEST(epee_binary, duplicate_key)
{
  static constexpr const std::uint8_t data[] = {
    0x01, 0x11, 0x01, 0x1, 0x01, 0x01, 0x02, 0x1, 0x1, 0x08, 0x01, 'a',
    0x0B, 0x00, 0x01, 'a', 0x0B, 0x00
  };

  epee::serialization::portable_storage storage{};
  EXPECT_FALSE(storage.load_from_binary(data));
}

TEST(epee_binary, http_string_allocation_limit)
{
  using epee::serialization::portable_storage;
  portable_storage storage;
  std::vector<std::string> values(default_http_bin_limits.n_strings, "");
  ASSERT_TRUE(epee::serialization::serialize_stl_container_t_val(values, storage, nullptr, "values"));
  epee::byte_slice blob;
  ASSERT_TRUE(storage.store_to_binary(blob));
  portable_storage decoded;
  EXPECT_TRUE(decoded.load_from_binary({blob.data(), blob.size()}, &default_http_bin_limits));
  values.emplace_back();
  portable_storage oversized;
  ASSERT_TRUE(epee::serialization::serialize_stl_container_t_val(values, oversized, nullptr, "values"));
  ASSERT_TRUE(oversized.store_to_binary(blob));
  portable_storage unlimited;
  ASSERT_TRUE(unlimited.load_from_binary({blob.data(), blob.size()}));
  portable_storage rejected;
  EXPECT_FALSE(rejected.load_from_binary({blob.data(), blob.size()}, &default_http_bin_limits));
}

TEST(epee_json, rejects_unknown_escape_and_accepts_valid_escape)
{
  epee::serialization::portable_storage invalid, valid;
  EXPECT_FALSE(invalid.load_from_json(R"({"value":"bad\q"})"));
  ASSERT_TRUE(valid.load_from_json(R"({"value":"line\nend"})"));
  std::string value;
  ASSERT_TRUE(valid.get_value("value", value, nullptr));
  EXPECT_EQ("line\nend", value);
}

TEST(epee_json, escapes_all_control_bytes_and_preserves_utf8)
{
  std::string original;
  for (unsigned char c = 0; c < 0x20; ++c)
    original.push_back(c);
  original += "UTF-8: \xc3\xa9";
  epee::serialization::portable_storage storage;
  ASSERT_TRUE(storage.set_value("value", std::string(original), nullptr));
  std::string json;
  ASSERT_TRUE(storage.dump_as_json(json, 0, false));
  for (const unsigned char c : json)
    EXPECT_GE(c, 0x20);
  EXPECT_EQ(std::string::npos, json.find("\\v"));
  EXPECT_NE(std::string::npos, json.find("\\u001b"));
  epee::serialization::portable_storage decoded;
  ASSERT_TRUE(decoded.load_from_json(json));
  std::string result;
  ASSERT_TRUE(decoded.get_value("value", result, nullptr));
  EXPECT_EQ(original, result);
}

TEST(epee_json, allocation_limits_are_shared_across_nested_objects)
{
  using storage = epee::serialization::portable_storage;
  const std::string json = R"({"items":[{"value":"one"},{"value":"two"}]})";
  const storage::limits_t exact{3, 3, 2};
  storage accepted;
  ASSERT_TRUE(accepted.load_from_json(json, &exact));
  for (const storage::limits_t limits : {storage::limits_t{2, 3, 2},
      storage::limits_t{3, 2, 2}, storage::limits_t{3, 3, 1}})
  {
    storage rejected;
    EXPECT_FALSE(rejected.load_from_json(json, &limits));
  }
}

TEST(epee_json, string_array_limits_and_field_names_are_distinct)
{
  using storage = epee::serialization::portable_storage;
  const storage::limits_t limits{1, 1, 2};
  storage exact, excess, empty, repeated;
  EXPECT_TRUE(exact.load_from_json(R"({"items":["",""]})", &limits));
  EXPECT_FALSE(excess.load_from_json(R"({"items":["","",""]})", &limits));
  const storage::limits_t no_strings{1, 1, 0};
  EXPECT_TRUE(empty.load_from_json(R"({"field":42})", &no_strings));
  EXPECT_FALSE(repeated.load_from_json(R"({"field":1,"field":2})", &no_strings));
}

namespace
{
struct rpc_test_payload
{
  std::string value;
  BEGIN_KV_SERIALIZE_MAP()
    KV_SERIALIZE(value)
  END_KV_SERIALIZE_MAP()
};
struct rpc_test_transport
{
  epee::net_utils::http::http_response_info response{};
  bool invoke(boost::string_ref, boost::string_ref, boost::string_ref,
      std::chrono::milliseconds, const epee::net_utils::http::http_response_info **out,
      epee::net_utils::http::fields_list = {})
  {
    response.m_response_code = 200;
    *out = &response;
    return true;
  }
};
}

TEST(epee_json, rpc_response_must_match_request_id_and_version)
{
  rpc_test_payload request{"request"}, result{"unchanged"};
  rpc_test_transport transport;
  for (const std::string json : {
      R"({"jsonrpc":"1.0","id":"0","result":{"value":"wrong"}})",
      R"({"jsonrpc":"2.0","id":"other","result":{"value":"wrong"}})",
      R"({"jsonrpc":"2.0","id":0,"result":{"value":"wrong"}})",
      R"({"id":"0","result":{"value":"wrong"}})",
      R"({"jsonrpc":"2.0","result":{"value":"wrong"}})"})
  {
    transport.response.m_body = json;
    EXPECT_FALSE(epee::net_utils::invoke_http_json_rpc("/json_rpc", "test", request, result, transport));
    EXPECT_EQ("unchanged", result.value);
  }
  transport.response.m_body = R"({"jsonrpc":"2.0","id":"0","result":{"value":"accepted"}})";
  EXPECT_TRUE(epee::net_utils::invoke_http_json_rpc("/json_rpc", "test", request, result, transport));
  EXPECT_EQ("accepted", result.value);
}

TEST(epee_json, rejects_truncated_objects_and_trailing_data)
{
  for (const std::string json : {"", " ", "{", R"({"value":1)",
      R"({"value":[1,2])", "{}garbage", "{} {}"})
  {
    epee::serialization::portable_storage storage;
    EXPECT_FALSE(storage.load_from_json(json)) << json;
  }
  epee::serialization::portable_storage valid;
  EXPECT_TRUE(valid.load_from_json(" {} \r\n\t"));
}
