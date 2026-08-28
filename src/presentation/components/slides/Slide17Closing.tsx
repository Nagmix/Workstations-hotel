"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META, VISION_TAGLINE } from "../../data/slides";
import {
  IconGlyph,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

/**
 * Slide 17 — Closing (cinematic finale)
 *
 * Center-aligned hero with three ambient emerald blobs. The vision
 * tagline is rendered as a large `ts-gradient-text` headline. The
 * closing principle ("نبني التقنية حول طريقة عمل تاج سبأ...") sits
 * inside a deep-emerald inverse card. A small brand emblem
 * (Sparkles + TAJ SABA) anchors the top. An accent divider with an
 * emerald × separates the brand lockup "Digital Planetx × فندق تاج
 * سبأ" from the headline. Subtitle "Building the Smart Hotel of the
 * Future" closes the deck.
 */
export default function Slide17Closing() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      variants={containerStagger}
      className="slide-stage slide-pad items-center justify-center text-center"
      aria-roledescription="slide"
      aria-label="Closing"
    >
      {/* Ambient emerald blobs */}
      <div className="ts-blob ts-blob-emerald w-[600px] h-[600px] -top-32 -left-32" />
      <div className="ts-blob ts-blob-emerald w-[500px] h-[500px] -bottom-32 -right-24" />
      <div className="ts-blob ts-blob-warm w-[400px] h-[400px] top-[30%] right-[20%] opacity-30" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-5xl w-full">
        {/* Brand emblem */}
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <div className="ts-icon-chip-solid !w-11 !h-11 !rounded-full">
            <IconGlyph name="Sparkles" size={20} />
          </div>
          <div className="text-left">
            <div className="lat text-sm font-semibold tracking-[0.18em] text-[var(--ts-text-primary)]">
              TAJ SABA
            </div>
            <div className="text-[0.625rem] text-[var(--ts-text-muted)]">
              تاج سبأ
            </div>
          </div>
        </motion.div>

        {/* Closing pill */}
        <motion.span variants={fadeUp} className="ts-pill-solid">
          الختام · Closing
        </motion.span>

        {/* Hero gradient headline */}
        <motion.h1
          variants={blurIn}
          className="ts-h1 ts-gradient-text leading-[1.15] max-w-4xl mx-auto text-balance"
        >
          {VISION_TAGLINE}
        </motion.h1>

        {/* Inverse emerald card with closing principle */}
        <motion.blockquote
          variants={blurIn}
          custom={1}
          className="ts-card-inverse w-full max-w-3xl px-8 py-5 lg:px-10 lg:py-6 m-0"
        >
          <p className="ts-h3 text-emerald-50 leading-[1.6] text-center font-normal m-0">
            {PRESENTATION_META.closingLine}
          </p>
        </motion.blockquote>

        {/* Accent divider with × */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 w-full max-w-md"
        >
          <span className="flex-1 ts-divider-accent" />
          <span className="text-[var(--ts-accent)] text-xl" dir="ltr">
            ×
          </span>
          <span className="flex-1 ts-divider-accent" />
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
      </div>
    </motion.section>
  );
}
