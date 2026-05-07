import { BOOTCAMPS } from "@/lib/data";
import BootcampCard from "@/components/BootcampCard";
import { Section, SectionHeader } from "@/components/Section";

export const metadata = {
  title: "সব বুটক্যাম্প — যাত্রা",
  description: "১০টি curated career bootcamp। চাকরির গ্যারান্টি সহ।",
};

export default function BootcampsPage() {
  return (
    <Section className="pt-12">
      <SectionHeader
        eyebrow="All bootcamps"
        title={<>১০টি <span className="gold-text">curated</span> ট্র্যাক</>}
        subtitle="প্রতিটি বুটক্যাম্প industry-grade — real mentor, real project, real placement।"
      />
      <div className="grid md:grid-cols-2 gap-5">
        {BOOTCAMPS.map((b) => (
          <BootcampCard key={b.slug} b={b} />
        ))}
      </div>
    </Section>
  );
}
