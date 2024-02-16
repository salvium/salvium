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

#include <boost/multiprecision/cpp_int.hpp>
#include "pricing_record.h"

#include "serialization/keyvalue_serialization.h"
#include "storages/portable_storage.h"

#include "string_tools.h"
namespace oracle
{

  namespace
  {
    struct asset_data_serialized
    {
      std::string asset_type;
      uint64_t spot_price;
      uint64_t ma_price;

      BEGIN_KV_SERIALIZE_MAP()
        KV_SERIALIZE(asset_type)
        KV_SERIALIZE(spot_price)
        KV_SERIALIZE(ma_price)
      END_KV_SERIALIZE_MAP()
    };

    struct supply_data_serialized
    {
      uint64_t FULM;
      uint64_t FUSD;
      
      BEGIN_KV_SERIALIZE_MAP()
        KV_SERIALIZE(FULM)
        KV_SERIALIZE(FUSD)
      END_KV_SERIALIZE_MAP()
    };

    struct pr_serialized
    {
      uint64_t pr_version;
      uint64_t height;
      supply_data supply;
      std::vector<asset_data> assets;
      uint64_t timestamp;
      std::string signature;

      BEGIN_KV_SERIALIZE_MAP()
        KV_SERIALIZE(pr_version)
        KV_SERIALIZE(height)
        KV_SERIALIZE(supply)
        KV_SERIALIZE(assets)
        KV_SERIALIZE(timestamp)
        KV_SERIALIZE(signature)
      END_KV_SERIALIZE_MAP()
    };
  }
  
  pricing_record::pricing_record() noexcept
    : pr_version(0)
    , height(0)
    , supply()
    , assets()
    , timestamp(0)
    , signature()
  {
  }

  pricing_record::~pricing_record() noexcept
  {
  }
  
  bool supply_data::_load(epee::serialization::portable_storage& src, epee::serialization::section* hparent)
  {
    supply_data_serialized in{};
    if (in._load(src, hparent))
    {
      // Copy everything into the local instance
      fulm = in.FULM;
      fusd = in.FUSD;
      return true;
    }
    // Report error here?
    return false;
  }

  bool supply_data::store(epee::serialization::portable_storage& dest, epee::serialization::section* hparent) const
  {
    const supply_data_serialized out{fulm, fusd};
    return out.store(dest, hparent);
  }
  
  bool asset_data::_load(epee::serialization::portable_storage& src, epee::serialization::section* hparent)
  {
    asset_data_serialized in{};
    if (in._load(src, hparent))
    {
      // Copy everything into the local instance
      asset_type = in.asset_type;
      spot_price = in.spot_price;
      ma_price   = in.ma_price;
      return true;
    }
    // Report error here?
    return false;
  }

  bool asset_data::store(epee::serialization::portable_storage& dest, epee::serialization::section* hparent) const
  {
    const asset_data_serialized out{asset_type, spot_price, ma_price};
    return out.store(dest, hparent);
  }
  
  bool pricing_record::_load(epee::serialization::portable_storage& src, epee::serialization::section* hparent)
  {
    pr_serialized in{};
    if (in._load(src, hparent))
    {
      // Copy everything into the local instance
      pr_version = in.pr_version;
      height = in.height;
      supply = in.supply;
      assets = in.assets;
      timestamp = in.timestamp;

      // Signature arrives in HEX format, but needs to be used in BINARY format - convert it here
      signature.resize(0);
      assert(in.signature.size()%2 == 0);
      signature.reserve(in.signature.size() >> 1);
      for (unsigned int i = 0; i < in.signature.size(); i += 2) {
        std::string byteString = in.signature.substr(i, 2);
        signature.emplace_back((uint8_t)strtol(byteString.c_str(), NULL, 16));
      }
      return true;
    }

    // Report error here?
    return false;
  }

  bool pricing_record::store(epee::serialization::portable_storage& dest, epee::serialization::section* hparent) const
  {
    std::string sig_hex;
    for (size_t i=0; i<signature.size(); ++i) {
      std::stringstream ss;
      ss << std::hex << std::setw(2) << std::setfill('0') << (0xff & signature.at(i));
      sig_hex += ss.str();
    }
    const pr_serialized out{pr_version, height, supply, assets, timestamp, sig_hex};
    return out.store(dest, hparent);
  }
  
  pricing_record::pricing_record(const pricing_record& orig) noexcept
    : pr_version(orig.pr_version)
    , height(orig.height)
    , supply(orig.supply)
    , assets(orig.assets)
    , timestamp(orig.timestamp)
    , signature(orig.signature)
  {
  }

