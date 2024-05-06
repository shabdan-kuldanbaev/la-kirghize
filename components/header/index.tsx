'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';

import LangSwitcher from './langSwitcher';
import Logo from './logo';

import links from '@/lib/links/headerLinks';
import { Locale } from '@/i18n.config';
import cn from '@/lib/utils';
import styles from './styles.module.css';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const { lang }: { lang: Locale } = useParams();
  const path = usePathname();

  return (
    <header
      className="fixed left-0 bottom-8 z-50 w-full pointer-events-none"
      onMouseLeave={() => setOpen(false)}
    >
      <div className="max-w-7xl px-2 lg:px-10 mx-auto w-full">
        <div className="relative flex justify-center">
          <div
            style={{ minWidth: `${!isOpen && '500px'}` }}
            className={cn(
              styles['menu-float__wrapper'],
              { [styles['is-open']]: isOpen },
            )}
          >
            <div
              className={cn(
                styles['menu-float__top'],
                { [styles['is-open']]: isOpen },
              )}
            >
              <div className={cn(
                styles['menu-float__menu'],
                'flex-col gap-2',
                { [styles['is-active']]: isOpen },
              )}
              >
                <Logo theme="light" />
                <nav className={cn(
                  styles['menu-float__menu-content'],
                  'flex flex-col gap-4 mt-4',
                  { [styles['is-show']]: isOpen },
                )}
                >
                  <div className="flex gap-2">
                    {(links[lang] || []).map((link) => (
                      !link.items && (
                        <Link
                          href={link.path}
                          key={link.title}
                          className={`
                          relative
                          hover:opacity-70
                          font-light text-xs pl-3 text-[#a7a7a7] 
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
                          className={`
                            relative
                            hover:opacity-70
                            font-light text-xs pl-3 text-[#a7a7a7] 
                            before:absolute before:-left-0.5 before:top-1
                            before:w-1 before:h-1 before:bg-[#C8E4D3] before:rounded-[50%]
                          `}
                        >
                          {link.title}
                        </Link>
                        {(link.items || []).map((item) => (
                          <Link
                            className={`
                          text-white
                          pl-3 font-light text-sm
                          hover:border-white
                          hover:opacity-70
                          border-l-[1px] border-transparent
                          transition-all duration-[400ms]
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
            <div className={cn(styles['menu-float__bottom'], 'gap-2', { [styles['is-open-main']]: isOpen })}>
              <div className={cn(`
                  flex justify-between items-center gap-2 px-1
                  text-white bg-[#222] rounded-[8px]
                  overflow-hidden transition-all duration-[1000ms]
                `, { 'min-w-full': isOpen })}
              >
                <Hamburger size={25} toggled={isOpen} onToggle={() => setOpen((prev) => !prev)} />
                <LangSwitcher />
              </div>
              <nav
                className={cn(`
                hidden
                justify-between items-center gap-2 px-1
              text-white bg-[#3e3e3e] rounded-[8px]
                overflow-hidden
              `, { 'hidden lg:flex': !isOpen })}
              >
                {(links[lang] || []).map((item) => (
                  <Link
                    href={item.path}
                    className={cn(`
                    hidden lg:block
                    p-2 rounded-[8px] text-[#d3d3d3]
                    border-solid border-[1px] border-[#4e4e4e] text-sm font-light
                    hover:border-[#a7a7a7] transition-all duration-[400ms]
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
