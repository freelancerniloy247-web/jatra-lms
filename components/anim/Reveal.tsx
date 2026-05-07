// Reveal scroll-triggered fade-ins were creating one IntersectionObserver
// per element (often 100+ on the home page) and triggering simultaneous
// transitions during fast scroll. Disabled for performance — content shows
// immediately. Component kept as a passthrough so call sites still work.
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur" | "rotate";
  delay?: number;
  duration?: number;
  className?: string;
  as?: any;
  threshold?: number;
  once?: boolean;
}) {
  return <Tag className={className}>{children}</Tag>;
}
