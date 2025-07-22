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
#include "cryptonote_basic/account.h"
#include "cryptonote_config.h"
#include "ringct/rctOps.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "carrot_impl_account"

using namespace std;

DISABLE_VS_WARNINGS(4244 4345)

namespace carrot
{
//----------------------------------------------------------------------------------------------------------------------
CarrotDestinationV1 carrot_and_legacy_account::cryptonote_address(const payment_id_t payment_id,
    const AddressDeriveType derive_type) const
{
    CarrotDestinationV1 addr;
    switch (resolve_derive_type(derive_type))
    {
    case AddressDeriveType::Carrot:
        make_carrot_integrated_address_v1(get_keys().m_carrot_main_address.m_spend_public_key,
            get_keys().m_carrot_main_address.m_view_public_key,
            payment_id,
            addr);
        break;
    case AddressDeriveType::PreCarrot:
        make_carrot_integrated_address_v1(get_keys().m_account_address.m_spend_public_key,
            get_keys().m_account_address.m_view_public_key,
            payment_id,
            addr);
        break;
    default:
        throw std::runtime_error("address derive type not recognized");
    }
    return addr;
}
//----------------------------------------------------------------------------------------------------------------------
CarrotDestinationV1 carrot_and_legacy_account::subaddress(const subaddress_index_extended &subaddress_index) const
{
    if (!subaddress_index.index.is_subaddress())
        return cryptonote_address(null_payment_id, subaddress_index.derive_type);

    const cryptonote::account_keys &keys = get_keys();

    CarrotDestinationV1 addr;
    cryptonote::account_public_address cnaddr;
    switch (resolve_derive_type(subaddress_index.derive_type))
    {
    case AddressDeriveType::Carrot:
        make_carrot_subaddress_v1(keys.m_carrot_account_address.m_spend_public_key,
            keys.m_carrot_account_address.m_view_public_key,
            s_generate_address_dev,
            subaddress_index.index.major,
            subaddress_index.index.minor,
            addr);
        break;
    case AddressDeriveType::PreCarrot:
        cnaddr =
            keys.m_device->get_subaddress(keys, {subaddress_index.index.major, subaddress_index.index.minor});
        addr = CarrotDestinationV1{
            .address_spend_pubkey = cnaddr.m_spend_public_key,
            .address_view_pubkey = cnaddr.m_view_public_key,
            .is_subaddress = true,
            .payment_id = null_payment_id
        };
        break;
    default:
        throw std::runtime_error("address derive type not recognized");
    }
    return addr;
}
//----------------------------------------------------------------------------------------------------------------------
std::unordered_map<crypto::public_key, cryptonote::subaddress_index> carrot_and_legacy_account::get_subaddress_map_cn() const
{
    std::unordered_map<crypto::public_key, cryptonote::subaddress_index> res;
    for (const auto &p : subaddress_map)
        res.emplace(p.first, cryptonote::subaddress_index{p.second.index.major, p.second.index.minor});
    CHECK_AND_ASSERT_THROW_MES(!res.empty(),
        "carrot_and_legacy_account::get_subaddress_map: subaddress map does not contain subaddresses");
    return res;
}
//----------------------------------------------------------------------------------------------------------------------
std::unordered_map<crypto::public_key, subaddress_index_extended>& carrot_and_legacy_account::get_subaddress_map_ref() {
    return subaddress_map;
}
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
std::unordered_map<crypto::public_key, std::pair<input_context_t, crypto::public_key>>& carrot_and_legacy_account::get_input_context_map_ref() {
    return input_context_map;
}
//----------------------------------------------------------------------------------------------------------------------
void carrot_and_legacy_account::opening_for_subaddress(const subaddress_index_extended &subaddress_index,
    crypto::secret_key &address_privkey_g_out,
    crypto::secret_key &address_privkey_t_out,
    crypto::public_key &address_spend_pubkey_out) const
{
    const bool is_subaddress = subaddress_index.index.is_subaddress();
    const uint32_t major_index = subaddress_index.index.major;
    const uint32_t minor_index = subaddress_index.index.minor;

    const cryptonote::account_keys &keys = get_keys();

    crypto::secret_key address_index_generator;
    crypto::secret_key subaddress_scalar;
    crypto::secret_key subaddress_extension;

    switch (resolve_derive_type(subaddress_index.derive_type))
    {
    case AddressDeriveType::Carrot:
        // s^j_gen = H_32[s_ga](j_major, j_minor)
        make_carrot_index_extension_generator(keys.s_generate_address, major_index, minor_index, address_index_generator);

        if (is_subaddress)
        {
            // k^j_subscal = H_n(K_s, j_major, j_minor, s^j_gen)
            make_carrot_subaddress_scalar(keys.m_carrot_account_address.m_spend_public_key, address_index_generator, major_index, minor_index, subaddress_scalar);
        }
        else
        {
            // k^j_subscal = 1
            sc_1(to_bytes(subaddress_scalar));
        }

        // k^g_a = k_gi * k^j_subscal
        sc_mul(to_bytes(address_privkey_g_out), to_bytes(keys.k_generate_image), to_bytes(subaddress_scalar));

        // k^t_a = k_ps * k^j_subscal
        sc_mul(to_bytes(address_privkey_t_out), to_bytes(keys.k_prove_spend), to_bytes(subaddress_scalar));
        break;
    case AddressDeriveType::PreCarrot:
        // m = Hn(k_v || j_major || j_minor) if subaddress else 0
        subaddress_extension = is_subaddress
            ? keys.get_device().get_subaddress_secret_key(keys.m_view_secret_key, {major_index, minor_index})
            : crypto::null_skey;

        // k^g_a = k_s + m
        sc_add(to_bytes(address_privkey_g_out), to_bytes(keys.m_spend_secret_key), to_bytes(subaddress_extension));

        // k^t_a = 0
        memset(address_privkey_t_out.data, 0, sizeof(address_privkey_t_out));
        break;
    default:
        throw std::runtime_error("address derive type not recognized");
    }

    // perform sanity check
    const CarrotDestinationV1 addr = subaddress(subaddress_index);
    rct::key recomputed_address_spend_pubkey;
    rct::addKeys2(recomputed_address_spend_pubkey,
        rct::sk2rct(address_privkey_g_out),
        rct::sk2rct(address_privkey_t_out),
        rct::pk2rct(crypto::get_T()));
    CHECK_AND_ASSERT_THROW_MES(rct::rct2pk(recomputed_address_spend_pubkey) == addr.address_spend_pubkey,
        "carrot and legacy account: opening for subaddress: failed sanity check");
    address_spend_pubkey_out = addr.address_spend_pubkey;
}
//----------------------------------------------------------------------------------------------------------------------
bool carrot_and_legacy_account::try_searching_for_opening_for_subaddress(const crypto::public_key &address_spend_pubkey,
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
bool carrot_and_legacy_account::try_searching_for_opening_for_onetime_address(const crypto::public_key &address_spend_pubkey,
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
//----------------------------------------------------------------------------------------------------------------------
bool carrot_and_legacy_account::can_open_fcmp_onetime_address(const crypto::public_key &address_spend_pubkey,
    const crypto::secret_key &sender_extension_g,
    const crypto::secret_key &sender_extension_t,
    const crypto::public_key &onetime_address) const
{
    crypto::secret_key x, y;
    if (!try_searching_for_opening_for_onetime_address(address_spend_pubkey,
            sender_extension_g,
            sender_extension_t,
            x,
            y))
        return false;

    // O' = x G + y T
    rct::key recomputed_onetime_address;
    rct::addKeys2(recomputed_onetime_address,
        rct::sk2rct(x),
        rct::sk2rct(y),
        rct::pk2rct(crypto::get_T()));

    // O' ?= O
    return 0 == memcmp(&recomputed_onetime_address, &onetime_address, sizeof(rct::key));
}
//----------------------------------------------------------------------------------------------------------------------
crypto::key_image carrot_and_legacy_account::derive_key_image(const crypto::public_key &address_spend_pubkey,
    const crypto::secret_key &sender_extension_g,
    const crypto::secret_key &sender_extension_t,
    const crypto::public_key &onetime_address) const
{
    CHECK_AND_ASSERT_THROW_MES(can_open_fcmp_onetime_address(
            address_spend_pubkey,
            sender_extension_g,
            sender_extension_t,
            onetime_address),
        "carrot and legacy account: derive key image: cannot open onetime address");

    crypto::secret_key x, y;
    try_searching_for_opening_for_onetime_address(address_spend_pubkey,
        sender_extension_g,
        sender_extension_t,
        x,
        y);

    crypto::key_image L;
    crypto::generate_key_image(onetime_address, x, L);
    return L;
}
//----------------------------------------------------------------------------------------------------------------------
void carrot_and_legacy_account::generate_subaddress_map()
{
    const std::vector<AddressDeriveType> derive_types{AddressDeriveType::Carrot, AddressDeriveType::PreCarrot};

    for (uint32_t major_index = 0; major_index <= MAX_SUBADDRESS_MAJOR_INDEX; ++major_index)
    {
        for (uint32_t minor_index = 0; minor_index <= MAX_SUBADDRESS_MINOR_INDEX; ++minor_index)
        {
            for (const AddressDeriveType derive_type : derive_types)
            {
                const subaddress_index_extended subaddr_index{{major_index, minor_index}, derive_type, false};
                const CarrotDestinationV1 addr = subaddress(subaddr_index);
                subaddress_map.insert({addr.address_spend_pubkey, subaddr_index});
            }
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
crypto::secret_key carrot_and_legacy_account::generate(
    const crypto::secret_key& recovery_key,
    bool recover,
    bool two_random,
    const AddressDeriveType default_derive_type)
{
    // generate the legacy keys
    crypto::secret_key retval = cryptonote::account_base::generate(recovery_key, recover, two_random);

    // generate carrot keys
    set_carrot_keys(default_derive_type);

    return retval;
}
//----------------------------------------------------------------------------------------------------------------------
void carrot_and_legacy_account::set_carrot_keys(const AddressDeriveType default_derive_type)
{   
    // top level keys
    m_keys.s_master = m_keys.m_spend_secret_key;
    make_carrot_provespend_key(m_keys.s_master, m_keys.k_prove_spend);
    make_carrot_viewbalance_secret(m_keys.s_master, m_keys.s_view_balance);

    // view balance keys
    make_carrot_viewincoming_key(m_keys.s_view_balance, m_keys.k_view_incoming);
    make_carrot_generateimage_key(m_keys.s_view_balance, m_keys.k_generate_image);
    make_carrot_generateaddress_secret(m_keys.s_view_balance, m_keys.s_generate_address);

    // carrot account address
    make_carrot_spend_pubkey(m_keys.k_generate_image, m_keys.k_prove_spend, m_keys.m_carrot_account_address.m_spend_public_key);
    k_view_incoming_dev.view_key_scalar_mult_ed25519(
        m_keys.m_carrot_account_address.m_spend_public_key,
        m_keys.m_carrot_account_address.m_view_public_key
    );

    // carrot main wallet address
    m_keys.m_carrot_main_address.m_spend_public_key = m_keys.m_carrot_account_address.m_spend_public_key;
    k_view_incoming_dev.view_key_scalar_mult_ed25519(
        crypto::get_G(),
        m_keys.m_carrot_main_address.m_view_public_key
    );    
    
    this->default_derive_type = default_derive_type;
    generate_subaddress_map();
}
//----------------------------------------------------------------------------------------------------------------------
void carrot_and_legacy_account::insert_subaddresses(const std::unordered_map<crypto::public_key, subaddress_index_extended>& subaddress_map_cn)
{
    for (const auto &p : subaddress_map_cn)
        subaddress_map.insert({p.first, {{p.second.index.major, p.second.index.minor}, p.second.derive_type, p.second.is_return_spend_key}});
}
//----------------------------------------------------------------------------------------------------------------------
void carrot_and_legacy_account::insert_input_context(const std::unordered_map<crypto::public_key, std::pair<input_context_t, crypto::public_key>>& icm)
{
    for (const auto &p : icm)
        input_context_map.insert({p.first, p.second});
}
//----------------------------------------------------------------------------------------------------------------------
AddressDeriveType carrot_and_legacy_account::resolve_derive_type(const AddressDeriveType derive_type) const
{
    return derive_type == AddressDeriveType::Auto ? default_derive_type : derive_type;
}
}
//-------------------------------------------------------------------------------------------------------------------
