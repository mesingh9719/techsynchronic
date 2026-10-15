import { Terminal } from 'lucide-react';
export function Brand() {
  return <a className="brand" href="/" aria-label="TechSynchronic home"><span className="brand-symbol" aria-hidden="true"><Terminal size={22} strokeWidth={2.3} /></span><span>Tech<span className="brand-blue">Synchronic</span><span className="brand-period">.</span></span></a>;
}
