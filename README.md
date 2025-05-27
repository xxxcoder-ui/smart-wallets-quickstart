# Account Kit Quickstart (Next.js)

Template for building **embedded smart wallets** with [Alchemy Account Kit](https://www.alchemy.com/docs/wallets). Features gas‑sponsored transactions and an NFT minting demo.

## ✨ Features

- Email, passkey & social login via pre‑built Account Kit modal
- Smart account with sponsored gas via Paymaster policy
- One‑click NFT mint on Base Sepolia (no ETH required)
- Server‑side rendering ready – session persisted with cookies
- TailwindCSS + shadcn/ui components, React Query, TypeScript

## 🚀 Quick start

Choose the setup that fits your workflow.

### Option A – scaffold a fresh app

```bash
yarn create next-app account-kit-quickstart \
  -e https://github.com/alchemyplatform/account-kit-quickstart
cd account-kit-quickstart
```

### Option B – clone the template repo

```bash
git clone https://github.com/alchemyplatform/account-kit-quickstart.git
cd account-kit-quickstart
```

Finish configuration:

```bash
cp .env.example .env.local      # create if missing
# add NEXT_PUBLIC_ALCHEMY_API_KEY=...
# add NEXT_PUBLIC_PAYMASTER_POLICY_ID=...

yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000), click **Login**, then **Mint New NFT**.

## 🔧 Configuration

| Variable                          | Purpose                               |
| --------------------------------- | ------------------------------------- |
| `NEXT_PUBLIC_ALCHEMY_API_KEY`     | API key from your Alchemy dashboard   |
| `NEXT_PUBLIC_PAYMASTER_POLICY_ID` | Gas Manager policy ID for sponsorship |

Customize chain, auth methods, or modal style in `config.ts`.

## 🗂 Project layout

```
app/           # Next.js pages & components
components/ui/ # shadcn/ui primitives
lib/           # constants & helpers
config.ts      # Account Kit + Paymaster setup
tailwind.config.ts
```

## 🏗️ How it works

1. `config.ts` initializes Account Kit with your API key, Base Sepolia chain, and Paymaster policy.
2. `Providers` wraps the app with `AlchemyAccountProvider` & React Query.
3. `LoginCard` opens the authentication modal (`useAuthModal`).
4. After login, `useSmartAccountClient` exposes the smart wallet.
5. `NftMintCard` uses `useSendUserOperation` to call `mintTo()` on the demo ERC‑721, with gas paid by the Paymaster.

## 📚 Docs & resources

- React Quickstart → [https://www.alchemy.com/docs/wallets/react/quickstart](https://www.alchemy.com/docs/wallets/react/quickstart)
- Embedded accounts overview → [https://www.alchemy.com/docs/wallets/react/overview](https://www.alchemy.com/docs/wallets/react/overview)
- Gas Manager quickstart → [https://www.alchemy.com/docs/wallets/infra/quickstart](https://www.alchemy.com/docs/wallets/infra/quickstart)

## 🖥 Scripts

```bash
yarn dev     # start development server
yarn build   # production build
yarn start   # run production build
yarn lint    # lint code
```

## 🛂 License

MIT
