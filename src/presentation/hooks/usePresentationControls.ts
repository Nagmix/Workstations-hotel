"use client";

import { useEffect } from "react";

export interface PresentationControls {
  goNext: () => void;
  goPrev: () => void;
  goTo: (i: number) => void;
  goFirst: () => void;
  goLast: () => void;
  toggleFullscreen: () => void;
  current: number;
  total: number;
}

interface Options {
  total: number;
  onNavigate: (next: number) => void;
  onFullscreenToggle: () => void;
}

/**
 * Centralised keyboard + wheel + touch handling for the deck.
 * Right-to-Left: ArrowRight moves backwards (next visual direction in RTL
 * reads right→left, so ArrowLeft = "forward").
 *
 * To avoid surprising the user, we accept BOTH directional conventions:
 *  - ArrowRight / ArrowLeft : physical arrow direction (LTR convention)
 *  - PageUp/PageDown        : explicit deck navigation
 *  - Space                  : forward (common in slide tools)
 */
export function usePresentationControls({
  total,
  onNavigate,
  onFullscreenToggle,
}: Options) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          // In RTL deck, "forward" reads left; ArrowRight physically goes back.
          onNavigate(-1);
          e.preventDefault();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          onNavigate(1);
          e.preventDefault();
          break;
        case "PageDown":
        case " ":
        case "Spacebar":
          onNavigate(1);
          e.preventDefault();
          break;
        case "PageUp":
          onNavigate(-1);
          e.preventDefault();
          break;
        case "Home":
          onNavigate(-(total - 1));
          e.preventDefault();
          break;
        case "End":
          onNavigate(total - 1);
          e.preventDefault();
          break;
        case "f":
        case "F":
          onFullscreenToggle();
          e.preventDefault();
          break;
      }
    };

    window.addEventListener("keydown", handler, { capture: true });
    return () => window.removeEventListener("keydown", handler, { capture: true });
  }, [total, onNavigate, onFullscreenToggle]);
}
