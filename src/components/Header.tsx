"use client";

import Link from "next/link";
import { useState } from "react";
import { ContactTrigger } from "./ContactTrigger";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", isContact: true },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[var(--foreground)]"
        >
          Gabriel Sacro
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) =>
            "isContact" in item && item.isContact ? (
              <ContactTrigger
                key="contact"
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </ContactTrigger>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <ContactTrigger className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-hover)] md:inline-block">
            Get in touch
          </ContactTrigger>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) =>
              "isContact" in item && item.isContact ? (
                <ContactTrigger
                  key="contact"
                  className="text-left text-[var(--muted)] hover:text-[var(--foreground)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </ContactTrigger>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[var(--muted)] hover:text-[var(--foreground)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <ContactTrigger
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-center text-sm font-medium text-[var(--background)]"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </ContactTrigger>
          </nav>
        </div>
      )}
    </header>
  );
}
