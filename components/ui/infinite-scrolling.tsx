'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

function InfiniteScrolling({
  children,
  className,
}: {
  children: ReactNode,
  className?: string
}) {
  return (
    <div className={cn(' animate-banner scrolling-text repeat-infinite', className)}>
      {children}
    </div>
  );
}

export default InfiniteScrolling;
