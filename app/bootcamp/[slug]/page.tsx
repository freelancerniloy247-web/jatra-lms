import { BOOTCAMPS, MENTORS, ALUMNI } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { bnTaka, bnNumber, bnDate, daysBetween, toBn } from "@/lib/format";
import { Clock, GraduationCap, Briefcase, Target, Calendar, Wallet, Download } from "lucide-react";
import MentorCard from "@/components/MentorCard";
import AlumniCard from "@/components/AlumniCard";
import CurriculumTabs from "./CurriculumTabs";
import Countdown from "@/components/Countdown";

export function generateStaticParams() {
  return BOOTCAMPS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const b = BOOTCAMPS.find((x) => x.slug === params.slug);
  if (!b) return {};
  return {
    title: `${b.nameBn} — যাত্রা`,
    description: b.taglineBn + ` · ${bnTaka(b.priceBdt)} · ${bnNumber(b.placement)}% placement`,
  };
}

export default function BootcampDetail({ params }: { params: { slug: string } }) {
  const b = BOOTCAMPS.find((x) => x.slug === params.slug);
  if (!b) return notFound();

  const trackMentors = MENTORS.filter((m) => m.tracks.includes(b.slug));
  const trackAlumni = ALUMNI.filter((a) => a.trackSlug === b.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image src={b.heroImage} alt={b.nameEn} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/40" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative h-full mx-auto max-w-7xl px-5 md:px-6 flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-widest num-mono text-gold mb-3">{b.iconKey} · {b.nameEn}</div>
          <h1 className="bn-headline text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-[1.05]">{b.nameBn}</h1>
          <p className="bn text-lg md:text-xl text-ink-muted mt-5 max-w-2xl leading-relaxed">{b.taglineBn}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl">
            <Stat icon={Clock} label={`${bnNumber(b.durationMonths)} মাস`} sub={`${bnNumber(b.hours)}+ ঘণ্টা`} />
            <Stat icon={GraduationCap} label={`${bnNumber(b.liveClasses)}+`} sub="লাইভ ক্লাস" />
            <Stat icon={Briefcase} label={`${bnNumber(b.projects)}+`} sub="প্রজেক্ট" />
            <Stat icon={Target} label={`${bnNumber(b.placement)}%`} sub="প্লেসমেন্ট" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href={`/apply?bootcamp=${b.slug}`} className="btn-gold px-7 py-4 rounded-full text-base bn font-semibold inline-flex items-center justify-center gap-2">
              আবেদন করুন →
            </Link>
            <button className="btn-ghost px-6 py-4 rounded-full text-sm bn inline-flex items-center justify-center gap-2">
              <Download className="h-4 w-4" /> ব্রোশিউর ডাউনলোড
            </button>
          </div>
        </div>
      </section>

      {/* Main + sidebar */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 md:px-6 grid lg:grid-cols-3 gap-10 py-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Outcomes */}
            <div>
              <div className="section-label mb-3">Outcomes</div>
              <h2 className="bn-headline text-3xl md:text-4xl">
                ৬ মাস পর আপনি <span className="gold-text">কী করতে পারবেন?</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {b.outcomes.map((o) => (
                  <div key={o} className="card-premium p-5 flex items-start gap-3">
                    <div className="h-7 w-7 rounded-full bg-emerald/15 border border-emerald/40 grid place-items-center shrink-0">
                      <span className="text-emerald text-sm">✓</span>
                    </div>
                    <p className="text-sm leading-relaxed">{o}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <div className="section-label mb-3">Curriculum</div>
              <h2 className="bn-headline text-3xl md:text-4xl">
                <span className="gold-text">{toBn(b.durationMonths)} মাসের</span> পূর্ণ পাঠ্যক্রম
              </h2>
              <div className="mt-8">
                <CurriculumTabs curriculum={b.curriculum} />
              </div>
            </div>

            {/* Schedule */}
            <div>
              <div className="section-label mb-3">Weekly Schedule</div>
              <h2 className="bn-headline text-3xl md:text-4xl">একটি সাধারণ সপ্তাহ</h2>
              <p className="bn text-ink-muted mt-3 text-sm">সাপ্তাহিক commitment: ১৫-২০ ঘণ্টা</p>
              <div className="mt-6 card-premium overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {b.schedule.map((s, i) => (
                      <tr key={i} className="border-b border-border/40 last:border-0">
                        <td className="bn px-5 py-4 w-32 font-semibold">{s.day}</td>
                        <td className="bn px-5 py-4 flex-1">{s.activity}</td>
                        <td className="num-mono px-5 py-4 text-right text-ink-muted whitespace-nowrap">{s.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="section-label mb-3">Tools & Tech</div>
              <h2 className="bn-headline text-3xl md:text-4xl">যা <span className="gold-text">শিখবেন</span></h2>
              <div className="flex flex-wrap gap-2 mt-8">
                {b.tools.map((t) => (
                  <div key={t} className="px-4 py-2 rounded-full border border-border bg-bg-elevated/60 text-sm hover:border-gold/40 hover:text-gold transition">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors */}
            {trackMentors.length > 0 && (
              <div>
                <div className="section-label mb-3">Track Mentors</div>
                <h2 className="bn-headline text-3xl md:text-4xl">এই ট্র্যাকের মেন্টর</h2>
                <div className="grid sm:grid-cols-2 gap-5 mt-8">
                  {trackMentors.map((m) => <MentorCard key={m.slug} m={m} />)}
                </div>
              </div>
            )}

            {/* Alumni */}
            {trackAlumni.length > 0 && (
              <div>
                <div className="section-label mb-3">Alumni</div>
                <h2 className="bn-headline text-3xl md:text-4xl">এই ট্র্যাকের সফল গ্র্যাজুয়েট</h2>
                <div className="grid sm:grid-cols-2 gap-5 mt-8">
                  {trackAlumni.slice(0, 4).map((a) => <AlumniCard key={a.slug} a={a} />)}
                </div>
              </div>
            )}

            {/* Eligibility */}
            <div>
              <div className="section-label mb-3">Who is this for</div>
              <h2 className="bn-headline text-3xl md:text-4xl">যোগ্যতা ও প্রয়োজনীয়তা</h2>
              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                <div className="card-premium p-6">
                  <h4 className="bn-headline text-lg mb-3">কাদের জন্য</h4>
                  <ul className="space-y-2 text-sm bn text-ink-muted list-disc pl-4">
                    <li>Career changers (২২-৩৫ বছর)</li>
                    <li>Recent graduates</li>
                    <li>Struggling job seekers</li>
                    <li>Freelance crew হতে আগ্রহী</li>
                  </ul>
                </div>
                <div className="card-premium p-6">
                  <h4 className="bn-headline text-lg mb-3">প্রয়োজন</h4>
                  <ul className="space-y-2 text-sm bn text-ink-muted list-disc pl-4">
                    <li>Basic computer skills</li>
                    <li>English reading ability</li>
                    <li>Laptop (8GB+ RAM)</li>
                    <li>Stable internet</li>
                    <li>১৫-২০ ঘণ্টা/সপ্তাহ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="card-premium p-6 border-2 border-gold/30">
              <div className="flex items-baseline justify-between">
                <span className="bn text-sm text-ink-muted">Batch ৪০</span>
                <div className="flex items-center gap-1.5">
                  <span className="dot" />
                  <span className="text-xs text-crimson bn">{bnNumber(b.seatsRemaining)} আসন বাকি</span>
                </div>
              </div>
              <div className="mt-3 num-mono text-3xl font-bold gold-text">{bnTaka(b.priceBdt)}</div>
              <div className="bn text-xs text-ink-muted mt-1">EMI ৳{bnNumber(b.emiMonthly)} × ৬ মাস · সুদমুক্ত</div>

              <div className="mt-6 p-4 rounded-xl bg-bg/60 border border-border/60">
                <div className="text-[11px] text-ink-muted uppercase tracking-widest mb-3">শুরু হচ্ছে</div>
                <div className="bn-headline text-lg">{bnDate(b.nextBatchDate)}</div>
                <div className="text-xs text-ink-muted mt-1 num-mono">{bnNumber(daysBetween(b.nextBatchDate))} দিন বাকি</div>
                <div className="mt-4">
                  <Countdown target={b.nextBatchDate} compact />
                </div>
              </div>

              <Link href={`/apply?bootcamp=${b.slug}`} className="btn-gold mt-6 block text-center py-4 rounded-xl text-sm font-semibold bn">
                আবেদন করুন →
              </Link>
              <p className="text-center text-[11px] text-ink-muted mt-2 bn">আবেদন ফ্রি · সিদ্ধান্ত ৭ দিনে</p>

              <div className="my-5 divider" />

              <div className="space-y-3 text-xs">
                <Row icon={Calendar} label="শুরু" value={bnDate(b.nextBatchDate)} />
                <Row icon={Clock} label="সময়সূচি" value="৫ দিন/সপ্তাহ · ৭-১০ PM" />
                <Row icon={Wallet} label="EMI" value={`${bnNumber(b.emiMonthly)}/মাস`} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, label, sub }: { icon: any; label: string; sub: string }) {
  return (
    <div className="glass rounded-xl p-4">
      <Icon className="h-4 w-4 text-gold mb-2" />
      <div className="num-mono text-xl font-bold gold-text">{label}</div>
      <div className="bn text-[11px] text-ink-muted mt-0.5">{sub}</div>
    </div>
  );
}

function Row({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-ink-muted">
      <span className="flex items-center gap-2 bn"><Icon className="h-3.5 w-3.5 text-gold" /> {label}</span>
      <span className="text-ink">{value}</span>
    </div>
  );
}
