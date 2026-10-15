import { ArrowUpRight, MoveDownRight } from 'lucide-react';
import { Process } from '../components/common/Process';
import { ProjectCTA } from '../components/common/ProjectCTA';
import { Reveal } from '../components/animation/Reveal';
const principles = [
  { number: '01', title: 'Start with understanding', description: 'We ask questions, listen to your team, and define the real problem before choosing the tools.' },
  { number: '02', title: 'Design for people', description: 'Usability is part of quality. We aim for clear interfaces and experiences people can use with confidence.' },
  { number: '03', title: 'Build for the long term', description: 'We prioritize maintainable code, considered architecture, and room for your requirements to evolve.' },
];
export function AboutPage() {
  return <>
    <Reveal as="section" className="container page-intro about-intro" staggerChildren><p className="eyebrow" data-reveal-item>ABOUT TECHSYNCHRONIC</p><h1 data-reveal-item>Technology is the tool.<br /><span>Your business is the point.</span></h1><div className="about-opening" data-reveal-item><p className="lead">We’re a software development company helping businesses, startups, and growing organizations turn everyday challenges into better ways of working.</p><MoveDownRight size={52} strokeWidth={1} aria-hidden="true" /></div></Reveal>
    <section className="about-story section" aria-labelledby="about-story-title"><Reveal className="container story-grid"><p className="eyebrow">WHAT WE’RE HERE TO DO</p><div><h2 id="about-story-title">Make software useful.<br />Make business simpler.</h2><p>Disconnected systems. Repetitive work. A good idea waiting for the right product. These are the kinds of challenges we help solve.</p><p>TechSynchronic designs and develops custom business software, websites, web applications, and mobile apps. We start by understanding the people and processes behind a project, then choose a practical path forward.</p><p>For us, a successful solution is one that feels clear to use, fits your daily work, and can keep improving alongside your business.</p><a className="text-link" href="/services/">Explore what we do <ArrowUpRight size={17} aria-hidden="true" /></a></div></Reveal></section>
    <section className="container section principles" aria-labelledby="principles-title"><Reveal className="section-heading"><div><p className="eyebrow">WHAT GUIDES OUR WORK</p><h2 id="principles-title">Care in the details.<br />Clarity in the approach.</h2></div><p>Principles that shape how we design,<br className="desktop-break" /> develop, and work with you.</p></Reveal><div className="principles-grid">{principles.map((item, index) => <Reveal as="article" key={item.number} delay={index * 0.08}><span className="eyebrow">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}</div></section>
    <Process /><ProjectCTA />
  </>;
}
