import Countdown from "@/components/Countdown";
import { Section } from "@/components/Section";
import Link from "next/link";
import { Calendar, Clock, Users } from "lucide-react";
import Reveal from "@/components/anim/Reveal";
import Magnetic from "@/components/anim/Magnetic";

export default function CohortCountdown() {
  const target = "2026-06-15T00:00:00";
  return (
    <Section className="bg-bg-elevated/40 border-y border-border/50 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[800px] bg-gold/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal variant="fade-up">
          <div className="section-label mb-4">Next cohort</div>
        </Reveal>
        <Reveal variant="fade-up" delay={120}>
          <h2 className="bn-headline text-3xl md:text-5xl">
            পরবর্তী ব্যাচ <span className="gold-text text-shimmer">শুরু হচ্ছে</span>
          </h2>
        </Reveal>
        <Reveal variant="scale" delay={250}>
          <div className="mt-12 inline-flex justify-center">
            <Countdown target={target} />
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Calendar, label: "শুরুর তারিখ", value: "১৫ জুন ২০২৬" },
            { icon: Clock, label: "সময়সূচি", value: "রবি-শুক্র, ৭-১০ PM" },
            { icon: Users, label: "আসন বাকি", value: "মাত্র ১২টি", warn: true },
          ].map((info, i) => (
            <Reveal key={info.label} variant="fade-up" delay={350 + i * 90}>
              <Info {...info} />
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={650}>
          <Magnetic strength={0.3}>
            <Link
              href="/apply"
              className="btn-gold btn-gold-rich mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-base bn font-semibold"
              data-cursor="lg"
            >
              এখনই আবেদন করুন →
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </Section>
  );
}

function Info({ icon: Icon, label, value, warn }: { icon: any; label: string; value: string; warn?: boolean }) {
  return (
    <div className="glass lift rounded-xl p-5 group">
      <Icon className={`h-4 w-4 mx-auto mb-2 ${warn ? "text-crimson" : "text-gold"} group-hover:scale-125 transition`} />
      <div className="text-xs text-ink-muted uppercase tracking-widest">{label}</div>
      <div className={`bn text-base font-semibold mt-1 ${warn ? "text-crimson" : ""}`}>{value}</div>
    </div>
  );
}
