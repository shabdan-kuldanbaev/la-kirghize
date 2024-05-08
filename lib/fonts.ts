import { Josefin_Sans, Quicksand, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const josefin = Josefin_Sans({ subsets: ['latin'] });
export const quicksand = Quicksand({ subsets: ['latin'] });
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
});

export const bulgarianBridge = localFont({
  src: [
    {
      path: './../public/fonts/Bulgarian_Bridge.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});
