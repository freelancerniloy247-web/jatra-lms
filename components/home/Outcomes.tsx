import StatCounter from "@/components/StatCounter";
import Image from "next/image";
import { COMPANY_LOGOS } from "@/lib/data";
import Reveal from "@/components/anim/Reveal";
import Marquee from "@/components/anim/Marquee";

export default function Outcomes() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 border-y border-border/50 bg-bg-elevated/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[800px] bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal variant="fade-up">
            <div className="section-label mb-3 sm:mb-4">Outcomes that matter</div>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h2 className="bn-headline text-[26px] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.12] text-balance">
              আমাদের ছাত্রছাত্রীরা পড়ান নাই —<br className="hidden sm:block" />
              {" "}তারা <span className="gold-text text-shimmer">চাকরি পেয়েছেন।</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-10 sm:mt-16 bg-border/40 rounded-2xl sm:rounded-3xl overflow-hidden border border-border">
          {[
            { big: <><StatCounter value={97} />%</>, label: "শিক্ষার্থী চাকরি পেয়েছেন বুটক্যাম্প শেষে" },
            { big: <>৳<StatCounter value={70000} thousands /></>, label: "গড় শুরুর বেতন" },
            { big: <><StatCounter value={3} />x</>, label: "আগের বেতনের তুলনায় বৃদ্ধি" },
            { big: <><StatCounter value={10000} thousands />+</>, label: "সফল গ্র্যাজুয়েট" },
          ].map((s, i) => (
            <Reveal key={i} variant="fade-up" delay={i * 120} duration={700}>
              <Stat label={s.label} big={s.big} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Reveal variant="fade-up">
            <p className="bn text-ink-muted text-sm uppercase tracking-widest">যেসব কোম্পানিতে আমাদের গ্র্যাজুয়েটরা কাজ করছেন</p>
          </Reveal>
          <div className="mt-8">
            <Marquee speed={45}>
              {COMPANY_LOGOS.map((c, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition duration-300">
                  <Image src={c.logo} alt={c.name} width={28} height={28} className="h-7 w-7 object-contain bg-white/90 rounded p-1" />
                  <span className="text-sm text-ink-muted">{c.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, big }: { label: string; big: React.ReactNode }) {
  return (
    <div className="bg-bg-elevated p-5 sm:p-8 md:p-10 group hover:bg-bg-high/60 transition duration-500 relative overflow-hidden h-full">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
        style={{ background: "radial-gradient(50% 50% at 50% 0%, rgba(232,179,61,0.10), transparent)" }}
      />
      <div className="relative">
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gold-text leading-[1.05] tracking-tight">{big}</div>
        <div className="bn text-xs sm:text-sm text-ink-muted mt-3 sm:mt-4 leading-snug">{label}</div>
      </div>
    </div>
  );
}
