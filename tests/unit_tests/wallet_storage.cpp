// Copyright (c) 2023-2024, The Monero Project
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

#include "unit_tests_utils.h"
#include "gtest/gtest.h"

#include <boost/filesystem.hpp>
#include <cctype>
#ifndef _WIN32
#include <sys/stat.h>
#include <sys/resource.h>
#endif

#include "file_io_utils.h"
#include "wallet/wallet2.h"
#include "common/util.h"

using namespace boost::filesystem;
using namespace epee::file_io_utils;

class scoped_wallet_directory
{
public:
    scoped_wallet_directory()
      : directory_(temp_directory_path() / unique_path("salvium-wallet-storage-%%%%-%%%%-%%%%"))
    {
        create_directories(directory_);
    }

    ~scoped_wallet_directory()
    {
        boost::system::error_code error;
        remove_all(directory_, error);
    }

    path file(const char *name) const { return directory_ / name; }

private:
    path directory_;
};

static std::string create_wallet_fixture(const path &wallet_file, const epee::wipeable_string &password)
{
    tools::wallet2 wallet;
    wallet.generate(wallet_file.string(), password);
    wallet.store();
    return wallet.get_address_as_str();
}

// https://github.com/monero-project/monero/blob/67d190ce7c33602b6a3b804f633ee1ddb7fbb4a1/src/wallet/wallet2.cpp#L156
static constexpr const char WALLET2_ASCII_OUTPUT_MAGIC[] = "MoneroAsciiDataV1";

TEST(wallet_storage, safe_shared_file_writer)
{
    const scoped_wallet_directory files;
    const path output = files.file("export");

    ASSERT_TRUE(save_string_to_file(output.string(), "first"));
    ASSERT_TRUE(save_string_to_file(output.string(), "replacement"));
    std::string contents;
    ASSERT_TRUE(load_file_to_string(output.string(), contents));
    EXPECT_EQ("replacement", contents);

#ifndef _WIN32
    struct stat st{};
    ASSERT_EQ(0, stat(output.string().c_str(), &st));
    EXPECT_EQ(0600, st.st_mode & 0777);

    const path victim = files.file("victim");
    const path link = files.file("link");
    ASSERT_TRUE(save_string_to_file(victim.string(), "unchanged"));
    create_symlink(victim, link);
    EXPECT_FALSE(save_string_to_file(link.string(), "redirected"));
    ASSERT_TRUE(load_file_to_string(victim.string(), contents));
    EXPECT_EQ("unchanged", contents);

    const path hardlink = files.file("hardlink");
    create_hard_link(victim, hardlink);
    EXPECT_FALSE(save_string_to_file(hardlink.string(), "redirected"));
    ASSERT_TRUE(load_file_to_string(victim.string(), contents));
    EXPECT_EQ("unchanged", contents);
#endif
}

TEST(wallet_storage, transaction_size_estimator_rejects_non_protocol_counts)
{
    tools::wallet2 wallet;
    EXPECT_THROW(wallet.estimate_tx_size_and_weight(true, 0, 16, 2, 0), tools::error::wallet_internal_error);
    EXPECT_THROW(wallet.estimate_tx_size_and_weight(true, 65, 16, 2, 0), tools::error::wallet_internal_error);
    EXPECT_THROW(wallet.estimate_tx_size_and_weight(true, 1, 15, 2, 0), tools::error::wallet_internal_error);
    EXPECT_THROW(wallet.estimate_tx_size_and_weight(true, 1, 16, 17, 0), tools::error::wallet_internal_error);
}

