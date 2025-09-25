export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="max-w-2xl opacity-90">We’d love to hear from you. Reach out and our team will get back soon.</p>
      </header>

      <div className="grid gap-8 sm:grid-cols-3">
        <form className="sm:col-span-2 grid gap-4 rounded-xl p-6 bg-white/70 border border-[rgba(84,18,18,0.15)]">
          <label className="grid gap-1">
            <span>Name</span>
            <input className="rounded-md border border-[rgba(84,18,18,0.3)] bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(84,18,18,0.3)]" placeholder="Your name" />
          </label>
          <label className="grid gap-1">
            <span>Email</span>
            <input type="email" className="rounded-md border border-[rgba(84,18,18,0.3)] bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(84,18,18,0.3)]" placeholder="you@example.com" />
          </label>
          <label className="grid gap-1">
            <span>Message</span>
            <textarea rows={6} className="rounded-md border border-[rgba(84,18,18,0.3)] bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(84,18,18,0.3)]" placeholder="How can we help?" />
          </label>
          <button type="submit" className="inline-flex justify-center rounded-md px-5 py-2.5 text-background bg-foreground hover:opacity-90 transition">Send message</button>
        </form>

        <aside className="rounded-xl p-6 bg-[rgba(84,18,18,0.05)] border border-[rgba(84,18,18,0.15)] space-y-4">
          <div>
            <div className="font-semibold">Address</div>
            <p className="opacity-90">123 Learning Ave, Lagos</p>
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <p className="opacity-90">info@yorischool.example</p>
          </div>
          <div>
            <div className="font-semibold">Phone</div>
            <p className="opacity-90">+234 (000) 000-0000</p>
          </div>
          <div className="relative rounded-md overflow-hidden aspect-[4/3] border border-[rgba(84,18,18,0.15)]">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop" alt="Campus map placeholder" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </aside>
      </div>
    </div>
  );
}

