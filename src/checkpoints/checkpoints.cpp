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

#include "checkpoints.h"

#include "common/dns_utils.h"
#include "string_tools.h"
#include "storages/portable_storage_template_helper.h" // epee json include
#include "serialization/keyvalue_serialization.h"
#include <boost/system/error_code.hpp>
#include <boost/filesystem.hpp>
#include <functional>
#include <vector>

using namespace epee;

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "checkpoints"

namespace cryptonote
{
  /**
   * @brief struct for loading a checkpoint from json
   */
  struct t_hashline
  {
    uint64_t height; //!< the height of the checkpoint
    std::string hash; //!< the hash for the checkpoint
        BEGIN_KV_SERIALIZE_MAP()
          KV_SERIALIZE(height)
          KV_SERIALIZE(hash)
        END_KV_SERIALIZE_MAP()
  };

  /**
   * @brief struct for loading many checkpoints from json
   */
  struct t_hash_json {
    std::vector<t_hashline> hashlines; //!< the checkpoint lines from the file
        BEGIN_KV_SERIALIZE_MAP()
          KV_SERIALIZE(hashlines)
        END_KV_SERIALIZE_MAP()
  };

  //---------------------------------------------------------------------------
  checkpoints::checkpoints()
  {
  }
  //---------------------------------------------------------------------------
  bool checkpoints::add_checkpoint(uint64_t height, const std::string& hash_str, const std::string& difficulty_str)
  {
    crypto::hash h = crypto::null_hash;
    bool r = epee::string_tools::hex_to_pod(hash_str, h);
    CHECK_AND_ASSERT_MES(r, false, "Failed to parse checkpoint hash string into binary representation!");

    // return false if adding at a height we already have AND the hash is different
    if (m_points.count(height))
    {
      CHECK_AND_ASSERT_MES(h == m_points[height], false, "Checkpoint at given height already exists, and hash for new checkpoint was different!");
    }
    m_points[height] = h;
    if (!difficulty_str.empty())
    {
      try
      {
        difficulty_type difficulty(difficulty_str);
        if (m_difficulty_points.count(height))
        {
          CHECK_AND_ASSERT_MES(difficulty == m_difficulty_points[height], false, "Difficulty checkpoint at given height already exists, and difficulty for new checkpoint was different!");
        }
        m_difficulty_points[height] = difficulty;
      }
      catch (...)
      {
        LOG_ERROR("Failed to parse difficulty checkpoint: " << difficulty_str);
        return false;
      }
    }
    return true;
  }
  //---------------------------------------------------------------------------
  bool checkpoints::is_in_checkpoint_zone(uint64_t height) const
  {
    return !m_points.empty() && (height <= (--m_points.end())->first);
  }
  //---------------------------------------------------------------------------
  bool checkpoints::check_block(uint64_t height, const crypto::hash& h, bool& is_a_checkpoint) const
  {
    auto it = m_points.find(height);
    is_a_checkpoint = it != m_points.end();
    if(!is_a_checkpoint)
      return true;

    if(it->second == h)
    {
      MINFO("CHECKPOINT PASSED FOR HEIGHT " << height << " " << h);
      return true;
    }else
    {
      MWARNING("CHECKPOINT FAILED FOR HEIGHT " << height << ". EXPECTED HASH: " << it->second << ", FETCHED HASH: " << h);
      return false;
    }
  }
  //---------------------------------------------------------------------------
  bool checkpoints::check_block(uint64_t height, const crypto::hash& h) const
  {
    bool ignored;
    return check_block(height, h, ignored);
  }
  //---------------------------------------------------------------------------
  //FIXME: is this the desired behavior?
  bool checkpoints::is_alternative_block_allowed(uint64_t blockchain_height, uint64_t block_height) const
  {
    if (0 == block_height)
      return false;

    auto it = m_points.upper_bound(blockchain_height);
    // Is blockchain_height before the first checkpoint?
    if (it == m_points.begin())
      return true;

    --it;
    uint64_t checkpoint_height = it->first;
    return checkpoint_height < block_height;
  }
  //---------------------------------------------------------------------------
  uint64_t checkpoints::get_max_height() const
  {
    if (m_points.empty())
      return 0;
    return m_points.rbegin()->first;
  }
  //---------------------------------------------------------------------------
  const std::map<uint64_t, crypto::hash>& checkpoints::get_points() const
  {
    return m_points;
  }
  //---------------------------------------------------------------------------
  const std::map<uint64_t, difficulty_type>& checkpoints::get_difficulty_points() const
  {
    return m_difficulty_points;
  }

