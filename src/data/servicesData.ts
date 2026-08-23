import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'crm',
    title: 'Custom CRM Development',
    shortDesc: 'Automate sales pipelines, lead routing, customer lifecycle tracking, and omnichannel communications.',
    fullDesc: 'We architect bespoke CRM engines tailored to your precise sales workflows. Eliminate bloated off-the-shelf subscriptions with high-speed, secure, automated sales pipelines, lead scoring, telephony integration, and real-time revenue analytics.',
    iconName: 'Users',
    badge: 'High ROI Automation',
    features: [
      'Omnichannel lead capture & automatic pipeline routing',
      'Automated follow-up sequences via WhatsApp, SMS & Email',
      'Custom deal stages, weighted forecasting & KPI analytics',
      'VoIP, WhatsApp Business API & payment gateway sync',
      'Role-based permissions & audit trail compliance'
    ],
    architecturePoints: [
      'Microservice-based real-time event streaming via WebSockets',
      'PostgreSQL / MySQL with indexed multi-tenant partitions',
      'REST & GraphQL APIs for third-party ERP / marketing sync'
    ],
    techStack: ['Node.js', 'React.js', 'PostgreSQL', 'FastAPI', 'Tailwind CSS'],
    typicalTimeline: '4 - 8 Weeks',
    deliverables: [
      'Web & Mobile Responsive Dashboard',
      'Role-Based Admin Console',
      'API Integration Layer',
      'Automated Webhook Triggers'
    ]
  },
  {
    id: 'erp',
    title: 'Enterprise ERP Solutions',
    shortDesc: 'Centralized business intelligence connecting multi-warehouse inventory, accounting, and supply chains.',
    fullDesc: 'End-to-end Enterprise Resource Planning software engineered for high-concurrency operations. Consolidate your inventory, purchasing, double-entry financial ledgers, vendor management, and multi-location warehouses into a synchronized single source of truth.',
    iconName: 'Building2',
    badge: 'Enterprise Scalable',
    features: [
      'Multi-warehouse real-time inventory & batch tracking',
      'Automated double-entry accounting, invoicing & tax compliance',
      'Procurement, PO workflows & vendor rating scoring',
      'Custom role dashboards for C-suite, operations, & logistics',
      'Real-time automated PDF generation & barcode/QR scanning'
    ],
    architecturePoints: [
      'ACID-compliant transactional database clustering (PostgreSQL)',
      'Asynchronous task workers (Celery / Redis / BullMQ) for batch jobs',
      'Sub-100ms reporting engine with cached materialized views'
    ],
    techStack: ['Python', 'FastAPI', 'Laravel', 'React.js', 'PostgreSQL', 'VPS Hosting'],
    typicalTimeline: '8 - 16 Weeks',
    deliverables: [
      'Multi-Department ERP Suite',
      'Financial Ledger & GST/Tax Modules',
      'Barcode/QR Logistics Subsystem',
      'Automated Daily Audit Engine'
    ]
  },
  {
    id: 'hrms',
    title: 'Smart HRMS Platforms',
    shortDesc: 'Automated payroll processing, biometric attendance, appraisal pipelines, and employee self-service.',
    fullDesc: 'Streamline workforce operations with a modern Human Resource Management System. From one-click tax-deductible payroll runs to automated biometric clock-ins, leave approval workflows, and OKR-driven performance reviews.',
    iconName: 'UserCheck',
    badge: 'Zero-Error Payroll',
    features: [
      'One-click multi-tier payroll calculation & direct bank payout format',
      'Biometric device integration, geo-fenced mobile attendance & shifts',
      'Custom leave policies, holiday calendars & auto-accrual engines',
      'Employee self-service portal (Payslips, tax declarations, claims)',
      'Performance reviews, OKR tracking & onboarding workflows'
    ],
    architecturePoints: [
      'Zero-trust encrypted employee personal & salary data vault',
      'Biometric hardware API listeners with offline caching',
      'Automated background scheduled cron jobs for leave resets'
    ],
    techStack: ['Node.js', 'React.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
    typicalTimeline: '4 - 10 Weeks',
    deliverables: [
      'Employee Self-Service App',
      'Automated Payroll & Tax Generator',
      'Biometric Sync Listener Module',
      'HR Analytics & Attrition Predictor'
    ]
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    shortDesc: 'Bespoke web applications, high-throughput microservices, and AI-enabled SaaS architectures.',
    fullDesc: 'Turn unique competitive advantages into proprietary software assets. We design, build, and scale custom web platforms, B2B SaaS applications, internal workflow automations, and Vector DB-powered intelligent semantic search systems from the ground up.',
    iconName: 'Code2',
    badge: 'Proprietary IP',
    features: [
      'Modern microservices & modular monolithic architectures',
      'AI & Vector DB integration for semantic search & RAG workflows',
      'High-concurrency API engineering with rate limiting & security',
      'Multi-tenant SaaS architectures with custom subdomain routing',
      'Payment gateway, Stripe, Razorpay & Escrow billing integration'
    ],
    architecturePoints: [
      'FastAPI / Node.js high-performance backend pipelines',
      'Vector DB embeddings (pgvector / Chroma) for cognitive search',
      'Redis in-memory caching for sub-20ms dynamic response times'
    ],
    techStack: ['Python', 'FastAPI', 'Node.js', 'React.js', 'Vector DB', 'MongoDB'],
    typicalTimeline: '6 - 12 Weeks',
    deliverables: [
      'Full-Stack Production Application',
      'Interactive Swagger API Documentation',
      'Automated Test Suite (Unit & E2E)',
      'Complete Source Code Ownership'
    ]
  },
  {
    id: 'cms',
    title: 'Headless & Custom CMS',
    shortDesc: 'High-speed WordPress, custom Laravel CMS, and headless content architectures for modern teams.',
    fullDesc: 'Eliminate content bottlenecks with lightning-fast CMS solutions. Whether you require tailored WordPress enterprise setups, custom Laravel CMS backends, or headless React frontends, we deliver blazingly fast load times and intuitive editing interfaces.',
    iconName: 'LayoutTemplate',
    badge: 'Sub-Second Speeds',
    features: [
      'Custom block-based visual page builders without bloatware',
      'Headless CMS architectures delivering instantaneous page loads',
      'Automated SEO schema markup, OpenGraph & Core Web Vitals optimization',
      'Multilingual localization & localized currency switching',
      'Seamless media asset CDN management & auto WebP conversion'
    ],
    architecturePoints: [
      'Next-gen static-site generation & edge cache invalidation',
      'Custom WordPress REST / GraphQL headless endpoints',
      'Optimized MySQL database indexing for million-post catalogs'
    ],
    techStack: ['WordPress', 'PHP', 'Laravel', 'React.js', 'MySQL', 'Tailwind CSS'],
    typicalTimeline: '3 - 6 Weeks',
    deliverables: [
      'Custom Theme & Admin Dashboard',
      'SEO & Performance Tuning Pack',
      'Automated Image Optimization Pipeline',
      'Content Migration & 301 Redirect Map'
    ]
  },
  {
    id: 'devops',
    title: 'Server Handling & DevOps',
    shortDesc: 'Zero-downtime VPS deployment, automated CI/CD pipelines, security hardening, and 24/7 monitoring.',
    fullDesc: 'Rock-solid infrastructure engineering to ensure 99.99% uptime. We handle Linux VPS provisioning, Nginx load balancing, SSL encryption, automated GitHub Actions CI/CD pipelines, Dockerized container deployments, and proactive server health monitoring.',
    iconName: 'ServerCog',
    badge: '99.99% Uptime SLA',
    features: [
      'Production VPS setup (Ubuntu / Debian / AlmaLinux) & OS hardening',
      'Nginx reverse proxy, HTTP/3, SSL auto-renewal & DDoS mitigation',
      'Automated CI/CD pipelines for zero-downtime rolling releases',
      'Automated daily off-site encrypted database backups & disaster recovery',
      'Prometheus, Grafana & uptime monitoring with instant Slack/Email alerts'
    ],
    architecturePoints: [
      'Docker Compose & containerized isolated production microservices',
      'Fail2Ban, UFW firewall, SSH key enforcement & kernel tuning',
      'Database replication, connection pooling & query cache optimization'
    ],
    techStack: ['VPS Hosting', 'Node.js', 'Python', 'PHP', 'PostgreSQL', 'MySQL'],
    typicalTimeline: '1 - 3 Weeks',
    deliverables: [
      'Hardened Production VPS Cluster',
      'Automated CI/CD Deployment Scripts',
      'Off-Site Backup & Disaster Playbook',
      'Real-Time Uptime Monitoring Dashboard'
    ]
  }
];
