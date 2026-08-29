"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META, VISION_TAGLINE } from "../../data/slides";
import {
  Divider,
  GradientText,
  IconGlyph,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

/**
 * Slide 17 — Closing (cinematic finale)
 *
 * Cinematic center-aligned finale. NO SlideHeader, NO SlideBrandChip per
 * the design spec — only the brand emblem, hero headline, deep-emerald
 * blockquote, accent divider with ×, brand lockup, and progress dots.
 *
 * Ambient layers: three ts-blob blobs (two emerald + one warm amber)
 * + one ts-blob-mesh for richer color story, plus ts-mesh-bg background
 * at very low opacity + ts-noise overlay.
 *
 * Top: brand emblem with ts-icon-chip-gradient (11×11 circular chip,
 * Sparkles icon) + "TAJ SABA / تاج سبأ" lockup in ts-gradient-text-mesh.
 *
 * Hero headline = VISION_TAGLINE rendered with ts-gradient-animated at
 * ts-h1 scale + ts-text-balance.
 *
 * Below = ts-card-deep (deep emerald gradient) blockquote containing
 * PRESENTATION_META.closingLine at ts-h3 scale in emerald-50 text +
 * ts-corner-ornament.
 *
 * Accent divider = two ts-divider-accent hairlines flanking an emerald
 * × (max-w-md) using Divider variant="x".
 *
 * Brand lockup = "Digital Planetx × فندق تاج سبأ" in semibold caps +
 * "Building the Smart Hotel of the Future" subtitle in muted small
 * caps, both wrapped in dir="ltr" + lat class.
 *
 * 4 ts-progress-dot indicators (last active). ts-corner-ornament on
 * the outer section for luxury corner brackets at the four corners
 * (two from the utility + two manual).
 */
export default function Slide17Closing() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      variants={containerStagger}
      className="slide-stage slide-pad items-center justify-center text-center relative overflow-hidden ts-noise ts-corner-ornament"
      aria-roledescription="slide"
      aria-label="Closing"
    >
      {/* Mesh + ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-mesh-bg opacity-50"
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-emerald ts-aurora-drift pointer-events-none"
        style={{ top: -180, left: -160, width: 620, height: 620, opacity: 0.55 }}
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-emerald ts-float-slow pointer-events-none"
        style={{ bottom: -180, right: -140, width: 540, height: 540, opacity: 0.5 }}
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-warm ts-float-slow pointer-events-none"
        style={{ top: "28%", right: "18%", width: 420, height: 420, opacity: 0.3 }}
      />
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-mesh ts-aurora-drift pointer-events-none"
        style={{ top: "55%", left: "8%", width: 360, height: 360, opacity: 0.45 }}
      />

      {/* Manual corner brackets (bottom-left + top-right) to complement
          ts-corner-ornament's top-left + bottom-right pair */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-8 right-8 w-4 h-4 border-t border-l border-[var(--ts-accent)] opacity-40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-8 w-4 h-4 border-b border-r border-[var(--ts-accent)] opacity-40"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-5xl w-full">
        {/* Brand emblem */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3.5"
        >
          <span
            className="ts-icon-chip-gradient"
            aria-hidden="true"
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              boxShadow:
                "0 8px 22px rgba(15,118,110,0.32), 0 0 0 6px rgba(15,118,110,0.06)",
            }}
          >
            <IconGlyph name="Sparkles" size={20} />
          </span>
          <div className="text-left" dir="ltr">
            <div className="lat text-sm font-semibold tracking-[0.22em]">
              <GradientText variant="mesh">TAJ SABA</GradientText>
            </div>
            <div className="text-[0.6875rem] text-[var(--ts-text-muted)] tracking-[0.18em]">
              تاج سبأ
            </div>
          </div>
        </motion.div>

        {/* Closing pill */}
        <motion.span
          variants={fadeUp}
          className="ts-pill-solid"
          style={{ animation: "ts-pulse-soft 2.4s ease-in-out infinite" }}
        >
          الختام · Closing
        </motion.span>

        {/* Hero animated gradient headline */}
        <motion.h1
          variants={blurIn}
          className="ts-h1 ts-gradient-animated ts-text-balance leading-[1.18] max-w-4xl mx-auto"
        >
          {VISION_TAGLINE}
        </motion.h1>

        {/* Inverse emerald card with closing principle */}
        <motion.blockquote
          variants={blurIn}
          custom={1}
          className="ts-card-deep ts-corner-ornament w-full max-w-3xl px-8 py-5 lg:px-10 lg:py-6 m-0 relative"
        >
          {/* Inner subtle emerald highlight strip */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3"
            style={{
              background:
                "linear-gradient(270deg, rgba(255,255,255,0.10), transparent 70%)",
            }}
          />
          <p
            className="ts-h3 leading-[1.6] text-center font-normal m-0 relative"
            style={{ color: "#ECFDF5" }}
          >
            {PRESENTATION_META.closingLine}
          </p>
        </motion.blockquote>

        {/* Accent divider with × (uses Divider variant="x") */}
        <motion.div
          variants={fadeUp}
          className="w-full max-w-md"
        >
          <Divider variant="x">
            <span
              className="text-[var(--ts-accent)] text-xl font-semibold"
              dir="ltr"
            >
              ×
            </span>
          </Divider>
        </motion.div>

        {/* Brand lockup */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="flex items-center gap-3" dir="ltr">
            <span className="lat text-base font-semibold tracking-[0.18em] uppercase text-[var(--ts-text-primary)]">
              {PRESENTATION_META.provider}
            </span>
            <span className="text-[var(--ts-accent)] text-xl">×</span>
            <span className="text-base font-semibold text-[var(--ts-text-primary)]">
              {PRESENTATION_META.client}
            </span>
          </div>
          <p className="lat text-xs text-[var(--ts-text-muted)] tracking-[0.2em] uppercase">
            Building the Smart Hotel of the Future
          </p>
        </motion.div>

        {/* Progress dots — last active (slide 17 / 17 in 4-segment chunk) */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 mt-2"
          dir="ltr"
        >
          <span className="ts-progress-dot" />
          <span className="ts-progress-dot" />
          <span className="ts-progress-dot" />
          <span className="ts-progress-dot active" />
        </motion.div>
      </div>
    </motion.section>
  );
}
