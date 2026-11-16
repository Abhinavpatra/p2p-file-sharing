Users can share files directly with each other without uploading them to a central file-storage server.

- Drag-and-drop file sharing
- Transfer progress
- Chunk large files
- Multiple file transfers
  Learn: RTCDataChannel, binary data, buffering.

The FE does the signalling and the BE does the job of communicating b/w client A and B,
the BE rols is exchanging the SDP offer b/w the users.

Once offer is accepted and sent back, and the ICE candidates have been echanged

We exchange ICE candidates through your signaling server.
STUN helps discover public-facing network addresses. TURN provides a relay when direct connectivity isn't possible

Then the data is communicated through peer to peer connection via the ISP of the users, cutting out the middle man server

| Scenario                                                                           | Physical Path                                                                       | Uses the Public Internet?                                                                               |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **1. Same Local Network** (e.g., both on the same Wi-Fi)                           | `A ➔ Wi-Fi Router ➔ B` (Host candidate)                                             | **No.** Traffic stays completely local inside your LAN/router.                                          |
| **2. Different Networks, Direct P2P** (e.g., A in Delhi, B in Mumbai)              | `A ➔ A's ISP ➔ Internet Backbone ➔ B's ISP ➔ B` (Server Reflexive / STUN candidate) | **Yes.** It traverses the public internet directly between their two routers, bypassing your server.    |
| **3. Strict Firewalls / Symmetric NAT** (e.g., strict corporate/cellular networks) | `A ➔ Internet ➔ TURN Relay Server ➔ Internet ➔ B` (Relay candidate)                 | **Yes.** Direct P2P failed, so the file is routed through an intermediary relay server on the internet. |

But we are not using a TURN relay server here, rather we will try to retry the p2p connection again
