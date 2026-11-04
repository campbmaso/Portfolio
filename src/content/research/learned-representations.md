---
title: "Semantic representations of experience"
order: 1
category: Representation & geometry
status: Completed pilots · Further validation in progress
summary: I built two complementary pilots to examine how geometric representations change rankings and which relationships survive aggregation or compression.
period: Independent research · 2026
context: Self-directed representation research
role: Research design, implementation, and analysis
question: When experience is encoded as a point, subspace, or structured record, what changes in the information we can recover and the comparisons we make?
takeaway: Ranking choices changed with the geometry and scoring rule. In a separate structural diagnostic, aggregation and low-rank compression lost some recorded associations, while exact flattening preserved them.
methods:
  - Local embedding inference
  - Singular value decomposition
  - Named semantic projections
  - Structural recovery probes
  - Synthetic ambiguity controls
scope:
  - value: "24 × 4"
    label: Document–job comparisons
    note: 24 original career artifacts and four job descriptions in the geometry pilot
  - value: "24"
    label: Curated experience observations
    note: From 17 episodes in a separate, single-person structural pilot
  - value: "530"
    label: Structural probes
    note: Fixed questions about one- through four-field associations
---

## Two questions about the same underlying problem

Experience contains more than a list of skills. It includes who did what, which method they used, and the context in which the work occurred. A useful representation needs to support the questions we intend to ask about that experience.

I investigated this through two complementary pilots. The first compared geometric representations of original career documents. The second held a small set of annotated experience records fixed and tested which relationships survived different representations. Their datasets and evaluation targets were different, so I interpret their results separately.

## Pilot 1: compare documents in a learned space

I encoded 24 original career artifacts and four job descriptions with the same local BGE-M3 model. Each complete document became a normalized, 1,024-dimensional point. I also constructed rank-8, rank-16, and rank-32 linear subspaces from the model's contextual token vectors using singular value decomposition.

The original documents were not rewritten into a common résumé format or extracted into a shared story schema for this experiment. That preserved the submitted text but left document format and style uncontrolled. Point and subspace constructions also had different storage capacities.

I compared cosine and Euclidean distance between the normalized document points, and normalized chordal distance between equal-rank subspaces. As expected for unit vectors, cosine and Euclidean distance produced the same ordering. The subspace orderings differed.

<figure>
  <a href="/research/geometry-ranking-agreement.svg" target="_blank" rel="noreferrer" aria-label="Open the ranking-agreement chart at full size"><img src="/research/geometry-ranking-agreement.svg" alt="Rank correlations between point and subspace rankings range from approximately 0.16 to 0.85 across four jobs and three subspace ranks" width="860" height="470" loading="lazy" /></a>
  <figcaption>Saved geometry-pilot results. Each line is one job; each value compares the ordering of 24 career artifacts under a subspace distance with their whole-document cosine ordering. These are agreement measurements, not ranking accuracies. <a href="/research/geometry-ranking-agreement.svg" target="_blank" rel="noreferrer">Enlarge figure</a>. <a href="/research/geometry-ranking-agreement.csv">Download plotted data</a>.</figcaption>
</figure>

| Job | Rank 8 correlation | Rank 16 correlation | Rank 32 correlation |
| --- | ---: | ---: | ---: |
| Job 1 | 0.501 | 0.804 | 0.849 |
| Job 2 | 0.544 | 0.569 | 0.557 |
| Job 3 | 0.157 | 0.234 | 0.177 |
| Job 4 | 0.590 | 0.730 | 0.705 |

The spread shows that representation choice can change the resulting comparison substantially. Without independently supplied relevance labels, it does not tell us which ordering is better.

## A more interpretable readout

A follow-up used the same whole-document vectors and projected them onto named directions derived from each job description. A local generative model drafted requirement anchors, which were reviewed against the job and frozen before any candidate projection. Every document compared with a job used the same frame and weights.

I defined an explicit scoring rule that penalized relative alignment shortfalls and gave diminishing credit for surplus alignment. A sensitivity sweep varied how strongly the rule emphasized the largest shortfall. The highest-ranked document changed across these scoring settings for three of the four jobs.

