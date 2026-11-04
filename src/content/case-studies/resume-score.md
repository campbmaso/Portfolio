---
title: Making ResumeAI’s value visible with ML scoring
eyebrow: Applied ML · Cross-functional leadership
summary: I partnered with a data scientist on skill classification, connected the model to a broader resume score, and led the interface and launch across engineering and marketing.
order: 5
featured: false
timeframe: 2023–2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
scope: Product leadership, ML collaboration, engineering coordination, and launch planning
status: Resume Score launched
challenge: We wanted to make the effects of resume changes easier to understand and give users a clearer view of their resume's strengths and weaknesses.
outcome: We shipped Resume Score as a user-facing feature, bringing skill classification, a broader scoring algorithm, visual feedback, and in-app launch prompts into one experience.
metrics: []
capabilities:
  - AI product development
  - Machine learning
  - Interaction design
  - Cross-functional leadership
  - Launch planning
evidence:
  - Labeled resume-skill data and class-balancing work
  - Skill classifier connected to expert-defined scoring criteria
  - Chart-based interface and in-app launch prompts
  - Coordinated backend, frontend, and marketing release
---

## Make the changes easier to understand

ResumeAI returned a tailored document. With Resume Score, we wanted to help users inspect the result: how did the language in their resume align with the criteria behind our feedback, and where could it improve?

I led the feature from development through launch. It was my first initiative spanning backend engineering, frontend engineering, machine learning, and marketing, so the work required keeping the model, the interface, and the release focused on the same user experience.

## Give the model a specific job

I partnered directly with a data scientist on the machine-learning component. We used labeled technical- and soft-skill terms drawn from real resumes. Technical terms were overrepresented, so we rebalanced the classes before training a classifier using word embeddings and logistic regression.

The model estimated whether a term was more likely to represent a technical or soft skill. That output fed into a broader scoring algorithm, which evaluated the frequency and balance of the language against expert-defined resume criteria.

The scoring rules treated specific, role-relevant technical language as stronger evidence than generic soft-skill claims. Skill classification supplied one input to those rules; the complete product required a way to turn the combined result into feedback users could interpret.

## Bring the score into the product

I coordinated the engineering work across the stack and the interface that presented the result. We integrated a charting library to make the feedback about the resume visual and easier to inspect.

I also worked with marketing to align the messaging and release timing. In-app prompts introduced the feature and encouraged users to try it, making the launch part of the existing product journey.

## Deliver a complete feature

Resume Score launched with the model, scoring logic, interface, and introduction working together. My role was to connect the specialist work and carry it through to a usable product feature.

The score summarized our chosen resume criteria, rather than predicting the probability of getting an interview. The concrete result was a shipped way for users to inspect their resumes through those criteria.
