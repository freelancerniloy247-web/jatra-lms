"use client";
import { ReactNode } from "react";

export default function Marquee({
  children,
  speed = 40,
  pauseOnHover = true,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`group fade-mask-x overflow-hidden ${className}`}>
      <div
        className="flex w-max items-center gap-12"
        style={{
          animation: `marquee-x ${speed}s linear infinite${reverse ? " reverse" : ""}`,
          animationPlayState: pauseOnHover ? undefined : "running",
        }}
        onMouseEnter={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = "running")}
      >
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
