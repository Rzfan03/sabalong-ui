"use client"
import { useState, type ReactNode } from "react";

export interface TabsItem {
  label: string;
  content: ReactNode;
}

export function Tabs({ items, defaultIndex = 0, className = "" }: { items: TabsItem[]; defaultIndex?: number; className?: string }) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div className={`w-full max-w-md ${className}`}>
      <div className="flex gap-1 rounded-lg border border-zinc-800 bg-zinc-900 p-1" role="tablist">
        {items.map((item, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`flex-1 rounded-md px-4 py-2 text-sm transition-colors ${
              active === i
                ? "bg-zinc-700 text-zinc-100"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-300">
        {items[active]?.content}
      </div>
    </div>
  );
}
