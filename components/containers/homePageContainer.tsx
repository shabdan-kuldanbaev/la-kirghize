'use client';

import usePageQuery from '@/lib/hooks/usePageQuery';

function HomePageContainer() {
  const { data } = usePageQuery({ slug: 'accueil' });

  return (
    <div style={{ height: '200vh' }}>
      {data?.title}
    </div>
  );
}

export default HomePageContainer;
