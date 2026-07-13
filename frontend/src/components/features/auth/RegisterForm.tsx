"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordField } from "./PasswordField";
import { PasswordStrengthIndicator } from "./PasswordStrengthIndicator";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name should be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const password = watch("password") ?? "";

  const onSubmit = async (values: RegisterFormValues) => {
    setStatusMessage(`Mock account created for ${values.email}.`);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full name"
        placeholder="Aarav Sharma"
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
        {...register("name")}
      />

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
        placeholder="Create a strong password"
        error={errors.password?.message}
        helperText={errors.password?.message}
        {...register("password")}
      />

      <PasswordStrengthIndicator password={password} />

      <PasswordField
        label="Confirm password"
        placeholder="Re-enter your password"
        error={errors.confirmPassword?.message}
        helperText={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      {statusMessage ? <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">{statusMessage}</p> : null}

      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        Create account
      </Button>
    </form>
  );
}
