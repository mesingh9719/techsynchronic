import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Terminal,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { processSteps } from '../../data/processData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  onOpenConsultation
}) => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const activeStep = processSteps.find((s) => s.step === activeStepId) || processSteps[0];

  return (
    <section id="process" className="relative py-24 bg-white dark:bg-[#070A11] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          indexCode="DELIVERY ROADMAP // STAGES 01 - 05"
          badge="Agile Engineering Lifecycle"
          title="From Technical Discovery to"
          highlightedText="Zero-Downtime Deployment"
          description="A transparent, milestone-driven delivery process engineered to eliminate scope drift and ship high-performance code on schedule."
          className="mb-14"
        />

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {processSteps.map((step) => {
            const isSelected = activeStep.step === step.step;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepId(step.step)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 border-slate-900 dark:border-cyan-400 shadow-md font-bold'
                    : 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-300 dark:text-slate-900' : 'text-slate-400'}`}>
                    PHASE 0{step.step}
                  </span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-white/80 dark:text-slate-900/80' : 'text-slate-500'}`}>
                    {step.duration}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold truncate">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Blueprint Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-7 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left: Stage Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 font-mono font-bold flex items-center justify-center border border-cyan-200 dark:border-cyan-800">
                  0{activeStep.step}
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                    Stage {activeStep.step} • {activeStep.duration}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  Primary Tooling & Frameworks:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeStep.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Deliverables List */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                  Stage Milestone Deliverables:
                </span>
                <div className="space-y-2">
                  {activeStep.deliverables.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-slate-500 font-mono">
                  Full NDA + Git repository handover included.
                </div>

                <Button
                  variant="accent"
                  size="sm"
                  onClick={onOpenConsultation}
                  showArrow
                  className="font-bold text-xs"
                >
                  Start Phase 01 Discovery
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
