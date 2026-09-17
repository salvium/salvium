#!/usr/bin/env python3
"""Exercise real daemon transports in temporary storage and a private network.

Usage: python3 transport_security.py /path/to/release/bin/salviumd
Requires Linux user/network namespaces, iproute2, OpenSSL and PyZMQ with CURVE.
"""
import hashlib
import http.client
import json
import os
from pathlib import Path
import signal
import select
import socket
import ssl
import subprocess
import sys
import tempfile
import threading
import time

import zmq


class SocksProxy:
    """SOCKS4a test relay; all destinations are confined to namespace loopback."""
    onion = "vww6ybal4bd7szmgncyruucpgfkqahzddi37ktceo3ah7ngmcopnpyyd.onion"

    def __init__(self):
        self.listener = socket.socket()
        self.listener.bind(("127.0.0.1", 0))
        self.listener.listen()
        self.listener.settimeout(0.2)
        self.port = self.listener.getsockname()[1]
        self.stop = threading.Event()
        self.workers = []
        self.thread = threading.Thread(target=self.accept)
        self.thread.start()

    def accept(self):
        while not self.stop.is_set():
            try:
                incoming, _ = self.listener.accept()
            except socket.timeout:
                continue
            worker = threading.Thread(target=self.relay, args=(incoming,))
            self.workers.append(worker)
            worker.start()

    def relay(self, incoming):
        with incoming:
            incoming.settimeout(2)
            def exact(n):
                result = b""
                while len(result) < n:
                    data = incoming.recv(n - len(result))
                    if not data:
                        raise OSError("SOCKS request closed")
                    result += data
                return result
            def terminated():
                result = b""
                for _ in range(256):
                    value = exact(1)
                    if value == b"\0":
                        return result
                    result += value
                raise OSError("Oversized SOCKS hostname")
            try:
                request = exact(8)
                assert request[:2] == b"\4\1"
                terminated()  # user ID
                assert terminated().decode() == self.onion
                port = int.from_bytes(request[2:4], "big")
                assert 28000 <= port < 28200
                with socket.create_connection(("127.0.0.1", port), timeout=2) as outgoing:
                    incoming.sendall(b"\0\x5a" + request[2:])
                    while not self.stop.is_set():
                        ready, _, _ = select.select([incoming, outgoing], [], [], 0.2)
                        for source in ready:
                            data = source.recv(65536)
                            if not data:
                                return
                            (outgoing if source is incoming else incoming).sendall(data)
            except (OSError, AssertionError):
                return

    def close(self):
        self.stop.set()
        self.thread.join()
        self.listener.close()
        for worker in self.workers:
            worker.join()


def eventually(check, timeout=35):
    deadline = time.monotonic() + timeout
    last = None
    while time.monotonic() < deadline:
        try:
            result = check()
            if result:
                return result
        except (OSError, ValueError, AssertionError) as error:
            last = error
        time.sleep(0.2)
    raise AssertionError(f"Timed out: {last}")


