import Link from "next/link";
import { Linkedin, Facebook, Youtube, Instagram, Twitter, MessagesSquare } from "lucide-react";
import { BOOTCAMPS, PAYMENT_PARTNERS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-bg-elevated/40 mt-20 sm:mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 sm:gap-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gold-gradient grid place-items-center text-bg font-black text-lg">য</div>
              <span className="bn-serif text-2xl font-extrabold">যাত্রা</span>
            </Link>
            <p className="bn text-sm text-ink-muted mt-3 leading-relaxed max-w-xs">
              বাংলাদেশের প্রিমিয়াম ক্যারিয়ার বুটক্যাম্প। চাকরির গ্যারান্টি সহ ৬ মাসের ক্যারিয়ার পরিবর্তন।
            </p>
            <div className="flex items-center gap-2 mt-5">
              {[
                { Icon: Linkedin,        href: "https://www.linkedin.com/company/jatra-bd",   label: "LinkedIn" },
                { Icon: Facebook,        href: "https://www.facebook.com/jatra.bd",            label: "Facebook" },
                { Icon: Youtube,         href: "https://www.youtube.com/@jatra-bd",            label: "YouTube" },
                { Icon: Instagram,       href: "https://www.instagram.com/jatra.bd",           label: "Instagram" },
                { Icon: Twitter,         href: "https://twitter.com/jatra_bd",                 label: "Twitter" },
                { Icon: MessagesSquare,  href: "https://discord.gg/jatra",                     label: "Discord" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:border-gold hover:text-gold transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4 num-mono">Bootcamps</div>
            <ul className="space-y-2 text-sm text-ink-muted">
              {BOOTCAMPS.slice(0, 6).map((b) => (
                <li key={b.slug}>
                  <Link href={`/bootcamp/${b.slug}`} className="bn hover:text-ink">{b.nameBn}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4 num-mono">Company</div>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><Link href="/about" className="bn hover:text-ink">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/mentors" className="bn hover:text-ink">মেন্টর</Link></li>
              <li><Link href="/alumni" className="bn hover:text-ink">এলামনাই</Link></li>
              <li><Link href="/teach" className="bn hover:text-ink">মেন্টর হোন</Link></li>
              <li><Link href="/blog" className="bn hover:text-ink">ব্লগ</Link></li>
              <li><Link href="/about#press" className="bn hover:text-ink">প্রেস</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4 num-mono">Support</div>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><Link href="/help" className="bn hover:text-ink">সাহায্য কেন্দ্র</Link></li>
              <li><Link href="/help#contact" className="bn hover:text-ink">যোগাযোগ</Link></li>
              <li><Link href="/legal/refund" className="bn hover:text-ink">রিফান্ড পলিসি</Link></li>
              <li><Link href="/legal/terms" className="bn hover:text-ink">শর্তাবলি</Link></li>
              <li><Link href="/legal/privacy" className="bn hover:text-ink">প্রাইভেসি</Link></li>
              <li><Link href="/legal/guarantee" className="bn hover:text-ink">জব গ্যারান্টি</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4 num-mono">Resources</div>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><Link href="/free" className="bn hover:text-ink">ফ্রি রিসোর্স</Link></li>
              <li><Link href="/blog" className="bn hover:text-ink">Career insights</Link></li>
              <li><Link href="/free#salary" className="bn hover:text-ink">Salary guide</Link></li>
              <li><Link href="/free#interview" className="bn hover:text-ink">Interview prep</Link></li>
              <li><Link href="/pricing" className="bn hover:text-ink">প্রাইসিং</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="text-xs uppercase tracking-widest text-ink-muted mb-4">Payment Partners</div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {PAYMENT_PARTNERS.map((p) => (
              <div key={p.name} className="text-xs text-ink-muted bn px-3 py-1.5 border border-border/60 rounded-md">
                {p.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ink-dim">
          <div className="bn">
            যাত্রা টেকনোলজিস লিমিটেড · House 12, Road 7, Banani, Dhaka 1213
          </div>
          <div className="num-mono">
            © 2026 Jatra · Trade License: TRAD/DSCC/12345/2024 · BIN: 005678901-0001 · DBID: BD-EDU-1024
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-border/40 text-center text-xs text-ink-dim">
          Developed by{" "}
          <a
            href="https://nasifahammedniloy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-soft transition link-underline font-semibold"
          >
            Niloy
          </a>{" "}
          ·{" "}
          <a
            href="https://nasifahammedniloy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="num-mono hover:text-ink transition"
          >
            nasifahammedniloy.com
          </a>
        </div>
      </div>
    </footer>
  );
}
