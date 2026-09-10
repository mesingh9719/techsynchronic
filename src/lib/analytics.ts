export function trackCTA(name: string, props: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;
  if ((window as any).gtag) {
    (window as any).gtag('event', 'cta_click', { event_label: name, ...props });
  }
  // dev-friendly fallback
  // eslint-disable-next-line no-console
  console.debug('trackCTA', name, props);
}
