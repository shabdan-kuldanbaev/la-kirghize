import { groq } from 'next-sanity';

export const PAGE_GROQ = groq`*[_type == 'page' && slug.current == $slug][0] {
  title,
  metaImage,
  'metaTitle': coalesce(metaTitle[$lang], metaTitle.fr, null),
  'metaDescription': coalesce(metaDescription[$lang], metaDescription.fr, null),
  'slug': slug.current,
  'contentFile': contentFile.asset->url,
  sections[]-> {
    ...,
    'contentFile': contentFile.asset->url,
    'title': coalesce(title[$lang], title.fr, null),
    'description': coalesce(description[$lang], description.fr, null),
    'richText': coalesce(richText[$lang], richText.fr, null),
    'wordsList': coalesce(wordsList[$lang], wordsList.fr, null),
    contentList[]-> {
      ...,
      contentList[]-> {
        ...,
        contentList[]-> {
          ...,
          contentList[]-> {
            ...,
            contentList[]->
          }
        }
      }
    }
  }
}`;

export const META_GROQ = groq`*[_type == 'page' && slug.current == $slug][0] {
  'slug': slug.current,
  'metaTitle': coalesce(metaTitle[$lang], metaTitle.fr, null),
  'metaDescription': coalesce(metaDescription[$lang], metaDescription.fr, null),
  'keywords': coalesce(keywords[$lang], keywords.fr, null),
  metaImage,
}`;
