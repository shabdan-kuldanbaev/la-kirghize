import cn from 'clsx';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { Locale } from '@/i18n.config';
import { josefin } from '@/lib/fonts';
import './globals.css';

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
        <Header lang={lang} />
        <main className="flex-auto">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