  bool checkpoints::check_for_conflicts(const checkpoints& other) const
  {
    for (auto& pt : other.get_points())
    {
      if (m_points.count(pt.first))
      {
        CHECK_AND_ASSERT_MES(pt.second == m_points.at(pt.first), false, "Checkpoint at given height already exists, and hash for new checkpoint was different!");
      }
    }
    return true;
  }

  bool checkpoints::init_default_checkpoints(network_type nettype)
  {
    if (nettype == MAINNET) {
      ADD_CHECKPOINT2(1,     "b6b45052e7e182ebaeb14ab713db29ad979115e664d766aa0910e325564a27a6", "0x2");
      ADD_CHECKPOINT2(10,    "82724681cf6bd934eb3253d041de50206a77627ce40ffe418ce6e0fe392ec684", "0x7812a");
      ADD_CHECKPOINT2(20,    "4dac7b512d876df05bfa4f39b8dbacd75cb1483fbced8bfc5446ebe21b25a04f", "0xba98f");
      ADD_CHECKPOINT2(30,    "668246360c93ef791a59157cec9cd09722b32a966051feea399082433138f07b", "0xcc235");
      ADD_CHECKPOINT2(40,    "9a4183bc1d6e9828eac46505c5ef37ae5447ba6c9325dca02be9e1201f939a7d", "0xdf077");
      ADD_CHECKPOINT2(50,    "5cd8b089d2e77aed9b803b398c6bff07ca652100cb8fa114c91b72509aeeb7e9", "0xf37eb");
      ADD_CHECKPOINT2(60,    "0e1acf00dd38e0757996dcdc4b69ad54baf7ebe10ae1e8168b192acb1a0ed7f2", "0x10993b");
      ADD_CHECKPOINT2(70,    "988977507f388221a927e279307b548a0ae0de10ded8c4f22c315e1b483f921a", "0x121537");
      ADD_CHECKPOINT2(80,    "88ea1c49b20e7596e21ca8137b2a9fa98558df269a15816fe7d7495f1c63ea43", "0x13a290");
      ADD_CHECKPOINT2(90,    "254800bb6f9794aad95b2226ffc1a1eef0a817472e1877ae08fac6becb55b147", "0x153a55");
      ADD_CHECKPOINT2(100,   "ba8d75fad878af26ac2504b4868893a7f86c59f013d0f096925cf53271dd04e8", "0x16e91e");
      ADD_CHECKPOINT2(110,   "dca0779bfe403730b923fa0918645daeec6096b953be2c554f133460c6fcce35", "0x18acb9");
      ADD_CHECKPOINT2(120,   "5a57287f6b5c105ae264b88050731c5b9ad1313b916143d7585af1d345e70247", "0x1a88f5");
      ADD_CHECKPOINT2(130,   "4fd292ac0774461e968924f8097e78ec03eee43a2997deaddbc7993e470a61d6", "0x1c6edd");
      ADD_CHECKPOINT2(140,   "5a3b6ceeef5fd498ea3330acb8a0e87f2c1566c9b0100ad67237e5664d1f053b", "0x1e4991");
      ADD_CHECKPOINT2(150,   "78f26d08d39f7d5e1a3548277321471e16c95096fa9bcecbe8a420d406ee249b", "0x202406");
      ADD_CHECKPOINT2(160,   "7acaab1037ccfbadd3126d2612d5dc154020297f980df0b8df462f9c761d3326", "0x22154b");
      ADD_CHECKPOINT2(170,   "9541ae934e40fa6749ca3453e47cf5fdf38efbac9efcaa2714121e8a21dd2d24", "0x241ce7");
      ADD_CHECKPOINT2(180,   "e20bc8ac6aabb6b0792f23a29ce42a577c6a57d177a8ac1a51b68fb6de508045", "0x262b40");
      ADD_CHECKPOINT2(190,   "f69fdad7a15471b63a82668b618ee5b2a384291269d944b11974a723c1604124", "0x2856a3");
      ADD_CHECKPOINT2(200,   "eba53fa7006dfcdc837a56c0bc8f0e1883cf34861c26934d680252a6878a3f5d", "0x2aa022");
      ADD_CHECKPOINT2(90000, "e125b5c1b26521f98e29df6ec88f041c176a2c0a3fcacd5bd0ad2278e9b02fd2", "0xc99801f937888"); // 3546475285149832
    }
    return true;
  }

