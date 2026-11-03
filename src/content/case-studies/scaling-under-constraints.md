---
title: Finding the failures hidden by aggregate data
eyebrow: Product reliability
summary: I investigated customer reports and usage patterns to prioritize reliability fixes and protect the product as usage grew.
order: 3
featured: true
timeframe: 2023–2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
challenge: Users reported processing failures, but the team needed to understand who was affected and where to invest limited development time.
outcome: We fixed a PDF processing bug, established separate staging and production environments, and introduced controls after unusual usage surfaced in retention analysis.
metrics:
  - value: 40%
    label: PDF users affected
    note: Identified in processing-status analysis
  - value: 10%
    label: All users affected
    note: The overall rate obscured the format-specific issue
  - value: 2 environments
    label: Staging and production
    note: Separated to support safer updates
capabilities:
  - Product analytics
  - Root-cause analysis
  - Reliability
  - Prioritization
  - Operational scaling
evidence:
  - Customer bug reports
  - Processing-status analysis
  - Retention and usage-distribution reports
---

## Find out who is affected

Customers reported that some resumes were stuck processing. I queried transaction records and examined jobs still processing beyond the expected window. The issue appeared to affect approximately 10% of all users, but about 40% of PDF users in the analysis.

That distinction made the problem easier to prioritize. The investigation pointed to the third-party PDF conversion step. We launched an internal parsing project and fixed the bug, addressing a failure that the aggregate rate alone did not fully convey.

## Make frequent changes safer

As releases became more frequent, we needed a way to test changes before they reached customers. I built separate staging and production environments and automated deployment to staging, with a deliberate promotion step into production. This gave the team a clearer path for checking changes before release.

## Look at usage as well as retention

I built a report from joined product and user data to understand seven- and thirty-day retention and engagement. In a weekly team review, an unusual usage pattern led to further investigation. We disabled concurrent logins and added automated detection for suspicious activity, reducing processing-cost leakage.

Each decision started with a different signal: a customer report, a release risk, or an unexpected pattern in usage. Together, they helped us choose work that made the product more reliable as it grew.
