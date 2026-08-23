import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Rocket, 
  HeartHandshake, 
  Cpu,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { StatCounter } from '../common/StatCounter';
import { AgencyComparison } from './AgencyComparison';
import { Button } from '../common/Button';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="why-us" className="relative py-24 bg-slate-50 dark:bg-[#070A11] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Asymmetrical Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
              ARCHITECTURAL MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-[1.1]">
              Engineered for velocity, guaranteed by SLA.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              We reject bloated agency overhead and slow bureaucratic timelines. You get senior software architects writing clean, maintainable code directly in your dedicated Git repository.
            </p>
          </div>

          {/* Big Stat Callout Banner */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono mb-1">
                <StatCounter value={50} suffix="+" />
              </div>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">Systems Shipped</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Multi-warehouse ERPs, CRMs & Cloud backends</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 font-mono mb-1">
                <StatCounter value={99.99} decimals={2} suffix="%" />
              </div>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">Uptime Record</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Linux VPS clustering & zero-downtime CI/CD</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="text-4xl sm:text-5xl font-black text-amber-600 dark:text-amber-400 font-mono mb-1">
                <StatCounter value={40} prefix="$" suffix="M+" />
              </div>
              <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">Annual Operations</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Error-free transactional workflow pipelines</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="text-4xl sm:text-5xl font-black text-indigo-600 dark:text-indigo-400 font-mono mb-1">
                <StatCounter value={100} suffix="%" />
              </div>
              <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">IP Ownership</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full source code & documentation handover</p>
            </div>
          </div>
        </div>

        {/* 4 Asymmetrical Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-200 dark:border-cyan-800">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">PILLAR // 01</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
                40% Faster Sprint Velocity
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We utilize modular microservice templates and battle-tested components to ship working staging builds every 2 weeks, eliminating months of planning gridlock.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">PILLAR // 02</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
                High-Concurrency Architecture
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Engineered for millions of database reads and writes with indexed PostgreSQL, Redis task queues, and async FastAPI endpoints with sub-30ms latencies.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">PILLAR // 03</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
                Zero Lock-In & Full IP Ownership
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                You own 100% of the repository, architectural schemas, and deployment scripts from Day 1. No ongoing license hostage fees.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">PILLAR // 04</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
                Direct Senior Engineering Leads
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Communicate directly via dedicated Slack/Teams channels with senior full-stack developers who architect and write your code.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Matrix */}
        <AgencyComparison />

        {/* CTA Strip */}
        <div className="mt-14 text-center">
          <Button
            variant="accent"
            size="lg"
            onClick={onOpenConsultation}
            showArrow
            className="font-bold shadow-lg"
          >
            Schedule a Free Architecture Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
