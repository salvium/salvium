// Copyright (c) 2026, The Salvium Project
// Distributed under the BSD 3-Clause license; see LICENSE.

#include "gtest/gtest.h"
#include "wallet/wallet2.h"
#include "serialization/binary_utils.h"

namespace
{
struct refresh_responses
{
  tools::wallet2 *wallet = nullptr;
  std::vector<uint64_t> requested_cursors;
};

class refresh_client final : public epee::net_utils::http::abstract_http_client
{
  std::shared_ptr<refresh_responses> state;
  epee::net_utils::http::http_response_info reply{};
public:
  explicit refresh_client(std::shared_ptr<refresh_responses> state) : state(std::move(state)) {}
  bool set_proxy(const std::string &address) override { return address.empty(); }
  void set_server(std::string, std::string, boost::optional<epee::net_utils::http::login>, epee::net_utils::ssl_options_t) override {}
  void set_auto_connect(bool) override {}
  bool connect(std::chrono::milliseconds) override { return true; }
  bool disconnect() override { return true; }
  bool is_connected(bool *ssl = nullptr) override { if (ssl) *ssl = false; return true; }
  uint64_t get_bytes_sent() const override { return 0; }
  uint64_t get_bytes_received() const override { return 0; }
  bool invoke_get(const boost::string_ref, std::chrono::milliseconds, const std::string&,
      const epee::net_utils::http::http_response_info **, const epee::net_utils::http::fields_list&) override { return false; }
  bool invoke_post(const boost::string_ref uri, const std::string &body, std::chrono::milliseconds timeout,
      const epee::net_utils::http::http_response_info **response, const epee::net_utils::http::fields_list &fields) override
  { return invoke(uri, "POST", body, timeout, response, fields); }

  bool invoke(const boost::string_ref uri, const boost::string_ref, const boost::string_ref body,
      std::chrono::milliseconds, const epee::net_utils::http::http_response_info **response,
      const epee::net_utils::http::fields_list&) override
  {
    using rpc = cryptonote::COMMAND_RPC_GET_BLOCKS_FAST;
    if (uri != "/getblocks.bin")
    {
      ADD_FAILURE() << "Unexpected daemon request: " << uri;
      return false;
    }
    rpc::request request{};
    if (!epee::serialization::load_t_from_binary(request, std::string(body.data(), body.size())))
      return false;
    state->requested_cursors.push_back(request.pool_info_since);
    rpc::response result{};
    result.status = CORE_RPC_STATUS_OK;
    result.start_height = result.current_height = 1;
    result.daemon_time = 1234;
    result.pool_info_extent = rpc::FULL;
    if (state->requested_cursors.size() == 1)
    {
      cryptonote::transaction tx;
      tx.version = 2;
      tx.type = cryptonote::transaction_type::PROTOCOL;
      tx.vin.emplace_back(cryptonote::txin_gen{1});
      rpc::pool_tx_info pool_tx{};
      pool_tx.tx_hash.data[0] = 1;
      std::ostringstream stream;
      binary_archive<true> ar(stream);
      if (!tx.serialize_base(ar)) return false;
      pool_tx.tx_blob = stream.str();
      result.added_pool_txs.push_back(pool_tx);
      // Emulate an API mutation interrupting a refresh with a pool reply in flight.
      state->wallet->suspend_refresh();
    }
    reply.m_response_code = 200;
    epee::byte_slice encoded;
    if (!epee::serialization::store_t_to_binary(result, encoded)) return false;
    reply.m_body.assign(reinterpret_cast<const char *>(encoded.data()), encoded.size());
    *response = &reply;
    return true;
  }
};

class refresh_factory final : public epee::net_utils::http::http_client_factory
{
  std::shared_ptr<refresh_responses> state;
public:
  explicit refresh_factory(std::shared_ptr<refresh_responses> state) : state(std::move(state)) {}
  std::unique_ptr<epee::net_utils::http::abstract_http_client> create() override
  { return std::make_unique<refresh_client>(state); }
};
}

TEST(wallet_refresh, SuspendedPoolBatchForcesFullSnapshotOnRetry)
{
  auto state = std::make_shared<refresh_responses>();
  tools::wallet2 wallet(cryptonote::TESTNET, 1, true, std::make_unique<refresh_factory>(state));
  state->wallet = &wallet;
  wallet.set_offline(true);
  wallet.generate("", "", crypto::secret_key{}, false, false);
  wallet.set_refresh_from_block_height(0);
  ASSERT_TRUE(wallet.init("127.0.0.1:1"));
  wallet.set_offline(false);
  EXPECT_FALSE(wallet.refresh_with_status(false));
  ASSERT_EQ(1, state->requested_cursors.size());
  wallet.resume_refresh();
  EXPECT_TRUE(wallet.refresh_with_status(false));
  ASSERT_EQ(2, state->requested_cursors.size());
  EXPECT_EQ(0, state->requested_cursors.back());
  // Once an uninterrupted batch has been applied, incremental refresh resumes.
  EXPECT_TRUE(wallet.refresh_with_status(false));
  ASSERT_EQ(3, state->requested_cursors.size());
  EXPECT_EQ(1234, state->requested_cursors.back());
}
