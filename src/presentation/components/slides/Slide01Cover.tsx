"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META, VISION_TAGLINE } from "../../data/slides";
import {
  EASE_OUT,
  drawLine,
  fadeUp,
  scaleIn,
  containerStagger,
} from "../primitives";

/**
 * Slide 01 — Cover
 * "Linen & Emerald" modern hero: emerald blobs + dot texture,
 * gradient headline, vertical accent rails, premium lockup.
 */
export default function Slide01Cover() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      variants={containerStagger}
      className="slide-stage slide-pad items-center justify-center text-center relative overflow-hidden"
      aria-roledescription="slide"
      aria-label="Cover"
    >
      {/* Ambient emerald blobs (replaces the old gold halo) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="ts-blob ts-blob-emerald h-[55vh] w-[55vh] -top-[8%] right-[10%]" />
        <div className="ts-blob ts-blob-emerald h-[45vh] w-[45vh] bottom-[5%] left-[6%]" />
        <div className="ts-blob ts-blob-warm h-[28vh] w-[28vh] top-[42%] left-[42%] opacity-60" />
      </motion.div>

      {/* Subtle dot-grid texture overlay */}
      <div className="pointer-events-none absolute inset-0 ts-dot-bg opacity-60" />

      {/* Decorative hairlines (top + bottom) */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-x-0 top-[14%] h-px w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 1"
      >
        <motion.line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="var(--ts-border-strong)"
          strokeWidth="0.3"
          strokeDasharray="0.6 1.4"
          variants={drawLine}
          custom={1}
        />
      </motion.svg>
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-x-0 bottom-[14%] h-px w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 1"
      >
        <motion.line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="var(--ts-border-strong)"
          strokeWidth="0.3"
          strokeDasharray="0.6 1.4"
          variants={drawLine}
          custom={2}
        />
      </motion.svg>

      {/* Vertical emerald accent rails (left + right edges) */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: EASE_OUT }}
        className="pointer-events-none absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 h-[44vh] w-px origin-center"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--ts-accent) 30%, var(--ts-accent) 70%, transparent)",
        }}
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: EASE_OUT }}
        className="pointer-events-none absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 h-[44vh] w-px origin-center"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--ts-accent) 30%, var(--ts-accent) 70%, transparent)",
        }}
      />

      {/* Top brand chip */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 flex items-center gap-3 mb-12"
      >
        <span className="ts-pill-solid">
          <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
          <span className="lat">EXECUTIVE DISCOVERY</span>
          <span className="text-white/60">·</span>
          <span>{PRESENTATION_META.date}</span>
        </span>
      </motion.div>

      {/* Brand lockup — giant gradient headline */}
      <motion.div variants={fadeUp} className="relative z-10">
        <motion.h1
          variants={fadeUp}
          className="lat ts-display font-semibold tracking-tight ts-gradient-text"
          style={{
            letterSpacing: "-0.04em",
          }}
        >
          {PRESENTATION_META.brand}
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className="mt-3 flex items-center justify-center gap-4"
        >
          <span className="h-px w-14 bg-[var(--ts-border-strong)]" />
          <span className="lat ts-eyebrow text-[var(--ts-accent-deep)]">
            {PRESENTATION_META.brandSub}
          </span>
          <span className="h-px w-14 bg-[var(--ts-border-strong)]" />
        </motion.div>
      </motion.div>

      {/* Arabic title */}
      <motion.h2
        variants={fadeUp}
        className="relative z-10 mt-9 ts-h2 text-[var(--ts-text-primary)] font-medium"
      >
        منصة تاج سبأ الفندقية الذكية
      </motion.h2>

      {/* Vision tagline — emphasized with accent dot prefix */}
      <motion.p
        variants={fadeUp}
        className="relative z-10 mt-5 max-w-3xl ts-body-lg text-[var(--ts-text-secondary)] leading-relaxed flex items-center justify-center gap-3"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ts-accent)] shrink-0" />
        <span>{VISION_TAGLINE}</span>
      </motion.p>

      {/* Bottom lockup: provider × client */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 mt-14 flex flex-col items-center gap-4"
      >
        <motion.span
          variants={scaleIn}
          className="h-px w-28"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--ts-accent) 50%, transparent)",
          }}
        />
        <div className="flex items-center gap-5 text-[var(--ts-text-muted)]">
          <div className="flex flex-col items-end gap-0.5">
            <span className="lat text-[0.625rem] tracking-[0.22em] uppercase text-[var(--ts-text-faint)]">
              Provider
            </span>
            <span className="lat text-sm tracking-[0.18em] uppercase font-semibold text-[var(--ts-text-primary)]">
              {PRESENTATION_META.provider}
            </span>
          </div>
          <span className="text-[var(--ts-accent)] text-lg font-light">×</span>
          <div className="flex flex-col items-start gap-0.5">
            <span className="text-[0.625rem] tracking-[0.22em] uppercase text-[var(--ts-text-faint)]">
              العميل
            </span>
            <span className="text-sm font-semibold text-[var(--ts-text-primary)]">
              {PRESENTATION_META.client}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
