import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
  ],
});
