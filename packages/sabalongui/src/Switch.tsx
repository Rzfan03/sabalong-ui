"use client"
import { useState } from "react";

export interface SwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export function Switch({ defaultChecked = false, checked, onChange, label, className = "" }: SwitchProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked ?? internal;

  const toggle = () => {
    const next = !on;
    setInternal(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={toggle}
      className={`flex cursor-pointer items-center gap-3 ${className}`}
    >
      <span
        className={`flex h-6 w-11 items-center rounded-full p-0.5 transition-colors ${
          on ? "bg-blue-500" : "bg-zinc-700"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
            on ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
      {label && <span className="text-sm text-zinc-300">{label}</span>}
    </button>
  );
}
