"use client";

import { motion } from "framer-motion";
import { DISCOVERY_OBJECTIVES } from "../../data/slides";
import {
  CardIndex,
  IconBadge,
  IconGlyph,
  SectionHeading,
  StatusPill,
  Watermark,
  blurIn,
  containerStagger,
  scaleIn,
} from "../primitives";

/**
 * Slide 03 — Discovery Objectives (ENHANCED MODERN LIGHT)
 * Bento grid layout:
 *  - 7 cards arranged as bento: card 1 spans 2 cols × 2 rows (featured),
 *    cards 2-7 fill remaining grid
 *  - Featured card: ts-card-deep (deep emerald gradient) with ts-corner-ornament,
 *    watermark "01", large ts-icon-chip-gradient, ts-pill-solid "Focus" badge
 *  - Other 6 cards: ts-bento ts-bento-accent with ts-icon-chip + CardIndex markers
 *  - Header: SectionHeading component (eyebrow + title + ts-pill-dot counter)
 *  - Background: subtle ts-aurora-bg
 */
export default function Slide03DiscoveryObjectives() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad justify-center relative ts-aurora-bg overflow-hidden"
      aria-roledescription="slide"
      aria-label="Discovery Objectives"
    >
      {/* Subtle ambient mesh blob */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ts-blob ts-blob-emerald h-[35vh] w-[35vh] -bottom-[10%] -left-[5%] opacity-40" />
        <div className="ts-blob ts-blob-mesh h-[28vh] w-[28vh] top-[2%] right-[2%] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        {/* Section heading with pill counter */}
        <SectionHeading
          eyebrow="أهداف جلسة الاكتشاف"
          eyebrowEn="Discovery Objectives"
          title="ما الذي نريد خروجه من الاجتماع؟"
          subtitle="سبع محاور أساسية توجّه اكتشافنا المشترك لمتطلبات فندق تاج سبأ قبل البناء."
          pill={
            <StatusPill variant="dot">
              <span className="lat">{DISCOVERY_OBJECTIVES.length}</span>
              <span>محاور</span>
            </StatusPill>
          }
        />

        {/* Bento grid: 4-col on lg, 2-col on md, 1-col on sm
            Featured card 1 spans 2 cols × 2 rows; remaining 6 cards fill the rest. */}
        <motion.div
          variants={containerStagger}
          className="ts-bento-grid"
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
                    ? "ts-card-deep ts-corner-ornament p-7 lg:p-8 relative overflow-hidden lg:col-span-2 lg:row-span-2"
                    : "ts-bento ts-bento-accent p-5 lg:p-6 relative",
                ].join(" ")}
              >
                {/* Featured: faint watermark "01" in background */}
                {featured && (
                  <Watermark
                    text="01"
                    className="-bottom-8 -left-4 text-[9rem] opacity-[0.10]"
                  />
                )}

                {/* Top row: icon chip + index (or "Focus" pill for featured) */}
                <div className="flex items-start justify-between mb-4">
                  {featured ? (
                    <IconBadge variant="gradient" size="lg">
                      <IconGlyph name={item.icon} size={26} />
                    </IconBadge>
                  ) : (
                    <span className="ts-icon-chip">
                      <IconGlyph name={item.icon} size={20} />
                    </span>
                  )}
                  {featured ? (
                    <StatusPill variant="solid">
                      <span>Focus</span>
                    </StatusPill>
                  ) : (
                    <CardIndex index={String(i + 1).padStart(2, "0")} />
                  )}
                </div>

                {/* Title + English subtitle */}
                <h3
                  className={[
                    "font-semibold mb-1 text-[var(--ts-text-primary)]",
                    featured ? "ts-h3" : "text-base lg:text-lg",
                  ].join(" ")}
                  style={featured ? { color: "var(--ts-text-inverse)" } : undefined}
                >
                  {item.title}
                </h3>
                <div
                  className={[
                    "lat text-xs mb-3 tracking-wider",
                    featured ? "text-white/70" : "text-[var(--ts-text-muted)]",
                  ].join(" ")}
                >
                  {item.en}
                </div>

                {/* Accent divider for featured */}
                {featured && (
                  <div
                    className="h-px w-full mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent)",
                    }}
                  />
                )}

                {/* Description */}
                <p
                  className={[
                    "leading-relaxed",
                    featured
                      ? "ts-body text-white/80"
                      : "ts-caption text-[var(--ts-text-secondary)]",
                  ].join(" ")}
                >
                  {item.desc}
                </p>

                {/* Featured: bottom hint row */}
                {featured && (
                  <div className="relative mt-6 pt-4 border-t border-white/15 flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                    <span className="text-xs text-white/70 lat tracking-[0.18em] uppercase font-semibold">
                      Starting point of the discovery session
                    </span>
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
