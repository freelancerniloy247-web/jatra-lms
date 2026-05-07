import type { Metadata } from "next";
import {
  Hind_Siliguri,
  Noto_Serif_Bengali,
  Plus_Jakarta_Sans,
  Fraunces,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import FloatingActions from "@/components/FloatingActions";
import PageTransition from "@/components/anim/PageTransition";
import CommandPalette from "@/components/CommandPalette";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const notoSerifBn = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-noto-serif-bn",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "যাত্রা — স্বপ্নের ক্যারিয়ার, ৬ মাসে। | Jatra Career Bootcamp",
  description:
    "বাংলাদেশের প্রিমিয়াম কোহোর্ট-ভিত্তিক ক্যারিয়ার বুটক্যাম্প। ৬ মাসে চাকরির গ্যারান্টি সহ ক্যারিয়ার পরিবর্তন। ৯৭% প্লেসমেন্ট রেট।",
  keywords: [
    "Bangladesh bootcamp",
    "career bootcamp BD",
    "যাত্রা",
    "Jatra",
    "full-stack bootcamp",
    "data science Bangladesh",
    "job guarantee bootcamp",
  ],
  openGraph: {
    title: "যাত্রা — স্বপ্নের ক্যারিয়ার, ৬ মাসে।",
    description:
      "৯৭% প্লেসমেন্ট রেট · গড় বেতন ৳৭০,০০০ · চাকরি না পেলে টাকা ফেরত।",
    type: "website",
    locale: "bn_BD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="bn"
      className={`${hind.variable} ${notoSerifBn.variable} ${jakarta.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className="bn-body">
        <UtilityBar />
        <Navbar />
        <PageTransition>
          <main className="relative">{children}</main>
        </PageTransition>
        <Footer />
        <FloatingActions />
        <CommandPalette />
      </body>
    </html>
  );
}
