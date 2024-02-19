'use server';

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import React, { ReactNode } from 'react';
import QuerySanityFn from '@/lib/api';

async function PrefetchProvider({
  params: { slug },
  children,
}:{
  params: { slug: string, },
  children: ReactNode
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['page', slug],
    queryFn: () => QuerySanityFn({ slug }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

export default PrefetchProvider;
