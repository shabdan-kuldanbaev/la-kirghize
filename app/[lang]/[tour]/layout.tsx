import React from 'react';
import { Metadata } from 'next';
import DataFetchFn from '@/lib/api';
import { ICONS } from '@/lib/metaIcons';
import { META_GROQ } from '@/lib/queries';
import urlForImage from '@/sanity/lib/image';

type Props = {
  params: {
    lang: string,
    tour: string
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { lang, tour } = params;
  const page = await DataFetchFn(META_GROQ, { slug: tour, lang, isTour: true });

  if (!page) return null;

  const metaImage = page.metaImage && urlForImage(page.metaImage);

  return {
    metadataBase: new URL(`https://la-kirghize.com/${lang}/${tour}`),
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      images: [metaImage],
    },
    icons: ICONS,
  };
}

function TourLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return children;
}

export default TourLayout;
