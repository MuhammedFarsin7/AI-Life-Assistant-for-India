import { forwardRef } from "react";
import type { TextareaHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: ReactNode;
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, label, helperText, error = false, id, ...props },
  ref,
) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  const helperId = helperText ? `${textareaId}-help` : undefined;

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={textareaId} className="text-sm font-medium text-foreground">
          {label}
        </label>
      ) : null}
      <textarea
        ref={ref}
        id={textareaId}
        aria-describedby={helperId}
        aria-invalid={error || undefined}
        className={cn(
          "flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className,
        )}
        {...props}
      />
      {helperText ? (
        <p id={helperId} className={cn("text-sm", error ? "text-destructive" : "text-muted-foreground")}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
});
