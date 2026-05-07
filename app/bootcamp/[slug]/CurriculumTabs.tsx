"use client";
import { useState } from "react";
import { toBn } from "@/lib/format";

type Module = { month: number; title: string; topics: string[]; projects: string[] };

export default function CurriculumTabs({ curriculum }: { curriculum: Module[] }) {
  const [active, setActive] = useState(curriculum[0].month);
  const current = curriculum.find((c) => c.month === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {curriculum.map((c) => (
          <button
            key={c.month}
            onClick={() => setActive(c.month)}
            className={`px-4 py-2 rounded-full text-sm transition border ${
              active === c.month
                ? "bg-gold text-bg border-gold font-semibold"
                : "border-border text-ink-muted hover:text-ink hover:border-gold/40"
            }`}
          >
            <span className="num-mono">{toBn(c.month)}</span> · {c.title}
          </button>
        ))}
      </div>
      <div className="card-premium p-6 md:p-8">
        <div className="flex items-baseline gap-3">
          <span className="num-mono text-5xl md:text-6xl font-black text-gold/15">{toBn(current.month).padStart(2, "০")}</span>
          <h3 className="bn-headline text-2xl md:text-3xl">Month {toBn(current.month)}: {current.title}</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-3">Topics</div>
            <ul className="space-y-2">
              {current.topics.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <span className="text-gold mt-1">→</span>
                  <span className="bn">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-3">Projects</div>
            <ul className="space-y-2">
              {current.projects.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <span className="text-emerald mt-1">●</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
