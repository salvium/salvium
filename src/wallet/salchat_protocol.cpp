#include "salchat_protocol.h"

#include <array>
#include <cstring>
#include <limits>

#include <sodium.h>

#include "carrot_core/enote_utils.h"
#include "common/utf8.h"
#include "cryptonote_protocol/salchat_relay.h"
#include "misc_language.h"
#include "ringct/rctOps.h"
#include "serialization/binary_utils.h"

namespace salchat
{
  namespace
  {
    constexpr char PAYLOAD_DOMAIN[] = "SALCHAT_PAYLOAD_V4";
    constexpr char KDF_DOMAIN[] = "SALCHAT_XCHACHA_KEY_V4";
    constexpr char TAG_DOMAIN[] = "SALCHAT_RECIPIENT_TAG_V4";
    constexpr char MESSAGE_KEY_DOMAIN[] = "SalChat-msg-v4";

    struct wire_payload
    {
      std::uint8_t version = 4;
      message_type type = message_type::text;
      crypto::public_key sender_spend_public_key{};
      crypto::public_key sender_view_public_key{};
      crypto::public_key sender_signing_public_key{};
      crypto::public_key sender_encryption_public_key{};
      crypto::hash recipient_contact_id{};
      crypto::hash ack_token{};
      std::uint64_t created_at = 0;
      std::string content;
      BEGIN_SERIALIZE_OBJECT()
        VERSION_FIELD(3)
        FIELD(version) VARINT_FIELD(type) FIELD(sender_spend_public_key) FIELD(sender_view_public_key)
        FIELD(sender_signing_public_key)
        FIELD(sender_encryption_public_key) FIELD(recipient_contact_id)
        FIELD(ack_token) VARINT_FIELD(created_at) FIELD(content)
      END_SERIALIZE()
    };

    void append_u64(std::string& out, std::uint64_t value)
    {
      for (unsigned int shift = 0; shift < 64; shift += 8)
        out.push_back(static_cast<char>((value >> shift) & 0xff));
    }

    std::string associated_data(const cryptonote::salchat_p2p_envelope& envelope,
      const crypto::public_key& recipient_spend, const crypto::public_key& recipient_encryption)
    {
      std::string out(PAYLOAD_DOMAIN, sizeof(PAYLOAD_DOMAIN) - 1);
      out.push_back(static_cast<char>(envelope.protocol_version));
      out.append(reinterpret_cast<const char*>(&envelope.message_id), sizeof(envelope.message_id));
      out.append(reinterpret_cast<const char*>(&envelope.recipient_tag), sizeof(envelope.recipient_tag));
      out.append(reinterpret_cast<const char*>(&envelope.ack_token_hash), sizeof(envelope.ack_token_hash));
      append_u64(out, envelope.created_at);
      append_u64(out, envelope.expires_at);
      append_u64(out, envelope.created_height);
      append_u64(out, envelope.expires_height);
      out.push_back(static_cast<char>(envelope.hop_limit));
      out.append(reinterpret_cast<const char*>(&envelope.ephemeral_public_key), sizeof(envelope.ephemeral_public_key));
      out.append(reinterpret_cast<const char*>(&recipient_spend), sizeof(recipient_spend));
      out.append(reinterpret_cast<const char*>(&recipient_encryption), sizeof(recipient_encryption));
      out.append(reinterpret_cast<const char*>(envelope.sender_signing_public_key.data()),
        envelope.sender_signing_public_key.size());
      return out;
    }

    bool derive_key(unsigned char key[crypto_aead_xchacha20poly1305_ietf_KEYBYTES],
      const mx25519_pubkey& shared, const crypto::hash& message_id,
      const crypto::public_key& sender_signing, const crypto::public_key& recipient_spend,
      const crypto::public_key& recipient_encryption)
    {
      std::string context(KDF_DOMAIN, sizeof(KDF_DOMAIN) - 1);
      context.append(reinterpret_cast<const char*>(&message_id), sizeof(message_id));
      context.append(reinterpret_cast<const char*>(&sender_signing), sizeof(sender_signing));
      context.append(reinterpret_cast<const char*>(&recipient_spend), sizeof(recipient_spend));
      context.append(reinterpret_cast<const char*>(&recipient_encryption), sizeof(recipient_encryption));
      return crypto_generichash(key, crypto_aead_xchacha20poly1305_ietf_KEYBYTES,
        reinterpret_cast<const unsigned char*>(context.data()), context.size(), shared.data, sizeof(shared.data)) == 0;
    }

