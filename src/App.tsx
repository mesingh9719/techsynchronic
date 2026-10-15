import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { getPage } from './lib/pages';
import { AnimationProvider } from './components/animation/AnimationProvider';
import { SiteParticles } from './components/animation/SiteParticles';
import { WhatsAppWidget } from './components/contact/WhatsAppWidget';

export default function App({ pathname = typeof window === 'undefined' ? '/' : window.location.pathname }: { pathname?: string }) {
  const page = getPage(pathname);
  useEffect(() => {
    const legacyLinks: Record<string, string> = {
      '#estimator': '/contact/', '#pricing': '/contact/', '#portfolio': '/#why-us',
      '#testimonials': '/#why-us', '#tech-stack': '/services/',
      '#contact': '/contact/', '#about': '/about/',
    };
    const destination = page.id === 'home' && legacyLinks[window.location.hash];
    if (destination) window.location.replace(destination);
  }, [page.id]);
  useEffect(() => {
    document.title = page.title;
    const metadata = {
      'meta[name="description"]': page.description,
      'meta[property="og:title"]': page.title,
      'meta[property="og:description"]': page.description,
      'meta[name="twitter:title"]': page.title,
      'meta[name="twitter:description"]': page.description,
    };
    for (const [selector, content] of Object.entries(metadata)) {
      document.querySelector(selector)?.setAttribute('content', content);
    }
  }, [page.title, page.description]);
  return <AnimationProvider>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar currentPage={page.id} />
    <main id="main-content" tabIndex={-1}>
      <SiteParticles />
      {page.id === 'home' ? <HomePage /> : page.id === 'services' ? <ServicesPage /> : page.id === 'about' ? <AboutPage /> : page.id === 'contact' ? <ContactPage /> : (
        <section className="container page-intro not-found">
          <p className="eyebrow">PAGE NOT FOUND</p><h1>Let’s get you<br />back on track.</h1>
          <p className="lead">This page may have moved. Explore our services or tell us what you’re looking to build.</p>
          <a className="button button-primary" href="/">Back to home</a>
        </section>
      )}
    </main>
    <Footer /><WhatsAppWidget /><Analytics />
  </AnimationProvider>;
}
