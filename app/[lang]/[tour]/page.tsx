import React from 'react';
import { notFound } from 'next/navigation';
import DataFetchFn from '@/lib/api';
import { PAGE_GROQ } from '@/lib/queries';

async function TourPage({
  params: {
    tour,
    lang,
  },
}: {
  params: {
    tour: string,
    lang: string
  }
}) {
  const data = await DataFetchFn(PAGE_GROQ, { slug: tour, lang });

  if (!data) {
    notFound();
  }

  return (
    <div>
      hello
    </div>
  );
}

export default TourPage;
