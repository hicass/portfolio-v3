import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { aboutType } from './aboutType';
import { blogType } from './blogType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, aboutType, blogType],
};
