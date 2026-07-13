import type { ChangeEvent } from "react";
import { cn } from "@/lib/cn";

interface RememberMeProps {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export function RememberMe({ checked = false, onChange, label = "Remember me" }: RememberMeProps) {
  return (
    <label className="flex items-center gap-2 text-sm text-muted-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
      />
      <span className={cn("font-medium", checked ? "text-foreground" : "text-muted-foreground")}>{label}</span>
    </label>
  );
}
