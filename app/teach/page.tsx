import { Section, SectionHeader } from "@/components/Section";
import { Wallet, Users, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "মেন্টর হোন — যাত্রা" };

export default function TeachPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Become a mentor"
          title={<>ইন্ডাস্ট্রি এক্সপার্ট? <span className="gold-text">শেয়ার করুন</span></>}
          subtitle="আপনার অভিজ্ঞতা থেকে শিখুক পরবর্তী generation। ৫-১০ ঘণ্টা/সপ্তাহ commit করে ৳50K-2L/মাস earn করুন।"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <Tile icon={Wallet} title="৳50K-2L/মাস" desc="Top mentor earnings" />
          <Tile icon={Clock} title="৫-১০ ঘণ্টা/সপ্তাহ" desc="Flexible time commitment" />
          <Tile icon={Users} title="১০,০০০+ ছাত্র" desc="Build personal brand" />
          <Tile icon={Sparkles} title="Industry impact" desc="পরবর্তী generation কে গড়ে তুলুন" />
        </div>
      </Section>

      <Section className="bg-bg-elevated/30 border-y border-border/50">
        <div className="max-w-2xl mx-auto card-premium p-8 md:p-10">
          <h2 className="bn-headline text-2xl md:text-3xl">Mentor application</h2>
          <p className="bn text-sm text-ink-muted mt-2">আমরা আপনার সাথে শীঘ্রই যোগাযোগ করব।</p>
          <form className="mt-8 space-y-4">
            <input placeholder="পূর্ণ নাম" />
            <input type="email" placeholder="ইমেইল" />
            <input type="tel" placeholder="ফোন" />
            <input placeholder="বর্তমান কোম্পানি ও পদবী" />
            <input placeholder="LinkedIn URL" />
            <select>
              <option>আপনি কোন track শেখাতে চান?</option>
              <option>Full-stack Web</option>
              <option>Data Science</option>
              <option>UI/UX</option>
              <option>Digital Marketing</option>
              <option>Product Management</option>
              <option>Mobile App</option>
            </select>
            <textarea rows={4} placeholder="আপনার teaching বা mentoring অভিজ্ঞতা" />
            <button className="btn-gold w-full py-3 rounded-full font-semibold bn">আবেদন জমা দিন →</button>
          </form>
        </div>
      </Section>
    </>
  );
}

function Tile({ icon: Icon, title, desc }: any) {
  return (
    <div className="card-premium p-7 text-center">
      <Icon className="h-7 w-7 text-gold mx-auto mb-4" />
      <div className="num-mono text-2xl font-bold gold-text">{title}</div>
      <div className="bn text-xs text-ink-muted mt-2">{desc}</div>
    </div>
  );
}