TEST(wallet_storage, store_to_file2file)
{
    const scoped_wallet_directory files;
    const path source_wallet_file = files.file("source");
    const path interm_wallet_file = files.file("intermediate");
    const path target_wallet_file = files.file("target");
    epee::wipeable_string password("beepbeep");
    const std::string expected_primary_address = create_wallet_fixture(source_wallet_file, password);

    ASSERT_TRUE(is_file_exist(source_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(source_wallet_file.string() + ".keys"));

    tools::copy_file(source_wallet_file.string(), interm_wallet_file.string());
    tools::copy_file(source_wallet_file.string() + ".keys", interm_wallet_file.string() + ".keys");

    ASSERT_TRUE(is_file_exist(interm_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(interm_wallet_file.string() + ".keys"));

    ASSERT_FALSE(is_file_exist(target_wallet_file.string()));
    ASSERT_FALSE(is_file_exist(target_wallet_file.string() + ".keys"));

    const auto files_are_expected = [&]()
    {
        EXPECT_FALSE(is_file_exist(interm_wallet_file.string()));
        EXPECT_FALSE(is_file_exist(interm_wallet_file.string() + ".keys"));
        EXPECT_TRUE(is_file_exist(target_wallet_file.string()));
        EXPECT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));
    };

    {
        tools::wallet2 w;
        w.load(interm_wallet_file.string(), password);
        const std::string primary_address = w.get_address_as_str();
        EXPECT_EQ(expected_primary_address, primary_address);
        w.store_to(target_wallet_file.string(), password);
        files_are_expected();
    }

    files_are_expected();

    {
        tools::wallet2 w;
        w.load(target_wallet_file.string(), password);
        const std::string primary_address = w.get_address_as_str();
        EXPECT_EQ(expected_primary_address, primary_address);
        w.store_to("", "");
        files_are_expected();
    }

    files_are_expected();
}

TEST(wallet_storage, store_to_mem2file)
{
    const scoped_wallet_directory files;
    const path target_wallet_file = files.file("target");

    ASSERT_FALSE(is_file_exist(target_wallet_file.string()));
    ASSERT_FALSE(is_file_exist(target_wallet_file.string() + ".keys"));

    epee::wipeable_string password("beepbeep2");

    {
        tools::wallet2 w;
        w.generate("", password);
        w.store_to(target_wallet_file.string(), password);

        EXPECT_TRUE(is_file_exist(target_wallet_file.string()));
        EXPECT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));
    }

    EXPECT_TRUE(is_file_exist(target_wallet_file.string()));
    EXPECT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));

    {
        tools::wallet2 w;
        w.load(target_wallet_file.string(), password);

        EXPECT_TRUE(is_file_exist(target_wallet_file.string()));
        EXPECT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));
    }

    EXPECT_TRUE(is_file_exist(target_wallet_file.string()));
    EXPECT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));
}

