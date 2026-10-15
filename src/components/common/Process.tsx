import { Reveal } from '../animation/Reveal';

const steps = [
  { number: '01', title: 'Discover', description: 'We listen first. Your business, your users, and the problem you want to solve.' },
  { number: '02', title: 'Plan', description: 'Together, we define the scope, priorities, and technical direction. No guesswork.' },
  { number: '03', title: 'Design & build', description: 'We turn the plan into thoughtful interfaces and working software, with you involved.' },
  { number: '04', title: 'Launch & support', description: 'We help you go live, keep things running, and improve as your needs evolve.' },
];
export function Process() {
  return <section className="section process-section" id="process" aria-labelledby="process-title"><div className="container"><Reveal className="section-heading"><div><p className="eyebrow">HOW WE WORK</p><h2 id="process-title">A clear path from<br />idea to everyday impact.</h2></div><p>You know your business. We know software.<br className="desktop-break" /> Here’s how we bring the two together.</p></Reveal><ol className="process-grid">{steps.map((step, index) => <Reveal as="li" key={step.number} delay={index * 0.09}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></Reveal>)}</ol></div></section>;
}
