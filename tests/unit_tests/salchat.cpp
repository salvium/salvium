#include "gtest/gtest.h"

#include <cstring>
#include "carrot_core/account_secrets.h"
#include "cryptonote_config.h"
#include "cryptonote_protocol/cryptonote_protocol_defs.h"
#include "cryptonote_protocol/salchat_relay.h"
#include "ringct/rctOps.h"
#include "storages/portable_storage_template_helper.h"

namespace
{
  struct test_signer
  {
    crypto::secret_key k_generate_image = rct::rct2sk(rct::skGen());
    crypto::secret_key k_prove_spend = rct::rct2sk(rct::skGen());
  };

  cryptonote::salchat_p2p_envelope valid_envelope(std::uint64_t now,
    std::string ciphertext = "encrypted", const test_signer* requested_signer = nullptr)
  {
    const test_signer generated_signer{};
    const test_signer& signer = requested_signer ? *requested_signer : generated_signer;
    cryptonote::salchat_p2p_envelope e;
    e.created_at=now; e.expires_at=now+cryptonote::SALCHAT_MAX_TTL_SECONDS;
    e.created_height=100;
    e.expires_height=e.created_height+cryptonote::SALCHAT_MESSAGE_LIFETIME_BLOCKS;
    e.hop_limit=3; e.ciphertext=std::move(ciphertext);
    std::memset(&e.recipient_tag,2,sizeof(e.recipient_tag));
    std::memset(&e.ephemeral_public_key,3,sizeof(e.ephemeral_public_key));
    e.nonce.fill(4);
    crypto::public_key public_key{};
    carrot::make_carrot_spend_pubkey(signer.k_generate_image,signer.k_prove_spend,public_key);
    std::memcpy(e.sender_signing_public_key.data(),&public_key,sizeof(public_key));
    e.message_id=cryptonote::make_salchat_message_id(e);
    crypto::hash ack_token{};
    std::memset(&ack_token,5,sizeof(ack_token));
    e.ack_token_hash=cryptonote::make_salchat_ack_token_hash(e.message_id,ack_token);
    crypto::cn_fast_hash(e.ciphertext.data(),e.ciphertext.size(),e.ciphertext_hash);
    EXPECT_TRUE(cryptonote::generate_salchat_signature(
      cryptonote::get_salchat_signature_hash(e),public_key,
      signer.k_generate_image,signer.k_prove_spend,
      e.sender_signature));
    return e;
  }

  crypto::hash valid_ack_token()
  {
    crypto::hash token{};
    std::memset(&token,5,sizeof(token));
    return token;
  }

  unsigned int parse_salchat_enabled(const std::vector<std::string>& arguments)
  {
    boost::program_options::options_description options{"SalChat options"};
    command_line::add_arg(options, cryptonote::arg_salchat_enabled);
    boost::program_options::variables_map values;
    boost::program_options::store(
      boost::program_options::command_line_parser(arguments).options(options).run(), values);
    boost::program_options::notify(values);
    return command_line::get_arg(values, cryptonote::arg_salchat_enabled);
  }
}

TEST(salchat, relay_enable_setting_defaults_on_and_requires_an_explicit_value)
{
  EXPECT_TRUE(cryptonote::salchat_config{}.enabled);
  EXPECT_EQ(parse_salchat_enabled({}), 1u);
  EXPECT_EQ(parse_salchat_enabled({"--salchat-enabled=1"}), 1u);
  EXPECT_EQ(parse_salchat_enabled({"--salchat-enabled=0"}), 0u);
  EXPECT_TRUE(cryptonote::salchat_enabled_from_setting(1));
  EXPECT_FALSE(cryptonote::salchat_enabled_from_setting(0));
  EXPECT_TRUE(cryptonote::valid_salchat_enabled_setting(0));
  EXPECT_TRUE(cryptonote::valid_salchat_enabled_setting(1));
  EXPECT_FALSE(cryptonote::valid_salchat_enabled_setting(2));
  EXPECT_THROW(parse_salchat_enabled({"--salchat-enabled"}), boost::program_options::error);

  const auto envelope = valid_envelope(1000);
  std::string error;
  cryptonote::salchat_relay enabled_by_default;
  EXPECT_EQ(enabled_by_default.insert(envelope, 1000, error), cryptonote::salchat_result::accepted);

  cryptonote::salchat_config disabled_config;
  disabled_config.enabled = cryptonote::salchat_enabled_from_setting(0);
  cryptonote::salchat_relay explicitly_disabled{disabled_config};
  EXPECT_EQ(explicitly_disabled.insert(envelope, 1000, error), cryptonote::salchat_result::disabled);
}

