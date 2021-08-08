import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

import {
  PRIVILEGED_ORIGINS,
  MAINNET_RPC_ENDPOINT,
  MAINNET_RPC_CONFIG,
  MAINNET_REST_ENDPOINT,
  MAINNET_REST_CONFIG,
  TESTNETPUBLIC_RPC_ENDPOINT,
  TESTNETPUBLIC_RPC_CONFIG,
  TESTNETPUBLIC_REST_ENDPOINT,
  TESTNETPUBLIC_REST_CONFIG,
  TESTNETPRIVATE_RPC_ENDPOINT,
  TESTNETPRIVATE_RPC_CONFIG,
  TESTNETPRIVATE_REST_ENDPOINT,
  TESTNETPRIVATE_REST_CONFIG,
} from "./config.var";

export const EmbedChainInfos: ChainInfo[] = [
  {
    rpc: MAINNET_RPC_ENDPOINT,
    rpcConfig: MAINNET_RPC_CONFIG,
    rest: MAINNET_REST_ENDPOINT,
    restConfig: MAINNET_REST_CONFIG,
    chainId: "net-6",
    chainName: "Bluzelle Mainnet",
    stakeCurrency: {
      coinDenom: "BLZ",
      coinMinimalDenom: "ubnt",
      coinDecimals: 6,
      coinGeckoId: "bluzelle",
    },
    walletUrl: "https://staking.bluzelle.com/staking",

    walletUrlForStaking: "https://staking.bluzelle.com/staking",

    bip44: {
      coinType: 483,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: Bech32Address.defaultBech32Config("bluzelle"),
    currencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
    ],
    coinType: 483,
    features: ["stargate", "crud", "nft"],
  },
  {
    rpc: TESTNETPUBLIC_RPC_ENDPOINT,
    rpcConfig: TESTNETPUBLIC_RPC_CONFIG,
    rest: TESTNETPUBLIC_REST_ENDPOINT,
    restConfig: TESTNETPUBLIC_REST_CONFIG,
    chainId: "bluzelleTestNetPublic-22",
    chainName: "Bluzelle Public Testnet",
    stakeCurrency: {
      coinDenom: "BLZ",
      coinMinimalDenom: "ubnt",
      coinDecimals: 6,
      coinGeckoId: "bluzelle",
    },
    walletUrl: "https://staking.bluzelle.com/staking",

    walletUrlForStaking: "https://staking.bluzelle.com/staking",

    bip44: {
      coinType: 483,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: Bech32Address.defaultBech32Config("bluzelle"),
    currencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
    ],
    coinType: 483,
    features: ["stargate", "crud", "nft"],
  },
  {
    rpc: TESTNETPRIVATE_RPC_ENDPOINT,
    rpcConfig: TESTNETPRIVATE_RPC_CONFIG,
    rest: TESTNETPRIVATE_REST_ENDPOINT,
    restConfig: TESTNETPRIVATE_REST_CONFIG,
    chainId: "bluzelleTestNetPrivate-133",
    chainName: "Bluzelle Private Testnet",
    stakeCurrency: {
      coinDenom: "BLZ",
      coinMinimalDenom: "ubnt",
      coinDecimals: 6,
      coinGeckoId: "bluzelle",
    },
    walletUrl: "https://staking.bluzelle.com/staking",

    walletUrlForStaking: "https://staking.bluzelle.com/staking",

    bip44: {
      coinType: 483,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: Bech32Address.defaultBech32Config("bluzelle"),
    currencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
    ],
    coinType: 483,
    features: ["stargate", "crud", "nft"],
  },
  {
    rpc: "http://3.23.13.122:26657/",
    rpcConfig: TESTNETPRIVATE_RPC_CONFIG,
    rest: "http://3.23.13.122:1317/",
    restConfig: TESTNETPRIVATE_REST_CONFIG,
    chainId: "groot-011",
    chainName: "RIZON Groot TestNet",
    stakeCurrency: {
      coinDenom: "uatolo",
      coinMinimalDenom: "uatolo",
      coinDecimals: 6,
      coinGeckoId: "hdac",
    },
    walletUrl: "https://staking.bluzelle.com/staking",

    walletUrlForStaking: "https://staking.bluzelle.com/staking",

    bip44: {
      coinType: 1217,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: Bech32Address.defaultBech32Config("rizon"),
    currencies: [
      {
        coinDenom: "ATOLO",
        coinMinimalDenom: "uatolo",
        coinDecimals: 6,
        coinGeckoId: "hdac",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ATOLO",
        coinMinimalDenom: "uatolo",
        coinDecimals: 6,
        coinGeckoId: "hdac",
      },
    ],
    coinType: 1217,
    features: ["stargate", "crud", "nft"],
  },
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = PRIVILEGED_ORIGINS;
