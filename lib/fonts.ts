import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const josefin = Josefin_Sans({ subsets: ['latin'] });

export const bulgarianBridge = localFont({
  src: [
    {
      path: './../public/fonts/Bulgarian_Bridge.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});
