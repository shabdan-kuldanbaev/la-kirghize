// import HomePageContainer from '@/components/containers/homePageContainer';
import RenderSection from '@/components/renderSection';
// import PrefetchProvider from '@/lib/prefetchProvider';
import { Locale } from '@/i18n.config';
import QuerySanityFn from '@/lib/api';
import { PAGE_GROQ } from '@/lib/queries';
import { ISection } from '@/types/types';
// import { PAGE_GROQ } from '@/lib/queries';
// import { CONTENT_TYPES } from '@/lib/helpers';

export default async function Home(
  { params: { lang } }:
  { params: { lang: Locale } },
) {
  const { sections } = await QuerySanityFn(PAGE_GROQ, { slug: 'accueil', lang });

  return sections && sections.map((section: ISection) => (
    <RenderSection key={section.sectionType} section={section} />
  ));
  // return (
  //   <PrefetchProvider
  //     queryKey={[CONTENT_TYPES.page]}
  //     groq={PAGE_GROQ}
  //     params={{ slug: 'accueil', lang }}
  //   >
  //     <HomePageContainer />
  //   </PrefetchProvider>
  // );
}
