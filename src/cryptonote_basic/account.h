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

#pragma once

#include "cryptonote_basic.h"
#include "crypto/crypto.h"
#include "serialization/keyvalue_serialization.h"

#include "carrot_core/account_secrets.h"
#include "carrot_core/address_utils.h"
#include "carrot_core/destination.h"
#include "carrot_core/device_ram_borrowed.h"
#include "carrot_core/enote_utils.h"
#include "carrot_impl/subaddress_index.h"

namespace cryptonote
{

  struct account_keys
  {
    account_public_address m_account_address;
    crypto::secret_key   m_spend_secret_key;
    crypto::secret_key   m_view_secret_key;
    std::vector<crypto::secret_key> m_multisig_keys;
    hw::device *m_device = &hw::get_device("default");
    crypto::chacha_iv m_encryption_iv;

    // carrot secret keys (minus k_v, which is shared with legacy k_v)
    crypto::secret_key s_master;
    crypto::secret_key k_prove_spend;
    crypto::secret_key s_view_balance;
    crypto::secret_key k_generate_image;
    crypto::secret_key s_generate_address;

    // carrot public keys (minus K^0_v, which is shared with legacy K^0_v)
    crypto::public_key carrot_account_spend_pubkey;
    crypto::public_key carrot_account_view_pubkey;
    
    BEGIN_KV_SERIALIZE_MAP()
      KV_SERIALIZE(m_account_address)
      KV_SERIALIZE_VAL_POD_AS_BLOB_FORCE(m_spend_secret_key)
      KV_SERIALIZE_VAL_POD_AS_BLOB_FORCE(m_view_secret_key)
      KV_SERIALIZE_CONTAINER_POD_AS_BLOB(m_multisig_keys)
      const crypto::chacha_iv default_iv{{0, 0, 0, 0, 0, 0, 0, 0}};
      KV_SERIALIZE_VAL_POD_AS_BLOB_OPT(m_encryption_iv, default_iv)
    END_KV_SERIALIZE_MAP()

    void encrypt(const crypto::chacha_key &key);
    void decrypt(const crypto::chacha_key &key);
    void encrypt_viewkey(const crypto::chacha_key &key);
    void decrypt_viewkey(const crypto::chacha_key &key);

    hw::device& get_device()  const ;
    void set_device( hw::device &hwdev) ;

  private:
    void xor_with_key_stream(const crypto::chacha_key &key);
  };

  /************************************************************************/
  /*                                                                      */
  /************************************************************************/
  class account_base
  {
  public:
    account_base();
    crypto::secret_key generate(const crypto::secret_key& recovery_key = crypto::secret_key(), bool recover = false, bool two_random = false);
    void create_from_device(const std::string &device_name);
    void create_from_device(hw::device &hwdev);
    void create_from_keys(const cryptonote::account_public_address& address, const crypto::secret_key& spendkey, const crypto::secret_key& viewkey);
    void create_from_viewkey(const cryptonote::account_public_address& address, const crypto::secret_key& viewkey);
    bool make_multisig(const crypto::secret_key &view_secret_key, const crypto::secret_key &spend_secret_key, const crypto::public_key &spend_public_key, const std::vector<crypto::secret_key> &multisig_keys);
    const account_keys& get_keys() const;
    std::string get_public_address_str(network_type nettype) const;
    std::string get_public_integrated_address_str(const crypto::hash8 &payment_id, network_type nettype) const;

    hw::device& get_device() const  {return m_keys.get_device();}
    void set_device( hw::device &hwdev) {m_keys.set_device(hwdev);}
    void deinit();

    uint64_t get_createtime() const { return m_creation_timestamp; }
    void set_createtime(uint64_t val) { m_creation_timestamp = val; }

    bool load(const std::string& file_path);
    bool store(const std::string& file_path);

    void forget_spend_key();
    void set_spend_key(const crypto::secret_key& spend_secret_key);
    const std::vector<crypto::secret_key> &get_multisig_keys() const { return m_keys.m_multisig_keys; }

    void encrypt_keys(const crypto::chacha_key &key) { m_keys.encrypt(key); }
    void decrypt_keys(const crypto::chacha_key &key) { m_keys.decrypt(key); }
    void encrypt_viewkey(const crypto::chacha_key &key) { m_keys.encrypt_viewkey(key); }
    void decrypt_viewkey(const crypto::chacha_key &key) { m_keys.decrypt_viewkey(key); }

    carrot::AddressDeriveType resolve_derive_type(const carrot::AddressDeriveType derive_type) const;

    carrot::CarrotDestinationV1 cryptonote_address(const carrot::payment_id_t payment_id = carrot::null_payment_id,
        const carrot::AddressDeriveType derive_type = carrot::AddressDeriveType::Auto) const;

    carrot::CarrotDestinationV1 subaddress(const carrot::subaddress_index_extended &subaddress_index) const;

    std::unordered_map<crypto::public_key, cryptonote::subaddress_index> subaddress_map_cn() const;

    // brief: opening_for_subaddress - return (k^g_a, k^t_a) for j s.t. K^j_s = (k^g_a * G + k^t_a * T)
    void opening_for_subaddress(const carrot::subaddress_index_extended &subaddress_index,
        crypto::secret_key &address_privkey_g_out,
        crypto::secret_key &address_privkey_t_out,
        crypto::public_key &address_spend_pubkey_out) const;

    bool try_searching_for_opening_for_subaddress(const crypto::public_key &address_spend_pubkey,
        crypto::secret_key &address_privkey_g_out,
        crypto::secret_key &address_privkey_t_out) const;

    bool try_searching_for_opening_for_onetime_address(const crypto::public_key &address_spend_pubkey,
        const crypto::secret_key &sender_extension_g,
        const crypto::secret_key &sender_extension_t,
        crypto::secret_key &x_out,
        crypto::secret_key &y_out) const;
    /*
    bool can_open_fcmp_onetime_address(const crypto::public_key &address_spend_pubkey,
        const crypto::secret_key &sender_extension_g,
        const crypto::secret_key &sender_extension_t,
        const crypto::public_key &onetime_address) const;

    crypto::key_image derive_key_image(const crypto::public_key &address_spend_pubkey,
        const crypto::secret_key &sender_extension_g,
        const crypto::secret_key &sender_extension_t,
        const crypto::public_key &onetime_address) const;

    void generate_subaddress_map();

    void generate(const carrot::AddressDeriveType default_derive_type = carrot::AddressDeriveType::Carrot);
    */
    
    template <class t_archive>
    inline void serialize(t_archive &a, const unsigned int /*ver*/)
    {
      a & m_keys;
      a & m_creation_timestamp;
    }

    BEGIN_KV_SERIALIZE_MAP()
      KV_SERIALIZE(m_keys)
      KV_SERIALIZE(m_creation_timestamp)
    END_KV_SERIALIZE_MAP()

  private:
    void set_null();
    account_keys m_keys;
    uint64_t m_creation_timestamp;

    std::unordered_map<crypto::public_key, carrot::subaddress_index_extended> subaddress_map;

    carrot::view_incoming_key_ram_borrowed_device k_view_incoming_dev;
    carrot::view_balance_secret_ram_borrowed_device s_view_balance_dev;
    carrot::generate_address_secret_ram_borrowed_device s_generate_address_dev;
  };
}
