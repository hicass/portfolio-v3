import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { aboutType } from './aboutType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, aboutType],
};
