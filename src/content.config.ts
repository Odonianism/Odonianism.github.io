import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './source/_posts' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    photos: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './source' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string().optional(),
  }),
});

export const collections = { posts, pages };
