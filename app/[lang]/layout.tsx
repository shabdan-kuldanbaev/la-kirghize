import cn from 'clsx';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/header';
import Footer from '@/components/footer';

import urlForImage from '@/sanity/lib/image';
import DataFetchFn from '@/lib/api';
import { Locale, i18n } from '@/i18n.config';
import { josefin } from '@/lib/fonts';
import { META_GROQ } from '@/lib/queries';
import { ICONS } from '@/lib/metaIcons';
import './globals.css';

type Props = {
  params: { lang: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { lang } = params;

  const page = await DataFetchFn(META_GROQ, { slug: 'accueil', lang });

  if (!page) return null;

  const metaImage = page.metaImage && page.metaImage.asset ? urlForImage(page.metaImage) : '';

  return {
    metadataBase: new URL('https://la-kirghize.com'),
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      images: [metaImage],
    },
    icons: ICONS,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode,
  params:{ lang: Locale }
}>) {
  return (
    <html lang={lang}>
      <body className={cn('relative', josefin.className)}>
        <Header lang={lang} />
        <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
