import { BOOTCAMPS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/Section";
import { bnNumber, bnTaka } from "@/lib/format";
import Link from "next/link";

export const metadata = { title: "প্রাইসিং — যাত্রা" };

export default function PricingPage() {
  return (
    <Section className="pt-12">
      <SectionHeader
        eyebrow="Compare bootcamps"
        title={<>সাশ্রয়ী মূল্যে <span className="gold-text">প্রিমিয়াম শিক্ষা</span></>}
        subtitle="১০টি বুটক্যাম্পের পূর্ণ comparison। আপনার budget ও career goal অনুযায়ী বেছে নিন।"
      />

      <div className="card-premium overflow-x-auto">
        <table className="w-full text-sm min-w-[860px]">
          <thead>
            <tr className="border-b border-border/60 text-left text-ink-muted">
              <th className="px-5 py-4 bn">বুটক্যাম্প</th>
              <th className="px-5 py-4 num-mono text-center">Months</th>
              <th className="px-5 py-4 num-mono text-center">Live</th>
              <th className="px-5 py-4 num-mono text-center">Projects</th>
              <th className="px-5 py-4 num-mono text-center">Placement</th>
              <th className="px-5 py-4 bn text-right">মূল্য</th>
              <th className="px-5 py-4 bn text-right">EMI ৬ মাস</th>
              <th className="px-5 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {BOOTCAMPS.map((b) => (
              <tr key={b.slug} className="border-b border-border/40 last:border-0 hover:bg-bg-elevated/40">
                <td className="px-5 py-4">
                  <div className="bn font-semibold">{b.nameBn}</div>
                  <div className="text-xs text-ink-muted">{b.nameEn}</div>
                </td>
                <td className="px-5 py-4 num-mono text-center">{bnNumber(b.durationMonths)}</td>
                <td className="px-5 py-4 num-mono text-center">{bnNumber(b.liveClasses)}+</td>
                <td className="px-5 py-4 num-mono text-center">{bnNumber(b.projects)}+</td>
                <td className="px-5 py-4 num-mono text-center text-emerald">{bnNumber(b.placement)}%</td>
                <td className="px-5 py-4 num-mono text-right gold-text font-bold">{bnTaka(b.priceBdt)}</td>
                <td className="px-5 py-4 num-mono text-right text-ink-muted">৳{bnNumber(b.emiMonthly)}</td>
                <td className="px-5 py-4 text-right">
                  <Link href={`/apply?bootcamp=${b.slug}`} className="btn-gold px-4 py-1.5 rounded-full text-xs font-semibold bn">
                    আবেদন
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        <div className="card-premium p-6">
          <div className="text-xs uppercase tracking-widest text-gold mb-3">Need help?</div>
          <h3 className="bn-headline text-xl">কোন বুটক্যাম্প বেছে নেবেন?</h3>
          <p className="bn text-sm text-ink-muted mt-3">আমাদের admission team-এর সাথে ১৫ মিনিটের ফ্রি কাউন্সেলিং নিন।</p>
          <a href="https://wa.me/8801711111111" className="btn-gold mt-5 inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bn">WhatsApp →</a>
        </div>
        <div className="card-premium p-6">
          <div className="text-xs uppercase tracking-widest text-gold mb-3">EMI Calculator</div>
          <h3 className="bn-headline text-xl">EMI কেমন হবে?</h3>
          <p className="bn text-sm text-ink-muted mt-3">৬ মাসের EMI সম্পূর্ণ সুদমুক্ত। ১২ মাসের EMI-তে minimal interest।</p>
          <Link href="/help#emi" className="btn-ghost mt-5 inline-flex px-5 py-2.5 rounded-full text-sm bn">বিস্তারিত →</Link>
        </div>
        <div className="card-premium p-6 border-gold/40">
          <div className="text-xs uppercase tracking-widest text-gold mb-3">ISA Option</div>
          <h3 className="bn-headline text-xl">পরে পেমেন্ট করুন</h3>
          <p className="bn text-sm text-ink-muted mt-3">চাকরি পাওয়ার পরে পেমেন্ট করুন (Income Share Agreement)।</p>
          <Link href="/legal/isa" className="btn-ghost mt-5 inline-flex px-5 py-2.5 rounded-full text-sm bn">শর্তাবলি →</Link>
        </div>
      </div>
    </Section>
  );
}
