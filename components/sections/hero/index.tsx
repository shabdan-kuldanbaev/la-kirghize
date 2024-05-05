'use client';

import React, { memo } from 'react';

import TextGenerateEffect from '@/components/ui/text-generate-effect';

import { ISection } from '@/types/types';
import styles from './styles.module.css';

type Props = Pick<ISection, 'heading' | 'contentFile' | 'description'>;

const Hero = memo(({
  heading,
  description,
  contentFile,
}: Props): React.JSX.Element => (
  <section className="relative w-full h-[100vh] bg-cover bg-no-repeat bg-center snap-start">
    {contentFile && (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      className={styles.video}
      src={contentFile}
    />
    )}
    <div className={styles.overlay}>
      <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center gap-2 px-4 h-full">
        {heading && (
          <h1 className="max-w-xl text-white font-bold text-3xl text-center md:text-5xl">
            <TextGenerateEffect words={heading} />
          </h1>
        )}
        {description && (
          <p className="max-w-xl text-gray-95 text-lg text-center">
            <TextGenerateEffect words={description} />
          </p>
        )}
      </div>
    </div>
  </section>
));

export default Hero;
