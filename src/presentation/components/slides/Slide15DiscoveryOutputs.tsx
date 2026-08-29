"use client";

import { motion } from "framer-motion";
import { DISCOVERY_OUTPUTS, PRESENTATION_META } from "../../data/slides";
import {
  CardIndex,
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
 * Slide 15 — Discovery Outputs (8 deliverables)
 *
 * Ambient ts-blob-emerald bottom-right + ts-aurora-bg background + ts-noise.
 *
 * 4×2 grid (md+) with explicit 4 cols. The "Next Steps" card is the focal
 * point: ts-card-deep (deep emerald gradient) + ts-icon-chip-gradient +
 * ts-corner-ornament + ts-floating-badge "Focus · نقطة التركيز" above +
 * ts-pill-solid "Focus" footer pill with emerald dot.
 *
 * Other 7 cards use ts-bento ts-bento-accent + ts-icon-chip + CardIndex.
 * Each card carries a faint Watermark of its number in the background.
 *
 * Bottom callout = ts-card-mesh with ts-eyebrow-dot "النتيجة" + the
 * resulting-artefact summary.
 *
 * Header uses SectionHeading with ts-pill-dot "8 outputs" counter.
 * SlideBrandChip top-right.
 */
export default function Slide15DiscoveryOutputs() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={containerStagger}
      className="slide-stage slide-pad relative overflow-hidden ts-noise"
      aria-roledescription="slide"
      aria-label="Discovery Outputs"
    >
      {/* Aurora ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ts-aurora-bg opacity-75"
      />
      {/* Emerald blob bottom-right */}
      <div
        aria-hidden="true"
        className="ts-blob ts-blob-emerald ts-float-slow pointer-events-none"
        style={{
          bottom: -160,
          right: -120,
          width: 480,
          height: 480,
          opacity: 0.55,
        }}
      />

      <SlideBrandChip
        brand={PRESENTATION_META.brand}
        date={PRESENTATION_META.date}
      />

      <div className="relative z-10 flex flex-col gap-6 w-full max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="مخرجات الاكتشاف"
          eyebrowEn="Discovery Outputs"
          title={
            <>
              ماذا سنخرج به{" "}
              <span className="ts-gradient-text-emerald">من الاجتماع</span>؟
            </>
          }
          pill={
            <StatusPill variant="dot">
              <span className="lat">8</span> outputs
            </StatusPill>
          }
        />

        {/* 4×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {DISCOVERY_OUTPUTS.map((item, i) => {
            const cardIndex = String(i + 1).padStart(2, "0");
            const isFocal = item.title === "Next Steps";
            return (
              <motion.article
                key={item.title}
                custom={i}
                variants={isFocal ? scaleIn : blurIn}
                className={`relative p-5 lg:p-6 flex flex-col gap-3 overflow-hidden ${
                  isFocal
                    ? "ts-card-deep ts-corner-ornament"
                    : "ts-bento ts-bento-accent"
                }`}
              >
                {/* Faint number watermark */}
                {!isFocal && (
                  <Watermark
                    text={cardIndex}
                    className="-bottom-4 -left-1 text-[6.5rem] opacity-[0.05]"
                  />
                )}

                {/* Floating badge above the focal card */}
                {isFocal && (
                  <FloatingBadge>
                    Focus · نقطة التركيز
                  </FloatingBadge>
                )}

                {/* Top row: icon chip + corner CardIndex (non-focal) */}
                {isFocal ? (
                  <div className="flex items-start justify-between">
                    <span
                      className="ts-icon-chip-gradient"
                      aria-hidden="true"
                    >
                      <IconGlyph name={item.icon} size={22} />
                    </span>
                    <span
                      className="lat text-[0.6875rem] tracking-[0.18em] uppercase font-semibold"
                      style={{ color: "#A7F3D0" }}
                      dir="ltr"
                    >
                      Next Steps
                    </span>
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    <span className="ts-icon-chip" aria-hidden="true">
                      <IconGlyph name={item.icon} size={20} />
                    </span>
                    <CardIndex index={cardIndex} />
                  </div>
                )}

                {/* Title */}
                <h3
                  className={`lat text-base font-semibold tracking-wide ${
                    isFocal
                      ? "text-white"
                      : "text-[var(--ts-text-primary)]"
                  }`}
                  dir="ltr"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    isFocal
                      ? "text-emerald-50/90"
                      : "text-[var(--ts-text-secondary)]"
                  }`}
                >
                  {item.desc}
                </p>

                {/* Focus footer pill */}
                {isFocal && (
                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <span className="ts-pill-solid !py-1 !px-2.5 !text-[0.5625rem] !bg-white/15">
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300"
                      />
                      Focus
                    </span>
                    <span
                      className="lat text-[0.6875rem] text-emerald-100/80"
                      dir="ltr"
                    >
                      آخر مخرجات الاكتشاف
                    </span>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Bottom callout — mesh card with the resulting artefact summary */}
        <motion.div
          variants={fadeUp}
          className="ts-card-mesh ts-corner-ornament px-5 lg:px-6 py-4 flex items-center gap-4 relative overflow-hidden"
        >
          {/* Inner subtle emerald highlight strip */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3"
            style={{
              background:
                "linear-gradient(270deg, rgba(15,118,110,0.06), transparent 70%)",
            }}
          />
          <span
            className="ts-icon-chip-gradient shrink-0 relative"
            aria-hidden="true"
            style={{ width: 44, height: 44, borderRadius: 12 }}
          >
            <IconGlyph name="FileSearch" size={20} />
          </span>
          <div className="relative flex-1 min-w-0 flex flex-col gap-1">
            <span className="ts-eyebrow-dot lat" dir="ltr">
              النتيجة · Resulting Artefact
            </span>
            <p className="ts-body text-[var(--ts-text-primary)] leading-relaxed">
              وثيقة متطلبات ونطاق وأولويات وقيود معتمدة — أساس للانتقال إلى
              خطة التنفيذ والجدول التجاري.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
