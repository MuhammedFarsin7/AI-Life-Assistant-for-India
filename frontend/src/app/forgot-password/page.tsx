import { ForgotPasswordForm } from "@/components/features/auth/ForgotPasswordForm";
import { AuthShell } from "@/components/features/auth/AuthShell";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset password"
      description="Enter the email linked to your account and we will guide you to a secure reset."
      footerText="Remembered your password?"
      footerLink="/login"
      footerLinkText="Back to sign in"
      variant="forgot"
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
