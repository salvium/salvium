#include <cstring>
#include <ctime>
#include <limits>

#include <boost/filesystem.hpp>
#include <gtest/gtest.h>

#include "carrot_core/account_secrets.h"
#include "cryptonote_protocol/salchat_relay.h"
#include "ringct/rctOps.h"
#include "serialization/binary_utils.h"
#include "string_tools.h"
#include "wallet/salchat_protocol.h"
#include "wallet/salchat_service.h"
#include "wallet/wallet2.h"

namespace
{
  struct test_identity
  {
    crypto::secret_key k_generate_image{};
    crypto::secret_key k_prove_spend{};
    crypto::secret_key view_secret_key{};
    crypto::secret_key wallet_seed{};
    crypto::secret_key message_secret_key{};
    crypto::public_key spend_public_key{};
    crypto::public_key view_public_key{};
    crypto::public_key encryption_public_key{};
  };

  test_identity make_identity()
  {
    test_identity result;
    result.k_generate_image = rct::rct2sk(rct::skGen());
    result.k_prove_spend = rct::rct2sk(rct::skGen());
    carrot::make_carrot_spend_pubkey(
      result.k_generate_image, result.k_prove_spend, result.spend_public_key);
    crypto::generate_keys(result.view_public_key, result.view_secret_key);
    result.wallet_seed = rct::rct2sk(rct::skGen());
    EXPECT_TRUE(salchat::derive_message_keys(result.wallet_seed,
      result.message_secret_key, result.encryption_public_key));
    return result;
  }

  salchat::contact as_contact(const test_identity& identity, const char* label)
  {
    salchat::contact result;
    result.spend_public_key = identity.spend_public_key;
    result.view_public_key = identity.view_public_key;
    result.signing_public_key = identity.spend_public_key;
    result.encryption_public_key = identity.encryption_public_key;
    result.id = salchat::make_contact_id(
      result.spend_public_key, result.view_public_key, result.encryption_public_key);
    result.label = label;
    return result;
  }

  void resign(cryptonote::salchat_p2p_envelope& envelope, const test_identity& sender)
  {
    ASSERT_TRUE(cryptonote::generate_salchat_signature(
      cryptonote::get_salchat_signature_hash(envelope), sender.spend_public_key,
      sender.k_generate_image, sender.k_prove_spend, envelope.sender_signature));
  }

  // Match the saved layout shipped before local message expiry was enforced.
  struct legacy_message : salchat::message
  {
    BEGIN_SERIALIZE_OBJECT()
      VERSION_FIELD(3)
      FIELD(id) FIELD(contact_id) VARINT_FIELD(type) VARINT_FIELD(direction) VARINT_FIELD(state)
      FIELD(content) VARINT_FIELD(created_at) VARINT_FIELD(received_at) FIELD(sender_signing_public_key)
      FIELD(sender_salvium_address) FIELD(sender_encryption_public_key) VARINT_FIELD(expires_height)
    END_SERIALIZE()
  };

  struct saved_receipt
  {
    crypto::hash message_id{}, contact_id{};
    std::uint64_t created_at = 0;
    BEGIN_SERIALIZE_OBJECT()
      VERSION_FIELD(2)
      FIELD(message_id) FIELD(contact_id) VARINT_FIELD(created_at)
    END_SERIALIZE()
  };

  template<typename Message> struct saved_chat_state
  {
    std::vector<salchat::contact> contacts;
    std::vector<Message> messages;
    std::vector<crypto::hash> seen_message_ids, seen_ciphertext_hashes;
    std::vector<saved_receipt> pending_receipts;
    BEGIN_SERIALIZE_OBJECT()
      VERSION_FIELD(3)
      VARINT_FIELD(version) FIELD(contacts) FIELD(messages) FIELD(seen_message_ids)
      FIELD(seen_ciphertext_hashes) FIELD(pending_receipts)
    END_SERIALIZE()
  };

