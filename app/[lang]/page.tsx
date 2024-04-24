import { notFound } from 'next/navigation';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { Locale } from '@/i18n.config';
import { META_GROQ, PAGE_GROQ } from '@/lib/queries';
import { IPage, ISection } from '@/types/types';
import { sanityFetch } from '@/sanity/lib/fetch';
import LoadingAnimation from './loading';
import urlForImage from '@/sanity/lib/image';
import { ICONS } from '@/lib/metaIcons';

type Props = {
  params: { lang: string }
};

const RenderSection = dynamic(() => import('@/components/renderSection'));

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { lang } = params;

  const page: any = await sanityFetch({ query: META_GROQ, params: { slug: 'accueil', lang } });

  if (!page) notFound();

  const metaImage = page.metaImage && page.metaImage.asset ? urlForImage(page.metaImage) : '';

  return {
    metadataBase: new URL('https://la-kirghize.com'),
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      images: [metaImage],
    },
    icons: ICONS,
  };
}

export default async function Home(
  { params: { lang } }:
  { params: { lang: Locale } },
) {
  const data: IPage = await sanityFetch({
    query: PAGE_GROQ,
    params: {
      slug: 'accueil',
      lang,
    },
  });

  if (!data) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingAnimation />}>
      {data && data.sections.map((section: ISection) => (
        <RenderSection key={section._id} section={section} />
      ))}
    </Suspense>
  );
}