class Node:
    def __init__(self, root, binary, index, *extra):
        self.root = root / str(index)
        self.root.mkdir()
        self.rpc_port = 28000 + index * 10
        self.p2p_port = self.rpc_port + 1
        self.zmq_port = self.rpc_port + 2
        self.pub_port = self.rpc_port + 3
        self.output = (self.root / "stdout.log").open("w")
        args = [binary, "--config-file", str(root / "empty.conf"),
                "--data-dir", str(self.root), "--log-file", str(self.root / "daemon.log"),
                "--regtest", "--fixed-difficulty", "1", "--no-igd", "--non-interactive",
                "--disable-dns-checkpoints", "--check-updates", "disabled",
                "--max-concurrency", "2", "--max-connections-per-ip", "20", "--p2p-bind-ip", "127.0.0.1",
                "--p2p-bind-port", str(self.p2p_port), "--rpc-bind-ip", "127.0.0.1",
                "--rpc-bind-port", str(self.rpc_port), "--zmq-rpc-bind-port", str(self.zmq_port),
                "--zmq-pub", f"tcp://127.0.0.1:{self.pub_port}", "--allow-local-ip"]
        self.process = subprocess.Popen(args + list(extra), stdout=self.output, stderr=subprocess.STDOUT)

    def rpc(self, method="get_info", params=None, tls=False):
        assert self.process.poll() is None, (self.root / "stdout.log").read_text()[-4000:]
        if tls:
            connection = http.client.HTTPSConnection("127.0.0.1", self.rpc_port,
                context=ssl._create_unverified_context(), timeout=2)
        else:
            connection = http.client.HTTPConnection("127.0.0.1", self.rpc_port, timeout=2)
        try:
            connection.request("POST", "/json_rpc", json.dumps({"jsonrpc": "2.0", "id": "0",
                "method": method, "params": params or {}}), {"Content-Type": "application/json"})
            result = json.loads(connection.getresponse().read())
            assert "error" not in result, result
            return result["result"]
        finally:
            connection.close()

    def peers(self):
        return [peer for peer in self.rpc("get_connections").get("connections", [])
                if peer.get("peer_id", "0").strip("0")]

    def close(self):
        if self.process.poll() is None:
            self.process.send_signal(signal.SIGTERM)
            try:
                self.process.wait(timeout=15)
            except subprocess.TimeoutExpired:
                self.process.kill()
                self.process.wait()
        self.output.close()