  bool checkpoints::load_checkpoints_from_json(const std::string &json_hashfile_fullpath)
  {
    boost::system::error_code errcode;
    if (! (boost::filesystem::exists(json_hashfile_fullpath, errcode)))
    {
      LOG_PRINT_L1("Blockchain checkpoints file not found");
      return true;
    }

    LOG_PRINT_L1("Adding checkpoints from blockchain hashfile");

    uint64_t prev_max_height = get_max_height();
    LOG_PRINT_L1("Hard-coded max checkpoint height is " << prev_max_height);
    t_hash_json hashes;
    if (!epee::serialization::load_t_from_json_file(hashes, json_hashfile_fullpath))
    {
      MERROR("Error loading checkpoints from " << json_hashfile_fullpath);
      return false;
    }
    for (std::vector<t_hashline>::const_iterator it = hashes.hashlines.begin(); it != hashes.hashlines.end(); )
    {
      uint64_t height;
      height = it->height;
      if (height <= prev_max_height) {
	LOG_PRINT_L1("ignoring checkpoint height " << height);
      } else {
	std::string blockhash = it->hash;
	LOG_PRINT_L1("Adding checkpoint height " << height << ", hash=" << blockhash);
	ADD_CHECKPOINT(height, blockhash);
      }
      ++it;
    }

    return true;
  }

  bool checkpoints::load_checkpoints_from_dns(network_type nettype)
  {
    std::vector<std::string> records;

    // All four MoneroPulse domains have DNSSEC on and valid
    static const std::vector<std::string> dns_urls = { /*"checkpoints.moneropulse.se"
						     , "checkpoints.moneropulse.org"
						     , "checkpoints.moneropulse.net"
						     , "checkpoints.moneropulse.co"*/
    };

    static const std::vector<std::string> testnet_dns_urls = { /*"testpoints.moneropulse.se"
							     , "testpoints.moneropulse.org"
							     , "testpoints.moneropulse.net"
							     , "testpoints.moneropulse.co"*/
    };

    static const std::vector<std::string> stagenet_dns_urls = { /*"stagenetpoints.moneropulse.se"
                   , "stagenetpoints.moneropulse.org"
                   , "stagenetpoints.moneropulse.net"
                   , "stagenetpoints.moneropulse.co"*/
    };

    if (!tools::dns_utils::load_txt_records_from_dns(records, nettype == TESTNET ? testnet_dns_urls : nettype == STAGENET ? stagenet_dns_urls : dns_urls))
      return true; // why true ?

    for (const auto& record : records)
    {
      auto pos = record.find(":");
      if (pos != std::string::npos)
      {
        uint64_t height;
        crypto::hash hash;

        // parse the first part as uint64_t,
        // if this fails move on to the next record
        std::stringstream ss(record.substr(0, pos));
        if (!(ss >> height))
        {
    continue;
        }

        // parse the second part as crypto::hash,
        // if this fails move on to the next record
        std::string hashStr = record.substr(pos + 1);
        if (!epee::string_tools::hex_to_pod(hashStr, hash))
        {
    continue;
        }

        ADD_CHECKPOINT(height, hashStr);
      }
    }
    return true;
  }

  bool checkpoints::load_new_checkpoints(const std::string &json_hashfile_fullpath, network_type nettype, bool dns)
  {
    bool result;

    result = load_checkpoints_from_json(json_hashfile_fullpath);
    if (dns)
    {
      result &= load_checkpoints_from_dns(nettype);
    }

    return result;
  }
}