TEST(wallet_storage, change_password_same_file)
{
    const scoped_wallet_directory files;
    const path source_wallet_file = files.file("source");
    const path interm_wallet_file = files.file("intermediate");
    epee::wipeable_string old_password("beepbeep");
    const std::string expected_primary_address = create_wallet_fixture(source_wallet_file, old_password);

    ASSERT_TRUE(is_file_exist(source_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(source_wallet_file.string() + ".keys"));

    tools::copy_file(source_wallet_file.string(), interm_wallet_file.string());
    tools::copy_file(source_wallet_file.string() + ".keys", interm_wallet_file.string() + ".keys");

    ASSERT_TRUE(is_file_exist(interm_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(interm_wallet_file.string() + ".keys"));

    epee::wipeable_string new_password("meepmeep");

    {
        tools::wallet2 w;
        w.load(interm_wallet_file.string(), old_password);
        const std::string primary_address = w.get_address_as_str();
        EXPECT_EQ(expected_primary_address, primary_address);
        w.change_password(w.get_wallet_file(), old_password, new_password);
    }

    {
        tools::wallet2 w;
        w.load(interm_wallet_file.string(), new_password);
        const std::string primary_address = w.get_address_as_str();
        EXPECT_EQ(expected_primary_address, primary_address);
    }

    {
        tools::wallet2 w;
        EXPECT_THROW(w.load(interm_wallet_file.string(), old_password), tools::error::invalid_password);
    }
}

TEST(wallet_storage, change_password_different_file)
{
    const scoped_wallet_directory files;
    const path source_wallet_file = files.file("source");
    const path interm_wallet_file = files.file("intermediate");
    const path target_wallet_file = files.file("target");
    epee::wipeable_string old_password("beepbeep");
    const std::string expected_primary_address = create_wallet_fixture(source_wallet_file, old_password);

    ASSERT_TRUE(is_file_exist(source_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(source_wallet_file.string() + ".keys"));

    tools::copy_file(source_wallet_file.string(), interm_wallet_file.string());
    tools::copy_file(source_wallet_file.string() + ".keys", interm_wallet_file.string() + ".keys");

    ASSERT_TRUE(is_file_exist(interm_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(interm_wallet_file.string() + ".keys"));

    ASSERT_FALSE(is_file_exist(target_wallet_file.string()));
    ASSERT_FALSE(is_file_exist(target_wallet_file.string() + ".keys"));

    epee::wipeable_string new_password("meepmeep");

    {
        tools::wallet2 w;
        w.load(interm_wallet_file.string(), old_password);
        const std::string primary_address = w.get_address_as_str();
        EXPECT_EQ(expected_primary_address, primary_address);
        w.change_password(target_wallet_file.string(), old_password, new_password);
    }

    EXPECT_FALSE(is_file_exist(interm_wallet_file.string()));
    EXPECT_FALSE(is_file_exist(interm_wallet_file.string() + ".keys"));
    EXPECT_TRUE(is_file_exist(target_wallet_file.string()));
    EXPECT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));

    {
        tools::wallet2 w;
        w.load(target_wallet_file.string(), new_password);
        const std::string primary_address = w.get_address_as_str();
        EXPECT_EQ(expected_primary_address, primary_address);
    }
}

TEST(wallet_storage, change_password_in_memory)
{
    const epee::wipeable_string password1("monero");
    const epee::wipeable_string password2("means money");
    const epee::wipeable_string password_wrong("is traceable");

    tools::wallet2 w;
    w.generate("", password1);
    const std::string primary_address_1 = w.get_address_as_str();
    w.change_password("", password1, password2);
    const std::string primary_address_2 = w.get_address_as_str();
    EXPECT_EQ(primary_address_1, primary_address_2);

    EXPECT_THROW(w.change_password("", password_wrong, password1), tools::error::invalid_password);
}

TEST(wallet_storage, change_password_mem2file)
{
    const scoped_wallet_directory files;
    const path target_wallet_file = files.file("target");

    ASSERT_FALSE(is_file_exist(target_wallet_file.string()));
    ASSERT_FALSE(is_file_exist(target_wallet_file.string() + ".keys"));

    const epee::wipeable_string password1("https://safecurves.cr.yp.to/rigid.html");
    const epee::wipeable_string password2(
        "https://csrc.nist.gov/csrc/media/projects/crypto-standards-development-process/documents/dualec_in_x982_and_sp800-90.pdf");
    
    std::string primary_address_1, primary_address_2;
    {
        tools::wallet2 w;
        w.generate("", password1);
        primary_address_1 = w.get_address_as_str();
        w.change_password(target_wallet_file.string(), password1, password2);
    }

    EXPECT_TRUE(is_file_exist(target_wallet_file.string()));
    EXPECT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));

    {
        tools::wallet2 w;
        w.load(target_wallet_file.string(), password2);
        primary_address_2 = w.get_address_as_str();
    }

    EXPECT_EQ(primary_address_1, primary_address_2);
}

TEST(wallet_storage, gen_ascii_format)
{
    const scoped_wallet_directory files;
    const path target_wallet_file = files.file("target");

    ASSERT_FALSE(is_file_exist(target_wallet_file.string()));
    ASSERT_FALSE(is_file_exist(target_wallet_file.string() + ".keys"));

    const epee::wipeable_string password("https://safecurves.cr.yp.to/rigid.html");
    
    std::string primary_address_1, primary_address_2;
    {
        tools::wallet2 w;
        w.set_export_format(tools::wallet2::Ascii);
        ASSERT_EQ(tools::wallet2::Ascii, w.export_format());
        w.generate(target_wallet_file.string(), password);
        primary_address_1 = w.get_address_as_str();
    }

    ASSERT_TRUE(is_file_exist(target_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));

    // Assert that we store keys in ascii format
    {
        std::string key_file_contents;
        ASSERT_TRUE(epee::file_io_utils::load_file_to_string(target_wallet_file.string() + ".keys", key_file_contents));
        EXPECT_NE(std::string::npos, key_file_contents.find(WALLET2_ASCII_OUTPUT_MAGIC));
        for (const char c : key_file_contents)
            ASSERT_TRUE(std::isprint(c) || c == '\n' || c == '\r');
    }

    {
        tools::wallet2 w;
        w.set_export_format(tools::wallet2::Ascii);
        ASSERT_EQ(tools::wallet2::Ascii, w.export_format());
        w.load(target_wallet_file.string(), password);
        primary_address_2 = w.get_address_as_str();
    }

    EXPECT_EQ(primary_address_1, primary_address_2);
}

