import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
  note: z.string().optional(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    order: z.number().int().positive(),
    featured: z.boolean().default(true),
    timeframe: z.string(),
    context: z.string(),
    role: z.string(),
    challenge: z.string(),
    outcome: z.string(),
    metrics: z.array(metricSchema).min(1),
    capabilities: z.array(z.string()).min(1),
    evidence: z.array(z.string()).min(1),
  }),
});

const roleProfiles = defineCollection({
  loader: file("src/data/role-profiles.yaml"),
  schema: z.object({
    label: z.string(),
    eyebrow: z.string(),
    headline: z.string(),
    summary: z.string(),
    featuredCaseStudies: z.array(z.string()).length(3),
    proofPoints: z.array(metricSchema).length(3),
    focusAreas: z.array(z.string()).min(3),
  }),
});

export const collections = { caseStudies, roleProfiles };
