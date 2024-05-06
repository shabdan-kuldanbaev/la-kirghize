'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Locale, i18n } from '@/i18n.config';
import cn from '@/lib/utils';

function LangSwitcher(
  {
    lang,
    className,
  }:
  {
    lang: Locale,
    className?: string,
  },
) {
  const path = usePathname();
  const { locales } = i18n;

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={path.replace(`/${lang}/`, `/${locale}/`)}
          className={cn(
            'px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
            { 'pointer-events-none bg-primary/50': locale === lang },
          )}
        >
          {locale}
        </Link>
      ))}

    </div>
  );
}

export default LangSwitcher;
