import { AppWindow, Blocks, PenTool, Smartphone } from 'lucide-react';

export const services = [
  {
    id: 'custom-software', number: '01', name: 'Custom Software', title: 'Custom business software', icon: Blocks,
    description: 'Bring your people, processes, and data together with software that works the way your business does.',
    examples: ['CRM & ERP systems', 'Business automation', 'LMS & management tools'],
    detail: 'When spreadsheets and disconnected tools start slowing you down, a purpose-built system can make everyday work simpler. We build around your workflows, so your team can spend less time on repetitive tasks.',
    offerings: ['Customer relationship management (CRM)', 'Enterprise resource planning (ERP)', 'Learning management systems (LMS)', 'E-commerce and business management platforms', 'Process automation and system integrations'],
    fit: 'You need better visibility into your operations, fewer manual steps, or a system your existing tools can’t provide.',
  },
  {
    id: 'web-development', number: '02', name: 'Web Development', title: 'Websites & web applications', icon: AppWindow,
    description: 'From your first impression online to the platform your customers use every day. Fast, responsive, and easy to use.',
    examples: ['Business websites', 'Web apps & SaaS', 'Dashboards & CMS'],
    detail: 'Give your business a clear online presence or turn a product idea into a useful web application. We connect thoughtful interfaces with the systems and content tools that keep your business running.',
    offerings: ['Business websites and landing pages', 'Custom web applications and customer portals', 'SaaS product development', 'Dashboards and admin panels', 'Content management systems (CMS)'],
    fit: 'You’re launching a business, building an online product, or replacing a website that no longer meets your needs.',
  },
  {
    id: 'ui-ux-design', number: '03', name: 'UI/UX Design', title: 'UI/UX & web design', icon: PenTool,
    description: 'Make complex things feel simple. Clear, thoughtful digital experiences built around the people who use them.',
    examples: ['Product & website design', 'Responsive interfaces', 'Website redesigns'],
    detail: 'A good interface helps people find what they need and take the next step with confidence. We work through user journeys, structure, and interaction details before bringing a consistent visual system to life.',
    offerings: ['Website and product UI/UX design', 'User journeys, wireframes, and prototypes', 'Responsive desktop and mobile layouts', 'User experience improvements', 'Website redesign and modernization'],
    fit: 'Your website feels dated, customers struggle to use your product, or you need to shape a new idea before development.',
  },
  {
    id: 'mobile-apps', number: '04', name: 'Mobile App Development', title: 'Android & iOS applications', icon: Smartphone,
    description: 'Put your business in your customers’ hands with purposeful mobile apps and the backend to support them.',
    examples: ['Android & iOS', 'Cross-platform apps', 'Backend & APIs'],
    detail: 'Support customers on the go or give your team the tools they need in the field. We design the mobile experience and build the backend connections that make it work with your wider business.',
    offerings: ['Android application development', 'iOS application development', 'Cross-platform mobile applications', 'Mobile backend and API development', 'Integration with existing business systems'],
    fit: 'Your customers need a mobile experience, your team works away from a desk, or your service is ready for an app.',
  },
] as const;
