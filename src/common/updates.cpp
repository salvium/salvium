// Copyright (c) 2017-2022, The Monero Project
// 
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
// 
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
// 
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#include <boost/algorithm/string.hpp>
#include "misc_log_ex.h"
#include "string_tools.h"
#include "util.h"
#include "dns_utils.h"
#include "updates.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "updates"

namespace tools
{
  namespace
  {
    bool valid_update_version(const std::string& version)
    {
      // Dotted numeric releases, an optional patch letter, and optional
      // alphanumeric prerelease/build labels, e.g. 1.1.3c or 1.1.0-rc2.
      if (version.empty() || version.size() > 64)
        return false;
      const auto digit = [](char c) { return c >= '0' && c <= '9'; };
      const auto letter = [](char c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
      };
      bool numeric = true;
      unsigned int components = 0;
      std::size_t start = 0;
      for (;;)
      {
        const auto separator = version.find_first_of(".-", start);
        const auto end = separator == std::string::npos ? version.size() : separator;
        if (start == end)
          return false;
        std::size_t digits = start;
        while (digits < end && digit(version[digits]))
          ++digits;
        // vercmp converts each field's numeric prefix to int.
        if (digits - start > 9)
          return false;
        if (numeric)
        {
          if (++components > 4 || digits == start)
            return false;
          if (digits != end && (digits + 1 != end || !letter(version[digits]) ||
              (separator != std::string::npos && version[separator] == '.')))
            return false;
        }
        else
        {
          for (auto i = digits; i < end; ++i)
            if (!digit(version[i]) && !letter(version[i]))
              return false;
        }
        if (separator == std::string::npos)
          return components >= 2;
        if (version[separator] == '-')
          numeric = false;
        start = separator + 1;
      }
    }
  }

  bool check_updates(const std::string &software, const std::string &buildtag, std::string &version, std::string &hash)
  {
    std::vector<std::string> records;

    MDEBUG("Checking updates for " << buildtag << " " << software);

    // All four MoneroPulse domains have DNSSEC on and valid
    static const std::vector<std::string> dns_urls = {
        "updates.moneropulse.org",
        "updates.moneropulse.net",
        "updates.moneropulse.fr",
        "updates.moneropulse.de",
        "updates.moneropulse.no",
        "updates.moneropulse.ch",
        "updates.moneropulse.se"
    };

    if (!tools::dns_utils::load_txt_records_from_dns(records, dns_urls))
      return false;

    return parse_update_records(records, software, buildtag, version, hash);
  }

  bool parse_update_records(const std::vector<std::string> &records, const std::string &software,
      const std::string &buildtag, std::string &version, std::string &hash)
  {
    bool found = false;
    for (const auto& record : records)
    {
      std::vector<std::string> fields;
      boost::split(fields, record, boost::is_any_of(":"));
      if (fields.size() != 4)
      {
        MWARNING("Updates record does not have 4 fields: " << record);
        continue;
      }

      if (software != fields[0] || buildtag != fields[1])
        continue;

      if (!valid_update_version(fields[2]))
      {
        MWARNING("Invalid version in update record");
        continue;
      }

      crypto::hash digest;
      if (!epee::string_tools::hex_to_pod(fields[3], digest))
      {
        MWARNING("Invalid hash: " << fields[3]);
        continue;
      }
      // Download verification compares against the lowercase SHA-256 encoding.
      fields[3] = epee::string_tools::pod_to_hex(digest);

      // use highest version
      if (found)
      {
        int cmp = vercmp(version.c_str(), fields[2].c_str());
        if (cmp > 0)
          continue;
        if (cmp == 0 && hash != fields[3])
          MWARNING("Two matches found for " << software << " version " << version << " on " << buildtag);
      }

      version = fields[2];
      hash = fields[3];

      MINFO("Found new version " << version << " with hash " << hash);
      found = true;
    }
    return found;
  }

  std::string get_update_url(const std::string &software, const std::string &subdir, const std::string &buildtag, const std::string &version, bool user)
  {
    const char *base = user ? "https://downloads.salvium.io/" : "https://updates.salvium.io/";
#ifdef _WIN32
    static const char *extension = strncmp(buildtag.c_str(), "source", 6) ? (strncmp(buildtag.c_str(), "install-", 8) ? ".zip" : ".exe") : ".tar.bz2";
#elif defined(__APPLE__)
    static const char *extension = strncmp(software.c_str(), "salvium-gui", 10) ? ".tar.bz2" : ".dmg";
#else
    static const char extension[] = ".tar.bz2";
#endif

    std::string url;

    url =  base;
    if (!subdir.empty())
      url += subdir + "/";
    url = url + software + "-" + buildtag + "-v" + version + extension;
    return url;
  }
}
