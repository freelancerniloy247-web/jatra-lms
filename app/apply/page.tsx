import ApplyForm from "./ApplyForm";

export const metadata = {
  title: "আবেদন করুন — যাত্রা",
  description: "৭ দিনে ভর্তি প্রক্রিয়া। আবেদন ফ্রি।",
};

export default function ApplyPage({ searchParams }: { searchParams: { bootcamp?: string } }) {
  return (
    <section className="min-h-screen pt-10 pb-20">
      <div className="mx-auto max-w-4xl px-5 md:px-6">
        <div className="text-center mb-10">
          <div className="section-label mb-3">Apply now</div>
          <h1 className="bn-headline text-4xl md:text-5xl">যাত্রা শুরু করুন</h1>
          <p className="bn text-ink-muted mt-3">৭ ধাপে আপনার ভর্তি প্রক্রিয়া। আনুমানিক সময় ৩০ মিনিট।</p>
        </div>
        <ApplyForm preselected={searchParams.bootcamp} />
      </div>
    </section>
  );
}
