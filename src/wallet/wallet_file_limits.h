// Copyright (c) 2026, The Salvium Project
#pragma once
#include <cstddef>
namespace tools { namespace wallet_file_limits {
  // Limits on encoded, externally supplied files before allocation/PEM decode.
  constexpr std::size_t transaction = 32 * 1024 * 1024;
  constexpr std::size_t proof = 1024 * 1024;
  constexpr std::size_t exchange = 128 * 1024 * 1024;
  constexpr std::size_t signed_message = 16 * 1024 * 1024;
  constexpr std::size_t token_metadata = 1024 * 1024;
  constexpr std::size_t keys = 16 * 1024 * 1024;
}}
