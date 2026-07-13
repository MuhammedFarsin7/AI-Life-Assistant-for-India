"use client";

import { useEffect, useId } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined}>
      <div className={cn("w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-xl", className)}>
        {title ? (
          <h2 id={titleId} className="mb-4 text-lg font-semibold text-foreground">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </div>
  );
}
