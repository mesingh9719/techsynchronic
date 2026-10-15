import { useEffect, useRef, useState } from 'react';
import { useInView, usePageInView } from 'motion/react';
import { AppWindow, ArrowUpRight, Blocks, PenTool, Smartphone, Users } from 'lucide-react';
import { useAnimations } from '../animation/animationContext';

const capabilities = [
  { id: 'web', title: 'Web', description: 'Your digital presence, always on.', status: 'Syncing web presence', icon: AppWindow, href: '/services/#web-development' },
  { id: 'mobile', title: 'Mobile', description: 'Connected wherever you are.', status: 'Connecting mobile experiences', icon: Smartphone, href: '/services/#mobile-apps' },
  { id: 'operations', title: 'Operations', description: 'Software that simplifies daily work.', status: 'Streamlining operations', icon: Blocks, href: '/services/#custom-software' },
  { id: 'experience', title: 'Experience', description: 'Designed around people.', status: 'Tuning the experience', icon: PenTool, href: '/services/#ui-ux-design' },
] as const;

const connections = [
  { path: 'M300 450C320 438 340 438 360 450', x: 300, y: 450 },
  { path: 'M640 450C660 462 680 462 700 450', x: 640, y: 450 },
  { path: 'M500 261C496 278 496 292 500 310', x: 500, y: 261 },
  { path: 'M500 590C496 608 496 621 500 639', x: 500, y: 590 },
];

const ticks = Array.from({ length: 84 }, (_, index) => {
  const angle = (index / 84) * Math.PI * 2;
  return {
    x1: (300 + Math.cos(angle) * 239).toFixed(3),
    y1: (300 + Math.sin(angle) * 239).toFixed(3),
    x2: (300 + Math.cos(angle) * 249).toFixed(3),
    y2: (300 + Math.sin(angle) * 249).toFixed(3),
  };
});

const stars = [
  [9, 11, 4], [20, 6, 3], [31, 24, 3], [7, 29, 3], [7, 71, 3],
  [13, 91, 3], [25, 94, 4], [33, 81, 3], [67, 24, 3], [78, 6, 4],
  [89, 13, 3], [91, 32, 4], [91, 69, 3], [78, 94, 4], [87, 91, 3], [67, 81, 3],
];

export function BusinessDiagram() {
  const stage = useRef<HTMLDivElement>(null);
  const visible = useInView(stage, { amount: 0.12 });
  const pageVisible = usePageInView();
  const { enabled } = useAnimations();
  const active = enabled && visible && pageVisible;
  const [selected, setSelected] = useState(0);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    if (!active || interacting) return;
    const timer = window.setInterval(() => setSelected(value => (value + 1) % capabilities.length), 4500);
    return () => window.clearInterval(timer);
  }, [active, interacting, selected]);

  return (
    <figure className="business-diagram" data-active={active} aria-labelledby="business-diagram-caption">
      <div className="diagram-topline">
        <span className="diagram-label"><span className="diagram-status-dot" />Connected by design</span>
        <span className="diagram-status"><span className="diagram-status-bars" aria-hidden="true"><i /><i /><i /></span>{capabilities[selected].status}</span>
      </div>
      <div className="diagram-stage" ref={stage}>
        <div className="diagram-grid" aria-hidden="true" />
        <div className="diagram-stars" aria-hidden="true">{stars.map(([x, y, size], index) => <i key={index} style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${index * -0.35}s` }} />)}</div>
        <svg className="diagram-links" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
          <rect x="120" y="120" width="760" height="660" rx="330" className="diagram-wide-orbit" />
          {connections.map((connection, index) => <g key={connection.path}>
            <path d={connection.path} className="diagram-connector" />
            <path d={connection.path} className={`diagram-flow ${selected === index ? 'is-selected' : ''}`} pathLength="1" strokeDasharray="0.025 0.055" />
            <g transform={active ? undefined : `translate(${connection.x} ${connection.y})`}>
              {active ? <animateMotion path={connection.path} dur={`${2.8 + index * 0.3}s`} begin={`${index * -0.8}s`} repeatCount="indefinite" /> : null}
              <circle r="11" fill="#3784FC" fillOpacity="0.16" /><circle r="4.5" fill="#3784FC" />
            </g>
          </g>)}
        </svg>
        <div className="diagram-radar" aria-hidden="true">
          <div className="diagram-sweep" />
          <svg viewBox="0 0 600 600" className="diagram-ring-lines" fill="none">
            <circle cx="300" cy="300" r="298" className="radar-ring radar-ring-dotted" />
            <circle cx="300" cy="300" r="270" className="radar-ring" />
            <circle cx="300" cy="300" r="210" className="radar-ring radar-ring-inner" />
            <g className="radar-ticks">{ticks.map((tick, index) => <line key={index} {...tick} />)}</g>
            <g className="radar-rotating-arcs"><circle cx="300" cy="300" r="282" strokeDasharray="130 90 85 125 110 170" /></g>
          </svg>
        </div>
        {capabilities.map((capability, index) => <a
          key={capability.id}
          className={`diagram-node node-${capability.id}${selected === index ? ' is-selected' : ''}`}
          href={capability.href}
          onMouseEnter={() => { setSelected(index); setInteracting(true); }}
          onMouseLeave={() => setInteracting(false)}
          onFocus={() => { setSelected(index); setInteracting(true); }}
          onBlur={() => setInteracting(false)}
          aria-label={`Explore ${capability.title.toLowerCase()}: ${capability.description}`}
        >
          <span className="diagram-node-icon"><capability.icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>
          <ArrowUpRight className="diagram-node-arrow" size={16} aria-hidden="true" />
          <span className="diagram-node-title">{capability.title}</span>
          <span className="diagram-node-description">{capability.description}</span>
          <span className="diagram-equalizer" aria-hidden="true">{[28, 48, 72, 100, 85].map((height, bar) => <i key={bar} style={{ height: `${height}%`, animationDelay: `${bar * -0.19 - index * 0.13}s` }} />)}</span>
        </a>)}
        <div className="diagram-hub">
          <Users size={34} strokeWidth={1.8} aria-hidden="true" />
          <strong>Your business</strong><span>At the center of it all.</span>
        </div>
      </div>
      <figcaption id="business-diagram-caption">
        <p><strong>One business. Everything connected.</strong> <span>Four capabilities, built to work together.</span></p>
        <div className="diagram-capabilities" role="group" aria-label="Highlight a capability" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
          {capabilities.map((capability, index) => <button key={capability.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{capability.title}</button>)}
        </div>
      </figcaption>
    </figure>
  );
}
