import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { ServicesGrid } from './components/services/ServicesGrid';
import { ProjectEstimator } from './components/estimator/ProjectEstimator';
import { TechStackSection } from './components/techstack/TechStackSection';
import { WhyChooseUs } from './components/whychooseus/WhyChooseUs';
import { ProcessTimeline } from './components/process/ProcessTimeline';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { Testimonials } from './components/testimonials/Testimonials';
import { EngagementModels } from './components/pricing/EngagementModels';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { ConsultationModal } from './components/contact/ConsultationModal';

export const App: React.FC = () => {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('Custom Enterprise Software Strategy');
  const [prefillScope, setPrefillScope] = useState<string>('');
  const [estimatorInitialService, setEstimatorInitialService] = useState<string>('crm');

  const handleOpenConsultation = (topic?: string) => {
    if (topic) setConsultationTopic(topic);
    setConsultationModalOpen(true);
  };

  const handleOpenEstimator = (serviceId?: string) => {
    if (serviceId) setEstimatorInitialService(serviceId);
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClaimQuoteFromEstimator = (estimateSummary: string) => {
    setPrefillScope(estimateSummary);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070A11] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200 relative overflow-x-hidden transition-colors duration-300">
      {/* Top Streamlined Navbar with Theme Toggle */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation('Executive Consultation')}
        onSelectService={(serviceId) => handleOpenEstimator(serviceId)}
      />

      <main>
        {/* 1. Asymmetrical Hero Section with Interactive HUD */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation('Free Strategy Call')}
          onOpenEstimator={() => handleOpenEstimator()}
        />

        {/* 2. Interactive Split-Screen Services Matrix */}
        <ServicesGrid
          onOpenConsultation={(topic) => handleOpenConsultation(topic)}
          onSelectServiceForEstimator={(serviceId) => handleOpenEstimator(serviceId)}
        />

        {/* 3. Interactive Project Scope & Cost Estimator */}
        <ProjectEstimator
          key={estimatorInitialService}
          initialServiceId={estimatorInitialService}
          onRequestQuote={handleClaimQuoteFromEstimator}
        />

        {/* 4. Tech Stack Infrastructure & Benchmark Lab */}
        <TechStackSection
          onOpenConsultation={(tech) => handleOpenConsultation(`Tech Stack Architecture: ${tech}`)}
        />

        {/* 5. Why Choose Us & Agency Comparison Manifesto */}
        <WhyChooseUs
          onOpenConsultation={() => handleOpenConsultation('Why Choose Us - Consultation')}
        />

        {/* 6. Process / Delivery Roadmap */}
        <ProcessTimeline
          onOpenConsultation={() => handleOpenConsultation('Agile Sprint Roadmap')}
        />

        {/* 7. Magazine-Style Portfolio & Case Studies */}
        <PortfolioSection
          onOpenConsultation={(category) => handleOpenConsultation(`Case Study Inquiry: ${category}`)}
        />

        {/* 8. Verified Client Testimonials */}
        <Testimonials
          onOpenConsultation={() => handleOpenConsultation('Testimonials Inquiry')}
        />

        {/* 9. Commercial Engagement & Pricing Tiers */}
        <EngagementModels
          onOpenConsultation={(plan) => handleOpenConsultation(`Engagement Model: ${plan}`)}
        />

        {/* 10. High-Impact Contact & Lead Capture Terminal */}
        <ContactSection
          key={prefillScope}
          prefillScope={prefillScope}
        />
      </main>

      {/* Structured Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation('Footer Direct Strategy')}
      />

      {/* Floating Quick Action Controls */}
      <FloatingActions
        onOpenConsultation={() => handleOpenConsultation('Floating CTA Consultation')}
        onOpenEstimator={() => handleOpenEstimator()}
      />

      {/* Global Quick-Booking Consultation Modal */}
      <ConsultationModal
        key={`${consultationTopic}-${consultationModalOpen}`}
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialTopic={consultationTopic}
      />
    </div>
  );
};

export default App;
