"use client"
import type { ReactNode } from "react";

export interface AlertBoxProps {
  title?: string;
  children?: ReactNode;
  open: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  className?: string;
}

export function AlertBox({
  title,
  children,
  open,
  onClose,
  onConfirm,
  confirmText = "Ya, Hapus",
  cancelText = "Batal",
  className = "",
}: AlertBoxProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>}
        <p className="mt-2 text-sm text-zinc-400">{children}</p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
