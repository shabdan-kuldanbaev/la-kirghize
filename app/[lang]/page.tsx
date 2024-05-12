import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { sanityFetch } from '@/sanity/lib/fetch';
import urlForImage from '@/sanity/lib/image';
import { META_GROQ, PAGE_GROQ } from '@/lib/queries';
import { Locale } from '@/i18n.config';
import { ICONS } from '@/lib/metaIcons';
import { IPage, ISection } from '@/types/types';
import RenderSection from '@/components/sections/renderSection';

type Props = {
  params: { lang: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { lang } = params;

  const page: any = await sanityFetch({
    query: META_GROQ,
    params: {
      lang,
      slug: 'accueil',
      isTour: false,
    },
  });

  if (!page) {
    notFound();
  }

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
      lang,
      slug: 'accueil',
      isTour: false,
    },
  });

  if (!data) {
    notFound();
  }

  return data && data.sections.map((section: ISection) => (
    <RenderSection key={section._id} {...section} />
  ));
}