    bool valid_payload_parameters(message_type type, const std::string& content,
      std::uint64_t ttl_seconds, std::uint64_t now, std::string& error)
    {
      if (content.empty() || content.size() > MAX_TEXT_BYTES)
      { error = "invalid Salchat payload length"; return false; }
      if (!valid_text(content))
      { error = "Salchat text contains invalid UTF-8 or unsafe display controls"; return false; }
      if (ttl_seconds == 0 || ttl_seconds > cryptonote::SALCHAT_MAX_TTL_SECONDS ||
          now > std::numeric_limits<std::uint64_t>::max() - ttl_seconds)
      { error = "invalid Salchat TTL"; return false; }
      if (type != message_type::text && type != message_type::delivery_receipt)
      { error = "unsupported Salchat message type"; return false; }
      return true;
    }

  }

  crypto::hash make_contact_id(const crypto::public_key& spend, const crypto::public_key& view,
    const crypto::public_key& encryption)
  {
    std::string input("SALCHAT_CONTACT_ID_V4", 21);
    input.append(reinterpret_cast<const char*>(&spend), sizeof(spend));
    input.append(reinterpret_cast<const char*>(&view), sizeof(view));
    input.append(reinterpret_cast<const char*>(&encryption), sizeof(encryption));
    crypto::hash id{};
    crypto::cn_fast_hash(input.data(), input.size(), id);
    return id;
  }

  crypto::hash make_recipient_tag(const crypto::public_key& encryption, const std::uint64_t epoch,
    const cryptonote::network_type nettype)
  {
    std::string input(TAG_DOMAIN, sizeof(TAG_DOMAIN) - 1);
    input.push_back(static_cast<char>(nettype));
    input.append(reinterpret_cast<const char*>(&encryption), sizeof(encryption));
    append_u64(input, epoch);
    crypto::hash tag{};
    crypto::cn_fast_hash(input.data(), input.size(), tag);
    return tag;
  }

  bool valid_encryption_public_key(const crypto::public_key& public_key)
  {
    std::array<unsigned char, crypto_scalarmult_curve25519_SCALARBYTES> scalar{};
    std::array<unsigned char, crypto_scalarmult_curve25519_BYTES> shared{};
    scalar.fill(0xa5);
    const auto wipe = epee::misc_utils::create_scope_leave_handler([&]() {
      sodium_memzero(scalar.data(), scalar.size());
      sodium_memzero(shared.data(), shared.size());
    });
    return sodium_init() >= 0 && crypto_scalarmult_curve25519(shared.data(), scalar.data(),
      reinterpret_cast<const unsigned char*>(&public_key)) == 0;
  }

  bool message_public_key(const crypto::secret_key& message_secret_key,
    crypto::public_key& encryption_public_key)
  {
    sodium_memzero(&encryption_public_key, sizeof(encryption_public_key));
    if (message_secret_key == crypto::null_skey || sodium_init() < 0 ||
        crypto_scalarmult_curve25519_base(
          reinterpret_cast<unsigned char*>(&encryption_public_key),
          reinterpret_cast<const unsigned char*>(message_secret_key.data)) != 0 ||
        !valid_encryption_public_key(encryption_public_key))
    {
      sodium_memzero(&encryption_public_key, sizeof(encryption_public_key));
      return false;
    }
    return true;
  }

  bool generate_message_keys(crypto::secret_key& message_secret_key,
    crypto::public_key& encryption_public_key)
  {
    sodium_memzero(&message_secret_key, sizeof(message_secret_key));
    sodium_memzero(&encryption_public_key, sizeof(encryption_public_key));
    if (sodium_init() < 0)
      return false;
    randombytes_buf(message_secret_key.data, sizeof(message_secret_key.data));
    if (!message_public_key(message_secret_key, encryption_public_key))
    {
      sodium_memzero(&message_secret_key, sizeof(message_secret_key));
      return false;
    }
    return true;
  }

  bool derive_message_keys(const crypto::secret_key& wallet_seed,
    crypto::secret_key& message_secret_key, crypto::public_key& encryption_public_key)
  {
    sodium_memzero(&message_secret_key, sizeof(message_secret_key));
    sodium_memzero(&encryption_public_key, sizeof(encryption_public_key));
    if (wallet_seed == crypto::null_skey || sodium_init() < 0)
      return false;
    std::string input(MESSAGE_KEY_DOMAIN, sizeof(MESSAGE_KEY_DOMAIN) - 1);
    input.append(reinterpret_cast<const char*>(&wallet_seed), sizeof(wallet_seed));
    rct::key derived{};
    const auto wipe = epee::misc_utils::create_scope_leave_handler([&]() {
      if (!input.empty()) sodium_memzero(&input[0], input.size());
      sodium_memzero(&derived, sizeof(derived));
    });
    rct::hash_to_scalar(derived, input.data(), input.size());
    message_secret_key = rct::rct2sk(derived);
    if (!message_public_key(message_secret_key, encryption_public_key))
    {
      sodium_memzero(&message_secret_key, sizeof(message_secret_key));
      sodium_memzero(&encryption_public_key, sizeof(encryption_public_key));
      return false;
    }
    return true;
  }

