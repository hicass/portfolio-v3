import { defineType, defineField } from 'sanity';

export const dateRange = defineType({
  name: 'dateRange',
  title: 'Date Range',
  type: 'object',
  fields: [
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
      description: 'Pick the first day of the month to represent just month/year.',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
      description: 'Pick the first day of the month to represent just month/year.',
    }),
  ],
  preview: {
    select: {
      start: 'startDate',
      end: 'endDate',
    },
    prepare(selection: { start?: string; end?: string }) {
      const format = (dateString?: string): string => {
        if (!dateString) return '–';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
        }).format(date);
      };

      return {
        title: `${format(selection.start)} → ${format(selection.end)}`,
      };
    },
  },
});

