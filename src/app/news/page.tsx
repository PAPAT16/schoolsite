export default function NewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">News</h1>
      <div className="grid gap-6 sm:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="rounded-lg border border-[rgba(84,18,18,0.2)] p-6 bg-white/60">
            <p className="text-sm opacity-80">Nov {i}, 2025</p>
            <h2 className="text-lg font-semibold mt-1">School achievement headline {i}</h2>
            <p className="opacity-90 mt-1">Brief summary of the story highlighting student or community success.</p>
            <a href="#" className="mt-3 inline-flex items-center rounded-md px-4 py-2 border border-[rgba(84,18,18,0.3)] hover:bg-[rgba(84,18,18,0.06)] transition">Read more</a>
          </article>
        ))}
      </div>
    </div>
  );
}