  struct wallet_directory
  {
    boost::filesystem::path directory = boost::filesystem::temp_directory_path() /
      boost::filesystem::unique_path("salchat-history-%%%%-%%%%-%%%%");
    wallet_directory() { boost::filesystem::create_directories(directory); }
    ~wallet_directory()
    {
      boost::system::error_code error;
      boost::filesystem::remove_all(directory, error);
    }
    std::string file() const { return (directory / "wallet").string(); }
  };
}

TEST(salchat_wallet, local_expiry_uses_requested_time_or_height_with_legacy_fallback)
{
  salchat::message item;
  item.created_at = 1000;
  item.expires_at = 1060;
  item.expires_height = 200;
  EXPECT_FALSE(salchat::detail::message_expired(item, 1059, 199));
  EXPECT_TRUE(salchat::detail::message_expired(item, 1060, 0));
  EXPECT_TRUE(salchat::detail::message_expired(item, 1000, 200));
  EXPECT_FALSE(salchat::detail::message_expired(item, 999, 0));

  item.expires_at = 0;
  item.received_at = item.created_at + cryptonote::SALCHAT_MAX_TTL_SECONDS;
  EXPECT_FALSE(salchat::detail::message_expired(item, item.received_at - 1, 0));
  EXPECT_TRUE(salchat::detail::message_expired(item, item.received_at, 0));
  item.created_at = std::numeric_limits<std::uint64_t>::max() - 1;
  EXPECT_FALSE(salchat::detail::message_expired(item, 1000, 0));
  EXPECT_FALSE(salchat::detail::message_expired(item, item.created_at + 1, 0));
}

TEST(salchat_wallet, saved_messages_read_legacy_layout_and_preserve_requested_expiry)
{
  legacy_message legacy;
  legacy.content = "older wallet";
  legacy.created_at = 1000;
  legacy.expires_height = 200;
  std::string bytes;
  ASSERT_TRUE(serialization::dump_binary(legacy, bytes));
  salchat::message decoded;
  decoded.expires_at = 9999;
  ASSERT_TRUE(serialization::parse_binary(bytes, decoded));
  EXPECT_EQ(decoded.content, legacy.content);
  EXPECT_EQ(decoded.expires_height, legacy.expires_height);
  EXPECT_EQ(decoded.expires_at, 0u);
  decoded.expires_at = 1060;
  ASSERT_TRUE(serialization::dump_binary(decoded, bytes));
  salchat::message restored;
  ASSERT_TRUE(serialization::parse_binary(bytes, restored));
  EXPECT_EQ(restored.expires_at, 1060u);
  EXPECT_EQ(restored.content, legacy.content);
}

