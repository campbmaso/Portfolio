export const selectedProjectIds = ["resume-ai", "sensors-platform-strategy", "lightguide-ar-workflows"];
export const companyLogos: Record<string, string> = {
  "stellantis-analytical-foundation": "/company-logos/stellantis.svg",
  "lightguide-ar-workflows": "/company-logos/lightguide.png",
  "resume-ai": "/company-logos/joyjobs.png",
  "sensors-platform-strategy": "/company-logos/sensors.png",
};
export const nextProjects: Record<string, string> = {
  "resume-ai": "growth-economics",
  "growth-economics": "scaling-under-constraints",
  "scaling-under-constraints": "resume-ai",
  "sensors-platform-strategy": "lightguide-ar-workflows",
  "lightguide-ar-workflows": "instruction-modality-study",
  "instruction-modality-study": "stellantis-analytical-foundation",
  "stellantis-analytical-foundation": "sensors-platform-strategy",
};
export const projectDecisions: Record<string, { heading: string; detail: string }> = {
  "resume-ai": { heading: "Follow the immediate user need", detail: "Weak repeat use led us from career exploration to resume tailoring. Preserving the document made the workflow useful beyond copied text." },
  "sensors-platform-strategy": { heading: "Connect measurement to its context", detail: "Automated capture, session tags, and accessible device controls became requirements of the launched software redesign." },
  "lightguide-ar-workflows": { heading: "Make digital guidance fit physical work", detail: "Operator knowledge and the surrounding equipment shaped spatial instructions and an operational handoff." },
};
