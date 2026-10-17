// Copyright (c) 2019-2021, Haven Protocol
// Portions copyright (c) 2016-2019, The Monero Project
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

#include "gtest/gtest.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "serialization/binary_archive.h"
#include "serialization/json_archive.h"
#include "serialization/debug_archive.h"
#include "serialization/variant.h"
#include "serialization/containers.h"
#include "serialization/binary_utils.h"
#include "serialization/pricing_record.h"
#include "cryptonote_core/cryptonote_tx_utils.h"
#include "string_tools.h"
#include <openssl/evp.h>
#include <openssl/pem.h>
#include <openssl/err.h>

TEST(pricing_record, verify_serialization)
{
  oracle::pricing_record pr;
  oracle::pricing_record pr1;
  pr.pr_version = 1;
  pr.height = 1234;
  pr.supply = {100000,0};
  pr.timestamp = 1632401454;
  pr.assets = {};
  pr.signature = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

  std::string blob;
  ASSERT_TRUE(serialization::dump_binary(pr, blob));
  ASSERT_TRUE(serialization::parse_binary(blob, pr1));
  ASSERT_EQ(pr, pr1);
}

/*
TEST(pricing_record, verify_empty)
{
  oracle::pricing_record pr;
  EXPECT_TRUE(pr.valid(cryptonote::network_type::MAINNET, 17, pr.height, 1632401454, 1632400454));
}

TEST(pricing_record, fail_if_empty_signatuere)
{
  oracle::pricing_record pr;
  pr.xNZD = 1;
  EXPECT_FALSE(pr.valid(cryptonote::network_type::MAINNET, 17, pr.height, 1632401454, 1632400454));
}

TEST(pricing_record, verify_known_good)
{
  oracle::pricing_record pr;
  const std::string pr_821428 = "9b3f6f2f8f0000003d620e1202000000be71be2555120000b8627010000000000000000000000000ea0885b2270d00000000000000000000f797ff9be00b0000ddbdb005270a0000fc90cfe02b01060000000000000000000000000000000000d0a28224000e000000d643be960e0000002e8bb6a40e000000f8a817f80d00002f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  pr.xAG = 614976143259;
  pr.xAU = 8892867133;
  pr.xAUD = 20156914758078;
  pr.xBTC = 275800760;
  pr.xCAD = 0;
  pr.xCHF = 14464149948650;
  pr.xCNY = 0;
  pr.xEUR = 13059317798903;
  pr.xGBP = 11162715471325;
  pr.xJPY = 1690137827184892;
  pr.xNOK = 0;
  pr.xNZD = 0;
  pr.xUSD = 15393775330000;
  pr.unused1 = 16040600000000;
  pr.unused2 = 16100600000000;
  pr.unused3 = 15359200000000;
  pr.timestamp = 0;
  std::string sig = "2f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  int j=0;
  for (unsigned int i = 0; i < sig.size(); i += 2) {
    std::string byteString = sig.substr(i, 2);
    pr.signature[j++] = (char) strtol(byteString.c_str(), NULL, 16);
  }

  // verify the pr
  EXPECT_TRUE(pr.valid(cryptonote::network_type::MAINNET, 16, pr.height, 1632401454, 1632400454)); // version is v16 here because pr has no timestamp
}

TEST(pricing_record, verify_known_good_fail_if_edited)
{
  oracle::pricing_record pr;
  const std::string pr_821428 = "9b3f6f2f8f0000003d620e1202000000be71be2555120000b8627010000000000000000000000000ea0885b2270d00000000000000000000f797ff9be00b0000ddbdb005270a0000fc90cfe02b01060000000000000000000000000000000000d0a28224000e000000d643be960e0000002e8bb6a40e000000f8a817f80d00002f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  pr.xAG = 614976143259;
  pr.xAU = 8892867133;
  pr.xAUD = 20156914758078;
  pr.xBTC = 275800760;
  pr.xCAD = 0;
  pr.xCHF = 14464149948650;
  pr.xCNY = 0;
  pr.xEUR = 13059317798903;
  pr.xGBP = 11162715471325;
  pr.xJPY = 1690137827184892;
  pr.xNOK = 0;
  pr.xNZD = 0;
  pr.xUSD = 15393775330000;
  pr.unused1 = 16040600000000;
  pr.unused2 = 16100600000000;
  pr.unused3 = 15359200000000;
  pr.timestamp = 0;
  std::string sig = "2f5d27d45cdbfbac3d0f6577103f68de30895967d7562fbd56c161ae90130f54301b1ea9d5fd062f37dac75c3d47178bc6f149d21da1ff0e8430065cb762b93a";
  int j=0;
  for (unsigned int i = 0; i < sig.size(); i += 2) {
    std::string byteString = sig.substr(i, 2);
    pr.signature[j++] = (char) strtol(byteString.c_str(), NULL, 16);
  }

  // verify the pr
  EXPECT_TRUE(pr.valid(cryptonote::network_type::MAINNET, 16, pr.height, 1632401454, 1632400454));

  // Now make a change to an exchange rate and reverify
  pr.xNZD = 1;
  EXPECT_FALSE(pr.valid(cryptonote::network_type::MAINNET, 16, pr.height, 1632401454, 1632400454));

  // Revert that ER change and modify the signature
  pr.xNZD = 0;
  pr.signature[0] = 0x2e;
  EXPECT_FALSE(pr.valid(cryptonote::network_type::MAINNET, 16, pr.height, 1632401454, 1632400454));
}

*/

