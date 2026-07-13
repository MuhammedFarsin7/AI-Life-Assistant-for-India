import { LoginForm } from "@/components/features/auth/LoginForm";
import { AuthShell } from "@/components/features/auth/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in"
      description="Access your dashboard and continue your personalized experience."
      footerText="Need an account?"
      footerLink="/register"
      footerLinkText="Create one"
      variant="login"
    >
      <LoginForm />
    </AuthShell>
  );
}
