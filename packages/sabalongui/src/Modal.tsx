"use client"
import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, footer, className = "" }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-200 shadow-xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        <div className="mt-3 text-sm text-zinc-400">{children}</div>
        {footer && <div className="mt-6 flex justify-end gap-3">{footer}</div>}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 text-zinc-500 transition-colors hover:text-zinc-200"
        >
          <IoCloseOutline size={20} />
        </button>
      </div>
    </div>,
    document.body,
  );
}
