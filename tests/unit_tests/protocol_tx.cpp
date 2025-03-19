// Copyright (c) 2025, Salvium (author: akil)
 
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
 
#define IN_UNIT_TESTS
 
#include "gtest/gtest.h"
 
#include "cryptonote_core/blockchain.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_core/cryptonote_core.h"
#include "blockchain_db/testdb.h"
 
using namespace cryptonote;
 
const uint64_t AMOUNT_BURNT = 1000000000000; // 1 SAL
const uint64_t STAKE_REWARD = 10000000000000; // 10 SAL
const uint64_t STAKE_PAYOUT = 216001000000000000; // 216k SAL
const uint64_t STAKE_LOCK_PERIOD = get_config(network_type::FAKECHAIN).STAKE_LOCK_PERIOD;
const auto AUDIT_HARD_FORKS = get_config(network_type::FAKECHAIN).AUDIT_HARD_FORKS;
 
class TestDB: public BaseTestDB {
public:
  TestDB() { m_open = true; }
 
  virtual uint64_t height() const override { return blocks.size(); }
  virtual void add_block(const block& blk
                         , size_t block_weight
                         , uint64_t long_term_block_weight
                         , const difficulty_type& cumulative_difficulty
                         , const uint64_t& coins_generated
                         , uint64_t num_rct_outs
                         , oracle::asset_type_counts& cum_rct_by_asset_type
                         , const crypto::hash& blk_hash
                         , uint64_t slippage_total
                         , uint64_t yield_total
                         , uint64_t audit_total
                         , const network_type nettype
                         , yield_block_info& ybi
                         , audit_block_info& abi
                         ) override {
    uint64_t height = this->height();
    yield_block_info ybi_prev = { 0, 0, 0, 0, 100 };
    yield_block_info ybi_matured = { 0, 0, 0, 0, 100 };
    if (height >= 1) {
      ybi_prev = yield_info.at(height - 1);
    }
    if (height > STAKE_LOCK_PERIOD) {
      ybi_matured = yield_info.at(height - STAKE_LOCK_PERIOD - 1);
    }
 
    ybi.block_height = height;
    ybi.locked_coins_this_block = yield_total;
    ybi.slippage_total_this_block = slippage_total;
    ybi.locked_coins_tally = yield_total +  ybi_prev.locked_coins_tally - ybi_matured.locked_coins_this_block;
 
    abi.locked_coins_this_block = audit_total;
    abi.locked_coins_tally = audit_total;
    abi.block_height = ybi.block_height;
 
    yield_info[ybi.block_height] = ybi;
    audit_info[abi.block_height] = abi;
    blocks.push_back(blk);
  }
  virtual uint64_t add_transaction_data(const crypto::hash& blk_hash, const std::pair<transaction, blobdata_ref>& tx, const crypto::hash& tx_hash, const crypto::hash& tx_prunable_hash, const bool miner_tx) override {
    if (tx.first.type == transaction_type::STAKE || tx.first.type == transaction_type::AUDIT) {
      yield_tx_info yti;
      yti.tx_hash = tx_hash;
      yti.block_height = (uint64_t)this->height();
      yti.locked_coins = tx.first.amount_burnt;
      yti.return_address = tx.first.return_address_list[0];
      if (tx.first.type == transaction_type::STAKE) {
        yield_txs[yti.block_height].push_back(yti);
      } else if (tx.first.type == transaction_type::AUDIT) {
        audit_txs[yti.block_height].push_back(yti);
      }
    }
 
    return 1;
  }
  virtual int get_yield_block_info(const uint64_t height, yield_block_info& ybi) const override {
    if (yield_info.count(height) == 0)
      return 1;
 
    ybi = yield_info.at(height);
    return 0;
  }
  virtual int get_audit_block_info(const uint64_t height, audit_block_info& abi) const override {
    if (audit_info.count(height) == 0)
      return 1;
 
    abi = audit_info.at(height);
    return 0;
  }
  virtual int get_yield_tx_info(const uint64_t height, std::vector<yield_tx_info>& yti_container) const override {
    if (yield_txs.count(height) == 0)
      return 1;
 
    yti_container = yield_txs.at(height);
    return 0;
  }
  virtual int get_audit_tx_info(const uint64_t height, std::vector<yield_tx_info>& ati_container) const override {
    if (audit_txs.count(height) == 0)
      return 1;
 
    ati_container = audit_txs.at(height);
    return 0;
  }
  virtual crypto::hash get_block_hash_from_height(const uint64_t &height) const override {
    crypto::hash hash = crypto::null_hash;
    *(uint64_t*)&hash = height;
    return hash;
  }
  virtual crypto::hash top_block_hash(uint64_t *block_height = NULL) const override {
    uint64_t h = height();
    crypto::hash top = crypto::null_hash;
    if (h)
      *(uint64_t*)&top = h - 1;
    if (block_height)
      *block_height = h - 1;
    return top;
  }
 
private:
  std::vector<block> blocks;
  std::map<uint64_t, yield_block_info> yield_info;
  std::map<uint64_t, audit_block_info> audit_info;
  std::map<uint64_t, std::vector<yield_tx_info>> yield_txs;
  std::map<uint64_t, std::vector<yield_tx_info>> audit_txs;
};
 
 
transaction get_audit_tx() {
  transaction audit_tx;
  audit_tx.type = transaction_type::AUDIT;
 
  std::string str = "audit-return-address-32-bytes32";
  rct::key audit_return_address;
  memcpy(audit_return_address.bytes, str.data(), sizeof(audit_return_address.bytes));
 
  audit_tx.return_address_list.push_back(rct::rct2pk(audit_return_address));
  audit_tx.amount_burnt = AMOUNT_BURNT;
  audit_tx.version = 2;
 
  return audit_tx;
}
 
