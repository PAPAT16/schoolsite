export default function ProgramsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Programs</h1>
      <div className="grid gap-6 sm:grid-cols-3">
        {["Elementary", "Middle School", "High School"].map((name) => (
          <div key={name} className="rounded-lg p-6 bg-white/60 border border-[rgba(84,18,18,0.2)]">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="mt-2 opacity-90">Rigorous academics, character education, and supportive teachers.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

