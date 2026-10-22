export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  location?: string;
  date?: string;
  photographer?: string;
}

export interface MilestoneItem {
  id: string;
  timeLabel: string;
  title?: string;
  content: string;
  subContent?: string;
  images?: GalleryImage[];
}

export interface TimelinePhase {
  title: string;
  subtitle?: string;
  description?: string;
  milestones: MilestoneItem[];
}

export interface ArchitecturalSpot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
  icon?: string;
}
