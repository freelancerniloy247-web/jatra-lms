"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Shield,
  CheckCircle2,
  BriefcaseBusiness,
  CalendarRange,
  BadgeDollarSign,
  Sparkles,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/Section";
import Reveal from "@/components/anim/Reveal";
import Tilt from "@/components/anim/Tilt";
import Magnetic from "@/components/anim/Magnetic";

type Pillar = {
  num: string;
  icon: any;
  title: string;
  desc: string;
  detail: string[];
  accent: "gold" | "emerald";
};

const PILLARS: Pillar[] = [
  {
    num: "০১",
    icon: CheckCircle2,
    title: "যোগ্য হলে গ্যারান্টি",
    desc: "স্ক্রিনিং পাস + বুটক্যাম্প সম্পন্ন + ৮০%+ attendance",
    detail: [
      "Final capstone সম্পন্ন",
      "মেন্টর evaluation pass",
      "Mock interview pass",
    ],
    accent: "gold",
  },
  {
    num: "০২",
    icon: BriefcaseBusiness,
    title: "চাকরি খুঁজে দেওয়া",
    desc: "Career coach, interview prep, resume review, mock interviews",
    detail: [
      "১:১ career coaching",
      "Resume + LinkedIn polish",
      "১২+ mock interviews",
    ],
    accent: "emerald",
  },
  {
    num: "০৩",
    icon: CalendarRange,
    title: "৬ মাসের সময়সীমা",
    desc: "বুটক্যাম্প শেষ হওয়ার ৬ মাসের মধ্যে চাকরি না পেলে",
    detail: [
      "প্রতি সপ্তাহে interview leads",
      "Hiring partner referrals",
      "Direct introductions",
    ],
    accent: "gold",
  },
  {
    num: "০৪",
    icon: BadgeDollarSign,
    title: "১০০% টিউশন রিফান্ড",
    desc: "১০০% টিউশন ফি ফেরত — কোনো প্রশ্ন ছাড়াই",
    detail: [
      "৩০ দিনে process",
      "ব্যাংক transfer / bKash",
      "কোনো hidden শর্ত নেই",
    ],
    accent: "emerald",
  },
];

const TIMELINE = [
  { label: "বুটক্যাম্প শেষ", sub: "Day 0", color: "#E8B33D" },
  { label: "Career sprint", sub: "১–৩ মাস", color: "#E8B33D" },
  { label: "Interview phase", sub: "৩–৬ মাস", color: "#10B981" },
  { label: "চাকরি না পেলে → রিফান্ড", sub: "৬+ মাস", color: "#EF4444" },
];

