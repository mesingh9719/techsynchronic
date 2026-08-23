import type { ProcessStep, PricingPlan } from '../types';

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & System Blueprint',
    duration: 'Week 1',
    description: 'We audit your current business workflows, bottlenecks, and data schemas to produce a complete architectural specification, database ERD, and clickable wireframe prototype.',
    iconName: 'Search',
    deliverables: [
      'Comprehensive Technical Scope Document',
      'Database Schema & Architecture Diagrams',
      'Interactive Figma UI/UX Prototypes',
      'Fixed Milestone Schedule & SLA'
    ],
    tools: ['Figma', 'Draw.io', 'Postman', 'Notion']
  },
  {
    step: '02',
    title: 'Architecture & UI/UX Design',
    duration: 'Week 2 - 3',
    description: 'Designing intuitive, high-speed interfaces and microservices infrastructure tailored for role-based access, fast load times, and seamless mobile responsiveness.',
    iconName: 'Layout',
    deliverables: [
      'Production-Ready UI Component Library',
      'Design System & Dark/Light Tokens',
      'API Endpoint Specifications (Swagger)',
      'Security & Authentication Flowcharts'
    ],
    tools: ['React.js', 'Tailwind CSS', 'Storybook', 'Swagger']
  },
  {
    step: '03',
    title: 'Agile Sprints & Clean Code',
    duration: 'Week 4 - 8',
    description: 'Developing battle-tested code in 2-week bi-weekly sprints with continuous integration, unit test coverage, and transparent demo environments for your team.',
    iconName: 'Code',
    deliverables: [
      'Bi-Weekly Interactive Demo Builds',
      'Production Backend & Frontend Modules',
      'Continuous Automated Unit & E2E Tests',
      'Git Versioned Clean Repository'
    ],
    tools: ['Node.js', 'Python', 'Laravel', 'PostgreSQL', 'FastAPI']
  },
  {
    step: '04',
    title: 'QA, Security & VPS Deployment',
    duration: 'Week 9 - 10',
    description: 'Rigorous penetration testing, database index optimization, load stress testing, and zero-downtime provisioning on hardened Linux VPS clusters with SSL and backups.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Vulnerability & Penetration Report',
      'Production VPS Server Hardening',
      'Automated CI/CD Pipeline Configuration',
      'Automated Daily Off-Site Backup Setup'
    ],
    tools: ['Linux VPS', 'Nginx', 'Docker', 'GitHub Actions', 'SSL']
  },
  {
    step: '05',
    title: 'Launch, Training & SLA Support',
    duration: 'Ongoing',
    description: 'Seamless go-live migration, comprehensive video walkthrough training for your staff, 24/7 server monitoring, and continuous feature scaling.',
    iconName: 'Rocket',
    deliverables: [
      'Staff Training & Video Documentation',
      '24/7 Server Health Monitoring Alerts',
      'Guaranteed Response SLA Support',
      'Quarterly Performance & Security Audits'
    ],
    tools: ['Grafana', 'Prometheus', 'Slack Webhooks', 'UptimeRobot']
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'fixed',
    name: 'Fixed-Scope Project',
    tagline: 'Ideal for well-defined CRM, HRMS, CMS or custom MVP deployments.',
    priceModel: 'Custom Milestone Quote',
    bestFor: 'Startups & Mid-Market businesses with clearly outlined specifications.',
    features: [
      'Fixed price, timeline & guaranteed deliverables',
      'Complete UI/UX design & responsive frontend',
      'Custom backend APIs & database architecture',
      'Automated test coverage & QA verification',
      'Linux VPS deployment & SSL setup',
      '30 Days complimentary post-launch bug warranty',
      '100% Full source code ownership'
    ],
    timeline: '4 - 10 Weeks',
    ctaText: 'Get Project Scope & Quote'
  },
  {
    id: 'dedicated',
    name: 'Dedicated Agile Squad',
    tagline: 'Scale your engineering firepower with full-stack senior developers.',
    priceModel: 'Monthly Dedicated Retainer',
    recommended: true,
    bestFor: 'Growing enterprises needing continuous product feature development & ERP scaling.',
    features: [
      'Dedicated Senior Full-Stack Engineers & Project Lead',
      'Direct Slack/Teams integration & daily standups',
      'Flexible sprint roadmap with dynamic backlog prioritization',
      'High-velocity code reviews & CI/CD deployment',
      'Zero recruitment or overhead friction',
      'Bi-weekly milestone demonstrations',
      'Immediate scaling up or down with 2-week notice'
    ],
    timeline: 'Ongoing Monthly',
    ctaText: 'Hire a Dedicated Squad'
  },
  {
    id: 'devops-sla',
    name: 'Managed Cloud & DevOps SLA',
    tagline: '24/7 server uptime, security patching, and infrastructure management.',
    priceModel: 'Monthly Managed SLA',
    bestFor: 'Companies needing bulletproof server reliability, backups, and security monitoring.',
    features: [
      'Linux VPS provisioning, Nginx tuning & SSL rotation',
      'Automated daily off-site encrypted database snapshots',
      '24/7 real-time monitoring with sub-15 min alert response',
      'Security patch updates & Fail2ban firewall hardening',
      'Database index optimization & query profiling',
      'Disaster recovery drill execution',
      'Dedicated DevOps engineer on call'
    ],
    timeline: 'Annual / Monthly Retainer',
    ctaText: 'Secure Your Infrastructure'
  }
];
