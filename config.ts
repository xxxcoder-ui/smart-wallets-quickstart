import { cookieStorage, createConfig } from "@account-kit/core";
import { sepolia } from "@account-kit/infra";
import { AlchemyAccountsProviderProps } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";

export const config = createConfig({
  apiKey: "YOUR_API_KEY",
  chain: sepolia,
  ssr: true, // defers hydration of the account state to the client after the initial mount solving any inconsistencies between server and client state (read more here: https://accountkit.alchemy.com/react/ssr)
  storage: cookieStorage, // persist the account state using cookies (read more here: https://accountkit.alchemy.com/react/ssr#persisting-the-account-state)
});

export const uiConfig: AlchemyAccountsProviderProps["uiConfig"] = {
  auth: {
    sections: [
      [{ type: "email" }],
      [{ type: "passkey" }],
      // [{ type: "injected" }],
    ],
    addPasskeyOnSignup: true,
  },
};

export const queryClient = new QueryClient();
