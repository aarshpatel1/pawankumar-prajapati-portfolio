import type { PortfolioWork } from '../types/work';

export const DESIGNER_PROFILE = {
  fullName: 'Pawankumar Prajapati',
  shortMark: 'P.P.',
  role: 'Graphic Designer',
  experienceYears: 2,
  experienceHeadline: '2 years of experience',
  location: 'India · Working Worldwide',
  availability: 'Open for freelance branding, packaging & editorial commissions',
  portraitUrl: '/images/avatar-pawan.jpg',
  email: 'hello@pawankumarprajapati.design',
  socials: [
    { label: 'Behance', url: 'https://www.behance.net/' },
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
  timeline: [
    {
      period: '2025 — Present',
      title: 'Independent Graphic Designer',
      detail:
        'Partnering with emerging founders, cultural initiatives, and independent labels on visual identities, tactile packaging, and editorial layouts.',
    },
    {
      period: '2024 — 2025',
      title: 'Junior Brand & Visual Designer',
      detail:
        'Built multi-touchpoint brand systems, print collateral, social campaign templates, and production-ready packaging dielines for studio clients.',
    },
  ],
  disciplines: [
    {
      index: '01',
      title: 'Brand Identity & Logos',
      note: 'Custom wordmarks, visual systems, color & type direction, and concise brand guidelines.',
    },
    {
      index: '02',
      title: 'Packaging & Tactile Print',
      note: 'Label architecture, box dielines, paper stock selection, and print-ready mechanicals.',
    },
    {
      index: '03',
      title: 'Editorial & Publication',
      note: 'Zines, lookbooks, catalogs, and typography-driven spreads with deliberate breathing room.',
    },
    {
      index: '04',
      title: 'Posters, Type & Campaigns',
      note: 'Event key visuals, experimental poster series, and cohesive launch graphics.',
    },
  ],
  toolkit: [
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe Photoshop',
    'Figma',
    'Print Pre-Press',
    'Typography & Grid Systems',
  ],
};

/**
 * DUMMY / PLACEHOLDER WORKS
 * ---------------------------------------------------------------------------
 * Pawankumar: To permanently add your real projects in code:
 * 1. Drop your image (PNG/JPG/WebP) inside `public/images/works/`
 * 2. Replace any item below (or append a new object) and set `isPlaceholder: false`
 * 3. Or use the "+ ADD WORK" button directly on the site and click "Export JSON"!
 */
export const DUMMY_WORKS: PortfolioWork[] = [
  {
    id: 'dummy-kaveri-botanicals',
    title: 'Kaveri Botanicals',
    italicWord: 'Botanicals',
    category: 'Packaging',
    client: 'Kaveri Apothecary (Placeholder)',
    year: '2026',
    role: 'Brand Identity & Packaging',
    summary:
      'Apothecary label system and tactile cotton-paper cartons pairing quiet serif typography with ink botanical batch numbering.',
    story:
      'Dummy case study placeholder: Kaveri Botanicals needed a calm, unhurried shelf presence rooted in small-batch herbal formulations. The system centers on uncoated warm paper stocks, custom serif wordmark ligatures, and structured apothecary numbering across amber dropper bottles and outer sleeves.',
    deliverables: ['Wordmark & Monogram', 'Bottle Labels', 'Folding Carton Dielines', 'Print Specifications'],
    imageUrl: '/images/work-01-kaveri.jpg',
    awardBadge: true,
    awardLabel: 'Featured Packaging Concept',
    isPlaceholder: true,
    createdAt: 1764000001000,
  },
  {
    id: 'dummy-aarambh-zine',
    title: 'Aarambh Issue 04',
    italicWord: 'Issue 04',
    category: 'Print & Editorial',
    client: 'Aarambh Collective (Placeholder)',
    year: '2025',
    role: 'Editorial & Layout Design',
    summary:
      'An independent 64-page design and craft journal shaped around asymmetric Swiss-editorial grids and delicate ink sketches.',
    story:
      'Dummy case study placeholder: Created for a quarterly print collective exploring South Asian craft and spatial stories. Mixing expressive display serifs with disciplined caption columns gives essays, ink sketches, and archival spreads equal breathing room.',
    deliverables: ['64-Page Grid System', 'Custom Masthead', 'Cover Art Direction', 'Pre-Press Preparation'],
    imageUrl: '/images/work-02-aarambh.jpg',
    awardBadge: true,
    awardLabel: 'Editorial Craft Pick',
    isPlaceholder: true,
    createdAt: 1764000002000,
  },
  {
    id: 'dummy-monsoon-type-fest',
    title: 'Forum & Sound Series',
    italicWord: 'Sound Series',
    category: 'Poster & Type',
    client: 'Independent Cultural Series (Placeholder)',
    year: '2025',
    role: 'Poster Series & Key Visuals',
    summary:
      'Two-color risograph poster series and wayfinding badges driven by oversized serif letterforms, dusty sky ink blocks, and hand-drawn strokes.',
    story:
      'Dummy case study placeholder: A kinetic poster suite celebrating experimental typography and independent sound gatherings. Designed for affordable two-drum risograph reproduction using charcoal black and dusty sky blue ink on warm recycled paper.',
    deliverables: ['A2 Risograph Posters', 'Event Badges & Lanyards', 'Social Countdown Kit', 'Program Booklet'],
    imageUrl: '/images/work-03-monsoon.jpg',
    awardBadge: false,
    keepColorInPreview: true,
    isPlaceholder: true,
    createdAt: 1764000003000,
  },
  {
    id: 'dummy-solis-roastery',
    title: 'Solis Coffee Roasters',
    italicWord: 'Roasters',
    category: 'Brand Identity',
    client: 'Solis Micro-Roastery (Placeholder)',
    year: '2024',
    role: 'Visual Identity & Print',
    summary:
      'Modular stamp-based identity and kraft pouch packaging system crafted for a neighborhood single-origin roastery.',
    story:
      'Dummy case study placeholder: Built during year one to help a lean roastery scale SKU variety without reprinting full boxes. A single master sleeve pairs with rubber-stamped origin cards, tactile seal stickers, and clean roast-profile typography.',
    deliverables: ['Logo & Stamp Emblem', 'Kraft Bag System', 'Origin Tasting Cards', 'Menu Board Typography'],
    imageUrl: '/images/work-04-solis.jpg',
    awardBadge: false,
    isPlaceholder: true,
    createdAt: 1764000004000,
  },
];
