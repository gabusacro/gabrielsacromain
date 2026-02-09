"use client";

import { useState } from "react";
import { FEATURES_WITH_SLIDES } from "@/data/featureSlides";
import { FeatureModal } from "./FeatureModal";

function DesignSystemsIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    </span>
  );
}

function ShipAtScaleIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    </span>
  );
}

export function Features() {
  const [openFeature, setOpenFeature] = useState<typeof FEATURES_WITH_SLIDES[0] | null>(null);

  return (
    <section id="about" className="border-t border-[var(--border)] bg-[var(--background)] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          What I do
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)] text-justify">
          I build systematic products with careful attention to speed and user experience—informed by industry best practices.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES_WITH_SLIDES.map((f) => (
            <button
              key={f.title}
              type="button"
              onClick={() => setOpenFeature(f)}
              className="card-glow text-left rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-colors hover:border-[var(--accent)]/50"
            >
              {"icon" in f && f.icon ? (
                <span className="text-2xl text-[var(--accent)]">{f.icon}</span>
              ) : f.iconKey === "design" ? (
                <DesignSystemsIcon />
              ) : (
                <ShipAtScaleIcon />
              )}
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                {f.title}
              </h3>
              <p className="mt-2 text-[var(--muted)] text-justify">{f.description}</p>
            </button>
          ))}
        </div>
      </div>
      {openFeature && (
        <FeatureModal feature={openFeature} onClose={() => setOpenFeature(null)} />
      )}
    </section>
  );
}
