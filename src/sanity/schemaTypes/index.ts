import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { aboutType } from './aboutType';
import { blogType } from './blogType';
import { projectType } from './projectType';
import { dateRange } from './dateRangeType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, aboutType, blogType, projectType, dateRange],
};
