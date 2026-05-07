"use client";
import { useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - y) * max,
      ry: (x - 0.5) * max,
      gx: x * 100,
      gy: y * 100,
    });
  }

  function reset() {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ perspective: "1200px" }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
          transformStyle: "preserve-3d",
        }}
        className="will-change-transform relative h-full"
      >
        {children}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-60"
            style={{
              background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(232,179,61,0.18), transparent 50%)`,
              mixBlendMode: "soft-light",
            }}
          />
        )}
      </div>
    </div>
  );
}