def test(binary):
    subprocess.run(["ip", "link", "set", "lo", "up"], check=True)
    assert zmq.has("curve")
    nodes = []
    with tempfile.TemporaryDirectory(prefix="salvium-transport-test-") as directory:
        root = Path(directory)
        (root / "empty.conf").touch()
        def start(*options):
            node = Node(root, binary, len(nodes), *options)
            nodes.append(node)
            eventually(lambda: node.rpc(tls="--rpc-ssl=enabled" in options))
            return node
        try:
            auto = start("--out-peers", "0")
            auto.rpc(tls=True)
            auto.rpc(tls=False)
            print("PASS: default RPC accepts TLS and legacy HTTP", flush=True)

            secure = start("--add-exclusive-node", f"127.0.0.1:{auto.p2p_port}")
            eventually(lambda: secure.peers())
            assert all(p.get("ssl", False) for p in secure.peers()), secure.peers()
            eventually(lambda: any(p.get("ssl", False) for p in auto.peers()))
            print("PASS: default P2P establishes TLS in both directions", flush=True)

            plain = start("--p2p-ssl=disabled", "--add-exclusive-node", f"127.0.0.1:{auto.p2p_port}")
            eventually(lambda: plain.peers())
            assert not any(p.get("ssl", False) for p in plain.peers())
            fallback = start("--add-exclusive-node", f"127.0.0.1:{plain.p2p_port}")
            eventually(lambda: fallback.peers())
            assert not any(p.get("ssl", False) for p in fallback.peers())
            print("PASS: plaintext inbound and TLS-first outbound fallback", flush=True)

            strict = start("--p2p-ssl=enabled", "--add-exclusive-node", f"127.0.0.1:{plain.p2p_port}")
            strict_rpc = start("--out-peers", "0", "--rpc-ssl=enabled")
            try:
                strict_rpc.rpc()
            except (OSError, ValueError, http.client.HTTPException):
                pass
            else:
                raise AssertionError("TLS-only RPC accepted plaintext")
            time.sleep(3)
            assert not strict.peers(), strict.peers()
            print("PASS: strict TLS rejects plaintext P2P and RPC", flush=True)

            cert, key = root / "p2p.crt", root / "p2p.key"
            subprocess.run(["openssl", "req", "-x509", "-newkey", "rsa:2048", "-nodes",
                "-subj", "/CN=transport-test", "-days", "1", "-keyout", str(key), "-out", str(cert)],
                check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            fingerprint = hashlib.sha256(ssl.PEM_cert_to_DER_cert(cert.read_text())).hexdigest()
            certified = start("--out-peers", "0", "--p2p-ssl-private-key", str(key), "--p2p-ssl-certificate", str(cert))
            pinned = start("--p2p-ssl-allowed-fingerprints", fingerprint,
                "--add-exclusive-node", f"127.0.0.1:{certified.p2p_port}")
            eventually(lambda: pinned.peers())
            assert all(p.get("ssl", False) for p in pinned.peers())
            wrong = start("--p2p-ssl-allowed-fingerprints", "a" * 64,
                "--add-exclusive-node", f"127.0.0.1:{certified.p2p_port}")
            time.sleep(3)
            assert not wrong.peers(), wrong.peers()
            print("PASS: correct certificate pin connects; wrong pin has no fallback", flush=True)

            proxy = SocksProxy()
            try:
                for target, encrypted in [(auto, True), (plain, False)]:
                    proxied = start("--tx-proxy", f"tor,127.0.0.1:{proxy.port},1,disable_noise",
                        "--add-exclusive-node", f"{proxy.onion}:{target.p2p_port}")
                    eventually(lambda: proxied.peers())
                    assert all(p.get("ssl", False) == encrypted for p in proxied.peers()), proxied.peers()
                    proxied.close()
                print("PASS: SOCKS connection carries TLS and permits configured plaintext fallback", flush=True)
            finally:
                proxy.close()

            # Offline regtest marks the core ready to mine without a synced peer.
            notifications = start("--offline")
            server_key = (notifications.root / "zmq-curve.key.pub").read_text().strip().encode()
            assert len(server_key) == 40
            assert (notifications.root / "zmq-curve.key").stat().st_mode & 0o077 == 0
            with zmq.Context() as context:
                def client(kind, key=server_key):
                    sock = context.socket(kind)
                    sock.linger = 0
                    sock.rcvtimeo = 1500
                    if key:
                        sock.curve_publickey, sock.curve_secretkey = zmq.curve_keypair()
                        sock.curve_serverkey = key
                    return sock
                for key, succeeds in [(server_key, True), (None, False), (zmq.curve_keypair()[0], False)]:
                    with client(zmq.REQ, key) as sock:
                        sock.connect(f"tcp://127.0.0.1:{notifications.zmq_port}")
                        sock.send_json({"jsonrpc": "2.0", "id": "0", "method": "get_info", "params": {}})
                        if succeeds:
                            assert "result" in sock.recv_json()
                        else:
                            try:
                                sock.recv()
                            except zmq.Again:
                                pass
                            else:
                                raise AssertionError("ZMQ accepted an unauthenticated transport")
                with client(zmq.SUB) as sub:
                    sub.subscribe(b"json-minimal-chain_main")
                    sub.connect(f"tcp://127.0.0.1:{notifications.pub_port}")
                    address = "SC11pP3tKp5e5UJwTeTNhXQpv4UsbpmvTDSKRn22X1gLVTfJKyfJMbG6apw15backjJxGgi8pVT1sJA5p1etwT232pL2xUbKUB"
                    def receive_block():
                        result = notifications.rpc("generateblocks", {"amount_of_blocks": 1, "wallet_address": address})
                        assert result["status"] == "OK" and len(result["blocks"]) == 1, result
                        try:
                            return sub.recv().startswith(b"json-minimal-chain_main:")
                        except zmq.Again:
                            return False
                    eventually(receive_block)
            print("PASS: encrypted ZMQ RPC and block notifications; wrong/plain clients rejected", flush=True)
            print("All transport security checks passed", flush=True)
        except BaseException:
            for node in nodes:
                print(f"--- node {node.root.name} ---", file=sys.stderr)
                print((node.root / "stdout.log").read_text()[-2500:], file=sys.stderr)
            raise
        finally:
            for node in reversed(nodes):
                node.close()


if __name__ == "__main__":
    if len(sys.argv) == 3 and sys.argv[2] == "--isolated":
        test(str(Path(sys.argv[1]).resolve()))
    elif len(sys.argv) == 2:
        raise SystemExit(subprocess.call(["unshare", "--user", "--map-current-user", "--net", "--keep-caps",
            sys.executable, str(Path(__file__).resolve()), str(Path(sys.argv[1]).resolve()), "--isolated"]))
    else:
        raise SystemExit(__doc__)
