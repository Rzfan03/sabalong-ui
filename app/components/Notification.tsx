"use client"
import { useState } from "react";
import { Notification, type NotificationVariant } from "sabalong-ui";

const variants: NotificationVariant[] = ["success", "danger", "warn", "info", "neutral"];

const buttonStyles: Record<NotificationVariant, string> = {
  success: "bg-emerald-600 hover:bg-emerald-700",
  danger: "bg-red-600 hover:bg-red-700",
  warn: "bg-amber-500 hover:bg-amber-600",
  info: "bg-blue-600 hover:bg-blue-700",
  neutral: "bg-zinc-700 hover:bg-zinc-600",
};

export default function NotificationDemo() {
  const [active, setActive] = useState<NotificationVariant | null>(null);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => (
          <button
            key={v}
            onClick={() => setActive(v)}
            className={`cursor-pointer rounded-lg px-4 py-2 text-sm text-white transition-colors ${buttonStyles[v]}`}
          >
            {v}
          </button>
        ))}
      </div>
      {active && (
        <div className="w-full max-w-sm">
          <Notification
            key={active}
            variant={active}
            title={`Notification ${active}`}
            message="The progress bar will shrink and then automatically close."
            duration={4000}
            onClose={() => setActive(null)}
          />
        </div>
      )}
    </div>
  );
}
