"use client";
import Link from "next/link";
import { Phone, Mail, Flame } from "lucide-react";
import { useEffect, useState } from "react";

export default function UtilityBar() {
  const [lang, setLang] = useState<"bn" | "en">("bn");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && window.localStorage.getItem("jatra-lang")) as "bn" | "en" | null;
    if (saved === "bn" || saved === "en") setLang(saved);
  }, []);

  function pick(next: "bn" | "en") {
    setLang(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("jatra-lang", next);
      document.documentElement.setAttribute("lang", next);
    }
  }

  return (
    <div className="hidden md:block border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-[12px] text-ink-muted">
        <div className="flex items-center gap-5">
          <a href="tel:+8801711111111" className="flex items-center gap-1.5 hover:text-ink">
            <Phone className="h-3 w-3" /> +৮৮০ ১৭১১-১১১১১১
          </a>
          <a href="mailto:admission@jatra.bd" className="flex items-center gap-1.5 hover:text-ink">
            <Mail className="h-3 w-3" /> admission@jatra.bd
          </a>
        </div>
        <div className="flex items-center gap-2 text-gold">
          <Flame className="h-3.5 w-3.5" />
          <span className="bn">৪০তম ব্যাচের আবেদন চলছে — শেষ ৩ দিন</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => pick("en")}
            className={lang === "en" ? "text-ink" : "text-ink-muted hover:text-ink"}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <span className="text-border">|</span>
          <button
            onClick={() => pick("bn")}
            className={lang === "bn" ? "text-ink" : "text-ink-muted hover:text-ink"}
            aria-pressed={lang === "bn"}
          >
            বাং
          </button>
          <Link href="/login" className="text-ink-muted hover:text-ink">Login</Link>
          <Link
            href="/apply"
            className="px-3 py-1 rounded-full text-[11px] btn-gold"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
