---
title: Reversing a trial upsell after the downstream results
eyebrow: Experimentation · Product judgment
summary: A trial offer increased initial signups. Following the cohort for three months changed our assessment, and we reverted the flow.
order: 4
featured: false
timeframe: 2023–2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
scope: Funnel implementation, instrumentation, cohort analysis, and the rollback decision
status: Experiment evaluated and reverted
challenge: More trial starts could look like a growth win without creating enough downstream customer value.
outcome: We reverted the upsell flow when customer lifetime value did not justify the initial increase in trials.
metrics:
  - value: 3 months
    label: Downstream follow-up
    note: Evaluation continued beyond the initial two-week readout
capabilities:
  - Experiment design
  - Funnel analysis
  - Monetization
  - Product judgment
evidence:
  - Tagged actions on the trial offer page
  - Initial trial signup observations
  - Downstream cohort and lifetime-value analysis
---

## The hypothesis

We wanted to increase free-trial starts at JoyJobs. I implemented an offer page between signup and product use, making the trial offer a distinct step in the journey. The hypothesis was that explicitly presenting the offer would encourage more people to start a trial.

We tagged the available actions on the page and tracked trial starts. During the first two weeks, signups increased. On that immediate measure, the change appeared promising.

## The decision to keep measuring

A trial start was an intermediate behavior, not the complete business result. We kept following the cohort to understand whether the extra trial activity led to enough customer value.

After three months, downstream customer lifetime value did not justify the signup lift. We reverted to the original flow. The alternative was to keep a change that improved the first funnel measure despite the weaker economic case.

## What the result supports

The outcome was the rollback decision, based on a longer observation window. An increase in trial starts was insufficient evidence to keep a change when the downstream economics did not support it.

## A separate pricing decision

In a different initiative, customer interviews and competitive analysis led us from fixed-usage packages to a subscription with unlimited access. That pricing change and the trial-offer experiment answered different questions and should not be read as one combined experiment. I am not attributing a quantified revenue or lifetime-value result to the pricing change here.
