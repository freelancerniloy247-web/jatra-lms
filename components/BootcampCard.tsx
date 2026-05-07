"use client";
import Link from "next/link";
import { ArrowUpRight, Clock, GraduationCap, Users, Wallet } from "lucide-react";
import type { Bootcamp } from "@/lib/data";
import { bnTaka, bnNumber, bnDateShort } from "@/lib/format";
import Tilt from "@/components/anim/Tilt";

export default function BootcampCard({ b }: { b: Bootcamp }) {
  const lowSeats = b.seatsRemaining < 20;
  return (
    <Tilt max={4} className="h-full">
      <Link
        href={`/bootcamp/${b.slug}`}
        className="card-premium lift p-7 group flex flex-col relative overflow-hidden h-full"
      >
        {/* Animated gradient blob */}
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/15 transition duration-700" />

        {/* Sweep on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
          style={{
            background:
              "linear-gradient(115deg, transparent 30%, rgba(232,179,61,0.08) 50%, transparent 70%)",
          }}
        />

        <div className="flex items-start justify-between gap-4 relative">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] uppercase tracking-widest num-mono text-gold">{b.iconKey}</span>
              <span className="text-border">·</span>
              <span className="text-[11px] num-mono text-ink-muted">{b.nameEn}</span>
            </div>
            <h3 className="bn-headline text-2xl md:text-[28px] leading-tight group-hover:gold-text transition">
              {b.nameBn}
            </h3>
            <p className="bn text-sm text-ink-muted mt-3 leading-relaxed">{b.taglineBn}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-ink-muted group-hover:text-gold group-hover:rotate-45 group-hover:scale-125 transition duration-500 shrink-0 mt-1" />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-6 pt-6 border-t border-border/60">
          <Fact icon={<Clock className="h-3.5 w-3.5" />} label={`${bnNumber(b.durationMonths)} মাস`} />
          <Fact icon={<GraduationCap className="h-3.5 w-3.5" />} label="লাইভ ক্লাস" />
          <Fact icon={<Users className="h-3.5 w-3.5" />} label="পার্সোনাল মেন্টর" />
          <Fact icon={<Wallet className="h-3.5 w-3.5" />} label="EMI সুবিধা" />
        </div>

        <div className="mt-6 pt-6 border-t border-border/60 flex items-end justify-between">
          <div>
            <div className="num-mono text-2xl font-bold gold-text">{bnTaka(b.priceBdt)}</div>
            <div className="text-[11px] text-ink-muted bn mt-0.5">EMI ৳{bnNumber(b.emiMonthly)}/মাস</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-ink-muted bn">পরবর্তী ব্যাচ</div>
            <div className="num-mono text-sm font-semibold mt-0.5">{bnDateShort(b.nextBatchDate)}</div>
            {lowSeats && (
              <div className="flex items-center gap-1.5 mt-1 justify-end">
                <span className="dot" />
                <span className="text-[10px] text-crimson bn">{bnNumber(b.seatsRemaining)} আসন বাকি</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </Tilt>
  );
}

function Fact({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-ink-muted bn">
      <span className="text-gold">{icon}</span>
      {label}
    </div>
  );
}
