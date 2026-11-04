import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  redirects: {
    "/stories/growth-economics/": "/stories/subscription-model/",
    "/work/growth-economics/": "/stories/subscription-model/",
    "/stories/scaling-under-constraints/": "/stories/resume-ai/",
    "/work/scaling-under-constraints/": "/stories/resume-ai/",
  },
  build: {
    format: "directory",
  },
});