TEST(salchat_wallet, older_wallet_history_is_pruned_offline_and_stays_pruned_after_reopen)
{
  const wallet_directory files;
  const auto sender = make_identity();
  auto contact = as_contact(sender, "Saved contact");
  contact.salvium_address = cryptonote::get_account_address_as_str(cryptonote::MAINNET, false,
    {sender.spend_public_key, sender.view_public_key, true});
  const auto now = static_cast<std::uint64_t>(std::time(nullptr));
  saved_chat_state<legacy_message> old;
  old.contacts.push_back(contact);
  for (unsigned char i = 1; i <= 5; ++i)
  {
    legacy_message item;
    std::memset(&item.id, i, sizeof(item.id));
    item.contact_id = contact.id;
    item.content = i == 1 ? "current message" : "expired history";
    item.sender_salvium_address = contact.salvium_address;
    item.sender_signing_public_key = sender.spend_public_key;
    item.sender_encryption_public_key = sender.encryption_public_key;
    item.created_at = i == 1 || i == 5 ? now : now - cryptonote::SALCHAT_MAX_TTL_SECONDS - 1;
    item.received_at = now;
    item.expires_height = i == 5 ? 1 : 1000000;
    if (i == 3)
    {
      item.direction = salchat::message_direction::outgoing;
      item.state = salchat::message_state::delivered;
    }
    if (i == 4) item.state = salchat::message_state::quarantined;
    old.messages.push_back(item);
    old.seen_message_ids.push_back(item.id);
    old.seen_ciphertext_hashes.push_back(item.id);
    old.pending_receipts.push_back({item.id, contact.id, now});
  }
  old.pending_receipts.push_back({old.messages[0].id, contact.id,
    now - cryptonote::SALCHAT_MAX_TTL_SECONDS - 1});
  std::string bytes;
  ASSERT_TRUE(serialization::dump_binary(old, bytes));
  const auto original = epee::string_tools::buff_to_hex_nodelimer(bytes);
  {
    tools::wallet2 wallet;
    wallet.generate(files.file(), "");
    wallet.set_attribute("salchat.state.v4", original);
    wallet.store();
  }
  {
    tools::wallet2 wallet;
    wallet.load(files.file(), "");
    salchat::service service(wallet);
    const auto messages = service.messages();
    ASSERT_EQ(messages.size(), 1u);
    EXPECT_EQ(messages[0].id, old.messages[0].id);
    EXPECT_EQ(messages[0].content, "current message");
    EXPECT_EQ(service.message_count(), 1u);
    EXPECT_EQ(service.contacts().size(), 1u);
    salchat::message result;
    for (std::size_t i = 1; i < old.messages.size(); ++i)
      EXPECT_FALSE(service.get_message(salchat::service::id_hex(old.messages[i].id), result));
  }
  {
    // Read the saved attribute before calling the service, proving deletion
    // was persisted rather than just hidden from a displayed message list.
    tools::wallet2 wallet;
    wallet.load(files.file(), "");
    std::string encoded;
    ASSERT_TRUE(wallet.get_attribute("salchat.state.v4", encoded));
    EXPECT_NE(encoded, original);
    ASSERT_TRUE(epee::string_tools::parse_hexstr_to_binbuff(encoded, bytes));
    saved_chat_state<salchat::message> saved;
    ASSERT_TRUE(serialization::parse_binary(bytes, saved));
    ASSERT_EQ(saved.messages.size(), 1u);
    EXPECT_EQ(saved.messages[0].id, old.messages[0].id);
    ASSERT_EQ(saved.contacts.size(), 1u);
    EXPECT_EQ(saved.contacts[0].label, contact.label);
    EXPECT_EQ(saved.seen_message_ids, old.seen_message_ids);
    EXPECT_EQ(saved.seen_ciphertext_hashes, old.seen_ciphertext_hashes);
    ASSERT_EQ(saved.pending_receipts.size(), 1u);
    EXPECT_EQ(saved.pending_receipts[0].message_id, old.messages[0].id);
  }
}

TEST(salchat_wallet, address_contact_encrypts_authenticates_and_decrypts_text)
{
  static_assert(cryptonote::SALCHAT_PROTOCOL_VERSION == 4, "Salchat must use V4 only");
  const auto alice = make_identity();
  const auto bob = make_identity();
  const auto bob_contact = as_contact(bob, "Bob");
  ASSERT_TRUE(salchat::valid_contact(bob_contact));

  cryptonote::salchat_p2p_envelope envelope;
  std::string error;
  ASSERT_TRUE(salchat::encrypt_payload(alice.k_generate_image, alice.k_prove_spend,
    alice.message_secret_key,
    alice.spend_public_key, alice.view_public_key,
    bob_contact, cryptonote::MAINNET, salchat::message_type::text,
    "SC address hello", 3600, 1000, envelope, error)) << error;
  EXPECT_EQ(envelope.protocol_version, 4);
  EXPECT_EQ(envelope.expires_at - envelope.created_at, 3600u);
  EXPECT_EQ(envelope.expires_height-envelope.created_height,
    cryptonote::SALCHAT_MESSAGE_LIFETIME_BLOCKS);
  EXPECT_EQ(envelope.recipient_tag,
    salchat::make_recipient_tag(bob.encryption_public_key, 0, cryptonote::MAINNET));

  cryptonote::salchat_config config;
  config.enabled = true;
  ASSERT_TRUE(cryptonote::validate_salchat_envelope(envelope, config, 1000, error)) << error;
  salchat::decrypted_payload plain;
  ASSERT_TRUE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key, bob.view_public_key,
    cryptonote::MAINNET, envelope, plain, 1000, error)) << error;
  EXPECT_EQ(plain.type, salchat::message_type::text);
  EXPECT_EQ(plain.content, "SC address hello");
  EXPECT_EQ(plain.sender_spend_public_key, alice.spend_public_key);
  EXPECT_EQ(plain.sender_view_public_key, alice.view_public_key);
  EXPECT_EQ(plain.sender_signing_public_key, alice.spend_public_key);
  EXPECT_EQ(plain.sender_encryption_public_key, alice.encryption_public_key);
  EXPECT_EQ(plain.recipient_contact_id, bob_contact.id);
  EXPECT_EQ(cryptonote::make_salchat_ack_token_hash(envelope.message_id, plain.ack_token),
    envelope.ack_token_hash);

  salchat::decrypted_payload view_only;
  EXPECT_FALSE(salchat::decrypt_payload(bob.view_secret_key, bob.spend_public_key,
    bob.view_public_key, cryptonote::MAINNET, envelope, view_only, 1000, error));

  salchat::decrypted_payload wrong_network;
  EXPECT_FALSE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key,
    bob.view_public_key, cryptonote::TESTNET, envelope, wrong_network, 1000, error));
  EXPECT_EQ(error, "Salchat envelope belongs to another recipient or network");

  salchat::decrypted_payload expired;
  EXPECT_FALSE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key,
    bob.view_public_key, cryptonote::MAINNET, envelope, expired, envelope.expires_at,
    envelope.expires_height, error));
  EXPECT_EQ(error, "envelope expired at block height");

  EXPECT_FALSE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key,
    bob.view_public_key, cryptonote::MAINNET, envelope, expired, envelope.expires_at,
    envelope.created_height, error));
  EXPECT_EQ(error, "envelope expired at requested time");
}

