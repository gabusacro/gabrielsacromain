"use client";

import { useState, useCallback } from "react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23374151' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EScreenshot%3C/text%3E%3C/svg%3E";

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const visitUrl = project.linkUrl ?? project.repoUrl ?? "#";
  const screenshots = project.screenshots?.length
    ? project.screenshots
    : project.imageUrl
      ? [project.imageUrl]
      : [];

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? screenshots.length - 1 : i - 1));
  }, [screenshots.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i >= screenshots.length - 1 ? 0 : i + 1));
  }, [screenshots.length]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    setTouchStart(null);
  };

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
            <div className="mt-6">
              <div
                className="relative w-full overflow-hidden rounded-lg border border-[var(--border)]"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <img
                  src={screenshots[index]}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="h-auto w-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = PLACEHOLDER_SVG;
                  }}
                />
                {screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); goPrev(); }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                      aria-label="Previous"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); goNext(); }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                      aria-label="Next"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                          className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/50"}`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              {screenshots.length > 1 && (
                <div className="mt-3 flex justify-center gap-2 overflow-x-auto pb-1">
                  {screenshots.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                      className={`shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                        i === index ? "border-[var(--accent)] opacity-100" : "border-transparent opacity-60 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-14 w-20 object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = PLACEHOLDER_SVG;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
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
