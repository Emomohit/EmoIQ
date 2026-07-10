import { Link } from "@tanstack/react-router";
import { Home, FileSearch, Sparkles, Brain, ListTodo } from "lucide-react";

const items = [
  { to: "/emoiq", label: "Home", icon: Home, exact: true },
  { to: "/emoiq/analyze", label: "Analyze", icon: FileSearch, exact: false },
  { to: "/emoiq/predict", label: "Predict", icon: Sparkles, exact: false },
  { to: "/emoiq/quiz", label: "Quiz", icon: Brain, exact: false },
  { to: "/emoiq/plan", label: "Plan", icon: ListTodo, exact: false },
] as const;

export function BottomNav() {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2 py-1">
        {items.map(({ to, label, icon: Icon, exact }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact }}
              className="flex flex-col items-center gap-1 rounded-md px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
