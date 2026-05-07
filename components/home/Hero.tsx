"use client";
import Link from "next/link";
import Image from "next/image";
import { Play, Star, Trophy, Target, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SplitText from "@/components/anim/SplitText";
import Magnetic from "@/components/anim/Magnetic";
import Tilt from "@/components/anim/Tilt";
import VideoModal from "@/components/VideoModal";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { mx: 0, my: 0, sy: 0 };
    const cur = { mx: 0, my: 0, sy: 0 };
    let raf = 0;
    let inViewport = true;
    let scheduled = false;

    function onMove(e: MouseEvent) {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      target.mx = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      target.my = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      schedule();
    }
    function onScroll() {
      target.sy = window.scrollY;
      schedule();
    }
    function schedule() {
      if (scheduled || !inViewport) return;
      scheduled = true;
      raf = requestAnimationFrame(tick);
    }
    function tick() {
      scheduled = false;
      // ease toward target — single GPU-friendly transform per element
      cur.mx += (target.mx - cur.mx) * 0.18;
      cur.my += (target.my - cur.my) * 0.18;
      cur.sy += (target.sy - cur.sy) * 0.2;

      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(${cur.mx * 0.3}px, ${cur.my * 0.3 + cur.sy * 0.12}px, 0)`;
      }
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${cur.mx * 1.4}px, ${cur.my * 1.4 + cur.sy * 0.08}px, 0)`;
      }
      if (rightColRef.current) {
        rightColRef.current.style.transform = `translate3d(${-cur.mx * 0.35}px, ${-cur.my * 0.35}px, 0)`;
      }

      const settled =
        Math.abs(target.mx - cur.mx) < 0.05 &&
        Math.abs(target.my - cur.my) < 0.05 &&
        Math.abs(target.sy - cur.sy) < 0.5;
      if (!settled) schedule();
    }

    // pause RAF when hero is offscreen
    const obs = new IntersectionObserver(
      ([e]) => { inViewport = e.isIntersecting; if (inViewport) schedule(); },
      { threshold: 0 }
    );
    if (heroRef.current) obs.observe(heroRef.current);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    schedule();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-10 sm:pt-16 md:pt-24 pb-14 sm:pb-20 overflow-hidden"
    >
      {/* Aurora */}
      <div className="aurora" />

      {/* Grid background — parallax */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-bg opacity-40 pointer-events-none will-change-transform"
      />

      {/* Spotlight */}
      <div className="absolute inset-0 spotlight pointer-events-none" />

      {/* Particles — reduced count, paused offscreen via aurora's animation timing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${(i * 47) % 100}%`,
              animationDelay: `${(i * 1.2) % 12}s`,
              animationDuration: `${18 + (i % 4) * 4}s`,
              opacity: 0.35 + (i % 3) * 0.15,
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
            }}
          />
        ))}
      </div>

      {/* Mouse-following gold blob */}
      <div
        ref={blobRef}
        className="absolute pointer-events-none will-change-transform hidden md:block"
        style={{
          top: "20%",
          left: "55%",
          width: 460,
          height: 460,
          background: "radial-gradient(circle, rgba(232,179,61,0.16) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="dot" style={{ background: "#10B981" }} />
            <span className="bn text-gold">৪০তম ব্যাচ — ১৫ জুন শুরু</span>
          </div>

          <h1 className="bn-headline text-[34px] sm:text-[44px] md:text-7xl lg:text-[88px] leading-[1.06] mt-5 sm:mt-6 overflow-hidden">
            <SplitText text="৬ মাসে বদলে দিন" by="word" stagger={80} className="block" />
            <SplitText text="আপনার ক্যারিয়ার।" by="word" stagger={80} delay={400} className="block" />
          </h1>

          <h1 className="bn-headline text-[28px] sm:text-[36px] md:text-6xl lg:text-[78px] leading-[1.06] mt-2 overflow-hidden">
            <SplitText text="চাকরির গ্যারান্টি" by="word" stagger={70} delay={900} className="text-shimmer inline-block" />
            <SplitText text=" সহ।" by="word" stagger={70} delay={1100} />
          </h1>

          <p
            className="bn text-ink-muted mt-6 sm:mt-7 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "1.4s", animationFillMode: "both" }}
          >
            দেশের সেরা ইন্ডাস্ট্রি মেন্টরদের সাথে লাইভ ক্লাস · রিয়েল প্রজেক্ট · গ্যারান্টিড প্লেসমেন্ট। চাকরি না পেলে ১০০% টাকা ফেরত।
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 animate-fade-up"
            style={{ animationDelay: "1.55s", animationFillMode: "both" }}
          >
            <Magnetic strength={0.3} className="w-full sm:w-auto">
              <Link
                href="/apply"
                className="btn-gold btn-gold-rich w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-base bn font-semibold inline-flex items-center justify-center gap-2"
              >
                এখনই আবেদন করুন →
              </Link>
            </Magnetic>
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <button
                onClick={() => setVideoOpen(true)}
                className="btn-ghost w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm bn inline-flex items-center justify-center gap-2 group"
                aria-label="Watch how it works video"
              >
                <span className="h-7 w-7 rounded-full bg-gold/10 grid place-items-center group-hover:bg-gold/20 transition">
                  <Play className="h-3 w-3 fill-current text-gold ml-0.5" />
                </span>
                ৯০ সেকেন্ডে দেখুন কীভাবে কাজ করে
              </button>
            </Magnetic>
          </div>

          <div className="mt-9 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl">
            {[
              { icon: Trophy, val: "১০,০০০+", label: "গ্র্যাজুয়েট" },
              { icon: Star, val: "৪.৯/৫", label: "রেটিং" },
              { icon: Target, val: "৯৭%", label: "প্লেসমেন্ট" },
              { icon: Wallet, val: "৳৭০K", label: "গড় বেতন" },
            ].map(({ icon: Icon, val, label }, i) => (
              <div
                key={label}
                className="glass rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 lift animate-fade-up min-w-0"
                style={{ animationDelay: `${1.7 + i * 0.08}s`, animationFillMode: "both" }}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0" />
                <div className="min-w-0">
                  <div className="num-mono text-xs sm:text-sm font-bold gold-text truncate">{val}</div>
                  <div className="bn text-[10px] sm:text-[11px] text-ink-muted truncate">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: alumni stack with parallax */}
        <div
          ref={rightColRef}
          className="lg:col-span-5 relative h-[480px] md:h-[560px] hidden md:block will-change-transform"
        >
          <FloatingCard
            name="মীর সাকিব"
            role="Software Engineer"
            company="Pathao"
            companyLogo="https://logo.clearbit.com/pathao.com"
            salary="৳১,২০,০০০"
            photo="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80"
            position="top-0 right-0 rotate-[6deg]"
            delay={0.4}
            bob={false}
          />
          <FloatingCard
            name="রুমানা আক্তার"
            role="Data Scientist"
            company="bKash"
            companyLogo="https://logo.clearbit.com/bkash.com"
            salary="৳৯৫,০০০"
            photo="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80"
            position="top-32 left-0 -rotate-[5deg]"
            delay={0.6}
            bob
          />
          <FloatingCard
            name="তারেক আজিজ"
            role="Product Manager"
            company="Brain Station 23"
            companyLogo="https://logo.clearbit.com/brainstation-23.com"
            salary="৳৮৫,০০০"
            photo="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80"
            position="bottom-0 right-8 rotate-[3deg]"
            delay={0.8}
            bob={false}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-muted text-[10px] uppercase tracking-widest">
        <span>scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
        title="যাত্রা — ৯০ সেকেন্ডে দেখুন"
      />
    </section>
  );
}

function FloatingCard({
  name,
  role,
  company,
  companyLogo,
  salary,
  photo,
  position,
  delay,
  bob,
}: any) {
  return (
    <div
      className={`absolute ${position} w-[260px] md:w-[280px] animate-fade-up ${bob ? "float-bob" : ""}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: "both" }}
    >
      <Tilt max={10}>
        <div className="glass rounded-2xl p-3 shadow-card border-draw">
          <div className="relative h-40 rounded-xl overflow-hidden">
            <Image src={photo} alt={name} fill className="object-cover ken-burns" sizes="280px" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2">
              <Image src={companyLogo} alt={company} width={28} height={28} className="h-7 w-7 rounded-md bg-white/95 p-1 object-contain" />
              <span className="text-xs text-ink/95">{company}</span>
            </div>
          </div>
          <div className="px-1 pt-3">
            <div className="bn-headline text-base">{name}</div>
            <div className="text-xs text-ink-muted">{role}</div>
            <div className="num-mono text-sm font-bold gold-text mt-2">
              {salary}
              <span className="text-ink-muted text-xs">/মাস</span>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