export default function JobGuarantee() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[28px]">
        {/* layered backdrops */}
        <div className="absolute inset-0 rounded-[28px]"
             style={{
               background:
                 "linear-gradient(180deg, rgba(30,34,42,0.85), rgba(15,17,22,0.95))",
             }} />
        <div className="absolute -top-40 -right-40 h-[460px] w-[460px] rounded-full bg-gold/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-emerald/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none rounded-[28px]" />
        {/* gradient frame */}
        <div className="absolute inset-0 rounded-[28px] pointer-events-none"
             style={{
               padding: 1,
               background:
                 "linear-gradient(135deg, rgba(232,179,61,0.65), transparent 35%, transparent 65%, rgba(16,185,129,0.45))",
               WebkitMask:
                 "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
               WebkitMaskComposite: "xor",
               maskComposite: "exclude" as any,
             }} />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 p-5 sm:p-8 md:p-12 lg:p-16">
          {/* LEFT — copy + cards */}
          <div className="lg:col-span-7">
            <Reveal variant="fade-up">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 text-gold text-[11px] uppercase tracking-[0.22em] font-semibold"
                data-cursor="view"
                data-cursor-text="Guaranteed"
              >
                <Shield className="h-3.5 w-3.5" />
                ১০০% Job Guarantee
                <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={80}>
              <h2 className="bn-headline text-[28px] sm:text-[34px] md:text-5xl lg:text-[58px] leading-[1.08] mt-5 sm:mt-6 text-balance">
                চাকরি না পেলে{" "}
                <span className="text-shimmer">১০০% টাকা ফেরত।</span>
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={160}>
              <p className="bn text-ink-muted mt-5 text-base md:text-lg leading-relaxed max-w-2xl">
                আমরা আপনার সাফল্যে এতটাই আত্মবিশ্বাসী যে চুক্তিপত্রে লিখে দিতে রাজি — চাকরি না পেলে ১০০% টিউশন ফি ফেরত।
              </p>
            </Reveal>

            {/* stats strip with counters */}
            <Reveal variant="fade-up" delay={240}>
              <div className="mt-6 sm:mt-7 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl">
                <Stat value={97} suffix="%" label="প্লেসমেন্ট রেট" />
                <Stat value={70} suffix="K+" label="গড় বেতন (৳)" prefix="৳" />
                <Stat value={6} suffix=" মাস" label="গ্যারান্টি উইন্ডো" />
              </div>
            </Reveal>

            {/* pillar cards */}
            <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {PILLARS.map((p, i) => (
                <Reveal key={p.num} variant="fade-up" delay={300 + i * 80}>
                  <PillarCard p={p} />
                </Reveal>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3">
              <Magnetic strength={0.25} className="w-full sm:w-auto">
                <Link
                  href="/apply"
                  className="btn-gold btn-gold-rich w-full sm:w-auto px-6 py-3.5 rounded-full text-sm bn font-semibold inline-flex items-center justify-center gap-2"
                  data-cursor="lg"
                  data-cursor-text="Apply Now"
                  data-cursor-magnet
                >
                  আবেদন করুন <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.18} className="w-full sm:w-auto">
                <Link
                  href="/legal/guarantee"
                  className="btn-ghost w-full sm:w-auto px-6 py-3.5 rounded-full text-sm bn inline-flex items-center justify-center gap-2"
                  data-cursor="lg"
                  data-cursor-text="Read T&C"
                >
                  শর্তাবলি দেখুন
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* RIGHT — medallion + timeline + testimonial */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-7">
            <div className="relative h-[240px] sm:h-[300px] md:h-[340px] grid place-items-center">
              <Medallion />
            </div>

            <Reveal variant="fade-up" delay={200}>
              <Timeline />
            </Reveal>

            <Reveal variant="fade-up" delay={280}>
              <Testimonial />
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────── Stat counter ─────────── */
function Stat({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          obs.unobserve(e.target);
          const dur = 1200;
          const start = performance.now();
          const tick = (t: number) => {
            const k = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - k, 3);
            setN(Math.round(value * eased));
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="glass rounded-xl px-2 sm:px-3 py-2.5 sm:py-3 border border-white/5 text-center">
      <div className="num-mono text-base sm:text-xl md:text-2xl font-bold gold-text leading-tight whitespace-nowrap">
        {prefix}
        {n}
        {suffix}
      </div>
      <div className="bn text-[10px] sm:text-[11px] text-ink-muted mt-1 leading-tight">{label}</div>
    </div>
  );
}

/* ─────────── Pillar card ─────────── */
function PillarCard({ p }: { p: Pillar }) {
  const Icon = p.icon;
  const color = p.accent === "gold" ? "232,179,61" : "16,185,129";
  return (
    <Tilt max={6}>
      <div
        className="group relative rounded-2xl p-5 h-full overflow-hidden border border-white/6 bg-bg/50 transition hover:border-white/15"
        data-cursor="view"
        data-cursor-text={p.title}
      >
        {/* accent corner */}
        <div
          className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-50 group-hover:opacity-100 transition"
          style={{ background: `radial-gradient(circle, rgba(${color},0.25), transparent 70%)` }}
        />
        <div className="relative flex items-start justify-between">
          <span
            className="num-mono text-[11px] tracking-widest"
            style={{ color: `rgba(${color},0.85)` }}
          >
            {p.num}
          </span>
          <span
            className="h-9 w-9 rounded-xl grid place-items-center transition group-hover:scale-110"
            style={{
              background: `rgba(${color},0.12)`,
              border: `1px solid rgba(${color},0.35)`,
            }}
          >
            <Icon className="h-4 w-4" style={{ color: `rgb(${color})` }} />
          </span>
        </div>
        <h4 className="bn-headline text-base mt-3">{p.title}</h4>
        <p className="bn text-xs text-ink-muted mt-2 leading-relaxed">{p.desc}</p>

        {/* hidden detail list — slides up on hover */}
        <div className="mt-3 grid gap-1.5 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          {p.detail.map((d) => (
            <div key={d} className="flex items-center gap-2 bn text-[11px] text-ink/85">
              <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: `rgb(${color})` }} />
              {d}
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  );
}

