import { BLOG_POSTS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { bnDate } from "@/lib/format";

export const metadata = { title: "ব্লগ — যাত্রা" };

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <Section className="pt-12">
      <SectionHeader
        eyebrow="Career insights"
        title={<>যাত্রার <span className="gold-text">ব্লগ</span></>}
        subtitle="Career advice, industry trends, success stories — যা আপনার career journey-তে সাহায্য করবে।"
      />

      <Link href={`/blog/${featured.slug}`} className="card-premium grid md:grid-cols-2 overflow-hidden mb-12 group">
        <div className="relative h-72 md:h-auto">
          <Image src={featured.cover} alt={featured.titleEn} fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="text-xs uppercase tracking-widest text-gold">{featured.category}</div>
          <h2 className="bn-headline text-3xl md:text-4xl mt-3 leading-tight">{featured.titleBn}</h2>
          <p className="bn text-ink-muted mt-4 leading-relaxed">{featured.excerpt}</p>
          <div className="flex items-center gap-3 mt-6 text-xs text-ink-muted">
            <Image src={featured.authorPhoto} alt={featured.author} width={28} height={28} className="h-7 w-7 rounded-full object-cover" />
            <span className="bn">{featured.author}</span>
            <span>·</span>
            <span>{bnDate(featured.publishedAt)}</span>
            <span>·</span>
            <span className="bn">{featured.readMin} মিনিট পড়া</span>
          </div>
        </div>
      </Link>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card-premium overflow-hidden group">
            <div className="relative h-48">
              <Image src={p.cover} alt={p.titleEn} fill className="object-cover group-hover:scale-105 transition duration-700" sizes="33vw" />
            </div>
            <div className="p-6">
              <div className="text-[10px] uppercase tracking-widest text-gold">{p.category}</div>
              <h3 className="bn-headline text-lg mt-2 leading-tight line-clamp-2">{p.titleBn}</h3>
              <p className="bn text-xs text-ink-muted mt-3 line-clamp-2">{p.excerpt}</p>
              <div className="text-[11px] text-ink-muted mt-4 num-mono">{bnDate(p.publishedAt)} · {p.readMin}min</div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
