import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Section } from "@/components/Section";
import { Mic, Camera, Hand, Smile, ArrowUp } from "lucide-react";
import { bnNumber } from "@/lib/format";

export const metadata = { title: "Live Class — যাত্রা" };

export default async function LiveClassPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <Section className="pt-8">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="dot" />
                <span className="text-xs text-crimson font-semibold uppercase tracking-widest">Live · {bnNumber(234)} attending</span>
              </div>
              <h1 className="bn-headline text-2xl mt-1">React Hooks Deep Dive</h1>
              <p className="bn text-xs text-ink-muted mt-1">রাকিব হাসান · Senior Software Engineer @ Pathao</p>
            </div>
          </div>
          <div className="aspect-video bg-bg-high rounded-2xl border border-border overflow-hidden relative">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <Camera className="h-12 w-12 text-gold mx-auto" />
                <div className="bn text-sm mt-3 text-ink-muted">Live stream loading...</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-bg/80 backdrop-blur rounded-full px-2 py-2 border border-border">
              <Btn icon={Mic} />
              <Btn icon={Camera} />
              <Btn icon={Hand} />
              <Btn icon={Smile} />
            </div>
          </div>
        </div>
        <div className="card-premium overflow-hidden flex flex-col h-[80vh]">
          <div className="flex border-b border-border">
            {["Chat", "Q&A", "Polls", "Notes"].map((t, i) => (
              <button key={t} className={`flex-1 py-3 text-xs font-semibold ${i === 0 ? "text-gold border-b-2 border-gold" : "text-ink-muted"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {[
              { n: "মীর সাকিব", m: "useEffect এর dependency array কেন important?" },
              { n: "Mentor", m: "Great question! useEffect re-run হয় যখন dependency array এর values change হয়।", mentor: true },
              { n: "তারেক আজিজ", m: "Empty array দিলে কি হবে?" },
              { n: "Mentor", m: "Empty array → শুধু একবার চলবে component mount-এ।", mentor: true },
              { n: "নুসরাত", m: "❤️" },
              { n: "অনিকা", m: "🔥🔥" },
            ].map((c, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`bn font-semibold ${c.mentor ? "text-gold" : ""}`}>{c.n}</span>
                  {c.mentor && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-gold/15 text-gold">MENTOR</span>}
                </div>
                <div className="bn text-ink/90 mt-0.5">{c.m}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-border p-3 flex gap-2">
            <input placeholder="Type a message..." className="!py-2 !text-xs" />
            <button className="h-10 w-10 grid place-items-center rounded-lg btn-gold">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Btn({ icon: Icon }: any) {
  return (
    <button className="h-10 w-10 grid place-items-center rounded-full bg-bg-high hover:bg-bg-elevated">
      <Icon className="h-4 w-4 text-gold" />
    </button>
  );
}
