---
title: Designing projected AR interfaces for manufacturing operators
eyebrow: UX design · Spatial interaction
summary: At LightGuide, I turned manufacturing procedures into projected work instructions and programmed the interactions that let operators advance through them at the workstation.
order: 3
featured: true
timeframe: 2022–2023
context: LightGuide
role: Integration Engineer
scope: Operator research, interaction design, programming, and deployment for customer-specific applications on the LightGuide platform
status: Customer applications deployed
challenge: Operators needed to see what to do, where to do it, and when to advance while handling real parts and tools. Each interface had to fit the workstation, the procedure, and the equipment already in use.
outcomeLabel: What I delivered
outcome: I designed and programmed customer-specific AR workflows with step-by-step projections, touchless controls, and progression triggered by sensors or connected equipment. I refined them with operators and supported deployment with engineers and channel partners.
metrics: []
capabilities:
  - Contextual user research
  - Spatial interface design
  - Sensor-driven interaction
  - On-site usability evaluation
evidence:
  - Firsthand account of designing, programming, testing, and deploying customer-specific LightGuide applications
  - On-site integration and partner training at a manufacturing plant
  - LightGuide product demonstration shared by Will Page, included as platform context
---

## Start with the operator's task

I reviewed work instructions with process engineers, then watched operators perform the task and asked them to explain decisions the written procedure left implicit. I looked at where they stood, what they could reach, and when they needed to look away from a part. Those observations helped me decide which steps needed guidance and where that guidance could go.

## Put the next action where it happens

I broke each procedure into steps and decided what the operator needed to see and what would let the system advance. I used projected symbols when they made the action clear and short text when the step needed more precision. Showing one step at a time kept the instructions focused on the action at hand. I also developed dynamic scaling cues to make projected guidance easier to interpret on complex surfaces.

<figure>
  <a href="https://www.youtube.com/watch?v=Ot_c8cHcxeM" aria-label="Watch Will Page’s LightGuide manufacturing workflow demo on YouTube"><img src="/work-media/lightguide-manufacturing-demo.jpg" alt="Two assembly stations with projected part locations, step instructions, and Forward and Reset controls" width="1280" height="720" loading="lazy" /></a>
  <figcaption>Light Guide Systems product demo shared by my colleague Will Page as an example of the platform. <a href="https://www.youtube.com/watch?v=Ot_c8cHcxeM">Watch the 59-second demo</a>.</figcaption>
</figure>

## Give physical actions a software response

One interaction I built was a projected “soft button.” I placed the visual control where an operator could reach it and configured a depth camera to detect a hand entering the corresponding physical region. That detection advanced the application to the next instruction. The projected graphic, the reachable input region, and the change in software state had to work together as one control.

When equipment already provided a clear completion signal, I used that event to advance the workflow. Depending on the station, the input could come from a barcode scanner, machine vision, or a programmable logic controller. I programmed the response and worked with controls engineers to check it against the process.

## Test at the workstation and support the handoff

I watched operators use the applications in context and used their feedback to adjust cue placement, step order, and sensor behavior. On one plant deployment, I also trained a channel partner to troubleshoot component failures and adapt the application as the process changed. I evaluated usability through observation and feedback during implementation.

My earlier senior design team studied how instruction formats affected assembly performance. [Read the undergraduate capstone](/stories/instruction-modality-study/).
