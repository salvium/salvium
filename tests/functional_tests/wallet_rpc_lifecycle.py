#!/usr/bin/env python3
"""Wallet RPC regression checks; run in a private network/mount namespace.

Usage: python3 build/security-validation/run-isolated.py /usr/bin/python3 \
    /absolute/path/to/this/script.py /absolute/path/to/salvium-wallet-rpc
No daemon is needed. All wallet files and credentials are temporary.
"""
import concurrent.futures
import errno
import http.client
import http.server
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import threading
import time


def test(binary):
    port = 38991
    with tempfile.TemporaryDirectory(prefix="salvium-rpc-lifecycle-") as directory:
        root = Path(directory)
        config = root / "wallet.conf"
        config.touch()
        submitted = []
        hold_refresh = threading.Event()
        refresh_entered = threading.Event()
        release_refresh = threading.Event()
        class DaemonStub(http.server.BaseHTTPRequestHandler):
            # Match the daemon's persistent connections across repeated sends.
            protocol_version = "HTTP/1.1"

            def log_message(self, *args):
                pass

            def do_POST(self):
                if hold_refresh.is_set():
                    refresh_entered.set()
                    if not release_refresh.wait(timeout=10):
                        self.send_error(504, "Test did not release refresh")
                        return
                try:
                    request = json.loads(self.rfile.read(int(self.headers.get("Content-Length", 0))))
                except (UnicodeDecodeError, ValueError):
                    self.send_error(400, "Binary refresh is outside this test stub")
                    return
                result = {"status": "OK", "height": 1, "envelopes": []}
                if request.get("method") == "salchat_submit_envelope":
                    submitted.append(request["params"]["envelope"])
                    result.update(accepted=True, reason="")
                response = ({"jsonrpc": "2.0", "id": request.get("id"), "result": result}
                            if self.path == "/json_rpc" else result)
                data = json.dumps(response).encode()
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(data)))
                self.end_headers()
                self.wfile.write(data)
        daemon = http.server.ThreadingHTTPServer(("127.0.0.1", 38992), DaemonStub)
        daemon_thread = threading.Thread(target=daemon.serve_forever, daemon=True)
        daemon_thread.start()
        with (root / "rpc-output.log").open("w") as output:
            process = subprocess.Popen([
                str(binary), "--config-file", str(config), "--wallet-dir", str(root),
                "--rpc-bind-ip", "127.0.0.1", "--rpc-bind-port", str(port),
                "--disable-rpc-login", "--rpc-ssl", "disabled",
                "--daemon-address", "http://127.0.0.1:38992", "--daemon-ssl", "disabled",
                "--log-file", str(root / "wallet.log"), "--max-concurrency", "2"
            ], stdout=output, stderr=subprocess.STDOUT)
            writer = None
            def rpc(method, **params):
                connection = http.client.HTTPConnection("127.0.0.1", port, timeout=30)
                try:
                    connection.request("POST", "/json_rpc", json.dumps({
                        "jsonrpc": "2.0", "id": "test", "method": method, "params": params
                    }), {"Content-Type": "application/json"})
                    return json.loads(connection.getresponse().read())
                finally:
                    connection.close()

            try:
                deadline = time.monotonic() + 15
                while True:
                    assert process.poll() is None, (root / "rpc-output.log").read_text()
                    try:
                        rpc("get_version")
                        break
                    except OSError:
                        assert time.monotonic() < deadline, "Wallet RPC did not start"
                        time.sleep(0.05)
                for filename in (".", "..", "nested/wallet", "wallet\0suffix"):
                    invalid = rpc("create_wallet", filename=filename, password="", language="English")
                    assert invalid.get("error", {}).get("message") == "Invalid filename", invalid
                print("PASS: invalid wallet filenames are rejected before creation", flush=True)
                assert "result" in rpc("create_wallet", filename="test", password="", language="English")
                assert "result" in rpc("auto_refresh", enable=False)
                valid = {"address": "http://127.0.0.1:38992", "ssl_support": "disabled"}
                for invalid in ({"ssl_allowed_fingerprints": ["not-hex"]},
                                {"ssl_allowed_fingerprints": ["00"]},
                                {"ssl_support": "invalid"}):
                    assert "error" in rpc("set_daemon", **dict(valid, **invalid))
                    result = rpc("set_daemon", **valid)
                    assert "result" in result, result
                    assert "result" in rpc("get_height")
                print("PASS: invalid configuration can be corrected", flush=True)

                identity = rpc("salchat_get_identity")["result"]["identity"]
                contact = rpc("salchat_add_contact", label="test recipient",
                    address=identity["salvium_address"],
                    encryption_public_key=identity["encryption_public_key"])["result"]["contact"]
                sent = rpc("salchat_send_message", contact_id=contact["contact_id"],
                    message="expiry regression", ttl=60)
                assert sent["result"]["submitted"], sent
                assert len(submitted) == 1
                assert submitted[0]["expires_at"] - submitted[0]["created_at"] == 60
                print("PASS: wallet RPC preserves requested message expiry", flush=True)

                short = rpc("salchat_send_message", contact_id=contact["contact_id"],
                    message="remove after reopening", ttl=3)
                assert short["result"]["submitted"], short
                short_id = short["result"]["message_id"]
                expires_at = submitted[-1]["expires_at"]
                assert "result" in rpc("close_wallet")
                time.sleep(max(0, expires_at + 0.1 - time.time()))
                assert "result" in rpc("open_wallet", filename="test", password="")
                assert "result" in rpc("auto_refresh", enable=False)
                messages = rpc("salchat_list_messages")["result"]["messages"]
                assert [message["message_id"] for message in messages] == [sent["result"]["message_id"]], messages
                assert not rpc("salchat_get_message", message_id=short_id)["result"]["found"]
                assert len(rpc("salchat_list_contacts")["result"]["contacts"]) == 1
                assert "result" in rpc("close_wallet", autosave_current=False)
                assert "result" in rpc("open_wallet", filename="test", password="")
                assert "result" in rpc("auto_refresh", enable=False)
                assert not rpc("salchat_get_message", message_id=short_id)["result"]["found"]
                print("PASS: expired local messages are removed on reopen and stay removed", flush=True)

                # Hold a synchronous wallet operation inside its daemon call.
                # A second client must wait even for a wallet-independent RPC.
                hold_refresh.set()
                with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
                    refreshed = pool.submit(rpc, "refresh")
                    try:
                        assert refresh_entered.wait(timeout=5), "Refresh did not reach the test daemon"
                        version_started = threading.Event()
                        def get_version():
                            version_started.set()
                            return rpc("get_version")
                        version = pool.submit(get_version)
                        assert version_started.wait(timeout=5)
                        time.sleep(0.2)
                        assert not version.done(), "Wallet RPC handlers ran concurrently"
                    finally:
                        hold_refresh.clear()
                        release_refresh.set()
                    # The minimal daemon stub may reject binary refresh; either
                    # result is valid here, provided request handling resumes.
                    assert refreshed.result(timeout=8)
                    assert "result" in version.result(timeout=8)
                print("PASS: concurrent clients are handled serially", flush=True)

                key, cert = root / "key.pem", root / "cert.pem"
                subprocess.run(["openssl", "req", "-x509", "-newkey", "rsa:2048", "-nodes",
                                "-keyout", str(key), "-out", str(cert), "-days", "1",
                                "-subj", "/CN=localhost"], check=True, capture_output=True)
                fifo = root / "delayed-key.pem"
                os.mkfifo(fifo, 0o600)
                assert "result" in rpc("set_daemon", address="https://127.0.0.1:38992",
                    ssl_support="enabled", ssl_allow_any_cert=True,
                    ssl_private_key_path=str(fifo), ssl_certificate_path=str(cert))
                deadline = time.monotonic() + 5
                while writer is None:
                    try:
                        writer = os.open(fifo, os.O_WRONLY | os.O_NONBLOCK)
                    except OSError as error:
                        if error.errno != errno.ENXIO:
                            raise
                        assert time.monotonic() < deadline, "Configuration worker did not open the test key"
                        time.sleep(0.01)
                with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool:
                    closed = pool.submit(rpc, "close_wallet", autosave_current=False)
                    try:
                        time.sleep(0.2)
                        assert not closed.done(), "Wallet was closed while its configuration worker was active"
                    finally:
                        data = key.read_bytes()
                        assert os.write(writer, data) == len(data)
                        os.close(writer)
                        writer = None
                    assert "result" in closed.result(timeout=8)
                assert process.poll() is None
                assert "error" in rpc("get_height")
                # Loading certificates on a later wallet open must not block on
                # the FIFO used solely to hold the preceding worker in flight.
                fifo.unlink()
                fifo.write_bytes(key.read_bytes())
                assert "result" in rpc("open_wallet", filename="test", password="")
                assert "result" in rpc("get_height")
                print("PASS: close waits for configuration and wallet reopens", flush=True)
            finally:
                release_refresh.set()
                if writer is not None:
                    os.close(writer)
                process.terminate()
                try:
                    process.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait()
                daemon.shutdown()
                daemon.server_close()
                daemon_thread.join()


if __name__ == "__main__":
    test(Path(sys.argv[1]).resolve())
