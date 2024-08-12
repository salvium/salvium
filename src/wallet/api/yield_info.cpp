// Copyright (c) 2024, Salvium (author: SRCG)
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
//
// Parts of this file are originally copyright (c) 2012-2013 The Cryptonote developers

#include "yield_info.h"
#include "wallet.h"
#include "common_defines.h"

#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_basic/cryptonote_basic_impl.h"
#include "common/base58.h"

#include <memory>
#include <vector>
#include <sstream>
#include <boost/format.hpp>
#include <boost/filesystem.hpp>

using namespace std;

namespace Monero {

  YieldInfo::~YieldInfo() {}

  YieldInfoImpl::YieldInfoImpl(WalletImpl &wallet)
    : m_wallet(wallet)
  {
    m_status = Status_Ok;
    m_burnt = 0;
    m_locked = 0;
    m_supply = 0;
    m_yield = 0;
    m_yield_per_stake = 0;
    m_num_entries = 0;
  }

  YieldInfoImpl::~YieldInfoImpl()
  {

  }

  int YieldInfoImpl::status() const
  {
    return m_status;
  }

  string YieldInfoImpl::errorString() const
  {
    return m_errorString;
  }

  std::string YieldInfoImpl::period() const
  {
    // Calculate the number of entries as a human-readable time period
    uint64_t ts = m_num_entries * 120;
    std::string result;
    stringstream ss;
    ss << std::setfill('0') << std::setw(2) << (ts / 86400)
       << ":" << std::setw(2) << ((ts % 86400) / 3600)
       << ":" << std::setw(2) << ((ts % 3600) / 60)
       << ":" << std::setw(2) << (ts % 60) << " (DD:HH:MM:SS)";
    return ss.str();
  }

  bool YieldInfoImpl::update()
  {
    return false;
  }

  uint64_t YieldInfoImpl::burnt() const
  {
    return m_burnt;
  }

  uint64_t YieldInfoImpl::locked() const
  {
    return m_locked;
  }

  uint64_t YieldInfoImpl::supply() const
  {
    return m_supply;
  }

  uint64_t YieldInfoImpl::ybi_data_size() const
  {
    return m_num_entries;
  }

  uint64_t YieldInfoImpl::yield() const
  {
    return m_yield;
  }

  uint64_t YieldInfoImpl::yield_per_stake() const
  {
    return m_yield_per_stake;
  }

  std::vector<std::tuple<size_t, std::string, uint64_t, uint64_t>> YieldInfoImpl::payouts() const
  {
    return m_payouts;
  }

}
