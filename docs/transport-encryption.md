# Transport encryption

Salvium tries TLS first for outgoing P2P and wallet-to-daemon RPC connections.
The default `autodetect` mode accepts encrypted and legacy plaintext inbound
connections, and permits an outgoing plaintext retry if TLS negotiation fails.
This keeps older daemons, wallets and miners compatible during an upgrade.

Use these settings in the daemon configuration:

```ini
p2p-ssl=autodetect
rpc-ssl=autodetect
zmq-curve=1
```

For P2P and HTTP RPC, `enabled` requires TLS and `disabled` selects plaintext.
For example, `p2p-ssl=enabled` rejects legacy plaintext peers. The wallet's
matching outgoing setting is `daemon-ssl=autodetect|enabled|disabled`.
An explicit `https://` daemon URL always requires TLS and preserves configured
certificate verification. Existing HTTP miners can use the default RPC listener.

Default P2P certificates are self-signed. Compatibility mode encrypts traffic
against passive observation, but does not authenticate an unknown peer or prevent
an active intermediary from causing a downgrade. Use required TLS with a trusted
certificate or fingerprint when peer identity matters. TLS does not conceal IP
addresses, connection timing or traffic volume.

## Certificates and peer identity

The daemon generates a P2P certificate unless both of these paths are supplied:

```ini
p2p-ssl-private-key=/path/to/node.key
p2p-ssl-certificate=/path/to/node.crt
```

Generated P2P certificates are temporary; configure persistent certificate files
before sharing a fingerprint. RPC already saves its generated certificate and key
as `rpc_ssl.crt` and `rpc_ssl.key` in the daemon data directory and reuses them.
Custom RPC certificates use `rpc-ssl-private-key` and `rpc-ssl-certificate`.

`p2p-ssl-allowed-fingerprints` accepts a SHA-256 certificate fingerprint as 64 hex
characters. It can be repeated for multiple allowed certificates. A configured
fingerprint requires TLS; a mismatch cannot fall back to plaintext. The same
principle applies to `daemon-ssl-allowed-fingerprints` in the wallet and
`rpc-ssl-allowed-fingerprints` for RPC clients accepted by the daemon.

`p2p-ssl-ca-certificates` supplies trusted CA certificates instead. With a CA
configured, peers must present certificates trusted by that CA in both
directions. Each node therefore needs its own certificate and private key. A
public P2P listener with a fingerprint allowlist likewise accepts only clients
whose certificates are allowed.

## ZMQ RPC and notifications

ZMQ uses CURVE encryption rather than TLS. It is enabled by default for both
TCP RPC and publish/subscribe notifications. The default persistent secret key
is `zmq-curve.key` in the daemon data directory. Its public key is written to
`zmq-curve.key.pub` and printed in the log. Share only the public key with clients.
`zmq-curve-secret-key-file` selects a different secret-key file.

Clients need CURVE support, their own CURVE keypair, and the server public key.
The server key authenticates the server; this change does not add a per-client
authorization allowlist. Keep existing RPC bind and restricted-mode controls.

CURVE has no automatic plaintext fallback on the same socket. For a legacy ZMQ
client, explicitly set `zmq-curve=0` and omit `zmq-curve-secret-key-file`. This
disables encryption for both ZMQ RPC and notifications. A build without CURVE
support or an unreadable/invalid configured key fails startup instead of quietly
serving plaintext.

## Tor and I2P

Tor and I2P support already exists in Salvium. `tx-proxy` configures the SOCKS
proxy used to relay local transactions, and `anonymous-inbound` advertises an
anonymous-network address. The Tor or I2P router runs separately; Salvium does
not bundle or launch it. TLS negotiation and the selected fallback policy also
apply to Salvium connections carried through the configured proxy.

These changes do not enable Tor, create operating-system services or modify an
operator's existing configuration file.

## Validation

Build with `make release-static`. The regression script
`tests/functional_tests/transport_security.py` accepts the resulting daemon binary
and creates temporary regtest nodes inside a private Linux network namespace.
It checks encrypted P2P, legacy fallback, required TLS, certificate pins, HTTP
compatibility, and encrypted ZMQ RPC and block notifications. It requires
iproute2, OpenSSL and PyZMQ with CURVE support.
