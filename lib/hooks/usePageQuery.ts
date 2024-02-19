'use client';

import { useQuery } from '@tanstack/react-query';
import QuerySanityFn from '@/lib/api';

export default (
  { slug } : { slug: string },
) => useQuery({
  queryKey: ['page', slug],
  queryFn: () => QuerySanityFn({ slug }),
});
