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

#include <array>
#include <map>
#include <stdexcept>
#include <string>
#include <boost/uuid/uuid.hpp>

#define CRYPTONOTE_DNS_TIMEOUT_MS                       20000

#define CRYPTONOTE_MAX_BLOCK_NUMBER                     500000000
#define CRYPTONOTE_MAX_TX_SIZE                          1000000
#define CRYPTONOTE_MAX_TX_PER_BLOCK                     0x10000000
#define CRYPTONOTE_PUBLIC_ADDRESS_TEXTBLOB_VER          0
#define CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW            60
#define CURRENT_TRANSACTION_VERSION                     3
#define TRANSACTION_VERSION_2_OUTS                      2
#define TRANSACTION_VERSION_N_OUTS                      3
#define CURRENT_BLOCK_MAJOR_VERSION                     1
#define CURRENT_BLOCK_MINOR_VERSION                     1
#define CRYPTONOTE_BLOCK_FUTURE_TIME_LIMIT              60*60*2
#define CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE             10

#define BLOCKCHAIN_TIMESTAMP_CHECK_WINDOW               60

// MONEY_SUPPLY - total number coins to be generated
#define MONEY_SUPPLY                                    ((uint64_t)(18440000000000000ull)) // 184.4M coins * pow(10, 8)
#define EMISSION_SPEED_FACTOR_PER_MINUTE                (21)
#define FINAL_SUBSIDY_PER_MINUTE                        ((uint64_t)30000000) // 3 * pow(10, 7)

#define BURN_LOCK_PERIOD                                0
#define CONVERT_LOCK_PERIOD                             0

#define CRYPTONOTE_REWARD_BLOCKS_WINDOW                 100
#define CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2    60000 //size of block (bytes) after which reward for block calculated using block size
#define CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V1    20000 //size of block (bytes) after which reward for block calculated using block size - before first fork
#define CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5    300000 //size of block (bytes) after which reward for block calculated using block size - second change, from v5
#define CRYPTONOTE_LONG_TERM_BLOCK_WEIGHT_WINDOW_SIZE   100000 // size in blocks of the long term block weight median window
#define CRYPTONOTE_SHORT_TERM_BLOCK_WEIGHT_SURGE_FACTOR 50
#define CRYPTONOTE_COINBASE_BLOB_RESERVED_SIZE          600
#define CRYPTONOTE_DISPLAY_DECIMAL_POINT                8
// COIN - number of smallest units in one coin
#define COIN                                            ((uint64_t)100000000) // pow(10, 8)

//#define FEE_PER_KB_OLD                                  ((uint64_t)1000000) // pow(10, 6)
#define FEE_PER_KB                                      ((uint64_t)200000) // 2 * pow(10, 5)
#define FEE_PER_BYTE                                    ((uint64_t)30)
#define DYNAMIC_FEE_PER_KB_BASE_FEE                     ((uint64_t)200000) // 2 * pow(10,5)
#define DYNAMIC_FEE_PER_KB_BASE_BLOCK_REWARD            ((uint64_t)1000000000) // 10 * pow(10,8)
#define DYNAMIC_FEE_PER_KB_BASE_FEE_V5                  ((uint64_t)200000 * (uint64_t)CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V2 / CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE_V5)
#define DYNAMIC_FEE_REFERENCE_TRANSACTION_WEIGHT         ((uint64_t)3000)

#define ORPHANED_BLOCKS_MAX_COUNT                       100

#define PREMINE_AMOUNT                                  ((uint64_t)2210000000000000ull) // 12% of MONEY_SUPPLY
#define PREMINE_AMOUNT_UPFRONT                          ((uint64_t)650000000000000ull)  // 3.4% of MONEY_SUPPLY
#define PREMINE_AMOUNT_MONTHLY                          ((uint64_t)65000000000000ull)   // 8.6%/24 of MONEY_SUPPLY 

#define TREASURY_SAL1_MINT_AMOUNT                       ((uint64_t)65000000000000ull) // 650K
#define TREASURY_SAL1_MINT_COUNT                        16                            // 16 times

#define DIFFICULTY_TARGET_V2                            120  // seconds
#define DIFFICULTY_TARGET_V1                            60  // seconds - before first fork
#define DIFFICULTY_WINDOW_V2                            70 // blocks
#define DIFFICULTY_WINDOW                               720 // blocks
#define DIFFICULTY_LAG                                  15  // !!!
#define DIFFICULTY_CUT                                  60  // timestamps to cut after sorting
#define DIFFICULTY_BLOCKS_COUNT_V2                      DIFFICULTY_WINDOW_V2
#define DIFFICULTY_BLOCKS_COUNT                         DIFFICULTY_WINDOW + DIFFICULTY_LAG


#define CRYPTONOTE_LOCKED_TX_ALLOWED_DELTA_SECONDS_V1   DIFFICULTY_TARGET_V1 * CRYPTONOTE_LOCKED_TX_ALLOWED_DELTA_BLOCKS
#define CRYPTONOTE_LOCKED_TX_ALLOWED_DELTA_SECONDS_V2   DIFFICULTY_TARGET_V2 * CRYPTONOTE_LOCKED_TX_ALLOWED_DELTA_BLOCKS
#define CRYPTONOTE_LOCKED_TX_ALLOWED_DELTA_BLOCKS       1


#define DIFFICULTY_BLOCKS_ESTIMATE_TIMESPAN             DIFFICULTY_TARGET_V1 //just alias; used by tests


