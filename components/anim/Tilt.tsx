// Tilt was disabled for performance — was running RAF loops on every
// hover for every card. Kept as a passthrough so call sites don't have to change.
export default function Tilt({
  children,
  className = "",
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
  glare?: boolean;
}) {
  return <div className={`relative ${className}`}>{children}</div>;
}
