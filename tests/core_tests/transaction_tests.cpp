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

#include "include_base_utils.h"
#include "cryptonote_basic/cryptonote_basic_impl.h"
#include "cryptonote_basic/account.h"
#include "cryptonote_core/cryptonote_tx_utils.h"
#include "ringct/rctSigs.h"
#include "misc_language.h"
#include "string_tools.h"

using namespace cryptonote;



bool test_genesis_tx()
{
  using namespace cryptonote;

  cryptonote::network_type nettype = cryptonote::MAINNET;

  account_base miner_acc1;
  miner_acc1.generate();

  std::cout << "Gennerating miner wallet..." << std::endl;
  std::cout << "Miner account address:" << std::endl;
  std::cout << cryptonote::get_account_address_as_str((network_type)nettype, false, miner_acc1.get_keys().m_account_address);
  std::cout << std::endl << "Miner spend secret key:"  << std::endl;
  epee::to_hex::formatted(std::cout, epee::as_byte_span(unwrap(unwrap(miner_acc1.get_keys().m_spend_secret_key))));
  std::cout << std::endl << "Miner view secret key:" << std::endl;
  epee::to_hex::formatted(std::cout, epee::as_byte_span(unwrap(unwrap(miner_acc1.get_keys().m_view_secret_key))));
  std::cout << std::endl << std::endl;

  //Create file with miner keys information
  auto t = std::time(nullptr);
  auto tm = *std::localtime(&t);
  std::stringstream key_fine_name_ss;
  key_fine_name_ss << "./miner01_keys" << std::put_time(&tm, "%Y%m%d%H%M%S") << ".dat";
  std::string key_file_name = key_fine_name_ss.str();
  std::ofstream miner_key_file;
  miner_key_file.open (key_file_name);
  miner_key_file << "Miner account address:" << std::endl;
  miner_key_file << cryptonote::get_account_address_as_str((network_type)nettype, false, miner_acc1.get_keys().m_account_address);
  miner_key_file << std::endl<< "Miner spend secret key:"  << std::endl;
  epee::to_hex::formatted(miner_key_file, epee::as_byte_span(unwrap(unwrap(miner_acc1.get_keys().m_spend_secret_key))));
  miner_key_file << std::endl << "Miner view secret key:" << std::endl;
  epee::to_hex::formatted(miner_key_file, epee::as_byte_span(unwrap(unwrap(miner_acc1.get_keys().m_view_secret_key))));
  miner_key_file << std::endl << std::endl;
  miner_key_file.close();


  //Prepare genesis_tx
  cryptonote::transaction tx_genesis;
  crypto::public_key miner_reward_tx_key{};
  cryptonote::construct_miner_tx(0, 0, 0, 10, 0, miner_acc1.get_keys().m_account_address, miner_reward_tx_key, tx_genesis);
  std::cout << "Object:" << std::endl;
  std::cout << obj_to_json_str(tx_genesis) << std::endl << std::endl;


  std::stringstream ss;
  binary_archive<true> ba(ss);
  ::serialization::serialize(ba, tx_genesis);
  std::string tx_hex = ss.str();
  std::cout << "Insert this line into your coin configuration file: " << std::endl;
  std::cout << "std::string const GENESIS_TX = \"" << epee::string_tools::buff_to_hex_nodelimer(tx_hex) << "\";" << std::endl;

  return true;
}