#define BLOCKS_IDS_SYNCHRONIZING_DEFAULT_COUNT          10000  //by default, blocks ids count in synchronizing
#define BLOCKS_IDS_SYNCHRONIZING_MAX_COUNT              25000  //max blocks ids count in synchronizing
#define BLOCKS_SYNCHRONIZING_DEFAULT_COUNT_PRE_V4       100    //by default, blocks count in blocks downloading
#define BLOCKS_SYNCHRONIZING_DEFAULT_COUNT              20     //by default, blocks count in blocks downloading
#define BLOCKS_SYNCHRONIZING_MAX_COUNT                  2048   //must be a power of 2, greater than 128, equal to SEEDHASH_EPOCH_BLOCKS

#define CRYPTONOTE_MEMPOOL_TX_LIVETIME                    (86400*3) //seconds, three days
#define CRYPTONOTE_MEMPOOL_TX_FROM_ALT_BLOCK_LIVETIME     604800 //seconds, one week


#define CRYPTONOTE_DANDELIONPP_STEMS              2 // number of outgoing stem connections per epoch
#define CRYPTONOTE_DANDELIONPP_FLUFF_PROBABILITY 20 // out of 100
#define CRYPTONOTE_DANDELIONPP_MIN_EPOCH         10 // minutes
#define CRYPTONOTE_DANDELIONPP_EPOCH_RANGE       30 // seconds
#define CRYPTONOTE_DANDELIONPP_FLUSH_AVERAGE      5 // seconds average for poisson distributed fluff flush
#define CRYPTONOTE_DANDELIONPP_EMBARGO_AVERAGE   39 // seconds (see tx_pool.cpp for more info)

// see src/cryptonote_protocol/levin_notify.cpp
#define CRYPTONOTE_NOISE_MIN_EPOCH                      5      // minutes
#define CRYPTONOTE_NOISE_EPOCH_RANGE                    30     // seconds
#define CRYPTONOTE_NOISE_MIN_DELAY                      10     // seconds
#define CRYPTONOTE_NOISE_DELAY_RANGE                    5      // seconds
#define CRYPTONOTE_NOISE_BYTES                          3*1024 // 3 KiB
#define CRYPTONOTE_NOISE_CHANNELS                       2      // Max outgoing connections per zone used for noise/covert sending

// Both below are in seconds. The idea is to delay forwarding from i2p/tor
// to ipv4/6, such that 2+ incoming connections _could_ have sent the tx
#define CRYPTONOTE_FORWARD_DELAY_BASE (CRYPTONOTE_NOISE_MIN_DELAY + CRYPTONOTE_NOISE_DELAY_RANGE)
#define CRYPTONOTE_FORWARD_DELAY_AVERAGE (CRYPTONOTE_FORWARD_DELAY_BASE + (CRYPTONOTE_FORWARD_DELAY_BASE / 2))

#define CRYPTONOTE_MAX_FRAGMENTS                        20 // ~20 * NOISE_BYTES max payload size for covert/noise send

#define COMMAND_RPC_GET_BLOCKS_FAST_MAX_BLOCK_COUNT     1000
#define COMMAND_RPC_GET_BLOCKS_FAST_MAX_TX_COUNT        20000
#define DEFAULT_RPC_MAX_CONNECTIONS_PER_PUBLIC_IP       3
#define DEFAULT_RPC_MAX_CONNECTIONS_PER_PRIVATE_IP      25
#define DEFAULT_RPC_MAX_CONNECTIONS                     100
#define DEFAULT_RPC_SOFT_LIMIT_SIZE                     25 * 1024 * 1024 // 25 MiB
#define MAX_RPC_CONTENT_LENGTH                          1048576 // 1 MB

#define P2P_LOCAL_WHITE_PEERLIST_LIMIT                  1000
#define P2P_LOCAL_GRAY_PEERLIST_LIMIT                   5000

#define P2P_DEFAULT_CONNECTIONS_COUNT                   12
#define P2P_DEFAULT_HANDSHAKE_INTERVAL                  60           //secondes
#define P2P_DEFAULT_PACKET_MAX_SIZE                     50000000     //50000000 bytes maximum packet size
#define P2P_DEFAULT_PEERS_IN_HANDSHAKE                  250
#define P2P_MAX_PEERS_IN_HANDSHAKE                      250
#define P2P_DEFAULT_CONNECTION_TIMEOUT                  5000       //5 seconds
#define P2P_DEFAULT_SOCKS_CONNECT_TIMEOUT               45         // seconds
#define P2P_DEFAULT_PING_CONNECTION_TIMEOUT             2000       //2 seconds
#define P2P_DEFAULT_INVOKE_TIMEOUT                      60*2*1000  //2 minutes
#define P2P_DEFAULT_HANDSHAKE_INVOKE_TIMEOUT            5000       //5 seconds
#define P2P_DEFAULT_WHITELIST_CONNECTIONS_PERCENT       70
#define P2P_DEFAULT_ANCHOR_CONNECTIONS_COUNT            2
#define P2P_DEFAULT_SYNC_SEARCH_CONNECTIONS_COUNT       2
#define P2P_DEFAULT_LIMIT_RATE_UP                       2048       // kB/s
#define P2P_DEFAULT_LIMIT_RATE_DOWN                     8192       // kB/s

#define P2P_FAILED_ADDR_FORGET_SECONDS                  (60*60)     //1 hour
#define P2P_IP_BLOCKTIME                                (60*60*24)  //24 hour
#define P2P_IP_FAILS_BEFORE_BLOCK                       10
#define P2P_IDLE_CONNECTION_KILL_INTERVAL               (5*60) //5 minutes

#define P2P_SUPPORT_FLAG_FLUFFY_BLOCKS                  0x01
#define P2P_SUPPORT_FLAGS                               P2P_SUPPORT_FLAG_FLUFFY_BLOCKS

#define RPC_IP_FAILS_BEFORE_BLOCK                       3

