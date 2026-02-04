"use client";

import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const visitUrl = project.linkUrl ?? project.repoUrl ?? "#";
  const screenshots = project.screenshots?.length
    ? project.screenshots
    : project.imageUrl
      ? [project.imageUrl]
      : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-[var(--border)] p-2 text-[var(--foreground)] hover:bg-[var(--muted)]"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <h2 id="modal-title" className="text-2xl font-bold text-[var(--foreground)]">
            {project.title}
          </h2>
          <p className="mt-2 text-[var(--muted)]">{project.description}</p>

          {screenshots.length > 0 && (
            <div
              className={
                screenshots.length === 1
                  ? "mt-6"
                  : screenshots.length <= 3
                    ? "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
                    : "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              }
            >
              {screenshots.map((src, i) => (
                <div
                  key={i}
                  className={
                    screenshots.length === 1
                      ? "relative w-full overflow-hidden rounded-lg border border-[var(--border)]"
                      : "relative w-full overflow-hidden rounded-lg border border-[var(--border)]"
                  }
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-auto w-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23374151' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EScreenshot%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {visitUrl !== "#" && (
            <a
              href={visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--background)] hover:opacity-90"
            >
              Click here to visit the website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
