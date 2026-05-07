"use client";
import { useEffect, useRef, useState } from "react";

type Variant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur" | "rotate";

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  once = true,
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: any;
  threshold?: number;
  once?: boolean;
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
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  const initial: Record<Variant, string> = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-down": "-translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0",
    "fade-right": "-translate-x-8 opacity-0",
    scale: "scale-95 opacity-0",
    blur: "blur-md opacity-0",
    rotate: "-rotate-3 opacity-0 scale-95",
  };

  return (
    <Tag
      ref={ref as any}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`will-change-transform transition-all ${shown ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0 rotate-0" : initial[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}
