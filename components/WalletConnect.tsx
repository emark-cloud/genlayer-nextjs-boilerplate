'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '../hooks/useWallet';

export default function WalletConnect() {
  const { connect, disconnect, account } = useWallet();
  const [hasProvider, setHasProvider] = useState(false);

  useEffect(() => {
    setHasProvider(Boolean((globalThis as any).ethereum));
  }, []);

  // No wallet installed
  if (!hasProvider) {
    return (
      <button
        className="px-3 py-1 bg-gray-100 rounded text-sm"
        onClick={() =>
          alert('No injected wallet found. Install MetaMask or use a WalletConnect provider.')
        }
      >
        Install Wallet
      </button>
    );
  }

  // Wallet not connected
  if (!account) {
    return (
      <button
        className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
        onClick={connect}
      >
        Connect Wallet
      </button>
    );
  }

  // Wallet connected
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium truncate max-w-[120px]">
        {account}
      </span>

      <button
        className="px-2 py-1 bg-red-100 rounded text-sm"
        onClick={disconnect}
      >
        Disconnect
      </button>
    </div>
  );
}
