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
            className={cn(`max-w-fit 
            overflow-hidden
            transition-all duration-[400ms] pointer-events-auto
            flex flex-col relative bg-wrapper
            min-w-[0] lg:min-w-[556px] p-2 rounded-xl
          `, {
              'min-w-full max-w-screen-xl lg:min-w-[720px]': isOpen,
            })}
          >
            <div className={cn(`
              max-w-screen-xl max-h-0 overflow-hidden 
              transition-all duration-[400ms]
            `, { 'max-h-[500px]': isOpen })}
            >
              <div className={cn(`
                w-full hidden mb-2
                bg-[#2c2c2c] p-6 
                transition-all duration-[400ms]
                rounded-[8px]
              `, { block: isOpen })}
              >
                <nav className={cn(`
                  opacity-0
                  overflow-hidden
                  max-w-0
                  text-white
                  transition-all
                  duration-1000
                  flex justify-between items-start gap-4
                `, { 'opacity-100 max-w-full': isOpen })}
                >
                  <Logo theme="light" />
                  {(links[lang] || []).map((link) => (
                    link.path
                      ? (
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
                      : (
                        <div key={link.title} className="flex flex-col gap-2">
                          <p>
                            {link.title}
                          </p>
                          {(link.items || []).map((item) => (
                            <Link href={item.path} key={item.title}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )
                  ))}
                </nav>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <div className={cn(`
                  flex justify-between items-center gap-2 px-1
                  text-white bg-[#222] rounded-[8px]
                  overflow-hidden transition-all duration-[400ms]
                `, { 'min-w-full': isOpen })}
              >
                <Hamburger size={25} toggled={isOpen} onToggle={() => setOpen((prev) => !prev)} />
                <LangSwitcher />
              </div>
              {!isOpen && (
                <div
                  className={`
                    flex justify-between items-center gap-2 px-1
                  text-white bg-[#3e3e3e] rounded-[8px]
                    overflow-hidden
                  `}
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
