import { Section } from "@/components/Section";
import Link from "next/link";
import Reveal from "@/components/anim/Reveal";
import Magnetic from "@/components/anim/Magnetic";

export default function FinalCTA() {
  return (
    <Section>
      <div className="relative card-premium p-12 md:p-20 text-center overflow-hidden border-draw">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[600px] bg-gold/15 blur-3xl rounded-full animate-pulse-soft" />

        {/* Decorative orbs */}
        <div className="absolute top-12 left-12 h-3 w-3 rounded-full bg-gold/60 blur-sm float-bob" />
        <div className="absolute top-20 right-16 h-2 w-2 rounded-full bg-emerald/60 blur-sm float-bob" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-16 left-1/4 h-2 w-2 rounded-full bg-gold/40 blur-sm float-bob" style={{ animationDelay: "2s" }} />

        <div className="relative">
          <Reveal variant="fade-up" duration={800}>
            <h2 className="bn-headline text-3xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto">
              প্রস্তুত? আপনার <span className="gold-text text-shimmer">৬ মাসের যাত্রা</span><br />আজই শুরু করুন।
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={150}>
            <p className="bn text-ink-muted mt-6 text-base md:text-lg">
              আবেদন ফ্রি · সিদ্ধান্ত ৭ দিনে · ব্যাচ শুরু ১৫ জুন
            </p>
          </Reveal>
          <Reveal variant="scale" delay={300}>
            <Magnetic strength={0.35}>
              <Link
                href="/apply"
                className="btn-gold btn-gold-rich glow-ring mt-10 inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg bn font-semibold"
                data-cursor="lg"
              >
                আবেদন করুন →
              </Link>
            </Magnetic>
          </Reveal>
          <Reveal variant="fade-up" delay={450}>
            <div className="mt-6 text-xs text-ink-muted bn">
              ৫০০+ আবেদন এই মাসে · মাত্র ৪০ আসন প্রতি ব্যাচ
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