// Generates a throwaway keypair for the tests below (never used outside them).
static bool a32_make_test_keypair(std::string &priv_pem, std::string &pub_pem)
{
  bool ok = false;
  EVP_PKEY_CTX *pctx = EVP_PKEY_CTX_new_id(EVP_PKEY_EC, NULL);
  EVP_PKEY *pkey = NULL;
  BIO *bp = NULL, *bq = NULL;
  if (pctx && EVP_PKEY_keygen_init(pctx) == 1 &&
      EVP_PKEY_CTX_set_ec_paramgen_curve_nid(pctx, NID_X9_62_prime256v1) == 1 &&
      EVP_PKEY_keygen(pctx, &pkey) == 1)
  {
    bp = BIO_new(BIO_s_mem());
    bq = BIO_new(BIO_s_mem());
    if (bp && bq &&
        PEM_write_bio_PrivateKey(bp, pkey, NULL, NULL, 0, NULL, NULL) == 1 &&
        PEM_write_bio_PUBKEY(bq, pkey) == 1)
    {
      char *p = NULL;
      long n = BIO_get_mem_data(bp, &p);
      priv_pem.assign(p, n);
      n = BIO_get_mem_data(bq, &p);
      pub_pem.assign(p, n);
      ok = true;
    }
  }
  if (bp) BIO_free(bp);
  if (bq) BIO_free(bq);
  if (pkey) EVP_PKEY_free(pkey);
  if (pctx) EVP_PKEY_CTX_free(pctx);
  return ok;
}

// The oracle could verify a record but could not produce one; this covers the signing side.
TEST(pricing_record, sign_then_verify_roundtrip)
{
  std::string priv_pem, pub_pem;
  ASSERT_TRUE(a32_make_test_keypair(priv_pem, pub_pem));

  oracle::pricing_record pr;
  pr.pr_version = 1;
  pr.height = 1234;
  pr.supply = {100000, 0};
  pr.timestamp = 1632401454;
  pr.assets = {{"SAL1", 150000, 149000}, {"VSD", 1000000, 1000000}};

  ASSERT_TRUE(pr.sign(priv_pem));
  EXPECT_FALSE(pr.signature.empty());
  EXPECT_TRUE(pr.verifySignature(pub_pem));

  // any edit to a signed field must break verification
  oracle::pricing_record tampered = pr;
  tampered.assets[0].spot_price += 1;
  EXPECT_FALSE(tampered.verifySignature(pub_pem));

  oracle::pricing_record tampered2 = pr;
  tampered2.height += 1;
  EXPECT_FALSE(tampered2.verifySignature(pub_pem));

  // a different key must not verify
  std::string priv2, pub2;
  ASSERT_TRUE(a32_make_test_keypair(priv2, pub2));
  EXPECT_FALSE(pr.verifySignature(pub2));
}