  bool valid_contact(const contact& value)
  {
    return cryptonote::valid_salchat_spend_public_key(value.spend_public_key) &&
      value.signing_public_key == value.spend_public_key &&
      crypto::check_key(value.view_public_key) && valid_encryption_public_key(value.encryption_public_key) &&
      value.id == make_contact_id(value.spend_public_key, value.view_public_key, value.encryption_public_key);
  }

  bool valid_text(const std::string& value, const bool allow_whitespace_controls)
  {
    bool safe = true;
    try
    {
      const std::string canonical = tools::utf8canonical(value, [&](wint_t c) {
        const bool permitted_whitespace = allow_whitespace_controls && (c == '\t' || c == '\n');
        if ((!permitted_whitespace && c < 0x20) || c == 0x7f || (c >= 0x80 && c <= 0x9f) ||
            c == 0x00ad || c == 0x034f || c == 0x061c || c == 0x180e ||
            (c >= 0x200b && c <= 0x200f) || (c >= 0x202a && c <= 0x202e) ||
            (c >= 0x2060 && c <= 0x206f) || c == 0xfeff ||
            (c >= 0x1bca0 && c <= 0x1bca3) || (c >= 0x1d173 && c <= 0x1d17a) ||
            (c >= 0xe0000 && c <= 0xe007f))
          safe = false;
        return c;
      });
      return safe && canonical == value;
    }
    catch (...)
    {
      return false;
    }
  }

