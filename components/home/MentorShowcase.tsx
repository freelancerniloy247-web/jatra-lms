import { Section, SectionHeader } from "@/components/Section";
import { MENTORS } from "@/lib/data";
import MentorCard from "@/components/MentorCard";
import Link from "next/link";

export default function MentorShowcase() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Industry leaders"
        title={<>ইন্ডাস্ট্রির <span className="gold-text">শীর্ষ থেকে</span> শিখুন</>}
        subtitle="Pathao, bKash, Brain Station 23, Therap এবং অন্যান্য টপ কোম্পানিতে কাজ করেন এমন senior professional রা আপনার মেন্টর।"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {MENTORS.map((m) => (
          <MentorCard key={m.slug} m={m} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/mentors" className="btn-ghost px-6 py-3 rounded-full text-sm bn inline-flex items-center gap-2">
          ৫০+ ইন্ডাস্ট্রি মেন্টর দেখুন →
        </Link>
      </div>
    </Section>
  );
}
