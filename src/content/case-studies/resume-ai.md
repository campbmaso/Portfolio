---
title: Pivoting from CareerAI to ResumeAI
eyebrow: Discovery · Product building
summary: Low repeat use led us from career exploration to resume tailoring. I built and tested a workflow that returned a tailored document while preserving the user's formatting.
order: 1
featured: true
status: Resume workflow launched October 2023
scope: Customer discovery with my cofounder, AI and document prototypes, interaction design, usability testing, and technical delivery
timeframe: 2023–2025
context: JoyJobs.ai
role: Technical Co-Founder & Head of Product
challenge: People liked our career-exploration product but rarely returned. Interviews revealed a more urgent need, and our first resume prototype still left users copying text and repairing their documents.
outcome: We pivoted to ResumeAI, tested the complete tailoring workflow with users, and launched in October 2023. The product generated revenue from its first day.
metrics:
  - value: Oct 2023
    label: ResumeAI launch
    note: Following prototypes, interviews, and moderated and unmoderated usability tests
  - value: Day one
    label: First product revenue
    note: Revenue began on launch day, before paid marketing
  - value: ~45 → ~17 sec
    label: Complete resume processing
    note: Post-launch improvement for paying customers; approximate timings for the full processing flow
capabilities:
  - Customer discovery
  - Product strategy
  - Prototyping
  - Applied AI
  - Workflow design
  - Usability testing
evidence:
  - Customer interviews following low repeat use of CareerAI
  - Text-only and direct-document prototypes
  - Moderated and unmoderated usability testing
  - October 2023 launch and first-day product revenue
  - Post-launch timing of the complete processing flow for paying customers
---

## Positive feedback was not repeat use

Our first product, CareerAI, helped people explore more fulfilling careers. I built the initial prototype and entered information by hand during calls with early testers. Positive feedback gave us a reason to build an interface, test it further, and launch in April 2023.

People signed up, but few returned. My cofounder and I interviewed job seekers to understand the gap between their feedback and their behavior. They saw value in longer-term career exploration, but landing interviews was the problem they needed to solve now. Tailoring applications was repetitive and time-consuming.

That research changed our priority. We decided to build around the application process, using what we had learned from CareerAI to find a more immediate job for the product.

## Validate the rewrite, then finish the task

I coded a basic ResumeAI prototype in a few days. It used an AI model to modify copied resume text, which let us test the idea with people we had interviewed without first building a complete interface.

The response to the rewritten content was encouraging, but the workflow left substantial work to the user. They still had to copy the output into their resume, put each change in the right place, and repair the layout. Generating useful text solved only part of the task.

We made direct document modification the next priority. The product needed to return a usable resume in the user's existing format.

## Design around the original document

I first proved that I could change text inside the document, then connected that workflow to AI-generated revisions. Preserving the original formatting required further work on the document's underlying structure and repeated iteration with user-submitted files.
We tested the evolving experience with both returning and new users. Requests to join the waitlist gave us another signal to continue, while usability sessions helped us refine the submission flow and interface.

I iterated through moderated and unmoderated tests before launch. The sequence mattered: first establish that the tailored content was useful, then make the document usable, then test the complete experience people would actually encounter.

## Launch, then follow the files people bring

ResumeAI launched in October 2023 with usage packages and generated revenue on the first day, before we spent on paid marketing.

Early customers asked for PDF support and reported problems with resumes containing tables. We chose to broaden document support before further polishing the text changes for files that already worked. Those were post-launch iterations, guided by the documents and feedback users brought us.

## Reduce the wait for a finished resume

Processing speed also mattered to the complete experience. After launch, I reduced resume processing from approximately 45 seconds to approximately 17 seconds for paying customers. Those timings covered the full processing flow.

This work addressed another part of the user's effort: the wait between submitting a resume and receiving the tailored document. It followed the initial launch, alongside the continuing work on document support and usability.

## What changed

We moved from a career-exploration product with weak repeat use to a launched resume-tailoring workflow. My contribution connected discovery, prototypes, document handling, interface design, and usability testing; the pivot itself was a decision my cofounder and I made together.

The most consequential design choice was treating the finished resume as the product. Preserving its formatting removed the copy-and-repair work our first prototype had left behind. Launching it and earning revenue gave us evidence that people would pay for that complete workflow.

The next commercial decision was [moving from usage packages to subscriptions](/stories/subscription-model/).
