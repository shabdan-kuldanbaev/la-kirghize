import { type SchemaTypeDefinition } from 'sanity';

import page from '$/schemas/page';
import richText from '@/sanity/schemas/richText';
import section from '@/sanity/schemas/section';
import content from '@/sanity/schemas/content';
import localizedTypes from '$/schemas/localizedTypes';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    richText,
    page,
    section,
    content,
    ...localizedTypes,
  ],
};

export default schema;