TEST(salchat_wallet, rejects_wrong_recipient_and_forged_ciphertext)
{
  const auto alice = make_identity();
  const auto bob = make_identity();
  const auto mallory = make_identity();
  cryptonote::salchat_p2p_envelope envelope;
  std::string error;
  ASSERT_TRUE(salchat::encrypt_payload(alice.k_generate_image, alice.k_prove_spend,
    alice.message_secret_key,
    alice.spend_public_key, alice.view_public_key,
    as_contact(bob, "Bob"), cryptonote::MAINNET, salchat::message_type::text,
    "authenticated", 3600, 1000, envelope, error)) << error;
  salchat::decrypted_payload plain;
  EXPECT_FALSE(salchat::decrypt_payload(mallory.message_secret_key, mallory.spend_public_key, mallory.view_public_key,
    cryptonote::MAINNET, envelope, plain, 1000, error));

  envelope.ciphertext[0] ^= 1;
  crypto::cn_fast_hash(envelope.ciphertext.data(), envelope.ciphertext.size(), envelope.ciphertext_hash);
  resign(envelope, alice);
  cryptonote::salchat_config config;
  config.enabled = true;
  ASSERT_TRUE(cryptonote::validate_salchat_envelope(envelope, config, 1000, error)) << error;
  EXPECT_FALSE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key, bob.view_public_key,
    cryptonote::MAINNET, envelope, plain, 1000, error));
}

TEST(salchat_wallet, rejects_authenticated_sender_with_invalid_address_key)
{
  const auto alice = make_identity();
  const auto bob = make_identity();
  crypto::public_key invalid_view{};
  std::memset(&invalid_view, 0xff, sizeof(invalid_view));
  ASSERT_FALSE(crypto::check_key(invalid_view));

  // An attacker can sign and encrypt arbitrary sender metadata. The outer
  // relay signature and AEAD must not make an invalid wallet address trusted.
  cryptonote::salchat_p2p_envelope envelope;
  std::string error;
  ASSERT_TRUE(salchat::encrypt_payload(alice.k_generate_image, alice.k_prove_spend,
    alice.message_secret_key, alice.spend_public_key, invalid_view,
    as_contact(bob, "Bob"), cryptonote::MAINNET, salchat::message_type::text,
    "invalid sender address", 3600, 1000, envelope, error)) << error;
  cryptonote::salchat_config config;
  config.enabled = true;
  ASSERT_TRUE(cryptonote::validate_salchat_envelope(envelope, config, 1000, error)) << error;
  salchat::decrypted_payload plain;
  EXPECT_FALSE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key,
    bob.view_public_key, cryptonote::MAINNET, envelope, plain, 1000, error));
  EXPECT_EQ(error, "invalid Salchat plaintext payload");
  EXPECT_TRUE(plain.content.empty());
}

