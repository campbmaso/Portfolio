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
    outcomeLabel: z.string().default("Result"),
    status: z.string().optional(),
    scope: z.string().optional(),
    metricHeading: z.string().default("Project facts"),
    metrics: z.array(metricSchema).default([]),
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
    featuredCaseStudies: z.array(z.string()).min(3),
    chapters: z.array(z.object({
      id: z.string(),
      skill: z.string(),
      heading: z.string(),
      narrative: z.string(),
      evidence: z.string(),
    })).optional(),
    proofPoints: z.array(metricSchema).length(3),
    focusAreas: z.array(z.string()).min(3),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int().positive(),
    question: z.string(),
    status: z.string(),
    outcome: z.string().optional(),
    outcomeLabel: z.string().default("Research focus"),
    metrics: z.array(metricSchema).default([]),
  }),
});

export const collections = { caseStudies, roleProfiles, research };
