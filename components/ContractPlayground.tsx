'use client';

import React, { useState } from 'react';
import { useGenLayer } from '../hooks/useGenLayer';
import { useWallet } from '../hooks/useWallet';

export default function ContractPlayground() {
  const client = useGenLayer();
  const { account } = useWallet();
  const [logs, setLogs] = useState<string[]>([]);

  // Utility logging
  const log = (msg: string) => setLogs((prev) => [...prev, msg]);

  async function runCreate() {
    try {
      const res = await client.action('p2p_bet', 'create_bet', {
        creator: account || 'alice',
        stake: 10
      });
      log(JSON.stringify(res));
    } catch (e: any) {
      log('ERROR: ' + (e.message || String(e)));
    }
  }

  async function runAccept() {
    try {
      const res = await client.action('p2p_bet', 'accept_bet', {
        joiner: account || 'bob',
        stake: 10
      });
      log(JSON.stringify(res));
    } catch (e: any) {
      log('ERROR: ' + (e.message || String(e)));
    }
  }

  async function runResolve() {
    try {
      const res = await client.action('p2p_bet', 'resolve_bet', {});
      log(JSON.stringify(res));
    } catch (e: any) {
      log('ERROR: ' + (e.message || String(e)));
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Contract Playground</h2>

      <p className="text-gray-600 text-sm mt-1">
        Call P2PBet intelligent contract actions directly from the UI.
      </p>

      <div className="flex gap-2 mt-4">
        <button
          className="px-3 py-1 bg-green-600 text-white rounded"
          onClick={runCreate}
        >
          Create Bet
        </button>

        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded"
          onClick={runAccept}
        >
          Accept Bet
        </button>

        <button
          className="px-3 py-1 bg-indigo-600 text-white rounded"
          onClick={runResolve}
        >
          Resolve Bet
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-medium">Logs</h3>
        <pre className="bg-gray-100 p-3 rounded mt-2 text-sm max-h-64 overflow-auto">
{logs.join('\n')}
        </pre>
      </div>
    </div>
  );
}
