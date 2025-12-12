'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';
import { ethers } from 'ethers';

// ----------------------------
// Types
// ----------------------------
type WalletContextType = {
  account: string | null;
  provider: ethers.BrowserProvider | null;
  connect: () => Promise<void>;
  disconnect: () => void;
};

// ----------------------------
// Create context
// ----------------------------
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// ----------------------------
// Provider wrapper
// ----------------------------
export function WalletProvider({ children }: { children: ReactNode }) {
  const wallet = useProvideWallet();
  return <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>;
}

// ----------------------------
// Hook used by components
// ----------------------------
export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error('useWallet must be used inside <WalletProvider>');
  return ctx;
}

// ----------------------------
// Main wallet logic
// ----------------------------
function useProvideWallet(): WalletContextType {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  // Detect wallet on load
  useEffect(() => {
    const eth = (globalThis as any).ethereum;
    if (!eth) return;

    const p = new ethers.BrowserProvider(eth);
    setProvider(p);

    // Load existing accounts (if user already connected)
    p.send('eth_accounts', [])
      .then((accounts: string[]) => {
        if (accounts && accounts.length > 0) setAccount(accounts[0]);
      })
      .catch(() => {});
  }, []);

  // Connect wallet
  async function connect() {
    try {
      const eth = (globalThis as any).ethereum;
      if (!eth) throw new Error('No injected wallet found');

      const p = new ethers.BrowserProvider(eth);
      await p.send('eth_requestAccounts', []);

      const signer = await p.getSigner();
      const addr = await signer.getAddress();

      setAccount(addr);
      setProvider(p);
    } catch (err: any) {
      console.error('Wallet connect error:', err);
      alert(err.message || 'Failed to connect wallet');
    }
  }

  // Disconnect wallet
  function disconnect() {
    setAccount(null);
    setProvider(null);
  }

  return { account, provider, connect, disconnect };
}