TEST(salchat_wallet, address_keys_are_deterministic_and_bound_to_contact)
{
  const auto alice = make_identity();
  crypto::public_key converted{};
  crypto::secret_key derived_secret{};
  ASSERT_TRUE(salchat::derive_message_keys(alice.wallet_seed, derived_secret, converted));
  EXPECT_EQ(derived_secret, alice.message_secret_key);
  EXPECT_EQ(converted, alice.encryption_public_key);

  auto contact = as_contact(alice, "Alice");
  EXPECT_TRUE(salchat::valid_contact(contact));
  contact.spend_public_key = make_identity().spend_public_key;
  EXPECT_FALSE(salchat::valid_contact(contact));
  contact = as_contact(alice, "Alice");
  contact.view_public_key = make_identity().view_public_key;
  EXPECT_FALSE(salchat::valid_contact(contact));
  contact = as_contact(alice, "Alice");
  contact.encryption_public_key = make_identity().encryption_public_key;
  EXPECT_FALSE(salchat::valid_contact(contact));
  contact = as_contact(alice, "Alice");
  contact.spend_public_key = rct::rct2pk(rct::identity());
  contact.signing_public_key = contact.spend_public_key;
  contact.id = salchat::make_contact_id(
    contact.spend_public_key, contact.view_public_key, contact.encryption_public_key);
  EXPECT_FALSE(salchat::valid_contact(contact));
}

TEST(salchat_wallet, generated_message_keys_are_random_valid_and_convergent)
{
  crypto::secret_key first_secret{};
  crypto::public_key first_public{};
  crypto::secret_key second_secret{};
  crypto::public_key second_public{};
  ASSERT_TRUE(salchat::generate_message_keys(first_secret, first_public));
  ASSERT_TRUE(salchat::generate_message_keys(second_secret, second_public));
  EXPECT_NE(first_secret, crypto::null_skey);
  EXPECT_NE(first_public, crypto::public_key{});
  EXPECT_NE(first_secret, second_secret);
  EXPECT_NE(first_public, second_public);
  EXPECT_TRUE(salchat::valid_encryption_public_key(first_public));
  EXPECT_TRUE(salchat::valid_encryption_public_key(second_public));

  crypto::public_key derived{};
  ASSERT_TRUE(salchat::message_public_key(first_secret, derived));
  EXPECT_EQ(derived, first_public);
}

TEST(salchat_wallet, retired_message_key_overlap_uses_time_and_chain_height)
{
  constexpr std::uint64_t retired_at = 1000000;
  constexpr std::uint64_t retired_height = 50000;
  EXPECT_TRUE(salchat::detail::retired_message_key_active(
    retired_at, retired_height, retired_at, retired_height));
  EXPECT_TRUE(salchat::detail::retired_message_key_active(
    retired_at, retired_height,
    retired_at + cryptonote::SALCHAT_MAX_TTL_SECONDS,
    retired_height + cryptonote::SALCHAT_MESSAGE_LIFETIME_BLOCKS - 1));
  EXPECT_TRUE(salchat::detail::retired_message_key_active(
    retired_at, retired_height,
    retired_at + cryptonote::SALCHAT_MAX_TTL_SECONDS - 1,
    retired_height + cryptonote::SALCHAT_MESSAGE_LIFETIME_BLOCKS));
  EXPECT_FALSE(salchat::detail::retired_message_key_active(
    retired_at, retired_height,
    retired_at + cryptonote::SALCHAT_MAX_TTL_SECONDS,
    retired_height + cryptonote::SALCHAT_MESSAGE_LIFETIME_BLOCKS));
  EXPECT_TRUE(salchat::detail::retired_message_key_active(
    retired_at, retired_height, retired_at - 1, retired_height - 1));
}

