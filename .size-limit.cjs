module.exports = [
  {
    name: "Waku core",
    path: "packages/core/bundle/index.js",
    import: "{ WakuNode }",
  },
  {
    name: "Waku default setup",
    path: [
      "packages/core/bundle/index.js",
      "packages/core/bundle/lib/create_waku.js",
    ],
    import: {
      "./packages/core/bundle/lib/create_waku.js": "{ createLightNode }",
      "./packages/core/bundle/lib/wait_for_remote_peer.js":
        "{ waitForRemotePeer }",
      "./packages/core/bundle/lib/waku_message/version_0.js":
        "{ MessageV0, DecoderV0, EncoderV0 }",
    },
  },
  {
    name: "Asymmetric, symmetric encryption and signature",
    path: "packages/core/bundle/lib/waku_message/version_1.js",
    import: "{ MessageV1, AsymEncoder, AsymDecoder, SymEncoder, SymDecoder }",
  },
  {
    name: "DNS discovery",
    path: "packages/core/bundle/lib/peer_discovery_dns.js",
    import: "{ PeerDiscoveryDns }",
  },
  {
    name: "Privacy preserving protocols",
    path: "packages/core/bundle/index.js",
    import: "{ WakuRelay }",
  },
  {
    name: "Light protocols",
    path: "packages/core/bundle/index.js",
    import: "{ WakuLightPush, WakuFilter }",
  },
  {
    name: "History retrieval protocols",
    path: "packages/core/bundle/index.js",
    import: "{ WakuStore }",
  },
];