  bool encrypt_payload(const crypto::secret_key& sender_k_generate_image,
    const crypto::secret_key& sender_k_prove_spend,
    const crypto::secret_key& sender_message_secret_key,
    const crypto::public_key& sender_spend_public_key, const crypto::public_key& sender_view_public_key,
    const contact& recipient, const cryptonote::network_type nettype, message_type type,
    const std::string& content, std::uint64_t ttl_seconds, std::uint64_t now,
    const std::uint64_t current_height,
    cryptonote::salchat_p2p_envelope& envelope, std::string& error)
  {
    crypto::public_key sender_encryption_public_key{};
    if (crypto_scalarmult_curve25519_base(reinterpret_cast<unsigned char*>(&sender_encryption_public_key),
          reinterpret_cast<const unsigned char*>(sender_message_secret_key.data)) != 0 ||
        !valid_encryption_public_key(sender_encryption_public_key))
    { error = "Salchat message key is unavailable or inconsistent"; return false; }
    if (!valid_contact(recipient))
    { error = "invalid Salchat contact"; return false; }
    if (!valid_payload_parameters(type, content, ttl_seconds, now, error)) return false;

    cryptonote::salchat_p2p_envelope built;
    built.protocol_version = cryptonote::SALCHAT_PROTOCOL_VERSION;
    built.created_at = now;
    built.expires_at = now + ttl_seconds;
    built.created_height = current_height;
    if (current_height > std::numeric_limits<std::uint64_t>::max() -
        cryptonote::SALCHAT_MESSAGE_LIFETIME_BLOCKS)
    { error = "Salchat chain height overflow"; return false; }
    built.expires_height = current_height + cryptonote::SALCHAT_MESSAGE_LIFETIME_BLOCKS;
    built.recipient_tag = make_recipient_tag(recipient.encryption_public_key, now / 3600, nettype);
    crypto::secret_key ephemeral_secret = rct::rct2sk(rct::skGen());
    mx25519_pubkey ephemeral_public{};
    mx25519_pubkey shared{};
    std::array<unsigned char, crypto_aead_xchacha20poly1305_ietf_KEYBYTES> key{};
    std::string plaintext;
    wire_payload plain;
    const auto wipe = epee::misc_utils::create_scope_leave_handler([&]() {
      sodium_memzero(&ephemeral_secret, sizeof(ephemeral_secret));
      sodium_memzero(&shared, sizeof(shared));
      sodium_memzero(key.data(), key.size());
      if (!plaintext.empty()) sodium_memzero(&plaintext[0], plaintext.size());
      sodium_memzero(&plain.ack_token, sizeof(plain.ack_token));
      if (!plain.content.empty()) sodium_memzero(&plain.content[0], plain.content.size());
    });
    if (crypto_scalarmult_curve25519_base(ephemeral_public.data,
          reinterpret_cast<const unsigned char*>(ephemeral_secret.data)) != 0)
    { error = "failed to generate ephemeral Salchat key"; return false; }
    static_assert(sizeof(ephemeral_public) == sizeof(built.ephemeral_public_key), "Unexpected Carrot ephemeral-key size");
    std::memcpy(&built.ephemeral_public_key, &ephemeral_public, sizeof(built.ephemeral_public_key));
    if (!valid_encryption_public_key(built.ephemeral_public_key))
    { error = "failed to generate ephemeral Salchat key"; return false; }
    built.nonce = crypto::rand<decltype(built.nonce)>();
    std::memcpy(built.sender_signing_public_key.data(), &sender_spend_public_key, sizeof(sender_spend_public_key));
    built.message_id = cryptonote::make_salchat_message_id(built);

    plain.type = type;
    plain.sender_spend_public_key = sender_spend_public_key;
    plain.sender_view_public_key = sender_view_public_key;
    plain.sender_signing_public_key = sender_spend_public_key;
    plain.sender_encryption_public_key = sender_encryption_public_key;
    plain.recipient_contact_id = recipient.id;
    do
    {
      plain.ack_token = crypto::rand<crypto::hash>();
      built.ack_token_hash = cryptonote::make_salchat_ack_token_hash(built.message_id, plain.ack_token);
    }
    while (plain.ack_token == crypto::null_hash || built.ack_token_hash == crypto::null_hash);
    plain.created_at = now;
    plain.content = content;
    if (!serialization::dump_binary(plain, plaintext))
    { error = "failed to encode Salchat payload"; return false; }
    if (crypto_scalarmult_curve25519(shared.data,
          reinterpret_cast<const unsigned char*>(ephemeral_secret.data),
          reinterpret_cast<const unsigned char*>(&recipient.encryption_public_key)) != 0 ||
        !derive_key(key.data(), shared, built.message_id,
          sender_spend_public_key, recipient.spend_public_key, recipient.encryption_public_key))
    { error = "invalid recipient Salchat encryption key"; return false; }
    const std::string ad = associated_data(built, recipient.spend_public_key, recipient.encryption_public_key);
    built.ciphertext.resize(plaintext.size() + crypto_aead_xchacha20poly1305_ietf_ABYTES);
    unsigned long long ciphertext_bytes = 0;
    if (crypto_aead_xchacha20poly1305_ietf_encrypt(
        reinterpret_cast<unsigned char*>(&built.ciphertext[0]), &ciphertext_bytes,
        reinterpret_cast<const unsigned char*>(plaintext.data()), plaintext.size(),
        reinterpret_cast<const unsigned char*>(ad.data()), ad.size(), nullptr,
        built.nonce.data(), key.data()) != 0)
    { error = "Salchat encryption failed"; return false; }
    built.ciphertext.resize(ciphertext_bytes);
    if (built.ciphertext.size() > cryptonote::SALCHAT_MAX_CIPHERTEXT_BYTES)
    { error = "Salchat encrypted payload exceeds protocol limit"; return false; }
    crypto::cn_fast_hash(built.ciphertext.data(), built.ciphertext.size(), built.ciphertext_hash);
    if (!cryptonote::generate_salchat_signature(cryptonote::get_salchat_signature_hash(built),
        sender_spend_public_key, sender_k_generate_image, sender_k_prove_spend,
        built.sender_signature))
    { error = "Salchat Carrot spend authority is unavailable or inconsistent"; return false; }
    envelope = std::move(built);
    error.clear();
    return true;
  }