#define CRYPTONOTE_NAME                         "salvium"
#define CRYPTONOTE_BLOCKCHAINDATA_FILENAME      "data.mdb"
#define CRYPTONOTE_BLOCKCHAINDATA_LOCK_FILENAME "lock.mdb"
#define P2P_NET_DATA_FILENAME                   "p2pstate.bin"
#define RPC_PAYMENTS_DATA_FILENAME              "rpcpayments.bin"
#define MINER_CONFIG_FILE_NAME                  "miner_conf.json"

#define THREAD_STACK_SIZE                       5 * 1024 * 1024

#define SECRET_ENCRYPTION_PK_STR                "5e860406bf9221dba6409faa6eb8fecd6f34acc4935634e76b64b90bf2b6d6a6"
  

/*
#define HF_VERSION_DYNAMIC_FEE                  4
#define HF_VERSION_MIN_MIXIN_4                  6
#define HF_VERSION_MIN_MIXIN_6                  7
#define HF_VERSION_MIN_MIXIN_10                 8
#define HF_VERSION_MIN_MIXIN_15                 15
#define HF_VERSION_ENFORCE_RCT                  6
#define HF_VERSION_PER_BYTE_FEE                 8
#define HF_VERSION_SMALLER_BP                   10
#define HF_VERSION_LONG_TERM_BLOCK_WEIGHT       10
#define HF_VERSION_MIN_2_OUTPUTS                12
#define HF_VERSION_MIN_V2_COINBASE_TX           12
#define HF_VERSION_SAME_MIXIN                   12
#define HF_VERSION_REJECT_SIGS_IN_COINBASE      12
#define HF_VERSION_ENFORCE_MIN_AGE              12
#define HF_VERSION_EFFECTIVE_SHORT_TERM_MEDIAN_IN_PENALTY 12
#define HF_VERSION_EXACT_COINBASE               13
#define HF_VERSION_CLSAG                        13
#define HF_VERSION_DETERMINISTIC_UNLOCK_TIME    13
#define HF_VERSION_BULLETPROOF_PLUS             15
#define HF_VERSION_VIEW_TAGS                    15
#define HF_VERSION_2021_SCALING                 15
*/

#define HF_VERSION_DYNAMIC_FEE                  1
#define HF_VERSION_PER_BYTE_FEE                 1
#define HF_VERSION_ENFORCE_MIN_AGE              1
#define HF_VERSION_EXACT_COINBASE               1
#define HF_VERSION_CLSAG                        1
#define HF_VERSION_DETERMINISTIC_UNLOCK_TIME    1
#define HF_VERSION_SMALLER_BP                   1
#define HF_VERSION_MIN_V2_COINBASE_TX           1
#define HF_VERSION_REJECT_SIGS_IN_COINBASE      1
#define HF_VERSION_BULLETPROOF_PLUS             1
#define HF_VERSION_ENABLE_RETURN                1
#define HF_VERSION_VIEW_TAGS                    1

#define HF_VERSION_LONG_TERM_BLOCK_WEIGHT       2
#define HF_VERSION_2021_SCALING                 2
#define HF_VERSION_ENABLE_N_OUTS                2

#define HF_VERSION_FULL_PROOFS                  3

#define HF_VERSION_ENFORCE_FULL_PROOFS          4

#define HF_VERSION_SHUTDOWN_USER_TXS            5

#define HF_VERSION_AUDIT1                       6
#define HF_VERSION_SALVIUM_ONE_PROOFS           6

#define HF_VERSION_AUDIT1_PAUSE                 7
#define HF_VERSION_AUDIT2                       8
#define HF_VERSION_AUDIT2_PAUSE                 9
#define HF_VERSION_TREASURY_SAL1_MINT           10

#define HF_VERSION_REQUIRE_VIEW_TAGS            255
#define HF_VERSION_ENABLE_CONVERT               255
#define HF_VERSION_ENABLE_ORACLE                255
#define HF_VERSION_SLIPPAGE_YIELD               255

#define TESTNET_VERSION                         14
#define STAGENET_VERSION                        1

#define PER_KB_FEE_QUANTIZATION_DECIMALS        8
#define CRYPTONOTE_SCALING_2021_FEE_ROUNDING_PLACES 2

#define HASH_OF_HASHES_STEP                     512

#define DEFAULT_TXPOOL_MAX_WEIGHT               648000000ull // 3 days at 300000, in bytes

#define BULLETPROOF_MAX_OUTPUTS                 16
#define BULLETPROOF_PLUS_MAX_OUTPUTS            16

#define CRYPTONOTE_PRUNING_STRIPE_SIZE          4096 // the smaller, the smoother the increase
#define CRYPTONOTE_PRUNING_LOG_STRIPES          3 // the higher, the more space saved
#define CRYPTONOTE_PRUNING_TIP_BLOCKS           5500 // the smaller, the more space saved

#define RPC_CREDITS_PER_HASH_SCALE ((float)(1<<24))

#define DNS_BLOCKLIST_LIFETIME (86400 * 8)

#define PRICING_RECORD_VALID_BLOCKS                     10
#define PRICING_RECORD_VALID_TIME_DIFF_FROM_BLOCK       120  // seconds

//The limit is enough for the mandatory transaction content with 16 outputs (547 bytes),
//a custom tag (1 byte) and up to 32 bytes of custom data for each recipient.
// (1+32) + (1+1+16*32) + (1+16*32) = 1060
#define MAX_TX_EXTRA_SIZE                       1060

// New constants are intended to go here
namespace config
{
  uint64_t const DEFAULT_FEE_ATOMIC_XMR_PER_KB = 500; // Just a placeholder!  Change me!
  uint8_t const FEE_CALCULATION_MAX_RETRIES = 10;
  uint64_t const DEFAULT_DUST_THRESHOLD = ((uint64_t)2000000000); // 2 * pow(10, 9)
  uint64_t const BASE_REWARD_CLAMP_THRESHOLD = ((uint64_t)100000000); // pow(10, 8)

