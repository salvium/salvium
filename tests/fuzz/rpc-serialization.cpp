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

#include <cstdlib>
#include "file_io_utils.h"
#include "storages/portable_storage.h"
#include "fuzzer.h"

BEGIN_INIT_SIMPLE_FUZZER()
END_INIT_SIMPLE_FUZZER()

BEGIN_SIMPLE_FUZZER()
  if (len <= 1024 * 1024)
  {
    using storage = epee::serialization::portable_storage;
    const storage::limits_t limits{32, 64, 128};
    const std::string input(reinterpret_cast<const char*>(buf), len);
    storage json_input, binary_input;
    json_input.load_from_json(input, &limits);
    binary_input.load_from_binary({buf, len}, &limits);
    // Arbitrary bytes must survive JSON escaping and decoding. Aborting on a
    // mismatch makes corruption visible to both libFuzzer and corpus replay.
    storage encoded, decoded;
    if (!encoded.set_value("value", std::string(input), nullptr)) std::abort();
    std::string json, output;
    if (!encoded.dump_as_json(json, 0, false) || !decoded.load_from_json(json, &limits) ||
        !decoded.get_value("value", output, nullptr) || output != input)
      std::abort();
  }
END_SIMPLE_FUZZER()
