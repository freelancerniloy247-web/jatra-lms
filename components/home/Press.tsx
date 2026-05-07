import { PRESS_LOGOS } from "@/lib/data";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Award } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

export default function Press() {
  return (
    <Section className="border-y border-border/50 bg-bg-elevated/30">
      <div className="text-center">
        <Reveal variant="fade-up">
          <p className="text-xs uppercase tracking-widest text-ink-muted mb-8 bn">প্রেসে আমরা / Featured in</p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PRESS_LOGOS.map((p, i) => (
            <Reveal key={p.name} variant="fade-up" delay={i * 60}>
              <div className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-500 hover:scale-110">
                <Image src={p.logo} alt={p.name} width={28} height={28} className="h-7 w-7 bg-white/95 rounded p-1 object-contain" />
                <span className="text-sm">{p.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade-up" delay={300}>
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-2 rounded-full border border-gold/40 bg-gold/5 text-gold text-xs font-semibold inline-flex items-center gap-2 lift">
              <Award className="h-4 w-4" /> Bangladesh EdTech Award 2024
            </div>
            <div className="px-4 py-2 rounded-full border border-gold/40 bg-gold/5 text-gold text-xs font-semibold inline-flex items-center gap-2 lift">
              <Award className="h-4 w-4" /> Best Career Bootcamp · DigiBangla
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
