import { ALUMNI, BOOTCAMPS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Quote, TrendingUp, Briefcase, Calendar } from "lucide-react";
import { bnTaka } from "@/lib/format";

export function generateStaticParams() {
  return ALUMNI.map((a) => ({ slug: a.slug }));
}

export default function AlumniDetail({ params }: { params: { slug: string } }) {
  const a = ALUMNI.find((x) => x.slug === params.slug);
  if (!a) return notFound();
  const bootcamp = BOOTCAMPS.find((b) => b.slug === a.trackSlug);

  return (
    <>
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <Image src={a.photo} alt={a.nameEn} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        <div className="relative h-full mx-auto max-w-5xl px-5 md:px-6 flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-widest num-mono text-gold mb-3">{a.batch}</div>
          <h1 className="bn-headline text-5xl md:text-7xl">{a.nameBn}</h1>
          <div className="flex items-center gap-3 mt-4">
            <Image src={a.companyLogo} alt={a.company} width={32} height={32} className="h-8 w-8 rounded bg-white/95 p-1 object-contain" />
            <span className="text-lg">{a.afterRole} · {a.company}</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-3">
            <Tile icon={Briefcase} label="বর্তমান" value={a.afterRole} />
            <Tile icon={TrendingUp} label="বেতন" value={`${bnTaka(a.salary)}/মাস`} highlight />
            <Tile icon={Calendar} label="ব্যাচ" value={a.batch} />
          </div>

          <div className="card-premium p-8 md:p-10 mt-10">
            <Quote className="h-9 w-9 text-gold mb-4" />
            <p className="bn-serif text-2xl md:text-3xl leading-relaxed">{a.quote}</p>
          </div>

          <article className="prose-invert mt-12 space-y-6">
            <h2 className="bn-headline text-3xl md:text-4xl">পুরো যাত্রা</h2>
            <p className="bn text-base md:text-lg leading-relaxed text-ink/95">{a.story}</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="card-premium p-5">
                <div className="text-xs text-ink-muted uppercase tracking-widest">আগে</div>
                <div className="bn text-lg mt-2">{a.beforeRole}</div>
              </div>
              <div className="card-premium p-5 border-gold/40">
                <div className="text-xs text-emerald uppercase tracking-widest">এখন</div>
                <div className="bn text-lg mt-2">{a.afterRole} · {a.company}</div>
                <div className="num-mono gold-text font-bold mt-1">{bnTaka(a.salary)}/মাস</div>
              </div>
            </div>
          </article>

          <div className="mt-12 p-8 rounded-2xl border-2 border-gold/30 bg-gold/5 text-center">
            <h3 className="bn-headline text-2xl">আপনিও পারবেন</h3>
            <p className="bn text-ink-muted mt-2">একই বুটক্যাম্পে ভর্তি হোন</p>
            {bootcamp && (
              <Link href={`/bootcamp/${bootcamp.slug}`} className="btn-gold mt-5 inline-flex px-6 py-3 rounded-full text-sm font-semibold bn">
                {bootcamp.nameBn} →
              </Link>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Tile({ icon: Icon, label, value, highlight }: { icon: any; label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`card-premium p-5 ${highlight ? "border-gold/50" : ""}`}>
      <Icon className={`h-4 w-4 mb-2 ${highlight ? "text-gold" : "text-ink-muted"}`} />
      <div className="text-[11px] text-ink-muted uppercase tracking-widest">{label}</div>
      <div className={`bn font-semibold mt-1 ${highlight ? "gold-text num-mono" : ""}`}>{value}</div>
    </div>
  );
}
