"use client";
import Link from "next/link";
import Image from "next/image";
import { Play, Star, Trophy, Target, Wallet } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative pt-10 sm:pt-16 md:pt-24 pb-14 sm:pb-20 overflow-hidden">
      {/* Static aurora-ish backdrop — no animation, no blur cost */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(35% 45% at 20% 20%, rgba(232,179,61,0.12), transparent 60%), radial-gradient(30% 40% at 80% 30%, rgba(16,185,129,0.06), transparent 60%), radial-gradient(40% 50% at 50% 80%, rgba(232,179,61,0.06), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 spotlight pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <span className="bn text-gold">৪০তম ব্যাচ — ১৫ জুন শুরু</span>
          </div>

          <h1 className="bn-headline text-[34px] sm:text-[44px] md:text-7xl lg:text-[88px] leading-[1.06] mt-5 sm:mt-6">
            <span className="block">৬ মাসে বদলে দিন</span>
            <span className="block">আপনার ক্যারিয়ার।</span>
          </h1>

          <h1 className="bn-headline text-[28px] sm:text-[36px] md:text-6xl lg:text-[78px] leading-[1.06] mt-2">
            <span className="gold-text">চাকরির গ্যারান্টি</span>
            <span> সহ।</span>
          </h1>

          <p className="bn text-ink-muted mt-6 sm:mt-7 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            দেশের সেরা ইন্ডাস্ট্রি মেন্টরদের সাথে লাইভ ক্লাস · রিয়েল প্রজেক্ট · গ্যারান্টিড প্লেসমেন্ট। চাকরি না পেলে ১০০% টাকা ফেরত।
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8">
            <Link
              href="/apply"
              className="btn-gold w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-base bn font-semibold inline-flex items-center justify-center gap-2"
            >
              এখনই আবেদন করুন →
            </Link>
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
          </div>

          <div className="mt-9 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl">
            {[
              { icon: Trophy, val: "১০,০০০+", label: "গ্র্যাজুয়েট" },
              { icon: Star, val: "৪.৯/৫", label: "রেটিং" },
              { icon: Target, val: "৯৭%", label: "প্লেসমেন্ট" },
              { icon: Wallet, val: "৳৭০K", label: "গড় বেতন" },
            ].map(({ icon: Icon, val, label }) => (
              <div
                key={label}
                className="rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 min-w-0 border border-white/6 bg-bg-elevated/60"
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

        {/* Right: alumni stack — static positioning, no parallax/tilt/bob */}
        <div className="lg:col-span-5 relative h-[480px] md:h-[560px] hidden md:block">
          <FloatingCard
            name="মীর সাকিব"
            role="Software Engineer"
            company="Pathao"
            companyLogo="https://logo.clearbit.com/pathao.com"
            salary="৳১,২০,০০০"
            photo="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80"
            position="top-0 right-0 rotate-[6deg]"
          />
          <FloatingCard
            name="রুমানা আক্তার"
            role="Data Scientist"
            company="bKash"
            companyLogo="https://logo.clearbit.com/bkash.com"
            salary="৳৯৫,০০০"
            photo="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80"
            position="top-32 left-0 -rotate-[5deg]"
          />
          <FloatingCard
            name="তারেক আজিজ"
            role="Product Manager"
            company="Brain Station 23"
            companyLogo="https://logo.clearbit.com/brainstation-23.com"
            salary="৳৮৫,০০০"
            photo="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80"
            position="bottom-0 right-8 rotate-[3deg]"
          />
        </div>
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
}: {
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  salary: string;
  photo: string;
  position: string;
}) {
  return (
    <div className={`absolute ${position} w-[260px] md:w-[280px]`}>
      <div className="rounded-2xl p-3 border border-white/8 bg-bg-elevated/80">
        <div className="relative h-40 rounded-xl overflow-hidden">
          <Image src={photo} alt={name} fill className="object-cover" sizes="280px" />
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
    </div>
  );
}
