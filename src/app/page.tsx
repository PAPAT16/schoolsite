import Image from "next/image";
export default function Home() {
  return (
    <div className="space-y-16">
      <section className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-wide text-sm opacity-80">Welcome to Yori School</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Achieve Your Highest Dreams</h1>
            <p className="text-base sm:text-lg opacity-90">Join our community dedicated to excellence and personal growth, where every student is empowered.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/admissions" className="inline-flex items-center rounded-md px-5 py-2.5 text-background bg-foreground hover:opacity-90 transition">Enroll Now</a>
              <a href="/about" className="inline-flex items-center rounded-md px-5 py-2.5 border border-[rgba(84,18,18,0.3)] hover:bg-[rgba(84,18,18,0.06)] transition">Learn More</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] border border-[rgba(84,18,18,0.15)]">
              <Image src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop" alt="Students collaborating" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] border border-[rgba(84,18,18,0.15)] translate-y-6">
              <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" alt="Study session" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-[rgba(84,18,18,0.05)] p-6 sm:p-10 grid gap-6 sm:grid-cols-[1fr_1.2fr] items-center">
        <div className="relative rounded-lg overflow-hidden aspect-[4/3] border border-[rgba(84,18,18,0.15)]">
          <Image src="https://images.unsplash.com/photo-1573166364268-0f5d31ec5f4b?q=80&w=1200&auto=format&fit=crop" alt="Principal portrait" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="space-y-3">
          <p>“</p>
          <h2 className="text-2xl font-semibold">Hello. Welcome to Yori School.</h2>
          <p className="opacity-90">
            Our commitment is to provide each student with the tools and opportunities they
            need to achieve their highest potential. We strive to create an environment
            fostering academic excellence and personal growth.
          </p>
          <p className="text-sm opacity-80">Victor Desmondy<br />Yori High School Principal</p>
        </div>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[{k:"1,200+", v:"Enrolled Students"},{k:"100+", v:"Expert Teachers"},{k:"95%", v:"Acceptance Rate"},{k:"50+", v:"Extracurricular Clubs"}].map((s)=> (
          <div key={s.v} className="rounded-lg border border-[rgba(84,18,18,0.2)] bg-white/60 p-6">
            <div className="text-2xl font-bold">{s.k}</div>
            <div className="text-sm opacity-80 mt-1">{s.v}</div>
          </div>
        ))}
      </section>

      <section className="rounded-lg overflow-hidden">
        <div className="relative aspect-[16/6] rounded-lg border border-[rgba(84,18,18,0.15)]">
          <Image src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop" alt="Campus life" fill sizes="100vw" className="object-cover" />
          <button className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-foreground text-background grid place-items-center shadow-md/50 bg-opacity-90">▶</button>
        </div>
      </section>
      <section className="space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Programs</h2>
          <a href="/programs" className="text-sm underline underline-offset-4">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {["Elementary", "Middle School", "High School"].map((name) => (
            <a key={name} href="/programs" className="group rounded-xl p-6 bg-white/70 border border-[rgba(84,18,18,0.15)] shadow-[0_1px_0_rgba(84,18,18,0.08)] hover:shadow-md transition">
              <div className="text-xs px-2 py-0.5 rounded-full border border-[rgba(84,18,18,0.25)] w-max">Program</div>
              <h3 className="mt-3 text-lg font-semibold group-hover:underline underline-offset-4">{name}</h3>
              <p className="mt-2 opacity-90">A balanced curriculum focused on core subjects and growth.</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <a href="/events" className="text-sm underline underline-offset-4">View all</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-xl border border-[rgba(84,18,18,0.15)] p-5 bg-white/70">
              <div className="flex items-center gap-3 text-sm opacity-80">
                <span className="inline-flex px-2 py-0.5 rounded-full border border-[rgba(84,18,18,0.25)]">Oct {10 + i}</span>
                <span>2025</span>
              </div>
              <h3 className="text-lg font-semibold mt-2">Open House Session {i}</h3>
              <p className="opacity-90 mt-1">Meet our faculty, tour the campus, and learn about programs.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">What our community says</h2>
          <a href="/news" className="text-sm underline underline-offset-4">Read stories</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              quote:
                "Yori School nurtures curiosity and confidence. My child looks forward to school every day.",
              name: "Amara O.",
              role: "Parent",
              avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
            },
            {
              quote:
                "Teachers truly care and push us to do our best. The clubs and labs are amazing!",
              name: "Samuel K.",
              role: "Student",
              avatar:
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
            },
            {
              quote:
                "The foundation I built here prepared me for university and beyond.",
              name: "Adaeze M.",
              role: "Alumni",
              avatar:
                "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop",
            },
          ].map((t) => (
            <figure key={t.name} className="rounded-xl border border-[rgba(84,18,18,0.2)] bg-white/60 p-6 flex flex-col gap-4">
              <div className="text-5xl leading-none">“</div>
              <blockquote className="opacity-90">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3 pt-2">
                <span className="relative h-10 w-10 overflow-hidden rounded-full border border-[rgba(84,18,18,0.25)]">
                  <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                </span>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs opacity-80">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      

      <section className="grid sm:grid-cols-3 gap-6">
        {[
          { title: "Excellence", desc: "High academic standards and passionate teachers.", icon: "🎓" },
          { title: "Community", desc: "Inclusive culture and vibrant extracurriculars.", icon: "🤝" },
          { title: "Growth", desc: "Personalized learning paths for every student.", icon: "📈" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl p-6 bg-white/70 border border-[rgba(84,18,18,0.15)] shadow-[0_1px_0_rgba(84,18,18,0.08)]">
            <div className="text-3xl" aria-hidden>{item.icon}</div>
            <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 opacity-90">{item.desc}</p>
            <a href="/programs" className="mt-4 inline-flex text-sm underline underline-offset-4">Learn more</a>
          </div>
        ))}
      </section>

      

      <section className="rounded-xl p-8 bg-white/70 border border-[rgba(84,18,18,0.15)]">
        <div className="sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2 max-w-2xl opacity-90">Have questions? We&amp;apos;re here to help.</p>
          </div>
          <a href="/contact" className="mt-6 sm:mt-0 inline-flex items-center rounded-md px-5 py-2.5 border border-[rgba(84,18,18,0.3)] hover:bg-[rgba(84,18,18,0.06)] transition">Get in touch</a>
        </div>
      </section>
    </div>
  );
}

