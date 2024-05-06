'use client';

import Link from 'next/link';

import cn from '@/lib/utils';

export default function ContactButton(
  {
    className, title, path, ...rest
  } : {
    className?: string,
    title: string,
    path: string
    onClick?: () => void
  },
) {
  return (
    <Link
      type="button"
      className={cn('px-4 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200', className)}
      href={path}
      {...rest}
    >
      {title}
    </Link>
  );
}
