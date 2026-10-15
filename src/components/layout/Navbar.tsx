import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import type { PageId } from '../../lib/pages';
import { Brand } from '../common/Brand';

const links = [{ id: 'home', label: 'Home', href: '/' }, { id: 'services', label: 'Services', href: '/services/' }, { id: 'about', label: 'About', href: '/about/' }, { id: 'contact', label: 'Contact', href: '/contact/' }];

export function Navbar({ currentPage }: { currentPage: PageId }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia('(min-width: 800px)');
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    media.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', outside);
      media.removeEventListener('change', resize);
    };
  }, [open]);
  return <header className="site-header" ref={header}>
    <div className="container header-inner"><Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.id} href={link.href} aria-current={currentPage === link.id ? 'page' : undefined}>{link.label}</a>)}</nav>
      <a className="button button-primary header-cta" href="/contact/">Discuss Your Project <ArrowUpRight size={16} aria-hidden="true" /></a>
      <button className="menu-toggle" type="button" ref={menuButton} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open} onBlur={event => { if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) setOpen(false); }}>
      {links.map(link => <a key={link.id} href={link.href} aria-current={currentPage === link.id ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}
      <a className="button button-primary" href="/contact/">Discuss Your Project <ArrowUpRight size={17} aria-hidden="true" /></a>
    </nav>
  </header>;
}
