import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

// A stable initializer is required by the v4 React provider.
const initializeParticles = async (engine: Engine) => { await loadSlim(engine); };
const options: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 40,
  detectRetina: false,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  background: { color: { value: 'transparent' } },
  particles: {
    number: { value: 48, density: { enable: true, width: 1200, height: 650 } },
    color: { value: '#3784FC' },
    shape: { type: 'circle' },
    opacity: { value: { min: 0.18, max: 0.42 } },
    size: { value: { min: 1, max: 2.4 } },
    links: { enable: true, color: '#3784FC', distance: 145, opacity: 0.13, width: 1 },
    move: { enable: true, speed: 0.6, direction: 'none', outModes: { default: 'out' } },
  },
  interactivity: {
    detectsOn: 'window',
    events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: false } },
    modes: { grab: { distance: 130, links: { opacity: 0.23 } } },
  },
};

export default function ParticleCanvas() {
  return <ParticlesProvider init={initializeParticles}><Particles id="brand-particles" className="particle-canvas" options={options} /></ParticlesProvider>;
}
