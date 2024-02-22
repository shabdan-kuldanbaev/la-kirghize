'use client';

import Image from 'next/image';
import logoSvg from '@/public/logo.svg';

export default function LoadingAnimation() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 grid place-content-center bg-white">
      <Image
        src={logoSvg.src}
        alt="La Kirghize"
        width={72}
        height={72}
        className="animate-pulse"
      />
    </div>
  );
}
