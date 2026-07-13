import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <main className={cn("mx-auto w-full max-w-7xl px-6 py-10", className)}>{children}</main>;
}
