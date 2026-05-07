import LoginForm from "./LoginForm";
import Link from "next/link";

export const metadata = { title: "Login — যাত্রা" };

export default function LoginPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gold-gradient grid place-items-center text-bg font-black text-lg">য</div>
            <span className="bn-serif text-2xl font-extrabold">যাত্রা</span>
          </Link>
        </div>
        <div className="card-premium p-8">
          <h1 className="bn-headline text-2xl">আবার স্বাগতম</h1>
          <p className="bn text-sm text-ink-muted mt-1">আপনার account এ login করুন।</p>
          <LoginForm />
          <p className="text-xs text-center text-ink-muted bn mt-6">
            Account নেই? <Link href="/signup" className="text-gold underline">Signup</Link>
          </p>
          <p className="text-[11px] text-center text-ink-muted/70 num-mono mt-4">
            Demo: student@jatra.bd / password123
          </p>
        </div>
      </div>
    </section>
  );
}
