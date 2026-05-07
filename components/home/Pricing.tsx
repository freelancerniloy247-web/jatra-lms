import { Section, SectionHeader } from "@/components/Section";
import { Check, Star } from "lucide-react";
import { PAYMENT_PARTNERS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <Section className="bg-bg-elevated/30 border-y border-border/50">
      <SectionHeader
        eyebrow="Pricing & EMI"
        title={<>সাশ্রয়ী মূল্যে <span className="gold-text">প্রিমিয়াম শিক্ষা</span></>}
        subtitle="৩টি payment option থেকে যেকোনোটি বেছে নিন। ৬ মাসের EMI ১০০% সুদমুক্ত।"
      />
      <div className="grid md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
        <Plan
          title="One-time payment"
          subtitle="পুরো টাকা একবারে"
          price="৳৪০,০০০"
          original="৳৪৫,০০০"
          tag="৳5,000 Discount"
          features={[
            "৳৫,০০০ instant ছাড়",
            "Lifetime alumni access",
            "All career services",
            "১০০% job guarantee",
          ]}
        />
        <Plan
          title="6-month EMI"
          subtitle="৬ মাসে ভাগ"
          price="৳৭,৫০০"
          suffix="/মাস"
          highlighted
          tag="Most Popular"
          features={[
            "Total ৳৪৫,০০০",
            "১০০% সুদমুক্ত",
            "City Bank / BRAC partner",
            "NID + bank statement",
          ]}
        />
        <Plan
          title="12-month EMI"
          subtitle="১২ মাসে ভাগ"
          price="৳৩,৭৫০"
          suffix="/মাস"
          features={[
            "Bank partner with interest",
            "Lower monthly outflow",
            "৪ থেকে ১২ মাস flexible",
            "ISA option উপলব্ধ",
          ]}
        />
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs uppercase tracking-widest text-ink-muted bn mb-5">পেমেন্ট পার্টনার</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {PAYMENT_PARTNERS.map((p) => (
            <div key={p.name} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition">
              <Image src={p.logo} alt={p.name} width={20} height={20} className="h-5 w-5 bg-white/90 rounded p-0.5 object-contain" />
              <span className="text-xs">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Plan({
  title,
  subtitle,
  price,
  suffix,
  original,
  tag,
  features,
  highlighted,
}: {
  title: string;
  subtitle: string;
  price: string;
  suffix?: string;
  original?: string;
  tag?: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-5 sm:p-7 ${
        highlighted
          ? "border-2 border-gold/60 bg-gradient-to-b from-gold/5 to-transparent shadow-gold"
          : "border border-border bg-bg-elevated/50"
      }`}
    >
      {tag && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold ${highlighted ? "btn-gold" : "bg-bg-high border border-border text-ink-muted"} flex items-center gap-1`}>
          {highlighted && <Star className="h-3 w-3 fill-current" />}
          {tag}
        </div>
      )}
      <div className="text-xs uppercase tracking-widest text-ink-muted">{title}</div>
      <div className="bn text-sm mt-1">{subtitle}</div>
      <div className="mt-5 sm:mt-6 flex items-end gap-2 flex-wrap">
        <span className="num-mono text-3xl sm:text-4xl font-bold gold-text">{price}</span>
        {suffix && <span className="text-ink-muted text-xs sm:text-sm">{suffix}</span>}
      </div>
      {original && <div className="text-sm text-ink-muted line-through num-mono mt-1">{original}</div>}
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-emerald shrink-0 mt-0.5" />
            <span className="bn text-ink/90">{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/apply"
        className={`mt-6 block text-center py-3 rounded-full text-sm font-semibold bn ${
          highlighted ? "btn-gold" : "btn-ghost"
        }`}
      >
        আবেদন করুন →
      </Link>
    </div>
  );
}
