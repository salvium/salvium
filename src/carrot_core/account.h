// Copyright (c) 2025, The Monero Project
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

#include "account_secrets.h"
#include "address_utils.h"
#include "destination.h"
#include "device_ram_borrowed.h"
#include "enote_utils.h"
#include "carrot_impl/subaddress_index.h"
#include "cryptonote_basic/account.h"
#include "cryptonote_basic/subaddress_index.h"

//----------------------------------------------------------------------------------------------------------------------
static constexpr std::uint32_t MAX_SUBADDRESS_MAJOR_INDEX = 5;
static constexpr std::uint32_t MAX_SUBADDRESS_MINOR_INDEX = 20;

namespace carrot
{

    struct return_output_info_t {
        input_context_t input_context;
        crypto::public_key K_o; // output onetime address
        crypto::public_key K_change; // change output onetime address
        crypto::key_image key_image;
        crypto::secret_key x;
        crypto::secret_key y;

        return_output_info_t(
            const input_context_t &input_context,
            const crypto::public_key &K_o,
            const crypto::public_key &K_change,
            const crypto::key_image &key_image,
            const crypto::secret_key &x,
            const crypto::secret_key &y):
            input_context(input_context),
            K_o(K_o),
            K_change(K_change),
            key_image(key_image),
            x(x),
            y(y) {}
    };


  class carrot_and_legacy_account : public cryptonote::account_base
  {
    public:
    view_incoming_key_ram_borrowed_device k_view_incoming_dev;
    view_balance_secret_ram_borrowed_device s_view_balance_dev;
    generate_address_secret_ram_borrowed_device s_generate_address_dev;

    AddressDeriveType default_derive_type;

    carrot_and_legacy_account(): k_view_incoming_dev(get_keys().k_view_incoming),
        s_view_balance_dev(get_keys().s_view_balance),
        s_generate_address_dev(get_keys().s_generate_address)
    {}

    carrot_and_legacy_account(const carrot_and_legacy_account &k) = delete;
    carrot_and_legacy_account(carrot_and_legacy_account&&) = delete;

    carrot_and_legacy_account& operator=(const carrot_and_legacy_account&) = delete;
    carrot_and_legacy_account& operator=(carrot_and_legacy_account&&) = delete;

    CarrotDestinationV1 cryptonote_address(const payment_id_t payment_id = null_payment_id,
        const AddressDeriveType derive_type = AddressDeriveType::Auto) const;

    CarrotDestinationV1 subaddress(const subaddress_index_extended &subaddress_index) const;

    const std::unordered_map<crypto::public_key, cryptonote::subaddress_index> get_subaddress_map_cn() const;
    const std::unordered_map<crypto::public_key, subaddress_index_extended>& get_subaddress_map_ref() const;
    const std::unordered_map<crypto::public_key, return_output_info_t>& get_return_output_map_ref() const;

    // brief: opening_for_subaddress - return (k^g_a, k^t_a) for j s.t. K^j_s = (k^g_a * G + k^t_a * T)
    void opening_for_subaddress(const subaddress_index_extended &subaddress_index,
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

    bool can_open_fcmp_onetime_address(const crypto::public_key &address_spend_pubkey,
        const crypto::secret_key &sender_extension_g,
        const crypto::secret_key &sender_extension_t,
        const crypto::public_key &onetime_address) const;

    crypto::key_image derive_key_image(const crypto::public_key &address_spend_pubkey,
        const crypto::secret_key &sender_extension_g,
        const crypto::secret_key &sender_extension_t,
        const crypto::public_key &onetime_address) const;

    void generate_subaddress_map();

    crypto::secret_key generate(
        const crypto::secret_key& recovery_key = crypto::secret_key(),
        bool recover = false,
        bool two_random = false,
        const AddressDeriveType default_derive_type = AddressDeriveType::Carrot
    );

    void set_carrot_keys(const AddressDeriveType default_derive_type = AddressDeriveType::Carrot);
    void insert_subaddresses(const std::unordered_map<crypto::public_key, subaddress_index_extended>& subaddress_map);
    void insert_return_output_info(
        const std::unordered_map<crypto::public_key, return_output_info_t>& input_context_map
    );

    AddressDeriveType resolve_derive_type(const AddressDeriveType derive_type) const;

    private:
        std::unordered_map<crypto::public_key, subaddress_index_extended> subaddress_map;
        // Kr -> return_output_info
        std::unordered_map<crypto::public_key, return_output_info_t> return_output_map;
  };
}
