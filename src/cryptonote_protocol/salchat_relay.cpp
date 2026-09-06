#include "salchat_relay.h"

#include <algorithm>
#include <cstring>
#include <limits>
#include <unordered_set>

extern "C"
{
#include "crypto/crypto-ops.h"
}
#include "crypto/generators.h"
#include "crypto/hash.h"
#include "misc_language.h"
#include "ringct/rctOps.h"
#include "storages/portable_storage_template_helper.h"

namespace cryptonote
{
  const command_line::arg_descriptor<unsigned int> arg_salchat_enabled{"salchat-enabled", "Enable Salchat opaque message relay (0 or 1)", 1};
  const command_line::arg_descriptor<std::size_t> arg_salchat_max_packet_bytes{"salchat-max-packet-bytes", "Maximum Salchat wire payload bytes", SALCHAT_MAX_PACKET_BYTES};
  const command_line::arg_descriptor<std::size_t> arg_salchat_max_cache_bytes{"salchat-max-cache-bytes", "Maximum in-memory Salchat cache bytes", 64 * 1024 * 1024};
  const command_line::arg_descriptor<std::size_t> arg_salchat_max_cache_messages{"salchat-max-cache-messages", "Maximum in-memory Salchat envelope count", 10000};
  const command_line::arg_descriptor<std::uint64_t> arg_salchat_max_ttl{"salchat-max-ttl", "Maximum Salchat envelope TTL in seconds", SALCHAT_MAX_TTL_SECONDS};
  const command_line::arg_descriptor<std::size_t> arg_salchat_relay_fanout{"salchat-relay-fanout", "Maximum compatible peers per Salchat relay", 3};
  const command_line::arg_descriptor<std::uint64_t> arg_salchat_max_peer_kbps{"salchat-max-peer-kbps", "Maximum inbound Salchat KiB/s per peer", 64};
  const command_line::arg_descriptor<std::uint64_t> arg_salchat_max_global_kbps{"salchat-max-global-kbps", "Maximum aggregate Salchat KiB/s", 1024};

  namespace
  {
    constexpr char salchat_signature_domain[] = "SALCHAT_ENVELOPE_V4";
    constexpr char salchat_spend_signature_domain[] = "SALCHAT_CARROT_SPEND_SIGNATURE_V4";
    constexpr char salchat_message_id_domain[] = "SALCHAT_MESSAGE_ID_V4";
    constexpr char salchat_ack_domain[] = "SALCHAT_ACK_TOKEN_V4";

    template<typename T> bool all_zero(const T& value)
    {
      const auto* p = reinterpret_cast<const unsigned char*>(&value);
      return std::all_of(p, p + sizeof(value), [](unsigned char c){ return c == 0; });
    }

    bool equal_hashes(const crypto::hash& left, const crypto::hash& right)
    {
      static_assert(sizeof(left) == 32, "Salchat hashes must be 32 bytes");
      return crypto_verify_32(reinterpret_cast<const unsigned char*>(&left),
        reinterpret_cast<const unsigned char*>(&right)) == 0;
    }

    template<typename T>
    void append_pod(std::string& out, const T& value)
    {
      out.append(reinterpret_cast<const char*>(&value), sizeof(value));
    }

    void append_u64_le(std::string& out, std::uint64_t value)
    {
      for (unsigned int shift = 0; shift < 64; shift += 8)
        out.push_back(static_cast<char>((value >> shift) & 0xff));
    }

    void append_u32_le(std::string& out, std::uint32_t value)
    {
      for (unsigned int shift = 0; shift < 32; shift += 8)
        out.push_back(static_cast<char>((value >> shift) & 0xff));
    }

    rct::key salchat_spend_signature_challenge(const crypto::hash& message_hash,
      const crypto::public_key& spend_public_key, const rct::key& commitment)
    {
      std::string transcript(salchat_spend_signature_domain,
        sizeof(salchat_spend_signature_domain) - 1);
      append_pod(transcript, message_hash);
      append_pod(transcript, spend_public_key);
      append_pod(transcript, commitment);
      rct::key challenge{};
      rct::hash_to_scalar(challenge, transcript.data(), transcript.size());
      return challenge;
    }

