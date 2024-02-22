import HomePageContainer from '@/components/containers/homePageContainer';
import PrefetchProvider from '@/lib/prefetchProvider';
import { Locale } from '@/i18n.config';
import { PAGE_GROQ } from '@/lib/queries';
import { CONTENT_TYPES } from '@/lib/helpers';

export default async function Home(
  { params: { lang } }:
  { params: { lang: Locale } },
) {
  return (
    <PrefetchProvider
      queryKey={[CONTENT_TYPES.page]}
      groq={PAGE_GROQ}
      params={{ slug: 'accueil', lang }}
    >
      <HomePageContainer />
    </PrefetchProvider>
  );
}
