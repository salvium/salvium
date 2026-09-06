#pragma once

#include <array>
#include <cstdint>
#include <string>

#include "crypto/crypto.h"
#include "cryptonote_config.h"
#include "cryptonote_protocol/salchat_protocol_defs.h"
#include "serialization/containers.h"
#include "serialization/crypto.h"
#include "serialization/serialization.h"
#include "serialization/string.h"

namespace salchat
{
  constexpr std::size_t MAX_TEXT_BYTES = 4 * 1024;
  constexpr std::size_t MAX_LABEL_BYTES = 64;
  constexpr std::size_t MAX_CONTACT_ADDRESS_BYTES = 256;
  constexpr std::size_t MAX_CONTACTS = 1024;
  constexpr std::size_t MAX_MESSAGES = 10000;

  enum class message_type : std::uint8_t
  {
    text = 1,
    delivery_receipt = 2,
    contact_request = 4,
    contact_accept = 5
  };

  struct contact
  {
    crypto::hash id{};
    std::string label;
    crypto::public_key spend_public_key{};
    crypto::public_key view_public_key{};
    crypto::public_key signing_public_key{};
    crypto::public_key encryption_public_key{};
    std::string salvium_address;
    bool blocked = false;
    std::uint64_t created_at = 0;
    BEGIN_SERIALIZE_OBJECT()
      VERSION_FIELD(3)
      FIELD(id) FIELD(label) FIELD(spend_public_key) FIELD(view_public_key)
      FIELD(signing_public_key) FIELD(encryption_public_key)
      FIELD(salvium_address) FIELD(blocked) VARINT_FIELD(created_at)
    END_SERIALIZE()
  };

  struct decrypted_payload
  {
    message_type type = message_type::text;
    crypto::public_key sender_spend_public_key{};
    crypto::public_key sender_view_public_key{};
    crypto::public_key sender_signing_public_key{};
    crypto::public_key sender_encryption_public_key{};
    crypto::hash recipient_contact_id{};
    crypto::hash ack_token{};
    std::uint64_t created_at = 0;
    std::string content;
  };

  crypto::hash make_contact_id(const crypto::public_key& spend, const crypto::public_key& view,
    const crypto::public_key& encryption);
  crypto::hash make_recipient_tag(const crypto::public_key& encryption, std::uint64_t epoch,
    cryptonote::network_type nettype);
  bool valid_encryption_public_key(const crypto::public_key& key);
  bool message_public_key(const crypto::secret_key& message_secret_key,
    crypto::public_key& encryption_public_key);
  bool generate_message_keys(crypto::secret_key& message_secret_key,
    crypto::public_key& encryption_public_key);
  bool derive_message_keys(const crypto::secret_key& wallet_seed,
    crypto::secret_key& message_secret_key, crypto::public_key& encryption_public_key);
  bool valid_contact(const contact& value);
  bool valid_text(const std::string& value, bool allow_whitespace_controls = true);
  bool encrypt_payload(const crypto::secret_key& sender_k_generate_image,
    const crypto::secret_key& sender_k_prove_spend,
    const crypto::secret_key& sender_message_secret_key,
    const crypto::public_key& sender_spend_public_key, const crypto::public_key& sender_view_public_key,
    const contact& recipient, cryptonote::network_type nettype, message_type type,
    const std::string& content, std::uint64_t ttl_seconds, std::uint64_t now,
    std::uint64_t current_height,
    cryptonote::salchat_p2p_envelope& envelope, std::string& error);
  bool decrypt_payload(const crypto::secret_key& recipient_message_secret_key,
    const crypto::public_key& recipient_spend_public_key, const crypto::public_key& recipient_view_public_key,
    cryptonote::network_type nettype, const cryptonote::salchat_p2p_envelope& envelope, decrypted_payload& out,
    std::uint64_t now, std::uint64_t current_height, std::string& error);

  inline bool encrypt_payload(const crypto::secret_key& sender_k_generate_image,
    const crypto::secret_key& sender_k_prove_spend,
    const crypto::secret_key& sender_message_secret_key,
    const crypto::public_key& sender_spend_public_key,
    const crypto::public_key& sender_view_public_key, const contact& recipient,
    cryptonote::network_type nettype, message_type type, const std::string& content,
    std::uint64_t ttl_seconds, std::uint64_t now,
    cryptonote::salchat_p2p_envelope& envelope, std::string& error)
  {
    return encrypt_payload(sender_k_generate_image, sender_k_prove_spend,
      sender_message_secret_key, sender_spend_public_key, sender_view_public_key,
      recipient, nettype, type, content, ttl_seconds, now, 0, envelope, error);
  }

  inline bool decrypt_payload(const crypto::secret_key& recipient_message_secret_key,
    const crypto::public_key& recipient_spend_public_key,
    const crypto::public_key& recipient_view_public_key, cryptonote::network_type nettype,
    const cryptonote::salchat_p2p_envelope& envelope, decrypted_payload& out,
    std::uint64_t now, std::string& error)
  {
    return decrypt_payload(recipient_message_secret_key, recipient_spend_public_key,
      recipient_view_public_key, nettype, envelope, out, now, envelope.created_height, error);
  }
}
