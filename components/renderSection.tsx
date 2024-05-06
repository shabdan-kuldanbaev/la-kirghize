import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { SECTION_TYPES } from '@/sanity/lib/constants';
import { ISection } from '@/types/types';

const Hero = dynamic(() => import('@/components/sections/hero'));
const StickyScrollMap = dynamic(() => import('@/components/sections/sticky-scroll-map'));

function RenderSection(data: ISection) {
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
    default:
      return null;
  }
}

export default RenderSection;
