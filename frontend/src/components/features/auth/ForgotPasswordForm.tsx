"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const forgotSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotSchema>;

export function ForgotPasswordForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setStatusMessage(`Mock password reset link would be sent to ${values.email}.`);
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

      {statusMessage ? <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">{statusMessage}</p> : null}

      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        Send reset link
      </Button>
    </form>
  );
}
