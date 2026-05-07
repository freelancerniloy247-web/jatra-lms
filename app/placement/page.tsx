import { Section, SectionHeader } from "@/components/Section";
import { COMPANY_LOGOS, BOOTCAMPS } from "@/lib/data";
import StatCounter from "@/components/StatCounter";
import { Check, FileText, Linkedin, MessagesSquare, Target, Video, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { bnNumber } from "@/lib/format";

export const metadata = { title: "Placement — যাত্রা" };

const services = [
  { icon: FileText, t: "Resume building", d: "Industry-standard resume তৈরি ও review" },
  { icon: Linkedin, t: "LinkedIn optimization", d: "Profile audit ও recruiter visibility বৃদ্ধি" },
  { icon: Video, t: "Mock interviews", d: "৫+ technical + behavioral mock session" },
  { icon: MessagesSquare, t: "1-on-1 career coach", d: "ব্যক্তিগত career coach সারা journey জুড়ে" },
  { icon: Target, t: "Hiring partner intro", d: "Direct intro to ৩০০+ partner কোম্পানি" },
  { icon: Wallet, t: "Salary negotiation", d: "Offer compare ও negotiation training" },
];

export default function PlacementPage() {
  return (
    <>
      <Section className="pt-12 pb-10">
        <SectionHeader
          eyebrow="Job placement"
          title={<>আপনার চাকরি খুঁজে দেওয়া <span className="gold-text">আমাদের দায়িত্ব</span></>}
          subtitle="৩০০+ hiring partner · ৯৭% placement rate · গড় ৩ মাসে চাকরি · চাকরি না পেলে টাকা ফেরত"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border">
          <Stat big={<><StatCounter value={97} />%</>} label="placement rate" />
          <Stat big={<>৳<StatCounter value={70000} thousands /></>} label="গড় বেতন" />
          <Stat big={<><StatCounter value={300} />+</>} label="hiring partner" />
          <Stat big={<><StatCounter value={3} /> মাস</>} label="গড় time to hire" />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Career services"
          title={<>সম্পূর্ণ <span className="gold-text">career service</span> অন্তর্ভুক্ত</>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.t} className="card-premium p-6">
              <div className="h-10 w-10 rounded-lg bg-gold/15 border border-gold/30 grid place-items-center mb-4">
                <s.icon className="h-4.5 w-4.5 text-gold" />
              </div>
              <h4 className="bn-headline text-lg">{s.t}</h4>
              <p className="bn text-xs text-ink-muted mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-elevated/30 border-y border-border/50">
        <SectionHeader
          eyebrow="Hiring partners"
          title={<>৩০০+ <span className="gold-text">কোম্পানি</span></>}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {COMPANY_LOGOS.map((c) => (
            <div key={c.name} className="card-premium p-5 grayscale hover:grayscale-0 transition flex flex-col items-center gap-2">
              <Image src={c.logo} alt={c.name} width={36} height={36} className="h-9 w-9 bg-white/95 rounded p-1 object-contain" />
              <span className="text-xs text-ink-muted">{c.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="By track"
          title={<>গড় <span className="gold-text">শুরুর বেতন</span> per track</>}
        />
        <div className="card-premium p-6 md:p-10 max-w-3xl mx-auto">
          {BOOTCAMPS.map((b) => {
            const pct = (b.placement / 100) * 100;
            const expected = Math.round(b.priceBdt * 2.5);
            const barWidth = Math.min(100, (expected / 150000) * 100);
            return (
              <div key={b.slug} className="py-3 border-b border-border/40 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="bn text-sm">{b.nameBn}</span>
                  <span className="num-mono text-sm gold-text font-bold">৳{bnNumber(expected)}</span>
                </div>
                <div className="h-2 bg-bg/60 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-gradient" style={{ width: `${barWidth}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border/50">
        <div className="card-premium p-10 md:p-16 max-w-4xl mx-auto">
          <h3 className="bn-headline text-2xl md:text-4xl">চাকরির গ্যারান্টি · শর্তাবলি</h3>
          <ul className="space-y-3 mt-6">
            {[
              "স্ক্রিনিং পাস করতে হবে",
              "৮০%+ attendance maintain করতে হবে",
              "সব assignment ও capstone project সম্পন্ন করতে হবে",
              "Career service-এর সব session-এ অংশ নিতে হবে",
              "প্রতি সপ্তাহে কমপক্ষে ১০টি interview apply করতে হবে",
              "৬ মাস placement সময়সীমা",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm">
                <Check className="h-5 w-5 text-emerald shrink-0 mt-0.5" />
                <span className="bn">{s}</span>
              </li>
            ))}
          </ul>
          <Link href="/legal/guarantee" className="btn-ghost mt-8 inline-flex px-5 py-2.5 rounded-full text-sm bn">পূর্ণ শর্তাবলি দেখুন →</Link>
        </div>
      </Section>
    </>
  );
}

function Stat({ big, label }: { big: React.ReactNode; label: string }) {
  return (
    <div className="bg-bg-elevated p-7 text-center">
      <div className="text-3xl md:text-4xl font-bold gold-text">{big}</div>
      <div className="bn text-xs text-ink-muted mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}
