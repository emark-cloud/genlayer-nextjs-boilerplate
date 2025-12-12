import { GenLayerClient } from 'genlayer';

/**
 * Creates a new GenLayer client instance.
 *
 * This helper is useful for:
 * - server-side scripts
 * - API routes
 * - running GenLayer actions outside React components
 */
export function createGenLayerClient() {
  const apiKey = process.env.NEXT_PUBLIC_GENLAYER_API_KEY;

  if (!apiKey) {
    console.warn('⚠️ Warning: NEXT_PUBLIC_GENLAYER_API_KEY is missing.');
  }

  return new GenLayerClient({
    apiKey: apiKey || ''
  });
}
