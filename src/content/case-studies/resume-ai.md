---
title: Pivoting to resume tailoring that preserves the document
eyebrow: Discovery · Product building
summary: Customer interviews shifted our focus from long-term career fulfillment to a more immediate need—tailoring resumes for job applications.
order: 1
featured: true
status: Resume workflow launched October 2023
scope: Customer discovery, prototypes, document workflow, and technical execution with my cofounder
timeframe: 2023–2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
challenge: Job seekers valued career exploration, but told us they needed more immediate help landing interviews and managing a time-consuming application process.
outcome: My cofounder and I shifted our focus to resume tailoring, tested the concept with users, and launched a workflow that rewrote content while preserving document formatting.
metrics:
  - value: ~17 sec
    label: Core processing path
    note: Approximate core processing path; not total time for every document
capabilities:
  - Customer discovery
  - Product strategy
  - Prototyping
  - Applied AI
  - Workflow design
  - Usability testing
evidence:
  - Customer interviews and usability sessions
  - Product prototypes and customer feedback
  - Production error logs and document analysis
---

## Follow the more urgent problem

Our first product helped people explore more fulfilling careers. I built the initial prototype and entered information by hand during calls with early testers before building an interface. People signed up after launch, but few returned.

My cofounder and I interviewed job seekers to understand why. They saw value in longer-term career exploration, but their immediate concern was landing interviews. Tailoring applications was repetitive and time-consuming, so we chose to focus on that part of the job search.

## Test the value, then improve the workflow

I built a basic prototype in a few days that used an AI model to rewrite copied resume text. Testers responded positively, but they still had to move the text back into their documents. We chose to pursue direct document modification so users could keep their original layout.

I built the document workflow, including handling the underlying document structure to preserve formatting. We tested the experience with both returning and new users and iterated on the interface before launching in October 2023. I also used parallel processing and other optimizations to bring the core processing path to approximately 17 seconds.

## Choose broader access over polishing one format

After launch, customers requested PDF support and reported errors in resumes containing tables. The team had a choice: continue improving the text changes for existing DOCX users, or expand support to files that were currently failing or excluded. We prioritized PDF and table support, using customer reports and document investigation to guide the work.

The result was a broader workflow grounded in the files people actually brought to the product. The experience taught me to treat the entire task—from the user's starting document to the finished resume—as the product.


## Reduce effort around the core task

After the core workflow, I led development of a published browser extension that brought job-posting information into the application flow. It addressed the effort of switching between a job posting and the resume tool. Saved-resume reuse was another later addition to the workflow.

These changes addressed repeated user effort around the generation step. They were separate iterations, not features all present in the first launch.

## Outcome and limits

We launched the document workflow in October 2023 and expanded it based on customer reports and usability feedback. The approximately 17-second figure describes the optimized core processing path. It is not a claim about every document or the complete task from upload to download.

The processing figure describes system speed. It does not establish an improvement in interview outcomes. The later monetization work is covered in a separate project.
