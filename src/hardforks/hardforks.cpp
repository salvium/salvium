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

#include "hardforks.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "blockchain.hardforks"

const hardfork_t mainnet_hard_forks[] = {
  // version 1 from the start of the blockchain
  { 1, 1, 0, 1341378000 },

  // version 2 starts from block 89800, which is on or around the 4th of November, 2024. Fork time finalised on 2024-10-21. No fork voting occurs for the v2 fork.
  { 2, 89800, 0, 1729518000 },

  // version 3 starts from block 121100, which is on or around the 19th of December, 2024. Fork time finalised on 2024-12-18. No fork voting occurs for the v3 fork.
  { 3, 121100, 0, 1734516900 },

  // version 4 starts from block 121100, which is on or around the 20th of December, 2024. Fork time finalised on 2024-12-19. No fork voting occurs for the v4 fork.
  { 4, 121800, 0, 1734607000 },
  
  // version 5 starts from block 136100, which is on or around the 9th of January, 2025. Fork time finalised on 2025-01-08. No fork voting occurs for the v5 fork.
  { 5, 136100, 0, 1736265945 },
  
  // version 6 starts from block 154750, which is on or around the 4th of February, 2025. Fork time finalised on 2025-01-31. No fork voting occurs for the v6 fork.
  { 6, 154750, 0, 1738336000 },
  
  // version 7 starts from block 161900, which is on or around the 14th of February, 2025. Fork time finalised on 2025-02-04. No fork voting occurs for the v7 fork.
  { 7, 161900, 0, 1739264400 },

  // version 8 starts from block 172000, which is on or around the 28th of February, 2025. Fork time finalised on 2025-02-24. No fork voting occurs for the v8 fork.
  { 8, 172000, 0, 1740390000 },
  
  // version 9 starts from block 179200, which is on or around the 10th of March, 2025. Fork time finalised on 2025-02-24. No fork voting occurs for the v9 fork.
  { 9, 179200, 0, 1740393800 },
};
const size_t num_mainnet_hard_forks = sizeof(mainnet_hard_forks) / sizeof(mainnet_hard_forks[0]);
const uint64_t mainnet_hard_fork_version_1_till = ((uint64_t)-1);

const hardfork_t testnet_hard_forks[] = {
  // version 1 from the start of the blockchain
  { 1, 1, 0, 1341378000 },

  // version 2 starts from block 250
  { 2, 250, 0, 1445355000 },

  // version 3 starts from block 500
  { 3, 500, 0, 1729518000 },

  // version 4 (full proofs) starts from block 600
  { 4, 600, 0, 1734607000 },

  // version 5 (TX shutdown) starts from block 800
  { 5, 800, 0, 1734607005 },

  // version 6 (audit 1) starts from block 815
  { 6, 815, 0, 1734608000 },

  // version 7 (audit 1 pause, blacklist controlling payouts) starts from block 900
  { 7, 900, 0, 1739264400 },

  // version 8 (audit 1 resume) starts from block 950
  { 8, 950, 0, 1739270000 },

  // version 9 (audit 1 complete, whitelist controlling payouts) starts from block 1000
  { 9, 1000, 0, 1739280000 },

  // version 10 treasury mint starts from block 1100
  {10, 1100, 0, 1739780005 },
  
  // version 11 carrot starts from block 1500
  {11, 1500, 0, 1739780010 },
};
const size_t num_testnet_hard_forks = sizeof(testnet_hard_forks) / sizeof(testnet_hard_forks[0]);
const uint64_t testnet_hard_fork_version_1_till = ((uint64_t)-1);

const hardfork_t stagenet_hard_forks[] = {
  // version 1 from the start of the blockchain
  { 1, 1, 0, 1341378000 },

  // versions 2-7 in rapid succession from March 13th, 2018
  //{ 2, 1000, 0, 1521000000 },
};
const size_t num_stagenet_hard_forks = sizeof(stagenet_hard_forks) / sizeof(stagenet_hard_forks[0]);
