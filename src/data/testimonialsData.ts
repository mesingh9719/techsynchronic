import type { Testimonial } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    author: 'David Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Logistics Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    content: 'TechSynchronic transformed our entire 14-warehouse supply chain operations. Their engineers delivered a custom ERP with Laravel and FastAPI that eliminated over $400k in inventory waste within the first 6 months. Unbelievable precision and speed.',
    metricsResult: '$420,000 Saved in Year 1',
    industry: 'Logistics & Supply Chain'
  },
  {
    id: '2',
    author: 'Elena Rostova',
    role: 'VP of Sales & Growth',
    company: 'FinEdge Advisory Group',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    content: 'Our sales team went from missing half their inbound prospects to responding within 90 seconds. The custom Node.js CRM TechSynchronic built with WhatsApp automation generated a 42.6% increase in closed deals. They are true software architects.',
    metricsResult: '+42.6% Sales Conversion Uplift',
    industry: 'Financial Advisory'
  },
  {
    id: '3',
    author: 'Marcus Sterling',
    role: 'Chief Executive Officer',
    company: 'Nexus Health Networks',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    content: 'Handling monthly payroll for 3,500 healthcare workers across complex shift schedules used to take an entire week. TechSynchronic engineered our custom HRMS with biometric integration — now our payroll runs in 15 minutes with 0.00% error rate.',
    metricsResult: '98% Reduction in Payroll Processing Time',
    industry: 'Healthcare Enterprise'
  },
  {
    id: '4',
    author: 'Sarah Jenkins',
    role: 'Head of Engineering',
    company: 'HyperPay FinTech',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    content: 'Finding a software agency that genuinely understands low-level Linux VPS optimization, database replication, and zero-downtime CI/CD is rare. TechSynchronic handled our server infrastructure flawlessly. 99.999% uptime without a single hiccup.',
    metricsResult: '99.999% Uptime Achieved',
    industry: 'FinTech'
  }
];
