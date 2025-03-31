// Copyright (c) 2023, The Monero Project
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

#include <sstream>

#define IN_UNIT_TESTS // To access Blockchain::{expand_transaction_2, verRctNonSemanticsSimpleCached}

#include "gtest/gtest.h"
#include "unit_tests_utils.h"

#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_core/blockchain.h"
#include "file_io_utils.h"
#include "misc_log_ex.h"
#include "ringct/rctSigs.h"

namespace cryptonote
{
// declaration not provided in cryptonote_format_utils.h, but definition is not static ;)
bool expand_transaction_1(transaction &tx, bool base_only);
}

namespace
{
/**
 * @brief Make rct::ctkey from hex string representation of destionation and mask
 *
 * @param dest_hex
 * @param mask_hex
 * @return rct::ctkey
 */
static rct::ctkey make_ctkey(const char* dest_hex, const char* mask_hex)
{
    rct::key dest;
    rct::key mask;
    CHECK_AND_ASSERT_THROW_MES(epee::from_hex::to_buffer(epee::as_mut_byte_span(dest), dest_hex), "dest bad hex: " << dest_hex);
    CHECK_AND_ASSERT_THROW_MES(epee::from_hex::to_buffer(epee::as_mut_byte_span(mask), mask_hex), "mask bad hex: " << mask_hex);
    return {dest, mask};
}

template <typename T>
static std::string stringify_with_do_serialize(const T& t)
{
    std::stringstream ss;
    binary_archive<true> ar(ss);
    CHECK_AND_ASSERT_THROW_MES(ar.good(), "Archiver is not in a good state. This shouldn't happen!");
    ::do_serialize(ar, const_cast<T&>(t));
    return ss.str();
}

static bool check_tx_is_expanded(const cryptonote::transaction& tx, const rct::ctkeyM& pubkeys)
{
    // Ripped from cryptonote_core/blockchain.cpp

    const rct::rctSig& rv = tx.rct_signatures;

    if (pubkeys.size() != rv.mixRing.size())
    {
        MERROR("Failed to check ringct signatures: mismatched pubkeys/mixRing size");
        return false;
    }
    for (size_t i = 0; i < pubkeys.size(); ++i)
    {
        if (pubkeys[i].size() != rv.mixRing[i].size())
        {
            MERROR("Failed to check ringct signatures: mismatched pubkeys/mixRing size");
            return false;
        }
    }

    for (size_t n = 0; n < pubkeys.size(); ++n)
    {
        for (size_t m = 0; m < pubkeys[n].size(); ++m)
        {
            if (pubkeys[n][m].dest != rct::rct2pk(rv.mixRing[n][m].dest))
            {
                MERROR("Failed to check ringct signatures: mismatched pubkey at vin " << n << ", index " << m);
                return false;
            }
            if (pubkeys[n][m].mask != rct::rct2pk(rv.mixRing[n][m].mask))
            {
                MERROR("Failed to check ringct signatures: mismatched commitment at vin " << n << ", index " << m);
                return false;
            }
        }
    }

    const size_t n_sigs = rct::is_rct_clsag(rv.type) ? rv.p.CLSAGs.size() : rv.p.MGs.size();
    if (n_sigs != tx.vin.size())
    {
        MERROR("Failed to check ringct signatures: mismatched MGs/vin sizes");
        return false;
    }
    for (size_t n = 0; n < tx.vin.size(); ++n)
    {
        bool error;
        if (rct::is_rct_clsag(rv.type))
            error = memcmp(&boost::get<cryptonote::txin_to_key>(tx.vin[n]).k_image, &rv.p.CLSAGs[n].I, 32);
        else
            error = rv.p.MGs[n].II.empty() || memcmp(&boost::get<cryptonote::txin_to_key>(tx.vin[n]).k_image, &rv.p.MGs[n].II[0], 32);
        if (error)
        {
            MERROR("Failed to check ringct signatures: mismatched key image");
            return false;
        }
    }

    return true;
}

/**
 * @brief Perform expand_transaction_1 and Blockchain::expand_transaction_2 on a certain transaction
 */
static void expand_transaction_fully(cryptonote::transaction& tx, const rct::ctkeyM& input_pubkeys)
{
    const uint8_t hf_version = 4;
    
    const crypto::hash tx_prefix_hash = cryptonote::get_transaction_prefix_hash(tx);
    CHECK_AND_ASSERT_THROW_MES(cryptonote::expand_transaction_1(tx, false), "expand 1 failed");
    CHECK_AND_ASSERT_THROW_MES
    (
     cryptonote::Blockchain::expand_transaction_2(tx, tx_prefix_hash, input_pubkeys, hf_version),
        "expand 2 failed"
    );
    CHECK_AND_ASSERT_THROW_MES(!memcmp(&tx_prefix_hash, &tx.rct_signatures.message, 32), "message check failed");
    CHECK_AND_ASSERT_THROW_MES(input_pubkeys == tx.rct_signatures.mixRing, "mixring check failed");
    CHECK_AND_ASSERT_THROW_MES(check_tx_is_expanded(tx, input_pubkeys), "tx expansion check 2 failed");
}

/**
 * @brief Mostly construct transaction from binary file and provided mix ring pubkeys
 *
 * Most important to us, this should populate the .rct_signatures.message and
 * .rct_signatures.mixRings fields of the transaction.
 *
 * @param file_name relative file path in unit test data directory
 * @param input_pubkeys manually retrived input pubkey destination / masks for each ring
 * @return cryptonote::transaction the expanded transaction
 */
static cryptonote::transaction expand_transaction_from_bin_file_and_pubkeys
(
    const char* file_name,
    const rct::ctkeyM& input_pubkeys
)
{
    cryptonote::transaction transaction;

    const boost::filesystem::path tx_json_path = unit_test::data_dir / file_name;
    std::string tx_blob;
    CHECK_AND_ASSERT_THROW_MES
    (
        epee::file_io_utils::load_file_to_string(tx_json_path.string(), tx_blob),
        "loading file to string failed"
    );

    CHECK_AND_ASSERT_THROW_MES
    (
        cryptonote::parse_and_validate_tx_from_blob(tx_blob, transaction),
        "TX blob could not be parsed"
    );

    expand_transaction_fully(transaction, input_pubkeys);

    return transaction;
}

/**
 * @brief Return whether a modification changes blob resulting from do_serialize()
 */
template <typename T, class TModifier>
static bool modification_changes_do_serialize
(
    const T& og_obj,
    TModifier& obj_modifier_func,
    bool expected_change
)
{
    T modded_obj = og_obj;
    obj_modifier_func(modded_obj);
    const std::string og_blob = stringify_with_do_serialize(og_obj);
    const std::string modded_blob = stringify_with_do_serialize(modded_obj);
    const bool did_change = modded_blob != og_blob;
    if (did_change != expected_change)
    {
        const std::string og_hex = epee::to_hex::string(epee::strspan<uint8_t>(og_blob));
        const std::string modded_hex = epee::to_hex::string(epee::strspan<uint8_t>(modded_blob));
        MERROR("unexpected: modded_blob '" << modded_hex << "' vs og_blob ' << " << og_hex << "'");
    }
    return did_change;
}

// Contains binary representation of a local testnet transaction
// 29d01fde215589faf866153b538851420c0bf5e3479b58981598ac375c92f45e
static constexpr const char* tx1_file_name = "txs/bpp_tx_29d01f.bin";

// This contains destination key / mask pairs for each output in the input ring of the above tx
static const rct::ctkeyM tx1_input_pubkeys =
{{
    make_ctkey("63d68fbd469c3551dbe896a8378b13e7e736cd757bf6be79d65b7a0a7817feee", "a56a0fe30b42deb0b3f9936b3f76690f4e5afa9be0a76890837b3262be9e6b27"),
    make_ctkey("68e6fcde4bb5f5c886fec6a6ae78def4a66256e79a64d659731d68df296eaeb8", "c4aa183fbf90d0de8a9439d492ac413410d24f28075a7d2cf0eac8c6489a7ba9"),
    make_ctkey("08441f9bf852fabc9483c368c67682d5620e5d18a60d0c11e2375d92096972a7", "96e4cc44fe8b60fc77230f707ad471eee5ff9362e50cd571980ce5b9f5e52c27"),
    make_ctkey("38473887968921b397fe0d80884b650933fdf065139afc7ed727c3460e4eea50", "b924be2b891e59f61721abdebfe3f2a0fb5b713393a08e9e010fd139cd8d42e5"),
    make_ctkey("78cbe27e9af8825e549b970360b225b37bf0d415c6635f46a52fab9239962423", "8e4208849191a8564e792525e50653c37c4e85d1d0794d7a8595c451dbea9e8e"),
    make_ctkey("6baaaa4e27042605a71c69b660aca41e03f69eaf49868d968e118192d9c6218b", "41170e19efdc0652d80e769b7905cfc1b8dc46a09ffc84132c879d8c13754a9a"),
    make_ctkey("e39f62a204a763e665d2dc153e80da6c9914b9c48449f88f5e8a979929e95a51", "d470bcc5bb7b41c748dc5658e0febbb55c1dbce20ce2e8030412b48326caa280"),
    make_ctkey("1ae427f3d5c16c13ca578b4e7b539d2c08d2ab983c137806492824decb6ff753", "21063b6c7aaf715bd9a4ecccb574a632ce95a66d703beed93d6595ebd90a03f8"),
    make_ctkey("2aaa84b067688251bb5d85d221347a0df0c270c651ffd6caddfe84e324b4528b", "9a9e92119ff2e4b8fa323484e3cf1cfc7be9c9ab32b104209d9f8636185120a1"),
    make_ctkey("ec06974c4f221aef3f525f11307e1cf7f2acf7405e185af162bb826768666dfb", "71d23177781106b6d4893eb7a3f72cdba1a208c3e0672b4b8fda4d35c034ed03"),
    make_ctkey("d7080b687c2e43cc8e4e76e092287f6fd66174e08e82e1e4e942909f220edac1", "baf6775d67e314debc86038c1761c022db1dfc83e22046aef5479995086d9b5d"),
    make_ctkey("80f478e2004945113a1edc1e6d2354be851565aaf3fda6068d594beeef5e2f06", "24fbd7503854721cd98545af1e85dc4e75007366481ff2ee9e47b502b6eea38f"),
    make_ctkey("72da19698f3a131a1d738508a4a0d8545790169b4bacedbc59e16e530c2da221", "e04126ddfb0e2a0132718aef02706fbd93376e478049a61013512e89684059c3"),
    make_ctkey("cc949eefb6ca2b5ef19a2269ad895582a82c850d7a206465e0e40d54846d58d4", "f02e512919365cab215269b937664e7efacfcce1cdec864c44773cf3d304fe32"),
    make_ctkey("5eea81559f4eeb5f4b0b66b9709ae9a512e0b74ce8e4fae11b01e1d53deceaeb", "e695bb00335c33787b754a6d4ee22cc406099be5eb410694c110db5c8a567bed"),
    make_ctkey("b7f55351c1d1ce9f2389d6f5dcc094f34e9244dd129c0c8e6415accd096a612a", "0c715842353aff730d2e5d75d506cb7025415366aa4b76e3813fea10eb86ae71")
}};
} // anonymous namespace

