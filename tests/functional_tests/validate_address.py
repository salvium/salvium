#!/usr/bin/env python3

# Copyright (c) 2019-2022, The Monero Project
# 
# All rights reserved.
# 
# Redistribution and use in source and binary forms, with or without modification, are
# permitted provided that the following conditions are met:
# 
# 1. Redistributions of source code must retain the above copyright notice, this list of
#    conditions and the following disclaimer.
# 
# 2. Redistributions in binary form must reproduce the above copyright notice, this list
#    of conditions and the following disclaimer in the documentation and/or other
#    materials provided with the distribution.
# 
# 3. Neither the name of the copyright holder nor the names of its contributors may be
#    used to endorse or promote products derived from this software without specific
#    prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
# THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
# STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
# THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

"""Test address validation RPC calls
"""

from __future__ import print_function
from framework.wallet import Wallet

class AddressValidationTest():
    def run_test(self):
      self.create()
      self.check_bad_addresses()
      self.check_good_addresses()
      self.check_openalias_addresses()

    def create(self):
        print('Creating wallet')
        seed = 'velvet lymph giddy number token physics poetry unquoted nibs useful sabotage limits benches lifestyle eden nitrogen anvil fewest avoid batch vials washing fences goat unquoted'
        address = 'SaLvdTfLFUK1LuPhZbqYYiLwmDEw4zTeChBU8Vbz4rw1U1bbDiyUtsZ9iYSE7AsekiSRpwAQt7qmNZ2MtE5hi2nMLG2Zwbb2rwH'
        self.wallet = Wallet()
        # close the wallet if any, will throw if none is loaded
        try: self.wallet.close_wallet()
        except: pass
        res = self.wallet.restore_deterministic_wallet(seed = seed)
        assert res.address == address
        assert res.seed == seed

    def check_bad_addresses(self):
        print('Validating bad addresses')
        bad_addresses = ['', 'a', '42ey1afDFnn4886T7196doS9GPMzexD9gXpsZJDwVjeRVdFCSoHnv7KPbBeGpzJBzHRCAs9UxqeoyFQMYbqSWYTfJJQAWD9', ' ', '@', '42ey']
        for address in bad_addresses:
            res = self.wallet.validate_address(address, any_net_type = False)
            assert not res.valid
            res = self.wallet.validate_address(address, any_net_type = True)
            assert not res.valid

    def check_good_addresses(self):
        print('Validating good addresses')
        addresses = [
            [ 'mainnet',  '', 'SC11pP3tKp5e5UJwTeTNhXQpv4UsbpmvTDSKRn22X1gLVTfJKyfJMbG6apw15backjJxGgi8pVT1sJA5p1etwT232pL2xUbKUB' ],
            [ 'mainnet',  '', 'SaLvdTfLFUK1LuPhZbqYYiLwmDEw4zTeChBU8Vbz4rw1U1bbDiyUtsZ9iYSE7AsekiSRpwAQt7qmNZ2MtE5hi2nMLG2Zwbb2rwH' ],
            [ 'mainnet', 'i', 'SC1ikPBiEYhaw46LrjMr2xZYSavdBrfdhCRWAWh8bs6tQ2X8cfwDyvrSwxdSS4k9VUTATr7gx955BDSnE3RAZ9xo744YY1wtAaJQ2amdN3hZFQ' ],
            [ 'mainnet', 's', 'SaLvs6zXaGBcBKkztRcNev8q1WuusrW5wd6JPScD2HFL3CUCoEYpv952Saeut7byKuZdYJEhsCMApNg8Wz1K5Bbs1pWWHw27pXb' ],
            [ 'testnet',  '', 'SC1TouyPUi5aw46LrjMr2xZYSavdBrfdhCRWAWh8bs6tQ2X8cfwDyvrSwxdSS4k9VUTATr7gx955BDSnE3RAZ9xo744YY5UQbRY' ],
            [ 'testnet',  '', 'SaLvTyKwuTDBhxZS619Bep8Gg1BJBQvhG8gfGRtA6G7nfuozHVppPAriWtMbAy26iWj5mydoj76XkQi8eqPnHVTURVkHTzQmQ8x28' ],
            [ 'testnet', 'i', 'SC1TiyLHbwj2ohcbCrqj2Li7BRZpFbDX495FPNRCpFfRe4CEdwA6RALEz5oFzPCN84GKk1gGoBp19RUCjfo2EpMxF5H3LDaQvDrJKSspVMsZ9G4m' ],
            [ 'testnet', 's', 'SaLvTs1u7PKSroMXVJTwAJUb96VQc1tGniYKqifecCCXRPWdEftAzaQSNLyn585Ksw5FkNB5TG7hFFmHPqkmQm1ZbDFREDuEBcv4n' ],
            [ 'stagenet',  '', 'SC1Sp9dEVeqaw46LrjMr2xZYSavdBrfdhCRWAWh8bs6tQ2X8cfwDyvrSwxdSS4k9VUTATr7gx955BDSnE3RAZ9xo744YY5Dpsn4' ],
            [ 'stagenet',  '', 'SaLvSxSASAjBhxZS619Bep8Gg1BJBQvhG8gfGRtA6G7nfuozHVppPAriWtMbAy26iWj5mydoj76XkQi8eqPnHVTURVkHTzPqygN4c' ],
            [ 'stagenet', 'i', 'SC1Siyu4xbw2ohcbCrqj2Li7BRZpFbDX495FPNRCpFfRe4CEdwA6RALEz5oFzPCN84GKk1gGoBp19RUCjfo2EpMxF5H3LDaQvDrJKSspVLmJQe1W' ],
            [ 'stagenet', 's', 'SaLvSs21CxuSroMXVJTwAJUb96VQc1tGniYKqifecCCXRPWdEftAzaQSNLyn585Ksw5FkNB5TG7hFFmHPqkmQm1ZbDFREDtoDdf1p' ],
        ]
        for any_net_type in [True, False]:
            for address in addresses:
                res = self.wallet.validate_address(address[2], any_net_type = any_net_type)
                if any_net_type or address[0] == 'mainnet':
                    assert res.valid
                    assert res.integrated == (address[1] == 'i')
                    assert res.subaddress == (address[1] == 's')
                    assert res.nettype == address[0]
                    assert res.openalias_address == ''
                else:
                    assert not res.valid

    def check_openalias_addresses(self):
        print('Validating openalias addresses')
        # Keep this deterministic and independent of external DNS.  The RPC must
        # reject a nonexistent alias both with and without OpenAlias resolution.
        address = 'nonexistent-openalias.invalid'
        assert not self.wallet.validate_address(address).valid
        assert not self.wallet.validate_address(address, allow_openalias = True).valid

if __name__ == '__main__':
    AddressValidationTest().run_test()
