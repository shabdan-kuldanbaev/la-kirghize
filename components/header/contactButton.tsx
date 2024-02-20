'use client';

import clsx from 'clsx';
import Link from 'next/link';

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
      className={clsx('p-[3px] relative', className)}
      href={path}
      {...rest}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </Link>
  );
}