TEST(verRctNonSemanticsSimple, tx1_preconditions)
{
    // If this unit test fails, something changed about transaction deserialization / expansion or
    // something changed about RingCT signature verification.

    cryptonote::rct_ver_cache_t rct_ver_cache;

    cryptonote::transaction tx = expand_transaction_from_bin_file_and_pubkeys
        (tx1_file_name, tx1_input_pubkeys);
    const rct::rctSig& rs = tx.rct_signatures;

    const crypto::hash tx_prefix_hash = cryptonote::get_transaction_prefix_hash(tx);

    const uint8_t hf_version = 4;
    
    EXPECT_EQ(1, tx.vin.size());
    EXPECT_EQ(2, tx.vout.size());
    const rct::key expected_sig_msg = rct::hash2rct(tx_prefix_hash);
    EXPECT_EQ(expected_sig_msg, rs.message);
    EXPECT_EQ(1, rs.mixRing.size());
    EXPECT_EQ(16, rs.mixRing[0].size());
    EXPECT_EQ(0, rs.pseudoOuts.size());
    EXPECT_EQ(0, rs.p.rangeSigs.size());
    EXPECT_EQ(0, rs.p.bulletproofs.size());
    EXPECT_EQ(1, rs.p.bulletproofs_plus.size());
    EXPECT_EQ(2, rs.p.bulletproofs_plus[0].V.size());
    EXPECT_EQ(7, rs.p.bulletproofs_plus[0].L.size());
    EXPECT_EQ(7, rs.p.bulletproofs_plus[0].R.size());
    EXPECT_EQ(0, rs.p.MGs.size());
    EXPECT_EQ(1, rs.p.CLSAGs.size());
    EXPECT_EQ(16, rs.p.CLSAGs[0].s.size());
    EXPECT_EQ(1, rs.p.pseudoOuts.size());
    EXPECT_EQ(tx1_input_pubkeys, rs.mixRing);
    EXPECT_EQ(2, rs.outPk.size());

    EXPECT_TRUE(rct::verRctSemanticsSimple(rs));
    EXPECT_TRUE(rct::verRctNonSemanticsSimple(rs));
    EXPECT_TRUE(rct::verRctSimple(rs));
    EXPECT_TRUE(cryptonote::ver_rct_non_semantics_simple_cached(tx, tx1_input_pubkeys, rct_ver_cache, rct::RCTTypeBulletproofPlus, hf_version));
    EXPECT_TRUE(cryptonote::ver_rct_non_semantics_simple_cached(tx, tx1_input_pubkeys, rct_ver_cache, rct::RCTTypeBulletproofPlus, hf_version));
}

