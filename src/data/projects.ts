export const selectedProjectIds = ["resume-ai", "sensors-platform-strategy", "lightguide-ar-workflows"];
export const companyLogos: Record<string, string> = {
  "stellantis-analytical-foundation": "/company-logos/stellantis.svg",
  "lightguide-ar-workflows": "/company-logos/lightguide.png",
  "resume-ai": "/company-logos/joyjobs.png",
  "sensors-platform-strategy": "/company-logos/sensors.png",
  "subscription-model": "/company-logos/joyjobs.png",
  "resume-score": "/company-logos/joyjobs.png",
  "instruction-modality-study": "/company-logos/lightguide.png",
};
export const companyNames: Record<string, string> = {
  "stellantis-analytical-foundation": "Stellantis",
  "lightguide-ar-workflows": "LightGuide",
  "resume-ai": "JoyJobs.ai",
  "sensors-platform-strategy": "Sensors, Inc.",
  "subscription-model": "JoyJobs.ai",
  "resume-score": "JoyJobs.ai",
  "instruction-modality-study": "LightGuide",
};
export const companyHomepages: Record<string, string> = {
  "stellantis-analytical-foundation": "https://www.stellantis.com/en",
  "lightguide-ar-workflows": "https://www.lightguidesys.com/",
  "resume-ai": "https://joyjobs.ai/",
  "sensors-platform-strategy": "https://sensors-inc.com/",
  "subscription-model": "https://joyjobs.ai/",
  "resume-score": "https://joyjobs.ai/",
  "instruction-modality-study": "https://www.lightguidesys.com/",
};
export const nextProjects: Record<string, string> = {
  "resume-ai": "subscription-model",
  "subscription-model": "resume-score",
  "resume-score": "resume-ai",
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
