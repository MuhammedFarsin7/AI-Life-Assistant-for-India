import { RegisterForm } from "@/components/features/auth/RegisterForm";
import { AuthShell } from "@/components/features/auth/AuthShell";

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create account"
      description="Set up a polished profile and start your journey with confidence."
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Sign in"
      variant="register"
    >
      <RegisterForm />
    </AuthShell>
  );
}
