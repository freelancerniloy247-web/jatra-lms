"use client";
import { Section, SectionHeader } from "@/components/Section";
import { ALUMNI } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Play, Quote } from "lucide-react";
import { bnTaka } from "@/lib/format";
import AlumniCard from "@/components/AlumniCard";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

export default function AlumniStories() {
  const featured = ALUMNI.find((a) => a.featured) || ALUMNI[0];
  const rest = ALUMNI.filter((a) => a.slug !== featured.slug).slice(0, 6);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Section>
      <SectionHeader
        eyebrow="Real students, real careers"
        title={<>আমাদের <span className="gold-text">গ্র্যাজুয়েটদের</span> গল্প</>}
        subtitle="যারা যাত্রা শেষ করেছেন — তাদের ক্যারিয়ার transformation দেখুন।"
      />

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 relative card-premium overflow-hidden group">
          <div className="relative h-[420px] md:h-[520px]">
            <Image src={featured.photo} alt={featured.nameEn} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full btn-gold grid place-items-center group-hover:scale-110 transition"
              aria-label={`Play story video — ${featured.nameBn}`}
            >
              <Play className="h-7 w-7 fill-current ml-1" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
            <Quote className="h-8 w-8 text-gold mb-4 opacity-70" />
            <p className="bn text-lg md:text-2xl bn-serif leading-relaxed text-ink/95">
              {featured.quote}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div>
                <div className="bn-headline text-xl">{featured.nameBn}</div>
                <div className="text-sm text-ink-muted">{featured.afterRole} · {featured.company} · {featured.batch}</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-[11px] text-ink-muted bn">বর্তমান বেতন</div>
                <div className="num-mono text-xl font-bold gold-text">{bnTaka(featured.salary)}/মাস</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-5 content-start">
          {rest.slice(0, 3).map((a) => (
            <Link href={`/alumni/${a.slug}`} key={a.slug} className="group">
              <AlumniCard a={a} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.slice(3, 6).map((a) => (
          <Link href={`/alumni/${a.slug}`} key={a.slug}>
            <AlumniCard a={a} />
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/alumni" className="btn-ghost px-6 py-3 rounded-full text-sm bn">১০,০০০+ সাফল্যের গল্প পড়ুন →</Link>
      </div>

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
        title={`${featured.nameBn} — সাফল্যের গল্প`}
      />
    </Section>
  );
}
