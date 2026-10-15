import { createContext, useContext } from 'react';

export const AnimationContext = createContext({
  enabled: false,
  reducedMotion: true,
});

export function useAnimations() {
  return useContext(AnimationContext);
}
