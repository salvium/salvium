#include "salchat_service.h"

#include <algorithm>
#include <cstring>
#include <ctime>
#include <limits>
#include <mutex>
#include <stdexcept>
#include <unordered_set>

#include <sodium.h>

#include "carrot_core/account_secrets.h"
#include "cryptonote_basic/cryptonote_basic_impl.h"
#include "cryptonote_protocol/salchat_relay.h"
#include "misc_language.h"
#include "rpc/core_rpc_server_commands_defs.h"
#include "serialization/binary_utils.h"
#include "string_tools.h"
#include "wallet2.h"

namespace salchat
{
  namespace
  {
    constexpr char STATE_ATTRIBUTE[] = "salchat.state.v3";
    constexpr std::uint32_t STATE_VERSION = 3;
    constexpr std::uint64_t EPOCH_SECONDS = 3600;
    constexpr std::size_t MAX_STATE_BYTES = 16 * 1024 * 1024;
    constexpr std::size_t MAX_PENDING_RECEIPTS = 1024;
    std::recursive_mutex state_mutex;

    struct pending_receipt
    {
      crypto::hash message_id{};
      crypto::hash contact_id{};
      std::uint64_t created_at = 0;
      BEGIN_SERIALIZE_OBJECT()
        VERSION_FIELD(2)
        FIELD(message_id) FIELD(contact_id) VARINT_FIELD(created_at)
      END_SERIALIZE()
    };

    template<typename T> bool from_hex(const std::string& text, T& value)
    {
      std::string bytes;
      if (text.size() != sizeof(T) * 2 || !epee::string_tools::parse_hexstr_to_binbuff(text, bytes)) return false;
      std::memcpy(&value, bytes.data(), sizeof(T));
      return true;
    }

    template<typename T> std::string to_hex(const T& value)
    {
      return epee::string_tools::buff_to_hex_nodelimer(
        std::string(reinterpret_cast<const char*>(&value), sizeof(value)));
    }

    bool valid_label(const std::string& label)
    {
      return !label.empty() && label.size() <= MAX_LABEL_BYTES && valid_text(label, false);
    }

    cryptonote::salchat_rpc_envelope to_rpc(const cryptonote::salchat_p2p_envelope& in)
    {
      cryptonote::salchat_rpc_envelope out{};
      out.protocol_version = in.protocol_version;
      out.message_id = to_hex(in.message_id); out.recipient_tag = to_hex(in.recipient_tag);
      out.ciphertext_hash = to_hex(in.ciphertext_hash); out.ack_token_hash = to_hex(in.ack_token_hash);
      out.created_at = in.created_at; out.expires_at = in.expires_at;
      out.created_height = in.created_height; out.expires_height = in.expires_height;
      out.hop_count = in.hop_count; out.hop_limit = in.hop_limit;
      out.ephemeral_public_key = to_hex(in.ephemeral_public_key); out.nonce = to_hex(in.nonce);
      out.ciphertext = epee::string_tools::buff_to_hex_nodelimer(in.ciphertext);
      out.sender_signing_public_key = to_hex(in.sender_signing_public_key);
      out.sender_signature = to_hex(in.sender_signature);
      return out;
    }

    bool from_rpc(const cryptonote::salchat_rpc_envelope& in, cryptonote::salchat_p2p_envelope& out)
    {
      out.protocol_version = in.protocol_version; out.created_at = in.created_at; out.expires_at = in.expires_at;
      out.created_height = in.created_height; out.expires_height = in.expires_height;
      out.hop_count = in.hop_count; out.hop_limit = in.hop_limit;
      return from_hex(in.message_id, out.message_id) && from_hex(in.recipient_tag, out.recipient_tag) &&
        from_hex(in.ciphertext_hash, out.ciphertext_hash) && from_hex(in.ack_token_hash, out.ack_token_hash) &&
        from_hex(in.ephemeral_public_key, out.ephemeral_public_key) &&
        from_hex(in.nonce, out.nonce) && in.ciphertext.size() <= 2 * cryptonote::SALCHAT_MAX_CIPHERTEXT_BYTES &&
        epee::string_tools::parse_hexstr_to_binbuff(in.ciphertext, out.ciphertext) &&
        from_hex(in.sender_signing_public_key, out.sender_signing_public_key) &&
        from_hex(in.sender_signature, out.sender_signature);
    }
  }

