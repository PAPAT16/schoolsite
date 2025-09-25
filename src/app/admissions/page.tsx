export default function AdmissionsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Admissions</h1>
        <p className="max-w-2xl opacity-90">Discover how to join Yori School. Our team is ready to guide you through every step.</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-3">
        {["Apply Online","Submit Records","Interview"].map((title, idx) => (
          <div key={title} className="rounded-xl p-6 bg-white/70 border border-[rgba(84,18,18,0.15)]">
            <div className="text-sm opacity-70">Step {idx + 1}</div>
            <h2 className="mt-1 text-xl font-semibold">{title}</h2>
            <p className="mt-2 opacity-90">We keep our process simple and supportive for families.</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl p-6 bg-[rgba(84,18,18,0.05)] border border-[rgba(84,18,18,0.15)]">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li>Completed application form</li>
          <li>Recent academic records</li>
          <li>Recommendation letter (optional)</li>
          <li>Birth certificate ID</li>
        </ul>
      </section>

      <section className="rounded-xl p-6 bg-white/70 border border-[rgba(84,18,18,0.15)]">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-md border border-[rgba(84,18,18,0.2)] p-4 bg-white/80">
            <summary className="font-medium cursor-pointer">When are applications due?</summary>
            <p className="mt-2 opacity-90">We review applications on a rolling basis and recommend applying early.</p>
          </details>
          <details className="rounded-md border border-[rgba(84,18,18,0.2)] p-4 bg-white/80">
            <summary className="font-medium cursor-pointer">Is financial aid available?</summary>
            <p className="mt-2 opacity-90">Yes. Contact our office to learn about scholarships and aid.</p>
          </details>
        </div>
      </section>

      <div className="flex gap-3">
        <a href="/admissions" className="inline-flex items-center rounded-md px-5 py-2.5 text-background bg-foreground hover:opacity-90 transition">Apply Now</a>
        <a href="/contact" className="inline-flex items-center rounded-md px-5 py-2.5 border border-[rgba(84,18,18,0.3)] hover:bg-[rgba(84,18,18,0.06)] transition">Talk to Admissions</a>
      </div>
    </div>
  );
}

