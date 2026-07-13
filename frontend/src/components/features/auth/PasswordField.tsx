"use client";

import { forwardRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
  helperText?: string;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(function PasswordField(
  { className, label, error, helperText, id, ...props },
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const helperId = helperText ? `${fieldId}-help` : undefined;

  return (
    <div className="space-y-2">
      <label htmlFor={fieldId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="relative">
        <input
          ref={ref}
          id={fieldId}
          type={showPassword ? "text" : "password"}
          aria-describedby={helperId}
          aria-invalid={error ? true : undefined}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-12 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            error && "border-destructive focus-visible:ring-destructive",
            className,
          )}
          {...props}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          onClick={() => setShowPassword((value) => !value)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {helperText ? (
        <p id={helperId} className={cn("text-sm", error ? "text-destructive" : "text-muted-foreground")}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
});
