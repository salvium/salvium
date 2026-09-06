// Copyright (c) 2019-2022, The Monero Project

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

#pragma once 

#include <cctype>
#include <cwchar>
#include <stdexcept>

namespace tools
{
  template<typename T, typename Transform>
  inline T utf8canonical(const T &s, Transform t = [](wint_t c)->wint_t { return c; })
  {
    T sc = "";
    size_t avail = s.size();
    const char *ptr = s.data();
    wint_t cp = 0;
    int bytes = 1;
    char wbuf[8], *wptr;
    while (avail--)
    {
      if ((*ptr & 0x80) == 0)
      {
        cp = *ptr++;
        bytes = 1;
      }
      else if ((static_cast<unsigned char>(*ptr) & 0xe0) == 0xc0)
      {
        if (avail < 1 || (static_cast<unsigned char>(ptr[1]) & 0xc0) != 0x80)
          throw std::runtime_error("Invalid UTF-8");
        cp = (static_cast<unsigned char>(*ptr++) & 0x1f) << 6;
        cp |= static_cast<unsigned char>(*ptr++) & 0x3f;
        --avail;
        if (cp < 0x80)
          throw std::runtime_error("Invalid UTF-8");
        bytes = 2;
      }
      else if ((static_cast<unsigned char>(*ptr) & 0xf0) == 0xe0)
      {
        if (avail < 2 || (static_cast<unsigned char>(ptr[1]) & 0xc0) != 0x80 ||
            (static_cast<unsigned char>(ptr[2]) & 0xc0) != 0x80)
          throw std::runtime_error("Invalid UTF-8");
        cp = (static_cast<unsigned char>(*ptr++) & 0xf) << 12;
        cp |= (static_cast<unsigned char>(*ptr++) & 0x3f) << 6;
        cp |= static_cast<unsigned char>(*ptr++) & 0x3f;
        avail -= 2;
        if (cp < 0x800 || (cp >= 0xd800 && cp <= 0xdfff))
          throw std::runtime_error("Invalid UTF-8");
        bytes = 3;
      }
      else if ((static_cast<unsigned char>(*ptr) & 0xf8) == 0xf0)
      {
        if (avail < 3 || (static_cast<unsigned char>(ptr[1]) & 0xc0) != 0x80 ||
            (static_cast<unsigned char>(ptr[2]) & 0xc0) != 0x80 ||
            (static_cast<unsigned char>(ptr[3]) & 0xc0) != 0x80)
          throw std::runtime_error("Invalid UTF-8");
        cp = (static_cast<unsigned char>(*ptr++) & 0x7) << 18;
        cp |= (static_cast<unsigned char>(*ptr++) & 0x3f) << 12;
        cp |= (static_cast<unsigned char>(*ptr++) & 0x3f) << 6;
        cp |= static_cast<unsigned char>(*ptr++) & 0x3f;
        avail -= 3;
        if (cp < 0x10000 || cp > 0x10ffff)
          throw std::runtime_error("Invalid UTF-8");
        bytes = 4;
      }
      else
        throw std::runtime_error("Invalid UTF-8");

      cp = t(cp);
      if (cp >= 0xd800 && cp <= 0xdfff)
        throw std::runtime_error("Invalid code point UTF-8 transformation");
      if (cp <= 0x7f)
        bytes = 1;
      else if (cp <= 0x7ff)
        bytes = 2;
      else if (cp <= 0xffff)
        bytes = 3;
      else if (cp <= 0x10ffff)
        bytes = 4;
      else
        throw std::runtime_error("Invalid code point UTF-8 transformation");

      wptr = wbuf;
      switch (bytes)
      {
        case 1: *wptr++ = cp; break;
        case 2: *wptr++ = 0xc0 | (cp >> 6); *wptr++ = 0x80 | (cp & 0x3f); break;
        case 3: *wptr++ = 0xe0 | (cp >> 12); *wptr++ = 0x80 | ((cp >> 6) & 0x3f); *wptr++ = 0x80 | (cp & 0x3f); break;
        case 4: *wptr++ = 0xf0 | (cp >> 18); *wptr++ = 0x80 | ((cp >> 12) & 0x3f); *wptr++ = 0x80 | ((cp >> 6) & 0x3f); *wptr++ = 0x80 | (cp & 0x3f); break;
        default: throw std::runtime_error("Invalid UTF-8");
      }
      *wptr = 0;
      sc.append(wbuf, bytes);
      cp = 0;
      bytes = 1;
    }
    return sc;
  }
}
