"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { BOOTCAMPS } from "@/lib/data";
import { bnTaka, bnNumber } from "@/lib/format";

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 border-b border-border/70">
      <div className="mx-auto max-w-7xl px-5 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gold-gradient grid place-items-center text-bg font-black text-lg shadow-gold">
            য
          </div>
          <span className="bn-serif text-2xl font-extrabold tracking-tight">
            যাত্রা
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="px-3 py-2 hover:text-gold flex items-center gap-1 bn">
              বুটক্যাম্প <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {megaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[920px] bg-bg-elevated border border-border rounded-2xl shadow-card p-6 grid grid-cols-2 gap-x-6 gap-y-2">
                {BOOTCAMPS.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/bootcamp/${b.slug}`}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-bg-high/60 transition group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-bg/60 border border-border grid place-items-center group-hover:border-gold/40">
                      <span className="num-mono text-gold text-xs">{bnNumber(b.durationMonths)}m</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bn font-semibold text-sm truncate">{b.nameBn}</div>
                      <div className="text-xs text-ink-muted flex items-center gap-2 mt-0.5">
                        <span className="num-mono">{bnTaka(b.priceBdt)}</span>
                        <span className="text-border">·</span>
                        <span className="bn">EMI ৳{bnNumber(b.emiMonthly)}/মা</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="px-3 py-2 hover:text-gold bn">কেন যাত্রা</Link>
          <Link href="/mentors" className="px-3 py-2 hover:text-gold bn">মেন্টর</Link>
          <Link href="/alumni" className="px-3 py-2 hover:text-gold bn">সাফল্যের গল্প</Link>
          <Link href="/placement" className="px-3 py-2 hover:text-gold bn">প্লেসমেন্ট</Link>
          <Link href="/blog" className="px-3 py-2 hover:text-gold bn">ব্লগ</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              const ev = new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true });
              window.dispatchEvent(ev);
            }}
            className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-xs text-ink-muted hover:border-gold/40 hover:text-ink transition"
            aria-label="Open command palette"
            data-cursor="lg"
            data-cursor-text="Search"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="bn">খুঁজুন…</span>
            <kbd className="num-mono text-[10px] px-1.5 py-0.5 rounded bg-bg-high/60 border border-white/5 ml-2">⌘K</kbd>
          </button>
          <Link href="/login" className="text-sm hover:text-gold bn">Login</Link>
          <Link
            href="/apply"
            className="btn-gold text-sm px-5 py-2 rounded-full bn"
            data-cursor="lg"
            data-cursor-text="Apply"
          >
            আবেদন করুন →
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobile(!mobile)}
          aria-label="Menu"
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {mobile && (
        <div className="lg:hidden bg-bg-elevated border-t border-border px-5 py-5 space-y-3">
          {[
            ["/bootcamps", "বুটক্যাম্প"],
            ["/about", "কেন যাত্রা"],
            ["/mentors", "মেন্টর"],
            ["/alumni", "সাফল্যের গল্প"],
            ["/placement", "প্লেসমেন্ট"],
            ["/pricing", "প্রাইসিং"],
            ["/blog", "ব্লগ"],
            ["/login", "Login"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="block bn text-base py-2 border-b border-border/60"
              onClick={() => setMobile(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/apply" className="btn-gold block text-center py-3 rounded-xl bn font-semibold mt-4">
            আবেদন করুন →
          </Link>
        </div>
      )}
    </header>
  );
}
