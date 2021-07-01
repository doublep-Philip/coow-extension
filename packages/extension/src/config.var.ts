import { AxiosRequestConfig } from "axios";

export const MAINNET_RPC_ENDPOINT =
  "http://sandbox.sentry.net.bluzelle.com:26657";
export const MAINNET_RPC_CONFIG: AxiosRequestConfig | undefined = undefined;
export const MAINNET_REST_ENDPOINT =
  "https://client.sentry.net.bluzelle.com:1317";
export const MAINNET_REST_CONFIG: AxiosRequestConfig | undefined = undefined;

export const TESTNETPUBLIC_RPC_ENDPOINT =
  "http://sandbox.sentry.testnet.public.bluzelle.com:26657";
export const TESTNETPUBLIC_RPC_CONFIG:
  | AxiosRequestConfig
  | undefined = undefined;
export const TESTNETPUBLIC_REST_ENDPOINT =
  "https://client.sentry.testnet.public.bluzelle.com:1317";
export const TESTNETPUBLIC_REST_CONFIG:
  | AxiosRequestConfig
  | undefined = undefined;

export const TESTNETPRIVATE_RPC_ENDPOINT =
  "https://client.sentry.testnet.private.bluzelle.com:26657";
export const TESTNETPRIVATE_RPC_CONFIG:
  | AxiosRequestConfig
  | undefined = undefined;
export const TESTNETPRIVATE_REST_ENDPOINT =
  "https://client.sentry.testnet.private.bluzelle.com:1317";
export const TESTNETPRIVATE_REST_CONFIG:
  | AxiosRequestConfig
  | undefined = undefined;

export const PRIVILEGED_ORIGINS: string[] = [];
