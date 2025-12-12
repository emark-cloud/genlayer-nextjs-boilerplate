# 🔥 PR: Next.js Migration + Wallet Connect + Contract Playground

## Summary

This PR introduces a **Next.js + TypeScript migration** of the GenLayer project boilerplate. It replaces the existing Vue-based structure with a more modern and widely-used framework, significantly improving the Builder Journey and providing a scalable base for future examples, tutorials, and production dApps.

Key additions include:

* Full **Next.js App Router** project structure
* **EIP-1193 Wallet Connection** (MetaMask-compatible)
* `useWallet` hook for provider detection, connection, and account state
* `useGenLayer` hook for GenLayer client interactions
* **Contract Playground UI** for developers to test contract actions easily
* Example **P2PBet** Python Intelligent Contract (GenLayer v0.1.0 compliant)

This PR fulfills the Builder Program suggestions for:

* Migrating boilerplate to a modern framework
* Improving wallet connectivity
* Providing reusable UI patterns for interacting with Intelligent Contracts

---

## 📦 What Was Added

### **1. Next.js Migration**

* New `/app` directory using the App Router
* Clean project structure with TypeScript
* Updated build configuration files (package.json, tsconfig.json, next.config.js)

### **2. Wallet Connection Improvements**

* Lightweight EIP-1193 wallet detection and connection using `ethers`
* Shared `WalletProvider` context
* Connect/Disconnect UI component
* Automatic account loading on refresh

### **3. GenLayer Integration**

* `useGenLayer` hook returns a configured GenLayer client
* Shared helper module `/lib/genlayerClient.ts`
* Clear environment variable usage for API keys

### **4. Contract Playground UI**

Allows builders to directly test:

* `create_bet`
* `accept_bet`
* `resolve_bet`

Includes real-time log output and automatic address injection when wallet is connected.

### **5. Example Intelligent Contract Included**

* `/contracts/p2p_bet.py` is GenLayer v0.1.0 compatible
* Demonstrates deterministic prompting for validator consensus
* Serves as a starter contract for builders

---

## 🧪 How to Test This PR

Run the following steps locally:

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` and set:

```
NEXT_PUBLIC_GENLAYER_API_KEY=your_key_here
```

Then start the development server:

```bash
npm run dev
```

### **Testing Steps:**

1. Navigate to [http://localhost:3000](http://localhost:3000)
2. Click **Connect Wallet** (MetaMask)
3. Deploy `p2p_bet.py` in GenLayer Studio
4. Use the Contract Playground buttons:

   * **Create Bet**
   * **Accept Bet**
   * **Resolve Bet**
5. View results in the Logs window

Everything should work smoothly with a valid GenLayer API key.

---

## 🧩 Suggested Commit Messages

```
feat(nextjs): add full Next.js migration scaffold
feat(wallet): implement EIP-1193 wallet connection (MetaMask)
feat(genlayer): add useGenLayer hook and client factory
feat(ui): add ContractPlayground testing interface
feat(contract): add example p2p_bet.py intelligent contract
docs: add README and PR documentation
```

---

## 📌 PR Checklist

* [ ] Runs locally without errors (`npm run dev`)
* [ ] Wallet connect works (MetaMask or EIP-1193 provider)
* [ ] GenLayer client accepts API key and executes actions
* [ ] Contract Playground UI responds correctly
* [ ] Documentation updated and aligned with project goals
* [ ] Example contract tested in GenLayer Studio

---

## 🎯 Why This PR Matters

This contribution significantly improves the **GenLayer Builder Experience**, providing:

* A modern framework (Next.js) widely adopted by the web3 ecosystem
* A clean and understandable wallet integration
* A ready-made interface for interacting with Intelligent Contracts
* A strong foundation for tutorials, workshops, hackathons, and example projects

This PR enhances GenLayer's onboarding for new developers and sets a solid foundation for future tooling within the Builder Program.

---

## 🙌 Additional Notes

Future improvements can include:

* RainbowKit or WalletConnect v2 integration
* Automatic contract deployment utilities
* Multi-contract dashboards
* Full-featured dApp template with routing and state management

This PR is intentionally focused, lightweight, and easy to extend.
