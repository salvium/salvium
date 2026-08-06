#pragma once

#include <deque>
#include <chrono>
#include <mutex>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

#include "common/command_line.h"
#include "salchat_protocol_defs.h"

namespace cryptonote
{
  extern const command_line::arg_descriptor<bool> arg_salchat_enable;
  extern const command_line::arg_descriptor<std::size_t> arg_salchat_max_packet_bytes;
  extern const command_line::arg_descriptor<std::size_t> arg_salchat_max_cache_bytes;
  extern const command_line::arg_descriptor<std::size_t> arg_salchat_max_cache_messages;
  extern const command_line::arg_descriptor<std::uint64_t> arg_salchat_max_ttl;
  extern const command_line::arg_descriptor<std::size_t> arg_salchat_relay_fanout;
  extern const command_line::arg_descriptor<std::uint64_t> arg_salchat_max_peer_kbps;
  extern const command_line::arg_descriptor<std::uint64_t> arg_salchat_max_global_kbps;

  enum class salchat_result { accepted, duplicate, disabled, malformed, rate_limited };

  struct salchat_config
  {
    bool enabled = false;
    std::size_t max_packet_bytes = SALCHAT_MAX_PACKET_BYTES;
    std::size_t max_cache_bytes = 64 * 1024 * 1024;
    std::size_t max_cache_messages = 10000;
    std::size_t max_per_recipient = 64;
    std::size_t max_per_sender_recipient = 8;
    std::uint64_t max_ttl = SALCHAT_MAX_TTL_SECONDS;
    std::size_t relay_fanout = 3;
    std::uint64_t max_peer_kbps = 64;
    std::uint64_t max_global_kbps = 1024;
  };

  struct salchat_statistics
  {
    std::uint64_t accepted = 0, duplicates = 0, rejected = 0, evicted = 0;
    std::size_t cached_messages = 0, cached_bytes = 0;
  };

  class salchat_relay
  {
  public:
    explicit salchat_relay(salchat_config config = {});
    salchat_result insert(const salchat_p2p_envelope& envelope, std::uint64_t now,
      std::uint64_t current_height, std::string& error);
    salchat_result insert(const salchat_p2p_envelope& envelope, std::uint64_t now,
      std::string& error) { return insert(envelope, now, envelope.created_height, error); }
    std::vector<salchat_p2p_envelope> poll(const std::vector<crypto::hash>& tags,
      std::size_t limit, std::uint64_t now, std::uint64_t current_height);
    std::vector<salchat_p2p_envelope> poll(const std::vector<crypto::hash>& tags,
      std::size_t limit, std::uint64_t now) { return poll(tags, limit, now, 0); }
    bool ack(const crypto::hash& message_id, const crypto::hash& ack_token);
    bool allow_peer_packet(const std::string& peer, std::size_t bytes);
    bool allow_peer_bytes(const std::string& peer, std::size_t bytes);
    bool allow_global_bytes(std::size_t bytes);
    salchat_statistics statistics() const;
    const salchat_config& config() const noexcept { return m_config; }

  private:
    struct entry { salchat_p2p_envelope envelope; std::size_t bytes; };
    struct token_bucket
    {
      std::uint64_t tokens = 0;
      std::uint64_t last_milliseconds = 0;
    };
    struct peer_rate_state
    {
      token_bucket bytes;
      token_bucket packets;
      std::uint64_t last_milliseconds = 0;
    };
    void prune(std::uint64_t now, std::uint64_t current_height);
    void remember_seen(std::unordered_map<std::string, std::uint64_t>& seen,
                       std::deque<std::pair<std::string, std::uint64_t>>& order,
                       const std::string& value, std::uint64_t expires_at);
    static bool consume(token_bucket& bucket, std::uint64_t amount, std::uint64_t rate,
                        std::uint64_t burst, std::uint64_t now_milliseconds);
    bool allow_peer_transfer(const std::string& peer, std::size_t bytes, bool count_packet);
    static std::uint64_t monotonic_milliseconds();
    static std::string key(const crypto::hash& value);
    static std::string sender_recipient_key(const salchat_p2p_envelope& envelope);
    void remove_entry_accounting(const entry& value);

    salchat_config m_config;
    mutable std::mutex m_mutex;
    std::deque<entry> m_entries;
    std::unordered_map<std::string, std::uint64_t> m_seen_ids, m_seen_hashes;
    std::deque<std::pair<std::string, std::uint64_t>> m_seen_id_order, m_seen_hash_order;
    std::unordered_set<std::string> m_active_ids, m_active_hashes;
    std::unordered_map<std::string, std::size_t> m_recipient_counts;
    std::unordered_map<std::string, std::size_t> m_sender_recipient_counts;
    std::uint64_t m_last_prune = 0;
    salchat_statistics m_stats;
    mutable std::mutex m_rate_mutex;
    std::unordered_map<std::string, peer_rate_state> m_peer_rates;
    token_bucket m_global_bytes;
    token_bucket m_global_packets;
  };

  bool validate_salchat_envelope(const salchat_p2p_envelope&, const salchat_config&,
    std::uint64_t now, std::uint64_t current_height, std::string& error);
  inline bool validate_salchat_envelope(const salchat_p2p_envelope& envelope,
    const salchat_config& config, std::uint64_t now, std::string& error)
  { return validate_salchat_envelope(envelope, config, now, envelope.created_height, error); }
  bool valid_salchat_spend_public_key(const crypto::public_key& spend_public_key);
  crypto::hash get_salchat_signature_hash(const salchat_p2p_envelope&);
  bool generate_salchat_signature(const crypto::hash& message_hash,
    const crypto::public_key& spend_public_key,
    const crypto::secret_key& k_generate_image,
    const crypto::secret_key& k_prove_spend,
    std::array<std::uint8_t, SALCHAT_SIGNATURE_BYTES>& signature);
  bool check_salchat_signature(const crypto::hash& message_hash,
    const crypto::public_key& spend_public_key,
    const std::array<std::uint8_t, SALCHAT_SIGNATURE_BYTES>& signature);
  bool check_salchat_signature(const salchat_p2p_envelope&);
  crypto::hash make_salchat_message_id(const salchat_p2p_envelope& envelope);
  crypto::hash make_salchat_ack_token_hash(const crypto::hash& message_id, const crypto::hash& ack_token);
}
