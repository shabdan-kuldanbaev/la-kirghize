import client from '@/sanity/lib/client';
import { PAGE_GROQ } from './queries';

const QuerySanityFn = async ({ slug }: { slug: string }) => {
  try {
    const data = await client.fetch(
      PAGE_GROQ,
      { slug },
      {
        cache: 'no-cache',
      },
    );

    if (!data) return null;

    return data;
  } catch (e) {
    throw new Error('Something wrong !');
  }
};

export default QuerySanityFn;