TEST(wallet_storage, change_export_format)
{
    const scoped_wallet_directory files;
    const path target_wallet_file = files.file("target");

    ASSERT_FALSE(is_file_exist(target_wallet_file.string()));
    ASSERT_FALSE(is_file_exist(target_wallet_file.string() + ".keys"));

    const epee::wipeable_string password("https://safecurves.cr.yp.to/rigid.html");
    
    std::string primary_address_1, primary_address_2;
    {
        tools::wallet2 w;
        ASSERT_EQ(tools::wallet2::Binary, w.export_format());
        w.generate(target_wallet_file.string(), password);
        primary_address_1 = w.get_address_as_str();
        w.store();

        // Assert that we initially store keys in binary format
        {
            std::string key_file_contents;
            ASSERT_TRUE(epee::file_io_utils::load_file_to_string(target_wallet_file.string() + ".keys", key_file_contents));
            EXPECT_EQ(std::string::npos, key_file_contents.find(WALLET2_ASCII_OUTPUT_MAGIC));
            bool only_printable = true;
            for (const char c : key_file_contents)
            {
                if (!std::isprint(c) && c != '\n' && c != '\r')
                {
                    only_printable = false;
                    break;
                }
            }
            EXPECT_FALSE(only_printable);
        }

        // switch formats and store
        w.set_export_format(tools::wallet2::Ascii);
        ASSERT_EQ(tools::wallet2::Ascii, w.export_format());
        w.store_to("", password, /*force_rewrite_keys=*/ true);
    }

    ASSERT_TRUE(is_file_exist(target_wallet_file.string()));
    ASSERT_TRUE(is_file_exist(target_wallet_file.string() + ".keys"));

    // Assert that we store keys in ascii format
    {
        std::string key_file_contents;
        ASSERT_TRUE(epee::file_io_utils::load_file_to_string(target_wallet_file.string() + ".keys", key_file_contents));
        EXPECT_NE(std::string::npos, key_file_contents.find(WALLET2_ASCII_OUTPUT_MAGIC));
        for (const char c : key_file_contents)
            ASSERT_TRUE(std::isprint(c) || c == '\n' || c == '\r');
    }

    {
        tools::wallet2 w;
        w.set_export_format(tools::wallet2::Ascii);
        ASSERT_EQ(tools::wallet2::Ascii, w.export_format());
        w.load(target_wallet_file.string(), password);
        primary_address_2 = w.get_address_as_str();
    }

    EXPECT_EQ(primary_address_1, primary_address_2);
}

TEST(wallet_storage, import_outputs_rejects_allocation_budget_before_mutation)
{
    tools::wallet2 wallet;
    wallet.generate("", "");
    std::vector<tools::wallet2::exported_transfer_details> outputs(17);
    for (auto &output : outputs)
        output.m_internal_output_index = 65535;
    EXPECT_THROW(wallet.import_outputs(std::make_tuple(uint64_t{0}, uint64_t{17}, outputs)),
        tools::error::wallet_internal_error);
    tools::wallet2::transfer_container transfers;
    wallet.get_transfers(transfers);
    EXPECT_TRUE(transfers.empty());
}

