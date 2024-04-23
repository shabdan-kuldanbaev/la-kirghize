import { ICONS } from '@/lib/metaIcons';

export const metadata = {
  title: 'La Kirghize',
  icons: ICONS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
