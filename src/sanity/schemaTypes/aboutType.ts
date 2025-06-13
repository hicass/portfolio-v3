import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Bio is required.'),
    }),
  ],
});
