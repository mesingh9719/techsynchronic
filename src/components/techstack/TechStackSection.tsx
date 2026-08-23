import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Zap, 
  Flame, 
  FileCode, 
  Atom, 
  Palette, 
  Globe, 
  Database, 
  FolderKanban, 
  TableProperties, 
  Binary, 
  Server,
  Code,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { techStackData } from '../../data/techStackData';
import { SectionHeading } from '../common/SectionHeading';

interface TechStackSectionProps {
  onOpenConsultation: (techName?: string) => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('backend');
  const [selectedTechName, setSelectedTechName] = useState<string>('Node.js');

  const categories = [
    { id: 'backend', label: 'Backend & High-Concurrency APIs' },
    { id: 'frontend', label: 'Frontend & Headless CMS' },
    { id: 'database', label: 'Databases & Vector AI' },
    { id: 'devops', label: 'Cloud & Linux VPS' }
  ];

  const currentCategoryTech = techStackData.filter((item) => item.category === activeCategory);
  const activeTechItem = techStackData.find((t) => t.name === selectedTechName) || currentCategoryTech[0] || techStackData[0];

  const getTechIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-cyan-600 dark:text-cyan-400";
    switch (name) {
      case 'Node.js': return <Layers className={iconClass} />;
      case 'Python': return <Cpu className={iconClass} />;
      case 'FastAPI': return <Zap className={iconClass} />;
      case 'Laravel': return <Flame className={iconClass} />;
      case 'PHP': return <FileCode className={iconClass} />;
      case 'React.js': return <Atom className={iconClass} />;
      case 'Tailwind CSS': return <Palette className={iconClass} />;
      case 'WordPress': return <Globe className={iconClass} />;
      case 'PostgreSQL': return <Database className={iconClass} />;
      case 'MongoDB': return <FolderKanban className={iconClass} />;
      case 'MySQL': return <TableProperties className={iconClass} />;
      case 'Vector DB': return <Binary className={iconClass} />;
      case 'VPS Hosting': return <Server className={iconClass} />;
      default: return <Code className={iconClass} />;
    }
  };

  return (
    <section id="tech-stack" className="relative py-24 bg-white dark:bg-[#070A11] transition-colors overflow-hidden">
      {/* Precision grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          indexCode="TECH ARCHITECTURE // LAB"
          badge="Production Tooling & Runtimes"
          title="Battle-Tested Stack Engineered for"
          highlightedText="Extreme Throughput"
          description="We select low-overhead runtimes, ACID-compliant databases, and resilient infrastructure to ensure your systems handle millions of requests without degradation."
          className="mb-14"
        />

        {/* Continuous Horizontal Ticker */}
        <div className="relative w-full overflow-hidden py-3 mb-16 bg-slate-100/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 backdrop-blur-md">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#070A11] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#070A11] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-8">
            {[...techStackData, ...techStackData].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                onClick={() => {
                  setActiveCategory(tech.category);
                  setSelectedTechName(tech.name);
                }}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs whitespace-nowrap cursor-pointer hover:border-cyan-500 transition-colors shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <span className="font-bold">{tech.name}</span>
                <span className="text-[10px] text-slate-500 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded">
                  {tech.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const first = techStackData.find((t) => t.category === cat.id);
                if (first) setSelectedTechName(first.name);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md font-bold'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Tech Inspection Lab Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Tech Grid List with Benchmarks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentCategoryTech.map((tech) => {
              const isSelected = activeTechItem.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTechName(tech.name)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-500/80 shadow-md dark:shadow-[0_0_25px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-50/80 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm">
                        {getTechIcon(tech.name)}
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800">
                        {tech.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500">Mastery Index</span>
                    <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">{tech.proficiency}%</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Tech Architectural Blueprint Panel */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl bg-slate-900 dark:bg-[#0B0F19] text-white border border-slate-800 p-7 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                    <Terminal className="w-4 h-4" />
                    <span>TECH_BENCHMARK // {activeTechItem.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">● VERIFIED_STACK</span>
                </div>

                <h4 className="text-2xl font-extrabold font-display mb-2">
                  {activeTechItem.name} Architecture
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {activeTechItem.description}
                </p>

                {/* Practical Enterprise Implementation */}
                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="text-[11px] text-cyan-400 font-bold uppercase">
                    Production Implementation:
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans">
                    {activeTechItem.useCase}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Concurrency Rating:</span>
                    <span className="text-emerald-400 font-bold">Grade A+ (Sub-30ms)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => onOpenConsultation(activeTechItem.name)}
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <span>Build With {activeTechItem.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
