import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { getProjects } from "@/app/projects/actions";

async function ProjectCard({ p }: { p: Project }) {
  const href = p.linkUrl ?? p.repoUrl ?? "#";
  const isExternal = Boolean(p.linkUrl ?? p.repoUrl);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="card-glow block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
    >
      {p.imageUrl && (
        <div className="relative aspect-video w-full bg-[var(--border)]">
          <Image
            src={p.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={p.imageUrl.startsWith("http")}
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {p.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="shrink-0 text-[var(--accent)]">→</span>
      </div>
    </Link>
  );
}

export async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="border-t border-[var(--border)] bg-[var(--background)] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Projects & products
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Selected work from previous roles and side projects. Built with modern stacks and best practices.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
