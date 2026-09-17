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

#include <boost/filesystem.hpp>
#include <boost/algorithm/string/predicate.hpp>
#include <cstdio>
#include <iostream>
#include <chrono>
#include <thread>

#include "gtest/gtest.h"

#include "string_tools.h"
#include "blockchain_db/blockchain_db.h"
#include "blockchain_db/lmdb/db_lmdb.h"
#include "common/pruning.h"
#include "cryptonote_basic/cryptonote_format_utils.h"

using namespace cryptonote;
using epee::string_tools::pod_to_hex;

#define ASSERT_HASH_EQ(a,b) ASSERT_EQ(pod_to_hex(a), pod_to_hex(b))

namespace {  // anonymous namespace

const std::vector<std::string> t_blocks =
  {
    "0409ded7dfbe0620e6df27a9c5c040e56ea51aca438eebc0fbde467fdcf98b08490d689623a9add9ccf233020001ff8106018d9fbd8c2e035eea81559f4eeb5f4b0b66b9709ae9a512e0b74ce8e4fae11b01e1d53deceaeb0353414c3c7321013e15f4fcdbac75b488e97cc1b12c43d275d570e1cd93b9f1730a3ed21ca3945f01e3a78fc30b00020001ff8106002301e4e5747a1f99ec6efbfdfceaf941bf2325e24f81a8442a66545e4d03c9a1041f0400020001b3a3a6f1d7113ce5873f8b3e1a52006931ec1bd47b98ffcb5a8767acd600f6e9"
  , "0409e6d7dfbe06411bc0f3f98be0b838dca7c3cd28227c231b9e65d6c5a4a04c67d600910850ea6e6cbf1a020001ff820601f59a8e8c2e03362c280a6cd0b8c6d1db2ff6db7daf5551abb6b6ac14176a35cd4d21e43fc5550353414c3c9921017019e5bed24475d229084ca7153443fa0f255a517b4244325321e9e03e62a59601ddc683c30b00020001ff82060023017679008aac8d7f32d59f73c382a65ba9344c5fc88241c0708c0139228637d7a00400020000"
  };

const std::vector<size_t> t_sizes =
  {
    1916
  , 92
  };

const std::vector<difficulty_type> t_diffs =
  {
    1710
  , 1950
  };

const std::vector<uint64_t> t_coins =
  {
    12374200205
  , 12373429621
  };

const std::vector<std::vector<std::string>> t_transactions =
  {
    {
      "03000102000353414c109b0228460a108b012b0b222a070809051f07ae107e5e48256044e3e8b71d1e0fd6194d13695bd4fbd454ebb296b451bb3c2302000337b3183a3fcf3be80bd933a97b06f9222b05adad1a2db7c70f1f688889cbcb200353414c00c400036a1958fc465756119598e91880bf9b4b2dfa5ec3bce0bb7b9647827ed78b3ccf0353414c009d2c014cc167aff402f99b1e435e035745d73fcb396d176d38a2f3135b757bc3f0755b0209011568baaf30dbfed10300029af771773dcd73dd7f447b2f0b38357b76df6781adb41efab5f0f0aa588d6b968c3505354384e6f5dad2cef9c880f333de53f9a473af0ac268dcc3a947840e4002c94f0353414c0353414c000780f2390077d8e8ba53e2b1f8e890fcecbaa600f98915ebcdd7e9bd716002ce232120f4d725dff0c7b0530dfffbb7d9640730de923bebd5b8bdd7dbd0f93c0e2d99657afe6a559e52312672fa658577c3b083624b74735ec153f124c09989f69803de66070937293199aa63b92ef7435d06017420edafa6366d7fe1017c99521efc6d624741649aaf7ffc69818e323677021af9a7e40d0328b0e0029d9de4f11209795419518ba17c084ce0adc579d2fb7e2803000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001d616aff200f1dfb71a4a445b57c310e36c96715673e2cd0f272e740c7e0dd33eb5bd0f0d0a912d93508a0e42f6c8052045a237d3a38a7490698e3d644102db5a5eb6d34c1bf38afdb315e2a3058e572bd8dc82ee44d2efb5dd5c334a2056499404840d9855daa80fab147587109f83ce27e1e77c2e0a93eed20759426a4ced0b7af18666b2fe55ed61045315b7c76655002496c1135581dade6c5d152ae72404b9a822a223d17acbe13a32befb8509610d4d7d454497f3b565e5cb0e2b12f500076f1dee958772b8254a3b8d8a3b29476f9aaae4aaa54556160b1ec4f05aa4fa18eb104b32a449ee98092e82d175270418779c3d988f17a8629c6a0dfc73dc31ffa92caef528ae2fd98024eed2380d8cfe3b3875cb72222202ce8de21c57191d49aec613bb88a63e1322793ccdb753f3c5daa62c1644e3b4f4084c506d00fe9ef81753a174803b9359cff01ac18bdbec03f1e8a4379e01d9efcbb134453b83f13c7cf75dd0a1eb3580859f0964dc68e0d97402b677611490b24031254636d60b7dfb267c1062eca784b217ae40c266ea2e42458993102f366c1145eb460aba87a807eb307b69c332a24de1801c231f3fe2cafa6f4ceda119b2557a00174510ba312f4ca1445bb8576db71027da0a0f60f8fd1c2cccbae4db960465abeec927ca4273b5ba371cce01115adda7d128ec758065df14bf37565b0e89e712ab51891096a9ffa726a29c150fb8affe19afd4e569ad759623358e99c1073f7dec0715f59a6f42182cfffebf99e925612d1c335df476aaa7156edd26c7154e4cd337347dbd3c153b88fefce883f9d3efccd995e517058b38460d121b6c90b3e01b916f5ba2b88c450e346cdf2cfc549e004ccbebf7bd84b819281203141d2749538252ab03ff72d75cb637796420dceef3fefce392b92c31acc9ee5c7612fc1e3768a35b290b027a16fb274396841349a5aa6769e9858cfad9e3c5e6e1ae13c298297e5eea0b6219209be0b881140488ed2028ab8060384de2be37728208429eac3d62d10501ca5a95be599df2bc70a8db1019e0971688e1c3b859231f79bf35ac3bec180c0c2e5ddf1efd0482a1864b5524457611120060e5976393d5a710e7a5770250ff08b8d8fa0fac937095d4bf4aaec09b5482e7499e0e25fd7d536e449e7918239c07b77eecca0fffc2af2b004292d8c2797832e5bc833cc2628377f4d534b9d0d90c0f09683b8a3cff0a6bb05ee3f03a9ea3568f1e4b60c15776e09e848c7e440b0bd3e29dd1d892ef31eacf162cad0865487407102d1ac6ee1eef46edb0ed864f0dc29b78dee96d9b740fcf2f330e67c0b961feab53b93ee4fee84e2f8557f4e9050f1facffe67af38ade44b43cc8730178d557781b293bb3fb7c84ff08865c140a6d8065ce1143135f27690c4dc4a737c21bce411a13e4caeb9a02433430416e0eb815fb05cc56f30d5d4ed62941ae66443f9f5bda1bf0633997acad171d1058064d18e012fa297609bf76742bf43d5c1b82c3075860497d0a1a2ce7b469613e0dc3461ef5d818d61e4cafabada94f1da2352f8474d132d57d0f967e097c67be09537d30d615dd456622317866bbc781503fbd06623995328bdddcea50ff4ec00e7b7d6f5ccea111938b83b4c4c7403cb7f093022997123fed1e721753aced7d08ad6984cc31d8f3f9519a1ea59915f52388df494294ac632932ee6fd69e2c55c87b2687b4de8b1ea36742ebb335b8b7970655ee337ad07a230e460a6de6b2784e"
    }
  , {
    }
  };

// if the return type (blobdata for now) of block_to_blob ever changes
// from std::string, this might break.
bool compare_blocks(const block& a, const block& b)
{
  auto hash_a = pod_to_hex(get_block_hash(a));
  auto hash_b = pod_to_hex(get_block_hash(b));

  return hash_a == hash_b;
}

/*
void print_block(const block& blk, const std::string& prefix = "")
{
  std::cerr << prefix << ": " << std::endl
            << "\thash - " << pod_to_hex(get_block_hash(blk)) << std::endl
            << "\tparent - " << pod_to_hex(blk.prev_id) << std::endl
            << "\ttimestamp - " << blk.timestamp << std::endl
  ;
}

// if the return type (blobdata for now) of tx_to_blob ever changes
// from std::string, this might break.
bool compare_txs(const transaction& a, const transaction& b)
{
  auto ab = tx_to_blob(a);
  auto bb = tx_to_blob(b);

  return ab == bb;
}
*/

// convert hex string to string that has values based on that hex
// thankfully should automatically ignore null-terminator.
std::string h2b(const std::string& s)
{
  bool upper = true;
  std::string result;
  unsigned char val = 0;
  for (char c : s)
  {
    if (upper)
    {
      val = 0;
      if (c <= 'f' && c >= 'a')
      {
        val = ((c - 'a') + 10) << 4;
      }
      else
      {
        val = (c - '0') << 4;
      }
    }
    else
    {
      if (c <= 'f' && c >= 'a')
      {
        val |= (c - 'a') + 10;
      }
      else
      {
        val |= c - '0';
      }
      result += (char)val;
    }
    upper = !upper;
  }
  return result;
}

void check_lmdb(int result, const char* message)
{
  if (result)
    throw std::runtime_error(std::string(message) + ": " + mdb_strerror(result));
}

class test_lmdb_env
{
public:
  explicit test_lmdb_env(const std::string& path)
  {
    check_lmdb(mdb_env_create(&m_env), "Failed to create LMDB environment");
    try
    {
      check_lmdb(mdb_env_set_maxdbs(m_env, 32), "Failed to set LMDB max databases");
      check_lmdb(mdb_env_open(m_env, path.c_str(), 0, 0644), "Failed to open LMDB environment");
    }
    catch (...)
    {
      mdb_env_close(m_env);
      m_env = nullptr;
      throw;
    }
  }

