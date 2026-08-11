export type DividerVariant = "zinc" | "success" | "danger" | "warn" | "info";

export interface DividerProps {
  label?: string;
  orientation?: "horizontal" | "vertical";
  variant?: DividerVariant;
  className?: string;
}

const lineColors: Record<DividerVariant, string> = {
  zinc: "bg-zinc-800",
  success: "bg-emerald-500/40",
  danger: "bg-red-500/40",
  warn: "bg-amber-500/40",
  info: "bg-blue-500/40",
};

export function Divider({ label, orientation = "horizontal", variant = "zinc", className = "" }: DividerProps) {
  if (orientation === "vertical") {
    return <div className={`h-8 w-px ${lineColors[variant]} ${className}`} />;
  }

  if (!label) {
    return <div className={`h-px w-full ${lineColors[variant]} ${className}`} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`h-px flex-1 ${lineColors[variant]}`} />
      <span className="text-xs text-zinc-500">{label}</span>
      <div className={`h-px flex-1 ${lineColors[variant]}`} />
    </div>
  );
}
