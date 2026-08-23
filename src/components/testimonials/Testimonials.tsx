import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  TrendingUp
} from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface TestimonialsProps {
  onOpenConsultation?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  onOpenConsultation
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-slate-50 dark:bg-[#070A11] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          indexCode="EXECUTIVE VERIFICATIONS // CLIENT OUTCOMES"
          badge="Verified Client Reviews"
          title="Endorsed by Fast-Growing"
          highlightedText="Enterprises & Tech Leaders"
          description="Read how our custom CRM, ERP, and cloud DevOps engineering helped founders and enterprise executives achieve operational velocity."
          className="mb-14"
        />

        {/* Featured Testimonial Hero Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <Quote className="absolute -bottom-6 -right-6 w-40 h-40 text-slate-100 dark:text-slate-800/40 pointer-events-none -z-0" />

            <div className="relative z-10 space-y-8">
              {/* Top Row: Ratings & Result Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-mono font-bold text-slate-500">
                    5.0 RATING
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{activeReview.metricsResult}</span>
                </div>
              </div>

              {/* Review Text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="text-lg sm:text-2xl font-medium text-slate-900 dark:text-slate-100 font-display leading-relaxed"
                >
                  "{activeReview.content}"
                </motion.p>
              </AnimatePresence>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                <div className="flex items-center gap-4">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.author}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-cyan-500"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                      {activeReview.author}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {activeReview.role} • <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{activeReview.company}</span>
                    </p>
                    <span className="text-[10px] font-mono text-slate-400">
                      Sector: {activeReview.industry}
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={prevTestimonial}
                    className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="text-xs font-mono font-bold text-slate-500 px-2">
                    0{currentIndex + 1} / 0{testimonialsData.length}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {onOpenConsultation && (
            <div className="mt-10 text-center">
              <Button
                variant="accent"
                size="md"
                onClick={onOpenConsultation}
                showArrow
                className="font-bold"
              >
                Join Our Roster of Successful Enterprise Clients
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
