import Image from "next/image";
import type { Alumni } from "@/lib/data";
import { bnTaka } from "@/lib/format";
import { TrendingUp } from "lucide-react";

export default function AlumniCard({ a }: { a: Alumni }) {
  return (
    <article className="card-premium lift overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={a.photo}
          alt={a.nameEn}
          fill
          className="object-cover group-hover:scale-110 transition duration-[1200ms] ease-out"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/30 to-transparent" />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-bg/80 backdrop-blur text-[10px] num-mono text-gold border border-gold/30 group-hover:border-gold/60 transition">
          {a.batch}
        </div>
        {/* Sweep on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
          style={{ background: "linear-gradient(125deg, transparent 35%, rgba(232,179,61,0.18) 50%, transparent 65%)" }}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="bn-headline text-lg group-hover:gold-text transition">{a.nameBn}</h4>
            <p className="text-xs text-ink-muted mt-0.5">{a.afterRole} · {a.company}</p>
          </div>
          <Image src={a.companyLogo} alt={a.company} width={28} height={28} className="h-7 w-7 rounded-md bg-white/90 p-1 object-contain" />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-bg/40 border border-border/60 group-hover:border-gold/30 transition">
          <div className="text-[10px] text-ink-muted bn">আগে</div>
          <div className="text-xs bn line-clamp-1">{a.beforeRole}</div>
          <div className="my-2 h-px bg-border" />
          <div className="text-[10px] text-emerald bn flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> এখন
          </div>
          <div className="text-xs num-mono mt-0.5 gold-text font-bold">{bnTaka(a.salary)}/মাস</div>
        </div>
      </div>
    </article>
  );
}
