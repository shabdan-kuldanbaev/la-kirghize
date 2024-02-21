'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import SectionSelector from '@/components/sectionSelector';
import useDataQuery from '@/lib/hooks/useDataQuery';
import { CONTENT_TYPES } from '@/lib/helpers';
import { PAGE_GROQ } from '@/lib/queries';
import { Locale } from '@/i18n.config';
import { ISection } from '@/types/types';

const Hero = dynamic(() => import('@/components/sections/hero'));

function HomePageContainer() {
  const { lang }: { lang: Locale } = useParams();
  const { data } = useDataQuery({
    queryKey: CONTENT_TYPES.page,
    groq: PAGE_GROQ,
    params: { slug: 'accueil', lang },
  });

  return data && (
    <main className="flex-auto">
      <Hero
        title={data.metaTitle}
        description={data.metaDescription}
        contentFile={data.contentFile}
      />
      {data?.sections && data.sections.map((section: ISection) => (
        <SectionSelector section={section} />
      ))}
    </main>
  );
}

export default HomePageContainer;
