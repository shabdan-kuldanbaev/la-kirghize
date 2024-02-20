'use client';

import clsx from 'clsx';
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
    <div className="relative z-[1] h-[100vh]">
      <div className="max-w-xl mx-auto px-4 grid place-content-center gap-2 h-full">
        {title && (
        <h1 className=" text-gray-95 font-bold text-3xl text-center sm:text-4xl">
          <TextGenerateEffect words={title} />
        </h1>
        )}
        {description && (
        <p className="text-gray-95 text-lg text-center">
          <TextGenerateEffect words={description} />
        </p>
        )}
      </div>
      {contentFile && (
        <video
          muted
          autoPlay
          loop
          playsInline
          controls={false}
          className={clsx(
            'absolute top-0 z-[-1] object-cover object-center w-full h-full',
            styles.video,
          )}
        >
          <source src={contentFile} />
        </video>
      )}
    </div>
  );
}

export default Hero;
