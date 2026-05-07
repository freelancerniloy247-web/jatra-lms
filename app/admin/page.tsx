import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { Section } from "@/components/Section";
import { bnDate, bnNumber } from "@/lib/format";

export const metadata = { title: "Admin — যাত্রা" };

export default async function AdminPage() {
  const user = await getSession();
  if (!user) redirect("/login");
  if (user.role !== "ADMIN") redirect("/");

  const [applications, totalUsers, totalBootcamps, totalSubscribers] = await Promise.all([
    prisma.application.findMany({
      include: { bootcamp: true, applicant: true },
      orderBy: { createdAt: "desc" },
      take: 30,
    }),
    prisma.user.count(),
    prisma.bootcamp.count(),
    prisma.subscriber.count(),
  ]);

  return (
    <Section className="pt-12">
      <div className="mb-10">
        <div className="section-label mb-3">Admin</div>
        <h1 className="bn-headline text-4xl md:text-5xl">Dashboard</h1>
        <p className="bn text-ink-muted mt-2 text-sm">Welcome back, {user.name}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Stat label="Applications" value={applications.length} />
        <Stat label="Users" value={totalUsers} />
        <Stat label="Bootcamps" value={totalBootcamps} />
        <Stat label="Subscribers" value={totalSubscribers} />
      </div>
      <div className="card-premium overflow-hidden">
        <div className="px-5 py-4 border-b border-border/60">
          <h3 className="bn-headline text-lg">Recent Applications</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 text-left text-ink-muted">
                <th className="px-5 py-3 bn">Applicant</th>
                <th className="px-5 py-3 bn">বুটক্যাম্প</th>
                <th className="px-5 py-3 num-mono">Score</th>
                <th className="px-5 py-3 bn">Status</th>
                <th className="px-5 py-3 num-mono">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-border/40 last:border-0 hover:bg-bg-elevated/40">
                  <td className="px-5 py-3">
                    <div className="bn font-semibold">{app.fullNameBn}</div>
                    <div className="text-xs text-ink-muted">{app.applicant.email}</div>
                  </td>
                  <td className="px-5 py-3 bn">{app.bootcamp.nameBn}</td>
                  <td className="px-5 py-3 num-mono">{bnNumber(app.screeningScore || 0)}/10</td>
                  <td className="px-5 py-3">
                    <span className={`text-[10px] px-2 py-1 rounded-full font-semibold ${statusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 num-mono text-xs text-ink-muted">{bnDate(app.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="card-premium p-5">
      <div className="text-xs text-ink-muted uppercase tracking-widest">{label}</div>
      <div className="num-mono text-3xl font-bold gold-text mt-1">{bnNumber(value)}</div>
    </div>
  );
}

function statusColor(s: string) {
  if (s === "SUBMITTED") return "bg-bg-high text-ink-muted border border-border";
  if (s === "SCREENING") return "bg-gold/15 text-gold border border-gold/40";
  if (s === "INTERVIEW") return "bg-emerald/15 text-emerald border border-emerald/40";
  if (s === "ACCEPTED" || s === "ENROLLED") return "bg-emerald/20 text-emerald border border-emerald/50";
  return "bg-crimson/15 text-crimson border border-crimson/40";
}