#define SERIALIZABLE_SIG_CHANGES_SUBTEST(fieldmodifyclause)                                    \
    do {                                                                                       \
        const auto sig_modifier_func = [](rct::rctSig& rs) { rs.fieldmodifyclause; };          \
        EXPECT_TRUE(modification_changes_do_serialize(original_sig, sig_modifier_func, true)); \
    } while (0);                                                                               \

TEST(verRctNonSemanticsSimple, serializable_sig_changes)
{
    // Hello, future visitors. If this unit test fails, then fields of rctSig have been dropped from
    // serialization.

    const cryptonote::transaction tx = expand_transaction_from_bin_file_and_pubkeys
        (tx1_file_name, tx1_input_pubkeys);
    const rct::rctSig& original_sig = tx.rct_signatures;

    // These are the subtests most likely to fail. Fields 'message' and 'mixRing' are not serialized
    // when sent over the wire, since they can be reconstructed from transaction data. However, they
    // are serialized by ::do_serialize(rctSig).
    // How signatures are serialized for the blockchain can be found in the methods
    // rct::rctSigBase::serialize_rctsig_base and rct::rctSigPrunable::serialize_rctsig_prunable.
    SERIALIZABLE_SIG_CHANGES_SUBTEST(message.bytes[31]++)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(mixRing.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(mixRing[0].push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(mixRing[0][8].dest[10]--)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(mixRing[0][15].mask[3]--)

    // rctSigBase changes. These subtests are less likely to break
    SERIALIZABLE_SIG_CHANGES_SUBTEST(type ^= 23)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(pseudoOuts.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(ecdhInfo.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(outPk.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(outPk[0].dest[14]--)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(outPk[1].dest[14]--)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(outPk[0].mask[14]--)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(outPk[1].mask[14]--)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(txnFee *= 2023)

    // rctSigPrunable changes
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.rangeSigs.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].A[13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].A1[13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].B[13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].r1[13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].s1[13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].d1[13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].L.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].L[2][13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].R.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].R[2][13] -= 7)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.MGs.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.CLSAGs.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.CLSAGs[0].s.push_back({}))
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.CLSAGs[0].s[15][31] ^= 69)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.CLSAGs[0].c1[0] /= 3)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.CLSAGs[0].D[0] /= 3)
    SERIALIZABLE_SIG_CHANGES_SUBTEST(p.pseudoOuts.push_back({}))

    // Uncomment line below to sanity check SERIALIZABLE_SIG_CHANGES_SUBTEST
    // SERIALIZABLE_SIG_CHANGES_SUBTEST(message) // should fail
}

