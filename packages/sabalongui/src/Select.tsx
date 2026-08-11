"use client"
import { useState, type ChangeEvent } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Select({
  label,
  placeholder,
  options,
  value,
  defaultValue = "",
  onChange,
  className = "",
}: SelectProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;

  const handle = (e: ChangeEvent<HTMLSelectElement>) => {
    setInternal(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      {label && <span className="text-xs font-medium text-zinc-500">{label}</span>}
      <div className="relative">
        <select
          value={current}
          onChange={handle}
          className="w-full cursor-pointer appearance-none rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 pr-9 text-sm text-zinc-200 outline-none transition-colors hover:bg-zinc-800 focus:border-blue-500/60"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-zinc-900 text-zinc-200">
              {opt.label}
            </option>
          ))}
        </select>
        <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500" />
      </div>
    </label>
  );
}