TEST(wallet_storage, interrupted_cache_write_preserves_committed_wallet)
{
    const scoped_wallet_directory files;
    const path file = files.file("wallet");
    const path staging(file.string() + ".new");
    const epee::wipeable_string password("test_password");
    std::string address;
    {
        tools::wallet2 wallet(cryptonote::MAINNET, 1);
        wallet.generate(file.string(), password);
        wallet.set_attribute("save-checkpoint", "committed");
        wallet.store();
        address = wallet.get_address_as_str();
    }
    // Model process termination after a partial staging-file write and before
    // rename. The committed wallet must remain authoritative on reopening.
    ASSERT_TRUE(save_string_to_file(staging.string(), "partial interrupted cache"));
    {
        tools::wallet2 wallet(cryptonote::MAINNET, 1);
        wallet.load(file.string(), password);
        EXPECT_EQ(address, wallet.get_address_as_str());
        std::string value;
        ASSERT_TRUE(wallet.get_attribute("save-checkpoint", value));
        EXPECT_EQ("committed", value);
        wallet.set_attribute("save-checkpoint", "replacement");
        // Force a failed staging write, then retry after removing the obstacle.
        ASSERT_TRUE(remove(staging));
#ifndef _WIN32
        const path victim = files.file("unrelated-file");
        ASSERT_TRUE(save_string_to_file(victim.string(), "unchanged"));
        for (const bool hard_link : {false, true})
        {
            if (hard_link) create_hard_link(victim, staging);
            else create_symlink(victim, staging);
            EXPECT_THROW(wallet.store(), tools::error::file_save_error);
            std::string contents;
            ASSERT_TRUE(load_file_to_string(victim.string(), contents));
            EXPECT_EQ("unchanged", contents);
            ASSERT_TRUE(remove(staging));
        }
#endif
        ASSERT_TRUE(create_directory(staging));
        EXPECT_THROW(wallet.store(), tools::error::file_save_error);
        ASSERT_TRUE(remove(staging));
        wallet.store();
    }
    tools::wallet2 reopened(cryptonote::MAINNET, 1);
    reopened.load(file.string(), password);
    std::string value;
    ASSERT_TRUE(reopened.get_attribute("save-checkpoint", value));
    EXPECT_EQ("replacement", value);
    EXPECT_EQ(address, reopened.get_address_as_str());
}

namespace
{
tools::wallet2::exported_transfer_details make_owned_export(tools::wallet2 &wallet, uint64_t amount)
{
    tools::wallet2::exported_transfer_details output{};
    crypto::secret_key tx_secret;
    crypto::generate_keys(output.m_tx_pubkey, tx_secret);
    const auto &address = wallet.get_account().get_keys().m_account_address;
    crypto::key_derivation derivation;
    if (!crypto::generate_key_derivation(address.m_view_public_key, tx_secret, derivation) ||
        !crypto::derive_public_key(derivation, 0, address.m_spend_public_key, output.m_pubkey))
      throw std::runtime_error("Could not construct owned export");
    output.m_amount = amount;
    return output;
}
}

TEST(wallet_storage, malformed_import_preserves_existing_transfers_and_subaddresses)
{
    tools::wallet2 wallet(cryptonote::MAINNET, 1);
    wallet.set_subaddress_lookahead(1, 1);
    wallet.generate("", "");
    const epee::wipeable_string password("");
    tools::wallet_keys_unlocker unlocker(wallet, &password);
    auto owned = make_owned_export(wallet, 5);
    ASSERT_EQ(1, wallet.import_outputs(std::make_tuple(uint64_t{0}, uint64_t{1},
      std::vector<tools::wallet2::exported_transfer_details>{owned})));
    const auto addresses = wallet.get_subaddress_map_ref();
    auto changed = owned;
    changed.m_amount = 999;
    tools::wallet2::exported_transfer_details malformed{};
    malformed.m_subaddr_index_major = 1;
    EXPECT_THROW(wallet.import_outputs(std::make_tuple(uint64_t{0}, uint64_t{2},
      std::vector<tools::wallet2::exported_transfer_details>{changed, malformed})),
      tools::error::wallet_internal_error);
    tools::wallet2::transfer_container after;
    wallet.get_transfers(after);
    ASSERT_EQ(1, after.size());
    EXPECT_EQ(5, after[0].amount());
    EXPECT_EQ(owned.m_pubkey, after[0].get_public_key());
    EXPECT_EQ(addresses, wallet.get_subaddress_map_ref());
    auto legacy_changed = after[0];
    legacy_changed.m_amount = 999;
    EXPECT_THROW(wallet.import_outputs(std::make_tuple(uint64_t{0}, uint64_t{2},
      std::vector<tools::wallet2::transfer_details>{legacy_changed, tools::wallet2::transfer_details{}})),
      tools::error::wallet_internal_error);
    wallet.get_transfers(after);
    ASSERT_EQ(1, after.size());
    EXPECT_EQ(5, after[0].amount());
    EXPECT_EQ(addresses, wallet.get_subaddress_map_ref());
    // Retrying with a valid batch must still work after the rejected import.
    ASSERT_EQ(1, wallet.import_outputs(std::make_tuple(uint64_t{0}, uint64_t{1},
      std::vector<tools::wallet2::exported_transfer_details>{owned})));
}

