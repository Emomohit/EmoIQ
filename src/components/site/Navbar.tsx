import { Link } from "@tanstack/react-router";
import { Zap, Menu, X, ShieldCheck, LogOut, LogIn, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/auth";

// Primary nav — short, plain-English labels.
const primaryLinks = [
  { to: "/emoiq", label: "Home" },
  { to: "/emoiq/analyze", label: "Analyze PYQs" },
  { to: "/emoiq/predict", label: "Predict Paper" },
  { to: "/emoiq/quiz", label: "Take Quiz" },
  { to: "/emoiq/plan", label: "Study Plan" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-18 md:px-6">
        <Link to="/emoiq" className="flex items-center gap-3 group" aria-label="EMoIQ home">
          <div className="flex h-9 w-9 rotate-12 items-center justify-center rounded-lg bg-primary shadow-brand transition-transform group-hover:rotate-[24deg] md:h-10 md:w-10">
            <Zap className="h-4 w-4 text-primary-foreground md:h-5 md:w-5" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-extrabold italic uppercase tracking-tighter md:text-xl">
            EMo<span className="text-primary">IQ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground lg:flex">
          {primaryLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/emoiq" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://emolearners.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            EMo Learners <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              {isAdmin && (
                <Link
                  to="/admin"
                  className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-brand md:inline-flex"
                >
                  <ShieldCheck className="h-3.5 w-3.5" /> Admin
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary md:inline-flex"
                title="Sign out"
                aria-label="Sign out"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-brand transition-all hover:scale-105 active:scale-95 md:inline-flex"
            >
              <LogIn className="h-3.5 w-3.5" /> Sign in
            </Link>
          )}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-sm font-semibold uppercase tracking-wider">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                activeProps={{ className: "bg-surface text-foreground" }}
                activeOptions={{ exact: l.to === "/emoiq" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://emolearners.vercel.app"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              EMo Learners <ExternalLink className="h-4 w-4" />
            </a>
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-primary hover:bg-surface">
                    Admin panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="rounded-md px-3 py-2.5 text-left text-muted-foreground hover:bg-surface"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground"
              >
                Sign in / Create account
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
