import { Section, SectionHeader } from "@/components/Section";
import { Shield, Users, Hammer, Network, Calendar, BadgeCheck } from "lucide-react";
import Reveal from "@/components/anim/Reveal";

export default function WhyJatra() {
  return (
    <Section className="bg-bg-elevated/30 border-y border-border/50">
      <SectionHeader
        eyebrow="The difference"
        title={<>কেন অন্য বুটক্যাম্প থেকে <span className="gold-text">যাত্রা</span> আলাদা?</>}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <Reveal variant="fade-up" duration={800} className="lg:col-span-2 lg:row-span-2">
          <div className="card-premium lift p-8 md:p-10 flex flex-col justify-between min-h-[340px] relative overflow-hidden h-full group">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/8 blur-3xl group-hover:bg-gold/15 transition duration-700" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
              style={{ background: "radial-gradient(60% 60% at 30% 30%, rgba(232,179,61,0.10), transparent 70%)" }}
            />
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-gold/15 border border-gold/40 grid place-items-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <h3 className="bn-headline text-3xl md:text-4xl leading-tight">
                চাকরি না পেলে <span className="gold-text">টাকা ফেরত</span>
              </h3>
              <p className="bn text-ink-muted mt-4 max-w-md leading-relaxed">
                ১০০% মানি-ব্যাক গ্যারান্টি। ৬ মাসের মধ্যে চাকরি না পেলে পুরো টিউশন ফি ফেরত পাবেন। আমরা আপনার সাফল্যে বিনিয়োগ করি।
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-emerald/15 border border-emerald/40 text-emerald text-xs font-semibold tag-pop">
                ১০০% Refund
              </div>
              <div className="px-4 py-2 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold tag-pop">
                No Hidden Cost
              </div>
            </div>
          </div>
        </Reveal>

        {[
          { icon: Users, title: "ইন্ডাস্ট্রি এক্সপার্ট মেন্টর", desc: "যারা টপ কোম্পানিতে কাজ করছেন" },
          { icon: BadgeCheck, title: "১:৫ মেন্টর-স্টুডেন্ট রেশিও", desc: "ব্যক্তিগত মনোযোগ ও সাপোর্ট" },
          { icon: Hammer, title: "৪০+ রিয়েল প্রজেক্ট", desc: "Industry-grade portfolio তৈরি" },
          { icon: Network, title: "লাইফটাইম এলামনাই নেটওয়ার্ক", desc: "১০,০০০+ গ্র্যাজুয়েট community" },
          { icon: Calendar, title: "৫ দিন/সপ্তাহ লাইভ ক্লাস", desc: "Cohort-based intensive learning" },
        ].map((t, i) => (
          <Reveal key={t.title} variant="fade-up" delay={120 + i * 90} duration={700}>
            <Tile {...t} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Tile({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="card-premium lift p-6 group h-full">
      <div className="h-10 w-10 rounded-lg bg-bg/60 border border-border grid place-items-center mb-4 group-hover:border-gold/60 group-hover:rotate-6 transition duration-500">
        <Icon className="h-5 w-5 text-gold group-hover:scale-110 transition" />
      </div>
      <h4 className="bn-headline text-base leading-snug group-hover:text-gold transition">{title}</h4>
      <p className="bn text-xs text-ink-muted mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
