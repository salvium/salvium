#include <cstdlib>
#include <cstring>
#include <string>

#include "carrot_core/account_secrets.h"
#include "cryptonote_protocol/salchat_relay.h"
#include "fuzzer.h"
#include "ringct/rctOps.h"
#include "wallet/salchat_protocol.h"

namespace
{
  crypto::secret_key sender_k_generate_image;
  crypto::secret_key sender_k_prove_spend;
  crypto::secret_key sender_view_secret;
  crypto::secret_key sender_message_secret;
  crypto::public_key sender_view_public;
  crypto::public_key sender_spend_public;
  crypto::public_key sender_encryption;
  crypto::secret_key recipient_secret;
  crypto::secret_key recipient_message_secret;
  crypto::public_key recipient_public;
  crypto::public_key recipient_spend_public;
  salchat::contact recipient_contact;

  void sign(cryptonote::salchat_p2p_envelope& envelope)
  {
    if (!cryptonote::generate_salchat_signature(
        cryptonote::get_salchat_signature_hash(envelope), sender_spend_public,
        sender_k_generate_image, sender_k_prove_spend, envelope.sender_signature))
      std::abort();
  }
}

BEGIN_INIT_SIMPLE_FUZZER()
  const crypto::secret_key recipient_k_generate_image = rct::rct2sk(rct::skGen());
  const crypto::secret_key recipient_k_prove_spend = rct::rct2sk(rct::skGen());
  sender_k_generate_image = rct::rct2sk(rct::skGen());
  sender_k_prove_spend = rct::rct2sk(rct::skGen());
  carrot::make_carrot_spend_pubkey(
    sender_k_generate_image, sender_k_prove_spend, sender_spend_public);
  carrot::make_carrot_spend_pubkey(
    recipient_k_generate_image, recipient_k_prove_spend, recipient_spend_public);
  crypto::generate_keys(sender_view_public, sender_view_secret);
  crypto::generate_keys(recipient_public, recipient_secret);
  crypto::secret_key sender_seed = rct::rct2sk(rct::skGen());
  crypto::secret_key recipient_seed = rct::rct2sk(rct::skGen());
  if (!salchat::derive_message_keys(sender_seed, sender_message_secret, sender_encryption) ||
      !salchat::derive_message_keys(recipient_seed, recipient_message_secret,
        recipient_contact.encryption_public_key))
    return 1;
  recipient_contact.spend_public_key = recipient_spend_public;
  recipient_contact.view_public_key = recipient_public;
  recipient_contact.signing_public_key = recipient_spend_public;
  recipient_contact.id = salchat::make_contact_id(recipient_contact.spend_public_key,
    recipient_contact.view_public_key,
    recipient_contact.encryption_public_key);
  recipient_contact.label = "fuzz recipient";
END_INIT_SIMPLE_FUZZER()

BEGIN_SIMPLE_FUZZER()
  if (len != 0 && len <= salchat::MAX_TEXT_BYTES)
  {
    const std::string content(reinterpret_cast<const char*>(buf), len);
    cryptonote::salchat_p2p_envelope envelope;
    std::string error;
    const bool safe_text = salchat::valid_text(content);
    const bool encrypted = salchat::encrypt_payload(sender_k_generate_image, sender_k_prove_spend,
        sender_message_secret,
        sender_spend_public, sender_view_public, recipient_contact,
        cryptonote::MAINNET, salchat::message_type::text, content, 3600, 1000, envelope, error);
    if (encrypted != safe_text)
      std::abort();
    if (encrypted)
    {
      salchat::decrypted_payload plain;
      if (!salchat::decrypt_payload(recipient_message_secret, recipient_spend_public, recipient_public,
          cryptonote::MAINNET, envelope, plain, 1000, error) || plain.content != content ||
          plain.sender_spend_public_key != sender_spend_public ||
          plain.sender_view_public_key != sender_view_public ||
          plain.sender_signing_public_key != sender_spend_public ||
          plain.sender_encryption_public_key != sender_encryption)
        std::abort();

      envelope.ciphertext[buf[0] % envelope.ciphertext.size()] ^= 1;
      crypto::cn_fast_hash(envelope.ciphertext.data(), envelope.ciphertext.size(), envelope.ciphertext_hash);
      sign(envelope);
      if (salchat::decrypt_payload(recipient_message_secret, recipient_spend_public,
          recipient_public, cryptonote::MAINNET, envelope, plain, 1000, error))
        std::abort();
    }
  }
END_SIMPLE_FUZZER()