TEST(salchat, validates_and_suppresses_duplicates)
{
  cryptonote::salchat_config config; config.enabled=true;
  cryptonote::salchat_relay relay{config}; std::string error;
  auto e=valid_envelope(1000);
  EXPECT_EQ(relay.insert(e,1000,error),cryptonote::salchat_result::accepted);
  EXPECT_EQ(relay.insert(e,1000,error),cryptonote::salchat_result::duplicate);
}

TEST(salchat, requested_expiry_is_enforced_without_chain_progress)
{
  const auto envelope = valid_envelope(1000);
  cryptonote::salchat_config config;
  cryptonote::salchat_relay relay{config};
  std::string error;
  ASSERT_EQ(relay.insert(envelope, 1000, error), cryptonote::salchat_result::accepted);
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(
    envelope, config, envelope.expires_at, envelope.created_height, error));
  EXPECT_EQ(error, "envelope expired at requested time");
  EXPECT_TRUE(relay.poll({envelope.recipient_tag}, 100,
    envelope.expires_at, envelope.created_height).empty());
  EXPECT_EQ(relay.statistics().cached_messages, 0u);
  EXPECT_FALSE(relay.ack(envelope.message_id, valid_ack_token()));
  EXPECT_EQ(relay.statistics().cached_bytes, 0u);
}

TEST(salchat, wire_format_is_deterministic_and_round_trips)
{
  auto original=valid_envelope(1000);
  epee::byte_slice first, second;
  ASSERT_TRUE(epee::serialization::store_t_to_binary(original,first));
  ASSERT_TRUE(epee::serialization::store_t_to_binary(original,second));
  ASSERT_EQ(first.size(),second.size());
  ASSERT_EQ(std::memcmp(first.data(),second.data(),first.size()),0);
  ASSERT_LE(first.size(),cryptonote::SALCHAT_MAX_PACKET_BYTES);

  cryptonote::salchat_p2p_envelope decoded;
  ASSERT_TRUE(epee::serialization::load_t_from_binary(decoded,epee::to_span(first)));
  EXPECT_EQ(decoded.protocol_version,original.protocol_version);
  EXPECT_EQ(decoded.message_id,original.message_id);
  EXPECT_EQ(decoded.recipient_tag,original.recipient_tag);
  EXPECT_EQ(decoded.ciphertext_hash,original.ciphertext_hash);
  EXPECT_EQ(decoded.ack_token_hash,original.ack_token_hash);
  EXPECT_EQ(decoded.created_at,original.created_at);
  EXPECT_EQ(decoded.expires_at,original.expires_at);
  EXPECT_EQ(decoded.hop_count,original.hop_count);
  EXPECT_EQ(decoded.hop_limit,original.hop_limit);
  EXPECT_EQ(decoded.ephemeral_public_key,original.ephemeral_public_key);
  EXPECT_EQ(decoded.nonce,original.nonce);
  EXPECT_EQ(decoded.ciphertext,original.ciphertext);
  EXPECT_EQ(decoded.sender_signing_public_key,original.sender_signing_public_key);
  EXPECT_EQ(decoded.sender_signature,original.sender_signature);
}

TEST(salchat, maximum_ciphertext_fits_wire_limit)
{
  auto envelope=valid_envelope(1000,
    std::string(cryptonote::SALCHAT_MAX_CIPHERTEXT_BYTES,'x'));
  std::string error="stale error must be cleared";
  cryptonote::salchat_config config; config.enabled=true;
  ASSERT_TRUE(cryptonote::validate_salchat_envelope(envelope,config,1000,error));
  EXPECT_TRUE(error.empty());
  epee::byte_slice wire;
  ASSERT_TRUE(epee::serialization::store_t_to_binary(envelope,wire));
  EXPECT_LE(wire.size(),cryptonote::SALCHAT_MAX_PACKET_BYTES);

  envelope.ciphertext.push_back('x');
  crypto::cn_fast_hash(envelope.ciphertext.data(),envelope.ciphertext.size(),envelope.ciphertext_hash);
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(envelope,config,1000,error));
}

