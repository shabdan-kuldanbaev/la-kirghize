'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Locale, i18n } from '@/i18n.config';

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
  const { locales } = i18n;

  return (
    <div className={clsx('flex items-center space-x-2', className)}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={clsx(
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
