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
    title: "Sunset study",
    year: "2026",
    medium: "Oil",
    dimensions: "20 × 16 in.",
    featured: true,
    alt: "An oil painting of a vivid red and orange sunset beneath violet and grey clouds, above a dark treeline",
    description: "Bands of coral, orange, and gold settle behind a dark treeline, beneath a sweeping sky of violet and grey. Subtle pareidolia is hidden throughout the painting: familiar forms emerge within the shifting shapes and textures as you look more closely.",
  },
  {
    src: colorfulPortrait,
    title: "Portrait in color",
    year: "2025",
    medium: "Oil",
    dimensions: "Approx. 8 × 10 in.",
    alt: "A portrait formed from many small, colorful brushstrokes",
    description: "Small marks of turquoise, blue, pink, and yellow gather into a face. The shifting warm and cool colors give the portrait a sense of movement while the eyes hold the composition together.",
  },
  {
    src: butterfly,
    title: "Butterfly and flowers",
    year: "2025",
    medium: "Oil",
    dimensions: "Approx. 8 × 10 in.",
    alt: "A blue butterfly among orange flowers against a yellow and green background",
    description: "A blue butterfly sits among orange flowers and a field of yellow and green. The cooler blue wings create a focal point within the warm colors, with visible brushstrokes adding texture across the surface.",
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
