import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react";
import { alchemy, Sepolia } from "@account-kit/infra";
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
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ apiKey: e60ay6ivqy39fbnq7nv21hf0iinwky2e }),
    // Note: This quickstart is configured for Arbitrum Sepolia.
    chain: Sepolia,
    ssr: true, // more about ssr: https://www.alchemy.com/docs/wallets/react/ssr
    storage: cookieStorage, // more about persisting state with cookies: https://www.alchemy.com/docs/wallets/react/ssr#persisting-the-account-state
    enablePopupOauth: false, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
    policyId: 560c46c1-0a93-48b2-8c9a-dad0b337dddb,
  },
  uiConfig
);

export const queryClient = new QueryClient();
