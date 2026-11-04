---
title: "Modeling battery degradation"
order: 3
category: Experimental modeling
status: Completed undergraduate thesis
summary: I combined a controlled battery-aging experiment with regression and a physical rate model to estimate water loss under different operating conditions.
period: Undergraduate research · 2021
context: Kettering University · Stellantis
role: Thesis author and undergraduate researcher
question: How can voltage, temperature, and exposure time be translated into a useful estimate of lead-acid battery water loss?
takeaway: The work produced condition-specific degradation models and a predictive calculator. Reported fit statistics describe the bench data; they do not establish independent field-prediction accuracy.
methods:
  - Controlled bench experiments
  - Log-linear regression
  - Arrhenius kinetics
  - Residual diagnostics
  - Predictive calculator
scope:
  - value: "18"
    label: Batteries assigned to the experiment
    note: Two per voltage–temperature condition
  - value: "9"
    label: Operating conditions
    note: Three voltages crossed with three temperatures
  - value: "24 h"
    label: Measurement interval
    note: Repeated weighings to track mass loss
---

## The engineering problem

Lead-acid batteries can lose water through temperature-related processes and charging reactions. For an automotive battery, changing the charging strategy or thermal environment therefore changes the conditions under which degradation occurs. The practical question was how to turn those conditions into an estimate engineers could use when comparing designs.

My undergraduate thesis, *Thermal Analysis of the Automotive Lead Acid Battery*, connected bench testing to a parametric model and a usable prediction workflow. I authored the thesis at Kettering University within a Stellantis research project. The work was physical-system modeling and statistical analysis, with a clear application in thermal-management decisions.

## A controlled experiment

The experiment assigned 18 batteries across a three-by-three design. Each cell had two batteries, and each battery was weighed every 24 hours. Voltage and temperature were deliberately varied to examine demanding but relevant operating conditions.

| Charging voltage | Temperature conditions | Batteries per condition |
| --- | --- | --- |
| 12.6 V | 65°C, 75°C, 85°C | 2 |
| 13.1 V | 65°C, 75°C, 85°C | 2 |
| 13.5 V | 65°C, 75°C, 85°C | 2 |

The thesis reports averaging the two batteries' measurements unless an unexpected error made one replicate unusable; in that case, the valid battery's data was used. The repeated daily weighings are observations over time, rather than additional independent batteries.

## Building the model

I started with an exponential model of mass change over time. Taking natural logarithms made the relationship suitable for linear regression: the slope of log mass against elapsed time supplied a rate coefficient for each operating condition.

The next step connected those rates to temperature through an Arrhenius relationship. I estimated the temperature dependence at each tested voltage, then used additional regressions to relate the model parameters to voltage. That made it possible to estimate a degradation rate from voltage and temperature, then combine the rate with exposure duration.

This structure mattered because it connected the statistical fit to a physical interpretation. Temperature and charging voltage were model inputs with an engineering meaning, and the resulting parameters could be used in a calculation beyond the original plots.

<figure>
  <a href="/research/thesis-original-bench-fit.png" target="_blank" rel="noreferrer" aria-label="Open the original thesis bench-data figure at full size"><img src="/research/thesis-original-bench-fit.png" alt="Original thesis scatterplot at 13.1 volts: log mass declines over time, with a steeper decline at 85 degrees Celsius than at 75 or 65 degrees Celsius" width="997" height="665" loading="lazy" /></a>
  <figcaption>Original thesis Figure 12: log-mass measurements and fitted relationships for the 13.1 V case. The steeper decline at higher temperature is visible in the bench data. Select the figure to view it at full size.</figcaption>
</figure>

## Checking fit before using predictions

I used Minitab to examine regression significance, residual patterns, normality diagnostics, and the proportion of variation explained by each condition-level fit. The thesis reports the following R² values:

| Voltage | 65°C | 75°C | 85°C |
| --- | ---: | ---: | ---: |
| 12.6 V | 93.04% | 90.77% | 91.86% |
| 13.1 V | 96.08% | 93.18% | 99.56% |
| 13.5 V | 98.06% | 95.04% | 99.35% |

These values describe fit to the observed bench data. They are not held-out prediction accuracies, and high R² alone does not establish that a model will predict a new battery, operating profile, or field lifetime accurately. The original thesis also reports the diagnostic and coefficient checks used alongside these statistics.

[Download the reported fit statistics](/research/thesis-reported-fit.csv).

## Turning the model into a tool

I implemented the estimated relationships in an Excel water-loss calculator. It accepted voltage, temperature, and time and returned quantities including the rate coefficient, estimated remaining water, and percentage water lost. The model was also connected to an existing thermal-exposure workflow that represented a varying temperature history through equivalent exposure time.

The resulting process connected an engineering input to an interpretable output:

1. Characterize the voltage and thermal exposure of the operating case.
2. Estimate the corresponding degradation parameters.
3. Calculate water loss for the exposure being compared.
4. Use the modeled difference to examine a charging or thermal-management choice.

The mass-to-water-loss calculation depends on assumptions about the initial water inventory. Predictions away from the tested conditions also depend on the physical model and the parameter relationships continuing to apply.

## Applying it to engineering comparisons

The thesis used the calculator in two application studies. One compared smart and conventional charging strategies; the other compared a battery configuration with and without a bottom heat shield.

The smart-charging scenario had lower modeled water loss in the examined profiles. In the heat-shield scenario, the model estimated slightly more water loss with the shield, consistent with concern that a surrounding component could retain internally generated heat. These were specific modeled comparisons, not universal findings about every charging strategy or heat shield.

The deliverable was a predictive workflow for comparing operating cases. The thesis did not establish a measured reduction in warranty costs or a separately verified improvement in real-world battery lifetime.

## What I take forward

The project taught me to connect experimental design, model assumptions, and an eventual decision tool. A good fit is one part of that chain. Understanding what was measured, which assumptions support a prediction, and how the result will be used is equally important.

That distinction continues in my current representation research: a numerical output can be reproducible and informative while still requiring an independent test of the decision it is meant to support.