// Golden vector produced by an INDEPENDENT producer (devnet/oracle_service.py: openssl
// dgst -sha256 -sign with an EC P-256 key). The oracle could previously only verify; this
// pins the exact byte format the producer must emit, so the two sides cannot drift.
TEST(pricing_record, verify_golden_vector_from_external_producer)
{
  const std::string pubkey =
    "-----BEGIN PUBLIC KEY-----\n"
    "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE8roqxCkAC5w1LckvMcIXbAk14BDA\n"
    "kM0gi0PAUjpma+YWURJqbme8ZmN/SFvCQO7hPqf12RuZPHIPwyKomSgzPw==\n"
    "-----END PUBLIC KEY-----\n";
  const std::string sig_hex =
    "3044022028e58203c7d8dce3771b5aca433cbe9edf269d293403e80799efccd308f53655"
    "0220555320181bac70b79658ec796d54a15eea3d4a9718a4dcb2c26b7a3c206d2573";

  oracle::pricing_record pr;
  pr.pr_version = 1;
  pr.height = 1234;
  pr.supply = {100000, 0};
  pr.timestamp = 1700000000;
  pr.assets = {{"SAL1", 1000000, 1000000}, {"VSD", 1000000, 1000000}};

  std::string sig_bin;
  ASSERT_TRUE(epee::string_tools::parse_hexstr_to_binbuff(sig_hex, sig_bin));
  pr.signature.assign(sig_bin.begin(), sig_bin.end());
  ASSERT_EQ(pr.signature.size(), 70u);   // DER ECDSA over P-256

  EXPECT_TRUE(pr.verifySignature(pubkey));

  // the signed message must be exactly this byte string
  const std::string expected =
    "{\"pr_version\":1,\"height\":1234,\"supply\":{\"SAL\":100000,\"VSD\":0},"
    "\"assets\":[{\"asset_type\":\"SAL1\",\"spot_price\":1000000,\"ma_price\":1000000},"
    "{\"asset_type\":\"VSD\",\"spot_price\":1000000,\"ma_price\":1000000}],"
    "\"timestamp\":1700000000}";
  EXPECT_EQ(pr.build_signing_message(), expected);
}

// ---------------------------------------------------------------------------------------------
// The consensus entry point (S3). These drive oracle::pricing_record::valid() with the key the
// regtest daemon is actually built with (config::FAKECHAIN_ORACLE_PUBLIC_KEY), so the path that
// consensus takes is covered rather than verifySignature() alone. The private half below is the
// throwaway EC P-256 key of the devnet oracle keydir; it is regtest-only, and the daemon has no
// code path that can produce a signature -- it only ever verifies one.
// ---------------------------------------------------------------------------------------------
static const char *const FAKECHAIN_ORACLE_PRIV_PEM =
  "-----BEGIN EC PRIVATE KEY-----\n"
  "MHcCAQEEIOhfZIceUCGDb/DaY80Yd7D07LnFmqXvMwWi8ah2HdASoAoGCCqGSM49\n"
  "AwEHoUQDQgAEXjXOBaIZOC8BcLp2iESoWmEB3qX8Fk2FiWXItW/Gzj38l15NGWuA\n"
  "6UMWNm5JLA00Tb5daepEemjWJkhXTo+xQw==\n"
  "-----END EC PRIVATE KEY-----\n";

// A record in the shape the oracle publishes for `height` when the block carries `timestamp`.
static oracle::pricing_record a32_signed_record(uint64_t height, uint64_t timestamp)
{
  oracle::pricing_record pr;
  pr.pr_version = 1;
  pr.height = height;
  pr.supply = {100000, 0};
  pr.timestamp = timestamp;
  pr.assets = {{"SAL1", 1000000, 1000000}, {"VSD", 1000000, 1000000}};
  EXPECT_TRUE(pr.sign(FAKECHAIN_ORACLE_PRIV_PEM));
  EXPECT_TRUE(pr.verifySignature(config::FAKECHAIN_ORACLE_PUBLIC_KEY));
  return pr;
}

TEST(pricing_record, valid_accepts_a_record_the_fakechain_oracle_signed_for_this_block)
{
  const oracle::pricing_record pr = a32_signed_record(1000, 1700000000);
  EXPECT_TRUE(pr.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));
}

TEST(pricing_record, valid_rejects_a_record_signed_for_another_block_height)
{
  // F1/F2: a valid signature alone is not enough, the signed height has to be this block's.
  const oracle::pricing_record below = a32_signed_record(999, 1700000000);
  EXPECT_FALSE(below.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));

  const oracle::pricing_record above = a32_signed_record(1001, 1700000000);
  EXPECT_FALSE(above.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));
}

