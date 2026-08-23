import type { TechItem } from '../types';

export const techStackData: TechItem[] = [
  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    icon: 'Layers',
    description: 'High-concurrency asynchronous runtime for real-time WebSocket apps and scalable APIs.',
    proficiency: 98,
    useCase: 'Real-time CRM sockets, event-driven microservices & API gateways',
    tag: 'Runtime'
  },
  {
    name: 'Python',
    category: 'backend',
    icon: 'Cpu',
    description: 'Powerhouse for backend logic, algorithmic data pipelines, automation, and AI integrations.',
    proficiency: 96,
    useCase: 'ERP core calculations, data transformations & AI/ML model orchestration',
    tag: 'Language'
  },
  {
    name: 'FastAPI',
    category: 'backend',
    icon: 'Zap',
    description: 'Ultra-fast asynchronous Python web framework with auto-generated OpenAPI documentation.',
    proficiency: 95,
    useCase: 'High-throughput REST APIs, microservices & Vector search endpoints',
    tag: 'Framework'
  },
  {
    name: 'Laravel',
    category: 'backend',
    icon: 'Flame',
    description: 'Robust enterprise PHP framework with elegant MVC architecture, Eloquent ORM, and queue workers.',
    proficiency: 97,
    useCase: 'Complex ERPs, financial invoicing portals & structured business apps',
    tag: 'Enterprise Framework'
  },
  {
    name: 'PHP',
    category: 'backend',
    icon: 'FileCode',
    description: 'Modern PHP 8.3+ with JIT compilation, strict types, and battle-tested performance.',
    proficiency: 94,
    useCase: 'Enterprise web backends, CMS extensions & high-volume e-commerce',
    tag: 'Core Language'
  },

  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    icon: 'Atom',
    description: 'Component-driven UI library for fluid single-page applications and interactive dashboards.',
    proficiency: 99,
    useCase: 'Responsive admin panels, real-time analytics dashboards & CRM interfaces',
    tag: 'Frontend Engine'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'Palette',
    description: 'Utility-first CSS framework enabling bespoke, ultra-fast, and responsive design systems.',
    proficiency: 98,
    useCase: 'Pixel-perfect responsive layouts, micro-animations & dark mode theming',
    tag: 'Design System'
  },
  {
    name: 'WordPress',
    category: 'frontend',
    icon: 'Globe',
    description: 'Enterprise WordPress engineering, custom headless setups, and high-performance theme builds.',
    proficiency: 95,
    useCase: 'Content-heavy portals, high-SEO marketing hubs & custom block builders',
    tag: 'CMS Architecture'
  },

  // Databases & AI
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: 'Database',
    description: 'Advanced relational database with ACID guarantees, JSONB support, and complex querying.',
    proficiency: 98,
    useCase: 'ERP financial records, multi-tenant relational schemas & transactional audit trails',
    tag: 'Relational DB'
  },
  {
    name: 'MongoDB',
    category: 'database',
    icon: 'FolderKanban',
    description: 'Document-oriented NoSQL database optimized for high-write velocities and flexible schemas.',
    proficiency: 94,
    useCase: 'Unstructured logs, dynamic CRM custom fields & notification queues',
    tag: 'NoSQL DB'
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: 'TableProperties',
    description: 'Battle-hardened relational database engine engineered for high-availability reads and writes.',
    proficiency: 96,
    useCase: 'CMS databases, e-commerce catalogs & structured inventory tables',
    tag: 'Standard RDBMS'
  },
  {
    name: 'Vector DB',
    category: 'database',
    icon: 'Binary',
    description: 'High-dimensional vector indexing (pgvector, Chroma, Qdrant) for AI and semantic search.',
    proficiency: 92,
    useCase: 'Intelligent document search, RAG retrieval & automated recommendation engines',
    tag: 'AI Vector Index'
  },

  // DevOps & Cloud
  {
    name: 'VPS Hosting',
    category: 'devops',
    icon: 'Server',
    description: 'Custom Linux VPS provisioning (Ubuntu/Debian) with resource isolation and Nginx tuning.',
    proficiency: 97,
    useCase: 'Cost-effective high-performance servers, Nginx reverse proxy & automated SSL',
    tag: 'Infrastructure'
  }
];
