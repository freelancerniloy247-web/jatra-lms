import { prisma } from "@/lib/db";
import { BOOTCAMPS } from "@/lib/data";
import { notFound } from "next/navigation";
import { bnDate, bnNumber } from "@/lib/format";
import { Section } from "@/components/Section";
import { Check, Clock } from "lucide-react";
import Link from "next/link";

export default async function ApplicationStatus({ params }: { params: { id: string } }) {
  const app = await prisma.application.findUnique({
    where: { id: params.id },
    include: { bootcamp: true, applicant: true },
  });
  if (!app) return notFound();

  const bootcamp = BOOTCAMPS.find((b) => b.slug === app.bootcamp.slug);

  const timeline = [
    { key: "SUBMITTED", label: "Application submitted", desc: `আবেদন গৃহীত হয়েছে`, date: app.createdAt, done: true },
    { key: "SCREENING", label: "Screening test", desc: `Score: ${app.screeningScore || 0}/10`, date: app.createdAt, done: true },
    { key: "INTERVIEW", label: "Interview", desc: app.interviewAt ? `Scheduled: ${bnDate(app.interviewAt)}` : "শীঘ্রই schedule হবে", date: app.interviewAt, done: !!app.interviewAt },
    { key: "ACCEPTED", label: "Admission decision", desc: "Pending", date: null, done: ["ACCEPTED", "ENROLLED"].includes(app.status) },
    { key: "ENROLLED", label: "Payment & enrollment", desc: "Awaiting", date: null, done: app.status === "ENROLLED" },
  ];

  return (
    <Section className="pt-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <div className="text-xs text-ink-muted num-mono">APPLICATION ID</div>
          <h1 className="num-mono text-3xl md:text-4xl font-bold gold-text">#{app.id.slice(-8).toUpperCase()}</h1>
          <div className="bn text-ink-muted mt-2">
            {app.bootcamp.nameBn} · {app.fullNameBn}
          </div>
        </div>

        <div className="card-premium p-6 md:p-10">
          <h3 className="bn-headline text-xl mb-6">Status timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-6">
              {timeline.map((t) => (
                <div key={t.key} className="relative pl-12">
                  <div
                    className={`absolute left-0 top-0 h-9 w-9 rounded-full grid place-items-center ${
                      t.done
                        ? "bg-emerald/15 border border-emerald/40 text-emerald"
                        : "bg-bg-high border border-border text-ink-muted"
                    }`}
                  >
                    {t.done ? <Check className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${t.done ? "text-ink" : "text-ink-muted"}`}>
                      {t.label}
                    </div>
                    <div className="bn text-xs text-ink-muted mt-1">{t.desc}</div>
                    {t.date && (
                      <div className="num-mono text-[11px] text-ink-muted mt-1">{bnDate(t.date)}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border/60 flex flex-col sm:flex-row gap-3">
            <a href="mailto:admission@jatra.bd" className="btn-ghost px-5 py-2.5 rounded-full text-sm bn flex-1 text-center">Contact admissions</a>
            <a href="https://wa.me/8801711111111" className="btn-gold px-5 py-2.5 rounded-full text-sm font-semibold bn flex-1 text-center">WhatsApp support</a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-ink-muted bn">
          Saved Application: <Link href="/" className="text-gold underline">Back to Home</Link>
        </div>
      </div>
    </Section>
  );
}
