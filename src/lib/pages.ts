export const pages = {
  home: { id: 'home', path: '/', title: 'TechSynchronic | Custom Software, Web & Mobile Development', description: 'Custom software built around your business. TechSynchronic designs and develops business software, websites, web applications, and mobile apps.' },
  services: { id: 'services', path: '/services/', title: 'Software, Web, UI/UX & Mobile Development Services | TechSynchronic', description: 'Explore custom CRM and ERP software, websites, SaaS applications, UI/UX design, and Android and iOS development from TechSynchronic.' },
  about: { id: 'about', path: '/about/', title: 'About TechSynchronic | Software Built Around Your Business', description: 'Meet TechSynchronic: a software development company focused on practical solutions, thoughtful design, maintainable code, and clear communication.' },
  contact: { id: 'contact', path: '/contact/', title: 'Discuss Your Project | TechSynchronic', description: 'Tell TechSynchronic about your software, website, design, or mobile app project. Share your requirements and start a conversation about the right solution.' },
  'not-found': { id: 'not-found', path: '/404.html', title: 'Page Not Found | TechSynchronic', description: 'Find your way back to TechSynchronic’s software development services.' },
} as const;
export type PageId = keyof typeof pages;
export function getPage(pathname: string) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return Object.values(pages).find(page => (page.path.replace(/\/+$/, '') || '/') === path) ?? pages['not-found'];
}
