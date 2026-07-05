"use client";

import { useState, useEffect } from "react";
import { ContactFormModal } from "./ContactFormModal";
import { CONTACT_MODAL_EVENT } from "./ContactTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener(CONTACT_MODAL_EVENT, handler);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, handler);
  }, []);

  return (
    <>
      <section ref={elementRef} id="contact" className="border-t border-[var(--border)] bg-[var(--background)] py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Let&apos;s build something great.
          </h2>
          <p className={`mt-4 text-lg text-[var(--muted)] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Have a project in mind? I&apos;d love to hear from you.
          </p>
          <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-base font-medium text-[var(--background)] hover:bg-[var(--accent-hover)] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <ContactFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
