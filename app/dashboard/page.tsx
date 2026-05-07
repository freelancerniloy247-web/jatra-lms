import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Section } from "@/components/Section";
import Link from "next/link";
import { bnNumber } from "@/lib/format";
import {
  Calendar, BookOpen, Briefcase, MessageSquare, Trophy, FileEdit,
  Radio, Users, Target, Wallet
} from "lucide-react";

export const metadata = { title: "Dashboard — যাত্রা" };

export default async function DashboardPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <Section className="pt-10">
      {/* Welcome banner */}
      <div className="card-premium p-6 md:p-10 relative overflow-hidden mb-8">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/8 blur-3xl" />
        <div className="relative flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs text-ink-muted bn">স্বাগতম</div>
            <h1 className="bn-headline text-3xl md:text-4xl mt-1">{user.name}</h1>
            <p className="bn text-sm text-ink-muted mt-2">২য় সপ্তাহ চলছে · Full-stack Web Development</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs text-ink-muted bn">Cohort progress</div>
            <div className="num-mono text-2xl font-bold gold-text">Week {bnNumber(2)}/{bnNumber(24)}</div>
            <div className="w-48 h-2 bg-bg/60 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-gold-gradient" style={{ width: "8%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's schedule */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-premium p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="bn-headline text-xl">আজকের সময়সূচি</h2>
              <span className="bn text-xs text-ink-muted">৪ মে ২০২৬</span>
            </div>
            <div className="space-y-3">
              <ScheduleItem
                icon={Radio}
                time="৭:০০ PM"
                title="Live Class: React Hooks Deep Dive"
                instructor="রাকিব হাসান"
                live
              />
              <ScheduleItem
                icon={FileEdit}
                time="রাত ১২ টা"
                title="Assignment due: useEffect Practice"
                instructor="৮টি প্রশ্ন · ১৫০ পয়েন্ট"
              />
              <ScheduleItem
                icon={Users}
                time="৮:৩০ PM"
                title="1-on-1 Mentor Session"
                instructor="তাসনিম আক্তার"
              />
            </div>
          </div>

          <div className="card-premium p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="bn-headline text-xl">এই সপ্তাহের tasks</h2>
              <span className="text-xs text-ink-muted">৫টি বাকি</span>
            </div>
            <div className="space-y-2">
              {[
                { t: "Module 2 Quiz", deadline: "আজ রাতে", done: false, type: "Quiz" },
                { t: "useEffect Assignment", deadline: "আগামীকাল", done: false, type: "Assignment" },
                { t: "Read: React Patterns", deadline: "৭ মে", done: false, type: "Reading" },
                { t: "Module 1 Quiz", deadline: "Done", done: true, type: "Quiz" },
                { t: "Component Project", deadline: "৯ মে", done: false, type: "Project" },
              ].map((t, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-bg/40 hover:bg-bg-high/40 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked={t.done} className="!w-4 !h-4 !p-0" />
                    <div>
                      <div className={`text-sm ${t.done ? "line-through text-ink-muted" : ""}`}>{t.t}</div>
                      <div className="text-[11px] text-ink-muted bn">{t.type} · {t.deadline}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="bn-headline text-xl">Cohort Leaderboard</h2>
              <span className="text-xs text-ink-muted">Engagement-based</span>
            </div>
            <div className="space-y-2">
              {[
                { n: "মীর সাকিব", pts: 980, rank: 1 },
                { n: "তারেক আজিজ", pts: 920, rank: 2 },
                { n: "সাদিয়া আহমেদ", pts: 875, rank: 3 },
                { n: "অনিকা তাসনিম", pts: 810, rank: 4 },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-bg/40">
                  <div className="flex items-center gap-3">
                    <div className={`num-mono text-sm font-bold w-7 text-center ${p.rank === 1 ? "text-gold" : "text-ink-muted"}`}>
                      {bnNumber(p.rank)}
                    </div>
                    <span className="bn text-sm">{p.n}</span>
                  </div>
                  <span className="num-mono text-xs gold-text">{bnNumber(p.pts)} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <SideCard icon={Trophy} title="আপনার Score" value="৮৫০ pts" sub="৩ rank up এই সপ্তাহে" />
          <SideCard icon={Target} title="Attendance" value="৯৪%" sub="Job guarantee eligible" />
          <SideCard icon={Briefcase} title="Career Service" value="Resume reviewing" sub="Mock interview ১০ মে" />

          <div className="card-premium p-6">
            <h3 className="bn-headline text-base mb-3">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <DashLink icon={BookOpen}       label="Curriculum"   href="/bootcamps" />
              <DashLink icon={Radio}          label="Live Classes" href="/dashboard/live" />
              <DashLink icon={FileEdit}       label="Assignments"  href="/dashboard#assignments" />
              <DashLink icon={Briefcase}      label="Projects"     href="/dashboard#projects" />
              <DashLink icon={Users}          label="Mentors"      href="/mentors" />
              <DashLink icon={MessageSquare}  label="Discord"      href="https://discord.gg/jatra" external />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ScheduleItem({ icon: Icon, time, title, instructor, live }: any) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-bg/40 hover:bg-bg-high/40 transition">
      <div className="num-mono text-sm text-gold w-16 shrink-0">{time}</div>
      <div className={`h-8 w-8 rounded-lg ${live ? "bg-crimson/15 border border-crimson/40" : "bg-bg/60 border border-border"} grid place-items-center shrink-0`}>
        <Icon className={`h-4 w-4 ${live ? "text-crimson" : "text-gold"}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold flex items-center gap-2">
          {title}
          {live && <span className="dot" />}
        </div>
        <div className="text-xs text-ink-muted bn mt-0.5">{instructor}</div>
      </div>
      {live && (
        <Link href="/dashboard/live" className="btn-gold px-3 py-1.5 rounded-full text-[11px] font-semibold bn">
          Join →
        </Link>
      )}
    </div>
  );
}

function SideCard({ icon: Icon, title, value, sub }: any) {
  return (
    <div className="card-premium p-5">
      <Icon className="h-5 w-5 text-gold mb-2" />
      <div className="text-xs text-ink-muted bn">{title}</div>
      <div className="num-mono text-xl font-bold gold-text mt-1">{value}</div>
      <div className="text-[11px] text-ink-muted bn mt-1">{sub}</div>
    </div>
  );
}

function DashLink({ icon: Icon, label, href, external }: { icon: any; label: string; href: string; external?: boolean }) {
  const cls = "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bg/60 transition";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        <Icon className="h-4 w-4 text-ink-muted" />
        <span>{label}</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <Icon className="h-4 w-4 text-ink-muted" />
      <span>{label}</span>
    </Link>
  );
}
