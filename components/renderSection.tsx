import { SECTION_TYPES } from '@/sanity/lib/constants';
import Hero from '@/components/sections/hero';
import TabsSection from '@/components/sections/tabs';

function RenderSection({ section }: { section: any }) {
  switch (section?.sectionType) {
    case SECTION_TYPES.hero.value:
      return <Hero {...section} />;
    case SECTION_TYPES.tabs.value:
      return <TabsSection {...section} />;
    default:
      return null;
  }
}

export default RenderSection;
