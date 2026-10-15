export type Language = 'en' | 'es';

export interface LocalizedString {
  en: string;
  es: string;
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: LocalizedString;
  description: LocalizedString;
  story: LocalizedString;
  founders: string[];
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    city: string;
    state: string;
    serviceArea: LocalizedString;
  };
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    googleReviews: string;
  };
  hours: {
    day: LocalizedString;
    time: string;
  }[];
  stats: {
    rating: number;
    reviewCount: number;
    yearsExperience: string;
    satisfactionRate: string;
  };
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  features: LocalizedString[];
  icon: string;
  image: string;
  category: 'interior' | 'exterior' | 'specialty' | 'commercial';
}

export interface PortfolioItem {
  id: string;
  title: LocalizedString;
  category: 'interior' | 'exterior' | 'roof' | 'pressure-washing' | 'commercial';
  location: string;
  image: string;
  beforeImage?: string;
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date?: string;
  comment: LocalizedString;
  serviceMentioned?: LocalizedString | string;
}
