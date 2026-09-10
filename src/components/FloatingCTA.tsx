import PrimaryButton from './PrimaryButton';
import { trackCTA } from '../lib/analytics';

export default function FloatingCTA({ onOpenSignup }: { onOpenSignup?: () => void }) {
  function handleClick() {
    trackCTA('floating_get_started');
    if (onOpenSignup) onOpenSignup();
  }

  return (
    <div className="fixed right-5 bottom-6 z-50">
      <div className="flex items-center gap-3 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-full px-3 py-2 shadow-lg">
        <div className="font-medium text-slate-900 dark:text-slate-100">Ready to try it?</div>
        <PrimaryButton onClick={handleClick}>Get started — free</PrimaryButton>
      </div>
    </div>
  );
}
