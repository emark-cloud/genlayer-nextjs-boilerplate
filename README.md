# 🚀 GenLayer Next.js Boilerplate (with Wallet Connect + Contract Playground)

This repository is a **Next.js migration** of the official GenLayer project boilerplate.
It includes:

* Modern **Next.js + TypeScript** setup
* Lightweight **EIP-1193** Wallet Connect (MetaMask compatible)
* `useWallet` hook for provider detection & connection
* `useGenLayer` hook for GenLayer client calls
* Contract Playground UI for interacting with intelligent contracts
* Example **P2PBet** contract (GenLayer v0.1.0 compliant)

This aims to be the **official Next.js starter** for future GenLayer builders.

---

## 📦 Features

### ✔ Next.js (App Router)

Fully configured Next.js + TypeScript project structure.

### ✔ Wallet Connection (MetaMask / any EIP-1193 provider)

Includes:

* Provider detection
* Connect / disconnect
* Address display
* Error handling

### ✔ GenLayer Client Integration

Ready-to-use `useGenLayer` hook + helper module.

### ✔ Contract Playground

Simple UI to call:

* create_bet
* accept_bet
* resolve_bet

### ✔ Example Python Intelligent Contract

Located in `/contracts/p2p_bet.py`.

---

## 🗂 Project Structure

```
genlayer-nextjs-boilerplate/
│
├── app/
│   ├── page.tsx
│   ├── _app.tsx
│
├── components/
│   ├── Header.tsx
│   ├── WalletConnect.tsx
│   ├── ContractPlayground.tsx
│
├── hooks/
│   ├── useWallet.ts
│   ├── useGenLayer.ts
│
├── lib/
│   ├── genlayerClient.ts
│
├── contracts/
│   ├── p2p_bet.py
│
├── public/
│   ├── logo.png
│
├── styles/
│   ├── globals.css
│
├── package.json
├── tsconfig.json
├── next.config.js
├── .env.example
├── README.md
└── README-PR.md
```

---

## 🔧 Installation

Clone the repo:

```bash
npm install
cp .env.example .env.local
```

Add your GenLayer API key to `.env.local`:

```
NEXT_PUBLIC_GENLAYER_API_KEY=your_key_here
```

Start development server:

```bash
npm run dev
```

Open your browser:

👉 [http://localhost:3000](http://localhost:3000)

---

## 🔌 Wallet Connect Usage

* Click **Connect Wallet**
* MetaMask will prompt for approval
* Once connected, your address appears in the header
* The Contract Playground will use your connected address automatically

---

## 🧪 Testing a Contract Using the Playground

Ensure you have deployed the example contract (`p2p_bet.py`) in **GenLayer Studio**.

Then:

1. Click **Create Bet**
2. Click **Accept Bet**
3. Click **Resolve Bet**

All output appears in the Logs window.

---

## 🧱 Example Contract (`p2p_bet.py`)

This contract:

* Is fully GenLayer v0.1.0 compatible
* Uses deterministic YES/NO prompts
* Demonstrates AI validator consensus (Optimistic Democracy)

---

## 🤝 Contributing

Pull requests are welcome!
Please see `README-PR.md` for the included PR template.

---

## 📝 License

MIT
