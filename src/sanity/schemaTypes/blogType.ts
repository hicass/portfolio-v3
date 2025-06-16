import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'mainImage',
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
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          `/blog/${input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)}`,
      },
      description:
        'Please ensure there are no special characters, and the slugs always start with /blog/...',
      validation: (Rule) => Rule.required().error('Slug is required.'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author is required.'),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required().error('Published date is required.'),
    }),
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .error('Preview is required.')
          .max(300)
          .error('Preview must be 300 characters or less.'),
      description:
        'This will be the description displayed on the preview card, no more than 300 characters please.',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Body is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
