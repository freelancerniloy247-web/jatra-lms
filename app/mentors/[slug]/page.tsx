import { MENTORS, BOOTCAMPS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Linkedin, Briefcase, Star } from "lucide-react";
import { bnNumber } from "@/lib/format";

export function generateStaticParams() {
  return MENTORS.map((m) => ({ slug: m.slug }));
}

export default function MentorDetail({ params }: { params: { slug: string } }) {
  const m = MENTORS.find((x) => x.slug === params.slug);
  if (!m) return notFound();
  const tracks = BOOTCAMPS.filter((b) => m.tracks.includes(b.slug));

  return (
    <Section className="pt-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <Image src={m.photo} alt={m.nameEn} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            <div className="flex items-center gap-2 mt-5">
              <Image src={m.companyLogo} alt={m.company} width={32} height={32} className="h-8 w-8 rounded bg-white/90 p-1 object-contain" />
              <span className="text-sm">{m.company}</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="section-label mb-3">{m.designation}</div>
            <h1 className="bn-headline text-4xl md:text-6xl">{m.nameBn}</h1>
            <div className="text-ink-muted mt-1">{m.nameEn}</div>
            <p className="bn text-base text-ink/90 mt-6 leading-relaxed">{m.bio}</p>
            <div className="flex items-center gap-6 mt-6">
              <Stat icon={Briefcase} label={`${bnNumber(m.yearsExp)}+ yrs`} sub="অভিজ্ঞতা" />
              <Stat icon={Star} label="৪.৯/৫" sub="ছাত্র রেটিং" />
            </div>
            <div className="mt-6">
              <div className="text-xs text-ink-muted uppercase tracking-widest mb-3">Expertise</div>
              <div className="flex flex-wrap gap-2">
                {m.expertise.map((e) => (
                  <div key={e} className="px-3 py-1 rounded-full border border-border text-xs">{e}</div>
                ))}
              </div>
            </div>
            {tracks.length > 0 && (
              <div className="mt-6">
                <div className="text-xs text-ink-muted uppercase tracking-widest mb-3">Teaches in</div>
                <div className="flex flex-wrap gap-2">
                  {tracks.map((t) => (
                    <Link key={t.slug} href={`/bootcamp/${t.slug}`} className="px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs bn hover:bg-gold/10">
                      {t.nameBn}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 mt-8">
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-2 rounded-full text-xs inline-flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              <Link href="/apply" className="btn-gold px-5 py-2.5 rounded-full text-sm font-semibold bn">Learn from {m.nameBn} →</Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stat({ icon: Icon, label, sub }: { icon: any; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-gold" />
      <div>
        <div className="num-mono font-bold">{label}</div>
        <div className="text-[11px] text-ink-muted bn">{sub}</div>
      </div>
    </div>
  );
}
