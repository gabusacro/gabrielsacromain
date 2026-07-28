"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

// Matches the blocking inline script in the root layout, which sets
// data-theme on <html> before hydration to avoid a flash. The state here
// must start identical on server and client (fixed "dark") so hydration
// doesn't mismatch; the real stored/system preference is only read once
// mounted, matching what the blocking script already applied to the DOM.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const detected = stored ?? (prefersLight ? "light" : "dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of a browser-only preference unavailable during SSR
    setTheme(detected);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: "light" as const, toggleTheme: () => {} };
  }
  return context;
}
