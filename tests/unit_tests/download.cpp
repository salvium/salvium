// Copyright (c) 2026, Salvium
// SPDX-License-Identifier: BSD-3-Clause
#include "gtest/gtest.h"
#include <boost/asio.hpp>
#include <boost/filesystem.hpp>
#include <atomic>
#include <fstream>
#include <thread>
#include "common/download.h"

namespace
{
class one_response_server
{
  boost::asio::io_context io;
  boost::asio::ip::tcp::acceptor acceptor{io, {boost::asio::ip::address_v4::loopback(), 0}};
  std::atomic<bool> stop{false};
  std::thread worker;
public:
  std::string request;
  std::string error;
  explicit one_response_server(const std::string& wire)
  {
    acceptor.non_blocking(true);
    worker = std::thread([this, wire] {
      try
      {
        boost::asio::ip::tcp::socket socket(io);
        const auto deadline = std::chrono::steady_clock::now() + std::chrono::seconds(10);
        boost::system::error_code ec;
        while (!stop && std::chrono::steady_clock::now() < deadline)
        {
          acceptor.accept(socket, ec);
          if (!ec) break;
          if (ec != boost::asio::error::would_block) throw boost::system::system_error(ec);
          std::this_thread::sleep_for(std::chrono::milliseconds(1));
        }
        if (!socket.is_open()) throw std::runtime_error("download client did not connect");
        socket.non_blocking(true);
        while (!stop && std::chrono::steady_clock::now() < deadline && request.size() < 65536)
        {
          char buffer[1024];
          const size_t size = socket.read_some(boost::asio::buffer(buffer), ec);
          if (ec == boost::asio::error::would_block)
          {
            std::this_thread::sleep_for(std::chrono::milliseconds(1));
            continue;
          }
          if (ec) throw boost::system::system_error(ec);
          request.append(buffer, size);
          if (request.find("\r\n\r\n") != std::string::npos)
          {
            boost::asio::write(socket, boost::asio::buffer(wire));
            return;
          }
        }
        throw std::runtime_error("download request was incomplete");
      }
      catch (const std::exception& e) { error = e.what(); }
    });
  }
  std::string url() const { return "http://127.0.0.1:" + std::to_string(acceptor.local_endpoint().port()) + "/file"; }
  void finish() { stop = true; if (worker.joinable()) worker.join(); }
  ~one_response_server() { finish(); }
};

struct download_files
{
  const boost::filesystem::path directory = boost::filesystem::temp_directory_path() /
      boost::filesystem::unique_path("salvium-download-%%%%-%%%%-%%%%");
  const std::string file = (directory / "file").string();
  download_files()
  {
    boost::filesystem::create_directory(directory);
    std::ofstream output(file, std::ios::binary);
    output << "abc";
  }
  ~download_files() { boost::system::error_code ignored; boost::filesystem::remove_all(directory, ignored); }
  std::string read() const { std::ifstream input(file, std::ios::binary); return {std::istreambuf_iterator<char>(input), {}}; }
};
}

TEST(download, resumes_only_matching_range)
{
  download_files files;
  one_response_server server("HTTP/1.1 206 Partial Content\r\ncontent-range: bytes 3-5/6\r\nContent-Length: 3\r\nConnection: close\r\n\r\ndef");
  EXPECT_TRUE(tools::download(files.file, server.url()));
  server.finish();
  EXPECT_TRUE(server.error.empty()) << server.error;
  EXPECT_NE(std::string::npos, server.request.find("Range: bytes=3-"));
  EXPECT_EQ("abcdef", files.read());
}

TEST(download, server_ignoring_range_restarts_from_beginning)
{
  download_files files;
  one_response_server server("HTTP/1.1 200 OK\r\nContent-Length: 6\r\nConnection: close\r\n\r\nabcdef");
  EXPECT_TRUE(tools::download(files.file, server.url()));
  server.finish();
  EXPECT_TRUE(server.error.empty()) << server.error;
  EXPECT_EQ("abcdef", files.read());
}

TEST(download, rejected_headers_preserve_partial_file)
{
  for (const auto& response : {
      "HTTP/1.1 206 Partial Content\r\nContent-Range: bytes 1-3/6\r\nContent-Length: 3\r\nConnection: close\r\n\r\nbad",
      "HTTP/1.1 503 Unavailable\r\nContent-Length: 3\r\nConnection: close\r\n\r\nbad"})
  {
    download_files files;
    one_response_server server(response);
    EXPECT_FALSE(tools::download(files.file, server.url()));
    server.finish();
    EXPECT_TRUE(server.error.empty()) << server.error;
    EXPECT_EQ("abc", files.read());
  }
}

#ifdef __linux__
TEST(download, failed_final_flush_is_not_success)
{
  one_response_server server("HTTP/1.1 200 OK\r\nContent-Length: 2\r\nConnection: close\r\n\r\nOK");
  EXPECT_FALSE(tools::download("/dev/full", server.url()));
  server.finish();
  EXPECT_TRUE(server.error.empty()) << server.error;
}
#endif
