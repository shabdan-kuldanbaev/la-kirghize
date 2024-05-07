'use client';

import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';

import LangSwitcher from './langSwitcher';
import Logo from './logo';

import links from '@/lib/links/headerLinks';
import { Locale } from '@/i18n.config';
import cn from '@/lib/utils';

export default function Header() {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const { lang }: { lang: Locale } = useParams();
  const path = usePathname();

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => document.removeEventListener('click', handleClickOutside, true);
  });

  return (
    <header className="fixed left-0 bottom-8 z-50 w-full pointer-events-none">
      <div className="max-w-7xl px-2 lg:px-10 mx-auto w-full">
        <div className="relative flex justify-center">
          <div
            ref={ref}
            className={cn(
              `relative flex flex-col min-w-0 max-w-fit p-1 
              rounded-xl pointer-events-auto
              transition-all duration-500 bg-wrapper`,
              { 'min-w-full lg:min-w-[720px] max-w-7xl': isOpen },
            )}
          >
            <div
              className={cn(
                `min-w-[auto] overflow-y-auto max-h-0
                lg:max-w-[707px] transition-all duration-500 
                overflow-hidden`,
                { 'max-w-7xl max-h-screen lg:max-h-screen': isOpen },
              )}
            >
              <div className={cn(
                `hidden mb-2 p-7 bg-menu gap-2 w-full text-white
                rounded-lg z-[-1] transition-[] duration-500`,
                { 'block div': isOpen },
              )}
              >
                <div className={cn(
                  `max-w-0 opacity-100 transition-all
                  duration-500 overflow-hidden`,
                  { 'max-w-7xl': isOpen },
                )}
                >
                  <Logo theme="light" />
                  <nav className="flex flex-col gap-4 mt-4">
                    <div className="flex gap-2">
                      {(links[lang] || []).map((link) => (
                        !link.items && (
                        <Link
                          href={link.path}
                          key={link.title}
                          className={`
                          relative
                          hover:opacity-70
                          font-light text-sm pl-3 text-[#a7a7a7] 
                          before:absolute before:-left-0.5 before:top-1
                          before:w-1 before:h-1 before:bg-[#C8E4D3] before:rounded-[50%]
                        `}
                        >
                          {link.title}
                        </Link>
                        )
                      ))}
                    </div>
                    <div className="flex flex-col justify-between items-start gap-2 lg:flex-row">
                      {(links[lang] || []).map((link) => (
                        link.items && (
                        <div key={link.title} className="flex flex-col gap-4 bg-linear bg-left-top bg-repeat-y bg-custom-1">
                          <Link
                            href={link.path}
                            onClick={() => setOpen(false)}
                            className={`
                            relative
                            hover:opacity-70
                            font-light text-sm pl-3 text-[#a7a7a7] 
                            before:absolute before:-left-0.5 before:top-1
                            before:w-1 before:h-1 before:bg-[#C8E4D3] before:rounded-[50%]
                          `}
                          >
                            {link.title}
                          </Link>
                          {(link.items || []).map((item) => (
                            <Link
                              onClick={() => setOpen(false)}
                              className={`
                            text-white
                              pl-3 font-light text-sm
                            hover:border-white
                              hover:opacity-70
                              border-l-[1px] border-transparent
                              transition-all duration-300
                            `}
                              href={item.path}
                              key={item.title}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                        )
                      ))}
                    </div>
                  </nav>
                </div>

              </div>
            </div>
            <div className={cn(
              `relative flex justify-center gap-2 transition-all
              duration-700`,
            )}
            >
              <div className={cn(`
                  flex justify-between items-center gap-2 px-1
                  text-white bg-[#222] rounded-[8px]
                  overflow-hidden transition-all duration-300
                `, { 'w-full': isOpen })}
              >
                <Hamburger
                  size={25}
                  toggled={isOpen}
                  toggle={handleToggle}
                />
                <LangSwitcher />
              </div>
              <nav
                className={cn(`
                hidden 
                justify-between items-center gap-2 px-1
              text-white bg-[#3e3e3e] rounded-[8px]
                overflow-hidden
              `, { 'hidden div lg:flex': !isOpen })}
              >
                {(links[lang] || []).map((item) => (
                  <Link
                    href={item.path}
                    className={cn(`
                    hidden lg:block
                    p-2 rounded-[8px] text-[#d3d3d3]
                    border-solid border-[1px] border-[#4e4e4e] text-sm font-light
                    hover:border-[#a7a7a7] transition-all duration-300
                  `, { 'border-[#a7a7a7]': path === item.path })}
                    key={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
