import { defineField, defineType } from 'sanity';
import { sectionTypes } from '$/lib/constants';

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    defineField({
      name: 'entryName',
      title: 'Entry name',
      type: 'string',
    }),
    defineField({
      name: 'sectionType',
      title: 'Section type',
      type: 'string',
      options: {
        list: [
          ...sectionTypes,
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'richText',
      title: 'Rich text',
      type: 'localeRichText',
    }),
    defineField({
      title: 'Words list',
      name: 'wordsList',
      type: 'localeWordsList',
    }),
    defineField({
      title: 'Content list',
      name: 'contentList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'content' }],
        },
      ],
    }),
  ],
});
