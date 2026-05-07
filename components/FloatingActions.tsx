"use client";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y > 600);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const C = 2 * Math.PI * 22;

  return (
    <div
      className={`fixed bottom-3 sm:bottom-5 right-3 sm:right-5 z-40 flex flex-col gap-2.5 sm:gap-3 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative h-11 w-11 sm:h-12 sm:w-12 grid place-items-center rounded-full glass border border-white/10 hover:border-gold/50 transition group"
        aria-label="Back to top"
        data-cursor="lg"
        data-cursor-text="Top"
      >
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 48 48"
          width="100%"
          height="100%"
          aria-hidden
        >
          <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="rgba(232,179,61,0.85)"
            strokeWidth="2"
            fill="none"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - progress)}
            style={{ transition: "stroke-dashoffset .15s linear" }}
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp className="h-4 w-4 text-gold group-hover:-translate-y-0.5 transition" />
      </button>

      <a
        href="https://wa.me/8801711111111"
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 w-11 sm:h-12 sm:w-12 grid place-items-center rounded-full bg-emerald shadow-lg hover:scale-105 transition"
        aria-label="WhatsApp"
        data-cursor="lg"
        data-cursor-text="Chat"
      >
        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-bg" />
      </a>
      <a
        href="tel:+8801711111111"
        className="h-11 w-11 sm:h-12 sm:w-12 grid place-items-center rounded-full btn-gold hover:scale-105 transition"
        aria-label="Call"
        data-cursor="lg"
        data-cursor-text="Call"
      >
        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
    </div>
  );
}
