import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    defineField({
      name: 'entryName',
      title: 'Entry name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeString',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'localeRichText',
    }),
    defineField({
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
      title: 'Words list',
      name: 'wordsList',
      type: 'localeWordsList',
    }),
    defineField({
      title: 'Image list',
      name: 'imageList',
      type: 'array',
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
