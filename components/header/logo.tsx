import cn from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { bulgarianBridge } from '@/lib/fonts';
import logoSvg from '@/public/logo.svg';

function Logo({ className } : { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-3 transition-all ease-in-out duration-300 text-2xl lg:text-4xl active:scale-110',
        bulgarianBridge.className,
        className,
      )}
    >
      <Image
        src={logoSvg.src}
        alt="La Kirghize"
        width={48}
        height={48}
      />
      La Kirghize
    </Link>
  );
}

export default Logo;
