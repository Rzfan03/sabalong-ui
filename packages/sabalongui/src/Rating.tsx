"use client"
import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

export interface RatingProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export function Rating({
  value,
  defaultValue = 0,
  max = 5,
  readOnly = false,
  onChange,
  size = "md",
  className = "",
}: RatingProps) {
  const [internal, setInternal] = useState(defaultValue);
  const [hover, setHover] = useState(0);
  const current = value ?? internal;
  const display = hover || current;

  const rate = (v: number) => {
    setInternal(v);
    onChange?.(v);
  };

  return (
    <div
      className={`flex items-center gap-1 ${readOnly ? "" : "cursor-pointer"} ${className}`}
      role="radiogroup"
      aria-label="Rating"
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <span
          key={n}
          role={readOnly ? undefined : "radio"}
          aria-checked={readOnly ? undefined : current === n}
          onMouseEnter={readOnly ? undefined : () => setHover(n)}
          onMouseLeave={readOnly ? undefined : () => setHover(0)}
          onClick={readOnly ? undefined : () => rate(n)}
          className={readOnly ? "" : "transition-transform hover:scale-110"}
        >
          {n <= display ? (
            <IoStar className={`${sizes[size]} text-blue-500`} />
          ) : (
            <IoStarOutline className={`${sizes[size]} text-zinc-600`} />
          )}
        </span>
      ))}
    </div>
  );
}
