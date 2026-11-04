---
title: Reasoning and training
summary: Exploring how information changes during reasoning and how training might change what a model represents and does.
order: 2
question: How does information change as models reason, and how does training change what they represent and do?
status: Draft brief · Exploration in progress
---

## Scope

This exploration brings together two questions that I want to keep distinct: how information changes while a model works through a task, and how training changes the model itself. The goal is to understand what could be observed at each level and which comparisons would be meaningful.

I’m particularly interested in the relationship between intermediate information and the eventual answer. A useful investigation would need to define what is being tracked, rather than treating a longer explanation or a different answer as sufficient evidence of a change in reasoning.

## Questions I want to investigate

- What information is retained, transformed, or discarded as a task progresses?
- Which changes appear connected to a useful step toward an answer?
- How could a comparison distinguish differences in task presentation from differences associated with training?
- What evidence would justify connecting a change in representation to a change in behavior?

## Possible approach

A proposed starting point is a small family of tasks with explicit inputs and criteria for evaluating answers. I could then identify specific stages or observations to compare. A later training comparison would require a clear account of what changed and what remained constant.

The task set, models, and methods are still open. These are possible directions for investigation; this brief does not claim that a training experiment or an analysis of internal model states has been completed.

## What I hope to learn

I want to sharpen the questions I ask about model reasoning and the evidence needed to answer them. The intended result is a bounded explanation of an observed change, including alternative interpretations and unresolved questions. No experimental findings are presented here.
