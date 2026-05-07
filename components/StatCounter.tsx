"use client";
import { useEffect, useRef, useState } from "react";
import { toBn } from "@/lib/format";

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  bn = true,
  duration = 1600,
  thousands = false,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  bn?: boolean;
  duration?: number;
  thousands?: boolean;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const display = thousands ? n.toLocaleString("en-IN") : String(n);
  return (
    <span ref={ref} className="num-mono">
      {prefix}
      {bn ? toBn(display) : display}
      {suffix}
    </span>
  );
}
