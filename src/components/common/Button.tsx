import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showArrow?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  showArrow = false,
  isLoading = false,
  className = '',
  onClick,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-bold rounded-xl gap-2.5 shadow-lg'
  };

  const variantClasses = {
    // Primary: High-converting vibrant cyan/indigo gradient with glow
    primary:
      'bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold shadow-[0_4px_15px_rgba(2,132,199,0.25)] dark:shadow-[0_0_25px_rgba(6,182,212,0.4)] border border-cyan-500/40',
    // Accent: Electric amber/orange for ultimate conversion pop
    accent:
      'bg-gradient-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:via-orange-500 dark:to-amber-500 text-white dark:text-slate-950 font-bold shadow-[0_4px_20px_rgba(217,119,6,0.3)] dark:shadow-[0_0_30px_rgba(245,158,11,0.45)] hover:from-amber-400 hover:to-orange-500 border border-amber-400/40',
    // Secondary: Theme-aware adaptive slate/white
    secondary:
      'bg-slate-100 dark:bg-slate-800/80 backdrop-blur-md text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-950 dark:hover:text-white shadow-sm',
    // Outline: Cyber subtle border
    outline:
      'bg-transparent text-cyan-600 dark:text-cyan-400 border border-cyan-600/30 dark:border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-500',
    // WhatsApp: Trustworthy green with glow
    whatsapp:
      'bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-[0_4px_15px_rgba(16,185,129,0.3)] dark:shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400/30'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      disabled={isLoading || props.disabled}
      className={`relative inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer overflow-hidden group ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Shimmer sweep effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span>{children}</span>
          {showArrow && (
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
          )}
        </>
      )}
    </motion.button>
  );
};
