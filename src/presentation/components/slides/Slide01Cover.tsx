"use client";

import { motion } from "framer-motion";
import { PRESENTATION_META, VISION_TAGLINE } from "../../data/slides";
import { EASE_OUT, fadeUp, scaleIn, drawLine } from "../primitives";

export default function Slide01Cover() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      className="slide-stage slide-pad items-center justify-center text-center"
      aria-roledescription="slide"
      aria-label="Cover"
    >
      {/* Ambient gold radial halo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[58vh] w-[58vh] rounded-full opacity-50 blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,176,109,0.32) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Decorative cross-axis lines (top + bottom hairlines) */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-x-0 top-[18%] h-px w-full"
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
        className="pointer-events-none absolute inset-x-0 bottom-[18%] h-px w-full"
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

      {/* Vertical gold accent line (right edge) */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: EASE_OUT }}
        className="pointer-events-none absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 h-[40vh] w-px origin-center"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--ts-accent) 30%, var(--ts-accent) 70%, transparent)",
        }}
      />
      {/* Vertical gold accent line (left edge) */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: EASE_OUT }}
        className="pointer-events-none absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 h-[40vh] w-px origin-center"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--ts-accent) 30%, var(--ts-accent) 70%, transparent)",
        }}
      />

      {/* Top brand chip */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 flex items-center gap-3 mb-10"
      >
        <span className="ts-pill">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ts-accent)]" />
          Executive Discovery · {PRESENTATION_META.date}
        </span>
      </motion.div>

      {/* Brand lockup */}
      <motion.div variants={fadeUp} className="relative z-10">
        <motion.h1
          variants={fadeUp}
          className="lat ts-display font-semibold tracking-tight text-[var(--ts-text-primary)]"
        >
          {PRESENTATION_META.brand}
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className="mt-2 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-[var(--ts-border-strong)]" />
          <span className="lat ts-eyebrow text-[var(--ts-accent)]">
            {PRESENTATION_META.brandSub}
          </span>
          <span className="h-px w-12 bg-[var(--ts-border-strong)]" />
        </motion.div>
      </motion.div>

      {/* Arabic title */}
      <motion.h2
        variants={fadeUp}
        className="relative z-10 mt-8 ts-h2 text-[var(--ts-text-primary)] font-medium"
      >
        منصة تاج سبأ الفندقية الذكية
      </motion.h2>

      {/* Vision tagline */}
      <motion.p
        variants={fadeUp}
        className="relative z-10 mt-6 max-w-3xl ts-body-lg text-[var(--ts-text-secondary)] leading-relaxed"
      >
        {VISION_TAGLINE}
      </motion.p>

      {/* Bottom lockup with subtle separator */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 mt-14 flex flex-col items-center gap-4"
      >
        <motion.span
          variants={scaleIn}
          className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--ts-accent)] to-transparent"
        />
        <div className="flex items-center gap-4 text-[var(--ts-text-muted)]">
          <span className="lat text-sm tracking-[0.18em] uppercase font-medium">
            {PRESENTATION_META.provider}
          </span>
          <span className="text-[var(--ts-accent)] text-base">×</span>
          <span className="text-sm font-medium">{PRESENTATION_META.client}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
