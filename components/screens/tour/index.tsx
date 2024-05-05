import React from 'react';
import { IPage, ISection } from '@/types/types';
import RenderSection from '@/components/renderSection';

interface Props {
  data: IPage
}

function SlugScreen({ data }: Props) {
  const { sections } = data;

  console.log(data);

  return (
    <>
      {(sections || []).map((section: ISection) => (
        <RenderSection key={section._id} section={section} />
      ))}
    </>
  );
}

export default SlugScreen;
