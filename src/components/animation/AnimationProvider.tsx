import { useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import { AnimationContext } from './animationContext';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
function subscribeToReducedMotion(onChange: () => void) {
  const preference = window.matchMedia(reducedMotionQuery);
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
}
const readReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;

export function AnimationProvider({ children }: { children: ReactNode }) {
  // Keep server-rendered content static until the browser preference is known.
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, readReducedMotion, () => true);
  const enabled = !reducedMotion;

  return (
    <AnimationContext.Provider value={{ enabled, reducedMotion }}>
      <MotionConfig reducedMotion={enabled ? 'never' : 'always'}>
        <div className="site-shell" data-motion={enabled ? 'on' : 'off'}>{children}</div>
      </MotionConfig>
    </AnimationContext.Provider>
  );
}

