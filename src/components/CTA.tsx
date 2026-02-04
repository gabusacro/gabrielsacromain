"use client";

import { useState } from "react";
import { ContactFormModal } from "./ContactFormModal";

export function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="border-t border-[var(--border)] bg-[var(--background)] py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Let&apos;s build something great.
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-base font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-hover)]"
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
