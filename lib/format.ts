const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(n: number | string): string {
  return String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

export function bnNumber(n: number): string {
  return toBn(n.toLocaleString("en-IN"));
}

export function bnTaka(n: number): string {
  return `৳${bnNumber(n)}`;
}

export function bnDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const months = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
  ];
  return `${toBn(d.getDate())} ${months[d.getMonth()]} ${toBn(d.getFullYear())}`;
}

export function bnDateShort(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const months = ["জানু", "ফেব্রু", "মার্চ", "এপ্রি", "মে", "জুন", "জুলা", "আগ", "সেপ্ট", "অক্টো", "নভে", "ডিসে"];
  return `${toBn(d.getDate())} ${months[d.getMonth()]}`;
}

export function daysBetween(target: Date | string): number {
  const t = typeof target === "string" ? new Date(target) : target;
  return Math.max(0, Math.ceil((t.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
}
