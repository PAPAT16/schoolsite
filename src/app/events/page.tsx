export default function EventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Events</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="rounded-lg border border-[rgba(84,18,18,0.2)] p-5 bg-white/50">
            <p className="text-sm opacity-80">Nov {8 + i}, 2025</p>
            <h2 className="text-lg font-semibold mt-1">Campus Tour {i}</h2>
            <p className="opacity-90 mt-1">Register to explore our facilities and meet staff.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

