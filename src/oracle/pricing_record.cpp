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
      uint64_t SAL;
      uint64_t VSD;
      
      BEGIN_KV_SERIALIZE_MAP()
        KV_SERIALIZE(SAL)
        KV_SERIALIZE(VSD)
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
      sal = in.SAL;
      vsd = in.VSD;
      return true;
    }
    // Report error here?
    return false;
  }

  bool supply_data::store(epee::serialization::portable_storage& dest, epee::serialization::section* hparent) const
  {
    const supply_data_serialized out{sal, vsd};
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

  uint64_t pricing_record::ma(const std::string& asset_type) const noexcept
  {
    for (const auto& asset: assets) {
      if (asset.asset_type != asset_type) continue;
      return asset.ma_price;
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

  std::string pricing_record::build_signing_message() const
  {
    // NOTE: this byte string is what gets signed and verified. It is built by hand so that
    // it matches the oracle's producer exactly; both sides now share this one function.
    std::ostringstream oss;
    oss << "{\"pr_version\":" << pr_version;
    oss << ",\"height\":" << height;
    oss << ",\"supply\":{\"SAL\":" << supply.sal << ",\"VSD\":" << supply.vsd << "}";
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
    return oss.str();
  }

  bool pricing_record::sign(const std::string& private_key)
  {
    CHECK_AND_ASSERT_THROW_MES(!private_key.empty(), "Pricing record signing failed. NULL private key.");

    BIO* bio = BIO_new_mem_buf(private_key.c_str(), private_key.size());
    if (!bio)
      return false;
    EVP_PKEY* pkey = PEM_read_bio_PrivateKey(bio, NULL, NULL, NULL);
    BIO_free(bio);
    CHECK_AND_ASSERT_THROW_MES(pkey != NULL, "Pricing record signing failed. Could not parse private key.");

    const std::string message = build_signing_message();

    std::vector<uint8_t> sig(EVP_PKEY_size(pkey));
    size_t sig_len = sig.size();
    EVP_MD_CTX* ctx = EVP_MD_CTX_create();
    int ret = 0;
    if (ctx) {
      ret = EVP_DigestSignInit(ctx, NULL, EVP_sha256(), NULL, pkey);
      if (ret == 1)
        ret = EVP_DigestSignUpdate(ctx, message.data(), message.length());
      if (ret == 1)
        ret = EVP_DigestSignFinal(ctx, sig.data(), &sig_len);
    }
    EVP_MD_CTX_destroy(ctx);
    EVP_PKEY_free(pkey);

    if (ret != 1) {
      ERR_print_errors_fp(stderr);
      return false;
    }

    sig.resize(sig_len);
    signature = std::move(sig);
    return true;
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

    // the exact bytes that were signed
    const std::string message = build_signing_message();

    // A pricing record is accepted if it verifies under ANY digest that the oracle
    // implementations have used in the field. This verifier used to hard-code SHA-256,
    // which made every record produced by a legacy OpenSSL 1.1 DSA signer fail (those
    // default to SHA-1) even though the record was genuine. Both attempts below use the
    // same configured key and a real digest, so a malformed, foreign or replayed
    // signature still fails both.
    static const EVP_MD *const accepted_digests[] = { EVP_sha256(), EVP_sha1() };
    int ret = 0;
    for (const EVP_MD *digest : accepted_digests) {
      ret = 0;
      // Create a verify digest from the message
      EVP_MD_CTX *ctx = EVP_MD_CTX_create();
      if (ctx) {
        ret = EVP_DigestVerifyInit(ctx, NULL, digest, NULL, pubkey);
        if (ret == 1) {
          ret = EVP_DigestVerifyUpdate(ctx, message.data(), message.length());
          if (ret == 1) {
            ret = EVP_DigestVerifyFinal(ctx, (const unsigned char *)signature.data(), signature.size());
          }
        }
      }

      // Cleanup the context we created
      EVP_MD_CTX_destroy(ctx);
      if (ret == 1)
        break;
      // Do not let the failed attempt leak into the next one (or into the log)
      ERR_clear_error();
    }

    // Cleanup the openssl stuff
    EVP_PKEY_free(pubkey);

    if (ret == 1)
      return true;

    // Consensus-reject path: never dump the OpenSSL error stack here (anyone could flood
    // the log with malformed signatures). One bounded line is enough.
    LOG_ERROR("Pricing record signature rejected under every accepted digest.");
    return false;
  }

  // The per-network activation height of the height binding (see
  // config::PRICING_RECORD_HEIGHT_BINDING_HEIGHT). 0 means every block that is subject to
  // HF_VERSION_ENABLE_ORACLE has to be bound to the record the oracle signed for it.
  uint64_t pricing_record::height_binding_height(cryptonote::network_type nettype)
  {
    // FAKECHAIN reuses the mainnet config_t, so its value is selected explicitly, exactly
    // like the oracle public key below.
    return (nettype == cryptonote::FAKECHAIN)
        ? config::FAKECHAIN_PRICING_RECORD_HEIGHT_BINDING_HEIGHT
        : get_config(nettype).PRICING_RECORD_HEIGHT_BINDING_HEIGHT;
  }

  // overload for pr validation for block
  bool pricing_record::valid(cryptonote::network_type nettype, uint32_t hf_version, uint64_t bl_height, uint64_t bl_timestamp, uint64_t last_bl_timestamp) const
  {
    return valid_with_binding_height(nettype, hf_version, height_binding_height(nettype),
                                     bl_height, bl_timestamp, last_bl_timestamp);
  }

  bool pricing_record::valid_with_binding_height(cryptonote::network_type nettype, uint32_t hf_version, uint64_t binding_height, uint64_t bl_height, uint64_t bl_timestamp, uint64_t last_bl_timestamp) const
  {
    // Contract: a block either carries no record at all, or it carries a record the oracle
    // signed for exactly this block height -- there is no third option, and in particular no
    // "record that was not really a record". empty() compares every field against the canonical
    // default, so a payload that sets a version, a height, a supply figure, an asset table, a
    // timestamp or a signature blob is a record and must pass the checks below; zeroing the
    // other fields does not buy a way around them.
    // Accepting a record-less block is not a hole either, it is a degradation: with no prices
    // the accessors return 0 and get_conversion_rate() refuses to convert
    // (src/cryptonote_core/cryptonote_tx_utils.cpp:274-280), so such a block can never mint a
    // CONVERT. An unreachable oracle therefore costs availability, not soundness.
    if (hf_version < HF_VERSION_SLIPPAGE_YIELD) {
      if (!this->empty())
        return false;
    }

    if (this->empty())
        return true;

    const std::string oracle_pk = (nettype == cryptonote::FAKECHAIN)
        ? config::FAKECHAIN_ORACLE_PUBLIC_KEY : get_config(nettype).ORACLE_PUBLIC_KEY;
    if (!verifySignature(oracle_pk)) {
      LOG_ERROR("Invalid pricing record signature.");
      return false;
    }

    // The oracle signs the height the record was priced for. A valid signature only proves that
    // the record is authentic, it does not prove that the record belongs to THIS block: without
    // the comparison below a freshly signed record can be replayed into any later block that is
    // still inside the timestamp window. The signed height is the binding, and it is unique per
    // block on a chain, so one record can only ever be spent by one block.
    // The binding is only in force from the network's activation height on; blocks below it
    // stay exempt so that chains which contain blocks mined before the rule existed can still
    // be re-connected (see PRICING_RECORD_HEIGHT_BINDING_HEIGHT and B2).
    const bool height_binding_active =
        hf_version >= HF_VERSION_ENABLE_ORACLE && bl_height >= binding_height;
    if (height_binding_active && this->height != bl_height) {
      LOG_ERROR("Pricing record height: " << this->height << ", block height: " << bl_height);
      LOG_ERROR("Pricing record is not bound to this block height.");
      return false;
    }

    // validate the timestmap
    if (this->timestamp > bl_timestamp + PRICING_RECORD_VALID_TIME_DIFF_FROM_BLOCK) {
      LOG_ERROR("Pricing record timestamp is too far in the future.");
      return false;
    }

    // NOTE: the record must be strictly newer than the previous block timestamp. Oracles
    // should publish timestamp = max(now, last_signed_timestamp + 1); otherwise two blocks
    // mined inside the same second cannot both be given a valid record.
    if (this->timestamp <= last_bl_timestamp) {
      LOG_ERROR("Pricing record timestamp: " << this->timestamp << ", block timestamp: " << bl_timestamp);
      LOG_ERROR("Pricing record timestamp is too old.");
      return false;
    }

    return true;
  }
}
