"use client";

import dynamic from "next/dynamic";

/**
 * TAJ SABA SMART HOTEL PLATFORM — Executive Discovery Presentation
 *
 * Single-page Web Presentation (16:9, full-viewport slides) rendered
 * inside the existing Next.js 16 app. The whole deck is client-side:
 * no backend, no server actions.
 *
 * Controls:
 *   ArrowLeft / ArrowRight  — move forward / backward (RTL aware)
 *   PageUp / PageDown       — previous / next
 *   Space                   — forward
 *   Home / End              — first / last slide
 *   F                       — toggle fullscreen
 *   Touch swipe             — previous / next
 *   Mouse wheel             — previous / next (throttled)
 *
 * The presentation engine is loaded with `ssr: false` so framer-motion
 * animations + browser APIs (matchMedia, fullscreen) don't run on the
 * server.
 */
const Presentation = dynamic(
  () => import("@/presentation/components/Presentation"),
  { ssr: false }
);

export default function Home() {
  return <Presentation />;
}
