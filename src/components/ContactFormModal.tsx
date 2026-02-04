"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/contact/actions";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ContactFormModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setStatus(null);
    const result = await submitContactForm(formData);
    setStatus(result);
    setPending(false);
    if (result.ok) {
      setTimeout(() => {
        onClose();
        setStatus(null);
      }, 2000);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 id="contact-modal-title" className="text-xl font-semibold text-[var(--foreground)]">
            Contact Us
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)]"
            aria-label="Close"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <form action={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--foreground)]">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--foreground)]">
              Email <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-[var(--foreground)]">
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--foreground)]">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              placeholder="Tell me about your project..."
              className="mt-1 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>

          {status && (
            <p
              className={`text-sm ${status.ok ? "text-[var(--accent)]" : "text-red-400"}`}
              role="status"
            >
              {status.message}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={pending}
              className="flex-1 rounded-full bg-[var(--accent)] py-2.5 text-sm font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-50"
            >
              {pending ? "Sending…" : "Send"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
