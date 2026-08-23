import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '../common/Button';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onOpenEstimator
}) => {
  const rotatingServices = [
    'Enterprise ERPs',
    'Custom CRM Systems',
    'Intelligent HRMS',
    'Full-Stack SaaS',
    'Headless CMS',
    'VPS Cloud DevOps'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [rotatingServices.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Precision architectural hairline background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none -z-10" />

      {/* Subtle brand teal accent light */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Asymmetrical Editorial Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Bold Asymmetric Headline & Editorial Typography */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Architectural System Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono font-bold text-slate-700 dark:text-cyan-400 tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>ENGINEERING SPRINT VER 4.2</span>
              <span className="text-slate-400 dark:text-slate-600">/</span>
              <span>PROPRIETARY SYSTEMS</span>
            </motion.div>

            {/* Giant High-Contrast Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] font-display">
                We build the software that{' '}
                <span className="italic font-normal underline decoration-cyan-500/50 underline-offset-8">
                  runs
                </span>{' '}
                your business:
              </h1>

              {/* Dynamic Typewriter Highlight */}
              <div className="h-[1.3em] overflow-hidden text-3xl sm:text-5xl lg:text-6xl font-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-gradient-cyan font-display"
                  >
                    {rotatingServices[currentIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Editorial Contrast Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
            >
              TechSynchronic delivers custom-architected CRMs, multi-warehouse ERPs, automated HRMS payroll, and resilient Linux VPS infrastructures engineered for sub-30ms performance and zero downtime.
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="accent"
                size="lg"
                onClick={onOpenConsultation}
                showArrow
                className="font-bold text-base shadow-lg"
              >
                Book a Free 30-Min Strategy Call
              </Button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 hover:border-cyan-500 text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Estimate Project Scope</span>
              </button>
            </motion.div>

            {/* Trust Assurance Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Strict Mutual NDA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">100% Full IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">99.99% Server SLA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive Architecture HUD Console */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Asymmetrical Metric Band */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
              50<span className="text-cyan-500">+</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Enterprise Systems Shipped
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
              99.99<span className="text-xs">%</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Production Uptime SLA
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
              &lt; 2 <span className="text-xs font-sans">Wks</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Iterative Sprint Demos
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
              100<span className="text-xs">%</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Client Code & IP Rights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