    std::string ciphertext_replay_key(const salchat_p2p_envelope& envelope)
    {
      std::string out(reinterpret_cast<const char*>(envelope.sender_signing_public_key.data()),
        envelope.sender_signing_public_key.size());
      append_pod(out, envelope.ciphertext_hash);
      return out;
    }

  }

  bool valid_salchat_spend_public_key(const crypto::public_key& spend_public_key)
  {
    const rct::key point = rct::pk2rct(spend_public_key);
    return crypto::check_key(spend_public_key) &&
      !rct::equalKeys(point, rct::identity()) && rct::isInMainSubgroup(point);
  }

  crypto::hash get_salchat_signature_hash(const salchat_p2p_envelope& e)
  {
    // hop_count is deliberately excluded: each relay increments it. All other
    // routing, lifetime, key, and ciphertext fields are authenticated.
    std::string transcript;
    transcript.reserve(sizeof(salchat_signature_domain) - 1 + 1 + 4 * sizeof(crypto::hash) +
      4 * sizeof(std::uint64_t) + 1 + sizeof(crypto::public_key) + e.nonce.size() +
      sizeof(std::uint32_t) + e.ciphertext.size() + e.sender_signing_public_key.size());
    transcript.append(salchat_signature_domain, sizeof(salchat_signature_domain) - 1);
    transcript.push_back(static_cast<char>(e.protocol_version));
    append_pod(transcript, e.message_id);
    append_pod(transcript, e.recipient_tag);
    append_pod(transcript, e.ciphertext_hash);
    append_pod(transcript, e.ack_token_hash);
    append_u64_le(transcript, e.created_at);
    append_u64_le(transcript, e.expires_at);
    append_u64_le(transcript, e.created_height);
    append_u64_le(transcript, e.expires_height);
    transcript.push_back(static_cast<char>(e.hop_limit));
    append_pod(transcript, e.ephemeral_public_key);
    transcript.append(reinterpret_cast<const char*>(e.nonce.data()), e.nonce.size());
    append_u32_le(transcript, static_cast<std::uint32_t>(e.ciphertext.size()));
    transcript.append(e.ciphertext);
    transcript.append(reinterpret_cast<const char*>(e.sender_signing_public_key.data()),
      e.sender_signing_public_key.size());

    crypto::hash hash{};
    crypto::cn_fast_hash(transcript.data(), transcript.size(), hash);
    return hash;
  }

  crypto::hash make_salchat_message_id(const salchat_p2p_envelope& e)
  {
    // The ID is sender-bound so one authenticated sender cannot copy another
    // sender's public ID and poison global relay/wallet replay caches.
    std::string transcript(salchat_message_id_domain, sizeof(salchat_message_id_domain) - 1);
    transcript.append(reinterpret_cast<const char*>(e.sender_signing_public_key.data()),
      e.sender_signing_public_key.size());
    append_pod(transcript, e.recipient_tag);
    append_pod(transcript, e.ephemeral_public_key);
    transcript.append(reinterpret_cast<const char*>(e.nonce.data()), e.nonce.size());
    append_u64_le(transcript, e.created_at);
    append_u64_le(transcript, e.expires_at);
    append_u64_le(transcript, e.created_height);
    append_u64_le(transcript, e.expires_height);
    crypto::hash id{};
    crypto::cn_fast_hash(transcript.data(), transcript.size(), id);
    return id;
  }

  crypto::hash make_salchat_ack_token_hash(const crypto::hash& message_id, const crypto::hash& ack_token)
  {
    std::string transcript(salchat_ack_domain, sizeof(salchat_ack_domain) - 1);
    const auto wipe = epee::misc_utils::create_scope_leave_handler([&]() {
      if (!transcript.empty()) memwipe(&transcript[0], transcript.size());
    });
    append_pod(transcript, message_id);
    append_pod(transcript, ack_token);
    crypto::hash hash{};
    crypto::cn_fast_hash(transcript.data(), transcript.size(), hash);
    return hash;
  }

