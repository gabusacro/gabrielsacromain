"use client";

import { ContactTrigger } from "./ContactTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTA() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} id="contact" className="border-t border-[var(--border)] bg-[var(--background)] py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className={`font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          Let&apos;s build the thing your business actually needs.
        </h2>
        <p className={`mt-4 text-lg text-[var(--muted)] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Tell me about your project — I typically reply within a day.
        </p>
        <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <ContactTrigger className="group inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-base font-medium text-[var(--background)] hover:bg-[var(--accent-hover)] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
            Book a project call
          </ContactTrigger>
        </div>
      </div>
    </section>
  );
}
