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
 * Slide 01 — Cover (PREMIUM REFINED)
 * A luminous, well-anchored cover with:
 *  - Layered radial spotlight background (lighter center, edge vignette)
 *  - Bold typographic hierarchy: massive brand → rule → Arabic title → tagline
 *  - Hairline top/bottom dashed rules (cinematic frame)
 *  - Luxury corner brackets at the four corners
 *  - 4-StatBlock KPI strip with left-accent bars
 *  - 4 progress dots (slide position indicator)
 *  - Provider × Client lockup at the bottom
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
      {/* Layer 1: very faint dot-grid texture for tech feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-dot-bg opacity-40"
      />

      {/* Layer 2: ambient emerald blobs (anchored top-left & bottom-right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ts-blob ts-blob-emerald h-[45vh] w-[45vh] -top-[10%] right-[8%] opacity-50" />
        <div className="ts-blob ts-blob-emerald h-[38vh] w-[38vh] bottom-[2%] left-[5%] opacity-40" />
        <div className="ts-blob ts-blob-warm h-[22vh] w-[22vh] top-[42%] left-[44%] opacity-50 ts-float-slow" />
      </motion.div>

      {/* Decorative top + bottom hairlines (cinematic frame) */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-x-0 top-[10%] h-px w-full"
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
        className="pointer-events-none absolute inset-x-0 bottom-[10%] h-px w-full"
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

      {/* Luxury corner brackets at the four corners of the slide */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-6 left-6 h-8 w-8 border-t-2 border-l-2 border-[var(--ts-accent)] opacity-50 rounded-tl-md"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-6 h-8 w-8 border-t-2 border-r-2 border-[var(--ts-accent)] opacity-50 rounded-tr-md"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-[var(--ts-accent)] opacity-50 rounded-bl-md"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-[var(--ts-accent)] opacity-50 rounded-br-md"
      />

      {/* Top-right brand lockup */}
      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date="29 · 08 · 2026"
      />

      {/* Top brand chip — glass-emerald with backdrop blur */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 flex items-center gap-3 mb-12"
      >
        <span
          className="ts-glass-emerald inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--ts-accent-deep)] lat text-[0.6875rem] tracking-[0.24em] uppercase font-bold"
          dir="ltr"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ts-accent)] shadow-[0_0_0_3px_var(--ts-accent-soft)]" />
          <span>EXECUTIVE DISCOVERY</span>
          <span className="text-[var(--ts-text-faint)]">·</span>
          <span className="font-medium">{PRESENTATION_META.date}</span>
        </span>
      </motion.div>

      {/* Brand lockup — massive animated gradient headline */}
      <motion.div variants={fadeUp} className="relative z-10">
        <motion.h1
          variants={blurIn}
          className="lat ts-display font-bold tracking-tight ts-gradient-animated"
          style={{
            letterSpacing: "-0.045em",
          }}
        >
          {PRESENTATION_META.brand}
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className="mt-4 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--ts-accent)]" />
          <span className="lat ts-eyebrow text-[var(--ts-accent-deep)] font-bold">
            {PRESENTATION_META.brandSub}
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--ts-accent)]" />
        </motion.div>
      </motion.div>

      {/* Arabic title — secondary, refined */}
      <motion.h2
        variants={fadeUp}
        className="relative z-10 mt-8 ts-h2 text-[var(--ts-text-primary)] font-semibold"
      >
        منصة تاج سبأ الفندقية الذكية
      </motion.h2>

      {/* Vision tagline — emphasized with accent dot prefix */}
      <motion.p
        variants={fadeUp}
        className="relative z-10 mt-4 max-w-3xl ts-body-lg text-[var(--ts-text-secondary)] leading-relaxed flex items-center justify-center gap-3"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ts-accent)] shrink-0 shadow-[0_0_0_3px_var(--ts-accent-soft)]" />
        <span>{VISION_TAGLINE}</span>
      </motion.p>

      {/* 4-StatBlock KPI strip — themed metrics with left-accent bars */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 mt-12 w-full max-w-5xl mx-auto"
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
            <span className="lat text-[0.625rem] tracking-[0.24em] uppercase font-semibold text-[var(--ts-text-faint)]">
              Provider
            </span>
            <span className="lat text-sm tracking-[0.18em] uppercase font-bold text-[var(--ts-text-primary)]">
              {PRESENTATION_META.provider}
            </span>
          </div>
          <span className="text-[var(--ts-accent)] text-xl font-light">×</span>
          <div className="flex flex-col items-start gap-0.5">
            <span className="text-[0.625rem] tracking-[0.24em] uppercase font-semibold text-[var(--ts-text-faint)]">
              العميل
            </span>
            <span className="text-sm font-bold text-[var(--ts-text-primary)]">
              {PRESENTATION_META.client}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