transaction get_stake_tx() {
  transaction stake_tx;
  stake_tx.type = transaction_type::STAKE;
 
  std::string str = "stake-return-address-32-bytes32";
  rct::key stake_return_address;
  memcpy(stake_return_address.bytes, str.data(), sizeof(stake_return_address.bytes));
 
  stake_tx.return_address_list.push_back(rct::rct2pk(stake_return_address));
  stake_tx.amount_burnt = AMOUNT_BURNT;
  stake_tx.version = 2;
 
  return stake_tx;
}
 
void add_block(Blockchain *bc, uint8_t num_audit_txs, uint8_t num_stake_txs) {
  block b;
  b.miner_tx.amount_burnt = STAKE_REWARD;
 
  // add txs
  std::vector<std::pair<transaction, blobdata>> audit_txs;
  std::vector<std::pair<transaction, blobdata>> stake_txs;
  for (int i = 0; i < num_audit_txs; i++) {
    audit_txs.push_back(std::make_pair(get_audit_tx(), ""));
  }
  for (int i = 0; i < num_stake_txs; i++) {
    stake_txs.push_back(std::make_pair(get_stake_tx(), ""));
  }
 
  // merge & add txs to the block
  std::vector<std::pair<transaction, blobdata>> txs;
  txs.insert(txs.end(), audit_txs.begin(), audit_txs.end());
  txs.insert(txs.end(), stake_txs.begin(), stake_txs.end());
  for (auto tx : txs) {
    b.tx_hashes.push_back(tx.first.hash);
  }
 
  // add the block
  yield_block_info ybi;
  audit_block_info abi;
  bc->get_db().add_block(
                         std::make_pair(b, ""),
                         0, 0, 1, 0,
                         txs,
                         network_type::FAKECHAIN, ybi, abi
                         );
}
 
uint64_t progress_chain(Blockchain *bc, uint64_t num_blocks) {
  for (int i = 0; i < num_blocks; i++) {
    add_block(bc, 0, 0);
  }
  return bc->get_db().height();
}
 