#define UNSERIALIZABLE_SIG_CHANGES_SUBTEST(fieldmodifyclause)                                    \
    do {                                                                                         \
        const auto sig_modifier_func = [](rct::rctSig& rs) { rs.fieldmodifyclause; };            \
        EXPECT_FALSE(modification_changes_do_serialize(original_sig, sig_modifier_func, false)); \
    } while (0);                                                                                 \

TEST(verRctNonSemanticsSimple, unserializable_sig_changes)
{
    // Hello, future visitors. If this unit test fails, then congrats! ::do_serialize(rctSig) became
    // better at uniquely representing rctSig.
    const cryptonote::transaction tx = expand_transaction_from_bin_file_and_pubkeys
        (tx1_file_name, tx1_input_pubkeys);
    const rct::rctSig& original_sig = tx.rct_signatures;

    UNSERIALIZABLE_SIG_CHANGES_SUBTEST(p.CLSAGs[0].I[14]++)
    UNSERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].V.push_back({}))
    UNSERIALIZABLE_SIG_CHANGES_SUBTEST(p.bulletproofs_plus[0].V[1][31]--)

    // Uncomment line below to sanity check UNSERIALIZABLE_SIG_CHANGES_SUBTEST_SHORTCUT
    // UNSERIALIZABLE_SIG_CHANGES_SUBTEST_SHORTCUT(message[2]++) // should fail
}

