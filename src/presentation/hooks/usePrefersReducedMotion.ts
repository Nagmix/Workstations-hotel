"use client";

import { useEffect, useState } from "react";

/**
 * Respects the user's OS-level "Reduce motion" preference.
 * Framer Motion reads this from its own internal hook, but we expose
 * it here so plain CSS-driven animations can also adapt.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return reduced;
}
