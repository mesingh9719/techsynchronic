import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../animation/Reveal';
export function ProjectCTA() {
  return <section className="project-cta" aria-labelledby="project-cta-title"><Reveal className="container cta-inner"><div><p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p><h2 id="project-cta-title">Good software starts<br />with a conversation.</h2><p>Tell us what you have in mind. We’ll work out the next step together.</p></div><a className="button button-primary" href="/contact/">Discuss Your Project <ArrowUpRight size={18} aria-hidden="true" /></a></Reveal></section>;
}