  pricing_record& pricing_record::operator=(const pricing_record& orig) noexcept
  {
    pr_version = orig.pr_version;
    height = orig.height;
    supply = orig.supply;
    assets = orig.assets;
    timestamp = orig.timestamp;
    signature = orig.signature;
    return *this;
  }

  uint64_t pricing_record::operator[](const std::string& asset_type) const
  {
    for (const auto& asset: assets) {
      if (asset.asset_type != asset_type) continue;
      return asset.spot_price;
    }
    return 0;
  }
  
  bool pricing_record::equal(const pricing_record& other) const noexcept
  {
    return ((pr_version == other.pr_version) &&
            (height == other.height) &&
            (supply == other.supply) &&
            (assets == other.assets) &&
            (timestamp == other.timestamp) &&
            (signature == other.signature));
  }

  bool pricing_record::empty() const noexcept
  {
    const pricing_record empty_pr = oracle::pricing_record();
    return (*this).equal(empty_pr);
  }

  bool pricing_record::verifySignature(const std::string& public_key) const
  {
    CHECK_AND_ASSERT_THROW_MES(!public_key.empty(), "Pricing record verification failed. NULL public key. PK Size: " << public_key.size());

    // extract the key
    EVP_PKEY* pubkey;
    BIO* bio = BIO_new_mem_buf(public_key.c_str(), public_key.size());
    if (!bio) {
      return false;
    }
    pubkey = PEM_read_bio_PUBKEY(bio, NULL, NULL, NULL);
    BIO_free(bio);
    CHECK_AND_ASSERT_THROW_MES(pubkey != NULL, "Pricing record verification failed. NULL public key.");

    // Build the JSON string, so that we can verify the signature
    std::ostringstream oss;
    oss << "{\"pr_version\":" << pr_version;
    oss << ",\"height\":" << height;
    oss << ",\"supply\":{\"FULM\":" << supply.fulm <<",\"FUSD\":" << supply.fusd << "}";
    oss << ",\"assets\":[";
    bool first = true;
    for (const auto& asset: assets) {
      if (first)
        first=false;
      else
        oss << ",";
      oss << "{\"asset_type\":\"" << asset.asset_type << "\",\"spot_price\":" << asset.spot_price << ",\"ma_price\":" << asset.ma_price << "}";
    }
    oss << "]";
    oss << ",\"timestamp\":" << timestamp;
    oss << "}";
    std::string message = oss.str();

    // Create a verify digest from the message
    EVP_MD_CTX *ctx = EVP_MD_CTX_create();
    int ret = 0;
    if (ctx) {
      ret = EVP_DigestVerifyInit(ctx, NULL, EVP_sha256(), NULL, pubkey);
      if (ret == 1) {
        ret = EVP_DigestVerifyUpdate(ctx, message.data(), message.length());
        if (ret == 1) {
          ret = EVP_DigestVerifyFinal(ctx, (const unsigned char *)signature.data(), signature.size());
        }
      }
    }

    // Cleanup the context we created
    EVP_MD_CTX_destroy(ctx);
    // Cleanup the openssl stuff
    EVP_PKEY_free(pubkey);

    if (ret == 1)
      return true;

    // Get the errors from OpenSSL
    ERR_print_errors_fp (stderr);

    return false;
  }

  // overload for pr validation for block
  bool pricing_record::valid(cryptonote::network_type nettype, uint32_t hf_version, uint64_t bl_timestamp, uint64_t last_bl_timestamp) const 
  {
    if (hf_version < HF_VERSION_SLIPPAGE_YIELD) {
      if (!this->empty())
        return false;
    }

    if (this->empty())
        return true;

    if (!verifySignature(get_config(nettype).ORACLE_PUBLIC_KEY)) {
      LOG_ERROR("Invalid pricing record signature.");
      return false;
    }

    // validate the timestmap
    if (this->timestamp > bl_timestamp + PRICING_RECORD_VALID_TIME_DIFF_FROM_BLOCK) {
      LOG_ERROR("Pricing record timestamp is too far in the future.");
      return false;
    }

    if (this->timestamp <= last_bl_timestamp) {
      LOG_ERROR("Pricing record timestamp: " << this->timestamp << ", block timestamp: " << bl_timestamp);
      LOG_ERROR("Pricing record timestamp is too old.");
      return false;
    }

    return true;
  }
}