  bool generate_salchat_signature(const crypto::hash& message_hash,
    const crypto::public_key& spend_public_key,
    const crypto::secret_key& k_generate_image,
    const crypto::secret_key& k_prove_spend,
    std::array<std::uint8_t, SALCHAT_SIGNATURE_BYTES>& signature)
  {
    static_assert(sizeof(rct::zk_proof) == SALCHAT_SIGNATURE_BYTES,
      "Unexpected Carrot spend-authority proof size");
    signature.fill(0);
    rct::key x = rct::sk2rct(k_generate_image);
    rct::key y = rct::sk2rct(k_prove_spend);
    rct::key nonce_x{};
    rct::key nonce_y{};
    rct::key challenge{};
    rct::zk_proof proof{};
    const auto wipe = epee::misc_utils::create_scope_leave_handler([&]() {
      memwipe(&x, sizeof(x));
      memwipe(&y, sizeof(y));
      memwipe(&nonce_x, sizeof(nonce_x));
      memwipe(&nonce_y, sizeof(nonce_y));
      memwipe(&challenge, sizeof(challenge));
      memwipe(&proof.z1, sizeof(proof.z1));
      memwipe(&proof.z2, sizeof(proof.z2));
    });
    if (sc_check(x.bytes) != 0 || !sc_isnonzero(x.bytes) ||
        sc_check(y.bytes) != 0 || !sc_isnonzero(y.bytes))
      return false;
    try
    {
      const rct::key spend = rct::pk2rct(spend_public_key);
      if (!valid_salchat_spend_public_key(spend_public_key))
        return false;
      rct::key derived{};
      rct::addKeys2(derived, x, y, rct::pk2rct(crypto::get_T()));
      if (!rct::equalKeys(derived, spend))
        return false;

      nonce_x = rct::skGen();
      nonce_y = rct::skGen();
      rct::addKeys2(proof.R, nonce_x, nonce_y, rct::pk2rct(crypto::get_T()));
      challenge = salchat_spend_signature_challenge(message_hash, spend_public_key, proof.R);
      sc_muladd(proof.z1.bytes, challenge.bytes, x.bytes, nonce_x.bytes);
      sc_muladd(proof.z2.bytes, challenge.bytes, y.bytes, nonce_y.bytes);
      std::memcpy(signature.data(), &proof, sizeof(proof));
      return true;
    }
    catch (...)
    {
      signature.fill(0);
      return false;
    }
  }

  bool check_salchat_signature(const crypto::hash& message_hash,
    const crypto::public_key& spend_public_key,
    const std::array<std::uint8_t, SALCHAT_SIGNATURE_BYTES>& signature)
  {
    static_assert(sizeof(rct::zk_proof) == SALCHAT_SIGNATURE_BYTES,
      "Unexpected Carrot spend-authority proof size");
    rct::zk_proof proof{};
    std::memcpy(&proof, signature.data(), sizeof(proof));
    if (sc_check(proof.z1.bytes) != 0 || sc_check(proof.z2.bytes) != 0)
      return false;
    try
    {
      const rct::key spend = rct::pk2rct(spend_public_key);
      if (!valid_salchat_spend_public_key(spend_public_key) ||
          !valid_salchat_spend_public_key(rct::rct2pk(proof.R)))
        return false;
      const rct::key challenge =
        salchat_spend_signature_challenge(message_hash, spend_public_key, proof.R);
      rct::key expected{};
      rct::addKeys(expected, proof.R, rct::scalarmultKey(spend, challenge));
      rct::key actual{};
      rct::addKeys2(actual, proof.z1, proof.z2, rct::pk2rct(crypto::get_T()));
      return rct::equalKeys(actual, expected);
    }
    catch (...)
    {
      return false;
    }
  }

