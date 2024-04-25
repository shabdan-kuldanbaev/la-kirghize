'use server';

import Link from 'next/link';
import Logo from '@/components/header/logo';
import { Locale } from '@/i18n.config';
import { getFooterLinks } from '@/lib/links/dictionaries';

async function Footer({ lang }: { lang: Locale }) {
  const footerLinks = await getFooterLinks(lang);

  return (
    <footer className="bg-zinc-800 snap-start">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-between py-20 md:py-40 gap-y-6">
          <Logo theme="light" />
          <div className="flex flex-row flex-wrap gap-10">
            {footerLinks.map(({
              title,
              path,
              items,
            }) => (
              items
                ? (
                  <div key={title} className="flex flex-col">
                    {path
                      ? (
                        <Link
                          className="text-white text-lg"
                          href={path}
                        >
                          {title}
                        </Link>
                      )
                      : <h4 className="text-white">{title}</h4>}
                    {items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.path}
                        className="text-white opacity-60"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )
                : (
                  <Link
                    key={title}
                    className="text-white"
                    href={path}
                  >
                    {title}
                  </Link>
                )
            ))}
          </div>
        </div>
        <p className="text-white opacity-60">© 2024 La Kirghize. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
