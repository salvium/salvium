// Copyright (c) 2026, The Salvium Project
#pragma once
#include <string>
namespace net
{
  inline void canonicalize_host(std::string& host)
  {
    // DNS and base32 names are ASCII; avoid locale-dependent case conversion.
    for (char& c : host) if (c >= 'A' && c <= 'Z') c += 'a' - 'A';
  }
}
