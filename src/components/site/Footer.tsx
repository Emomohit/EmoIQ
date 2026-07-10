import { Link } from "@tanstack/react-router";
import { Zap, Instagram, Send, Linkedin, Youtube, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/30">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 rotate-12 items-center justify-center rounded-lg bg-primary shadow-brand">
              <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-extrabold italic uppercase tracking-tighter">
              EMo<span className="text-primary">IQ</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            EMoIQ is your AI-Powered Smart Exam Strategy Engine. 
            Upload PYQs, get topic weightage, predicted questions, 
            and personalized study plans. Built so you can study smarter.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com/emolearners" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:border-primary hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://t.me/Emo_Learners" target="_blank" rel="noreferrer" aria-label="Telegram" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:border-primary hover:text-primary">
              <Send className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/mohit-ahirwar-12bb58386/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:border-primary hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Explore EMoIQ</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/emoiq" className="transition-colors hover:text-foreground">Home</Link></li>
            <li><Link to="/emoiq/analyze" className="transition-colors hover:text-foreground">Analyze PYQs</Link></li>
            <li><Link to="/emoiq/predict" className="transition-colors hover:text-foreground">Predict Paper</Link></li>
            <li><Link to="/emoiq/quiz" className="transition-colors hover:text-foreground">Take Quiz</Link></li>
            <li><Link to="/emoiq/plan" className="transition-colors hover:text-foreground">Study Plan</Link></li>
            <li><a href="https://emolearners.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-1 transition-colors hover:text-foreground">EMo Learners <ExternalLink className="h-3 w-3" /></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p className="font-mono uppercase tracking-widest">© {new Date().getFullYear()} EMoIQ — Study Smarter.</p>
          <p className="font-mono uppercase tracking-widest">By Mohit Ahirwar · Made in India</p>
        </div>
      </div>
    </footer>
  );
}
