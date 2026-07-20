# Portfolio authoring rules

This repository is the public-safe presentation layer for Mason Campbell's portfolio.

## Evidence rules

- Treat `Career Story Bank` documents as private source material. Never add them to Git.
- Publish only claims that can be traced to a source note, artifact, or explicit confirmation.
- Do not publish compensation, manager names, customer names, private user names, personal contact data, or confidential implementation details.
- Preserve qualifiers such as `approximately`, time periods, cohort definitions, and Mason's specific contribution.
- Separate Mason's work from team outcomes. Prefer `I led`, `I built`, or `I partnered with` only when the source supports it.
- Avoid unresolved claims, especially the conflicting 250%/600% monetization figures and unqualified market-first statements.

## Voice

- Clear, direct, curious, and commercially grounded.
- Show technical fluency as a means to make better product decisions, not as an identity claim.
- Prefer problem -> decision -> evidence -> outcome over generic leadership language.
- Keep the scrappy-builder quality concrete: prototypes, customer calls, instrumentation, debugging, and shipped systems.

## Content workflow

1. Draft or update a case study in `src/content/case-studies/`.
2. Validate every metric and confidentiality boundary.
3. Update role emphasis in `src/data/role-profiles.yaml` rather than duplicating evidence.
4. Run `pnpm run validate`.
5. Review a deployment preview before merging.

## Design rules

- Preserve the warm editorial palette, strong typographic hierarchy, and generous spacing.
- Keep the site fast and progressively enhanced. Avoid client-side frameworks unless a real interaction requires one.
- Meet keyboard, contrast, semantic HTML, reduced-motion, and responsive-layout expectations.
