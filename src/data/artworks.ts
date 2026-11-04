import colorfulPortrait from "../assets/artworks/painting-colorful-portrait.jpg";
import butterfly from "../assets/artworks/painting-butterfly.jpg";
import dogPortrait from "../assets/artworks/painting-dog-portrait.jpg";
import dogOnEasel from "../assets/artworks/painting-dog-on-easel.jpg";
import sunset from "../assets/artworks/painting-sunset-pareidolia.jpg";
import type { ImageMetadata } from "astro";

type Artwork = { src: ImageMetadata; title: string; year: string; medium: string; dimensions: string; alt: string; description: string; featured?: boolean };
// Descriptive titles and descriptions can be refined here.
export const artworks: Artwork[] = [
  {
    src: sunset,
    title: "Between Earth and Sky",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "20 × 16 in.",
    featured: true,
    alt: "An oil painting of a vivid red and orange sunset beneath violet and grey clouds, above a dark treeline",
    description: "A fiery sunset unfolds beneath a sweeping expanse of violet and slate-gray clouds, casting the landscape into deep silhouette. Rich crimson and amber hues contrast with the cool, muted sky, creating a dramatic interplay of light, color, and atmosphere.\n\nWoven throughout the composition, subtle figures, geometric patterns, and cryptic symbols emerge from the seemingly organic forms of clouds and foliage. Through pareidolia, the painting explores the delicate boundary between observation and imagination, inviting viewers to question where nature ends and perception begins.",
  },
  {
    src: colorfulPortrait,
    title: "Fragments of Consciousness",
    year: "2025",
    medium: "Oil on canvas",
    dimensions: "Approx. 8 × 10 in.",
    alt: "A portrait formed from many small, colorful brushstrokes",
    description: "A human face emerges from a kaleidoscopic field of color, its features simultaneously defined and dissolved by hundreds of vibrant, individual brushstrokes. Rich blues, violets, and turquoise intertwine with flashes of crimson, gold, and emerald, creating a rhythmic interplay of light, texture, and form.\n\nSuspended between portraiture and abstraction, the composition explores the fragmented nature of perception and identity. From apparent chaos emerges a familiar human presence, inviting the viewer to consider how countless individual fragments converge into a unified sense of self.",
  },
  {
    src: butterfly,
    title: "A Moment in Bloom",
    year: "2025",
    medium: "Oil on canvas",
    dimensions: "10 × 8 in.",
    alt: "A blue butterfly among orange flowers against a yellow and green background",
    description: "A fleeting encounter suspended in a sea of color. A butterfly, rendered in rich cobalt, indigo, and violet, rests amid an exuberant field of fiery orange and golden blossoms. The deliberate interplay of complementary colors creates a striking visual tension, while thick, expressive brushstrokes blur the boundaries between realism and abstraction.\n\nBalancing the delicacy of nature with the physicality of impasto, the composition captures a brief moment of stillness within a vibrant, restless world.",
  },
  {
    src: dogPortrait,
    title: "Dog portrait",
    year: "2026",
    medium: "Oil",
    dimensions: "Approx. 8 × 10 in.",
    alt: "A warm-toned dog portrait against a dark blue background",
    description: "Warm orange, rust, and cream tones shape a dog's face against a deep blue background. The close framing draws attention to the eyes and expression, while broad changes in color describe the fur and light.",
  },
  {
    src: dogOnEasel,
    title: "White dog study",
    year: "2026",
    medium: "Oil",
    dimensions: "Approx. 8 × 10 in.",
    alt: "An oil painting of a small white dog against a green background, resting on an easel",
    description: "A small white dog sits against a green background. Soft edges and broad brushwork keep the focus on the dog's posture and expression, with small warm accents around the face.",
  },
];
