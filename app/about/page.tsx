import { Section, SectionHeader } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { PRESS_LOGOS } from "@/lib/data";
import { MapPin, Heart, Sparkles, Users } from "lucide-react";

export const metadata = { title: "About — যাত্রা" };

const team = [
  { name: "তানভীর হাসান", role: "Co-founder, CEO", photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80" },
  { name: "শাহরিয়ার রহমান", role: "Co-founder, CTO", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "নুসরাত জাহান", role: "Head of Curriculum", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
  { name: "মাহিদ আলম", role: "Head of Placement", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
];

const values = [
  { icon: Heart, t: "Outcome over hype", d: "আমরা buzz নয় — career transformation-এ বিশ্বাস করি।" },
  { icon: Users, t: "Mentor-first", d: "প্রতিটি ছাত্রের পেছনে ১:৫ ratio-তে real mentor।" },
  { icon: Sparkles, t: "Premium quality", d: "Lambda School, Le Wagon-এর মতো world-class standard।" },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-12">
        <div className="max-w-4xl">
          <div className="section-label mb-4">Our mission</div>
          <h1 className="bn-headline text-5xl md:text-7xl leading-[1.05]">
            ১০ লাখ বাংলাদেশির <br /><span className="gold-text">ক্যারিয়ার বদলানো।</span>
          </h1>
          <p className="bn text-ink-muted mt-6 text-lg leading-relaxed max-w-2xl">
            যাত্রা ২০২৩ সালে শুরু হয় এক সিম্পল লক্ষ্য নিয়ে — বাংলাদেশের talented তরুণদের তাদের স্বপ্নের ক্যারিয়ারে পৌঁছে দেওয়া। আজ ১০,০০০+ গ্র্যাজুয়েট, ৩০০+ hiring partner, ৯৭% placement rate।
          </p>
        </div>
      </Section>

      <Section className="bg-bg-elevated/30 border-y border-border/50">
        <SectionHeader
          eyebrow="Our values"
          title={<>আমরা যেভাবে <span className="gold-text">কাজ করি</span></>}
        />
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.t} className="card-premium p-7">
              <v.icon className="h-6 w-6 text-gold mb-4" />
              <h4 className="bn-headline text-xl">{v.t}</h4>
              <p className="bn text-sm text-ink-muted mt-3 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Leadership"
          title={<>আমাদের <span className="gold-text">টিম</span></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((t) => (
            <div key={t.name} className="card-premium overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image src={t.photo} alt={t.name} fill className="object-cover grayscale" sizes="25vw" />
              </div>
              <div className="p-5">
                <h4 className="bn-headline text-lg">{t.name}</h4>
                <p className="text-xs text-ink-muted mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="press" className="bg-bg-elevated/30 border-y border-border/50">
        <SectionHeader
          eyebrow="In the press"
          title={<>আমাদের নিয়ে <span className="gold-text">প্রেসে</span></>}
        />
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PRESS_LOGOS.map((p) => (
            <div key={p.name} className="flex items-center gap-2 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
              <Image src={p.logo} alt={p.name} width={32} height={32} className="h-8 w-8 bg-white/95 rounded p-1 object-contain" />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="section-label mb-3">Visit us</div>
            <h2 className="bn-headline text-3xl md:text-4xl">আমাদের অফিস</h2>
            <p className="bn text-ink-muted mt-4 leading-relaxed">
              পাঠকদের জন্য খোলা — যেকোনো working day-তে আমাদের অফিসে এসে in-person counseling নিন। Parents-রাও আসতে পারেন।
            </p>
            <div className="mt-6 flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-gold shrink-0" />
              <div className="bn">
                House 12, Road 7, Block C, Banani<br />Dhaka 1213, Bangladesh<br />
                <span className="text-ink-muted text-xs">রবি-বৃহস্পতি · ১০ AM – ৬ PM</span>
              </div>
            </div>
            <Link href="/help" className="btn-gold mt-6 inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bn">যোগাযোগ করুন →</Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border h-72">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Office" width={1200} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>
    </>
  );
}
