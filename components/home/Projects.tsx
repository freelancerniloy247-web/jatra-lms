import { Section, SectionHeader } from "@/components/Section";
import Image from "next/image";

const projects = [
  { name: "Pathao Clone", student: "মীর সাকিব", track: "Full-stack", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { name: "Bangla NLP Sentiment", student: "তাসনিম আক্তার", track: "Data Science", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
  { name: "Healthtech Dashboard", student: "নাইমা চৌধুরী", track: "UI/UX", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { name: "Daraz Seller App", student: "আবদুল করিম", track: "Mobile App", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" },
  { name: "BD Brand Identity", student: "সাদিয়া আহমেদ", track: "Graphic Design", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" },
  { name: "Performance Ad Set", student: "অনিকা তাসনিম", track: "Marketing", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" },
  { name: "PM Case Study", student: "তারেক আজিজ", track: "Product", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  { name: "Cinematic Brand Reel", student: "PixelCraft Team", track: "Video", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80" },
];

export default function Projects() {
  return (
    <Section className="bg-bg-elevated/30 border-y border-border/50">
      <SectionHeader
        eyebrow="Build a real portfolio"
        title={<>৬ মাসে যা <span className="gold-text">তৈরি করবেন</span></>}
        subtitle="প্রতি ব্যাচে ৪০+ industry-grade project। আপনার পোর্টফোলিও যা employer দের চোখে পড়বে।"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {projects.map((p, i) => (
          <div key={i} className={`relative overflow-hidden rounded-xl group ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <div className="relative aspect-square">
              <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                <div className="text-[10px] text-gold uppercase tracking-widest">{p.track}</div>
                <div className="bn-headline text-base mt-1">{p.name}</div>
                <div className="bn text-xs text-ink-muted mt-1">{p.student}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
