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

#pragma once

#include <unordered_map>
#include <vector>
#include <boost/thread/shared_mutex.hpp>

#include "cryptonote_basic/cryptonote_basic_impl.h"
#include "cryptonote_basic/subaddress_index.h"
#include "serialization/containers.h"
#include "unordered_containers_boost_serialization.h"

namespace tools
{
  class keystore
  {
  public:
    // Constructor: initialize from an existing map (default empty)
    explicit keystore(
        const std::unordered_map<crypto::public_key, cryptonote::subaddress_index>& init_map = {});

    // Prevent copying
    keystore(const keystore&) = delete;
    keystore& operator=(const keystore&) = delete;

    // Allow moving
    keystore(keystore&&) noexcept = default;
    keystore& operator=(keystore&&) noexcept = default;

    // Add or update a key -> subaddress index mapping
    void add(const crypto::public_key& key, const cryptonote::subaddress_index& index);

    // Remove a key
    bool remove(const crypto::public_key& key);

    // Check if key exists
    bool contains(const crypto::public_key& key) const;

    // Get all the map entries
    std::unordered_map<crypto::public_key, cryptonote::subaddress_index> get_all() const;

    // Get all keys as vector
    std::vector<crypto::public_key> get_all_keys() const;
    
    // Get the subaddress index for a given public key (if present)
    bool get_index(const crypto::public_key& key, cryptonote::subaddress_index& index_out) const;

    // Clear all entries
    void clear();

    // Get size
    size_t size() const;
    
  private:
    std::unordered_map<crypto::public_key, cryptonote::subaddress_index> m_subaddresses;
    mutable boost::shared_mutex m_mutex;
  };
}
