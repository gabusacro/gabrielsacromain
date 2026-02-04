const TESTIMONIALS = [
  {
    quote: "Napakabilis ng turnaround at sobrang organized ng proseso. From wireframes to deployment, everything was clearly communicated. The site handled our product launch traffic without any slowdowns.",
    author: "Maria Santos",
    location: "Manila, Philippines",
  },
  {
    quote: "We needed our new platform built quickly but properly. Gabriel delivered a clean, well-structured site that performs exactly as we envisioned. The backend architecture makes future updates straightforward.",
    author: "James Mitchell",
    location: "Pennsylvania, USA",
  },
  {
    quote: "What impressed me most was the attention to performance—lazy loading, optimized assets, smart caching. Our new dashboard loads in under a second even with thousands of records. Exactly what we needed.",
    author: "Sarah Thompson",
    location: "Leeds, UK",
  },
];

export function Testimonials() {
  return (
    <section id="work" className="border-t border-[var(--border)] bg-[var(--card)] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          What people say
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Trusted by teams and leaders to ship products that scale.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8"
            >
              <p className="text-[var(--foreground)]">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block font-semibold text-[var(--foreground)]">
                    {t.author}
                  </span>
                  <span className="text-sm text-[var(--muted)]">{t.location}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