TEST(pricing_record, valid_pins_the_empty_record_behaviour_and_the_pre_oracle_hf)
{
  // B1: a pricing record is optional, an unreachable oracle degrades to "no record", and such a
  // block can never carry a CONVERT. Pinned here so that it stays a decision, not an accident.
  const oracle::pricing_record empty;
  EXPECT_TRUE(empty.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));
  EXPECT_TRUE(empty.valid_with_binding_height(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 5000, 1000, 1700000000, 1699999999));

  // below HF_VERSION_SLIPPAGE_YIELD a non-empty record is not accepted at all
  const oracle::pricing_record pr = a32_signed_record(1000, 1700000000);
  EXPECT_FALSE(pr.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE - 1, 1000, 1700000000, 1699999999));
}

TEST(pricing_record, height_binding_can_be_activated_after_legacy_blocks)
{
  // B2: the per-network activation height. A chain that already contains blocks mined before the
  // binding was enforced (e.g. the devnet block 379) is exempt below the constant, and strict
  // from it on -- so such a chain can be re-connected instead of hitting the rollback PANIC.
  const oracle::pricing_record pr = a32_signed_record(999, 1700000000);

  // strict networks (binding height 0): a record for any other height is rejected
  EXPECT_FALSE(pr.valid_with_binding_height(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 0, 1000, 1700000000, 1699999999));
  EXPECT_FALSE(pr.valid_with_binding_height(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1000, 1700000000, 1699999999));

  // a legacy block below the activation point is exempt ...
  EXPECT_TRUE(pr.valid_with_binding_height(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1004, 1000, 1700000000, 1699999999));
  // ... and the binding bites again from the activation point on
  EXPECT_FALSE(pr.valid_with_binding_height(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1004, 1004, 1700000000, 1699999999));
  // a matching record keeps passing on both sides of the activation point
  const oracle::pricing_record match = a32_signed_record(1000, 1700000000);
  EXPECT_TRUE(match.valid_with_binding_height(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1004, 1000, 1700000000, 1699999999));
}

TEST(pricing_record, valid_rejects_a_tampered_or_foreign_signature)
{
  const oracle::pricing_record good = a32_signed_record(1000, 1700000000);

  oracle::pricing_record tampered = good;
  tampered.supply.sal += 1;                       // a signed field, changed after signing
  EXPECT_FALSE(tampered.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));

  oracle::pricing_record flipped = good;
  flipped.signature[0] ^= 0x01;
  EXPECT_FALSE(flipped.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));

  std::string priv2, pub2;
  ASSERT_TRUE(a32_make_test_keypair(priv2, pub2));
  oracle::pricing_record foreign;
  foreign.pr_version = 1;
  foreign.height = 1000;
  foreign.supply = {100000, 0};
  foreign.timestamp = 1700000000;
  foreign.assets = {{"SAL1", 1000000, 1000000}};
  ASSERT_TRUE(foreign.sign(priv2));
  EXPECT_FALSE(foreign.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));
}

TEST(pricing_record, valid_pins_the_timestamp_window)
{
  const uint64_t bl_ts = 1700000000;

  // the record may be at most PRICING_RECORD_VALID_TIME_DIFF_FROM_BLOCK ahead of its block
  const oracle::pricing_record edge = a32_signed_record(1000, bl_ts + PRICING_RECORD_VALID_TIME_DIFF_FROM_BLOCK);
  EXPECT_TRUE(edge.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, bl_ts, bl_ts - 1));

  const oracle::pricing_record future = a32_signed_record(1000, bl_ts + PRICING_RECORD_VALID_TIME_DIFF_FROM_BLOCK + 1);
  EXPECT_FALSE(future.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, bl_ts, bl_ts - 1));

  // and it has to be strictly newer than the previous block (N6: oracles should publish
  // max(now, last + 1), otherwise two blocks in the same second cannot both be priced)
  const oracle::pricing_record stale = a32_signed_record(1000, bl_ts - 1);
  EXPECT_FALSE(stale.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, bl_ts, bl_ts - 1));
  const oracle::pricing_record fresh = a32_signed_record(1000, bl_ts);
  EXPECT_TRUE(fresh.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, bl_ts, bl_ts - 1));
}

