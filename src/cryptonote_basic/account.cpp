// Copyright (c) 2014-2022, The Monero Project
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

#include <fstream>

#include "include_base_utils.h"
#include "account.h"
#include "warnings.h"
#include "crypto/crypto.h"
#include "crypto/generators.h"
extern "C"
{
#include "crypto/keccak.h"
}
#include "cryptonote_basic_impl.h"
#include "cryptonote_format_utils.h"
#include "cryptonote_config.h"
#include "ringct/rctOps.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "account"

using namespace std;

DISABLE_VS_WARNINGS(4244 4345)

  namespace cryptonote
{

  //-----------------------------------------------------------------
  hw::device& account_keys::get_device() const  {
    return *m_device;
  }
  //-----------------------------------------------------------------
  void account_keys::set_device( hw::device &hwdev)  {
    m_device = &hwdev;
    MCDEBUG("device", "account_keys::set_device device type: "<<typeid(hwdev).name());
  }
  //-----------------------------------------------------------------
  static void derive_key(const crypto::chacha_key &base_key, crypto::chacha_key &key)
  {
    static_assert(sizeof(base_key) == sizeof(crypto::hash), "chacha key and hash should be the same size");
    epee::mlocked<tools::scrubbed_arr<char, sizeof(base_key)+1>> data;
    memcpy(data.data(), &base_key, sizeof(base_key));
    data[sizeof(base_key)] = config::HASH_KEY_MEMORY;
    crypto::generate_chacha_key(data.data(), sizeof(data), key, 1);
  }
  //-----------------------------------------------------------------
  static epee::wipeable_string get_key_stream(const crypto::chacha_key &base_key, const crypto::chacha_iv &iv, size_t bytes)
  {
    // derive a new key
    crypto::chacha_key key;
    derive_key(base_key, key);

    // chacha
    epee::wipeable_string buffer0(std::string(bytes, '\0'));
    epee::wipeable_string buffer1 = buffer0;
    crypto::chacha20(buffer0.data(), buffer0.size(), key, iv, buffer1.data());
    return buffer1;
  }
  //-----------------------------------------------------------------
  void account_keys::xor_with_key_stream(const crypto::chacha_key &key)
  {
    // encrypt a large enough byte stream with chacha20
    epee::wipeable_string key_stream = get_key_stream(key, m_encryption_iv, sizeof(crypto::secret_key) * (2 + m_multisig_keys.size()));
    const char *ptr = key_stream.data();
    for (size_t i = 0; i < sizeof(crypto::secret_key); ++i)
      m_spend_secret_key.data[i] ^= *ptr++;
    for (size_t i = 0; i < sizeof(crypto::secret_key); ++i)
      m_view_secret_key.data[i] ^= *ptr++;
    for (crypto::secret_key &k: m_multisig_keys)
    {
      for (size_t i = 0; i < sizeof(crypto::secret_key); ++i)
        k.data[i] ^= *ptr++;
    }
  }
  //-----------------------------------------------------------------
  void account_keys::encrypt(const crypto::chacha_key &key)
  {
    m_encryption_iv = crypto::rand<crypto::chacha_iv>();
    xor_with_key_stream(key);
  }
  //-----------------------------------------------------------------
  void account_keys::decrypt(const crypto::chacha_key &key)
  {
    xor_with_key_stream(key);
  }
  //-----------------------------------------------------------------
  void account_keys::encrypt_viewkey(const crypto::chacha_key &key)
  {
    // encrypt a large enough byte stream with chacha20
    epee::wipeable_string key_stream = get_key_stream(key, m_encryption_iv, sizeof(crypto::secret_key) * 2);
    const char *ptr = key_stream.data();
    ptr += sizeof(crypto::secret_key);
    for (size_t i = 0; i < sizeof(crypto::secret_key); ++i)
      m_view_secret_key.data[i] ^= *ptr++;
  }
  //-----------------------------------------------------------------
  void account_keys::decrypt_viewkey(const crypto::chacha_key &key)
  {
    encrypt_viewkey(key);
  }
  //-----------------------------------------------------------------
  account_base::account_base() :
    k_view_incoming_dev(m_keys.m_view_secret_key),
    s_view_balance_dev(m_keys.s_view_balance),
    s_generate_address_dev(m_keys.s_generate_address)
  {
    set_null();
  }
  //-----------------------------------------------------------------
  void account_base::set_null()
  {
    m_keys = account_keys();
    m_creation_timestamp = 0;
  }
  //-----------------------------------------------------------------
  void account_base::deinit()
  {
    try{
      m_keys.get_device().disconnect();
    } catch (const std::exception &e){
      MERROR("Device disconnect exception: " << e.what());
    }
  }
  //-----------------------------------------------------------------
  void account_base::forget_spend_key()
  {
    m_keys.m_spend_secret_key = crypto::secret_key();
    m_keys.m_multisig_keys.clear();
  }
  //-----------------------------------------------------------------
  void account_base::set_spend_key(const crypto::secret_key& spend_secret_key)
  {
    // make sure derived spend public key matches saved public spend key
    crypto::public_key spend_public_key;
    crypto::secret_key_to_public_key(spend_secret_key, spend_public_key);
    CHECK_AND_ASSERT_THROW_MES(m_keys.m_account_address.m_spend_public_key == spend_public_key,
        "Unexpected derived public spend key");

    m_keys.m_spend_secret_key = spend_secret_key;
  }
  //-----------------------------------------------------------------
  crypto::secret_key account_base::generate(const crypto::secret_key& recovery_key, bool recover, bool two_random)
  {
    crypto::secret_key first = generate_keys(m_keys.m_account_address.m_spend_public_key, m_keys.m_spend_secret_key, recovery_key, recover);

    // rng for generating second set of keys is hash of first rng.  means only one set of electrum-style words needed for recovery
    crypto::secret_key second;
    keccak((uint8_t *)&m_keys.m_spend_secret_key, sizeof(crypto::secret_key), (uint8_t *)&second, sizeof(crypto::secret_key));

    generate_keys(m_keys.m_account_address.m_view_public_key, m_keys.m_view_secret_key, second, two_random ? false : true);

    struct tm timestamp = {0};
    timestamp.tm_year = 2014 - 1900;  // year 2014
    timestamp.tm_mon = 6 - 1;  // month june
    timestamp.tm_mday = 8;  // 8th of june
    timestamp.tm_hour = 0;
    timestamp.tm_min = 0;
    timestamp.tm_sec = 0;

    if (recover)
    {
      m_creation_timestamp = mktime(&timestamp);
      if (m_creation_timestamp == (uint64_t)-1) // failure
        m_creation_timestamp = 0; // lowest value
    }
    else
    {
      m_creation_timestamp = time(NULL);
    }
    return first;
  }
  //-----------------------------------------------------------------
  void account_base::create_from_keys(const cryptonote::account_public_address& address, const crypto::secret_key& spendkey, const crypto::secret_key& viewkey)
  {
    m_keys.m_account_address = address;
    m_keys.m_spend_secret_key = spendkey;
    m_keys.m_view_secret_key = viewkey;

    struct tm timestamp = {0};
    timestamp.tm_year = 2014 - 1900;  // year 2014
    timestamp.tm_mon = 4 - 1;  // month april
    timestamp.tm_mday = 15;  // 15th of april
    timestamp.tm_hour = 0;
    timestamp.tm_min = 0;
    timestamp.tm_sec = 0;

    m_creation_timestamp = mktime(&timestamp);
    if (m_creation_timestamp == (uint64_t)-1) // failure
      m_creation_timestamp = 0; // lowest value
  }

