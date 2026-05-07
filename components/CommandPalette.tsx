"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Compass,
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Briefcase,
  Phone,
  CreditCard,
  HelpCircle,
  MessageCircle,
  FileText,
  LogIn,
  ArrowRight,
  Command,
} from "lucide-react";
import { BOOTCAMPS } from "@/lib/data";

type Item = {
  group: "Navigate" | "Action" | "Bootcamp";
  label: string;
  hint?: string;
  href?: string;
  onRun?: () => void;
  icon: React.ComponentType<{ className?: string }>;
  keywords?: string;
};

const NAV_ITEMS: Item[] = [
  { group: "Navigate", label: "Home",                  href: "/",            icon: Compass,        keywords: "home start" },
  { group: "Navigate", label: "All Bootcamps",         href: "/bootcamps",   icon: GraduationCap,  keywords: "courses tracks" },
  { group: "Navigate", label: "Mentors",               href: "/mentors",     icon: Users,          keywords: "teachers instructors" },
  { group: "Navigate", label: "Alumni Success",        href: "/alumni",      icon: Trophy,         keywords: "stories grads" },
  { group: "Navigate", label: "Placement",             href: "/placement",   icon: Briefcase,      keywords: "jobs hiring guarantee" },
  { group: "Navigate", label: "Pricing & EMI",         href: "/pricing",     icon: CreditCard,     keywords: "fee cost installment" },
  { group: "Navigate", label: "Blog",                  href: "/blog",        icon: BookOpen,       keywords: "articles" },
  { group: "Navigate", label: "About Jatra",           href: "/about",       icon: FileText,       keywords: "company story" },
  { group: "Navigate", label: "FAQ / Help",            href: "/help",        icon: HelpCircle,     keywords: "support questions" },
  { group: "Navigate", label: "Login",                 href: "/login",       icon: LogIn,          keywords: "sign in account" },
];

const BOOTCAMP_ITEMS: Item[] = BOOTCAMPS.map((b) => ({
  group: "Bootcamp" as const,
  label: `${b.nameBn} — ${b.nameEn}`,
  href: `/bootcamp/${b.slug}`,
  icon: GraduationCap,
  keywords: `${b.nameEn} ${b.slug}`,
}));

const ACTION_ITEMS: Item[] = [
  { group: "Action", label: "Apply Now",            href: "/apply", icon: ArrowRight,     keywords: "enroll register submit" },
  { group: "Action", label: "Talk on WhatsApp",     icon: MessageCircle, keywords: "chat support",
    onRun: () => window.open("https://wa.me/8801711111111", "_blank") },
  { group: "Action", label: "Call Admissions",      icon: Phone, keywords: "phone",
    onRun: () => (window.location.href = "tel:+8801711111111") },
];

const ALL: Item[] = [...NAV_ITEMS, ...BOOTCAMP_ITEMS, ...ACTION_ITEMS];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const mod = isMac ? e.metaKey : e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "/" && !open) {
        const t = e.target as HTMLElement;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      const t = window.setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = "hidden";
      return () => {
        window.clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return ALL;
    return ALL.filter((i) =>
      (i.label + " " + (i.keywords ?? "") + " " + i.group).toLowerCase().includes(term)
    );
  }, [q]);

  function run(i: Item) {
    setOpen(false);
    if (i.href) router.push(i.href);
    else i.onRun?.();
  }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[active];
      if (item) run(item);
    }
  }

  if (!open) return null;

  let lastGroup = "";
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-start pt-[6vh] sm:pt-[10vh] px-3 sm:px-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-bg/70 backdrop-blur-md" />
      <div
        className="relative w-full max-w-xl glass border-draw rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3.5 sm:py-4 border-b border-white/5">
          <Search className="h-4 w-4 text-gold shrink-0" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Search pages, bootcamps, actions…"
            className="flex-1 bg-transparent border-0 p-0 text-base sm:text-sm bn focus:ring-0 focus:shadow-none min-w-0"
            style={{ background: "transparent", border: 0, padding: 0, boxShadow: "none" }}
          />
          <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-bg-high/70 border border-white/5 text-[10px] num-mono text-ink-muted shrink-0">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] sm:max-h-[55vh] overflow-y-auto py-2 no-bar">
          {results.length === 0 && (
            <div className="px-5 py-10 text-center text-sm bn text-ink-muted">
              কোনো ফলাফল পাওয়া যায়নি
            </div>
          )}
          {results.map((i, idx) => {
            const showHeader = i.group !== lastGroup;
            lastGroup = i.group;
            const Icon = i.icon;
            const isActive = idx === active;
            return (
              <div key={`${i.group}-${i.label}`}>
                {showHeader && (
                  <div className="px-4 sm:px-5 pt-3 pb-1 text-[10px] uppercase tracking-[0.18em] num-mono text-ink-muted">
                    {i.group}
                  </div>
                )}
                <button
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => run(i)}
                  className={`w-full flex items-center gap-3 px-4 sm:px-5 py-2.5 text-left transition ${
                    isActive ? "bg-gold/10" : "hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`h-8 w-8 grid place-items-center rounded-lg border ${
                      isActive ? "border-gold/50 bg-gold/10" : "border-white/5 bg-white/5"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-gold" : "text-ink/80"}`} />
                  </span>
                  <span className="bn flex-1 text-sm">{i.label}</span>
                  {isActive && <ArrowRight className="h-3.5 w-3.5 text-gold" />}
                </button>
              </div>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center justify-between px-5 py-3 border-t border-white/5 text-[11px] text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-bg-high/60 border border-white/5 num-mono">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-bg-high/60 border border-white/5 num-mono">↵</kbd>
              open
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Command className="h-3 w-3" />
            <kbd className="px-1.5 py-0.5 rounded bg-bg-high/60 border border-white/5 num-mono">K</kbd>
            to toggle
          </span>
        </div>
      </div>
    </div>
  );
}
