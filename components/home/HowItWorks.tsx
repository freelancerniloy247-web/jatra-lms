import { Section, SectionHeader } from "@/components/Section";
import { ClipboardCheck, Radio, Hammer, Briefcase } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

const steps = [
  {
    n: "১",
    icon: ClipboardCheck,
    title: "আবেদন ও স্ক্রিনিং",
    desc: "আবেদন ফর্ম পূরণ → অ্যাপটিটিউড টেস্ট → ভর্তি ইন্টারভিউ। ৭ দিনের মধ্যে decision।",
  },
  {
    n: "২",
    icon: Radio,
    title: "লাইভ বুটক্যাম্প",
    desc: "৫ দিন/সপ্তাহ লাইভ ক্লাস ইন্ডাস্ট্রি মেন্টরদের সাথে। ৬ মাসের intensive transformation।",
  },
  {
    n: "৩",
    icon: Hammer,
    title: "রিয়েল প্রজেক্ট ও মেন্টরশিপ",
    desc: "৪০+ industry-grade project তৈরি করুন। ১:১ মেন্টরশিপ এবং পোর্টফোলিও তৈরি।",
  },
  {
    n: "৪",
    icon: Briefcase,
    title: "চাকরিতে প্লেসমেন্ট",
    desc: "Career coach, resume review, mock interviews, direct intro to hiring partners।",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Your journey"
        title={<>আপনার <span className="gold-text">৬ মাসের</span> যাত্রা</>}
        subtitle="চারটি ধাপে আপনার ক্যারিয়ার পরিবর্তন। প্রতিটি ধাপে আমরা আপনার পাশে থাকি।"
      />
      <div className="relative">
        {/* Animated dotted line connector */}
        <svg
          className="hidden md:block absolute top-12 left-0 right-0 w-full h-2 pointer-events-none"
          viewBox="0 0 1200 4"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line
            x1="100" y1="2" x2="1100" y2="2"
            stroke="url(#goldGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="draw-path"
            pathLength={1}
          />
          <defs>
            <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(232,179,61,0)" />
              <stop offset="50%" stopColor="rgba(232,179,61,0.6)" />
              <stop offset="100%" stopColor="rgba(232,179,61,0)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} variant="fade-up" delay={i * 120} duration={700}>
              <div className="relative">
                <div className="card-premium lift p-7 h-full group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-gold/10 grid place-items-center border border-gold/30 group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                      <s.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div className="num-mono text-5xl font-black text-gold/15 group-hover:text-gold/30 transition">
                      {s.n}
                    </div>
                  </div>
                  <h4 className="bn-headline text-xl">{s.title}</h4>
                  <p className="bn text-sm text-ink-muted mt-3 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