TEST(salchat_wallet, retired_key_still_decrypts_pre_rotation_envelope)
{
  const auto alice = make_identity();
  const auto bob = make_identity();
  cryptonote::salchat_p2p_envelope envelope;
  std::string error;
  ASSERT_TRUE(salchat::encrypt_payload(alice.k_generate_image, alice.k_prove_spend,
    alice.message_secret_key, alice.spend_public_key, alice.view_public_key,
    as_contact(bob, "Bob"), cryptonote::MAINNET, salchat::message_type::text,
    "waiting before rotation", 3600, 1000, envelope, error)) << error;

  crypto::secret_key replacement_secret{};
  crypto::public_key replacement_public{};
  ASSERT_TRUE(salchat::generate_message_keys(replacement_secret, replacement_public));
  salchat::decrypted_payload wrong_key;
  EXPECT_FALSE(salchat::decrypt_payload(replacement_secret, bob.spend_public_key,
    bob.view_public_key, cryptonote::MAINNET, envelope, wrong_key, 1000, error));

  salchat::decrypted_payload recovered;
  ASSERT_TRUE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key,
    bob.view_public_key, cryptonote::MAINNET, envelope, recovered, 1000, error)) << error;
  EXPECT_EQ(recovered.content, "waiting before rotation");
}

TEST(salchat_wallet, failed_message_key_derivation_clears_outputs)
{
  const auto initialized=make_identity();
  crypto::secret_key message_secret=initialized.message_secret_key;
  crypto::public_key encryption_public=initialized.encryption_public_key;

  EXPECT_FALSE(salchat::derive_message_keys(
    crypto::null_skey,message_secret,encryption_public));
  EXPECT_EQ(message_secret,crypto::null_skey);
  EXPECT_EQ(encryption_public,crypto::public_key{});
}

TEST(salchat_wallet, receive_batcher_honors_limit_and_stops_without_progress)
{
  salchat::detail::receive_batcher complete(250);
  ASSERT_EQ(complete.next_limit(),100u);
  ASSERT_TRUE(complete.advance(100,true,true));
  EXPECT_EQ(complete.remaining(),150u);
  ASSERT_EQ(complete.next_limit(),100u);
  ASSERT_TRUE(complete.advance(100,true,true));
  ASSERT_EQ(complete.next_limit(),50u);
  EXPECT_FALSE(complete.advance(50,true,true));
  EXPECT_EQ(complete.next_limit(),0u);
  EXPECT_EQ(complete.remaining(),0u);

  salchat::detail::receive_batcher short_response(250);
  EXPECT_FALSE(short_response.advance(42,true,true));
  EXPECT_EQ(short_response.next_limit(),0u);

  salchat::detail::receive_batcher no_progress(250);
  EXPECT_FALSE(no_progress.advance(100,true,false));
  EXPECT_EQ(no_progress.next_limit(),0u);

  salchat::detail::receive_batcher non_destructive_check(250);
  EXPECT_FALSE(non_destructive_check.advance(100,false,true));
  EXPECT_EQ(non_destructive_check.next_limit(),0u);
}

TEST(salchat_wallet, spend_authority_signature_is_message_bound_and_view_key_cannot_forge_it)
{
  const auto alice = make_identity();
  const crypto::hash message_hash = crypto::rand<crypto::hash>();
  std::array<std::uint8_t, cryptonote::SALCHAT_SIGNATURE_BYTES> signature{};
  ASSERT_TRUE(cryptonote::generate_salchat_signature(message_hash, alice.spend_public_key,
    alice.k_generate_image, alice.k_prove_spend, signature));
  EXPECT_TRUE(cryptonote::check_salchat_signature(
    message_hash, alice.spend_public_key, signature));

  crypto::hash different_hash = message_hash;
  reinterpret_cast<unsigned char*>(&different_hash)[0] ^= 1;
  EXPECT_FALSE(cryptonote::check_salchat_signature(
    different_hash, alice.spend_public_key, signature));

  std::array<std::uint8_t, cryptonote::SALCHAT_SIGNATURE_BYTES> forged{};
  EXPECT_FALSE(cryptonote::generate_salchat_signature(message_hash, alice.spend_public_key,
    alice.view_secret_key, alice.view_secret_key, forged));
  const auto non_spending_observer = make_identity();
  EXPECT_FALSE(cryptonote::generate_salchat_signature(message_hash, alice.spend_public_key,
    alice.k_generate_image, non_spending_observer.k_prove_spend, forged));
  forged.fill(0xff);
  EXPECT_FALSE(cryptonote::check_salchat_signature(
    message_hash, alice.spend_public_key, forged));
}

