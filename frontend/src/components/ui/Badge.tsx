import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "secondary" | "outline" | "success";
}

export function Badge({ className, children, variant = "default", ...props }: BadgeProps) {
  const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    outline: "border border-input text-foreground",
    success: "border-transparent bg-emerald-600 text-white",
  };

  return (
    <span
      className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
