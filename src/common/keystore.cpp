// Copyright (c) 2025, Salvium
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

#include "keystore.h"

namespace tools
{

  keystore::keystore(const std::unordered_map<crypto::public_key, cryptonote::subaddress_index>& init_map)
    : m_subaddresses(init_map) {}

  void keystore::add(const crypto::public_key& key, const cryptonote::subaddress_index& index) {
    boost::unique_lock<boost::shared_mutex> lock(m_mutex);
    m_subaddresses[key] = index;
  }

  bool keystore::remove(const crypto::public_key& key) {
    boost::unique_lock<boost::shared_mutex> lock(m_mutex);
    auto it = m_subaddresses.find(key);
    if (it != m_subaddresses.end()) {
      m_subaddresses.erase(it);
      return true;
    }
    return false;
  }

  bool keystore::contains(const crypto::public_key& key) const {
    boost::shared_lock<boost::shared_mutex> lock(m_mutex);
    return m_subaddresses.find(key) != m_subaddresses.end();
  }

  bool keystore::get_index(const crypto::public_key& key, cryptonote::subaddress_index& index_out) const {
    boost::shared_lock<boost::shared_mutex> lock(m_mutex);
    auto it = m_subaddresses.find(key);
    if (it != m_subaddresses.end()) {
      index_out = it->second;
      return true;
    }
    return false;
  }

  std::unordered_map<crypto::public_key, cryptonote::subaddress_index> keystore::get_all() const {
    boost::shared_lock<boost::shared_mutex> lock(m_mutex);
    return m_subaddresses;
  }

  std::vector<crypto::public_key> keystore::get_all_keys() const {
    boost::shared_lock<boost::shared_mutex> lock(m_mutex);
    std::vector<crypto::public_key> result;
    result.reserve(m_subaddresses.size());
    for (const auto& pair : m_subaddresses) {
      result.push_back(pair.first);
    }
    return result;
  }

  void keystore::clear() {
    boost::unique_lock<boost::shared_mutex> lock(m_mutex);
    m_subaddresses.clear();
  }

  size_t keystore::size() const {
    boost::shared_lock<boost::shared_mutex> lock(m_mutex);
    return m_subaddresses.size();
  }
}
