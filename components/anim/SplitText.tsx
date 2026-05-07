// SplitText was disabled for performance — was creating a span per word with
// staggered animation timing. Kept as a passthrough so call sites still work.
export default function SplitText({
  text,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  className?: string;
  as?: any;
}) {
  return <Tag className={className}>{text}</Tag>;
}
