import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react";
import { alchemy, sepolia } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";

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
    addPasskeyOnSignup: true,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ apiKey: API_KEY }),
    // Note: This quickstart is configured for Arbitrum Sepolia.
    chain: sepolia,
    ssr: true, // more about ssr: https://www.alchemy.com/docs/wallets/react/ssr
    storage: cookieStorage, // more about persisting state with cookies: https://www.alchemy.com/docs/wallets/react/ssr#persisting-the-account-state
    enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
    policyId: SPONSORSHIP_POLICY_ID,
  },
  uiConfig
);

import { type Address, toHex } from "viem";

export const config = {
  policyId: process.env.ALCHEMY_POLICY_ID!,
  gasToken: "0xD3b483Ed22B20858313dC420b6858Ab2bca4a562" as Address, // USDC on Sepolia
  approveBelow: toHex(1000000n), // 1 USDC
  approveAmount: toHex(10000000n), // 10 USDC
};


export const queryClient = new QueryClient();
