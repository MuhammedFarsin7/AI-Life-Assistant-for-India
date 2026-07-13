import Link from "next/link";

const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-foreground">AI Life Assistant for India</p>
          <p className="mt-1">© 2026 All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socials.map((social) => (
            <Link key={social.label} href={social.href} className="transition-colors hover:text-foreground">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
