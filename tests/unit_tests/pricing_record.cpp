// Copyright (c) 2019-2021, Haven Protocol
// Portions copyright (c) 2016-2019, The Monero Project
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
#include "cryptonote_basic/cryptonote_basic.h"
#include "serialization/binary_archive.h"
#include "serialization/json_archive.h"
#include "serialization/debug_archive.h"
#include "serialization/variant.h"
#include "serialization/containers.h"
#include "serialization/binary_utils.h"
#include "serialization/pricing_record.h"

TEST(pricing_record, verify_serialization)
{
  oracle::pricing_record pr;
  oracle::pricing_record pr1;
  pr.pr_version = 1;
  pr.timestamp = 1632401454;
  pr.spot = COIN<<1;
  pr.moving_average = (COIN * 3) >> 2;
  memset(pr.signature, 0, 64);

  /*
  oracle::pricing_record_entry foo;
  foo.first = "FULM";
  foo.second.first = 2;
  foo.second.second = 3;
  pr.assets.push_back(foo);
  */
  
  std::string blob;
  ASSERT_TRUE(serialization::dump_binary(pr, blob));
  ASSERT_TRUE(serialization::parse_binary(blob, pr1));
  ASSERT_EQ(pr, pr1);
}

/*
TEST(pricing_record, verify_empty)
{
  oracle::pricing_record pr;
  EXPECT_TRUE(pr.valid(cryptonote::network_type::MAINNET, 17, 1632401454, 1632400454));
}

TEST(pricing_record, fail_if_empty_signatuere)
{
  oracle::pricing_record pr;
  pr.xNZD = 1;
  EXPECT_FALSE(pr.valid(cryptonote::network_type::MAINNET, 17, 1632401454, 1632400454));
}

TEST(pricing_record, verify_known_good)
{
  oracle::pricing_record pr;
  const std::string pr_821428 = "9b3f6f2f8f0000003d620e1202000000be71be2555120000b8627010000000000000000000000000ea0885b2270d00000000000000000000f797ff9be00b0000ddbdb005270a0000fc90cfe02b01060000000000000000000000000000000000d0a28224000e000000d643be960e0000002e8bb6a40e000000f8a817f80d00002f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  pr.xAG = 614976143259;
  pr.xAU = 8892867133;
  pr.xAUD = 20156914758078;
  pr.xBTC = 275800760;
  pr.xCAD = 0;
  pr.xCHF = 14464149948650;
  pr.xCNY = 0;
  pr.xEUR = 13059317798903;
  pr.xGBP = 11162715471325;
  pr.xJPY = 1690137827184892;
  pr.xNOK = 0;
  pr.xNZD = 0;
  pr.xUSD = 15393775330000;
  pr.unused1 = 16040600000000;
  pr.unused2 = 16100600000000;
  pr.unused3 = 15359200000000;
  pr.timestamp = 0;
  std::string sig = "2f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  int j=0;
  for (unsigned int i = 0; i < sig.size(); i += 2) {
    std::string byteString = sig.substr(i, 2);
    pr.signature[j++] = (char) strtol(byteString.c_str(), NULL, 16);
  }

  // verify the pr
  EXPECT_TRUE(pr.valid(cryptonote::network_type::MAINNET, 16, 1632401454, 1632400454)); // version is v16 here because pr has no timestamp
}

TEST(pricing_record, verify_known_good_fail_if_edited)
{
  oracle::pricing_record pr;
  const std::string pr_821428 = "9b3f6f2f8f0000003d620e1202000000be71be2555120000b8627010000000000000000000000000ea0885b2270d00000000000000000000f797ff9be00b0000ddbdb005270a0000fc90cfe02b01060000000000000000000000000000000000d0a28224000e000000d643be960e0000002e8bb6a40e000000f8a817f80d00002f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  pr.xAG = 614976143259;
  pr.xAU = 8892867133;
  pr.xAUD = 20156914758078;
  pr.xBTC = 275800760;
  pr.xCAD = 0;
  pr.xCHF = 14464149948650;
  pr.xCNY = 0;
  pr.xEUR = 13059317798903;
  pr.xGBP = 11162715471325;
  pr.xJPY = 1690137827184892;
  pr.xNOK = 0;
  pr.xNZD = 0;
  pr.xUSD = 15393775330000;
  pr.unused1 = 16040600000000;
  pr.unused2 = 16100600000000;
  pr.unused3 = 15359200000000;
  pr.timestamp = 0;
  std::string sig = "2f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  int j=0;
  for (unsigned int i = 0; i < sig.size(); i += 2) {
    std::string byteString = sig.substr(i, 2);
    pr.signature[j++] = (char) strtol(byteString.c_str(), NULL, 16);
  }

  // verify the pr
  EXPECT_TRUE(pr.valid(cryptonote::network_type::MAINNET, 16, 1632401454, 1632400454));

  // Now make a change to an exchange rate and reverify
  pr.xNZD = 1;
  EXPECT_FALSE(pr.valid(cryptonote::network_type::MAINNET, 16, 1632401454, 1632400454));

  // Revert that ER change and modify the signature
  pr.xNZD = 0;
  pr.signature[0] = 0x2e;
  EXPECT_FALSE(pr.valid(cryptonote::network_type::MAINNET, 16, 1632401454, 1632400454));
}

*/