  ~test_lmdb_env()
  {
    mdb_env_close(m_env);
  }

  MDB_env* get() const { return m_env; }

private:
  MDB_env* m_env = nullptr;
};

class test_lmdb_txn
{
public:
  test_lmdb_txn(MDB_env* env, unsigned int flags = 0)
  {
    check_lmdb(mdb_txn_begin(env, nullptr, flags, &m_txn), "Failed to begin LMDB transaction");
  }

  ~test_lmdb_txn()
  {
    if (m_txn)
      mdb_txn_abort(m_txn);
  }

  MDB_txn* get() const { return m_txn; }

  void commit()
  {
    MDB_txn* txn = m_txn;
    m_txn = nullptr;
    check_lmdb(mdb_txn_commit(txn), "Failed to commit LMDB transaction");
  }

private:
  MDB_txn* m_txn = nullptr;
};

crypto::hash pruning_test_hash(uint32_t value)
{
  crypto::hash hash{};
  memcpy(hash.data + sizeof(hash.data) - sizeof(value), &value, sizeof(value));
  return hash;
}

MDB_dbi open_test_table(MDB_txn* txn, const char* name)
{
  MDB_dbi table;
  check_lmdb(mdb_dbi_open(txn, name, 0, &table), "Failed to open LMDB table");
  return table;
}

void create_interrupted_pruning_data(const std::string& path, size_t records, size_t missing_pruned_record)
{
  test_lmdb_env env(path);
  test_lmdb_txn txn(env.get());
  const MDB_dbi blocks = open_test_table(txn.get(), "blocks");
  const MDB_dbi txs_pruned = open_test_table(txn.get(), "txs_pruned");
  const MDB_dbi txs_prunable = open_test_table(txn.get(), "txs_prunable");
  const MDB_dbi tx_indices = open_test_table(txn.get(), "tx_indices");

  check_lmdb(mdb_set_compare(txn.get(), blocks, BlockchainLMDB::compare_uint64), "Failed to set blocks comparator");
  check_lmdb(mdb_set_compare(txn.get(), txs_pruned, BlockchainLMDB::compare_uint64),
      "Failed to set txs_pruned comparator");
  check_lmdb(mdb_set_compare(txn.get(), txs_prunable, BlockchainLMDB::compare_uint64),
      "Failed to set txs_prunable comparator");
  check_lmdb(mdb_set_dupsort(txn.get(), tx_indices, BlockchainLMDB::compare_hash32),
      "Failed to set tx_indices comparator");

  const char block_blob = 0;
  MDB_val block_value{sizeof(block_blob), const_cast<char*>(&block_blob)};
  for (uint64_t height = 0; height <= CRYPTONOTE_PRUNING_TIP_BLOCKS; ++height)
  {
    MDB_val block_key{sizeof(height), &height};
    check_lmdb(mdb_put(txn.get(), blocks, &block_key, &block_value, MDB_APPEND), "Failed to add test block");
  }

  const char pruned_blob = 2;
  const char prunable_blob = 1;
  const uint64_t zero = 0;
  MDB_val tx_indices_key{sizeof(zero), const_cast<uint64_t*>(&zero)};
  for (uint64_t tx_id = 0; tx_id < records; ++tx_id)
  {
    MDB_val tx_key{sizeof(tx_id), &tx_id};
    MDB_val prunable_value{sizeof(prunable_blob), const_cast<char*>(&prunable_blob)};
    check_lmdb(mdb_put(txn.get(), txs_prunable, &tx_key, &prunable_value, MDB_APPEND),
        "Failed to add prunable test transaction");

    if (tx_id != missing_pruned_record)
    {
      MDB_val pruned_value{sizeof(pruned_blob), const_cast<char*>(&pruned_blob)};
      check_lmdb(mdb_put(txn.get(), txs_pruned, &tx_key, &pruned_value, MDB_APPEND),
          "Failed to add pruned test transaction");
    }

    txindex tx_index{};
    tx_index.key = pruning_test_hash(tx_id + 1);
    tx_index.data.tx_id = tx_id;
    tx_index.data.block_id = 0;
    MDB_val tx_index_value{sizeof(tx_index), &tx_index};
    check_lmdb(mdb_put(txn.get(), tx_indices, &tx_indices_key, &tx_index_value, MDB_APPENDDUP),
        "Failed to add test transaction index");
  }

  txn.commit();
}

void prepare_pruning_resume(const std::string& path, uint64_t missing_pruned_record, uint64_t matured_tip_record)
{
  test_lmdb_env env(path);
  test_lmdb_txn txn(env.get());
  const MDB_dbi txs_pruned = open_test_table(txn.get(), "txs_pruned");
  const MDB_dbi txs_prunable = open_test_table(txn.get(), "txs_prunable");
  const MDB_dbi txs_prunable_tip = open_test_table(txn.get(), "txs_prunable_tip");
  check_lmdb(mdb_set_compare(txn.get(), txs_pruned, BlockchainLMDB::compare_uint64),
      "Failed to set txs_pruned comparator");
  check_lmdb(mdb_set_compare(txn.get(), txs_prunable, BlockchainLMDB::compare_uint64),
      "Failed to set txs_prunable comparator");
  check_lmdb(mdb_set_dupsort(txn.get(), txs_prunable_tip, BlockchainLMDB::compare_uint64),
      "Failed to set txs_prunable_tip comparator");

  const char pruned_blob = 2;
  MDB_val missing_key{sizeof(missing_pruned_record), &missing_pruned_record};
  MDB_val pruned_value{sizeof(pruned_blob), const_cast<char*>(&pruned_blob)};
  check_lmdb(mdb_put(txn.get(), txs_pruned, &missing_key, &pruned_value, 0),
      "Failed to repair pruned test transaction");

  const char prunable_blob = 1;
  MDB_val tip_key{sizeof(matured_tip_record), &matured_tip_record};
  MDB_val prunable_value{sizeof(prunable_blob), const_cast<char*>(&prunable_blob)};
  check_lmdb(mdb_put(txn.get(), txs_prunable, &tip_key, &prunable_value, 0), "Failed to add matured tip transaction");

  const uint64_t block_height = 0;
  MDB_val tip_value{sizeof(block_height), const_cast<uint64_t*>(&block_height)};
  check_lmdb(mdb_put(txn.get(), txs_prunable_tip, &tip_key, &tip_value, 0), "Failed to add matured tip record");
  txn.commit();
}

size_t test_table_entries(const std::string& path, const char* name)
{
  test_lmdb_env env(path);
  test_lmdb_txn txn(env.get(), MDB_RDONLY);
  const MDB_dbi table = open_test_table(txn.get(), name);
  MDB_stat stat;
  check_lmdb(mdb_stat(txn.get(), table, &stat), "Failed to read LMDB table stats");
  return stat.ms_entries;
}

bool get_pruning_progress(const std::string& path, crypto::hash& progress)
{
  test_lmdb_env env(path);
  test_lmdb_txn txn(env.get(), MDB_RDONLY);
  const MDB_dbi properties = open_test_table(txn.get(), "properties");
  check_lmdb(mdb_set_compare(txn.get(), properties, BlockchainLMDB::compare_string),
      "Failed to set properties comparator");
  const char key_data[] = "pruning_progress";
  MDB_val key{sizeof(key_data), const_cast<char*>(key_data)};
  MDB_val value;
  const int result = mdb_get(txn.get(), properties, &key, &value);
  if (result == MDB_NOTFOUND)
    return false;
  check_lmdb(result, "Failed to read pruning progress");
  if (value.mv_size != sizeof(progress))
    throw std::runtime_error("Unexpected pruning progress size");
  memcpy(&progress, value.mv_data, sizeof(progress));
  return true;
}

template <typename T>
class BlockchainDBTest : public testing::Test
{
protected:
  BlockchainDBTest() : m_db(new T()), m_hardfork(*m_db, 1, 0)
  {
    for (auto& i : t_blocks)
    {
      block bl;
      blobdata bd = h2b(i);
      CHECK_AND_ASSERT_THROW_MES(parse_and_validate_block_from_blob(bd, bl), "Invalid block");
      m_blocks.push_back(std::make_pair(bl, bd));
    }
    for (auto& i : t_transactions)
    {
      std::vector<std::pair<transaction, blobdata>> txs;
      for (auto& j : i)
      {
        transaction tx;
        blobdata bd = h2b(j);
        CHECK_AND_ASSERT_THROW_MES(parse_and_validate_tx_from_blob(bd, tx), "Invalid transaction");
        txs.push_back(std::make_pair(tx, bd));
      }
      m_txs.push_back(txs);
    }
  }

