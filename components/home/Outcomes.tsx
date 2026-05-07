import StatCounter from "@/components/StatCounter";
import Image from "next/image";
import { COMPANY_LOGOS } from "@/lib/data";

export default function Outcomes() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 border-y border-border/50 bg-bg-elevated/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[800px] bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-label mb-3 sm:mb-4">Outcomes that matter</div>
          <h2 className="bn-headline text-[26px] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.12] text-balance">
            আমাদের ছাত্রছাত্রীরা পড়ান নাই —<br className="hidden sm:block" />
            {" "}তারা <span className="gold-text">চাকরি পেয়েছেন।</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-10 sm:mt-16 bg-border/40 rounded-2xl sm:rounded-3xl overflow-hidden border border-border">
          {[
            { big: <><StatCounter value={97} />%</>, label: "শিক্ষার্থী চাকরি পেয়েছেন বুটক্যাম্প শেষে" },
            { big: <>৳<StatCounter value={70000} thousands /></>, label: "গড় শুরুর বেতন" },
            { big: <><StatCounter value={3} />x</>, label: "আগের বেতনের তুলনায় বৃদ্ধি" },
            { big: <><StatCounter value={10000} thousands />+</>, label: "সফল গ্র্যাজুয়েট" },
          ].map((s, i) => (
            <Stat key={i} label={s.label} big={s.big} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="bn text-ink-muted text-sm uppercase tracking-widest mb-6">যেসব কোম্পানিতে আমাদের গ্র্যাজুয়েটরা কাজ করছেন</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {COMPANY_LOGOS.slice(0, 8).map((c, i) => (
              <div key={i} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition">
                <Image src={c.logo} alt={c.name} width={28} height={28} className="h-7 w-7 object-contain bg-white/90 rounded p-1" />
                <span className="text-sm text-ink-muted">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, big }: { label: string; big: React.ReactNode }) {
  return (
    <div className="bg-bg-elevated p-5 sm:p-8 md:p-10 h-full">
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gold-text leading-[1.05] tracking-tight">{big}</div>
      <div className="bn text-xs sm:text-sm text-ink-muted mt-3 sm:mt-4 leading-snug">{label}</div>
    </div>
  );
}
