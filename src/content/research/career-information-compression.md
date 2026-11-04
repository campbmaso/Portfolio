---
title: "Career compression & rate–distortion"
order: 2
category: Information & compression
status: Completed case study and job-conditioned pilot
summary: I built a source-linked evaluation pipeline to measure factual preservation under compression, then tested how a target job changed what short summaries retained.
period: Independent research · 2026
context: Self-directed information-preservation research
role: Study design, evaluation pipeline, and analysis
question: Under a fixed text budget, which career information survives, and does conditioning on the target job preserve more relevant evidence?
takeaway: Job-conditioned summaries had higher mean job-relevant factual F1 at all four budgets in one fixed case. The study measures source-relative preservation, not hiring outcomes or an optimal compression frontier.
methods:
  - Contextual claim extraction
  - Source-linked factual evaluation
  - Token-budget controls
  - Model-based code length
  - Exploratory permutation analysis
scope:
  - value: "377"
    label: Frozen source claims
    note: Organized into contextual career stories
  - value: "24"
    label: Generated summaries
    note: Two conditions × four budgets × three draws
  - value: "1 person · 1 job"
    label: Pilot context
    note: Repeated generations within one fixed case
---

## A résumé as a compression problem

A career history contains more information than a short résumé can hold. Reducing its length requires choices about which facts, contexts, and relationships to preserve. I wanted to make that tradeoff measurable, rather than equate a shorter or more polished document with a better representation.

This project contains two completed pieces: a case study of an existing résumé and a pilot comparing newly generated summaries with and without a target job. Both use the same frozen career source, with explicit evaluation rules and saved outputs.

## Building a source-linked evaluator

I developed a pipeline that independently extracted the source history and each summary into contextual claims. Situation, task, action, and result records organized the claims, while literal quotations and locations anchored them to their original documents. Missing information stayed missing rather than being completed by inference.

The current source inventory contains four roles, 51 stories, three background records, and 377 scored claims. Each comparison evaluates two directions:

- **Factual precision:** how well each assertion in the summary is supported by the supplied source.
- **Coverage:** how much of the reference information is represented in the summary.

Full support or coverage receives 1, partial receives 0.5, and absent or contradicted information receives 0. Factual F1 combines precision and recall. The study defines distortion as 1 minus F1.

These are semantic, source-relative judgments. A claim unsupported by the supplied career history is not automatically false in the world. The inventories were extracted independently, so the calculation should not be interpreted as a single binary confusion matrix.

## Case study: an existing résumé

The first completed case compared an existing human-written résumé with the full career bank. The original prepared documents contained 982 résumé tokens and 8,630 source tokens under the fixed rate-model tokenizer: the résumé used approximately 11.4% as many tokens.

| Measurement | Current contextual-claim protocol |
| --- | ---: |
| Graded factual precision | 0.592 |
| Equal-weighted recall | 0.103 |
| Factual F1 | 0.176 |
| Distortion, defined as 1 − F1 | 0.824 |

The low recall describes information omitted relative to this much longer source. It does not independently establish whether the résumé succeeded at its hiring purpose. The current protocol also differs from an earlier version in extraction, context handling, and claim granularity. A different F1 across protocol versions is a measurement change, not evidence that the unchanged résumé improved or worsened.

## Pilot: add the target job

The next experiment asked whether a job description changes which useful information is preserved under the same assigned text limits.

I used one career bank and one saved product-manager job description. Before generating summaries, the evaluation pipeline decomposed that job into 38 requirements and froze a relevance map over the 377 source claims. It identified 93 directly relevant claims and 99 concretely transferable claims. Those 192 claims formed the equal-weighted job-recall denominator, each counted once.

General summaries received the source history. Job-conditioned summaries received the same source history plus the job description. Both conditions used the same model, output policy, and token limits. Neither received the evaluator's claim inventory, relevance labels, or other generated summaries.

The design crossed two conditions with token limits of 256, 512, 1,024, and 2,048. Three separate generations per cell produced 24 scored summaries. All passed their assigned hard limits, although actual lengths differed within the caps. GPT-6 Luna generated and evaluated the summaries; saved responses and numerical measurements allow the completed analyses to be reproduced offline.

## What the pilot found

<figure>
  <a href="/research/career-compression-results.svg" target="_blank" rel="noreferrer" aria-label="Open the career-compression results chart at full size"><img src="/research/career-compression-results.svg" alt="Mean job-relevant F1 is higher for job-conditioned summaries at each of four token limits; both conditions preserve more information at larger limits in this pilot" width="860" height="490" loading="lazy" /></a>
  <figcaption>Means from three independently generated summaries per condition and token limit. Error bars show variation between draws, using sample standard deviation; they are not confidence intervals. <a href="/research/career-compression-results.svg" target="_blank" rel="noreferrer">Enlarge figure</a>. <a href="/research/career-compression-results.csv">Download plotted data</a>.</figcaption>
</figure>

| Token limit | General F1, mean ± SD | Job-conditioned F1, mean ± SD |
| --- | ---: | ---: |
| 256 | 0.143 ± 0.018 | 0.191 ± 0.023 |
| 512 | 0.225 ± 0.024 | 0.270 ± 0.015 |
| 1,024 | 0.403 ± 0.015 | 0.451 ± 0.031 |
| 2,048 | 0.622 ± 0.033 | 0.653 ± 0.019 |

Averaging equally over the four assigned budgets, mean job-relevant F1 was 0.3480 for general summaries and 0.3913 for job-conditioned summaries, a difference of +0.0432. The mean difference favored conditioning at each budget, although one descriptive draw-index comparison did not.

An exploratory, one-sided exact permutation test, stratified by token budget, gave p = 0.00004375 for the average advantage. This analysis was selected after the scores were available. It conditions on the fixed person, job, model, evaluation decisions, and assumptions about independent draws and within-budget exchangeability.

Separate tests at each budget did not pass the specified p < 0.05 rule, and none passed after correction for four comparisons. The overall result therefore supports an average effect in this case; it is not four separately established budget effects. The 24 summaries are the repeated generation units. The 377 source claims are not 377 independent experimental replicates.

## What rate and distortion mean here

I recorded token count and a pinned language model's code length separately. Code length is a model-dependent description-length measure. It is not Shannon entropy, and the rate model did not receive the job as a condition.

Likewise, distortion is an explicit scoring choice: one minus the pipeline's factual F1. It measures source-relative information preservation; interview outcomes require a separate evaluation. A different source inventory, relevance rule, or evaluator can change the result.

The plotted curves are observed operating points of this compressor and evaluator. They do not establish an optimal rate–distortion frontier.

## Limits and what comes next

The same model generated, extracted, audited, and graded the summaries, which leaves room for correlated model errors. Quotation checks and cached analyses make the procedure traceable; they do not provide independent semantic ground truth. The pilot also covers one person and one job, so it cannot establish generalization across applicants, occupations, or hiring decisions.

A broader study would freeze its evaluation endpoint before generation, add independent judgments, and repeat the comparison across source histories and jobs. Further compressor comparisons are at the design stage. They are not results of the completed pilot.
