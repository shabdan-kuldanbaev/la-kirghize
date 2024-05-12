import dynamic from 'next/dynamic';
import { RefObject, Suspense } from 'react';

import { SECTION_TYPES } from '@/sanity/lib/constants';
import { ISection } from '@/types/types';

const Intro = dynamic(() => import('@/components/sections/intro'));
const Hero = dynamic(() => import('@/components/sections/hero'));
const StickyScrollMap = dynamic(() => import('@/components/sections/sticky-scroll-map'));

interface Props extends ISection {
  elRef?: RefObject<HTMLElement>
}

function RenderSection(data: Props) {
  const { sectionType } = data;

  switch (sectionType) {
    case SECTION_TYPES.hero.value:
      return (
        <Suspense fallback={null}>
          <Hero {...data} />
        </Suspense>
      );
    case SECTION_TYPES.sticky.value:
      return (
        <Suspense fallback={null}>
          <StickyScrollMap {...data} />
        </Suspense>
      );
    case SECTION_TYPES.intro.value:
      return (
        <Suspense fallback={null}>
          <Intro {...data} />
        </Suspense>
      );
    default:
      return null;
  }
}

export default RenderSection;
