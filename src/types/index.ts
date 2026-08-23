export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
  architecturePoints: string[];
  techStack: string[];
  typicalTimeline: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'devops';
  icon: string;
  description: string;
  proficiency: number;
  useCase: string;
  tag: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'crm' | 'erp' | 'hrms' | 'custom' | 'cms' | 'devops';
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  metricsResult: string;
  industry: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  iconName: string;
  deliverables: string[];
  tools: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceModel: string;
  recommended?: boolean;
  bestFor: string;
  features: string[];
  timeline: string;
  ctaText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
