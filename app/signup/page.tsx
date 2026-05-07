import SignupForm from "./SignupForm";
import Link from "next/link";

export const metadata = { title: "Signup — যাত্রা" };

export default function SignupPage() {
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
          <h1 className="bn-headline text-2xl">Account তৈরি করুন</h1>
          <p className="bn text-sm text-ink-muted mt-1">যাত্রায় যোগ দিন।</p>
          <SignupForm />
          <p className="text-xs text-center text-ink-muted bn mt-6">
            Account আছে? <Link href="/login" className="text-gold underline">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
