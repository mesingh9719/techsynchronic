import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import type { ContactFormData } from '../../types';
import { submitLead } from '../../lib/leadSubmission';

interface ContactSectionProps {
  prefillScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillScope }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'crm',
    budgetRange: '$10k - $25k',
    timeline: '1 - 2 Months',
    message: prefillScope ? `[Configured Scope: ${prefillScope}]` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitLead('New Project Inquiry', {
        ...formData,
        projectType: formData.projectType,
        budgetRange: formData.budgetRange,
        timeline: formData.timeline
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    } catch {
      setIsSubmitting(false);
      setSubmitError('We could not send your inquiry. Please try again or email us directly.');
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello TechSynchronic, I'd like to discuss a project: ${formData.projectType || 'Software Development'}`
    );
    window.open(`https://wa.me/15551234567?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 dark:bg-[#070A11] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Fast-Track Contacts */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <SectionHeading
              align="left"
              indexCode="INITIATE DISCOVERY // 24H SLA"
              badge="Let's Build Together"
              title="Let's Architect Your"
              highlightedText="Next High-Growth System"
              description="Speak directly with a Senior Technical Lead. We assess your requirements, calculate scope, and deliver a detailed technical roadmap within 24 hours."
            />

            {/* 1-Click Fast Track Channels */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <div
                onClick={openWhatsApp}
                className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase">
                      Instant WhatsApp Chat
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Direct Engineering Channel
                    </div>
                    <div className="text-[11px] text-slate-500">Typical reply: &lt; 15 mins</div>
                  </div>
                </div>
                <Button variant="whatsapp" size="sm" className="hidden sm:inline-flex">
                  Chat Now
                </Button>
              </div>

              {/* Calendly */}
              <div
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="p-5 rounded-2xl bg-cyan-50/80 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 hover:border-cyan-500 transition-all cursor-pointer flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-cyan-800 dark:text-cyan-400 uppercase">
                      Schedule Direct Call
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      30-Min Architecture Discovery
                    </div>
                    <div className="text-[11px] text-slate-500">Reserve time with Tech Lead</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  Book Slot
                </Button>
              </div>
            </div>

            {/* Direct Email & Phone */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 font-mono text-xs shadow-sm">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <a href="mailto:mesingh9719@gmail.com,susingh9719@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 underline">
                  mesingh9719@gmail.com / susingh9719@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <a href="tel:+15551234567" className="hover:text-cyan-600 dark:hover:text-cyan-400 underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl relative overflow-hidden text-left">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    A Senior Solutions Architect will review your technical requirements and respond with an architecture brief within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      Project Specification Form
                    </h3>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% NDA Protected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Henderson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Enterprises"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Software Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="crm">Custom CRM System</option>
                        <option value="erp">Enterprise ERP Suite</option>
                        <option value="hrms">Smart HRMS & Payroll</option>
                        <option value="custom">Custom SaaS & Microservices</option>
                        <option value="cms">Headless WordPress / CMS</option>
                        <option value="devops">Server Handling & DevOps</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                        Anticipated Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="Immediate (< 2 weeks)">Immediate (&lt; 2 weeks)</option>
                        <option value="1 - 2 Months">1 - 2 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="Flexible">Flexible Roadmap</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Technical Requirements / Feature Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your current bottleneck, required integrations, user count, or architectural goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <Button
                    variant="accent"
                    size="lg"
                    isLoading={isSubmitting}
                    showArrow
                    className="w-full justify-center font-bold text-base shadow-lg"
                  >
                    Request Technical Scope & Free Consultation
                  </Button>
                  {submitError && (
                    <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                      {submitError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
