import { ArrowUpRight } from 'lucide-react';
import { Brand } from '../common/Brand';
import { services } from '../../data/services';

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-brand"><Brand /><p>Thoughtful design. Practical software.<br />Built around your business.</p></div>
      <div><h2>Explore</h2><a href="/services/">Services</a><a href="/about/">About us</a><a href="/contact/">Contact</a></div>
      <div><h2>What we build</h2>{services.map(service => <a key={service.id} href={`/services/#${service.id}`}>{service.name}</a>)}</div>
      <div className="footer-contact"><h2>Let’s talk</h2><a className="email-link" href="mailto:mesingh9719@gmail.com">mesingh9719@gmail.com <ArrowUpRight size={14} aria-hidden="true" /></a><a className="email-link" href="mailto:susingh9719@gmail.com">susingh9719@gmail.com <ArrowUpRight size={14} aria-hidden="true" /></a><p>Have an idea? We’d like to hear it.</p></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} TechSynchronic. All rights reserved.</p><span>Software with purpose.</span></div>
  </div></footer>;
}
