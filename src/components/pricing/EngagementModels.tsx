import React from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Layers,
  Zap,
  Lock
} from 'lucide-react';
import { pricingPlans } from '../../data/processData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface EngagementModelsProps {
  onOpenConsultation: (modelName?: string) => void;
}

export const EngagementModels: React.FC<EngagementModelsProps> = ({
  onOpenConsultation
}) => {
  return (
    <section id="pricing" className="relative py-24 bg-white dark:bg-[#070A11] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          indexCode="COMMERCIAL PARTNERSHIP // TIERS"
          badge="Transparent Engagement Models"
          title="Flexible Partnership Models"
          highlightedText="Tailored to Your Stage"
          description="Whether you need a full turnkey system built from scratch, a dedicated engineering squad, or ongoing high-availability DevOps support, we have an aligned model."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-slate-50 dark:bg-slate-900 border-2 border-cyan-500 shadow-xl dark:shadow-[0_0_40px_rgba(6,182,212,0.2)] md:-translate-y-2'
                    : 'bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular for Growth
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                      TIER // 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {plan.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    {plan.tagline}
                  </p>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6">
                    <div className="text-xs text-slate-500 mb-0.5 font-mono">Pricing Structure:</div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono">
                      {plan.pricingBasis}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Included Deliverables:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Button
                    variant={isPopular ? 'accent' : 'secondary'}
                    size="md"
                    onClick={() => onOpenConsultation(plan.name)}
                    showArrow
                    className="w-full justify-center font-bold"
                  >
                    Select {plan.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