The prototype produced 96 reports with dimension readouts, score allocations, and retrieved source passages. Checks verified numerical bounds, reproducibility, source offsets, and that allocated contributions summed to the displayed index.

These checks establish the behavior of the implementation. They do not turn directional similarity into calibrated proficiency. Named directions can overlap, a retrieved passage is contextual evidence rather than proof of requirement fulfillment, and the display index is not a hiring probability. The next validation target is independently judged relevance on held-out comparisons.

## Pilot 2: hold the recorded relationships fixed

To isolate structural loss, I curated 24 source-linked observations from 17 episodes in one career history. Each observation bound four fields: episode, action, method, and context. The annotation supplied the reference answers for this diagnostic; it was not an independent assessment of the whole career.

I compared separate field counts, hierarchical counts, pairwise and triple associations, exact event records, a sparse four-way tensor, an exactly flattened tensor, and rank-limited SVD approximations. The test contained 530 fixed probes about one- through four-field combinations.

A central distinction was between *compatibility* and *answerability*. Separate summaries can be compatible with a combination even when that full combination is absent from the reference. A conservative readout instead abstained when its stored associations could not determine an answer.

| Representation | False compatible 3-field probes | False compatible 4-field probes |
| --- | ---: | ---: |
| Flat counts | 91 | 24 |
| Hierarchical counts | 91 | 24 |
| Pairwise counts | 2 | 1 |
| Triple counts | 0 | 0 |
| Exact event records | 0 | 0 |

The three-field set contained 91 negative probes and the four-field set contained 24. The probe design deliberately favored difficult combinations that lower-order summaries could confuse. These counts describe this diagnostic distribution, rather than a natural error rate for career questions.

## What compression removed

Exact event records, a sparse tensor, and an exactly flattened vector recovered the same selected relationships. That agreement was an expected correctness control: flattening itself need not remove information.

Lower SVD ranks did lose recorded combinations under the fixed reconstruction threshold. For four-field queries, positive-tuple recall rose from 12.5% at rank 1 to approximately 70.8% at rank 8, reaching 100% at the full matrix rank of 16.

<figure>
  <a href="/research/structural-compression.svg" target="_blank" rel="noreferrer" aria-label="Open the structural-recovery chart at full size"><img src="/research/structural-compression.svg" alt="Recovery of recorded combinations increases with SVD rank, reaching complete recovery at rank 16 for all four query types" width="860" height="470" loading="lazy" /></a>
  <figcaption>In-sample recovery of the frozen categorical annotation with a fixed 0.5 reconstruction threshold. This tests what survives a particular compression, not generalization to unseen people or language. <a href="/research/structural-compression.svg" target="_blank" rel="noreferrer">Enlarge figure</a>. <a href="/research/structural-compression.csv">Download plotted data</a>.</figcaption>
</figure>

Low rank did not mean fewer stored bytes in this small, sparse example. Under the declared numerical encodings, exact event records occupied 384 bytes, while rank-1 dense factors occupied 6,600 bytes. Shared vocabulary and taxonomy were excluded from both. These are reference payload sizes, not optimized compression codes or a matched-budget competition.

## Controls, limits, and the next question

I constructed a method-swap control that preserved separate counts while changing which method belonged to an episode. A separate synthetic parity control showed that identical pairwise summaries can conceal different three-way associations. These demonstrate ambiguity in the selected summaries; the altered records are diagnostic counterfactuals, not claims about a person's history.

The structural pilot did not test learned language representations, useful hierarchy depth, nonlinear manifolds, or a universal tensor order. Its annotations and probes came from a curated slice of one person's experience. The geometry pilot, meanwhile, measured ranking disagreement without a ground-truth relevance target.

The next question is which structures preserve useful, uncommon relationships at comparable storage and decoder capacity. That requires broader records, frozen evaluation questions, and independent validation. The current results make those choices explicit rather than assuming that a particular mathematical format must be superior.
