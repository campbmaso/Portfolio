---
title: Finding the constraint before scaling the system
eyebrow: Reliability · Product systems
summary: I used production evidence to isolate hidden failure modes, then built the operating systems needed to ship faster without gambling with customer trust.
order: 3
featured: true
timeframe: 2023-2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
challenge: Growth exposed document failures, deployment risk, and abusive usage that were invisible in top-line signup data.
outcome: We fixed a high-impact PDF failure, introduced staging and automated delivery, improved observability, and added abuse controls tied to real usage patterns.
metrics:
  - value: 40%
    label: PDF users affected
    note: Isolated through processing-status analysis
  - value: 10%
    label: All users affected
    note: The aggregate rate had hidden a format-specific problem
  - value: 2 environments
    label: Staging and production
    note: Separated before the team accelerated releases
capabilities:
  - Product analytics
  - Reliability
  - Root-cause analysis
  - CI/CD
  - Abuse prevention
  - Operational scaling
evidence:
  - Processing-status and failure analysis
  - CloudWatch alarms and error queries
  - Retention and usage-distribution notebooks
---

## Segment before choosing the fix

Users reported stalled processing, but the overall error rate did not explain the urgency. I queried transaction records and isolated jobs that remained in a processing state beyond the expected window.

The issue affected about 10% of all users and roughly 40% of PDF users. That segmentation turned a vague reliability complaint into a clear product priority and traced the failure to the third-party conversion step.

We replaced the weak link with an internal parsing approach and fixed the experience for the affected cohort.

## Build a safer path to production

As usage and release frequency grew, manual updates became a source of risk. I separated staging and production across the serverless stack, including isolated data and storage, and introduced automated delivery through GitHub Actions with a deliberate promotion step.

CloudWatch alarms and targeted queries shortened the time between a failure and the team's awareness of it.

## Let economics reveal abuse

Retention analysis also surfaced an account with anomalous usage. I joined submission and user data, visualized seven- and thirty-day behavior, and brought the pattern into weekly reviews. The investigation led to concurrent-login controls and automated flags for suspicious activity, protecting processing costs without adding friction for normal users.