// The public half of a private PEM, so the fixture can be compared with the key consensus uses.
static std::string a32_public_pem_from_private(const std::string &priv_pem)
{
  std::string out;
  BIO *bio = BIO_new_mem_buf(priv_pem.c_str(), priv_pem.size());
  EVP_PKEY *pkey = bio ? PEM_read_bio_PrivateKey(bio, NULL, NULL, NULL) : NULL;
  if (bio) BIO_free(bio);
  if (pkey)
  {
    BIO *bp = BIO_new(BIO_s_mem());
    if (bp)
    {
      if (PEM_write_bio_PUBKEY(bp, pkey) == 1)
      {
        char *p = NULL;
        long n = BIO_get_mem_data(bp, &p);
        out.assign(p, n);
      }
      BIO_free(bp);
    }
    EVP_PKEY_free(pkey);
  }
  return out;
}

TEST(pricing_record, height_binding_height_is_wired_to_the_network_config)
{
  EXPECT_EQ(oracle::pricing_record::height_binding_height(cryptonote::MAINNET),
            cryptonote::get_config(cryptonote::MAINNET).PRICING_RECORD_HEIGHT_BINDING_HEIGHT);
  EXPECT_EQ(oracle::pricing_record::height_binding_height(cryptonote::TESTNET),
            cryptonote::get_config(cryptonote::TESTNET).PRICING_RECORD_HEIGHT_BINDING_HEIGHT);
  EXPECT_EQ(oracle::pricing_record::height_binding_height(cryptonote::STAGENET),
            cryptonote::get_config(cryptonote::STAGENET).PRICING_RECORD_HEIGHT_BINDING_HEIGHT);
  EXPECT_EQ(oracle::pricing_record::height_binding_height(cryptonote::FAKECHAIN),
            config::FAKECHAIN_PRICING_RECORD_HEIGHT_BINDING_HEIGHT);

  // The fixture must stay the key the regtest daemon verifies against: if the FAKECHAIN key in
  // cryptonote_config.h is ever rotated, every positive test here has to fail loudly instead of
  // passing against a key consensus does not use.
  EXPECT_EQ(a32_public_pem_from_private(FAKECHAIN_ORACLE_PRIV_PEM),
            config::FAKECHAIN_ORACLE_PUBLIC_KEY);
}

// ---------------------------------------------------------------------------------------------
// B1, the rule that was picked: "a block that carries a record must have that record bound to
// it". Only the canonical empty record may be accepted without a signature, and that is not a
// loophole -- it prices nothing, which the second test proves. Both halves are pinned here.
// ---------------------------------------------------------------------------------------------
TEST(pricing_record, valid_rejects_any_record_shaped_payload_that_was_not_signed)
{
  const uint64_t h = 1000, ts = 1700000000, prev = 1699999999;
  const auto accepted = [&](const oracle::pricing_record &pr) {
    return pr.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, h, ts, prev);
  };

  // The one shape that skips the signature check: the canonical empty record.
  EXPECT_TRUE(oracle::pricing_record().empty());
  EXPECT_TRUE(accepted(oracle::pricing_record()));

  // Each field below turns the payload into a record, so the signature check has to run and has
  // to fail. The height case is deliberately bound to the block height to show that matching the
  // height is not a substitute for being signed.
  { oracle::pricing_record pr; pr.pr_version = 1;
    EXPECT_FALSE(pr.empty()); EXPECT_FALSE(accepted(pr)); }
  { oracle::pricing_record pr; pr.height = h;
    EXPECT_FALSE(pr.empty()); EXPECT_FALSE(accepted(pr)); }
  { oracle::pricing_record pr; pr.supply.sal = 1;
    EXPECT_FALSE(pr.empty()); EXPECT_FALSE(accepted(pr)); }
  { oracle::pricing_record pr; pr.supply.vsd = 1;
    EXPECT_FALSE(pr.empty()); EXPECT_FALSE(accepted(pr)); }
  { oracle::pricing_record pr; pr.assets.push_back({"SAL", 1000000, 1000000});
    EXPECT_FALSE(pr.empty()); EXPECT_FALSE(accepted(pr)); }
  { oracle::pricing_record pr; pr.timestamp = ts;
    EXPECT_FALSE(pr.empty()); EXPECT_FALSE(accepted(pr)); }
  { oracle::pricing_record pr; pr.signature = {0x30, 0x00};
    EXPECT_FALSE(pr.empty()); EXPECT_FALSE(accepted(pr)); }
}

