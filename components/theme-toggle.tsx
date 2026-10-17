"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const THEME_KEY = "dope-theme";

export default function ThemeToggle({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    const light = savedTheme === "light";
    setIsLight(light);
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, []);

  function toggleTheme() {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    window.localStorage.setItem(THEME_KEY, nextIsLight ? "light" : "dark");
  }

  return (
    <div className="theme-controls">
      {children}
      <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      aria-pressed={isLight}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isLight ? "☾" : "☀"}
      </span>
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </span>
      </button>
    </div>
  );
}
