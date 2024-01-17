// Copyright (c) 2019, Haven Protocol
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
// Portions of this code based upon code Copyright (c) 2019, The Monero Project

#pragma once
#include "common/pod-class.h"

#include <openssl/bio.h>
#include <openssl/crypto.h>
#include <openssl/ecdsa.h>
#include <openssl/err.h>
#include <openssl/evp.h>
#include <openssl/pem.h>
#include <openssl/rsa.h>
#include <openssl/ssl.h>

#include <cstdint>
#include <string>
#include <cstring>
#include <serialization/containers.h>

#include "cryptonote_config.h"
#include "crypto/hash.h"

namespace epee
{
  namespace serialization
  {
    class portable_storage;
    struct section;
  }
}

namespace oracle
{
  #pragma pack(push, 1)
  POD_CLASS pricing_record_pre {
    uint64_t pr_version;
    uint64_t price;
    uint64_t timestamp;
  };
  #pragma pack(pop)

  struct supply_data {
    uint64_t fulm;
    uint64_t fusd;

    //! Load from epee p2p format
    bool _load(epee::serialization::portable_storage& src, epee::serialization::section* hparent);
    //! Store in epee p2p format
    bool store(epee::serialization::portable_storage& dest, epee::serialization::section* hparent) const;

    BEGIN_SERIALIZE_OBJECT()
      VARINT_FIELD(fulm)
      VARINT_FIELD(fusd)
    END_SERIALIZE()
  };

  inline bool operator==(const supply_data& a, const supply_data& b) noexcept
  {
    return (a.fulm == b.fulm &&
            a.fusd == b.fusd);
  }
  
  struct asset_data {
    std::string asset_type;
    uint64_t spot_price;
    uint64_t ma_price;

    //! Load from epee p2p format
    bool _load(epee::serialization::portable_storage& src, epee::serialization::section* hparent);
    //! Store in epee p2p format
    bool store(epee::serialization::portable_storage& dest, epee::serialization::section* hparent) const;

    BEGIN_SERIALIZE_OBJECT()
      FIELD(asset_type)
      VARINT_FIELD(spot_price)
      VARINT_FIELD(ma_price)
    END_SERIALIZE()
  };
  
  inline bool operator==(const asset_data& a, const asset_data& b) noexcept
  {
    return (a.asset_type == b.asset_type &&
            a.spot_price == b.spot_price &&
            a.ma_price == b.ma_price);
  }

  struct pricing_record
  {
    // Fields 
    uint64_t pr_version;
    uint64_t height;
    supply_data supply; 
    std::vector<asset_data> assets;
    uint64_t timestamp;
    std::vector<uint8_t> signature;

    // Default c'tor
    pricing_record() noexcept;
    //! Load from epee p2p format
    bool _load(epee::serialization::portable_storage& src, epee::serialization::section* hparent);
    //! Store in epee p2p format
    bool store(epee::serialization::portable_storage& dest, epee::serialization::section* hparent) const;
    pricing_record(const pricing_record& orig) noexcept;
    ~pricing_record() noexcept;
    bool equal(const pricing_record& other) const noexcept;
    bool empty() const noexcept;
    bool verifySignature(const std::string& public_key) const;
    bool valid(cryptonote::network_type nettype, uint32_t hf_version, uint64_t bl_timestamp, uint64_t last_bl_timestamp) const;

    pricing_record& operator=(const pricing_record& orig) noexcept;
    uint64_t operator[](const std::string& asset_type) const;

    BEGIN_SERIALIZE_OBJECT()
      VARINT_FIELD(pr_version)
      VARINT_FIELD(height)
      FIELD(supply)
      FIELD(assets)
      VARINT_FIELD(timestamp)
      FIELD(signature)
    END_SERIALIZE()
  };

  inline bool operator==(const pricing_record& a, const pricing_record& b) noexcept
  {
   return a.equal(b);
  }
  
  inline bool operator!=(const pricing_record& a, const pricing_record& b) noexcept
  {
   return !a.equal(b);
  }

} // oracle