  //-----------------------------------------------------------------
  void account_base::create_from_device(const std::string &device_name)
  {
    hw::device &hwdev =  hw::get_device(device_name);
    hwdev.set_name(device_name);
    create_from_device(hwdev);
  }

  void account_base::create_from_device(hw::device &hwdev)
  {
    m_keys.set_device(hwdev);
    MCDEBUG("device", "device type: "<<typeid(hwdev).name());
    CHECK_AND_ASSERT_THROW_MES(hwdev.init(), "Device init failed");
    CHECK_AND_ASSERT_THROW_MES(hwdev.connect(), "Device connect failed");
    try {
      CHECK_AND_ASSERT_THROW_MES(hwdev.get_public_address(m_keys.m_account_address), "Cannot get a device address");
      CHECK_AND_ASSERT_THROW_MES(hwdev.get_secret_keys(m_keys.m_view_secret_key, m_keys.m_spend_secret_key), "Cannot get device secret");
    } catch (const std::exception &e){
      hwdev.disconnect();
      throw;
    }
    struct tm timestamp = {0};
    timestamp.tm_year = 2014 - 1900;  // year 2014
    timestamp.tm_mon = 4 - 1;  // month april
    timestamp.tm_mday = 15;  // 15th of april
    timestamp.tm_hour = 0;
    timestamp.tm_min = 0;
    timestamp.tm_sec = 0;

    m_creation_timestamp = mktime(&timestamp);
    if (m_creation_timestamp == (uint64_t)-1) // failure
      m_creation_timestamp = 0; // lowest value
  }

