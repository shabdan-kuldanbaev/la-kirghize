import { defineField, defineType } from 'sanity';
import { SECTION_TYPES } from '$/lib/constants';

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Entry name',
      type: 'string',
    }),
    defineField({
      name: 'sectionType',
      title: 'Section type',
      type: 'string',
      options: {
        list: Object.values(SECTION_TYPES),
        layout: 'radio',
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
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
      name: 'wordsList',
      title: 'Words list',
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
    defineField({
      title: 'Image list',
      name: 'imageList',
      type: 'array',
      options: {
        modal: { type: 'dialog', width: 'auto' },
      },
      of: [
        {
          title: 'Image',
          name: 'image',
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
        },
      ],
    }),
    defineField({
      title: 'Content file',
      name: 'contentFile',
      type: 'file',
    }),
  ],
});