TEST(salchat, sender_bound_replay_keys_resist_cross_sender_cache_poisoning)
{
  cryptonote::salchat_config config; config.enabled=true;
  cryptonote::salchat_relay relay{config}; std::string error;
  auto alice=valid_envelope(1000,"identical opaque ciphertext");
  auto mallory=valid_envelope(1000,"identical opaque ciphertext");
  ASSERT_EQ(alice.ciphertext_hash,mallory.ciphertext_hash);
  ASSERT_NE(alice.sender_signing_public_key,mallory.sender_signing_public_key);
  ASSERT_NE(alice.message_id,mallory.message_id);
  EXPECT_EQ(relay.insert(alice,1000,error),cryptonote::salchat_result::accepted);
  EXPECT_EQ(relay.insert(mallory,1000,error),cryptonote::salchat_result::accepted);

  auto copied_id=valid_envelope(1000,"different ciphertext");
  copied_id.message_id=alice.message_id;
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(copied_id,config,1000,error));
  EXPECT_EQ(error,"message id is not bound to sender and envelope");
}

TEST(salchat, authenticates_every_immutable_envelope_field)
{
  cryptonote::salchat_config config; config.enabled=true;
  std::string error;
  const auto original=valid_envelope(1000);
  ASSERT_TRUE(cryptonote::validate_salchat_envelope(original,config,1000,error));

  auto relayed=original; ++relayed.hop_count;
  EXPECT_TRUE(cryptonote::validate_salchat_envelope(relayed,config,1000,error));

  auto changed_tag=original;
  reinterpret_cast<unsigned char*>(&changed_tag.recipient_tag)[0]^=1;
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(changed_tag,config,1000,error));
  EXPECT_EQ(error,"message id is not bound to sender and envelope");

  auto changed_ciphertext=original;
  changed_ciphertext.ciphertext[0]^=1;
  crypto::cn_fast_hash(changed_ciphertext.ciphertext.data(),changed_ciphertext.ciphertext.size(),changed_ciphertext.ciphertext_hash);
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(changed_ciphertext,config,1000,error));
  EXPECT_EQ(error,"invalid sender signature");

  auto changed_hop_limit=original; ++changed_hop_limit.hop_limit;
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(changed_hop_limit,config,1000,error));
  EXPECT_EQ(error,"invalid sender signature");

  auto changed_ack_hash=original;
  reinterpret_cast<unsigned char*>(&changed_ack_hash.ack_token_hash)[0]^=1;
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(changed_ack_hash,config,1000,error));
  EXPECT_EQ(error,"invalid sender signature");

  auto forged=original; forged.sender_signature.fill(0x5a);
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(forged,config,1000,error));
  EXPECT_EQ(error,"invalid sender signature");

  auto changed_signature=original; changed_signature.sender_signature.back()^=1;
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(changed_signature,config,1000,error));
  EXPECT_EQ(error,"invalid sender signature");
}

TEST(salchat, protocol_constants_are_stable)
{
  EXPECT_EQ(cryptonote::SALCHAT_PROTOCOL_VERSION,4u);
  EXPECT_EQ(cryptonote::NOTIFY_SALCHAT_ENVELOPE::ID,2011);
  EXPECT_EQ(cryptonote::SALCHAT_HASH_BYTES,32u);
  EXPECT_EQ(cryptonote::SALCHAT_ACK_TOKEN_BYTES,32u);
  EXPECT_EQ(cryptonote::SALCHAT_NONCE_BYTES,24u);
  EXPECT_EQ(cryptonote::SALCHAT_SIGNATURE_BYTES,96u);
  EXPECT_EQ(cryptonote::SALCHAT_MAX_POLL_TAGS,192u);
}

TEST(salchat, rejects_non_v4_envelopes)
{
  cryptonote::salchat_config config; config.enabled=true;
  auto envelope=valid_envelope(1000);
  envelope.protocol_version=2;
  std::string error;
  EXPECT_FALSE(cryptonote::validate_salchat_envelope(envelope,config,1000,100,error));
  EXPECT_EQ(error,"unsupported protocol version");
}

TEST(salchat, capability_is_explicit_and_collision_free)
{
  EXPECT_EQ(get_p2p_support_flags(false), static_cast<uint32_t>(P2P_SUPPORT_FLAGS));
  EXPECT_EQ(get_p2p_support_flags(false) & P2P_SUPPORT_FLAG_SALCHAT_V4, 0u);
  EXPECT_NE(get_p2p_support_flags(true) & P2P_SUPPORT_FLAG_SALCHAT_V4, 0u);
  EXPECT_EQ(get_p2p_support_flags(true), 0x03u);
  EXPECT_EQ(get_p2p_support_flags(true) & P2P_SUPPORT_FLAG_FLUFFY_BLOCKS,
            static_cast<uint32_t>(P2P_SUPPORT_FLAG_FLUFFY_BLOCKS));
}