  uint64_t const CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 0x3ef318; // SaLv
  uint64_t const CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX = 0x55ef318; // SaLvi
  uint64_t const CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX = 0xf5ef318; // SaLvs
  uint16_t const P2P_DEFAULT_PORT = 19080;
  uint16_t const RPC_DEFAULT_PORT = 19081;
  uint16_t const ZMQ_RPC_DEFAULT_PORT = 19082;
  boost::uuids::uuid const NETWORK_ID = { {
      0x12 ,0x30, 0xF1, 0x71 , 0x61, 0x04 , 0x41, 0x61, 0x17, 0x31, 0x82, 0x53, 0x41, 0x4C, 0xFF, 0x10
    } };

  std::string const GENESIS_TX = "020001ff000180c0d0c7bbbff603031c7d3e2240c8ddbc2966c9dcbf703c3aa99624d34b82fbfebd71dcfa001c59800353414c3cb42101d7be8f8312cdd54e1ae390e86d6733c3d8f1ef7be27f75f5acbf0dc57aa8e60d010000";
  
  uint32_t const GENESIS_NONCE = 10000;

  const std::map<uint8_t, std::pair<uint64_t, std::pair<std::string, std::string>>> AUDIT_HARD_FORKS = {
    {HF_VERSION_AUDIT1, {30*24*10, {"SAL", "SAL1"}}},
    {HF_VERSION_AUDIT2, {30*24*14, {"SAL", "SAL1"}}}
  };
  
  const uint64_t STAKE_LOCK_PERIOD = 30*24*30;
  const uint64_t TREASURY_SAL1_MINT_PERIOD = 30*24*30; // 1 month of blocks

  std::string const TREASURY_ADDRESS = "SaLvdZR6w1A21sf2Wh6jYEh1wzY4GSbT7RX6FjyPsnLsffWLrzFQeXUXJcmBLRWDzZC2YXeYe5t7qKsnrg9FpmxmEcxPHsEYfqA";

  // treasury payout {tx-key, output-key} pairs
  const std::vector<std::pair<std::string, std::string>> TREASURY_SAL1_MINT_OUTPUT_KEYS = {
    {"a1bdd1da651fbbb845232816e1aa2d4ff29b790f10bbd4f574a012f1199e15a4", "b0733ab6f251b16458efa9ebb3fb99bd54d43173b5768fe9ffc42e0fe46ae3a8"},
    {"47996eccbcc078b06d0f6ece37bf3a700c2bd60adfdd898b22096f16a9ad315c", "fd6bcceb4799ee067d59b97a6f66a0f9a70f134220259d3b4d6a2278ba4aca4c"},
    {"a3e6754a849b80c21a77e6065fefdae29eeeabf17c407453356244a00545bdb8", "3d395454df1452d715d27190e022b20395871c99af578f7251c3f9752e0274a6"},
    {"0d5e97a910e0f9c606ad9c711b6595aaed142d857cde2efa519112b9a29240d5", "56c29e28bdcf4f20b4b45906b93ae7c4bf9ee82e18cd45543cb69a14ce5efb88"},
    {"495fa363de88915aa8b74818c4b80715a882a688b4f7127ab7cd3b6885f3567a", "d42dfe0da5579c82e8255eba8c0a17170023f14a6a5030da6abf9f10abb52cbb"},
    {"85ea10ec40390e4f406446fb519e974d89536154045c6df28bb3b538b254e20d", "0ce2b7dd3a8ce8b596889dac8081a62f98fd70f1f043944ab4ac592c3c59e77b"},
    {"40f201b38a319dda81e7201e57fea7924067a4a332ed71b8e51ec29ac2d67310", "8289aa6963b98d1034e94eae55d8be6b33d0a88f14f174ebcbaec70837986c7c"},
    {"c5a648cc7846341357b7b4653a58f9eb4800d88b5de587bceec7a5c28f98d05a", "3f308a203845d88e5e728fcebcdcea1f90e2f424d461617993c672a6138ad2d8"},
    {"4c51d6550b8eeb6cc8f0d395cc83a5f90ec2a4d86501b3f68da48d618ccf5711", "53f0bd8cebeefb3a88fffa5d7f6ad43d4712608ded561732467ca499df940454"},
    {"ce2f5d82118fed03d5e269e285fc16189a6cd34f38999e5c055a5dea5fce61bc", "f7fc6948b194d9bd6f2df6ecb83f04e6c8d1a2556a63fedb310a4631fe1bfc42"},
    {"6248028fd77fb02b5c6ea72dea10b417891a2da7aaf9565aed382e063b4981a3", "63986e1177499bdb23cd49afb519ec18f38cb1b0c386220b376d8ffdc2e37890"},
    {"6adcb695aa5d6d01133c68900f29e501e9549816e827ea0c164bbc78f3534dd6", "6a440ccb18f5e703e8000de3865ac40d4c18f081270d32eef377dc831f28d8d0"},
    {"b97a4d2259480f34f20e41c489ab5c2e5ae9ee84d8672a7eff8012f2260e121e", "e6eb9147ff40e22209d321d0f1bfbfe20acf5ceb6b9d0bfb13688ad28aa1232e"},
    {"4fd214602a36902f22d16927244c456e8cc5a406a9570131f138a028214ffdf0", "34060b8bd96009b9b298280ebd84fa9587fa8c9df6fb5ad0270fb6cd2098885c"},
    {"9d60178ec6d6599d7a31298f2559fb9c3111f2c70494b3a1638db877ea55b808", "7985ed03856a929663e954738d0938713407717835f760c7ca4d54844a128c91"},
    {"cd65718eab234bf419332e53bd2f48e2ade70af48c5e126ab5080321e1493dfc", "581cb4cca7a0a029ee2cac51dfc00a0c3a657d2eaf67ed3c6ae7bacc11b4f007"},
  };