  struct service::state
  {
    std::uint32_t version = STATE_VERSION;
    std::vector<contact> contacts;
    std::vector<message> messages;
    std::vector<crypto::hash> seen_message_ids;
    std::vector<crypto::hash> seen_ciphertext_hashes;
    std::vector<pending_receipt> pending_receipts;
    BEGIN_SERIALIZE_OBJECT()
      VERSION_FIELD(3)
      VARINT_FIELD(version) FIELD(contacts) FIELD(messages) FIELD(seen_message_ids)
      FIELD(seen_ciphertext_hashes) FIELD(pending_receipts)
    END_SERIALIZE()
  };

  service::service(tools::wallet2& wallet): m_wallet(wallet)
  {
    if (sodium_init() < 0) throw std::runtime_error("libsodium initialization failed");
  }

  service::state service::load() const
  {
    std::string encoded;
    if (!m_wallet.get_attribute(STATE_ATTRIBUTE, encoded)) return {};
    std::string bytes;
    if (encoded.size() > MAX_STATE_BYTES * 2 || !epee::string_tools::parse_hexstr_to_binbuff(encoded, bytes))
      throw std::runtime_error("corrupt Salchat wallet state");
    state value;
    if (!serialization::parse_binary(bytes, value) || value.version != STATE_VERSION)
      throw std::runtime_error("invalid Salchat wallet state");
    if (value.contacts.size() > MAX_CONTACTS || value.messages.size() > MAX_MESSAGES ||
        value.seen_message_ids.size() > MAX_MESSAGES || value.seen_ciphertext_hashes.size() > MAX_MESSAGES ||
        value.pending_receipts.size() > MAX_PENDING_RECEIPTS)
      throw std::runtime_error("Salchat wallet state exceeds container limits");
    if (std::any_of(value.contacts.begin(), value.contacts.end(), [this](const contact& item) {
          cryptonote::address_parse_info address_info;
          return !valid_contact(item) || !valid_label(item.label) ||
            item.salvium_address.empty() || item.salvium_address.size() > MAX_CONTACT_ADDRESS_BYTES ||
            !cryptonote::get_account_address_from_str(
              address_info, m_wallet.nettype(), item.salvium_address) ||
            !address_info.is_carrot || address_info.is_subaddress || address_info.has_payment_id ||
            address_info.address.m_spend_public_key != item.spend_public_key ||
            address_info.address.m_view_public_key != item.view_public_key ||
            item.salvium_address != cryptonote::get_account_address_as_str(
              m_wallet.nettype(), false, address_info.address);
        }))
      throw std::runtime_error("invalid Salchat contact state");
    if (std::any_of(value.messages.begin(), value.messages.end(), [this](const message& item) {
          const bool valid_state =
            (item.direction == message_direction::incoming &&
              (item.state == message_state::received || item.state == message_state::quarantined)) ||
            (item.direction == message_direction::outgoing &&
              (item.state == message_state::submitted || item.state == message_state::failed ||
                item.state == message_state::delivered));
          cryptonote::address_parse_info sender_info;
          const bool valid_sender = !item.sender_salvium_address.empty() &&
            item.sender_salvium_address.size() <= MAX_CONTACT_ADDRESS_BYTES &&
              cryptonote::get_account_address_from_str(
                sender_info, m_wallet.nettype(), item.sender_salvium_address) &&
              sender_info.is_carrot && !sender_info.is_subaddress && !sender_info.has_payment_id &&
              sender_info.address.m_spend_public_key == item.sender_signing_public_key &&
              valid_encryption_public_key(item.sender_encryption_public_key) &&
              item.sender_salvium_address == cryptonote::get_account_address_as_str(
                m_wallet.nettype(), false, sender_info.address) &&
              (item.direction != message_direction::incoming ||
                item.contact_id == make_contact_id(sender_info.address.m_spend_public_key,
                  sender_info.address.m_view_public_key, item.sender_encryption_public_key));
          return item.id == crypto::null_hash || item.contact_id == crypto::null_hash ||
            item.expires_height == 0 || !valid_sender ||
            item.type != message_type::text || !valid_state || item.content.empty() ||
            item.content.size() > MAX_TEXT_BYTES || !valid_text(item.content) ||
            !cryptonote::valid_salchat_spend_public_key(item.sender_signing_public_key);
        }))
      throw std::runtime_error("invalid Salchat message state");
    if (std::any_of(value.seen_message_ids.begin(), value.seen_message_ids.end(),
          [](const crypto::hash& item) { return item == crypto::null_hash; }) ||
        std::any_of(value.seen_ciphertext_hashes.begin(), value.seen_ciphertext_hashes.end(),
          [](const crypto::hash& item) { return item == crypto::null_hash; }) ||
        std::any_of(value.pending_receipts.begin(), value.pending_receipts.end(),
          [](const pending_receipt& item) {
            return item.message_id == crypto::null_hash || item.contact_id == crypto::null_hash ||
              item.created_at == 0;
          }))
      throw std::runtime_error("invalid Salchat replay or receipt state");
    return value;
  }

