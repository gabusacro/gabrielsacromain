import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "@/app/projects/actions";
import { ContactTrigger } from "@/components/ContactTrigger";
import { Reveal } from "@/components/Reveal";
import { WorkCard } from "@/components/WorkCard";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Gabriel Sacro`,
      description: project.description,
      images: project.imageUrl ? [project.imageUrl] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sorted = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);
  const currentIndex = sorted.findIndex((p) => p.slug === slug);
  const next = sorted[(currentIndex + 1) % sorted.length];

  const screenshots = project.screenshots?.length
    ? project.screenshots
    : project.imageUrl
      ? [project.imageUrl]
      : [];
  const [heroImage, ...restImages] = screenshots;

  const sections = [
    { label: "01 — The challenge", body: project.challenge },
    { label: "02 — The approach", body: project.approach },
    { label: "03 — The outcome", body: project.outcome },
  ].filter((s): s is { label: string; body: string } => Boolean(s.body));

  return (
    <article className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← Back to work
        </Link>

        <Reveal className="mt-6">
          {project.role && (
            <p className="font-mono text-sm uppercase tracking-widest text-[var(--accent)]">
              {project.role}
            </p>
          )}
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            {project.longDescription ?? project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.linkUrl && (
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-sm font-medium text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors"
              >
                Visit live site ↗
              </a>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {heroImage && (
          <Reveal delay={0.1} className="mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
              <Image
                src={heroImage}
                alt={`${project.title} preview`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 768px"
                unoptimized={heroImage.startsWith("http")}
              />
            </div>
          </Reveal>
        )}

        <div className="mt-16 space-y-12">
          {sections.map((s, idx) => (
            <Reveal key={s.label} delay={idx * 0.05}>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">{s.label}</p>
              <p className="mt-3 text-lg leading-relaxed text-[var(--foreground)]">{s.body}</p>
            </Reveal>
          ))}
        </div>

        {restImages.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-[var(--foreground)]">A closer look</h2>
            </Reveal>
            <div className="mt-6 space-y-6">
              {restImages.map((src, i) => (
                <Reveal key={src} delay={i * 0.05}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 768px"
                      unoptimized={src.startsWith("http")}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
            Have a project like this in mind?
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Let&apos;s talk about what you&apos;re trying to build.
          </p>
          <div className="mt-6">
            <ContactTrigger className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors">
              Book a project call
            </ContactTrigger>
          </div>
        </Reveal>
      </div>

      {next && (
        <div className="mx-auto mt-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Next case study</p>
          <div className="mt-4 max-w-sm">
            <WorkCard project={next} />
          </div>
        </div>
      )}
    </article>
  );
}