TEST(salchat_wallet, delivery_receipt_uses_the_same_authenticated_channel)
{
  const auto alice = make_identity();
  const auto bob = make_identity();
  const crypto::hash delivered = crypto::rand<crypto::hash>();
  const std::string delivered_hex = epee::string_tools::pod_to_hex(delivered);
  cryptonote::salchat_p2p_envelope envelope;
  std::string error;
  ASSERT_TRUE(salchat::encrypt_payload(bob.k_generate_image, bob.k_prove_spend,
    bob.message_secret_key,
    bob.spend_public_key, bob.view_public_key,
    as_contact(alice, "Alice"), cryptonote::MAINNET, salchat::message_type::delivery_receipt,
    delivered_hex, 3600, 1000, envelope, error)) << error;
  salchat::decrypted_payload plain;
  ASSERT_TRUE(salchat::decrypt_payload(alice.message_secret_key, alice.spend_public_key, alice.view_public_key,
    cryptonote::MAINNET, envelope, plain, 1000, error)) << error;
  EXPECT_EQ(plain.type, salchat::message_type::delivery_receipt);
  EXPECT_EQ(plain.content, delivered_hex);
}

TEST(salchat_wallet, routing_tags_are_keyed_by_recipient_and_epoch)
{
  const auto alice = make_identity();
  const auto bob = make_identity();
  EXPECT_NE(salchat::make_recipient_tag(alice.encryption_public_key, 7, cryptonote::MAINNET),
    salchat::make_recipient_tag(alice.encryption_public_key, 8, cryptonote::MAINNET));
  EXPECT_NE(salchat::make_recipient_tag(alice.encryption_public_key, 7, cryptonote::MAINNET),
    salchat::make_recipient_tag(bob.encryption_public_key, 7, cryptonote::MAINNET));
  EXPECT_NE(salchat::make_recipient_tag(alice.encryption_public_key, 7, cryptonote::MAINNET),
    salchat::make_recipient_tag(alice.encryption_public_key, 7, cryptonote::TESTNET));
}

TEST(salchat_wallet, rejects_low_order_encryption_keys_and_empty_ciphertext)
{
  crypto::public_key zero_key{};
  EXPECT_FALSE(salchat::valid_encryption_public_key(zero_key));

  const auto alice = make_identity();
  cryptonote::salchat_p2p_envelope empty;
  salchat::decrypted_payload plain;
  std::string error;
  EXPECT_FALSE(salchat::decrypt_payload(alice.message_secret_key, alice.spend_public_key, alice.view_public_key,
    cryptonote::MAINNET, empty, plain, 1000, error));
}

