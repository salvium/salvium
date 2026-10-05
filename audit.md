# SAL1 provenance review

The current audit is report-only. It distinguishes a confirmed malformed
origin from later transactions that may or demonstrably do descend from that
origin. Only the origin is an isolation candidate. Every descendant is a human
review item, including a transaction known to represent a sale to an exchange.
Descendant outputs are not automatically bad: exchange custody, pooled funds,
change and later legitimate deposits make recursive contamination unsafe.

Lineage does not participate in transaction acceptance, output selection or
stake payout consensus. In particular, a suspect ring member cannot freeze a
transaction merely by appearing as a decoy. Ordinary signature, key-image,
asset, maturity and monetary consensus checks remain in force.

The v2 wallet enrollment format is retained only so historical test artifacts
can be decoded. Nodes reject its submission and never put it in coinbase extra.
The wallet does not query a daemon with audit key images and does not return a
key image in its local review result. This prevents publication of the exact
canonical output, confidential amount, deterministic future spend key image and
their ownership link.

`SALVIUM_LINEAGE_AUDIT_MAINNET_HEIGHT` remains zero. Changing an activation
height alone cannot enable public enrollment or consensus enforcement:
`lineage_policy::public_enrollment` and
`lineage_policy::consensus_enforcement` are both compile-time false. A future
privacy-preserving design requires a new protocol/version and separate review.
