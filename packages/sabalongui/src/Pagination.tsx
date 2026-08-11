"use client"
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  siblings?: number;
  className?: string;
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function Pagination({ page, totalPages, onChange, siblings = 1, className = "" }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = new Set<number>([1, totalPages]);
  for (const p of range(Math.max(2, page - siblings), Math.min(totalPages - 1, page + siblings))) {
    pages.add(p);
  }

  const sorted = [...pages].sort((a, b) => a - b);
  const items: (number | "ellipsis")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) items.push("ellipsis");
    items.push(p);
  });

  const base =
    "flex h-9 min-w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 text-sm transition-colors";

  return (
    <nav className={`flex items-center gap-1.5 ${className}`} aria-label="Pagination">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
        className={`${base} cursor-pointer text-zinc-400 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <IoChevronBack />
      </button>
      {items.map((item, i) =>
        item === "ellipsis" ? (
          <span key={`e${i}`} className="flex h-9 items-center px-2 text-sm text-zinc-600">
            &hellip;
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-current={item === page ? "page" : undefined}
            className={`${base} cursor-pointer ${
              item === page ? "bg-zinc-700 text-zinc-100" : "text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            {item}
          </button>
        ),
      )}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
        className={`${base} cursor-pointer text-zinc-400 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <IoChevronForward />
      </button>
    </nav>
  );
}
