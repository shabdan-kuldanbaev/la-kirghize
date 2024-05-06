'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';
import cn from '@/lib/utils';

function LangSwitcher(
  {
    className,
  }:
  {
    className?: string,
  },
) {
  const { lang } = useParams();
  const path = usePathname();
  const { locales } = i18n;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={path.replace(`/${lang}/`, `/${locale}/`)}
          className={cn(`block
          py-2 px-4 rounded-[8px] text-[#d3d3d3]
          border-solid border-[1px] border-[#4e4e4e] text-sm font-light
          hover:border-[#a7a7a7] transition-all duration-300
        `, { 'border-[#a7a7a7]': lang === locale })}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}

export default LangSwitcher;
