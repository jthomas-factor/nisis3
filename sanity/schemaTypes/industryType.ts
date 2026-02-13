import { defineField, defineType } from 'sanity';

export const industryType = defineType({
  name: 'industry',
  type: 'document',
  title: 'Industry',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
  ],
});
