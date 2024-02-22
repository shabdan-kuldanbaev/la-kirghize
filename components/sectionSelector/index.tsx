import { SECTION_TYPES } from '@/sanity/lib/constants';
import Hero from '@/components/sections/hero';

function SectionSelector({ section }: { section: any }) {
  switch (section?.sectionType) {
    case SECTION_TYPES.hero.value:
      return (
        <Hero {...section} />
      );
    default:
      return null;
  }
}

export default SectionSelector;
