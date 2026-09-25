/**
 * KAIZEN Studio Image Registry
 * Maps website imagery directly to the 6 newly uploaded high-resolution studio photos:
 * - 1000088189-150kb.jpg (1200x800 - Landscape)
 * - 1000088190-150kb.jpg (1200x800 - Landscape)
 * - 1000088191-150kb.jpg (867x1300 - Portrait / Arch)
 * - 1000088192-150kb.jpg (1197x1300 - Square / Portrait Arch)
 * - 1000088193-150kb.jpg (1200x960 - Landscape / Arch)
 * - 1000088194-150kb.jpg (867x1300 - Portrait / Arch)
 */

export interface ImageSlot {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export const STUDIO_IMAGES: Record<string, ImageSlot> = {
  // Page Heroes
  homeHero: {
    src: '/images/1000088194-150kb.jpg',
    alt: 'KAIZEN Pilates Studio reformers and natural sunlit interior',
  },
  whoHero: {
    src: '/images/1000088190-150kb.jpg',
    alt: 'Studio space and architectural harmony at KAIZEN',
  },
  scheduleHero: {
    src: '/images/1000088189-150kb.jpg',
    alt: 'Pilates reformer equipment and serene studio setting',
  },
  policiesHero: {
    src: '/images/1000088190-150kb.jpg',
    alt: 'Mindful studio environment and practice discipline',
  },
  gettingStartedHero: {
    src: '/images/1000088189-150kb.jpg',
    alt: 'Welcoming first-time students into KAIZEN reformer studio',
  },
  contactHero: {
    src: '/images/1000088190-150kb.jpg',
    alt: 'KAIZEN studio entrance and serene interior in Lorton, VA',
  },

  // Home Page Content
  homeIntro: {
    src: '/images/1000088191-150kb.jpg',
    alt: 'Intentional movement and reformer carriage alignment',
  },
  homePractice: {
    src: '/images/1000088190-150kb.jpg',
    alt: 'Precision core engagement and mindful breathwork at KAIZEN',
  },
  homeStudio: {
    src: '/images/1000088193-150kb.jpg',
    alt: 'Clean lines, warm timbers, and architectural arches of the Lorton studio',
  },
  homeSchedulePreview: {
    src: '/images/1000088194-150kb.jpg',
    alt: 'Intimate small-group class format in session',
  },
  homeGettingStarted: {
    src: '/images/1000088192-150kb.jpg',
    alt: 'One-on-one postural evaluation and reformer orientation',
  },
  homeCTA: {
    src: '/images/1000088189-150kb.jpg',
    alt: 'Quiet afternoon light streaming across KAIZEN reformers',
  },

  // Who We Are Page Content
  whoStory: {
    src: '/images/1000088191-150kb.jpg',
    alt: 'The philosophy and practice of KAIZEN Pilates in Northern Virginia',
  },
  whoPhilosophy: {
    src: '/images/1000088190-150kb.jpg',
    alt: 'The philosophy of continuous, intentional refinement (Kaizen)',
  },
  whoCTA: {
    src: '/images/1000088189-150kb.jpg',
    alt: 'Experience personal movement progression at KAIZEN',
  },

  // Schedule & Policies
  scheduleSupport: {
    src: '/images/1000088193-150kb.jpg',
    alt: 'Equipment readiness and personal guidance for every booking',
  },
  policiesVisual: {
    src: '/images/1000088190-150kb.jpg',
    alt: 'Respect for the shared movement space and class punctuality',
  },

  // Getting Started
  gettingStartedFirstSession: {
    src: '/images/1000088192-150kb.jpg',
    alt: 'What to anticipate in your introductory reformer appointment',
  },

  // Contact
  contactLocation: {
    src: '/images/1000088193-150kb.jpg',
    alt: 'Studio entrance located conveniently in Lorton, VA',
  },
};
