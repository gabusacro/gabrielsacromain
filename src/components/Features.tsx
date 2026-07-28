"use client";

import { useState } from "react";
import { FEATURES_WITH_SLIDES } from "@/data/featureSlides";
import { FeatureModal } from "./FeatureModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function FullStackIcon() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 text-[var(--accent)] group-hover:from-[var(--accent)]/30 group-hover:to-[var(--accent)]/10 transition-all duration-300 group-hover:scale-110">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M8 4L2 12l6 8" />
        <path d="M16 4l6 8-6 8" />
        <path d="M13 3l-2 18" />
      </svg>
    </div>
  );
}

function DesignSystemsIcon() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 text-[var(--accent)] group-hover:from-[var(--accent)]/30 group-hover:to-[var(--accent)]/10 transition-all duration-300 group-hover:scale-110">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    </div>
  );
}

function ShipAtScaleIcon() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 text-[var(--accent)] group-hover:from-[var(--accent)]/30 group-hover:to-[var(--accent)]/10 transition-all duration-300 group-hover:scale-110">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    </div>
  );
}

export function Features() {
  const [openFeature, setOpenFeature] = useState<typeof FEATURES_WITH_SLIDES[0] | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} id="about" className="border-t border-[var(--border)] bg-[var(--background)] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className={`font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
          About
        </h2>
        <p className={`mt-4 max-w-2xl text-lg text-[var(--muted)] ${isVisible ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          I&apos;m Gabriel — a full-stack developer and designer who partners with founders and small teams to design and ship
          production-ready web products. Not just marketing pages: booking systems, payment flows, admin dashboards, and the
          databases behind them, built and maintained as one system.
        </p>
        <div className={`mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${isVisible ? "animate-stagger" : ""}`}>
          {FEATURES_WITH_SLIDES.map((f, idx) => (
            <button
              key={f.title}
              type="button"
              onClick={() => setOpenFeature(f)}
              className={`card-glow text-left rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 hover:border-[var(--accent)]/50 hover:shadow-lg ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: isVisible ? `${0.2 + idx * 0.1}s` : "0s" }}
            >
              {f.iconKey === "design" ? (
                <DesignSystemsIcon />
              ) : f.iconKey === "ship" ? (
                <ShipAtScaleIcon />
              ) : (
                <FullStackIcon />
              )}
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                {f.title}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{f.description}</p>
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
