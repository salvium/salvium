// Copyright (c) 2019, Haven Protocol
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

#pragma once

#include <vector>

#include "serialization.h"
#include "debug_archive.h"
#include "oracle/pricing_record.h"
#include "cryptonote_config.h"

// read
template <template <bool> class Archive>
bool do_serialize(Archive<false> &ar, oracle::supply_data &sd, uint8_t version)
{
  ar.serialize_varint(sd.sal);
  if (!ar.good())
    return false;
  ar.serialize_varint(sd.vsd);
  if (!ar.good())
    return false;
  return true;
}

// write
template <template <bool> class Archive>
bool do_serialize(Archive<true> &ar, oracle::supply_data &sd, uint8_t version)
{
  if (!ar.good())
    return false;
  ar.serialize_varint(sd.sal);
  ar.serialize_varint(sd.vsd);
  if (!ar.good())
    return false;
  return true;
}

// read
template <template <bool> class Archive>
bool do_serialize(Archive<false> &ar, oracle::asset_data &ad, uint8_t version)
{
  ar.serialize_string(ad.asset_type);
  if (!ar.good())
    return false;
  ar.serialize_varint(ad.spot_price);
  if (!ar.good())
    return false;
  ar.serialize_varint(ad.ma_price);
  if (!ar.good())
    return false;
  return true;
}

// write
template <template <bool> class Archive>
bool do_serialize(Archive<true> &ar, oracle::asset_data &ad, uint8_t version)
{
  if (!ar.good())
    return false;
  ar.serialize_string(ad.asset_type);
  if (!ar.good())
    return false;
  ar.serialize_varint(ad.spot_price);
  if (!ar.good())
    return false;
  ar.serialize_varint(ad.ma_price);
  if (!ar.good())
    return false;
  return true;
}

// read
template <template <bool> class Archive>
bool do_serialize(Archive<false> &ar, oracle::pricing_record &pr, uint8_t version)
{
  // very basic sanity checks
  if (!ar.good())
    return false;
  ar.serialize_varint(pr.pr_version);
  if (!ar.good())
    return false;
  ar.serialize_varint(pr.height);
  if (!ar.good())
    return false;
  if (!do_serialize(ar, pr.supply, version))
    return false;
  /*
  // The next line should never do anything, but better safe than sorry
  pr.asset_data.empty();
  size_t asset_count;
  ar.begin_array(asset_count);
  if (!ar.good())
    return false;
  for (size_t idx=0; idx<asset_count; idx++) {
    if (idx > 0) ar.delimit_array();
    asset_data ad;
    if (!do_serialize(ar, ad, version))
      return false;
    pr.asset_data.emplace_back(ad);
  }
  ar.end_array();
  */
  if (!do_serialize_container(ar, pr.assets))
    return false;
  ar.serialize_varint(pr.timestamp);
  if (!ar.good())
    return false;
  if (!do_serialize_container(ar, pr.signature))
    return false;
  return true;
}

// write
template <template <bool> class Archive>
bool do_serialize(Archive<true> &ar, oracle::pricing_record &pr, uint8_t version)
{
  // very basic sanity checks
  if (!ar.good())
    return false;
  ar.serialize_varint(pr.pr_version);
  if (!ar.good())
    return false;
  ar.serialize_varint(pr.height);
  if (!ar.good())
    return false;
  if (!do_serialize(ar, pr.supply, version))
    return false;
  if (!do_serialize_container(ar, pr.assets))
    return false;
  ar.serialize_varint(pr.timestamp);
  if (!ar.good())
    return false;
  pr.signature.empty();
  if (!do_serialize_container(ar, pr.signature))
    return false;
  return true;
}

//BLOB_SERIALIZER(oracle::supply_data);
//BLOB_SERIALIZER(oracle::asset_data);
//BLOB_SERIALIZER(oracle::pricing_record);
