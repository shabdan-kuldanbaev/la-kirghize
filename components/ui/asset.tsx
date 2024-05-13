import Image from 'next/image';

import type { Image as ImageType } from 'sanity';
import urlForImage from '@/sanity/lib/image';
import { cn } from '@/lib/utils';

interface IImage extends ImageType {
  alt?: string;
}

interface Props {
  image: IImage;
  className?: string;
}

function Asset({
  image,
  className,
}: Props) {
  const imageSrc = image
  && image.asset
  && urlForImage(image);

  return imageSrc && (
    <div className={cn('w-full h-full relative overflow-hidden', className)}>
      <Image
        fill
        src={imageSrc}
        alt={image?.alt || ''}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default Asset;
