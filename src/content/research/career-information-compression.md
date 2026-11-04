---
title: "Career compression & rate–distortion"
summary: "What survives when a detailed work history becomes a short résumé—and does the target job change what should be preserved?"
order: 2
question: "What survives when a detailed work history becomes a short résumé—and does the target job change what should be preserved?"
status: "Independent research · Pilot studies complete"
---

## The question

A résumé compresses a much richer history into a limited amount of text. I’m studying the tradeoff between that space budget and the preservation of factual, contextually relevant career information.

## The approach

I built an evaluation pipeline that extracts contextual claims with source evidence, then measures factual support and coverage. The studies record token budgets and model-based code length, using distortion defined as one minus graded factual F1. Job-conditioned evaluation asks which information matters for a particular role.

## The current result

A single-person, single-job pilot compared 24 generated summaries across four token budgets, with three draws per condition and budget. Job-conditioned summaries had higher mean job-relevant F1 at all four budgets. These are observed compression tradeoffs for a fixed model and case, rather than an optimal rate–distortion frontier or a test of hiring outcomes.

## Methods

Claim-level evaluation · Token budgets · Job conditioning · Reproducible analyses
