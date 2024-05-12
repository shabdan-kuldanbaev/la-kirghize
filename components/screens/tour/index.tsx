'use client';

import {
  RefObject,
  createRef,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'next/navigation';

import RenderSection from '@/components/sections/renderSection';
import Reveal from '@/components/ui/reveal-animation';
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { cn } from '@/lib/utils';
import { IPage, ISection } from '@/types/types';

interface Props {
  data: IPage
}

function SlugScreen({ data }: Props) {
  const { sections, title } = data;
  const { lang } = useParams();

  const [activeSection, setActiveSection] = useState<string>();

  const refs = sections.reduce<{ [key: string]: RefObject<HTMLElement> }>((acc, cur) => {
    acc[cur._id] = createRef();

    return acc;
  }, {});

  const handleClick = (id: string) => {
    refs[id].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    setActiveSection(sections[0]._id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const domNode = document.getElementById(section._id);

        if (domNode) {
          const { top, bottom } = domNode.getBoundingClientRect();

          if (top <= 100 && bottom >= 100) {
            setActiveSection(section._id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <div className={`
          sticky top-0 z-10 py-4 px-2
          md:px-4 lg:px-10 bg-color-light-gray
        `}
      >
        <Reveal>
          <nav className="max-w-6xl mx-auto overflow-x-scroll no-visible-scrollbar">
            <ul className="flex justify-start gap-4">
              {sections.map(({ _id, heading }) => (
                <button
                  key={_id}
                  type="button"
                  onClick={() => handleClick(_id)}
                  className={cn(
                    'px-4 rounded-lg transition-all whitespace-nowrap last:mr-2',
                    { 'bg-black text-white': activeSection === _id },
                  )}
                >
                  {heading}
                </button>
              ))}
            </ul>
          </nav>
          <Breadcrumb className="max-w-6xl mt-4 mx-auto">
            <BreadcrumbList>
              <BreadcrumbLink href={`/${lang}/`}>{lang === 'fr' ? 'Accueil' : 'Home' }</BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbLink href={`/${lang}/circuits`}>{lang === 'fr' ? 'Circuits' : 'Tours' }</BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </Reveal>
      </div>
      {(sections || []).map((section: ISection) => (
        <RenderSection
          key={section._id}
          elRef={refs[section._id]}
          {...section}
        />
      ))}
    </>
  );
}

export default SlugScreen;
