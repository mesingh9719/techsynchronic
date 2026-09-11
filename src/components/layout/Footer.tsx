import React, { useState } from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  Send
} from 'lucide-react';
import { Button } from '../common/Button';
import { submitLead } from '../../lib/leadSubmission';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscriptionError('');
    if (newsletterEmail) {
      try {
        await submitLead('New Engineering Briefing Subscription', { email: newsletterEmail });
        setSubscribed(true);
        setNewsletterEmail('');
      } catch {
        setSubscriptionError('Subscription failed. Please try again.');
      }
    }
  };

  const servicesLinks = [
    { name: 'Custom CRM Development', href: '#services' },
    { name: 'Enterprise ERP Solutions', href: '#services' },
    { name: 'Smart HRMS Platforms', href: '#services' },
    { name: 'Custom Software & SaaS', href: '#services' },
    { name: 'Headless WordPress & CMS', href: '#services' },
    { name: 'Server Handling & DevOps', href: '#services' }
  ];

  const quickLinks = [
    { name: 'Interactive Project Estimator', href: '#estimator' },
    { name: 'Agency Comparison', href: '#why-us' },
    { name: 'Agile 5-Step Process', href: '#process' },
    { name: 'Case Studies & Metrics', href: '#portfolio' },
    { name: 'Client Testimonials', href: '#testimonials' },
    { name: 'Flexible Engagement Pricing', href: '#pricing' }
  ];

  const techBadges = [
    'Node.js', 'Python', 'PHP', 'WordPress', 'Laravel', 'FastAPI', 
    'React.js', 'Tailwind CSS', 'VPS Hosting', 'MySQL', 'MongoDB', 'PostgreSQL', 'Vector DB'
  ];

  return (
    <footer className="relative bg-slate-100 dark:bg-[#05080E] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Trust Banner */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 mb-16 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Ready to Accelerate Your Software Roadmap?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Get an accurate scope estimation, transparent sprint pricing, and technical architecture brief within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button
              variant="accent"
              size="lg"
              onClick={onOpenConsultation}
              showArrow
              className="w-full sm:w-auto font-bold shadow-lg"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white font-display">
                Tech<span className="text-gradient-cyan">Synchronic</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Bespoke software development agency specializing in enterprise CRMs, ERP solutions, HRMS platforms, custom software, headless CMS, and Linux VPS cloud architectures.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Mutual NDA &amp; 100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span>Bi-Weekly Agile Sprints &amp; Working Demos</span>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Software Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Resources &amp; Scope
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Briefings */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Engineering Insights
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Quarterly architectural reports on high-concurrency systems &amp; VPS security.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono block">
                  ✓ Briefing subscription activated!
                </span>
              )}
              {subscriptionError && (
                <span className="text-[10px] text-red-600 dark:text-red-400 font-mono block" role="alert">
                  {subscriptionError}
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Stack Badges Strip */}
        <div className="py-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500 mr-2">Certified Stack:</span>
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} TechSynchronic. All rights reserved. Proprietary Engineering.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400">Privacy Policy</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400">Terms of Service</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400">Security SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
