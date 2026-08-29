"use client";

import { motion } from "framer-motion";
import { BUILD_TIMELINE, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
  ConnectorArrow,
  FloatingBadge,
  IconGlyph,
  SectionHeading,
  SlideBrandChip,
  StatusPill,
  Watermark,
  blurIn,
  containerStagger,
  fadeUp,
  scaleIn,
} from "../primitives";

/**
 * Slide 13 — How We Build (11-phase timeline)
 *
 * Top-aligned tall slide (stage-top) with ts-grid-bg blueprint backdrop +
 * ts-aurora-bg ambient + ts-noise texture.
 *
 * All 11 phases in a single row at lg:grid-cols-11 inside max-w-[1500px]
 * (collapses to 4/3/2 cols on smaller breakpoints). Each phase is a
 * ts-bento ts-bento-accent p-3 card with:
 *  - Solid emerald ts-icon-chip-gradient (9×9 numbered chip with shadow +
 *    accent-soft glow)
 *  - Arabic title
 *  - English label
 *  - CardIndex corner marker
 *
 * First phase: animated ts-pulse-ring + ts-floating-badge "Start · اليوم"
 * badge above. Behind the chips on lg+, an animated dashed emerald track
 * runs horizontally at the chip center line (scaleX 0→1, 1.3s, EASE_OUT).
 *
 * Bottom = ts-card-mesh callout with ts-pill-solid "ملاحظة" badge +
 * ts-icon-chip-info + the methodology note. Header uses SectionHeading
 * with ts-pill-dot "11 phases" counter. ts-watermark of "13" faint in
 * background. SlideBrandChip top-right.
 */
export default function Slide13HowWeBuild() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage stage-top slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="How we will build it"
    >
      {/* Blueprint grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-grid-bg opacity-50"
      />
      {/* Aurora ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-70"
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 flex flex-col gap-5 w-full max-w-[1500px] mx-auto">
        <SectionHeading
          eyebrow="كيف نبنيها"
          eyebrowEn="How we will build it"
          title={
            <>
              مراحل مترابطة، مع{" "}
              <span className="ts-gradient-text-emerald">تحقق من كل جزء</span>{" "}
              قبل البناء فوقه.
            </>
          }
          pill={
            <StatusPill variant="dot">
              <span className="lat">11</span> phases
            </StatusPill>
          }
        />

        {/* Horizontal timeline — 11 phases */}
        <motion.div
          variants={fadeUp}
          className="relative mt-1 px-1"
        >
          {/* Dashed emerald track behind the chips (lg+ only) */}
          <motion.div
            aria-hidden="true"
            variants={{
              hidden: { scaleX: 0 },
              show: {
                scaleX: 1,
                transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="absolute top-[1.125rem] left-6 right-6 hidden lg:block origin-right pointer-events-none"
            style={{
              borderTop: "2px dashed rgba(15, 118, 110, 0.45)",
              transform: "translateY(0)",
            }}
          />

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-2.5">
            {BUILD_TIMELINE.map((phase, i) => {
              const cardIndex = String(i + 1).padStart(2, "0");
              const isFirst = i === 0;
              return (
                <motion.div
                  key={phase.step}
                  custom={i}
                  variants={scaleIn}
                  className={`ts-bento ts-bento-accent p-3 flex flex-col items-center text-center relative ${
                    isFirst ? "ts-hover-glow" : ""
                  }`}
                >
                  {/* Corner card index */}
                  <CardIndex index={cardIndex} />

                  {/* Numbered gradient chip */}
                  <div className="relative mb-2.5 mt-1">
                    <span
                      className="ts-icon-chip-gradient !w-9 !h-9 !rounded-full num text-xs font-semibold"
                      aria-hidden="true"
                      style={{
                        boxShadow:
                          "0 4px 12px rgba(15,118,110,0.30), 0 0 0 4px rgba(15,118,110,0.06)",
                      }}
                    >
                      {phase.step}
                    </span>
                    {/* Pulse ring on the first node */}
                    {isFirst && (
                      <>
                        <span
                          aria-hidden="true"
                          className="ts-pulse-ring"
                          style={{ inset: -6, borderRadius: 9999 }}
                        />
                        <FloatingBadge>
                          Start · اليوم
                        </FloatingBadge>
                      </>
                    )}
                  </div>

                  {/* Title + label */}
                  <div className="text-[0.78rem] font-semibold text-[var(--ts-text-primary)] leading-tight mb-0.5">
                    {phase.title}
                  </div>
                  <div
                    className="lat text-[0.5625rem] text-[var(--ts-text-muted)] tracking-wider uppercase"
                    dir="ltr"
                  >
                    {phase.en}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Faint watermark of "13" in background */}
          <Watermark
            text="13"
            className="-bottom-16 -left-6 text-[12rem] opacity-[0.04] hidden lg:block"
          />
        </motion.div>

        {/* Bottom callout — mesh card with methodology note */}
        <motion.div
          variants={blurIn}
          className="ts-card-mesh ts-corner-ornament px-5 py-3.5 flex items-center gap-3 relative overflow-hidden"
        >
          <span
            className="ts-icon-chip-info shrink-0"
            aria-hidden="true"
            style={{ width: 38, height: 38, borderRadius: 10 }}
          >
            <IconGlyph name="AlertTriangle" size={18} />
          </span>
          <span className="ts-pill-solid shrink-0 !py-1 !px-3 !text-[0.5625rem]">
            ملاحظة
          </span>
          <span className="text-sm text-[var(--ts-text-primary)] leading-relaxed flex-1">
            ترتيب التنفيذ التفصيلي والمدة والتكلفة تعتمد على النطاق النهائي
            والبيانات والتكاملات والأجهزة والاعتمادات.
          </span>
          <ConnectorArrow
            className="!hidden lg:!flex shrink-0"
            size={18}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
