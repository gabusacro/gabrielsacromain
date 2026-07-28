"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type WorkCardProps = { project: Project; priority?: boolean };

export function WorkCard({ project: p, priority = false }: WorkCardProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div ref={elementRef} className={`flex h-full min-h-0 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <Link
        href={`/work/${p.slug}`}
        className="card-glow group flex h-full min-h-[340px] w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-left hover:shadow-xl hover:border-[var(--accent)]/30"
      >
        {p.imageUrl && (
          <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[var(--border)]">
            <Image
              src={p.imageUrl}
              alt=""
              fill
              priority={priority}
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={p.imageUrl.startsWith("http")}
            />
          </div>
        )}
        <div className="flex min-h-0 flex-1 flex-col justify-between gap-4 p-6">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              {p.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
            View case study
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </Link>
    </div>
  );
}
