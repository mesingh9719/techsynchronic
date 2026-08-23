import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Sparkles, 
  Cpu, 
  Users, 
  Building2, 
  UserCheck, 
  Code2, 
  LayoutTemplate, 
  ServerCog 
} from 'lucide-react';
import type { ServiceItem } from '../../types';
import { Button } from '../common/Button';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (service: ServiceItem) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote
}) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    const iconClass = "w-6 h-6 text-cyan-600 dark:text-cyan-400";
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center shadow-sm">
                {renderIcon(service.iconName)}
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 font-mono tracking-wider uppercase">
                  {service.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  {service.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                Executive Overview
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-cyan-500/20">
              <h4 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Technical Architecture & Performance Principles
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {service.architecturePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Grid */}
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                Core Module Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, index) => (
                  <div key={index} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Time-to-Production</span>
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white font-mono">
                  {service.typicalTimeline}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1.5 font-mono">
                  <Layers className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Production Stack</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
              Includes full source code handover, NDA, and 30 days post-launch warranty.
            </div>

            <Button
              variant="accent"
              size="md"
              onClick={() => {
                onClose();
                onSelectForQuote(service);
              }}
              showArrow
              className="w-full sm:w-auto font-bold"
            >
              Get Scope & Quote for {service.title}
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
