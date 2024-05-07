'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { Locale, i18n } from '@/i18n.config';
import cn from '@/lib/utils';

function LangSwitcher(
  { className }:
  { className?: string },
) {
  const path = usePathname();
  const { lang } :{ lang: Locale } = useParams();

  const { locales } = i18n;
  const replaceTo = locales.find((i) => i !== lang);

  return (
    <Link
      href={path.replace(new RegExp(lang, 'g'), `${replaceTo}`)}
      className={cn(`block
          py-2 px-4 rounded-[8px] text-[#d3d3d3]
          border-solid border-[1px] border-[#4e4e4e] text-sm font-light
          hover:border-[#a7a7a7] transition-all duration-300
        `, className)}
    >
      {replaceTo}
    </Link>
  );
}

export default LangSwitcher;
