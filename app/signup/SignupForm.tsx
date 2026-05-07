"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Signup failed");
      router.push("/apply");
      router.refresh();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4 mt-6">
      <input required placeholder="পূর্ণ নাম" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" required placeholder="ইমেইল" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="tel" placeholder="ফোন (+880)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input type="password" required placeholder="পাসওয়ার্ড (৬+)" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      {err && <div className="text-sm text-crimson bn">{err}</div>}
      <button disabled={loading} className="btn-gold w-full py-3 rounded-xl font-semibold bn">
        {loading ? "Creating..." : "Account তৈরি করুন →"}
      </button>
    </form>
  );
}
