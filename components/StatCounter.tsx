// Count-up animation removed for performance — was running RAF on every visible stat.
// Now renders the final value immediately. Faster to read anyway.
import { toBn } from "@/lib/format";

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  bn = true,
  thousands = false,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  bn?: boolean;
  duration?: number;
  thousands?: boolean;
}) {
  const display = thousands ? value.toLocaleString("en-IN") : String(value);
  return (
    <span className="num-mono">
      {prefix}
      {bn ? toBn(display) : display}
      {suffix}
    </span>
  );
}
