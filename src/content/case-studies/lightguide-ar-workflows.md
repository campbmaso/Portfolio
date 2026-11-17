---
title: Designing the workbench as an augmented reality interface
eyebrow: Human–computer interaction · Industrial UX
summary: I studied how operators worked at the bench, then designed, programmed, and tested projected interfaces that responded to hand movements, machine vision, and equipment signals.
order: 3
featured: true
timeframe: 2022–2023
context: LightGuide
role: Integration Engineer
scope: Contextual inquiry, task analysis, spatial and interaction design, sensor programming, and on-site evaluation for customer applications
status: Customer applications deployed
challenge: The operator’s hands, tools, and attention were already occupied by the task. The interface had to show the right cue at the point of work, fit the geometry of each station, and know when to advance based on what happened in the physical workspace.
outcomeLabel: What I delivered
outcome: I designed, programmed, and evaluated projected interfaces for customer workstations. Operators could advance with touchless controls or have steps progress automatically from a sensor or machine event. I tested how both the guidance and the input logic worked with operators on site.
metrics: []
capabilities:
  - Contextual user research
  - Spatial interface design
  - Multimodal interaction design
  - Task analysis and ergonomics
  - On-site usability evaluation
evidence:
  - On-site operator interviews, work-instruction reviews, and usability evaluation
  - Design and implementation of projected interfaces and sensor-based interaction logic
  - On-site integration and partner training at a manufacturing plant
  - LightGuide product demonstration showing projected guidance and controls at the workstation
---

## A button made of light

An operator could reach toward a button projected onto the workbench and see the next instruction appear. I built that interaction by putting the visual target within reach, configuring a Kinect depth camera to detect a hand in the corresponding region, and programming the application to advance when it registered the gesture. The projected target had to tell the operator where to reach. The sensed region had to match that expectation, and the next projection confirmed that the gesture worked.

That was one part of my role as an integration engineer. I owned the interaction design and implementation for customer applications on LightGuide’s platform, from observing operators on the floor to programming what the system displayed and what it did in response.

<figure>
  <img src="/work-media/lightguide-manufacturing-demo.jpg" alt="Two assembly stations with projected part locations, step instructions, and Forward and Reset controls" width="1280" height="720" loading="lazy" />
  <figcaption>LightGuide platform demo showing instructions and controls projected onto two assembly stations. <a href="https://www.youtube.com/watch?v=Ot_c8cHcxeM">Watch the 59-second demo</a>.</figcaption>
</figure>

## Study how the work is actually done

I walked through the written procedure with process engineers, then observed and interviewed the people doing the work. Operators could explain judgments the instructions left implicit. I paid attention to where they stood, where their eyes and hands needed to be, and how the position of tools and parts constrained movement. This gave me a basis for deciding which steps needed clarification, how to sequence the guidance, and where a cue or control belonged.

## Design the information around the action

For each step, I specified what the operator needed to know, where to show it, and what event would advance the state of the application. I used progressive disclosure to show the current action and projected visual cues onto the relevant part or location. A symbol could direct attention to a target, with concise text available where the action needed more precision. For complex surfaces, I developed dynamic scaling cues to keep projected guidance interpretable across different parts of the workpiece.

## Choose the input that fits the task

A touchless control gives the operator a deliberate way to advance. When the equipment already provides a reliable completion signal, the application can advance from that event. I designed for both patterns, programming interfaces to respond to depth sensing, machine vision, barcode scans, or signals from a programmable logic controller. With controls engineers, I checked that the event the software recognized matched the point in the physical process when the next instruction should appear.

## Test the interface with operators at the station

I watched operators perform the real task with the application running. I evaluated whether the cues were easy to interpret at the point of use, whether a control was practical to reach, and whether the system responded at the expected point in the procedure. Operator feedback informed changes to both the visual guidance and the interaction logic. On one plant deployment, I also trained the channel partner to troubleshoot components and adapt the application as the customer’s process changed.

My earlier senior design team studied how instruction formats affected assembly performance. [Read the undergraduate capstone](/stories/instruction-modality-study/).
