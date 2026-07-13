import { cn } from "@/lib/cn";

interface PasswordStrengthIndicatorProps {
  password: string;
}

const getStrength = (value: string) => {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[0-9]/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  return score;
};

const strengthLabels = ["Very weak", "Weak", "Fair", "Strong"];

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const score = getStrength(password);
  const strength = strengthLabels[Math.min(score, strengthLabels.length - 1)] ?? "Very weak";
  const width = `${(score / 4) * 100}%`;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Password strength</span>
        <span className={cn("font-medium", score >= 3 ? "text-emerald-600" : "text-foreground")}>{strength}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300",
            score >= 3 ? "bg-emerald-600" : score >= 2 ? "bg-amber-500" : "bg-rose-500",
          )}
          style={{ width }}
        />
      </div>
    </div>
  );
}
