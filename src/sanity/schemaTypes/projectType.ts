import { CubeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CubeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .error('Description is required.')
          .max(300)
          .error('Description must be 300 characters or less.'),
      description:
        'This will be the description displayed on the preview card, no more than 300 characters please.',
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'dateRange',
      validation: (Rule) => Rule.required().error('Project duration is required.'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (Rule) => Rule.required().error('Image is required.'),
    }),
    defineField({
      name: 'technologyOverview',
      title: "Technology's Used",
      type: 'array',
      of: [
        defineField({
          name: 'technology',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'string',
      validation: (Rule) => Rule.required().error('Link URL is required.'),
    }),
    defineField({
      name: 'personal',
      title: 'Is this a personal project?',
      type: 'boolean',
    }),
  ],
});
