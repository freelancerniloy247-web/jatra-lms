"use client";
import { useEffect, useRef } from "react";

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let scheduled = false;
    let active = false;

    function schedule() {
      if (scheduled) return;
      scheduled = true;
      raf = requestAnimationFrame(tick);
    }
    function tick() {
      scheduled = false;
      cur.x += (target.x - cur.x) * 0.22;
      cur.y += (target.y - cur.y) * 0.22;
      if (el) el.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0)`;
      if (Math.abs(target.x - cur.x) > 0.05 || Math.abs(target.y - cur.y) > 0.05) schedule();
    }

    function onMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      target.x = (e.clientX - rect.left - rect.width / 2) * strength;
      target.y = (e.clientY - rect.top - rect.height / 2) * strength;
      schedule();
    }
    function onEnter() {
      active = true;
      el.addEventListener("mousemove", onMove, { passive: true });
    }
    function onLeave() {
      active = false;
      el.removeEventListener("mousemove", onMove);
      target.x = 0;
      target.y = 0;
      schedule();
    }

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      style={{
        transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)",
      }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
