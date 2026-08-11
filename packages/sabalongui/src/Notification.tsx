"use client"
import { useEffect, useRef, useState, type ReactElement } from "react";
import {
  IoCloseOutline,
  IoCheckmarkCircle,
  IoAlertCircle,
  IoWarning,
  IoInformationCircle,
} from "react-icons/io5";

export type NotificationVariant = "success" | "danger" | "warn" | "info" | "neutral";

export interface NotificationProps {
  title?: string;
  message?: string;
  variant?: NotificationVariant;
  duration?: number;
  showProgress?: boolean;
  onClose?: () => void;
  className?: string;
}

const variantStyles: Record<
  NotificationVariant,
  { icon: ReactElement; iconBg: string; border: string; bar: string }
> = {
  success: {
    icon: <IoCheckmarkCircle className="h-7 w-7 text-emerald-500" />,
    iconBg: "bg-emerald-500/10",
    border: "border-emerald-500/40",
    bar: "bg-emerald-500",
  },
  danger: {
    icon: <IoAlertCircle className="h-7 w-7 text-red-500" />,
    iconBg: "bg-red-500/10",
    border: "border-red-500/40",
    bar: "bg-red-500",
  },
  warn: {
    icon: <IoWarning className="h-7 w-7 text-amber-500" />,
    iconBg: "bg-amber-500/10",
    border: "border-amber-500/40",
    bar: "bg-amber-500",
  },
  info: {
    icon: <IoInformationCircle className="h-7 w-7 text-blue-500" />,
    iconBg: "bg-blue-500/10",
    border: "border-blue-500/40",
    bar: "bg-blue-500",
  },
  neutral: {
    icon: <IoInformationCircle className="h-7 w-7 text-zinc-500" />,
    iconBg: "bg-zinc-500/10",
    border: "border-zinc-700",
    bar: "bg-zinc-500",
  },
};

export function Notification({
  title,
  message,
  variant = "neutral",
  duration = 5000,
  showProgress = true,
  onClose,
  className = "",
}: NotificationProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!duration || duration <= 0) return;

    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const ratio = Math.min(elapsed / duration, 1);
      setProgress(ratio);
      if (ratio >= 1) {
        clearInterval(id);
        setVisible(false);
        onCloseRef.current?.();
      }
    }, 100);

    return () => clearInterval(id);
  }, [duration]);

  const dismiss = () => {
    setVisible(false);
    onCloseRef.current?.();
  };

  if (!visible) return null;

  const styles = variantStyles[variant];

  return (
    <div className={`pointer-events-auto w-full max-w-sm rounded-xl border bg-zinc-900 shadow-lg ${styles.border} ${className}`}>
      <div className="flex items-start gap-3.5 p-4">
        <div className={`flex shrink-0 items-center justify-center rounded-lg p-2 ${styles.iconBg}`}>
          {styles.icon}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          {title && <p className="text-sm font-semibold text-zinc-100">{title}</p>}
          {message && <p className="text-sm leading-relaxed text-zinc-400">{message}</p>}
        </div>
        <button
          onClick={dismiss}
          aria-label="Close notification"
          className="shrink-0 text-zinc-500 transition-colors hover:text-zinc-200"
        >
          <IoCloseOutline size={18} />
        </button>
      </div>
      {showProgress && (
        <div className="h-1 w-full overflow-hidden rounded-b-xl bg-zinc-800">
          <div
            className={`h-full transition-[width] duration-100 ease-linear ${styles.bar}`}
            style={{ width: `${(1 - progress) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
