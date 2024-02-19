import React from 'react';
import HomePageContainer from '@/components/containers/homePageContainer';
import PrefetchProvider from '@/lib/prefetchProvider';

export default async function Home() {
  return (
    <PrefetchProvider params={{ slug: 'accueil' }}>
      <HomePageContainer />
    </PrefetchProvider>
  );
}