  ~BlockchainDBTest() {
    delete m_db;
    remove_files();
  }

  BlockchainDB* m_db;
  HardFork m_hardfork;
  std::string m_prefix;
  std::vector<std::pair<block, blobdata>> m_blocks;
  std::vector<std::vector<std::pair<transaction, blobdata>>> m_txs;
  std::vector<std::string> m_filenames;

  void init_hard_fork()
  {
    m_hardfork.init();
    m_db->set_hard_fork(&m_hardfork);
  }

  void get_filenames()
  {
    m_filenames = m_db->get_filenames();
    for (auto& f : m_filenames)
    {
      std::cerr << "File created by test: " << f << std::endl;
    }
  }

  void remove_files()
  {
    // remove each file the db created, making sure it starts with fname.
    for (auto& f : m_filenames)
    {
      if (boost::starts_with(f, m_prefix))
      {
        boost::filesystem::remove(f);
      }
      else
      {
        std::cerr << "File created by test not to be removed (for safety): " << f << std::endl;
      }
    }

    // remove directory if it still exists
    boost::filesystem::remove_all(m_prefix);
  }

  void set_prefix(const std::string& prefix)
  {
    m_prefix = prefix;
  }
};

using testing::Types;

typedef Types<BlockchainLMDB> implementations;

TYPED_TEST_CASE(BlockchainDBTest, implementations);

TYPED_TEST(BlockchainDBTest, OpenAndClose)
{
  boost::filesystem::path tempPath = boost::filesystem::temp_directory_path() / boost::filesystem::unique_path();
  std::string dirPath = tempPath.string();

  this->set_prefix(dirPath);

  // make sure open does not throw
  ASSERT_NO_THROW(this->m_db->open(dirPath));
  this->get_filenames();

  // make sure open when already open DOES throw
  ASSERT_THROW(this->m_db->open(dirPath), DB_OPEN_FAILURE);

  ASSERT_NO_THROW(this->m_db->close());
}

TYPED_TEST(BlockchainDBTest, AddBlock)
{

  boost::filesystem::path tempPath = boost::filesystem::temp_directory_path() / boost::filesystem::unique_path();
  std::string dirPath = tempPath.string();

  this->set_prefix(dirPath);

  // make sure open does not throw
  ASSERT_NO_THROW(this->m_db->open(dirPath));
  this->get_filenames();
  this->init_hard_fork();

  db_wtxn_guard guard(this->m_db);

  // adding a block with no parent in the blockchain should throw.
  // note: this shouldn't be possible, but is a good (and cheap) failsafe.
  //
  // TODO: need at least one more block to make this reasonable, as the
  // BlockchainDB implementation should not check for parent if
  // no blocks have been added yet (because genesis has no parent).
  //ASSERT_THROW(this->m_db->add_block(this->m_blocks[1], t_sizes[1], t_sizes[1], t_diffs[1], t_coins[1], this->m_txs[1]), BLOCK_PARENT_DNE);

  cryptonote::audit_block_info abi;
  cryptonote::yield_block_info ybi;
  ASSERT_NO_THROW(this->m_db->add_block(this->m_blocks[0], t_sizes[0], t_sizes[0], t_diffs[0], t_coins[0], this->m_txs[0], cryptonote::FAKECHAIN, ybi, abi));
  ASSERT_NO_THROW(this->m_db->add_block(this->m_blocks[1], t_sizes[1], t_sizes[1], t_diffs[1], t_coins[1], this->m_txs[1], cryptonote::FAKECHAIN, ybi, abi));

  block b;
  ASSERT_TRUE(this->m_db->block_exists(get_block_hash(this->m_blocks[0].first)));
  ASSERT_NO_THROW(b = this->m_db->get_block(get_block_hash(this->m_blocks[0].first)));

  ASSERT_TRUE(compare_blocks(this->m_blocks[0].first, b));

  ASSERT_NO_THROW(b = this->m_db->get_block_from_height(0));

  ASSERT_TRUE(compare_blocks(this->m_blocks[0].first, b));

  // assert that we can't add the same block twice
  ASSERT_THROW(this->m_db->add_block(this->m_blocks[0], t_sizes[0], t_sizes[0], t_diffs[0], t_coins[0], this->m_txs[0], cryptonote::FAKECHAIN, ybi, abi), TX_EXISTS);

  for (auto& h : this->m_blocks[0].first.tx_hashes)
  {
    transaction tx;
    ASSERT_TRUE(this->m_db->tx_exists(h));
    ASSERT_NO_THROW(tx = this->m_db->get_tx(h));

    ASSERT_HASH_EQ(h, get_transaction_hash(tx));
  }
}

TYPED_TEST(BlockchainDBTest, RetrieveBlockData)
{
  boost::filesystem::path tempPath = boost::filesystem::temp_directory_path() / boost::filesystem::unique_path();
  std::string dirPath = tempPath.string();

  this->set_prefix(dirPath);

  // make sure open does not throw
  ASSERT_NO_THROW(this->m_db->open(dirPath));
  this->get_filenames();
  this->init_hard_fork();

  db_wtxn_guard guard(this->m_db);

  cryptonote::audit_block_info abi;
  cryptonote::yield_block_info ybi;
  ASSERT_NO_THROW(this->m_db->add_block(this->m_blocks[0], t_sizes[0], t_sizes[0],  t_diffs[0], t_coins[0], this->m_txs[0], cryptonote::FAKECHAIN, ybi, abi));

  ASSERT_EQ(t_sizes[0], this->m_db->get_block_weight(0));
  ASSERT_EQ(t_diffs[0], this->m_db->get_block_cumulative_difficulty(0));
  ASSERT_EQ(t_diffs[0], this->m_db->get_block_difficulty(0));
  ASSERT_EQ(t_coins[0], this->m_db->get_block_already_generated_coins(0));
  // A short requested range must not underflow the spendable-height index.
  const auto distribution = this->m_db->get_block_cumulative_rct_outputs({0}, "SAL");
  ASSERT_EQ(1u, distribution.first.size());
  EXPECT_EQ(0u, distribution.second);

  ASSERT_NO_THROW(this->m_db->add_block(this->m_blocks[1], t_sizes[1], t_sizes[1], t_diffs[1], t_coins[1], this->m_txs[1], cryptonote::FAKECHAIN, ybi, abi));
  ASSERT_EQ(t_diffs[1] - t_diffs[0], this->m_db->get_block_difficulty(1));

  ASSERT_HASH_EQ(get_block_hash(this->m_blocks[0].first), this->m_db->get_block_hash_from_height(0));

  std::vector<block> blks;
  ASSERT_NO_THROW(blks = this->m_db->get_blocks_range(0, 1));
  ASSERT_EQ(2, blks.size());
  
  ASSERT_HASH_EQ(get_block_hash(this->m_blocks[0].first), get_block_hash(blks[0]));
  ASSERT_HASH_EQ(get_block_hash(this->m_blocks[1].first), get_block_hash(blks[1]));

  std::vector<crypto::hash> hashes;
  ASSERT_NO_THROW(hashes = this->m_db->get_hashes_range(0, 1));
  ASSERT_EQ(2, hashes.size());

  ASSERT_HASH_EQ(get_block_hash(this->m_blocks[0].first), hashes[0]);
  ASSERT_HASH_EQ(get_block_hash(this->m_blocks[1].first), hashes[1]);
}

TYPED_TEST(BlockchainDBTest, MissingOutputIndicesFailCleanly)
{
  const auto path = boost::filesystem::temp_directory_path() / boost::filesystem::unique_path();
  this->set_prefix(path.string());
  ASSERT_NO_THROW(this->m_db->open(path.string()));
  this->get_filenames();
  EXPECT_THROW(this->m_db->get_tx_amount_output_indices(0, 1), DB_ERROR);
  EXPECT_TRUE(this->m_db->get_tx_amount_output_indices(0, 0).empty());
  ASSERT_NO_THROW(this->m_db->close());
}

TYPED_TEST(BlockchainDBTest, ResumeInterruptedPruning)
{
  static constexpr size_t checkpoint_records = 4096;
  static constexpr size_t records = checkpoint_records + 1;
  static constexpr size_t missing_pruned_record = checkpoint_records;
  static constexpr size_t matured_tip_record = 0;

  const auto test_resume = [&](bool update)
  {
    SCOPED_TRACE(update ? "update" : "manual");
    const boost::filesystem::path temp_path =
        boost::filesystem::temp_directory_path() / boost::filesystem::unique_path();
    const std::string dir_path = temp_path.string();
    this->set_prefix(dir_path);

    ASSERT_NO_THROW(this->m_db->open(dir_path));
    this->get_filenames();
    ASSERT_NO_THROW(this->m_db->close());
    ASSERT_NO_THROW(create_interrupted_pruning_data(dir_path, records, missing_pruned_record));

    const uint32_t pruning_seed = tools::make_pruning_seed(2, CRYPTONOTE_PRUNING_LOG_STRIPES);
    ASSERT_NO_THROW(this->m_db->open(dir_path));
    ASSERT_THROW(this->m_db->prune_blockchain(pruning_seed), DB_ERROR);
    ASSERT_NO_THROW(this->m_db->close());

    crypto::hash progress{};
    ASSERT_EQ(1, test_table_entries(dir_path, "txs_prunable"));
    ASSERT_TRUE(get_pruning_progress(dir_path, progress));
    ASSERT_HASH_EQ(pruning_test_hash(checkpoint_records), progress);

    ASSERT_NO_THROW(prepare_pruning_resume(dir_path, missing_pruned_record, matured_tip_record));
    ASSERT_EQ(2, test_table_entries(dir_path, "txs_prunable"));
    ASSERT_EQ(1, test_table_entries(dir_path, "txs_prunable_tip"));
    ASSERT_NO_THROW(this->m_db->open(dir_path));
    ASSERT_TRUE(update ? this->m_db->update_pruning() : this->m_db->prune_blockchain(pruning_seed));
    ASSERT_NO_THROW(this->m_db->close());

    ASSERT_EQ(0, test_table_entries(dir_path, "txs_prunable"));
    ASSERT_EQ(0, test_table_entries(dir_path, "txs_prunable_tip"));
    ASSERT_FALSE(get_pruning_progress(dir_path, progress));

    boost::filesystem::remove_all(dir_path);
    this->m_filenames.clear();
  };

  ASSERT_NO_FATAL_FAILURE(test_resume(true));
  ASSERT_NO_FATAL_FAILURE(test_resume(false));
}

}  // anonymous namespace

TEST(BlockchainDB, HashComparatorAcceptsUnalignedValues)
{
  alignas(uint32_t) unsigned char a[33] = {}, b[33] = {};
  uint32_t first[8] = {}, second[8] = {};
  first[0] = 0xffffffff;
  second[7] = 1;
  std::memcpy(a + 1, first, sizeof(first));
  std::memcpy(b + 1, second, sizeof(second));
  MDB_val left{32, a + 1}, right{32, b + 1};
  EXPECT_EQ(0, BlockchainLMDB::compare_hash32(&left, &left));
  EXPECT_LT(BlockchainLMDB::compare_hash32(&left, &right), 0);
  EXPECT_GT(BlockchainLMDB::compare_hash32(&right, &left), 0);
}
