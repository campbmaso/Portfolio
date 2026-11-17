---
title: Do projected instructions make assembly faster?
eyebrow: Undergraduate research · Human factors
category: Research
summary: My Kettering University capstone team compared projected, screen-based, and paper instructions to study how instruction format and pacing affected assembly time.
order: 7
featured: false
status: Senior design study completed
scope: Capstone team member on a collaborative study of instruction format, pacing, and assembly performance
metricHeading: Study scope
timeframe: "2021"
context: Kettering University · IME 454 senior design
role: Senior design team member
challenge: When the parts and assembly are held constant, does changing where instructions appear or how they advance change how quickly people complete the task?
outcomeLabel: What we found
outcome: The study did not establish a cycle-time advantage for LightGuide over paper or screen-based instructions on this task. Repeated observations and the way conditions were paired with orientations limited what we could attribute to the interface.
metrics:
  - value: "17"
    label: Participants
    note: Repeated trials per participant
  - value: "9"
    label: Test conditions
    note: Paper, monitor, projection, and a no-instruction baseline
  - value: "3"
    label: Assembly orientations
    note: A six-piece cube assembly
  - value: "296"
    label: Usable timings
    note: Completion times included in the analysis
capabilities:
  - Experimental design
  - Human factors research
  - Repeated-measures data
  - Augmented reality
evidence:
  - Kettering University IME 454 capstone team materials
  - Minitab analysis across instruction conditions and model diagnostics
---

## A simple task with different interfaces

For our IME 454 senior design project at Kettering University, my teammates and I studied how people assembled a cube made from six distinct pieces. We compared ways to deliver the same task instructions and included a condition without instructions. Some variants showed everything at once, others advanced on a timer, and others waited for a participant action.

| Interface | Conditions |
| --- | --- |
| Paper | Printed instructions |
| Monitor | All steps at once, timed progression, button-controlled progression |
| LightGuide projection | All steps at once, timed progression, motion-triggered progression, projected soft button |
| Baseline | No instructions |

## What we measured

Seventeen participants completed repeated trials across three assembly orientations. The team recorded completion times by stopwatch and analyzed 296 usable timings in Minitab using analysis of variance and Tukey pairwise comparisons across the nine conditions.

<figure>
  <a href="/work-media/capstone-orientation-counts.png" aria-label="View the full-size chart of trial counts by condition and assembly orientation"><img src="/work-media/capstone-orientation-counts.png" alt="A heatmap of trial counts showing that each of the eight guided conditions was tested in just one of the three orientations" width="1086" height="874" loading="lazy" /></a>
  <figcaption>Trial counts by condition and assembly orientation. One of the 297 trials had no recorded completion time.</figcaption>
</figure>

## What the study established

The pairwise analysis identified four guided conditions with shorter mean completion times than the no-instruction baseline. The intervals for every comparison between guided conditions included zero. The model treated repeated trials as independent, and each guided condition appeared in only one orientation. Those limitations make it difficult to isolate the effect of instruction format.

I would follow up with a more complex assembly, automated timing, and a design that balances condition and orientation within participants. That would give a cleaner test of whether guidance at the point of work changes performance.

In my later work at LightGuide, I designed projected interfaces and sensor-driven controls for manufacturing operators. [Read the LightGuide UX case study](/stories/lightguide-ar-workflows/).
