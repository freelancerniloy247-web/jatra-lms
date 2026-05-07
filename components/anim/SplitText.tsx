"use client";
import { useEffect, useRef, useState } from "react";

export default function SplitText({
  text,
  by = "word",
  delay = 0,
  stagger = 60,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  className?: string;
  as?: any;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const tokens = by === "word" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <Tag ref={ref as any} className={className} aria-label={text}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;
        return (
          <span
            key={i}
            aria-hidden
            className="inline-block will-change-transform"
            style={{
              transition: "transform 900ms cubic-bezier(0.16,1,0.3,1), opacity 900ms",
              transitionDelay: `${delay + i * stagger}ms`,
              transform: shown ? "translateY(0)" : "translateY(100%)",
              opacity: shown ? 1 : 0,
            }}
          >
            {token}
          </span>
        );
      })}
    </Tag>
  );
}
