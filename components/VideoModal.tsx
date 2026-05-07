"use client";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function VideoModal({
  open,
  onClose,
  src,
  title,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
}) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Video"}
    >
      <div className="absolute inset-0 bg-bg/85 backdrop-blur-md animate-fade-in" />
      <div
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 h-9 w-9 grid place-items-center rounded-full bg-bg/80 hover:bg-bg border border-white/10 hover:border-gold/40 transition"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <iframe
          src={src}
          title={title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
