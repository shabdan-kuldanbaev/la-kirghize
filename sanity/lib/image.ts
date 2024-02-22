import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

const urlForImage = (source: Image) => imageBuilder?.image(source).auto('format').fit('max').format('webp')
  .url();

export default urlForImage;
