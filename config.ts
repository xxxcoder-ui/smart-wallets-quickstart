import {
  AlchemyAccountsUIConfig,
  cookieStorage,
} from "@account-kit/react";
import { createConfig } from "@account-kit/core";
import { sepolia, mainnet, alchemy } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";
import { setChain } from "@account-kit/core";

export const config = createConfig({
  // use this transport for all chains
  transport: alchemy({ apiKey: "ALCHEMY_API_KEY" }),
  // this is the default chain
  chain: sepolia,
  storage: cookieStorage, // more about persisting state with cookies: https://www.alchemy.com/docs/wallets/react/ssr#persisting-the-account-state
  enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
    
  chains: [
    {
      chain: mainnet,
      storage: cookieStorage, // more about persisting state with cookies: https://www.alchemy.com/docs/wallets/react/ssr#persisting-the-account-state
      enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
    
      // optional: sponsor gas for this chain
      policyId: "MAINNET_GAS_MANAGER_POLICY_ID",
    },
    {
      chain: sepolia,
      storage: cookieStorage, // more about persisting state with cookies: https://www.alchemy.com/docs/wallets/react/ssr#persisting-the-account-state
      enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
    
      // optional: override the default transport for this chain
      transport: alchemy({ apiKey: "OTHER_API_KEY" }),
      // optional: sponsor gas for this chain
      policyId: "SEPOLIA_GAS_MANAGER_POLICY_ID",
    },
    uiConfig
  ],
});

const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
if (!API_KEY) {
  throw new Error("NEXT_PUBLIC_ALCHEMY_API_KEY is not set");
}

const SPONSORSHIP_POLICY_ID = process.env.NEXT_PUBLIC_ALCHEMY_POLICY_ID;
if (!SPONSORSHIP_POLICY_ID) {
  throw new Error("NEXT_PUBLIC_ALCHEMY_POLICY_ID is not set");
}

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [
      [{ type: "email" }],
      [
        { type: "passkey" },
        { type: "social", authProviderId: "google", mode: "popup" },
        { type: "social", authProviderId: "facebook", mode: "popup" },
      ],
    ],
    addPasskeyOnSignup: false,
  },
};



export const queryClient = new QueryClient();

await setChain(config, mainnet);
