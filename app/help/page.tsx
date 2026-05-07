import { Section, SectionHeader } from "@/components/Section";
import { Search, MessageCircle, Phone, Mail, FileQuestion } from "lucide-react";
import { FAQS } from "@/lib/data";

export const metadata = { title: "সাহায্য — যাত্রা" };

const categories = [
  "Application", "Payment & EMI", "Bootcamp logistics",
  "Tech support", "Career services", "Live class", "Refund", "Account",
];

export default function HelpPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          eyebrow="Help center"
          title={<>আমরা <span className="gold-text">সাহায্য করতে এসেছি</span></>}
          subtitle="যেকোনো প্রশ্নের উত্তর পাবেন ৪৮ ঘণ্টার মধ্যে।"
        />
        <div className="max-w-2xl mx-auto relative mb-12">
          <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input placeholder="আপনার প্রশ্ন লিখুন..." className="!pl-12 !py-4" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((c) => (
            <button key={c} className="px-4 py-2 rounded-full border border-border text-xs hover:border-gold/40 hover:text-gold">
              {c}
            </button>
          ))}
        </div>
      </Section>

      <Section id="contact" className="bg-bg-elevated/30 border-y border-border/50">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>সরাসরি <span className="gold-text">যোগাযোগ</span></>}
        />
        <div className="grid md:grid-cols-3 gap-5">
          <ContactCard icon={MessageCircle} t="WhatsApp" d="Instant reply · 24/7" cta="WhatsApp" href="https://wa.me/8801711111111" highlight />
          <ContactCard icon={Phone} t="Call us" d="রবি-বৃহস্পতি · 10 AM – 9 PM" cta="+880 1711-111111" href="tel:+8801711111111" />
          <ContactCard icon={Mail} t="Email" d="২৪ ঘণ্টায় reply" cta="admission@jatra.bd" href="mailto:admission@jatra.bd" />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="FAQ"
          title={<>সবচেয়ে <span className="gold-text">জিজ্ঞাসিত</span> প্রশ্ন</>}
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="card-premium p-5 group">
              <summary className="bn-headline text-base md:text-lg cursor-pointer flex items-start justify-between gap-4">
                <span>{f.q}</span>
                <FileQuestion className="h-5 w-5 text-gold shrink-0 group-open:rotate-180 transition" />
              </summary>
              <p className="bn text-sm text-ink-muted mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}

function ContactCard({ icon: Icon, t, d, cta, href, highlight }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`card-premium p-7 block text-center ${highlight ? "border-gold/40" : ""}`}>
      <Icon className={`h-7 w-7 mx-auto mb-3 ${highlight ? "text-emerald" : "text-gold"}`} />
      <div className="bn-headline text-lg">{t}</div>
      <div className="bn text-xs text-ink-muted mt-2">{d}</div>
      <div className="num-mono mt-4 text-sm gold-text font-semibold">{cta}</div>
    </a>
  );
}
