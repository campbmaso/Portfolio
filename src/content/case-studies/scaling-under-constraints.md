---
title: Finding a PDF failure hidden by the overall error rate
eyebrow: Product reliability · Prioritization
summary: I segmented stalled processing by document format to identify a PDF-specific failure and turn customer reports into a clear product priority.
order: 5
featured: false
timeframe: 2023–2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
scope: Customer-report investigation, transaction analysis, and reliability prioritization
status: PDF processing bug fixed
challenge: Some customers' resumes remained stuck processing, but the overall rate concealed the concentration of failures among PDF users.
outcome: The investigation pointed to the third-party PDF conversion step. We launched an internal parsing effort and fixed the bug.
metrics: []
capabilities:
  - Product analytics
  - Root-cause analysis
  - Reliability
  - Prioritization
evidence:
  - Customer reports of stalled processing
  - Transaction and processing-status analysis
  - Document investigation and the resulting PDF fix
---

## Start with the user's failure

Customers reported resumes that remained in a processing state. For someone trying to submit an application, the failed task was concrete: they could not get a finished document back.

I queried transaction records and examined processing that continued beyond the expected window. The goal was to understand who was affected before deciding where to spend limited development time.

## Segment before prioritizing

My analysis suggested that the issue affected approximately 10% of all users and about 40% of PDF users. These were diagnostic estimates from the investigation, not a controlled experiment or a post-fix comparison. The analysis used transaction records to investigate an affected user group; the figures should not be read as counts of independent experimental observations.

The format distinction made a specific investment easier to justify. A problem affecting a minority overall was preventing a much larger share of the PDF group from completing the core task.

## Fix the weak step in the workflow

The investigation pointed to third-party PDF conversion. We launched an internal parsing effort and fixed the bug, prioritizing compatibility for users whose documents were failing.

That decision connected the technical cause to the product task: returning a usable tailored document mattered more than improving text generation for files that already worked.

## Outcome and measurement limits

The processing bug was fixed. A verified post-fix error rate is not available for this account, so the diagnostic estimates should not be read as a measured improvement after the fix.

Separate operational work included staging and production environments, deployment automation, and usage monitoring. Those supported ongoing delivery but were not the evidence used to identify this PDF-specific problem.
