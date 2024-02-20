import client from '@/sanity/lib/client';

const QuerySanityFn = async (
  groq: string,
  params: { [key: string]: string },
) => {
  try {
    const data = await client.fetch(
      groq,
      params,
      { cache: 'no-cache' },
    );

    return data;
  } catch {
    return null;
  }
};

export default QuerySanityFn;