TEST(pricing_record, an_empty_record_prices_no_conversion)
{
  // Why a record-less block is safe to accept: with no prices the conversion helper refuses, so
  // such a block cannot mint a CONVERT. The degradation stays availability-only.
  uint64_t rate = 0;
  const oracle::pricing_record empty;
  EXPECT_FALSE(cryptonote::get_conversion_rate(empty, "SAL", "SAL1", rate));
  EXPECT_FALSE(cryptonote::get_conversion_rate(empty, "SAL1", "SAL", rate));

  // Contrast: a signed, bound record carrying both prices does produce a rate.
  oracle::pricing_record pr;
  pr.pr_version = 1;
  pr.height = 1000;
  pr.supply = {100000, 0};
  pr.timestamp = 1700000000;
  pr.assets = {{"SAL", 1000000, 1000000}, {"SAL1", 1000000, 1000000}};
  ASSERT_TRUE(pr.sign(FAKECHAIN_ORACLE_PRIV_PEM));
  EXPECT_TRUE(pr.valid(cryptonote::FAKECHAIN, HF_VERSION_ENABLE_ORACLE, 1000, 1700000000, 1699999999));
  ASSERT_TRUE(cryptonote::get_conversion_rate(pr, "SAL", "SAL1", rate));
  EXPECT_EQ(rate, (uint64_t)COIN);
}

