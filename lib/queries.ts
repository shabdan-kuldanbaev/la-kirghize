import { groq } from 'next-sanity';

export const PAGE_GROQ = groq`*[_type == 'page' && slug.current == $slug][0] {
  title,
  metaDescription,
  'slug': slug.current,
  pageContent[]->{
    ...,
    body[] {
      ...
    }
  }
}`;

export const META_GROQ = groq`*[_type == 'page' && slug.current == $slug][0] {
  'slug': slug.current,
  metaTitle,
  metaDescription,
  metaImage,
  keywords
}`;