bool test_transaction_generation_and_ringct_signature()
{

  account_base miner_acc1;
  miner_acc1.generate();
  account_base miner_acc2;
  miner_acc2.generate();
  account_base miner_acc3;
  miner_acc3.generate();
  account_base miner_acc4;
  miner_acc4.generate();
  account_base miner_acc5;
  miner_acc5.generate();
  account_base miner_acc6;
  miner_acc6.generate();

  account_base rv_acc;
  rv_acc.generate();
  account_base rv_acc2;
  rv_acc2.generate();
  crypto::public_key miner_reward_tx_key{};
  transaction tx_mine_1;
  construct_miner_tx(0, 0, 0, 10, 0, miner_acc1.get_keys().m_account_address, miner_reward_tx_key, tx_mine_1);
  transaction tx_mine_2;
  construct_miner_tx(0, 0, 0, 0, 0, miner_acc2.get_keys().m_account_address, miner_reward_tx_key, tx_mine_2);
  transaction tx_mine_3;
  construct_miner_tx(0, 0, 0, 0, 0, miner_acc3.get_keys().m_account_address, miner_reward_tx_key, tx_mine_3);
  transaction tx_mine_4;
  construct_miner_tx(0, 0, 0, 0, 0, miner_acc4.get_keys().m_account_address, miner_reward_tx_key, tx_mine_4);
  transaction tx_mine_5;
  construct_miner_tx(0, 0, 0, 0, 0, miner_acc5.get_keys().m_account_address, miner_reward_tx_key, tx_mine_5);
  transaction tx_mine_6;
  construct_miner_tx(0, 0, 0, 0, 0, miner_acc6.get_keys().m_account_address, miner_reward_tx_key, tx_mine_6);

  //fill inputs entry
  std::vector<tx_source_entry> sources;
  sources.resize(sources.size()+1);
  tx_source_entry& src = sources.back();
  src.amount = tx_mine_2.vout[0].amount;
  src.asset_type = "SAL";
  {
    const transaction* miner_txs[] = {
      &tx_mine_1, &tx_mine_2, &tx_mine_3,
      &tx_mine_4, &tx_mine_5, &tx_mine_6
    };
    for (size_t i = 0; i < std::size(miner_txs); ++i)
    {
      crypto::public_key output_key;
      CHECK_AND_ASSERT_MES(get_output_public_key(miner_txs[i]->vout[0], output_key),
                           false, "failed to read production miner output key");
      src.push_output(i, output_key, src.amount);
    }

    src.real_out_tx_key = cryptonote::get_tx_pub_key_from_extra(tx_mine_2);
    src.real_output = 1;
    src.rct = true;
    src.mask = rct::identity();
    src.real_output_in_tx_index = 0;
  }
  //fill outputs entry
  tx_destination_entry td;
  td.addr = rv_acc.get_keys().m_account_address;
  const uint64_t fee = 10 * FEE_PER_KB;
  td.amount = src.amount - fee;
  td.asset_type = "SAL";
  std::vector<tx_destination_entry> destinations;
  destinations.push_back(td);
  tx_destination_entry change;
  change.addr = miner_acc2.get_keys().m_account_address;
  change.amount = 0;
  change.asset_type = "SAL";
  change.is_change = true;
  destinations.push_back(change);

  transaction tx_rc1;
  std::unordered_map<crypto::public_key, subaddress_index> subaddresses;
  subaddresses[miner_acc2.get_keys().m_account_address.m_spend_public_key] = {0, 0};
  crypto::secret_key tx_key;
  std::vector<crypto::secret_key> additional_tx_keys;
  bool r = construct_tx_and_get_tx_key(miner_acc2.get_keys(), subaddresses,
      sources, destinations, HF_VERSION_BULLETPROOF_PLUS, "SAL", "SAL",
      cryptonote::transaction_type::TRANSFER,
      miner_acc2.get_keys().m_account_address, {}, tx_rc1, 0, tx_key,
      additional_tx_keys, true,
      {rct::RangeProofPaddedBulletproof, 4});
  CHECK_AND_ASSERT_MES(r, false, "failed to construct transaction");

  CHECK_AND_ASSERT_MES(tx_rc1.rct_signatures.type == rct::RCTTypeBulletproofPlus,
                       false, "transaction did not use production Bulletproof+");
  CHECK_AND_ASSERT_MES(rct::verRctSimple(tx_rc1.rct_signatures), false,
                       "failed to check production RingCT signature");

  std::vector<size_t> outs;
  uint64_t money = 0;

  r = lookup_acc_outs(rv_acc.get_keys(), tx_rc1, get_tx_pub_key_from_extra(tx_rc1), get_additional_tx_pub_keys_from_extra(tx_rc1), outs,  money);
  CHECK_AND_ASSERT_MES(r, false, "failed to lookup_acc_outs");
  CHECK_AND_ASSERT_MES(outs.size() == 1, false, "recipient output was not detected");
  outs.clear();
  money = 0;
  r = lookup_acc_outs(rv_acc2.get_keys(), tx_rc1, get_tx_pub_key_from_extra(tx_rc1), get_additional_tx_pub_keys_from_extra(tx_rc1), outs,  money);
  CHECK_AND_ASSERT_MES(r, false, "failed to lookup_acc_outs");
  CHECK_AND_ASSERT_MES(outs.empty(), false, "unrelated account detected an output");
  return true;
}

bool test_block_creation()
{
  uint64_t vszs[] = {80,476,476,475,475,474,475,474,474,475,472,476,476,475,475,474,475,474,474,475,472,476,476,475,475,474,475,474,474,475,9391,476,476,475,475,474,475,8819,8301,475,472,4302,5316,14347,16620,19583,19403,19728,19442,19852,19015,19000,19016,19795,19749,18087,19787,19704,19750,19267,19006,19050,19445,19407,19522,19546,19788,19369,19486,19329,19370,18853,19600,19110,19320,19746,19474,19474,19743,19494,19755,19715,19769,19620,19368,19839,19532,23424,28287,30707};
  std::vector<uint64_t> szs(&vszs[0], &vszs[90]);
  address_parse_info info;
  bool r = get_account_address_from_str(info, MAINNET, "0099be99c70ef10fd534c43c88e9d13d1c8853213df7e362afbec0e4ee6fec4948d0c190b58f4b356cd7feaf8d9d0a76e7c7e5a9a0a497a6b1faf7a765882dd08ac2");
  CHECK_AND_ASSERT_MES(r, false, "failed to import");
  block b;
  crypto::public_key miner_reward_tx_key{};
  r = construct_miner_tx(90, epee::misc_utils::median(szs), 3553616528562147, 33094, 10000000, info.address, miner_reward_tx_key, b.miner_tx, cryptonote::network_type::FAKECHAIN, {}, blobdata(), 11);
  return r;
}

bool test_transactions()
{
  if(!test_transaction_generation_and_ringct_signature())
    return false;
  if(!test_block_creation())
    return false;


  return true;
}
