import type { CaseStudy } from '../types';

export const portfolioData: CaseStudy[] = [
  {
    id: 'auraflow-erp',
    title: 'AuraFlow: Multi-Warehouse ERP & Supply Chain Automation',
    client: 'Apex Logistics & Manufacturing Group',
    industry: 'Supply Chain & Manufacturing',
    category: 'erp',
    summary: 'A unified enterprise ERP orchestrating 14 warehouses, automated purchase orders, and real-time ledger accounting for $85M annual inventory flow.',
    challenge: 'Apex was struggling with disconnected legacy spreadsheets across 14 distribution centers, leading to 18% inventory discrepancies and delayed shipments.',
    solution: 'Engineered a real-time Laravel + FastAPI microservices ERP with PostgreSQL multi-master replication, barcode scanning mobile interface, and automated low-stock reordering.',
    metrics: [
      { label: 'Inventory Discrepancy', value: '< 0.2%' },
      { label: 'Dispatch Speed', value: '+320%' },
      { label: 'Annual Cost Saved', value: '$420,000' }
    ],
    techStack: ['Laravel', 'FastAPI', 'PostgreSQL', 'React.js', 'VPS Hosting'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Zero-latency real-time stock sync across 14 warehouses',
      'Automated GST/tax invoice calculation & PDF generation',
      'Integrated vendor scorecards with predictive lead time analytics'
    ]
  },
  {
    id: 'omnisync-crm',
    title: 'OmniSync CRM: Intelligent Sales Pipeline & Multi-Channel Lead Engine',
    client: 'FinEdge Global Advisory',
    industry: 'Financial Services & Real Estate',
    category: 'crm',
    summary: 'Custom high-concurrency CRM platform managing 500,000+ monthly leads with automated WhatsApp messaging, VoIP routing, and commission tracking.',
    challenge: 'FinEdge was losing 35% of qualified inbound leads due to manual allocation delays and disconnected communication tools.',
    solution: 'Built a customized Node.js + React.js CRM with WebSocket live updates, AI-assisted lead scoring, and instant 1-click WhatsApp / VoIP telephony dispatching.',
    metrics: [
      { label: 'Lead Response Time', value: 'from 45m to 90s' },
      { label: 'Conversion Rate', value: '+42.6%' },
      { label: 'Daily Leads Processed', value: '25,000+' }
    ],
    techStack: ['Node.js', 'React.js', 'PostgreSQL', 'Tailwind CSS', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Automated round-robin and performance-weighted lead assignment',
      'Integrated WhatsApp Business API and automated drip campaigns',
      'Comprehensive agent activity heatmaps and audit trail records'
    ]
  },
  {
    id: 'talentpulse-hrms',
    title: 'TalentPulse: Enterprise Payroll, Biometric Attendance & HRMS',
    client: 'Nexus Healthcare Networks',
    industry: 'Healthcare & Staffing (3,500+ Staff)',
    category: 'hrms',
    summary: 'A secure, biometric-integrated HR platform automating shift scheduling, leave policies, and $4.2M monthly error-free payroll disbursements.',
    challenge: 'Managing 24/7 rotating hospital shifts and calculating overtime for 3,500 healthcare workers required 6 full days of manual payroll auditing each month.',
    solution: 'Constructed an automated Node.js + React HRMS with hardware biometric sync, geo-fenced mobile check-ins, automated tax calculations, and instant bank payout format generation.',
    metrics: [
      { label: 'Payroll Processing Time', value: 'from 6 Days to 15 Mins' },
      { label: 'Payroll Error Rate', value: '0.00%' },
      { label: 'Staff Adoption Rate', value: '99.4%' }
    ],
    techStack: ['Node.js', 'MongoDB', 'React.js', 'Tailwind CSS', 'VPS Hosting'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Hardware biometric attendance listeners with offline fallback',
      'Automated statutory compliance, PF, ESIC and tax deductions',
      'Self-service employee portal for leave requests and payslips'
    ]
  },
  {
    id: 'strata-ai-custom',
    title: 'Strata AI: Cognitive Vector Knowledge Base & Document Intelligence',
    client: 'Lexis Legal Partners',
    industry: 'Legal & Enterprise Compliance',
    category: 'custom',
    summary: 'Bespoke custom software powered by Vector DB embeddings and FastAPI to search across 2M+ legal precedents in sub-second queries.',
    challenge: 'Attorneys spent 12+ hours per case manually searching through unstructured PDF archives and court transcripts.',
    solution: 'Designed and deployed a high-speed Python FastAPI backend with Vector DB semantic search, pgvector indexing, and an intuitive React interface with cited references.',
    metrics: [
      { label: 'Search Query Latency', value: '< 180ms' },
      { label: 'Research Time Saved', value: '75%' },
      { label: 'Documents Indexed', value: '2,200,000+' }
    ],
    techStack: ['Python', 'FastAPI', 'Vector DB', 'PostgreSQL', 'React.js'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Sub-200ms semantic similarity matching across millions of embeddings',
      'Role-based granular access control for sensitive confidential documents',
      'Full exportable audit reports with highlighted source citations'
    ]
  },
  {
    id: 'velocity-cms',
    title: 'VelocityCMS: Headless Global Editorial & Media Publishing Engine',
    client: 'TechChronicle Media Global',
    industry: 'Digital Publishing & Media',
    category: 'cms',
    summary: 'A headless WordPress + React publishing architecture handling 15M monthly pageviews with a 98/100 Google Lighthouse Core Web Vitals score.',
    challenge: 'Old monolithic WordPress site crashed during breaking news spikes and scored 34 on mobile PageSpeed, hurting ad revenues.',
    solution: 'Architected a decoupled headless WordPress backend with an ultra-optimized React.js + Tailwind frontend, edge CDN caching, and automated WebP media pipelines.',
    metrics: [
      { label: 'Lighthouse Performance', value: '99 / 100' },
      { label: 'Page Load Time', value: '0.42s' },
      { label: 'Ad Revenue Uplift', value: '+58%' }
    ],
    techStack: ['WordPress', 'PHP', 'React.js', 'Tailwind CSS', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Edge CDN invalidation engine with 99.9% cache hit ratio',
      'Custom visual block builder for editorial staff with zero code needed',
      'Instant AMP & structured JSON-LD schema generation for top SEO'
    ]
  },
  {
    id: 'cloudfortress-devops',
    title: 'CloudFortress: High-Availability VPS Clustering & CI/CD Hardening',
    client: 'HyperPay FinTech Systems',
    industry: 'Payment Processing & FinTech',
    category: 'devops',
    summary: 'Hardened Linux VPS cluster with Nginx load balancing, automated GitHub Actions CI/CD, and 99.999% uptime for transaction processing.',
    challenge: 'HyperPay experienced periodic downtime during software deployments and needed bank-grade server hardening and instant disaster failover.',
    solution: 'Configured a dual-node active-passive VPS cluster with Nginx reverse proxy, automated SSL cert rotation, automated encrypted hourly backups, and blue-green deployments.',
    metrics: [
      { label: 'System Uptime SLA', value: '99.999%' },
      { label: 'Deployment Downtime', value: '0.00s' },
      { label: 'Backup Recovery Time', value: '< 4 Mins' }
    ],
    techStack: ['VPS Hosting', 'Node.js', 'PostgreSQL', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Automated GitHub Actions CI/CD with zero-downtime rolling deploys',
      'Fail2ban intrusion prevention & strict UFW firewall configuration',
      'Automated off-site hourly database snapshots with encryption'
    ]
  }
];
