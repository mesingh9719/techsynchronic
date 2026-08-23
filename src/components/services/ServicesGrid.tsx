import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Building2, 
  UserCheck, 
  Code2, 
  LayoutTemplate, 
  ServerCog, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  Cpu,
  Clock,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import type { ServiceItem } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { ServiceModal } from './ServiceModal';

interface ServicesGridProps {
  onOpenConsultation: (prefillSubject?: string) => void;
  onSelectServiceForEstimator: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onOpenConsultation,
  onSelectServiceForEstimator
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('crm');
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const getIcon = (name: string, isSelected: boolean) => {
    const iconClass = `w-5 h-5 transition-colors ${
      isSelected ? 'text-cyan-500' : 'text-slate-500 dark:text-slate-400 group-hover:text-cyan-500'
    }`;
    switch (name) {
      case 'Users': return <Users className={iconClass} />;
      case 'Building2': return <Building2 className={iconClass} />;
      case 'UserCheck': return <UserCheck className={iconClass} />;
      case 'Code2': return <Code2 className={iconClass} />;
      case 'LayoutTemplate': return <LayoutTemplate className={iconClass} />;
      case 'ServerCog': return <ServerCog className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-slate-50 dark:bg-[#070A11] transition-colors overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            align="left"
            indexCode="CAPABILITY SUITE // 01 - 06"
            badge="Bespoke Software Engineering"
            title="Engineered to Automate"
            highlightedText="High-Velocity Operations"
            description="We build proprietary platforms and microservices that replace fragmented third-party SaaS subscriptions with custom software assets you own forever."
          />

          <Button
            variant="accent"
            size="md"
            onClick={() => onOpenConsultation('Full Architecture Review')}
            showArrow
            className="self-start md:self-end font-bold flex-shrink-0"
          >
            Request Custom Architecture Blueprint
          </Button>
        </div>

        {/* Asymmetrical Interactive Split Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Architectural Service Selector */}
          <div className="lg:col-span-6 space-y-3">
            {servicesData.map((service, index) => {
              const isSelected = activeService.id === service.id;
              const formattedIndex = `0${index + 1}`;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-500/80 shadow-lg dark:shadow-[0_10px_30px_rgba(6,182,212,0.2)]'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Monospace Architectural Number */}
                      <span className={`font-mono text-sm font-extrabold mt-0.5 ${isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400 dark:text-slate-600'}`}>
                        {formattedIndex}
                      </span>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`text-lg sm:text-xl font-bold font-display transition-colors ${
                            isSelected
                              ? 'text-slate-900 dark:text-white'
                              : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                          }`}>
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className={`p-2 rounded-xl border transition-colors ${
                        isSelected 
                          ? 'bg-cyan-50 dark:bg-cyan-950/80 border-cyan-300 dark:border-cyan-800' 
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                      }`}>
                        {getIcon(service.iconName, isSelected)}
                      </div>
                    </div>
                  </div>

                  {/* Active highlight indicators */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-mono text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Timeline: {service.typicalTimeline}</span>
                      </div>

                      <div className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-bold">
                        <span>Active Spec</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Architectural Blueprint Workbench */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/40 p-7 sm:p-9 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl space-y-6"
              >
                {/* Active Card Top */}
                <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                      SPECIFICATION BLUEPRINT // {activeService.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display mt-1">
                      {activeService.title}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                    {activeService.typicalTimeline}
                  </span>
                </div>

                {/* Full Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {activeService.fullDesc}
                </p>

                {/* Architectural Key Points */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-cyan-500" />
                    Architectural Tenets & Data Flow
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {activeService.architecturePoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Deliverables Matrix */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                    Included Production Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized Stack Pills */}
                <div className="pt-2">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Primary Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    variant="accent"
                    size="md"
                    onClick={() => onSelectServiceForEstimator(activeService.id)}
                    showArrow
                    className="w-full sm:w-auto font-bold flex-1"
                  >
                    Configure Scope & Instant Quote
                  </Button>

                  <button
                    onClick={() => setModalService(activeService)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Full Technical Specs
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Deep-Dive Spec Modal */}
      <ServiceModal
        service={modalService}
        onClose={() => setModalService(null)}
        onSelectForQuote={(svc) => onSelectServiceForEstimator(svc.id)}
      />
    </section>
  );
};
