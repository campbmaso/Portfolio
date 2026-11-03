---
title: From career exploration to a more immediate job seeker need
eyebrow: Discovery · Product building
summary: Customer interviews shifted our focus from long-term career fulfillment to a more immediate need—tailoring resumes for job applications.
order: 1
featured: true
timeframe: 2023–2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
challenge: Job seekers valued career exploration, but told us they needed more immediate help landing interviews and managing a time-consuming application process.
outcome: My cofounder and I shifted our focus to resume tailoring, tested the concept with users, and launched a workflow that rewrote content while preserving document formatting.
metrics:
  - value: Days
    label: First functional prototype
    note: Text-based version built for early feedback
  - value: ~17 sec
    label: Core processing path
    note: Reached through parallel processing and optimization
  - value: DOCX + PDF
    label: Formats supported
    note: PDF support added after customer feedback
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