TEST(wallet_storage, failed_move_keeps_source_keys_and_active_filename)
{
    const scoped_wallet_directory files;
    const path source = files.file("source");
    const path target = files.file("target");
    const epee::wipeable_string password("password");
    std::string address;
    {
        tools::wallet2 wallet(cryptonote::MAINNET, 1);
        wallet.generate(source.string(), password);
        wallet.store();
        address = wallet.get_address_as_str();
        ASSERT_TRUE(create_directory(target));
        EXPECT_THROW(wallet.store_to(target.string(), password), tools::error::file_save_error);
        EXPECT_TRUE(exists(source));
        EXPECT_TRUE(exists(path(source.string() + ".keys")));
        EXPECT_EQ(source.string(), wallet.get_wallet_file());
        wallet.store();
    }
    tools::wallet2 reopened(cryptonote::MAINNET, 1);
    reopened.load(source.string(), password);
    EXPECT_EQ(address, reopened.get_address_as_str());
}

TEST(wallet_storage, external_file_limit_is_checked_before_read)
{
    scoped_wallet_directory files;
    const auto file = files.file("oversized");
    ASSERT_TRUE(save_string_to_file(file.string(), ""));
    resize_file(file, tools::wallet_file_limits::exchange + 1);
    std::string output = "unchanged";
    EXPECT_FALSE(tools::wallet2::load_from_file(file.string(), output));
    EXPECT_EQ("unchanged", output);
}
TEST(wallet_storage, malformed_ascii_does_not_replace_output)
{
    scoped_wallet_directory files;
    const auto file = files.file("malformed");
    ASSERT_TRUE(save_string_to_file(file.string(), "-----BEGIN MoneroAsciiDataV1-----\n!invalid!\n"));
    std::string output = "unchanged";
    EXPECT_FALSE(tools::wallet2::load_from_file(file.string(), output));
    EXPECT_EQ("unchanged", output);
}
TEST(wallet_storage, parent_directory_sync_and_post_rename_failure)
{
    scoped_wallet_directory files;
    const auto original = files.file("wallet");
    const auto temporary = files.file("wallet.tmp");
    ASSERT_TRUE(save_string_to_file(original.string(), "old"));
    ASSERT_TRUE(save_string_to_file(temporary.string(), "new"));
    EXPECT_FALSE(tools::replace_file(temporary.string(), original.string()));
    std::string output;
    ASSERT_TRUE(load_file_to_string(original.string(), output));
    EXPECT_EQ("new", output);
#ifndef _WIN32
    ASSERT_TRUE(save_string_to_file(temporary.string(), "replacement"));
    rlimit descriptor_limit{};
    ASSERT_EQ(0, getrlimit(RLIMIT_NOFILE, &descriptor_limit));
    auto restore = epee::misc_utils::create_scope_leave_handler([&] {
        setrlimit(RLIMIT_NOFILE, &descriptor_limit);
    });
    auto exhausted = descriptor_limit;
    exhausted.rlim_cur = 0;
    ASSERT_EQ(0, setrlimit(RLIMIT_NOFILE, &exhausted));
    const auto result = tools::replace_file(temporary.string(), original.string());
    ASSERT_EQ(0, setrlimit(RLIMIT_NOFILE, &descriptor_limit));
    EXPECT_TRUE(result); // rename succeeded; opening the directory to fsync failed
    ASSERT_TRUE(load_file_to_string(original.string(), output));
    EXPECT_EQ("replacement", output); // never roll back an already installed wallet
    EXPECT_FALSE(exists(temporary));
#endif
}
TEST(wallet_storage, truncated_transaction_packages_are_rejected)
{
    tools::wallet2 wallet;
    tools::wallet2::unsigned_tx_set unsigned_set;
    std::vector<tools::wallet2::pending_tx> signed_set;
    for (const auto& input : {std::string{}, std::string("Salvium unsigned tx set"), std::string("Salvium signed tx set")})
    {
        EXPECT_FALSE(wallet.parse_unsigned_tx_from_str(input, unsigned_set));
        EXPECT_FALSE(wallet.parse_tx_from_str(input, signed_set, nullptr));
    }
}
