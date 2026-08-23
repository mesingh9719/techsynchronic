import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calculator, ArrowUp, Sparkles, X } from 'lucide-react';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenConsultation,
  onOpenEstimator
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello TechSynchronic Team, I'd like to discuss a custom software/ERP/CRM project.");
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating CTA Tooltip (dismissible) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto bg-slate-900/95 border border-cyan-500/40 backdrop-blur-xl p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 max-w-xs text-xs text-slate-200 mb-1"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div 
              onClick={onOpenConsultation}
              className="cursor-pointer"
            >
              <p className="font-bold text-white hover:text-cyan-300 transition-colors">Need a quick project estimate?</p>
              <p className="text-slate-400 text-[11px]">Calculate cost & timeline in 60s</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-500 hover:text-slate-300 p-1 -mr-1"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 shadow-lg flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Quick Scope Estimator Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenEstimator}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] text-xs font-bold transition-all cursor-pointer backdrop-blur-md"
        >
          <Calculator className="w-4 h-4 text-cyan-400" />
          <span>Estimate Scope</span>
        </motion.button>

        {/* WhatsApp Instant Connect Button with Pulse Glow */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
          className="relative w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all cursor-pointer focus:outline-none group"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40 group-hover:opacity-60" />
          <MessageCircle className="w-6 h-6 relative z-10 text-white fill-white/10" />
        </motion.button>
      </div>
    </div>
  );
};
