"use client";
import { useEffect, useState } from "react";
import { toBn } from "@/lib/format";

export default function Countdown({ target, compact = false }: { target: string | Date; compact?: boolean }) {
  const [diff, setDiff] = useState<{ d: number; h: number; m: number; s: number }>({
    d: 0, h: 0, m: 0, s: 0,
  });

  useEffect(() => {
    const t = typeof target === "string" ? new Date(target) : target;
    const tick = () => {
      const ms = Math.max(0, t.getTime() - Date.now());
      const d = Math.floor(ms / 86400000);
      const h = Math.floor((ms % 86400000) / 3600000);
      const m = Math.floor((ms % 3600000) / 60000);
      const s = Math.floor((ms % 60000) / 1000);
      setDiff({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const cell = (val: number, label: string) => (
    <div className={`text-center ${compact ? "" : "min-w-[80px]"}`}>
      <div className={`num-mono ${compact ? "text-2xl" : "text-4xl md:text-5xl"} font-bold gold-text leading-none`}>
        {toBn(String(val).padStart(2, "0"))}
      </div>
      <div className={`bn text-ink-muted mt-1 ${compact ? "text-[10px]" : "text-xs"} uppercase tracking-wider`}>
        {label}
      </div>
    </div>
  );

  return (
    <div className={`flex items-end ${compact ? "gap-2" : "gap-4 md:gap-6"}`}>
      {cell(diff.d, "দিন")}
      <div className={`text-gold/40 ${compact ? "text-2xl" : "text-4xl"} pb-1`}>:</div>
      {cell(diff.h, "ঘন্টা")}
      <div className={`text-gold/40 ${compact ? "text-2xl" : "text-4xl"} pb-1`}>:</div>
      {cell(diff.m, "মিনিট")}
      <div className={`text-gold/40 ${compact ? "text-2xl" : "text-4xl"} pb-1`}>:</div>
      {cell(diff.s, "সেকেন্ড")}
    </div>
  );
}
