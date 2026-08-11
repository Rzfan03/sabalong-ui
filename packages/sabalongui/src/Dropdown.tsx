"use client"
import { useEffect, useRef, useState, type ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface DropdownItem {
  label: string;
  onClick?: () => void;
  danger?: boolean;
}

export interface DropdownProps {
  label?: string;
  trigger?: ReactNode;
  items: DropdownItem[];
  className?: string;
}

export function Dropdown({ label = "Options", trigger, items, className = "" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-zinc-800"
      >
        {trigger ?? label}
        <FiChevronDown
          className={`text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 min-w-40 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 py-1 shadow-xl">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setOpen(false);
                item.onClick?.();
              }}
              className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                item.danger
                  ? "text-red-400 hover:bg-red-500/10"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
