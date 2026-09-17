// Copyright (c) 2026, Salvium
// SPDX-License-Identifier: BSD-3-Clause
#include "gtest/gtest.h"
#include "net/http_client.h"
#include <thread>

namespace
{
// Feed real HTTP wire data in fragments without opening a network socket.
class response_stream
{
  std::string data;
public:
  inline static std::chrono::milliseconds delay{0};
  bool connect(const std::string&, const std::string&, std::chrono::milliseconds) { return true; }
  bool disconnect() { return true; }
  bool send(boost::string_ref, std::chrono::milliseconds) { return true; }
  bool is_connected(bool* ssl = nullptr) { if (ssl) *ssl = false; return true; }
  void set_ssl(epee::net_utils::ssl_options_t) {}
  uint64_t get_bytes_sent() const { return 0; }
  uint64_t get_bytes_received() const { return 0; }
  void set_test_data(const std::string& value) { data = value; }
  bool recv(std::string& out, std::chrono::milliseconds)
  {
    if (delay.count() != 0) std::this_thread::sleep_for(delay);
    out = data.substr(0, 7);
    data.erase(0, out.size());
    return true;
  }
};
using client = epee::net_utils::http::http_simple_client_template<response_stream>;
bool receive(client& http, const std::string& wire)
{
  return http.test(wire, std::chrono::milliseconds(100));
}
const std::string ok = "HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nOK";
}

TEST(http_client_limits, valid_framing_and_response_reuse)
{
  client http;
  http.set_response_limits(32, 128);
  for (const auto& wire : {ok,
      std::string("HTTP/1.1 200 OK\r\nTransfer-Encoding: chunked\r\n\r\n2\r\nOK\r\n0\r\n\r\n"),
      std::string("HTTP/1.1 200 OK\r\nConnection: close\r\n\r\nOK")})
  {
    EXPECT_TRUE(receive(http, wire));
    EXPECT_TRUE(receive(http, ok));
  }
}

TEST(http_client_limits, malformed_or_truncated_response_fails_and_recovers)
{
  client http;
  for (const auto& wire : {std::string("invalid\r\nContent-Length: 0\r\n\r\n"),
      std::string("HTTP/1.1 200 OK\r\nContent-Length: 2\r\nInvalid Header\r\n\r\nOK"),
      std::string("HTTP/1.1 200 OK\r\nContent-Length: 2\rInvalid: value\r\n\r\nOK"),
      std::string("HTTP/1.1 200 OK\r\nContent-Length: -1\r\n\r\n"),
      std::string("HTTP/1.1 200 OK\r\nContent-Length: +2\r\n\r\nOK"),
      std::string("HTTP/1.1 200 OK\r\nContent-Length: 2x\r\n\r\nOK"),
      std::string("HTTP/1.1 200 OK\r\nContent-Length: 18446744073709551616\r\n\r\n"),
      std::string("HTTP/1.1 200 OK\r\nContent-Length: 4\r\n\r\nOK"),
      std::string("HTTP/1.1 200 OK\r\nTransfer-Encoding: chunked\r\n\r\n4\r\nOK"),
      std::string("HTTP/1.1 200 OK\r\nContent-Encoding: gzip\r\nContent-Length: 2\r\n\r\nOK")})
  {
    EXPECT_FALSE(receive(http, wire)) << wire;
    EXPECT_TRUE(receive(http, ok));
  }
}

TEST(http_client_limits, limits_advertised_chunked_and_close_delimited_bodies)
{
  client http;
  http.set_response_limits(2, 128);
  for (const auto& wire : {std::string("HTTP/1.1 200 OK\r\nContent-Length: 3\r\n\r\n"),
      std::string("HTTP/1.1 200 OK\r\nTransfer-Encoding: chunked\r\n\r\n2\r\nOK\r\n1\r\nX\r\n0\r\n\r\n"),
      std::string("HTTP/1.1 200 OK\r\nConnection: close\r\n\r\nXXX")})
  {
    EXPECT_FALSE(receive(http, wire));
    EXPECT_TRUE(receive(http, ok));
  }
}

TEST(http_client_limits, limits_unterminated_headers_and_chunk_metadata)
{
  client http;
  http.set_response_limits(256, 64);
  EXPECT_FALSE(receive(http, "HTTP/1.1 200 OK\r\nX-Long: " + std::string(100, 'x')));
  EXPECT_TRUE(receive(http, ok));
  EXPECT_FALSE(receive(http, "HTTP/1.1 200 OK\r\nTransfer-Encoding: chunked\r\n\r\n" + std::string(100, '1')));
  EXPECT_TRUE(receive(http, ok));
}

TEST(http_client_limits, rejected_stream_data_and_headers_propagate_failure)
{
  struct reject_body : client { bool handle_target_data(std::string&) override { return false; } } body;
  struct reject_header : client
  {
    bool on_header(const epee::net_utils::http::http_response_info&) override { return false; }
  } header;
  EXPECT_FALSE(receive(header, ok));
  EXPECT_FALSE(receive(body, ok));
  EXPECT_FALSE(receive(body, "HTTP/1.1 200 OK\r\nConnection: close\r\n\r\nOK"));
  EXPECT_FALSE(receive(body, "HTTP/1.1 200 OK\r\nTransfer-Encoding: chunked\r\n\r\n2\r\nOK\r\n0\r\n\r\n"));
}

TEST(http_client_limits, timeout_covers_the_whole_response)
{
  client http;
  response_stream::delay = std::chrono::milliseconds(5);
  EXPECT_FALSE(http.test(ok, std::chrono::milliseconds(8)));
  response_stream::delay = std::chrono::milliseconds(0);
  EXPECT_TRUE(receive(http, ok));
  http.set_total_response_timeout(false);
  response_stream::delay = std::chrono::milliseconds(5);
  EXPECT_TRUE(http.test(ok, std::chrono::milliseconds(8)));
  response_stream::delay = std::chrono::milliseconds(0);
}