// F5/S6: the production oracle key type is DSA (the mainnet ORACLE_PUBLIC_KEY parses to
// dsaEncryption; 2048-bit p with a 256-bit q), and an OpenSSL 1.1 producer signs DSA with
// SHA-1 by default. The verifier used to try SHA-256 only, so every such record was rejected
// and the chain silently degraded to empty records (conversions halted). The vectors below
// were produced by /tmp/dsagolden.cpp, which links liboracle.a and signs the exact
// build_signing_message() bytes with the depends OpenSSL; they pin the digest fallback for
// both key types and both digests without needing DSA key generation inside the test.
TEST(pricing_record, verify_accepts_sha1_and_dsa_production_style_vectors)
{
  const char *const dsa_sha256_hex = "30440220790175d2b8789898cc901479c143013af6fd29e13b12b721cc7ff97a09e03d700220432d1a5ba49fb136494c01365ab884a6c97f08023f829fd547d754d0e9d6a4e0";
  const char *const ec_sha1_hex = "304502204a1870cfada959cd01725068c97d8d9e216ff9f9fcd62dfbb07b5867dec308de022100902a9b078a3b05acd0bbcd3db30d84af0e1afffda082327ede8325a1de8aba25";

  const std::string dsa_pubkey =
    "-----BEGIN PUBLIC KEY-----\n"
    "MIIDRjCCAjkGByqGSM44BAEwggIsAoIBAQDLBH7O2VtPUJmovGK0x5x7Xw5+ItYN\n"
    "Ylx2zDg6Dq3dYQZNTTv9cNE1h1Vfx2C1IbJIezQp0rR+P4MD4is0jBHs79v5ZFGi\n"
    "MwH8zgo3QSefHoc6tndrtBLHLSKRQECJh9ztjtl0nApc7G6FeI+VFKt3pNu62Psn\n"
    "GsJl8G/ev2LR0i5KM9mDTq1RV1VQDOohJHwmUqgjpU6MEW1BaYs7sQTCq+QAJ8N6\n"
    "4rWn65MLpl2v3es4ECuCosy59wKV37u1701O4ktR+IyJaFnApabR3nidDSzykhL7\n"
    "ZBBhvuuXxKG04pWetMHcrGx2AdO5ZrPicbRW3yZ0IBNAG0lt6KFlKC+vAiEAxtew\n"
    "oKx6yKCAeQ6PGzTYFzCd9HRYuCB+czcldI/X6z0CggEAc3HkxslTMwE5Qx07+wBt\n"
    "9JGPocKNPu9b4nmI3b8u3M5U20Kd+HVKJYv2vC21UWs+fB/QfZHG5azQWrdSGqqz\n"
    "lvsJZaT7HfoiTt//DQmEnCSyR6YzDoD6KdpTCPUKhY62xqRU9iu8a9/CV8pB8Udx\n"
    "7TCek1SikDKQCUQUNi7zk+Jx0UP/KEaEZzCq6mbkE/934yUPAC0itr0On9IRBKwM\n"
    "d7a34aw1uALOXksmEwbTkd71GPKZX8jy/5GupcKQiFevDJ3D2lsE9zVoeS0vODO1\n"
    "MVsXyNIV0y3Oc7mjcAehrTSAYTm6YOjEFt9hX3ko6MezmaE5nAvndHVWb2M/xmN9\n"
    "pAOCAQUAAoIBAAyaerrLYzOkRHwlLUFBtetPDIl862u7d2VrqI8nHEZp+QQaAq8M\n"
    "XXUpJFD17gCza62omOE+wLJ2msuXUu3wjzKRBV7ceyurOGC/5asKTy3WBWvSp5O9\n"
    "QqeIdDzNq+l39oOOs7GWibGBBlvDPsRz5f7RqggkSQ78hroRHGpX3qcOtDnw6klC\n"
    "Hl16cmvYbituTogZir+4wftra3K4QKHfQS2f0CPXP5FfvrAnUhenoQIrXOGf3XGP\n"
    "eFOzv9sjAflRvM0PhLtzHK6vond1ZbO5B+yr1XGxqkyzXxNAoA2gxY8ScS8ro1wh\n"
    "KgiQf6RNyfWKvU2qFwFgSyyVlNC6sa+/Nsw=\n"
    "-----END PUBLIC KEY-----\n";

  oracle::pricing_record base;
  base.pr_version = 1;
  base.height = 1234;
  base.supply = {100000, 0};
  base.timestamp = 1700000000;
  base.assets = {{"SAL1", 1000000, 1000000}, {"VSD", 1000000, 1000000}};

  struct signature_vector
  {
    const char *name;
    const std::string *pubkey;
    const char *sig_hex;
  };
  const std::string fakechain_pubkey = config::FAKECHAIN_ORACLE_PUBLIC_KEY;
  const signature_vector vectors[] = {
    {"DSA-2048/q-256 SHA-256", &dsa_pubkey, dsa_sha256_hex},
    {"DSA-2048/q-256 SHA-1", &dsa_pubkey, "30450221008a610a08f3bba0169c79afbe43b1b7dd3b5c85b9352a46a40f7f66f3b7f68b4602204af5743ca4a27c60995eb32adc59ceab29e0b3a8d921cd826a8de0c931a75963"},
    {"EC P-256 SHA-1", &fakechain_pubkey, ec_sha1_hex},
  };

  for (const signature_vector &v : vectors)
  {
    oracle::pricing_record pr = base;
    std::string sig_bin;
    ASSERT_TRUE(epee::string_tools::parse_hexstr_to_binbuff(v.sig_hex, sig_bin));
    pr.signature.assign(sig_bin.begin(), sig_bin.end());
    EXPECT_TRUE(pr.verifySignature(*v.pubkey)) << v.name;

    // any edit to a signed field must break it, whatever the digest
    oracle::pricing_record tampered = pr;
    tampered.height += 1;
    EXPECT_FALSE(tampered.verifySignature(*v.pubkey)) << v.name;
  }

  // The two key types are not interchangeable: a DSA signature must not verify against the
  // regtest EC key, and an EC SHA-1 signature must not verify against the DSA key.
  std::string cross_bin;
  ASSERT_TRUE(epee::string_tools::parse_hexstr_to_binbuff(dsa_sha256_hex, cross_bin));
  oracle::pricing_record dsa_record = base;
  dsa_record.signature.assign(cross_bin.begin(), cross_bin.end());
  EXPECT_FALSE(dsa_record.verifySignature(fakechain_pubkey));

  ASSERT_TRUE(epee::string_tools::parse_hexstr_to_binbuff(ec_sha1_hex, cross_bin));
  oracle::pricing_record ec_record = base;
  ec_record.signature.assign(cross_bin.begin(), cross_bin.end());
  EXPECT_FALSE(ec_record.verifySignature(dsa_pubkey));
}
