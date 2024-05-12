import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';

import Header from '@/components/header';

import ClientSideScrollRestorer from '@/lib/providers';
import { Locale } from '@/i18n.config';
import { quicksand } from '@/lib/fonts';
import './globals.css';

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode,
  params:{ lang: Locale }
}>) {
  return (
    <html lang={lang}>
      <body className={quicksand.className}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <Suspense>
          <ClientSideScrollRestorer />
        </Suspense>
        {/* <Footer lang={lang} /> */}
      </body>
    </html>
  );
}
