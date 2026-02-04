import { getProjects } from "@/app/projects/actions";
import { ProjectCardWithModal } from "./ProjectCardWithModal";

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
            <ProjectCardWithModal key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