TEST(salchat, rejects_expired_bad_hash_and_hop_limit)
{
  cryptonote::salchat_config config; config.enabled=true;
  cryptonote::salchat_relay relay{config}; std::string error;
  auto expired=valid_envelope(1000);
  EXPECT_EQ(relay.insert(expired,1100,expired.expires_height,error),cryptonote::salchat_result::malformed);
  auto bad_hash=valid_envelope(1100); bad_hash.ciphertext_hash=crypto::null_hash; error.clear();
  EXPECT_EQ(relay.insert(bad_hash,1100,error),cryptonote::salchat_result::malformed);
  auto hops=valid_envelope(1100); hops.hop_count=4; error.clear();
  EXPECT_EQ(relay.insert(hops,1100,error),cryptonote::salchat_result::malformed);
}

TEST(salchat, polls_by_recipient_and_acknowledges)
{
  cryptonote::salchat_config config; config.enabled=true;
  cryptonote::salchat_relay relay{config}; std::string error;
  auto e=valid_envelope(1000); ASSERT_EQ(relay.insert(e,1000,error),cryptonote::salchat_result::accepted);
  EXPECT_EQ(relay.poll({e.recipient_tag},10,1000).size(),1);
  crypto::hash wrong_token{};
  EXPECT_FALSE(relay.ack(e.message_id,wrong_token));
  EXPECT_EQ(relay.poll({e.recipient_tag},10,1000).size(),1);
  crypto::hash ack_token{};
  std::memset(&ack_token,5,sizeof(ack_token));
  EXPECT_TRUE(relay.ack(e.message_id,ack_token));
  EXPECT_TRUE(relay.poll({e.recipient_tag},10,1000).empty());
  error.clear();
  EXPECT_EQ(relay.insert(e,1000,error),cryptonote::salchat_result::duplicate);
}

TEST(salchat, backlogs_are_drained_in_rpc_sized_batches)
{
  cryptonote::salchat_config config;
  config.enabled=true;
  config.max_per_recipient=128;
  config.max_per_sender_recipient=128;
  cryptonote::salchat_relay relay{config};
  std::string error;
  const test_signer sender{};
  const auto token=valid_ack_token();
  crypto::hash recipient_tag{};

  for (std::uint64_t i=0;i<101;++i)
  {
    auto envelope=valid_envelope(1000+i,"batch-"+std::to_string(i),&sender);
    if (i==0) recipient_tag=envelope.recipient_tag;
    ASSERT_EQ(envelope.recipient_tag,recipient_tag);
    ASSERT_EQ(relay.insert(envelope,1100,error),cryptonote::salchat_result::accepted) << error;
  }

  const auto first=relay.poll({recipient_tag},100,1100);
  ASSERT_EQ(first.size(),100u);
  for (const auto& envelope:first)
    ASSERT_TRUE(relay.ack(envelope.message_id,token));

  const auto second=relay.poll({recipient_tag},100,1100);
  ASSERT_EQ(second.size(),1u);
  ASSERT_TRUE(relay.ack(second.front().message_id,token));
  EXPECT_TRUE(relay.poll({recipient_tag},100,1100).empty());
}

TEST(salchat, enforces_peer_byte_and_packet_buckets)
{
  cryptonote::salchat_config config;
  config.enabled=true;
  config.max_peer_kbps=1;
  config.max_global_kbps=1024;
  cryptonote::salchat_relay relay{config};

  EXPECT_TRUE(relay.allow_peer_packet("byte-limited-peer",1024));
  EXPECT_TRUE(relay.allow_peer_packet("byte-limited-peer",1024));
  EXPECT_FALSE(relay.allow_peer_packet("byte-limited-peer",1));

  for (unsigned int i=0;i<64;++i)
    EXPECT_TRUE(relay.allow_peer_packet("packet-limited-peer",1));
  EXPECT_FALSE(relay.allow_peer_packet("packet-limited-peer",1));
  // A reconnect from the same host must not reset this bucket.
  EXPECT_FALSE(relay.allow_peer_packet("packet-limited-peer",1));

  // Response bytes share the peer byte budget without pretending each chunk
  // is a separate inbound packet.
  EXPECT_TRUE(relay.allow_peer_bytes("response-limited-peer",1024));
  EXPECT_TRUE(relay.allow_peer_bytes("response-limited-peer",1024));
  EXPECT_FALSE(relay.allow_peer_bytes("response-limited-peer",1));
}