  bool check_salchat_signature(const salchat_p2p_envelope& e)
  {
    static_assert(sizeof(crypto::public_key) == SALCHAT_PUBLIC_KEY_BYTES,
      "Unexpected Carrot public-key size");
    crypto::public_key public_key{};
    std::memcpy(&public_key, e.sender_signing_public_key.data(), sizeof(public_key));
    return check_salchat_signature(get_salchat_signature_hash(e), public_key, e.sender_signature);
  }

  bool validate_salchat_envelope(const salchat_p2p_envelope& e, const salchat_config& c,
    std::uint64_t now, const std::uint64_t current_height, std::string& error)
  {
    error.clear();
    if (e.protocol_version != SALCHAT_PROTOCOL_VERSION) error = "unsupported protocol version";
    else if (all_zero(e.message_id)) error = "zero message id";
    else if (e.message_id != make_salchat_message_id(e)) error = "message id is not bound to sender and envelope";
    else if (all_zero(e.recipient_tag)) error = "zero recipient tag";
    else if (all_zero(e.ack_token_hash)) error = "zero acknowledgement token hash";
    else if (e.ciphertext.empty() || e.ciphertext.size() > SALCHAT_MAX_CIPHERTEXT_BYTES) error = "invalid ciphertext size";
    else if (e.expires_at <= e.created_at) error = "expiration must follow creation";
    else if (e.expires_at - e.created_at > c.max_ttl) error = "TTL exceeds limit";
    else if (e.created_height > std::numeric_limits<std::uint64_t>::max() - SALCHAT_MESSAGE_LIFETIME_BLOCKS ||
        e.expires_height != e.created_height + SALCHAT_MESSAGE_LIFETIME_BLOCKS)
      error = "invalid block-height lifetime";
    else if (e.created_height > current_height && e.created_height - current_height > 10)
      error = "creation height is too far in future";
    else if (e.expires_height <= current_height) error = "envelope expired at block height";
    else if (e.expires_at <= now) error = "envelope expired at requested time";
    else if (e.created_at > now && e.created_at - now > SALCHAT_MAX_FUTURE_SECONDS) error = "creation time is too far in future";
    else if (!e.hop_limit || e.hop_limit > SALCHAT_MAX_HOPS || e.hop_count > e.hop_limit) error = "invalid hop limit";
    else if (all_zero(e.ephemeral_public_key) || all_zero(e.nonce) || all_zero(e.sender_signing_public_key) || all_zero(e.sender_signature)) error = "malformed cryptographic field";
    else
    {
      crypto::hash actual{};
      crypto::cn_fast_hash(e.ciphertext.data(), e.ciphertext.size(), actual);
      if (actual != e.ciphertext_hash) error = "ciphertext hash mismatch";
      else if (!check_salchat_signature(e)) error = "invalid sender signature";
    }
    return error.empty();
  }

  salchat_relay::salchat_relay(salchat_config config): m_config(std::move(config)) {}
  std::string salchat_relay::key(const crypto::hash& v) { return std::string(reinterpret_cast<const char*>(&v), sizeof(v)); }

  std::string salchat_relay::sender_recipient_key(const salchat_p2p_envelope& e)
  {
    std::string value(reinterpret_cast<const char*>(e.sender_signing_public_key.data()),
      e.sender_signing_public_key.size());
    value.append(reinterpret_cast<const char*>(&e.recipient_tag), sizeof(e.recipient_tag));
    return value;
  }

  void salchat_relay::remove_entry_accounting(const entry& value)
  {
    m_stats.cached_bytes -= value.bytes;
    m_active_ids.erase(key(value.envelope.message_id));
    m_active_hashes.erase(ciphertext_replay_key(value.envelope));
    const auto decrement = [](auto& counts, const std::string& item) {
      const auto found = counts.find(item);
      if (found != counts.end() && --found->second == 0)
        counts.erase(found);
    };
    decrement(m_recipient_counts, key(value.envelope.recipient_tag));
    decrement(m_sender_recipient_counts, sender_recipient_key(value.envelope));
  }

