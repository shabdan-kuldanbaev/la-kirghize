'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';
import RenderSection from '@/components/renderSection';

import { IPage, ISection } from '@/types/types';
import cn from '@/lib/utils';

interface Props {
  data: IPage
}

function SlugScreen({ data }: Props) {
  const { sections } = data;
  const [activeSection, setActiveSection] = useState<string | null>(sections[0]?._id);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const domNode = document.getElementById(section._id);

        if (domNode) {
          const { top, bottom } = domNode.getBoundingClientRect();

          if (top <= 0 && bottom >= 0) {
            setActiveSection(section._id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <div className="sticky top-0 bg-color-light-gray z-40 p-4 scroll-auto">
        <div className="flex justify-start gap-4 max-w-5xl mx-auto">
          {sections.map(({ _id, heading }) => (
            <Link
              scroll
              key={_id}
              href={`#${_id}`}
              className={cn('px-4 rounded-lg transition-all', { 'bg-black text-white': activeSection === _id })}
            >
              {heading}
            </Link>
          ))}
        </div>
      </div>
      <div>
        {(sections || []).map((section: ISection) => (
          <RenderSection
            {...section}
            key={section._id}
          />
        ))}
      </div>
    </>
  );
}

export default SlugScreen;
