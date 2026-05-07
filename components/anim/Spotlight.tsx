"use client";
import { useEffect, useRef } from "react";

export default function Spotlight({
  children,
  className = "",
  size = 600,
  color = "rgba(232,179,61,0.13)",
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const g = glow.current;
    if (!el || !g) return;
    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      g!.style.background = `radial-gradient(${size}px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, ${color}, transparent 80%)`;
    }
    function leave() {
      g!.style.background = "transparent";
    }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", leave);
    };
  }, [size, color]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        ref={glow}
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{ borderRadius: "inherit" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
