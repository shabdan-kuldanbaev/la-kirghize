import { cache } from 'react';
import client from '@/sanity/lib/client';
import { DataFetch } from '@/types/types';

const DataFetchFn = cache(async (
  groq: string,
  params: {
    [key: string]: string | boolean
  },
): Promise<DataFetch | null> => {
  try {
    return await client.fetch(
      groq,
      params,
      {
        next: { revalidate: 1000 },
      },
    );
  } catch {
    return null;
  }
});

export default DataFetchFn;
