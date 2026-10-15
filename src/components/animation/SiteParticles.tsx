import { Component, lazy, Suspense } from 'react';
import type { ReactNode } from 'react';
import { useAnimations } from './animationContext';

const ParticleCanvas = lazy(() => import('./ParticleCanvas'));

// An unavailable decorative chunk should never take the page or form down.
class ParticleBoundary extends Component<{ children: ReactNode }, { unavailable: boolean }> {
  state = { unavailable: false };
  static getDerivedStateFromError() { return { unavailable: true }; }
  render() { return this.state.unavailable ? null : this.props.children; }
}

export function SiteParticles() {
  const { enabled } = useAnimations();
  if (!enabled) return null;
  return <div className="site-particles" aria-hidden="true"><ParticleBoundary><Suspense fallback={null}><ParticleCanvas /></Suspense></ParticleBoundary></div>;
}
