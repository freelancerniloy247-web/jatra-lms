import Reveal from "@/components/anim/Reveal";

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-14 sm:py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {eyebrow && (
        <Reveal variant="fade-up" duration={600}>
          <div className="section-label mb-4">{eyebrow}</div>
        </Reveal>
      )}
      <Reveal variant="fade-up" duration={900} delay={80}>
        <h2 className="bn-headline text-[26px] sm:text-3xl md:text-5xl leading-[1.12] text-balance">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal variant="fade-up" duration={900} delay={200}>
          <p className="bn text-ink-muted mt-5 text-base md:text-lg leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
