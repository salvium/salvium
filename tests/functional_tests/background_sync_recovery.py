#!/usr/bin/env python3
"""Persist background sync, kill the wallet process, and reopen its cache."""
import os
import pathlib
import socket
import subprocess
import tempfile
import time

from framework.daemon import Daemon
from framework.wallet import Wallet


def run_case(mode):
    binary = pathlib.Path(os.environ['WALLET_DIRECTORY']).parent / 'bin' / 'salvium-wallet-rpc'
    with tempfile.TemporaryDirectory(prefix='salvium-background-crash-') as directory:
        with socket.socket() as sock:
            sock.bind(('127.0.0.1', 0))
            port = sock.getsockname()[1]
        wallet = Wallet(port=port)
        command = [str(binary), '--wallet-dir', directory, '--rpc-bind-ip', '127.0.0.1',
                   '--rpc-bind-port', str(port), '--disable-rpc-login', '--rpc-ssl', 'disabled',
                   '--daemon-ssl', 'disabled', '--daemon-address', '127.0.0.1:18180',
                   '--log-file', directory + '/wallet.log', '--allow-mismatched-daemon-version']
        process = None
        with open(directory + '/process.log', 'wb') as log:
            def start():
                child = subprocess.Popen(command, stdout=log, stderr=subprocess.STDOUT)
                for _ in range(200):
                    if child.poll() is not None:
                        raise RuntimeError('Test wallet exited during startup')
                    try:
                        with socket.create_connection(('127.0.0.1', port), timeout=0.2):
                            return child
                    except OSError:
                        time.sleep(0.05)
                child.kill()
                child.wait(timeout=10)
                raise RuntimeError('Test wallet did not start')
            try:
                process = start()
                wallet.create_wallet(filename='crash', password='main-password')
                wallet.auto_refresh(enable=False)
                address = wallet.get_address().address
                wallet.refresh()
                initial_balance = wallet.get_balance(allow_missing=True).balance
                kwargs = dict(background_sync_type=mode, wallet_password='main-password')
                if mode == wallet.background_sync_options.custom_password:
                    kwargs['background_cache_password'] = 'background-password'
                wallet.setup_background_sync(**kwargs)
                wallet.start_background_sync()
                Daemon().generateblocks(address, 1)
                wallet.refresh()
                expected_balance = wallet.get_balance().balance
                expected_height = wallet.get_height().height
                assert expected_balance > initial_balance
                wallet.store()
                # Kill only the child created here, without a graceful close or
                # another cache write. Recovery must use the persisted data.
                process.kill()
                process.wait(timeout=10)
                process = start()
                wallet.open_wallet(filename='crash', password='main-password')
                wallet.auto_refresh(enable=False)
                assert wallet.get_address().address == address
                assert wallet.get_balance().balance == expected_balance
                assert wallet.get_height().height == expected_height
                wallet.close_wallet()
                wallet.open_wallet(filename='crash', password='main-password')
                wallet.auto_refresh(enable=False)
                assert wallet.get_balance().balance == expected_balance
                wallet.close_wallet()
                print('Background crash recovery passed:', mode, flush=True)
            finally:
                if process is not None and process.poll() is None:
                    process.terminate()
                    try:
                        process.wait(timeout=15)
                    except subprocess.TimeoutExpired:
                        process.kill()
                        process.wait(timeout=10)


if __name__ == '__main__':
    options = Wallet().background_sync_options
    for mode in [options.reuse_password, options.custom_password]:
        run_case(mode)
