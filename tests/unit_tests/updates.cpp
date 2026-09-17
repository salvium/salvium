// Copyright (c) 2017-2022, The Monero Project
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

#include "gtest/gtest.h"
#include "common/updates.h"

namespace
{
const std::string valid_hash =
    "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

std::string record(const std::string& version, const std::string& hash)
{
  return "salvium:linux-x64:" + version + ":" + hash;
}

void expect_rejected(const std::vector<std::string>& records)
{
  std::string version = "previous-version", hash = "previous-hash";
  EXPECT_FALSE(tools::parse_update_records(records, "salvium", "linux-x64", version, hash));
  EXPECT_EQ("previous-version", version);
  EXPECT_EQ("previous-hash", hash);
}
}

TEST(updates, rejects_wrong_hash_length)
{
  for (const std::size_t length : {0, 1, 32, 63, 65, 128})
  {
    SCOPED_TRACE(length);
    expect_rejected({record("1.2.0", std::string(length, 'a'))});
  }
}

TEST(updates, rejects_non_hex_hash_bytes)
{
  expect_rejected({record("1.2.0", std::string(64, '!'))});
  for (const unsigned char byte : {'g', 'G', 'z', 'Z', '!', '/', ' ', '\t', '\n', '\0', '\x80', '\xff'})
  {
    for (const std::size_t position : {0, 31, 63})
    {
      SCOPED_TRACE(static_cast<unsigned int>(byte));
      SCOPED_TRACE(position);
      auto invalid_hash = valid_hash;
      invalid_hash[position] = static_cast<char>(byte);
      expect_rejected({record("1.2.0", invalid_hash)});
    }
  }
}

TEST(updates, accepts_hex_and_normalizes_case)
{
  for (const std::string& hash : {
      valid_hash,
      std::string("0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF"),
      std::string("0123456789aBcDeF0123456789AbCdEf0123456789ABCDEF0123456789abcdef")})
  {
    std::string version, actual_hash;
    ASSERT_TRUE(tools::parse_update_records({record("1.2.0", hash)},
        "salvium", "linux-x64", version, actual_hash));
    EXPECT_EQ("1.2.0", version);
    EXPECT_EQ(valid_hash, actual_hash);
  }
}

TEST(updates, newest_valid_matching_record_wins)
{
  const std::string older_hash(64, 'a');
  std::string version, hash;
  ASSERT_TRUE(tools::parse_update_records({
      record("9.0", "bogus"),
      record("1.9", older_hash),
      "other-software:linux-x64:9.0:" + valid_hash,
      "salvium:other-platform:9.0:" + valid_hash,
      record("1.10", valid_hash),
      record("9.1", std::string(64, '!')),
      record("1.8", older_hash)},
      "salvium", "linux-x64", version, hash));
  EXPECT_EQ("1.10", version);
  EXPECT_EQ(valid_hash, hash);
}

TEST(updates, rejects_empty_malformed_and_unmatched_records)
{
  expect_rejected({});
  expect_rejected({"salvium:linux-x64:1.2.0", record("1.2.0", valid_hash) + ":extra",
      "other-software:linux-x64:1.2.0:" + valid_hash,
      "salvium:other-platform:1.2.0:" + valid_hash});
}

TEST(updates, accepts_release_and_prerelease_versions)
{
  for (const char* candidate : {"1.2", "1.1.3c", "0.18.4.0", "1.1.0-rc2",
      "1.2.0-beta.1", "1.2.0-release-abc123", "999999999.0"})
  {
    SCOPED_TRACE(candidate);
    std::string version, hash;
    ASSERT_TRUE(tools::parse_update_records({record(candidate, valid_hash)},
        "salvium", "linux-x64", version, hash));
    EXPECT_EQ(candidate, version);
    EXPECT_EQ(valid_hash, hash);
  }
}

TEST(updates, rejects_malformed_version_fields)
{
  for (const char* candidate : {"", "1", "v1.2.3", "1..2", "1.2.", "1.2-",
      "1.2--rc", "1.2-rc..1", "1a.2", "1.2.3.4.5", "1.2.3suffix",
      "../1.2", "1.2/next", "1.2\\next", "1.2?query", "1.2#fragment",
      "1.2%2fnext", "1.2+meta", " 1.2", "1.2 ", "1.2\n", "1.2\t",
      "1000000000.2", "1.2-1000000000"})
  {
    SCOPED_TRACE(candidate);
    expect_rejected({record(candidate, valid_hash)});
  }
  expect_rejected({record(std::string("1.2\0suffix", 10), valid_hash)});
  expect_rejected({record(std::string("1.2-") + char(0xff), valid_hash)});
  expect_rejected({record("1.2-" + std::string(61, 'a'), valid_hash)});
}

TEST(updates, malformed_newer_version_cannot_replace_a_valid_update)
{
  std::string version, hash;
  ASSERT_TRUE(tools::parse_update_records({record("9999999999.0", valid_hash),
      record("1.2.3c", valid_hash), record("9.0/other", valid_hash)},
      "salvium", "linux-x64", version, hash));
  EXPECT_EQ("1.2.3c", version);
  EXPECT_EQ(valid_hash, hash);
}
