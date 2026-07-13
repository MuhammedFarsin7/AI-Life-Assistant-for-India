"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordField } from "./PasswordField";
import { RememberMe } from "./RememberMe";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    setStatusMessage(`Mock sign-in successful for ${values.email}${rememberMe ? " with remember me enabled" : ""}.`);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        type="email"
        placeholder="name@example.com"
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
        {...register("email")}
      />

      <PasswordField
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        helperText={errors.password?.message}
        {...register("password")}
      />

      <div className="flex items-center justify-between gap-2">
        <RememberMe
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          label="Remember me"
        />
        <a href="/forgot-password" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
          Forgot password?
        </a>
      </div>

      {statusMessage ? <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">{statusMessage}</p> : null}

      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        Sign in
      </Button>
    </form>
  );
}
