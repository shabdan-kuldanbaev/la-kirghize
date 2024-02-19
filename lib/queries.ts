import { groq } from 'next-sanity';

export const PAGE_GROQ = groq`*[_type == 'page' && slug.current == $slug][0] {
  title,
  'metaTitle': coalesce(metaTitle[$lang], metaTitle.fr, 'Missing translation'),
  'metaDescription': coalesce(metaDescription[$lang], metaDescription.fr, 'Missing translation'),
  'slug': slug.current,
  sections[]-> {
    ...,
    'title': coalesce(title[$lang], title.fr, 'Missing translation'),
    'description': coalesce(description[$lang], description.fr, 'Missing translation'),
    'richText': coalesce(richText[$lang], richText.fr, 'Missing translation'),
    'wordsList': coalesce(wordsList[$lang], wordsList.fr, 'Missing translation'),
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
  'metaTitle': coalesce(metaTitle[$lang], metaTitle.fr, 'Missing translation'),
  'metaDescription': coalesce(metaDescription[$lang], metaDescription.fr, 'Missing translation'),
  'keywords': coalesce(keywords[$lang], keywords.fr, 'Missing translation'),
  metaImage,
}`;
