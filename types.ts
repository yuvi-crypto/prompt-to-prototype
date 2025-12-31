export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isLocked?: boolean;
}

export interface FeatureSectionProps {
  title: string;
  description: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
  isWideImage?: boolean; // For the timeline diagram
}

export interface Testimonial {
  id: number;
  company: string;
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
}