---
title: "Modeling battery degradation"
summary: "Connecting controlled physical experiments to an interpretable model of how operating conditions shape battery water loss."
order: 3
question: "How do charging voltage, temperature, and time affect water loss in lead-acid batteries?"
status: "Undergraduate thesis · Kettering × Stellantis"
outcomeLabel: "Research contribution"
outcome: "A predictive calculator connecting operating conditions to remaining water and cumulative loss, with predictions interpreted within the model’s assumptions."
metrics:
  - value: "18"
    label: Batteries measured
    note: "Controlled measurements across a replicated voltage–temperature design."
  - value: "3 × 3"
    label: Voltage–temperature design
---

## The question

How do charging voltage, temperature, and time affect water loss in lead-acid batteries? My undergraduate thesis investigated those relationships to support decisions about charging strategies and thermal management.

## The approach

I used controlled measurements from 18 batteries across a replicated three-by-three voltage–temperature design. The model combined an exponential degradation law with Arrhenius temperature dependence. Log transformations made the relationships suitable for regression-based parameter estimation.

## The contribution

I assessed fit through residual diagnostics, coefficient significance, normality checks, and R², then integrated the estimated relationships into a predictive calculator. The result connected operating conditions to remaining water and cumulative loss, with predictions interpreted within the model’s assumptions.

## Methods

Experimental design · Regression · Degradation kinetics · Predictive modeling