TEST(protocol_tx, validate)
{
  const std::pair<uint8_t, uint64_t> hard_forks[3] = {
    std::make_pair(1, 1),
    std::make_pair(5, 1 * STAKE_LOCK_PERIOD),
    std::make_pair(6, 2 * STAKE_LOCK_PERIOD),
  };
  const test_options test_options = {
    hard_forks,
    1000,
  };
 
  BlockchainAndPool bap;
  Blockchain *bc = &bap.blockchain;
  bool r =  bc->init(new TestDB(), network_type::FAKECHAIN, true, &test_options, 0, NULL);
  ASSERT_TRUE(r);
  block b;
  b.miner_tx.amount_burnt = STAKE_REWARD;
 
  // ******** Special cases for genesis block(height is 0) ********
 
  uint64_t height = bc->get_db().height() - 1;
  uint8_t hf_version = bc->get_ideal_hard_fork_version(height);
 
  // should have version 1
  b.protocol_tx.version = 2;
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.version = 1;
 
  // shouldn't have any inputs
  b.protocol_tx.vin.push_back(txin_gen{height});
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vin.clear();
 
  // shouldn't have any outputs
  b.protocol_tx.vout.push_back(tx_out {0, txout_target_v{txout_to_key{}}});
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
 
  // should now pass
  EXPECT_TRUE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // ******** Normal cases ********
  height = progress_chain(bc, 1);
  hf_version = bc->get_current_hard_fork_version();
 
  // should only have 1 input
  b.protocol_tx.vin.clear();
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vin.push_back(txin_gen{height});
  b.protocol_tx.vin.push_back(txin_gen{height});
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vin.pop_back();
 
  // should now pass with no output
  b.protocol_tx.vout.clear();
  EXPECT_TRUE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // height should be at least STAKE_LOCK_PERIOD if there is at least 1 output
  b.protocol_tx.vout.push_back(tx_out {10000, txout_target_v{txout_to_key{}}});
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
 
  // reach to stake period height
  height = progress_chain(bc, STAKE_LOCK_PERIOD);
  hf_version = bc->get_current_hard_fork_version();
 
  // should fail if can't find a ybi & abi entry for the block
  // (this will always pass since you can't add a block without ybi & abi entry)
 
  // should fail if protocol tx outputs(1) > audit txs(0) + yield txs(0)
  b.protocol_tx.vout.push_back(tx_out {10000, txout_target_v{txout_to_key{}}});
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
 
  // there shouldn't be outputs for audit txs in hf_version 5
  EXPECT_EQ((int)bc->get_ideal_hard_fork_version(height), 5);
  add_block(bc, 1, 1);
 
  // progress chain until the audit payout
  height = progress_chain(bc, AUDIT_HARD_FORKS.at(6).first);
  hf_version = bc->get_current_hard_fork_version();
 
  // make outputs for audit tx
  b.protocol_tx.vout.push_back(tx_out {AMOUNT_BURNT, txout_target_v{txout_to_key{
          get_audit_tx().return_address_list[0],
          "SAL",
          CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW
        }}});
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
 
  // progress chain until the stake payout
  height = progress_chain(bc, STAKE_LOCK_PERIOD - AUDIT_HARD_FORKS.at(6).first);
  hf_version = bc->get_current_hard_fork_version();
 
  // make sure its paid out with correct asset type & amount
  b.protocol_tx.vout.push_back(
                               tx_out {
                                 STAKE_PAYOUT - 1, // wrong amount
                                 txout_target_v{txout_to_key{
                                     get_stake_tx().return_address_list[0],
                                     "SAL1", // wrong asset type
                                     CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW - 1 // wrong unlock window
                                   }
                                 }
                               }
                               );
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // fix amount
  b.protocol_tx.vout[0].amount = STAKE_PAYOUT;
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // fix asset type
  boost::get<txout_to_key>(b.protocol_tx.vout[0].target).asset_type = "SAL";
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // fix unlock window
  boost::get<txout_to_key>(b.protocol_tx.vout[0].target).unlock_time = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
  EXPECT_TRUE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
 
  // audit txs should now be paid out in hf_version 6
  EXPECT_EQ((int)bc->get_ideal_hard_fork_version(height), 6);
  add_block(bc, 1, 0);
 
  // progress chain until the payout
  height = progress_chain(bc, AUDIT_HARD_FORKS.at(6).first);
  hf_version = bc->get_current_hard_fork_version();
 
  // validate we get paid out with correct asset type & amount
  b.protocol_tx.vout.push_back(
                               tx_out {
                                 AMOUNT_BURNT - 1, // wrong amount
                                 txout_target_v{txout_to_key{
                                     get_audit_tx().return_address_list[0],
                                     "SAL", // wrong asset type
                                     CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW - 1 // wrong unlock window
                                   }
                                 }
                               }
                               );
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // fix amount
  b.protocol_tx.vout[0].amount = AMOUNT_BURNT;
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // fix asset type
  boost::get<txout_to_key>(b.protocol_tx.vout[0].target).asset_type = "SAL1";
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // fix unlock window
  boost::get<txout_to_key>(b.protocol_tx.vout[0].target).unlock_time = CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW;
  EXPECT_TRUE(bc->validate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
 
  // add a stake tx
  add_block(bc, 0, 1);
 
  // progress chain to add audit tx so that they both mature at the same time
  height = progress_chain(bc, STAKE_LOCK_PERIOD - AUDIT_HARD_FORKS.at(6).first - 1);
  hf_version = bc->get_current_hard_fork_version();
 
  // add an audit tx
  add_block(bc, 1, 0);
 
  // progress chain to mature height
  height = progress_chain(bc, AUDIT_HARD_FORKS.at(6).first);
  hf_version = bc->get_current_hard_fork_version();
 
  // fail since protocol tx outputs(0) < audit txs(1) + yield txs(1)
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // audit tx output
  b.protocol_tx.vout.push_back(tx_out {AMOUNT_BURNT, txout_target_v{txout_to_key{
          get_audit_tx().return_address_list[0],
          "SAL1",
          CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW
        }}});
  // fail since protocol tx outputs(1) < audit txs(1) + yield txs(1)
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // stake tx output
  b.protocol_tx.vout.push_back(tx_out {STAKE_PAYOUT, txout_target_v{txout_to_key{
          get_stake_tx().return_address_list[0],
          "SAL1",
          CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW
        }}});
  // fail since protocol tx outputs[0] != stake_tx
  EXPECT_FALSE(bc->validate_protocol_transaction(b, height, hf_version));
 
  // swap the outputs
  std::swap(b.protocol_tx.vout[0], b.protocol_tx.vout[1]);
  EXPECT_TRUE(bc->validate_protocol_transaction(b, height, hf_version));
}
 
 
TEST(protocol_tx, prevalidate)
{
  tx_memory_pool* tx_pool = nullptr;
  Blockchain blockchain(*tx_pool);
  block b;
 
  // ******** Special cases for genesis block(height is 0) ********
  uint64_t height = 0;
  uint8_t hf_version = 1;
 
  // should have version 1
  b.protocol_tx.version = 2;
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.version = 1;
 
  // shouldn't have any inputs
  b.protocol_tx.vin.push_back(txin_gen{height});
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vin.clear();
 
  // shouldn't have any outputs
  b.protocol_tx.vout.push_back(tx_out {0, txout_target_v{txout_to_key{}}});
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
 
  // should now pass
  EXPECT_TRUE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
 
  // ******** Normal cases ********
  height = 1;
  hf_version = 1;
 
  // should have version > 1
  b.protocol_tx.version = 1;
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.version = 2;
 
  // should have only 1 input
  b.protocol_tx.vin.push_back(txin_gen{height});
  b.protocol_tx.vin.push_back(txin_gen{height});
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vin.clear();
 
  // should have only input type txin_gen
  b.protocol_tx.vin.push_back(txin_to_key {0, "SAL", {}, crypto::key_image{}});
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vin.clear();
  b.protocol_tx.vin.push_back(txin_gen{height});
 
  // should have rct type NULL
  b.protocol_tx.rct_signatures.type = rct::RCTTypeSalviumOne;
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.rct_signatures.type = rct::RCTTypeNull;
 
  // txin_gen height must match block height
  boost::get<txin_gen>(b.protocol_tx.vin[0]).height = height + 1;
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  boost::get<txin_gen>(b.protocol_tx.vin[0]).height = height;
 
  // output amounts can't overflow
  b.protocol_tx.vout.push_back(tx_out {UINT64_MAX, txout_target_v{txout_to_key{}}});
  b.protocol_tx.vout.push_back(tx_out {1, txout_target_v{txout_to_key{}}});
  EXPECT_FALSE(blockchain.prevalidate_protocol_transaction(b, height, hf_version));
  b.protocol_tx.vout.clear();
  b.protocol_tx.vout.push_back(tx_out {UINT64_MAX, txout_target_v{txout_to_key{}}});
}