  std::uint64_t salchat_relay::monotonic_milliseconds()
  {
    return std::chrono::duration_cast<std::chrono::milliseconds>(
      std::chrono::steady_clock::now().time_since_epoch()).count();
  }

  bool salchat_relay::consume(token_bucket& bucket, const std::uint64_t amount,
                            const std::uint64_t rate, const std::uint64_t burst,
                            const std::uint64_t now)
  {
    if (rate == 0 || burst == 0 || amount > burst)
      return false;
    if (bucket.last_milliseconds == 0)
    {
      bucket.tokens = burst;
      bucket.last_milliseconds = now;
    }
    else if (now > bucket.last_milliseconds)
    {
      const std::uint64_t elapsed = now - bucket.last_milliseconds;
      const std::uint64_t room = burst - std::min(bucket.tokens, burst);
      const std::uint64_t refill = elapsed > (room * 1000) / rate
        ? room : std::min(room, (elapsed * rate) / 1000);
      bucket.tokens += refill;
      bucket.last_milliseconds = now;
    }
    if (bucket.tokens < amount)
      return false;
    bucket.tokens -= amount;
    return true;
  }

  bool salchat_relay::allow_peer_packet(const std::string& peer, const std::size_t bytes)
  {
    return allow_peer_transfer(peer, bytes, true);
  }

  bool salchat_relay::allow_peer_bytes(const std::string& peer, const std::size_t bytes)
  {
    return allow_peer_transfer(peer, bytes, false);
  }

  bool salchat_relay::allow_peer_transfer(const std::string& peer, const std::size_t bytes,
                                          const bool count_packet)
  {
    static constexpr std::uint64_t packet_rate = 32;
    static constexpr std::uint64_t packet_burst = 64;
    static constexpr std::uint64_t global_packet_rate = 256;
    static constexpr std::uint64_t global_packet_burst = 512;
    const std::uint64_t peer_rate = m_config.max_peer_kbps * 1024;
    const std::uint64_t peer_burst = peer_rate * 2;
    const std::uint64_t global_rate = m_config.max_global_kbps * 1024;
    const std::uint64_t global_burst = global_rate * 2;
    if (peer_rate == 0 || global_rate == 0 || bytes > peer_burst || bytes > global_burst)
      return false;
    const std::uint64_t now = monotonic_milliseconds();
    std::lock_guard<std::mutex> lock(m_rate_mutex);
    auto found = m_peer_rates.find(peer);
    bool inserted = false;
    if (found == m_peer_rates.end())
    {
      // Callers are keyed by source host rather than a short-lived connection
      // UUID. Expire idle buckets so a long-running daemon cannot be
      // permanently filled with 4096 one-shot source entries.
      static constexpr std::uint64_t idle_milliseconds = 5 * 60 * 1000;
      for (auto it = m_peer_rates.begin();
           it != m_peer_rates.end() && m_peer_rates.size() >= 4096;)
      {
        if (now > it->second.last_milliseconds &&
            now - it->second.last_milliseconds > idle_milliseconds)
          it = m_peer_rates.erase(it);
        else
          ++it;
      }
      if (m_peer_rates.size() >= 4096)
        return false;
      found = m_peer_rates.emplace(peer, peer_rate_state{}).first;
      inserted = true;
    }
    peer_rate_state candidate = found->second;
    token_bucket global_bytes = m_global_bytes;
    token_bucket global_packets = m_global_packets;
    if ((count_packet && !consume(candidate.packets, 1, packet_rate, packet_burst, now)) ||
        (count_packet && !consume(global_packets, 1, global_packet_rate, global_packet_burst, now)) ||
        !consume(candidate.bytes, bytes, peer_rate, peer_burst, now) ||
        !consume(global_bytes, bytes, global_rate, global_burst, now))
    {
      if (inserted)
        m_peer_rates.erase(found);
      return false;
    }
    candidate.last_milliseconds = now;
    found->second = candidate;
    m_global_bytes = global_bytes;
    m_global_packets = global_packets;
    return true;
  }

