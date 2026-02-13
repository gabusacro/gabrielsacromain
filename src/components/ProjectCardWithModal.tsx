"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

type ProjectCardWithModalProps = { p: Project };

export function ProjectCardWithModal({ p }: ProjectCardWithModalProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex h-full min-h-0">
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="card-glow flex h-full min-h-[340px] w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-left"
      >
        {p.imageUrl && (
          <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[var(--border)]">
            <Image
              src={p.imageUrl}
              alt=""
              fill
              className="object-cover object-center"
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
            <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)] text-justify">{p.description}</p>
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
      </button>
      {modalOpen && (
        <ProjectModal project={p} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}
