// Magnetic was disabled for performance — was running RAF loops on every
// hover. Kept as a passthrough so call sites don't have to change.
export default function Magnetic({
  children,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}
