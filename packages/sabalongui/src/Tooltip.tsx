"use client"
import { useState, type ReactNode } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

const positionStyles: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
};

export function Tooltip({
  label,
  children,
  position = "top",
  className = "",
}: {
  label: string;
  children: ReactNode;
  position?: TooltipPosition;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-100 shadow-lg ${positionStyles[position]}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
