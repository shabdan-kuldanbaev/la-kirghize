import { notFound } from 'next/navigation';

import RenderSection from '@/components/renderSection';

import { Locale } from '@/i18n.config';
import { PAGE_GROQ } from '@/lib/queries';
import { ISection } from '@/types/types';
import DataFetchFn from '@/lib/api';

export default async function Home(
  { params: { lang } }:
  { params: { lang: Locale } },
) {
  const data = await DataFetchFn(PAGE_GROQ, { slug: 'accueil', lang });

  if (!data) {
    notFound();
  }

  return data && data.sections.map((section: ISection) => (
    <RenderSection key={section._id} section={section} />
  ));
}
