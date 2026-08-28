"use client";

import { motion } from "framer-motion";
import { BOARD_DECISIONS, PRESENTATION_META } from "../../data/slides";
import {
  IconGlyph,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

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
      {/* Ambient halo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[60vh] w-[60vh] rounded-full opacity-30 blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,176,109,0.35) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-6xl w-full">
        <motion.span variants={fadeUp} className="ts-pill">
          الختام · Closing
        </motion.span>

        {/* Core statement */}
        <motion.blockquote
          variants={blurIn}
          className="ts-h1 text-[var(--ts-text-primary)] font-medium leading-[1.2] max-w-5xl"
        >
          “نبني التقنية حول طريقة عمل تاج سبأ،
          <br />
          لا نفرض على تاج سبأ طريقة عمل جاهزة.”
        </motion.blockquote>

        {/* Three decision chips */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 max-w-4xl"
        >
          {[
            "رؤية معتمدة",
            "نطاق موثق",
            "خطة تنفيذ",
          ].map((c, i) => (
            <motion.span
              key={c}
              variants={scaleIn}
              custom={i + 1}
              className="px-4 py-2 rounded-full border border-[var(--ts-border-accent)] bg-[var(--ts-accent-softer)] text-sm text-[var(--ts-accent-bright-text)]"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

        {/* Board decisions count + lockup */}
        <motion.div
          variants={fadeUp}
          className="mt-4 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center max-w-5xl"
        >
          {/* Big number */}
          <motion.div variants={scaleIn} className="text-center md:text-right">
            <div className="lat ts-display text-[var(--ts-accent)] font-semibold leading-none num">
              08
            </div>
            <div className="ts-eyebrow text-[var(--ts-text-secondary)] mt-2">
              نقاط قرار
              <span className="mx-1.5 text-[var(--ts-text-faint)]">·</span>
              Board Decisions
            </div>
          </motion.div>

          <div className="md:ts-divider-vertical md:h-32 md:w-px hidden md:block" />

          {/* Decision list */}
          <motion.ul
            variants={containerStagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-right"
          >
            {BOARD_DECISIONS.map((d, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-2.5 text-sm text-[var(--ts-text-secondary)]"
              >
                <span className="ts-slide-index text-[var(--ts-accent)] text-xs mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{d}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Brand lockup */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex items-center gap-4 text-[var(--ts-text-muted)]"
        >
          <span className="lat text-sm tracking-[0.18em] uppercase font-medium">
            {PRESENTATION_META.provider}
          </span>
          <span className="text-[var(--ts-accent)] text-base">×</span>
          <span className="text-sm font-medium">{PRESENTATION_META.client}</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