  bool salchat_relay::allow_global_bytes(const std::size_t bytes)
  {
    const std::uint64_t rate = m_config.max_global_kbps * 1024;
    const std::uint64_t burst = rate * 2;
    std::lock_guard<std::mutex> lock(m_rate_mutex);
    return consume(m_global_bytes, bytes, rate, burst, monotonic_milliseconds());
  }

  void salchat_relay::prune(std::uint64_t now, const std::uint64_t current_height)
  {
    // Multiple packets commonly arrive in the same wall-clock second.  A full
    // cache scan for every packet makes a valid signed flood quadratic; once
    // per second is sufficient for second-resolution expiry timestamps.
    if (now <= m_last_prune)
      return;
    m_last_prune = now;
    for (auto it = m_seen_ids.begin(); it != m_seen_ids.end();)
      it = it->second <= now ? m_seen_ids.erase(it) : std::next(it);
    for (auto it = m_seen_hashes.begin(); it != m_seen_hashes.end();)
      it = it->second <= now ? m_seen_hashes.erase(it) : std::next(it);
    const auto discard_stale_order = [](auto& order, const auto& seen) {
      order.erase(std::remove_if(order.begin(), order.end(), [&](const auto& item) {
        const auto found = seen.find(item.first);
        return found == seen.end() || found->second != item.second;
      }), order.end());
    };
    discard_stale_order(m_seen_id_order, m_seen_ids);
    discard_stale_order(m_seen_hash_order, m_seen_hashes);
    for (auto it = m_entries.begin(); it != m_entries.end();)
    {
      if (it->envelope.expires_height > current_height && it->envelope.expires_at > now)
      { ++it; continue; }
      remove_entry_accounting(*it);
      it = m_entries.erase(it); ++m_stats.evicted;
    }
  }

  void salchat_relay::remember_seen(
      std::unordered_map<std::string, std::uint64_t>& seen,
      std::deque<std::pair<std::string, std::uint64_t>>& order,
      const std::string& value, const std::uint64_t expires_at)
  {
    // Replay history is a bounded best-effort cache.  Active envelopes are
    // tracked separately and can never be duplicated, even when old completed
    // history must be evicted to keep the daemon available.
    while (seen.size() >= m_config.max_cache_messages && !order.empty())
    {
      const auto oldest = std::move(order.front());
      order.pop_front();
      const auto found = seen.find(oldest.first);
      if (found != seen.end() && found->second == oldest.second)
        seen.erase(found);
    }
    if (seen.size() >= m_config.max_cache_messages)
      seen.erase(seen.begin());
    seen.emplace(value, expires_at);
    order.emplace_back(value, expires_at);
  }