  bool decrypt_payload(const crypto::secret_key& recipient_message_secret_key,
    const crypto::public_key& recipient_spend_public_key, const crypto::public_key& recipient_view_public_key,
    const cryptonote::network_type nettype, const cryptonote::salchat_p2p_envelope& envelope, decrypted_payload& out,
    const std::uint64_t now, const std::uint64_t current_height, std::string& error)
  {
    if (envelope.protocol_version != cryptonote::SALCHAT_PROTOCOL_VERSION)
    { error = "unsupported Salchat protocol version"; return false; }
    crypto::public_key recipient_encryption_public_key{};
    if (!cryptonote::valid_salchat_spend_public_key(recipient_spend_public_key) ||
        !crypto::check_key(recipient_view_public_key) ||
        crypto_scalarmult_curve25519_base(reinterpret_cast<unsigned char*>(&recipient_encryption_public_key),
          reinterpret_cast<const unsigned char*>(recipient_message_secret_key.data)) != 0 ||
        !valid_encryption_public_key(recipient_encryption_public_key))
    { error = "Salchat message key is unavailable or inconsistent"; return false; }
    cryptonote::salchat_config validation_config;
    validation_config.enabled = true;
    if (envelope.ciphertext.size() < crypto_aead_xchacha20poly1305_ietf_ABYTES)
    { error = "Salchat ciphertext is too short"; return false; }
    if (envelope.recipient_tag != make_recipient_tag(
          recipient_encryption_public_key, envelope.created_at / 3600, nettype))
    { error = "Salchat envelope belongs to another recipient or network"; return false; }
    if (!valid_encryption_public_key(envelope.ephemeral_public_key))
    { error = "invalid ephemeral Salchat key"; return false; }
    if (!cryptonote::validate_salchat_envelope(envelope, validation_config, now, current_height, error))
      return false;
    crypto::public_key sender_signing{};
    std::memcpy(&sender_signing, envelope.sender_signing_public_key.data(), sizeof(sender_signing));
    mx25519_pubkey ephemeral_public{};
    mx25519_pubkey shared{};
    std::memcpy(&ephemeral_public, &envelope.ephemeral_public_key, sizeof(ephemeral_public));
    std::array<unsigned char, crypto_aead_xchacha20poly1305_ietf_KEYBYTES> key{};
    std::string plaintext(envelope.ciphertext.size(), '\0');
    const auto wipe = epee::misc_utils::create_scope_leave_handler([&]() {
      sodium_memzero(&shared, sizeof(shared));
      sodium_memzero(key.data(), key.size());
      if (!plaintext.empty()) sodium_memzero(&plaintext[0], plaintext.size());
    });
    if (crypto_scalarmult_curve25519(shared.data,
          reinterpret_cast<const unsigned char*>(recipient_message_secret_key.data),
          ephemeral_public.data) != 0 ||
        !derive_key(key.data(), shared, envelope.message_id,
          sender_signing, recipient_spend_public_key, recipient_encryption_public_key))
    { error = "invalid ephemeral Salchat key"; return false; }
    const std::string ad = associated_data(envelope, recipient_spend_public_key, recipient_encryption_public_key);
    unsigned long long plaintext_bytes = 0;
    if (crypto_aead_xchacha20poly1305_ietf_decrypt(
        reinterpret_cast<unsigned char*>(&plaintext[0]), &plaintext_bytes, nullptr,
        reinterpret_cast<const unsigned char*>(envelope.ciphertext.data()), envelope.ciphertext.size(),
        reinterpret_cast<const unsigned char*>(ad.data()), ad.size(), envelope.nonce.data(), key.data()) != 0)
    { error = "Salchat authentication failed"; return false; }
    plaintext.resize(plaintext_bytes);
    wire_payload plain;
    const auto wipe_plain = epee::misc_utils::create_scope_leave_handler([&]() {
      sodium_memzero(&plain.ack_token, sizeof(plain.ack_token));
      if (!plain.content.empty()) sodium_memzero(&plain.content[0], plain.content.size());
    });
    if (!serialization::parse_binary(plaintext, plain) || plain.version != 4 ||
        (plain.type != message_type::text && plain.type != message_type::delivery_receipt) ||
        plain.content.empty() || plain.content.size() > MAX_TEXT_BYTES || !valid_text(plain.content) ||
        !crypto::check_key(plain.sender_spend_public_key) ||
        plain.created_at != envelope.created_at || plain.sender_signing_public_key != sender_signing ||
        plain.sender_signing_public_key != plain.sender_spend_public_key ||
        !valid_encryption_public_key(plain.sender_encryption_public_key) ||
        cryptonote::make_salchat_ack_token_hash(envelope.message_id, plain.ack_token) != envelope.ack_token_hash ||
        plain.recipient_contact_id != make_contact_id(
          recipient_spend_public_key, recipient_view_public_key, recipient_encryption_public_key))
    { error = "invalid Salchat plaintext payload"; return false; }
    out.type = plain.type;
    out.sender_spend_public_key = plain.sender_spend_public_key;
    out.sender_view_public_key = plain.sender_view_public_key;
    out.sender_signing_public_key = plain.sender_signing_public_key;
    out.sender_encryption_public_key = plain.sender_encryption_public_key;
    out.recipient_contact_id = plain.recipient_contact_id;
    out.ack_token = plain.ack_token;
    out.created_at = plain.created_at;
    out.content = std::move(plain.content);
    error.clear();
    return true;
  }
}