#define SERIALIZABLE_MIXRING_CHANGES_SUBTEST(fieldmodifyclause)                                   \
    do {                                                                                          \
        using mr_mod_func_t = std::function<void(rct::ctkeyM&)>;                                  \
        const mr_mod_func_t mr_modifier_func = [&](rct::ctkeyM& mr) { mr fieldmodifyclause; };    \
        EXPECT_TRUE(modification_changes_do_serialize(original_mixring, mr_modifier_func, true)); \
    } while (0);                                                                                  \

TEST(verRctNonSemanticsSimple, serializable_mixring_changes)
{
    // Hello, future Monero devs! If this unit test fails, a huge concensus-related assumption has
    // been broken and verRctNonSemanticsSimpleCached needs to be reevalulated for validity. If it
    // is not, there may be an exploit which allows for double-spending. See the implementation for
    // more comments on the uniqueness of the internal cache hash.

    const rct::ctkeyM original_mixring = tx1_input_pubkeys;

    const size_t mlen = tx1_input_pubkeys.size();
    ASSERT_EQ(1, mlen);
    const size_t nlen = tx1_input_pubkeys[0].size();
    ASSERT_EQ(16, nlen);

    SERIALIZABLE_MIXRING_CHANGES_SUBTEST(.clear())
    SERIALIZABLE_MIXRING_CHANGES_SUBTEST(.push_back({}))
    SERIALIZABLE_MIXRING_CHANGES_SUBTEST([0].clear())
    SERIALIZABLE_MIXRING_CHANGES_SUBTEST([0].push_back({}))
    SERIALIZABLE_MIXRING_CHANGES_SUBTEST([0][0].dest[4]--)
    SERIALIZABLE_MIXRING_CHANGES_SUBTEST([0][15].mask[31]--)

    // Loop through all bytes of the mixRing and check for serialiable changes
    for (size_t i = 0; i < mlen; ++i)
    {
        for (size_t j = 0; j < nlen; ++j)
        {
            static_assert(sizeof(rct::key) == 32, "rct::key size wrong");
            for (size_t k = 0; k < sizeof(rct::key); ++k)
            {
                SERIALIZABLE_MIXRING_CHANGES_SUBTEST([i][j].dest[k]++)
                SERIALIZABLE_MIXRING_CHANGES_SUBTEST([i][j].mask[k]++)
            }
        }
    }
}

#define EXPAND_TRANSACTION_2_FAILURES_SUBTEST(fieldmodifyclause)       \
    do {                                                               \
        cryptonote::transaction test_tx = original_tx;                 \
        test_tx.fieldmodifyclause;                                     \
        test_tx.invalidate_hashes();                                   \
        EXPECT_FALSE(check_tx_is_expanded(test_tx, original_mixring)); \
    } while (0);                                                       \

TEST(verRctNonSemanticsSimple, expand_transaction_2_failures)
{
    cryptonote::transaction original_tx = expand_transaction_from_bin_file_and_pubkeys
        (tx1_file_name, tx1_input_pubkeys);
    rct::ctkeyM original_mixring = tx1_input_pubkeys;

    EXPAND_TRANSACTION_2_FAILURES_SUBTEST(rct_signatures.p.CLSAGs[0].I[0]++)
    EXPAND_TRANSACTION_2_FAILURES_SUBTEST(rct_signatures.mixRing[0][15].dest[31]++)
    EXPAND_TRANSACTION_2_FAILURES_SUBTEST(rct_signatures.mixRing[0][15].mask[31]++)
}
