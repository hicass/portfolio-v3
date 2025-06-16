import { defineField, defineType } from 'sanity';
import {FaceHappyIcon} from '@sanity/icons'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: FaceHappyIcon,
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
