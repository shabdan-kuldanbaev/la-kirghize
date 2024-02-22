import favicon from '@/public/favicon.ico';
import favicon16 from '@/public/favicon-16x16.png';
import favicon32 from '@/public/favicon-32x32.png';
import appleTouchIcon from '@/public/apple-touch-icon.png';
import android192 from '@/public/android-chrome-192x192.png';
import android512 from '@/public/android-chrome-512x512.png';

// eslint-disable-next-line import/prefer-default-export
export const ICONS = {
  icon: [
    { url: favicon.src },
    { url: favicon16.src, sizes: '16x16' },
    { url: favicon32.src, sizes: '32x32' },
    { url: android192.src, sizes: '192x192' },
    { url: android512.src, sizes: '512x512' },
  ],
  apple: appleTouchIcon.src,
};
