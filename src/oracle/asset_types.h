// Copyright (c) 2021, Haven Protocol
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
#include <string>
#include <vector>

namespace oracle {

  const std::vector<std::string> ASSET_TYPES = {"SAL", "SAL1", "BURN"};

  class asset_type_counts
  {

    public:

      // Fields 
      uint64_t SAL;
      uint64_t SAL1;
      uint64_t BURN;

      asset_type_counts() noexcept
        : SAL(0)
        , SAL1(0)
        , BURN(0)
      {
      }

      uint64_t operator[](const std::string asset_type) const noexcept
      {
        if (asset_type == "SAL") {
          return SAL;
        } else if (asset_type == "SAL1") {
          return SAL1;
        } else if (asset_type == "BURN") {
          return BURN;
        }

        return 0;
      }

      void add(const std::string asset_type, const uint64_t val)
      {
        if (asset_type == "SAL") {
          SAL += val;
        } else if (asset_type == "SAL1") {
          SAL1 += val;
        } else if (asset_type == "BURN") {
          BURN += val;
        }
      }
  };
}
