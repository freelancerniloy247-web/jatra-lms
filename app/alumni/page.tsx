import { ALUMNI, BOOTCAMPS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/Section";
import AlumniCard from "@/components/AlumniCard";
import Link from "next/link";
import StatCounter from "@/components/StatCounter";

export const metadata = { title: "এলামনাই — যাত্রা" };

export default function AlumniPage() {
  return (
    <>
      <Section className="pt-12 pb-10">
        <SectionHeader
          eyebrow="Our pride"
          title={<>আমাদের <span className="gold-text">গর্ব</span></>}
          subtitle="যাত্রা শেষ করেছেন এমন ১০,০০০+ গ্র্যাজুয়েট। প্রতিটি গল্পে career transformation।"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border max-w-4xl mx-auto">
          <Stat big={<><StatCounter value={10000} thousands />+</>} label="গ্র্যাজুয়েট" />
          <Stat big={<><StatCounter value={97} />%</>} label="প্লেসড" />
          <Stat big={<><StatCounter value={3} />x</>} label="গড় বেতন বৃদ্ধি" />
        </div>
      </Section>

      <Section className="py-10">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button className="px-4 py-2 rounded-full bg-gold text-bg text-xs font-semibold">All</button>
          {BOOTCAMPS.slice(0, 6).map((b) => (
            <Link key={b.slug} href={`/alumni?track=${b.slug}`} className="px-4 py-2 rounded-full border border-border text-xs hover:border-gold/40 hover:text-gold bn">
              {b.nameBn}
            </Link>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {ALUMNI.map((a) => (
            <Link key={a.slug} href={`/alumni/${a.slug}`}>
              <AlumniCard a={a} />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function Stat({ big, label }: { big: React.ReactNode; label: string }) {
  return (
    <div className="bg-bg-elevated p-8 text-center">
      <div className="text-4xl md:text-5xl font-bold gold-text">{big}</div>
      <div className="bn text-sm text-ink-muted mt-2">{label}</div>
    </div>
  );
}
