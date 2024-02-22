'use client';

import { useParams } from 'next/navigation';
import RenderSection from '@/components/renderSection';
import useDataQuery from '@/lib/hooks/useDataQuery';
import { CONTENT_TYPES } from '@/lib/helpers';
import { PAGE_GROQ } from '@/lib/queries';
import { Locale } from '@/i18n.config';

import { ISection } from '@/types/types';

function HomePageContainer() {
  const { lang }: { lang: Locale } = useParams();
  const { data: { sections } } = useDataQuery({
    queryKey: [CONTENT_TYPES.page],
    groq: PAGE_GROQ,
    params: { slug: 'accueil', lang },
  });

  return sections && sections.map((section: ISection) => (
    <RenderSection key={section.sectionType} section={section} />
  ));
}

export default HomePageContainer;
