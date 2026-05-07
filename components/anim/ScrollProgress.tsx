"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let scheduled = false;

    function update() {
      scheduled = false;
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct / 100})`;
    }
    function onScroll() {
      if (scheduled) return;
      scheduled = true;
      raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-gold-gradient origin-left will-change-transform"
        style={{
          transform: "scaleX(0)",
          boxShadow: "0 0 12px rgba(232,179,61,0.8)",
        }}
      />
    </div>
  );
}
