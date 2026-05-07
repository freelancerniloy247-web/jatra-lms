"use client";
import Image from "next/image";
import Marquee from "@/components/anim/Marquee";

const PARTNERS = [
  { name: "bKash",            domain: "bkash.com" },
  { name: "Pathao",           domain: "pathao.com" },
  { name: "Brain Station 23", domain: "brainstation-23.com" },
  { name: "Nagad",            domain: "nagad.com.bd" },
  { name: "ShopUp",           domain: "shopup.com.bd" },
  { name: "Chaldal",          domain: "chaldal.com" },
  { name: "Daraz",            domain: "daraz.com.bd" },
  { name: "Foodpanda",        domain: "foodpanda.com" },
  { name: "Robi",             domain: "robi.com.bd" },
  { name: "Grameenphone",     domain: "grameenphone.com" },
  { name: "Therap BD",        domain: "therapbd.com" },
  { name: "Tiger IT",         domain: "tigerit.com" },
];

export default function TrustLogos() {
  return (
    <section className="relative -mt-2 sm:-mt-4 md:-mt-2 pb-8 sm:pb-10 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 justify-center">
          <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="section-label text-center text-[10px] sm:text-[11px]">যেসব কোম্পানি আমাদের গ্র্যাজুয়েটদের নিয়োগ দিয়েছে</span>
          <span className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        <Marquee speed={50}>
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl glass border border-white/5 hover:border-gold/40 transition-all min-w-[150px] sm:min-w-[180px]"
              data-cursor="view"
              data-cursor-text={p.name}
            >
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-white/95 grid place-items-center overflow-hidden shrink-0">
                <Image
                  src={`https://logo.clearbit.com/${p.domain}`}
                  alt={p.name}
                  width={28}
                  height={28}
                  className="object-contain h-6 w-6 sm:h-7 sm:w-7"
                  unoptimized
                />
              </div>
              <span className="bn text-xs sm:text-sm text-ink/80 group-hover:text-ink whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
