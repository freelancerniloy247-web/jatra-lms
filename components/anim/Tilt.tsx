"use client";
import { useEffect, useRef } from "react";

export default function Tilt({
  children,
  max = 10,
  className = "",
  glare = true,
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
  glare?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let scheduled = false;
    const target = { rx: 0, ry: 0, gx: 50, gy: 50 };
    const cur = { rx: 0, ry: 0, gx: 50, gy: 50 };

    function schedule() {
      if (scheduled) return;
      scheduled = true;
      raf = requestAnimationFrame(tick);
    }
    function tick() {
      scheduled = false;
      cur.rx += (target.rx - cur.rx) * 0.2;
      cur.ry += (target.ry - cur.ry) * 0.2;
      cur.gx += (target.gx - cur.gx) * 0.2;
      cur.gy += (target.gy - cur.gy) * 0.2;
      if (inner) {
        inner.style.transform = `rotateX(${cur.rx.toFixed(2)}deg) rotateY(${cur.ry.toFixed(2)}deg)`;
      }
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${cur.gx.toFixed(0)}% ${cur.gy.toFixed(0)}%, rgba(232,179,61,0.18), transparent 50%)`;
      }
      if (
        Math.abs(target.rx - cur.rx) > 0.05 ||
        Math.abs(target.ry - cur.ry) > 0.05 ||
        Math.abs(target.gx - cur.gx) > 0.5 ||
        Math.abs(target.gy - cur.gy) > 0.5
      ) {
        schedule();
      }
    }

    function onMove(e: MouseEvent) {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      target.rx = (0.5 - y) * max;
      target.ry = (x - 0.5) * max;
      target.gx = x * 100;
      target.gy = y * 100;
      schedule();
    }
    function reset() {
      target.rx = 0;
      target.ry = 0;
      target.gx = 50;
      target.gy = 50;
      schedule();
    }

    wrap.addEventListener("mousemove", onMove, { passive: true });
    wrap.addEventListener("mouseleave", reset);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", reset);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <div
      ref={wrapRef}
      style={{ perspective: "1200px" }}
      className={`relative ${className}`}
    >
      <div
        ref={innerRef}
        style={{
          transition: "transform 350ms cubic-bezier(0.16,1,0.3,1)",
          transformStyle: "preserve-3d",
        }}
        className="will-change-transform relative h-full"
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-60"
            style={{
              mixBlendMode: "soft-light",
              background: "radial-gradient(circle at 50% 50%, rgba(232,179,61,0.18), transparent 50%)",
            }}
          />
        )}
      </div>
    </div>
  );
}
