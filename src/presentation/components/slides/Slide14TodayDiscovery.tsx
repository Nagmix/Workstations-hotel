"use client";

import { motion } from "framer-motion";
import { TODAY_DISCOVERY, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
  IconGlyph,
  SectionHeading,
  SlideBrandChip,
  StatusPill,
  Watermark,
  blurIn,
  containerStagger,
  fadeUp,
} from "../primitives";

/**
 * Slide 14 — Today's Discovery (9 categories)
 *
 * Ambient ts-blob-warm amber top-left + ts-aurora-bg background + ts-noise.
 *
 * Clean 3×3 grid (lg) / 2-col (sm) of discovery categories. Each card is
 * a ts-bento ts-bento-accent with:
 *  - CardIndex corner marker "01"-"09"
 *  - ts-icon-chip (emerald tint) with 22px Lucide glyph (or
 *    ts-icon-chip-gradient filled emerald for the two focal cards)
 *  - Arabic title (semibold)
 *  - English small-caps label (lat + ts-mono)
 *
 * Two cards (Operations & Priorities) are visually emphasized using
 * ts-card-mesh + ts-icon-chip-gradient (filled emerald) — they are the
 * most important discovery topics. Each card carries a faint Watermark
 * of its number in the background.
 *
 * Header uses SectionHeading with ts-pill-dot "9 topics" counter.
 * SlideBrandChip top-right.
 */
const FOCAL_INDICES = new Set([2, 8]); // Operations, Priorities (1-indexed within TODAY_DISCOVERY)

export default function Slide14TodayDiscovery() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Today's Discovery"
    >
      {/* Aurora ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-75"
      />
      {/* Warm amber blob top-left (distinct from the emerald blobs elsewhere) */}
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-warm ts-float-slow pointer-events-none"
        style={{
          top: -160,
          left: -120,
          width: 460,
          height: 460,
          opacity: 0.55,
        }}
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="اكتشاف اليوم"
          eyebrowEn="Today's Discovery"
          title={
            <>
              ماذا{" "}
              <span className="ts-gradient-text-emerald">سنناقش اليوم</span>؟
            </>
          }
          subtitle="هذه ليست قائمة الأسئلة، بل المحاور التي سنغطيها معًا — نستخدم أدوات الاكتشاف أثناء النقاش."
          pill={
            <StatusPill variant="dot">
              <span className="lat">9</span> topics
            </StatusPill>
          }
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
          {TODAY_DISCOVERY.map((cat, i) => {
            const cardIndex = String(i + 1).padStart(2, "0");
            const isFocal = FOCAL_INDICES.has(i + 1);
            return (
              <motion.article
                key={cat.en}
                custom={i}
                variants={blurIn}
                className={`relative p-5 flex flex-col items-center gap-3 text-center group overflow-hidden ${
                  isFocal
                    ? "ts-card-mesh ts-corner-ornament ts-hover-glow"
                    : "ts-bento ts-bento-accent"
                }`}
              >
                {/* Faint number watermark */}
                <Watermark
                  text={cardIndex}
                  className="-bottom-4 -left-1 text-[6rem] opacity-[0.05]"
                />

                {/* Corner card index */}
                <CardIndex index={cardIndex} />

                {/* Icon chip */}
                {isFocal ? (
                  <span
                    className="ts-icon-chip-gradient mt-1"
                    aria-hidden="true"
                  >
                    <IconGlyph name={cat.icon} size={22} />
                  </span>
                ) : (
                  <span className="ts-icon-chip mt-1" aria-hidden="true">
                    <IconGlyph name={cat.icon} size={22} />
                  </span>
                )}

                {/* Title + label */}
                <div className="relative">
                  <div className="text-base font-semibold text-[var(--ts-text-primary)] leading-tight">
                    {cat.title}
                  </div>
                  <div
                    className="lat ts-mono text-[0.6875rem] text-[var(--ts-text-muted)] tracking-wider uppercase mt-1"
                    dir="ltr"
                  >
                    {cat.en}
                  </div>
                </div>

                {isFocal && (
                  <span className="ts-pill-solid !py-1 !px-2.5 !text-[0.5625rem] mt-1">
                    Focus
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
