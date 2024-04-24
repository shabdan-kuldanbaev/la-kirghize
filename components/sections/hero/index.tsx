'use client';

import React from 'react';
import TextGenerateEffect from '@/components/ui/text-generate-effect';
import styles from './styles.module.css';

interface Props {
  title: string,
  description?: string,
  contentFile?: string,
}

function Hero({
  title,
  description,
  contentFile,
}: Props) {
  return (
    <section className="relative w-full h-[100vh] bg-cover bg-no-repeat bg-center snap-start">
      {contentFile && (
        <video
          muted
          autoPlay
          loop
          playsInline
          controls={false}
          src={contentFile}
          className={styles.video}
        />
      )}
      <div className={styles.overlay}>
        <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center gap-2 px-4 h-full">
          {title && (
          <h1 className="max-w-xl text-white font-bold text-3xl text-center md:text-5xl">
            <TextGenerateEffect words={title} />
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
  );
}

export default Hero;
