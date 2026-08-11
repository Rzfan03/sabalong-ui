import type { ReactNode } from "react";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";

export interface StatProps {
  label: string;
  value: string | number;
  trend?: "up" | "down";
  trendLabel?: string;
  icon?: ReactNode;
  className?: string;
}

export function Stat({ label, value, trend, trendLabel, icon, className = "" }: StatProps) {
  return (
    <div className={`flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5 inset-shadow-sm inset-shadow-zinc-800 ${className}`}>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-zinc-500">{label}</span>
        <span className="text-2xl font-semibold text-zinc-100">{value}</span>
        {trend && (
          <span
            className={`flex items-center gap-1 text-xs ${
              trend === "up" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {trend === "up" ? <IoArrowUp /> : <IoArrowDown />}
            {trendLabel}
          </span>
        )}
      </div>
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700/20 text-zinc-300">
          {icon}
        </div>
      )}
    </div>
  );
}
