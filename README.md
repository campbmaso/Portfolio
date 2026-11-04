# Mason Campbell - Product Portfolio

**Link:** https://portfolio.campbmaso.workers.dev/

An evidence-first product portfolio. The site is built with Astro, validated content collections, and static HTML for deployment on Cloudflare Workers Static Assets.

## Local development

```sh
pnpm install
pnpm dev
```

Before publishing a change:

```sh
pnpm validate
```

## Content model

- `src/content/case-studies/` contains canonical, evidence-backed work stories.
- `src/data/role-profiles.yaml` controls the headline, emphasis, proof points, and case-study order for each target role.
- `src/site-config.ts` selects the active profile and stores public links.
- `/work/` is the project collection. `/stories/` redirects there; existing project URLs under `/stories/<id>/` and legacy `/work/<id>/` links remain usable.
- `src/data/projects.ts` controls the selected projects, company logos, and related next-project links.
- `src/components/ProjectWorkflow.astro` contains explicitly labeled workflow reconstructions. These are explanatory diagrams, not product screenshots.

Case studies can omit the fact strip when there is no meaningful number to show. Use `status`, `scope`, and `outcomeLabel` to distinguish research, delivered work, and launched products. Keep unverified impact figures out of the public content.

To reposition the portfolio, change `activeProfile` in `src/site-config.ts`, then revise or add the matching role profile. Do not duplicate case studies just to change emphasis.

## Color palette

All theme colors live together in `src/styles/tokens.css`. To try a different palette, update `--accent`, `--accent-hover`, `--accent-soft`, `--accent-mid`, `--accent-ink`, and `--focus`. The background, text, border, and surface colors can be changed in the same file. Keep `--on-accent` readable against the chosen accent, and `--accent-ink` readable on the light backgrounds.

## Cloudflare Workers deployment

The production build is written to `dist/`, and `wrangler.jsonc` serves that directory through Workers Static Assets.

1. Import this GitHub repository from the Cloudflare Workers dashboard.
2. Use `pnpm run build` as the build command.
3. Use `pnpm exec wrangler deploy` as the deploy command.
4. Keep the Worker name aligned with `mason-campbell-portfolio` in `wrangler.jsonc`.
5. Set `PUBLIC_SITE_URL` to the final custom-domain origin so canonical and social URLs are absolute.

Cloudflare will create preview versions for non-production branches when Workers Builds is connected to GitHub.

## Privacy

The Career Story Bank is deliberately ignored by Git. It remains a private authoring input and is not part of the deployed site.
