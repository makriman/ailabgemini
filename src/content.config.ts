import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const teams = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teams' }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    displayName: z.string(),
    cohort: z.string(),
    cohortLabel: z.string(),
    category: z.string(),
    status: z.string(),
    productUrl: z.string().url().optional(),
    tagline: z.string(),
    summary: z.string(),
    members: z.array(
      z.object({
        name: z.string(),
        email: z.string().email(),
        role: z.string(),
        showEmailPublicly: z.boolean().default(false),
      })
    ),
    contactPolicy: z.string().optional(),
    visibilityNotes: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    screenshots: z.array(z.string()).default([]),
  }),
});

export const collections = { teams };
