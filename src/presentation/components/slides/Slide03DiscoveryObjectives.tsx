"use client";

import { motion } from "framer-motion";
import { DISCOVERY_OBJECTIVES } from "../../data/slides";
import {
  IconGlyph,
  SlideHeader,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 03 — Discovery Objectives (7 cards)
 * Responsive grid: 1 col mobile · 2 col tablet · 4 col desktop.
 * The first card ("Understanding Operations") is featured using
 * ts-card-accent + ts-icon-chip-solid + col-span-2 on tablet/desktop.
 */
export default function Slide03DiscoveryObjectives() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad justify-center relative"
      aria-roledescription="slide"
      aria-label="Discovery Objectives"
    >
      {/* Subtle emerald blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ts-blob ts-blob-emerald h-[35vh] w-[35vh] -bottom-[10%] -left-[5%] opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <SlideHeader
            index="03"
            eyebrow="أهداف جلسة الاكتشاف"
            eyebrowEn="Discovery Objectives"
          />
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mt-2"
          >
            <motion.h2
              variants={fadeUp}
              className="ts-h2 text-[var(--ts-text-primary)] font-medium max-w-2xl"
            >
              ما الذي نريد خروجه من الاجتماع؟
            </motion.h2>
            <motion.span
              variants={fadeUp}
              className="ts-pill-neutral shrink-0"
            >
              <span className="lat">{DISCOVERY_OBJECTIVES.length}</span>
              <span>محاور اكتشاف</span>
            </motion.span>
          </motion.div>
        </div>

        {/* 7-card grid (featured = first item, spans 2 cols on tablet/desktop) */}
        <motion.div
          variants={containerStagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {DISCOVERY_OBJECTIVES.map((item, i) => {
            const featured = i === 0;
            return (
              <motion.article
                key={item.en}
                custom={i}
                variants={featured ? scaleIn : blurIn}
                className={[
                  featured
                    ? "ts-card-accent p-6 lg:p-7 sm:col-span-2 lg:col-span-2 relative overflow-hidden"
                    : "ts-card p-5 lg:p-6 group relative overflow-hidden",
                ].join(" ")}
              >
                {/* Top row: icon chip + index */}
                <div className="flex items-center justify-between mb-4">
                  {featured ? (
                    <span className="ts-icon-chip-solid !w-12 !h-12 !rounded-xl">
                      <IconGlyph name={item.icon} size={22} />
                    </span>
                  ) : (
                    <span className="ts-icon-chip">
                      <IconGlyph name={item.icon} size={20} />
                    </span>
                  )}
                  <span className="ts-slide-index lat text-[var(--ts-text-faint)] text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title + English subtitle */}
                <h3
                  className={[
                    "font-semibold mb-1 text-[var(--ts-text-primary)]",
                    featured ? "ts-h3" : "text-base lg:text-lg",
                  ].join(" ")}
                >
                  {item.title}
                </h3>
                <div className="lat text-xs text-[var(--ts-text-muted)] mb-3 tracking-wider">
                  {item.en}
                </div>

                {/* Hairline divider for featured */}
                {featured && (
                  <div className="h-px w-full ts-divider-accent mb-4" />
                )}

                {/* Description */}
                <p
                  className={[
                    "text-[var(--ts-text-secondary)] leading-relaxed",
                    featured ? "ts-body" : "ts-caption",
                  ].join(" ")}
                >
                  {item.desc}
                </p>

                {/* Featured: corner watermark + "Focus" tag */}
                {featured && (
                  <>
                    <span
                      aria-hidden
                      className="lat absolute -bottom-4 -left-2 text-[5.5rem] lg:text-[7rem] font-semibold leading-none text-[var(--ts-accent)] opacity-[0.06] select-none"
                    >
                      01
                    </span>
                    <span className="absolute top-5 left-6 lg:top-7 lg:left-7 ts-eyebrow text-[var(--ts-accent-deep)] opacity-80">
                      Focus
                    </span>
                  </>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
