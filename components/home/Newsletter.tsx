"use client";
import { Section } from "@/components/Section";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setDone(true);
      setEmail("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section className="bg-bg-elevated/30 border-y border-border/50">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="h-9 w-9 text-gold mx-auto mb-4" />
        <h3 className="bn-headline text-2xl md:text-4xl">Career insights, প্রতি সপ্তাহে</h3>
        <p className="bn text-ink-muted mt-3">
          ৫০,০০০+ পাঠক · Salary insights · Industry trends · Interview tips · Skill demand
        </p>
        {done ? (
          <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-emerald/40 bg-emerald/10 text-emerald text-sm bn">
            ✓ ধন্যবাদ! আপনার ইনবক্সে শীঘ্রই প্রথম insight পাবেন।
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1"
            />
            <button disabled={loading} className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold bn inline-flex items-center justify-center gap-2 disabled:opacity-60">
              {loading ? "..." : (<>Subscribe <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
