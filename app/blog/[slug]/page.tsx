import { BLOG_POSTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { bnDate } from "@/lib/format";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const p = BLOG_POSTS.find((x) => x.slug === params.slug);
  if (!p) return notFound();
  const related = BLOG_POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image src={p.cover} alt={p.titleEn} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/30" />
        <div className="relative h-full mx-auto max-w-3xl px-5 md:px-6 flex flex-col justify-end pb-12">
          <div className="text-xs uppercase tracking-widest text-gold mb-3">{p.category}</div>
          <h1 className="bn-headline text-4xl md:text-6xl">{p.titleBn}</h1>
          <div className="flex items-center gap-3 mt-6 text-sm text-ink-muted">
            <Image src={p.authorPhoto} alt={p.author} width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
            <span className="bn">{p.author}</span>
            <span>·</span>
            <span>{bnDate(p.publishedAt)}</span>
            <span>·</span>
            <span className="bn">{p.readMin} মিনিট পড়া</span>
          </div>
        </div>
      </section>

      <Section>
        <article className="max-w-3xl mx-auto">
          <p className="bn-serif text-xl md:text-2xl leading-relaxed text-ink/95">{p.excerpt}</p>
          <div className="my-8 divider" />
          <div className="bn text-base md:text-lg leading-relaxed space-y-6 text-ink/90">
            {p.body.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p>
              বিস্তারিত পড়তে চাইলে নিচের অংশ দেখুন। যাত্রার প্রতিটি ব্লগ industry expert-দের লেখা।
            </p>
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-gold/30 bg-gold/5 text-center">
            <h3 className="bn-headline text-xl">আপনার career বদলান</h3>
            <p className="bn text-sm text-ink-muted mt-2">যাত্রার বুটক্যাম্প সম্পর্কে আরও জানুন</p>
            <Link href="/apply" className="btn-gold mt-4 inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bn">আবেদন করুন →</Link>
          </div>
        </article>

        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="bn-headline text-2xl mb-6">আরও পড়ুন</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="card-premium overflow-hidden group">
                <div className="relative h-32">
                  <Image src={r.cover} alt={r.titleEn} fill className="object-cover group-hover:scale-105 transition duration-700" sizes="33vw" />
                </div>
                <div className="p-4">
                  <h4 className="bn-headline text-sm leading-tight line-clamp-2">{r.titleBn}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
