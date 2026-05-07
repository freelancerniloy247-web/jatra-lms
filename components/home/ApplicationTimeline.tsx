import { Section, SectionHeader } from "@/components/Section";
import { FileText, Brain, Video, Mail, CreditCard, Rocket } from "lucide-react";

const days = [
  { d: "Day 1", icon: FileText, t: "আবেদন জমা", desc: "১০ মিনিটের ফর্ম পূরণ। Free to apply।" },
  { d: "Day 2", icon: Brain, t: "স্ক্রিনিং টেস্ট", desc: "৩০ মিনিট, basic aptitude + English।" },
  { d: "Day 3-4", icon: Video, t: "ভর্তি ইন্টারভিউ", desc: "১৫-২০ মিনিটের video call।" },
  { d: "Day 5", icon: Mail, t: "ভর্তির সিদ্ধান্ত", desc: "Email-এ result পাবেন।" },
  { d: "Day 6", icon: CreditCard, t: "পেমেন্ট ও EMI", desc: "Payment বা EMI setup করুন।" },
  { d: "Day 7", icon: Rocket, t: "Onboarding", desc: "Discord + curriculum access।" },
];

export default function ApplicationTimeline() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Application timeline"
        title={<>আবেদন থেকে ক্লাস শুরু — <span className="gold-text">৭ দিনের মধ্যে</span></>}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {days.map((d, i) => (
          <div key={d.d} className="card-premium p-6 relative overflow-hidden">
            <div className="absolute top-3 right-4 num-mono text-6xl font-black text-gold/10">{i + 1}</div>
            <div className="h-10 w-10 rounded-lg bg-gold/15 border border-gold/30 grid place-items-center mb-4">
              <d.icon className="h-4 w-4 text-gold" />
            </div>
            <div className="text-xs num-mono uppercase tracking-widest text-gold">{d.d}</div>
            <h4 className="bn-headline text-xl mt-2">{d.t}</h4>
            <p className="bn text-sm text-ink-muted mt-2">{d.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
