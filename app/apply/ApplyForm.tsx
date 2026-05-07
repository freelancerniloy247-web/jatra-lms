"use client";
import { useState, useEffect, useMemo } from "react";
import { BOOTCAMPS } from "@/lib/data";
import { bnNumber, bnTaka } from "@/lib/format";
import { Check, ChevronLeft, ChevronRight, PartyPopper, Clock } from "lucide-react";
import Link from "next/link";

type FormState = {
  bootcamp: string;
  fullNameBn: string;
  fullNameEn: string;
  email: string;
  phone: string;
  password: string;
  dob: string;
  gender: string;
  city: string;
  linkedin: string;
  education: string;
  institution: string;
  gradYear: string;
  currentStatus: string;
  experience: string;
  motivation: string;
  goal: string;
  source: string;
  hoursCommit: boolean;
  schedulePref: string;
  hardware: string;
  internet: string;
  screeningAnswers: number[];
};

const initialForm: FormState = {
  bootcamp: "",
  fullNameBn: "",
  fullNameEn: "",
  email: "",
  phone: "",
  password: "",
  dob: "",
  gender: "",
  city: "",
  linkedin: "",
  education: "",
  institution: "",
  gradYear: "",
  currentStatus: "",
  experience: "",
  motivation: "",
  goal: "",
  source: "",
  hoursCommit: false,
  schedulePref: "",
  hardware: "",
  internet: "",
  screeningAnswers: [],
};

const screeningQuestions = [
  { q: "What is 15% of 200?", opts: ["20", "30", "25", "35"], correct: 1 },
  { q: "Which language is used for web styling?", opts: ["HTML", "CSS", "JavaScript", "Python"], correct: 1 },
  { q: "If A=1, B=2, C=3 then DEAD = ?", opts: ["4514", "4515", "451", "4154"], correct: 0 },
  { q: "Choose the correct: 'He ___ to school every day.'", opts: ["go", "goes", "going", "gone"], correct: 1 },
  { q: "Next number in sequence: 2, 6, 12, 20, ?", opts: ["28", "30", "32", "34"], correct: 1 },
  { q: "Synonym of 'pristine'", opts: ["dirty", "pure", "old", "rare"], correct: 1 },
  { q: "5 cars take 25 minutes to wash. How long for 10?", opts: ["50 min", "25 min", "75 min", "12.5 min"], correct: 1 },
  { q: "Which is a database?", opts: ["React", "Express", "MongoDB", "Tailwind"], correct: 2 },
  { q: "Antonym of 'increase'", opts: ["raise", "decrease", "improve", "extend"], correct: 1 },
  { q: "What does 'API' stand for?", opts: ["Auto Program Internal", "Application Programming Interface", "Applied Programming Index", "Async Process Invoke"], correct: 1 },
];

const steps = [
  "বুটক্যাম্প",
  "ব্যক্তিগত তথ্য",
  "শিক্ষা",
  "অভিজ্ঞতা ও motivation",
  "Commitment",
  "Screening Test",
  "Submit",
];

