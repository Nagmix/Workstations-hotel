"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META, VISION_TAGLINE } from "../../data/slides";
import {
  EASE_OUT,
  drawLine,
  fadeUp,
  scaleIn,
  blurIn,
  containerStagger,
  StatBlock,
  IconBadge,
  SlideBrandChip,
} from "../primitives";

/**
 * Slide 01 — Cover (ENHANCED MODERN LIGHT)
 * "Linen & Emerald" hero with:
 *  - mixed ambient blobs (emerald + mesh + warm amber) for richer color story
 *  - ts-mesh-bg background layer + ts-noise premium grain overlay
 *  - ts-gradient-animated headline for slow gradient drift
 *  - ts-corner-ornament luxury corner brackets at the four slide edges
 *  - ts-glass-emerald backdrop-blur brand lockup chip at the top
 *  - 4 ts-progress-dot indicators showing slide position
 *  - 3 StatBlock KPI strip near the bottom (Discovery · Objectives · Delivery)
 */
export default function Slide01Cover() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      variants={containerStagger}
      className="slide-stage slide-pad items-center justify-center text-center relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Cover"
    >
      {/* Layer 1: mesh gradient background (very low opacity) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-mesh-bg opacity-50"
      />

      {/* Layer 2: mixed ambient blobs — emerald + mesh + warm amber */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Two emerald blobs */}
        <div className="ts-blob ts-blob-emerald h-[55vh] w-[55vh] -top-[8%] right-[10%]" />
        <div className="ts-blob ts-blob-emerald h-[45vh] w-[45vh] bottom-[5%] left-[6%]" />
        {/* One mesh blob (richer color story) */}
        <div className="ts-blob ts-blob-mesh h-[42vh] w-[42vh] top-[28%] left-[44%] opacity-50 ts-float-slow" />
        {/* One warm amber blob */}
        <div className="ts-blob ts-blob-warm h-[28vh] w-[28vh] top-[42%] left-[42%] opacity-60" />
      </motion.div>

      {/* Subtle dot-grid texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-dot-bg opacity-50"
      />

      {/* Decorative hairlines (top + bottom dashed) */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-x-0 top-[14%] h-px w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 1"
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
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
        aria-hidden="true"
      />

      {/* Luxury corner brackets at the four corners of the slide */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-5 left-5 h-7 w-7 border-t border-l border-[var(--ts-accent)] opacity-50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-5 right-5 h-7 w-7 border-t border-r border-[var(--ts-accent)] opacity-50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 h-7 w-7 border-b border-l border-[var(--ts-accent)] opacity-50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 h-7 w-7 border-b border-r border-[var(--ts-accent)] opacity-50"
      />

      {/* Top-right brand lockup — glass emerald chip with backdrop blur */}
      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date="29 · 08 · 2026"
      />

      {/* Top brand chip — glass-emerald with backdrop blur */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 flex items-center gap-3 mb-10"
      >
        <span
          className="ts-glass-emerald inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--ts-accent-deep)] lat text-[0.6875rem] tracking-[0.22em] uppercase font-semibold"
          dir="ltr"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ts-accent)]" />
          <span>EXECUTIVE DISCOVERY</span>
          <span className="text-[var(--ts-text-faint)]">·</span>
          <span>{PRESENTATION_META.date}</span>
        </span>
      </motion.div>

      {/* Brand lockup — animated gradient headline */}
      <motion.div variants={fadeUp} className="relative z-10">
        <motion.h1
          variants={blurIn}
          className="lat ts-display font-semibold tracking-tight ts-gradient-animated"
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

      {/* 3-StatBlock KPI strip — themed metrics */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 mt-12 w-full max-w-4xl mx-auto"
      >
        <div className="ts-stat-strip">
          <StatBlock
            value="01"
            label="جلسة الاكتشاف"
            labelEn="Discovery"
            icon={
              <IconBadge variant="gradient" size="sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </IconBadge>
            }
          />
          <StatBlock
            value="07"
            label="محاور الاكتشاف"
            labelEn="Objectives"
            icon={
              <IconBadge variant="gradient" size="sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </IconBadge>
            }
          />
          <StatBlock
            value="17"
            label="شريحة تنفيذية"
            labelEn="Delivery"
            icon={
              <IconBadge variant="gradient" size="sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </IconBadge>
            }
          />
          <StatBlock
            value="11"
            label="مراحل البناء"
            labelEn="Phases"
            icon={
              <IconBadge variant="gradient" size="sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </IconBadge>
            }
          />
        </div>
      </motion.div>

      {/* Bottom lockup + progress hint */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 mt-10 flex flex-col items-center gap-5"
      >
        {/* 4 progress dots — slide position indicator */}
        <motion.div
          variants={scaleIn}
          className="flex items-center gap-2"
          dir="ltr"
        >
          <span className="ts-progress-dot active" aria-hidden="true" />
          <span className="ts-progress-dot" aria-hidden="true" />
          <span className="ts-progress-dot" aria-hidden="true" />
          <span className="ts-progress-dot" aria-hidden="true" />
        </motion.div>

        {/* Provider × Client lockup */}
        <motion.div variants={fadeUp} className="flex items-center gap-5 text-[var(--ts-text-muted)]">
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