  // Hash domain separators
  const char HASH_KEY_BULLETPROOF_EXPONENT[] = "bulletproof";
  const char HASH_KEY_BULLETPROOF_PLUS_EXPONENT[] = "bulletproof_plus";
  const char HASH_KEY_BULLETPROOF_PLUS_TRANSCRIPT[] = "bulletproof_plus_transcript";
  const char HASH_KEY_RINGDB[] = "ringdsb";
  const char HASH_KEY_SUBADDRESS[] = "SubAddr";
  const unsigned char HASH_KEY_ENCRYPTED_PAYMENT_ID = 0x8d;
  const unsigned char HASH_KEY_WALLET = 0x8c;
  const unsigned char HASH_KEY_WALLET_CACHE = 0x8d;
  const unsigned char HASH_KEY_BACKGROUND_CACHE = 0x8e;
  const unsigned char HASH_KEY_BACKGROUND_KEYS_FILE = 0x8f;
  const unsigned char HASH_KEY_RPC_PAYMENT_NONCE = 0x58;
  const unsigned char HASH_KEY_MEMORY = 'k';
  const unsigned char HASH_KEY_MULTISIG[] = {'M', 'u', 'l', 't' , 'i', 's', 'i', 'g', 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
  const unsigned char HASH_KEY_MULTISIG_KEY_AGGREGATION[] = "Multisig_key_agg";
  const unsigned char HASH_KEY_CLSAG_ROUND_MULTISIG[] = "CLSAG_round_ms_merge_factor";
  const unsigned char HASH_KEY_TXPROOF_V2[] = "TXPROOF_V2";
  const unsigned char HASH_KEY_CLSAG_ROUND[] = "CLSAG_round";
  const unsigned char HASH_KEY_CLSAG_AGG_0[] = "CLSAG_agg_0";
  const unsigned char HASH_KEY_CLSAG_AGG_1[] = "CLSAG_agg_1";
  const char HASH_KEY_MESSAGE_SIGNING[] = "MoneroMessageSignature";
  const unsigned char HASH_KEY_MM_SLOT = 'm';
  const constexpr char HASH_KEY_MULTISIG_TX_PRIVKEYS_SEED[] = "multisig_tx_privkeys_seed";
  const constexpr char HASH_KEY_MULTISIG_TX_PRIVKEYS[] = "multisig_tx_privkeys";
  const constexpr char HASH_KEY_TXHASH_AND_MIXRING[] = "txhash_and_mixring";

  // Multisig
  const uint32_t MULTISIG_MAX_SIGNERS{16};

  std::array<std::string, 3> const ORACLE_URLS = {{"oracle.salvium.io:8443", "oracle.salvium.io:8443", "oracle.salvium.io:8443"}};
  
  std::string const ORACLE_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n"
    "MIIDRDCCAjYGByqGSM44BAEwggIpAoIBAQCZP7IJ5PcNvGbWiEqAioKF9wViVxEN\n"
    "ZBDHvhr8IR6KoSYUXMU154DC6NDiSr6FtPBWuw9LcXlfWdG0l3hd6zObg0GpEQig\n"
    "jEeOEeBm45ug9lMBSZiaiCHeU8ats1YIQBYDO8m7iAj9Q9/N1nJHDpypsVu5WGLm\n"
    "+xSmcNULTbqwJ4Sr49TD++sv2MZEJeYRwmmxlqeFFtZlxguwJ90Y5U7aSi4w4vaU\n"
    "pu/Ce6EWi8pVhUlM5xBBk3tc+Z6FMMgKFN/kHyu3SbxFaRQppbsTo0N3yDAr3sN3\n"
    "4JmXpRmDidd3czfKlFko11YwK9lohjrgBnStuFRBxDACx4NRfvRfwPqnAh0AhKyn\n"
    "pbe2No+7lLGSWuQvIEz+2o6coQ3ZWPbxqQKCAQEAkErfS61wvKxbMwPuuqhCpZG/\n"
    "uQ+WYHwRwyxpU7ImKiH6ubqModIvZoHrRD8MIJhbRmBlA58SSnBWrEcAUIaaDM6Z\n"
    "xX/VyOFy2mJH3TJJa83oZe275w1JMVrVq1ZybXSYF595zAHNiJcYsskqTbZP8S30\n"
    "i3Bq//HMUaRhmB60BLmPpmgF3FVsRkCyEL/yH9cUQWdUcuxIG3C7EzgxGUCaR42J\n"
    "cu+NN8z6W/m/joEe6QkFT3tLh1yXIFBK1MamWC0EZ6YCMcozZfGQ15P3rMrGptKN\n"
    "+YQRNusTDSqBky+f40dLiYcT28ePQWNPLdsZTqoGWGawqCyWWCh5eWJZSqJPfQOC\n"
    "AQYAAoIBAQCE+8kHJmagnDPQWiuHziNha5yia7viwasxcsKhYGx+Z3wVbMrDPwLo\n"
    "CUgljEEsOKXLZsg/EmfVQu9nYoTcMa0hNq0/0bEV9oZ0t4O8gLp2Y4URLngR9zxE\n"
    "WaVgFLlNtndHUQA2kquP3XLkv/TZVQaqne6tO6p4gLC4ky0YH0vZhWXMOH/4Xfgf\n"
    "FZHC7SBC3oYsK9UKX3tJoibcL9L18GOe27pIw70x0280IB/C+TBnAXjslNgJe5ZU\n"
    "rSdr1h2nXji0rXL9DoypVC40QGIzzjCGMsSBnSYgVuITeqX8/o/w5LBK8Dl5wXFt\n"
    "F9dg9A0deyw/3CA3gwB32zkfi4MEH+il\n"
    "-----END PUBLIC KEY-----\n";
    /*
      std::string const ORACLE_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n"
      "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5YBxWx1AZCA9jTUk8Pr2uZ9jpfRt\n"
      "KWv3Vo1/Gny+1vfaxsXhBQiG1KlHkafNGarzoL0WHW4ocqaaqF5iv8i35A==\n"
      "-----END PUBLIC KEY-----\n";
    */
  namespace testnet
  {
    uint64_t const CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 0x15beb318; // SaLvT
    uint64_t const CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX = 0xd055eb318; // SaLvTi
    uint64_t const CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX = 0xa59eb318; // SaLvTs
    uint16_t const P2P_DEFAULT_PORT = 29080;
    uint16_t const RPC_DEFAULT_PORT = 29081;
    uint16_t const ZMQ_RPC_DEFAULT_PORT = 29082;
    boost::uuids::uuid const NETWORK_ID = { {
        0x12 ,0x30, 0xF1, 0x71 , 0x61, 0x04 , 0x41, 0x61, 0x17, 0x31, 0x82, 0x53, 0x41, 0x4C, 0x00, TESTNET_VERSION
      } };
    std::string const GENESIS_TX = "020001ff000180c0d0c7bbbff60302838f76f69b70bb0d0f1961a12f6082a033d22285c07d4f12ec93c28197ae2a600353414c3c2101009e8b0abce686c417a1b1344eb7337176bdca90cc928b0facec8a9516190645010000";
    uint32_t const GENESIS_NONCE = 10001;

    const std::map<uint8_t, std::pair<uint64_t, std::pair<std::string, std::string>>> AUDIT_HARD_FORKS = {
      {HF_VERSION_AUDIT1, {30, {"SAL", "SAL1"}}},
      {HF_VERSION_AUDIT2, {40, {"SAL", "SAL1"}}},
    };
    
    const uint64_t STAKE_LOCK_PERIOD = 20;
    const uint64_t TREASURY_SAL1_MINT_PERIOD = 20;
  
    std::array<std::string, 3> const ORACLE_URLS = {{"oracle.salvium.io:8443", "oracle.salvium.io:8443", "oracle.salvium.io:8443"}};

    std::string const ORACLE_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n"
      "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5YBxWx1AZCA9jTUk8Pr2uZ9jpfRt\n"
      "KWv3Vo1/Gny+1vfaxsXhBQiG1KlHkafNGarzoL0WHW4ocqaaqF5iv8i35A==\n"
      "-----END PUBLIC KEY-----\n";

    std::string const TREASURY_ADDRESS = "SaLvTyLFta9BiAXeUfFkKvViBkFt4ay5nEUBpWyDKewYggtsoxBbtCUVqaBjtcCDyY1euun8Giv7LLEgvztuurLo5a6Km1zskZn36";

    // treasury payout {tx-key, output-key} pairs
    const std::vector<std::pair<std::string, std::string>> TREASURY_SAL1_MINT_OUTPUT_KEYS = {
      {"a1bdd1da651fbbb845232816e1aa2d4ff29b790f10bbd4f574a012f1199e15a4", "b0733ab6f251b16458efa9ebb3fb99bd54d43173b5768fe9ffc42e0fe46ae3a8"},
      {"47996eccbcc078b06d0f6ece37bf3a700c2bd60adfdd898b22096f16a9ad315c", "fd6bcceb4799ee067d59b97a6f66a0f9a70f134220259d3b4d6a2278ba4aca4c"},
      {"a3e6754a849b80c21a77e6065fefdae29eeeabf17c407453356244a00545bdb8", "3d395454df1452d715d27190e022b20395871c99af578f7251c3f9752e0274a6"},
      {"0d5e97a910e0f9c606ad9c711b6595aaed142d857cde2efa519112b9a29240d5", "56c29e28bdcf4f20b4b45906b93ae7c4bf9ee82e18cd45543cb69a14ce5efb88"},
      {"495fa363de88915aa8b74818c4b80715a882a688b4f7127ab7cd3b6885f3567a", "d42dfe0da5579c82e8255eba8c0a17170023f14a6a5030da6abf9f10abb52cbb"},
      {"85ea10ec40390e4f406446fb519e974d89536154045c6df28bb3b538b254e20d", "0ce2b7dd3a8ce8b596889dac8081a62f98fd70f1f043944ab4ac592c3c59e77b"},
      {"40f201b38a319dda81e7201e57fea7924067a4a332ed71b8e51ec29ac2d67310", "8289aa6963b98d1034e94eae55d8be6b33d0a88f14f174ebcbaec70837986c7c"},
      {"c5a648cc7846341357b7b4653a58f9eb4800d88b5de587bceec7a5c28f98d05a", "3f308a203845d88e5e728fcebcdcea1f90e2f424d461617993c672a6138ad2d8"},
      {"4c51d6550b8eeb6cc8f0d395cc83a5f90ec2a4d86501b3f68da48d618ccf5711", "53f0bd8cebeefb3a88fffa5d7f6ad43d4712608ded561732467ca499df940454"},
      {"ce2f5d82118fed03d5e269e285fc16189a6cd34f38999e5c055a5dea5fce61bc", "f7fc6948b194d9bd6f2df6ecb83f04e6c8d1a2556a63fedb310a4631fe1bfc42"},
      {"6248028fd77fb02b5c6ea72dea10b417891a2da7aaf9565aed382e063b4981a3", "63986e1177499bdb23cd49afb519ec18f38cb1b0c386220b376d8ffdc2e37890"},
      {"6adcb695aa5d6d01133c68900f29e501e9549816e827ea0c164bbc78f3534dd6", "6a440ccb18f5e703e8000de3865ac40d4c18f081270d32eef377dc831f28d8d0"},
      {"b97a4d2259480f34f20e41c489ab5c2e5ae9ee84d8672a7eff8012f2260e121e", "e6eb9147ff40e22209d321d0f1bfbfe20acf5ceb6b9d0bfb13688ad28aa1232e"},
      {"4fd214602a36902f22d16927244c456e8cc5a406a9570131f138a028214ffdf0", "34060b8bd96009b9b298280ebd84fa9587fa8c9df6fb5ad0270fb6cd2098885c"},
      {"9d60178ec6d6599d7a31298f2559fb9c3111f2c70494b3a1638db877ea55b808", "7985ed03856a929663e954738d0938713407717835f760c7ca4d54844a128c91"},
      {"cd65718eab234bf419332e53bd2f48e2ade70af48c5e126ab5080321e1493dfc", "581cb4cca7a0a029ee2cac51dfc00a0c3a657d2eaf67ed3c6ae7bacc11b4f007"},
    };
  }

  namespace stagenet
  {
    uint64_t const CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 0x149eb318; // SaLvS
    uint64_t const CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX = 0xf343eb318; // SaLvSi
    uint64_t const CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX = 0x2d47eb318; // SaLvSs
    uint16_t const P2P_DEFAULT_PORT = 39080;
    uint16_t const RPC_DEFAULT_PORT = 39081;
    uint16_t const ZMQ_RPC_DEFAULT_PORT = 39082;
    boost::uuids::uuid const NETWORK_ID = { {
        0x12 ,0x30, 0xF1, 0x71 , 0x61, 0x04 , 0x41, 0x61, 0x17, 0x31, 0x82, 0x53, 0x41, 0x4C, 0x80, STAGENET_VERSION
      } };
    std::string const GENESIS_TX = "013c01ff0001ffffffffffff0302df5d56da0c7d643ddd1ce61901c7bdc5fb1738bfe39fbe69c28a3a7032729c0f2101168d0c4ca86fb55a4cf6a36d31431be1c53a3bd7411bb24e8832410289fa6f3b";
    uint32_t const GENESIS_NONCE = 10002;

    const std::map<uint8_t, std::pair<uint64_t, std::pair<std::string, std::string>>> AUDIT_HARD_FORKS = { {HF_VERSION_AUDIT1, {30, {"SAL", "SAL1"}}} };
    
    const uint64_t STAKE_LOCK_PERIOD = 20;
    const uint64_t TREASURY_SAL1_MINT_PERIOD = 20;
  
    std::array<std::string, 3> const ORACLE_URLS = {{"oracle.salvium.io:8443", "oracle.salvium.io:8443", "oracle.salvium.io:8443"}};

    std::string const ORACLE_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n"
      "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5YBxWx1AZCA9jTUk8Pr2uZ9jpfRt\n"
      "KWv3Vo1/Gny+1vfaxsXhBQiG1KlHkafNGarzoL0WHW4ocqaaqF5iv8i35A==\n"
      "-----END PUBLIC KEY-----\n";

    std::string const TREASURY_ADDRESS = "fuLMowH85abK8nz9BBMEem7MAfUbQu4aSHHUV9j5Z86o6Go9Lv2U5ZQiJCWPY9R9HA8p5idburazjAhCqDngLo7fYPCD9ciM9ee1A";

    // treasury payout {tx-key, output-key} pairs
    const std::vector<std::pair<std::string, std::string>> TREASURY_SAL1_MINT_OUTPUT_KEYS = {
      {"a1bdd1da651fbbb845232816e1aa2d4ff29b790f10bbd4f574a012f1199e15a4", "b0733ab6f251b16458efa9ebb3fb99bd54d43173b5768fe9ffc42e0fe46ae3a8"},
      {"47996eccbcc078b06d0f6ece37bf3a700c2bd60adfdd898b22096f16a9ad315c", "fd6bcceb4799ee067d59b97a6f66a0f9a70f134220259d3b4d6a2278ba4aca4c"},
      {"a3e6754a849b80c21a77e6065fefdae29eeeabf17c407453356244a00545bdb8", "3d395454df1452d715d27190e022b20395871c99af578f7251c3f9752e0274a6"},
      {"0d5e97a910e0f9c606ad9c711b6595aaed142d857cde2efa519112b9a29240d5", "56c29e28bdcf4f20b4b45906b93ae7c4bf9ee82e18cd45543cb69a14ce5efb88"},
      {"495fa363de88915aa8b74818c4b80715a882a688b4f7127ab7cd3b6885f3567a", "d42dfe0da5579c82e8255eba8c0a17170023f14a6a5030da6abf9f10abb52cbb"},
      {"85ea10ec40390e4f406446fb519e974d89536154045c6df28bb3b538b254e20d", "0ce2b7dd3a8ce8b596889dac8081a62f98fd70f1f043944ab4ac592c3c59e77b"},
      {"40f201b38a319dda81e7201e57fea7924067a4a332ed71b8e51ec29ac2d67310", "8289aa6963b98d1034e94eae55d8be6b33d0a88f14f174ebcbaec70837986c7c"},
      {"c5a648cc7846341357b7b4653a58f9eb4800d88b5de587bceec7a5c28f98d05a", "3f308a203845d88e5e728fcebcdcea1f90e2f424d461617993c672a6138ad2d8"},
      {"4c51d6550b8eeb6cc8f0d395cc83a5f90ec2a4d86501b3f68da48d618ccf5711", "53f0bd8cebeefb3a88fffa5d7f6ad43d4712608ded561732467ca499df940454"},
      {"ce2f5d82118fed03d5e269e285fc16189a6cd34f38999e5c055a5dea5fce61bc", "f7fc6948b194d9bd6f2df6ecb83f04e6c8d1a2556a63fedb310a4631fe1bfc42"},
      {"6248028fd77fb02b5c6ea72dea10b417891a2da7aaf9565aed382e063b4981a3", "63986e1177499bdb23cd49afb519ec18f38cb1b0c386220b376d8ffdc2e37890"},
      {"6adcb695aa5d6d01133c68900f29e501e9549816e827ea0c164bbc78f3534dd6", "6a440ccb18f5e703e8000de3865ac40d4c18f081270d32eef377dc831f28d8d0"},
      {"b97a4d2259480f34f20e41c489ab5c2e5ae9ee84d8672a7eff8012f2260e121e", "e6eb9147ff40e22209d321d0f1bfbfe20acf5ceb6b9d0bfb13688ad28aa1232e"},
      {"4fd214602a36902f22d16927244c456e8cc5a406a9570131f138a028214ffdf0", "34060b8bd96009b9b298280ebd84fa9587fa8c9df6fb5ad0270fb6cd2098885c"},
      {"9d60178ec6d6599d7a31298f2559fb9c3111f2c70494b3a1638db877ea55b808", "7985ed03856a929663e954738d0938713407717835f760c7ca4d54844a128c91"},
      {"cd65718eab234bf419332e53bd2f48e2ade70af48c5e126ab5080321e1493dfc", "581cb4cca7a0a029ee2cac51dfc00a0c3a657d2eaf67ed3c6ae7bacc11b4f007"},
    };
  }
}

namespace cryptonote
{
  enum network_type : uint8_t
  {
    MAINNET = 0,
    TESTNET,
    STAGENET,
    FAKECHAIN,
    UNDEFINED = 255
  };
  struct config_t
  {
    uint64_t const CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX;
    uint64_t const CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX;
    uint64_t const CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX;
    uint16_t const P2P_DEFAULT_PORT;
    uint16_t const RPC_DEFAULT_PORT;
    uint16_t const ZMQ_RPC_DEFAULT_PORT;
    boost::uuids::uuid const NETWORK_ID;
    std::string const GENESIS_TX;
    uint32_t const GENESIS_NONCE;
    std::array<std::string, 3> const ORACLE_URLS;
    std::string const ORACLE_PUBLIC_KEY;
    uint64_t const STAKE_LOCK_PERIOD;
    uint64_t TREASURY_SAL1_MINT_PERIOD;
    std::map<uint8_t, std::pair<uint64_t, std::pair<std::string, std::string>>> const AUDIT_HARD_FORKS;
    std::string TREASURY_ADDRESS;
    std::vector<std::pair<std::string, std::string>> TREASURY_SAL1_MINT_OUTPUT_KEYS;
  };
  inline const config_t& get_config(network_type nettype)
  {
    static const config_t mainnet = {
      ::config::CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX,
      ::config::CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX,
      ::config::CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX,
      ::config::P2P_DEFAULT_PORT,
      ::config::RPC_DEFAULT_PORT,
      ::config::ZMQ_RPC_DEFAULT_PORT,
      ::config::NETWORK_ID,
      ::config::GENESIS_TX,
      ::config::GENESIS_NONCE,
      ::config::ORACLE_URLS,
      ::config::ORACLE_PUBLIC_KEY,
      ::config::STAKE_LOCK_PERIOD,
      ::config::TREASURY_SAL1_MINT_PERIOD,
      ::config::AUDIT_HARD_FORKS,
      ::config::TREASURY_ADDRESS,
      ::config::TREASURY_SAL1_MINT_OUTPUT_KEYS
    };
    static const config_t testnet = {
      ::config::testnet::CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX,
      ::config::testnet::CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX,
      ::config::testnet::CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX,
      ::config::testnet::P2P_DEFAULT_PORT,
      ::config::testnet::RPC_DEFAULT_PORT,
      ::config::testnet::ZMQ_RPC_DEFAULT_PORT,
      ::config::testnet::NETWORK_ID,
      ::config::testnet::GENESIS_TX,
      ::config::testnet::GENESIS_NONCE,
      ::config::testnet::ORACLE_URLS,
      ::config::testnet::ORACLE_PUBLIC_KEY,
      ::config::testnet::STAKE_LOCK_PERIOD,
      ::config::testnet::TREASURY_SAL1_MINT_PERIOD,
      ::config::testnet::AUDIT_HARD_FORKS,
      ::config::testnet::TREASURY_ADDRESS,
      ::config::testnet::TREASURY_SAL1_MINT_OUTPUT_KEYS
    };
    static const config_t stagenet = {
      ::config::stagenet::CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX,
      ::config::stagenet::CRYPTONOTE_PUBLIC_INTEGRATED_ADDRESS_BASE58_PREFIX,
      ::config::stagenet::CRYPTONOTE_PUBLIC_SUBADDRESS_BASE58_PREFIX,
      ::config::stagenet::P2P_DEFAULT_PORT,
      ::config::stagenet::RPC_DEFAULT_PORT,
      ::config::stagenet::ZMQ_RPC_DEFAULT_PORT,
      ::config::stagenet::NETWORK_ID,
      ::config::stagenet::GENESIS_TX,
      ::config::stagenet::GENESIS_NONCE,
      ::config::stagenet::ORACLE_URLS,
      ::config::stagenet::ORACLE_PUBLIC_KEY,
      ::config::stagenet::STAKE_LOCK_PERIOD,
      ::config::stagenet::TREASURY_SAL1_MINT_PERIOD,
      ::config::stagenet::AUDIT_HARD_FORKS,
      ::config::stagenet::TREASURY_ADDRESS,
      ::config::stagenet::TREASURY_SAL1_MINT_OUTPUT_KEYS
    };
    switch (nettype)
    {
      case MAINNET: return mainnet;
      case TESTNET: return testnet;
      case STAGENET: return stagenet;
      case FAKECHAIN: return mainnet;
      default: throw std::runtime_error("Invalid network type");
    }
  };
}
