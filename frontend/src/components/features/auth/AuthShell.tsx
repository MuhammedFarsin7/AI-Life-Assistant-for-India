"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
  variant?: "login" | "register" | "forgot";
}

export function AuthShell({
  title,
  description,
  children,
  footerText,
  footerLink,
  footerLinkText,
  variant = "login",
}: AuthShellProps) {
  const [mounted, setMounted] = useState(false);
  if (typeof window !== "undefined" && !mounted) {
    setMounted(true);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(248,250,252,1))] px-4 py-12 text-foreground transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,1))]">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-border/70 bg-background/80 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl">
        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-between bg-gradient-to-br from-primary/10 via-background to-secondary/40 p-8 sm:p-10">
            <div className="space-y-6">
              <Badge variant="outline">Secure access</Badge>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {variant === "forgot" ? "Reset access easily" : variant === "register" ? "Welcome aboard" : "Welcome back"}
                </h1>
                <p className="max-w-md text-base leading-7 text-muted-foreground">
                  {variant === "forgot"
                    ? "Enter your email and we will guide you through a secure reset experience."
                    : variant === "register"
                      ? "Create a polished account experience with privacy in mind."
                      : "Sign in to continue your personalized AI assistance journey."}
                </p>
              </div>
            </div>
            <div className="mt-10 rounded-2xl border border-border/70 bg-card/70 p-5 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Mock experience</p>
              <p className="mt-2">This UI is for presentation and form interaction only. No backend or authentication API is connected.</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader className="px-0 pb-4">
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="px-0">{children}</CardContent>
            </Card>

            <p className="mt-6 text-sm text-muted-foreground">
              {footerText}{" "}
              <Link href={footerLink} className="font-medium text-primary transition-colors hover:text-primary/80">
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
