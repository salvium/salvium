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
#include "wallet/wallet2.h"
#include "serialization/binary_archive.h"
#include "file_io_utils.h"
#include "fuzzer.h"

BEGIN_INIT_SIMPLE_FUZZER()
END_INIT_SIMPLE_FUZZER()

BEGIN_SIMPLE_FUZZER()
  if (len <= 1024 * 1024)
  {
    std::tuple<uint64_t, uint64_t, std::vector<tools::wallet2::exported_transfer_details>> outputs;
    binary_archive<false> ar{{buf, len}};
    if (::serialization::serialize(ar, outputs) && ar.good())
    {
      // A fresh wallet prevents one fuzz input from influencing another.
      tools::wallet2 wallet(cryptonote::MAINNET, 1);
      wallet.set_subaddress_lookahead(1, 1);
      wallet.generate("", "");
      const epee::wipeable_string password("");
      tools::wallet_keys_unlocker unlocker(wallet, &password);
      const auto addresses = wallet.get_subaddress_map_ref();
      try { wallet.import_outputs(outputs); }
      catch (const std::exception &)
      {
        tools::wallet2::transfer_container transfers;
        wallet.get_transfers(transfers);
        if (!transfers.empty() || wallet.get_subaddress_map_ref() != addresses)
          std::abort();
      }
    }
  }
END_SIMPLE_FUZZER()
