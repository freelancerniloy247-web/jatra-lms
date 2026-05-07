import { Section, SectionHeader } from "@/components/Section";
import { Youtube, FileText, Map, MessageSquare, Briefcase, Calendar, Download } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "ফ্রি রিসোর্স — যাত্রা" };

const resources = [
  { icon: Youtube, t: "Free YouTube classes", d: "Curated tutorials প্রতি ট্র্যাকের জন্য", color: "text-crimson" },
  { icon: FileText, t: "BD Salary Guide 2026", d: "Junior থেকে senior salary insights" },
  { icon: Map, t: "Career Roadmaps", d: "Free PDF — প্রতি ট্র্যাকের জন্য roadmap" },
  { icon: MessageSquare, t: "Interview Question Bank", d: "২০০+ technical questions সঙ্গে answer" },
  { icon: Briefcase, t: "Resume Templates", d: "ATS-friendly resume templates" },
  { icon: Calendar, t: "Free Webinars", d: "Upcoming live sessions calendar" },
];

export default function FreePage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Free resources"
          title={<>ফ্রি <span className="gold-text">রিসোর্স</span> — আপনার career শুরু করুন</>}
          subtitle="যাত্রার বুটক্যাম্পে enroll করার আগেও আপনি পাবেন এই ফ্রি resource গুলো।"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r) => (
            <div key={r.t} className="card-premium p-7">
              <r.icon className={`h-7 w-7 ${(r as any).color || "text-gold"} mb-4`} />
              <h3 className="bn-headline text-xl">{r.t}</h3>
              <p className="bn text-sm text-ink-muted mt-3">{r.d}</p>
              <button className="btn-ghost mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs">
                <Download className="h-3.5 w-3.5" /> Free Download
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section id="salary" className="bg-bg-elevated/30 border-y border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="bn-headline text-3xl md:text-4xl">আরও চান?</h2>
          <p className="bn text-ink-muted mt-3">যাত্রার full bootcamp-এ apply করুন — চাকরির গ্যারান্টি সহ।</p>
          <Link href="/apply" className="btn-gold mt-6 inline-flex px-7 py-3.5 rounded-full text-base font-semibold bn">
            বুটক্যাম্পে apply করুন →
          </Link>
        </div>
      </Section>
    </>
  );
}
