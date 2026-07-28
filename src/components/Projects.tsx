import { getProjects } from "@/app/projects/actions";
import { WorkCard } from "./WorkCard";

export async function Projects() {
  const projects = await getProjects();

  return (
    <section id="work" className="border-t border-[var(--border)] bg-[var(--background)] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Real products built for real businesses — each one a full case study of the problem, the build, and what shipped.
        </p>
        <div className="mt-16 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <WorkCard key={p.id} project={p} priority={idx < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
