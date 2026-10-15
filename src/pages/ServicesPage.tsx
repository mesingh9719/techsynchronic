import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/services';
import { ProjectCTA } from '../components/common/ProjectCTA';
import { Reveal } from '../components/animation/Reveal';
export function ServicesPage() {
  return <>
    <Reveal as="section" className="container page-intro" staggerChildren><p className="eyebrow" data-reveal-item>OUR SERVICES</p><h1 data-reveal-item>Different challenges.<br /><span>The right solution.</span></h1><p className="lead" data-reveal-item>A new product. A better customer experience. A simpler way to work. We bring design and development together to help you get there.</p><nav data-reveal-item className="service-jump-links" aria-label="Service categories">{services.map(service => <a href={`#${service.id}`} key={service.id}>{service.name}<ArrowDown size={15} aria-hidden="true" /></a>)}</nav></Reveal>
    <div className="container service-details">{services.map(service => <Reveal as="section" className="service-detail" id={service.id} key={service.id} aria-labelledby={`${service.id}-title`}>
      <div className="service-detail-intro"><div className="detail-label"><service.icon size={23} strokeWidth={1.5} aria-hidden="true" /><span>SERVICE / {service.number}</span></div><h2 id={`${service.id}-title`}>{service.title}</h2><p>{service.detail}</p><a className="text-link" href={`/contact/?service=${service.id}`}>Discuss your {service.id === 'ui-ux-design' ? 'design' : service.id === 'mobile-apps' ? 'mobile app' : service.id === 'web-development' ? 'web' : 'software'} project <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      <div className="service-detail-offerings"><h3>What we can build together</h3><ul>{service.offerings.map(offering => <li key={offering}><Check size={15} aria-hidden="true" />{offering}</li>)}</ul><div className="fit-note"><h3>A good fit if…</h3><p>{service.fit}</p></div></div>
    </Reveal>)}</div>
    <ProjectCTA />
  </>;
}
