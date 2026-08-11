import type { ReactNode } from "react";

export interface CardProps {
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function Card({ title, subtitle, footer, className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-900 p-6 inset-shadow-sm inset-shadow-zinc-800 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>}
          {subtitle && <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>}
        </div>
      )}
      <div className="text-sm text-zinc-300">{children}</div>
      {footer && <div className="mt-6 border-t border-zinc-800 pt-4">{footer}</div>}
    </div>
  );
}
