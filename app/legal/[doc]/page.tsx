import { Section } from "@/components/Section";
import { notFound } from "next/navigation";

const docs: Record<string, { title: string; intro: string; sections: { h: string; p: string[] }[] }> = {
  terms: {
    title: "শর্তাবলি",
    intro: "যাত্রার সেবা ব্যবহার করার আগে নিচের শর্তাবলি পড়ে নিন।",
    sections: [
      { h: "১. সেবা ব্যবহার", p: ["যাত্রা প্ল্যাটফর্ম শুধুমাত্র educational ও career advancement-এর জন্য।", "প্রত্যেক ব্যবহারকারীর নিজস্ব account থাকতে হবে।"] },
      { h: "২. পেমেন্ট ও refund", p: ["সম্পূর্ণ refund policy আলাদা page-এ পাবেন। বুটক্যাম্প শুরু হওয়ার আগে refund পাওয়া যাবে।"] },
      { h: "৩. বুদ্ধিবৃত্তিক সম্পত্তি", p: ["সব curriculum, video, এবং material যাত্রার বুদ্ধিবৃত্তিক সম্পত্তি।"] },
    ],
  },
  privacy: {
    title: "প্রাইভেসি পলিসি",
    intro: "আপনার ব্যক্তিগত তথ্য আমাদের কাছে নিরাপদ।",
    sections: [
      { h: "তথ্য সংগ্রহ", p: ["আমরা শুধু applicant data সংগ্রহ করি যা admission, payment, ও placement-এর জন্য প্রয়োজনীয়।"] },
      { h: "তথ্য শেয়ারিং", p: ["আমরা আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না, hiring partner ব্যতীত (আপনার consent সাপেক্ষে)।"] },
    ],
  },
  refund: {
    title: "রিফান্ড পলিসি",
    intro: "চাকরি না পেলে ১০০% টাকা ফেরত — শর্ত সাপেক্ষে।",
    sections: [
      { h: "Eligibility", p: ["স্ক্রিনিং পাস + ৮০% attendance + সব assignment + career service participation।"] },
      { h: "Refund timeline", p: ["বুটক্যাম্প শেষ হওয়ার ৬ মাস পর eligibility check। ৩০ দিনের মধ্যে refund প্রক্রিয়াকরণ।"] },
    ],
  },
  guarantee: {
    title: "জব গ্যারান্টি শর্তাবলি",
    intro: "চাকরি না পেলে ১০০% টিউশন ফি ফেরত। নিচের শর্তাবলি পূরণ করতে হবে।",
    sections: [
      { h: "যোগ্যতা", p: ["Successful screening টেস্ট পাস", "৮০%+ live class attendance", "সব assignment ও capstone সম্পন্ন"] },
      { h: "Career service", p: ["Resume review-এ অংশ নিতে হবে", "৫+ mock interview পাস করতে হবে", "প্রতি সপ্তাহে কমপক্ষে ১০ application জমা দিতে হবে"] },
      { h: "সময়সীমা", p: ["বুটক্যাম্প শেষ হওয়ার ৬ মাসের মধ্যে চাকরি না পেলে refund applicable।"] },
    ],
  },
  isa: {
    title: "ISA (Income Share Agreement)",
    intro: "চাকরি পাওয়ার পরে পেমেন্ট। আগে নয়।",
    sections: [
      { h: "Structure", p: ["চাকরি পাওয়ার পর ১২-২৪ মাস ধরে মাসিক বেতনের ১২-১৫% যাত্রাকে দিতে হবে।", "Salary cap: টিউশন ফি-র ১.৫x সর্বোচ্চ।"] },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((doc) => ({ doc }));
}

export default function LegalPage({ params }: { params: { doc: string } }) {
  const d = docs[params.doc];
  if (!d) return notFound();
  return (
    <Section className="pt-12">
      <div className="max-w-3xl mx-auto">
        <div className="section-label mb-3">Legal</div>
        <h1 className="bn-headline text-4xl md:text-5xl">{d.title}</h1>
        <p className="bn text-ink-muted mt-4 text-lg leading-relaxed">{d.intro}</p>
        <div className="mt-12 space-y-10">
          {d.sections.map((s) => (
            <div key={s.h}>
              <h2 className="bn-headline text-2xl">{s.h}</h2>
              <div className="bn space-y-3 mt-3 text-ink/90 leading-relaxed">
                {s.p.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-xs text-ink-muted bn">
          সর্বশেষ updated: ২ এপ্রিল ২০২৬ · প্রশ্ন থাকলে admission@jatra.bd
        </div>
      </div>
    </Section>
  );
}
