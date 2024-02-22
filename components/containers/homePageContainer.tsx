'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import useDataQuery from '@/lib/hooks/useDataQuery';
import { CONTENT_TYPES } from '@/lib/helpers';
import { PAGE_GROQ } from '@/lib/queries';
import { Locale } from '@/i18n.config';
import { ISection } from '@/types/types';

const SectionSelector = dynamic(() => import('@/components/sectionSelector'));

function HomePageContainer() {
  const { lang }: { lang: Locale } = useParams();
  const { data } = useDataQuery({
    queryKey: CONTENT_TYPES.page,
    groq: PAGE_GROQ,
    params: { slug: 'accueil', lang },
  });

  return data && (
    <main className="flex-auto">
      {data?.sections && data.sections.map((section: ISection) => (
        <SectionSelector key={section.sectionType} section={section} />
      ))}
    </main>
  );
}

export default HomePageContainer;
