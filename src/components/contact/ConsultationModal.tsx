import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../common/Button';
import { submitLead } from '../../lib/leadSubmission';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(initialTopic || 'General Software Engineering & Consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitLead('New Strategy Call Request', { name, email, phone, topic });
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.5 }
        });
      } catch {
        // Confetti fallback
      }
    } catch {
      setIsSubmitting(false);
      setSubmitError('We could not send your request. Please try again or email us directly.');
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello TechSynchronic, I'd like to book an immediate strategy call regarding: ${topic}`
    );
    window.open(`https://wa.me/15551234567?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                  30-Min Strategy Call
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Book Technical Discovery
                </h3>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-700">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Call Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We have received your details. A Google Meet / Teams calendar invite will be sent to <span className="text-cyan-600 dark:text-cyan-400 font-bold">{email}</span> within 2 hours.
                </p>
                <div className="pt-2">
                  <Button
                    variant="whatsapp"
                    size="sm"
                    onClick={openWhatsApp}
                    className="font-bold"
                  >
                    Open Immediate WhatsApp Bridge
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Primary Topic / System
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    variant="accent"
                    size="md"
                    isLoading={isSubmitting}
                    showArrow
                    className="w-full justify-center font-bold"
                  >
                    Confirm & Reserve 30-Min Strategy Call
                  </Button>
                  {submitError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                      {submitError}
                    </p>
                  )}
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-center gap-1.5 mx-auto font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Prefer WhatsApp? Chat with our tech lead directly</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
