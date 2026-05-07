import { BOOTCAMPS } from "@/lib/data";
import BootcampCard from "@/components/BootcampCard";
import { Section, SectionHeader } from "@/components/Section";
import Reveal from "@/components/anim/Reveal";

export default function Tracks() {
  return (
    <Section id="tracks">
      <SectionHeader
        eyebrow="Choose your track"
        title={<>যেকোনো ট্র্যাক <span className="gold-text">বেছে নিন</span></>}
        subtitle="১০টি carefully curated বুটক্যাম্প — প্রতিটিতে ইন্ডাস্ট্রি লেভেলের curriculum, real mentor, এবং চাকরির গ্যারান্টি।"
      />

      <div className="grid md:grid-cols-2 gap-5">
        {BOOTCAMPS.map((b, i) => (
          <Reveal key={b.slug} variant="fade-up" delay={i * 60} duration={700}>
            <BootcampCard b={b} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
