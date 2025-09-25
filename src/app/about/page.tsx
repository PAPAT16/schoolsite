export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Yori School</h1>
      <p className="max-w-2xl opacity-90">
        Yori School is dedicated to fostering lifelong learners through a challenging and
        supportive curriculum. We value integrity, curiosity, and community.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-lg p-6 bg-white/60 border border-[rgba(84,18,18,0.2)]">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 opacity-90">
            To inspire students to achieve academic excellence and personal growth.
          </p>
        </div>
        <div className="rounded-lg p-6 bg-white/60 border border-[rgba(84,18,18,0.2)]">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-2 opacity-90">
            To be a beacon of quality education and character development.
          </p>
        </div>
      </div>
    </div>
  );
}

