#pragma once

#include <algorithm>
#include <cstdint>
#include <string>
#include <vector>

#include "salchat_protocol.h"

namespace tools { class wallet2; }

namespace salchat
{
  constexpr std::size_t MAX_RETIRED_MESSAGE_KEYS = 16;

  namespace detail
  {
    template<typename T>
    std::size_t erase_contact_records(std::vector<T>& records,
      const crypto::hash& contact_id)
    {
      const std::size_t old_size = records.size();
      records.erase(std::remove_if(records.begin(), records.end(),
        [&](const T& item) { return item.contact_id == contact_id; }), records.end());
      return old_size - records.size();
    }

    class receive_batcher
    {
    public:
      explicit receive_batcher(std::size_t limit): m_remaining(limit) {}

      std::size_t next_limit() const noexcept
      {
        return m_active ? std::min<std::size_t>(100, m_remaining) : 0;
      }

      bool advance(std::size_t returned, bool persist, bool made_progress) noexcept
      {
        const std::size_t requested = next_limit();
        if (returned > requested) returned = requested;
        m_remaining -= returned;
        m_active = persist && made_progress && returned == requested && m_remaining != 0;
        return m_active;
      }

      std::size_t remaining() const noexcept { return m_remaining; }

    private:
      std::size_t m_remaining;
      bool m_active = true;
    };
  }

  enum class message_direction : std::uint8_t { incoming = 1, outgoing = 2 };
  enum class message_state : std::uint8_t { submitted = 1, received = 2, quarantined = 3, failed = 4, delivered = 5 };

  struct message
  {
    crypto::hash id{};
    crypto::hash contact_id{};
    message_type type = message_type::text;
    message_direction direction = message_direction::incoming;
    message_state state = message_state::received;
    std::string content;
    std::string sender_salvium_address;
    std::uint64_t created_at = 0;
    std::uint64_t received_at = 0;
    std::uint64_t expires_height = 0;
    // Older saved messages lack the requested TTL; zero uses the seven-day limit.
    std::uint64_t expires_at = 0;
    crypto::public_key sender_signing_public_key{};
    crypto::public_key sender_encryption_public_key{};
    BEGIN_SERIALIZE_OBJECT()
      VERSION_FIELD(4)
      if (version < 3 || version > 4) return false;
      FIELD(id) FIELD(contact_id) VARINT_FIELD(type) VARINT_FIELD(direction) VARINT_FIELD(state)
      FIELD(content) VARINT_FIELD(created_at) VARINT_FIELD(received_at) FIELD(sender_signing_public_key)
      FIELD(sender_salvium_address) FIELD(sender_encryption_public_key) VARINT_FIELD(expires_height)
      if (version >= 4) { VARINT_FIELD(expires_at) }
      else expires_at = 0;
    END_SERIALIZE()
  };

  namespace detail
  {
    bool message_expired(const message& item, std::uint64_t now,
      std::uint64_t current_height) noexcept;
    std::size_t erase_contact_messages(std::vector<message>& messages,
      const crypto::hash& contact_id);
    bool retired_message_key_active(std::uint64_t retired_at, std::uint64_t retired_height,
      std::uint64_t now, std::uint64_t current_height) noexcept;
  }

  struct public_identity
  {
    bool initialized = false;
    std::string spend_public_key;
    std::string signing_public_key;
    std::string encryption_public_key;
    std::string salvium_address;
    std::uint64_t created_at = 0;
  };

  struct send_result { std::string message_id; bool submitted = false; std::string reason; };
  struct receive_result
  {
    std::size_t received = 0;
    std::size_t quarantined = 0;
    std::size_t rejected = 0;
    std::vector<message> new_messages;
  };

  class service
  {
  public:
    explicit service(tools::wallet2& wallet);

    public_identity get_identity() const;
    public_identity rotate_identity();
    std::string get_address() const;
    contact add_contact(const std::string& label, const std::string& address_or_contact_id,
      const std::string& encryption_public_key = {},
      std::size_t* promoted_messages = nullptr);
    contact accept_contact(const std::string& label, const std::string& message_id,
      std::size_t* promoted_messages = nullptr);
    bool remove_contact(const std::string& id);
    bool block_contact(const std::string& id, bool blocked);
    std::vector<contact> contacts() const;
    send_result send_text(const std::string& contact_id, const std::string& text,
      std::uint64_t ttl_seconds = cryptonote::SALCHAT_MAX_TTL_SECONDS);
    receive_result receive(std::size_t limit = 100);
    receive_result check_waiting(std::size_t limit = 100);
    std::vector<message> messages(const std::string& contact_id = {}, std::size_t limit = 100) const;
    bool get_message(const std::string& id, message& out) const;
    bool delete_message(const std::string& id);
    std::size_t message_count() const;
    bool daemon_status(bool& enabled, std::uint64_t& cached_messages, std::string& error) const;

    static std::string id_hex(const crypto::hash& id);
    static std::string key_hex(const crypto::public_key& key);

  private:
    struct state;
    tools::wallet2& m_wallet;
    state load() const;
    void save(const state& value) const;
    receive_result receive_impl(std::size_t limit, bool persist);
    std::size_t promote_quarantined(state& value, const contact& entry,
      std::uint64_t accepted_at) const;
  };
}
