import React from 'react';
import PrimaryButton from './PrimaryButton';
import { trackCTA } from '../lib/analytics';

export default function SignupModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    trackCTA('signup_submit');
    // In a real app, call API here. For now just close.
    onClose();
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">Start your free trial</h3>
          <button onClick={onClose} aria-label="Close" className="text-slate-500 hover:text-slate-700">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
          <input required type="email" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100" placeholder="you@company.com" />
          <div className="flex justify-end">
            <PrimaryButton type="submit">Start free</PrimaryButton>
          </div>
        </form>
        <p className="mt-3 text-xs text-slate-500">No credit card required • We never share your email.</p>
      </div>
    </div>
  );
}
