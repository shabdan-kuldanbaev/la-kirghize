import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import RenderSection from '@/components/renderSection';

import { sanityFetch } from '@/sanity/lib/fetch';
import urlForImage from '@/sanity/lib/image';
import { META_GROQ, PAGE_GROQ } from '@/lib/queries';
import { ICONS } from '@/lib/metaIcons';
import { IPage, ISection } from '@/types/types';
import SlugScreen from '@/components/screens/tour';

type Props = {
  params: {
    lang: string;
    tour: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { lang, tour } = params;

  const page: IPage = await sanityFetch({
    query: META_GROQ,
    params: {
      lang,
      slug: tour,
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

async function SlugPage({ params }: Props) {
  const { lang, tour } = params;

  const data: IPage = await sanityFetch({
    query: PAGE_GROQ,
    params: {
      lang,
      slug: tour,
      isTour: true,
    },
  });

  if (!data) {
    notFound();
  }

  return <SlugScreen data={data} />;
}

export default SlugPage;
