export type WorkCategory =
  | 'Brand Identity'
  | 'Print & Editorial'
  | 'Packaging'
  | 'Poster & Type'
  | 'Digital & Social';

export const WORK_CATEGORIES: WorkCategory[] = [
  'Brand Identity',
  'Print & Editorial',
  'Packaging',
  'Poster & Type',
  'Digital & Social',
];

export interface PortfolioWork {
  id: string;
  title: string;
  italicWord?: string;
  category: WorkCategory;
  client: string;
  year: string;
  role: string;
  summary: string;
  story: string;
  deliverables: string[];
  imageUrl: string;
  awardBadge?: boolean;
  awardLabel?: string;
  isPlaceholder: boolean;
  keepColorInPreview?: boolean;
  externalLink?: string;
  createdAt: number;
}
