import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export default function PrimaryButton({ variant = 'primary', children, ...props }: Props) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl px-4 py-2 transition-transform duration-150';
  const cls =
    variant === 'primary'
      ? `${base} bg-cyan-600 text-white hover:bg-cyan-700 shadow-md`
      : `${base} bg-white text-cyan-600 border border-cyan-200`;

  return (
    <button className={cls} {...props}>
      <span>{children}</span>
      <span aria-hidden className="ml-2">➜</span>
    </button>
  );
}
