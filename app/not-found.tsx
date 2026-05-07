import Link from "next/link";
import { BOOTCAMPS } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-5 py-20">
      <div className="max-w-2xl text-center">
        <div className="num-mono text-9xl md:text-[180px] font-black gold-text leading-none">404</div>
        <h1 className="bn-headline text-3xl md:text-5xl mt-4">এই পথ <span className="gold-text">বন্ধ</span> —</h1>
        <h2 className="bn-headline text-3xl md:text-5xl">কিন্তু আপনার যাত্রা চলবে।</h2>
        <p className="bn text-ink-muted mt-6">যা খুঁজছেন তা পাচ্ছেন না? নিচে জনপ্রিয় বুটক্যাম্পগুলো দেখুন।</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {BOOTCAMPS.slice(0, 5).map((b) => (
            <Link key={b.slug} href={`/bootcamp/${b.slug}`} className="px-3 py-1.5 rounded-full border border-border text-xs hover:border-gold/40 hover:text-gold bn">
              {b.nameBn}
            </Link>
          ))}
        </div>
        <Link href="/" className="btn-gold mt-8 inline-flex px-7 py-3 rounded-full text-sm font-semibold bn">
          হোম এ ফিরে যান →
        </Link>
      </div>
    </section>
  );
}
