export type ProgressVariant = "default" | "success" | "danger" | "warn" | "info";

export interface ProgressProps {
  value?: number;
  variant?: ProgressVariant;
  showLabel?: boolean;
  indeterminate?: boolean;
  className?: string;
}

const fillStyles: Record<ProgressVariant, string> = {
  default: "bg-blue-500",
  success: "bg-emerald-500",
  danger: "bg-red-500",
  warn: "bg-amber-500",
  info: "bg-blue-500",
};

export function Progress({
  value = 0,
  variant = "default",
  showLabel = false,
  indeterminate = false,
  className = "",
}: ProgressProps) {
  const clamped = Math.min(Math.max(value, 0), 100);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-zinc-500">
          <span>Progress</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        {indeterminate ? (
          <div className={`h-full w-1/2 animate-pulse rounded-full ${fillStyles[variant]}`} />
        ) : (
          <div
            className={`h-full rounded-full transition-[width] duration-300 ${fillStyles[variant]}`}
            style={{ width: `${clamped}%` }}
          />
        )}
      </div>
    </div>
  );
}