TEST(salchat, enforces_global_outbound_bucket)
{
  cryptonote::salchat_config config;
  config.enabled=true;
  config.max_peer_kbps=1;
  config.max_global_kbps=1;
  cryptonote::salchat_relay relay{config};

  EXPECT_TRUE(relay.allow_global_bytes(1024));
  EXPECT_TRUE(relay.allow_global_bytes(1024));
  EXPECT_FALSE(relay.allow_global_bytes(1));
  EXPECT_FALSE(relay.allow_global_bytes(2049));
}

TEST(salchat, aggregate_packet_bucket_bounds_many_source_cpu_work)
{
  cryptonote::salchat_config config;
  config.enabled=true;
  cryptonote::salchat_relay relay{config};

  for (unsigned int i=0;i<512;++i)
    EXPECT_TRUE(relay.allow_peer_packet("source-"+std::to_string(i),1));
  EXPECT_FALSE(relay.allow_peer_packet("source-overflow",1));
}

TEST(salchat, bounded_replay_history_does_not_lock_the_relay)
{
  cryptonote::salchat_config config;
  config.enabled=true;
  config.max_cache_messages=2;
  cryptonote::salchat_relay relay{config};
  std::string error;
  const auto token=valid_ack_token();

  // More completed messages than the history capacity must not make every
  // future submission fail until TTL expiry.
  for (unsigned int i=0;i<8;++i)
  {
    auto envelope=valid_envelope(1000,"ciphertext-"+std::to_string(i));
    ASSERT_EQ(relay.insert(envelope,1000,error),cryptonote::salchat_result::accepted) << error;
    ASSERT_TRUE(relay.ack(envelope.message_id,token));
  }

  // Active entries have a separate exact replay set, so bounded completed
  // history cannot allow a duplicate copy into the live cache.
  auto active=valid_envelope(1000,"still-active");
  ASSERT_EQ(relay.insert(active,1000,error),cryptonote::salchat_result::accepted);
  for (unsigned int i=0;i<8;++i)
  {
    auto envelope=valid_envelope(1000,"newer-"+std::to_string(i));
    ASSERT_EQ(relay.insert(envelope,1000,error),cryptonote::salchat_result::accepted) << error;
    ASSERT_TRUE(relay.ack(envelope.message_id,token));
  }
  EXPECT_EQ(relay.insert(active,1000,error),cryptonote::salchat_result::duplicate);
}

TEST(salchat, recipient_quota_evicts_oldest_instead_of_locking_delivery)
{
  cryptonote::salchat_config config;
  config.enabled=true;
  config.max_per_recipient=2;
  cryptonote::salchat_relay relay{config};
  std::string error;

  const auto first=valid_envelope(1000,"first");
  const auto second=valid_envelope(1000,"second");
  const auto third=valid_envelope(1000,"third");
  ASSERT_EQ(relay.insert(first,1000,error),cryptonote::salchat_result::accepted);
  ASSERT_EQ(relay.insert(second,1000,error),cryptonote::salchat_result::accepted);
  ASSERT_EQ(relay.insert(third,1000,error),cryptonote::salchat_result::accepted) << error;

  const auto waiting=relay.poll({first.recipient_tag},10,1000);
  ASSERT_EQ(waiting.size(),2u);
  EXPECT_EQ(waiting[0].message_id,second.message_id);
  EXPECT_EQ(waiting[1].message_id,third.message_id);
  EXPECT_EQ(relay.statistics().evicted,1u);
}

TEST(salchat, one_sender_cannot_occupy_an_entire_recipient_queue)
{
  cryptonote::salchat_config config;
  config.enabled=true;
  config.max_per_recipient=8;
  config.max_per_sender_recipient=2;
  cryptonote::salchat_relay relay{config};
  std::string error;
  const test_signer sender{};

  const auto first=valid_envelope(1000,"first",&sender);
  const auto second=valid_envelope(1001,"second",&sender);
  const auto third=valid_envelope(1002,"third",&sender);
  ASSERT_EQ(relay.insert(first,1002,error),cryptonote::salchat_result::accepted);
  ASSERT_EQ(relay.insert(second,1002,error),cryptonote::salchat_result::accepted);
  ASSERT_EQ(relay.insert(third,1002,error),cryptonote::salchat_result::accepted) << error;

  const auto waiting=relay.poll({first.recipient_tag},10,1002);
  ASSERT_EQ(waiting.size(),2u);
  EXPECT_EQ(waiting[0].message_id,second.message_id);
  EXPECT_EQ(waiting[1].message_id,third.message_id);
  EXPECT_EQ(relay.statistics().evicted,1u);
}
