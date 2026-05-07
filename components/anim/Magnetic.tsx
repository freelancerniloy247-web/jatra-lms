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
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const node: HTMLDivElement = el;

    let raf = 0;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let scheduled = false;

    function schedule() {
      if (scheduled) return;
      scheduled = true;
      raf = requestAnimationFrame(tick);
    }
    function tick() {
      scheduled = false;
      cur.x += (target.x - cur.x) * 0.22;
      cur.y += (target.y - cur.y) * 0.22;
      node.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0)`;
      if (Math.abs(target.x - cur.x) > 0.05 || Math.abs(target.y - cur.y) > 0.05) schedule();
    }

    function onMove(e: MouseEvent) {
      const rect = node.getBoundingClientRect();
      target.x = (e.clientX - rect.left - rect.width / 2) * strength;
      target.y = (e.clientY - rect.top - rect.height / 2) * strength;
      schedule();
    }
    function onEnter() {
      node.addEventListener("mousemove", onMove, { passive: true });
    }
    function onLeave() {
      node.removeEventListener("mousemove", onMove);
      target.x = 0;
      target.y = 0;
      schedule();
    }

    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
      node.removeEventListener("mousemove", onMove);
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
