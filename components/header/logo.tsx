import cn from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { bulgarianBridge } from '@/lib/fonts';
import darkSvg from '@/public/logo.svg';
import lightSvg from '@/public/logoLight.svg';

type Theme = 'dark' | 'light';

const themes = {
  dark: darkSvg.src,
  light: lightSvg.src,
};

function Logo({
  className, theme = 'dark',
  ...rest
} : {
  className?: string,
  theme?: Theme
}) {
  return (
    <Link
      href="/"
      className={cn(
        `
        flex 
        items-center 
        gap-3 
        transition-all 
        ease-in-out 
        duration-300 
        text-lg 
        whitespace-nowrap
        lg:text-xl 
        `,
        bulgarianBridge.className,
        theme === 'dark' ? 'text-black' : 'text-white',
        className,
      )}
      {...rest}
    >
      <Image
        src={themes[theme]}
        alt="La Kirghize"
        width={32}
        height={32}
      />
      La Kirghize
    </Link>
  );
}

export default Logo;
