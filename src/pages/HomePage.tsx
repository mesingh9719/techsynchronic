import { ArrowRight, ArrowUpRight, Check, MoveDownRight } from 'lucide-react';
import { services } from '../data/services';
import { BusinessDiagram } from '../components/hero/BusinessDiagram';
import { Process } from '../components/common/Process';
import { ProjectCTA } from '../components/common/ProjectCTA';
import { Reveal } from '../components/animation/Reveal';

const benefits = [
  { title: 'Your requirements lead the way', description: 'We understand your workflows before recommending a solution. The technology follows the problem.' },
  { title: 'Easy to use. Built to evolve.', description: 'Clear interfaces for your users, maintainable architecture for your future. Both matter from day one.' },
  { title: 'A partner through the process', description: 'Clear communication, shared decisions, and technical support beyond launch. You stay part of the conversation.' },
];
export function HomePage() {
  return <>
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <Reveal className="hero-copy" staggerChildren>
        <p className="eyebrow" data-reveal-item><span className="blue-line" />YOUR BUSINESS. OUR STARTING POINT.</p>
        <h1 id="hero-title" data-reveal-item>Software built<br />around <span>your<br className="hero-break" /> business.</span></h1>
        <p className="hero-description" data-reveal-item>We design and develop custom software, websites, and mobile apps that simplify your work and help your business move forward.</p>
        <div className="hero-actions" data-reveal-item><a className="button button-primary" href="/contact/">Discuss Your Project <ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link" href="#services">Explore our services <ArrowRight size={17} aria-hidden="true" /></a></div>
        <p className="hero-note" data-reveal-item><span />For startups, growing teams, and established businesses.</p>
      </Reveal>
      <Reveal className="diagram-reveal" delay={0.18}><BusinessDiagram /></Reveal>
    </section>
    <div className="container"><div className="capability-strip"><span>From the first idea.<br /><strong>Through what comes next.</strong></span><p>Strategy <span aria-hidden="true">/</span> Design <span aria-hidden="true">/</span> Development <span aria-hidden="true">/</span> Ongoing support</p><MoveDownRight size={25} aria-hidden="true" /></div></div>
    <section className="section services-section" id="services" aria-labelledby="services-title"><div className="container">
      <Reveal className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2 id="services-title">The right expertise.<br />One development partner.</h2></div><p>Practical digital solutions for the way you work.<br className="desktop-break" /> From a better website to a business-wide system.</p></Reveal>
      <div className="services-grid">{services.map((service, index) => <Reveal as="article" className="service-item" key={service.id} delay={(index % 2) * 0.08}>
        <div className="service-top"><service.icon size={25} strokeWidth={1.5} aria-hidden="true" /><span>{service.number}</span></div>
        <h3><a href={`/services/#${service.id}`}>{service.name}<ArrowUpRight size={21} aria-hidden="true" /></a></h3>
        <p>{service.description}</p><ul className="service-examples">{service.examples.map(example => <li key={example}>{example}</li>)}</ul>
        <a className="text-link service-learn" href={`/services/#${service.id}`}>Explore {service.name.toLowerCase()} <ArrowRight size={16} aria-hidden="true" /></a>
      </Reveal>)}</div>
      <div className="services-bottom"><p>Not sure where to start? That’s what the first conversation is for.</p><a className="text-link" href="/services/">View all services <ArrowRight size={17} aria-hidden="true" /></a></div>
    </div></section>
    <section className="section why-section" id="why-us" aria-labelledby="why-title"><div className="container why-grid">
      <Reveal className="why-intro"><p className="eyebrow">WHY TECHSYNCHRONIC</p><h2 id="why-title">Built for your business.<br /><span>With the bigger<br />picture in mind.</span></h2><p>Good software should make things easier. We focus on what your business needs today, while leaving room for where it goes tomorrow.</p><a className="text-link" href="/about/">Get to know us <ArrowRight size={17} aria-hidden="true" /></a></Reveal>
      <div className="benefits">{benefits.map((benefit, index) => <Reveal className="benefit" key={benefit.title} delay={index * 0.08}><span className="check-icon"><Check size={16} aria-hidden="true" /></span><div><h3>{benefit.title}</h3><p>{benefit.description}</p></div></Reveal>)}</div>
    </div></section>
    <Process /><ProjectCTA />
  </>;
}
