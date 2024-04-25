import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import LoadingAnimation from '@/components/ui/loading-animation';
import RenderSection from '@/components/renderSection';
import { META_GROQ, PAGE_GROQ } from '@/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import { IPage, ISection } from '@/types/types';
import urlForImage from '@/sanity/lib/image';
import { ICONS } from '@/lib/metaIcons';

type Props = {
  params: {
    lang: string,
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { lang } = params;

  const page: IPage = await sanityFetch({
    query: META_GROQ,
    params: {
      lang,
      slug: 'accueil',
      isTour: false,
    },
  });

  if (!page) notFound();

  const metaImage = page.metaImage && urlForImage(page.metaImage);

  return {
    metadataBase: new URL(`https://la-kirghize.com/${lang}/tours`),
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      images: [metaImage],
    },
    icons: ICONS,
  };
}

async function ToursPage({
  params: {
    lang,
  },
}: Props) {
  const data: IPage = await sanityFetch({
    query: PAGE_GROQ,
    params: {
      lang,
      slug: 'accueil',
      isTour: false,
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

export default ToursPage;
