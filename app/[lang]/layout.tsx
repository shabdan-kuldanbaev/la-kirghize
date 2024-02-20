import cn from 'clsx';
import type { Metadata } from 'next';
import TanstackProvider from '@/lib/tanstackProvider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Locale, i18n } from '@/i18n.config';
import { josefin } from '@/lib/fonts';
import client from '@/sanity/lib/client';
import urlForImage from '@/sanity/lib/image';
import { META_GROQ } from '@/lib/queries';
import { ICONS } from '@/lib/helpers';
import './globals.css';

type Props = {
  params: { lang: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { lang } = params;
  const page = await client.fetch(META_GROQ, { slug: 'accueil', lang }, { cache: 'no-cache' });

  if (!page) return null;

  const metaImage = urlForImage(page.metaImage);
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
    <html lang={lang} className="h-full">
      <body className={cn('relative h-full flex flex-col', josefin.className)}>
        <TanstackProvider>
          <Header lang={lang} />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