  void service::save(const state& value) const
  {
    if (value.contacts.size() > MAX_CONTACTS || value.messages.size() > MAX_MESSAGES ||
        value.seen_message_ids.size() > MAX_MESSAGES || value.seen_ciphertext_hashes.size() > MAX_MESSAGES ||
        value.pending_receipts.size() > MAX_PENDING_RECEIPTS)
      throw std::runtime_error("Salchat wallet state exceeds container limits");
    std::string bytes;
    state serializable = value;
    if (!serialization::dump_binary(serializable, bytes) || bytes.size() > MAX_STATE_BYTES)
      throw std::runtime_error("Salchat wallet state exceeds safe limit");
    m_wallet.set_attribute(STATE_ATTRIBUTE, epee::string_tools::buff_to_hex_nodelimer(bytes));
    m_wallet.store();
  }

  std::string service::id_hex(const crypto::hash& id) { return to_hex(id); }
  std::string service::key_hex(const crypto::public_key& key) { return to_hex(key); }

  public_identity service::get_identity() const
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    public_identity out;
    const auto& account = m_wallet.get_account();
    const auto& keys = account.get_keys();
    crypto::secret_key message_secret{};
    crypto::public_key encryption{};
    const auto& address = keys.m_carrot_main_address;
    // Identity and address display are public operations. In the CLI, spend
    // authority is normally encrypted in memory until a signing operation
    // explicitly unlocks it, so deriving the public identity from secret keys
    // incorrectly made otherwise valid wallets appear uninitialized.
    out.initialized = address.m_is_carrot &&
      cryptonote::valid_salchat_spend_public_key(address.m_spend_public_key) &&
      derive_message_keys(keys.s_master, message_secret, encryption);
    if (!out.initialized) return out;
    out.spend_public_key = to_hex(address.m_spend_public_key);
    out.signing_public_key = out.spend_public_key;
    out.encryption_public_key = to_hex(encryption);
    out.salvium_address = account.get_carrot_public_address_str(m_wallet.nettype());
    out.created_at = account.get_createtime();
    return out;
  }

  std::string service::get_address() const
  {
    const auto identity = get_identity();
    if (!identity.initialized) throw std::runtime_error("Salchat identity is unavailable");
    return identity.salvium_address;
  }

  std::size_t service::promote_quarantined(state& value, const contact& entry,
    std::uint64_t accepted_at) const
  {
    std::size_t promoted = 0;
    for (auto& item: value.messages)
    {
      if (item.direction != message_direction::incoming || item.state != message_state::quarantined ||
          item.contact_id != entry.id || item.sender_signing_public_key != entry.signing_public_key ||
          (!item.sender_salvium_address.empty() && item.sender_salvium_address != entry.salvium_address))
        continue;

      item.state = message_state::received;
      ++promoted;
      const auto pending = std::find_if(value.pending_receipts.begin(), value.pending_receipts.end(),
        [&](const pending_receipt& receipt) { return receipt.message_id == item.id; });
      if (pending == value.pending_receipts.end())
      {
        if (value.pending_receipts.size() >= MAX_PENDING_RECEIPTS)
          value.pending_receipts.erase(value.pending_receipts.begin());
        value.pending_receipts.push_back({item.id, entry.id, accepted_at});
      }
    }
    return promoted;
  }

  contact service::add_contact(const std::string& label, const std::string& address_or_contact_id,
    const std::string& encryption_public_key,
    std::size_t* promoted_messages)
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    if (promoted_messages) *promoted_messages = 0;
    if (!valid_label(label)) throw std::runtime_error("contact label must be 1-64 printable bytes");
    if (address_or_contact_id.empty() || address_or_contact_id.size() > MAX_CONTACT_ADDRESS_BYTES)
      throw std::runtime_error("contact address or ID exceeds safe limit");

    auto value = load();
    std::string address = address_or_contact_id;
    std::string encryption_key_text = encryption_public_key;
    if (encryption_key_text.empty())
    {
      const auto separator = address.rfind(':');
      if (separator != std::string::npos)
      {
        encryption_key_text = address.substr(separator + 1);
        address.resize(separator);
      }
    }
    crypto::hash requested_contact_id{};
    const bool adding_from_quarantine = from_hex(address_or_contact_id, requested_contact_id);
    if (adding_from_quarantine)
    {
      const auto quarantined = std::find_if(value.messages.begin(), value.messages.end(),
        [&](const message& item) {
          return item.direction == message_direction::incoming &&
            item.state == message_state::quarantined && item.contact_id == requested_contact_id &&
            !item.sender_salvium_address.empty();
        });
      if (quarantined == value.messages.end())
        throw std::runtime_error("contact ID is not backed by an authenticated quarantined message");
      address = quarantined->sender_salvium_address;
    }

    contact entry;
    cryptonote::address_parse_info address_info;
    if (!cryptonote::get_account_address_from_str(address_info, m_wallet.nettype(), address) ||
        !address_info.is_carrot || address_info.is_subaddress || address_info.has_payment_id)
      throw std::runtime_error("Salchat contacts require a main Carrot SC address for this network");
    entry.spend_public_key = address_info.address.m_spend_public_key;
    entry.view_public_key = address_info.address.m_view_public_key;
    entry.signing_public_key = entry.spend_public_key;
    if (adding_from_quarantine)
    {
      const auto quarantined = std::find_if(value.messages.begin(), value.messages.end(),
        [&](const message& item) {
          return item.direction == message_direction::incoming &&
            item.state == message_state::quarantined && item.contact_id == requested_contact_id &&
            !item.sender_salvium_address.empty();
        });
      if (quarantined == value.messages.end())
        throw std::runtime_error("quarantined Salchat identity is unavailable");
      entry.encryption_public_key = quarantined->sender_encryption_public_key;
    }
    else if (!from_hex(encryption_key_text, entry.encryption_public_key))
      throw std::runtime_error("Salchat contact requires the sender's 64-hex-character encryption key");
    if (!valid_encryption_public_key(entry.encryption_public_key))
      throw std::runtime_error("invalid Salchat encryption public key");
    entry.salvium_address = cryptonote::get_account_address_as_str(m_wallet.nettype(), false, address_info.address);
    entry.id = make_contact_id(entry.spend_public_key, entry.view_public_key, entry.encryption_public_key);
    if (adding_from_quarantine && entry.id != requested_contact_id)
      throw std::runtime_error("quarantined contact ID does not match its authenticated SC address");
    entry.label = label; entry.created_at = std::time(nullptr);
    if (value.contacts.size() >= MAX_CONTACTS) throw std::runtime_error("Salchat contact limit reached");
    if (std::any_of(value.contacts.begin(), value.contacts.end(), [&](const contact& c) { return c.id == entry.id; }))
      throw std::runtime_error("Salchat contact already exists");
    value.contacts.push_back(entry);
    const std::size_t promoted = promote_quarantined(
      value, entry, static_cast<std::uint64_t>(std::time(nullptr)));
    save(value);
    if (promoted_messages) *promoted_messages = promoted;
    return entry;
  }

  contact service::accept_contact(const std::string& label, const std::string& message_id,
    std::size_t* promoted_messages)
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    crypto::hash parsed{};
    if (!from_hex(message_id, parsed)) throw std::runtime_error("invalid message ID");
    const auto value = load();
    const auto found = std::find_if(value.messages.begin(), value.messages.end(), [&](const message& item) {
      return item.id == parsed;
    });
    if (found == value.messages.end()) throw std::runtime_error("quarantined message not found");
    if (found->direction != message_direction::incoming || found->state != message_state::quarantined)
      throw std::runtime_error("message is not quarantined");
    if (found->sender_salvium_address.empty())
      throw std::runtime_error("quarantined message does not contain an accept-ready sender address; add the sender's SC address manually");
    return add_contact(label, id_hex(found->contact_id), {}, promoted_messages);
  }

  bool service::remove_contact(const std::string& id)
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    crypto::hash parsed{}; if (!from_hex(id, parsed)) throw std::runtime_error("invalid contact ID");
    auto value = load(); const auto old = value.contacts.size();
    value.contacts.erase(std::remove_if(value.contacts.begin(), value.contacts.end(), [&](const contact& c){ return c.id == parsed; }), value.contacts.end());
    if (value.contacts.size() == old) return false;
    save(value);
    return true;
  }

  bool service::block_contact(const std::string& id, bool blocked)
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    crypto::hash parsed{}; if (!from_hex(id, parsed)) throw std::runtime_error("invalid contact ID");
    auto value = load();
    for (auto& c: value.contacts) if (c.id == parsed) { c.blocked = blocked; save(value); return true; }
    return false;
  }

  std::vector<contact> service::contacts() const
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    return load().contacts;
  }

  send_result service::send_text(const std::string& contact_text, const std::string& text, std::uint64_t ttl)
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    if (text.empty() || text.size() > MAX_TEXT_BYTES) throw std::runtime_error("message must be 1-4096 bytes");
    if (ttl == 0 || ttl > cryptonote::SALCHAT_MAX_TTL_SECONDS)
      throw std::runtime_error("TTL must be between 1 and 604800 seconds");
    crypto::hash parsed_contact{}; if (!from_hex(contact_text, parsed_contact)) throw std::runtime_error("invalid contact ID");
    auto value = load();
    const auto found = std::find_if(value.contacts.begin(), value.contacts.end(), [&](const contact& c){ return c.id == parsed_contact; });
    if (found == value.contacts.end()) throw std::runtime_error("unknown Salchat contact");
    if (found->blocked) throw std::runtime_error("Salchat contact is blocked");

    cryptonote::salchat_p2p_envelope envelope;
    std::string protocol_error;
    const auto& account_keys = m_wallet.get_account().get_keys();
    crypto::secret_key message_secret{};
    crypto::public_key message_public{};
    if (!derive_message_keys(account_keys.s_master, message_secret, message_public))
      throw std::runtime_error("Salchat message key is unavailable");
    if (!encrypt_payload(account_keys.k_generate_image, account_keys.k_prove_spend,
        message_secret,
        account_keys.m_carrot_main_address.m_spend_public_key,
        account_keys.m_carrot_main_address.m_view_public_key, *found, m_wallet.nettype(),
        message_type::text, text, cryptonote::SALCHAT_MAX_TTL_SECONDS,
        static_cast<std::uint64_t>(std::time(nullptr)), m_wallet.get_blockchain_current_height(),
        envelope, protocol_error))
      throw std::runtime_error(protocol_error);

    message record; record.id = envelope.message_id; record.contact_id = found->id; record.direction = message_direction::outgoing;
    record.state = message_state::failed; record.content = text; record.created_at = envelope.created_at;
    record.expires_height = envelope.expires_height;
    record.sender_salvium_address = m_wallet.get_account().get_carrot_public_address_str(m_wallet.nettype());
    record.sender_signing_public_key = account_keys.m_carrot_main_address.m_spend_public_key;
    record.sender_encryption_public_key = message_public;
    if (value.messages.size() >= MAX_MESSAGES) value.messages.erase(value.messages.begin());
    value.messages.push_back(record); save(value);

    cryptonote::COMMAND_RPC_SALCHAT_SUBMIT::request request; cryptonote::COMMAND_RPC_SALCHAT_SUBMIT::response response;
    request.envelope = to_rpc(envelope);
    send_result result; result.message_id = to_hex(envelope.message_id);
    if (!m_wallet.invoke_http_json_rpc("/json_rpc", "salchat_submit_envelope", request, response)) result.reason = "daemon RPC unavailable";
    else { result.submitted = response.accepted; result.reason = response.reason; }
    value = load();
    for (auto& item: value.messages) if (item.id == envelope.message_id)
      item.state = result.submitted ? message_state::submitted : message_state::failed;
    save(value); return result;
  }

  receive_result service::receive(std::size_t limit)
  {
    return receive_impl(limit, true);
  }

  receive_result service::check_waiting(std::size_t limit)
  {
    return receive_impl(limit, false);
  }

  receive_result service::receive_impl(std::size_t limit, bool persist)
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    if (limit == 0 || limit > 1000) throw std::runtime_error("receive limit must be between 1 and 1000");
    auto value = load();
    std::vector<std::string> recipient_tags;
    const std::uint64_t now = static_cast<std::uint64_t>(std::time(nullptr));
    const std::uint64_t chain_height = m_wallet.get_blockchain_current_height();
    const std::uint64_t epoch = now / EPOCH_SECONDS;
    const auto& account_keys = m_wallet.get_account().get_keys();
    crypto::secret_key message_secret{};
    crypto::public_key carrot_encryption_public_key{};
    if (!derive_message_keys(account_keys.s_master, message_secret, carrot_encryption_public_key))
      throw std::runtime_error("wallet Salchat message key is unavailable");
    // Include the next epoch because the daemon accepts a small amount of
    // sender clock skew, including messages created just across an hour edge.
    if (epoch != std::numeric_limits<std::uint64_t>::max())
      recipient_tags.push_back(to_hex(make_recipient_tag(
        carrot_encryption_public_key, epoch + 1, m_wallet.nettype())));
    constexpr std::uint64_t offline_epochs = cryptonote::SALCHAT_MAX_TTL_SECONDS / EPOCH_SECONDS;
    for (std::uint64_t age = 0; age <= offline_epochs && age <= epoch; ++age)
      recipient_tags.push_back(to_hex(make_recipient_tag(
        carrot_encryption_public_key, epoch - age, m_wallet.nettype())));

    // The daemon bounds each request to keep adversarial JSON and cache scans
    // cheap. Poll the full one-week offline-delivery window in bounded batches.
    std::vector<cryptonote::salchat_rpc_envelope> envelopes;
    for (std::size_t offset = 0; offset < recipient_tags.size() && envelopes.size() < limit;
         offset += cryptonote::SALCHAT_MAX_POLL_TAGS)
    {
      cryptonote::COMMAND_RPC_SALCHAT_POLL::request request;
      cryptonote::COMMAND_RPC_SALCHAT_POLL::response response;
      const auto end = std::min(recipient_tags.size(), offset + cryptonote::SALCHAT_MAX_POLL_TAGS);
      request.recipient_tags.assign(recipient_tags.begin() + offset, recipient_tags.begin() + end);
      request.limit = std::min<std::size_t>(100, limit - envelopes.size());
      if (!m_wallet.invoke_http_json_rpc("/json_rpc", "salchat_poll_envelopes", request, response))
        throw std::runtime_error("daemon Salchat polling RPC unavailable");
      if (response.status != CORE_RPC_STATUS_OK)
        throw std::runtime_error("daemon Salchat polling RPC returned " + response.status);
      const auto remaining = limit - envelopes.size();
      if (response.envelopes.size() > remaining)
        response.envelopes.resize(remaining);
      envelopes.insert(envelopes.end(), response.envelopes.begin(), response.envelopes.end());
    }

    receive_result result;
    struct pending_ack
    {
      crypto::hash message_id{};
      crypto::hash ack_token{};
    };
    std::vector<pending_ack> pending_acks;
    const auto wipe_pending_acks = epee::misc_utils::create_scope_leave_handler([&]() {
      for (auto& item: pending_acks)
        sodium_memzero(&item.ack_token, sizeof(item.ack_token));
    });
    bool batch_state_changed = false;
    std::unordered_set<std::string> seen_ids;
    std::unordered_set<std::string> seen_hashes;
    const std::unordered_set<std::string> requested_tags(recipient_tags.begin(), recipient_tags.end());
    for (const auto& id: value.seen_message_ids) seen_ids.insert(to_hex(id));
    for (const auto& hash: value.seen_ciphertext_hashes) seen_hashes.insert(to_hex(hash));
    for (const auto& rpc_envelope: envelopes)
    {
      cryptonote::salchat_p2p_envelope envelope;
      bool accepted = false;
      bool acknowledge = false;
      bool have_ack_token = false;
      crypto::hash ack_token{};
      bool state_changed = false;
      std::string validation_error;
      cryptonote::salchat_config validation_config; validation_config.enabled = true;
      if (from_rpc(rpc_envelope, envelope) && requested_tags.count(rpc_envelope.recipient_tag) != 0 &&
          cryptonote::validate_salchat_envelope(
            envelope, validation_config, now, chain_height, validation_error))
      {
        const bool seen_id = seen_ids.count(to_hex(envelope.message_id)) != 0;
        const bool seen_hash = seen_hashes.count(to_hex(envelope.ciphertext_hash)) != 0;
        if (seen_id && seen_hash)
        {
          // The prior durable write succeeded but its daemon acknowledgement
          // may have been lost. Re-authenticate the encrypted receiver-only
          // capability before retrying that destructive acknowledgement.
          decrypted_payload duplicate;
          const auto wipe_duplicate = epee::misc_utils::create_scope_leave_handler([&]() {
            sodium_memzero(&duplicate.ack_token, sizeof(duplicate.ack_token));
            if (!duplicate.content.empty()) sodium_memzero(&duplicate.content[0], duplicate.content.size());
          });
          if (decrypt_payload(message_secret,
              account_keys.m_carrot_main_address.m_spend_public_key,
              account_keys.m_carrot_main_address.m_view_public_key, m_wallet.nettype(),
              envelope, duplicate, now, chain_height, validation_error))
          {
            ack_token = duplicate.ack_token;
            have_ack_token = true;
            acknowledge = true;
          }
        }
        else if (!seen_id && !seen_hash)
        {
          decrypted_payload plain;
          const auto wipe_plain = epee::misc_utils::create_scope_leave_handler([&]() {
            sodium_memzero(&plain.ack_token, sizeof(plain.ack_token));
            if (!plain.content.empty()) sodium_memzero(&plain.content[0], plain.content.size());
          });
          if (decrypt_payload(message_secret,
              account_keys.m_carrot_main_address.m_spend_public_key,
              account_keys.m_carrot_main_address.m_view_public_key, m_wallet.nettype(),
              envelope, plain, now, chain_height, validation_error))
          {
            ack_token = plain.ack_token;
            have_ack_token = true;
            // A valid AEAD payload is addressed to this wallet. Authenticated
            // messages discarded by local policy can be removed from the
            // daemon without risking loss of an unprocessed valid message.
            acknowledge = true;
            const auto known = std::find_if(value.contacts.begin(), value.contacts.end(), [&](const contact& c) {
              return c.spend_public_key == plain.sender_spend_public_key &&
                c.view_public_key == plain.sender_view_public_key &&
                c.signing_public_key == plain.sender_signing_public_key &&
                c.encryption_public_key == plain.sender_encryption_public_key;
            });
            if (known != value.contacts.end() && !known->blocked)
            {
              if (plain.type == message_type::delivery_receipt)
              {
                crypto::hash delivered_id{};
                if (from_hex(plain.content, delivered_id))
                {
                  const auto outgoing = std::find_if(value.messages.begin(), value.messages.end(), [&](const message& item) {
                    return item.id == delivered_id && item.contact_id == known->id &&
                      item.direction == message_direction::outgoing && item.type == message_type::text;
                  });
                  if (outgoing != value.messages.end())
                  {
                    if (persist)
                    {
                      outgoing->state = message_state::delivered;
                      state_changed = true;
                    }
                  }
                  accepted = true;
                  ++result.received;
                }
              }
              else if (plain.type == message_type::text)
              {
                message record;
                record.id = envelope.message_id; record.type = plain.type; record.direction = message_direction::incoming;
                record.contact_id = known->id; record.state = message_state::received; record.content = plain.content;
                record.sender_salvium_address = known->salvium_address;
                record.created_at = plain.created_at; record.received_at = now;
                record.expires_height = envelope.expires_height;
                record.sender_signing_public_key = plain.sender_signing_public_key;
                record.sender_encryption_public_key = plain.sender_encryption_public_key;
                if (persist)
                {
                  if (value.messages.size() >= MAX_MESSAGES) value.messages.erase(value.messages.begin());
                  value.messages.push_back(record);
                }
                result.new_messages.push_back(std::move(record));
                if (persist)
                {
                  const auto pending = std::find_if(value.pending_receipts.begin(), value.pending_receipts.end(),
                    [&](const pending_receipt& receipt) { return receipt.message_id == envelope.message_id; });
                  if (pending == value.pending_receipts.end())
                  {
                    if (value.pending_receipts.size() >= MAX_PENDING_RECEIPTS) value.pending_receipts.erase(value.pending_receipts.begin());
                    value.pending_receipts.push_back({envelope.message_id, known->id, now});
                  }
                  state_changed = true;
                }
                accepted = true;
                ++result.received;
              }
            }
            else if (known == value.contacts.end() && plain.type == message_type::text)
            {
              message record;
              record.id = envelope.message_id;
              record.contact_id = make_contact_id(plain.sender_spend_public_key,
                plain.sender_view_public_key, plain.sender_encryption_public_key);
              record.type = plain.type; record.direction = message_direction::incoming;
              record.state = message_state::quarantined; record.content = plain.content;
              const cryptonote::account_public_address sender_address{
                plain.sender_spend_public_key, plain.sender_view_public_key, true};
              record.sender_salvium_address = cryptonote::get_account_address_as_str(
                m_wallet.nettype(), false, sender_address);
              record.created_at = plain.created_at; record.received_at = now;
              record.expires_height = envelope.expires_height;
              record.sender_signing_public_key = plain.sender_signing_public_key;
              record.sender_encryption_public_key = plain.sender_encryption_public_key;
              if (persist)
              {
                if (value.messages.size() >= MAX_MESSAGES) value.messages.erase(value.messages.begin());
                value.messages.push_back(record);
                state_changed = true;
              }
              result.new_messages.push_back(std::move(record));
              accepted = true;
              ++result.quarantined;
            }
          }
        }
      }
      if (!persist)
      {
        if (!accepted) ++result.rejected;
        continue;
      }
      if (accepted)
      {
        value.seen_message_ids.push_back(envelope.message_id);
        value.seen_ciphertext_hashes.push_back(envelope.ciphertext_hash);
        if (value.seen_message_ids.size() > MAX_MESSAGES) value.seen_message_ids.erase(value.seen_message_ids.begin());
        if (value.seen_ciphertext_hashes.size() > MAX_MESSAGES) value.seen_ciphertext_hashes.erase(value.seen_ciphertext_hashes.begin());
        seen_ids.insert(to_hex(envelope.message_id));
        seen_hashes.insert(to_hex(envelope.ciphertext_hash));
        state_changed = true;
      }
      else ++result.rejected;
      if (acknowledge && have_ack_token)
        pending_acks.push_back({envelope.message_id, ack_token});
      batch_state_changed = batch_state_changed || state_changed;
    }

    if (!persist) return result;

    // One durable encrypted-wallet write covers the complete inbound batch.
    // No destructive relay acknowledgement is attempted until that write has
    // succeeded, preserving crash safety without quadratic serialization and
    // disk wear under a high-volume authenticated sender.
    if (batch_state_changed) save(value);
    for (const auto& pending: pending_acks)
    {
      cryptonote::COMMAND_RPC_SALCHAT_ACK::request ack;
      cryptonote::COMMAND_RPC_SALCHAT_ACK::response ack_response;
      ack.message_id = to_hex(pending.message_id);
      ack.ack_token = to_hex(pending.ack_token);
      m_wallet.invoke_http_json_rpc("/json_rpc", "salchat_ack_envelope", ack, ack_response);
    }

    // Retry durable delivery receipts after inbound messages are safely stored.
    bool receipts_changed = false;
    for (auto it = value.pending_receipts.begin(); it != value.pending_receipts.end();)
    {
      const auto destination = std::find_if(value.contacts.begin(), value.contacts.end(),
        [&](const contact& item) { return item.id == it->contact_id; });
      if (destination == value.contacts.end() || destination->blocked ||
          (now >= it->created_at && now - it->created_at > cryptonote::SALCHAT_MAX_TTL_SECONDS))
      {
        it = value.pending_receipts.erase(it);
        receipts_changed = true;
        continue;
      }
      cryptonote::salchat_p2p_envelope receipt_envelope;
      std::string receipt_error;
      if (!encrypt_payload(account_keys.k_generate_image, account_keys.k_prove_spend,
          message_secret,
          account_keys.m_carrot_main_address.m_spend_public_key,
          account_keys.m_carrot_main_address.m_view_public_key, *destination, m_wallet.nettype(),
          message_type::delivery_receipt, to_hex(it->message_id),
          cryptonote::SALCHAT_MAX_TTL_SECONDS, now,
          chain_height, receipt_envelope, receipt_error))
      { ++it; continue; }
      cryptonote::COMMAND_RPC_SALCHAT_SUBMIT::request request;
      cryptonote::COMMAND_RPC_SALCHAT_SUBMIT::response response;
      request.envelope = to_rpc(receipt_envelope);
      if (!m_wallet.invoke_http_json_rpc("/json_rpc", "salchat_submit_envelope", request, response) || !response.accepted)
      { ++it; continue; }
      it = value.pending_receipts.erase(it);
      receipts_changed = true;
    }
    if (receipts_changed) save(value);
    return result;
  }

  std::vector<message> service::messages(const std::string& contact_text, std::size_t limit) const
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    if (limit == 0 || limit > 1000) throw std::runtime_error("message limit must be between 1 and 1000");
    crypto::hash filter{}; const bool filtered = !contact_text.empty();
    if (filtered && !from_hex(contact_text, filter)) throw std::runtime_error("invalid contact ID");
    const auto value = load(); std::vector<message> out;
    for (auto it = value.messages.rbegin(); it != value.messages.rend() && out.size() < limit; ++it)
      if (!filtered || it->contact_id == filter) out.push_back(*it);
    return out;
  }

  bool service::get_message(const std::string& id, message& out) const
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    crypto::hash parsed{}; if (!from_hex(id, parsed)) throw std::runtime_error("invalid message ID");
    const auto value = load(); const auto found = std::find_if(value.messages.begin(), value.messages.end(), [&](const message& m){ return m.id == parsed; });
    if (found == value.messages.end()) return false;
    out = *found;
    return true;
  }

  bool service::delete_message(const std::string& id)
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    crypto::hash parsed{}; if (!from_hex(id, parsed)) throw std::runtime_error("invalid message ID");
    auto value = load(); const auto old = value.messages.size();
    value.messages.erase(std::remove_if(value.messages.begin(), value.messages.end(), [&](const message& m){ return m.id == parsed; }), value.messages.end());
    if (value.messages.size() == old) return false;
    save(value);
    return true;
  }

  std::size_t service::message_count() const
  {
    const std::lock_guard<std::recursive_mutex> lock(state_mutex);
    return load().messages.size();
  }

  bool service::daemon_status(bool& enabled, std::uint64_t& cached, std::string& error) const
  {
    cryptonote::COMMAND_RPC_SALCHAT_STATUS::request request; cryptonote::COMMAND_RPC_SALCHAT_STATUS::response response;
    if (!m_wallet.invoke_http_json_rpc("/json_rpc", "salchat_get_status", request, response))
    { error = "daemon RPC unavailable"; return false; }
    enabled = response.enabled; cached = response.cached_messages; error.clear(); return true;
  }
}
