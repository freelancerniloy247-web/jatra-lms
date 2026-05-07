"use client";
import { Section, SectionHeader } from "@/components/Section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title={<>যা <span className="gold-text">জানতে চান</span></>}
        subtitle="বুটক্যাম্প সম্পর্কে সবচেয়ে বেশি জিজ্ঞাসিত ১০টি প্রশ্ন।"
      />
      <div className="max-w-3xl mx-auto">
        {FAQS.map((f, i) => (
          <div key={i} className="border-b border-border/60">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-5 flex items-start justify-between gap-4 group"
            >
              <span className="bn-headline text-base md:text-lg">{f.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-gold shrink-0 mt-1 transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 pb-5" : "max-h-0"}`}
            >
              <p className="bn text-ink-muted leading-relaxed text-sm md:text-base">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