/* ─────────── Animated guarantee medallion ─────────── */
function Medallion() {
  const text = "১০০% JOB GUARANTEE • CHAKRIR GUARANTEE • REFUND PROMISE • ";
  return (
    <div className="relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] max-w-full" data-cursor="view" data-cursor-text="Sealed">
      {/* outer pulse rings */}
      <span className="absolute inset-0 rounded-full border border-gold/25 animate-ping" style={{ animationDuration: "3s" }} />
      <span className="absolute inset-4 rounded-full border border-gold/40" />
      <span className="absolute inset-10 rounded-full border border-gold/15" />

      {/* rotating SVG text */}
      <svg
        className="absolute inset-0 slow-spin"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <defs>
          <path
            id="circle-path"
            d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text fill="rgba(232,179,61,0.85)" style={{ fontSize: 9, letterSpacing: 4, fontFamily: "var(--font-jetbrains)" }}>
          <textPath href="#circle-path">{text + text}</textPath>
        </text>
      </svg>

      {/* center disc */}
      <div className="absolute inset-[26%] rounded-full grid place-items-center"
           style={{
             background: "radial-gradient(circle at 30% 30%, #f4cb6e, #b8861f)",
             boxShadow:
               "inset 0 4px 18px rgba(255,255,255,0.45), inset 0 -8px 22px rgba(0,0,0,0.45), 0 30px 60px -20px rgba(232,179,61,0.55)",
           }}>
        <div className="grid place-items-center text-center">
          <Shield className="h-10 w-10 text-bg" strokeWidth={2.4} />
          <div className="num-mono text-[10px] font-bold text-bg/80 mt-1 tracking-widest">SEALED</div>
        </div>
      </div>

      {/* sparkles */}
      <Sparkles className="absolute top-2 right-6 h-4 w-4 text-gold animate-pulse" />
      <Sparkles className="absolute bottom-6 left-2 h-3 w-3 text-emerald animate-pulse" style={{ animationDelay: "0.6s" }} />
    </div>
  );
}

/* ─────────── Refund timeline ─────────── */
function Timeline() {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5 border border-white/6">
      <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
        <span className="section-label">Refund Timeline</span>
        <span className="bn text-[10px] sm:text-[11px] text-ink-muted">কীভাবে কাজ করে</span>
      </div>
      <div className="relative">
        <div className="absolute top-[6px] left-2 right-2 h-px bg-gradient-to-r from-gold/60 via-gold/60 to-crimson/70" />
        <div className="grid grid-cols-4 gap-1 sm:gap-2">
          {TIMELINE.map((t) => (
            <div key={t.label} className="relative min-w-0">
              <span
                className="block h-3 w-3 mx-auto rounded-full ring-4 ring-bg"
                style={{ background: t.color }}
              />
              <div className="bn text-[9px] sm:text-[10px] text-ink-muted text-center mt-2 leading-tight break-words">
                {t.label}
              </div>
              <div className="num-mono text-[9px] text-center text-ink/70 mt-0.5">{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────── Mini testimonial ─────────── */
function Testimonial() {
  return (
    <div className="glass rounded-2xl p-5 border border-white/6 relative overflow-hidden">
      <Quote className="absolute -top-2 -left-2 h-14 w-14 text-gold/10" />
      <div className="relative">
        <p className="bn text-sm text-ink/90 leading-relaxed">
          “৪ মাসেই Pathao-তে চাকরি পেয়ে গেছি। গ্যারান্টি লাগেইনি — কিন্তু থাকাটা অনেক confidence দিয়েছে।”
        </p>
        <div className="flex items-center gap-3 mt-4">
          <div
            className="h-8 w-8 rounded-full bg-cover bg-center border border-gold/40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80')",
            }}
          />
          <div className="leading-tight">
            <div className="bn text-xs font-semibold">তারেক আজিজ</div>
            <div className="text-[10px] text-ink-muted">Software Engineer · Pathao</div>
          </div>
        </div>
      </div>
    </div>
  );
}
