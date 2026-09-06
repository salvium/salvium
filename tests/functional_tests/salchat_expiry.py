#!/usr/bin/env python3
"""SalChat expiry regression; run in a private network/mount namespace.

Pass the wallet-RPC executable as the only argument. Wallet files, credentials
and the HTTP daemon stub are temporary. No Salvium daemon is started.
"""
import http.client
import http.server
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import threading
import time


def test(binary):
    with tempfile.TemporaryDirectory(prefix="salchat-expiry-") as directory:
        root = Path(directory)
        config = root / "wallet.conf"
        config.touch()
        submitted = []

        class DaemonStub(http.server.BaseHTTPRequestHandler):
            protocol_version = "HTTP/1.1"

            def log_message(self, *args):
                pass

            def do_POST(self):
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
        thread = threading.Thread(target=daemon.serve_forever, daemon=True)
        thread.start()

        def rpc(method, **params):
            connection = http.client.HTTPConnection("127.0.0.1", 38991, timeout=30)
            try:
                connection.request("POST", "/json_rpc", json.dumps({
                    "jsonrpc": "2.0", "id": "test", "method": method, "params": params
                }), {"Content-Type": "application/json"})
                reply = json.loads(connection.getresponse().read())
                assert "result" in reply, reply
                return reply["result"]
            finally:
                connection.close()

        with (root / "output.log").open("w") as output:
            process = subprocess.Popen([
                str(binary), "--config-file", str(config), "--wallet-dir", str(root),
                "--rpc-bind-ip", "127.0.0.1", "--rpc-bind-port", "38991",
                "--disable-rpc-login", "--rpc-ssl", "disabled",
                "--daemon-address", "http://127.0.0.1:38992", "--daemon-ssl", "disabled",
                "--log-file", str(root / "wallet.log"), "--max-concurrency", "2"
            ], stdout=output, stderr=subprocess.STDOUT)
            try:
                deadline = time.monotonic() + 15
                while True:
                    assert process.poll() is None, (root / "output.log").read_text()
                    try:
                        rpc("get_version")
                        break
                    except OSError:
                        assert time.monotonic() < deadline, "Wallet RPC did not start"
                        time.sleep(0.05)
                rpc("create_wallet", filename="test", password="", language="English")
                rpc("auto_refresh", enable=False)
                identity = rpc("salchat_get_identity")["identity"]
                contact = rpc("salchat_add_contact", label="test contact",
                    address=identity["salvium_address"],
                    encryption_public_key=identity["encryption_public_key"])["contact"]
                current = rpc("salchat_send_message", contact_id=contact["contact_id"],
                    message="current message", ttl=600)
                short = rpc("salchat_send_message", contact_id=contact["contact_id"],
                    message="remove after reopening", ttl=3)
                assert current["submitted"] and short["submitted"], (current, short)
                assert len(submitted) == 2
                assert submitted[1]["expires_at"] - submitted[1]["created_at"] == 3
                rpc("close_wallet")
                time.sleep(max(0, submitted[1]["expires_at"] + 0.1 - time.time()))
                for _ in range(2):
                    rpc("open_wallet", filename="test", password="")
                    rpc("auto_refresh", enable=False)
                    messages = rpc("salchat_list_messages")["messages"]
                    assert [m["message_id"] for m in messages] == [current["message_id"]], messages
                    assert not rpc("salchat_get_message", message_id=short["message_id"])["found"]
                    assert len(rpc("salchat_list_contacts")["contacts"]) == 1
                    rpc("close_wallet", autosave_current=False)
                print("PASS: requested TTL is preserved and expired history stays deleted after reopening", flush=True)
            finally:
                process.terminate()
                try:
                    process.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait()
                daemon.shutdown()
                daemon.server_close()
                thread.join()


if __name__ == "__main__":
    test(Path(sys.argv[1]).resolve())
