'use client';

import { useQuery } from '@tanstack/react-query';
import QuerySanityFn from '@/lib/api';

interface HookProps {
  queryKey: string[],
  groq: string,
  params: { [key:string]: string }
}

export default ({
  queryKey,
  groq,
  params,
}: HookProps) => useQuery({
  queryKey: [...queryKey],
  queryFn: () => QuerySanityFn(groq, params),
});
