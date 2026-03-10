// Copyright (c) 2021, Haven Protocol
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
#include <cstdint>  // For uint8_t, etc.
#include <cstring>  // For memcpy
#include <string>
#include <vector>

namespace oracle {

  const std::vector<std::string> ASSET_TYPES = {"SAL", "SAL1", "BURN"};

  class asset_type_counts
  {

    public:

      // Fields 
      uint64_t SAL;
      uint64_t SAL1;
      uint64_t BURN;

      asset_type_counts() noexcept
        : SAL(0)
        , SAL1(0)
        , BURN(0)
      {
      }

      uint64_t operator[](const std::string asset_type) const noexcept
      {
        if (asset_type == "SAL") {
          return SAL;
        } else if (asset_type == "SAL1") {
          return SAL1;
        } else if (asset_type == "BURN") {
          return BURN;
        }

        return 0;
      }

      void add(const std::string asset_type, const uint64_t val)
      {
        if (asset_type == "SAL") {
          SAL += val;
        } else if (asset_type == "SAL1") {
          SAL1 += val;
        } else if (asset_type == "BURN") {
          BURN += val;
        }
      }
  };

  class asset_type_counts_v2
  {

  public:

    // Fields
    std::map<uint32_t, uint64_t> asset_counts;

    asset_type_counts_v2() noexcept
    : asset_counts{}
    {
    }

    uint64_t operator[](const uint32_t asset_type_id) const noexcept
    {
      if (asset_counts.count(asset_type_id) == 0)
        return 0;
      else
        return asset_counts.at(asset_type_id);
    }

    bool add(const uint32_t asset_type_id, const uint64_t amount)
    {
      if (asset_counts.count(asset_type_id) == 0)
        return false;
      asset_counts[asset_type_id] += amount;
      return true;
    }

    bool add_asset_type(const uint32_t asset_type_id)
    {
      if (asset_counts.count(asset_type_id) != 0)
        return false;
      asset_counts[asset_type_id] = 0;
      return true;
    }
    
    std::map<uint32_t, uint64_t> get()
    {
      return asset_counts;
    }
    
    std::vector<uint32_t> get_asset_types() const noexcept
    {
      std::vector<uint32_t> asset_type_ids;
      for (const auto& entry: asset_counts) {
        asset_type_ids.push_back(entry.first);
      }
      return asset_type_ids;
    }

    bool has_asset_type(const uint32_t asset_type_id) const noexcept
    {
      return asset_counts.count(asset_type_id) == 1;
    }
    
    std::vector<uint8_t> serialize() const noexcept {
      constexpr uint8_t version = 1;  // Bump if format changes
      uint32_t sz = static_cast<uint32_t>(asset_counts.size());
      size_t total_size = sizeof(uint8_t) + sizeof(uint32_t) + (sz * (sizeof(uint32_t) + sizeof(uint64_t)));
      std::vector<uint8_t> buf(total_size);
      uint8_t* ptr = buf.data();

      std::memcpy(ptr, &version, sizeof(uint8_t));
      ptr += sizeof(uint8_t);

      std::memcpy(ptr, &sz, sizeof(uint32_t));
      ptr += sizeof(uint32_t);

      for (const auto& p : asset_counts) {  // Iterates in sorted order
        std::memcpy(ptr, &p.first, sizeof(uint32_t));
        ptr += sizeof(uint32_t);
        std::memcpy(ptr, &p.second, sizeof(uint64_t));
        ptr += sizeof(uint64_t);
      }
      return buf;
    }

    void deserialize(const uint8_t* data, size_t len) {
      if (len < sizeof(uint32_t)) {
        throw std::runtime_error("Invalid serialized data");
      }

      uint8_t version;
      std::memcpy(&version, data, sizeof(uint8_t));
      data += sizeof(uint8_t);
      len -= sizeof(uint8_t);

      if (version == 1) {
        if (len < sizeof(uint32_t)) {
          throw std::runtime_error("Invalid serialized data");
        }
      } else {
        throw std::runtime_error("Unsupported version");
      }

      uint32_t sz;
      std::memcpy(&sz, data, sizeof(uint32_t));
      data += sizeof(uint32_t);
      len -= sizeof(uint32_t);

      if (len != sz * (sizeof(uint32_t) + sizeof(uint64_t))) {
        throw std::runtime_error("Invalid serialized data length");
      }

      asset_counts.clear();
      for (uint32_t i = 0; i < sz; ++i) {
        uint32_t k;
        uint64_t v;
        std::memcpy(&k, data, sizeof(uint32_t));
        data += sizeof(uint32_t);
        std::memcpy(&v, data, sizeof(uint64_t));
        data += sizeof(uint64_t);
        asset_counts[k] = v;  // Map handles sorting/uniquness
      }
    }
  };
}
