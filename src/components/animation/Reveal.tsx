import { createElement, useEffect, useRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { stagger, useAnimate, useInView } from 'motion/react';
import { useAnimations } from './animationContext';

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: 'div' | 'section' | 'article' | 'li';
  children: ReactNode;
  delay?: number;
  staggerChildren?: boolean;
};

export function Reveal({ as = 'div', children, delay = 0, staggerChildren = false, ...props }: RevealProps) {
  const [scope, animate] = useAnimate<HTMLElement>();
  const visible = useInView(scope, { once: true, amount: 0.12 });
  const { enabled } = useAnimations();
  const revealed = useRef(false);

  useEffect(() => {
    if (!visible || !enabled || revealed.current || !scope.current) return;
    const children = Array.from(scope.current.querySelectorAll<HTMLElement>(':scope > [data-reveal-item]'));
    const elements = staggerChildren && children.length ? children : [scope.current];
    const controls = animate(elements, { opacity: [0, 1], y: [20, 0] }, {
      duration: 0.65,
      delay: staggerChildren ? stagger(0.085, { startDelay: delay }) : delay,
      ease: [0.22, 1, 0.36, 1],
    });
    revealed.current = true;
    return () => {
      controls.stop();
      // Leave content visible when motion is disabled or the effect is cleaned up.
      elements.forEach(element => {
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
      });
      revealed.current = false;
    };
  }, [visible, enabled, animate, scope, delay, staggerChildren]);

  // No hidden initial styles: static HTML and failed/disabled JS remain readable.
  return createElement(as, { ...props, ref: scope }, children);
}
