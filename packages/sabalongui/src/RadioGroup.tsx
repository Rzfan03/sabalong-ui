"use client"
import { useState } from "react";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: "vertical" | "horizontal";
  className?: string;
}

export function RadioGroup({
  label,
  options,
  value,
  defaultValue = "",
  onChange,
  direction = "vertical",
  className = "",
}: RadioGroupProps) {
  const [internal, setInternal] = useState(defaultValue);
  const selected = value ?? internal;

  const select = (v: string) => {
    setInternal(v);
    onChange?.(v);
  };

  return (
    <fieldset className={`flex flex-col gap-2 ${className}`}>
      {label && <legend className="mb-1 text-xs font-medium text-zinc-500">{label}</legend>}
      <div className={direction === "horizontal" ? "flex flex-wrap gap-4" : "flex flex-col gap-2"}>
        {options.map((opt) => {
          const active = selected === opt.value;
          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-2.5 ${
                opt.disabled ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <input
                type="radio"
                name={label || "radio-group"}
                value={opt.value}
                checked={active}
                disabled={opt.disabled}
                onChange={() => select(opt.value)}
                className="sr-only"
              />
              <span
                className={`flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors ${
                  active ? "border-blue-500" : "border-zinc-600"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full bg-blue-500 transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
              <span className="text-sm text-zinc-200">{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
