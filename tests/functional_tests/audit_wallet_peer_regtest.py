#!/usr/bin/env python3
"""Enroll through a restricted non-mining node; mine evidence on its local peer."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile
import time
from audit_gate_regtest import AuditChain
from audit_release_regtest import LocalChain, Rpc


def until(predicate, message, timeout=90):
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            if predicate():
                return
        except (OSError, RuntimeError):
            pass
        time.sleep(0.2)
    raise AssertionError(message)


class PeeredChain(AuditChain):
    def start(self, name, command, rpc, ready_method):
        if name == 'daemon':
            command.remove('--offline')
            command[command.index('--p2p-bind-port') + 1] = str(self.owner_p2p)
            command += ['--allow-local-ip', '--add-exclusive-node', f'127.0.0.1:{self.miner_p2p}',
                '--out-peers', '1', '--in-peers', '2', '--restricted-rpc']
        return super().start(name, command, rpc, ready_method)

    def synchronize(self):
        target = self.daemon.call('get_info')['height']
        until(lambda: self.owner_node.call('get_info')['height'] == target, 'Owner node did not synchronize')

    def mine(self, count, refresh=True, fund_miner=False):
        result = super().mine(count, refresh=False, fund_miner=fund_miner)
        self.synchronize()
        if refresh:
            for wallet in self.wallets:
                wallet.call('refresh')
        return result

    def transfer(self, *args, **kwargs):
        # Seed ordinary funding directly on the miner. Dandelion's randomized
        # ordinary-transaction relay delay is outside this enrollment-relay test.
        # Audit proofs below must still cross P2P without manual submission.
        relay = kwargs.pop('relay', True)
        result = super().transfer(*args, relay=False, **kwargs)
        if relay:
            self.submit(result, True)
        return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--binaries', type=Path, default=Path('build/audit/release/bin'))
    args = parser.parse_args()
    root = Path(tempfile.mkdtemp(prefix='salvium-wallet-peers-v2-'))
    print(root, flush=True)
    bins = root / 'bin'; bins.mkdir()
    hashes = {}
    for name in ('salviumd', 'salvium-wallet-rpc'):
        shutil.copy2(args.binaries.resolve() / name, bins / name)
        with (bins / name).open('rb') as stream:
            hashes[name] = hashlib.file_digest(stream, 'sha256').hexdigest()
    chain = PeeredChain(bins, root)
    chain.owner_p2p, chain.miner_p2p = chain.port(), chain.port()
    try:
        chain.launch()
        chain.owner_node = chain.daemon
        miner_rpc = Rpc(chain.port())
        command = list(chain.processes[0].args)
        command.remove('--restricted-rpc')
        command[command.index('--rpc-bind-port') + 1] = str(miner_rpc.port)
        command[command.index('--p2p-bind-port') + 1] = str(chain.miner_p2p)
        command[command.index('--add-exclusive-node') + 1] = f'127.0.0.1:{chain.owner_p2p}'
        command[command.index('--data-dir') + 1] = str(root / 'miner-peer')
        LocalChain.start(chain, 'miner-peer', command, miner_rpc, 'get_info')
        miner_process = chain.processes[-1]
        chain.daemon = miner_rpc
        until(lambda: bool(miner_rpc.call('get_connections').get('connections')), 'Exclusive loopback peers did not connect')
        chain.mine(100, fund_miner=True)
        chain.transfer(0, 1, 50 * 100_000_000)
        chain.mine(chain.activation - chain.tip())
        # The mining peer is offline while the owner enrolls through the
        # restricted non-mining node. No manual proof relay is performed.
        miner_process.terminate(); miner_process.wait(timeout=60)
        enrollment = chain.wallets[1].call('audit')
        assert enrollment['proofs'] and enrollment['pending_batches']
        print('Owner enrolled through restricted RPC while miner peer was offline', flush=True)
        LocalChain.start(chain, 'miner-peer-reconnected', command, miner_rpc, 'get_info')
        proof = enrollment['proofs'][0]
        until(lambda: proof in miner_rpc.call('get_block_template', {'wallet_address': chain.sink_address,
            'reserve_size': 0})['blocktemplate_blob'], 'Queued enrollment did not relay after peer reconnect', timeout=90)
        chain.mine(1)
        assert chain.wallets[1].call('audit', {'status_only': True})['unresolved'] > 0
        miner_enrollment = chain.wallets[0].call('audit')
        until(lambda: any(item in miner_rpc.call('get_block_template', {'wallet_address': chain.sink_address,
            'reserve_size': 0})['blocktemplate_blob'] for item in miner_enrollment['proofs']), 'Miner owner proofs did not relay')
        # Allow delivery of the small set of batches before producing carriers.
        for _ in range(miner_enrollment['pending_batches'] + 15):
            chain.mine(1)
        result = chain.wallets[1].call('audit', {'status_only': True})
        assert result['good'] > 0 and result['bad_count'] == result['unresolved_count'] == 0, result
        owner_queue = root / 'chain/fake/lmdb/wallet-audit-queue-v2'
        until(lambda: not list(owner_queue.glob('[0-9a-f]' * 64)),
            'Non-mining owner node retained confirmed enrollment batches', timeout=65)
        summary = {'status': 'WALLET_PEER_RELAY_PASS', 'restricted_owner_node': True,
            'ordinary_funding_submitted_directly_to_miner': True,
            'separate_mining_peer': True, 'exclusive_loopback_connections': True,
            'queued_proof_relay_after_peer_reconnect': True, 'tip': chain.tip(), 'wallet_result': result,
            'non_mining_node_retires_confirmed_queue': True,
            'binary_sha256': hashes}
        (root / 'result.json').write_text(json.dumps(summary, indent=2) + '\n')
        print(json.dumps({k:v for k,v in summary.items() if k != 'wallet_result'}), flush=True)
    finally:
        chain.close()


if __name__ == '__main__':
    main()