export default function ApplyForm({ preselected }: { preselected?: string }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({ ...initialForm, bootcamp: preselected || "" });
  const [submitted, setSubmitted] = useState<{ id: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (k: keyof FormState, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const canNext = useMemo(() => {
    if (step === 0) return !!form.bootcamp;
    if (step === 1) return form.fullNameBn && form.fullNameEn && form.email && form.phone && form.password.length >= 6 && form.city;
    if (step === 2) return form.education && form.institution && form.gradYear && form.currentStatus;
    if (step === 3) return form.experience && form.motivation.length >= 50 && form.goal && form.source;
    if (step === 4) return form.schedulePref && form.hardware && form.internet;
    if (step === 5) return form.screeningAnswers.filter((a) => a !== undefined).length === screeningQuestions.length;
    return true;
  }, [step, form]);

  async function submit() {
    setSubmitting(true);
    setError("");
    try {
      const score = form.screeningAnswers.reduce(
        (acc, ans, i) => (ans === screeningQuestions[i].correct ? acc + 1 : acc),
        0
      );
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, screeningScore: score }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setSubmitted({ id: json.id });
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-premium p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 bg-gold/15 blur-3xl rounded-full" />
        <PartyPopper className="h-16 w-16 text-gold mx-auto" />
        <h2 className="bn-headline text-3xl md:text-5xl mt-6">আপনার আবেদন <span className="gold-text">গৃহীত হয়েছে!</span></h2>
        <p className="bn text-ink-muted mt-4">৪৮ ঘণ্টার মধ্যে আপনি email পাবেন।</p>
        <div className="mt-8 inline-block px-6 py-3 rounded-full border border-gold/40 bg-gold/5">
          <span className="text-xs text-ink-muted bn mr-2">Application ID:</span>
          <span className="num-mono font-bold text-gold">#{submitted.id.slice(-8).toUpperCase()}</span>
        </div>

        <div className="mt-10 max-w-md mx-auto text-left space-y-4">
          {[
            "৪৮ ঘণ্টার মধ্যে স্ক্রিনিং রেজাল্ট পাবেন",
            "ইন্টারভিউয়ের জন্য ক্যালেন্ডার লিংক পাঠানো হবে",
            "৭ দিনের মধ্যে চূড়ান্ত সিদ্ধান্ত",
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-emerald/15 border border-emerald/40 grid place-items-center shrink-0">
                <Check className="h-3.5 w-3.5 text-emerald" />
              </div>
              <span className="bn text-sm">{s}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={`/application/${submitted.id}`} className="btn-gold px-6 py-3 rounded-full text-sm bn font-semibold">Track application →</Link>
          <Link href="/" className="btn-ghost px-6 py-3 rounded-full text-sm">Back to home</Link>
        </div>
        <p className="text-[11px] text-ink-muted mt-6 bn">📧 admission@jatra.bd কে contacts এ যোগ করুন</p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-all ${i <= step ? "bg-gold" : "bg-border"}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs">
          <span className="bn text-gold">Step {bnNumber(step + 1)}/{bnNumber(steps.length)}</span>
          <span className="bn text-ink-muted">{steps[step]}</span>
        </div>
      </div>

      <div className="card-premium p-6 md:p-10">
        {step === 0 && (
          <div>
            <h3 className="bn-headline text-2xl md:text-3xl mb-6">কোন বুটক্যাম্পে ভর্তি হতে চান?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {BOOTCAMPS.map((b) => (
                <button
                  key={b.slug}
                  onClick={() => update("bootcamp", b.slug)}
                  className={`text-left p-5 rounded-xl border transition relative ${
                    form.bootcamp === b.slug
                      ? "border-gold bg-gold/8 shadow-gold"
                      : "border-border bg-bg-elevated/40 hover:border-gold/30"
                  }`}
                >
                  {form.bootcamp === b.slug && (
                    <div className="absolute top-3 right-3 h-6 w-6 rounded-full btn-gold grid place-items-center">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div className="bn-headline text-lg pr-8">{b.nameBn}</div>
                  <div className="text-xs text-ink-muted mt-1">{b.nameEn}</div>
                  <div className="flex gap-3 mt-4 text-xs">
                    <span className="num-mono text-gold">{bnTaka(b.priceBdt)}</span>
                    <span className="text-border">·</span>
                    <span className="bn text-ink-muted">{bnNumber(b.durationMonths)} মাস</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="bn-headline text-2xl md:text-3xl mb-6">আপনার ব্যক্তিগত তথ্য</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="পূর্ণ নাম (বাংলা)"><input value={form.fullNameBn} onChange={(e) => update("fullNameBn", e.target.value)} placeholder="মীর সাকিব" required /></Field>
              <Field label="Full name (English)"><input value={form.fullNameEn} onChange={(e) => update("fullNameEn", e.target.value)} placeholder="Mir Sakib" required /></Field>
              <Field label="ইমেইল"><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required /></Field>
              <Field label="ফোন"><input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+880 1XXX-XXXXXX" required /></Field>
              <Field label="পাসওয়ার্ড (account তৈরির জন্য)"><input type="password" value={form.password} onChange={(e) => update("password", e.target.value)} placeholder="৬+ characters" required /></Field>
              <Field label="জন্ম তারিখ"><input type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} /></Field>
              <Field label="লিঙ্গ">
                <select value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>পুরুষ</option><option>মহিলা</option><option>অন্যান্য</option>
                </select>
              </Field>
              <Field label="বর্তমান শহর/জেলা"><input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="ঢাকা" required /></Field>
              <Field label="LinkedIn (optional)" full><input value={form.linkedin} onChange={(e) => update("linkedin", e.target.value)} placeholder="linkedin.com/in/yourname" /></Field>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="bn-headline text-2xl md:text-3xl mb-6">শিক্ষা ও বর্তমান অবস্থা</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="সর্বোচ্চ শিক্ষা">
                <select value={form.education} onChange={(e) => update("education", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>HSC / Class 12</option>
                  <option>Diploma</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                </select>
              </Field>
              <Field label="প্রতিষ্ঠানের নাম"><input value={form.institution} onChange={(e) => update("institution", e.target.value)} placeholder="University of Dhaka" /></Field>
              <Field label="পাসের সাল"><input type="number" value={form.gradYear} onChange={(e) => update("gradYear", e.target.value)} placeholder="2024" /></Field>
              <Field label="বর্তমান অবস্থা">
                <select value={form.currentStatus} onChange={(e) => update("currentStatus", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>Student</option>
                  <option>Working</option>
                  <option>Job seeker</option>
                  <option>Career changer</option>
                </select>
              </Field>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="bn-headline text-2xl md:text-3xl mb-6">অভিজ্ঞতা ও motivation</h3>
            <div className="space-y-4">
              <Field label="পূর্ব অভিজ্ঞতা">
                <select value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>None</option>
                  <option>Beginner</option>
                  <option>Some</option>
                  <option>Intermediate</option>
                </select>
              </Field>
              <Field label="কেন এই বুটক্যাম্প? (১০০+ অক্ষর)">
                <textarea value={form.motivation} onChange={(e) => update("motivation", e.target.value)} rows={4} placeholder="আপনার motivation শেয়ার করুন..." />
                <div className="text-xs text-ink-muted mt-1 num-mono">{form.motivation.length} characters</div>
              </Field>
              <Field label="১ বছরে আপনার career goal?">
                <textarea value={form.goal} onChange={(e) => update("goal", e.target.value)} rows={3} placeholder="..." />
              </Field>
              <Field label="আমাদের সম্পর্কে জানলেন কীভাবে?">
                <select value={form.source} onChange={(e) => update("source", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>Facebook</option>
                  <option>YouTube</option>
                  <option>Google</option>
                  <option>Friend referral</option>
                  <option>Alumni</option>
                  <option>Newspaper</option>
                  <option>Other</option>
                </select>
              </Field>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="bn-headline text-2xl md:text-3xl mb-6">Commitment ও logistics</h3>
            <div className="space-y-5">
              <label className="flex items-center gap-3 p-4 rounded-xl border border-border cursor-pointer hover:border-gold/40 bg-bg/40">
                <input type="checkbox" checked={form.hoursCommit} onChange={(e) => update("hoursCommit", e.target.checked)} className="!w-5 !h-5 !p-0" />
                <span className="bn text-sm">আমি সাপ্তাহিক ১৫-২০ ঘণ্টা commit করতে পারব</span>
              </label>
              <Field label="Schedule preference">
                <select value={form.schedulePref} onChange={(e) => update("schedulePref", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>Evening (7-10 PM)</option>
                  <option>Weekend</option>
                  <option>Flexible</option>
                </select>
              </Field>
              <Field label="Hardware">
                <select value={form.hardware} onChange={(e) => update("hardware", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>Laptop 8GB+</option>
                  <option>Laptop &lt;8GB</option>
                  <option>Desktop</option>
                  <option>Need help</option>
                </select>
              </Field>
              <Field label="Internet stability">
                <select value={form.internet} onChange={(e) => update("internet", e.target.value)}>
                  <option value="">নির্বাচন করুন</option>
                  <option>Excellent (Broadband)</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Poor</option>
                </select>
              </Field>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="bn-headline text-2xl md:text-3xl">Screening Test</h3>
              <span className="num-mono text-sm text-gold inline-flex items-center gap-1">
                <Clock className="h-4 w-4" /> 20:00
              </span>
            </div>
            <p className="bn text-sm text-ink-muted mb-6">১০টি বহুনির্বাচনি প্রশ্ন। নিরীক্ষা: aptitude, logic, English।</p>
            <div className="space-y-5">
              {screeningQuestions.map((q, i) => (
                <div key={i} className="p-5 rounded-xl border border-border bg-bg/40">
                  <div className="flex gap-3 mb-3">
                    <span className="num-mono text-gold font-bold">{bnNumber(i + 1)}.</span>
                    <p className="text-sm flex-1">{q.q}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 ml-8">
                    {q.opts.map((opt, oi) => (
                      <label
                        key={oi}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs cursor-pointer ${
                          form.screeningAnswers[i] === oi
                            ? "border-gold bg-gold/10"
                            : "border-border hover:border-gold/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q${i}`}
                          checked={form.screeningAnswers[i] === oi}
                          onChange={() => {
                            const arr = [...form.screeningAnswers];
                            arr[i] = oi;
                            update("screeningAnswers", arr);
                          }}
                          className="!w-4 !h-4 !p-0"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <h3 className="bn-headline text-2xl md:text-3xl mb-2">Review ও submit</h3>
            <p className="bn text-ink-muted mb-6 text-sm">নিচের তথ্যগুলো ঠিক আছে কিনা যাচাই করুন।</p>
            <div className="space-y-3 text-sm">
              <Review label="Bootcamp" value={BOOTCAMPS.find((b) => b.slug === form.bootcamp)?.nameBn} />
              <Review label="নাম" value={`${form.fullNameBn} (${form.fullNameEn})`} />
              <Review label="যোগাযোগ" value={`${form.email} · ${form.phone}`} />
              <Review label="শহর" value={form.city} />
              <Review label="শিক্ষা" value={`${form.education} · ${form.institution} · ${form.gradYear}`} />
              <Review label="অবস্থা" value={form.currentStatus} />
              <Review label="অভিজ্ঞতা" value={form.experience} />
              <Review label="Schedule" value={form.schedulePref} />
              <Review label="Screening Score" value={`${form.screeningAnswers.reduce((a, ans, i) => (ans === screeningQuestions[i].correct ? a + 1 : a), 0)}/10`} />
            </div>
            <div className="mt-6 p-4 rounded-xl border border-gold/30 bg-gold/5 flex items-start gap-3">
              <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <p className="bn text-sm text-ink/95">আবেদন ফ্রি · কোনো ফি নেই। ৪৮ ঘণ্টার মধ্যে আপনি email পাবেন।</p>
            </div>
            {error && <div className="mt-4 p-3 rounded-lg border border-crimson/40 bg-crimson/10 text-crimson text-sm">{error}</div>}
          </div>
        )}

        {/* Nav */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/60">
          <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="btn-ghost px-5 py-2.5 rounded-full text-sm flex items-center gap-2 disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" /> পেছনে
          </button>

          {step < steps.length - 1 ? (
            <button
              disabled={!canNext}
              onClick={() => setStep(step + 1)}
              className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold bn flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              পরবর্তী <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              disabled={submitting}
              onClick={submit}
              className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold bn flex items-center gap-2 disabled:opacity-60"
            >
              {submitting ? "submitting..." : "Submit application →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-xs text-ink-muted bn mb-1.5 block">{label}</label>
      {children}
    </div>
  );
}

function Review({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-border/60">
      <span className="bn text-ink-muted">{label}</span>
      <span className="text-right max-w-[60%]">{value || "—"}</span>
    </div>
  );
}
