---
title: From manual prototype to a production AI workflow
eyebrow: Zero-to-one · Applied AI
summary: I turned a customer pain point into an AI product that rewrote resume content while preserving the original document structure.
order: 1
featured: true
timeframe: 2023-2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
challenge: Job seekers wanted tailored resumes, but existing tools still left them copying AI-generated text back into fragile documents by hand.
outcome: We launched a usable end-to-end workflow, earned revenue from the start of the public launch, and built the product foundation for continued iteration.
metrics:
  - value: ~17 sec
    label: Core processing path
    note: Reached through parallel work and fewer model calls
  - value: Days
    label: First functional prototype
    note: Built before investing in a polished interface
  - value: 2 formats
    label: DOCX and PDF support
    note: Expanded after real-user failures exposed the need
capabilities:
  - Product discovery
  - Applied AI
  - Prototyping
  - AWS serverless
  - Document processing
  - UX research
evidence:
  - Customer interviews and usability sessions
  - Processing-time telemetry
  - Production error logs and submitted-document analysis
---

## Start with the riskiest assumption

The first version had no interface. On calls with early testers, I entered their information into a prompt-driven prototype myself. That deliberately manual workflow answered the only question that mattered at the time: would tailored output solve a painful enough problem?

The answer was yes, but users still had to copy the text back into their resume. The real product opportunity was direct document modification without destroying the layout.

## Build through the constraint

I built a workflow that parsed resume content, used an LLM to rewrite it, and placed the new content back into the original document. Preserving formatting required working below the visible document layer and handling inconsistent real-world files.

When early customers surfaced failures in resumes containing tables and PDFs, I used stored submissions and production logs to isolate the patterns. We expanded format support rather than polishing the experience for only the easiest files.

## Make speed part of the experience

I parallelized independent resume sections and reduced unnecessary model calls, bringing the core processing path to roughly 17 seconds. Progress states and clearer feedback improved the perceived experience while the deeper performance work landed.

## What this demonstrates

This was product work in the fullest sense: finding the customer problem, testing it cheaply, navigating model and document constraints, building the first implementation, learning from failures, and shaping the roadmap from actual usage.
