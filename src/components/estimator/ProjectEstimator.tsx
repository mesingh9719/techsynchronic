import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Clock, 
  Layers, 
  Building2,
  Users,
  UserCheck,
  Code2,
  LayoutTemplate,
  ServerCog
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface ProjectEstimatorProps {
  initialServiceId?: string;
  onRequestQuote: (estimateSummary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  initialServiceId,
  onRequestQuote
}) => {
  const [projectType, setProjectType] = useState(initialServiceId || 'crm');
  const [projectScale, setProjectScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'whatsapp-api',
    'rbac-auth',
    'vps-cicd'
  ]);
  const [timeline, setTimeline] = useState<'standard' | 'express'>('standard');

  const projectTypes = [
    { id: 'crm', label: 'Custom CRM System', icon: Users, baseWeeks: 5, baseSprints: 3 },
    { id: 'erp', label: 'Enterprise ERP Suite', icon: Building2, baseWeeks: 10, baseSprints: 5 },
    { id: 'hrms', label: 'Smart HRMS & Payroll', icon: UserCheck, baseWeeks: 6, baseSprints: 3 },
    { id: 'custom', label: 'Custom Software / SaaS', icon: Code2, baseWeeks: 8, baseSprints: 4 },
    { id: 'cms', label: 'Headless / Custom CMS', icon: LayoutTemplate, baseWeeks: 4, baseSprints: 2 },
    { id: 'devops', label: 'Server Setup & DevOps', icon: ServerCog, baseWeeks: 2, baseSprints: 1 }
  ];

  const scaleOptions = [
    { 
      id: 'mvp', 
      label: 'Starter / MVP', 
      desc: 'Essential core modules, single department, rapid market entry',
      multiplier: 1 
    },
    { 
      id: 'growth', 
      label: 'Growth / Multi-Department', 
      desc: 'Multi-role RBAC, comprehensive automation, high-velocity workflows',
      multiplier: 1.5 
    },
    { 
      id: 'enterprise', 
      label: 'Enterprise / High-Concurrency', 
      desc: 'Multi-location, database replication, zero-downtime SLA, custom APIs',
      multiplier: 2.2 
    }
  ];

  const addonsList = [
    { id: 'whatsapp-api', label: 'WhatsApp Business / SMS Automated Pipelines', category: 'Integration' },
    { id: 'rbac-auth', label: 'Granular Role-Based Permissions & Audit Logs', category: 'Security' },
    { id: 'vps-cicd', label: 'Linux VPS Hardening & Automated GitHub CI/CD', category: 'DevOps' },
    { id: 'biometric-sync', label: 'Hardware Biometric / POS Device Sync', category: 'Hardware' },
    { id: 'vector-ai', label: 'Vector DB Semantic Search / AI RAG Retrieval', category: 'AI' },
    { id: 'multi-currency', label: 'Multi-Currency & Tax/GST Auto Invoicing', category: 'Finance' }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTypeObj = projectTypes.find((t) => t.id === projectType) || projectTypes[0];
  const currentScaleObj = scaleOptions.find((s) => s.id === projectScale) || scaleOptions[1];

  const calculatedWeeks = Math.max(
    2,
    Math.round((currentTypeObj.baseWeeks * currentScaleObj.multiplier + selectedAddons.length * 0.5) * (timeline === 'express' ? 0.75 : 1))
  );

  const calculatedSprints = Math.max(
    1,
    Math.round(currentTypeObj.baseSprints * currentScaleObj.multiplier + selectedAddons.length * 0.3)
  );

  const handleClaimQuote = () => {
    const summary = `Project: ${currentTypeObj.label} | Scale: ${currentScaleObj.label} | Addons: ${selectedAddons.join(', ')} | Timeline: ${calculatedWeeks} Weeks (${timeline})`;
    onRequestQuote(summary);
  };

  return (
    <section id="estimator" className="relative py-24 bg-slate-50 dark:bg-[#05080E] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          indexCode="SCOPE CALCULATOR // V4"
          badge="Instant Dynamic Estimator"
          title="Calculate Your Project"
          highlightedText="Scope & Sprint Timeline"
          description="Select your software parameters below to receive an instant architectural scope calculation, sprint count, and roadmap."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            {/* Step 1: Project Type */}
            <div>
              <label className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-3">
                01. Select Project Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-50 dark:bg-cyan-950/70 border-cyan-500 text-slate-900 dark:text-white shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold leading-tight">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <label className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-3">
                02. Operational Concurrency & Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scaleOptions.map((scale) => {
                  const isSelected = projectScale === scale.id;
                  return (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setProjectScale(scale.id as any)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 text-slate-900 dark:text-white shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold mb-1 flex items-center justify-between">
                          <span>{scale.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">{scale.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Modules */}
            <div>
              <label className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-3">
                03. Custom Modules & Infrastructure Needs
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-slate-100 dark:bg-slate-800 border-cyan-500 text-slate-900 dark:text-white font-medium'
                          : 'bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                            isChecked
                              ? 'bg-cyan-500 border-cyan-500 text-white dark:text-slate-950'
                              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs">{addon.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-200 dark:bg-slate-900 px-1.5 py-0.5 rounded">
                        {addon.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Cadence */}
            <div>
              <label className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block mb-3">
                04. Preferred Sprint Cadence
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTimeline('standard')}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between cursor-pointer ${
                    timeline === 'standard'
                      ? 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-500 text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Standard Agile Cadence</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">2-week iterative sprint demos</div>
                  </div>
                  {timeline === 'standard' && <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('express')}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between cursor-pointer ${
                    timeline === 'express'
                      ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-slate-900 dark:text-white shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-amber-700 dark:text-amber-400">Fast-Track Priority Squad</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Dedicated double sprint velocity</div>
                  </div>
                  {timeline === 'express' && <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Scope Calculation Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/40 p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-display">Scope Calculation</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold font-mono">
                  Guaranteed SLA
                </span>
              </div>

              {/* Dynamic Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Est. Delivery</span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                    {calculatedWeeks} <span className="text-xs font-sans text-slate-500">Weeks</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-1 font-mono">
                    <Layers className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Agile Sprints</span>
                  </div>
                  <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                    {calculatedSprints} <span className="text-xs font-sans text-slate-500">Sprints</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Solution:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{currentTypeObj.label}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Scale:</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">{currentScaleObj.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Addons Configured:</span>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">{selectedAddons.length} Modules</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                variant="accent"
                size="lg"
                onClick={handleClaimQuote}
                showArrow
                className="w-full font-bold shadow-lg"
              >
                Claim Detailed Proposal & Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
