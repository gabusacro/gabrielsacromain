import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-20 gradient-mesh overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          Do you need Next-generation website?
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
          Built to make you{" "}
          <span className="text-[var(--accent)]">extraordinarily</span> productive.
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)] sm:text-xl">
          Full-stack developer & designer. I ship products that are fast, beautiful, and built with industry best practices.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-base font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-hover)]"
          >
            View my work →
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] px-6 text-base font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--card)]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
