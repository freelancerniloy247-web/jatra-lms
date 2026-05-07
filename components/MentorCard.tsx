"use client";
import Image from "next/image";
import type { Mentor } from "@/lib/data";
import { bnNumber } from "@/lib/format";
import Tilt from "@/components/anim/Tilt";

export default function MentorCard({ m }: { m: Mentor }) {
  return (
    <Tilt max={6} className="h-full">
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated/40 hover:border-gold/40 transition h-full">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={m.photo}
            alt={m.nameEn}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-[1200ms] ease-out"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          {/* Sweep highlight */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: "linear-gradient(135deg, transparent 40%, rgba(232,179,61,0.18) 50%, transparent 60%)",
              transform: "translateX(-100%)",
              animation: "sweepIn 1s ease forwards",
            }}
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={m.companyLogo}
                alt={m.company}
                width={20}
                height={20}
                className="h-5 w-5 rounded bg-white/95 p-0.5 object-contain"
              />
              <span className="text-xs text-ink-muted">{m.company}</span>
            </div>
            <span className="text-[10px] num-mono text-gold/90 px-2 py-0.5 rounded-full border border-gold/40 bg-bg/50 backdrop-blur">
              {bnNumber(m.yearsExp)}+ yrs
            </span>
          </div>
        </div>
        <div className="p-5">
          <h4 className="bn-headline text-lg group-hover:text-gold transition">{m.nameBn}</h4>
          <p className="text-xs text-ink-muted mt-1">{m.designation}</p>
          <p className="bn text-xs text-ink-muted/80 mt-3 leading-relaxed line-clamp-2">{m.bio}</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes sweepIn {
          to { transform: translateX(100%); }
        }
      `}</style>
    </Tilt>
  );
}
