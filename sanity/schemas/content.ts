import { defineField, defineType } from 'sanity';
import ICONS from '@/lib/icons';

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Entry name',
      type: 'string',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: Object
          .keys(ICONS)
          .map((key) => ({
            title: key,
            value: key,
          })),
      },
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
    defineField({
      title: 'Mapbox position',
      name: 'position',
      type: 'object',
      fields: [
        { name: 'zoom', type: 'number', title: 'Zoom' },
        {
          name: 'center',
          type: 'array',
          title: 'Center',
          validation: (rule) => rule.min(2).max(2),
          of: [
            { name: 'coordinates', type: 'number', title: 'Coordinates' },
          ],
        },
      ],
    }),
  ],
});
