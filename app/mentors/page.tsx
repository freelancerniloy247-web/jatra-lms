import { MENTORS, BOOTCAMPS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/Section";
import MentorCard from "@/components/MentorCard";
import Link from "next/link";

export const metadata = { title: "মেন্টর — যাত্রা" };

export default function MentorsPage() {
  return (
    <Section className="pt-12">
      <SectionHeader
        eyebrow="Industry leaders"
        title={<>শিক্ষক নয়, <span className="gold-text">ইন্ডাস্ট্রি লিডার</span></>}
        subtitle="Pathao, bKash, Brain Station 23, Therap, Daraz — এসব কোম্পানির senior leader-রা আপনার মেন্টর।"
      />
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button className="px-4 py-2 rounded-full bg-gold text-bg text-xs font-semibold">All</button>
        {BOOTCAMPS.slice(0, 6).map((b) => (
          <Link
            key={b.slug}
            href={`/bootcamp/${b.slug}#mentors`}
            className="px-4 py-2 rounded-full border border-border text-xs hover:border-gold/40 hover:text-gold transition bn"
          >
            {b.nameBn}
          </Link>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {MENTORS.map((m) => (
          <Link key={m.slug} href={`/mentors/${m.slug}`}>
            <MentorCard m={m} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
