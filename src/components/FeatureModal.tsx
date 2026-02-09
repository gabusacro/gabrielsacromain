"use client";

import { useState, useCallback } from "react";
import type { FeatureWithSlides } from "@/data/featureSlides";

type FeatureModalProps = {
  feature: FeatureWithSlides;
  onClose: () => void;
};

export function FeatureModal({ feature, onClose }: FeatureModalProps) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const slides = feature.slides;
  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? slides.length - 1 : i - 1));
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i >= slides.length - 1 ? 0 : i + 1));
  }, [slides.length]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    setTouchStart(null);
  };

  const slide = slides[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="feature-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-[var(--border)] p-2 text-[var(--foreground)] hover:bg-[var(--muted)]"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 pt-14">
          <h2 id="feature-modal-title" className="text-2xl font-bold text-[var(--foreground)]">
            {feature.title}
          </h2>
          <p className="mt-1 text-[var(--muted)]">{feature.description}</p>

          <div
            className="mt-8 min-h-[200px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-6"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
              {slide.title}
            </p>
            <p className="mt-3 text-[var(--foreground)] leading-relaxed">
              {slide.content}
            </p>
          </div>

          {slides.length > 1 && (
            <>
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="rounded-full bg-[var(--border)] p-2 text-[var(--foreground)] hover:bg-[var(--muted)]"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <span className="text-sm text-[var(--muted)]">
                  {index + 1} / {slides.length}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-full bg-[var(--border)] p-2 text-[var(--foreground)] hover:bg-[var(--muted)]"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
