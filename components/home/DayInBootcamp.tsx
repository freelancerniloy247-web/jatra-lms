"use client";
import { Section, SectionHeader } from "@/components/Section";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const moments = [
  {
    time: "৭:০০ AM",
    label: "Morning Challenge",
    title: "দিনের শুরুতে problem of the day",
    desc: "প্রতিদিন সকালে একটি কোডিং চ্যালেঞ্জ — Discord-এ পোস্ট হয়। সবাই সমাধান করে।",
    img: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1200&q=80",
  },
  {
    time: "১০:০০ AM",
    label: "Live Class",
    title: "মেন্টরের সাথে লাইভ ক্লাস",
    desc: "Zoom-এ ৩ ঘণ্টার interactive class। প্রশ্ন করতে পারেন, কোড লাইভে দেখানো হয়।",
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80",
  },
  {
    time: "১:০০ PM",
    label: "Group Project",
    title: "টিমে প্রজেক্টে কাজ",
    desc: "৪-৫ জনের টিমে real-world project। GitHub-এ collaborate, code review সব practical।",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  },
  {
    time: "৪:০০ PM",
    label: "1-on-1 Mentor",
    title: "ব্যক্তিগত মেন্টর সেশন",
    desc: "প্রতি সপ্তাহে ২ বার ১:১ session। career advice, technical doubt, project review।",
    img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1200&q=80",
  },
  {
    time: "৮:০০ PM",
    label: "Community",
    title: "Discord কমিউনিটি ডিসকাশন",
    desc: "১০,০০০+ alumni ও current students একসাথে। প্রশ্ন, রিসোর্স শেয়ার, networking।",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  },
];

export default function DayInBootcamp() {
  const [active, setActive] = useState(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    itemsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <Section className="bg-bg-elevated/30 border-y border-border/50">
      <SectionHeader
        eyebrow="Day in the bootcamp"
        title={<>একদিন <span className="gold-text">যাত্রায়</span></>}
        subtitle="সকাল থেকে রাত — কেমন কাটে আমাদের ছাত্রদের একটি সাধারণ দিন।"
      />
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 lg:sticky lg:top-32 h-fit">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
            {moments.map((m, i) => (
              <Image
                key={i}
                src={m.img}
                alt={m.label}
                fill
                className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-bg/70 backdrop-blur border border-gold/40 text-gold num-mono text-sm">
              {moments[active].time}
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 space-y-32 py-10">
          {moments.map((m, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              data-idx={i}
              className="min-h-[40vh] flex flex-col justify-center"
            >
              <div className="section-label mb-3">{m.label}</div>
              <div className="num-mono text-gold text-3xl font-bold mb-3">{m.time}</div>
              <h3 className="bn-headline text-2xl md:text-3xl">{m.title}</h3>
              <p className="bn text-ink-muted mt-4 leading-relaxed max-w-md">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
