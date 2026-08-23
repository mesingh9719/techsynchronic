import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon, 
  ArrowRight,
  ShieldCheck,
  Users,
  Building2,
  UserCheck,
  Code2,
  LayoutTemplate,
  ServerCog
} from 'lucide-react';
import { Button } from '../common/Button';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectService?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onSelectService
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceSubmenu = [
    { id: 'crm', name: 'Custom CRM Development', desc: 'Sales automation & WhatsApp pipelines', icon: Users },
    { id: 'erp', name: 'Enterprise ERP Solutions', desc: 'Multi-warehouse inventory & ledgers', icon: Building2 },
    { id: 'hrms', name: 'Smart HRMS & Payroll', desc: 'Biometric sync & automated tax payouts', icon: UserCheck },
    { id: 'custom', name: 'Custom Software & SaaS', desc: 'Microservices & Vector DB search', icon: Code2 },
    { id: 'cms', name: 'Headless WordPress & CMS', desc: 'Sub-second speed & editorial tools', icon: LayoutTemplate },
    { id: 'devops', name: 'Server Handling & DevOps', desc: 'Linux VPS clusters & 99.99% SLA', icon: ServerCog }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-50/90 dark:bg-[#070A11]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Brand Logo with generous whitespace */}
            <a
              href="#"
              className="flex items-center gap-3.5 group focus:outline-none pr-6"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 p-0.5 shadow-[0_0_20px_rgba(6,182,212,0.35)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300">
                <div className="w-full h-full bg-white dark:bg-[#070A11] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
                  Tech<span className="text-gradient-cyan">Synchronic</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-0.5">
                  Software Agency
                </span>
              </div>
            </a>

            {/* Essential Desktop Nav Links with Generous Spacing */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors py-2 cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-500' : ''}`} />
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] pt-3 z-50 pointer-events-auto"
                    >
                      <div className="rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-2xl p-4 grid grid-cols-2 gap-2 backdrop-blur-xl">
                        {serviceSubmenu.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.id}
                              href="#services"
                              onClick={(e) => {
                                handleNavClick(e, '#services');
                                if (onSelectService) onSelectService(item.id);
                              }}
                              className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/80 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all flex items-start gap-3 group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Work / Portfolio */}
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, '#portfolio')}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Work
              </a>

              {/* About / Why Us */}
              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, '#why-us')}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              >
                About
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Contact
              </a>
            </nav>

            {/* Right Action: Theme Switcher & Single High-Converting CTA */}
            <div className="flex items-center gap-4 pl-4">
              {/* Light/Dark Toggle Switch with Smooth Icon Flip */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                aria-label="Toggle Light/Dark Theme"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4 text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4 text-slate-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Single Primary Action Button */}
              <div className="hidden sm:block">
                <Button
                  variant="accent"
                  size="sm"
                  onClick={onOpenConsultation}
                  showArrow
                  className="font-bold shadow-md text-xs px-4 py-2"
                >
                  Book a Call
                </Button>
              </div>

              {/* Mobile Hamburger Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 md:hidden focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#070A11] pt-28 px-8 pb-12 md:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white">Direct Engineering Lead:</span> Fast 24h technical proposals with full NDA.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="block text-2xl font-extrabold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-display"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="block text-2xl font-extrabold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-display"
                >
                  Work & Case Studies
                </a>
                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, '#why-us')}
                  className="block text-2xl font-extrabold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-display"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block text-2xl font-extrabold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-display"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <Button
                variant="accent"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                showArrow
                className="w-full font-bold justify-center"
              >
                Book a Strategy Call
              </Button>

              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Theme: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                <button
                  onClick={toggleTheme}
                  className="text-cyan-600 dark:text-cyan-400 font-bold underline"
                >
                  Switch Theme
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
