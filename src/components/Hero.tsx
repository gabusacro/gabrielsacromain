"use client";

import Link from "next/link";
import { ContactTrigger } from "./ContactTrigger";
import { useState, useEffect } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-20 gradient-mesh overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage: "url(/photo.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)] animate-fade-in-down" style={{ animationDelay: "0s" }}>
          Next generation website
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-7xl leading-tight animate-fade-in-down relative" style={{ animationDelay: "0.1s" }}>
          Built to make you{" "}
          <span className="relative inline-block">
            <span className="text-[var(--accent)] relative">
              extraordinarily
              <span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] rounded-full"
                style={{
                  animation: "slide-in-from-left 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                  animationDelay: "0.4s",
                  width: 0,
                  left: 0,
                  right: "auto"
                }}
              />
            </span>
          </span>
          {" "}productive.
        </h1>
        <p className="mt-8 text-lg text-[var(--muted)] sm:text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Full-stack developer & designer. I ship products that are fast, beautiful, and built with industry best practices.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Link
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] px-8 text-base font-semibold text-[var(--background)] shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View my work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-2 duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
          <ContactTrigger className="group relative inline-flex h-12 items-center justify-center rounded-full border-2 border-[var(--accent)] px-8 text-base font-semibold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300">
            Get in touch
          </ContactTrigger>
        </div>
      </div>
    </section>
  );
}
