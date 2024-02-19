import { defineType } from 'sanity';
import { supportedLanguages } from '../lib/constants';

// eslint-disable-next-line import/prefer-default-export

export default [
  defineType({
    title: 'Localized string',
    name: 'localeString',
    type: 'object',
    options: { collapsible: true },
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: 'string',
    })),
  }),
  defineType({
    title: 'Localized text',
    name: 'localeText',
    type: 'object',
    options: { collapsible: true },
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: 'text',
      rows: 4,
    })),
  }),
  defineType({
    title: 'Localized meta description',
    name: 'localeMetaDescription',
    type: 'object',
    options: { collapsible: true },
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: 'text',
      validation: (rule: any) => rule.min(70).max(155),
      rows: 4,
    })),
  }),
  defineType({
    title: 'Localized words list',
    name: 'localeWordsList',
    type: 'object',
    options: { collapsible: true },
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: 'array',
      of: [
        { type: 'string' },
      ],
      options: {
        layout: 'tags',
      },
    })),
  }),
  defineType({
    title: 'Localized rich text',
    name: 'localeRichText',
    type: 'object',
    options: { collapsible: true },
    fields: supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: 'richText',
    })),
  }),
];
