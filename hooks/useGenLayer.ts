import { GenLayerClient } from 'genlayer';
import { useMemo } from 'react';

export function useGenLayer() {
  const client = useMemo(() => {
    const apiKey = process.env.NEXT_PUBLIC_GENLAYER_API_KEY;

    if (!apiKey) {
      console.warn('⚠️ Missing NEXT_PUBLIC_GENLAYER_API_KEY');
    }

    return new GenLayerClient({
      apiKey: apiKey || ''
    });
  }, []);

  return client;
}
