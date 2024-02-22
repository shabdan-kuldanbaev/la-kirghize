'use server';

import { ReactNode } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import QuerySanityFn from '@/lib/api';

interface Props {
  queryKey: string[],
  groq: string,
  params: { [key:string]: string },
  children: ReactNode
}

async function PrefetchProvider({
  queryKey,
  groq,
  params,
  children,
} : Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [...queryKey],
    queryFn: () => QuerySanityFn(groq, params),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default PrefetchProvider;
