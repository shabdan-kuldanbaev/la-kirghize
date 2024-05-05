import {
  defineField, defineType,
} from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'isTour',
      title: 'Tour',
      type: 'boolean',
      initialValue: false,
      description: 'Switch on if the page is a "Tour" page',
    }),
    defineField({
      name: 'metaTitle',
      type: 'localeString',
    }),
    defineField({
      name: 'metaDescription',
      type: 'localeMetaDescription',
    }),
    defineField({
      title: 'Keywords',
      name: 'keywords',
      type: 'localeWordsList',
    }),
    defineField({
      title: 'Meta image',
      name: 'metaImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    }),
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'section' }],
        },
      ],
    }),
  ],
});
