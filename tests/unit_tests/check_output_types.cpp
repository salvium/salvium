// Copyright (c) 2025, Salvium (author: akil)
// Portions copyright (c) 2019-2021, Haven Protocol
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
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_basic/cryptonote_basic.h"
 
using namespace cryptonote;
 
TEST(check_output_types, check_all)
{
  transaction tx;
  tx.version = 2;
  uint8_t hf_version = 1;
 
  // should only allow for single output for audit and stake txs
  tx.type = transaction_type::AUDIT;
  txout_to_key out; out.asset_type = "SAL";
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.push_back(tx_out {0, out});
  tx.vout.push_back(tx_out {0, out});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.pop_back();
  EXPECT_TRUE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  tx.type = transaction_type::STAKE;
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.push_back(tx_out {0, out});
  tx.vout.push_back(tx_out {0, out});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.pop_back();
  EXPECT_TRUE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  // should only allow txout_to_key or txout_to_tagged_key output types
  txout_to_script tx_out_script;
  tx.vout.push_back(tx_out {0, tx_out_script});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  txout_to_scripthash tx_out_scripthash;
  tx.vout.push_back(tx_out {0, tx_out_scripthash});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  // should force all outputs to be of the same type
  out.asset_type = "SAL";
  txout_to_tagged_key out2; out2.asset_type = "SAL";
  tx.vout.push_back(tx_out {0, out});
  tx.vout.push_back(tx_out {0, out2});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  // should only allow SAL outputs before version 6
  out.asset_type = "SAL1";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  out.asset_type = "SAL";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_TRUE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  // after version 6, AUDIT txs still should only have SAL outputs
  hf_version = 6;
  tx.type = transaction_type::AUDIT;
 
  out.asset_type = "SAL1";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  out.asset_type = "SAL";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_TRUE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  // after version 6, non-AUDIT txs should only allow SAL1 outputs
  tx.type = transaction_type::PROTOCOL;
 
  out.asset_type = "SAL";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  out.asset_type = "SAL1";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_TRUE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  tx.type = transaction_type::TRANSFER;
  out.asset_type = "SAL";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_FALSE(check_output_types(tx, hf_version));
  tx.vout.clear();
 
  out.asset_type = "SAL1";
  tx.vout.push_back(tx_out {0, out});
  EXPECT_TRUE(check_output_types(tx, hf_version));
  tx.vout.clear();
}
