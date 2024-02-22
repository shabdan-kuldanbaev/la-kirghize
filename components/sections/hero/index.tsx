'use client';

import clsx from 'clsx';
import TextGenerateEffect from '@/components/ui/text-generate-effect';
import styles from './styles.module.css';
import urlForImage from '@/sanity/lib/image';

interface Props {
  title: string,
  description?: string,
  contentFile?: string,
  image?: any
}

function Hero({
  title,
  description,
  contentFile,
  image,
}: Props) {
  return (
    <div
      className="relative h-[100vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('${image && urlForImage(image)}')` }}
    >
      {contentFile && (
        <video
          muted
          autoPlay
          loop
          playsInline
          controls={false}
          className={clsx(
            'absolute top-0 object-cover object-center w-full h-full',
            styles.video,
          )}
        >
          <source src={contentFile} />
        </video>
      )}
      <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center gap-2 px-4 h-full">
        {title && (
        <h1 className="max-w-xl text-gray-95 font-bold text-3xl text-center sm:text-4xl">
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
  );
}

export default Hero;