  salchat_result salchat_relay::insert(const salchat_p2p_envelope& e, const std::uint64_t now,
    const std::uint64_t current_height, std::string& error)
  {
    if (!m_config.enabled) return salchat_result::disabled;
    if (!validate_salchat_envelope(e, m_config, now, current_height, error)) { std::lock_guard<std::mutex> l(m_mutex); ++m_stats.rejected; return salchat_result::malformed; }
    auto copy = e;
    epee::byte_slice serialized;
    if (!epee::serialization::store_t_to_binary(copy, serialized) || serialized.size() > m_config.max_packet_bytes)
    {
      std::lock_guard<std::mutex> l(m_mutex); ++m_stats.rejected; error = "serialized envelope exceeds packet limit";
      return salchat_result::malformed;
    }
    const std::size_t bytes = serialized.size();
    std::lock_guard<std::mutex> lock(m_mutex);
    prune(now, current_height);
    const std::string id_key = key(e.message_id);
    const std::string ciphertext_key = ciphertext_replay_key(e);
    if (m_active_ids.count(id_key) || m_active_hashes.count(ciphertext_key) ||
        m_seen_ids.count(id_key) || m_seen_hashes.count(ciphertext_key))
    { ++m_stats.duplicates; return salchat_result::duplicate; }
    const std::string recipient_key = key(e.recipient_tag);
    const std::string sender_key = sender_recipient_key(e);

    // Quotas bound targeted memory use, but a hard rejection would let one
    // authenticated sender hold a recipient's queue unavailable for the full
    // TTL. Replace that sender's oldest envelope first, then the recipient's
    // oldest envelope. Sustained Sybil flooding is still controlled by the
    // network/RPC byte and packet buckets, without creating a static lockout.
    if (m_sender_recipient_counts[sender_key] >= m_config.max_per_sender_recipient)
    {
      const auto oldest = std::find_if(m_entries.begin(), m_entries.end(), [&](const entry& item) {
        return sender_recipient_key(item.envelope) == sender_key;
      });
      if (oldest != m_entries.end())
      {
        remove_entry_accounting(*oldest);
        m_entries.erase(oldest);
        ++m_stats.evicted;
      }
    }
    if (m_recipient_counts[recipient_key] >= m_config.max_per_recipient)
    {
      const auto oldest = std::find_if(m_entries.begin(), m_entries.end(), [&](const entry& item) {
        return key(item.envelope.recipient_tag) == recipient_key;
      });
      if (oldest != m_entries.end())
      {
        remove_entry_accounting(*oldest);
        m_entries.erase(oldest);
        ++m_stats.evicted;
      }
    }
    while (!m_entries.empty() && (m_entries.size() >= m_config.max_cache_messages || m_stats.cached_bytes + bytes > m_config.max_cache_bytes))
    {
      remove_entry_accounting(m_entries.front());
      m_entries.pop_front(); ++m_stats.evicted;
    }
    if (bytes > m_config.max_cache_bytes) { ++m_stats.rejected; error = "envelope exceeds cache capacity"; return salchat_result::rate_limited; }
    m_entries.push_back({e, bytes});
    m_active_ids.emplace(id_key); m_active_hashes.emplace(ciphertext_key);
    remember_seen(m_seen_ids, m_seen_id_order, id_key, e.expires_at);
    remember_seen(m_seen_hashes, m_seen_hash_order, ciphertext_key, e.expires_at);
    ++m_recipient_counts[recipient_key];
    ++m_sender_recipient_counts[sender_key];
    ++m_stats.accepted; ++m_stats.cached_messages; m_stats.cached_bytes += bytes;
    m_stats.cached_messages = m_entries.size();
    return salchat_result::accepted;
  }

  std::vector<salchat_p2p_envelope> salchat_relay::poll(const std::vector<crypto::hash>& tags,
    std::size_t limit, std::uint64_t now, std::uint64_t current_height)
  {
    std::unordered_set<std::string> wanted; for (const auto& t: tags) wanted.insert(key(t));
    std::lock_guard<std::mutex> lock(m_mutex); prune(now, current_height);
    std::vector<salchat_p2p_envelope> out;
    for (const auto& e: m_entries) if (wanted.count(key(e.envelope.recipient_tag)) && out.size() < limit) out.push_back(e.envelope);
    m_stats.cached_messages = m_entries.size(); return out;
  }

  bool salchat_relay::ack(const crypto::hash& id, const crypto::hash& ack_token)
  {
    std::lock_guard<std::mutex> lock(m_mutex);
    for (auto it=m_entries.begin(); it!=m_entries.end(); ++it) if (it->envelope.message_id == id)
    {
      if (!equal_hashes(make_salchat_ack_token_hash(id, ack_token), it->envelope.ack_token_hash))
        return false;
      remove_entry_accounting(*it);
      m_entries.erase(it); m_stats.cached_messages=m_entries.size(); return true;
    }
    return false;
  }

  salchat_statistics salchat_relay::statistics() const { std::lock_guard<std::mutex> lock(m_mutex); auto s=m_stats; s.cached_messages=m_entries.size(); return s; }
}
