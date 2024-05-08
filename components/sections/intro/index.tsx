import React from 'react';
import { ISection } from '@/types/types';

type Props = Pick<ISection, '_id' | 'contentList' | 'heading' | 'imageList'>;

function Intro(props: Props) {
  console.log(props);

  return (
    <div />
  );
}

export default Intro;