  //-----------------------------------------------------------------
  void account_base::create_from_viewkey(const cryptonote::account_public_address& address, const crypto::secret_key& viewkey)
  {
    crypto::secret_key fake;
    memset(&unwrap(unwrap(fake)), 0, sizeof(fake));
    create_from_keys(address, fake, viewkey);
  }
  //-----------------------------------------------------------------
  bool account_base::make_multisig(const crypto::secret_key &view_secret_key, const crypto::secret_key &spend_secret_key, const crypto::public_key &spend_public_key, const std::vector<crypto::secret_key> &multisig_keys)
  {
    m_keys.m_account_address.m_spend_public_key = spend_public_key;
    m_keys.m_view_secret_key = view_secret_key;
    m_keys.m_spend_secret_key = spend_secret_key;
    m_keys.m_multisig_keys = multisig_keys;
    return crypto::secret_key_to_public_key(view_secret_key, m_keys.m_account_address.m_view_public_key);
  }
  //-----------------------------------------------------------------
  const account_keys& account_base::get_keys() const
  {
    return m_keys;
  }
  //-----------------------------------------------------------------
  std::string account_base::get_public_address_str(network_type nettype) const
  {
    //TODO: change this code into base 58
    return get_account_address_as_str(nettype, false, m_keys.m_account_address);
  }
  //-----------------------------------------------------------------
  std::string account_base::get_public_integrated_address_str(const crypto::hash8 &payment_id, network_type nettype) const
  {
    //TODO: change this code into base 58
    return get_account_integrated_address_as_str(nettype, m_keys.m_account_address, payment_id);
  }
  //-----------------------------------------------------------------
  carrot::AddressDeriveType account_base::resolve_derive_type(const carrot::AddressDeriveType derive_type) const
  {
    return derive_type == carrot::AddressDeriveType::Auto ? carrot::AddressDeriveType::Carrot : derive_type;
  }
  //----------------------------------------------------------------------------------------------------------------------
  carrot::CarrotDestinationV1 account_base::cryptonote_address(const carrot::payment_id_t payment_id,
                                                               const carrot::AddressDeriveType derive_type) const
  {
    carrot::CarrotDestinationV1 addr;
    switch (resolve_derive_type(derive_type))
      {
      case carrot::AddressDeriveType::Carrot:
        make_carrot_integrated_address_v1(m_keys.carrot_account_spend_pubkey,
                                          m_keys.m_account_address.m_view_public_key,
                                          payment_id,
                                          addr);
        break;
      case carrot::AddressDeriveType::PreCarrot:
        make_carrot_integrated_address_v1(m_keys.m_account_address.m_spend_public_key,
                                          m_keys.m_account_address.m_view_public_key,
                                          payment_id,
                                          addr);
        break;
      default:
        throw std::runtime_error("address derive type not recognized");
      }
    return addr;
  }
  //-------------------------------------------------------------------------------------------------------------------
  carrot::CarrotDestinationV1 account_base::subaddress(const carrot::subaddress_index_extended &subaddress_index) const
  {
    if (!subaddress_index.index.is_subaddress())
      return cryptonote_address(carrot::null_payment_id, subaddress_index.derive_type);
    
    const cryptonote::account_keys &lkeys = m_keys;
    
    carrot::CarrotDestinationV1 addr;
    cryptonote::account_public_address cnaddr;
    switch (resolve_derive_type(subaddress_index.derive_type))
    {
    case carrot::AddressDeriveType::Carrot:
        make_carrot_subaddress_v1(m_keys.carrot_account_spend_pubkey,
                                  m_keys.carrot_account_view_pubkey,
                                  s_generate_address_dev,
                                  subaddress_index.index.major,
                                  subaddress_index.index.minor,
                                  addr);
        break;
    case carrot::AddressDeriveType::PreCarrot:
      cnaddr =
        lkeys.m_device->get_subaddress(lkeys, {subaddress_index.index.major, subaddress_index.index.minor});
      addr = carrot::CarrotDestinationV1{
        .address_spend_pubkey = cnaddr.m_spend_public_key,
        .address_view_pubkey = cnaddr.m_view_public_key,
        .is_subaddress = true,
        .payment_id = carrot::null_payment_id
      };
      break;
    default:
      throw std::runtime_error("address derive type not recognized");
    }
    return addr;
  }
  //-------------------------------------------------------------------------------------------------------------------
  void account_base::opening_for_subaddress(
                                            const carrot::subaddress_index_extended &subaddress_index,
                                            crypto::secret_key &address_privkey_g_out,
                                            crypto::secret_key &address_privkey_t_out,
                                            crypto::public_key &address_spend_pubkey_out) const
  {
    const bool is_subaddress = subaddress_index.index.is_subaddress();
    const uint32_t major_index = subaddress_index.index.major;
    const uint32_t minor_index = subaddress_index.index.minor;

    const cryptonote::account_keys &lkeys = m_keys;

    crypto::secret_key address_index_generator;
    crypto::secret_key subaddress_scalar;
    crypto::secret_key subaddress_extension;
    
    switch (resolve_derive_type(subaddress_index.derive_type))
    {
    case carrot::AddressDeriveType::Carrot:
      // s^j_gen = H_32[s_ga](j_major, j_minor)
      carrot::make_carrot_index_extension_generator(lkeys.s_generate_address, major_index, minor_index, address_index_generator);
      
      if (is_subaddress)
      {
        // k^j_subscal = H_n(K_s, j_major, j_minor, s^j_gen)
        carrot::make_carrot_subaddress_scalar(lkeys.carrot_account_spend_pubkey, address_index_generator, major_index, minor_index, subaddress_scalar);
      }
      else
      {
        // k^j_subscal = 1
        sc_1(to_bytes(subaddress_scalar));
      }
      
      // k^g_a = k_gi * k^j_subscal
      sc_mul(to_bytes(address_privkey_g_out), to_bytes(lkeys.k_generate_image), to_bytes(subaddress_scalar));
      
      // k^t_a = k_ps * k^j_subscal
      sc_mul(to_bytes(address_privkey_t_out), to_bytes(lkeys.k_prove_spend), to_bytes(subaddress_scalar));
      break;
    case carrot::AddressDeriveType::PreCarrot:
      // m = Hn(k_v || j_major || j_minor) if subaddress else 0
      subaddress_extension = is_subaddress
        ? lkeys.get_device().get_subaddress_secret_key(lkeys.m_view_secret_key, {major_index, minor_index})
        : crypto::null_skey;
      
      // k^g_a = k_s + m
      sc_add(to_bytes(address_privkey_g_out), to_bytes(lkeys.m_spend_secret_key), to_bytes(subaddress_extension));
      
      // k^t_a = 0
      memset(address_privkey_t_out.data, 0, sizeof(address_privkey_t_out));
      break;
    default:
      throw std::runtime_error("address derive type not recognized");
    }

    // perform sanity check
    const carrot::CarrotDestinationV1 addr = subaddress(subaddress_index);
    rct::key recomputed_address_spend_pubkey;
    rct::addKeys2(recomputed_address_spend_pubkey,
                  rct::sk2rct(address_privkey_g_out),
                  rct::sk2rct(address_privkey_t_out),
                  rct::pk2rct(crypto::get_T()));
    CHECK_AND_ASSERT_THROW_MES(rct::rct2pk(recomputed_address_spend_pubkey) == addr.address_spend_pubkey,
                               "mock carrot or legacy keys: opening for subaddress: failed sanity check");
    address_spend_pubkey_out = addr.address_spend_pubkey;
  }
  //-------------------------------------------------------------------------------------------------------------------
  bool account_base::try_searching_for_opening_for_subaddress(
                                                              const crypto::public_key &address_spend_pubkey,
                                                              crypto::secret_key &address_privkey_g_out,
                                                              crypto::secret_key &address_privkey_t_out) const
  {
    const auto it = subaddress_map.find(address_spend_pubkey);
    if (it == subaddress_map.cend())
      return false;
    
    crypto::public_key recomputed_address_spend_pubkey;
    opening_for_subaddress(it->second,
                           address_privkey_g_out,
                           address_privkey_t_out,
                           recomputed_address_spend_pubkey);
    
    return address_spend_pubkey == recomputed_address_spend_pubkey;
  }
  //-------------------------------------------------------------------------------------------------------------------
  bool account_base::try_searching_for_opening_for_onetime_address(
                                                                   const crypto::public_key &address_spend_pubkey,
                                                                   const crypto::secret_key &sender_extension_g,
                                                                   const crypto::secret_key &sender_extension_t,
                                                                   crypto::secret_key &x_out,
                                                                   crypto::secret_key &y_out) const
  {
    // k^{j,g}_addr, k^{j,t}_addr
    crypto::secret_key address_privkey_g;
    crypto::secret_key address_privkey_t;
    if (!try_searching_for_opening_for_subaddress(address_spend_pubkey,
                                                  address_privkey_g,
                                                  address_privkey_t))
      return false;
    
    // x = k^{j,g}_addr + k^g_o
    sc_add(to_bytes(x_out), to_bytes(address_privkey_g), to_bytes(sender_extension_g));
    
    // y = k^{j,t}_addr + k^t_o
    sc_add(to_bytes(y_out), to_bytes(address_privkey_t), to_bytes(sender_extension_t));
    
    return true;
  }
}
//-------------------------------------------------------------------------------------------------------------------

