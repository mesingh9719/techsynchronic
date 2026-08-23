import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  indexCode?: string;
  title: string;
  highlightedText?: string;
  description: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  indexCode,
  title,
  highlightedText,
  description,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        {indexCode && (
          <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-500/10 dark:bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/20">
            {indexCode}
          </span>
        )}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide uppercase bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
            <span>{badge}</span>
          </motion.div>
        )}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-4 font-display"
      >
        {title}{' '}
        {highlightedText && (
          <span className="text-gradient-cyan relative inline-block font-extrabold">
            {highlightedText}
          </span>
        )}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
      >
        {description}
      </motion.p>
    </div>
  );
};
