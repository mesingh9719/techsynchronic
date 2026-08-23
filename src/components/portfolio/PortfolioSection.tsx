import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  X
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import type { CaseStudy } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface PortfolioSectionProps {
  onOpenConsultation: (projectCategory?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenConsultation
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'erp', label: 'Enterprise ERP' },
    { id: 'crm', label: 'CRM Automation' },
    { id: 'hrms', label: 'HRMS & Payroll' },
    { id: 'custom', label: 'Custom SaaS' },
    { id: 'cms', label: 'Headless CMS' },
    { id: 'devops', label: 'DevOps & VPS' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-white dark:bg-[#070A11] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          indexCode="CASE STUDIES // PRODUCTION"
          badge="Verified Deliverables & Metrics"
          title="Engineered Systems Delivering"
          highlightedText="Measurable Business ROI"
          description="Explore real-world case studies of custom ERPs, CRMs, HRMS platforms, and cloud DevOps architectures built by our senior engineering teams."
          className="mb-12"
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Magazine-Style Asymmetric Case Study Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div>
                  {/* Image Header with Overlay */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-slate-950/90 text-cyan-400 border border-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                        {item.industry}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-mono text-cyan-400 font-semibold block">
                        Client: {item.client}
                      </span>
                      <h3 className="text-xl font-bold font-display leading-tight line-clamp-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Quantifiable Result Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                          <div className="text-[10px] text-slate-500 truncate mb-0.5">{m.label}</div>
                          <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-[10px] font-mono text-slate-700 dark:text-slate-300 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-7 pt-0 mt-auto">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSelectedCase(item)}
                    showArrow
                    className="w-full justify-center font-semibold text-xs"
                  >
                    Examine Case Study Blueprint
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left"
            >
              {/* Header */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                    {selectedCase.industry} • {selectedCase.client}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display mt-1">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-sm text-slate-700 dark:text-slate-300">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedCase.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-center">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{metric.label}</div>
                      <div className="text-lg sm:text-xl font-bold text-cyan-700 dark:text-cyan-300 font-mono">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                    The Business Bottleneck:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    TechSynchronic Architectural Solution:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                    Production Architecture Highlights:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {selectedCase.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Ready to architect a similar solution for your business?
                </div>
                <Button
                  variant="accent"
                  size="md"
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenConsultation(selectedCase.title);
                  }}
                  showArrow
                  className="w-full sm:w-auto font-bold"
                >
                  Build a Similar System
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
