#pragma once

#include <array>
#include <cstdint>
#include <string>
#include <type_traits>

#include "crypto/crypto.h"
#include "cryptonote_config.h"
#include "serialization/keyvalue_serialization.h"

namespace cryptonote
{
  constexpr std::uint8_t SALCHAT_PROTOCOL_VERSION = 4;
  constexpr std::size_t SALCHAT_MAX_PACKET_BYTES = 16 * 1024;
  constexpr std::size_t SALCHAT_MAX_CIPHERTEXT_BYTES = 12 * 1024;
  // A wallet polls the complete one-week delivery window in one request.
  constexpr std::size_t SALCHAT_MAX_POLL_TAGS = 192;
  constexpr std::uint64_t SALCHAT_MAX_TTL_SECONDS = 7 * 24 * 60 * 60;
  constexpr std::uint64_t SALCHAT_MESSAGE_LIFETIME_BLOCKS =
    SALCHAT_MAX_TTL_SECONDS / DIFFICULTY_TARGET_V2;
  constexpr std::uint64_t SALCHAT_MAX_FUTURE_SECONDS = 5 * 60;
  constexpr std::uint8_t SALCHAT_MAX_HOPS = 8;
  constexpr std::size_t SALCHAT_HASH_BYTES = 32;
  constexpr std::size_t SALCHAT_ACK_TOKEN_BYTES = 32;
  constexpr std::size_t SALCHAT_PUBLIC_KEY_BYTES = 32;
  constexpr std::size_t SALCHAT_NONCE_BYTES = 24;
  constexpr std::size_t SALCHAT_SIGNATURE_BYTES = 96;

  static_assert(sizeof(crypto::hash) == SALCHAT_HASH_BYTES, "Unexpected SALCHAT hash size");
  static_assert(sizeof(crypto::public_key) == SALCHAT_PUBLIC_KEY_BYTES, "Unexpected SALCHAT public-key size");
  static_assert(SALCHAT_SIGNATURE_BYTES == 96,
    "Salchat v4 requires a 32-byte commitment and two 32-byte responses");
  static_assert(std::is_trivially_copyable<crypto::hash>::value, "SALCHAT hashes must serialize as fixed POD blobs");
  static_assert(std::is_trivially_copyable<crypto::public_key>::value, "SALCHAT public keys must serialize as fixed POD blobs");

  struct salchat_p2p_envelope
  {
    std::uint8_t protocol_version = SALCHAT_PROTOCOL_VERSION;
    crypto::hash message_id{};
    crypto::hash recipient_tag{};
    crypto::hash ciphertext_hash{};
    crypto::hash ack_token_hash{};
    std::uint64_t created_at = 0;
    std::uint64_t expires_at = 0;
    std::uint64_t created_height = 0;
    std::uint64_t expires_height = 0;
    std::uint8_t hop_count = 0;
    std::uint8_t hop_limit = SALCHAT_MAX_HOPS;
    crypto::public_key ephemeral_public_key{};
    std::array<std::uint8_t, SALCHAT_NONCE_BYTES> nonce{};
    std::string ciphertext;
    std::array<std::uint8_t, SALCHAT_PUBLIC_KEY_BYTES> sender_signing_public_key{};
    std::array<std::uint8_t, SALCHAT_SIGNATURE_BYTES> sender_signature{};

    BEGIN_KV_SERIALIZE_MAP()
      KV_SERIALIZE(protocol_version)
      KV_SERIALIZE_VAL_POD_AS_BLOB(message_id)
      KV_SERIALIZE_VAL_POD_AS_BLOB(recipient_tag)
      KV_SERIALIZE_VAL_POD_AS_BLOB(ciphertext_hash)
      KV_SERIALIZE_VAL_POD_AS_BLOB(ack_token_hash)
      KV_SERIALIZE(created_at)
      KV_SERIALIZE(expires_at)
      KV_SERIALIZE(created_height)
      KV_SERIALIZE(expires_height)
      KV_SERIALIZE(hop_count)
      KV_SERIALIZE(hop_limit)
      KV_SERIALIZE_VAL_POD_AS_BLOB(ephemeral_public_key)
      KV_SERIALIZE_VAL_POD_AS_BLOB(nonce)
      KV_SERIALIZE(ciphertext)
      KV_SERIALIZE_VAL_POD_AS_BLOB(sender_signing_public_key)
      KV_SERIALIZE_VAL_POD_AS_BLOB(sender_signature)
    END_KV_SERIALIZE_MAP()
  };

}