TEST(salchat_wallet, enforces_text_boundary_and_consistent_sender_keys)
{
  const auto alice = make_identity();
  const auto bob = make_identity();
  const auto bob_contact = as_contact(bob, "Bob");
  cryptonote::salchat_p2p_envelope envelope;
  std::string error;
  const std::string maximum(salchat::MAX_TEXT_BYTES, 'x');
  ASSERT_TRUE(salchat::encrypt_payload(alice.k_generate_image, alice.k_prove_spend,
    alice.message_secret_key,
    alice.spend_public_key, alice.view_public_key,
    bob_contact, cryptonote::MAINNET, salchat::message_type::text,
    maximum, 3600, 1000, envelope, error)) << error;
  salchat::decrypted_payload plain;
  ASSERT_TRUE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key, bob.view_public_key,
    cryptonote::MAINNET, envelope, plain, 1000, error)) << error;
  EXPECT_EQ(plain.content, maximum);
  EXPECT_FALSE(salchat::encrypt_payload(alice.k_generate_image, alice.k_prove_spend,
    alice.message_secret_key,
    alice.spend_public_key, alice.view_public_key,
    bob_contact, cryptonote::MAINNET, salchat::message_type::text,
    maximum + 'x', 3600, 1000, envelope, error));

  const auto outsider = make_identity();
  EXPECT_FALSE(salchat::encrypt_payload(outsider.k_generate_image, outsider.k_prove_spend,
    alice.message_secret_key,
    alice.spend_public_key, alice.view_public_key,
    bob_contact, cryptonote::MAINNET, salchat::message_type::text,
    "inconsistent sender", 3600, 1000, envelope, error));
  const auto alternate_message_identity = make_identity();
  EXPECT_TRUE(salchat::encrypt_payload(alice.k_generate_image, alice.k_prove_spend,
    alternate_message_identity.message_secret_key,
    alice.spend_public_key, alice.view_public_key,
    bob_contact, cryptonote::MAINNET, salchat::message_type::text,
    "inconsistent view key", 3600, 1000, envelope, error));
  ASSERT_TRUE(salchat::decrypt_payload(bob.message_secret_key, bob.spend_public_key,
    bob.view_public_key, cryptonote::MAINNET, envelope, plain, 1000, error));
  EXPECT_EQ(plain.sender_encryption_public_key,
    alternate_message_identity.encryption_public_key);
}

TEST(salchat_wallet, rejects_invalid_utf8_and_display_reordering_controls)
{
  EXPECT_TRUE(salchat::valid_text("normal UTF-8: \xf0\x9f\x94\x92\nsecond line"));
  EXPECT_FALSE(salchat::valid_text(std::string("overlong: ") + "\xc0\xaf"));
  EXPECT_FALSE(salchat::valid_text(std::string("surrogate: ") + "\xed\xa0\x80"));
  EXPECT_FALSE(salchat::valid_text(std::string("bidi: ") + "\xe2\x80\xae" + "txt"));
  EXPECT_FALSE(salchat::valid_text(std::string("zero width: ") + "\xe2\x80\x8b"));
  EXPECT_FALSE(salchat::valid_text(std::string("escape: ") + "\x1b" + "[31m"));
  EXPECT_TRUE(salchat::valid_text("label",false));
  EXPECT_FALSE(salchat::valid_text("line\nbreak",false));

  const auto alice = make_identity();
  const auto bob = make_identity();
  cryptonote::salchat_p2p_envelope envelope;
  std::string error;
  EXPECT_FALSE(salchat::encrypt_payload(alice.k_generate_image,alice.k_prove_spend,
    alice.message_secret_key,alice.spend_public_key,alice.view_public_key,as_contact(bob,"Bob"),
    cryptonote::MAINNET, salchat::message_type::text,
    std::string("spoof ") + "\xe2\x80\xae" + "txt",
    3600,1000,envelope,error));
}

TEST(salchat_wallet, contact_removal_erases_only_matching_history_and_receipts)
{
  const crypto::hash removed_contact = crypto::rand<crypto::hash>();
  const crypto::hash retained_contact = crypto::rand<crypto::hash>();

  std::vector<salchat::message> messages(3);
  messages[0].contact_id = removed_contact;
  messages[0].content = "first removed message";
  messages[1].contact_id = retained_contact;
  messages[1].content = "retained message";
  messages[2].contact_id = removed_contact;
  messages[2].content = "second removed message";

  EXPECT_EQ(salchat::detail::erase_contact_messages(messages, removed_contact), 2u);
  ASSERT_EQ(messages.size(), 1u);
  EXPECT_EQ(messages.front().contact_id, retained_contact);
  EXPECT_EQ(messages.front().content, "retained message");

  struct receipt_record
  {
    crypto::hash contact_id{};
  };
  std::vector<receipt_record> receipts{{removed_contact}, {retained_contact}, {removed_contact}};
  EXPECT_EQ(salchat::detail::erase_contact_records(receipts, removed_contact), 2u);
  ASSERT_EQ(receipts.size(), 1u);
  EXPECT_EQ(receipts.front().contact_id, retained_contact);
}
